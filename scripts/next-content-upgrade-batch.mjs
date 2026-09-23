#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const migration = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-migration-batches.json'), 'utf8'));
const reviewManifest = JSON.parse(fs.readFileSync(path.join(root, 'src/data/review-batch-manifest.json'), 'utf8'));
const progress = JSON.parse(fs.readFileSync(path.join(root, 'src/data/content-upgrade-progress.json'), 'utf8'));

const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, value = 'true'] = arg.replace(/^--/, '').split('=');
  return [key, value];
}));
const batchSize = Number.parseInt(args.get('size') ?? '10', 10);
const jsonOnly = args.has('json');

if (!Number.isInteger(batchSize) || batchSize < 1 || batchSize > 10) {
  throw new Error('Batch size must be an integer from 1 to 10.');
}

const routes = migration.batches.flat();
if (new Set(routes).size !== routes.length) throw new Error('Migration order contains duplicate routes.');

const buyingGuideRoutes = new Set([
  '/espresso-machine/beginners/',
  '/espresso-machine/built-in-grinder/',
  '/espresso-machine/cheap-budget-under-500/',
  '/espresso-machine/prosumer-under-1000/',
  '/espresso-machine/single-boiler/',
  '/espresso-machine/small/',
  '/espresso-machine/superautomatic/',
  '/espresso-machine/without-grinder/',
]);
const productPattern = /^\/(?:espresso-machine|coffee-machine|grinder)\/[^/]+\/$/;
const completedReviews = new Set([
  ...reviewManifest.map((item) => item.slug),
  ...progress.completedSpecialReviews,
]);
const completedGuides = new Set(progress.completedBuyingGuides);
const completedBlogs = new Set(progress.completedBlogArticles);
const completedSupporting = new Set(progress.auditedSupportingPages);

const productReviews = routes.filter((route) => productPattern.test(route) && !buyingGuideRoutes.has(route));
const buyingGuides = routes.filter((route) => buyingGuideRoutes.has(route));
const blogArticles = routes.filter((route) => /^\/blog\/[^/]+\/$/.test(route));
const editorial = new Set([...productReviews, ...buyingGuides, ...blogArticles]);
const supportingPages = routes.filter((route) => !editorial.has(route));

const phases = [
  {
    id: 'product-reviews',
    routes: productReviews,
    completed: completedReviews,
  },
  {
    id: 'buying-guides',
    routes: buyingGuides,
    completed: completedGuides,
  },
  {
    id: 'blog-articles',
    routes: blogArticles,
    completed: completedBlogs,
  },
  {
    id: 'supporting-page-audit',
    routes: supportingPages,
    completed: completedSupporting,
  },
];

const phaseRows = phases.map((phase) => {
  const pending = phase.routes.filter((route) => !phase.completed.has(route));
  return {
    id: phase.id,
    total: phase.routes.length,
    completed: phase.routes.length - pending.length,
    pending: pending.length,
    next: pending.slice(0, batchSize),
  };
});
const activePhase = phaseRows.find((phase) => phase.pending > 0) ?? null;
const completed = phaseRows.reduce((sum, phase) => sum + phase.completed, 0);
const result = {
  schemaVersion: progress.schemaVersion,
  sitemapRoutes: routes.length,
  editorialRoutes: productReviews.length + buyingGuides.length + blogArticles.length,
  completed,
  pending: routes.length - completed,
  activePhase: activePhase?.id ?? 'complete',
  nextBatch: activePhase?.next ?? [],
  completionNotified: progress.completionNotified,
  phases: phaseRows,
};

if (jsonOnly) {
  console.log(JSON.stringify(result));
} else {
  console.log(`Coffeedant content upgrade plan: ${result.completed}/${result.sitemapRoutes} routes accounted for`);
  for (const phase of phaseRows) {
    console.log(`${phase.id}: ${phase.completed}/${phase.total} complete, ${phase.pending} pending`);
  }
  console.log(`Active phase: ${result.activePhase}`);
  if (result.nextBatch.length) {
    console.log(`Next batch (${result.nextBatch.length}):`);
    result.nextBatch.forEach((route) => console.log(`  ${route}`));
  } else {
    console.log('No routes remain in the queue.');
  }
}
