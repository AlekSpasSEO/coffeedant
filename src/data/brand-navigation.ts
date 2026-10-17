import { brands } from './catalog';
import { modernReviews } from './review-registry';
import { bambinoReview, type MachineReviewData } from './reviews';

type NavigationBrand = {
  slug: string;
  name: string;
  country: string;
  path: string;
  hasGuide: boolean;
  reviews: MachineReviewData[];
};

const brandKey = (name: string) => name.trim().toLocaleLowerCase('en');
const guideBrands = [
  ...brands,
  { slug: 'keurig', path: '/keurig/', name: 'Keurig', country: 'United States' },
];
const byBrand = new Map<string, NavigationBrand>(guideBrands.map((brand) => [
  brandKey(brand.name),
  { ...brand, hasGuide: true, reviews: [] },
]));

// The Bambino has its own route outside the modern review manifest. Group by
// identity: brandPath can point at a category or a different brand's guide.
for (const review of [bambinoReview, ...modernReviews]) {
  const key = brandKey(review.brand);
  let brand = byBrand.get(key);
  if (!brand) {
    const slug = key.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    brand = {
      slug,
      name: review.brand,
      country: '',
      path: `/brands/#reviews-${slug}`,
      hasGuide: false,
      reviews: [],
    };
    byBrand.set(key, brand);
  }
  brand.reviews.push(review);
}

export const brandNavigation = [...byBrand.values()]
  .sort((a, b) => a.name.localeCompare(b.name, 'en'))
  .map((brand) => ({
    ...brand,
    reviews: brand.reviews.sort((a, b) => a.model.localeCompare(b.model, 'en')),
  }));
