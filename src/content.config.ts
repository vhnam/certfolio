import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const article = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
})

const certificate = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certificates' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		order: z.number().optional(),
	})
})

export const collections = { article, certificate }
