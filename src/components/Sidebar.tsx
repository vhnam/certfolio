import { useState, useEffect } from 'react';
import { IconChevronDown, IconChevronLeft } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import type { NavCertificate, CertRef, MasterClassRef } from '@/lib/navigation';

interface SidebarProps {
  certificates: CertRef[];
  currentCert: NavCertificate | null;
  currentPath: string;
  masterClasses: MasterClassRef[];
}

export function Sidebar({
  certificates,
  currentCert,
  currentPath,
  masterClasses,
}: SidebarProps) {
  const storageKey = currentCert ? `nav-expanded-${currentCert.slug}` : null;

  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(() => {
    const stored: string[] =
      typeof localStorage !== 'undefined' && storageKey
        ? (JSON.parse(localStorage.getItem(storageKey) ?? '[]') as string[])
        : [];

    const result = new Set<string>(stored);

    // Always expand the chapter that contains the current page
    if (currentCert) {
      const active = currentCert.chapters.find((ch) =>
        currentPath.startsWith(ch.path)
      );
      if (active) result.add(active.slug);
    }

    return result;
  });

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify([...expandedChapters]));
    }
  }, [expandedChapters, storageKey]);

  function toggleChapter(slug: string) {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  const isActive = (path: string) =>
    currentPath === path ||
    currentPath === path.replace(/\/$/, '') ||
    currentPath + '/' === path;

  // ── Global view ──────────────────────────────────────────────────────────
  if (!currentCert) {
    return (
      <nav className='flex flex-col gap-0.5 px-3 py-4'>
        <p className='mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground'>
          Certificates
        </p>
        {certificates.map((cert) => (
          <a
            key={cert.slug}
            href={cert.path}
            className={cn(
              'rounded-md px-3 py-2 text-sm transition-colors',
              isActive(cert.path)
                ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
            )}
          >
            {cert.title}
          </a>
        ))}
        <span className='my-3'></span>
        <p className='mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground'>
          Master Classes
        </p>
        {masterClasses.map((masterClass) => (
          <a
            key={masterClass.slug}
            href={masterClass.path}
            className='rounded-md px-3 py-1.5 text-sm transition-colors'
          >
            {masterClass.title}
          </a>
        ))}
      </nav>
    );
  }

  // ── Certificate context view ──────────────────────────────────────────────
  return (
    <nav className='flex flex-col gap-0.5 px-3 py-4'>
      {/* Back link */}
      <a
        href='/certificates/'
        className='mb-4 flex items-center gap-1.5 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground'
      >
        <IconChevronLeft size={14} strokeWidth={2} />
        All Certificates
      </a>

      {/* Certificate title */}
      <a
        href={currentCert.path}
        className={cn(
          'mb-1 block truncate px-3 text-[13px] font-semibold leading-tight transition-colors',
          isActive(currentCert.path)
            ? 'text-sidebar-primary'
            : 'text-sidebar-foreground hover:text-sidebar-primary'
        )}
      >
        {currentCert.title}
      </a>

      {/* Overview */}
      <a
        href={currentCert.path}
        className={cn(
          'rounded-md px-3 py-1.5 text-sm transition-colors',
          isActive(currentCert.path)
            ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
            : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
        )}
      >
        Overview
      </a>

      {/* Chapters */}
      {currentCert.chapters.length > 0 && (
        <div className='my-2 h-px bg-sidebar-border' />
      )}

      {currentCert.chapters.map((chapter) => {
        const isExpanded = expandedChapters.has(chapter.slug);
        const isChapterActive = currentPath.startsWith(chapter.path);

        return (
          <div key={chapter.slug}>
            {/* Chapter row */}
            <div
              className={cn(
                'flex items-center rounded-md transition-colors',
                isChapterActive && !isActive(chapter.path)
                  ? 'text-sidebar-foreground'
                  : ''
              )}
            >
              <a
                href={chapter.path}
                onClick={() =>
                  setExpandedChapters(
                    (prev) => new Set([...prev, chapter.slug])
                  )
                }
                className={cn(
                  'flex-1 rounded-l-md px-3 py-1.5 text-sm transition-colors',
                  isActive(chapter.path)
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                    : isChapterActive
                      ? 'text-sidebar-foreground font-medium hover:bg-sidebar-accent/60'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
                )}
              >
                {chapter.title}
              </a>
              <button
                onClick={() => toggleChapter(chapter.slug)}
                aria-label={isExpanded ? 'Collapse chapter' : 'Expand chapter'}
                className={cn(
                  'rounded-r-md p-1.5 pr-2.5 transition-colors',
                  isActive(chapter.path)
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground'
                )}
              >
                <IconChevronDown
                  size={13}
                  strokeWidth={2}
                  className={cn(
                    'transition-transform duration-200',
                    isExpanded && 'rotate-180'
                  )}
                />
              </button>
            </div>

            {/* Lessons */}
            {isExpanded && chapter.lessons.length > 0 && (
              <div className='ml-3 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-sidebar-border pl-3'>
                {chapter.lessons.map((lesson) => (
                  <a
                    key={lesson.slug}
                    href={lesson.path}
                    className={cn(
                      'rounded-md px-2 py-1.5 text-[13px] leading-snug transition-colors',
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
    </nav>
  );
}
