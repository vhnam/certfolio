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
};

export type CertRef = {
  title: string;
  slug: string;
  courseLink: string;
  description?: string;
  completed?: boolean;
  certificateLink?: string | null;
  completedDate?: string | null;
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
  entries: Entry[],
  certSlug: string,
): NavCertificate | null {
  const prefix = certSlug + "/";
  const certEntries = entries.filter((e) => {
    const id = normalizeEntryId(e.id);
    return id === certSlug || id.startsWith(prefix);
  });

  const rootEntry = certEntries.find((e) => {
    const id = normalizeEntryId(e.id);
    return id === certSlug || id === prefix + "index";
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
      return (
        id === chapterPrefix.slice(0, -1) || id === chapterPrefix + "index"
      );
    });

    const lessonEntries = certEntries.filter((e) => {
      const id = normalizeEntryId(e.id);
      return (
        id.startsWith(chapterPrefix) &&
        id !== chapterPrefix.slice(0, -1) &&
        id !== chapterPrefix + "index"
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
    chapters,
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

// ── Data from /data/*.json ───────────────────────────────────────────────────

export type CertificatesListEntry = {
  title: string;
  description?: string;
  slug: string;
  link?: string;
  completed?: boolean;
  certificateLink?: string | null;
  completedDate?: string | null;
};

export type CertificatesJson = { certificates: CertificatesListEntry[] };

export type CertDataChapter = {
  title: string;
  lessons: Array<{ title: string; slug: string }>;
};

export type CertDataJson = {
  title: string;
  description?: string;
  chapters: CertDataChapter[];
};

/** Build cert list from data/certificates.json (requires slug on each entry). */
export function buildCertListFromData(data: CertificatesJson): CertRef[] {
  return data.certificates.map((c) => ({
    title: c.title,
    slug: c.slug,
    path: `${CERT_BASE}${c.slug}/`,
    description: c.description,
    completed: c.completed,
    certificateLink: c.certificateLink,
    completedDate: c.completedDate,
  }));
}

/**
 * Build cert navigation from data/certificates/{certSlug}.json.
 * Lesson slug in JSON is "chapterSlug/lessonSlug".
 */
export function buildCertNavigationFromData(
  certSlug: string,
  data: CertDataJson,
): NavCertificate {
  const chapters: NavChapter[] = data.chapters.map((ch, chapterIndex) => {
    const chapterSlug =
      ch.lessons[0]?.slug.split("/")[0] ??
      ch.title.toLowerCase().replace(/\s+/g, "-");
    const lessons: NavLesson[] = ch.lessons.map((lesson, lessonIndex) => {
      const lessonSlug = (() => {
        if (lesson.slug.includes("/")) {
          const part = lesson.slug.split("/").filter(Boolean).pop();
          return part ?? lesson.slug;
        }
        return lesson.slug;
      })();
      return {
        title: lesson.title,
        slug: lessonSlug,
        path: `${CERT_BASE}${certSlug}/${chapterSlug}/${lessonSlug}/`,
        order: lessonIndex,
      };
    });
    return {
      title: ch.title,
      slug: chapterSlug,
      path: `${CERT_BASE}${certSlug}/${chapterSlug}/`,
      lessons,
      order: chapterIndex,
    };
  });
  return {
    title: data.title,
    slug: certSlug,
    path: `${CERT_BASE}${certSlug}/`,
    chapters,
  };
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
