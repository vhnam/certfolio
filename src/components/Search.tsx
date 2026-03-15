'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconSearch } from '@tabler/icons-react';
import { Kbd } from '@/components/ui/kbd';

const SEARCH_DIALOG_ID = 'search-dialog-root';

// Base URL without trailing slash; avoid '//' in paths (browser treats // as protocol-relative)
const baseUrl =
  typeof import.meta.env !== 'undefined' && import.meta.env.BASE_URL != null
    ? (import.meta.env.BASE_URL as string).replace(/\/$/, '') || ''
    : '';
const bundlePathRelative = baseUrl ? `${baseUrl}/pagefind/` : '/pagefind/';

/** Absolute bundle URL so fragment fetches use the same origin and path (avoids Failed to fetch) */
function getBundlePath(): string {
  if (typeof window === 'undefined') return bundlePathRelative;
  const origin = window.location.origin;
  const base = baseUrl ? `${baseUrl}/` : '/';
  return `${origin}${base}pagefind/`;
}

function formatURL(url: string): string {
  const normalized = url.replace(/\/index\.html$/, '') || '/';
  const base = baseUrl || '/';
  return normalized.startsWith(base)
    ? normalized
    : `${base}${normalized.startsWith('/') ? '' : '/'}${normalized}`;
}

const translations: Record<string, string> = {
  placeholder: 'Search…',
  zero_results: 'No results for "[SEARCH_TERM]"',
  one_result: '1 result',
  many_results: '[COUNT] results',
};

// Cache the PagefindUI class so we only import once; we create a new instance each time the dialog opens
// because the dialog content unmounts when closed, leaving the previous instance attached to a detached node.
const pagefindUIClassRef: {
  current: (new (opts: Record<string, unknown>) => void) | null;
} = { current: null };

export function Search() {
  const [open, setOpen] = useState(false);

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

  // Init PageFind UI when dialog opens: import once, create new instance each open (dialog content unmounts when closed)
  useEffect(() => {
    if (!open) return;
    if (import.meta.env.DEV) return;
    const onIdle =
      typeof window.requestIdleCallback !== 'undefined'
        ? window.requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 1);
    onIdle(async () => {
      try {
        if (!pagefindUIClassRef.current) {
          // @ts-expect-error — Missing types for @pagefind/default-ui package.
          const mod = await import('@pagefind/default-ui');
          pagefindUIClassRef.current = mod.PagefindUI;
        }
        const PagefindUI = pagefindUIClassRef.current;
        if (!PagefindUI) return;
        new PagefindUI({
          element: `#${SEARCH_DIALOG_ID}`,
          baseUrl: baseUrl || '/',
          bundlePath: getBundlePath(),
          showImages: false,
          translations,
          showSubResults: true,
          resetStyles: false,
          autofocus: true,
          processResult: (result: {
            url: string;
            sub_results: Array<{ url: string }>;
          }) => {
            result.url = formatURL(result.url);
            result.sub_results = result.sub_results.map((sub) => {
              sub.url = formatURL(sub.url);
              return sub;
            });
            return result;
          },
        });
      } catch {
        // PageFind bundle not available (e.g. first load before build)
      }
    });
  }, [open]);

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
          'top-[15%] max-w-2xl -translate-y-0 sm:max-w-2xl p-4 md:p-6'
        )}
      >
        <DialogTitle className='sr-only'>Search</DialogTitle>
        <div id={SEARCH_DIALOG_ID} className='min-h-[12rem] [&+*]:mt-0' />
        <p className='mt-2 text-center text-xs text-muted-foreground'>
          <Kbd>Esc</Kbd> to close
        </p>
      </DialogContent>
    </Dialog>
  );
}
