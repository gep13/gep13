import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
  return rss({
    title: 'Gary Ewan Park',
    description: 'Ramblings and ponderings of a Microsoft fan boy.',
    site: context.site,
    items: posts.slice(0, 30).map((p) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: '<language>en-gb</language>',
  });
}
