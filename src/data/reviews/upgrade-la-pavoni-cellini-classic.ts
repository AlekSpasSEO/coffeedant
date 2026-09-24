import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.lapavoni.com/en/products/domestic-machines/cellini-classic';
const productSheet = 'https://pi-exchange.smeg.it/catalog/LPSCCS01EU/en-TT';
const manual = 'https://www.lapavoni.com/media/usermanual/116';
const parts = 'https://www.lapavoni.com/media/spareparts/116';
const usSeller = 'https://pasquini.com/products/la-pavoni-cellini-classic';
const guide = 'https://www.coffeeitalia.co.uk/la-pavoni-cellini-guide-to-the-main-models/';
const specialist = 'https://www.coffeeionado.com/products/la-pavoni-cellini-classic-espresso-machine';
const film = 'https://www.youtube.com/watch?v=6vRAEBIJPe0';
const hero = 'https://assets.4flow.cloud/WEB_LPSCCS01EU.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVejBOb3gzYVh5V3B5a3d0YklSemdqeituam9PZWZIZGxtWXZQQzY0bHBIeGpaUnpmVXJxaWVnS1ZZUHo3NmJWSVR1R2pUd0J5cGxDc0taV3FrVzk2Z0Jrb1RIcHY1cGZZZ0RieFVWSmw4Wk0zWW96QlpWV2RQcHNsQVV3TElJK01VY3lwNi9DRmg1MXJpUUU0MVpYOG1JPQ';

const profile: UpgradeReviewProfile = {
  key: 'la-pavoni-cellini-classic', slug: '/espresso-machine/la-pavoni-cellini-classic/', productId: 'CD-EM-000196',
  brand: 'La Pavoni', model: 'Cellini Classic', sku: 'EU LPSCCS01EU, stainless steel, Schuko plug', category: 'Semi-professional heat-exchanger espresso machine', brandPath: '/la-pavoni/',
  title: 'La Pavoni Cellini Classic review: traditional E61 HX discipline',
  description: 'Exact EU LPSCCS01EU review: copper 1.8 L heat exchanger, E61 group, vibration pump, 2.9 L tank, cool-touch wands, current price and owner context.',
  verdictLabel: 'A traditional E61 heat exchanger for buyers who want ritual, steam capacity and repairable hardware',
  verdict: 'Consider the current EU Cellini Classic LPSCCS01EU if you want a manually controlled E61 heat-exchanger machine with a copper 1.8 L boiler, vibration pump, 2.9 L removable tank, boiler gauge and simultaneous brew-and-steam capability. It omits a PID, pump gauge, shot timer and direct water connection. The official European price was €1,559 on September 24, 2026, before grinder, water treatment and dealer support.',
  assessment: 'This is a research-led assessment, not a Coffeedant bench test. Exact EU identity, materials, dimensions, accessories and electrical data come from La Pavoni documents generated for LPSCCS01EU. Specialist demonstrations and owner discussions explain workflow, but no controlled exact-model temperature, flow, noise or recovery dataset was found.',
  image: hero, imageAlt: 'La Pavoni official three-quarter image of the stainless steel Cellini Classic with E61 group, boiler gauge and cool-touch wands',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Official EU price', msrp: '€1,559', typical: 'La Pavoni listed EU LPSCCS01EU at €1,559 on September 24, 2026. Pasquini listed a 120 V stainless US version at $1,699 and matte black at $1,749, discounted from higher compare-at figures. Region, voltage, finish, stock and warranty differ.', currency: 'EUR', numeric: '1559', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact La Pavoni EU specification', href: official, note: 'Exact LPSCCS01EU identity, live price, materials, architecture and included accessories', primary: true },
    { label: 'Check current US configuration and price', href: usSeller, note: 'Pasquini 120 V stock, finish, price, dimensions and 12-month dealer warranty; verify at checkout' },
  ],
  facts: [
    { label: 'Exact market', value: 'EU LPSCCS01EU, stainless steel, 220-240 V, 50/60 Hz, 1400 W and Schuko plug' },
    { label: 'Boiler and group', value: '1.8 L copper single boiler with heat exchanger, brass chromed E61 group and Mater pressurestat' },
    { label: 'Pump and gauges', value: 'Vibration pump with 15-bar pump rating; one boiler manometer and no factory pump-pressure gauge' },
    { label: 'Water path', value: '2.9 L removable tank, low-water alarm, automatic boiler fill and anti-vacuum valve; no direct water connection' },
    { label: 'Milk and water', value: 'Separate stainless steel cool-touch steam and hot-water wands with rotary Bakelite valves' },
    { label: 'Size and mass', value: '295 × 430 × 370 mm and 23 kg in the September 23, 2026 official product sheet' },
    { label: 'Included coffee kit', value: 'Single- and double-spout holders, 7 g and 16 g baskets, blind basket, ABS tamper, scoop, brush and filter gasket' },
  ],
  quickAnswers: [
    { question: 'Is this the current EU Cellini Classic?', answer: 'Yes. This review is scoped to stainless LPSCCS01EU. Older CCC, LPSCCC01, V2 and market-specific Cellini machines can differ.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. Its 1.8 L heat exchanger keeps a separate brew-water path inside a steam-temperature boiler, so brewing and steaming can overlap.' },
    { question: 'Does it have a PID?', answer: 'No. The current Classic uses a Mater pressurestat and boiler gauge. Brew-temperature management depends on heat soak, idle time and cooling-flush discipline.' },
    { question: 'Can it be plumbed in?', answer: 'No. La Pavoni marks water-supply connection as unavailable on LPSCCS01EU. The 2.9 L removable reservoir is the only documented feed.' },
    { question: 'Is it a 58 mm machine?', answer: 'Yes. The official product page and sheet specify a 58 mm internal filter-holder diameter and a brass E61 group.' },
    { question: 'How quickly is it ready?', answer: 'The manual describes boiler-pressure readiness but publishes no full group heat-soak time. Specialist guidance commonly allows about 20 to 30 minutes for an E61 routine; treat that as workflow advice, not a measured factory promise.' },
  ],
  bestFor: ['Espresso and milk-drink households that want simultaneous brewing and steaming', 'Buyers comfortable learning an E61 heat-soak and cooling-flush routine', 'Owners who value standard 58 mm tools, published parts diagrams and conventional service hardware'],
  avoidIf: ['You want fast cold-start drinks, programmable dosing or an automatic milk path', 'You require PID setpoints, a shot timer or live pump-pressure feedback', 'You cannot commit to scale-safe water, backflushing and a specialist service path'],
  pros: ['Current official EU documentation and model-specific parts diagram', 'Copper 1.8 L heat exchanger and substantial brass E61 group', 'Simultaneous manual brewing and steaming with cool-touch wands', 'Standard 58 mm workflow and both single- and double-spout holders', '2.9 L removable tank with low-water alarm and automatic boiler fill'],
  cons: ['No brew PID, shot timer or pump-pressure gauge', 'E61 thermal mass means meaningful warm-up and post-idle flush judgment', 'Vibration pump is less quiet than a rotary-pump platform', 'Reservoir only, with no factory direct-plumb option', 'Water treatment and dealer service materially affect ownership cost'],
  architecture: 'a current European semi-professional machine built around a copper 1.8 L single boiler with heat exchanger, brass chromed E61 group, Mater pressurestat, vibration pump, 2.9 L removable tank, boiler manometer, passive cup warmer, automatic fill, anti-vacuum valve and separate cool-touch steam and hot-water wands',
  identityBoundary: 'This page covers stainless EU LPSCCS01EU. The matte-black LPSCCB01 shares the current manual family, while earlier CCC, LPSCCC01, V2 and older Cellini generations may use different gauges, dimensions, pressure controls or market hardware. Cellini Evoluzione and Cellini Evo PID add different pumps, plumbing or control features and are not the reviewed machine.',
  primaryStrength: 'Traditional E61 hardware, a real heat exchanger and strong 58 mm support create a capable espresso-and-milk platform without menus.',
  primaryLimit: 'The same traditional design asks the owner to manage warm-up, idle flushing, grind, dose, yield and water quality without digital assistance.',
  setupNote: 'Match LPSCCS01EU on the rating plate, confirm 220-240 V supply, and leave top and rear tank access. The 23 kg body needs a stable counter. Rinse and seat the tank, let automatic fill finish, heat with a clean portafilter installed and check both valves for drips. Never run the element without water.',
  espressoNote: 'The E61 thermosiphon and heavy group steady a warmed machine but do not set a digital brew temperature. After a long idle, a repeatable cooling flush matters. Treat the supplied 7 g and 16 g baskets as hardware, not universal recipes. Dial grind, dose and yield by taste; the 15-bar pump label is not pressure at the puck.',
  milkNote: 'The heat exchanger maintains steam while brew water uses a separate path. La Pavoni documents a cool-touch wand but no timed pitcher test. Purge condensation, aerate briefly, roll the milk, close the valve before removing the tip, then wipe and purge. The metal tip can still burn.',
  workflowNote: 'There are no recipes, programmed buttons or timer. Heat the E61, prepare coffee with a separate grinder, judge the idle flush, raise the lever, weigh and time externally, then stop the shot manually. Steam and hot water use separate knobs. The tank alarm and boiler gauge prevent some routine errors.',
  buildNote: 'La Pavoni specifies stainless bodywork, copper boiler, chromed brass E61 group, steel grid, cool-touch stainless wands and Bakelite knobs. The parts drawing identifies major assemblies. This supports service planning but proves neither lifespan nor failure rate; warranty can depend on authorised repair and parts.',
  featuresNote: 'Mechanical features include the E61 group, heat exchanger, pressurestat, boiler gauge, automatic fill, anti-vacuum valve, tank alarm, passive cup warmer, two holders and blind basket. There is no PID, timer, flow profiling, volumetric dosing, plumbing, grinder or automatic milk.',
  valueNote: 'La Pavoni listed the EU Classic at €1,559 on September 24, 2026. Its case rests on familiar hardware and current documentation, not feature count. Add a capable grinder, scale, safe water and local service. Judge the 120 V US version separately by its live dealer price and warranty.',
  ownerPattern: 'Exact-model discussion is sparse. A 2022 Coffeetime thread mixed Classic and other Cellini gauge details. A 2023 Reddit pressure question drew general OPV advice, not an exact measurement. Both show identity confusion and the value of dealer setup.',
  ownerCaution: 'Self-selected accounts often omit generation, voltage, grinder, basket, coffee, water and service history. Rebadging, pressure or older-V2 claims are not current specifications without exact documentation. Use them for inspection questions, not reliability rates.',
  maintenanceNote: 'Flush loose grounds, rinse the holder and basket, wipe the gasket area, empty the tray and purge the steam wand. Backflush with the blind basket on a use-based schedule. The manual covers cleaning and gasket replacement but reserves pressure adjustment for technicians. Prevent scale with documented copper-boiler-safe water; involve service when water history is unknown.',
  dimensions: {
    espresso: { score: 8.5, claim: 'A warmed E61 group supports capable manual espresso in the 58 mm ecosystem.', consequence: 'Consistency depends on grinder, preparation, heat soak and idle-flush routine.', status: 'Exact architecture; no instrumented extraction test', signals: ['Chromed brass E61 and 58 mm holder.', 'Manual lever with separate grinder.', 'No puck-pressure or brew-temperature dataset.'] },
    milk: { score: 8.7, claim: 'The 1.8 L HX supports espresso-and-milk overlap.', consequence: 'The owner controls purge, aeration and final temperature.', status: 'Exact hardware; qualitative demonstrations only', signals: ['1.8 L copper HX boiler.', 'Cool-touch wand and rotary valve.', 'No measured pitcher time.'] },
    workflow: { score: 7.3, claim: 'Simple controls become clear after learning the E61 routine.', consequence: 'Warm-up, flushing and manual stopping prevent push-button repetition.', status: 'Exact manual plus specialist context', signals: ['Lever, boiler gauge and separate valves.', '2.9 L tank with alarm and auto-fill.', 'No dosing, timer, PID or plumbing.'] },
    build: { score: 8.6, claim: 'Copper, brass, stainless and a parts diagram support specialist service.', consequence: 'The 23 kg machine still depends on safe water and local labour.', status: 'Official materials; no durability sample', signals: ['Copper boiler, brass E61 and stainless body.', 'Model-specific parts drawing.', 'No verified service-life data.'] },
    features: { score: 7.2, claim: 'It covers traditional HX essentials.', consequence: 'Digital-feedback buyers should compare newer rivals.', status: 'Exact September 2026 sheet', signals: ['HX, boiler gauge and tank alarm.', 'Two holders plus blind basket.', 'No PID, timer, pump gauge or volumetrics.'] },
    value: { score: 7.4, claim: 'The EU price buys serviceable hardware, not a broad feature set.', consequence: 'Compare station cost and dealer support.', status: 'Official prices checked September 24, 2026', signals: ['Current EU documentation.', 'Grinder and water treatment cost extra.', 'Rivals may add digital controls.'] },
  },
  sources: [
    { label: 'La Pavoni exact Cellini Classic product page', href: official, note: 'Current EU identity, price, materials, architecture, electrical data and package; checked September 24, 2026.' },
    { label: 'La Pavoni LPSCCS01EU product sheet', href: productSheet, note: 'Official sheet generated September 23, 2026 with dimensions, mass, power and accessories.' },
    { label: 'La Pavoni Cellini current manual family', href: manual, note: 'Official setup, model distinctions, brewing, steam, cleaning and safety instructions.' },
    { label: 'La Pavoni current spare-parts drawing', href: parts, note: 'Official exploded drawing for service identification, not a local-stock promise.' },
    { label: 'Pasquini exact Cellini Classic listing', href: usSeller, note: 'Current US configuration, prices, inventory, specifications and dealer warranty; checked September 24, 2026.' },
    { label: 'Coffee Italia Cellini range guide', href: guide, note: 'January 24, 2025 retailer comparison separating Mini, Classic and Evoluzione.' },
    { label: 'Coffeeionado exact-model specialist overview', href: specialist, note: 'Retailer workflow context, not a controlled test.' },
    { label: 'Alternative Brewing Cellini video', href: film, note: 'Retailer demonstration published August 9, 2022; family coverage requires generation caution.' },
    { label: 'Reddit exact Cellini Classic question', href: 'https://www.reddit.com/r/espresso/comments/13ud9by/ask_for_info_la_pavoni_cellini_classic/', note: 'Self-selected pressure discussion with general OPV advice, not exact measurement.' },
    { label: 'Coffeetime Cellini Classic discussion', href: 'https://coffeetime.freeflarum.com/d/996-la-pavoni-celini-classic', note: 'Self-selected 2022 boiler, tank, gauge and ownership discussion with model mixing.' },
  ],
  comparisons: [
    { name: 'La Pavoni Cellini Classic', quickDecision: 'Traditional tank-fed HX with current official documentation and no digital brew control.', priceClass: '€1,559 official EU Sep 24', dimensions: '295 × 430 × 370 mm; 23 kg', heating: '1.8 L copper pressurestat HX; E61', coffeeSetup: '58 mm manual lever; grinder separate', milkWorkflow: 'Manual simultaneous steam', bestFor: 'Traditional hardware and strong milk workflow' },
    { name: 'Lelit Mara X', href: '/espresso-machine/lelit-mara-x/', quickDecision: 'Compare if you want a compact HX designed to reduce some temperature-management ritual.', priceClass: 'Check current exact-region offer', dimensions: 'Narrow E61 class', heating: 'Temperature-managed heat exchanger', coffeeSetup: '58 mm manual E61', milkWorkflow: 'Manual simultaneous steam', bestFor: 'Less flush-focused compact HX use' },
    { name: 'Profitec Pro 400', href: '/espresso-machine/profitec-pro-400/', quickDecision: 'Compare for a modern compact E61 HX with more user control and feedback.', priceClass: 'Similar specialist prosumer class', dimensions: 'Compact E61 chassis', heating: 'Temperature-selectable HX', coffeeSetup: '58 mm manual E61', milkWorkflow: 'Manual simultaneous steam', bestFor: 'Feature-aware traditional buyers' },
    { name: 'Rocket Appartamento TCA', href: '/espresso-machine/rocket-appartamento-tca/', quickDecision: 'Compare for Rocket styling and coarse temperature adjustment in another compact HX.', priceClass: 'Higher design-led HX class', dimensions: 'Narrow E61 footprint', heating: 'Temperature-adjustable heat exchanger', coffeeSetup: '58 mm manual E61', milkWorkflow: 'Manual simultaneous steam', bestFor: 'Design-led analog ownership' },
  ],
  comparisonNote: 'Compare exact regional model, electrical version, boiler control, warm-up, temperature-management method, gauges, tank or plumb options, included portafilters, dealer setup, warranty and total grinder-and-water cost. A shared E61 silhouette does not make the machines identical.',
  recommendations: [
    { kicker: 'Less flush-focused HX', title: 'Lelit Mara X', text: 'Compare temperature management, warm-up, steam priority and live regional pricing.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read Mara X review', featured: true },
    { kicker: 'More control feedback', title: 'Profitec Pro 400', text: 'A compact E61 HX path with a newer control philosophy and specialist support.', href: '/espresso-machine/profitec-pro-400/', linkLabel: 'Read Pro 400 review' },
    { kicker: 'Premium compact HX', title: 'ECM Mechanika Slim PID', text: 'Compare digital feedback, finish, dealer coverage and full system price.', href: '/espresso-machine/ecm-mechanika-slim-pid/', linkLabel: 'Read Mechanika review' },
    { kicker: 'Design-led rival', title: 'Rocket Appartamento TCA', text: 'Cross-shop styling, temperature modes, steam behavior and current warranty.', href: '/espresso-machine/rocket-appartamento-tca/', linkLabel: 'Read Appartamento review' },
  ],
  faqs: [
    { question: 'Does the La Pavoni Cellini Classic have a PID?', answer: 'No. LPSCCS01EU uses a Mater pressurestat and boiler gauge. The owner manages heat through warm-up, idle awareness and flushing.' },
    { question: 'Can the Cellini Classic brew and steam at the same time?', answer: 'Yes. Its 1.8 L boiler contains a brew-water heat exchanger. Exact recovery and pitcher speed were not independently measured.' },
    { question: 'How long should it warm up?', answer: 'La Pavoni publishes no full-group readiness time. Specialist guidance commonly allows 20 to 30 minutes, but conditions and routine matter.' },
    { question: 'Can the Cellini Classic connect to a water line?', answer: 'No. LPSCCS01EU uses a removable 2.9 L reservoir. Direct plumbing belongs to other Cellini variants.' },
    { question: 'What size accessories fit?', answer: 'La Pavoni specifies 58 mm and lists a matching tamper and bottomless holder. Confirm third-party portafilter compatibility.' },
    { question: 'Does it have a brew-pressure gauge?', answer: 'No. The current EU Classic has a boiler manometer. Older listings mix gauges across generations.' },
    { question: 'What maintenance matters most?', answer: 'Use safe water, clean coffee parts, purge the wand, backflush appropriately, empty the tray and replace a worn group gasket. Technicians should adjust pressure.' },
  ],
  finalTitle: 'A capable traditional HX whose value depends on wanting the ritual',
  finalVerdict: [
    'The current EU Cellini Classic is clearly documented: copper 1.8 L heat exchanger, brass E61 group, vibration pump, 2.9 L tank, boiler gauge, cool-touch wands, 58 mm kit and a 23 kg stainless chassis. It can serve espresso and milk without boiler-mode switching.',
    'Buy it for conventional hardware and manual control, not feature density. Budget for the grinder, water plan and local service, verify the exact regional code, and compare its €1,559 price with temperature-managed HX rivals before deciding.',
  ],
  video: { id: '6vRAEBIJPe0', title: 'La Pavoni Cellini Coffee Machine Review', creator: 'Alternative Brewing', published: '2022-08-09', note: 'Retailer-produced practical Cellini family demonstration. It is independent of La Pavoni but commercially connected to sales, so current exact EU documents govern identity and specifications.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="cellini-owner-title"><h3 id="cellini-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Identity is the recurring problem</strong><p>Posts combine Classic, Evoluzione, V2 and generic Cellini details. Check gauge, pump, plumbing and voltage against exact documents.</p></li>
    <li><strong>Pressure advice is not measurement</strong><p>The Reddit question drew general OPV advice. A pump label, boiler gauge or anonymous recipe does not establish puck pressure.</p></li>
    <li><strong>The routine is the decision</strong><p>Warm-up, no PID and the vibration pump dominate discussion, but do not form a controlled comparison or durability sample.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLaPavoniCelliniClassicReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
