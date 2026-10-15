// Also serialized into the regional Pages Worker; keep this function self-contained.
// This is a conservative rollout allowlist, not a global legal classification.
export function analyticsConsentResponse(request) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'private, no-store, max-age=0',
    'CDN-Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex, nofollow',
    'X-Content-Type-Options': 'nosniff',
  };
  if (!['GET', 'HEAD'].includes(request.method)) {
    return new Response(null, { status: 405, headers: { ...headers, Allow: 'GET, HEAD' } });
  }
  // Trust only Cloudflare's edge metadata, never a query parameter, browser
  // language, regional hostname or a caller-supplied country header.
  const browserOptOut = request.headers.get('Sec-GPC') === '1' || request.headers.get('DNT') === '1';
  const mode = request.cf?.country === 'US' && !browserOptOut ? 'opt-out' : 'opt-in';
  // Return a policy decision only. Do not expose/store the IP or location.
  const body = request.method === 'HEAD' ? null : JSON.stringify({ mode, browserOptOut, policyVersion: '2026-10-15' });
  return new Response(body, { headers });
}
