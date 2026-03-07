import { useState, useEffect } from 'react';
import { IconCertificate, IconChevronLeft } from '@tabler/icons-react';
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
      <nav
        className='flex flex-col gap-0.5 px-3 py-4'
        aria-label='Main navigation'
      >
        <p className='mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground'>
          Certificates
        </p>
        {certificates.map((cert) => (
          <a
            key={cert.slug}
            href={`/certificates/${cert.slug}`}
            className={cn(
              'flex gap-2 justify-start rounded-md px-3 py-2 text-sm hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors',
              isActive(`/certificates/${cert.slug}`)
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/60'
            )}
          >
            <div className='w-3 pt-0.5'>
              {cert.completed ? (
                <IconCertificate size={12} />
              ) : (
                <span className='w-3'>&nbsp;</span>
              )}
            </div>
            <span>{cert.title}</span>
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
            className={cn(
              'flex gap-2 justify-start rounded-md px-3 py-2 text-sm hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors',
              isActive(masterClass.path)
                ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 font-medium'
                : 'text-sidebar-foreground hover:bg-sidebar-accent/60'
            )}
          >
            <div className='w-3 pt-0.5'>
              <IconCertificate size={12} />
            </div>
            <span>{masterClass.title}</span>
          </a>
        ))}
      </nav>
    );
  }

  // ── Certificate context view ──────────────────────────────────────────────
  return (
    <nav
      className='flex flex-col gap-0.5 px-3 py-4'
      aria-label='Main navigation'
    >
      {/* Back link */}
      <a
        href='/certificates/'
        className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6 transition-colors'
      >
        <IconChevronLeft size={14} strokeWidth={2} />
        All Certificates
      </a>

      {/* Certificate title */}
      <div className='mb-6'>
        <a
          href={currentCert.path}
          className={cn(
            'text-base font-semibold text-gray-900 dark:text-gray-100 mb-1',
            isActive(`/certificates/${currentCert.slug}`)
              ? 'text-sidebar-primary'
              : 'text-sidebar-foreground hover:text-sidebar-primary'
          )}
        >
          {currentCert.title}
        </a>
        <p className='text-gray-600 dark:text-gray-400 text-sm'>
          {currentCert.description}
        </p>
      </div>

      {/* Overview */}
      <a
        href={currentCert.path}
        className={`block px-3 py-2 text-sm rounded-md transition-colors ${
          isActive(currentCert.path)
            ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 font-medium'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'
        }`}
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
              <span
                // href={chapter.path}
                // onClick={() =>
                //   setExpandedChapters(
                //     (prev) => new Set([...prev, chapter.slug])
                //   )
                // }
                className={cn(
                  'flex-1 rounded-l-md px-3 py-1.5 text-sm transition-colors',
                  isActive(chapter.slug)
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                    : isChapterActive
                      ? 'text-sidebar-foreground font-medium hover:bg-sidebar-accent/60'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
                )}
              >
                {chapter.title}
              </span>
              <button
                onClick={() => toggleChapter(chapter.slug)}
                aria-label={isExpanded ? 'Collapse chapter' : 'Expand chapter'}
                aria-expanded={isExpanded}
                className={cn(
                  'rounded-r-md p-1.5 pr-2.5 transition-colors',
                  isActive(`/certificates/${currentCert.slug}/${chapter.slug}`)
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground'
                )}
              >
                <IconChevronLeft
                  size={13}
                  strokeWidth={2}
                  className={cn(
                    'transition-transform duration-200',
                    isExpanded && '-rotate-90'
                  )}
                />
              </button>
            </div>

            {/* Lessons */}
            {isExpanded && chapter.lessons.length > 0 && (
              <div className='ml-8 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3'>
                {chapter.lessons.map((lesson) => (
                  <a
                    key={lesson.slug}
                    href={lesson.path}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(`/master-classes/${lesson.slug}`)
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
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
