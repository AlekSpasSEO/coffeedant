import assert from 'node:assert/strict';
import { parse } from 'parse5';

// Read public HTML only; this audit never runs tags or sends GA4 events.
const origin = new URL(process.argv[2] || 'https://coffeedant.com/').origin;
const walk = (node) => [node, ...(node.childNodes || []).flatMap(walk)];
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value;
async function get(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${url}: HTTP ${response.status}`);
  return response.text();
}
const index = await get(`${origin}/sitemap.xml`);
const locations = (xml) => [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((match) => match[1]);
const maps = index.includes('<sitemapindex') ? locations(index) : [`${origin}/sitemap.xml`];
const urls = new Set();
for (const map of maps) for (const url of locations(await get(map))) {
  assert.equal(new URL(url).origin, origin, `Unexpected sitemap origin: ${url}`);
  urls.add(url);
}
const failures = [];
let checked = 0;
let reference;
const queue = [...urls];
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const url = queue.shift();
    try {
      const nodes = walk(parse(await get(url)));
      const head = nodes.find((node) => node.tagName === 'head');
      const tags = nodes.filter((node) => node.tagName === 'script' && attr(node, 'id') === 'coffeedant-ga4-bootstrap');
      assert.equal(tags.length, 1, 'Expected exactly one GA4 bootstrap');
      assert(walk(head).includes(tags[0]), 'GA4 bootstrap must be in the head');
      assert.equal(attr(tags[0], 'data-ga4-id'), 'G-270R14ZHVX');
      const script = tags[0].childNodes.map((node) => node.value || '').join('');
      reference ??= script;
      assert.equal(script, reference, 'Shared GA4 code differs between pages');
      assert.equal(nodes.filter((node) => attr(node, 'data-analytics-consent') !== undefined).length, 1, 'Consent controls missing or duplicated');
      assert(nodes.some((node) => attr(node, 'data-analytics-preferences') !== undefined), 'Cookie preferences missing');
      assert.equal(nodes.filter((node) => node.tagName === 'script' && /googletagmanager|google-analytics/.test(attr(node, 'src') || '')).length, 0, 'Unexpected second Google tag');
      checked++;
    } catch (error) { failures.push({ url, error: error.message }); }
  }
}));
console.log(JSON.stringify({ origin, sitemapUrls: urls.size, checked, failures }, null, 2));
if (failures.length) process.exitCode = 1;
