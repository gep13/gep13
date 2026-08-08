import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

// URL-safe slug for a tag. Handles slashes ("ci/cd assets"), spaces,
// punctuation, and case so tag routes are single-segment and tidy.
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Group posts by tag slug. Tags that slugify the same (e.g. "Cake"/"cake")
// merge; the most common original spelling becomes the display label.
export function groupByTag(posts: Post[]) {
  const map = new Map<string, { label: string; labels: Map<string, number>; posts: Post[] }>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      const slug = tagSlug(t);
      if (!slug) continue;
      if (!map.has(slug)) map.set(slug, { label: t, labels: new Map(), posts: [] });
      const g = map.get(slug)!;
      g.posts.push(p);
      g.labels.set(t, (g.labels.get(t) ?? 0) + 1);
    }
  }
  // pick the most frequent original spelling as the label
  for (const g of map.values()) {
    g.label = [...g.labels.entries()].sort((a, b) => b[1] - a[1])[0][0];
  }
  return map;
}
