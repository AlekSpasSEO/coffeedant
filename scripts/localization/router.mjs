// Serialized into Pages advanced-mode _worker.js by bundle.mjs; keep this
// function self-contained (no Node APIs or external imports at runtime).
export function createRegionalRouter(hosts, redirects = {}) {
  return {
    async fetch(request, env) {
      const url = new URL(request.url);
      const edition = Object.prototype.hasOwnProperty.call(hosts, url.hostname) ? hosts[url.hostname] : null;
      let decodedPath;
      try { decodedPath = decodeURIComponent(url.pathname); }
      catch { return new Response('Invalid URL', { status: 400 }); }
      const unsafePath = /%2f|%5c|%00|\\/i.test(url.pathname)
        || decodedPath.split('/').some((part) => part === '.' || part === '..');
      if (!edition || unsafePath || url.pathname.startsWith('/__editions/')) return new Response('Regional edition is not available.', {
        status: 404, headers: { 'X-Robots-Tag': 'noindex', 'Cache-Control': 'no-store' },
      });
      if (!['GET', 'HEAD'].includes(request.method)) return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
      const target = redirects[edition]?.[url.pathname];
      if (target) {
        const destination = new URL(request.url); destination.pathname = target;
        return Response.redirect(destination.href, 301);
      }
      url.pathname = `/__editions/${edition}${url.pathname}`;
      const response = await env.ASSETS.fetch(new Request(url, request));
      const headers = new Headers(response.headers);
      const location = headers.get('Location');
      if (location) {
        const destination = new URL(location, request.url);
        destination.pathname = destination.pathname.replace(new RegExp(`^/__editions/${edition}(?=/|$)`), '');
        headers.set('Location', destination.href);
      }
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    },
  };
}
