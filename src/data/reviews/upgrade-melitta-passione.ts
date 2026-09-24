import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.melitta-international.com/bean-to-cup-machines/our-categories/all-bean-to-cup-machines/Passione-OT';
const manual = 'https://www.melitta.de/media/0c/e0/00/1701262008/Passione_manual_total_Web.pdf';
const instructions = 'https://www.melitta-international.com/footer-navi/Information/operating-instructions';
const coffeeFriendBlack = 'https://www.coffeefriend.co.uk/p/coffee-machine-melitta-f531-passione-ot/';
const coffeeFriendSilver = 'https://www.coffeefriend.co.uk/p/coffee-machine-melitta-f53-1-101-passione-ot/';
const tradeinn = 'https://www.tradeinn.com/techinn/en/melitta-caffeo-passione-ot-espresso-coffee-maker/139223676/p';
const testfaktaReport = 'https://dinside.dagbladet.no/bolig/dette-er-de-beste-espresso-maskinene/69388475';
const vinbarista = 'https://vinbarista.com/en/blog/melitta-caffeo-passione-one-touch-coffee-machine-review-thread866.html';
const reddit = 'https://www.reddit.com/r/superautomatic/comments/1hv6t27/melitta_vs_nivona_help/';
const ownerForum = 'https://komtra.de/forum/index.php/Thread/17875-Melitta-Passione-OT-F53-1-101-Caffeo-Kaffeebezug-bricht-bei-starkem-Kaffee-mit-P/';
const galaxus = 'https://www.galaxus.at/en/s2/product/ratings/melitta-caffeo-passione-ot-automatic-coffee-makers-9795210';
const video = 'https://www.youtube.com/watch?v=iadrb22YrlE';
const image = 'https://www.melitta-international.com/adobe/dynamicmedia/deliver/dm-aid--9eba1d70-8615-4e05-af0a-828ca4c3d9dd/kaffeevollautomat-melitta-passione-ot-f531-102-schwarz-6767348-10.png?preferwebp=true&quality=85';

const profile: UpgradeReviewProfile = {
  key: 'melitta-passione-ot-f531-102',
  slug: '/espresso-machine/melitta-passione/',
  productId: 'CD-EM-000210',
  brand: 'Melitta',
  model: 'Passione OT F53/1-102',
  sku: 'Black F53/1-102, official gallery article 6767348; 220–240 V',
  category: 'Superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Melitta Passione OT review: compact, but know the limits',
  description: 'Exact Melitta Passione OT F53/1-102 review: £476 dated price, 10 recipes, 1.2 L tank, 125 g hopper, one-touch milk, two-cup boundary and owner evidence.',
  verdictLabel: 'A narrow one-touch machine for modest households, not a high-capacity shortcut',
  verdict: 'Shortlist the black Passione OT F53/1-102 when a 253 mm-wide body, direct milk drinks and a removable brewer matter more than capacity or profiles. The current official family record gives 10 recipes, five strengths, three temperatures, a five-step grinder, 1.2 L water and 125 g beans. Its two-cup function covers coffee, not two coffee-milk drinks. The exact black listing was £476 on September 24, 2026.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Current specifications and images come from Melitta. A 2018 comparative consumer test, a dated publisher review, retailer listings, an exact-model video and self-selected owner discussions add context. They do not provide current controlled cup measurements or a representative reliability rate.',
  image,
  imageAlt: 'Melitta official front product image of the black Passione OT F53/1-102 with TFT display and all-in-one outlet',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked exact black price',
    msrp: '£599 crossed-out reference price',
    typical: 'Coffee Friend displayed £476 for the black F53/1-102 on September 24, 2026. Techinn showed €494.99 for a silver EU-plug listing. Region, plug, finish, warranty and stock must match the intended purchase.',
    currency: 'GBP',
    numeric: '476',
    checked: 'September 24, 2026',
  },
  links: [
    { label: 'Check exact black price and stock', href: coffeeFriendBlack, note: 'Black F53/1-102 listing; £476 when checked September 24, 2026', primary: true },
    { label: 'Read the current official family specification', href: official, note: 'Current drinks, controls, capacities, dimensions, cleaning and model-family media' },
  ],
  facts: [
    { label: 'Exact reviewed finish', value: 'Black F53/1-102, official gallery article 6767348, 220–240 V' },
    { label: 'Drink system', value: '10 presets; four direct classics plus six menu recipes' },
    { label: 'Coffee control', value: 'Five strengths, 85/90/95 °C, five grinder steps and 25–220 ml water' },
    { label: 'Capacity', value: '1.2 L water tank and 125 g single bean hopper; no ground-coffee chute' },
    { label: 'Milk', value: 'External container and hose, one-touch milk, removable parts and steam rinse' },
    { label: 'Two-cup boundary', value: 'Two coffee cups supported; two simultaneous coffee-milk drinks are not' },
    { label: 'Physical record', value: '390 × 253 × 380 mm H×W×D, 8.3 kg, 1450 W and 135 mm outlet' },
  ],
  quickAnswers: [
    { question: 'Is this the black F53/1-102?', answer: 'Yes. The reviewed identity is the black variant pictured by Melitta as article 6767348.' },
    { question: 'Can it make two cappuccinos together?', answer: 'No. Melitta explicitly says two simultaneous coffee-milk specialities are not supported.' },
    { question: 'Does it save user profiles?', answer: 'No. The current table lists no My Coffee profiles or programmable reference keys.' },
    { question: 'Can it use pre-ground coffee?', answer: 'No. Melitta lists no ground-coffee chute.' },
    { question: 'Is the brew unit removable?', answer: 'Yes. Melitta instructs owners to remove it for physical cleaning.' },
    { question: 'Is £476 permanent?', answer: 'No. It is the exact black listing price observed on September 24, 2026.' },
  ],
  bestFor: [
    'One- or two-person households prioritising a narrow one-touch milk machine',
    'Owners who want a removable brew unit and guided cleaning instead of a sealed brewer',
    'Medium- and darker-roast drinkers who repeat a compact set of recipes',
  ],
  avoidIf: [
    'You need a large water tank, large hopper or several saved user profiles',
    'You expect two milk drinks at once, app control or a second bean chamber',
    'You want manual espresso variables, measured output control or true steam-wand texture',
  ],
  pros: [
    'The 253 mm width is genuinely compact for a one-touch milk automatic',
    'Ten recipes cover core black and milk drinks without an app',
    'Removable brewer, removable milk parts and guided cycles improve cleaning access',
    'Five strengths and three listed temperatures offer useful repeat adjustment',
  ],
  cons: [
    'The 1.2 L tank and 125 g hopper suit modest use, not a busy shared kitchen',
    'No profiles, app, pre-ground chute or dual bean chamber',
    'Two-cup mode does not extend to two coffee-milk specialities',
    'Public owner evidence is self-selected and does not establish a failure rate',
  ],
  architecture: 'a 220–240 V compact bean-to-cup platform with one five-step conical steel grinder, a removable automatic brewing unit, TFT colour display, button controls and an external hose-fed one-touch milk system',
  identityBoundary: 'This page reviews the black Passione OT F53/1-102 shown in Melitta’s current gallery as article 6767348 and sold under that exact suffix by current retailers. Melitta’s shared technical table labels F531-101, the silver sibling pictured as article 6767344. The family feature set appears shared, but colour article, plug, voltage, accessories, warranty and delivered rating plate still control the purchase. This is not the milk-free Passione, Latticia OT, CI Touch or Barista TS Smart.',
  primaryStrength: 'It puts a broad one-touch menu and removable-brewer hygiene into a narrow 253 mm body.',
  primaryLimit: 'Small capacities and missing profiles, app, bypass chute and paired milk drinks limit shared-household flexibility.',
  setupNote: 'Confirm F53/1-102, black article 6767348, plug, voltage, milk container and local warranty. Allow working room around the 253 × 380 mm footprint, set water hardness, install a compatible filter if used and follow the first-start rinse. The 125 g hopper and 1.2 L tank are intentionally small.',
  espressoNote: 'The official controls are five grinder steps, five strengths, 85/90/95 °C and 25–220 ml water, with pre-brewing. That is useful repeat control, but it is not measured manual espresso. Start short, adjust only while the grinder is running and judge taste. Coffeedant did not measure dose, yield, temperature, pressure or extraction.',
  milkNote: 'Cappuccino and latte macchiato are direct drinks; the machine also dispenses warm milk and milk foam. Ingredient order follows the selected recipe. One coffee-milk drink runs at a time. Easy Steam Cleaning rinses milk-bearing paths, while the hose, outlet and container still need detached cleaning and safe refrigeration.',
  workflowNote: 'Four classics have direct buttons and six further recipes live in the menu. The display guides settings and care without a phone. Double Cup covers coffee, but the official table says no simultaneous paired coffee-milk drinks. Small water, bean, tray and waste capacities make the machine better for modest daily volume.',
  buildNote: 'Melitta lists 390 × 253 × 380 mm, 8.3 kg and 1450 W. The brewer is removable and service parts exist, but public component-life data were not located. A 2020 technical forum thread documents one individual drive or brew-unit symptom after about 3,080 drinks; it cannot be converted into a model-wide reliability rate.',
  featuresNote: 'Ten recipes, three temperatures, five strengths, five grind steps, hot water, warm milk, pre-brewing, active bean monitoring and guided care form a focused feature set. Current specifications explicitly exclude app control, profiles, dual beans, programmable reference keys, a ground-coffee chute and paired milk specialities.',
  valueNote: 'The exact black listing was £476 against a crossed-out £599 reference price on September 24, 2026. That is credible value for compact one-touch milk if its capacity and missing profiles fit. Compare plug, finish, warranty, filters, cleaners and service; the €494.99 silver EU-plug offer is not automatically equivalent for a UK buyer.',
  ownerPattern: 'The available community record is mixed and sparse. Galaxus snippets praise coffee and simple operation while flagging milk-system concerns. A Reddit comparison thread contains one general care-dependent reliability view. A detailed technical forum thread records an individual high-strength brewing fault after about 3,080 drinks. None provides a representative denominator.',
  ownerCaution: 'Treat owner posts as questions to investigate, not reliability arithmetic. On used units, verify suffix, drink count, service history, leaks, grinder behaviour, brewer movement, milk flow and included parts. Persistent faults, unusual drive noise or internal leakage require qualified service.',
  maintenanceNote: 'Run the prompted milk rinse after use, clean removable milk parts and container, empty tray and grounds, and rinse the removable brew group weekly as the manual directs. Follow the guided coffee-cleaning and descaling programs using measured water hardness. Steam rinsing supports hygiene but does not replace physical milk-part cleaning.',
  dimensions: {
    espresso: { score: 7.4, claim: 'Five strengths, three temperatures, five grind steps and pre-brewing provide useful automatic control.', consequence: 'It favours repeatable short drinks over manual extraction experiments or very light-roast fine tuning.', status: 'Current official controls and older independent comparison; no Coffeedant cup measurements', signals: ['25–220 ml water range and five strength levels.', '85/90/95 °C settings and pre-brewing.', 'No measured dose, yield, temperature or extraction record located.'] },
    milk: { score: 7.5, claim: 'The hose-fed system makes core milk drinks directly and follows recipe-specific ingredient order.', consequence: 'It is convenient for one drink at a time, with continuing hose, outlet and container cleaning.', status: 'Current official milk functions and care instructions; no Coffeedant texture testing', signals: ['Direct cappuccino and latte macchiato.', 'Warm milk and milk foam are available.', 'No two simultaneous coffee-milk specialities.'] },
    workflow: { score: 8.2, claim: 'Direct buttons, a TFT guide and narrow body keep daily use approachable.', consequence: 'Small capacities create more frequent refills and emptying in a shared or high-volume kitchen.', status: 'Current official interface, capacities and dimensions', signals: ['Four direct classics plus six menu recipes.', '253 mm wide with 135 mm outlet clearance.', '1.2 L tank and 125 g hopper.'] },
    build: { score: 7.0, claim: 'A removable brew unit improves inspection and cleaning access in a compact chassis.', consequence: 'Access is helpful, but it does not establish component life or eliminate service risk.', status: 'Official construction and maintenance record with limited self-selected owner evidence', signals: ['8.3 kg body and 1450 W rating.', 'Removable brewer and guided care.', 'No representative failure-rate or component-life study located.'] },
    features: { score: 7.6, claim: 'The focused recipe and care set is coherent for a compact one-touch machine.', consequence: 'Profiles, app control, a bypass chute, dual beans and paired milk require another model.', status: 'Current official feature table checked September 24, 2026', signals: ['Ten presets and three temperatures.', 'Hot water, warm milk and active bean monitoring.', 'No app, profiles, two-chamber hopper or pre-ground chute.'] },
    value: { score: 7.9, claim: 'The dated £476 exact-black price is competitive when compact milk convenience is the goal.', consequence: 'Capacity, cleaning supplies and repair access matter more than the crossed-out headline saving.', status: 'Current exact retailer offer plus a separate silver EU-plug comparison', signals: ['£476 exact black F53/1-102 listing.', '€494.99 silver EU-plug listing.', 'Filters, cleaners, warranty and service belong in ownership cost.'] },
  },
  sources: [
    { label: 'Melitta international current Passione OT family page', href: official, note: 'Current gallery identity, 10 recipes, controls, capacities, dimensions, milk boundary, cleaning and official media; checked September 24, 2026.' },
    { label: 'Melitta Passione OT operating manual', href: manual, note: 'Manufacturer safety, setup, drink, grinder, brewer, milk-cleaning, cleaning and descaling instructions for the Passione OT family.' },
    { label: 'Melitta operating-instructions index', href: instructions, note: 'Manufacturer support index confirming that the rating-plate type number selects the correct delivered manual.' },
    { label: 'Coffee Friend exact black F53/1-102 listing', href: coffeeFriendBlack, note: 'Displayed £476 versus £599, add-to-basket state and exact black suffix on September 24, 2026; no customer reviews.' },
    { label: 'Coffee Friend silver F53/1-101 listing', href: coffeeFriendSilver, note: 'Separate silver sibling listing and zero-review context, useful for preserving colour suffix identity.' },
    { label: 'Techinn silver Passione OT listing', href: tradeinn, note: 'Displayed €494.99, EU-plug disclosure, 10-recipe description and one-review count on September 24, 2026.' },
    { label: 'Dinside report on the 2018 Testfakta comparison', href: testfaktaReport, note: 'January 30, 2018 report that Passione OT led a seven-machine comparative test; older test context, not a current exact-black retail assessment.' },
    { label: 'Vinbarista Passione OT publisher review', href: vinbarista, note: 'Dated May 26, 2017 overview of interface, footprint, outlet and milk workflow; method and exact current article are not disclosed.' },
    { label: 'Reddit exact-model purchase discussion', href: reddit, note: 'Self-selected January 2025 comparison request and a limited care-dependent reliability response; not representative evidence.' },
    { label: 'Komtra exact-family technical owner thread', href: ownerForum, note: 'October 2020 owner and repair discussion of one F53/1-101 after about 3,080 drinks; useful symptom context, not a failure-rate study.' },
    { label: 'Galaxus Passione OT owner ratings page', href: galaxus, note: 'Current self-selected owner context with positive coffee and operation themes and milk-system concerns; no controlled sample.' },
    { label: 'Современные родители exact-model video', href: video, note: 'Independent exact F531-101/F531-102 visual walkthrough published December 23, 2024; no controlled taste or durability test.' },
  ],
  comparisons: [
    { name: 'Melitta Passione OT F53/1-102', href: '/espresso-machine/melitta-passione/', quickDecision: 'Choose compact one-touch milk, 10 recipes and removable-brewer access at the dated £476 price.', priceClass: '£476 checked Sep 24', dimensions: '253 × 380 × 390 mm W×D×H', heating: '1450 W automatic system', coffeeSetup: 'One five-step grinder, 125 g hopper', milkWorkflow: 'Hose-fed one-touch; one milk drink', bestFor: 'Modest-volume compact households' },
    { name: 'Melitta Barista TS Smart', href: '/espresso-machine/melitta-barista-ts-smart/', quickDecision: 'Step up for two bean chambers, 21 recipes, eight profiles and paired milk drinks.', priceClass: '£649.99 direct Sep 24', dimensions: '259 × 467 × 372 mm W×D×H', heating: '1450 W automatic system', coffeeSetup: 'One grinder, dual chamber', milkWorkflow: 'Hose-fed paired one-touch milk', bestFor: 'Multi-user, two-bean households' },
    { name: 'Philips 5400 LatteGo', href: '/espresso-machine/philips-5400-lattego/', quickDecision: 'Compare when fewer detachable milk parts and profiles matter more than Passione’s narrow body.', priceClass: 'Midrange superautomatic', dimensions: 'Larger automatic body', heating: 'Automatic thermoblock platform', coffeeSetup: 'Single hopper and profiles', milkWorkflow: 'Two-piece LatteGo carafe', bestFor: 'Simpler milk cleanup' },
    { name: 'De’Longhi Dinamica Plus ECAM370', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', quickDecision: 'Compare a broader app-connected carafe workflow when more recipes and retail support justify a larger appliance.', priceClass: 'Mid-premium superautomatic', dimensions: 'Deep automatic body', heating: 'Automatic thermoblock platform', coffeeSetup: 'Single bean path and saved recipes', milkWorkflow: 'Detachable automatic carafe', bestFor: 'Broader connected convenience' },
  ],
  comparisonNote: 'Compare the exact suffix, plug and warranty; tank and hopper size; profiles; ground-coffee bypass; two-cup definition; milk-part cleaning; brewer access; live price and repair path. “Double Cup” does not mean two cappuccinos on the Passione OT.',
  recommendations: [
    { kicker: 'More shared-household range', title: 'Melitta Barista TS Smart', text: 'Adds dual bean chambers, eight profiles, 21 recipes and paired milk drinks for a larger household.', href: '/espresso-machine/melitta-barista-ts-smart/', linkLabel: 'Read Barista TS Smart review', featured: true },
    { kicker: 'Simpler milk parts', title: 'Philips 5400 LatteGo', text: 'Compare its two-piece milk carafe when fast physical cleanup matters more than narrow width.', href: '/espresso-machine/philips-5400-lattego/', linkLabel: 'Read Philips 5400 review' },
    { kicker: 'Carafe and app route', title: 'De’Longhi Dinamica Plus ECAM370', text: 'A broader connected automatic with a detachable milk carafe and saved recipes.', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', linkLabel: 'Read Dinamica Plus review' },
    { kicker: 'Category framework', title: 'Superautomatic buying guide', text: 'Compare capacity, milk hygiene, brewer access, profiles, warranties and ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What exact Melitta Passione OT does this review cover?', answer: 'The black F53/1-102 shown in Melitta’s current gallery as article 6767348. The silver F53/1-101 is a sibling; plug, finish, package and warranty still need verification.' },
    { question: 'How many drinks does the Passione OT make?', answer: 'Melitta lists 10 presets. Espresso, café crème, cappuccino and latte macchiato have direct buttons; six further recipes are selected through the menu.' },
    { question: 'Can it make two milk drinks at once?', answer: 'No. The current official table explicitly lists no two simultaneous coffee-milk specialities. Double Cup applies to coffee drinks.' },
    { question: 'Does it have profiles or app control?', answer: 'No. Melitta lists no My Coffee profiles, programmable reference keys or app support.' },
    { question: 'Can I use pre-ground coffee?', answer: 'No. The current specification lists no shaft for ground coffee, so the machine is designed around its 125 g bean hopper.' },
    { question: 'What are the tank, hopper and dimensions?', answer: 'Melitta lists a 1.2 L water tank, 125 g bean container and 390 × 253 × 380 mm H×W×D body at 8.3 kg.' },
    { question: 'How is the milk system cleaned?', answer: 'Easy Steam Cleaning sends hot water and steam through milk-bearing paths. The milk container, hose and removable outlet parts still need physical cleaning, and milk must be refrigerated safely.' },
    { question: 'Is £476 a good price?', answer: 'It was a competitive exact-black listing on September 24, 2026. Confirm stock, UK plug, warranty and included milk parts, then add filters, cleaners and service to the comparison.' },
  ],
  finalTitle: 'Compact one-touch convenience, with capacity and two-cup boundaries',
  finalVerdict: [
    'Passione OT compresses a useful routine into 253 mm of counter width: 10 recipes, three temperatures, five strengths, one-touch milk, hot water, a removable brewer and guided care. For one or two people who refill without resentment, the exact black F53/1-102 at £476 was a credible package on September 24, 2026.',
    'The limits are just as clear. Its 1.2 L tank and 125 g hopper are small; there are no profiles, app, bypass chute or second bean chamber; and Double Cup does not produce two milk drinks. Buy the exact suffix with a real warranty and a physical milk-cleaning routine. Choose a larger platform when several users, two beans or paired cappuccinos are the actual job.',
  ],
  video: {
    id: 'iadrb22YrlE',
    title: 'Coffee machine Melitta Caffeo Passione OT (F 531-101, F 531-102)',
    creator: 'Современные родители',
    published: '2024-12-23',
    note: 'Independent exact-model visual walkthrough. It helps identify the interface and workflow but does not provide controlled taste, temperature, cleaning-labour or durability measurements.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#melitta-passione-ot-f531-102-source-1">[source]</a> <a href="#melitta-passione-ot-f531-102-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#melitta-passione-ot-f531-102-source-1">[source]</a> <a href="#melitta-passione-ot-f531-102-source-7">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#melitta-passione-ot-f531-102-source-1">[source]</a> <a href="#melitta-passione-ot-f531-102-source-2">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="melitta-passione-owner-title"><h3 id="melitta-passione-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Simple coffee operation receives positive mentions</strong><p>Selected Galaxus comments praise coffee and straightforward controls, while offering only self-selected storefront context.</p></li>
    <li><strong>Milk concerns appear, but frequency is unknown</strong><p>One ratings snippet flags milk-system trouble. It does not identify revision, care history, diagnosis or a population from which a rate can be calculated.</p></li>
    <li><strong>One detailed fault story is still one machine</strong><p>A 2020 technical thread describes a high-strength brew interruption after about 3,080 drinks and discusses brewer or drive causes. That is useful diagnostic context, not model-wide incidence.</p></li>
    </ul><p class="review-community-evidence-note">The evidence and its limits remain readable inside Coffeedant. Original addresses, dates and scope notes are preserved in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeMelittaPassioneReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
