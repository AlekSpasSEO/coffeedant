import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const files = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? files(file) : file.endsWith('.html') ? [file] : [];
});
const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value ?? '';
const descendants = (node) => [node, ...(node.childNodes ?? []).flatMap(descendants)];
const redirects = new Map(fs.readFileSync(path.join(dist, '_redirects'), 'utf8').split(/\r?\n/)
  .filter((line) => line && !line.startsWith('#')).map((line) => line.trim().split(/\s+/).slice(0, 2)));
const routeFile = (pathname) => path.join(dist, decodeURIComponent(pathname).replace(/^\//, ''), path.extname(pathname) ? '' : 'index.html');
const missingLinks = new Map();
const missingAssets = new Map();
const noDescription = [];
const noCanonical = [];
const noFavicon = [];
const unresolvedShortcodes = [];
const schemaTypes = new Set();
let pages = 0;
for (const file of files(dist)) {
  pages++;
  const route = '/' + path.relative(dist, file).split(path.sep).join('/').replace(/index\.html$/, '');
  const html = fs.readFileSync(file, 'utf8');
  const nodes = descendants(parse(html));
  if (!nodes.some((n) => n.tagName === 'meta' && attr(n, 'name') === 'description' && attr(n, 'content'))) noDescription.push(route);
  if (!nodes.some((n) => n.tagName === 'link' && attr(n, 'rel') === 'canonical')) noCanonical.push(route);
  if (!nodes.some((n) => n.tagName === 'link' && attr(n, 'rel') === 'icon')) noFavicon.push(route);
  if (/\[(?:forminator_form|contact-form-7|wpforms|gravityform)\b/.test(html)) unresolvedShortcodes.push(route);
  for (const node of nodes) {
    if (node.tagName === 'script' && attr(node, 'type') === 'application/ld+json') {
      const text = (node.childNodes ?? []).map((n) => n.value ?? '').join('');
      [...text.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].forEach((match) => schemaTypes.add(match[1]));
    }
    const value = node.tagName === 'a' ? attr(node, 'href') : ['img', 'script', 'source'].includes(node.tagName) ? attr(node, 'src') : node.tagName === 'link' && ['stylesheet', 'icon'].includes(attr(node, 'rel')) ? attr(node, 'href') : '';
    if (!value || /^(?:mailto:|tel:|data:|#|javascript:)/i.test(value)) continue;
    let url;
    try { url = new URL(value, 'https://coffeedant.com' + route); } catch { continue; }
    if (url.hostname !== 'coffeedant.com') continue;
    const target = redirects.get(url.pathname) ?? url.pathname;
    if (/^https?:\/\//.test(target)) continue;
    if (fs.existsSync(routeFile(target))) continue;
    const collection = node.tagName === 'a' ? missingLinks : missingAssets;
    const examples = collection.get(url.pathname) ?? new Set();
    examples.add(route);
    collection.set(url.pathname, examples);
  }
}
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const staleSitemapUrls = urls.filter((value) => !fs.existsSync(routeFile(new URL(value).pathname)));
const report = {
  htmlPages: pages, sitemapUrls: urls.length, duplicateSitemapUrls: urls.length - new Set(urls).size,
  staleSitemapUrls, redirectRules: redirects.size, noDescription, noCanonical, noFavicon, unresolvedShortcodes,
  schemaTypes: [...schemaTypes].sort(),
  missingInternalLinks: [...missingLinks].map(([target, routes]) => ({ target, pages: [...routes] })),
  missingLocalAssets: [...missingAssets].map(([target, routes]) => ({ target, pages: [...routes] })),
};
console.log(JSON.stringify(report, null, 2));
