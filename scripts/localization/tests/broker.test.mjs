import test from 'node:test';
import assert from 'node:assert/strict';
import { createTranslationBroker } from '../cloudflare-broker.mjs';

test('translation broker verifies RSA signatures and restricts repository, main workflow, audience and expiry', async () => {
  const pair = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const jwk = await crypto.subtle.exportKey('jwk', pair.publicKey); jwk.kid = 'fixture-key'; jwk.use = 'sig';
  const now = Math.floor(Date.now() / 1000);
  const claims = { iss: 'https://token.actions.githubusercontent.com', aud: 'coffeedant-localization',
    repository: 'AlekSpasSEO/coffeedant', repository_id: '1313982354', repository_owner_id: '131162811',
    ref: 'refs/heads/main', workflow_ref: 'AlekSpasSEO/coffeedant/.github/workflows/localize-content.yml@refs/heads/main',
    sub: 'repo:AlekSpasSEO/coffeedant:ref:refs/heads/main', event_name: 'push', exp: now + 300, iat: now, nbf: now - 10 };
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  const token = async (overrides = {}) => {
    const input = `${encode({ alg: 'RS256', kid: 'fixture-key' })}.${encode({ ...claims, ...overrides })}`;
    const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', pair.privateKey, new TextEncoder().encode(input));
    return `${input}.${Buffer.from(signature).toString('base64url')}`;
  };
  let modelCalls = 0;
  const worker = createTranslationBroker(async (url) => {
    assert.equal(url, 'https://token.actions.githubusercontent.com/.well-known/jwks');
    return { ok: true, json: async () => ({ keys: [jwk] }) };
  });
  const env = { AI: { run: async (model, input) => { modelCalls++; assert.equal(model, '@cf/meta/llama-3.3-70b-instruct-fp8-fast'); assert.equal(input.response_format.type, 'json_schema'); return { response: { items: [{ id: 'a', text: 'Testbericht' }] } }; } } };
  const request = (identity) => new Request('https://broker.test/translate', { method: 'POST', headers: { Authorization: `Bearer ${identity}` }, body: JSON.stringify({ instructions: 'Translate', input: JSON.stringify({ mode: 'segments', items: [{ id: 'a', source: 'Review' }] }) }) });
  assert.equal((await worker.fetch(request(await token()), env)).status, 200);
  assert.equal((await worker.fetch(request(await token({ sub: 'repo:AlekSpasSEO@131162811/coffeedant@1313982354:ref:refs/heads/main' })), env)).status, 200);
  for (const overrides of [{ repository_id: 'other' }, { aud: 'other' }, { ref: 'refs/heads/attacker' }, { workflow_ref: 'other' }, { exp: now - 1 }, { event_name: 'pull_request' }, { sub: 'repo:other/project:ref:refs/heads/main' }]) {
    assert.equal((await worker.fetch(request(await token(overrides)), env)).status, 401);
  }
  const authentic = await token();
  const corrupt = authentic.slice(0, -10) + 'AAAAAAAAAA';
  assert.equal((await worker.fetch(request(corrupt), env)).status, 401);
  assert.equal((await worker.fetch(request(''), env)).status, 401);
  assert.equal(modelCalls, 2, 'Unauthorized callers cannot invoke or spend on the model');
  const quota = await worker.fetch(request(await token()), { AI: { run: async () => { throw new Error('you have used up your daily free allocation of 10,000 neurons'); } } });
  assert.equal(quota.status, 429); assert.equal((await quota.json()).code, 'DAILY_QUOTA_EXHAUSTED');
  assert(Number(quota.headers.get('Retry-After')) > 0);
});
