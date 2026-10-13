// Deployed through the existing Cloudflare connection. No long-lived API token
// is copied into GitHub: only this repository's main localization job may call it.
export function createTranslationBroker(fetchKeys = fetch) {
  const issuer = 'https://token.actions.githubusercontent.com';
  const audience = 'coffeedant-localization';
  const repository = 'AlekSpasSEO/coffeedant';
  const workflow = `${repository}/.github/workflows/localize-content.yml@refs/heads/main`;
  let keys = []; let fetchedAt = 0;
  const bytes = (value) => Uint8Array.from(atob(value.replaceAll('-', '+').replaceAll('_', '/')), (character) => character.charCodeAt(0));
  const decoded = (value) => JSON.parse(new TextDecoder().decode(bytes(value)));
  const authorized = async (token) => {
    try {
      if (!token || token.length > 20000) return false;
      const parts = token.split('.'); if (parts.length !== 3) return false;
      const header = decoded(parts[0]); const claims = decoded(parts[1]);
      const now = Math.floor(Date.now() / 1000);
      const allowedSubjects = [
        `repo:${repository}:ref:refs/heads/main`,
        'repo:AlekSpasSEO@131162811/coffeedant@1313982354:ref:refs/heads/main',
      ];
      if (header.alg !== 'RS256' || typeof header.kid !== 'string' || claims.iss !== issuer || claims.aud !== audience
        || claims.repository !== repository || String(claims.repository_id) !== '1313982354'
        || String(claims.repository_owner_id) !== '131162811' || claims.ref !== 'refs/heads/main'
        || claims.workflow_ref !== workflow || !allowedSubjects.includes(claims.sub)
        || !['push', 'schedule', 'workflow_dispatch'].includes(claims.event_name)
        || !Number.isFinite(claims.exp) || !Number.isFinite(claims.iat) || !Number.isFinite(claims.nbf)
        || claims.exp <= now || claims.exp > now + 600 || claims.iat > now + 30 || claims.nbf > now + 30
        || now - claims.iat > 600) return false;
      if (!keys.length || now - fetchedAt > 3600 || (!keys.some(({ kid }) => kid === header.kid) && now - fetchedAt > 60)) {
        const response = await fetchKeys(`${issuer}/.well-known/jwks`, { signal: AbortSignal.timeout(10000) });
        if (!response.ok) return false;
        keys = (await response.json()).keys; fetchedAt = now;
      }
      const jwk = keys.find(({ kid, kty, use }) => kid === header.kid && kty === 'RSA' && (!use || use === 'sig'));
      if (!jwk) return false;
      const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
      return crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, bytes(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
    } catch { return false; }
  };
  const json = (value, status = 200) => Response.json(value, { status, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
  return {
    async fetch(request, env) {
      const url = new URL(request.url);
      if (request.method === 'GET' && url.pathname === '/health') return json({ provider: 'cloudflare', ready: Boolean(env.AI) });
      if (request.method !== 'POST' || url.pathname !== '/translate') return json({ error: 'Not found' }, 404);
      if (!await authorized(request.headers.get('Authorization')?.replace(/^Bearer /, ''))) return json({ error: 'Unauthorized' }, 401);
      const length = Number(request.headers.get('content-length') ?? 0);
      if (length > 65536) return json({ error: 'Request too large' }, 413);
      const raw = await request.text();
      if (new TextEncoder().encode(raw).length > 65536) return json({ error: 'Request too large' }, 413);
      let payload;
      try { payload = JSON.parse(raw); } catch { return json({ error: 'Invalid JSON' }, 400); }
      if (typeof payload.instructions !== 'string' || payload.instructions.length > 10000
        || typeof payload.input !== 'string' || payload.input.length > 40000) return json({ error: 'Invalid translation batch' }, 400);
      let input;
      try { input = JSON.parse(payload.input); } catch { return json({ error: 'Invalid translation input' }, 400); }
      if (!['segments', 'routes'].includes(input.mode) || !Array.isArray(input.items) || !input.items.length || input.items.length > 30
        || input.items.some((item) => typeof item.id !== 'string' || typeof item.source !== 'string' || item.source.length > 20000)) return json({ error: 'Invalid items' }, 400);
      const schema = { type: 'object', additionalProperties: false, required: ['items'], properties: {
        items: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['id', 'text'], properties: { id: { type: 'string' }, text: { type: 'string' } } } },
      } };
      try {
        const result = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
          messages: [{ role: 'system', content: payload.instructions }, { role: 'user', content: payload.input }],
          max_tokens: 12000, temperature: 0, response_format: { type: 'json_schema', json_schema: schema },
        });
        const response = result.response ?? result.choices?.[0]?.message?.content;
        const translated = typeof response === 'string' ? JSON.parse(response) : response;
        if (!Array.isArray(translated?.items)) throw new Error('Incomplete structured output');
        return json({ items: translated.items, usage: result.usage ?? {} });
      } catch { return json({ error: 'Translation provider failed; retry later' }, 502); }
    },
  };
}

export default createTranslationBroker();
