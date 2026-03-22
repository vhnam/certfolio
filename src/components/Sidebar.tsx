import {
  IconCertificate,
  IconChevronLeft,
  IconProgress,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import type {
  NavCertificate,
  NavChapter,
  CertRef,
  MasterClassRef,
} from '@/lib/navigation';
import { isActivePath } from '@/lib/navigation';
import { useExpandedChapters } from '@/hooks/useExpandedChapters';

// ── Types ───────────────────────────────────────────────────────────────────

interface SidebarProps {
  certificates: CertRef[];
  currentCert: NavCertificate | null;
  currentPath: string;
  masterClasses: MasterClassRef[];
}

// ── Shared styles ───────────────────────────────────────────────────────────

const navClass = 'flex flex-col gap-0.5 px-3 py-4';
const sectionTitleClass =
  'mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground';
const listLinkBaseClass =
  'flex gap-2 justify-start rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[color:var(--color-cta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar';
const listLinkInactiveClass =
  'text-sidebar-foreground hover:bg-sidebar-accent/60';
const listLinkAccentActiveClass =
  'bg-sidebar-accent text-sidebar-accent-foreground';
const listLinkHighlightActiveClass =
  'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 font-medium';
const blockLinkBaseClass =
  'block px-3 py-2 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar';
const blockLinkInactiveClass =
  'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900';
const lessonLinkInactiveClass =
  'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900';

// ── Subcomponents ───────────────────────────────────────────────────────────

function SidebarSectionTitle({ children }: { children: React.ReactNode }) {
  return <p className={sectionTitleClass}>{children}</p>;
}

interface SidebarListLinkProps {
  href: string;
  isActive: boolean;
  activeVariant?: 'accent' | 'highlight';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function SidebarListLink({
  href,
  isActive,
  activeVariant = 'accent',
  icon,
  children,
}: SidebarListLinkProps) {
  const activeClass =
    activeVariant === 'highlight'
      ? listLinkHighlightActiveClass
      : listLinkAccentActiveClass;
  return (
    <a
      href={href}
      className={cn(
        listLinkBaseClass,
        isActive ? activeClass : listLinkInactiveClass
      )}
    >
      {icon != null ? <div className='w-3 pt-0.5'>{icon}</div> : null}
      <span>{children}</span>
    </a>
  );
}

interface SidebarBlockLinkProps {
  href: string;
  isActive: boolean;
  variant?: 'overview' | 'lesson';
  children: React.ReactNode;
}

function SidebarBlockLink({
  href,
  isActive,
  variant = 'overview',
  children,
}: SidebarBlockLinkProps) {
  const inactiveClass =
    variant === 'lesson' ? lessonLinkInactiveClass : blockLinkInactiveClass;
  return (
    <a
      href={href}
      className={cn(
        blockLinkBaseClass,
        isActive ? listLinkHighlightActiveClass : inactiveClass
      )}
    >
      {children}
    </a>
  );
}

// ── Global view (certificates + master classes) ─────────────────────────────

interface SidebarGlobalViewProps {
  certificates: CertRef[];
  masterClasses: MasterClassRef[];
  isActive: (path: string) => boolean;
}

function SidebarGlobalView({
  certificates,
  masterClasses,
  isActive,
}: SidebarGlobalViewProps) {
  return (
    <nav className={navClass} aria-label='Certificate and course navigation'>
      <SidebarSectionTitle>Certificates</SidebarSectionTitle>
      {certificates.map((cert) => (
        <SidebarListLink
          key={cert.slug}
          href={`/certificates/${cert.slug}`}
          isActive={isActive(`/certificates/${cert.slug}`)}
          icon={
            cert.completed ? (
              <IconCertificate
                size={12}
                className='text-[color:var(--color-cta)]'
                aria-hidden
              />
            ) : (
              <IconProgress
                size={12}
                className='animate-spin motion-reduce:animate-none text-gray-500 dark:text-gray-400'
                aria-hidden
              />
            )
          }
        >
          {cert.title}
        </SidebarListLink>
      ))}
      <span className='my-3' aria-hidden />
      <SidebarSectionTitle>Master Classes</SidebarSectionTitle>
      {masterClasses.map((masterClass) => (
        <SidebarListLink
          key={masterClass.slug}
          href={masterClass.path}
          isActive={isActive(masterClass.path)}
          activeVariant='highlight'
          icon={
            <IconCertificate
              size={12}
              className='text-[color:var(--color-cta)]'
              aria-hidden
            />
          }
        >
          {masterClass.title}
        </SidebarListLink>
      ))}
    </nav>
  );
}

// ── Chapter (collapsible + lessons) ─────────────────────────────────────────

interface SidebarChapterProps {
  chapter: NavChapter;
  currentPath: string;
  isExpanded: boolean;
  onToggle: (open: boolean) => void;
  isActive: (path: string) => boolean;
}

function SidebarChapter({
  chapter,
  currentPath,
  isExpanded,
  onToggle,
  isActive,
}: SidebarChapterProps) {
  const isChapterActive = currentPath.startsWith(chapter.path);

  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle}>
      <CollapsibleTrigger
        className={cn(
          'flex w-full cursor-pointer items-center rounded-md text-left transition-colors',
          isChapterActive &&
            !isActive(chapter.path) &&
            'text-sidebar-foreground',
          isChapterActive
            ? 'bg-sidebar-accent/60 text-sidebar-foreground font-medium hover:bg-sidebar-accent'
            : 'text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground'
        )}
        aria-label={
          isExpanded ? `Collapse ${chapter.title}` : `Expand ${chapter.title}`
        }
      >
        <span className='flex-1 rounded-l-md px-3 py-1.5 text-sm'>
          {chapter.title}
        </span>
        <span className='rounded-r-md p-1.5 pr-2.5 text-muted-foreground'>
          <IconChevronLeft
            size={13}
            strokeWidth={2}
            aria-hidden
            className={cn(
              'transition-transform duration-200',
              isExpanded && '-rotate-90'
            )}
          />
        </span>
      </CollapsibleTrigger>
      {chapter.lessons.length > 0 && (
        <CollapsibleContent>
          <div className='ml-8 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3'>
            {chapter.lessons.map((lesson) => (
              <SidebarBlockLink
                key={lesson.slug}
                href={lesson.path}
                isActive={isActive(lesson.path)}
                variant='lesson'
              >
                {lesson.title}
              </SidebarBlockLink>
            ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

// ── Certificate context view ───────────────────────────────────────────────

interface SidebarCertViewProps {
  currentCert: NavCertificate;
  currentPath: string;
  expandedChapters: Set<string>;
  setChapterOpen: (slug: string, open: boolean) => void;
  isActive: (path: string) => boolean;
}

function SidebarCertView({
  currentCert,
  currentPath,
  expandedChapters,
  setChapterOpen,
  isActive,
}: SidebarCertViewProps) {
  return (
    <nav className={navClass} aria-label='Certificate and course navigation'>
      <a
        href='/certificates/'
        className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar rounded-md px-2 py-1'
      >
        <IconChevronLeft size={14} strokeWidth={2} />
        All Certificates
      </a>

      <div className='mb-6'>
        <a
          href={currentCert.path}
          className={cn(
            'text-base font-semibold text-gray-900 dark:text-gray-100 mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar rounded-md px-2 py-1 inline-block',
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

      <SidebarBlockLink
        href={currentCert.path}
        isActive={isActive(currentCert.path)}
      >
        Overview
      </SidebarBlockLink>

      {currentCert.chapters.length > 0 && (
        <div className='my-2 h-px bg-sidebar-border' />
      )}

      {currentCert.chapters.map((chapter) => {
        const isExpanded = expandedChapters.has(chapter.slug);
        return (
          <SidebarChapter
            key={chapter.slug}
            chapter={chapter}
            currentPath={currentPath}
            isExpanded={isExpanded}
            onToggle={(open) => setChapterOpen(chapter.slug, open)}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export function Sidebar({
  certificates,
  currentCert,
  currentPath,
  masterClasses,
}: SidebarProps) {
  const storageKey = currentCert ? `nav-expanded-${currentCert.slug}` : null;
  const [expandedChapters, setChapterOpen] = useExpandedChapters(
    storageKey,
    currentCert,
    currentPath
  );
  const isActive = (path: string) => isActivePath(currentPath, path);

  if (!currentCert) {
    return (
      <SidebarGlobalView
        certificates={certificates}
        masterClasses={masterClasses}
        isActive={isActive}
      />
    );
  }

  return (
    <SidebarCertView
      currentCert={currentCert}
      currentPath={currentPath}
      expandedChapters={expandedChapters}
      setChapterOpen={setChapterOpen}
      isActive={isActive}
    />
  );
}
