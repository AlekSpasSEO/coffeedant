import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse } from 'parse5';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value;
const nodes = (node) => [node, ...(node.childNodes ?? []).flatMap(nodes)];
const text = (node) => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const hasClass = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name);
const base = process.env.CF_PAGES === '1' ? '/' : '/coffeedant/';
const route = (href) => `/${href.slice(base.length)}`;
const manifest = JSON.parse(read('src/data/review-batch-manifest.json'));
const expected = [...manifest.map((review) => review.slug), '/espresso-machine/breville-bambino/'];
const home = nodes(parse(read('dist/index.html')));
const menu = home.find((node) => attr(node, 'id') === 'brands-menu');
assert.ok(menu, 'homepage has the Brands menu');
const screens = nodes(menu).filter((node) => attr(node, 'data-brand-screen'));
const buttons = nodes(menu).filter((node) => attr(node, 'data-brand-open'));
assert.equal(new Set(buttons.map((node) => attr(node, 'data-brand-open'))).size, screens.length, 'one button per brand');
const links = new Map();
for (const screen of screens) {
  const slug = attr(screen, 'data-brand-screen');
  assert.ok(buttons.some((button) => attr(button, 'aria-controls') === attr(screen, 'id')), `${slug}: button targets its screen`);
  const title = nodes(screen).find((node) => node.tagName === 'h2');
  const reviews = nodes(screen).find((node) => hasClass(node, 'cd-brand-reviews'));
  for (const link of nodes(reviews).filter((node) => node.tagName === 'a')) {
    const href = attr(link, 'href');
    assert.ok(href.startsWith(base), `${href}: deployment base`);
    const path = route(href);
    assert.ok(!links.has(path), `${path}: review appears under exactly one brand`);
    links.set(path, text(title).trim());
  }
}
assert.deepEqual([...links.keys()].sort(), expected.sort(), 'every published equipment review is in the menu');

// Compare menu ownership with the review's independent Product schema. This
// catches category-path grouping and parent-company leakage (e.g. Saeco).
for (const [path, brand] of links) {
  const html = read(`dist${path}index.html`);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => { const schema = JSON.parse(match[1]); return schema['@graph'] ?? [schema]; });
  const product = schemas.find((schema) => [schema['@type']].flat().includes('Product'));
  assert.ok(product, `${path}: product schema`);
  assert.equal(brand.toLowerCase(), (product.brand.name ?? product.brand).toLowerCase(), `${path}: correct brand`);
}

const directory = nodes(parse(read('dist/brands/index.html')));
for (const link of nodes(menu).filter((node) => node.tagName === 'a')) {
  const target = new URL(attr(link, 'href'), 'https://coffeedant.com');
  assert.ok(target.pathname.startsWith(base), `${target}: deployment base`);
  const html = read(`dist/${target.pathname.slice(base.length)}index.html`);
  if (target.hash) assert.ok(nodes(parse(html)).some((node) => attr(node, 'id') === target.hash.slice(1)), `${target}: anchor exists`);
}
for (const screen of screens) {
  const slug = attr(screen, 'data-brand-screen');
  const group = directory.find((node) => attr(node, 'id') === `reviews-${slug}`);
  assert.ok(group, `${slug}: full directory includes brand`);
  const expectedLinks = nodes(screen).filter((node) => node.tagName === 'a' && links.has(route(attr(node, 'href')))).map((node) => attr(node, 'href'));
  assert.deepEqual(nodes(group).filter((node) => node.tagName === 'a').map((node) => attr(node, 'href')), expectedLinks, `${slug}: menu and directory agree`);
}
console.log(`Brand navigation: ${screens.length} brands, ${links.size} unique reviews; ownership, directory parity and all destinations passed.`);
