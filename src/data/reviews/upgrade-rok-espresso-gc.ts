import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const officialProduct = 'https://us.rok.coffee/products/espressogc-black';
const warranty = 'https://us.rok.coffee/pages/warranties';
const conversionKit = 'https://us.rok.coffee/products/gc-conversion-kit';
const video = 'https://www.youtube.com/watch?v=5kWH3bLqo7M';
const independentReview = 'https://thecoffeefolk.com/rok-espresso/';
const manualRoundup = 'https://www.coffeeness.de/en/best-manual-espresso-maker/';
const ownerThread = 'https://www.reddit.com/r/espresso/comments/qkfi7b/rok_espresso_gc/';
const robotComparison = 'https://www.reddit.com/r/Coffee/comments/myc0re/cafelat_robot_vs_rok_coffee/';
const currentOwnerComparison = 'https://www.reddit.com/r/espresso/comments/1s0wh5l/rok_espressogc_vs_cafelat_robot_500/';
const explorerRetailer = 'https://www.cremashop.eu/en/products/rok/espresso-explorer-edition';
const hero = 'https://us.rok.coffee/cdn/shop/files/Espresso_Black_PLUS_2000x2000copy.jpg?v=1766392497&width=1200';

const profile: UpgradeReviewProfile = {
  key: 'rok-espresso-gc-black-plus-us',
  slug: '/espresso-machine/rok-espresso-gc/',
  productId: 'CD-EM-000239',
  brand: 'ROK',
  model: 'EspressoGC Black PLUS',
  sku: 'Current US EspressoGC Black PLUS package; verify regional finish, baskets, frother and warranty before purchase',
  category: 'Non-electric dual-arm manual lever espresso maker',
  brandPath: '/espresso-machine/',
  title: 'ROK EspressoGC review: capable manual espresso, demanding heat work',
  description: 'Research-led ROK EspressoGC Black PLUS review covering the current US package, $259 price, standard and Smartshot baskets, kettle workflow, milk frother, warranty and alternatives.',
  verdictLabel: 'A sturdy, affordable lever for buyers who want to feel every extraction and accept active heat management',
  verdict: 'ROK EspressoGC Black PLUS is a compact, non-electric dual-arm lever with a glass-composite brew chamber, standard basket, Smartshot basket, manual milk frother and ten-year limited US warranty. ROK USA listed this package at US$259 on September 25, 2026. The standard basket can reward a capable grinder and careful puck preparation, while the Smartshot basket offers a more forgiving path. Neither removes the need for hot water, preheating judgment, manual force, a scale and cleanup. Buy it for deliberate straight espresso and simple mechanics, not for automatic repeatability or integrated steam.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores apply to the current EspressoGC Black PLUS package sold by ROK USA on September 25, 2026. The official listing documents the standard and Smartshot baskets, clip-on double adapter, dosing funnel, spoon-tamper, manual frother, powder-coated aluminium, stainless steel, glass-composite and silicone construction, 7 by 7 by 12.5 inch dimensions and 5.3 lb weight. Independent and owner evidence supports the importance of preheating, grind, puck preparation and steady lever force, but Coffeedant did not measure pressure, temperature, extraction, taste or durability.',
  image: hero,
  imageAlt: 'Official product photograph of the current black ROK EspressoGC Black PLUS manual espresso maker',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: { label: 'ROK USA direct price checked September 25, 2026', msrp: '$259.00', typical: 'Current Black PLUS package with standard basket, Smartshot basket, manual milk frother, dosing funnel and small tools; tax, delivery, stock and regional package vary', currency: 'USD', numeric: '259.00', checked: 'September 25, 2026' },
  links: [
    { label: 'Check the current ROK USA package', href: officialProduct, note: 'Official identity, live price, box contents, materials, dimensions, weight and care guidance', primary: true },
    { label: 'Read the ROK USA warranty', href: warranty, note: 'Official ten-year limited warranty terms, exclusions and claim requirements' },
  ],
  facts: [
    { label: 'Scored model', value: 'Current ROK USA EspressoGC Black PLUS package' },
    { label: 'Brew system', value: 'Human-powered dual-arm lever with glass-composite pressure chamber and no pressure gauge' },
    { label: 'Coffee paths', value: 'Standard basket for dialed-in espresso plus Smartshot restricted basket for a more forgiving grind range' },
    { label: 'Heat', value: 'No heater; hot water comes from a separate kettle and thermal preparation remains manual' },
    { label: 'Milk', value: 'Separate hand-pump milk frother is included; there is no steam wand' },
    { label: 'Materials', value: 'Powder-coated aluminium, stainless steel, glass-composite and silicone' },
    { label: 'Size and mass', value: '7 × 7 × 12.5 inches and 5.3 lb by the current US listing' },
    { label: 'Care', value: 'Not dishwasher safe; rinse and hand care are required' },
    { label: 'Warranty', value: 'Ten-year limited US term for the original purchaser, with wear, misuse and other exclusions' },
  ],
  quickAnswers: [
    { question: 'Which EspressoGC is reviewed?', answer: 'The current black US PLUS package listed at $259 on September 25, 2026, not an older Presso, conversion-only unit, pressure-gauge edition or Explorer bundle.' },
    { question: 'Does it heat water?', answer: 'No. A separate kettle supplies hot water, and the owner decides how much thermal preparation the chamber and portafilter need.' },
    { question: 'Why are two baskets included?', answer: 'The standard basket gives grind and puck preparation direct control. The Smartshot basket restricts flow and is intended to work across a broader grind range.' },
    { question: 'Does it show pressure?', answer: 'No. The scored Black PLUS package has no pressure gauge, so the operator judges resistance, lever speed, time and beverage yield.' },
    { question: 'Can it make milk drinks?', answer: 'The package includes a separate manual frother, but it does not steam milk or integrate milk heating with the espresso pull.' },
    { question: 'Who should buy it?', answer: 'A patient buyer who wants a compact mechanical lever, already has a kettle, and enjoys learning grind, heat and manual force.' },
  ],
  bestFor: ['One or two deliberate straight espressos where manual pressure is part of the appeal', 'A kitchen, office or travel setup with a reliable hot-water source and enough room for a grinder and scale', 'A learner who values both a forgiving Smartshot path and a standard basket for deeper dialing in'],
  avoidIf: ['You want an integrated heater, temperature control, pressure gauge, automatic stop or repeatable push-button routine', 'Milk texture and several drinks in sequence are daily priorities', 'Hand, shoulder, grip or counter-stability concerns make two-arm force undesirable'],
  pros: ['Two current basket paths let the workflow range from forgiving to technique-led', 'No pump, boiler, power cord or internal heater', 'Compact 5.3 lb frame with a replaceable GC chamber kit available', 'Ten-year limited US warranty is unusually long at this price'],
  cons: ['Heat management, hot-water transfer and lever force belong entirely to the user', 'No pressure gauge, timer, scale or automatic stop', 'Included manual frother is not a substitute for steam texture or integrated milk workflow', 'Spoon-tamper and small accessories may not satisfy buyers who want a precise espresso station'],
  architecture: 'a non-electric dual-arm lever with a glass-composite cylinder and plunger, silicone seal, stainless coffee hardware, standard basket, flow-restricting Smartshot basket, clip-on double adapter and no pump, boiler, gauge, grinder or electronic control',
  identityBoundary: 'The Product schema and scores apply only to the current EspressoGC Black PLUS package sold by ROK USA. They do not merge the original Presso, pre-GC ROK bodies, a machine fitted only with the GC conversion kit, commercial or pressure-gauge editions, Presso Smartshot, silver Classic PLUS, Explorer Edition bundles, a naked-portafilter bundle or seller-specific regional packages. ROK sells a conversion kit that can make an older body resemble the current GC brew chamber, but that does not prove identical age, wear, accessories or warranty.',
  primaryStrength: 'The current package offers two genuinely different coffee paths in a compact mechanical platform: the standard basket rewards espresso dialing, while Smartshot lowers the entry barrier.',
  primaryLimit: 'Without a heater or pressure gauge, the operator must create and judge thermal state, puck resistance, preinfusion, force, timing and yield on every shot.',
  setupNote: 'Place the 7 by 7 inch base on a stable dry counter with overhead and arm clearance. Add a capable kettle, scale and grinder if the standard basket is the goal. Identify the standard and Smartshot baskets before brewing because they need different expectations. ROK says the product is not dishwasher safe. Practice the fill, lock, lever and safe residual-water routine before optimizing a recipe.',
  espressoNote: 'With the standard basket, grind, dose, distribution, tamp, water temperature, chamber preheat, fill level and lever force all affect the shot. The official page suggests a 25 to 30 second pull, but that is guidance rather than an automatic program. The Smartshot basket restricts flow and broadens acceptable grind, making it useful for entry or less capable grinders, though it does not make every coffee identical. The Black PLUS package provides no gauge, so use a scale, time and taste to keep adjustments interpretable.',
  milkNote: 'A separate hand-pump frother is included, but EspressoGC has no steam boiler or wand. Milk must be heated separately, then pumped and poured around the espresso sequence. That can serve an occasional cappuccino, but it adds a second vessel and cannot provide the continuous wet-steam control of a boiler machine.',
  workflowNote: 'A drink means heating water, preparing coffee, optionally warming brew parts, locking the portafilter, filling the chamber, raising and lowering both arms, watching time and yield, then clearing residual water and rinsing the basket. Simple mechanics do not mean few actions. Back-to-back drinks repeat the full heat, dose, pull and cleanup sequence.',
  buildNote: 'ROK documents powder-coated aluminium, stainless steel, glass-composite and silicone in a 5.3 lb chassis. The official $35 conversion kit supplies a cylinder, plunger, O-ring and competition screen for older or current GC units, showing that core brew parts are designed to be replaceable. That parts path supports repairability, not a measured lifespan.',
  featuresNote: 'The useful features are mechanical and package-based: two baskets, dual arms, a dosing funnel, clip-on splitter and separate frother. The machine intentionally omits a heater, pump, gauge, timer, scale, reservoir, steam wand, presets and app. Buyers should value the included Smartshot path rather than compare the feature count with an electric semi-automatic.',
  valueNote: 'At US$259 direct, Black PLUS offers a metal lever, two extraction paths, frother and a long limited warranty for much less than premium manual levers. The complete station can still require a grinder, kettle, scale, better tamper and milk-heating vessel. Compare that total with Flair Classic, Cafelat Robot and an electric Bambino rather than treating $259 as the whole cost.',
  ownerPattern: 'Owners and prospective buyers repeatedly discuss preheating, a fine-enough grind, crema, learning lever resistance, standard versus restricted baskets, portability, scale clearance and whether a Cafelat Robot or Flair offers easier thermal or pressure feedback.',
  ownerCaution: 'These discussions are self-selected and span older ROK bodies, GC conversions, several baskets, grinders and regions. They reveal decision points and failure modes, but cannot establish typical taste, pressure, durability or defect rates for the current Black PLUS package.',
  maintenanceNote: 'Let hot parts cool safely, remove grounds, rinse the basket and portafilter, wipe the chamber and frame, and dry parts before storage. Do not use a dishwasher. Inspect the silicone seal, screen, basket and locking points, and match replacement parts to the exact body and generation. ROK markets the machine as requiring no boiler descaling, but that does not eliminate normal rinsing, inspection or wear-part replacement.',
  dimensions: {
    espresso: dim(8.3, 'The standard basket and direct dual-arm force can support serious espresso, while Smartshot adds a more forgiving entry path.', 'Strong for a learner who enjoys adjusting heat and grind; weak for anyone expecting a machine to stabilize or report those variables.', 'Official package, independent review, exact-model video and bounded owner context', ['Two baskets create distinct standard and restricted-flow workflows.', 'The owner creates preinfusion and pressure without a gauge.', 'Heat, grind, dose and yield remain external recipe variables.']),
    milk: dim(4.5, 'The included manual frother is useful but separate from the brewer and cannot steam.', 'Adequate for occasional foam; cumbersome for repeat milk drinks or precise microfoam practice.', 'Official box contents and visual workflow evidence', ['A hand-pump frother is included in the current PLUS package.', 'Milk needs separate heating and handling.', 'There is no steam boiler, wand or simultaneous milk work.']),
    workflow: dim(6.8, 'Mechanics are understandable, but every drink still contains hot-water, preheat, lever and rinse steps.', 'Best for one deliberate drink; the friction becomes obvious in a household queue.', 'Official instructions, independent review and owner routines', ['A kettle, grinder or coffee source and scale live beside the machine.', 'Both arms provide direct feedback but no automatic stop.', 'Residual water and coffee parts need manual clearing after each pull.']),
    build: dim(8.6, 'Metal structure, replaceable GC brew parts and a long limited warranty form a convincing mechanical ownership case.', 'The architecture is serviceable, but wear exclusions and generation matching still matter.', 'Official materials, conversion kit and warranty terms', ['Powder-coated aluminium and stainless steel carry the main structure.', 'Glass-composite chamber and silicone seal are replaceable components.', 'The ten-year US term excludes wear, misuse and other listed conditions.']),
    features: dim(7.0, 'Two baskets, splitter, funnel and frother make the PLUS package more versatile than the bare mechanism.', 'Useful package value, though buyers wanting heat, pressure or timing feedback need another platform.', 'Current US box contents checked', ['Standard and Smartshot baskets address different grinder and skill levels.', 'Clip-on splitter and funnel reduce small workflow gaps.', 'No heater, gauge, timer, scale, presets or steam circuit is present.']),
    value: dim(8.8, 'The $259 package combines credible manual espresso hardware, two baskets and long warranty coverage at a modest machine price.', 'Excellent when the manual routine is wanted and support gear already exists; less decisive after adding an entire station.', 'Dated official price, package and current alternatives', ['$259 US direct price checked September 25, 2026.', 'Kettle, scale, grinder and milk-heating gear may be additional.', 'Flair Classic costs less, while Robot and heated levers cost more.']),
  },
  sources: [
    { label: 'ROK USA: EspressoGC Black PLUS', href: officialProduct, note: 'Official current identity, $259 price, package, materials, dimensions, weight, care guidance and product media checked September 25, 2026.' },
    { label: 'ROK USA: warranties', href: warranty, note: 'Official ten-year limited term for EspressoGC and GrinderGC, including original-purchaser, wear, misuse and claim conditions.' },
    { label: 'ROK USA direct listing', href: officialProduct, note: 'Live US stock, price and package context checked September 25, 2026; regional listings can differ.' },
    { label: 'The Coffee Folk: ROK Espresso GC review', href: independentReview, note: 'Independent written review updated February 5, 2026, used for preheat, workflow, gauge limitation and comparison context.' },
    { label: 'Whole Latte Love: EspressoGC and conversion kit', href: video, note: 'Independent retailer video published January 15, 2019, showing the exact GC brew path, conversion parts and bottomless extraction.' },
    { label: 'ROK USA: GC conversion kit', href: conversionKit, note: 'Official generation and replacement-part boundary for the GC cylinder, plunger, O-ring and competition screen.' },
    { label: 'Coffeeness: best manual espresso machine', href: manualRoundup, note: 'Independent manual-machine comparison and kettle workflow context, updated in 2026.' },
    { label: 'r/espresso: ROK Espresso GC discussion', href: ownerThread, note: 'Self-selected owner and shopper context across different ROK packages and regions; not representative outcome data.' },
    { label: 'r/Coffee: Cafelat Robot versus ROK discussion', href: robotComparison, note: 'Community comparison emphasizing workflow choice; comments are anecdotal and span different prices and experience levels.' },
    { label: 'r/espresso: current ROK versus Robot owner comparison', href: currentOwnerComparison, note: 'Recent self-selected comparison discussing preheat, purge, gauge and daily workflow, not a controlled test.' },
    { label: 'Crema: EspressoGC Explorer Edition', href: explorerRetailer, note: 'Current European bundle reference used to keep Explorer contents and pricing separate from the scored US Black PLUS package.' },
    { label: 'ROK USA home and current range', href: 'https://us.rok.coffee/', note: 'Official current family context separating EspressoGC from Presso Smartshot and GrinderGC.' },
  ],
  comparisons: [
    { name: 'ROK EspressoGC Black PLUS', quickDecision: 'Choose for dual-arm feel, standard and Smartshot baskets, a frother and a long limited warranty at $259.', priceClass: '$259 current US direct', dimensions: '7 × 7 × 12.5 in; 5.3 lb', heating: 'Separate kettle and manual thermal preparation', coffeeSetup: 'Dual arms; standard and Smartshot baskets; no gauge', milkWorkflow: 'Included separate hand frother', bestFor: 'Affordable technique-led espresso' },
    { name: 'Flair Classic', href: '/espresso-machine/flair-classic/', quickDecision: 'Choose the cheaper metal-frame lever when a pressure gauge and detachable 40 mm head suit the routine.', priceClass: '$159 current US direct', dimensions: '12.5 × 6.25 × 10 in; 5 lb', heating: 'Separate kettle and thin cylinder', coffeeSetup: 'Gauge with flow-control and bottomless portafilters', milkWorkflow: 'Separate equipment required', bestFor: 'Lowest-cost pressure feedback' },
    { name: 'Cafelat Robot Barista', href: '/espresso-machine/cafelat-robot-barista/', quickDecision: 'Pay more for an installed gauge, larger professional basket and a compact thermal path.', priceClass: 'Higher premium manual class', dimensions: 'About 24 cm diameter; 3 kg', heating: 'Separate kettle; manual heat management', coffeeSetup: 'Gauge, dual arms and 57.5 mm basket', milkWorkflow: 'Separate equipment required', bestFor: 'Premium straight espresso simplicity' },
    { name: 'Breville Bambino Plus', href: '/espresso-machine/breville-bambino/', quickDecision: 'Choose electric heat and automatic steam when speed and milk matter more than direct lever pressure.', priceClass: 'Higher complete semi-automatic class', dimensions: 'Compact powered appliance', heating: 'Fast electric thermocoil', coffeeSetup: 'Pump-driven 54 mm portafilter', milkWorkflow: 'Automatic and manual steam', bestFor: 'Fast mixed-drink households' },
  ],
  comparisonNote: 'Compare the complete station, not only the press. Grinder, kettle, scale, heat routine, milk plan, pressure feedback, basket size and repeat-shot pace determine which manual machine is actually simpler.',
  recommendations: [
    { kicker: 'Cheaper pressure feedback', title: 'Flair Classic', text: 'Spend less for a gauge, two portafilter paths and a detachable-head routine.', href: '/espresso-machine/flair-classic/', linkLabel: 'Read the Flair Classic review', featured: true },
    { kicker: 'Premium direct lever', title: 'Cafelat Robot Barista', text: 'Pay more for a pressure gauge and larger professional basket in another compact dual-arm design.', href: '/espresso-machine/cafelat-robot-barista/', linkLabel: 'Read the Cafelat Robot review' },
    { kicker: 'Heated manual group', title: 'Flair 58 Plus 2', text: 'Move up for electric group preheat, 58 mm workflow and pressure feedback while keeping manual force.', href: '/espresso-machine/flair-58/', linkLabel: 'Read the Flair 58 review' },
    { kicker: 'Fast milk workflow', title: 'Breville Bambino Plus', text: 'Choose pump pressure, rapid electric heat and automatic steam when convenience leads.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the Bambino Plus review' },
  ],
  faqs: [
    { question: 'Is ROK EspressoGC Black PLUS the same as Presso Smartshot?', answer: 'No. EspressoGC is the metal dual-arm platform. Presso Smartshot is a separate current product with a different body and warranty section.' },
    { question: 'What does GC mean here?', answer: 'It identifies the glass-composite pressure-chamber generation. ROK sells a GC conversion kit for older bodies, so a used listing still needs an exact parts and condition check.' },
    { question: 'Does the Black PLUS include a pressure gauge?', answer: 'No. The current US Black PLUS listing includes standard and Smartshot baskets, not a pressure gauge.' },
    { question: 'What is the difference between standard and Smartshot baskets?', answer: 'The standard basket lets grind and puck preparation control resistance. Smartshot adds a restricted outlet intended to tolerate a broader grind range.' },
    { question: 'Does the ROK need preheating?', answer: 'ROK emphasizes the insulating GC chamber, but independent reviewers and owners still find thermal preparation important for hotter targets and some coffees. Keep the routine consistent and judge by results.' },
    { question: 'Can it make two cups at once?', answer: 'A clip-on double adapter can divide the outlet, but one coffee bed and one lever pull still produce the total beverage. It is not two independent shots.' },
    { question: 'Is the included frother a steam wand?', answer: 'No. It is a separate manual pump frother. Heat the milk separately, then froth and pour it.' },
    { question: 'Does the ten-year warranty cover everything?', answer: 'No. The US policy is limited to the original purchaser and excludes normal wear, misuse, improper care, unauthorized changes and other listed conditions. Keep proof of purchase and read the current policy.' },
  ],
  finalTitle: 'EspressoGC makes the manual trade clear and affordable',
  finalVerdict: [
    'The current Black PLUS package is unusually coherent for $259. The standard basket leaves room to learn real espresso preparation, while Smartshot can keep the machine useful with a wider grind range. Replaceable GC parts and a long limited warranty support the simple mechanical concept.',
    'The missing systems are equally important. A kettle provides heat, your hands provide pressure, and no gauge confirms it. Milk uses a separate frother, and every repeat drink restarts the manual sequence.',
    'Choose EspressoGC when that physical process is the attraction. Choose Flair Classic for cheaper gauge-equipped learning, Cafelat Robot for a larger premium manual platform, Flair 58 for heated 58 mm workflow or Bambino Plus for electric speed and steam.',
  ],
  video: { id: '5kWH3bLqo7M', title: 'ROK EspressoGC, GC Conversion Kit + Naked Extraction!', creator: 'Whole Latte Love', published: '2019-01-15', note: 'Unique exact-model independent retailer demonstration of the GC chamber, conversion kit and bottomless extraction. It is not Coffeedant testing, current-package evidence or a controlled pressure and temperature test.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#rok-espresso-gc-black-plus-us-source-1">[source]</a> <a href="#rok-espresso-gc-black-plus-us-source-4">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#rok-espresso-gc-black-plus-us-source-1">[source]</a> <a href="#rok-espresso-gc-black-plus-us-source-4">[source]</a> <a href="#rok-espresso-gc-black-plus-us-source-5">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#rok-espresso-gc-black-plus-us-source-1">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#rok-espresso-gc-black-plus-us-source-4">[source]</a> <a href="#rok-espresso-gc-black-plus-us-source-5">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#rok-espresso-gc-black-plus-us-source-2">[source]</a> <a href="#rok-espresso-gc-black-plus-us-source-6">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#rok-espresso-gc-black-plus-us-source-1">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#rok-espresso-gc-black-plus-us-source-3">[source]</a> <a href="#rok-espresso-gc-black-plus-us-source-4">[source]</a> <a href="#rok-espresso-gc-black-plus-us-source-7">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="rok-espresso-gc-owner-title"><h3 id="rok-espresso-gc-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Heat and grind dominate early questions</strong><p>Owners describe learning preheat, grind and lever pace before shots become predictable. Several use a purge or repeated hot-water routine, while others prefer darker coffee and a simpler process.</p></li>
    <li><strong>The two baskets solve different problems</strong><p>Current product reviews and discussions show that the restricted Smartshot path helps when the standard basket runs too quickly, while the standard basket remains the choice for users who want puck preparation to control flow.</p></li>
    <li><strong>Simple mechanics do not guarantee simple mornings</strong><p>Some owners value the quiet, rinseable platform for years. Others move toward heated or gauge-equipped equipment because kettle, purge, scale and force decisions feel repetitive.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeRokEspressoGCReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
