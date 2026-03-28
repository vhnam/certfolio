'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { Kbd } from '@/components/ui/kbd';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

const DEV_FALLBACK_MESSAGE =
  'Search is not available in dev. Run `pnpm build` then `pnpm preview`.';

// Base URL without trailing slash; avoid '//' in paths (browser treats // as protocol-relative)
const baseUrl =
  typeof import.meta.env !== 'undefined' && import.meta.env.BASE_URL != null
    ? (import.meta.env.BASE_URL as string).replace(/\/$/, '') || ''
    : '';
const pagefindScriptSrc = baseUrl
  ? `${baseUrl}/pagefind/pagefind.js`
  : '/pagefind/pagefind.js';

function formatURL(url: string): string {
  const normalized = url.replace(/\/index\.html$/, '') || '/';
  const base = baseUrl || '/';
  return normalized.startsWith(base)
    ? normalized
    : `${base}${normalized.startsWith('/') ? '' : '/'}${normalized}`;
}

function stripHtmlToText(html: string): string {
  // Pagefind excerpts may include markup for emphasis/highlights.
  // For safety, we render excerpt text only (no HTML rendering).
  if (typeof window === 'undefined') {
    return (
      html
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() || ''
    );
  }

  try {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return (doc.body?.textContent ?? '').replace(/\s+/g, ' ').trim() || '';
  } catch {
    // Fallback: strip tags if DOMParser fails for any reason.
    return (
      html
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() || ''
    );
  }
}

const translations: Record<string, string> = {
  placeholder: 'Search…',
  zero_results: 'No results for "[SEARCH_TERM]"',
  one_result: '1 result',
  many_results: '[COUNT] results',
};

type PagefindResultData = {
  url: string;
  excerpt?: string;
  meta?: { title?: string };
};

type PagefindSearchResult = {
  results: Array<{
    id: string;
    score: number;
    data: () => Promise<PagefindResultData>;
  }>;
};

type PagefindApi = {
  search: (q: string) => Promise<PagefindSearchResult>;
};

const pagefindReadyRef: { current: Promise<PagefindApi> | null } = {
  current: null,
};

function loadPagefind(): Promise<PagefindApi> {
  if (typeof window === 'undefined')
    return Promise.reject(new Error('No window'));
  if (pagefindReadyRef.current) return pagefindReadyRef.current;

  pagefindReadyRef.current = import(
    /* @vite-ignore */
    pagefindScriptSrc
  ).then((mod: unknown) => {
    const api = mod as { search?: PagefindApi['search'] };
    if (typeof api.search !== 'function') {
      throw new Error('Pagefind module loaded but search() missing');
    }
    return { search: api.search };
  });

  return pagefindReadyRef.current;
}

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
}

export function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 120);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<
    Array<{ id: string; title: string; url: string; excerpt?: string }>
  >([]);
  const lastRequestId = useRef(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close when navigating (e.g. user clicked a search result)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('astro:page-load', close);
    return () => window.removeEventListener('astro:page-load', close);
  }, []);

  // Load Pagefind API when dialog opens (production builds only)
  useEffect(() => {
    if (!open) return;
    setError(null);
    setReady(false);
    loadPagefind()
      .then(() => setReady(true))
      .catch(() => {
        setReady(false);
        setError(
          import.meta.env.DEV
            ? DEV_FALLBACK_MESSAGE
            : 'Search index not found. Please run `pnpm build` and try again.'
        );
      });
  }, [open]);

  // Focus search input when dialog opens (desktop only — avoid stealing focus on mobile)
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia('(min-width: 768px)');
    if (!mq.matches) return;
    const id = requestAnimationFrame(() => searchInputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  // Run search on debounced query
  useEffect(() => {
    if (!open) return;
    if (!ready) return;

    const q = debouncedQuery.trim();
    const requestId = ++lastRequestId.current;

    if (!q) {
      setItems([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    loadPagefind()
      .then(async (api) => {
        const res = await api.search(q);
        const top = res.results.slice(0, 20);
        const datas = await Promise.all(
          top.map(async (r) => {
            const d = await r.data();
            const url = formatURL(d.url);
            const title = d.meta?.title?.trim() || url;
            const excerpt = d.excerpt ? stripHtmlToText(d.excerpt) : undefined;
            return {
              id: r.id,
              title,
              url,
              excerpt,
            };
          })
        );
        if (requestId !== lastRequestId.current) return;
        setItems(datas);
      })
      .catch(() => {
        if (requestId !== lastRequestId.current) return;
        setError('Search is temporarily unavailable.');
      })
      .finally(() => {
        if (requestId !== lastRequestId.current) return;
        setLoading(false);
      });
  }, [debouncedQuery, open, ready]);

  const resultLabel = useMemo(() => {
    const trimmed = query.trim();
    if (loading || error || !trimmed) return '';
    const n = items.length;
    if (n === 0)
      return translations.zero_results.replace('[SEARCH_TERM]', trimmed);
    if (n === 1) return translations.one_result;
    return translations.many_results.replace('[COUNT]', String(n));
  }, [error, items.length, loading, query]);

  const commandLabel = useMemo(() => {
    if (loading) return 'Searching…';
    if (error) return error;
    const trimmed = query.trim();
    if (!trimmed) return 'Type to search…';
    if (items.length === 0)
      return translations.zero_results.replace('[SEARCH_TERM]', trimmed);
    return '';
  }, [error, items.length, loading, query]);

  const srStatus = useMemo(() => {
    if (!open) return '';
    if (error) return error;
    if (loading) return 'Searching…';
    const trimmed = query.trim();
    if (!trimmed) return 'Type to search.';
    const n = items.length;
    if (n === 0)
      return translations.zero_results.replace('[SEARCH_TERM]', trimmed);
    if (n === 1) return translations.one_result;
    return translations.many_results.replace('[COUNT]', String(n));
  }, [error, items.length, loading, open, query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant='ghost'
            className='ml-4 text-sm text-muted-foreground hover:text-foreground gap-2 border border-border rounded-lg px-3 py-2'
            aria-label='Search site (⌘K)'
          >
            <IconSearch className='size-4' aria-hidden />
            <span className='hidden md:inline mr-12'>Search</span>
            <Kbd className='hidden md:inline'>⌘K</Kbd>
          </Button>
        }
      />
      <DialogContent
        showCloseButton={false}
        className={cn(
          'pagefind-modal top-[12%] max-w-2xl -translate-y-0 sm:max-w-2xl p-4 md:p-6'
        )}
      >
        <DialogTitle className='sr-only'>Search</DialogTitle>

        <div
          role='status'
          aria-live='polite'
          aria-atomic='true'
          className='sr-only'
        >
          {srStatus}
        </div>

        <Command
          className='pagefind-command bg-transparent'
          shouldFilter={false}
          loop
        >
          <CommandInput
            ref={searchInputRef}
            value={query}
            onValueChange={setQuery}
            placeholder='Search…'
            aria-label='Search'
            className='border-input'
          />

          <div className='mt-3 mb-2 flex items-center justify-between text-xs text-muted-foreground'>
            <span>{resultLabel}</span>
            <span className='hidden sm:inline'>Up/Down to navigate</span>
          </div>

          <CommandList>
            <CommandEmpty>{commandLabel}</CommandEmpty>
            <CommandGroup className='[&>div]:space-y-3'>
              {items.map((it) => (
                <CommandItem
                  key={it.id}
                  value={it.title}
                  asChild
                  onSelect={() => {
                    setOpen(false);
                    window.location.assign(it.url);
                  }}
                >
                  <a
                    href={it.url}
                    className='flex min-w-0 flex-col gap-0 rounded-sm px-2 py-1.5 text-left no-underline hover:bg-transparent focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                    onClick={() => setOpen(false)}
                  >
                    <div className='min-w-0 flex-1'>
                      <div className='flex items-center justify-between gap-3'>
                        <p className='truncate font-semibold text-foreground'>
                          {it.title}
                        </p>
                        <IconArrowRight
                          className='size-4 shrink-0 text-muted-foreground'
                          aria-hidden
                        />
                      </div>
                      {it.excerpt && (
                        <p className='mt-1 line-clamp-2 text-sm leading-relaxed text-foreground/75'>
                          {it.excerpt}
                        </p>
                      )}
                    </div>
                  </a>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
