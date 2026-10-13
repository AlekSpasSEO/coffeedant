export const categories = [
  { id: 'coffee', label: 'Coffee', queries: ['whole bean coffee', 'ground coffee', 'instant coffee'], include: /coffee|espresso/i, exclude: /machine|maker|grinder|mug|cup|filter|book|cleaner|\bpods?\b|\bcapsules?\b|k.cup/i },
  { id: 'pods', label: 'Pods & capsules', queries: ['coffee pods', 'espresso capsules'], include: /\bpods?\b|\bcapsules?\b|k.cup/i, exclude: /machine|maker|holder|storage|organizer/i },
  { id: 'machines', label: 'Coffee machines', queries: ['espresso machine', 'coffee maker'], include: /espresso|coffee|keurig|nespresso/i, exclude: /replacement|cleaner|cleaning|tablet|descaler|cover|filter|capsules|pods|portafilter/i },
  { id: 'grinders', label: 'Grinders', queries: ['coffee grinder'], include: /grinder/i, exclude: /replacement|cleaner|brush|hopper/i },
  { id: 'brewers', label: 'Manual brewers', queries: ['french press coffee', 'pour over coffee dripper', 'cold brew coffee maker'], include: /french.press|pour.over|dripper|cold.brew.*(?:maker|pitcher|jar|pot)|(?:maker|pitcher|jar|pot).*cold.brew/i, exclude: /replacement|filter paper|filters|book|ground.coffee|whole.bean|coffee.beans|instant.coffee/i },
  { id: 'kettles', label: 'Kettles', queries: ['gooseneck kettle'], include: /kettle/i, exclude: /replacement|cord|cover/i },
  { id: 'milk', label: 'Milk frothers', queries: ['milk frother'], include: /frother|milk.*pitcher/i, exclude: /replacement|battery/i },
  { id: 'accessories', label: 'Tools & accessories', queries: ['espresso coffee scale', 'espresso tamper', 'coffee filters', 'espresso cleaning tablets'], include: /coffee|espresso|tamper|barista/i, exclude: /book|poster|shirt/i },
];

export const normalizeDeal = (item, category, partnerTag, now = Date.now()) => {
  const title = item.itemInfo?.title?.displayValue;
  if (!title || !category.include.test(title) || category.exclude.test(title) || !/^[A-Z0-9]{10}$/.test(item.asin ?? '')) return null;
  const listings = item.offersV2?.listings ?? [];
  // An alternate seller's discount must not be attributed to the featured offer.
  const listing = listings.find(value => value.isBuyBoxWinner) ?? listings[0];
  const price = listing?.price;
  const money = price?.money;
  const availability = String(listing?.availability?.type ?? '').replaceAll('_', '').toUpperCase();
  if (!listing || listing.condition?.value !== 'New' || listing.violatesMAP || !['INSTOCK', 'INSTOCKSCARCE'].includes(availability) || !(money?.amount > 0) || money.currency !== 'USD' || !money.displayAmount) return null;
  const detail = listing.dealDetails;
  for (const [key, compare] of [['startTime', time => time > now], ['endTime', time => time <= now]]) {
    if (detail?.[key] && (!Number.isFinite(Date.parse(detail[key])) || compare(Date.parse(detail[key])))) return null;
  }
  // Subscription prices require a different purchase commitment; omit them.
  if (String(listing.type ?? '').replaceAll('_', '').toUpperCase() === 'SUBSCRIBEANDSAVE') return null;
  const basis = price.savingBasis;
  const savings = price.savings;
  const hasSavings = basis?.money?.currency === money.currency && basis.money.amount > money.amount && savings?.money?.currency === money.currency && savings.money.amount > 0 && savings.percentage > 0 && savings.percentage < 100;
  if (!hasSavings && (!detail || !Object.keys(detail).length)) return null;
  let url;
  try { url = new URL(item.detailPageURL); } catch { return null; }
  if (url.protocol !== 'https:' || url.hostname !== 'www.amazon.com' || !url.pathname.includes(`/dp/${item.asin}`)) return null;
  url.searchParams.set('tag', partnerTag);
  const image = item.images?.primary?.medium;
  const imageUrl = image?.url && /^https:\/\/(?:m\.media-amazon\.com|images-na\.ssl-images-amazon\.com)\//.test(image.url) ? image.url : null;
  return {
    asin: item.asin, category: category.id, title,
    brand: item.itemInfo?.byLineInfo?.brand?.displayValue ?? null,
    detailPageUrl: url.href, imageUrl, imageWidth: image?.width ?? null, imageHeight: image?.height ?? null,
    amount: money.amount, price: money.displayAmount, currency: money.currency,
    referencePrice: hasSavings ? basis.money.displayAmount : null,
    referenceLabel: hasSavings ? basis.savingBasisTypeLabel ?? 'Amazon reference price' : null,
    savingsAmount: hasSavings ? savings.money.displayAmount : null,
    savingsPercent: hasSavings ? savings.percentage : null,
    dealBadge: detail?.badge ?? (detail ? 'Limited time deal' : 'Price drop'),
    accessType: detail?.accessType ?? 'ALL', endsAt: detail?.endTime ?? null,
    merchant: listing.merchantInfo?.name ?? null, checkedAt: new Date(now).toISOString(),
  };
};

export const isCurrentDeal = (product, now = Date.now()) => {
  const checked = Date.parse(product.checkedAt);
  return Number.isFinite(checked) && checked <= now && now - checked < 24 * 60 * 60 * 1000 && (!product.endsAt || Date.parse(product.endsAt) > now);
};
