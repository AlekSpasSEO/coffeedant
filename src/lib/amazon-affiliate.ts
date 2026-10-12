import type { MachineReviewData, ReviewLink } from '../data/reviews';
import amazonCatalog from '../data/amazon-products.json';
import amazonOfferData from '../data/amazon-offers.json';

// Amazon Associate tracking IDs are public attribution values embedded in links,
// not API credentials. Keep this centralized so the storefront can be changed
// without rewriting every review record.
const AMAZON_ASSOCIATE_TAG = 'coffeedant03-20';
const OFFER_FRESHNESS_HOURS = 24;

type AmazonCatalogProduct = {
  asin: string;
  productName: string;
  sourceUrl: string;
  conditionLabel?: string;
  purchaseNote?: string;
};

type AmazonOffer = {
  asin: string;
  title: string;
  detailPageUrl: string;
  price: string | null;
  currency: string | null;
  availabilityType: string;
  availabilityMessage: string;
  checkedAt: string;
};

const catalog = amazonCatalog.products as Record<string, AmazonCatalogProduct>;
const offers = amazonOfferData.offers as Record<string, AmazonOffer>;

const isAmazonAffiliateLink = (link: ReviewLink) => (
  link.affiliate === true
  && /^https:\/\/(?:amzn\.to|(?:www\.)?amazon\.[^/]+)\//i.test(link.href)
);

const isFreshOffer = (offer: AmazonOffer | undefined) => {
  if (!offer?.checkedAt) return false;
  const checkedAt = Date.parse(offer.checkedAt);
  return Number.isFinite(checkedAt) && Date.now() - checkedAt <= OFFER_FRESHNESS_HOURS * 60 * 60 * 1000;
};

const formatCheckedAt = (iso: string) => new Intl.DateTimeFormat('en-US', {
  month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit',
  timeZone: 'UTC', timeZoneName: 'short',
}).format(new Date(iso));

const buildVerifiedAmazonLink = (review: MachineReviewData): ReviewLink | null => {
  const product = catalog[review.slug];
  if (!product) return null;

  const storedOffer = offers[review.slug];
  const offer = storedOffer?.asin === product.asin ? storedOffer : undefined;
  const fresh = isFreshOffer(offer);
  const url = new URL(offer?.detailPageUrl ?? `https://www.amazon.com/dp/${product.asin}`);
  url.searchParams.set('tag', AMAZON_ASSOCIATE_TAG);
  const availability = [product.conditionLabel, fresh ? offer.availabilityMessage : 'Check current availability on Amazon'].filter(Boolean).join(' · ');
  const checkedAt = fresh ? offer.checkedAt : undefined;

  return {
    label: product.conditionLabel === 'Amazon Renewed'
      ? (fresh && offer.price ? 'Check Amazon Renewed price' : 'Check Amazon Renewed availability')
      : (fresh && offer.price ? 'Check Amazon price' : 'Check Amazon availability'),
    href: url.toString(),
    note: [fresh ? [offer.price, availability].filter(Boolean).join(' · ')
      : 'Verified product page · live price shown by Amazon', product.purchaseNote].filter(Boolean).join(' · '),
    affiliate: true,
    primary: true,
    retailer: 'Amazon',
    exactProduct: true,
    price: fresh ? offer.price ?? undefined : undefined,
    availability,
    availabilityType: fresh ? offer.availabilityType : 'UNKNOWN',
    checkedAt,
    conditionLabel: product.conditionLabel,
    purchaseNote: product.purchaseNote,
  };
};

const buildAmazonSearchLink = (review: MachineReviewData): ReviewLink => {
  const url = new URL('https://www.amazon.com/s');
  url.searchParams.set('k', [review.brand, review.model, review.sku].filter(Boolean).join(' '));
  url.searchParams.set('tag', AMAZON_ASSOCIATE_TAG);

  return {
    label: 'Search Amazon',
    href: url.toString(),
    note: 'Affiliate search · verify the exact model, seller and warranty',
    affiliate: true,
    primary: true,
    retailer: 'Amazon',
    exactProduct: false,
  };
};

export const getReviewPurchaseLinks = (review: MachineReviewData): ReviewLink[] => {
  const nonAmazonLinks = review.links
    .filter((link) => !isAmazonAffiliateLink(link))
    .map((link) => link.primary ? { ...link, primary: false } : link);
  const amazonLink = buildVerifiedAmazonLink(review) ?? buildAmazonSearchLink(review);

  return [amazonLink, ...nonAmazonLinks];
};

export const getAmazonOfferCheckedLabel = (link: ReviewLink) => (
  link.checkedAt ? formatCheckedAt(link.checkedAt) : null
);
