import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Platform enum for certificates and master classes
const platformEnum = z.enum(["IxDF", "Coursera"]);

const statusEnum = z.enum(["completed", "in-progress"]);

/**
 * Certificates collection: folder-based structure.
 * - Course root: certificates/[course-slug]/index.mdx — holds course metadata (platform,  thumbnail, status, tags).
 * - Chapters/lessons: certificates/[course-slug]/[chapter-slug]/[lesson].md(x) — title, optional description, optional order.
 * Entry id from glob is the path (e.g. "course-slug/index", "course-slug/chapter/lesson").
 */
const certificates = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/certificates",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // ── Course-level (set on index.mdx only)
    platform: platformEnum.optional(),
    /** Path to image (relative to file or URL). Use Astro's Image component with import for optimization. */
    thumbnail: z.string().optional(),
    status: statusEnum.optional(),
    tags: z.array(z.string()).optional(),
    courseLink: z.url().optional().or(z.literal("")),
    certificateLink: z.url().optional().nullable(),
    completedDate: z.coerce.date().optional().nullable(),
    // ── Lesson/chapter ordering
    order: z.number().int().min(0).optional(),
  }),
});

/**
 * Master classes collection: flat list of MDX files.
 * Each file can have the same metadata as a certificate (platform,  thumbnail, status, tags).
 */
const masterClasses = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/master-classes",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: platformEnum.optional(),
    thumbnail: z.string().optional(),
    status: statusEnum.optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  certificate: certificates,
  masterClass: masterClasses,
};
