import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts. The glob loader derives each entry id from the filename
// (no extension) — e.g. `archery-in-calgary.md` -> id `archery-in-calgary` —
// which becomes the /blog/<slug> route, preserving the existing Wyam URLs.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Migration rewrites Wyam's `Published: D/M/YYYY` into an ISO date.
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
