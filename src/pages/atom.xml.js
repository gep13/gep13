import { getCollection } from 'astro:content';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET(context) {
  const site = context.site?.toString().replace(/\/$/, '') ?? 'https://www.gep13.co.uk';
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  ).slice(0, 30);
  const updated = posts[0]?.data.pubDate.toISOString() ?? new Date(0).toISOString();

  const entries = posts.map((p) => {
    const url = `${site}/blog/${p.id}/`;
    return `  <entry>
    <title>${esc(p.data.title)}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <updated>${p.data.pubDate.toISOString()}</updated>
${p.data.tags.map((t) => `    <category term="${esc(t)}"/>`).join('\n')}
  </entry>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Gary Ewan Park</title>
  <subtitle>Ramblings and ponderings of a Microsoft fan boy.</subtitle>
  <link href="${site}/atom.xml" rel="self"/>
  <link href="${site}/"/>
  <id>${site}/</id>
  <updated>${updated}</updated>
  <author><name>Gary Ewan Park</name></author>
${entries}
</feed>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
}
