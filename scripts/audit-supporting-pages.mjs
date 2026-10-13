#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const migration = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-migration-batches.json'), 'utf8'));
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const buyingGuides = new Set([
  '/espresso-machine/beginners/', '/espresso-machine/built-in-grinder/', '/espresso-machine/cheap-budget-under-500/',
  '/espresso-machine/prosumer-under-1000/', '/espresso-machine/single-boiler/', '/espresso-machine/small/',
  '/espresso-machine/superautomatic/', '/espresso-machine/without-grinder/',
]);
const productPattern = /^\/(?:espresso-machine|coffee-machine|grinder)\/[^/]+\/$/;
const sitemapRoutes = new Set([...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => {
  const pathname = new URL(match[1]).pathname.replace(/^\/coffeedant/, '') || '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}));
const routes = [...migration.batches.flat().filter((route) => (
  !(productPattern.test(route) && !buyingGuides.has(route))
  && !buyingGuides.has(route)
  && !/^\/blog\/[^/]+\/$/.test(route)
)), '/coffee-beans/'];

const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value ?? '';
const descendants = (node, output = []) => {
  output.push(node);
  for (const child of node?.childNodes ?? []) descendants(child, output);
  return output;
};
const outputFor = (route) => route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html');
const routeFromHref = (href) => {
  if (!href || href.startsWith('#') || /^(?:mailto|tel|javascript):/i.test(href)) return null;
  let url;
  try { url = new URL(href, 'https://coffeedant.com/'); } catch { return null; }
  if (!['coffeedant.com', 'alekspasseo.github.io'].includes(url.hostname)) return null;
  let pathname = decodeURIComponent(url.pathname).replace(/^\/coffeedant/, '') || '/';
  if (/\.[a-z0-9]{2,5}$/i.test(pathname)) return null;
  if (!pathname.endsWith('/')) pathname += '/';
  return pathname;
};

let failed = false;
console.log(`Supporting-page audit (${routes.length} routes)`);
for (const route of routes) {
  const file = outputFor(route);
  const issues = [];
  if (!fs.existsSync(file)) {
    issues.push('missing-output');
  } else {
    const document = parse(fs.readFileSync(file, 'utf8'));
    const nodes = descendants(document, []);
    const main = nodes.find((node) => node.tagName === 'main');
    const title = nodes.find((node) => node.tagName === 'title');
    const description = nodes.find((node) => node.tagName === 'meta' && attr(node, 'name').toLowerCase() === 'description');
    const canonical = nodes.find((node) => node.tagName === 'link' && attr(node, 'rel').toLowerCase().split(/\s+/).includes('canonical'));
    const h1s = (main ? descendants(main, []) : []).filter((node) => node.tagName === 'h1');
    const titleText = (title?.childNodes ?? []).map((node) => node.value ?? '').join('').trim();
    if (!main) issues.push('missing-main');
    if (h1s.length !== 1) issues.push(`h1-count-${h1s.length}`);
    if (!titleText) issues.push('missing-title');
    if (attr(description, 'content').trim().length < 20) issues.push('missing-description');
    if (!canonical || !attr(canonical, 'href')) issues.push('missing-canonical');
    else if (routeFromHref(attr(canonical, 'href')) !== route) issues.push('canonical-route-mismatch');

    const ids = nodes.map((node) => attr(node, 'id')).filter(Boolean);
    if (new Set(ids).size !== ids.length) issues.push('duplicate-id');
    const brokenLinks = [...new Set(nodes.filter((node) => node.tagName === 'a').map((node) => routeFromHref(attr(node, 'href'))).filter(Boolean))]
      .filter((target) => !sitemapRoutes.has(target));
    if (brokenLinks.length) issues.push(`broken-internal:${brokenLinks.join(',')}`);
  }
  const state = issues.length ? 'FAIL' : 'PASS';
  console.log(`${state} ${route}${issues.length ? ` ${issues.join(' ')}` : ''}`);
  if (issues.length) failed = true;
}
console.log(`Result: ${failed ? 'FAIL' : 'PASS'}`);
if (failed) process.exitCode = 1;

