import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.quick-mill.com/products/silvano/';
const chrisCoffee = 'https://www.chriscoffee.com/products/quick-mill-silvano-evo';
const firstInCoffee = 'https://www.1stincoffee.com/quickmill-silvano.htm';
const manual = 'https://manuals.plus/quick-mill/04005-a-evo-a-silvano-evo-espresso-machine-manual';
const video = 'https://www.youtube.com/watch?v=Rf23Fb7I7FE';
const coffeeness = 'https://www.coffeeness.de/en/quick-mill-silvano-review/';
const homeBaristaReview = 'https://www.home-barista.com/blog/quick-mill-silvano-review-t24882.html';
const comparisonThread = 'https://www.reddit.com/r/espresso/comments/x1xcko/quick_mill_silvano_v_profitec_go_v_ascaso_uno/';
const steamThread = 'https://www.reddit.com/r/espresso/comments/wpwo4e/struggling_to_get_steam_power_out_of_a_quick_mill/';
const usedThread = 'https://www.reddit.com/r/espresso/comments/1rt7yxa/should_i_go_used_quick_mill_silvano_or_new_gaggia/';
const profitecOfficial = 'https://www.profitec-espresso.com/en/products/go';
const lelitOfficial = 'https://www.lelit.com/product/victoria-pl91t/';
const image = 'https://www.quick-mill.com/wp-content/uploads/2025/06/37.png';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-silvano-evo-04005-us',
  slug: '/espresso-machine/quick-mill-silvano-evo/',
  productId: 'CD-EM-000233',
  brand: 'Quick Mill',
  model: 'Silvano Evo',
  sku: '04005-A-EVO-A, current US 110-120 V reservoir configuration',
  category: 'Hybrid boiler and thermoblock semi-automatic espresso machine',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Silvano Evo review: US price, hybrid heat and steam limits',
  description: 'Research-led Quick Mill Silvano Evo review covering SKU 04005-A-EVO-A, PID brew boiler, separate steam thermoblock, current US price, owner evidence and specification differences.',
  verdictLabel: 'A compact PID machine for buyers who value simultaneous brewing and steam more than boiler-level steam power',
  verdict: 'The US Silvano Evo 04005-A-EVO-A combines a PID-controlled coffee boiler, separate steam thermoblock, two vibration pumps, 58 mm group, shot timer, brew-pressure gauge and side-loading reservoir. That hybrid layout can brew and steam at the same time without the recovery sequence of a conventional single boiler. Chris Coffee and 1st in Coffee both displayed US$1,495 and in-stock status on September 25, 2026. The main compromise is steam character: independent and owner evidence consistently describes the thermoblock as slower and less forceful than a dedicated steam boiler. Current global factory specifications also differ from US retailer and distributor records on boiler material, tank capacity and dimensions, so the delivered SKU and rating plate must govern.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores apply to current US SKU 04005-A-EVO-A. Chris Coffee, 1st in Coffee and the exact-SKU distributor manual document the US configuration. Quick Mill’s current global Silvano page documents the continuing family but lists a 0.45 L insulated brass coffee boiler, 1.8 L tank and 265 × 285 × 380 mm dimensions, while US records describe a 0.4 L coffee boiler, 2 L tank and roughly 16 × 10.5 × 13 inches. These records were not blended into one invented specification.',
  image,
  imageAlt: 'Quick Mill official front view of the current Silvano hybrid espresso machine',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: { label: 'Current US reference price', msrp: '$1,495', typical: 'Chris Coffee and 1st in Coffee each displayed US$1,495 and in-stock status for SKU 04005-A-EVO-A on September 25, 2026. Confirm the exact SKU, voltage, boiler, tank, included accessories, warranty and return terms before purchase.', currency: 'USD', numeric: '1495', checked: 'September 25, 2026' },
  links: [
    { label: 'Check current US price and exact SKU', href: chrisCoffee, note: 'US$1,495, in-stock status and SKU 04005-A-EVO-A checked September 25, 2026', primary: true },
    { label: 'Read the current Quick Mill Silvano specification', href: official, note: 'Current manufacturer family page for architecture, controls, dimensions, tank, power, voltage and official media' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Silvano Evo, US SKU 04005-A-EVO-A, 110-120 V reservoir configuration' },
    { label: 'Heating', value: 'PID coffee boiler plus separately switchable steam thermoblock; simultaneous brew and steam supported' },
    { label: 'Coffee setup', value: '58 mm portafilter, three-way solenoid, adjustable expansion valve, pressure gauge and PID shot timer' },
    { label: 'Milk system', value: 'Dedicated steam pump and thermoblock feeding a swiveling manual wand; owner reports make steam timing an important fit question' },
    { label: 'Water and pump', value: 'Side-loading reservoir and two vibration pumps; current US listing says 2 L while current global factory page says 1.8 L' },
    { label: 'Fit', value: 'US listing: about 10.5 W × 13 D × 16 H in and 35 lb; current global page: 265 × 285 × 380 mm and 16 kg' },
    { label: 'Identity warning', value: 'US exact-SKU records and current global Silvano specifications differ; verify the delivered machine rather than combining both records' },
  ],
  quickAnswers: [
    { question: 'Can Silvano Evo brew and steam at the same time?', answer: 'Yes. The coffee boiler and separate steam thermoblock use independent pumps, so both circuits can operate together.' },
    { question: 'Is Silvano Evo a dual boiler?', answer: 'No. It is a hybrid: one small PID-controlled boiler for coffee and one thermoblock for steam. Calling it a dual boiler overstates the steam hardware.' },
    { question: 'What is the current US price?', answer: 'Chris Coffee and 1st in Coffee each displayed US$1,495 and in-stock status for SKU 04005-A-EVO-A on September 25, 2026.' },
    { question: 'Does the PID include a shot timer?', answer: 'Yes. The exact-SKU manual says the PID display counts shot time when the brew circuit is activated.' },
    { question: 'How strong is the steam?', answer: 'The separate circuit avoids brew-to-steam recovery, but independent and owner evidence describes slower, wetter or less forceful steam than a dedicated steam boiler. Technique and timing matter.' },
    { question: 'Who should consider Silvano Evo?', answer: 'A buyer who wants PID espresso, a 58 mm workflow, compact width and simultaneous manual milk preparation without paying for a full dual boiler.' },
  ],
  bestFor: ['Espresso-first households that still make regular milk drinks and want to avoid single-boiler mode switching', 'Buyers who want PID temperature selection, a shot timer and pressure feedback in a compact body', 'Owners with a nearby retailer or technician who supports exact US SKU 04005-A-EVO-A'],
  avoidIf: ['You expect the steam force, dryness and recovery of a dedicated steam boiler', 'You need volumetric dosing, automatic milk, direct plumbing, app control or brew-by-weight', 'The seller cannot reconcile the delivered boiler, tank, dimensions, voltage and warranty with the listing'],
  pros: ['Hybrid coffee-boiler and steam-thermoblock layout supports simultaneous brewing and steaming', 'PID, shot timer, pressure gauge and adjustable expansion valve give useful espresso feedback', '58 mm portafilter, three-way solenoid and side-loading tank support a familiar manual routine', 'Separate steam-circuit switch lets espresso-only users avoid heating milk hardware'],
  cons: ['Steam thermoblock is less forceful than the service boiler in a true dual-boiler or HX machine', 'Small coffee boiler and incoming refill water make sustained temperature behavior an evidence limitation', 'No automatic shot stop, pre-infusion program, direct plumbing or integrated grinder', 'Current global and US records differ on boiler material, reservoir capacity and dimensions'],
  architecture: 'a reservoir-fed semi-automatic built around a small PID-controlled coffee boiler, separate die-cast aluminum steam thermoblock with copper water path, two vibration pumps, 58 mm ring group, three-way solenoid, externally accessible expansion valve, brew-pressure gauge, PID display with timer, swiveling steam wand, side-loading tank and independently switchable steam circuit',
  identityBoundary: 'The Product schema and scores refer to current US Silvano Evo SKU 04005-A-EVO-A. The current Quick Mill global page confirms the Silvano hybrid concept but lists a 0.45 L insulated brass boiler, 1.8 L tank, 265 × 285 × 380 mm body and a hot-water-capable wand. Current US seller and distributor records describe a 0.4 L coffee boiler, 2 L tank, roughly 16 × 10.5 × 13 inches and SKU-specific controls. Regional, older, modified and used machines remain separate, and the delivered rating plate, serial and manual govern.',
  primaryStrength: 'Silvano Evo adds simultaneous manual steam to a compact PID espresso platform without the cost and size of a full dual boiler.',
  primaryLimit: 'Its thermoblock steam is the compromise, and inconsistent regional specifications make exact-SKU confirmation essential.',
  setupNote: 'Confirm SKU 04005-A-EVO-A, 110-120 V rating plate, plug, boiler and tank specification, serial, warranty and retailer support before payment. Preserve packaging and inspect the body, group, pressure gauge, switches, side reservoir, wand, cord and accessories on arrival. Follow the delivered first-fill procedure before heating because the exact-SKU manual warns that an empty coffee boiler can damage the heater. Allow clearance on the right for the reservoir and above for cups and service.',
  espressoNote: 'The 58 mm group, adjustable expansion valve, pressure gauge and PID give the operator useful control over temperature set point and resistance at the puck. The exact-SKU manual recommends at least 15 minutes of warm-up even though the display reaches temperature sooner. Dose, distribution, tamp, grind, yield and time still belong to the user, and the shot stops only when the switch is returned. Independent reviews value the control set, while owner discussions dispute what the boiler display says about actual group temperature during longer extractions. Coffeedant did not measure temperature, pressure, flow, warm-up, noise or taste.',
  milkNote: 'The separate steam thermoblock can work while the coffee boiler is brewing, which removes the wait and refill sequence of a conventional single boiler. That convenience does not make it a steam boiler. Independent review and owner discussions describe slower or less predictable steam, with timing around the heating light and small milk volumes affecting results. The exact-SKU manual asks users to purge condensation, keep the tip clean and use the independent rear switch. No universal steam rate or texture result is claimed.',
  workflowNote: 'The daily rhythm is compact and manual: slide out the side tank, fill with suitable water, let the portafilter and group warm, prepare a 58 mm basket, start and stop the shot by switch, and watch time plus beverage mass. The pressure gauge helps diagnose grind resistance. Milk can be textured during or after brewing, then the wand needs wiping and purging. There is no automatic dose stop, grinder, app or plumbing. The side-loading reservoir is useful under cabinets, but the right side needs access.',
  buildNote: 'Current official and US records agree on stainless bodywork, hybrid heating, PID, pressure gauge, vibration pumping and roughly 16 kg weight. They disagree on the precise coffee-boiler material and capacity, tank size and dimensions. US exact-SKU records add two pumps, three-way solenoid, solid-state relay, resettable protections and an adjustable expansion valve. These are documented components, not teardown findings, and service access still belongs to a qualified technician.',
  featuresNote: 'The useful features are focused: PID temperature selection, integrated shot timer, brew-pressure gauge, 58 mm baskets, three-way solenoid, adjustable expansion valve, independent steam switch, side tank and cup warmer. The machine does not add volumetric dosing, programmable pre-infusion, flow control, automatic milk, direct plumbing or connectivity. The current global page describes hot water through its wand, while US owner reports often treat the machine as steam-only, another reason to confirm the exact delivered configuration.',
  valueNote: 'At US$1,495, Silvano Evo competes with polished single boilers such as Profitec Go and Lelit Victoria, while offering simultaneous steam that those machines cannot. Its value rises for households making milk drinks but unwilling to fund a true dual boiler. It falls when steam power matters more than simultaneity, or when a mostly espresso buyer would prefer the simpler support and larger community around a single-boiler alternative. A used price only makes sense with service history, water history and local parts support.',
  ownerPattern: 'Owner evidence converges on a clear tradeoff. PID espresso control, pressure feedback and simultaneous steam are frequently praised. The recurring complaint is steam strength and the need to learn the heating-light rhythm. Recent used-buy discussions also show that an old machine can remain serviceable for years while individual examples develop valves, screens or temperature concerns. These accounts help define questions for a seller; they do not establish average failure rates.',
  ownerCaution: 'Community posts span older Silvano and Silvano Evo units, regional voltages, different steam tips, water, maintenance histories and owner technique. A ten-year personal history does not prove family durability, and one temperature-drop or steam problem does not prove a universal defect. Displayed boiler temperature is not the same as a measured puck temperature. Treat every used unit as an individual machine and obtain a live demonstration plus service records.',
  maintenanceNote: 'After use, rinse the group briefly, remove coffee from the basket and shower area, wipe and purge the steam wand, empty the tray and refresh the side tank. The exact-SKU manual calls for regular water backflushing, periodic detergent backflushing and water testing, while discouraging casual owner descaling. Follow the delivered manual and qualified service guidance because water chemistry and regional construction differ. Heating, pump, solenoid, thermoblock and mains work belongs with a technician.',
  dimensions: {
    espresso: { score: 8.2, claim: 'PID control, a 58 mm group, pressure gauge and adjustable expansion valve create a capable manual espresso platform.', consequence: 'The small boiler and manual shot stop keep grind, puck preparation and sustained temperature behavior in the operator’s hands.', status: 'Current official and exact-SKU documentation plus independent context; no Coffeedant testing', signals: ['PID coffee boiler.', '58 mm group and pressure gauge.', 'Integrated shot timer.'] },
    milk: { score: 7.4, claim: 'The separate thermoblock enables steam while the coffee boiler is brewing.', consequence: 'Steam is slower and less forceful than a dedicated steam boiler, with timing and technique affecting texture.', status: 'Documented hybrid architecture plus independent and owner context', signals: ['Independent steam circuit.', 'Simultaneous brew and steam.', 'Recurring owner concern about steam strength.'] },
    workflow: { score: 8.0, claim: 'Side filling, PID feedback, timer and simultaneous steam reduce friction in a compact manual routine.', consequence: 'Every shot is started and stopped manually, and the steam circuit has its own switch and readiness rhythm.', status: 'Exact-SKU manual and current listings', signals: ['Side-loading tank.', 'PID timer and gauge.', 'Manual switches.'] },
    build: { score: 7.9, claim: 'Stainless bodywork, two protected pumps, solenoid and accessible pressure adjustment support conventional service planning.', consequence: 'Regional specification differences and age-specific parts make seller and technician support important.', status: 'Manufacturer and seller component records; no teardown', signals: ['About 16 kg stainless chassis.', 'Two vibration pumps on US SKU.', 'Resettable protection and three-way solenoid.'] },
    features: { score: 8.1, claim: 'The PID, timer, gauge, 58 mm group and separate steam circuit cover the controls that materially affect daily use.', consequence: 'No automatic stop, pre-infusion program, flow control, plumbing, grinder or app is included.', status: 'Current official, seller and manual records', signals: ['PID and shot timer.', 'Pressure gauge and expansion valve.', 'Independent steam switch.'] },
    value: { score: 7.8, claim: 'US$1,495 buys simultaneous steam and serious espresso controls below full dual-boiler pricing.', consequence: 'Buyers who prioritize steam power or mostly drink espresso may get better fit from a different architecture.', status: 'Two current US listings checked September 25, 2026', signals: ['US$1,495 at two retailers.', 'Current in-stock references.', 'Hybrid rather than full dual-boiler hardware.'] },
  },
  sources: [
    { label: 'Quick Mill official Silvano page', href: official, note: 'Current global family architecture, 0.45 L insulated brass boiler, thermoblock construction, controls, 1.8 L tank, dimensions, weight, power, voltage and official media checked September 25, 2026.' },
    { label: 'Chris Coffee current US listing', href: chrisCoffee, note: 'US$1,495, in-stock status, SKU 04005-A-EVO-A, hybrid layout, PID, shot timer, pressure gauge, tank and warranty context checked September 25, 2026.' },
    { label: '1st in Coffee current US listing', href: firstInCoffee, note: 'Independent price and stock cross-check for US SKU 04005-A-EVO-A plus detailed 110 V components, 2 L tank, dimensions and two-year listing warranty.' },
    { label: 'Silvano Evo 04005-A-EVO-A instruction manual copy', href: manual, note: 'Exact-SKU setup, fill mode, PID, timer, switches, two pumps, reservoir, steam workflow, backflushing, water and troubleshooting. Hosted by Manuals+, not the current factory site.' },
    { label: 'Joe Varacalli Quick Mill Silvano review', href: video, note: 'Unique exact-model independent owner review published November 15, 2021. It supplies workflow context, not current price or Coffeedant measurements.' },
    { label: 'Coffeeness Silvano review', href: coffeeness, note: 'Independent review context for 58 mm workflow, PID, heating architecture, compact fit and slower thermoblock steam. Price on that page is not the scored live reference.' },
    { label: 'Home-Barista Silvano review', href: homeBaristaReview, note: 'Long-form independent review and temperature discussion for an earlier Silvano generation. Useful history, not proof of current US unit performance.' },
    { label: 'Reddit Silvano, Profitec Go and Ascaso Uno comparison', href: comparisonThread, note: 'Self-selected owner context on PID, pressure adjustment, simultaneous steam, cup clearance and missing hot-water outlet. No controlled benchmark.' },
    { label: 'Reddit Silvano steam-power discussion', href: steamThread, note: 'Multiple owner reports on steam strength, readiness-light timing, milk type and technique. Reports are mixed and cannot establish a universal defect.' },
    { label: 'Reddit recent used Silvano discussion', href: usedThread, note: 'Recent long-term and used-buy context on service records, pressure, temperature interpretation and individual repairs. No reliability denominator.' },
    { label: 'Profitec official GO page', href: profitecOfficial, note: 'Current single-boiler PID comparison used for buyer-fit contrast rather than Silvano specification evidence.' },
    { label: 'Lelit official Victoria page', href: lelitOfficial, note: 'Current single-boiler PID comparison used for control and workflow contrast rather than Silvano specification evidence.' },
  ],
  comparisons: [
    { name: 'Quick Mill Silvano Evo', href: '/espresso-machine/quick-mill-silvano-evo/', quickDecision: 'Choose the hybrid layout when compact PID espresso and simultaneous manual steam matter together.', priceClass: 'US$1,495 current reference', dimensions: 'US listing about 10.5 W × 13 D × 16 H in', heating: 'PID coffee boiler plus steam thermoblock', coffeeSetup: '58 mm, gauge, timer and adjustable pressure', milkWorkflow: 'Simultaneous thermoblock steam', bestFor: 'Compact milk-drink flexibility' },
    { name: 'Profitec Go', href: '/espresso-machine/profitec-go/', quickDecision: 'Choose a polished PID single boiler when espresso simplicity matters more than simultaneous steam.', priceClass: 'Premium single-boiler class', dimensions: 'Compact single-boiler chassis', heating: 'PID single boiler', coffeeSetup: '58 mm, gauge and timer', milkWorkflow: 'Sequential boiler steam', bestFor: 'Espresso-first routine' },
    { name: 'Lelit Victoria PL91T', href: '/espresso-machine/lelit-victoria-pl91t/', quickDecision: 'Choose programmable pre-infusion and a compact PID boiler when sequential milk is acceptable.', priceClass: 'Premium single-boiler class', dimensions: 'Compact stainless chassis', heating: 'PID single boiler', coffeeSetup: '58 mm with electronic controls', milkWorkflow: 'Sequential boiler steam', bestFor: 'More electronic brew tools' },
    { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', quickDecision: 'Choose dedicated brew and steam boilers when stronger milk performance justifies more money and space.', priceClass: 'Entry dual-boiler class', dimensions: 'Larger, heavier dual-boiler body', heating: 'PID dual boilers', coffeeSetup: '58 mm with soft-infusion control', milkWorkflow: 'Simultaneous boiler steam', bestFor: 'Higher milk throughput' },
  ],
  comparisonNote: 'Choose the heating architecture before comparing feature counts. Silvano Evo combines a coffee boiler and steam thermoblock; Profitec Go and Lelit Victoria are sequential single boilers; Silvia Pro X is a true dual boiler. Then compare steam expectations, controls, counter access, exact voltage, warranty and service.',
  recommendations: [
    { kicker: 'Espresso-first alternative', title: 'Profitec Go', text: 'Choose a straightforward PID single boiler when strong espresso controls matter more than simultaneous steam.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read Profitec Go review', featured: true },
    { kicker: 'Electronic single boiler', title: 'Lelit Victoria PL91T', text: 'Choose programmable pre-infusion and compact electronic control when sequential steaming fits the routine.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Lelit Victoria review' },
    { kicker: 'True dual boiler', title: 'Rancilio Silvia Pro X', text: 'Choose dedicated brew and steam boilers when milk power and repeated service justify the higher budget.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read Silvia Pro X review' },
    { kicker: 'Traditional Quick Mill dual boiler', title: 'Quick Mill QM67 Evo', text: 'Choose E61 character, separate boilers and stronger steam when size, warm-up and price are acceptable.', href: '/espresso-machine/quick-mill-qm67-evo/', linkLabel: 'Read QM67 Evo review' },
  ],
  faqs: [
    { question: 'What is the current Quick Mill Silvano Evo price?', answer: 'Chris Coffee and 1st in Coffee each displayed US$1,495 and in-stock status for SKU 04005-A-EVO-A on September 25, 2026.' },
    { question: 'Is Silvano Evo a dual boiler?', answer: 'No. It uses one PID-controlled coffee boiler and a separate thermoblock for steam. It can brew and steam together, but the steam circuit is not a boiler.' },
    { question: 'How long should it warm up?', answer: 'The exact-SKU manual says the PID may reach temperature in about five minutes but recommends at least 15 minutes for better temperature stability.' },
    { question: 'Does it use a 58 mm portafilter?', answer: 'Yes. Current US listings specify a 58 mm portafilter with single and double baskets.' },
    { question: 'Does it have a shot timer?', answer: 'Yes. The PID display includes an integrated timer that begins with brew activation and retains the finishing time briefly.' },
    { question: 'Can the steam circuit be turned off?', answer: 'Yes. The US exact-SKU manual documents a separate steam-bank power switch so espresso-only sessions do not need to heat that circuit.' },
    { question: 'Why do tank and dimension specifications differ?', answer: 'The current global factory Silvano page and current US exact-SKU listings are not identical. They list different tank capacities, dimensions and boiler descriptions. Confirm the actual rating plate, serial, manual and delivered configuration.' },
    { question: 'What should a used buyer inspect?', answer: 'Ask for the exact model and voltage, live heating and steam demonstration, water and service records, PID behavior, gauge, pumps, solenoid, leaks, wand condition, tank tubes and local parts support.' },
  ],
  finalTitle: 'Choose Silvano Evo for compact PID control and simultaneous steam, with realistic milk expectations',
  finalVerdict: [
    'Silvano Evo 04005-A-EVO-A is a distinctive middle path: PID espresso boiler, 58 mm group, pressure gauge, timer and a separately powered steam thermoblock in a compact stainless body.',
    'Its advantage is simultaneous workflow, not steam-boiler force. Buyers should expect a technique-sensitive wand and should not reinterpret the hybrid system as a true dual boiler.',
    'At US$1,495, it fits households that make both espresso and milk drinks but cannot justify a larger dual boiler. Confirm the exact US specification because current global and regional records differ.',
  ],
  video: { id: 'Rf23Fb7I7FE', title: 'Quick Mill Silvano Review', creator: 'Joe Varacalli', published: '2021-11-15', note: 'Unique exact-model independent owner review covering controls, espresso preparation, steam workflow and buyer fit. It is not Coffeedant testing, current-price evidence or a universal performance measurement.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-silvano-evo-04005-us-source-2">[source]</a> <a href="#quick-mill-silvano-evo-04005-us-source-4">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-silvano-evo-04005-us-source-4">[source]</a> <a href="#quick-mill-silvano-evo-04005-us-source-6">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-silvano-evo-04005-us-source-4">[source]</a> <a href="#quick-mill-silvano-evo-04005-us-source-9">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-silvano-evo-04005-us-source-2">[source]</a> <a href="#quick-mill-silvano-evo-04005-us-source-4">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-silvano-evo-04005-us-source-1">[source]</a> <a href="#quick-mill-silvano-evo-04005-us-source-3">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-silvano-evo-04005-us-source-1">[source]</a> <a href="#quick-mill-silvano-evo-04005-us-source-4">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-silvano-evo-04005-us-source-2">[source]</a> <a href="#quick-mill-silvano-evo-04005-us-source-11">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-silvano-owner-title"><h3 id="quick-mill-silvano-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Simultaneous does not mean boiler-strength steam</strong><p>Owners value making espresso and milk together, but several describe a slower, technique-sensitive steam circuit. That pattern is useful for buyer fit, not a measured steam-rate claim.</p></li>
    <li><strong>The readiness-light rhythm matters</strong><p>Several owners report stronger results after learning when the steam heating light cycles. Different units and tips may behave differently, so the delivered manual and a live demonstration matter more than one universal trick.</p></li>
    <li><strong>Used condition outranks the family reputation</strong><p>Long-term accounts range from a decade of limited service to individual valve and temperature concerns. Service invoices, water history and local repair support are more useful than either anecdote alone.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillSilvanoEvoReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
