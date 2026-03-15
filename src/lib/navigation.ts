export type NavLesson = {
  title: string;
  slug: string;
  path: string;
  order: number;
};

export type NavChapter = {
  title: string;
  slug: string;
  path: string;
  lessons: NavLesson[];
  order: number;
};

export type NavCertificate = {
  title: string;
  slug: string;
  path: string;
  chapters: NavChapter[];
  description: string;
};

/** Shape for CourseOverview/ChapterOverview (lesson.slug = "chapterSlug/lessonSlug"). */
export type ChapterForOverview = {
  title: string;
  lessons: { title: string; slug: string }[];
};

/** Convert NavCertificate to the chapter list shape expected by course overview components. */
export function navToChaptersForOverview(
  nav: NavCertificate,
): ChapterForOverview[] {
  return nav.chapters.map((ch) => ({
    title: ch.title,
    lessons: ch.lessons.map((l) => ({
      title: l.title,
      slug: `${ch.slug}/${l.slug}`,
    })),
  }));
}

export type CertRef = {
  title: string;
  slug: string;
  path: string;
  courseLink: string;
  description?: string;
  completed?: boolean;
  certificateLink?: string | null;
  completedDate?: string | null;
  /** From content collection schema */
  platform?: string;
  thumbnail?: string;
  status?: "completed" | "in-progress";
  tags?: string[];
};

export type MasterClassRef = {
  title: string;
  slug: string;
  path: string;
};

/** Minimal shape for certificate collection entries (content collection or legacy). */
export type CertificateEntryLike = {
  id: string;
  data: {
    title: string;
    description?: string;
    order?: number;
    platform?: string;
    status?: "completed" | "in-progress";
    tags?: string[];
    thumbnail?: string;
    courseLink?: string;
    certificateLink?: string | null;
    completedDate?: Date | null;
  };
};

/** Minimal shape for master class collection entries. */
export type MasterClassEntryLike = {
  id: string;
  data: { title: string; description?: string };
};

// ── Path helpers ───────────────────────────────────────────────────────────

function normalizePath(s: string): string {
  return s.replace(/\/$/, "") || "/";
}

/**
 * Returns whether the current path matches the given path (trailing-slash insensitive).
 */
export function isActivePath(currentPath: string, path: string): boolean {
  return normalizePath(currentPath) === normalizePath(path);
}

/**
 * Read expanded chapter slugs from localStorage. Returns [] on SSR or parse error.
 */
export function readStoredExpanded(storageKey: string | null): string[] {
  if (typeof localStorage === "undefined" || !storageKey) return [];
  try {
    return JSON.parse(localStorage.getItem(storageKey) ?? "[]") as string[];
  } catch {
    return [];
  }
}

// ── Certificate navigation (content collection) ──────────────────────────────

const CERT_BASE = "/certificates/";

/**
 * Normalize entry id to a path relative to the certificate collection.
 * Supports both formats: "certSlug/..." or "/certificates/certSlug/...".
 */
function normalizeEntryId(id: string): string {
  return id.startsWith(CERT_BASE) ? id.slice(CERT_BASE.length) : id;
}

/**
 * Build the full navigation tree for a single certificate.
 *
 * URLs produced (matching these patterns):
 *   /certificates
 *   /certificates/{certSlug}
 *   /certificates/{certSlug}/{chapterSlug}
 *   /certificates/{certSlug}/{chapterSlug}/{lessonSlug}
 *
 * Entry IDs may be relative (certSlug/..., certSlug/index) or absolute
 * (/certificates/certSlug/...); both are normalized for matching.
 */
export function buildCertNavigation(
  entries: CertificateEntryLike[],
  certSlug: string,
): NavCertificate | null {
  const prefix = certSlug + "/";
  const certEntries = entries.filter((e) => {
    const id = normalizeEntryId(e.id);
    return id === certSlug || id.startsWith(prefix);
  });

  const rootEntry = certEntries.find((e) => {
    const id = normalizeEntryId(e.id);
    return id === certSlug || id === `${certSlug}/index`;
  });
  if (!rootEntry) return null;

  const chapterSlugs = new Set<string>();

  for (const entry of certEntries) {
    const id = normalizeEntryId(entry.id);
    const rel = id === certSlug ? "index" : id.slice(prefix.length);
    const parts = rel.split("/");

    if (rel === "index") continue;

    if (parts.length >= 1) {
      chapterSlugs.add(parts[0]);
    }
  }

  const chapters: NavChapter[] = [];
  const sortedChapterSlugs = Array.from(chapterSlugs).sort((a, b) =>
    a.localeCompare(b),
  );

  for (
    let chapterIndex = 0;
    chapterIndex < sortedChapterSlugs.length;
    chapterIndex++
  ) {
    const chapterSlug = sortedChapterSlugs[chapterIndex];
    const chapterPrefix = prefix + chapterSlug + "/";
    const chapterIndexEntry = certEntries.find((e) => {
      const id = normalizeEntryId(e.id);
      const chapterSlugOnly = chapterPrefix.slice(0, -1);
      return id === chapterSlugOnly || id === `${chapterSlugOnly}/index`;
    });

    const chapterSlugOnly = chapterPrefix.slice(0, -1);
    const lessonEntries = certEntries.filter((e) => {
      const id = normalizeEntryId(e.id);
      return (
        id.startsWith(chapterPrefix) &&
        id !== chapterSlugOnly &&
        id !== `${chapterSlugOnly}/index`
      );
    });

    const sortedLessonEntries = [...lessonEntries].sort((a, b) => {
      const idA = normalizeEntryId(a.id);
      const idB = normalizeEntryId(b.id);
      return idA.localeCompare(idB);
    });

    const lessons = sortedLessonEntries.map((e, lessonIndex) => {
      const id = normalizeEntryId(e.id);
      const rel = id.slice(chapterPrefix.length);
      const lessonSlug = rel.replace(/\/index$/, "");
      return {
        title: e.data.title,
        slug: lessonSlug,
        path: `${CERT_BASE}${certSlug}/${chapterSlug}/${lessonSlug}/`,
        order: lessonIndex,
      };
    });

    chapters.push({
      title: chapterIndexEntry?.data.title ?? formatSlug(chapterSlug),
      slug: chapterSlug,
      path: `${CERT_BASE}${certSlug}/${chapterSlug}/`,
      lessons,
      order: chapterIndex,
    });
  }

  return {
    title: rootEntry.data.title,
    slug: certSlug,
    path: `${CERT_BASE}${certSlug}/`,
    description: rootEntry.data.description ?? "",
    chapters,
  };
}

/**
 * Get unique course slugs from certificate collection entries.
 * Course root is either id "course-slug" or "course-slug/index".
 */
function getUniqueCourseSlugs(entries: CertificateEntryLike[]): string[] {
  const slugs = new Set<string>();
  for (const e of entries) {
    const id = normalizeEntryId(e.id);
    const firstSegment = id.split("/")[0];
    if (firstSegment) slugs.add(firstSegment);
  }
  return Array.from(slugs);
}

/**
 * Build cert list from content collection entries only (no JSON).
 * Uses root entry (index.mdx or single file at course root) for metadata.
 */
export function buildCertList(entries: CertificateEntryLike[]): CertRef[] {
  const courseSlugs = getUniqueCourseSlugs(entries);
  const result: CertRef[] = [];

  for (const certSlug of courseSlugs) {
    const rootEntry = entries.find((e) => {
      const id = normalizeEntryId(e.id);
      return id === certSlug || id === `${certSlug}/index`;
    });
    if (!rootEntry) continue;

    const d = rootEntry.data;
    const completed =
      d.status === "completed" ||
      (d as { completed?: boolean }).completed === true;
    const rawDate = d.completedDate;
    const completedDate =
      rawDate != null
        ? rawDate instanceof Date
          ? rawDate.toISOString().slice(0, 10)
          : String(rawDate)
        : null;

    result.push({
      title: d.title,
      slug: certSlug,
      courseLink: d.courseLink ?? "",
      path: `${CERT_BASE}${certSlug}/`,
      description: d.description,
      completed,
      certificateLink: d.certificateLink ?? null,
      completedDate,
      platform: d.platform,
      thumbnail: d.thumbnail,
      status: d.status,
      tags: d.tags,
    });
  }

  return result.sort((a, b) => a.title.localeCompare(b.title));
}

function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function buildMasterClassList(
  entries: MasterClassEntryLike[],
): MasterClassRef[] {
  return entries
    .filter((e) => {
      const parts = e.id.split("/");
      return parts.length === 1;
    })
    .map((e) => {
      const masterClassSlug = e.id.split("/")[0];
      return {
        title: e.data.title,
        slug: masterClassSlug,
        path: `/master-classes/${masterClassSlug}/`,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
