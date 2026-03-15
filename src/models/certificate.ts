import { z } from "astro/zod";

/** Lesson shape for course/chapter overview (slug = "chapterSlug/lessonSlug" when in overview list). */
export const lessonSchema = z.object({
  title: z.string(),
  slug: z.string(),
});

export type Lesson = z.infer<typeof lessonSchema>;

/** Chapter shape for course overview / chapter overview. */
export const chapterSchema = z.object({
  title: z.string(),
  lessons: z.array(lessonSchema),
});

export type Chapter = z.infer<typeof chapterSchema>;

/** Full certificate view (e.g. for future use). */
export type Certificate = {
  title: string;
  description: string;
  courseLink: string;
  completed: boolean;
  certificateLink: string | null;
  completedDate: string | null;
  chapters: Chapter[];
};
