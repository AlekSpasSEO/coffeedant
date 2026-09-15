import type { MachineReviewData } from './reviews';
import manifest from './review-batch-manifest.json';
import { automaticReviews } from './reviews/automatics';
import { brevilleCoreReviews } from './reviews/breville-core';
import { delonghiReviews } from './reviews/delonghi';
import { prosumerReviews } from './reviews/prosumers';
import { remainingReviews } from './reviews/remaining';

const expectedBatchSize = 20;
const reviewSlugPattern = /^\/espresso-machine\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/;
const reservedProductSlugs = new Set([
  'beginners', 'breville-bambino', 'built-in-grinder', 'cheap-budget-under-500',
  'prosumer-under-1000', 'single-boiler', 'small', 'superautomatic', 'without-grinder',
]);

if (manifest.length !== expectedBatchSize) {
  throw new Error(`Review manifest must contain exactly ${expectedBatchSize} pages; received ${manifest.length}.`);
}
if (new Set(manifest.map((item) => item.slug)).size !== manifest.length) {
  throw new Error('Review manifest contains duplicate slugs.');
}
if (new Set(manifest.map((item) => item.productId)).size !== manifest.length) {
  throw new Error('Review manifest contains duplicate product IDs.');
}
for (const item of manifest) {
  if (!reviewSlugPattern.test(item.slug)) {
    throw new Error(`${item.slug} is not a canonical /espresso-machine/<product>/ review route.`);
  }
  const routeSegment = item.slug.split('/').filter(Boolean).at(-1);
  if (routeSegment && reservedProductSlugs.has(routeSegment)) {
    throw new Error(`${item.slug} collides with an explicit espresso-machine route.`);
  }
  if (!/^CD-EM-\d{6}$/.test(item.productId)) {
    throw new Error(`${item.slug} has a malformed product ID: ${item.productId}.`);
  }
}

const candidates: MachineReviewData[] = [
  ...brevilleCoreReviews,
  ...automaticReviews,
  ...delonghiReviews,
  ...prosumerReviews,
  ...remainingReviews,
];
const bySlug = new Map(candidates.map((review) => [review.slug, review]));

if (candidates.length !== expectedBatchSize || bySlug.size !== candidates.length) {
  throw new Error(`Review registry must contain ${expectedBatchSize} unique pages; received ${candidates.length}.`);
}

export const batchReviews: MachineReviewData[] = manifest.map((item) => {
  const review = bySlug.get(item.slug);
  if (!review) throw new Error(`Review registry is missing ${item.slug}.`);
  if (review.productId !== item.productId) {
    throw new Error(`${item.slug} uses ${review.productId}; expected ${item.productId}.`);
  }
  if (review.updated !== '2026-09-15') {
    throw new Error(`${item.slug} must carry the batch update date 2026-09-15.`);
  }
  return review;
});

export const batchReviewSlugs = new Set(batchReviews.map((review) => review.slug));
