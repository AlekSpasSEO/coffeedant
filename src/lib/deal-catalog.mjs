import { isCurrentDeal } from '../../scripts/lib/amazon-deals.mjs';

// This fallback uses our editorial catalog and review media, never expired
// Amazon API titles, images or prices. An ASIN remains useful without a price.
export function buildDealCatalog(catalog, reviews) {
  const bySlug = new Map(reviews.map(review => [review.slug, review]));
  const seen = new Set();
  return Object.entries(catalog.products).flatMap(([slug, product]) => {
    const review = bySlug.get(slug);
    if (!review || !/^[A-Z0-9]{10}$/.test(product.asin) || seen.has(product.asin)) return [];
    seen.add(product.asin);
    const link = new URL(`https://www.amazon.com/dp/${product.asin}`);
    link.searchParams.set('tag', catalog.partnerTag);
    return [{ asin: product.asin, title: product.productName, brand: review.brand,
      category: slug.startsWith('/grinder/') ? 'grinders' : 'machines',
      image: review.image, imageAlt: review.imageAlt, reviewPath: slug,
      detailPageUrl: link.toString(), conditionLabel: product.conditionLabel,
      purchaseNote: product.purchaseNote }];
  }).sort((a, b) => a.title.localeCompare(b.title));
}

export function dealDisplay(products, catalog, now = Date.now()) {
  const live = products.filter(product => isCurrentDeal(product, now));
  return { mode: live.length ? 'deals' : 'catalog', products: live.length ? live : catalog };
}
