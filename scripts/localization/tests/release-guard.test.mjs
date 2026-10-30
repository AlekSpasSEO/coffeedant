import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectRegionalPublication, assertRegionalPublication } from '../release-guard.mjs';

const page = (id, sourcePath) => ({ id, sourcePath });
const edition = { id: 'nl', host: 'nl.coffeedant.com' };
const inspect = ({ pages, ready = pages, routes, published }) => inspectRegionalPublication({
  edition, source: { pages }, selected: { pages: ready },
  cache: { routes: Object.fromEntries(Object.entries(routes).map(([id, route]) => [id, { sourcePath: pages.find(page => page.id === id)?.sourcePath, ...route }])) },
  previous: { verifiedPaths: published },
});

test('a new regional edition has no existing release to regress', () => {
  const report = inspect({ pages: [page('home', '/')], routes: { home: { path: '/' } }, published: {} });
  assert.equal(report.state, 'ready');
  assert.equal(report.publishedPages, 0);
  assert.doesNotThrow(() => assertRegionalPublication([report]));
});

test('published IDs and paths are retained while newly translated pages are added', () => {
  const report = inspect({
    pages: [page('home', '/'), page('old', '/coffee-beans/old/'), page('new', '/coffee-beans/new/'), page('404', '/404/')],
    routes: { home: { path: '/' }, old: { path: '/koffiebonen/oud/' }, new: { path: '/koffiebonen/nieuw/' }, '404': { path: '/404/' } },
    published: { home: '/', old: '/koffiebonen/oud/' },
  });
  assert.equal(report.state, 'ready');
  assert.equal(report.readyPages, 3);
  assert.doesNotThrow(() => assertRegionalPublication([report]));
});

test('a source edit that loses translation coverage defers publication even if total page count grows', () => {
  const pages = [page('home', '/'), page('old', '/coffee-beans/old/'), page('new', '/coffee-beans/new/'), page('newer', '/coffee-beans/newer/')];
  const report = inspect({ pages, ready: [pages[0], pages[2], pages[3]],
    routes: { home: { path: '/' }, old: { path: '/koffiebonen/oud/' }, new: { path: '/koffiebonen/nieuw/' }, newer: { path: '/koffiebonen/nieuwer/' } },
    published: { home: '/', old: '/koffiebonen/oud/' },
  });
  assert.equal(report.readyPages, 3);
  assert.equal(report.state, 'deferred');
  assert.deepEqual(report.deferredPages, [{ id: 'old', sourcePath: '/coffee-beans/old/', publishedPath: '/koffiebonen/oud/', currentPath: '/koffiebonen/oud/', reason: 'current-source-not-fully-translated' }]);
  assert.throws(() => assertRegionalPublication([report]), /nl: 1 of 2 published pages/);
  assert.throws(() => assertRegionalPublication([report]), error => error.code === 'REGIONAL_TRANSLATIONS_PENDING' && error.exitCode === 42);
});

test('a changed localized path cannot silently replace the published route under the same page ID', () => {
  const report = inspect({ pages: [page('old', '/coffee-beans/old/')], routes: { old: { path: '/nieuwe-route/' } }, published: { old: '/bestaande-route/' } });
  assert.equal(report.deferredPages[0].reason, 'published-route-would-change');
  assert.throws(() => assertRegionalPublication([report]), /explicit route migration/);
  assert.throws(() => assertRegionalPublication([report]), error => error.code === 'REGIONAL_PUBLICATION_REGRESSION' && error.exitCode === 1);
});

test('a removed source page is reported for explicit migration rather than lost automatically', () => {
  const report = inspect({ pages: [], routes: {}, published: { old: '/bestaande-route/' } });
  assert.deepEqual(report.deferredPages[0], { id: 'old', sourcePath: null, publishedPath: '/bestaande-route/', currentPath: null, reason: 'source-page-removed' });
  assert.throws(() => assertRegionalPublication([report]), error => error.exitCode === 1);
});

test('a changed or missing published route is a hard error even while its new source text is untranslated', () => {
  for (const routes of [{ old: { path: '/nieuwe-route/' } }, {}]) {
    const report = inspect({ pages: [page('old', '/old/')], ready: [], routes, published: { old: '/bestaande-route/' } });
    assert.equal(report.deferredPages[0].reason, 'published-route-would-change');
    assert.throws(() => assertRegionalPublication([report]), error => error.code === 'REGIONAL_PUBLICATION_REGRESSION' && error.exitCode === 1);
  }
});

test('a mismatched source route registry is not mistaken for an ordinary translation gap', () => {
  const report = inspect({ pages: [page('old', '/old/')], ready: [], routes: { old: { path: '/bestaande-route/', sourcePath: '/different-source/' } }, published: { old: '/bestaande-route/' } });
  assert.equal(report.deferredPages[0].reason, 'published-route-registry-mismatch');
  assert.throws(() => assertRegionalPublication([report]), error => error.exitCode === 1);
});

test('one regressing edition defers the atomic bundle without mutating saved release metadata', () => {
  const published = Object.freeze({ old: '/bestaande-route/' });
  const ready = inspect({ pages: [page('old', '/old/')], routes: { old: { path: '/bestaande-route/' } }, published });
  const deferred = inspect({ pages: [page('old', '/old/')], ready: [], routes: { old: { path: '/bestaande-route/' } }, published });
  deferred.edition = 'fr';
  assert.throws(() => assertRegionalPublication([ready, deferred]), /fr: 1 of 1 published pages/);
  assert.deepEqual(published, { old: '/bestaande-route/' });
});
