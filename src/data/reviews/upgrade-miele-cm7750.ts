import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.mieleusa.com/product/11106260/countertop-coffee-machine-cm-7750-coffeeselect-obsidian-black';
const productSheet = 'https://media.miele.com/downloads/n-/us/FS_11106260_USE_US-en-US.pdf';
const manual = 'https://media.miele.com/downloads/9a/2a/01_7CED8D23BC481FE1A49ADA49DC759A2A.pdf';
const abt = 'https://www.abt.com/Miele-CM-7750-CoffeeSelect-Obsidian-Black-Countertop-Coffee-Machine-11106260/p/167665.html';
const coffeeness = 'https://www.coffeeness.de/en/miele-cm-7750-review/';
const video = 'https://www.youtube.com/watch?v=KC17QB6hszs';
const videoRecord = 'https://www.seattlecoffeegear.com/blogs/scg-blog/video-roundup-4-8-2022';
const ownerComparison = 'https://www.reddit.com/r/superautomatic/comments/1gs2yig/kitchenaid_kf8_vs_miele_cm7750_which_would_you/';
const ownerStatus = 'https://www.reddit.com/r/Miele/comments/1r1s2kh/miele_cm7750_discontinued/';
const williamsSonoma = 'https://www.williams-sonoma.com/products/miele-cm7750-fully-automatic-espresso-machine/';
const designer = 'https://www.designerappliances.com/miele-cm7750ob.html';
const image = 'https://media.miele.com/dam/6cad32f1-6c7f-4ddb-9514-b3ba0125c7c4/20000189119_HighresDigitalRGB.png?impolicy=gallery&imwidth=1024';

const profile: UpgradeReviewProfile = {
  key: 'miele-cm7750-11106260-us',
  slug: '/espresso-machine/miele-cm7750-coffeeselect/',
  productId: 'CD-EM-000212',
  brand: 'Miele',
  model: 'CM 7750 CoffeeSelect',
  sku: 'Obsidian Black, US material 11106260, EAN 4002516116196, 120 V',
  category: 'Superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Miele CM7750 review: three beans at flagship cost',
  description: 'Exact US Miele CM 7750 CoffeeSelect review: $4,499 dated price, three bean containers, CM Touch, 10 profiles, CupSensor and AutoDescale.',
  verdictLabel: 'Rare three-bean convenience, priced for buyers who will use it',
  verdict: 'Shortlist the exact US CM 7750, material 11106260, when three selectable bean containers, 10 profiles, paired milk drinks, CupSensor and unattended descaling solve real household conflicts. The official record gives 540 g total beans, 2.2 L water, a 0.7 L glass milk flask, 16-serving waste capacity and a removable brewer. Miele and Abt each displayed $4,499 on September 24, 2026, so the value case depends on using its uncommon workflow rather than simply wanting one-touch coffee.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Exact identity, specifications, care and images come from current US Miele records. An independent hands-on review, an exact-model retailer video, current retailer listings, Miele owner reviews and self-selected community discussions add context. They do not provide a representative reliability rate or Coffeedant measurements.',
  image,
  imageAlt: 'Miele official front view of the black CM 7750 CoffeeSelect preparing two layered milk drinks beside its glass milk container',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked exact-model price',
    msrp: '$4,499 US reference price',
    typical: 'Miele and Abt each displayed $4,499 for US material 11106260 on September 24, 2026. Abt required a call for availability; Designer Appliances displayed the same price with an in-stock state. Price and stock can change.',
    currency: 'USD', numeric: '4499', checked: 'September 24, 2026',
  },
  links: [
    { label: 'Check exact US price and stock', href: abt, note: 'US material 11106260; $4,499 and call-for-availability state checked September 24, 2026', primary: true },
    { label: 'Read the official US product record', href: official, note: 'Exact identity, current price, specifications, accessories, downloads and owner-review aggregate' },
  ],
  facts: [
    { label: 'Exact reviewed machine', value: 'Obsidian Black, US material 11106260, EAN 4002516116196, 120 V' },
    { label: 'Bean system', value: 'One selectable conical grinder, three containers: 150 g, 210 g and 180 g; 540 g total' },
    { label: 'Personalization', value: 'CM Touch display, 10 profiles, Expert mode, programmable dose, water, temperature, milk and froth' },
    { label: 'Capacity', value: '2.2 L water, 0.7 L glass milk container, 0.8 L drip tray and 16-serving waste bin' },
    { label: 'Milk and pairing', value: 'OneTouch for Two, paired milk recipes, removable pipework and automatic milk-line rinse' },
    { label: 'Physical record', value: '311 × 420 × 445 mm W×H×D, 80–160 mm outlet range, 1.45 kW and 120 V' },
    { label: 'Care and connectivity', value: 'AutoDescale cartridge, removable brewer, ComfortClean, Miele@home, MobileStart and RemoteUpdate' },
  ],
  quickAnswers: [
    { question: 'Is this the US 11106260 model?', answer: 'Yes. This page is locked to the Obsidian Black 120 V article with EAN 4002516116196.' },
    { question: 'Are there three grinders?', answer: 'No. Miele documents three selectable bean containers and one conical grinder.' },
    { question: 'Can it make two milk drinks?', answer: 'Yes. The exact US sheet lists paired cappuccino, latte macchiato, flat white, café au lait and more.' },
    { question: 'Does it have a touchscreen?', answer: 'Yes. Miele calls the control panel CM Touch, and the manual documents touch-display operation.' },
    { question: 'Is the brew unit removable?', answer: 'Yes. It still needs physical cleaning and scheduled degreasing.' },
    { question: 'Is $4,499 permanent?', answer: 'No. It is a dated US listing and stock states differed by retailer.' },
  ],
  bestFor: [
    'Households that keep regular, decaf and another bean ready without swapping hoppers',
    'Several users who will genuinely use 10 profiles, paired milk drinks and recipe programming',
    'Owners who value a removable brewer and scheduled cartridge descaling more than lowest price',
  ],
  avoidIf: [
    'You need two independent grinders, cold extraction or manual espresso profiling',
    'A 445 mm-deep, $4,499 machine is disproportionate to your one-touch routine',
    'You expect automatic rinsing and AutoDescale to eliminate milk, tray and brewer cleaning',
  ],
  pros: [
    'Three bean containers are documented for the exact US machine',
    'Ten profiles and paired recipes suit a genuinely mixed-preference household',
    'CupSensor and CM Touch reduce repeated physical adjustments',
    'AutoDescale, removable brewer and ComfortClean create a strong care toolkit',
  ],
  cons: [
    'The checked $4,499 price is difficult to justify without frequent multi-bean use',
    'Three containers still feed one grinder, so they are not three independent grind paths',
    'Large depth and top access demand more counter clearance than the front view suggests',
    'Owner and reviewer praise is self-selected and cannot establish long-term reliability',
  ],
  architecture: 'a 120 V countertop bean-to-cup platform with three selectable bean containers feeding one conical grinder, a removable brewing unit, CM Touch display, motorized CupSensor spout, paired automatic milk system, glass flask, AutoDescale cartridge and Miele@home connectivity',
  identityBoundary: 'This page reviews the Obsidian Black US CM 7750 CoffeeSelect, material 11106260, EAN 4002516116196 and 120 V. European, Canadian, Australian and Asian articles can differ in material number, voltage, price, warranty, included parts and current availability. It is not the CM 7550, CM 7500, CM 6360 or a built-in CVA model.',
  primaryStrength: 'Three selectable bean containers, 10 profiles and automated spout and descaling functions address a busy multi-preference household better than most single-hopper automatics.',
  primaryLimit: 'At the dated $4,499 US price, the same one-grinder brew path must justify a flagship premium through convenience rather than manual espresso control.',
  setupNote: 'Confirm material 11106260, 120 V, invoice, US warranty, glass milk flask, descaling cartridge and cleaning tablets. The 311 × 445 mm footprint needs space above for the three bean lids and beside the machine for water, brew-unit and ground-coffee access. Set water hardness, insert the cartridge, name the three bean types, assign them deliberately to recipes and establish one reference drink before adding profiles.',
  espressoNote: 'The exact sheet documents selectable grind, programmable ground quantity, water, temperature and pre-brewing, plus DoubleShot, Expert mode and a ground-coffee chute. Those are useful automatic controls, but the three hoppers share one grinder and do not add manual dose, yield, pressure or flow profiling. Coffeeness praised espresso quality and the quiet grinder in its hands-on review; Coffeedant did not reproduce those sensory impressions.',
  milkNote: 'The US sheet lists single and paired cappuccino, latte macchiato, milk froth, espresso macchiato, cappuccino italiano, flat white, café au lait and caffè latte. The glass flask and siphon support different storage routines. Automatic rinsing is a convenience, not a substitute for daily milk-flask care and scheduled cleaning of the siphon, spout and internal pipework.',
  workflowNote: 'Three assigned beans, 10 profiles, OneTouch for Two, CupSensor, pot modes and a 16-serving waste bin make the CM 7750 unusually capable for mixed households. CM Touch is clearer than Miele’s sensor-text panels, although one community contributor found its menu depth slow to change. MobileStart and notifications add options, but app services remain account, network and region dependent.',
  buildNote: 'Miele lists a removable brew unit, removable milk pipework, ComfortClean parts, 1.45 kW load and a 311 × 420 × 445 mm body. Coffeeness praised the stainless details and substantial housing, while the 14.2 kg independent specification underscores its size. These observations do not prove service life or failure rate.',
  featuresNote: 'CoffeeSelect, AutoDescale, CupSensor, 10 profiles, paired recipes, DoubleShot, Expert mode, coffee and tea pots, heated cup storage, Wi-Fi and a bypass chute make this one of the most feature-dense Miele countertop machines. The central constraint remains one grinder and no documented cold-extraction or cold-foam program.',
  valueNote: 'Miele and Abt displayed $4,499 on September 24, 2026, while Designer Appliances also displayed $4,499 with an in-stock state. Compare live checkout and support against the Miele CM 6360, Jura Z10 and Jura GIGA 6, then add descaling cartridges, cleaning tablets, milk cleaner and repair access. A three-bean household can extract real workflow value; a one-bean household is paying for unused hardware.',
  ownerPattern: 'Miele’s current eight-review set is strongly positive about espresso, three bean bins, milk and automation. A separate enthusiast comparison values the three-hopper idea but includes criticism of size, menu depth, pace and price. Another thread discusses changing regional availability without an official US discontinuation notice. These are useful questions, not population statistics.',
  ownerCaution: 'Miele’s review set and two small community discussions are self-selected. Region, ownership length, water, beans, drink volume, care and service history vary. They cannot support a lifespan or defect-rate claim, and regional delisting does not prove the current US article is discontinued while Miele still lists it for sale.',
  maintenanceNote: 'The current US manual schedules daily cleaning for the machine and milk flask, regular care for the tray, waste bin, water tank, milk siphon, CupSensor, central spout, bean system, ground-coffee chute and brewer, plus milk-pipe cleaning, brew-unit degreasing and AutoDescale management. The cartridge reduces a major task, but the manual warns that additional manual descaling may still be necessary depending on use.',
  dimensions: {
    espresso: { score: 8.7, claim: 'Broad automatic controls and positive independent sensory context support a strong daily-coffee score.', consequence: 'One shared grinder and a fixed automatic brew path cap experimentation with demanding light roasts.', status: 'Official controls plus one independent hands-on review; no Coffeedant cup measurements', signals: ['Selectable bean assignment, grind, dose, temperature and pre-brewing.', 'DoubleShot and Expert mode expand automatic adjustment.', 'Independent praise is context, not a replicated Coffeedant result.'] },
    milk: { score: 9.0, claim: 'Paired OneTouch recipes, programmable milk volumes and a glass flask make milk service unusually complete.', consequence: 'Daily flask and milk-path cleaning remain mandatory despite automatic rinsing.', status: 'Exact US sheet and manual with independent texture observations', signals: ['Single and paired milk recipes are documented.', 'Milk and froth amounts are programmable.', 'Automatic rinse does not replace physical cleaning.'] },
    workflow: { score: 8.8, claim: 'Three assigned beans, 10 profiles and CupSensor solve repeated household choices efficiently.', consequence: 'A large body and deep settings menu can still slow occasional users.', status: 'Official workflow features plus mixed owner and community observations', signals: ['Three bean containers and 10 profiles.', 'OneTouch for Two and 16-serving waste capacity.', 'CupSensor automates the 80–160 mm outlet range.'] },
    build: { score: 8.3, claim: 'Removable-brewer access, substantial cabinet and documented care are meaningful ownership strengths.', consequence: 'Weight and premium materials do not establish lifespan, and there is no representative repair dataset.', status: 'Official construction and manual with independent hands-on observations', signals: ['Removable brewer and milk pipework.', '311 × 420 × 445 mm, 1.45 kW and 120 V.', 'No representative component-life study located.'] },
    features: { score: 9.5, claim: 'CoffeeSelect, AutoDescale, CupSensor, CM Touch, profiles, pots and connectivity form an exceptional feature set.', consequence: 'There is still one grinder, and no cold-extraction suite is documented.', status: 'Current exact US product sheet checked September 24, 2026', signals: ['Three selectable bean containers and 10 profiles.', 'AutoDescale, CupSensor and paired drinks.', 'Tea, pots, Expert mode, MobileStart and RemoteUpdate.'] },
    value: { score: 6.1, claim: 'The workflow is rare, but $4,499 leaves little room for unused features.', consequence: 'Buyers with one bean or one user can get the core one-touch job for far less.', status: 'Exact US manufacturer and retailer pricing checked September 24, 2026', signals: ['$4,499 at Miele and Abt.', 'Different current retailer stock states.', 'Cartridges, cleaners, warranty and service belong in ownership cost.'] },
  },
  sources: [
    { label: 'Miele USA exact CM 7750 product page', href: official, note: 'Exact material 11106260, EAN, CM Touch, CoffeeSelect, capacities, $4,499 price, accessories and 4.8/5 from eight reviews; checked September 24, 2026.' },
    { label: 'Miele CM 7750 US and Canada operating instructions', href: manual, note: 'Current setup, bean assignment, touch operation, recipes, profiles, CupSensor, cleaning intervals, AutoDescale, troubleshooting and service instructions, M.-Nr. 12 921 051.' },
    { label: 'Abt exact material 11106260 listing', href: abt, note: 'Displayed $4,499 with call-for-availability state, 19 oz beans, 75 oz water, three containers and current exact-model specifications on September 24, 2026.' },
    { label: 'Coffeeness independent CM 7750 review', href: coffeeness, note: 'Independent hands-on observations about espresso, milk, grinder noise, interface, size, cleaning and price; its sensory results were not reproduced by Coffeedant.' },
    { label: 'Seattle Coffee Gear exact-model Crew Review', href: video, note: 'Retailer-produced exact-model visual review included in Seattle Coffee Gear’s April 8, 2022 roundup; useful for controls and drink workflow, not independent long-term reliability evidence.' },
    { label: 'Miele exact US product data sheet', href: productSheet, note: 'Material-specific identity, drink list, three-container capacities, electrical data, dimensions, care functions and included accessories.' },
    { label: 'Seattle Coffee Gear video roundup', href: videoRecord, note: 'Publisher record dated April 8, 2022 that identifies the exact CM 7750 Crew Review and its retail editorial context.' },
    { label: 'Reddit CM 7750 and KitchenAid comparison', href: ownerComparison, note: 'Self-selected enthusiast discussion contrasting the value of three hoppers with criticism of size, menu depth, pace and price; not a reliability study.' },
    { label: 'Reddit regional availability discussion', href: ownerStatus, note: 'Self-selected discussion about European delisting and possible succession; the current US manufacturer listing controls US availability claims.' },
    { label: 'Williams Sonoma exact-model listing', href: williamsSonoma, note: 'Separate US retailer displayed $4,499.95 and three bean hoppers when checked September 24, 2026, supporting current price context rather than permanent availability.' },
    { label: 'Designer Appliances exact-model listing', href: designer, note: 'Displayed $4,499 with an in-stock state and exact US manual/specification links on September 24, 2026; retailer state can change.' },
  ],
  comparisons: [
    { name: 'Miele CM 7750 CoffeeSelect', href: '/espresso-machine/miele-cm7750-coffeeselect/', quickDecision: 'Choose three assigned bean containers, 10 profiles, CupSensor and AutoDescale when they justify $4,499.', priceClass: '$4,499 checked Sep 24', dimensions: '311 × 445 × 420 mm W×D×H', heating: '1.45 kW automatic system', coffeeSetup: 'One conical grinder, three containers totaling 540 g', milkWorkflow: 'Glass flask and paired OneTouch milk', bestFor: 'Multi-bean, multi-user households' },
    { name: 'Miele CM 6360 MilkPerfection', href: '/espresso-machine/miele-cm6360-milkperfection/', quickDecision: 'Save substantially when one 300 g hopper and eight profiles cover the household.', priceClass: '$2,549 checked Sep 24', dimensions: '251 × 427 × 359 mm W×D×H', heating: '1.45 kW automatic system', coffeeSetup: 'One conical grinder, one hopper and bypass', milkWorkflow: 'Glass flask and paired OneTouch milk', bestFor: 'One-bean Miele households' },
    { name: 'Jura Z10', href: '/espresso-machine/jura-z10/', quickDecision: 'Compare when cold extraction and Jura’s interface matter more than three bean containers or a removable brewer.', priceClass: 'Ultra-premium superautomatic', dimensions: 'Premium automatic body', heating: 'Automatic hot and cold platform', coffeeSetup: 'One adaptive grinder and one bean path', milkWorkflow: 'Hose-fed automatic milk with cold recipes', bestFor: 'Hot and cold drink breadth' },
    { name: 'Jura GIGA 6', href: '/espresso-machine/jura-giga-6/', quickDecision: 'Choose dual grinders and higher-throughput architecture when two true grind paths matter more than Miele care access.', priceClass: 'Flagship superautomatic', dimensions: 'Large dual-system body', heating: 'Dual automatic system', coffeeSetup: 'Two grinders and two bean paths', milkWorkflow: 'Automatic milk and paired service', bestFor: 'Two-bean throughput and offices' },
  ],
  comparisonNote: 'Compare exact region, voltage, warranty and current seller; number of bean containers versus independent grinders; paired-drink definition; brewer access; milk-part cleaning; tank and tray rhythm; current checkout total, consumables and repair route. A shared model-family name does not guarantee identical regional availability or package.',
  recommendations: [
    { kicker: 'Lower-cost Miele', title: 'Miele CM 6360 MilkPerfection', text: 'Keeps paired milk, eight profiles and removable-brewer care when one bean hopper is enough.', href: '/espresso-machine/miele-cm6360-milkperfection/', linkLabel: 'Read Miele CM 6360 review', featured: true },
    { kicker: 'Cold-drink rival', title: 'Jura Z10', text: 'Prioritizes cold extraction and a polished interface over three bean containers and owner-removable brewing.', href: '/espresso-machine/jura-z10/', linkLabel: 'Read Jura Z10 review' },
    { kicker: 'Dual-grinder flagship', title: 'Jura GIGA 6', text: 'Offers two genuine grinder paths and greater throughput for buyers who need parallel bean systems.', href: '/espresso-machine/jura-giga-6/', linkLabel: 'Read Jura GIGA 6 review' },
    { kicker: 'Category framework', title: 'Superautomatic buying guide', text: 'Compare bean paths, milk hygiene, brewer access, profiles, service and full ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What exact Miele CM 7750 does this review cover?', answer: 'The Obsidian Black US CM 7750 CoffeeSelect, manufacturer material 11106260, EAN 4002516116196 and 120 V. Other regional articles are separate packages.' },
    { question: 'Does the CM 7750 have three grinders?', answer: 'No. Miele documents three bean containers holding 150 g, 210 g and 180 g, but one selectable conical grinder.' },
    { question: 'Can it make two milk drinks at once?', answer: 'Yes. The exact US product sheet lists paired cappuccino, latte macchiato, milk froth, espresso macchiato, cappuccino italiano, flat white, café au lait and caffè latte.' },
    { question: 'How many profiles does it have?', answer: 'Miele lists 10 programmable user profiles, plus programmable ground quantity, water, temperature, milk and milk-froth amounts.' },
    { question: 'What are the tank, bean capacity and dimensions?', answer: 'The US sheet lists 2.2 L water, 540 g beans across three containers and a 311 × 420 × 445 mm W×H×D body.' },
    { question: 'Is the brew unit removable?', answer: 'Yes. The manual documents physical removal, rinsing and regular degreasing. AutoDescale does not clean the brewer for you.' },
    { question: 'Does AutoDescale eliminate all descaling?', answer: 'No. It schedules cartridge-based cycles, but Miele states additional manual descaling may be necessary depending on use.' },
    { question: 'Is $4,499 a good price?', answer: 'It was the exact-model Miele and Abt price on September 24, 2026. It makes sense only when several users will exploit the three bean containers, profiles and care automation.' },
  ],
  finalTitle: 'Exceptional multi-bean convenience, narrow value case',
  finalVerdict: [
    'The exact US CM 7750 is a coherent flagship automatic: three selectable bean containers, 10 profiles, paired milk drinks, a touch display, CupSensor, a 2.2 L tank, 16-serving waste bin, removable brewer and cartridge descaling. Independent hands-on observations support the coffee, milk and quiet-workflow promise, while the official manual makes its cleaning obligations unusually clear.',
    'The hard part is the $4,499 price. Three containers do not mean three grinders, cold extraction is absent, and automation still leaves milk, tray and brewer work. Buy it for a household that repeatedly rotates regular, decaf and another bean and will use the profiles. Choose the CM 6360 when one bean is enough, the Z10 for cold drinks, or a dual-grinder flagship when independent grind paths are essential.',
  ],
  video: {
    id: 'KC17QB6hszs',
    title: 'Miele CM7750 Coffee Select Superautomatic Espresso Machine | Crew Review',
    creator: 'Seattle Coffee Gear',
    published: '2022-04-08',
    note: 'Exact-model retailer video demonstrating controls, bean selection, drink preparation and cleaning access. It is commercial workflow evidence, not Coffeedant testing or long-term independent reliability evidence.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#miele-cm7750-11106260-us-source-1">[source]</a> <a href="#miele-cm7750-11106260-us-source-6">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#miele-cm7750-11106260-us-source-1">[source]</a> <a href="#miele-cm7750-11106260-us-source-4">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#miele-cm7750-11106260-us-source-2">[source]</a> <a href="#miele-cm7750-11106260-us-source-6">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="miele-cm7750-owner-title"><h3 id="miele-cm7750-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Three beans are the recurring reason to buy</strong><p>Recent Miele reviewers and an enthusiast comparison repeatedly value keeping different beans ready, especially when household members prefer different roasts or decaf.</p></li>
    <li><strong>Convenience praise is not unanimous</strong><p>Miele reviewers praise espresso, milk and automation, while one community contributor criticizes the machine’s size, menu depth, pace and price.</p></li>
    <li><strong>Regional status needs exact checking</strong><p>A community thread reports European delisting, but Miele USA still lists material 11106260 at $4,499. Regional status should not be generalized.</p></li>
    </ul><p class="review-community-evidence-note">The evidence and its limits remain readable inside Coffeedant. Original addresses, dates and scope notes are preserved in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeMieleCM7750Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
