import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const official = 'https://vbmespresso.com/en/professional-coffee-machines/home/domobar-super/';
const brochure = 'https://vbmespresso.com/wp-content/uploads/2024/02/BROCHURE_DOMOBAR-SUPER.pdf';
const dataSheet = 'https://vbmespresso.com/wp-content/uploads/2024/02/SPEC_TEC_DOMOBAR-SUPER.pdf';
const instructions = 'https://vbmespresso.com/wp-content/uploads/2024/02/DomobarSuper_InstructionsManuals.zip';
const artizan = 'https://artizancoffee.com/products/vbm-domobar-super-analogic-hx-espresso-machine';
const toffin = 'https://shop.toffin.id/product/vbm-domobar-super-hx/40217';
const video = 'https://www.youtube.com/watch?v=3ti96VE1-HQ';
const historicalReview = 'https://www.home-barista.com/vibiemme-domobar-super-review.html';
const ownerReliability = 'https://www.reddit.com/r/espresso/comments/1bvacqt/are_vbm_espresso_machines_reliable/';
const ownerComparison = 'https://www.reddit.com/r/espresso/comments/n0vp8l/opinion_needed_magister_stella_vs_vbm_domobar/';
const ownerRepair = 'https://www.reddit.com/r/espresso/comments/1hhicv8/found_the_problem_with_my_vbm_domobar_super_hx/';
const parts = 'https://espressocare.com/collections/v-d-super-hx-i-c';
const pressurestat = 'https://www.1st-line.com/buy/vbm-eletpre/';
const hero = 'https://vbmespresso.com/wp-content/uploads/2024/03/VBM_Domobar_Super_Grey_Dark_Profilo-3-1.jpg';

const profile: UpgradeReviewProfile = {
  key: 'vbm-domobar-super-analogica-hx',
  slug: '/espresso-machine/vbm-domobar-super-hx/',
  productId: 'CD-EM-000245',
  brand: 'VBM',
  model: 'Domobar Super Analogica HX',
  sku: 'Current Domobar Super Analogica heat-exchanger version; confirm voltage, finish, water connection kit and regional warranty',
  category: 'Rotary-pump heat-exchanger espresso machine',
  brandPath: '/espresso-machine/',
  title: 'VBM Domobar Super HX review: rotary pump, real power, analog control',
  description: 'Current VBM Domobar Super Analogica HX review covering its 2 L heat-exchanger boiler, rotary pump, tank or plumbed water, US price and model boundary.',
  verdictLabel: 'A narrow rotary-pump HX machine for buyers who want strong milk service and accept hands-on temperature management',
  verdict: 'The current factory-documented Domobar Super Analogica puts a 2 L heat-exchanger steam boiler, rotary pump, tank or mains-water feed, 58 mm VBM 1961 thermosiphonic group, mechanical preinfusion and double-scale pressure gauge into a 25 cm-wide body. It can brew and steam together, and the rotary pump gives it a more ambitious service model than many compact reservoir HX machines. It does not have the 3.5-inch display, separate coffee boiler, saved pressure profiles or gear pump of the Digital and Electronic versions. At a checked US price of $2,449, its case rests on traditional mechanics, plumbing flexibility and steam capacity rather than electronic temperature guidance.',
  assessment: 'This is a research-led assessment, not a Coffeedant bench test. Current VBM documentation controls product identity and specifications. An exact-model dealer video documents the 2021 Analogic layout, while older independent and owner records provide bounded context. Coffeedant did not measure brew temperature, pressure, flow, steam, sound, energy, recovery, extraction, taste, durability or reliability.',
  image: hero,
  imageAlt: 'VBM official front three-quarter image of the current Domobar Super family in dark grey',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: {
    label: 'Current US reference price',
    msrp: '$2,449',
    numeric: '2449',
    currency: 'USD',
    typical: 'Artizan Coffee displayed a sale price of $2,449 for the exact Domobar Super Analogic HX on September 25, 2026. The listing says it ships from the manufacturer and shows required MAP pricing. Finish, electrical package, plumbing parts, freight, tax, installation and warranty can change the delivered total.',
    checked: 'September 25, 2026',
  },
  links: [
    { label: 'Check the current US listing', href: artizan, note: '$2,449 exact-model reference checked September 25, 2026; verify voltage, stock, finish, plumbing parts and warranty', primary: true },
    { label: 'Read the VBM factory data sheet', href: dataSheet, note: 'Analogica HX architecture, rotary pump, 2 L boiler, 58 mm group, dimensions, weight and electrical record' },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'Current Domobar Super Analogica, the HX version in VBM’s three-model Super family' },
    { label: 'Heating', value: 'One 2 L steam boiler with heat exchanger; no separate coffee boiler on Analogica' },
    { label: 'Group', value: '58 mm VBM 1961 thermosiphonic chromed-brass group with mechanical preinfusion and manual lever' },
    { label: 'Pump and water', value: 'Rotary pump, removable sensor tank or mains-water connection, 3/8-inch inlet and water drain' },
    { label: 'Interface', value: 'Manual lever and valves with a 60 mm double-scale pressure gauge; no touch display' },
    { label: 'Milk workflow', value: 'Steam and hot-water wands with simultaneous espresso and steam capability through the HX system' },
    { label: 'Official size', value: '25 W × 47 D × 42 H cm and 33 kg' },
    { label: 'Electrical record', value: '1,800 W, 240 V and 50/60 Hz in current factory documents; confirm any regional 120 V package separately' },
  ],
  quickAnswers: [
    { question: 'Is it a dual boiler?', answer: 'No. The reviewed Analogica has one 2 L steam boiler and a heat exchanger. The Domobar Super Digital and Electronic versions add a separate 0.5 L coffee boiler.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. Heat-exchanger architecture keeps steam available while brew water passes through the HX circuit, once the machine is fully hot.' },
    { question: 'Does it have PID temperature control?', answer: 'No current factory document lists a brew-temperature display or PID for Analogica. The user manages a traditional pressurestat and HX routine.' },
    { question: 'Can it be plumbed in?', answer: 'Yes. VBM documents either a sensor tank or tap-water connection, a 3/8-inch charge tube and a drain. Installation and water treatment need qualified local planning.' },
    { question: 'Is this the pressure-profiling Domobar Super?', answer: 'No. Saved pressure profiles and the 3.5-inch touch display belong to the Digital and Electronic dual-boiler versions, not Analogica HX.' },
    { question: 'Who should consider it?', answer: 'A milk-drink household that wants a narrow, heavy, rotary-pump HX machine and is comfortable with full warm-up, cooling flushes and manual shot control.' },
  ],
  bestFor: [
    'Milk-drink households wanting simultaneous brew and steam from a compact-width traditional machine',
    'Buyers who value a rotary pump, optional direct plumbing and conventional manual controls',
    'Owners with a capable VBM retailer, appropriate water plan and qualified local service',
  ],
  avoidIf: [
    'You want direct brew-temperature entry, a shot timer or guided temperature states',
    'You need fast cold-start readiness or a light machine that is easy to move',
    'The seller cannot confirm exact Analogica identity, voltage, water kit, warranty and service support',
  ],
  pros: [
    'Rotary pump and tank or mains-water operation are unusual strengths at 25 cm wide',
    'Two-liter HX architecture supports espresso and manual steam at the same time',
    'Current factory documents clearly separate Analogica from the dual-boiler Digital and Electronic versions',
    '58 mm VBM group, mechanical preinfusion and conventional valves suit a traditional manual workflow',
    'Parts diagrams and specialist components remain visible through established service suppliers',
  ],
  cons: [
    'No documented PID, brew-temperature display, timer or programmable pressure profile',
    'Traditional HX ownership requires full warm-up and a repeatable cooling-flush routine',
    'At 33 kg and 47 cm deep, the narrow cabinet is still heavy and counter-hungry',
    'Current controlled independent performance measurements for Analogica are scarce',
    'The live VBM product page leads with the dual-boiler 2B, so listings can blur the three Super versions',
  ],
  architecture: 'a manual Italian semi-automatic built around one 2 L heat-exchanger service boiler, rotary pump, 58 mm VBM 1961 thermosiphonic chromed-brass group, mechanical preinfusion, double-scale pressure gauge, manual steam and hot-water valves, removable sensor tank or tap-water feed, 3/8-inch inlet and water drain',
  identityBoundary: 'This review scores the current Domobar Super Analogica identified in VBM’s brochure and technical data sheet as the rotary-pump HX member of the current Super family. It excludes Domobar Super Digital and Electronic dual-boiler machines, the separate Domobar and Domobar Junior families, unidentified legacy Super revisions, retailer-created feature combinations and used or modified examples without an exact rating-plate and manual match.',
  primaryStrength: 'It combines a rotary pump, optional direct plumbing, simultaneous steam and a traditional 58 mm group in an unusually narrow chassis.',
  primaryLimit: 'Its analog HX design offers no direct brew-temperature setting, so warm-up, idle time and cooling-flush judgment remain part of every session.',
  setupNote: 'Before payment, confirm that the invoice says Domobar Super Analogica, then verify serial, voltage, plug, finish, tank and mains-water parts, drain requirements, included accessories, warranty and authorized service. The factory record is 240 V, 1,800 W, 25 × 47 × 42 cm and 33 kg. Any 120 V package needs its own written electrical documentation. Preserve working room for the lever, portafilter, wands, cable, cup area and water access. Direct plumbing and drain work should be installed with appropriate filtration, pressure control and qualified local help.',
  espressoNote: 'The VBM 1961 group uses thermosiphonic circulation and a mechanical preinfusion chamber, while the double-scale gauge gives boiler and brew-pressure feedback. That is a credible traditional espresso platform, but Analogica has no documented brew-temperature display or user-set brew PID. Let the group and portafilter reach a full thermal state, then make idle time and cooling-flush behavior repeatable before changing grind, dose, yield or shot time. No current controlled exact-model temperature or extraction series was found.',
  milkNote: 'The 2 L service boiler keeps steam available while the heat exchanger supplies brew water, so one operator can move through cappuccinos without the single-boiler temperature transition. Factory documents list one steam wand and one hot-water wand. The exact-model video shows the machine and accessories but does not provide a controlled steaming benchmark. Boiler pressure, tip condition, milk volume, pitcher and technique still determine the result.',
  workflowNote: 'Daily use is deliberately mechanical: establish a full heat soak, flush according to idle state, prepare the 58 mm basket, lift the group lever, read pressure and stop the shot by time and beverage mass. Steam can run alongside brewing, then the wand needs wiping and purging. There is no automatic dose stop, touch display, saved profile, shot timer, app or grinder. The tank or plumbed-water choice can reduce refilling, but it does not automate espresso decisions.',
  buildNote: 'VBM documents a 33 kg body, rotary pump, chromed-brass thermosiphonic group, magnetic side panels, sensor tank or tap connection, water drain and synthetic dishwasher-safe tray with float. The live page shows seven finishes while the 2024 brochure lists six, so current local finish stock should be verified. Traditional layout supports service planning, but it does not prove reliability or make boiler and mains work suitable for unqualified repair.',
  featuresNote: 'Analogica’s useful features are physical: rotary pump, tank or tap feed, water drain, double-scale pressure gauge, manual group lever, steam and hot-water wands, tray float and replaceable side panels. VBM assigns the 3.5-inch display, separate coffee boiler, temperature settings and saved pressure profiles to Digital and Electronic. Those features must not be copied into this page from the live family description.',
  valueNote: 'At $2,449, Domobar Super Analogica sits among electronically managed HX machines and entry dual boilers. Profitec Pro 400 and Lelit MaraX offer more guidance around temperature behavior; Rocket Appartamento TCA emphasizes a compact traditional package; Profitec Pro 500 PID adds a displayed boiler-temperature control. VBM’s case is strongest when rotary-pump calm, direct plumbing, narrow width and local service matter more than electronic assistance.',
  ownerPattern: 'Selected community records describe long use from several older VBM machines, easy access to conventional parts for some owners and the practical importance of local support. They also mix Junior, Super, single-boiler, HX and dual-boiler generations. One exact-family repair post traces a no-heat problem on an older Super HX to a failed component, while another discussion mentions older wand seals. These accounts help build an inspection list, not a failure rate.',
  ownerCaution: 'Owner posts are self-selected and span different generations, markets, water, maintenance and modifications. A six- or ten-year success story cannot promise current Analogica life, and one failed heater or leaking seal cannot establish a common defect. Used buyers should obtain service invoices, verify the exact generation and budget for qualified inspection.',
  maintenanceNote: 'Follow the exact delivered manual for group cleaning, backflushing, steam-wand care, tank and tray cleaning and water management. Test source water and build treatment around the manufacturer and service provider’s limits. Watch for changed boiler pressure, fill behavior, leaks, heating, steam flow, pump sound or gauge response. Boiler, pressurestat, rotary-pump, valve, plumbing and mains-electrical work belongs with a qualified technician.',
  dimensions: {
    espresso: dim(7.8, 'The 58 mm VBM group, mechanical preinfusion and pressure feedback form a serious traditional espresso platform.', 'Without direct brew-temperature control, full heat soak and a repeatable flush routine carry more of the consistency burden.', 'Current factory architecture, historical independent context and exact-model visual record; no current controlled test', ['VBM 1961 thermosiphonic group.', 'Mechanical preinfusion and double-scale gauge.', 'No controlled current Analogica brew-temperature series.']),
    milk: dim(8.7, 'A 2 L service boiler and HX circuit support simultaneous espresso and manual steam.', 'No controlled current steam-power, recovery or milk-texture benchmark was found.', 'Current factory architecture plus exact-model visual documentation', ['2 L steam and HX boiler.', 'Dedicated steam and hot-water wands.', 'Simultaneous brew and steam by design.']),
    workflow: dim(7.2, 'Rotary-pump operation and optional plumbing can make repeated service calm and convenient.', 'Manual dosing, shot stopping, warm-up and cooling flushes remain operator tasks.', 'Factory controls and bounded owner context', ['Rotary pump.', 'Sensor tank or tap-water feed.', 'No timer, volumetrics or guided temperature state.']),
    build: dim(8.4, 'A 33 kg chassis, chromed-brass group and conventional service layout look substantial on paper.', 'Current reliability and regional parts competence are not quantified.', 'Factory construction record and current parts listings; no Coffeedant teardown', ['33 kg factory mass.', 'Magnetic panels and water drain.', 'No representative failure-incidence dataset.']),
    features: dim(7.3, 'Rotary pump, plumbing choice, dual gauge and two manual wands cover high-value analog functions.', 'PID, display, shot timer and pressure profiles are absent from Analogica.', 'Current factory family versions separated explicitly', ['Tank or direct water.', '60 mm double-scale gauge.', 'Digital and Electronic features excluded.']),
    value: dim(7.3, '$2,449 buys an unusually narrow rotary-pump HX with plumbing flexibility.', 'Managed HX and entry dual-boiler rivals add more temperature guidance at similar money.', 'Current exact-model US price checked September 25, 2026', ['$2,449 US reference.', 'Manufacturer-direct shipment language.', 'Regional voltage, freight and service remain decisive.']),
  },
  sources: [
    { label: 'VBM Domobar Super official family page', href: official, note: 'Current family identity, body design, tank, tray, magnetic panels and finishes. Its lead copy describes the 2B dual boiler, so it does not control Analogica architecture.' },
    { label: 'VBM Domobar Super brochure', href: brochure, note: 'Factory separation of Analogica, Digital and Electronic, shared body and electrical figures, water choices, group, accessories and 2024 finish record.' },
    { label: 'VBM Domobar Super technical data sheet', href: dataSheet, note: 'Current Analogica HX identity, rotary pump, 2 L boiler, no coffee boiler, double-scale gauge, 58 mm group, dimensions, weight and electrical record.' },
    { label: 'VBM Domobar Super instruction archive', href: instructions, note: 'Official instruction archive. Buyers should match the downloaded manual to the exact rating plate and Analogica version.' },
    { label: 'Artizan Coffee exact-model US listing', href: artizan, note: '$2,449 sale price checked September 25, 2026. Page says manufacturer-direct shipping and required MAP pricing; delivered configuration still needs confirmation.' },
    { label: 'Toffin exact Super HX listing', href: toffin, note: 'Rp48,300,000 regional exact-HX cross-check. Indonesian price, power package and support are not transferred to the US review.' },
    { label: '1st-line Equipment exact-model video', href: video, note: 'Twelve-minute 26-second dealer video published January 5, 2021. Useful for identity and physical layout, but largely an initial review rather than a controlled performance test.' },
    { label: 'Home-Barista historical Domobar Super review', href: historicalReview, note: 'Independent older-generation review used only for traditional HX workflow history. Its reservoir, pump, dimensions and performance do not define current Analogica.' },
    { label: 'Reddit VBM reliability discussion', href: ownerReliability, note: 'Self-selected mixed-generation accounts about longevity, seals, repair and service. No denominator or current-model failure rate.' },
    { label: 'Reddit Analogic buying comparison', href: ownerComparison, note: 'Buyer context comparing rotary pump, boiler size and price with a compact managed HX rival. Opinions and quoted prices are not current benchmarks.' },
    { label: 'Reddit older Super HX repair account', href: ownerRepair, note: 'One older-unit no-heat diagnosis. It informs inspection questions but cannot establish incidence for current Analogica.' },
    { label: 'EspressoCare Super HX parts schematic', href: parts, note: 'Current visible parts-category context for the Super HX. Availability of a catalog does not promise stock, fit or repair coverage for every generation.' },
    { label: '1st-line VBM pressurestat listing', href: pressurestat, note: 'Specialist listing for a Super HX pressurestat used as serviceability context, not evidence of component life or universal compatibility.' },
  ],
  comparisons: [
    { name: 'VBM Domobar Super Analogica', href: '/espresso-machine/vbm-domobar-super-hx/', quickDecision: 'Choose rotary pump, direct-plumb flexibility and traditional HX control in a narrow body.', priceClass: '$2,449 current US reference', dimensions: '25 × 47 × 42 cm; 33 kg', heating: '2 L pressurestat HX boiler', coffeeSetup: '58 mm VBM group and dual gauge', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Narrow rotary-pump HX ownership' },
    { name: 'Profitec Pro 400', href: '/espresso-machine/profitec-pro-400/', quickDecision: 'Choose electronic temperature modes and preinfusion settings when reservoir use is acceptable.', priceClass: 'Premium compact HX class', dimensions: 'Compact E61 chassis', heating: 'Temperature-selectable HX boiler', coffeeSetup: 'E61 group with electronic assistance', milkWorkflow: 'Simultaneous manual steam', bestFor: 'More guided HX workflow' },
    { name: 'Lelit MaraX', href: '/espresso-machine/lelit-mara-x/', quickDecision: 'Choose a compact HX built around easier brew-temperature management and strong owner coverage.', priceClass: 'Premium compact HX class', dimensions: 'Narrow E61 chassis', heating: 'Managed HX system', coffeeSetup: 'E61 group with temperature modes', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Less cooling-flush judgment' },
    { name: 'Rocket Appartamento TCA', href: '/espresso-machine/rocket-appartamento-tca/', quickDecision: 'Compare another design-led compact HX with temperature adjustment but a different pump and water model.', priceClass: 'Premium compact HX class', dimensions: 'Compact traditional chassis', heating: 'Temperature-adjustable HX boiler', coffeeSetup: 'E61 group with analog controls', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Compact traditional styling' },
  ],
  comparisonNote: 'Compare exact heating architecture, pump, temperature guidance, water feed, drain, dimensions, voltage, grinder, water treatment, warranty and local service. The current Domobar Super family shares a body but not its boiler, pump or interface, so a family name alone is not enough.',
  recommendations: [
    { kicker: 'Managed HX alternative', title: 'Profitec Pro 400', text: 'Choose selectable temperature and electronic preinfusion modes when direct plumbing and a rotary pump are not priorities.', href: '/espresso-machine/profitec-pro-400/', linkLabel: 'Read Profitec Pro 400 review', featured: true },
    { kicker: 'Compact HX alternative', title: 'Lelit MaraX', text: 'Choose an HX design focused on easier brew-temperature management and broader owner coverage.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read Lelit MaraX review' },
    { kicker: 'Design-led alternative', title: 'Rocket Appartamento TCA', text: 'Compare another compact traditional HX with temperature adjustment and a different water and pump proposition.', href: '/espresso-machine/rocket-appartamento-tca/', linkLabel: 'Read Appartamento TCA review' },
    { kicker: 'PID HX alternative', title: 'Profitec Pro 500 PID', text: 'Choose a displayed boiler-temperature control when visual adjustment matters more than the VBM plumbing package.', href: '/espresso-machine/profitec-pro-500-pid/', linkLabel: 'Read Profitec Pro 500 PID review' },
  ],
  faqs: [
    { question: 'What exact VBM Domobar Super does this review cover?', answer: 'The current Domobar Super Analogica, identified in VBM’s brochure and data sheet as the rotary-pump HX version. It excludes the Digital and Electronic dual-boiler versions and unidentified older machines.' },
    { question: 'Is VBM Domobar Super Analogica a heat exchanger?', answer: 'Yes. It has one 2 L steam boiler with an HX circuit and no separate coffee boiler.' },
    { question: 'Can it brew and steam at the same time?', answer: 'Yes. Its heat-exchanger architecture supports simultaneous espresso and steam once the boiler and group are fully hot.' },
    { question: 'Does Domobar Super Analogica have PID?', answer: 'No current factory document lists PID or a brew-temperature display for Analogica. It uses traditional pressurestat and cooling-flush management.' },
    { question: 'Can VBM Domobar Super HX be plumbed in?', answer: 'Yes. VBM documents a sensor tank or tap-water connection, a 3/8-inch inlet and a drain. Confirm the supplied kit and use qualified installation with appropriate water treatment.' },
    { question: 'How large and heavy is it?', answer: 'VBM lists 25 cm wide, 47 cm deep, 42 cm high and 33 kg, before clearance for the portafilter, lever, wands, cable and water access.' },
    { question: 'How much does VBM Domobar Super Analogica cost?', answer: 'Artizan Coffee displayed $2,449 for the exact Analogic HX on September 25, 2026. Freight, tax, voltage, finish, plumbing parts and warranty can change the delivered total.' },
    { question: 'Is it better than Lelit MaraX or Profitec Pro 400?', answer: 'It is better aligned with buyers who prioritize a rotary pump and direct plumbing. MaraX and Pro 400 provide more guided temperature management for buyers who prefer a simpler reservoir HX routine.' },
  ],
  finalTitle: 'A narrow rotary-pump HX for buyers who genuinely want the analog routine',
  finalVerdict: [
    'Domobar Super Analogica has a distinct proposition: a 2 L HX boiler, rotary pump, tank or tap feed, water drain and a heavy 58 mm group in a body only 25 cm wide.',
    'Its limits are just as clear. There is no direct brew-temperature setting, display, timer or programmable profile, and current controlled exact-model evidence is thin. Full warm-up and cooling-flush technique are part of the ownership model.',
    'Choose it when simultaneous steam, plumbing flexibility, narrow width and capable VBM service matter. Choose Pro 400 or MaraX when electronic temperature guidance matters more, or move to a dual boiler when independent brew control is the priority.',
  ],
  video: {
    id: '3ti96VE1-HQ',
    title: 'Initial Review: 2021 VBM Super HX Analogic Espresso Machines',
    creator: '1st-line Equipment',
    published: '2021-01-05',
    note: 'Exact-model dealer video running 12 minutes 26 seconds. It documents identity, accessories and physical layout but does not provide a controlled temperature, recovery, steam or taste test.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#vbm-domobar-super-analogica-hx-source-2">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-3">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-4">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#vbm-domobar-super-analogica-hx-source-3">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-8">[source]</a></p><p>The historical independent review helps explain traditional HX behavior, but its older reservoir and pump configuration does not prove current Analogica temperature performance.</p>`,
  milk: `<p>${profile.milkNote} <a href="#vbm-domobar-super-analogica-hx-source-2">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-7">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#vbm-domobar-super-analogica-hx-source-3">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-7">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#vbm-domobar-super-analogica-hx-source-1">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-3">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#vbm-domobar-super-analogica-hx-source-2">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-3">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#vbm-domobar-super-analogica-hx-source-5">[source]</a> <a href="#vbm-domobar-super-analogica-hx-source-10">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="vbm-super-owner-title"><h3 id="vbm-super-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Long service is possible, but not guaranteed</strong><p>Several owners describe many years from older Domobar machines. Those accounts span different boilers, controls, pumps, water and repair histories, so they cannot forecast current Analogica life.</p></li>
    <li><strong>Conventional parts can help service planning</strong><p>Owners and specialist catalogs point to replaceable valves, pressure controls and other Super HX parts. A listed part still needs generation matching, stock confirmation and qualified installation.</p></li>
    <li><strong>Individual faults do not create a defect rate</strong><p>One older Super HX no-heat diagnosis and one discussion of older wand seals identify inspection points. Neither has a denominator or establishes a recurring current-model problem.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeVbmDomobarSuperHxReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
