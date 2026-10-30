import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { legacyAnchorCategory } from '../src/lib/review-anchors.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-batch-manifest.json'), 'utf8'));
const modernPaths = new Set(manifest.map(review => review.slug));
modernPaths.add('/espresso-machine/breville-bambino/');
const pages = ['pages-a.json', 'pages-b.json'].flatMap(name => JSON.parse(fs.readFileSync(path.join(root, 'src/data', name), 'utf8')));
const aliases = {};
let sourcePages = 0;
let summaryRoots = 0;
for (const page of pages.filter(page => modernPaths.has(page.path))) {
  sourcePages++;
  const entries = {};
  const productSlug = page.path.split('/').filter(Boolean).at(-1);
  for (const match of page.html.matchAll(/<(section|h[1-6]|article|div|details)\b[^>]*\sid\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
    const [, tag, id] = match;
    // Dialogs, TOC controls and image attachment IDs are not article sections.
    if (!/^[a-z0-9][a-z0-9_-]*$/i.test(id) || /^(?:cd-|cf-|amazon|amzn|toc-|modal-|sticky|comment|wp-|elementor|menu-|tab-)/i.test(id)
      || /(?:-image|-iframe|-modal|-video-title|-verdict-note)$/.test(id)) continue;
    const following = page.html.slice(match.index + match[0].length, match.index + match[0].length + 600);
    const heading = (/^h/i.test(tag) ? following.split(/<\/h[1-6]>/i)[0] : following.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i)?.[1] ?? '')
      .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const classes = (match[0].match(/\sclass\s*=\s*(["'])([\s\S]*?)\1/i)?.[2] ?? '').split(/\s+/);
    const isProductSummary = classes.includes('cd-merged-box') || /\sitemtype\s*=\s*["']https?:\/\/schema\.org\/Product["']/i.test(match[0]);
    const category = /verdict|conclusion/i.test(id) ? 'verdict'
      : isProductSummary || id === productSlug || id === `${productSlug}-box`
        ? 'summary' : legacyAnchorCategory(id, heading);
    if (isProductSummary && category === 'summary') summaryRoots++;
    if (category) entries[id] = category;
  }
  if (Object.keys(entries).length) aliases[page.path] = Object.fromEntries(Object.entries(entries).sort(([a], [b]) => a.localeCompare(b)));
}
const output = `${JSON.stringify(aliases, null, 2)}\n`;
const target = path.join(root, 'src/data/legacy-review-anchors.json');
if (process.argv.includes('--check')) {
  if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== output) throw new Error('Legacy review anchor manifest needs regeneration.');
} else fs.writeFileSync(target, output);
console.log(`${Object.values(aliases).reduce((sum, row) => sum + Object.keys(row).length, 0)} historical content anchors across ${sourcePages} saved modern review pages, including ${summaryRoots} product summary roots.`);
