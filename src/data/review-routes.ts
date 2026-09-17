export const reviewRouteFamilies = ['espresso-machine', 'grinder', 'coffee-machine'] as const;

export type ReviewRouteFamily = typeof reviewRouteFamilies[number];

export const reviewRouteDefinitions = {
  'espresso-machine': {
    family: 'espresso-machine',
    basePath: '/espresso-machine/',
    breadcrumbLabel: 'Espresso machines',
    articleSection: 'Espresso machine reviews',
    productIdPrefix: 'EM',
  },
  grinder: {
    family: 'grinder',
    basePath: '/grinder/',
    breadcrumbLabel: 'Coffee grinders',
    articleSection: 'Coffee grinder reviews',
    productIdPrefix: 'GR',
  },
  'coffee-machine': {
    family: 'coffee-machine',
    basePath: '/coffee-machine/',
    breadcrumbLabel: 'Coffee machines',
    articleSection: 'Coffee machine reviews',
    productIdPrefix: 'CM',
  },
} as const;

export const canonicalReviewSlugPattern = /^\/(espresso-machine|grinder|coffee-machine)\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/;

export const getReviewRouteDefinition = (slug: string) => {
  const family = slug.match(canonicalReviewSlugPattern)?.[1] as ReviewRouteFamily | undefined;
  return family ? reviewRouteDefinitions[family] : null;
};

export const isCanonicalReviewSlug = (slug: string) => getReviewRouteDefinition(slug) !== null;

export const hasValidReviewProductId = (slug: string, productId: string) => {
  const route = getReviewRouteDefinition(slug);
  return route !== null && new RegExp(`^CD-${route.productIdPrefix}-\\d{6}$`).test(productId);
};
