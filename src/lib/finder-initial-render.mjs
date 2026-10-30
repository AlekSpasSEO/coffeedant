// Shared by the static source, regional builds and the interactive Finder.
// Initial cards use the same markup as later filter results, so hydration does
// not insert a previously empty grid or change its text/price geometry.
const escape = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const message = (template, values) => template.replace(/\{([a-z]+)\}/g, (token, key) => String(values[key] ?? token));
const sitePath = (base, path) => /^https?:\/\//i.test(path) ? path : `${base}${path.replace(/^\//, '')}`;

export const compareFinderItems = (a, b) => {
  const availabilityOrder = { current: 0, catalog: 1, limited: 2 };
  return (availabilityOrder[a.availability] ?? 3) - (availabilityOrder[b.availability] ?? 3)
    || (b.rating ?? 0) - (a.rating ?? 0)
    || a.brand.localeCompare(b.brand)
    || a.model.localeCompare(b.model);
};

export const renderFinderCard = (item, base = '/', compact = false, ui = {}, locale = 'en-US') => {
  const href = escape(sitePath(base, item.path));
  const workflow = ui[`workflow:${item.workflow}`] ?? item.workflow.replace('-', ' ');
  const media = compact ? '' : `<a class="coffee-finder-result-media" href="${href}"><img src="${escape(sitePath(base, item.image))}" alt="${escape(item.imageAlt)}" width="320" height="260" loading="lazy" decoding="async"></a>`;
  const rating = compact || item.rating == null ? '' : `<span>${escape(new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(item.rating))}/5 Coffeedant</span>`;
  const amazon = item.amazonHref ? `<a class="coffee-finder-result-amazon" href="${escape(item.amazonHref)}" target="_blank" rel="nofollow sponsored noopener">${escape(item.amazonLabel)} ↗</a>` : '';
  const note = item.amazonNote ? `<p class="coffee-finder-result-purchase-note">${escape(item.amazonNote)}</p>` : '';
  return `<article class="coffee-finder-result${compact ? ' coffee-finder-result-compact' : ''}">${media}<div class="coffee-finder-result-body"><p class="coffee-finder-result-overline">${escape(item.brand)} · ${escape(workflow)}</p><h3><a href="${href}">${escape(item.model)}</a></h3><p class="coffee-finder-result-copy">${escape(item.description)}</p><div class="coffee-finder-result-meta"><span>${escape(item.priceLabel)}</span><span>${escape(item.availabilityLabel)}</span>${rating}</div><div class="coffee-finder-result-actions"><a class="coffee-finder-result-link" href="${href}">${escape(ui.readReview ?? 'Read the review →')}</a>${amazon}</div>${note}</div></article>`;
};

export const initialFinderSnapshot = (catalog, { variant = 'banner', brand = '', excludePath = '', base = '/' } = {}) => {
  const matches = catalog.items.filter(item => item.path !== excludePath && (!brand || item.brand === brand)).sort(compareFinderItems);
  const limit = variant === 'full' ? 12 : 3;
  const ui = catalog.ui ?? {};
  const date = new Intl.DateTimeFormat(catalog.locale ?? 'en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(catalog.generatedAt));
  return {
    count: matches.length,
    hasMore: variant === 'full' && matches.length > limit,
    countText: ui.matchCount ? message(ui.matchCount, { count: matches.length }) : `${matches.length} ${matches.length === 1 ? 'machine' : 'machines'} match`,
    syncText: message(ui.catalogSync ?? '{count} reviewed machines · catalog synced {date} · refreshes every {days} days', { count: catalog.machineCount, date, days: catalog.cadenceDays }),
    html: matches.slice(0, limit).map(item => renderFinderCard(item, base, variant !== 'full', ui, catalog.locale)).join(''),
  };
};
