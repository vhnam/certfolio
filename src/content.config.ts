import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const certificate = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/certificates",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const masterClass = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/master-classes",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { certificate, masterClass };
