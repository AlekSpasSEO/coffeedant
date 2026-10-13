import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { root, readJson, loadCache, walk, attr, detach, appendHtml, parseHtml, serializeHtml, translatedText } from './core.mjs';
import { buildRegional } from './build.mjs';
import { createReviewWorker } from './review-worker.mjs';
import { collectSource } from './source.mjs';

const edition = process.argv[2];
const sourcePath = process.argv[3];
if (!edition || !sourcePath) throw new Error('Usage: review.mjs <edition> <canonical-source-path>');
const output = await buildRegional(edition, { preview: true, reviewPages: [sourcePath] });
const manifest = await readJson(path.join(output, 'localization-manifest.json'));
const page = manifest.pages[0];
const document = parseHtml(await readFile(path.join(output, `${page.path.slice(1)}index.html`), 'utf8'));
// Keep preview traffic out of analytics, including when using a future live host.
for (const node of walk(document)) if (attr(node, 'id') === 'coffeedant-ga4-bootstrap') detach(node);
if (edition === 'nl') {
  const body = walk(document).find((node) => node.tagName === 'body');
  appendHtml(body, '<aside data-translation-review lang="nl-NL" style="padding:16px 20px;background:#fff0a8;border-bottom:2px solid #222"><strong>Nederlands vertaalvoorbeeld</strong> · Deze pagina is volledig vertaald. De rest van de Nederlandse editie is nog in voorbereiding; andere navigatielinks openen voorlopig de Engelse bron. Prijzen in dollars en temperaturen in °F zijn oorspronkelijke Amerikaanse brongegevens, geen Nederlands aanbod. Analytics is uitgeschakeld voor dit voorbeeld.</aside>');
  const notice = body.childNodes.pop(); body.childNodes.unshift(notice);
}
// The reviewed page's self-links stay on this preview host.
for (const node of walk(document)) if (node.tagName === 'a' && attr(node, 'href')?.startsWith(`https://${manifest.host}${page.path}`)) {
  node.attrs.find(({ name }) => name === 'href').value = attr(node, 'href').replace(`https://${manifest.host}`, '');
}
const assets = {};
for (const file of await readdir(path.join(root, 'dist/_astro'))) if (/\.(js|css)$/.test(file)) assets[`/_astro/${file}`] = {
  body: await readFile(path.join(root, 'dist/_astro', file), 'utf8'),
  type: file.endsWith('.css') ? 'text/css; charset=utf-8' : 'application/javascript; charset=utf-8',
};
const imageTypes = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.ico': 'image/x-icon' };
for (const node of walk(document)) {
  const image = node.tagName === 'img' ? attr(node, 'src') : node.tagName === 'link' && ['icon', 'apple-touch-icon'].includes(attr(node, 'rel')) ? attr(node, 'href') : null;
  if (!image?.startsWith('/') || image.startsWith('//') || assets[image]) continue;
  const type = imageTypes[path.extname(image)];
  const assetFile = path.resolve(root, 'dist', image.slice(1));
  if (!type || !assetFile.startsWith(`${path.join(root, 'dist')}${path.sep}`)) throw new Error('Invalid local review image');
  assets[image] = { type, encoding: 'base64', body: (await readFile(assetFile)).toString('base64') };
}
const pages = { [page.path]: serializeHtml(document) };
const worker = `const pages=${JSON.stringify(pages)};const assets=${JSON.stringify(assets)};const manifest=${JSON.stringify(manifest)};export default (${createReviewWorker.toString()})(pages,assets,manifest);\n`;
await writeFile(path.join(root, `.localization/${edition}-review-worker.mjs`), worker);
await writeFile(path.join(output, `${page.path.slice(1)}index.html`), pages[page.path]);
const cache = await loadCache(edition);
const source = await collectSource();
const selected = source.pages.find(({ sourcePath: route }) => route === sourcePath);
const ids = new Set(selected.segments);
for (const segment of source.segments.filter(({ id, kind }) => ids.has(id) || kind === 'interface')) translatedText(cache, segment.source, segment.kind);
console.log(`Review module ready: ${worker.length} characters, ${manifest.pages.length} complete page, ${Object.keys(assets).length} bundled JS/CSS assets; no analytics or production release.`);
