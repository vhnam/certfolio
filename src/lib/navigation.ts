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
  order: number;
  lessons: NavLesson[];
};

export type NavCertificate = {
  title: string;
  slug: string;
  path: string;
  chapters: NavChapter[];
  hasKeyLearnings: boolean;
  hasReflection: boolean;
};

export type CertRef = {
  title: string;
  slug: string;
  path: string;
};

export type MasterClassRef = {
  title: string;
  slug: string;
  path: string;
};

type Entry = {
  id: string;
  data: { title: string; description?: string; order?: number };
};

/**
 * Build the full navigation tree for a single certificate.
 *
 * Entry ID format (from glob loader, no extension):
 *   "google-ux-design/index"
 *   "google-ux-design/chapter-1/index"
 *   "google-ux-design/chapter-1/lesson-1"
 *   "google-ux-design/key-learnings"
 *   "google-ux-design/reflection"
 */
export function buildCertNavigation(
  entries: Entry[],
  certSlug: string,
): NavCertificate | null {
  const prefix = certSlug + "/";
  const certEntries = entries.filter((e) => e.id.startsWith(prefix));

  const rootEntry = certEntries.find((e) => e.id === prefix + "index");
  if (!rootEntry) return null;

  let hasKeyLearnings = false;
  let hasReflection = false;
  const chapterSlugs = new Set<string>();

  for (const entry of certEntries) {
    const rel = entry.id.slice(prefix.length);
    const parts = rel.split("/");

    if (rel === "index") continue;
    if (rel === "key-learnings") {
      hasKeyLearnings = true;
      continue;
    }
    if (rel === "reflection") {
      hasReflection = true;
      continue;
    }

    // Has a sub-path → it's inside a chapter directory
    if (parts.length >= 2) {
      chapterSlugs.add(parts[0]);
    }
  }

  const chapters: NavChapter[] = [];

  for (const chapterSlug of chapterSlugs) {
    const chapterPrefix = prefix + chapterSlug + "/";
    const chapterIndex = certEntries.find(
      (e) => e.id === chapterPrefix + "index",
    );

    const lessons = certEntries
      .filter((e) => e.id.startsWith(chapterPrefix) && !e.id.endsWith("/index"))
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
      .map((e) => {
        const lessonSlug = e.id.slice(chapterPrefix.length);
        return {
          title: e.data.title,
          slug: lessonSlug,
          path: `/certificates/${certSlug}/${chapterSlug}/${lessonSlug}/`,
          order: e.data.order ?? 99,
        };
      });

    const chapterOrder =
      chapterIndex?.data.order ?? extractNumberFromSlug(chapterSlug);

    chapters.push({
      title: chapterIndex?.data.title ?? formatSlug(chapterSlug),
      slug: chapterSlug,
      path: `/certificates/${certSlug}/${chapterSlug}/`,
      order: chapterOrder,
      lessons,
    });
  }

  chapters.sort((a, b) => a.order - b.order);

  return {
    title: rootEntry.data.title,
    slug: certSlug,
    path: `/certificates/${certSlug}/`,
    chapters,
    hasKeyLearnings,
    hasReflection,
  };
}

export function buildCertList(entries: Entry[]): CertRef[] {
  return entries
    .filter((e) => {
      const parts = e.id.split("/");
      return parts.length === 1;
    })
    .map((e) => {
      const certSlug = e.id.split("/")[0];
      return {
        title: e.data.title,
        slug: certSlug,
        path: `/certificates/${certSlug}/`,
      };
    });
}

/**
 * Build breadcrumb items from the current path and the resolved certificate nav.
 *
 * Returns an empty array when outside a certificate route.
 */
export function buildBreadcrumbs(
  currentPath: string,
  currentCert: NavCertificate | null,
): Array<{ label: string; href?: string }> {
  const normalized = currentPath.replace(/\/$/, "");
  const parts = normalized.split("/").filter(Boolean);
  // parts[0] = 'certificates', parts[1] = certSlug, parts[2] = chapter/key-learnings/reflection, parts[3] = lesson

  if (parts[0] !== "certificates") return [];

  const crumbs: Array<{ label: string; href?: string }> = [
    { label: "Certificates", href: "/certificates/" },
  ];

  if (parts.length < 2 || !currentCert) return crumbs;

  // On the certificate overview page
  if (parts.length === 2) {
    crumbs.push({ label: currentCert.title });
    return crumbs;
  }

  crumbs.push({ label: currentCert.title, href: currentCert.path });

  const thirdPart = parts[2];

  if (thirdPart === "key-learnings") {
    crumbs.push({ label: "Key Learnings" });
    return crumbs;
  }

  if (thirdPart === "reflection") {
    crumbs.push({ label: "Reflection" });
    return crumbs;
  }

  const chapter = currentCert.chapters.find((ch) => ch.slug === thirdPart);
  if (!chapter) return crumbs;

  if (parts.length === 3) {
    crumbs.push({ label: chapter.title });
    return crumbs;
  }

  crumbs.push({ label: chapter.title, href: chapter.path });

  const lessonSlug = parts[3];
  const lesson = chapter.lessons.find((l) => l.slug === lessonSlug);
  if (lesson) crumbs.push({ label: lesson.title });

  return crumbs;
}

function extractNumberFromSlug(slug: string): number {
  const match = slug.match(/(\d+)$/);
  return match ? parseInt(match[1], 10) : 99;
}

function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function buildMasterClassList(entries: Entry[]): MasterClassRef[] {
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
    });
}
