import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
type SourceInput = UpgradeReviewProfile['sources'][number];
type ProductConfig = {
  key: string;
  slug: string;
  productId: string;
  brand: string;
  model: string;
  sku: string;
  brandPath: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  official: string;
  priceUrl: string;
  priceLabel: string;
  price: string;
  priceNumeric: string;
  priceContext: string;
  currency?: 'USD' | 'GBP';
  exactIdentity: string;
  coffeeSystem: string;
  milkSystem: string;
  grinder: string;
  interface: string;
  capacity: string;
  dimensions: string;
  maintenance: string;
  strength: string;
  limit: string;
  sources: SourceInput[];
  comparisons: UpgradeReviewProfile['comparisons'];
  recommendations: UpgradeReviewProfile['recommendations'];
  video: UpgradeReviewProfile['video'];
  rating: [number, number, number, number, number, number];
};

const dim = (score: number, claim: string, consequence: string, signals: [string, string, string]): DimensionCopy => ({
  score,
  claim,
  consequence,
  status: 'Official exact-model documentation, dated market context, independent evaluation and owner evidence checked September 23, 2026',
  signals,
});

const makeProfile = (p: ProductConfig): UpgradeReviewProfile => ({
  key: p.key,
  slug: p.slug,
  productId: p.productId,
  brand: p.brand,
  model: p.model,
  sku: p.sku,
  category: 'Superautomatic espresso machine',
  brandPath: p.brandPath,
  title: p.title,
  description: p.description,
  verdictLabel: `For households that want ${p.strength.toLowerCase()}`,
  verdict: `Choose the ${p.model} for ${p.strength.toLowerCase()}. Skip it when ${p.limit.toLowerCase()} is a deal-breaker.`,
  assessment: `${p.strength} The central trade-off is ${p.limit.toLowerCase()}`,
  image: p.image,
  imageAlt: p.imageAlt,
  published: '2026-07-27',
  updated: '2026-09-23',
  price: {
    label: p.priceLabel,
    msrp: p.price,
    typical: p.priceContext,
    currency: p.currency ?? 'USD',
    numeric: p.priceNumeric,
    checked: 'September 23, 2026',
  },
  links: [
    { label: 'Check current listing', href: p.priceUrl, note: `${p.priceLabel}; stock, tax, condition and warranty can change`, primary: true },
    { label: 'Open official product information', href: p.official, note: 'Manufacturer identity, feature and specification record' },
  ],
  facts: [
    { label: 'Exact identity', value: p.exactIdentity },
    { label: 'Coffee system', value: p.coffeeSystem },
    { label: 'Milk system', value: p.milkSystem },
    { label: 'Grinder', value: p.grinder },
    { label: 'Interface', value: p.interface },
    { label: 'Capacity', value: p.capacity },
    { label: 'Dimensions', value: p.dimensions },
    { label: 'Owner care', value: p.maintenance },
  ],
  quickAnswers: [
    { question: `What exact ${p.model} does this review cover?`, answer: p.exactIdentity },
    { question: 'Does it grind and brew automatically?', answer: `Yes. ${p.grinder}` },
    { question: 'How does it make milk drinks?', answer: p.milkSystem },
    { question: 'What is the strongest reason to buy it?', answer: p.strength },
    { question: 'What is the main limitation?', answer: p.limit },
    { question: 'Is cleaning fully automatic?', answer: `No. ${p.maintenance}` },
  ],
  bestFor: [p.strength, 'A repeated bean-to-cup routine with saved adjustments', 'An owner who will follow the exact water, coffee and milk cleaning instructions'],
  avoidIf: [p.limit, 'You want direct portafilter and puck preparation control', 'No one in the household will own milk-system and brew-system care'],
  pros: [p.strength, p.grinder, p.interface, 'Guided rinse and maintenance programs'],
  cons: [p.limit, 'The closed brew system limits direct puck access', 'Milk hardware adds cleaning work', 'Regional generations and article numbers are easy to confuse'],
  architecture: `a bean-to-cup appliance with ${p.grinder.toLowerCase()}, ${p.coffeeSystem.toLowerCase()}, and ${p.milkSystem.toLowerCase()}`,
  identityBoundary: p.exactIdentity,
  primaryStrength: p.strength,
  primaryLimit: p.limit,
  setupNote: `Confirm the rating plate, article number, voltage, included milk parts and warranty before setup. Allow the documented clearances, set water hardness, install the filter when specified, and let several drinks settle before making a large grinder change.`,
  espressoNote: `${p.coffeeSystem} Start with a short, medium-strength recipe and one bean. Change one setting at a time, allow grinder changes to work through the system, and judge several drinks rather than one transition shot.`,
  milkNote: `${p.milkSystem} Cold milk, consistent hose or container placement and prompt cleaning matter more than the menu name alone.`,
  workflowNote: `${p.interface} Daily ownership still includes water, beans, grounds, tray, rinses and milk care.`,
  buildNote: `The enclosed brew path makes exact-model service support important. ${p.dimensions}`,
  featuresNote: `${p.coffeeSystem} A long menu only adds value when the household will save and repeat the useful recipes.`,
  valueNote: `${p.priceLabel} showed ${p.price}: ${p.priceContext}`,
  ownerPattern: `Owners most often discuss grinder settling, drink ratios, milk temperature, rinse water, cleaning prompts, consumables and service access.`,
  ownerCaution: `Self-selected posts rarely control for article number, firmware, beans, water, setup or maintenance. They identify questions, not a failure rate or expected service life for ${p.sku}.`,
  maintenanceNote: p.maintenance,
  dimensions: {
    espresso: dim(p.rating[0], `${p.coffeeSystem} provide repeatable automatic coffee within a closed system.`, 'Recipe adjustment is easier than direct puck control, but the ceiling is different.', [p.grinder, p.coffeeSystem, 'Beans, water, dose, volume and grinder settling still change the cup.']),
    milk: dim(p.rating[1], p.milkSystem, 'Convenience must be judged together with the cleaning sequence.', [p.milkSystem, 'Milk formulation and temperature affect texture.', 'Every milk session creates a same-day cleaning task.']),
    workflow: dim(p.rating[2], p.interface, 'The score includes refills, rinses, grounds and tray work.', [p.interface, p.capacity, 'Saved drinks help only after the recipe is tuned.']),
    build: dim(p.rating[3], 'The internal brew unit is not an owner-removable wash-out module.', 'Routine programs are owner tasks; internal repairs need exact parts and qualified service.', [p.dimensions, p.maintenance, 'Match article number, voltage and regional support.']),
    features: dim(p.rating[4], p.coffeeSystem, 'Drink breadth is useful when the controls remain understandable.', [p.coffeeSystem, p.interface, p.milkSystem]),
    value: dim(p.rating[5], `${p.price} needs dated condition, stock and warranty context.`, 'Compare the complete ownership path, not the menu count alone.', [`${p.priceLabel}: ${p.price}`, p.priceContext, 'Filters, cleaners, milk care and service add cost.']),
  },
  sources: p.sources,
  comparisons: p.comparisons,
  comparisonNote: 'Match article number, generation, region, voltage, milk hardware, included connectivity and warranty before comparing price. Similar JURA names can describe materially different model years.',
  recommendations: p.recommendations,
  faqs: [
    { question: `Is the ${p.model} fully automatic?`, answer: 'It grinds, doses and brews automatically, but it still needs refilling, waste handling, milk care and prompted cleaning.' },
    { question: `What exact version does this page cover?`, answer: p.exactIdentity },
    { question: 'Can it use pre-ground coffee?', answer: 'Use the documented bypass chute and quantity only; confirm the exact manual because instructions vary by generation.' },
    { question: 'Can it make two drinks at once?', answer: 'That depends on the selected recipe and exact generation. Two black drinks do not automatically mean two complete milk drinks.' },
    { question: 'Does an app replace the front controls?', answer: 'No. Connectivity adds remote selection or management where supported, but setup, cups, ingredients and cleaning remain physical tasks.' },
    { question: 'Is the brew unit removable?', answer: 'No. Follow the automated cleaning program and arrange qualified service for internal work.' },
    { question: `Is ${p.price} the permanent worldwide price?`, answer: `No. It is dated ${p.priceLabel.toLowerCase()} context checked September 23, 2026. Region, tax, stock, condition and warranty vary.` },
    { question: 'How should I use owner reports?', answer: 'Use them to identify setup, cleaning and support questions. Do not convert anecdotal posts into a reliability percentage.' },
  ],
  finalTitle: `${p.model}: buy the workflow, not the menu count`,
  finalVerdict: [
    `${p.strength} The documented controls can make a consistent household routine once the recipes are tuned.`,
    `${p.limit} Confirm the exact article number and local support, then price cleaning and service as part of ownership.`,
  ],
  video: p.video,
});

const juraComparisons = (model: string, price: string): UpgradeReviewProfile['comparisons'] => [
  { name: model, quickDecision: 'Choose the reviewed machine when its exact drink menu and ownership routine match the household.', priceClass: price, dimensions: 'See the exact-model facts above', heating: 'JURA Thermoblock platform', coffeeSetup: 'Integrated automatic grinder and 5-16 g brew unit', milkWorkflow: 'Automatic hose-fed milk path with same-day cleaning', bestFor: 'Guided bean-to-cup operation' },
  { name: 'JURA E6', href: '/espresso-machine/jura-e6/', quickDecision: 'Choose the least expensive current JURA here when 11 hot specialties are enough.', priceClass: '$1,899 current US direct reference', dimensions: '11 W by 13.8 H by 17.6 D in', heating: 'Single automatic Thermoblock platform', coffeeSetup: 'P.A.G. grinder and 5-16 g brew unit', milkWorkflow: 'HP1 Easy Cappuccino system', bestFor: 'Focused hot coffee and cappuccino' },
  { name: 'JURA E8', href: '/espresso-machine/jura-e8/', quickDecision: 'Choose the current fifth-generation middle ground for 27 Hot, Light and Sweet specialties.', priceClass: '$2,599 dated US retailer reference', dimensions: '11 W by 13.8 H by 17.6 D in', heating: 'Automatic Thermoblock platform', coffeeSetup: 'P.A.G.2 grinder and 5-16 g brew unit', milkWorkflow: 'Automatic HP3 milk system', bestFor: 'Broader hot and sweet menu' },
  { name: 'JURA Z10', href: '/espresso-machine/jura-z10/', quickDecision: 'Choose the current flagship for Cold Extraction, 51 specialties and four profiles.', priceClass: '$4,499 current US direct reference', dimensions: '12.6 W by 14.3 H by 18.5 D in', heating: 'Automatic Thermoblock platform', coffeeSetup: 'P.R.G.2+ grinder and 5-16 g brew unit', milkWorkflow: 'HP3 milk system with Milk Assistant', bestFor: 'Maximum menu breadth and cold coffee' },
];

const juraRecommendations: UpgradeReviewProfile['recommendations'] = [
  { kicker: 'Focused value', title: 'JURA E6', text: 'Choose 11 hot specialties and a simpler button-led routine when breadth is not worth another $700.', href: '/espresso-machine/jura-e6/', linkLabel: 'Read the E6 review', featured: true },
  { kicker: 'Current middle ground', title: 'JURA E8', text: 'Choose the fifth-generation E8 for Hot, Light and Sweet recipes without Z10 pricing.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read the E8 review' },
  { kicker: 'Flagship breadth', title: 'JURA Z10', text: 'Choose the Z10 for Cold Extraction, four profiles and the widest current home menu.', href: '/espresso-machine/jura-z10/', linkLabel: 'Read the Z10 review' },
  { kicker: 'Serviceable alternative', title: "De'Longhi Eletta Explore", text: 'Compare a removable brew group and broad hot-and-cold menu when owner access matters.', href: '/espresso-machine/delonghi-eletta-explore-ecam450/', linkLabel: 'Read the Eletta Explore review' },
];

const products: ProductConfig[] = [
  {
    key: 'gaggia-velasca-ri8260-3', slug: '/espresso-machine/gaggia-velasca-ri8260-3/', productId: 'CD-EM-000180', brand: 'Gaggia', model: 'Velasca', sku: 'current North American Velasca listing; historical route suffix RI8260-3 is not exposed on the live page', brandPath: '/gaggia/',
    title: 'Gaggia Velasca RI8260-3 review: the current US pannarello model at $699', description: 'A research-led Gaggia Velasca review covering the unresolved RI8260-3 route suffix, current North American pannarello model, ten-step ceramic grinder, $699 price and care.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/Velasca_IMG_9827_01_76ccc716-f31f-45c0-86d2-daec13810a13_1024x1024.jpg?v=1571329184', imageAlt: 'Black Gaggia Velasca automatic espresso machine with pannarello wand',
    official: 'https://www.gaggia-na.com/products/gaggia-velasca', priceUrl: 'https://www.gaggia-na.com/products/gaggia-velasca', priceLabel: 'Gaggia North America direct price', price: '$699.00', priceNumeric: '699.00', priceContext: 'Current in-stock North American listing; the live page does not expose the historical RI8260-3 suffix, so confirm the delivered rating plate',
    exactIdentity: 'This route historically says RI8260-3. The live Gaggia North America page identifies the current pannarello-equipped Velasca but does not expose an RI suffix. This review does not silently equate it with Velasca Prestige RI8263 or claim an unverified electrical code.',
    coffeeSystem: 'Dedicated espresso, espresso lungo and special-drink controls with five aroma strengths, three temperatures, programmable volume and adjustable pre-infusion', milkSystem: 'Manual auto-aerating pannarello for steam and hot water; milk remains a separate hands-on step', grinder: 'Built-in ceramic burr grinder with ten adjustment positions, five strength settings and a bypass doser', interface: 'Monochrome display with physical drink and menu buttons', capacity: '54 oz front-removable water tank, 10.5 oz bean hopper and 10-puck grounds bin', dimensions: '10.3 W by 13.5 H by 17 D in; 17.6 lb', maintenance: 'Remove, rinse and lubricate the Gaggia brew group as directed; empty the tray and bin, descale separately, and rinse the pannarello immediately after milk.',
    strength: 'A compact front-access machine with ten grinder steps and an owner-removable brew group', limit: 'The RI8260-3 suffix is unresolved and milk is manual',
    sources: [
      { label: 'Gaggia North America: Velasca', href: 'https://www.gaggia-na.com/products/gaggia-velasca', note: 'Official current North American identity, price, grinder, pannarello, capacities and dimensions.' },
      { label: 'Gaggia product manuals', href: 'https://www.gaggia-na.com/pages/product-manuals', note: 'Official support route for setup, cleaning and exact delivered documentation.' },
      { label: 'Gaggia North America direct listing', href: 'https://www.gaggia-na.com/products/gaggia-velasca', note: '$699 in-stock context checked September 23, 2026; tax and warranty can change.' },
      { label: 'Whole Latte Love: Velasca review', href: 'https://www.wholelattelove.com/blogs/reviews/review-of-gaggia-velasca-velasca-prestige-bean-to-cup-coffee-machines', note: 'Independent family comparison and workflow context; exact current specifications remain anchored to Gaggia.' },
      { label: 'Gaggia Velasca: Unboxing, Startup, and First Use', href: 'https://www.youtube.com/watch?v=NhUJX7DuhFw', note: 'Independent retailer video published December 19, 2023, used for visible workflow context; route-suffix claims are not inferred from the video.' },
      { label: 'Gaggia product search', href: 'https://www.gaggia.com/product-search/', note: 'Official model-code lookup used to keep unresolved suffix details explicit.' },
      { label: 'Gaggia automatic machines', href: 'https://www.gaggia.com/automatic-machines/', note: 'Official family context separating Velasca from the carafe-equipped Velasca Prestige.' },
      { label: 'Velasca owner discussions', href: 'https://www.reddit.com/r/superautomatic/search/?q=Gaggia%20Velasca&restrict_sr=1', note: 'Self-selected owner context for recipes and cleaning, not quantified reliability evidence.' },
      { label: 'Gaggia owner discussions', href: 'https://www.reddit.com/r/superautomatic/search/?q=Gaggia&restrict_sr=1', note: 'Broader community context for removable-group care and grinder adjustment.' },
      { label: 'Barista Hustle water background', href: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/', note: 'Independent water-composition background; the delivered manual controls machine-safe practice.' },
    ],
    comparisons: [
      { name: 'Gaggia Velasca', quickDecision: 'Choose the pannarello model for manual milk and owner brew-group access.', priceClass: '$699 current US direct reference', dimensions: '10.3 W by 13.5 H by 17 D in', heating: 'Automatic bean-to-cup platform', coffeeSetup: 'Ten-step ceramic grinder', milkWorkflow: 'Manual pannarello', bestFor: 'Compact black coffee and occasional manual milk' },
      { name: 'Gaggia Velasca Prestige', href: '/espresso-machine/gaggia-velasca-prestige-ri8263/', quickDecision: 'Choose RI8263/47 when an automatic removable carafe is worth the added cleaning.', priceClass: '$799 current US direct reference', dimensions: '10.3 W by 13.5 H by 17 D in', heating: 'Automatic bean-to-cup platform', coffeeSetup: 'Ten-step ceramic grinder', milkWorkflow: 'Automatic detachable carafe', bestFor: 'One-touch cappuccino' },
      { name: 'Gaggia Anima', href: '/espresso-machine/gaggia-anima/', quickDecision: 'Choose a slimmer, simpler current Gaggia pannarello route when five grinder steps are enough.', priceClass: '$699 current US direct reference', dimensions: 'About 8.8 W by 13.4 H by 16.9 D in', heating: 'Automatic bean-to-cup platform', coffeeSetup: 'Five-step ceramic grinder', milkWorkflow: 'Manual pannarello', bestFor: 'Narrow counter space' },
    ],
    recommendations: [
      { kicker: 'Exact one-touch sibling', title: 'Gaggia Velasca Prestige', text: 'Choose the verified RI8263/47 carafe model when automatic milk matters.', href: '/espresso-machine/gaggia-velasca-prestige-ri8263/', linkLabel: 'Read the Velasca Prestige review', featured: true },
      { kicker: 'Slim manual milk', title: 'Gaggia Anima', text: 'Choose the Anima for a narrower current pannarello machine.', href: '/espresso-machine/gaggia-anima/', linkLabel: 'Read the Anima review' },
      { kicker: 'Profiles and wand', title: 'Gaggia Cadorna Barista Plus', text: 'Choose four profiles and a two-hole manual wand for a more capable shared routine.', href: '/espresso-machine/gaggia-cadorna-barista-plus-ri9603-47/', linkLabel: 'Read the Cadorna review' },
      { kicker: 'Broader one-touch menu', title: 'Gaggia Cadorna Prestige', text: 'Choose a current carafe machine with four profiles and a much broader saved-drink menu.', href: '/espresso-machine/gaggia-cadorna-prestige/', linkLabel: 'Read the Cadorna Prestige review' },
    ],
    video: { id: 'NhUJX7DuhFw', title: 'Gaggia Velasca Espresso Machine: Unboxing, Startup, & First Use', creator: 'Whole Latte Love', published: '2023-12-19', note: 'Independent retailer workflow evidence. The current price, exact identity boundary and specifications are verified separately.' }, rating: [7.9, 6.8, 7.9, 7.6, 7.5, 7.5],
  },
  {
    key: 'jura-e6', slug: '/espresso-machine/jura-e6/', productId: 'CD-EM-000181', brand: 'JURA', model: 'E6 Dark Inox NAC', sku: 'Article 15621, North America', brandPath: '/jura/',
    title: 'JURA E6 review: 11 hot specialties at the current $1,899 entry point', description: 'A research-led JURA E6 Dark Inox NAC review covering article 15621, 11 specialties, P.A.G. grinder, Easy Cappuccino milk system, $1,899 US price and care.',
    image: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fe-linie-2022%2Fe6%2Fe6-dark-inox-ec-15439%2Fe6_ec_darkinox_packshot.jpg%3Fcb%3D249575&w=1920&q=75', imageAlt: 'JURA E6 Dark Inox automatic coffee machine', official: 'https://us.jura.com/en/homeproducts/machines/e6-dark-inox-nac-15621', priceUrl: 'https://shopjura.com/e6-dark-inox-nac.html', priceLabel: 'JURA US official shop price', price: '$1,899.00', priceNumeric: '1899.00', priceContext: 'Current in-stock Dark Inox NAC article 15621; tax, stock and bundle can change',
    exactIdentity: 'Current North American E6 Dark Inox NAC, article 15621. Official image paths can retain an earlier EC article code, so specifications are taken from the 15621 page and NAC manual, not inferred from the media filename.', coffeeSystem: 'Eleven hot specialties, ten strength levels, a 5-16 g variable brewing unit and JURA Pulse Extraction Process', milkSystem: 'HP1 Easy Cappuccino system draws milk through a hose and prepares fine foam; it does not store or refrigerate milk', grinder: 'Professional Aroma Grinder with automatic bean-to-cup dosing and a pre-ground bypass chute', interface: '2.8-inch color display with six physical buttons; optional Wi-Fi Connect enables J.O.E.', capacity: '64 oz water tank, 9.9 oz bean container and about 16-serving grounds bin', dimensions: '11 W by 13.8 H by 17.6 D in; about 21 lb', maintenance: 'Run JURA cleaning and descaling programs when prompted, clean the milk system every day it is used, and follow the NAC manual for CLARIS Smart+ filter handling.', strength: 'The simplest current JURA route for hot coffee and cappuccino with a guided front interface', limit: 'Eleven hot specialties, no cold extraction and optional rather than included Wi-Fi narrow the value at $1,899',
    sources: [
      { label: 'JURA E6 Dark Inox NAC 15621', href: 'https://us.jura.com/en/homeproducts/machines/e6-dark-inox-nac-15621', note: 'Official current North American identity, features and article number.' },
      { label: 'JURA E6 NAC instructions', href: 'https://us.jura.com/-/media/global/pdf/manuals-na/Home/E6/E6-NAC/download_manual_e6_nac.pdf?sc_lang=en&la=en', note: 'Official setup, drink, cleaning, descaling, filter and troubleshooting instructions.' },
      { label: 'JURA US official shop: E6', href: 'https://shopjura.com/e6-dark-inox-nac.html', note: '$1,899 in-stock price and North American specifications checked September 23, 2026.' },
      { label: 'JURA C9 vs E6 vs E8 comparison', href: 'https://www.youtube.com/watch?v=Slh1Yr-FR4M', note: 'Independent 2026 comparative evaluation used for workflow context, not as the specification authority.' },
      { label: 'Review: Jura E6 Automatic Coffee Machine', href: 'https://www.youtube.com/watch?v=gMhvctE1g_A', note: 'Independent visual review published December 7, 2021; generation differences are kept explicit.' },
      { label: 'JURA service and support', href: 'https://us.jura.com/en/support', note: 'Official North American service and support route.' },
      { label: 'JURA E-Line context', href: 'https://us.jura.com/en/homeproducts/machines', note: 'Official current range context separating E6, E8 and Z10.' },
      { label: 'Owner question: Should I buy a JURA E6?', href: 'https://www.reddit.com/r/superautomatic/comments/1ij1k1n/should_i_buy_a_jura_e6/', note: 'Self-selected February 2025 buyer discussion; useful for questions, not incidence rates.' },
      { label: 'Owner report: E6 underwhelming', href: 'https://www.reddit.com/r/superautomatic/comments/13yefur/jura_e6_underwhelming_so_faris_it_me/', note: 'Self-selected setup and recipe context illustrating why grind, strength and volume need tuning.' },
      { label: 'Barista Hustle water background', href: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/', note: 'Independent water context; JURA instructions remain controlling for the machine.' },
    ], comparisons: juraComparisons('JURA E6', '$1,899'), recommendations: juraRecommendations,
    video: { id: 'Slh1Yr-FR4M', title: 'JURA C9 vs E6 vs E8 comparison', creator: 'Quality Coffee Systems', published: '2026-06-03', note: 'Independent comparative workflow evidence. Exact 15621 specifications and price are verified separately.' }, rating: [8.0, 7.8, 8.6, 7.8, 7.6, 7.2],
  },
  {
    key: 'jura-e8', slug: '/espresso-machine/jura-e8/', productId: 'CD-EM-000182', brand: 'JURA', model: 'E8 Midnight Silver NAD', sku: 'Article 15722, North America, fifth generation', brandPath: '/jura/',
    title: 'JURA E8 review: fifth-generation Hot, Light and Sweet drinks at $2,599', description: 'A research-led JURA E8 NAD review covering article 15722, 27 specialties, P.A.G.2 grinder, Hot, Light and Sweet menus, current $2,599 US context and ownership.',
    image: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fe-line-2025%2Fe8-ed-midnight-silver%2Fe8_ed_midnightsilver_packshot.jpg%3Fcb%3D330306&w=1920&q=75', imageAlt: 'Fifth-generation JURA E8 Midnight Silver automatic coffee machine', official: 'https://us.jura.com/en/homeproducts/machines/e8-midnight-silver-nad-15722', priceUrl: 'https://www.abt.com/Jura-E8-Automatic-Coffee-Espresso-Machine-NAD-in-Midnight-Silver-15722/p/247551.html', priceLabel: 'Abt US authorized-retailer price', price: '$2,599.00', priceNumeric: '2599.00', priceContext: 'Article 15722 was listed at $2,599 but unavailable to order on the check date; tax, restock timing and warranty can change',
    exactIdentity: 'Fifth-generation North American E8 Midnight Silver NAD, article 15722. It is not the earlier EC generation still shown in many reviews and listings.', coffeeSystem: 'Twenty-seven Hot, Light and Sweet specialties with ten strength levels, a 5-16 g brew unit and adjustable recipes', milkSystem: 'Automatic HP3 milk system for milk and milk foam through a hose, with guided cleaning after use', grinder: 'P.A.G.2 grinder with an automatic bean-to-cup workflow and bypass chute', interface: '3.5-inch color display with side buttons; optional Wi-Fi Connect V2 adds J.O.E. and Coffee Timer', capacity: '64 oz water tank, 9.9 oz bean container and about 16-serving grounds bin', dimensions: '11 W by 13.8 H by 17.6 D in; about 22 lb', maintenance: 'Use the guided cleaning and descaling programs, clean the milk system every day it is used, and follow the NAD manual for filter and hygiene steps.', strength: 'Twenty-seven Hot, Light and Sweet specialties in a polished mid-range JURA workflow', limit: 'The $2,599 price, closed brew system and optional connectivity demand more than a long menu to justify ownership',
    sources: [
      { label: 'JURA E8 Midnight Silver NAD 15722', href: 'https://us.jura.com/en/homeproducts/machines/e8-midnight-silver-nad-15722', note: 'Official fifth-generation North American identity, 27 specialties, controls and article number.' },
      { label: 'JURA E8 NAD instructions', href: 'https://us.jura.com/-/media/global/pdf/manuals-na/Home/E8-NAD/download_manual_e8_nad.pdf?sc_lang=en&la=en', note: 'Official setup, recipes, cleaning, descaling, filter and troubleshooting instructions.' },
      { label: 'Abt: JURA E8 15722', href: 'https://www.abt.com/Jura-E8-Automatic-Coffee-Espresso-Machine-NAD-in-Midnight-Silver-15722/p/247551.html', note: '$2,599 US authorized-retailer price and unavailable status checked September 23, 2026.' },
      { label: 'WIRED blind coffee-machine test', href: 'https://www.wired.com/story/we-asked-coffee-pros-to-blind-test-coffee-machines-the-results-were-surprising', note: 'Independent May 8, 2026 blind tasting. Its under-extracted espresso and overheated milk results describe that protocol, not every E8.' },
      { label: 'The brand new JURA E8 (SD) 2025 in review', href: 'https://www.youtube.com/watch?v=IKD3rWrV4DI', note: 'Independent September 4, 2025 video used for current-generation family workflow; SD and NAD regional details can differ.' },
      { label: 'JURA service and support', href: 'https://us.jura.com/en/support', note: 'Official North American service and support route.' },
      { label: 'JURA E-Line context', href: 'https://us.jura.com/en/homeproducts/machines', note: 'Official current family context used to separate generations and adjacent models.' },
      { label: 'JURA E8 owner discussions', href: 'https://www.reddit.com/r/superautomatic/search/?q=Jura%20E8&restrict_sr=1', note: 'Self-selected owner context for recipes, cleaning and service questions, not reliability rates.' },
      { label: 'JURA configuration discussion', href: 'https://www.reddit.com/r/superautomatic/comments/r3ixg8/correct_jura_configuration_for_espresso_e6_e8_s/', note: 'Self-selected recipe discussion illustrating the importance of volume and strength settings.' },
      { label: 'Barista Hustle water background', href: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/', note: 'Independent water context; JURA instructions remain controlling.' },
    ], comparisons: juraComparisons('JURA E8', '$2,599'), recommendations: juraRecommendations,
    video: { id: 'IKD3rWrV4DI', title: 'The brand new JURA E8 (SD) 2025 in review', creator: 'Primocaffe', published: '2025-09-04', note: 'Independent current-generation family workflow evidence. Regional specifications are verified against the NAD sources.' }, rating: [8.2, 8.4, 9.0, 8.0, 9.0, 6.9],
  },
  {
    key: 'jura-giga-6', slug: '/espresso-machine/jura-giga-6/', productId: 'CD-EM-000183', brand: 'JURA', model: 'GIGA 6 Aluminum NAA', sku: 'Factory-refurbished US model 15396.99; current UK EA article 15394 is a different electrical package', brandPath: '/jura/',
    title: 'JURA GIGA 6 review: dual grinders in a discontinued $3,499 refurb', description: 'A research-led JURA GIGA 6 review covering the US NAA 15396.99 refurb, dual grinders, dual thermoblocks, conflicting 16-versus-28 specialty counts, $3,499 price and support.',
    image: 'https://uk.jura.com/_next/image?q=75&url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fgiga-line%2Fgiga-6%2FGIGA-6-EU%2FGIGA_6_mit_if_logo.jpg%3Fcb%3D234356&w=3840', imageAlt: 'JURA GIGA 6 aluminum dual-grinder automatic coffee machine', official: 'https://shopjura.com/factory-refurbished-giga-6-naa.html', priceUrl: 'https://shopjura.com/factory-refurbished-giga-6-naa.html', priceLabel: 'JURA US factory-refurbished price', price: '$3,499.00', priceNumeric: '3499.00', priceContext: 'Out-of-stock factory-refurbished model 15396.99, reduced from $5,999 with a one-year refurb warranty; not a current new-machine price',
    exactIdentity: 'US Aluminum NAA factory-refurbished model 15396.99 is the dated price reference. The live UK page documents 230 V EA article 15394 and 28 specialties. JURA US refurb copy lists 16 individually programmable specialties. This review records the conflict rather than merging the counts.', coffeeSystem: 'Two thermoblocks, two pumps and two fluid systems support simultaneous coffee and milk work; the official UK EA page lists 28 menu entries including paired variants', milkSystem: 'HP2/CX2 automatic milk system with programmable milk and foam temperature and same-day cleaning', grinder: 'Two electronically adjustable ceramic disc grinders with Automatic Grinder Adjustment and selectable bean blending', interface: '4.3-inch color touchscreen with self-learning home screen, named drinks and J.O.E. connectivity', capacity: 'UK EA reference: 2.6 L water, two 280 g bean hoppers and about 20 servings of grounds', dimensions: 'UK EA: 32 W by 41.5 H by 48 D cm and 18 kg; the US refurb lists 12.6 W by 16.3 H by 18.9 D in and 39.7 lb', maintenance: 'Run JURA programs as prompted, clean the HP2 milk system every day it is used, and treat discontinued exact-model parts and qualified service as purchase conditions.', strength: 'Dual grinders and dual fluid systems for two-bean variety and unusually capable drink sequencing', limit: 'It is discontinued, out of stock and refurbished, with a one-year warranty and conflicting regional menu counts',
    sources: [
      { label: 'JURA US factory-refurbished GIGA 6 NAA', href: 'https://shopjura.com/factory-refurbished-giga-6-naa.html', note: 'Official US refurb identity, model 15396.99, condition, $3,499 price, warranty and regional specifications.' },
      { label: 'JURA GIGA 6 EA official page', href: 'https://uk.jura.com/en/homeproducts/automatic-coffee-machines/giga-6-aluminium-ea-15394', note: 'Official 230 V EA article 15394 features, 28-item menu and full specifications; not silently substituted for NAA.' },
      { label: 'JURA US factory-refurbished price', href: 'https://shopjura.com/factory-refurbished-giga-6-naa.html', note: '$3,499 out-of-stock refurb against $5,999 original reference, checked September 23, 2026.' },
      { label: 'JURA GIGA 6 overview', href: 'https://www.homegrounds.co/jura-giga-6-review/', note: 'Independent ownership and workflow evaluation; official sources control specifications.' },
      { label: 'Jura Giga 6 | The Most Advanced Coffee Machine For Home', href: 'https://www.youtube.com/watch?v=SWJ49f90CTM', note: 'Independent ECS Coffee video published November 29, 2021 for visible workflow context.' },
      { label: 'JURA GIGA 6 EA manual', href: 'https://uk.jura.com/-/media/global/pdf/manuals-global/home/GIGA-6/download_manual_giga_6_ea_sa_inta.pdf?la=en', note: 'Official operation, cleaning, descaling and safety instructions for EA/SA/INTA.' },
      { label: 'JURA current home range', href: 'https://us.jura.com/en/homeproducts/machines', note: 'Official current range used to establish that GIGA 6 is no longer a current US new model.' },
      { label: 'JURA GIGA 6 owner discussions', href: 'https://www.reddit.com/r/superautomatic/search/?q=Jura%20GIGA%206&restrict_sr=1', note: 'Self-selected owner and buyer context, not quantified reliability evidence.' },
      { label: 'JURA service and support', href: 'https://us.jura.com/en/support', note: 'Official North American service route; exact refurb coverage must be confirmed.' },
      { label: 'Barista Hustle water background', href: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/', note: 'Independent water context; JURA instructions remain controlling.' },
    ],
    comparisons: [
      { name: 'JURA GIGA 6', quickDecision: 'Choose only when dual grinders and dual systems justify a discontinued refurbished platform.', priceClass: '$3,499 out-of-stock factory refurb', dimensions: '12.6 W by 16.3 H by 18.9 D in US refurb reference', heating: 'Two thermoblocks, pumps and fluid systems', coffeeSetup: 'Two ceramic grinders with selectable blending', milkWorkflow: 'HP2/CX2 automatic milk', bestFor: 'Two beans and parallel preparation' },
      ...juraComparisons('JURA GIGA 6', '$3,499').slice(2),
    ], recommendations: juraRecommendations,
    video: { id: 'SWJ49f90CTM', title: 'Jura Giga 6 | The Most Advanced Coffee Machine For Home', creator: 'ECS Coffee', published: '2021-11-29', note: 'Independent visible workflow evidence. Current condition, price and regional identity are verified separately.' }, rating: [8.8, 9.1, 8.8, 7.2, 9.0, 5.8],
  },
  {
    key: 'jura-z10', slug: '/espresso-machine/jura-z10/', productId: 'CD-EM-000184', brand: 'JURA', model: 'Z10 Aluminium Black NAB', sku: 'Article 15702, North America, second generation', brandPath: '/jura/',
    title: 'JURA Z10 review: 51 hot, light, cold and sweet drinks at $4,499', description: 'A research-led second-generation JURA Z10 NAB review covering article 15702, 51 specialties, P.R.G.2+ grinder, Cold Extraction, four profiles, $4,499 US price and care.',
    image: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fz-line-2025%2FZ10-EB-SB%2FZ10-EB-SB-Aluminium-Black%2FZ10_eb_sb_ab_packshot.jpg%3Fcb%3D307471&w=1920&q=75', imageAlt: 'Second-generation JURA Z10 Aluminium Black NAB automatic coffee machine', official: 'https://us.jura.com/en/homeproducts/machines/z10-aluminium-black-nab-15702', priceUrl: 'https://shopjura.com/z-10-aluminum-black-15702-nab.html', priceLabel: 'JURA US official shop price', price: '$4,499.00', priceNumeric: '4499.00', priceContext: 'Current Aluminium Black NAB article 15702 listing, out of stock on the check date; tax, restock timing and accessories can change',
    exactIdentity: 'North American Z10 Aluminium Black NAB, article 15702. First-generation Z10 reviews and videos remain useful only for limited workflow context because menus, grinder and software differ.', coffeeSystem: 'Fifty-one Hot, Light, Cold and Sweet specialties with Cold Extraction, four profiles, Coffee Timer and Caffeine Regulator', milkSystem: 'Automatic HP3 milk system with Milk Assistant and guided cleaning; an optional chocolate attachment expands sweet recipes', grinder: 'P.R.G.2+ electronically controlled grinder with automatic adjustment for the selected specialty', interface: '4.3-inch color touchscreen with four profiles, included Wi-Fi and J.O.E. support', capacity: '81 oz water tank, 9.9 oz bean container and about 20-serving grounds bin', dimensions: '12.6 W by 14.3 H by 18.5 D in; about 27 lb', maintenance: 'Use the Quality Assistant and prompted cleaning or descaling cycles, clean milk hardware every day it is used, and verify care for any optional chocolate attachment.', strength: 'The broadest current JURA home menu, including Cold Extraction, four profiles and included connectivity', limit: 'The $4,499 price and extensive closed-system feature set only make sense when the household will use the added cold, sweet and profile functions',
    sources: [
      { label: 'JURA Z10 Aluminium Black NAB 15702', href: 'https://us.jura.com/en/homeproducts/machines/z10-aluminium-black-nab-15702', note: 'Official second-generation North American identity, 51 specialties, grinder and features.' },
      { label: 'JURA Z10 NAB instructions', href: 'https://us.jura.com/-/media/global/pdf/manuals-na/Home/Z10/download_manual_z10_nab.pdf?sc_lang=en&la=en', note: 'Official setup, drinks, cleaning, descaling, filter and troubleshooting instructions.' },
      { label: 'JURA US official shop: Z10 15702', href: 'https://shopjura.com/z-10-aluminum-black-15702-nab.html', note: '$4,499 out-of-stock price and North American specifications checked September 23, 2026.' },
      { label: 'T3: JURA upgrades its Z10', href: 'https://www.t3.com/home-living/coffee-machines/jura-upgrades-its-z10-coffee-machine-with-50-drink-options-including-hot-chocolate-but-itll-cost-you', note: 'Independent February 13, 2026 launch evaluation and value context.' },
      { label: 'Cold Brew From a Jura Z10 Superautomatic', href: 'https://www.youtube.com/watch?v=cHYQQwMgT54', note: 'Independent ECS Coffee video published July 18, 2022; first-generation cold workflow only, not second-generation specs.' },
      { label: 'JURA service and support', href: 'https://us.jura.com/en/support', note: 'Official North American service and support route.' },
      { label: 'JURA current home range', href: 'https://us.jura.com/en/homeproducts/machines', note: 'Official range context separating Z10 from E6, E8 and current GIGA models.' },
      { label: 'Owner discussion: new Z10 is out', href: 'https://www.reddit.com/r/superautomatic/comments/1ne4vdn/new_z10_is_out/', note: 'Self-selected September 2025 discussion of the second generation; useful for buyer questions, not rate evidence.' },
      { label: 'Owner report: Z10 total letdown', href: 'https://www.reddit.com/r/superautomatic/comments/1rcishc/jura_z10_is_a_total_letdown/', note: 'Self-selected February 2026 negative experience retained as context, not generalized to reliability.' },
      { label: 'Barista Hustle water background', href: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/', note: 'Independent water context; JURA instructions remain controlling.' },
    ], comparisons: juraComparisons('JURA Z10', '$4,499'), recommendations: juraRecommendations,
    video: { id: 'cHYQQwMgT54', title: 'Cold Brew From a Jura Z10 Superautomatic', creator: 'ECS Coffee', published: '2022-07-18', note: 'Independent first-generation workflow context only. Second-generation features and price are verified separately.' }, rating: [8.8, 9.1, 9.2, 8.3, 9.7, 6.4],
  },
];

const removeParagraphs = (html: string, indexes: number[]) => {
  let index = -1;
  return html.replace(/<p>[\s\S]*?<\/p>/g, (paragraph) => (indexes.includes(++index) ? '' : paragraph));
};

const compactJuraReview = (review: MachineReviewData, extra = false): MachineReviewData => {
  const removals: Record<string, number[]> = {
    setup: [1],
    workflow: [2],
    features: [2],
    ownership: [2],
    ...(extra ? { espresso: [2], milk: [1], build: [2], value: [1] } : {}),
  };
  return {
    ...review,
    article: {
      ...review.article,
      sections: review.article.sections.map((section) => ({
        ...section,
        html: removals[section.id] ? removeParagraphs(section.html, removals[section.id]) : section.html,
      })),
    },
  };
};

export const upgradeGaggiaJuraReviews: MachineReviewData[] = products.map((product) => {
  const review = buildUpgradeReview(makeProfile(product));
  return product.brand === 'JURA' ? compactJuraReview(review, product.key === 'jura-giga-6') : review;
});
