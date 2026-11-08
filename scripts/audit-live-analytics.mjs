import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parse } from 'parse5';
import { analyticsConsentResponse } from '../src/lib/analytics-consent-policy.mjs';

// Read public HTML only; this audit never runs tags or sends GA4 events.
const { editions } = JSON.parse(await readFile(new URL('../localization/editions.json', import.meta.url), 'utf8'));
const requested = process.argv.slice(2);
const origins = [...new Set((requested.length ? requested : editions.filter(({ published }) => published)
  .map(({ host }) => `https://${host}`)).map((url) => new URL(url).origin))];
const { policyVersion } = await analyticsConsentResponse(new Request('https://coffeedant.com/api/analytics-consent')).json();
const walk = (node) => [node, ...(node.childNodes || []).flatMap(walk)];
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value;
async function get(url, headers) {
  const response = await fetch(url, { headers, redirect: 'error', signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${url}: HTTP ${response.status}`);
  return response;
}
const locations = (xml) => [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((match) => match[1]);

async function checkPolicy(origin, header) {
  const response = await get(`${origin}/api/analytics-consent`, header && { [header]: '1' });
  assert.match(response.headers.get('content-type') || '', /^application\/json\b/);
  assert.match(response.headers.get('cache-control') || '', /\bno-store\b/);
  const policy = await response.json();
  assert.equal(policy.policyVersion, policyVersion, 'Deployed consent endpoint uses a different policy version');
  assert.equal(policy.browserOptOut, Boolean(header));
  assert(['opt-in', 'opt-out'].includes(policy.mode), 'Unknown consent mode');
  if (header) assert.equal(policy.mode, 'opt-in', `${header} must block the automatic default`);
}

async function auditOrigin(origin) {
  const failures = [];
  for (const header of [undefined, 'Sec-GPC', 'DNT']) {
    try { await checkPolicy(origin, header); }
    catch (error) { failures.push({ url: `${origin}/api/analytics-consent`, header, error: error.message }); }
  }

  const sitemap = `${origin}/sitemap.xml`;
  const index = await (await get(sitemap)).text();
  const maps = index.includes('<sitemapindex') ? locations(index) : [sitemap];
  const urls = new Set();
  for (const map of maps) {
    assert.equal(new URL(map).origin, origin, `Unexpected sitemap origin: ${map}`);
    const xml = map === sitemap ? index : await (await get(map)).text();
    for (const url of locations(xml)) {
      assert.equal(new URL(url).origin, origin, `Unexpected page origin: ${url}`);
      urls.add(url);
    }
  }
  assert(urls.size > 0, `${sitemap} lists no pages`);

  let checked = 0;
  let reference;
  const queue = [...urls];
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      try {
        const nodes = walk(parse(await (await get(url)).text()));
        const head = nodes.find((node) => node.tagName === 'head');
        const tags = nodes.filter((node) => node.tagName === 'script' && attr(node, 'id') === 'coffeedant-ga4-bootstrap');
        assert.equal(tags.length, 1, 'Expected exactly one GA4 bootstrap');
        assert(walk(head).includes(tags[0]), 'GA4 bootstrap must be in the head');
        assert.equal(attr(tags[0], 'data-ga4-id'), 'G-270R14ZHVX');
        assert.equal(attr(tags[0], 'data-google-tag-id'), 'GT-KT5DM5FP');
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
  return { origin, sitemapUrls: urls.size, checked, failures };
}

const results = await Promise.all(origins.map(async (origin) => {
  try { return await auditOrigin(origin); }
  catch (error) { return { origin, failures: [{ error: error.message }] }; }
}));
console.log(JSON.stringify(results.length === 1 ? results[0] : results, null, 2));
if (results.some(({ failures }) => failures.length)) process.exitCode = 1;
