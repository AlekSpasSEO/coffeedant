const bannedOverviewPhrases = [
  /that identity matters because two machines/i,
  /the useful first question is not whether/i,
  /it is whether its heating,? preparation,? milk/i,
];
const escapeHtml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

export function assertAuthoredOverview(value, slug) {
  if (typeof value !== 'string' || value.trim().split(/\s+/).length < 45) {
    throw new Error(`${slug}: provide an authored, product-specific overview of at least 45 words; the review template has no prose fallback.`);
  }
  if (bannedOverviewPhrases.some(pattern => pattern.test(value))) {
    throw new Error(`${slug}: the overview reuses the retired generic buying-advice passage.`);
  }
  return value.trim();
}

export function renderAuthoredOverview({ slug, overview, identityBoundary, primaryStrength, primaryLimit, citationHtml }) {
  const opening = assertAuthoredOverview(overview, slug);
  const scope = identityBoundary.replace(/^(?:The )?Product schema[^.\n]{0,60}?\b(?:refer(?:s)?(?: only)? to|cover(?:s)?(?: only)?)\s*/i, 'This review covers ');
  return `<p>${escapeHtml(opening)} ${citationHtml}</p>
    <p class="review-model-scope">${escapeHtml(scope)}</p>
    <p><strong>The strongest reason to choose it:</strong> ${escapeHtml(primaryStrength)} <strong>The main reason to pause:</strong> ${escapeHtml(primaryLimit)}</p>`;
}
