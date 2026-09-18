import type { MachineReviewData } from './reviews';
import manifest from './review-batch-manifest.json';
import { automaticReviews } from './reviews/automatics';
import { brevilleCoreReviews } from './reviews/breville-core';
import { delonghiReviews } from './reviews/delonghi';
import { prosumerReviews } from './reviews/prosumers';
import { remainingReviews } from './reviews/remaining';
import { upgradeGrinderReviews } from './reviews/upgrade-grinders';
import { ascasoUpgradeReviews } from './reviews/upgrade-ascaso';
import { bezzeraUpgradeAReviews } from './reviews/upgrade-bezzera-a';
import { upgradeBezzeraBReviews } from './reviews/upgrade-bezzera-b';
import { upgradeBezzeraCReviews } from './reviews/upgrade-bezzera-c';
import { upgradeNextTenReviews } from './reviews/upgrade-next-ten';
import { upgradeThirdTenReviews } from './reviews/upgrade-third-ten';
import { upgradeFourthTenReviews } from './reviews/upgrade-fourth-ten';
import {
  getReviewRouteDefinition,
  hasValidReviewProductId,
  type ReviewRouteFamily,
} from './review-routes';

const minimumReviewCount = 20;
const reservedProductSlugs: Partial<Record<ReviewRouteFamily, Set<string>>> = {
  'espresso-machine': new Set([
    'beginners', 'breville-bambino', 'built-in-grinder', 'cheap-budget-under-500',
    'prosumer-under-1000', 'single-boiler', 'small', 'superautomatic', 'without-grinder',
  ]),
};

if (manifest.length < minimumReviewCount) {
  throw new Error(`Review manifest must preserve at least ${minimumReviewCount} pages; received ${manifest.length}.`);
}
if (new Set(manifest.map((item) => item.slug)).size !== manifest.length) {
  throw new Error('Review manifest contains duplicate slugs.');
}
if (new Set(manifest.map((item) => item.productId)).size !== manifest.length) {
  throw new Error('Review manifest contains duplicate product IDs.');
}
for (const item of manifest) {
  const route = getReviewRouteDefinition(item.slug);
  if (!route) {
    throw new Error(`${item.slug} is not a canonical modern review route.`);
  }
  const routeSegment = item.slug.split('/').filter(Boolean).at(-1);
  if (routeSegment && reservedProductSlugs[route.family]?.has(routeSegment)) {
    throw new Error(`${item.slug} collides with an explicit ${route.family} route.`);
  }
  if (!hasValidReviewProductId(item.slug, item.productId)) {
    throw new Error(`${item.slug} has a malformed product ID: ${item.productId}.`);
  }
}

const candidates: MachineReviewData[] = [
  ...brevilleCoreReviews,
  ...automaticReviews,
  ...delonghiReviews,
  ...prosumerReviews,
  ...remainingReviews,
  ...upgradeGrinderReviews,
  ...ascasoUpgradeReviews,
  ...bezzeraUpgradeAReviews,
  ...upgradeBezzeraBReviews,
  ...upgradeBezzeraCReviews,
  ...upgradeNextTenReviews,
  ...upgradeThirdTenReviews,
  ...upgradeFourthTenReviews,
];
const bySlug = new Map(candidates.map((review) => [review.slug, review]));

if (candidates.length !== manifest.length || bySlug.size !== candidates.length) {
  throw new Error(`Review registry must contain one unique candidate for each manifest page; received ${candidates.length} candidates for ${manifest.length} entries.`);
}

export const modernReviews: MachineReviewData[] = manifest.map((item) => {
  const review = bySlug.get(item.slug);
  if (!review) throw new Error(`Review registry is missing ${item.slug}.`);
  if (review.productId !== item.productId) {
    throw new Error(`${item.slug} uses ${review.productId}; expected ${item.productId}.`);
  }
  return review;
});

export const modernReviewSlugs = new Set(modernReviews.map((review) => review.slug));

export const getModernReviewsByRouteFamily = (family: ReviewRouteFamily) => (
  modernReviews.filter((review) => getReviewRouteDefinition(review.slug)?.family === family)
);

// Backward-compatible aliases for integrations that still use the original batch naming.
export const batchReviews = modernReviews;
export const batchReviewSlugs = modernReviewSlugs;
