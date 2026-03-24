import type {
  CertificateEntryData,
  MasterClassEntryData,
} from "@/content.config";
import type { Chapter } from "@/models/certificate";

type NavLesson = {
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

/** Shape for _order.json: defines chapter and lesson order per certificate. */
type OrderJson = {
  chapters: {
    title: string;
    lessons: { title: string; slug: string }[];
  }[];
};

const orderModules = import.meta.glob<{ default: OrderJson }>(
  "../content/certificates/*/_order.json",
);

/**
 * Load _order.json for a certificate by slug. Returns null if no _order.json exists.
 */
export async function getCertOrder(
  certSlug: string,
): Promise<OrderJson | null> {
  const key = `../content/certificates/${certSlug}/_order.json`;
  const load = orderModules[key];
  if (!load) return null;
  const mod = await load();
  return mod.default ?? null;
}

/** Convert NavCertificate to Chapter[] for CourseOverview/ChapterOverview (lesson.slug = "chapterSlug/lessonSlug"). */
export function navToChaptersForOverview(nav: NavCertificate): Chapter[] {
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
  speakers?: { name: string; title: string }[];
};

/** Certificate collection entry shape (id from loader + data from schema). */
type CertificateEntryLike = {
  id: string;
  data: CertificateEntryData;
};

/** Master class collection entry shape (id from loader + data from schema). */
type MasterClassEntryLike = {
  id: string;
  data: MasterClassEntryData;
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
 *
 * When order (_order.json shape) is provided, chapters and lessons follow
 * that order; any chapters/lessons not listed appear afterward in discovery order.
 */
export function buildCertNavigation(
  entries: CertificateEntryLike[],
  certSlug: string,
  order: OrderJson | null = null,
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

  const chapterOrderSlugs: string[] = order
    ? order.chapters
        .map((ch) => {
          const firstSlug = ch.lessons[0]?.slug;
          return firstSlug
            ? normalizeSlugForOrder(firstSlug.split("/")[0] ?? "")
            : "";
        })
        .filter(Boolean)
    : [];
  const discoveredChapterSlugs = Array.from(chapterSlugs);
  const sortedChapterSlugs =
    chapterOrderSlugs.length > 0
      ? [
          ...chapterOrderSlugs
            .map((orderedSlug) =>
              discoveredChapterSlugs.find(
                (slug) => normalizeSlugForOrder(slug) === orderedSlug,
              ),
            )
            .filter((slug): slug is string => Boolean(slug)),
          ...discoveredChapterSlugs.filter(
            (slug) =>
              !chapterOrderSlugs.includes(normalizeSlugForOrder(slug)),
          ),
        ]
      : discoveredChapterSlugs;

  const chapters: NavChapter[] = [];

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

    const orderChapter = order?.chapters.find(
      (ch) =>
        normalizeSlugForOrder(ch.lessons[0]?.slug.split("/")[0] ?? "") ===
        normalizeSlugForOrder(chapterSlug),
    );
    const lessonOrderSlugs: string[] = orderChapter
      ? orderChapter.lessons.map((l) => {
          const parts = l.slug.split("/");
          return parts.length > 1 ? parts.slice(1).join("/") : l.slug;
        })
      : [];
    const lessonOrderKeys = lessonOrderSlugs.map(normalizeLessonSlugForOrder);
    const sortedLessonEntries =
      lessonOrderKeys.length > 0
        ? [
            ...lessonOrderKeys
              .map((orderedKey) =>
                lessonEntries.find((entry) => {
                  const id = normalizeEntryId(entry.id);
                  const rel = id
                    .slice(chapterPrefix.length)
                    .replace(/\/index$/, "");
                  return normalizeLessonSlugForOrder(rel) === orderedKey;
                }),
              )
              .filter(
                (entry): entry is CertificateEntryLike => Boolean(entry),
              ),
            ...lessonEntries.filter((entry) => {
              const id = normalizeEntryId(entry.id);
              const rel = id
                .slice(chapterPrefix.length)
                .replace(/\/index$/, "");
              return !lessonOrderKeys.includes(normalizeLessonSlugForOrder(rel));
            }),
          ]
        : lessonEntries;

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

/** Normalize slug for comparison (e.g. "optimizing your code" vs "optimizing-your-code"). */
function normalizeSlugForOrder(slug: string): string {
  return slug.replace(/\s+/g, "-").toLowerCase();
}

function normalizeLessonSlugForOrder(slug: string): string {
  const parts = slug.split("/").filter(Boolean);
  const leaf = parts.length > 0 ? parts[parts.length - 1] : slug;
  return normalizeSlugForOrder(leaf);
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
        speakers: e.data.speakers,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
