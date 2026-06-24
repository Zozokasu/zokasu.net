import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.preprocess((value) => (value === '' ? undefined : value), image().optional()),
		}),
});

const vrsns = defineCollection({
	loader: glob({ base: './src/content/vrsns', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.preprocess((value) => (value === '' ? undefined : value), image().optional()),
			category: z.enum(['Resonite-Tech', 'Resonite-Life', 'VRChat', 'Other']).optional(),
		}),
});

export const collections = { blog, vrsns };
