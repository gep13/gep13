import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import { remarkCallouts } from './src/lib/remark-callouts.mjs';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// gep13.co.uk Astro rebuild ("Build Manifest" design).
// site + trailingSlash chosen to preserve the existing /blog/<slug> URLs.
export default defineConfig({
  site: 'https://www.gep13.co.uk',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Astro 7 changed the compressHTML default from `true` to `'jsx'`, which alters
  // whitespace handling between inline elements. Pin `true` to preserve the exact
  // pre-v7 rendering across the 485 posts (revisit 'jsx' deliberately if wanted).
  compressHTML: true,
  markdown: {
    // remarkDirective parses :::note blocks; remarkCallouts styles them.
    remarkPlugins: [remarkDirective, remarkCallouts],
    // Astro already adds id="" to headings; this appends a clickable anchor
    // (build-time — replaces the old client-side AnchorJS, no JS needed).
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['heading-anchor'], ariaHidden: 'true', tabIndex: -1 },
          content: { type: 'text', value: '#' },
        },
      ],
    ],
  },
});
