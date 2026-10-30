// Keep links to the WordPress review sections useful after the article rewrite.
// Categories describe content, not a redirect to the top of the page.
export const commonReviewAnchors = {
  overview: 'overview', 'espresso-quality': 'espresso',
  'milk-system': 'milk', 'milk-steam': 'milk',
  specs: 'specifications', 'key-specs': 'specifications',
  'hardware-essentials': 'features', 'dual-boilers': 'features', pid: 'features',
  versions: 'features', 'decision-map': 'comparisons',
  'used-refurb-guide': 'ownership', 'known-issues': 'ownership',
  'cleaning-maintenance': 'ownership',
  accessories: 'setup', 'accessories-upgrades': 'setup', 'how-to-use': 'workflow',
};

export const legacyAnchorCategory = (id, heading = '') => {
  const text = `${id} ${heading}`.toLowerCase();
  if (/(?:^|[\s-])(?:specs?|specifications?)(?:$|[\s-])/.test(text)) return 'specifications';
  if (/compar|\bvs\b|alternatives|decision-map/.test(text)) return 'comparisons';
  if (/faq|frequently.asked/.test(text)) return 'faq';
  if (/verdict|conclusion/.test(text)) return 'verdict';
  if (/testing|test-results|testing-results|methodology/.test(text)) return 'methodology';
  if (/overview|introduction|design-intent|where-it-fits|cup-and-cadence|trade-offs|plain-english/.test(text)) return 'overview';
  if (/clean|maint|descal|service|repair|known-issues|used-refurb|ownership|reliab|long-term/.test(text)) return 'ownership';
  if (/milk|steam|froth/.test(text)) return 'milk';
  if (/brew-performance|brewed-coffee|pour-over/.test(text)) return 'filter';
  if (/espresso|extraction|grind-quality|flavou?r|keep-variance/.test(text)) return 'espresso';
  if (/accessor|whats-in|what.s.in.the.box|setup|first-week|water-treatment|warm.?up|analysis-water/.test(text)) return 'setup';
  if (/workflow|how-to-use|daily|drip-tray|counter-fit|ergonom|noise|capacity/.test(text)) return 'workflow';
  if (/pricing|price|value|cost|economics|where-to-buy/.test(text)) return 'value';
  if (/hardware|boiler|pump|pressure|\bpid\b|\blcc\b|version|variant|lineup|control|group|basket|portafilter|feature|heating|hot-water|under.the.hood/.test(text)) return 'features';
  if (/build|chassis|internals|construction|design/.test(text)) return 'build';
  if (/summary|who-|who.it|best-for|avoid|^pros\b|^cons\b/.test(text)) return 'summary';
  if (/in-depth-analysis|why-it-works/.test(text)) return 'ratings';
  return null;
};

const categoryTargets = {
  summary: ['summary'], specifications: ['specifications'],
  overview: ['orientation', 'overview', 'summary'],
  espresso: ['espresso'], filter: ['filter', 'espresso'], milk: ['milk'], workflow: ['workflow'],
  build: ['build', 'design', 'ownership'],
  features: ['features', 'design', 'build'],
  setup: ['setup', 'ownership', 'workflow', 'build'],
  ownership: ['ownership', 'maintenance', 'care', 'owners', 'build', 'workflow'],
  comparisons: ['comparisons', 'comparison', 'compare', 'recommendations', 'related'],
  value: ['value', 'cost', 'orientation'], faq: ['faq'],
  methodology: ['methodology'], ratings: ['ratings'], verdict: ['verdict'],
};

const htmlIds = (html) => [...html.matchAll(/\sid\s*=\s*["']([^"']+)["']/gi)].map(match => match[1]);

export const getReviewAnchorAliases = (review, historicalAnchors = {}) => {
  const sections = review.article.sections;
  const available = new Set(['summary', 'specifications', 'ratings', 'methodology', 'sources', 'verdict', ...sections.map(section => section.id)]);
  const occupied = new Set([
    'main-content', 'review-title', 'quick-answer-title', 'ratings', 'ratings-title',
    'video', 'video-title', 'methodology', 'methodology-title', 'testing',
    'sources', 'sources-title', 'resources', 'verdict', 'final-verdict-title',
    ...sections.flatMap(section => [section.id, `${section.id}-title`, ...htmlIds(section.html)]),
    ...review.article.sources.map(source => source.id),
    ...htmlIds(review.article.methodology),
    ...review.evaluation.dimensions.map(dimension => `${dimension.id}-performance`),
  ]);
  const result = {};
  for (const [alias, category] of Object.entries({ ...commonReviewAnchors, ...historicalAnchors })) {
    if (!/^[a-z0-9][a-z0-9_-]*$/i.test(alias) || occupied.has(alias)) continue;
    const dimensionTarget = review.evaluation.dimensions.find(dimension => dimension.id === category)?.deepDiveId;
    const target = dimensionTarget && available.has(dimensionTarget) ? dimensionTarget : categoryTargets[category]
      ?.flatMap(id => [id, ...sections.map(section => section.id).filter(sectionId => sectionId.endsWith(`-${id}`))])
      .find(id => available.has(id));
    if (!target) continue;
    (result[target] ??= []).push(alias);
    occupied.add(alias);
  }
  return result;
};
