import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.quick-mill.com/products/carola/';
const chrisCoffee = 'https://www.chriscoffee.com/products/quick-mill-carola';
const manuals = 'https://www.chriscoffee.com/pages/product-manuals';
const manual = 'https://device.report/manual/3135323';
const firstInCoffee = 'https://www.1stincoffee.com/quickmill-carola.htm';
const espressoOutlet = 'https://espressooutlet.com/products/quick-mill-carola-evo-espresso-machine';
const majestyCoffee = 'https://majestycoffee.com/products/quick-mill-carola-evo-0960-a-cevo-a';
const kaffeemacher = 'https://kaffeemacher.de/en/blogs/kaffeewissen/quick-mill-carola';
const ownerVideo = 'https://www.youtube.com/watch?v=XuiGHkaCVek';
const evoOwners = 'https://www.home-barista.com/espresso-machines/quick-mill-carola-evo-review-photos-t56130.html';
const olderOwners = 'https://www.home-barista.com/espresso-machines/quick-mill-carola-review-t37658.html';
const flowOwner = 'https://www.reddit.com/r/espresso/comments/jba2ou/new_machine_day_quick_mill_carola_evo_with_pid/';
const comparisonOwner = 'https://www.reddit.com/r/espresso/comments/1bv21mu/ecm_classika_quick_mill_carola_evo_profitec_go_or/';
const parts = 'https://spareparts.espressocoffeeshop.com/en/6923-quick-mill-0960-carola-evo';
const image = 'https://www.quick-mill.com/wp-content/uploads/2025/07/87-3.png';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-carola-evo-na',
  slug: '/espresso-machine/quick-mill-carola-evo/',
  productId: 'CD-EM-000228',
  brand: 'Quick Mill',
  model: 'Carola Evo 0960-A-CEVO-A',
  sku: '0960-A-CEVO-A North American 110 V current-display configuration',
  category: 'Espresso-only E61 single-boiler machine',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Carola Evo review: current price, espresso-only workflow and generation boundary',
  description: 'Research-led Quick Mill Carola Evo review covering current US 0960-A-CEVO-A identity, PID E61 workflow, no-steam limitation, price, owner evidence and alternatives.',
  verdictLabel: 'A narrow PID E61 for straight espresso drinkers who truly do not need steam',
  verdict: 'Carola Evo 0960-A-CEVO-A is unusual by design: a 0.75 L PID single boiler, E61 group and shot timer with no steam wand. The current US machine adds a front display, adjustable standby, low-water code and accessible expansion valve while keeping the narrow reservoir-fed chassis. Chris Coffee listed it in stock at $1,395 on September 24, 2026; 1st in Coffee and Espresso Outlet showed the same price but no stock. It is a focused choice for straight espresso, not a conventional single boiler that can change into steam mode.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores cover the current North American 110 V product ID 0960-A-CEVO-A. Pre-April 2020 Carola machines, the hidden-switch PID generation reviewed in 2019, regional 230 V units, flow-control kits and other owner modifications remain separate configurations.',
  image,
  imageAlt: 'Quick Mill official three-quarter view of the current Carola espresso-only PID single-boiler machine',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: { label: 'Current US price', msrp: '$1,395', typical: 'Chris Coffee displayed $1,395 and in-stock status on September 24, 2026. 1st in Coffee and Espresso Outlet displayed $1,395 but out-of-stock status. Warranty, fulfillment and availability differ by seller. Used value depends on generation, PID controls, voltage, water history, E61 service and modifications.', currency: 'USD', numeric: '1395', checked: 'September 24, 2026' },
  links: [
    { label: 'Check Chris Coffee price and stock', href: chrisCoffee, note: '$1,395 in-stock listing, SKU 0960-A-CEVO-A, current US display generation and two-year seller warranty checked September 24, 2026', primary: true },
    { label: 'Read the official Carola specification', href: official, note: 'Current manufacturer identity, architecture, controls, dimensions, voltage range and regional warranty guidance' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Carola Evo, SKU 0960-A-CEVO-A, North American 110 V current-display version' },
    { label: 'Brew system', value: '58 mm E61 thermosiphon group with one 0.75 L insulated PID brew boiler' },
    { label: 'Drink boundary', value: 'Espresso and brew water only; no steam wand or milk-steaming mode' },
    { label: 'Controls', value: 'Front PID display, automatic shot timer, programmable standby, pressure gauge and manual E61 lever' },
    { label: 'Water and pump', value: 'Official 1.8 L tank; US sellers list 2 L. Reservoir-fed 52 W Ulka vibration pump with Pulsar dampener' },
    { label: 'Fit', value: 'US listing: 7.75 W × 15.5 D × 13.75 H in and 32 lb; top access required' },
    { label: 'Current status', value: '$1,395 and in stock at Chris Coffee on September 24, 2026; two checked peers showed sold out' },
  ],
  quickAnswers: [
    { question: 'Can Carola Evo steam milk?', answer: 'No. The current Carola deliberately omits a steam wand and steam mode. Milk drinks require a separate frother or a different espresso machine.' },
    { question: 'Is the current Carola PID controlled?', answer: 'Yes. Current official and US importer records document front PID temperature control and a shot timer. Older generations used different controls, so verify the front panel before buying used.' },
    { question: 'Is it the same as the pre-2020 Carola?', answer: 'No. The scored current generation follows the April 2020 PID update and 2021 control changes. Earlier hidden-switch and non-current control layouts should not inherit every feature here.' },
    { question: 'Does flow control come standard?', answer: 'No factory group-flow valve is documented in the base 0960-A-CEVO-A package. Owner-installed E61 kits are separate modifications.' },
    { question: 'Can it connect to a water line?', answer: 'No fixed-water connection is documented for the scored configuration. Treat it as a top-filled reservoir machine.' },
    { question: 'Who should consider it?', answer: 'A straight-espresso drinker who wants PID control, E61 handling and a narrow chassis and is comfortable giving up steam completely.' },
  ],
  bestFor: ['Straight-espresso and Americano drinkers who do not need integrated milk steaming', 'Buyers who want an E61 lever, PID and shot timer in a body under eight inches wide', 'Owners who value conventional 58 mm tools, accessible pressure adjustment and specialist parts support'],
  avoidIf: ['You make cappuccino or latte and do not want a separate milk frother', 'You want a fast cold-start machine without E61 thermal preparation', 'You need factory flow control, volumetric stopping, direct plumbing or automatic dosing'],
  pros: ['Focused PID brew boiler avoids the temperature-mode switching of steam-capable single boilers', 'Current front display combines brew setting, shot time, standby and low-water status', 'Narrow stainless chassis preserves a full 58 mm E61 group and large drip tray', 'Current US stock, standard tools and documented service parts support ownership'],
  cons: ['No steam wand means no integrated milk texturing at any temperature', 'E61 mass still needs thorough warm-up despite the small boiler', 'Top-filled reservoir and 15.5-inch depth complicate some cabinet layouts', 'Older Carola and regional records differ enough to make identity checking essential'],
  architecture: 'an espresso-only, reservoir-fed single boiler with a 0.75 L insulated T.E.A.-coated brass boiler, PID temperature control, 58 mm E61 thermosiphon group, stainless mushroom and gicleur, front shot timer and pressure gauge, 52 W Ulka vibration pump with Pulsar dampener, adjustable expansion valve, low-water protection, safety valve, resettable thermostat and 850 W North American heating element',
  identityBoundary: 'The Product schema and scores refer to North American SKU 0960-A-CEVO-A in current front-display, 110 V form. Quick Mill and current US importer records govern the identity. Pre-April 2020 machines, the 2019 hidden-switch PID layout, regional 230 V versions, older reservoir figures, ESE claims, flow-control kits and modified pressure settings are not silently combined.',
  primaryStrength: 'It concentrates the budget and counter width on PID-controlled E61 espresso instead of a compromised steam mode the target owner would not use.',
  primaryLimit: 'The lack of any steam wand is absolute, while the E61 group still imposes warm-up and manual-shot workflow.',
  setupNote: 'Confirm SKU 0960-A-CEVO-A, 110 V rating, current front display and included accessories before setup. Inspect the stainless panels, reservoir, tray, pressure gauge, E61 lever, portafilters, cord and any group modification. Follow the current manual for first fill before the heater runs. Use a stable counter, suitable 15 A circuit and water within manufacturer and service guidance. Allow room above the 13.75-inch body to lift the cup tray and refill the rear tank.',
  espressoNote: 'Carola is built around espresso rather than mode switching. The 0.75 L brew boiler, PID, E61 thermosiphon, pressure gauge and shot timer can support a repeatable routine after full thermal preparation. Boiler setting is not puck temperature, gauge pressure is not flow, and time is not beverage yield. Repeatability still depends on grinder, roast, dose, distribution, tamp and a scale. Coffeedant did not taste coffee or measure temperature, pressure, flow, noise, warm-up or extraction.',
  milkNote: 'There is no milk-steaming performance to infer: the scored machine has no steam wand and no steam mode. A separate frother can assemble milk drinks, but that creates a two-appliance workflow and does not reproduce integrated manual steam texture. Buyers who make milk drinks regularly should compare a steam-capable single boiler, heat exchanger or dual boiler instead of treating Carola as temporarily incomplete.',
  workflowNote: 'After the machine and group are fully warm, prepare the basket, lock in, place cup and scale, raise the E61 lever, monitor the automatic timer and yield, then stop manually. The display carries the brew-temperature setting, shot time, standby and low-water code. The tank and drip tray still need manual attention. There is no volumetric dose, brew-by-weight stop or milk step. Pressure adjustment under the removable tray is a service-style setup control, not an on-the-fly profiling feature.',
  buildNote: 'Current records describe full stainless bodywork, E61 internals with stainless mushroom and gicleur, an insulated coated-brass boiler, resettable thermostat, pump thermal protection and accessible expansion valve. The parts market lists Carola-specific pump and control components. These features support repair planning, but seller words such as bulletproof or lifetime are not evidence of a universal service life.',
  featuresNote: 'The useful set is narrow but coherent: PID, automatic shot timer, programmable standby from 10 to 240 minutes, low-water display code, brew-pressure gauge, 58 mm E61 lever, adjustable expansion valve and cup tray. It does not document steam, a hot-water wand, volumetric dosing, factory flow control, rotary pump, plumbing, app control or grinder. Some older and regional records conflict, so delivered controls govern.',
  valueNote: 'At $1,395, Carola asks the buyer to value espresso focus over category breadth. Compare Profitec GO for quicker ring-group heating and steam capability, ECM Classika PID for a larger E61 single boiler with steam, Lelit Victoria for compact programmable features, and Quick Mill Alexia Evo for a related E61 platform that can switch to steam. Total cost includes grinder, scale, water testing, cleaning supplies, tax and long-term E61 service.',
  ownerPattern: 'Owner evidence repeatedly frames Carola as a deliberate match for people who rarely or never steam milk. Positive themes include narrow width, temperature control, pressure visibility, large tray and the scope for careful espresso experiments. Repeated questions concern long E61 warm-up, PID offsets across generations, tank access, pump-pressure adjustment, flow-control modifications and whether a steam-free machine is too restrictive. Those themes guide purchase questions rather than proving performance rates.',
  ownerCaution: 'Community reports span old Carola, early Evo and current-display generations, different voltages, boilers, reservoirs, temperature settings, grinders, water and modifications. One successful flow-control owner does not validate every kit, and one comparison thread does not establish best value. Match the front panel, rating plate, seller SKU and service history first.',
  maintenanceNote: 'Flush the group briefly after use, wipe the basket and gasket area, empty the tray and keep reservoir water fresh. Backflush the three-way E61 circuit using the current manual and service-provider schedule. Test water instead of guessing; unsuitable hardness drives scale, while aggressive water can increase corrosion risk. Inspect group gasket, shower screen, cam lubrication, mushroom, gicleur, expansion valve, pump mounts, hoses and boiler control as symptoms change. Mains electrical, heater, boiler and pressure work belongs with a competent technician.',
  dimensions: {
    espresso: { score: 8.8, claim: 'A dedicated PID brew boiler, E61 group, pressure gauge and shot timer create a strong manual espresso toolset.', consequence: 'The user still manages grind, puck preparation, warm state, yield and manual stopping.', status: 'Current architecture plus independent and owner context; no Coffeedant testing', signals: ['0.75 L PID brew boiler.', '58 mm E61 thermosiphon group.', 'Pressure gauge and automatic shot timer.'] },
    milk: { score: 1.5, claim: 'Carola intentionally provides no integrated milk-steaming system.', consequence: 'Every milk drink needs a separate frother or a different machine.', status: 'Current official and importer configuration', signals: ['No steam wand.', 'No steam mode.', 'Separate frother required.'] },
    workflow: { score: 8.1, claim: 'Front PID, timer, standby and low-water status simplify a focused espresso routine.', consequence: 'E61 warm-up, top filling, scale use and manual shot stopping remain essential.', status: 'Official and importer records plus owner workflow themes', signals: ['Front status display.', 'Programmable standby.', 'Manual E61 lever.'] },
    build: { score: 8.5, claim: 'Stainless bodywork, serviceable E61 parts and conventional protection support repair-oriented ownership.', consequence: 'Water, heat, scale and modification quality still determine the condition of an individual machine.', status: 'Manufacturer, parts and specialist records; no Coffeedant teardown', signals: ['Stainless body and E61 internals.', 'Resettable thermostat.', 'Replaceable pump and group parts.'] },
    features: { score: 7.3, claim: 'PID, timer, gauge, standby and accessible pressure adjustment cover the espresso-focused brief well.', consequence: 'Steam, volumetrics, factory flow control, plumbing and connectivity are absent.', status: 'Current base SKU separated from options and earlier controls', signals: ['PID and shot timer.', '10 to 240 minute standby.', 'No steam or volumetric stop.'] },
    value: { score: 7.5, claim: 'Current $1,395 stock offers a narrow E61 PID platform with specialist support.', consequence: 'Broader machines near the price can steam milk or heat faster, so the espresso-only choice must be intentional.', status: 'US listings checked September 24, 2026', signals: ['$1,395 current reference.', 'One checked seller in stock.', 'Grinder and service budget still required.'] },
  },
  sources: [
    { label: 'Quick Mill official current Carola page', href: official, note: 'Current identity, 0.75 L boiler, PID, display, group, pump, safety, 1.8 L tank, dimensions, weight, power, voltage range and official media checked September 24, 2026.' },
    { label: 'Chris Coffee current Carola Evo listing', href: chrisCoffee, note: '$1,395 in-stock status, SKU 0960-A-CEVO-A, current US controls, 2020 and 2021 generation changes, pump, boiler, included accessories, dimensions and two-year seller warranty.' },
    { label: 'Chris Coffee manual index', href: manuals, note: 'Current support index linking the Carola Evo manual and confirming specialist documentation.' },
    { label: 'Carola Evo instruction manual mirror', href: manual, note: 'Operating, initial-fill, brew, cleaning and safety reference. Revision and regional applicability must be confirmed against the delivered machine.' },
    { label: '1st in Coffee current Carola listing', href: firstInCoffee, note: '$1,395 out-of-stock status, exact product ID, E61, pump, US electrical record, dimensions and two-year seller warranty checked September 24, 2026.' },
    { label: 'Espresso Outlet current Carola listing', href: espressoOutlet, note: '$1,395 sold-out status, exact SKU, current control record, dimensions, package and parts breakdown cross-check.' },
    { label: 'Majesty Coffee current Carola listing', href: majestyCoffee, note: 'Current US SKU, dimensions, electrical, 0.75 L coated-brass boiler, 2 L seller-listed tank and accessory cross-check.' },
    { label: 'Kaffeemacher independent Carola evaluation', href: kaffeemacher, note: 'Independently purchased 2019 test covering espresso, temperature behavior, fit, tray and no-steam decision. Its hidden-switch PID generation is not treated as the current display model.' },
    { label: 'super_X_drifter current-generation owner video', href: ownerVideo, note: 'Independent owner video published December 27, 2021 covering the current-display Carola Evo, controls, footprint and espresso-only workflow. It is not Coffeedant testing.' },
    { label: 'Home-Barista Carola Evo review and photos', href: evoOwners, note: 'Self-selected owner review published December 2018 covering an earlier Evo, temperature settings and ownership observations. Generation limits remain explicit.' },
    { label: 'Home-Barista older Carola review', href: olderOwners, note: 'Older-generation owner report used only to establish lineage and recurring espresso-only fit questions.' },
    { label: 'Reddit Carola Evo flow-control owner discussion', href: flowOwner, note: 'Self-selected modified-machine discussion about an added flow-control kit and pressure setting. It does not describe base factory equipment or prove outcomes.' },
    { label: 'Reddit single-boiler comparison discussion', href: comparisonOwner, note: 'Self-selected 2024 comparison used for buyer priorities around straight espresso, service, warm-up and pre-infusion, not a controlled ranking.' },
    { label: 'Carola Evo spare-parts listing', href: parts, note: 'Independent parts availability record for model 0960, including pump and Pulsor items. Availability does not prove ease of every repair.' },
  ],
  comparisons: [
    { name: 'Quick Mill Carola Evo 0960-A-CEVO-A', href: '/espresso-machine/quick-mill-carola-evo/', quickDecision: 'Choose a narrow E61 PID machine only when straight espresso is the clear priority.', priceClass: '$1,395 current US reference', dimensions: '7.75 W × 15.5 D × 13.75 H in', heating: '0.75 L PID single brew boiler', coffeeSetup: '58 mm E61, gauge and shot timer', milkWorkflow: 'None; separate frother required', bestFor: 'Dedicated straight espresso' },
    { name: 'Profitec GO', href: '/espresso-machine/profitec-go/', quickDecision: 'Choose quicker ring-group heating and steam capability without E61 mass.', priceClass: 'Current compact PID single-boiler class', dimensions: 'Compact non-E61 chassis', heating: 'PID single boiler', coffeeSetup: '58 mm ring group with timer and pressure control', milkWorkflow: 'Sequential steam mode', bestFor: 'Faster mixed espresso and occasional milk use' },
    { name: 'ECM Classika PID', href: '/espresso-machine/ecm-classika-pid-flow-control/', quickDecision: 'Choose a larger E61 single boiler with a steam wand and optional flow-control path.', priceClass: 'Premium E61 single-boiler class', dimensions: 'Wider and deeper E61 chassis', heating: 'PID single boiler', coffeeSetup: '58 mm E61 with pressure gauge', milkWorkflow: 'Sequential steam mode', bestFor: 'E61 espresso with occasional manual milk' },
    { name: 'Quick Mill Alexia Evo', href: '/espresso-machine/quick-mill-alexia-evo-flow/', quickDecision: 'Choose the related narrow E61 platform when having a steam mode matters.', priceClass: '$1,550 sold-out reference', dimensions: 'Narrow E61 chassis', heating: '0.75 L PID single boiler', coffeeSetup: '58 mm E61 with timer', milkWorkflow: 'Sequential brew and steam modes', bestFor: 'Quick Mill E61 with occasional milk' },
  ],
  comparisonNote: 'Decide on milk first. Carola has none, GO and Classika switch a single boiler to steam, and Alexia adds sequential steam to a related platform. Then compare warm-up, group design, temperature interface, footprint, stock, warranty, water and local service.',
  recommendations: [
    { kicker: 'Faster compact route', title: 'Profitec GO', text: 'Choose a more modern compact group and integrated steam mode when quick starts and occasional milk matter.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read Profitec GO review', featured: true },
    { kicker: 'Steam-capable E61', title: 'ECM Classika PID', text: 'Choose a premium E61 single boiler with a steam wand when espresso focus cannot exclude milk entirely.', href: '/espresso-machine/ecm-classika-pid-flow-control/', linkLabel: 'Read ECM Classika review' },
    { kicker: 'Related Quick Mill', title: 'Quick Mill Alexia Evo', text: 'Choose the related 0.75 L PID E61 platform when switching into steam mode is worth the extra hardware.', href: '/espresso-machine/quick-mill-alexia-evo-flow/', linkLabel: 'Read Quick Mill Alexia review' },
    { kicker: 'Compact programmable route', title: 'Lelit Victoria', text: 'Choose a compact PID single boiler with steam and programmable electronic features instead of E61 ritual.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Lelit Victoria review' },
  ],
  faqs: [
    { question: 'Can Quick Mill Carola Evo steam milk?', answer: 'No. The current machine has no steam wand or steam mode. Use a separate frother or choose another espresso machine for milk drinks.' },
    { question: 'Does current Carola Evo have a PID and shot timer?', answer: 'Yes. Current official and US importer records document front PID temperature control, an automatic shot timer and programmable standby.' },
    { question: 'What is the current US price?', answer: 'Chris Coffee listed it in stock at $1,395 on September 24, 2026. Two other checked US sellers displayed $1,395 but showed no stock.' },
    { question: 'Is flow control included?', answer: 'No. A factory flow-control valve is not documented in the base SKU. Owner-installed E61 kits are separate modified configurations.' },
    { question: 'How large is the current US Carola?', answer: 'The US listing is about 7.75 inches wide, 15.5 inches deep and 13.75 inches high at 32 lb. Allow top clearance for the reservoir.' },
    { question: 'How is current Carola different from older machines?', answer: 'The scored generation follows the April 2020 PID update and 2021 control changes, including a front display, shot timer, standby settings and low-water code. Verify used controls directly.' },
    { question: 'Can I adjust brew pressure?', answer: 'The current US importer describes an expansion valve accessible beneath the removable cup tray. Adjustment should follow qualified guidance and is not live flow profiling.' },
    { question: 'What water should I use?', answer: 'Use tested water within manufacturer, seller and qualified service guidance for scale and corrosion control. Do not assume bottled or softened water is suitable.' },
  ],
  finalTitle: 'Choose Carola only when espresso-only is a benefit, not a compromise',
  finalVerdict: [
    'Carola Evo is a coherent specialist machine: a narrow stainless body, full E61 group, dedicated PID brew boiler, pressure gauge and shot timer with no steam detour.',
    'That focus creates the defining limit. There is no integrated milk texture, E61 warm-up remains, and every shot still depends on grinder, preparation, scale and manual stopping.',
    'Buy it when straight espresso dominates and $1,395 specialist support fits the plan. Choose GO or Victoria for faster mixed use, Classika for E61 plus steam, or Alexia when the related Quick Mill platform needs a steam mode.',
  ],
  video: { id: 'XuiGHkaCVek', title: 'Quick Mill Carola EVO Espresso Machine Review - E61 58MM Prosumer Home Espresso Machine with PID', creator: 'super_X_drifter', published: '2021-12-27', note: 'Unique independent owner video for the current-display Carola Evo generation, covering the control layout, compact E61 architecture and espresso-only workflow. It is not Coffeedant testing, a current-price source or a reliability sample.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-carola-evo-na-source-4">[source]</a> <a href="#quick-mill-carola-evo-na-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-carola-evo-na-source-1">[source]</a> <a href="#quick-mill-carola-evo-na-source-8">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-carola-evo-na-source-1">[source]</a> <a href="#quick-mill-carola-evo-na-source-5">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-carola-evo-na-source-2">[source]</a> <a href="#quick-mill-carola-evo-na-source-9">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-carola-evo-na-source-2">[source]</a> <a href="#quick-mill-carola-evo-na-source-14">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-carola-evo-na-source-1">[source]</a> <a href="#quick-mill-carola-evo-na-source-6">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-carola-evo-na-source-2">[source]</a> <a href="#quick-mill-carola-evo-na-source-13">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-carola-owner-title"><h3 id="quick-mill-carola-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Espresso-only fit is the first decision</strong><p>Owners who already know they will not steam value the focused boiler and narrow body. Comparison threads show that buyers with even occasional milk needs should settle that requirement before comparing smaller features.</p></li>
    <li><strong>Generation changes alter the controls</strong><p>Early Carola and Evo reports describe different PID interfaces and tank details. A used listing needs clear front-panel, rating-plate and control photos before current features are assigned.</p></li>
    <li><strong>Flow control changes the machine being discussed</strong><p>One owner reports successful experiments with an added E61 valve and reduced pressure. That is useful modification context, not evidence that base machines include the kit or that one recipe transfers to other coffees.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillCarolaEvoReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
