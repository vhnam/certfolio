import { useState, useEffect, useRef } from 'react';
import {
  IconMenu2,
  IconX,
  IconChevronDown,
  IconChevronLeft,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import type { NavCertificate, CertRef } from '@/lib/navigation';

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface MobileDrawerProps {
  certificates: CertRef[];
  currentCert: NavCertificate | null;
  currentPath: string;
}

export function MobileDrawer({
  certificates,
  currentCert,
  currentPath,
}: MobileDrawerProps) {
  const storageKey = currentCert ? `nav-expanded-${currentCert.slug}` : null;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(() => {
    const stored: string[] =
      typeof localStorage !== 'undefined' && storageKey
        ? (JSON.parse(localStorage.getItem(storageKey) ?? '[]') as string[])
        : [];

    const result = new Set<string>(stored);

    if (currentCert) {
      const active = currentCert.chapters.find((ch) =>
        currentPath.startsWith(ch.path)
      );
      if (active) result.add(active.slug);
    }

    return result;
  });

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus management: move focus into dialog when open, return to trigger when closed
  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(FOCUSABLE);
    const first = focusables?.[0];
    if (first) {
      const id = requestAnimationFrame(() => first.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [isOpen]);

  const closeDrawer = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeDrawer();
      }
      // Focus trap: keep Tab within dialog
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.hasAttribute('aria-hidden'));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  function toggleChapter(slug: string) {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      if (storageKey) {
        localStorage.setItem(storageKey, JSON.stringify([...next]));
      }
      return next;
    });
  }

  const isActive = (path: string) =>
    currentPath === path ||
    currentPath === path.replace(/\/$/, '') ||
    currentPath + '/' === path;

  const linkClass = (path: string) =>
    cn(
      'block rounded-md px-3 py-2.5 text-sm transition-colors',
      isActive(path)
        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
        : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
    );

  return (
    <>
      {/* Hamburger button: min 44px touch target (WCAG 2.5.8) */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        aria-label='Open navigation menu'
        aria-expanded={isOpen}
        className='rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground hover:bg-accent/50 transition-colors lg:hidden'
      >
        <IconMenu2 size={20} strokeWidth={1.75} aria-hidden />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm'
          aria-hidden='true'
          onClick={closeDrawer}
        />
      )}

      {/* Drawer panel */}
      <div
        ref={panelRef}
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-72 overflow-y-auto overscroll-contain bg-sidebar shadow-xl ease-in-out',
          'transition-transform duration-300 motion-reduce:duration-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-modal='true'
        role='dialog'
        aria-label='Navigation'
      >
        {/* Drawer header */}
        <div className='flex items-center justify-between border-b border-sidebar-border px-6 py-3'>
          <a href='/' className='text-sm font-semibold text-sidebar-foreground'>
            Certfolio
          </a>
          <button
            onClick={closeDrawer}
            aria-label='Close menu'
            className='rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors'
          >
            <IconX size={18} strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        {/* Navigation content */}
        <nav
          className='flex flex-col gap-0.5 px-3 py-4'
          aria-label='Main navigation'
        >
          {currentCert ? (
            <>
              {/* Back link */}
              <a
                href='/certificates/'
                className='mb-4 flex items-center gap-1.5 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground'
                onClick={closeDrawer}
              >
                <IconChevronLeft size={14} strokeWidth={2} />
                All Certificates
              </a>

              {/* Certificate label */}
              <p className='mb-1 truncate px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground'>
                {currentCert.title}
              </p>

              {/* Overview */}
              <a
                href={currentCert.path}
                className={linkClass(currentCert.path)}
                onClick={closeDrawer}
              >
                Overview
              </a>

              {currentCert.chapters.length > 0 && (
                <div className='my-2 h-px bg-sidebar-border' />
              )}

              {/* Chapters */}
              {currentCert.chapters.map((chapter) => {
                const isExpanded = expandedChapters.has(chapter.slug);

                return (
                  <div key={chapter.slug}>
                    <div className='flex items-center rounded-md'>
                      <a
                        href={chapter.path}
                        onClick={() => {
                          setExpandedChapters(
                            (prev) => new Set([...prev, chapter.slug])
                          );
                          closeDrawer();
                        }}
                        className={cn(
                          'flex-1 rounded-l-md px-3 py-2.5 text-sm transition-colors',
                          isActive(chapter.path)
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                            : 'text-sidebar-foreground hover:bg-sidebar-accent/60'
                        )}
                      >
                        {chapter.title}
                      </a>
                      <button
                        onClick={() => toggleChapter(chapter.slug)}
                        aria-label={
                          isExpanded ? 'Collapse chapter' : 'Expand chapter'
                        }
                        aria-expanded={isExpanded}
                        className={cn(
                          'rounded-r-md p-2.5 pr-3 transition-colors',
                          isActive(chapter.path)
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                            : 'text-muted-foreground hover:bg-sidebar-accent/60'
                        )}
                      >
                        <IconChevronDown
                          size={14}
                          strokeWidth={2}
                          className={cn(
                            'transition-transform duration-200',
                            isExpanded && 'rotate-180'
                          )}
                        />
                      </button>
                    </div>

                    {isExpanded && chapter.lessons.length > 0 && (
                      <div className='ml-3 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-sidebar-border pl-3'>
                        {chapter.lessons.map((lesson) => (
                          <a
                            key={lesson.slug}
                            href={lesson.path}
                            onClick={closeDrawer}
                            className={cn(
                              'block rounded-md px-2 py-2 text-[13px] leading-snug transition-colors',
                              isActive(lesson.path)
                                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                                : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground'
                            )}
                          >
                            {lesson.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <p className='mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground'>
                Certificates
              </p>
              {certificates.map((cert) => (
                <a
                  key={cert.slug}
                  href={cert.path}
                  className={linkClass(cert.path)}
                  onClick={closeDrawer}
                >
                  {cert.title}
                </a>
              ))}
            </>
          )}
        </nav>
      </div>
    </>
  );
}
