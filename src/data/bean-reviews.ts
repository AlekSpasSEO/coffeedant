import expandedBeanReviews from './expanded-bean-reviews.json';

export type BeanReviewData = {
  slug: string; productId: string; roaster: string; coffee: string; title: string; description: string;
  image: string; imageAlt: string; imageCredit: string; imageSource: string;
  published: string; updated: string; market: string; price: string; priceChecked: string;
  officialUrl: string; verdict: string; bestFor: string[]; skipIf: string[];
  authorNote?: string; methodology?: string[]; finalTitle?: string; finalVerdict?: string;
  facts: { label: string; value: string }[];
  sections: { id: string; title: string; paragraphs: string[] }[];
  alternatives: { title: string; reason: string; href: string; internal?: boolean }[];
  faqs: { question: string; answer: string }[];
  sources: { id: string; title: string; href: string; note: string; checked: string; community?: boolean }[];
};

export const beanReviews: BeanReviewData[] = [{
  slug: '/coffee-beans/counter-culture-hologram/', productId: 'CD-BN-000001',
  roaster: 'Counter Culture Coffee', coffee: 'Hologram',
  title: 'Counter Culture Hologram review: a changing blend with a clear flavor promise',
  description: 'A research-led look at Counter Culture Hologram: rotating origins, roaster tasting notes, brew fit, freshness, pack sizes and dated US value.',
  image: 'https://counterculturecoffee.com/cdn/shop/files/Hologram_Main_770x.jpg?v=1749046044',
  imageAlt: 'Counter Culture Hologram whole-bean coffee in its purple and white 12-ounce bag',
  imageCredit: 'Counter Culture Coffee product-listing image; shown for identification, not a Coffeedant tasting photograph.',
  imageSource: 'https://counterculturecoffee.com/products/12-oz-hologram',
  published: '2026-10-13', updated: '2026-10-13', market: 'United States',
  price: '$20 for 12 oz', priceChecked: 'October 13, 2026',
  officialUrl: 'https://counterculturecoffee.com/products/12-oz-hologram',
  verdict: 'Hologram makes sense for a buyer who wants a medium-roast daily coffee with a fruit-and-chocolate brief, buys whole beans fresh, and accepts that a year-round blend changes its components. The roaster’s tasting words are a useful target, not a guarantee of what any one bag or brewer will taste like.',
  bestFor: ['One coffee for both filter and espresso experiments', 'A medium-roast profile that aims to combine fruit with chocolate', 'Buyers who value a roaster-published, date-sensitive blend breakdown'],
  skipIf: ['You need one fixed origin, variety and process every time', 'You want a low-acidity, uniformly dark chocolate profile', 'You cannot check roast date or finish a large bag while it tastes fresh'],
  facts: [
    { label: 'Identity', value: 'Counter Culture Hologram, year-round whole-bean blend' },
    { label: 'Roast', value: 'Medium, according to the roaster' },
    { label: 'Roaster notes', value: 'Fruity · milk chocolate · syrupy; not Coffeedant tasting notes' },
    { label: 'Origin / process', value: 'Rotating African and Latin American coffees; washed and natural sundried components' },
    { label: 'Variety', value: 'Not specified for the complete changing blend' },
    { label: 'Sizes', value: '12 oz, 24 oz and 5 lb listed for US direct purchase at check' },
  ],
  sections: [
    { id: 'identity', title: 'What is in the bag changes with the roast date', paragraphs: [
      'Hologram is a year-round recipe, not a fixed-origin lot. Counter Culture says it combines natural-sundried and washed coffees from long-term partners in Africa and Latin America. The natural components are intended to bring fruit and body; washed components are intended to bring pastry and chocolate. That describes the roaster’s design, not a Coffeedant sensory result. [1]',
      'At this check, the roaster’s selector offered an “August 29–Present” roast-date period alongside earlier periods, and the page listed changing proportions and named coffees from Guatemala, Uganda, Peru and other origins. The accessible page text did not reliably associate each composition with its selected date, so this review does not assign a particular percentage to today’s bag. Match the bag’s roast date to the live selector before treating a breakdown as current. Individual varieties were not specified for the full blend. [1]',
    ] },
    { id: 'flavor', title: 'Read the flavor notes as a direction, not a promise', paragraphs: [
      'Counter Culture labels Hologram “fruity,” “milk chocolate” and “syrupy.” The roaster says its team cups coffees and selects the most prominent descriptors; it also says no flavoring agents are added. These are roaster-attributed notes. Coffeedant has not tasted this coffee, scored its acidity or sweetness, or established that every lot has the same intensity. [1]',
      'An August 2026 Guardian comparison of eleven Counter Culture coffees identified Hologram’s fruit-and-chocolate character and relayed a home barista’s advice to keep milk drinks relatively small if you want the fruit to remain noticeable. That is an independent tasting context for a particular sample, not proof that a different roast-date bag will taste identical. Owner comments are mixed: some enjoy Hologram for both espresso and pour-over; another recent AeroPress owner struggled to find the advertised notes. These accounts help set expectations, not an average rating or a defect rate. [3] [4] [5]',
      'Our buying judgment is therefore about fit: Hologram has a more adventurous flavor brief than a straight caramel-and-nut blend, but the chocolate component gives it a familiar anchor. If any fruit note reads as unwanted sharpness to you, do not assume a finer grind alone will make this the right coffee. Try a smaller bag before committing to 24 oz or 5 lb.',
    ] },
    { id: 'brewing', title: 'Filter, espresso and milk ask different questions', paragraphs: [
      'Counter Culture markets the blend for various brew methods and suggests grinding immediately before brewing. Its broad starting point is one gram of coffee to seventeen grams of water for most devices. For a 20 g filter dose, that implies about 340 g water; it is a starting ratio, not an exact recipe or quality guarantee. Adjust grind and ratio one variable at a time, using the actual bag and brewer as the final reference. [1]',
      'Espresso uses a different ratio and extraction regime, so do not copy the 1:17 filter suggestion into a portafilter. Begin with your machine and basket’s normal dose, record beverage mass and time, taste, and make small grinder changes. Milk can soften fruit and emphasize chocolate, but a large milk drink can also hide the reason you chose Hologram. The Guardian’s smaller-milk suggestion is a useful test, not a rule. [3]',
      'For people alternating brew methods, a grinder that can return repeatably to an espresso setting matters more than a bag claiming “all-purpose.” Coffeedant’s grinder guide compares the trade-offs, and its Encore ESP review covers a lower-cost mixed-method route. The coffee cannot compensate for stale grinding, unsuitable water or an unrepeatable recipe. [1] [2]',
    ] },
    { id: 'freshness', title: 'Buy for the roast date and your consumption rate', paragraphs: [
      'Counter Culture advises checking a “Roasted On” date rather than a best-by date. Its freshness guide recommends keeping whole beans tightly sealed in the original one-way-valve bag with excess air pressed out, or in an airtight container that lets carbon dioxide escape without admitting oxygen. Grind just before brewing. The advice is more useful than a rigid claim that all coffees peak on the same day: roast, packaging, shipping, storage and brewing method differ. [2]',
      'A grocery-shelf bag and a direct-order bag can have different histories even when the front label is the same. Check the actual roast date and package condition. If you drink one or two cups daily, start with 12 oz; the 24 oz and 5 lb options make sense only if your household or office will use them while they still meet your preferred flavor standard. Counter Culture specifically advises against refrigerating or freezing opened coffee because it can absorb moisture and odors, and recommends a cool, dry place instead. [1] [2]',
    ] },
    { id: 'value', title: 'The $20 direct price is a dated comparison point', paragraphs: [
      'On October 13, 2026, the US roaster page displayed $20 with 12 oz selected and offered 24 oz and 5 lb size choices. It also displayed a subscription saving, but the exact subscription terms, shipping, taxes and checkout total should be checked in the current cart. At $20 for 12 oz, the simple bean cost is about $0.059 per gram before shipping and tax. A 20 g filter dose therefore uses about $1.18 of beans. Waste while dialing in, equipment, water and milk add to the actual cup cost. [1]',
      'That price is not a promise about Target, grocery stores or future direct orders. The better value question is whether the bag’s roast date, rotating composition and flavor direction make you likely to finish it. A cheaper older bag can be poor value if you use only half. A larger bag is not automatically economical when it outlasts the freshness you enjoy.',
    ] },
    { id: 'alternatives', title: 'Choose an alternative for a specific reason', paragraphs: [
      'If you want a more overtly caramel-and-nutty brief, consider Counter Culture Big Trouble and verify its current recipe and roast date. If you want a more floral and citrus-led direction, check Counter Culture Apollo. Those are roaster-described alternatives, not coffees Coffeedant has tasted or ranked against Hologram. If you want the origin to stay fixed, choose a current single-origin listing whose lot, process and harvest information are explicit. [6] [7]',
      'For the equipment side, a grinder with repeatable settings matters if you plan to move from espresso to pour-over with the same bag. Read our grinder comparison before buying both a new coffee and a new grinder; do not assume the product name alone determines the resulting cup.',
    ] },
  ],
  alternatives: [
    { title: 'Counter Culture Big Trouble', reason: 'Roaster-described caramel and nut direction; check current blend details.', href: 'https://counterculturecoffee.com/products/big-trouble' },
    { title: 'Counter Culture Apollo', reason: 'A more floral and citrus-led roaster brief; check current lot.', href: 'https://counterculturecoffee.com/products/apollo' },
    { title: 'Coffee grinder guide', reason: 'Match a grinder to espresso and filter changes.', href: '/grinder/', internal: true },
  ],
  faqs: [
    { question: 'Is Hologram a single-origin coffee?', answer: 'No. Counter Culture calls it a year-round blend and publishes changing components by roast-date period.' },
    { question: 'What does Hologram taste like?', answer: 'The roaster describes it as fruity, milk chocolate and syrupy. Coffeedant has not tasted it; your bag, recipe and palate can differ.' },
    { question: 'Can I brew Hologram as espresso?', answer: 'Yes, the roaster positions it for multiple brew methods. Espresso needs its own dose, grind and beverage ratio rather than the roaster’s general 1:17 filter starting point.' },
    { question: 'Which bag size should I start with?', answer: 'Start with 12 oz if the flavor profile is new to you. The roaster also listed 24 oz and 5 lb at this check; buy larger only if you will use it while you like its freshness.' },
    { question: 'How should I store it?', answer: 'Follow the roaster’s guidance: keep whole beans tightly sealed in the original valve bag, with air pressed out, or in a suitable airtight container, and grind just before brewing.' },
    { question: 'Are the origins and varieties always the same?', answer: 'No. Components rotate by roast-date period, and the complete blend’s varieties were not specified in the checked product record.' },
  ],
  sources: [
    { id: 's1', title: 'Counter Culture Hologram product and blend record', href: 'https://counterculturecoffee.com/products/12-oz-hologram', note: 'Official identity, roast, notes, changing blend selector, process, sizes, brew guidance and dated US direct price.', checked: '2026-10-13' },
    { id: 's2', title: 'Counter Culture Coffee Basics: Freshness', href: 'https://counterculturecoffee.com/blogs/counter-culture-coffee/coffee-basics-freshness', note: 'Roast-date and whole-bean storage guidance from the roaster.', checked: '2026-10-13' },
    { id: 's3', title: 'The Guardian: eleven Counter Culture coffees', href: 'https://www.theguardian.com/thefilter-us/2026/aug/26/counter-culture-coffee-review', note: 'Independent sample-based Hologram tasting and attributed small-milk-drink advice; not Coffeedant tasting.', checked: '2026-10-13' },
    { id: 's4', title: 'r/espresso: first Counter Culture impressions', href: 'https://www.reddit.com/r/espresso/comments/1o2hiw8/first_time_trying_counter_culture/', note: 'Self-selected owner use across espresso and pour-over; not representative quality data.', checked: '2026-10-13', community: true },
    { id: 's5', title: 'r/AeroPress: Hologram dialing-in question', href: 'https://www.reddit.com/r/AeroPress/comments/1wok45c/counter_culture_hologram_tasting_genericbitter/', note: 'One recent owner’s difficulty finding the labeled flavor notes; not a general result.', checked: '2026-10-13', community: true },
    { id: 's6', title: 'Counter Culture Big Trouble', href: 'https://counterculturecoffee.com/products/big-trouble', note: 'Roaster listing for an alternative flavor direction; confirm current details at purchase.', checked: '2026-10-13' },
    { id: 's7', title: 'Counter Culture Apollo', href: 'https://counterculturecoffee.com/products/apollo', note: 'Roaster listing for an alternative flavor direction; confirm current details at purchase.', checked: '2026-10-13' },
  ],
}, ...(expandedBeanReviews as BeanReviewData[])];

export const getBeanReview = (slug: string) => beanReviews.find((review) => review.slug === slug);
