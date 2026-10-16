import path from 'node:path';
import { root, config, readJson, writeJson, loadCache, safeRoute, parseHtml, walk, attr } from './core.mjs';

// Public HTTPS checks are sufficient here: Git-connected Pages performs the
// deployments, so GitHub does not need another copy of a Cloudflare API token.
const releases = await readJson(path.join(root, 'localization/releases.json'));
const report = [];
for (const edition of config.editions.filter(({ id, published }) => id !== 'us' && published)) {
  try {
    const cache = await loadCache(edition.id);
    const response = await fetch(`https://${edition.host}/localization-manifest.json`, { redirect: 'error', signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error(`Manifest HTTP ${response.status}`);
    const manifest = await response.json();
    if (manifest.host !== edition.host || manifest.edition !== edition.id || manifest.preview !== false
      || !['complete-edition', 'ready-pages'].includes(manifest.scope) || !Array.isArray(manifest.pages)
      || !manifest.pages.some(({ sourcePath, path }) => sourcePath === '/' && path === '/')) throw new Error('Live manifest is not a public edition');
    const home = await fetch(`https://${edition.host}/`, { redirect: 'error', signal: AbortSignal.timeout(20000) });
    if (!home.ok || /noindex/.test(home.headers.get('x-robots-tag') ?? '')) throw new Error('Homepage is not publicly indexable');
    const nodes = walk(parseHtml(await home.text()));
    if (attr(nodes.find((node) => node.tagName === 'html'), 'lang') !== edition.locale
      || attr(nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical'), 'href') !== `https://${edition.host}/`
      || nodes.some((node) => node.tagName === 'meta' && attr(node, 'name') === 'robots' && /noindex/.test(attr(node, 'content') ?? ''))) throw new Error('Homepage language/canonical/indexing check failed');
    const verifiedPaths = {};
    for (const page of manifest.pages) {
      if (page.sourcePath === '/404/') continue;
      if (cache.routes[page.id]?.path !== page.path || cache.routes[page.id]?.sourcePath !== page.sourcePath) throw new Error('Live route does not match the stable registry');
      verifiedPaths[page.id] = safeRoute(page.path);
    }
    releases.editions[edition.id] = { verifiedPaths };
    report.push({ edition: edition.id, verifiedPages: Object.keys(verifiedPaths).length });
  } catch (error) {
    // Keep the last verified release during transient DNS/deployment failures.
    report.push({ edition: edition.id, error: error.message });
  }
}
await writeJson(path.join(root, 'localization/releases.json'), releases);
console.log(JSON.stringify(report, null, 2));
if (report.some(({ error }) => error)) process.exitCode = 1;
