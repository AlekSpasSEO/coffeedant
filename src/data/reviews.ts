import { bambinoArticle } from './bambino-article';
import { bambinoPlusIdentity, bambinoPlusFacts, bambinoPlusPrice } from './products/bambino-plus';

export type ReviewLink = { label: string; href: string; note?: string; affiliate?: boolean; primary?: boolean };
export type ReviewTable = { caption: string; columns: Array<{ key: string; label: string }>; rows: Array<Record<string, string>> };
export type MachineReviewData = {
  slug: string; productId: string; brand: string; model: string; sku: string;
  title: string; description: string; verdictLabel: string; verdict: string; assessment: string;
  image: string; imageAlt: string; published: string; updated: string;
  author: { name: string; role: string; image: string; imageAlt: string; note: string };
  price: { msrp: string; typical: string; currency: string; numeric: string; checked: string; label: string };
  links: ReviewLink[];
  facts: Array<{ label: string; value: string }>;
  quickAnswers: Array<{ question: string; answer: string }>;
  bestFor: string[]; avoidIf: string[]; pros: string[]; cons: string[];
  alternatives: Array<{ name: string; reason: string; href: string }>;
  article: {
    methodology: string;
    sections: Array<{ id: string; eyebrow: string; title: string; html: string }>;
    sources: Array<{ id: string; label: string; href: string; note: string }>;
    finalTitle: string; finalVerdict: string[];
  };
  video: { id: string; title: string; creator: string; published: string; note: string };
};

export const bambinoReview: MachineReviewData = {
  slug: new URL(bambinoPlusIdentity.url_map[0].legacy_url).pathname,
  productId: bambinoPlusIdentity.product_id,
  brand: bambinoPlusIdentity.brand,
  model: 'Bambino Plus',
  sku: bambinoPlusIdentity.model_number,
  title: 'Breville Bambino Plus review',
  description: 'Is automatic milk worth the extra $200? A research-led Bambino Plus review covering the first week, grinder budget, espresso, maintenance and the alternatives.',
  verdictLabel: 'For everyday milk drinks',
  verdict: 'I would choose the Bambino Plus for a household making lattes and cappuccinos most days. Its quick-start heater and automatic milk remove two chores, but you still grind, dose and tamp. If you mostly drink espresso, the standard Bambino leaves $200 more for your grinder at the Breville US prices checked for this review.',
  assessment: 'Worth the premium when automatic milk earns its keep.',
  image: 'images/products/breville-bambino-plus.png',
  imageAlt: 'Breville Bambino Plus espresso machine',
  published: '2026-04-07',
  updated: '2026-09-15',
  author: {
    name: 'Aleksandar Spasevski', role: 'Editor at Coffeedant',
    image: 'images/author-aleksandar-spasevski.jpg',
    imageAlt: 'Aleksandar Spasevski, editor at Coffeedant',
    note: 'My question here is whether automatic milk deserves part of your grinder budget. I checked the US manuals, independent reviews and owner reports to work through that decision. This is a research-led review; I have not physically tested this machine.',
  },
  price: {
    label: 'Breville US price', msrp: `$${bambinoPlusPrice.amount.toFixed(2)}`,
    numeric: bambinoPlusPrice.amount.toFixed(2), currency: bambinoPlusPrice.currency,
    typical: 'Machine only; grinder sold separately', checked: 'September 15, 2026',
  },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4oTFUpH', note: 'Affiliate link · price at retailer', affiliate: true, primary: true },
    { label: 'Check Breville price', href: bambinoPlusPrice.source_url, note: 'Official US store' },
  ],
  facts: bambinoPlusFacts,
  quickAnswers: [
    { question: 'Which Bambino?', answer: 'Bambino Plus, BES500. This review covers the US model; the standard Bambino is BES450.' },
    { question: 'Do I need a grinder?', answer: 'For fresh-bean espresso, yes. The included dual-wall baskets also let you start with suitable pre-ground coffee.' },
    { question: 'Coffee in three seconds?', answer: 'That is Breville’s heater-readiness claim. Grinding, warming the cup and making the drink take additional time.' },
    { question: 'Brew and steam together?', answer: 'No. Make espresso, then texture milk. Automatic frothing reduces attention, not the number of steps.' },
    { question: 'Worth $200 over the base?', answer: 'For frequent milk drinks, I think so. For espresso or manual milk practice, start with the cheaper Bambino.' },
    { question: 'What is the full budget?', answer: 'Allow roughly $700–900 with a grinder, scale and initial coffee/care supplies. Those additions are planning allowances, not live offers.' },
  ],
  bestFor: [
    'A household that wants repeatable milk drinks with less milk-steaming practice',
    'Someone who wants a short startup routine and a separate, upgradeable grinder',
    'Beginners willing to learn the coffee preparation even when milk is automated',
  ],
  avoidIf: [
    'The machine would consume the money you need for an espresso grinder',
    'You want to select brew temperature or brew and steam at the same time',
    'You expect one button to grind the beans and make the whole drink',
  ],
  pros: [
    'ThermoJet heater with a claimed three-second ready time',
    'Automatic milk temperature and texture presets, plus manual steaming',
    'Both single-wall and dual-wall baskets in the current US bundle',
    'Separate grinder can stay with you through a machine upgrade',
  ],
  cons: [
    'No user-adjustable brew temperature', 'Coffee and milk happen in sequence',
    'Grinder cost belongs in the buying decision', 'Wand purging adds to the drip-tray emptying routine',
  ],
  alternatives: [
    { name: 'Standard Bambino', reason: 'Save the premium and learn manual milk.', href: '#compare-bambino' },
    { name: 'Gaggia Classic E24', reason: 'Consider the traditional 58 mm boiler route.', href: '#compare-manual' },
    { name: 'Bean-to-cup machine', reason: 'Choose automation for the whole drink.', href: '#compare-automatic' },
  ],
  article: bambinoArticle,
  video: {
    id: '2aIJAY3SJuU', title: 'Sage (Breville) Bambino Plus review after nearly four years',
    creator: 'Coffee Kev', published: '2023-11-30',
    note: 'Coffee Kev’s long-term perspective adds context beyond a short review. His UK Sage experience is separate from the US specifications and buying terms used here. This is an external review, not Coffeedant testing.',
  },
};
