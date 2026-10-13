// Isolated, noindex editorial review. This never declares an edition published.
// The full production site continues to use the guarded Pages build.
export function createReviewWorker(pages, assets, manifest) {
  const headers = { 'X-Robots-Tag': 'noindex, nofollow', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'public, max-age=60' };
  const response = (body, status = 200, type = 'text/html; charset=utf-8', method = 'GET') => new Response(method === 'HEAD' ? null : body, { status, headers: { ...headers, 'Content-Type': type } });
  return {
    async fetch(request) {
      const url = new URL(request.url);
      if (!['GET', 'HEAD'].includes(request.method)) return response('Method not allowed', 405, 'text/plain; charset=utf-8', request.method);
      if (url.pathname === '/') return new Response(null, { status: 302, headers: { ...headers, Location: Object.keys(pages)[0] } });
      if (url.pathname === '/robots.txt') return response('User-agent: *\nDisallow: /\n', 200, 'text/plain; charset=utf-8', request.method);
      if (url.pathname === '/localization-manifest.json') return response(JSON.stringify(manifest), 200, 'application/json', request.method);
      if (Object.hasOwn(pages, url.pathname)) return response(pages[url.pathname], 200, 'text/html; charset=utf-8', request.method);
      if (Object.hasOwn(assets, url.pathname)) {
        const asset = assets[url.pathname];
        const body = typeof asset === 'string' ? asset : asset.encoding === 'base64' ? Uint8Array.from(atob(asset.body), (character) => character.charCodeAt(0)) : asset.body;
        return response(body, 200, typeof asset === 'string' ? 'application/javascript; charset=utf-8' : asset.type, request.method);
      }
      // All referenced local review assets are bundled. Never proxy arbitrary paths.
      return response('<!doctype html><html lang="nl-NL"><meta charset="utf-8"><title>Pagina nog niet beschikbaar</title><h1>Deze pagina is nog niet vertaald.</h1><p>Dit is een afgebakend vertaalvoorbeeld, nog geen volledige Nederlandse editie.</p><a href="/">Bekijk het vertaalvoorbeeld</a></html>', 404, 'text/html; charset=utf-8', request.method);
    },
  };
}
