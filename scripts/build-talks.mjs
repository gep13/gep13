// Parse the gep13-talks/public-speaking README table into structured talk
// data for the Talks page. Source of truth: src/data/public-speaking.md
// (a committed copy of that repo's generated README).
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = join(HERE, '..', 'src', 'data');

const md = await readFile(join(DATA, 'public-speaking.md'), 'utf8');

const linkText = (cell) => {
  const m = cell.match(/\[([^\]]+)\]\(([^)]+)\)/);
  return m ? { text: m[1], url: m[2] } : null;
};
const flagOf = (cell) => {
  const m = cell.match(/(\p{Regional_Indicator}\p{Regional_Indicator})/u);
  return m ? m[1] : '';
};
const pad = (s) => s.padStart(2, '0');

const talks = [];
for (const line of md.split('\n')) {
  const row = line.match(/^\|\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*\|(.*)\|\s*$/);
  if (!row) continue;
  const [, y, mo, d, rest] = row;
  const cells = rest.split('|').map((c) => c.trim());
  // cells: [event, title, slides, recording, location, language]
  const [event, titleCell, slidesCell, recCell, locCell, lang] = cells;
  const title = linkText(titleCell)?.text ?? titleCell;
  talks.push({
    date: `${y}-${pad(mo)}-${pad(d)}`,
    year: Number(y),
    event: event.replace(/,\s*$/, ''),
    title,
    slides: linkText(slidesCell)?.url ?? null,
    recording: linkText(recCell)?.url ?? null,
    flag: flagOf(locCell),
    language: lang || 'English',
  });
}

talks.sort((a, b) => (a.date < b.date ? 1 : -1));
await writeFile(join(DATA, 'talks.json'), JSON.stringify(talks, null, 2) + '\n', 'utf8');
console.log(`Parsed ${talks.length} talks -> src/data/talks.json (${talks[talks.length - 1].year}–${talks[0].year})`);
