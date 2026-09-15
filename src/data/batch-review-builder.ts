import type {
  MachineReviewData,
  ReviewDimension,
  ReviewDimensionId,
  ReviewTable,
} from './reviews';
import { reviewDimensionIds } from './reviews';

type EvidenceRow = {
  signal: string;
  evidence: string;
  decision: string;
};

export type ResearchDimensionInput = {
  id: ReviewDimensionId;
  score: number | null;
  reason: string;
  buyerMeaning: string;
  evidenceStatus: string;
  sourceIds: string[];
  deepDiveId: string;
  title: string;
  intro: string[];
  evidence: EvidenceRow[];
  diagnosis?: Array<{ signal: string; guidance: string }>;
  note?: string;
};

export type ResearchReviewInput = Omit<MachineReviewData, 'author' | 'evaluation'> & {
  authorNote: string;
  basisDisclosure: string;
  dimensions: ResearchDimensionInput[];
};

const dimensionLabels: Record<ReviewDimensionId, string> = {
  espresso: 'Espresso',
  milk: 'Milk',
  workflow: 'Workflow',
  build: 'Build',
  features: 'Features',
  value: 'Value',
};

const safeIdPattern = /^[a-z0-9][a-z0-9-]*$/;
const reservedDocumentIds = new Set([
  'main-content', 'review-title', 'quick-answer-title',
  'ratings', 'ratings-title',
  'video', 'video-title',
  'methodology', 'methodology-title', 'testing',
  'sources', 'sources-title', 'resources',
  'verdict', 'final-verdict-title',
  ...reviewDimensionIds.map((id) => `${id}-performance`),
]);

const classCount = (html: string, className: string) => (
  html.match(new RegExp(`class="${className}(?:\\s|"|$)`, 'g')) ?? []
).length;

const dimensionTable = (input: ResearchDimensionInput): ReviewTable => ({
  caption: `${dimensionLabels[input.id]} evidence and its practical consequence`,
  columns: [
    { key: 'signal', label: 'Signal' },
    { key: 'evidence', label: 'What the evidence says' },
    { key: 'decision', label: 'Buying consequence' },
  ],
  rows: input.evidence,
});

const makeDimension = (input: ResearchDimensionInput): ReviewDimension => ({
  id: input.id,
  label: dimensionLabels[input.id],
  score: input.score,
  weight: 1,
  reason: input.reason,
  buyerMeaning: input.buyerMeaning,
  evidenceStatus: input.evidenceStatus,
  sourceIds: input.sourceIds,
  deepDiveId: input.deepDiveId,
  deepDive: {
    title: input.title,
    intro: input.intro,
    table: dimensionTable(input),
    diagnosis: input.diagnosis,
    note: input.note,
  },
});

export const buildResearchReview = (input: ResearchReviewInput): MachineReviewData => {
  const { authorNote, basisDisclosure, dimensions, ...review } = input;
  const invalidAlternativePaths = review.alternatives
    .map((alternative) => alternative.href)
    .filter((href) => !/^\/espresso-machine\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(href));
  if (invalidAlternativePaths.length) {
    throw new Error(`${review.slug} has non-canonical alternative paths: ${invalidAlternativePaths.join(', ')}.`);
  }
  const seen = new Set(dimensions.map((dimension) => dimension.id));
  if (dimensions.length !== reviewDimensionIds.length
    || seen.size !== reviewDimensionIds.length
    || reviewDimensionIds.some((id) => !seen.has(id))) {
    throw new Error(`${review.slug} must define all six unique review dimensions.`);
  }
  const sectionIds = review.article.sections.map((section) => section.id);
  if (new Set(sectionIds).size !== sectionIds.length) {
    throw new Error(`${review.slug} has duplicate article section IDs.`);
  }
  const generatedSectionIds = sectionIds.flatMap((id) => [id, `${id}-title`]);
  if (new Set(generatedSectionIds).size !== generatedSectionIds.length) {
    throw new Error(`${review.slug} has article section IDs that collide with generated heading IDs.`);
  }
  const unsafeSectionIds = sectionIds.filter((id) => (
    !safeIdPattern.test(id)
    || reservedDocumentIds.has(id)
    || reservedDocumentIds.has(`${id}-title`)
  ));
  if (unsafeSectionIds.length) {
    throw new Error(`${review.slug} has unsafe or reserved article section IDs: ${unsafeSectionIds.join(', ')}.`);
  }
  const sourceIds = review.article.sources.map((source) => source.id);
  const knownSources = new Set(sourceIds);
  if (knownSources.size !== sourceIds.length) {
    throw new Error(`${review.slug} has duplicate source IDs.`);
  }
  if (sourceIds.length < 10) {
    throw new Error(`${review.slug} must provide at least 10 source records.`);
  }
  const generatedSectionIdSet = new Set(generatedSectionIds);
  const unsafeSourceIds = sourceIds.filter((id) => (
    !safeIdPattern.test(id) || reservedDocumentIds.has(id) || generatedSectionIdSet.has(id)
  ));
  if (unsafeSourceIds.length) {
    throw new Error(`${review.slug} has unsafe, reserved or colliding source IDs: ${unsafeSourceIds.join(', ')}.`);
  }
  for (const dimension of dimensions) {
    if (dimension.score !== null && (dimension.score < 0 || dimension.score > 10)) {
      throw new Error(`${review.slug} has an invalid ${dimension.id} score.`);
    }
    if (!review.article.sections.some((section) => section.id === dimension.deepDiveId)) {
      throw new Error(`${review.slug} is missing the ${dimension.deepDiveId} section used by ${dimension.id}.`);
    }
    const missingSources = dimension.sourceIds.filter((sourceId) => !knownSources.has(sourceId));
    if (missingSources.length) {
      throw new Error(`${review.slug} references missing sources in ${dimension.id}: ${missingSources.join(', ')}.`);
    }
    if (!dimension.sourceIds.length || !dimension.evidence.length) {
      throw new Error(`${review.slug} needs cited evidence in the ${dimension.id} deep dive.`);
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(review.video.published)) {
    throw new Error(`${review.slug} video publication date must use YYYY-MM-DD.`);
  }
  if (!/^[\w-]{11}$/.test(review.video.id)) {
    throw new Error(`${review.slug} has a malformed YouTube video ID.`);
  }
  if (!review.article.sources.some((source) => source.href.includes(review.video.id))) {
    throw new Error(`${review.slug} must cite the exact embedded video in its source records.`);
  }
  for (const [label, date] of [['published', review.published], ['updated', review.updated]] as const) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      throw new Error(`${review.slug} ${label} date must use YYYY-MM-DD.`);
    }
  }
  const articleHtml = review.article.sections.map((section) => section.html).join('');
  if (classCount(articleHtml, 'review-comparison-details') !== 1) {
    throw new Error(`${review.slug} must contain exactly one native detailed comparison.`);
  }
  if (classCount(articleHtml, 'review-recommendation-card') !== 4) {
    throw new Error(`${review.slug} must contain exactly four recommendation cards.`);
  }
  if (classCount(articleHtml, 'review-faq-list') !== 1) {
    throw new Error(`${review.slug} must contain exactly one FAQ module.`);
  }
  return {
    ...review,
    author: {
      name: 'Aleksandar Spasevski',
      role: 'Editor at Coffeedant',
      image: 'images/author-aleksandar-spasevski.jpg',
      imageAlt: 'Aleksandar Spasevski, editor at Coffeedant',
      note: authorNote,
    },
    evaluation: {
      basis: {
        kind: 'research-led',
        label: 'Research-led assessment',
        disclosure: basisDisclosure,
      },
      scale: 10,
      dimensions: dimensions.map(makeDimension),
    },
  };
};

export const internalHref = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

export type ComparisonInput = {
  name: string;
  href?: string;
  quickDecision: string;
  priceClass: string;
  dimensions: string;
  heating: string;
  coffeeSetup: string;
  milkWorkflow: string;
  bestFor: string;
};

export const comparisonTablesHtml = (
  subject: string,
  comparisons: ComparisonInput[],
  note: string,
) => {
  const quickRows = comparisons.map((item) => {
    const name = item.href
      ? `<a href="${internalHref(item.href)}">${escapeHtml(item.name)}</a>`
      : escapeHtml(item.name);
    return `<tr><th scope="row">${name}</th><td data-label="Price position">${escapeHtml(item.priceClass)}</td><td data-label="The quick decision">${escapeHtml(item.quickDecision)}</td></tr>`;
  }).join('');
  const detailRows = comparisons.map((item) => {
    const name = item.href
      ? `<a href="${internalHref(item.href)}">${escapeHtml(item.name)}</a>`
      : escapeHtml(item.name);
    return `<tr><th scope="row">${name}</th><td data-label="Dimensions">${escapeHtml(item.dimensions)}</td><td data-label="Heating">${escapeHtml(item.heating)}</td><td data-label="Coffee setup">${escapeHtml(item.coffeeSetup)}</td><td data-label="Milk workflow">${escapeHtml(item.milkWorkflow)}</td><td data-label="Best fit">${escapeHtml(item.bestFor)}</td></tr>`;
  }).join('');
  return `
    <div class="review-table-wrap" role="region" aria-label="${escapeHtml(subject)} quick comparison" tabindex="0">
      <table class="review-table">
        <caption>${escapeHtml(subject)} and its closest alternatives</caption>
        <thead><tr><th scope="col">Machine</th><th scope="col">Price position</th><th scope="col">The quick decision</th></tr></thead>
        <tbody>${quickRows}</tbody>
      </table>
    </div>
    <details class="review-comparison-details">
      <summary><span class="review-details-label">Details</span><span class="review-details-description">Open the technical and workflow comparison</span></summary>
      <div class="review-table-wrap" role="region" aria-label="${escapeHtml(subject)} detailed comparison" tabindex="0">
        <table class="review-table review-table-detailed">
          <caption>Detailed ownership comparison</caption>
          <thead><tr><th scope="col">Machine</th><th scope="col">Dimensions</th><th scope="col">Heating</th><th scope="col">Coffee setup</th><th scope="col">Milk workflow</th><th scope="col">Best fit</th></tr></thead>
          <tbody>${detailRows}</tbody>
        </table>
      </div>
      <p class="review-table-note">${escapeHtml(note)}</p>
    </details>`;
};

export type RecommendationInput = {
  kicker: string;
  title: string;
  text: string;
  href: string;
  linkLabel: string;
  featured?: boolean;
};

export const recommendationCardsHtml = (items: RecommendationInput[]) => `
  <div class="review-recommendation-grid" data-commerce-ready="true">
    ${items.map((item) => `<article class="review-recommendation-card${item.featured ? ' review-recommendation-card-featured' : ''}">
      <p class="review-recommendation-kicker">${escapeHtml(item.kicker)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      <a href="${internalHref(item.href)}">${escapeHtml(item.linkLabel)} <span aria-hidden="true">→</span></a>
    </article>`).join('')}
  </div>`;

export const faqHtml = (items: Array<{ question: string; answer: string }>) => `
  <div class="review-faq-list">
    ${items.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join('')}
  </div>`;
