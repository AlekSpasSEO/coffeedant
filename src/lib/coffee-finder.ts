import amazonOffersData from '../data/amazon-offers.json';
import finderSync from '../data/coffee-finder-sync.json';
import { modernReviews } from '../data/review-registry';
import { bambinoReview, getReviewOverallScore, type MachineReviewData } from '../data/reviews';
import { getReviewRouteDefinition } from '../data/review-routes';
import { getReviewPurchaseLinks } from './amazon-affiliate';
import finderInterface from '../../localization/interface.json';

export type CoffeeFinderWorkflow = 'one-touch' | 'guided' | 'hands-on' | 'manual' | 'capsule' | 'commercial';
export type CoffeeFinderDrink = 'espresso' | 'milk' | 'mixed';
export type CoffeeFinderExperience = 'beginner' | 'enthusiast' | 'advanced';
export type CoffeeFinderGrinder = 'built-in' | 'separate' | 'not-needed';
export type CoffeeFinderFootprint = 'compact' | 'standard' | 'large';
export type CoffeeFinderVolume = 'one-two' | 'three-five' | 'six-plus';
export type CoffeeFinderAvailability = 'current' | 'catalog' | 'limited';

export type CoffeeFinderItem = {
  brand: string;
  model: string;
  path: string;
  image: string;
  imageAlt: string;
  description: string;
  bestFor: string;
  amazonHref: string;
  amazonLabel: string;
  amazonNote?: string;
  priceLabel: string;
  priceUsd: number | null;
  priceCurrency: string;
  rating: number | null;
  workflow: CoffeeFinderWorkflow;
  drink: CoffeeFinderDrink;
  experience: CoffeeFinderExperience;
  grinder: CoffeeFinderGrinder;
  footprint: CoffeeFinderFootprint;
  volume: CoffeeFinderVolume;
  availability: CoffeeFinderAvailability;
  availabilityLabel: string;
  updated: string;
};

type AmazonOffer = {
  price: string | null;
  currency: string | null;
  availabilityType: string | null;
  availabilityMessage: string | null;
  checkedAt: string;
};

const amazonOffers = amazonOffersData.offers as Record<string, AmazonOffer | undefined>;
const compactPattern = /\b(?:compact|small|narrow|counter space|portable|stovetop)\b/i;
const largePattern = /\b(?:plumb|direct water|direct-water|rotary pump|two-group|three-group|cafina|slayer)\b/i;
const limitedPattern = /\b(?:sold out|out of stock|discontinued|legacy stock|pre-owned|used market|not verified|no current|production not confirmed|remaining listing)\b/i;

const combinedText = (review: MachineReviewData) => [
  review.brand, review.model, review.category, review.assessment, review.verdict,
  review.price.label, review.price.msrp, review.price.typical,
  ...review.bestFor, ...review.avoidIf, ...review.facts.flatMap((fact) => [fact.label, fact.value]),
].join(' ');

const parseMoney = (value: string | null | undefined) => {
  if (!value) return null;
  const parsed = Number(value.replace(/[^0-9.]/g, ''));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
};

const finderDescription = (verdict: string) => {
  const sentences = [...new Intl.Segmenter('en', { granularity: 'sentence' }).segment(verdict.trim())]
    .map(({ segment }) => segment);
  const first = sentences[0]?.trim() ?? verdict.trim();
  const combined = `${sentences[0] ?? ''}${sentences[1] ?? ''}`.trim();
  const excerpt = sentences[1] && combined.length <= 280 ? combined : first;
  if (excerpt.length <= 300) return excerpt;
  const cutoff = excerpt.lastIndexOf(' ', 297);
  return `${excerpt.slice(0, cutoff > 180 ? cutoff : 297).trimEnd()}…`;
};

const canonicalBrand = (brand: string) => brand.toLowerCase() === 'lelit' ? 'Lelit' : brand;

// Classify the reviewed hardware, not alternatives mentioned in its buying advice.
// Evidence for the weekly corrections: docs/reviews/2026-10-16-finder-link-audit.md.
const finderIdentityOverrides: Record<string, Partial<Pick<CoffeeFinderItem, 'workflow' | 'grinder' | 'drink' | 'experience' | 'footprint'>>> = {
  '/espresso-machine/delonghi-dedica/': { workflow: 'hands-on', grinder: 'separate' },
  '/espresso-machine/gaggia-classic-evo-pro/': { workflow: 'hands-on', grinder: 'separate', experience: 'beginner' },
  '/espresso-machine/gaggia-espresso-evolution-eg2115/': { workflow: 'hands-on', grinder: 'separate', experience: 'beginner' },
  '/espresso-machine/krups-opio-xp320840/': { workflow: 'hands-on', grinder: 'separate' },
  '/espresso-machine/la-pavoni-mini-cellini/': { workflow: 'hands-on', grinder: 'separate' },
  '/espresso-machine/lelit-grace-pl81t/': { workflow: 'hands-on', grinder: 'separate' },
  '/espresso-machine/quick-mill-vetrano-2b-evo/': { workflow: 'hands-on', grinder: 'separate' },
  '/espresso-machine/9barista-mk2/': { grinder: 'separate' },
  '/espresso-machine/ecm-puristika/': { drink: 'espresso' },
  '/espresso-machine/quick-mill-carola-evo/': { drink: 'espresso' },
  '/espresso-machine/melitta-cafina-ct8/': { grinder: 'built-in' },
  '/espresso-machine/melitta-cafina-xt6-bes870/': { grinder: 'built-in' },
  '/espresso-machine/melitta-cafina-xt7/': { grinder: 'built-in' },
  '/espresso-machine/delonghi-rivelia-exam44055b/': { workflow: 'one-touch', grinder: 'built-in', experience: 'beginner', footprint: 'standard' },
  // The BES995's substantial body and hopper access make it a large integrated station;
  // the US text and gallery disagree about which dimension axis is 17.9 inches.
  '/espresso-machine/breville-oracle-dual-boiler-bes995/': { footprint: 'large' },
  '/espresso-machine/gaggia-classic-evo/': { workflow: 'hands-on', grinder: 'separate', experience: 'beginner' },
  '/espresso-machine/gaggia-classic-gt/': { workflow: 'hands-on', grinder: 'separate', experience: 'enthusiast' },
  // Guided recipes do not imply an integrated grinder or a compact station.
  '/espresso-machine/fellow-espresso-series-1/': { workflow: 'hands-on', grinder: 'separate', experience: 'enthusiast', footprint: 'standard' },
  // Both current packages include a pressurized Flow Control path that can use pre-ground coffee;
  // their bottomless path still benefits from a separate espresso grinder.
  '/espresso-machine/flair-classic/': { workflow: 'manual', grinder: 'not-needed' },
  '/espresso-machine/flair-neo-flex/': { workflow: 'manual', grinder: 'not-needed' },
};

const inferWorkflow = (review: MachineReviewData, text: string): CoffeeFinderWorkflow => {
  const identity = `${review.brand} ${review.model} ${review.category}`;
  if (/\b(?:commercial espresso|commercial coffee|two-group|three-group|cafina|slayer.*single group|dalla corte mina)\b/i.test(identity)) return 'commercial';
  if (/\b(?:manual lever|hand-powered|manual espresso press|flair|rok espresso|9barista|europiccola|cafelat robot)\b/i.test(identity)) return 'manual';
  if (/\b(?:capsule|pod machine|nespresso|keurig)\b/i.test(identity)) return 'capsule';
  if (/\b(?:built-in grinder|integrated grinder|grinder-equipped|assisted tamp|oracle|barista express|barista pro|barista touch|ninja luxe)\b/i.test(text)) return 'guided';
  if (/\b(?:superautomatic|super-automatic|fully automatic|bean-to-cup|one-touch)\b/i.test(identity)
    || /\b(?:superautomatic|super-automatic|fully automatic|bean-to-cup)\b/i.test(text)) return 'one-touch';
  return 'hands-on';
};

const inferDrink = (text: string, workflow: CoffeeFinderWorkflow): CoffeeFinderDrink => {
  if (/\b(?:lattego|lattecrema|cappuccino|automatic milk|milk-heavy|milk drinks most days)\b/i.test(text)) return 'milk';
  if (workflow === 'manual' || workflow === 'capsule' || /\b(?:espresso-only|no steam|no built-in steam|black coffee)\b/i.test(text)) return 'espresso';
  return 'mixed';
};

const inferExperience = (text: string, workflow: CoffeeFinderWorkflow): CoffeeFinderExperience => {
  if (workflow === 'commercial' || /\b(?:pressure profil|flow control|advanced|installation|professional service)\b/i.test(text)) return 'advanced';
  if (workflow === 'one-touch' || workflow === 'capsule' || /\b(?:beginner|first machine|guided|forgiving|easy to use)\b/i.test(text)) return 'beginner';
  return 'enthusiast';
};

const inferGrinder = (text: string, workflow: CoffeeFinderWorkflow): CoffeeFinderGrinder => {
  if (workflow === 'one-touch' || workflow === 'guided' || /\b(?:built-in grinder|integrated grinder)\b/i.test(text)) return 'built-in';
  if (workflow === 'capsule' || /\b(?:pre-ground only|stovetop)\b/i.test(text)) return 'not-needed';
  return 'separate';
};

const inferFootprint = (text: string, workflow: CoffeeFinderWorkflow): CoffeeFinderFootprint => {
  if (largePattern.test(text) || workflow === 'commercial') return 'large';
  if (compactPattern.test(text) || workflow === 'manual' || workflow === 'capsule') return 'compact';
  return 'standard';
};

const inferVolume = (text: string, workflow: CoffeeFinderWorkflow): CoffeeFinderVolume => {
  if (workflow === 'commercial' || /\b(?:high volume|large household|direct plumb|dual boiler|heat exchanger|rotary pump)\b/i.test(text)) return 'six-plus';
  if (workflow === 'manual' || workflow === 'capsule' || /\b(?:one or two|single boiler|espresso-only|small household)\b/i.test(text)) return 'one-two';
  return 'three-five';
};

const inferAvailability = (review: MachineReviewData, offer?: AmazonOffer): Pick<CoffeeFinderItem, 'availability' | 'availabilityLabel'> => {
  if (offer?.availabilityType?.startsWith('IN_STOCK')) {
    return { availability: 'current', availabilityLabel: offer.availabilityMessage || 'Current Amazon offer' };
  }
  if (offer?.availabilityType === 'OUT_OF_STOCK') {
    return { availability: 'limited', availabilityLabel: offer.availabilityMessage || 'Currently unavailable on Amazon' };
  }
  if (limitedPattern.test(`${review.price.label} ${review.price.typical} ${review.verdict}`)) {
    return { availability: 'limited', availabilityLabel: 'Availability or condition needs checking' };
  }
  return { availability: 'catalog', availabilityLabel: 'Current Coffeedant review' };
};

const toFinderItem = (review: MachineReviewData): CoffeeFinderItem => {
  const text = combinedText(review);
  const identityOverride = finderIdentityOverrides[review.slug];
  const workflow = identityOverride?.workflow ?? inferWorkflow(review, text);
  const amazonLink = getReviewPurchaseLinks(review)[0];
  const offer = amazonLink.checkedAt ? amazonOffers[review.slug] : undefined;
  const liveUsdPrice = offer?.currency === 'USD' && offer.availabilityType?.startsWith('IN_STOCK')
    ? parseMoney(offer.price)
    : null;
  const reviewUsdPrice = review.price.currency === 'USD' ? parseMoney(review.price.numeric) : null;
  const availability = inferAvailability(review, offer);
  if (offer && amazonLink.conditionLabel) availability.availabilityLabel = amazonLink.availability ?? availability.availabilityLabel;

  return {
    brand: canonicalBrand(review.brand),
    model: review.model,
    path: review.slug,
    image: review.image,
    imageAlt: review.imageAlt,
    description: finderDescription(review.verdict),
    bestFor: review.bestFor[0] ?? review.verdict,
    amazonHref: amazonLink.href,
    amazonLabel: amazonLink.conditionLabel === 'Amazon Renewed' ? 'Shop Amazon Renewed' : (amazonLink.exactProduct ? 'Shop on Amazon' : 'Search Amazon'),
    amazonNote: amazonLink.purchaseNote,
    priceLabel: offer?.price ? [offer.price, amazonLink.conditionLabel].filter(Boolean).join(' · ') : (review.price.msrp ?? 'Price varies'),
    priceUsd: liveUsdPrice ?? reviewUsdPrice,
    priceCurrency: offer?.currency ?? review.price.currency,
    rating: getReviewOverallScore(review.evaluation),
    workflow,
    drink: identityOverride?.drink ?? inferDrink(text, workflow),
    experience: identityOverride?.experience ?? inferExperience(text, workflow),
    grinder: identityOverride?.grinder ?? inferGrinder(text, workflow),
    footprint: identityOverride?.footprint ?? inferFootprint(text, workflow),
    volume: inferVolume(text, workflow),
    ...availability,
    updated: review.updated,
  };
};

export const getCoffeeFinderCatalog = () => {
  const reviews = [...modernReviews, bambinoReview]
    .filter((review) => getReviewRouteDefinition(review.slug)?.family === 'espresso-machine');
  const items = reviews.map(toFinderItem).sort((a, b) => (
    a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model)
  ));

  return {
    schemaVersion: 2,
    locale: 'en-US',
    currency: 'USD',
    ui: finderInterface,
    generatedAt: finderSync.lastCatalogSync,
    cadenceDays: finderSync.cadenceDays,
    offerDataGeneratedAt: amazonOffersData.generatedAt,
    machineCount: items.length,
    brands: [...new Set(items.map((item) => item.brand))].sort((a, b) => a.localeCompare(b)),
    items,
  };
};
