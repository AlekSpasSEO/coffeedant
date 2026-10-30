// A current-source translation gap must not remove a previously published URL.
// The regional bundle is separate from the English build: rejecting this bundle
// leaves Cloudflare's previous successful regional deployment in service.
export function inspectRegionalPublication({ edition, source, selected, cache, previous }) {
  const published = Object.entries(previous?.verifiedPaths ?? {});
  const sourceById = new Map(source.pages.map(page => [page.id, page]));
  const selectedById = new Map(selected.pages.map(page => [page.id, page]));
  const deferredPages = [];
  for (const [id, publishedPath] of published) {
    const page = sourceById.get(id);
    const selectedPage = selectedById.get(id);
    const currentPath = cache.routes[id]?.path ?? null;
    const reason = !page ? 'source-page-removed'
      : currentPath !== publishedPath ? 'published-route-would-change'
      : cache.routes[id]?.sourcePath !== page.sourcePath ? 'published-route-registry-mismatch'
      : !selectedPage ? 'current-source-not-fully-translated'
      : null;
    if (reason) deferredPages.push({ id, sourcePath: page?.sourcePath ?? null, publishedPath, currentPath, reason });
  }
  return {
    edition: edition.id, host: edition.host,
    state: deferredPages.length ? 'deferred' : 'ready',
    publishedPages: published.length,
    readyPages: selected.pages.filter(page => page.sourcePath !== '/404/').length,
    deferredPages,
  };
}

export function assertRegionalPublication(reports) {
  const deferred = reports.filter(report => report.deferredPages.length);
  if (!deferred.length) return;
  const counts = deferred.map(report => `${report.edition}: ${report.deferredPages.length} of ${report.publishedPages} published pages`).join('; ');
  const translationOnly = deferred.every(report => report.deferredPages.every(page => page.reason === 'current-source-not-fully-translated'));
  const error = new Error(`Regional publication deferred (${counts}). Cloudflare retains the previously published regional deployment. Complete the current-source translations or review an explicit route migration before rebuilding. See .localization/regional-publication.json. The English build and deployment are independent.`);
  error.code = translationOnly ? 'REGIONAL_TRANSLATIONS_PENDING' : 'REGIONAL_PUBLICATION_REGRESSION';
  // CI may explicitly accept a translation deferral without publishing a new
  // regional artifact. A removed source or changed route remains a hard error.
  error.exitCode = translationOnly ? 42 : 1;
  throw error;
}
