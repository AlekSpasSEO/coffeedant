import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.mieleusa.com/product/11648190/countertop-coffee-machine-cm-6360-milkperfection-lotus-white-cm';
const productSheet = 'https://media.miele.com/downloads/n-/us/FS_11648190_USE_US-en-US.pdf';
const manual = 'https://media.miele.com/downloads/7a/2a/01_7CED8D23BC481FE1A49ADBB4895F7A2A.pdf';
const abt = 'https://www.abt.com/Miele-CM-6360-MilkPerfection-Lotus-White-Clean-Steel-Metallic-Countertop-Coffee-Machine-11648190/p/167658.html';
const coffeeness = 'https://www.coffeeness.de/en/miele-cm-6360-milkperfection-coffee-maker-review/';
const video = 'https://www.youtube.com/watch?v=7gkD2fPkqwM';
const cm6 = 'https://www.mieleusa.com/c/barista-coffee-machines-cm6-3206.htm';
const ownerComparison = 'https://www.reddit.com/r/superautomatic/comments/1bp9auz/miele_coffee_makers_review_cm5300_vs_cm6360_vs/';
const ownerCare = 'https://www.reddit.com/r/Miele/comments/1qfeivj/any_thoughts_on_miele_cm6360/';
const ownerSetup = 'https://www.reddit.com/r/superautomatic/comments/13p3w15/new_owner_of_miele_cm6350_milk_perfection/';
const canada = 'https://www.miele.ca/en/Shop/products/detail/countertop-coffee-machines-cm-6360-milkperfection-11668950-p';
const image = 'https://media.miele.com/dam/50a642ab-9b65-4071-9305-b3ba0125d9b1/20000189110_HighresDigitalRGB.png?impolicy=gallery&imwidth=1024';

const profile: UpgradeReviewProfile = {
  key: 'miele-cm6360-11648190-us',
  slug: '/espresso-machine/miele-cm6360-milkperfection/',
  productId: 'CD-EM-000211',
  brand: 'Miele',
  model: 'CM 6360 MilkPerfection',
  sku: 'Lotus white CM, US material 11648190, EAN 4002516380665, 120 V',
  category: 'Superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Miele CM6360 review: polished milk, premium price',
  description: 'Exact US Miele CM 6360 MilkPerfection review: $2,549 dated price, 8 profiles, OneTouch for Two, 1.8 L tank, removable brewer and owner evidence.',
  verdictLabel: 'A refined one-touch machine whose $2,549 value case needs scrutiny',
  verdict: 'Shortlist the US Lotus white CM 6360, material 11648190, when eight profiles, paired drinks, strong milk automation, a removable brewer and a compact 251 mm width matter enough to justify a premium. The official record gives a 1.8 L tank, 300 g hopper, 0.7 L glass milk container, ground-coffee chute and broad programmable menu. Abt displayed $2,549 on September 24, 2026, while Miele displayed $2,999 with $450 off in cart.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Current specifications, price language and images come from the exact US product record. An independent hands-on review, an exact-model retailer demonstration and self-selected owner discussions add context. They do not provide a representative reliability rate or Coffeedant measurements.',
  image,
  imageAlt: 'Miele official front view of the Lotus white CM 6360 MilkPerfection with two milk drinks and glass milk container',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked exact-model price',
    msrp: '$2,999 US reference price',
    typical: 'Abt displayed $2,549 for Lotus white material 11648190 on September 24, 2026, including a $450 manufacturer rebate ending October 11, 2026. Miele displayed $2,999 with $450 off in cart. Price, stock and promotion can change.',
    currency: 'USD',
    numeric: '2549',
    checked: 'September 24, 2026',
  },
  links: [
    { label: 'Check exact Lotus white price and stock', href: abt, note: 'US material 11648190; $2,549 with dated manufacturer rebate when checked September 24, 2026', primary: true },
    { label: 'Read the official US product record', href: official, note: 'Exact identity, specifications, accessories, current price language and owner-review aggregate' },
  ],
  facts: [
    { label: 'Exact reviewed machine', value: 'Lotus white CM, US material 11648190, EAN 4002516380665, 120 V' },
    { label: 'Coffee system', value: 'Conical grinder, 300 g single hopper, ground-coffee chute, DoubleShot and pre-brewing' },
    { label: 'Personalization', value: '8 profiles; programmable coffee, water, temperature, milk and milk-froth amounts' },
    { label: 'Capacity', value: '1.8 L water, 0.7 L glass milk container, 0.8 L drip tray and 10-serving waste bin' },
    { label: 'Milk and pairing', value: 'OneTouch milk, paired coffee and milk recipes, removable pipework and automatic rinse' },
    { label: 'Physical record', value: '251 × 359 × 427 mm W×H×D, 80–140 mm outlet, 1.45 kW and 15 bar listed pump' },
    { label: 'Connectivity', value: 'Miele@home, MobileStart, push notifications and RemoteUpdate' },
  ],
  quickAnswers: [
    { question: 'Is this the US 11648190 machine?', answer: 'Yes. This page is locked to the Lotus white 120 V model with EAN 4002516380665.' },
    { question: 'Can it make two milk drinks?', answer: 'Yes. The US product sheet lists paired cappuccino, latte macchiato, flat white, café au lait and caffè latte.' },
    { question: 'Does it save profiles?', answer: 'Yes. Miele lists eight programmable user profiles.' },
    { question: 'Can it use pre-ground coffee?', answer: 'Yes. The product sheet and manual document a ground-coffee chute.' },
    { question: 'Is the brew unit removable?', answer: 'Yes. The manual also requires scheduled cleaning of the brew unit and interior.' },
    { question: 'Is $2,549 permanent?', answer: 'No. It was a dated US retailer offer with a stated rebate end date.' },
  ],
  bestFor: [
    'Milk-drink households that want paired one-touch service and eight profiles',
    'Owners who value a removable brew unit, dishwasher-marked parts and guided care',
    'Premium kitchens needing a narrow 251 mm body and a separate glass milk flask',
  ],
  avoidIf: [
    'You want the strongest value per recipe rather than Miele design and service positioning',
    'You dislike frequent rinsing, milk-pipe care or a 10-serving waste-bin limit',
    'You need a second bean hopper, a modern color touchscreen or documented cold-coffee recipes',
  ],
  pros: [
    'Paired coffee and milk recipes are documented for the exact US model',
    'Eight profiles and broad drink programming suit a multi-user household',
    'Removable brewer and clearly documented cleaning access improve owner control',
    'Compact width, glass milk container and clean exterior make a polished station',
  ],
  cons: [
    'The $2,549 dated price remains high for a single-hopper automatic',
    'Text-and-sensor interface looks restrained beside richer competitor displays',
    'Milk pipework, rinse valve, brewer and trays still require hands-on maintenance',
    'Owner reports are mixed and self-selected, so no defect rate can be inferred',
  ],
  architecture: 'a 120 V countertop bean-to-cup platform with one selectable conical grinder, a removable brewing unit, DirectSensor text interface, paired OneTouch milk system, glass milk container and Miele@home connectivity',
  identityBoundary: 'This page reviews the Lotus white US CM 6360 material 11648190 and EAN 4002516380665. Obsidian Black.CS material 11648200 shares the CM 6360 family but is a separate colour article. Canadian, European and other regional packages can differ in voltage, article, finish, price, warranty and included parts. This is not the CM 6160, CM 6350 or CM 7750.',
  primaryStrength: 'It combines paired milk drinks, eight profiles and removable-brewer care in a narrow, premium-looking body.',
  primaryLimit: 'The dated $2,549 checkout price asks buyers to value polish and personalization more than raw feature-per-dollar value.',
  setupNote: 'Confirm material 11648190, 120 V, invoice, included glass flask, stainless milk rod, tablets and US warranty. Allow room above and beside the 251 × 427 mm footprint for tank filling and brew-unit door access. Set water hardness, complete commissioning, connect Wi-Fi only if useful and keep one repeat drink while learning the DirectSensor menus.',
  espressoNote: 'The documented controls include selectable grind, programmable coffee amount, water, temperature and pre-brewing, plus DoubleShot and a ground-coffee chute. That is meaningful automatic adjustment, but not manual dose, yield or pressure profiling. The independent Coffeeness review praised aroma and coffee quality while describing chosen settings; Coffeedant did not reproduce its sensory result or its sound reading.',
  milkNote: 'The exact US sheet lists single and paired cappuccino, latte macchiato, milk froth, espresso macchiato, cappuccino italiano, flat white, café au lait and caffè latte. The glass container and milk siphon support different storage routines. Automatic rinsing helps, but the manual still schedules cleaning of the flask, siphon, central spout, pipework and rinse valve.',
  workflowNote: 'OneTouch for Two, eight profiles, a 1.8 L tank and 300 g hopper support shared use, while the 10-serving waste capacity and rinse water create a tighter service rhythm. DirectSensor is consistent rather than visually rich. Miele@home adds MobileStart, push notifications and updates, but the machine remains usable at its own controls.',
  buildNote: 'Miele lists a removable brew unit, removable milk pipework, ComfortClean parts, 1.45 kW load and a 251 × 359 × 427 mm cabinet. Access supports inspection and cleaning but does not establish component life. One owner comparison criticized tray and door details after a short ownership period; other owners report straightforward care. Neither establishes incidence.',
  featuresNote: 'Eight profiles, paired drinks, DoubleShot, coffee-pot mode, tea temperatures, Expert mode, cup heating, Wi-Fi and a bypass chute form a broad feature set. There is still one bean hopper and a text-and-sensor interface. App value depends on account, network and whether remote preparation is actually useful.',
  valueNote: 'Abt displayed $2,549 for the exact Lotus white article, while Miele displayed $2,999 with $450 off in cart on September 24, 2026. Compare that checkout against the Jura E8, Miele CM 7750 and less expensive automatics using the same date, then add cleaning tablets, descaler, milk cleaner, filters if used and local service terms.',
  ownerPattern: 'Selected owners split between praise for coffee, milk and cleaning when the care schedule is followed, and complaints about rinse volume, drip-tray handling, milk-hose details and North American value. Those themes are useful inspection points, not population statistics.',
  ownerCaution: 'A long comparison post, a small maintenance thread and Miele’s 26-review aggregate are self-selected. Finish, region, use volume, water, milk, care and service history vary. They cannot support a failure percentage or lifespan claim.',
  maintenanceNote: 'The current US manual details daily and scheduled work for the drip tray, waste bin, water tank, milk siphon, glass flask, central spout, milk pipework and rinse valve, brew unit, interior, bean container, ground-coffee chute, filter, steam jet, degreasing and descaling. Follow the display and manual rather than replacing that schedule with an informal rinse.',
  dimensions: {
    espresso: { score: 8.4, claim: 'Broad automatic recipe control and positive independent coffee observations support a strong score.', consequence: 'It remains a one-grinder automatic, so bean choice and programmed ratios matter more than manual profiling.', status: 'Official controls plus one independent hands-on review; no Coffeedant cup measurements', signals: ['Selectable conical grinder, pre-brewing and DoubleShot.', 'Programmable coffee amount, water and temperature.', 'Independent praise is sensory context, not a replicated lab result.'] },
    milk: { score: 8.9, claim: 'Paired OneTouch milk recipes and programmable milk amounts are unusually complete for daily service.', consequence: 'Convenience depends on prompt rinsing and physical cleaning of the complete milk path.', status: 'Exact US product sheet and manual with independent texture observations', signals: ['Single and paired milk recipes are documented.', 'Milk and froth amounts can be programmed.', 'Glass flask, siphon, pipework and rinse valve require care.'] },
    workflow: { score: 8.5, claim: 'Profiles, paired drinks and accessible containers support a busy multi-user routine.', consequence: 'A 10-serving waste bin, rinse volume and menu navigation can add repeated touches.', status: 'Official capacities and interface plus mixed owner workflow reports', signals: ['Eight profiles and OneTouch for Two.', '1.8 L water and 300 g beans.', 'DirectSensor menus and frequent care remain part of the routine.'] },
    build: { score: 8.0, claim: 'Removable-brewer access and documented care are meaningful ownership strengths.', consequence: 'Premium positioning does not prove lifespan, and self-selected tray complaints remain unresolved at population level.', status: 'Official construction and maintenance record with limited owner evidence', signals: ['Removable brewer and milk pipework.', '251 × 359 × 427 mm body with 1.45 kW load.', 'No representative component-life or failure-rate study located.'] },
    features: { score: 9.0, claim: 'Profiles, paired recipes, bypass dosing, tea, pot mode and connectivity create a broad package.', consequence: 'One hopper and a restrained display leave room above it in the category.', status: 'Current exact US feature sheet checked September 24, 2026', signals: ['Eight profiles, Expert mode and programmable recipes.', 'Miele@home, MobileStart and RemoteUpdate.', 'One bean type and one bean container.'] },
    value: { score: 6.8, claim: 'The promotion narrows the gap, but $2,549 remains a premium ask for one bean path.', consequence: 'Value depends on using paired milk, profiles and service access rather than merely wanting one-touch coffee.', status: 'Exact US retailer offer and manufacturer promotion checked September 24, 2026', signals: ['$2,549 exact Lotus white retailer listing.', '$2,999 Miele price with $450 off in cart.', 'Care supplies, warranty and service belong in ownership cost.'] },
  },
  sources: [
    { label: 'Miele USA exact CM 6360 Lotus white product page', href: official, note: 'Exact material 11648190, EAN, current specifications, accessories, $2,999 price language and 4.7/5 from 26 reviews; checked September 24, 2026.' },
    { label: 'Miele CM6 US and Canada operating instructions', href: manual, note: 'Current safety, setup, drinks, profiles, grinder, milk, cleaning intervals, troubleshooting and service instructions, M.-Nr. 12 922 641.' },
    { label: 'Abt exact material 11648190 retailer listing', href: abt, note: 'Displayed $2,549 including a $450 manufacturer rebate ending October 11, 2026, with in-stock add-to-cart state on September 24, 2026.' },
    { label: 'Coffeeness independent CM 6360 review', href: coffeeness, note: 'Independent hands-on observations about coffee aroma, hot drinks, milk, interface, app and cleaning; its settings and measurements were not reproduced by Coffeedant.' },
    { label: 'Seattle Coffee Gear exact-model video', href: video, note: 'Retailer-produced visual demonstration published March 28, 2022; useful for interface and drink workflow, not independent long-term reliability evidence.' },
    { label: 'Miele USA CM6 MilkPerfection overview', href: cm6, note: 'Manufacturer family context for drink positioning, profiles, Wi-Fi and ComfortClean; exact model sheet controls where details differ.' },
    { label: 'Miele exact US product data sheet', href: productSheet, note: 'Material-number-specific drink list, capacities, electrical data, dimensions, cleaning functions and included accessories.' },
    { label: 'Reddit CM5300, CM6360 and Jura comparison', href: ownerComparison, note: 'One detailed, self-selected short-term owner comparison reporting strong coffee but tray, door, hose and value concerns; not a failure-rate study.' },
    { label: 'Reddit CM6360 maintenance discussion', href: ownerCare, note: 'Small self-selected thread with positive two-year care reports and related-family comments; exact use and service histories are not controlled.' },
    { label: 'Reddit new-owner CM6360 setup discussion', href: ownerSetup, note: 'Self-selected questions and replies about strength settings and milk-pipe rinse timing; useful workflow context, not official instructions.' },
    { label: 'Miele Canada CM 6360 product page', href: canada, note: 'Separate regional article and owner context used to preserve the US identity boundary, not to overwrite the 120 V US material record.' },
  ],
  comparisons: [
    { name: 'Miele CM 6360 MilkPerfection', href: '/espresso-machine/miele-cm6360-milkperfection/', quickDecision: 'Choose paired milk drinks, eight profiles, removable-brewer care and a narrow body at the dated $2,549 price.', priceClass: '$2,549 checked Sep 24', dimensions: '251 × 427 × 359 mm W×D×H', heating: '1.45 kW automatic system', coffeeSetup: 'One conical grinder, 300 g hopper and bypass', milkWorkflow: 'Glass flask and paired OneTouch milk', bestFor: 'Premium multi-user milk households' },
    { name: 'Miele CM 7750 CoffeeSelect', href: '/espresso-machine/miele-cm7750-coffeeselect/', quickDecision: 'Step up when three bean containers and flagship automation justify a much larger budget.', priceClass: 'Ultra-premium superautomatic', dimensions: 'Larger flagship body', heating: 'Automatic bean-to-cup platform', coffeeSetup: 'CoffeeSelect multi-bean system', milkWorkflow: 'Automatic milk with broader flagship controls', bestFor: 'Several beans and premium automation' },
    { name: 'Jura E8', href: '/espresso-machine/jura-e8/', quickDecision: 'Compare its current interface and closed-brewer workflow when removable-brewer access is not essential.', priceClass: 'Premium superautomatic', dimensions: 'Premium automatic body', heating: 'Jura automatic platform', coffeeSetup: 'Single bean path and saved recipes', milkWorkflow: 'Hose-fed automatic milk', bestFor: 'Polished black coffee and guided operation' },
    { name: 'Melitta Barista TS Smart', href: '/espresso-machine/melitta-barista-ts-smart/', quickDecision: 'Choose two bean chambers, 21 recipes and eight profiles at a much lower dated price if US support is not required.', priceClass: '£649.99 direct Sep 24', dimensions: '259 × 467 × 372 mm W×D×H', heating: '1450 W automatic system', coffeeSetup: 'One grinder with dual bean chamber', milkWorkflow: 'Paired hose-fed one-touch milk', bestFor: 'Two-bean value seekers' },
  ],
  comparisonNote: 'Compare the exact US article, voltage, warranty and seller; number of bean paths; paired-drink definition; brewer access; milk-part cleaning; tank, tray and waste rhythm; current checkout total and repair route. Shared brand or model-family names do not guarantee identical regional hardware.',
  recommendations: [
    { kicker: 'Three-bean flagship', title: 'Miele CM 7750 CoffeeSelect', text: 'A larger and more expensive Miele for households that genuinely use multiple beans and deeper automation.', href: '/espresso-machine/miele-cm7750-coffeeselect/', linkLabel: 'Read Miele CM 7750 review', featured: true },
    { kicker: 'Premium rival', title: 'Jura E8', text: 'Compare its guided interface and closed-brewer ownership model against Miele’s removable unit.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read Jura E8 review' },
    { kicker: 'Two-bean value', title: 'Melitta Barista TS Smart', text: 'Adds two bean chambers, 21 recipes and eight profiles for buyers with appropriate regional support.', href: '/espresso-machine/melitta-barista-ts-smart/', linkLabel: 'Read Barista TS Smart review' },
    { kicker: 'Category framework', title: 'Superautomatic buying guide', text: 'Compare drink pairing, milk hygiene, brewer access, profiles, service and full ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What exact Miele CM 6360 does this review cover?', answer: 'The Lotus white US CM 6360 MilkPerfection, manufacturer material 11648190, EAN 4002516380665 and 120 V. Other colours and regions are separate articles or packages.' },
    { question: 'Can the CM 6360 make two milk drinks at once?', answer: 'Yes. The exact US product sheet lists double cappuccino, latte macchiato, milk froth, espresso macchiato, cappuccino italiano, flat white, café au lait and caffè latte.' },
    { question: 'How many user profiles does it have?', answer: 'Miele lists eight programmable profiles. Coffee, water, temperature, milk and milk-froth amounts can also be programmed.' },
    { question: 'Can it use pre-ground coffee?', answer: 'Yes. The exact product sheet lists additional ground coffee, and the manual documents the ground-coffee chute and preparation routine.' },
    { question: 'What are the tank, hopper and dimensions?', answer: 'The US sheet lists 1.8 L water, a 300 g single hopper and a 251 × 359 × 427 mm W×H×D body. The glass milk container holds 0.7 L.' },
    { question: 'Is the brew unit removable?', answer: 'Yes. Miele documents removal and physical cleaning of the brew unit and interior. That access does not make the machine maintenance-free.' },
    { question: 'How much cleaning does the milk system require?', answer: 'The machine automatically rinses the milk pipework, but the manual also schedules physical cleaning of the flask, siphon, central spout, pipework and rinse valve.' },
    { question: 'Is $2,549 a good price?', answer: 'It was the exact Lotus white Abt price on September 24, 2026, with a rebate stated to end October 11. Compare live checkout, warranty and full care cost before buying.' },
  ],
  finalTitle: 'Excellent milk convenience, but the premium must earn its place',
  finalVerdict: [
    'The exact US CM 6360 is a coherent premium automatic: paired milk drinks, eight profiles, a ground-coffee chute, a 1.8 L tank, a 300 g hopper, a glass milk flask, removable brewer and clear care documentation in a 251 mm-wide body. The independent review supports its coffee and milk promise, while the specification supports unusually broad daily personalization.',
    'Price is the harder argument. At $2,549 on September 24, 2026, one bean path, a restrained display and a real milk-cleaning workload remain visible compromises. Buy it when several users will use the profiles and paired recipes and when local Miele support matters. Choose a less expensive automatic when one-touch basics are the whole job, or the CM 7750 only when multiple beans are worth flagship money.',
  ],
  video: {
    id: '7gkD2fPkqwM',
    title: 'Miele CM6360 Milk Perfection Superautomatic Espresso Machine',
    creator: 'Seattle Coffee Gear',
    published: '2022-03-28',
    note: 'Exact-model retailer demonstration of controls, drink preparation and milk workflow. It is commercial context, not Coffeedant testing or long-term independent reliability evidence.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#miele-cm6360-11648190-us-source-1">[source]</a> <a href="#miele-cm6360-11648190-us-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#miele-cm6360-11648190-us-source-1">[source]</a> <a href="#miele-cm6360-11648190-us-source-4">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#miele-cm6360-11648190-us-source-2">[source]</a> <a href="#miele-cm6360-11648190-us-source-7">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="miele-cm6360-owner-title"><h3 id="miele-cm6360-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Coffee quality can coexist with workflow complaints</strong><p>One detailed comparison praised the coffee yet criticized the drip tray, water-tank handle, milk-hose storage and brew-unit door access after a short ownership period.</p></li>
    <li><strong>Care-following owners also report positive experience</strong><p>A small Miele discussion includes an owner reporting two trouble-free years with regular cleaning and another related-family owner describing daily care as manageable.</p></li>
    <li><strong>Rinse timing confuses some new owners</strong><p>A setup thread asks when the milk-pipe rinse prompt should appear. The current manual, not a forum reply, controls the required routine.</p></li>
    </ul><p class="review-community-evidence-note">The evidence and its limits remain readable inside Coffeedant. Original addresses, dates and scope notes are preserved in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeMieleCM6360Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
