import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { analyticsConsentResponse } from '../../src/lib/analytics-consent-policy.mjs';
import { onRequest } from '../../functions/api/analytics-consent.js';
import { createRegionalRouter } from '../localization/router.mjs';

const request = (country, options = {}) => {
  const value = new Request(options.url || 'https://coffeedant.com/api/analytics-consent', options);
  if (country !== undefined) Object.defineProperty(value, 'cf', { value: { country } });
  return value;
};

test('only known US traffic is eligible; other and unknown countries stay opt-in', async () => {
  for (const country of ['US', 'GB', 'DE', 'CH', 'MK', 'CA', 'AU', 'BR', 'XX', 'T1', '', undefined]) {
    const response = onRequest({ request: request(country) });
    assert.deepEqual(await response.json(), { mode: country === 'US' ? 'opt-out' : 'opt-in', browserOptOut: false, policyVersion: '2026-10-15' });
    assert.match(response.headers.get('Cache-Control'), /no-store/);
    assert.equal(response.headers.get('CDN-Cache-Control'), 'no-store');
    assert.match(response.headers.get('X-Robots-Tag'), /noindex/);
    assert.equal(response.headers.get('Set-Cookie'), null);
  }
});

test('browser opt-outs win and callers cannot spoof regional eligibility', async () => {
  for (const header of ['Sec-GPC', 'DNT']) {
    const response = analyticsConsentResponse(request('US', { headers: { [header]: '1' } }));
    assert.deepEqual(await response.json(), { mode: 'opt-in', browserOptOut: true, policyVersion: '2026-10-15' });
  }
  const spoof = request(undefined, { url: 'https://coffeedant.com/api/analytics-consent?country=US&mode=opt-out', headers: { 'CF-IPCountry': 'US', 'Accept-Language': 'en-US' } });
  assert.equal((await analyticsConsentResponse(spoof).json()).mode, 'opt-in');
});

test('HEAD is empty, unsupported methods fail and only the endpoint invokes Pages Functions', async () => {
  assert.equal(await analyticsConsentResponse(request('US', { method: 'HEAD' })).text(), '');
  const response = analyticsConsentResponse(request('US', { method: 'POST' }));
  assert.equal(response.status, 405);
  assert.equal(response.headers.get('Allow'), 'GET, HEAD');
  assert.deepEqual(JSON.parse(fs.readFileSync(new URL('../../public/_routes.json', import.meta.url))), {
    version: 1, include: ['/api/analytics-consent', '/api/analytics-consent/'], exclude: [],
  });
});

test('regional Worker uses the same decision before static assets or redirects', async () => {
  // Exercise the serialized functions used in the deployed advanced-mode Worker.
  const policy = Function(`return (${analyticsConsentResponse.toString()})`)();
  const routerFactory = Function(`return (${createRegionalRouter.toString()})`)();
  const router = routerFactory({ 'nl.coffeedant.com': 'nl' }, {}, policy);
  const env = { ASSETS: { fetch() { throw new Error('Consent endpoint must not serve a cached asset'); } } };
  for (const country of ['US', 'NL', undefined]) {
    const response = await router.fetch(request(country, { url: 'https://nl.coffeedant.com/api/analytics-consent/' }), env);
    assert.equal((await response.json()).mode, country === 'US' ? 'opt-out' : 'opt-in');
    assert.match(response.headers.get('Cache-Control'), /no-store/);
  }
  assert.equal((await router.fetch(request('US', { url: 'https://unknown.example/api/analytics-consent' }), env)).status, 404);
});
