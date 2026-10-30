import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { assertAuthoredOverview, renderAuthoredOverview } from '../../lib/review-overview.mjs';
import {
  buildResearchReview,
  comparisonTablesHtml,
  faqHtml,
  recommendationCardsHtml,
  type ComparisonInput,
  type RecommendationInput,
  type ResearchDimensionInput,
} from '../batch-review-builder';

type SourceInput = Omit<MachineReviewData['article']['sources'][number], 'id'>;

type DimensionCopy = {
  label?: string;
  score: number;
  claim: string;
  consequence: string;
  status: string;
  signals: [string, string, string];
};

export type UpgradeReviewProfile = {
  key: string;
  slug: string;
  productId: string;
  brand: string;
  model: string;
  sku: string;
  category: string;
  brandPath: string;
  title: string;
  // Required unless sectionOverrides.orientation supplies a complete authored opening.
  overview?: string;
  description: string;
  verdictLabel: string;
  verdict: string;
  assessment: string;
  image: string;
  imageAlt: string;
  published: string;
  updated?: string;
  price: MachineReviewData['price'];
  links: MachineReviewData['links'];
  facts: MachineReviewData['facts'];
  quickAnswers: MachineReviewData['quickAnswers'];
  bestFor: string[];
  avoidIf: string[];
  pros: string[];
  cons: string[];
  architecture: string;
  identityBoundary: string;
  primaryStrength: string;
  primaryLimit: string;
  setupNote: string;
  espressoNote: string;
  milkNote: string;
  workflowNote: string;
  buildNote: string;
  featuresNote: string;
  valueNote: string;
  ownerPattern: string;
  ownerCaution: string;
  maintenanceNote: string;
  dimensions: Record<ReviewDimensionId, DimensionCopy>;
  sources: SourceInput[];
  comparisons: ComparisonInput[];
  comparisonNote: string;
  recommendations: RecommendationInput[];
  faqs: Array<{ question: string; answer: string }>;
  finalTitle: string;
  finalVerdict: string[];
  video: MachineReviewData['video'];
  excludeSelfFromAlternatives?: boolean;
  // Use for a distinct review category whose evidence language differs from espresso.
  dimensionDiagnostics?: Partial<Record<ReviewDimensionId, Array<{ signal: string; guidance: string }>>>;
  sectionOverrides?: Partial<Record<string, string>>;
};

// Editorial rewrite date; individual source and price checks keep their own dates.
const UPDATED = '2026-10-30';
const dimensionIds: ReviewDimensionId[] = ['espresso', 'milk', 'workflow', 'build', 'features', 'value'];
const dimensionNames: Record<ReviewDimensionId, string> = {
  espresso: 'Espresso',
  milk: 'Milk',
  workflow: 'Workflow',
  build: 'Build',
  features: 'Features',
  value: 'Value',
};

const sourceIds = (profile: UpgradeReviewProfile) => profile.sources.map((_, index) => `${profile.key}-source-${index + 1}`);
const ref = (profile: UpgradeReviewProfile, indexes: number[]) => indexes
  .filter((index) => index < profile.sources.length)
  .map((index) => `<a href="#${profile.key}-source-${index + 1}">[source]</a>`)
  .join(' ');

const dimensionSources = (profile: UpgradeReviewProfile, id: ReviewDimensionId) => {
  const ids = sourceIds(profile);
  const positions: Record<ReviewDimensionId, number[]> = {
    espresso: [0, 1, 3, 4],
    milk: [0, 1, 3, 4],
    workflow: [0, 1, 3, 4, 5],
    build: [0, 1, 5, 6, 7],
    features: [0, 1, 3, 6],
    value: [2, 3, 7, 8, 9],
  };
  return positions[id].filter((position) => position < ids.length).map((position) => ids[position]);
};

const evidenceRows = (profile: UpgradeReviewProfile, id: ReviewDimensionId) => {
  const copy = profile.dimensions[id];
  const rowLabels: Record<ReviewDimensionId, [string, string, string]> = {
    espresso: ['Brew architecture', 'Control available', 'Recipe consequence'],
    milk: ['Steam or milk system', 'Operator input', 'Queue consequence'],
    workflow: ['Cold-start routine', 'Drink sequence', 'Cleanup load'],
    build: ['Core construction', 'Access and care', 'Support boundary'],
    features: ['Useful control', 'Missing control', 'Buyer relevance'],
    value: ['Checked price', 'Total station', 'Long-term fit'],
  };
  const labels = profile.category === 'Pod and drip coffee maker'
    ? (id === 'espresso' ? ['Pod extraction', 'Cup size and strength', 'Taste boundary']
      : id === 'milk' ? ['Carafe construction', 'Serving routine', 'Thermal consequence'] : rowLabels[id])
    : rowLabels[id];
  return copy.signals.map((signal, index) => ({
    signal: labels[index],
    evidence: signal,
    decision: index === 0
      ? copy.claim
      : index === 1
        ? copy.consequence
        : copy.status,
  }));
};

const makeDimension = (profile: UpgradeReviewProfile, id: ReviewDimensionId): ResearchDimensionInput => {
  const copy = profile.dimensions[id];
  return {
    id,
    label: copy.label ?? dimensionNames[id],
    score: copy.score,
    reason: copy.claim,
    buyerMeaning: copy.consequence,
    evidenceStatus: copy.status,
    sourceIds: dimensionSources(profile, id),
    deepDiveId: id,
    title: `${copy.label ?? dimensionNames[id]} evidence`,
    intro: [],
    evidence: evidenceRows(profile, id),
    diagnosis: profile.dimensionDiagnostics?.[id],
  };
};

export const buildUpgradeReview = (profile: UpgradeReviewProfile): MachineReviewData => {
  const sources = profile.sources.map((source, index) => ({ ...source, id: `${profile.key}-source-${index + 1}` }));
  const officialRefs = ref(profile, [0, 1, 6]);
  const independentRefs = ref(profile, [3, 4, 9]);
  const ownerRefs = ref(profile, [7, 8]);
  const priceRefs = ref(profile, [2]);
  const orientationOverride = profile.sectionOverrides?.orientation;
  if (orientationOverride) {
    const firstParagraph = orientationOverride.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1]
      .replace(/<a\b[\s\S]*?<\/a>/gi, '').replace(/<[^>]+>/g, ' ');
    assertAuthoredOverview(firstParagraph, profile.slug);
  }
  const overviewHtml = orientationOverride ?? renderAuthoredOverview({
    slug: profile.slug, overview: profile.overview, identityBoundary: profile.identityBoundary,
    primaryStrength: profile.primaryStrength, primaryLimit: profile.primaryLimit,
    citationHtml: `${officialRefs} ${independentRefs}`,
  });

  const review = buildResearchReview({
    slug: profile.slug,
    productId: profile.productId,
    brand: profile.brand,
    model: profile.model,
    sku: profile.sku,
    category: profile.category,
    brandPath: profile.brandPath,
    title: profile.title,
    description: profile.description,
    verdictLabel: profile.verdictLabel,
    verdict: profile.verdict,
    assessment: profile.assessment,
    image: profile.image,
    imageAlt: profile.imageAlt,
    published: profile.published,
    updated: profile.updated && profile.updated > UPDATED ? profile.updated : UPDATED,
    authorNote: profile.assessment,
    basisDisclosure: 'Coffeedant has not physically tested this product. Scores are editorial judgments from the cited evidence.',
    price: profile.price,
    links: profile.links,
    facts: profile.facts,
    quickAnswers: profile.quickAnswers,
    bestFor: profile.bestFor,
    avoidIf: profile.avoidIf,
    pros: profile.pros,
    cons: profile.cons,
    dimensions: dimensionIds.map((id) => makeDimension(profile, id)),
    alternatives: (profile.excludeSelfFromAlternatives
      ? profile.comparisons.filter((comparison) => comparison.href && comparison.href !== profile.slug && comparison.name.toLowerCase() !== `${profile.brand} ${profile.model}`.toLowerCase()).slice(0, 3)
      : profile.comparisons.slice(0, 3)).map((comparison) => ({
      name: comparison.name,
      reason: comparison.quickDecision,
      href: comparison.href ?? '/espresso-machine/breville-barista-express-bes870xl/',
    })),
    article: {
      methodology: `<p>Research-led assessment of the exact model identified above, using the linked manufacturer documentation, independent evaluations and owner accounts. Coffeedant has not physically tested this product. Source and price check dates remain attached to their records; this editorial rewrite does not reverify them.</p><p>${profile.ownerCaution}</p>`,
      sections: [
        {
          id: 'orientation', eyebrow: 'Start with the decision', title: `${profile.model}: the buying decision`, html: overviewHtml,
        },
        {
          id: 'setup', eyebrow: 'Before the first drink', title: `Setting up the ${profile.model}`, html: `
            <p><strong>System:</strong> ${profile.architecture}.</p>
            <p>${profile.setupNote} ${ref(profile, [0, 1, 5])}</p>`,
        },
        {
          id: 'espresso', eyebrow: `${profile.dimensions.espresso.label ?? 'Espresso'} assessment`, title: profile.dimensions.espresso.claim, html: `
            <p>${profile.espressoNote} ${officialRefs}</p>`,
        },
        {
          id: 'milk', eyebrow: `${profile.dimensions.milk.label ?? 'Milk'} assessment`, title: profile.dimensions.milk.claim, html: `
            <p>${profile.milkNote} ${ref(profile, [0, 1, 3, 4])}</p>`,
        },
        {
          id: 'workflow', eyebrow: 'Workflow assessment', title: profile.dimensions.workflow.claim, html: `
            <p>${profile.workflowNote} ${independentRefs}</p>`,
        },
        {
          id: 'build', eyebrow: 'Build and care assessment', title: profile.dimensions.build.claim, html: `
            <p>${profile.buildNote} ${ref(profile, [0, 1, 5, 6])}</p>
            <p>${profile.maintenanceNote}</p>`,
        },
        {
          id: 'features', eyebrow: 'Features assessment', title: profile.dimensions.features.claim, html: `
            <p>${profile.featuresNote} ${officialRefs}</p>`,
        },
        {
          id: 'value', eyebrow: 'Value assessment', title: profile.dimensions.value.claim, html: `
            <p>${profile.valueNote} ${priceRefs}</p>`,
        },
        {
          id: 'comparisons', eyebrow: 'Compare the alternatives', title: `${profile.model} versus the closest alternatives`, html: `
            ${comparisonTablesHtml(`${profile.brand} ${profile.model}`, profile.comparisons, profile.comparisonNote)}
            `,
        },
        {
          id: 'ownership', eyebrow: 'Owner reports', title: `Living with the ${profile.model}`, html: `
            <p>${profile.ownerPattern} ${ownerRefs}</p>`,
        },
        {
          id: 'recommendations', eyebrow: 'Choose by routine', title: `Other options for the ${profile.model} buyer`, html: `
            ${recommendationCardsHtml(profile.recommendations)}
          `,
        },
        {
          id: 'faq', eyebrow: 'Questions before buying', title: `${profile.model} FAQ`, html: faqHtml(profile.faqs),
        },
      ],
      sources,
      finalTitle: profile.finalTitle,
      finalVerdict: profile.finalVerdict,
    },
    video: profile.video,
  });
  if (!profile.sectionOverrides) return review;
  return {
    ...review,
    article: {
      ...review.article,
      sections: review.article.sections.map((section) => ({
        ...section,
        html: profile.sectionOverrides?.[section.id] ?? section.html,
      })),
    },
  };
};
