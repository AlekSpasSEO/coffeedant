import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.melitta.co.uk/bean-to-cup-machines/barista-ts-smart-/black';
const international = 'https://www.melitta-international.com/bean-to-cup-machines/our-categories/all-bean-to-cup-machines/Melitta-Barista-TS-Smart';
const faq = 'https://www.melitta.co.uk/faq/bean-to-cup-machines/barista-ts-smart';
const app = 'https://apps.apple.com/gb/app/melitta-connect/id1255061665';
const t3 = 'https://www.t3.com/home-living/coffee-machines/melitta-barista-ts-smart';
const realHomes = 'https://www.realhomes.com/reviews/melitta-barista-ts-smart-coffee-machine-review';
const video = 'https://www.youtube.com/watch?v=E1jzXHWx8i8';
const ownerComplaint = 'https://www.reddit.com/r/superautomatic/comments/1ii7rkc/melitta_reliability_is_shocking_1000_machine/';
const homeAssistant = 'https://community.home-assistant.io/t/melitta-barista-smart-custom-integration-lovelace-card-early-mvp/993662';
const image = 'https://www.melitta.de/media/69/c2/a5/1716308860/kaffeevollautomat-melitta-barista-ts-smart-schwarz-2-wahl-f850-102-6764549-.png?ts=1789478717';

const profile: UpgradeReviewProfile = {
  key: 'melitta-barista-ts-smart-f850-102',
  slug: '/espresso-machine/melitta-barista-ts-smart/',
  productId: 'CD-EM-000206',
  brand: 'Melitta',
  model: 'Barista TS Smart F85/0-102',
  sku: 'UK black F85/0-102, article 6764549_UK, 220–240 V',
  category: 'Superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Melitta Barista TS Smart review: two beans, 21 drinks',
  description: 'Exact UK black F85/0-102 review: £649.99 direct price, 21 drinks, eight profiles, Automatic Bean Select, two milk drinks, Connect app and ownership limits.',
  verdictLabel: 'The shared-household superautomatic with unusually useful bean routing',
  verdict: 'Consider the UK black F85/0-102 when two beans, eight profiles and paired milk drinks remove household friction. Article 6764549_UK was £649.99 on September 24, 2026. Buy it for routing and repetition, while accepting one five-step grinder, 467 mm depth and hands-on milk care.',
  assessment: 'This is research-led, not Coffeedant testing. Facts come from Melitta UK. T3, Real Homes and The Girl in the Cafe add hands-on context, but their machines are not confirmed as article 6764549_UK.',
  image,
  imageAlt: 'Melitta official front image of the black Barista TS Smart F85/0-102 with TFT display, dual-chamber hopper and external milk container',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current UK black F85/0-102 direct price',
    msrp: '£999.99 reference value shown in Melitta commerce data',
    typical: 'Exact article 6764549_UK was in stock at £649.99 on September 24, 2026. Price, stock and bundles can change; a separate £500 stainless refurb was out of stock.',
    currency: 'GBP',
    numeric: '649.99',
    checked: 'September 24, 2026',
  },
  links: [
    { label: 'Check exact UK price and stock', href: official, note: 'Black F85/0-102 article 6764549_UK; £649.99 and in stock on September 24, 2026', primary: true },
    { label: 'Read the exact Melitta specification', href: official, note: 'Current UK identity, controls, capacities, care and technical data' },
  ],
  facts: [
    { label: 'Exact scope', value: 'UK black F85/0-102, article 6764549_UK, 220–240 V' },
    { label: 'Drinks and profiles', value: '21 variations, four direct keys and eight My Coffee profiles' },
    { label: 'Bean path', value: 'One five-step steel grinder, 270 g dual hopper, automatic routing and pre-ground chute' },
    { label: 'Controls', value: 'Five strengths, 85/90/95 °C, 25–220 ml, IntenseAroma and app sequencing' },
    { label: 'Milk', value: 'Removable hose system and two simultaneous coffee-milk drinks' },
    { label: 'Physical record', value: '372 × 259 × 467 mm, 10.6 kg, 1.8 L, 140 mm outlet and 1450 W' },
    { label: 'Cleaning', value: 'Guided programs, steam rinse and removable brewer and milk parts' },
  ],
  quickAnswers: [
    { question: 'Is this the exact UK machine?', answer: 'Yes: black F85/0-102, article 6764549_UK. Other finishes and regions are separate offers.' },
    { question: 'Are there two grinders?', answer: 'No. One conical grinder draws from a 270 g dual-chamber hopper.' },
    { question: 'Can it make two milk drinks?', answer: 'Yes. Melitta lists two simultaneous coffee-milk specialities through the shared outlet.' },
    { question: 'Does the phone replace the panel?', answer: 'No. Core controls remain on the machine; the app adds recipes, profiles and tutorials.' },
    { question: 'Is cleaning automatic?', answer: 'Partly. Guided programs and steam rinse help, but removable brew and milk parts need hands-on care.' },
    { question: 'Is £649.99 permanent?', answer: 'No. It is the exact direct price observed on September 24, 2026.' },
  ],
  bestFor: [
    'Shared households that will actually use two beans and several saved profiles',
    'Milk-drink buyers who want two matching cups from one button sequence',
    'Owners who value guided care but still want a removable brew unit for inspection',
  ],
  avoidIf: [
    'You want a small machine: the body is 467 mm deep before working clearance',
    'You need independent grinders, fine stepless dial-in or manual puck control',
    'You expect an app and rinse cycle to eliminate milk-part cleaning and service risk',
  ],
  pros: [
    'Automatic Bean Select gives the two-chamber hopper a real household purpose',
    'Twenty-one recipes, eight profiles and FreeStyle cover varied repeat orders',
    'Two milk drinks can be prepared in one selected cycle',
    'Removable brew group and milk module improve physical cleaning access',
  ],
  cons: [
    'The 467 mm depth and external milk container consume substantial counter space',
    'Five grinder positions limit fine adjustment compared with a separate grinder',
    'One grinder means a little cross-mixing can remain after changing bean chambers',
    'Selected owner reports and official reviews show mixed app, temperature and fault experiences without a useful failure denominator',
  ],
  architecture: 'a 220–240 V automatic bean-to-cup platform with one conical steel grinder, a 270 g two-chamber hopper, removable brewing unit, TFT Touch & Slide controls, Bluetooth-linked Connect app and hose-fed automatic milk system',
  identityBoundary: 'This page covers the current black UK F85/0-102 sold as article 6764549_UK. It does not merge F86/0 variants, older Caffeo Barista TS machines without the same Smart identity, the Barista T Smart, different finish articles, refurbished stock or non-UK voltage and warranty packages. A delivered rating plate and invoice control service and parts.',
  primaryStrength: 'Automatic bean routing, eight profiles and paired milk service solve the coordination problem in a household with different beans and recurring drinks.',
  primaryLimit: 'Its breadth lives inside one five-step grinder and a large, connected milk appliance whose rinse water, detachable parts and service path remain part of every week.',
  setupNote: 'Measure the 467 mm depth and leave room for the left tank, hopper lid, tray and brew-unit door. Confirm 6764549_UK and F85/0-102, set water hardness and assign both bean chambers. Residual mixing means the chambers are not allergy-safe separation.',
  espressoNote: 'Five grind positions, five strengths, three temperatures and IntenseAroma offer repeat control. Real Homes liked its espresso; T3 found café crème bitter. Adjust one variable at a time. Coffeedant did not measure dose, temperature, yield or pressure.',
  milkNote: 'The UK record lists two simultaneous coffee-milk drinks, a 140 mm outlet, steam cleaning and removable milk parts. Independent reviewers liked milk results, while owners differ on heat and foam. Rinse promptly and clean detached food-contact parts.',
  workflowNote: 'Four drinks have direct keys and 17 sit in the menu. Eight profiles, FreeStyle and bean mapping aid repeat orders; the panel works without a phone. Community evidence identifies Bluetooth Low Energy, not Wi-Fi. Water, beans, tray and milk still need checks.',
  buildNote: 'The 10.6 kg body measures 372 × 259 × 467 mm and draws up to 1450 W. Melitta and Real Homes call the grinder quiet; T3 called its sample noisy and clunky. No comparable sound test resolves that difference, and brewer access does not predict component life.',
  featuresNote: 'Automatic Bean Select, low-bean monitoring, pre-ground bypass, three temperatures, eight profiles, paired milk and FreeStyle form a coherent system. Both chambers still feed one grinder. Current app records show active use, not lifetime support, so panel operation matters.',
  valueNote: 'The exact £649.99 direct price checked September 24, 2026 undercuts Melitta’s £999.99 reference value. It is strongest value when two beans, eight profiles and paired milk remove repeated work. Add filters, cleaners, rinse water and service. A separate £500 refurbished stainless page was out of stock, so it is not a substitute offer.',
  ownerPattern: 'Seven Melitta UK reviews praise consistency, recipes, quiet grinding and support, while mentioning tray fill, app use, heat and foam. A Reddit thread reports individual faults and repair frustration. These are service questions, not representative statistics.',
  ownerCaution: 'The reports lack a fleet denominator and consistent diagnoses, so they cannot establish failure rates. Treat warnings, leaks, grinder abnormalities and milk-flow problems as individual cases. Confirm serial, history, parts and written warranty on a used unit.',
  maintenanceNote: 'Rinse the tray and grounds container, clean milk parts, and rinse the brewer on schedule. Follow prompted tablet and descale programs using measured hardness. Melitta’s yearly scenario assumes six 120 ml drinks daily and six filter changes; the UK table says “once a year descaling: No,” so prompts and water govern. Seek service for leaks, electrical smell or persistent errors.',
  dimensions: {
    espresso: {
      score: 7.7,
      claim: 'Five grind positions, five strength levels, three temperatures and two brewing profiles give useful repeat control.',
      consequence: 'The system suits dependable espresso-style drinks better than light-roast micro-adjustment or measured manual extraction.',
      status: 'Exact UK controls plus differing independent taste observations; no Coffeedant cup measurements',
      signals: ['Single conical steel grinder and removable automatic brewer.', '85/90/95 °C settings, five strengths and standard or IntenseAroma.', 'Independent samples disagreed on café crème bitterness and perceived noise.'],
    },
    milk: {
      score: 8.4,
      claim: 'The all-in-one outlet can prepare two coffee-milk drinks in one selected cycle.',
      consequence: 'It is strong for paired household orders if the hose, connector, container and outlet are cleaned immediately.',
      status: 'Exact UK two-cup and cleaning record, supported by several independent hands-on reviews',
      signals: ['Two simultaneous coffee-milk specialities are explicitly listed.', 'Recipe-specific ingredient order and 140 mm cup clearance.', 'Easy Steam Cleaning supports but does not replace detached-part care.'],
    },
    workflow: {
      score: 8.6,
      claim: 'Automatic bean routing and eight profiles make a complicated 21-drink menu usable for a household.',
      consequence: 'The benefit is largest when different users repeat known drinks; occasional guests may find the breadth unnecessary.',
      status: 'Current official interface and app records plus independent setup and daily-use context',
      signals: ['Four direct drinks and 17 menu recipes.', 'Eight profiles, FreeStyle editing and panel operation without a phone.', '1.8 L tank and rinse-heavy workflow still create refill and tray work.'],
    },
    build: {
      score: 7.2,
      claim: 'A removable brewer improves access, while the deep connected appliance remains complex and service-dependent.',
      consequence: 'Buy with a clear warranty and local repair route; do not infer durability from weight or one owner story.',
      status: 'Exact dimensions and access design with mixed, self-selected owner evidence',
      signals: ['10.6 kg net, 467 mm deep and 1450 W.', 'Removable brewer, milk module and guided service menus.', 'No representative component-life or failure-rate data located.'],
    },
    features: {
      score: 8.8,
      claim: 'Two-bean routing, eight profiles, paired milk and FreeStyle are unusually coherent convenience features.',
      consequence: 'They justify the machine only when the household uses them; one grinder and app lifecycle remain boundaries.',
      status: 'Exact current UK and international manufacturer records; app current September 2026',
      signals: ['270 g dual-chamber hopper with active fill monitoring.', 'Connect app recipe order, quantities, profiles and tutorials.', 'No claim of two grinders, Wi-Fi control or permanent app support.'],
    },
    value: {
      score: 8.2,
      claim: 'The dated £649.99 direct price is competitive for this profile and bean-routing breadth.',
      consequence: 'Filters, cleaners, rinse water and repair exposure can outweigh the discount for a low-volume solo user.',
      status: 'Exact in-stock direct UK offer checked September 24, 2026',
      signals: ['£649.99 exact black article versus £999.99 reference value.', 'Separate £500 refurbished stainless article was out of stock.', 'Ownership cost includes care chemistry, filters and service.'],
    },
  },
  sources: [
    { label: 'Melitta UK exact black Barista TS Smart 6764549_UK', href: official, note: 'Current F85/0-102 identity, £649.99 in-stock price, UK voltage, 21 recipes, two-cup milk, controls, dimensions, capacity, care and selected customer reviews; checked September 24, 2026.' },
    { label: 'Melitta international Barista TS Smart product record', href: international, note: 'Manufacturer feature explanations, app, Automatic Bean Select, outlet, cleaning, conditional filter/descale claim and exact official lifestyle media.' },
    { label: 'Melitta UK dated exact-model offer', href: official, note: 'Article 6764549_UK commerce record showed £649.99, LimitedAvailability/in stock and NewCondition on September 24, 2026; price is volatile.' },
    { label: 'T3 Barista TS Smart hands-on review', href: t3, note: 'Bethan Morgan review published April 13, 2025 covering setup, interface, drink impressions, cleaning, size and noise; exact current UK suffix not confirmed.' },
    { label: 'The Girl in the Cafe independent video walkthrough', href: video, note: 'Exact-name machine video published September 15, 2018 by The Girl in the Cafe TV; visual workflow context, not a current-article laboratory test.' },
    { label: 'Melitta Connect current App Store record', href: app, note: 'Current app description for 21 TS Smart recipes, FreeStyle, eight profiles, settings, tutorials and service access; continued platform support is not guaranteed.' },
    { label: 'Melitta UK Barista TS Smart FAQ', href: faq, note: 'Current manufacturer troubleshooting for brew-unit position, app settings and machine-specific support questions.' },
    { label: 'Melitta UK selected customer reviews', href: official, note: 'Seven self-selected storefront reviews with Melitta’s verified/unverified policy, spanning app, taste, temperature, tray, noise and support themes; no reliability denominator.' },
    { label: 'Reddit Melitta reliability complaint thread', href: ownerComplaint, note: 'Self-selected owner complaints and replies, including water/coffee delivery symptoms; exact revisions and diagnoses vary, so no failure-rate inference.' },
    { label: 'Real Homes Barista TS Smart hands-on review', href: realHomes, note: 'Sarah Warwick review published November 13, 2019 covering setup, taste, milk, two-cup use, profiles, size and cleaning; older family-level context.' },
    { label: 'Home Assistant 2026 Barista Smart community integration', href: homeAssistant, note: 'Current enthusiast evidence of BLE discovery and TS Smart feature access; unofficial software and troubleshooting, not Melitta support or a reliability study.' },
  ],
  comparisons: [
    { name: 'Melitta Barista TS Smart F85/0-102', quickDecision: 'Choose two-bean automatic routing, eight profiles and paired milk at the dated £649.99 direct price.', priceClass: '£649.99 direct Sep 24', dimensions: '259 × 467 × 372 mm W×D×H', heating: 'Automatic thermoblock platform', coffeeSetup: 'One grinder, dual chamber, 21 recipes', milkWorkflow: 'Hose-fed paired one-touch milk', bestFor: 'Multi-user, two-bean households' },
    { name: 'Jura E8', href: '/espresso-machine/jura-e8/', quickDecision: 'Choose the more polished one-hopper Jura workflow when dealer support and its cleaning model matter more than two-bean routing.', priceClass: 'Premium superautomatic class', dimensions: 'Large one-hopper body', heating: 'Thermoblock automatic system', coffeeSetup: 'One grinder and guided recipes', milkWorkflow: 'Automatic milk with prescribed cleaning', bestFor: 'Premium one-bean repetition' },
    { name: 'De’Longhi Dinamica Plus ECAM370', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', quickDecision: 'Compare a widely sold app-connected automatic when one bean hopper is enough and current local service matters.', priceClass: 'Mid-premium superautomatic class', dimensions: 'Deep automatic body', heating: 'Automatic thermoblock platform', coffeeSetup: 'Single bean path and saved recipes', milkWorkflow: 'Detachable automatic milk carafe', bestFor: 'One-bean app convenience' },
    { name: 'Philips 5400 LatteGo', href: '/espresso-machine/philips-5400-lattego/', quickDecision: 'Prioritise a simpler two-piece milk carafe when fast physical cleanup matters more than dual beans and paired milk drinks.', priceClass: 'Midrange superautomatic class', dimensions: 'Tall automatic body', heating: 'Automatic thermoblock platform', coffeeSetup: 'Single hopper and user profiles', milkWorkflow: 'Two-piece LatteGo carafe', bestFor: 'Low-part-count milk cleanup' },
  ],
  comparisonNote: 'Compare the exact current article, bean-path count, profile count, two-cup milk definition, physical cleaning access, cabinet depth, live price, written warranty and local repair route. A two-chamber hopper is not two grinders, and “automatic cleaning” means different work on each platform.',
  recommendations: [
    { kicker: 'Premium one-bean route', title: 'Jura E8', text: 'Compare Jura’s interface, milk-cleaning contract and dealer path when a second bean chamber is unnecessary.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read Jura E8 review', featured: true },
    { kicker: 'Carafe alternative', title: 'De’Longhi Dinamica Plus ECAM370', text: 'A detachable carafe and broad retail network offer a different app-connected ownership model.', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', linkLabel: 'Read Dinamica Plus review' },
    { kicker: 'Simpler milk parts', title: 'Philips 5400 LatteGo', text: 'Trade paired milk and two-bean routing for a milk system designed around two main detachable pieces.', href: '/espresso-machine/philips-5400-lattego/', linkLabel: 'Read Philips 5400 review' },
    { kicker: 'Category framework', title: 'Superautomatic buying guide', text: 'Compare bean routing, milk hygiene, brewer access, profiles, warranties and total ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What exact Melitta Barista TS Smart does this review cover?', answer: 'The current black UK F85/0-102, Melitta article 6764549_UK, rated for 220–240 V. Other finishes, refurbished units and regional suffixes have separate price and warranty records.' },
    { question: 'Does the Barista TS Smart have two grinders?', answer: 'No. It has one conical steel grinder and a 270 g dual-chamber hopper. Automatic Bean Select routes the chosen chamber, and Melitta warns minimal mixing can remain after switching.' },
    { question: 'Can it make two cappuccinos at once?', answer: 'Yes. The current UK specification explicitly lists two simultaneous coffee-milk specialities through the all-in-one outlet. The cups share one grinder and an automated sequence rather than two independent brewing systems.' },
    { question: 'How many drinks and user profiles are available?', answer: 'Melitta lists 21 preset coffee variations and up to eight My Coffee profiles. Four classics have direct keys; 17 additional variations sit in the menu.' },
    { question: 'Does Melitta Connect use Wi-Fi?', answer: 'Do not assume Wi-Fi or remote internet brewing. Current community technical evidence identifies the TS Smart over Bluetooth Low Energy. The machine’s front controls remain the safer basis for daily operation.' },
    { question: 'Is the brew group removable?', answer: 'Yes. Melitta explicitly lists a removable brewing group, so the owner can inspect and rinse it according to the delivered instructions. That does not make the rest of the hydraulic system owner-serviceable.' },
    { question: 'Does Easy Steam Cleaning eliminate milk maintenance?', answer: 'No. It runs hot water and steam through milk-bearing paths, while the removable milk system, hose, connectors and container still need physical cleaning and safe milk handling.' },
    { question: 'Is £649.99 a good price?', answer: 'It is a strong dated direct price for the exact new black UK article if two beans, eight profiles and paired milk are useful. Compare filters, cleaning supplies, warranty and repair access before treating the checkout discount as total cost.' },
  ],
  finalTitle: 'A genuinely useful two-bean household machine, with real cleaning and app boundaries',
  finalVerdict: [
    'Barista TS Smart turns a long feature list into a coherent routine. One grinder can draw from two chambers, recipes can remember which beans and ingredient order to use, eight people can keep favourites, and two coffee-milk drinks can run from one selected cycle. At £649.99 for exact black article 6764549_UK on September 24, that is a persuasive amount of household automation.',
    'Five grind steps are not manual espresso control; 467 mm is deep; app support is a convenience layer; and steam rinsing does not clean every milk surface. Buy it when two beans and several users are the problem, with a written UK warranty and a real cleaning routine. For one bean, minimal milk parts or manual feedback, choose a simpler machine.',
  ],
  video: {
    id: 'E1jzXHWx8i8',
    title: 'Melitta Barista TS Smart Home espresso machine | Review',
    creator: 'The Girl in the Cafe TV',
    published: '2018-09-15',
    note: 'Independent exact-name visual walkthrough of the machine and drink workflow. It predates the current price and does not confirm the current UK article suffix or provide long-term reliability data.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#melitta-barista-ts-smart-f850-102-source-1">[source]</a> <a href="#melitta-barista-ts-smart-f850-102-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#melitta-barista-ts-smart-f850-102-source-1">[source]</a> <a href="#melitta-barista-ts-smart-f850-102-source-4">[source]</a> <a href="#melitta-barista-ts-smart-f850-102-source-10">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#melitta-barista-ts-smart-f850-102-source-1">[source]</a> <a href="#melitta-barista-ts-smart-f850-102-source-6">[source]</a> <a href="#melitta-barista-ts-smart-f850-102-source-11">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="melitta-ts-owner-title"><h3 id="melitta-ts-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Customisation and repeatability drive the positive reports</strong><p>Selected owners praise saved recipes, bean choice and consistent one-touch drinks; several also describe the grinder as quiet.</p></li>
    <li><strong>Temperature, foam and rinse-water expectations differ</strong><p>One storefront reviewer wanted hotter drinks, another wanted less foam, and another noted the tray filled faster than on a previous machine.</p></li>
    <li><strong>Individual fault stories deserve service, not arithmetic</strong><p>Complaint threads mention water-delivery, grinder and repair problems, but they do not identify a representative fleet or establish how often any failure occurs.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links. Original addresses, dates and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeMelittaBaristaTSSmartReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
