import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.quick-mill.com/products/pippa/';
const homegrounds = 'https://www.homegrounds.co/quick-mill-pippa/';
const idrinkVideo = 'https://www.youtube.com/watch?v=bIcZA8kutgw';
const wholeLatteLove = 'https://www.wholelattelove.com/products/quick-mill-pippa-semi-automatic-espresso-machine';
const idrinkReturn = 'https://idrinkcoffee.com/en-us/products/quick-mill-pippa-espresso-machine-stainless-steel-989-return';
const artisti = 'https://artisti.com.au/blogs/product-reviews/quick-mill-pippa-coffee-machine-review';
const ownerArrival = 'https://www.reddit.com/r/espresso/comments/sjrand/quickmill_pippa_in_the_house_my_first_espresso/';
const ownerReview = 'https://www.reddit.com/r/espresso/comments/12xof73/quickmill_pippa_review/';
const thermostatThread = 'https://www.home-barista.com/repairs/quickmill-pippa-brew-thermostat-question-t85804.html';
const pressureVideo = 'https://www.youtube.com/watch?v=H3DU-0JInJI';
const currentComparison = 'https://thekitchenbarista.com/blogs/news/quick-mill-espresso-machines-compared-pippa-vs-pop-up-vs-rubino-vs-aquila-plus-vs-elevate-r-2026';
const popupOfficial = 'https://www.quick-mill.com/products/pop-up/';
const profitecGoOfficial = 'https://www.profitec-espresso.com/en/products/go';
const image = 'https://www.quick-mill.com/wp-content/uploads/2025/05/18-600x600.png';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-pippa-4100-na',
  slug: '/espresso-machine/quick-mill-pippa-4100/',
  productId: 'CD-EM-000230',
  brand: 'Quick Mill',
  model: 'Pippa 4100',
  sku: 'Pippa current North American 120 V listing; route model 4100; Whole Latte Love SKU 29515',
  category: 'Single-boiler semi-automatic espresso machine',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Pippa 4100 review: current price, temperature control and milk workflow',
  description: 'Research-led Quick Mill Pippa 4100 review covering the current Pippa identity, 0.45 L brass boiler, no-PID workflow, steam, current price, regional specifications and owner evidence.',
  verdictLabel: 'A handsome, compact single boiler for manual espresso practice, not temperature certainty or rapid milk-drink batches',
  verdict: 'Pippa combines a 0.45 L insulated brass boiler, 58 mm commercial-style portafilter, side-access 1.8 L tank, pressure gauge, external expansion-valve access and a multidirectional anti-burn wand in a compact stainless body. It is approachable but not automated: the current official page lists no PID, the user controls shot timing, and one boiler handles brewing and steaming sequentially. Whole Latte Love displayed US$999, down from US$1,095, but marked its 120 V listing sold out on September 24, 2026. Buy Pippa for tactile espresso and occasional milk service; choose a PID rival when repeatable temperature selection matters more than styling and simplicity.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores cover the current Pippa platform represented by Quick Mill and the North American 120 V retail configuration commonly identified as Pippa 4100. The manufacturer lists 1280 W across its global page while US and Canadian retailers often list 1000 W, so voltage-specific rating plates and delivered manuals govern. Earlier revisions, painted-color packages, retailer exclusives, owner adjustments and modified machines remain separate.',
  image,
  imageAlt: 'Quick Mill official front three-quarter view of the current Pippa compact single-boiler espresso machine',
  published: '2026-07-29',
  updated: '2026-09-24',
  price: { label: 'Current US reference price', msrp: '$999', typical: 'Whole Latte Love displayed US$999, reduced from US$1,095, but marked the machine sold out on September 24, 2026. A current Canadian seller showed C$899 sale pricing for a black unit. Voltage, finish, stock, tax, delivery, warranty and included accessories are regional.', currency: 'USD', numeric: '999', checked: 'September 24, 2026' },
  links: [
    { label: 'Check US price and availability', href: wholeLatteLove, note: 'US$999 sold-out 120 V reference, warranty and retailer specifications checked September 24, 2026', primary: true },
    { label: 'Read the official Pippa specification', href: official, note: 'Current manufacturer identity, boiler, controls, tank, dimensions, weight, power and voltage guidance' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Pippa, current North American 120 V configuration commonly sold as model 4100; WLL SKU 29515' },
    { label: 'Heating', value: 'One official 0.45 L insulated brass boiler; thermostat controlled, no stock PID' },
    { label: 'Coffee setup', value: 'Ring brew group, retailer-listed 58 mm commercial-style portafilter, manual brew switch and pressure gauge' },
    { label: 'Milk system', value: 'Anti-burn multidirectional steam and hot-water wand; brew and steam are sequential' },
    { label: 'Water and pump', value: 'Official 1.8 L side-access tank and vibration pump with manufacturer-claimed noise reduction' },
    { label: 'Fit', value: 'Official 246 W × 336 D × 375 H mm and 14 kg; North American seller figures vary' },
    { label: 'Current status', value: 'US$999, reduced from US$1,095, sold out at Whole Latte Love on September 24, 2026' },
  ],
  quickAnswers: [
    { question: 'Does Quick Mill Pippa have PID temperature control?', answer: 'No. Quick Mill explicitly lists PID as absent. Separate coffee and steam thermostats govern the boiler, so the user cannot select an exact brew temperature.' },
    { question: 'Can Pippa brew and steam together?', answer: 'No. Its single boiler changes between brew and steam temperatures. Pull the shot, switch to steam, wait, texture milk, then cool and refill the boiler before the next espresso.' },
    { question: 'Is the portafilter 58 mm?', answer: 'Current North American sellers list a commercial-style 58 mm portafilter. Confirm the delivered basket and tamper fit because packages and historical revisions can differ.' },
    { question: 'What does the pressure gauge show?', answer: 'The current official text describes a boiler-pressure gauge from 0 to 3 bar, while North American listings describe a 16-bar brew gauge. Because those records conflict, confirm the exact dial and manual on the unit offered.' },
    { question: 'Is model 4100 identical worldwide?', answer: 'No. Pippa appears in 120 V and 200–240 V versions, several finishes and retailer packages. Power, gauge labeling, accessories and warranty can differ by region.' },
    { question: 'Who should consider Pippa?', answer: 'A buyer who wants a compact, traditional single-boiler workflow, mostly makes one or two drinks at a time and is comfortable learning temperature timing instead of selecting a PID setpoint.' },
  ],
  bestFor: ['Espresso-first households that want a compact stainless machine and conventional 58 mm workflow', 'One- or two-drink sessions where sequential steaming is acceptable', 'Buyers who value side tank access, manual switches and visual simplicity more than electronic assistance'],
  avoidIf: ['You want PID temperature selection, pre-infusion programming or automatic shot stopping', 'You make several milk drinks consecutively or need to brew and steam together', 'You need guaranteed US stock, a settled regional power specification or a machine that removes dial-in technique'],
  pros: ['Compact 246 mm official width and side-access tank work well beneath cabinets', '0.45 L insulated brass boiler and 58 mm seller-listed tools provide a traditional manual platform', 'External expansion-valve access and a pressure gauge offer more feedback than many basic single boilers', 'Current official media and independent reviews document the product clearly without relying on legacy copy'],
  cons: ['No PID or user-set brew temperature; thermostat timing remains part of the recipe', 'Single boiler forces sequential espresso and milk work plus a return-to-brew routine', 'US reference stock was unavailable when checked', 'Official and regional seller records conflict on power, gauge range, weight and some construction details'],
  architecture: 'a reservoir-fed semi-automatic with one 0.45 L insulated brass boiler, separate coffee and steam thermostats plus safety reset thermostat, ring brew group, seller-listed 58 mm portafilter, vibration pump, front pressure gauge, lever switches, power and heating lights, external expansion-valve access, multidirectional anti-burn steam and hot-water wand and 1.8 L side-access tank',
  identityBoundary: 'The Product schema and scores refer to the current Quick Mill Pippa platform in the North American 120 V configuration commonly sold as Pippa 4100, with Whole Latte Love SKU 29515 as the dated US market anchor. The global manufacturer page lists both 120 V and 200–240 V support and 1280 W, while North American sellers list 1000 W. Painted finishes, wood accents, gauge faces, accessory bundles, older production and owner modifications are not silently combined.',
  primaryStrength: 'Pippa packages a traditional brass-boiler, 58 mm manual workflow into a narrow stainless body with side tank access and straightforward controls.',
  primaryLimit: 'It omits PID control and uses one boiler for both coffee and steam, so repeatability and multi-drink pace depend on technique and patience.',
  setupNote: 'Confirm the exact Pippa identity, 120 V rating plate, plug, retailer authorization, finish, gauge scale and included baskets before first use. Inspect the side reservoir, tray, portafilter, group seal, switches, steam knob, wand and cord. Follow the delivered manual for filling and boiler priming; never energize a dry boiler. Allow the boiler, group, portafilter and cup to stabilize beyond the first heating light. A 246 mm body is narrow, but the 336 mm depth, 375 mm height, portafilter swing and side tank still need clearance.',
  espressoNote: 'Pippa offers the familiar advantages of a 58 mm basket and manual shot control, but no temperature setpoint or shot timer. Homegrounds and iDrinkCoffee demonstrations treat it as a capable entry-level prosumer machine while emphasizing manual technique and the single-boiler limitation. Dose, distribution, tamp, grind, roast, water, basket and warm state still determine the cup. The front gauge is useful feedback only after its regional scale and purpose are confirmed; it does not measure beverage yield. Coffeedant did not taste coffee or measure temperature, pressure, flow, noise, heat-up or extraction.',
  milkNote: 'The multidirectional anti-burn wand can texture milk after the boiler reaches steam temperature. Artisti demonstrates a full espresso-and-latte sequence, and iDrinkCoffee positions the machine for occasional milk drinks. Those demonstrations prove operation, not a universal steam time or texture result. One 0.45 L boiler means no simultaneous brewing and steaming, and consecutive cappuccinos require switching, waiting, purging and returning the boiler safely toward brew conditions.',
  workflowNote: 'A disciplined session starts with the tank filled, the boiler primed and the portafilter locked in while the machine stabilizes. Weigh and prepare the basket, observe the heating cycle, start and stop the brew switch manually, then judge the shot by time, mass and taste rather than gauge pressure alone. For milk, switch to steam, wait for readiness, purge condensation, texture a modest pitcher, wipe and purge immediately, then refill and cool the boiler according to the manual. There is no volumetric stop, grinder, programmable pre-infusion, PID display or app.',
  buildNote: 'Quick Mill specifies full stainless bodywork, an insulated brass boiler, ring brew group, vibration pump, thermostat protection and a side-access reservoir. Current colored versions add painted panels and wood details, while seller descriptions of 304 stainless refer most clearly to the mirror-finish version. The external expansion valve is a service and adjustment feature, not an invitation to chase pressure without suitable tools and guidance. Internal parts still face heat, scale, seals and mains electricity, so service access does not equal maintenance-free ownership.',
  featuresNote: 'The useful equipment is intentionally analog: pressure gauge, lever switches, indicator lights, side tank, cup rail, manual steam/hot-water wand and external expansion-valve access. Quick Mill explicitly says there is no PID. The current official page does not document programmable pre-infusion, automatic dosing, shot timer, temperature display, direct plumbing, rotary pump, automatic milk, grinder or connectivity. Owner videos that adjust pressure or add controls describe modified units, not included capability.',
  valueNote: 'At a US$999 sold-out reference, Pippa competes against PID-equipped single boilers and cheaper legacy platforms. Its value rests on compact Italian metalwork, side-access water, 58 mm tools and a pleasant manual interface, not a superior feature count. Compare Profitec GO when PID and a shot timer matter, Lelit Victoria for electronic assistance, Gaggia Classic Evo Pro for a larger parts and modification community, and Quick Mill Orione for lower-mass thermoblock simplicity. Add an espresso-capable grinder, scale, fitted tamper, water management and service to the real budget.',
  ownerPattern: 'Owner discussions consistently value the finish, narrow body, conventional accessories and strong results once grind and warm-up are managed. Recurring questions concern thermostat cycling, heat-up beyond the ready light, pressure adjustment, cooling the boiler after steam, accessory fit and whether a PID rival offers better value. Several owners report satisfying results, but self-selected posts cannot establish average temperature stability, failure rate or service life.',
  ownerCaution: 'Community evidence spans different voltages, finishes, gauges, retailer packages, water conditions and owner adjustments. One thermostat fault thread is a repair example, not an incidence rate. A pressure-adjustment video shows access, not a safe universal setting. Match the rating plate, dial, manual and internal configuration before applying another owner’s recipe or diagnosis.',
  maintenanceNote: 'After each session, flush the group briefly, remove coffee from the basket and shower area, wipe and purge the wand, empty the tray and refresh the tank. Follow the delivered manual and qualified service guidance for backflushing, detergent and descaling; seller records say backflushing is supported, but chemistry and frequency must fit the actual machine and water. Test water rather than guessing. Changes in heat cycling, flow, pressure, leaks or steam deserve diagnosis. Boiler, thermostat, valve, pump and mains work belongs with a competent technician.',
  dimensions: {
    espresso: { score: 7.8, claim: 'A 0.45 L brass boiler, seller-listed 58 mm portafilter and manual pressure feedback form a capable traditional espresso base.', consequence: 'No PID means brew-temperature repeatability depends on warm-up, thermostat state and a consistent routine.', status: 'Current architecture plus independent and owner evidence; no Coffeedant testing', signals: ['0.45 L insulated brass boiler.', '58 mm seller-listed portafilter.', 'No user temperature setting.'] },
    milk: { score: 6.8, claim: 'The anti-burn multidirectional wand can texture milk with conventional manual control.', consequence: 'The single boiler makes every espresso-to-steam and steam-to-brew transition sequential.', status: 'Official wand record plus independent demonstrations', signals: ['Manual steam and hot-water wand.', 'One boiler for brew and steam.', 'Best for one or two milk drinks.'] },
    workflow: { score: 7.5, claim: 'Lever switches and a side-access tank keep the physical workflow clear and cabinet friendly.', consequence: 'Manual shot stopping, thermostat timing and boiler recovery require active attention.', status: 'Official controls plus bounded owner evidence', signals: ['Simple lever switches.', 'Side-access 1.8 L tank.', 'No timer or volumetric stop.'] },
    build: { score: 8.3, claim: 'Stainless bodywork, brass boiler and conventional service parts are credible ownership strengths.', consequence: 'Scale, seals, thermostats and pump wear still depend on water, use and service quality.', status: 'Manufacturer and retailer construction records; no teardown', signals: ['Full stainless body in mirror finish.', 'Insulated brass boiler.', 'Safety reset thermostat.'] },
    features: { score: 6.3, claim: 'Gauge, expansion-valve access, 58 mm tools and a proper wand cover the useful manual essentials.', consequence: 'PID, timer, dosing automation, plumbing and connectivity are absent.', status: 'Current stock configuration separated from modifications', signals: ['Pressure gauge.', 'External expansion-valve access.', 'No PID.'] },
    value: { score: 7.1, claim: 'The US$999 reference buys compact Italian construction and a satisfying tactile workflow.', consequence: 'Sold-out status and PID rivals make local price, warranty and service decisive.', status: 'US listing checked September 24, 2026', signals: ['US$999 current reference.', 'Sold out when checked.', 'Grinder and maintenance budget still required.'] },
  },
  sources: [
    { label: 'Quick Mill official current Pippa page', href: official, note: 'Current identity, no-PID status, boiler, group, pump, safety, controls, tank, dimensions, weight, power, voltage, finish and official media checked September 24, 2026.' },
    { label: 'Homegrounds independent Pippa review', href: homegrounds, note: 'Independent review covering single-boiler workflow, 58 mm tools, PID and pre-infusion omissions, pressure-valve access, heat-up context and comparisons. Claims remain attributed.' },
    { label: 'iDrinkCoffeeCanada independent Pippa review video', href: idrinkVideo, note: 'Unique video published January 28, 2025 covering current Pippa controls, espresso, steam, positioning and buyer fit. It is not Coffeedant testing.' },
    { label: 'Whole Latte Love Pippa listing', href: wholeLatteLove, note: 'US$999 sale price from US$1,095, sold-out status, SKU 29515, 120 V retail specifications, package, warranty and current availability checked September 24, 2026.' },
    { label: 'iDrinkCoffee Pippa returned-unit listing', href: idrinkReturn, note: 'North American construction, 0.45 L boiler, ULKA pump, 1.8 L tank, thermostat and external valve cross-check. A returned unit is not normal new-stock price evidence.' },
    { label: 'Artisti Coffee Roasters Pippa evaluation', href: artisti, note: 'Retailer-led unboxing, espresso and milk demonstration covering controls, accessories, wand and drink workflow. Taste impressions and package details remain attributed.' },
    { label: 'Reddit first-month Pippa owner thread', href: ownerArrival, note: 'Self-selected owner context on setup satisfaction, grinder pairing and early workflow. It provides no controlled performance or reliability denominator.' },
    { label: 'Reddit Pippa review thread', href: ownerReview, note: 'Self-selected owner discussion used for recurring warm-up, espresso, steam and value questions. Experiences are not failure-rate data.' },
    { label: 'Home-Barista Pippa thermostat repair thread', href: thermostatThread, note: 'Single repair discussion used only to identify thermostat diagnosis questions and service boundaries; it does not establish incidence or a universal repair.' },
    { label: 'Owner Pippa pressure-valve video', href: pressureVideo, note: 'User-generated demonstration of external pressure-valve access. It does not establish a safe universal setting or stock measured pressure.' },
    { label: 'Kitchen Barista 2026 Quick Mill comparison', href: currentComparison, note: 'Dated July 24, 2026 Canadian MSRP and feature comparison across Pippa and newer Quick Mill machines. Regional price and seller claims remain attributed.' },
    { label: 'Quick Mill official Pop-Up page', href: popupOfficial, note: 'Current same-brand comparison for a PID-equipped single boiler with newer control features. It does not change Pippa specifications.' },
    { label: 'Profitec official GO page', href: profitecGoOfficial, note: 'Current PID single-boiler comparison used to separate Pippa styling and analog simplicity from temperature-controlled alternatives.' },
  ],
  comparisons: [
    { name: 'Quick Mill Pippa 4100', href: '/espresso-machine/quick-mill-pippa-4100/', quickDecision: 'Choose compact styling and a traditional brass-boiler workflow when manual temperature timing is acceptable.', priceClass: 'US$999 current sold-out reference', dimensions: '246 W × 336 D × 375 H mm', heating: '0.45 L thermostat-controlled brass single boiler', coffeeSetup: '58 mm seller-listed portafilter and gauge', milkWorkflow: 'Sequential manual steam wand', bestFor: 'Hands-on espresso with occasional milk' },
    { name: 'Profitec GO', href: '/espresso-machine/profitec-go/', quickDecision: 'Choose PID temperature control and a shot timer for easier repeatability.', priceClass: 'Higher-feature compact single-boiler class', dimensions: 'Compact deep chassis', heating: 'PID-controlled single boiler', coffeeSetup: '58 mm group with pressure adjustment', milkWorkflow: 'Sequential manual steam', bestFor: 'Buyers prioritizing temperature control' },
    { name: 'Lelit Victoria', href: '/espresso-machine/lelit-victoria-pl91t/', quickDecision: 'Choose electronic assistance, PID and programmable functions in a compact stainless body.', priceClass: 'Compact PID single-boiler class', dimensions: 'Narrow stainless chassis', heating: 'PID single boiler', coffeeSetup: '58 mm group with electronic controls', milkWorkflow: 'Sequential manual steam', bestFor: 'More guidance without moving to two boilers' },
    { name: 'Gaggia Classic Evo Pro', href: '/espresso-machine/gaggia-classic-evo-pro/', quickDecision: 'Choose a lower-cost traditional platform with a broad owner, parts and modification ecosystem.', priceClass: 'Entry manual single-boiler class', dimensions: 'Compact traditional chassis', heating: 'Single boiler', coffeeSetup: '58 mm commercial-style group', milkWorkflow: 'Sequential steam mode', bestFor: 'Budget-conscious tinkerers' },
  ],
  comparisonNote: 'Choose the temperature and milk workflow first. Pippa, GO, Victoria and Classic are all single boilers, but GO and Victoria add PID control, while Classic emphasizes a lower-cost, widely understood platform. Then compare actual voltage, stock, warranty, dimensions, water and local service rather than transferring one region’s package.',
  recommendations: [
    { kicker: 'PID-focused alternative', title: 'Profitec GO', text: 'Choose explicit temperature control and a shot timer when repeatability matters more than Pippa styling and side-tank access.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read Profitec GO review', featured: true },
    { kicker: 'Electronic compact route', title: 'Lelit Victoria', text: 'Choose PID control and electronic assistance in another compact 58 mm single-boiler format.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Lelit Victoria review' },
    { kicker: 'Parts and mod ecosystem', title: 'Gaggia Classic Evo Pro', text: 'Choose a familiar lower-cost boiler platform when parts, accessories and community documentation matter most.', href: '/espresso-machine/gaggia-classic-evo-pro/', linkLabel: 'Read Gaggia Classic Evo Pro review' },
    { kicker: 'Same-brand thermoblock', title: 'Quick Mill Orione 3000', text: 'Choose faster water heating and a lighter compact machine when occasional milk and thermostat technique remain acceptable.', href: '/espresso-machine/quick-mill-orione-3000/', linkLabel: 'Read Quick Mill Orione review' },
  ],
  faqs: [
    { question: 'Does Quick Mill Pippa have a PID?', answer: 'No. Quick Mill explicitly lists PID as absent. Separate coffee and steam thermostats control the single boiler.' },
    { question: 'What is the current Pippa price?', answer: 'Whole Latte Love displayed US$999, reduced from US$1,095, on September 24, 2026, but marked the machine sold out. Regional stock and prices differ.' },
    { question: 'Can Pippa brew espresso and steam milk simultaneously?', answer: 'No. One 0.45 L boiler serves both functions at different temperatures, so espresso and milk preparation are sequential.' },
    { question: 'How long does Pippa take to heat?', answer: 'Retailers describe a sub-ten-minute boiler heat, but the group, portafilter and cup also need thermal preparation. Coffeedant does not claim one measured ready time.' },
    { question: 'What size is the current Pippa?', answer: 'Quick Mill lists 246 mm wide, 336 mm deep, 375 mm high and 14 kg. Some North American listings publish rounded dimensions and lower weights.' },
    { question: 'Does Pippa use a 58 mm portafilter?', answer: 'Current North American retailers list a 58 mm commercial-style portafilter. Confirm delivered baskets and tamper fit before buying accessories.' },
    { question: 'Can the brew pressure be adjusted?', answer: 'Seller and owner evidence show external expansion-valve access, but adjustment should follow the exact manual or qualified service guidance. There is no safe universal setting.' },
    { question: 'What water should I use?', answer: 'Use tested water that fits the delivered manual and qualified local service guidance. Avoid guessing: unsuitable water can create scale or corrosion risk.' },
  ],
  finalTitle: 'Choose Pippa for tactile simplicity, not hidden temperature automation',
  finalVerdict: [
    'Pippa is a coherent manual machine: brass boiler, conventional 58 mm tools, side tank, pressure gauge, simple switches and a capable wand in a compact body.',
    'Its omissions define the ownership experience. There is no PID or shot stop, one boiler handles coffee and steam, and regional specifications must be confirmed before purchase.',
    'Buy only after confirming exact voltage, rating plate, gauge, stock, warranty and service. Choose GO or Victoria for temperature control, Classic for a lower-cost ecosystem, or Orione for a lighter thermoblock route.',
  ],
  video: { id: 'bIcZA8kutgw', title: 'Quick Mill Pippa Review: Best Entry-Level Italian Espresso Machine?', creator: 'iDrinkCoffeeCanada', published: '2025-01-28', note: 'Unique independent current-model video covering controls, espresso preparation, steaming, positioning and buyer fit. It is not Coffeedant testing, a current-price source or a universal performance measurement.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-pippa-4100-na-source-1">[source]</a> <a href="#quick-mill-pippa-4100-na-source-4">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-pippa-4100-na-source-2">[source]</a> <a href="#quick-mill-pippa-4100-na-source-3">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-pippa-4100-na-source-3">[source]</a> <a href="#quick-mill-pippa-4100-na-source-6">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-pippa-4100-na-source-1">[source]</a> <a href="#quick-mill-pippa-4100-na-source-8">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-pippa-4100-na-source-1">[source]</a> <a href="#quick-mill-pippa-4100-na-source-5">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-pippa-4100-na-source-1">[source]</a> <a href="#quick-mill-pippa-4100-na-source-10">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-pippa-4100-na-source-4">[source]</a> <a href="#quick-mill-pippa-4100-na-source-13">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-pippa-owner-title"><h3 id="quick-mill-pippa-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Warm-up means more than the first light</strong><p>Owners distinguish boiler readiness from warming the group, portafilter and cup. Their routines vary, so a repeatable personal process is more defensible than one universal minute count.</p></li>
    <li><strong>The manual workflow is the appeal and the work</strong><p>Owners praise the finish, conventional tools and espresso once dialed in, while also asking about thermostat timing, steam transitions and PID alternatives. That pattern defines buyer fit without proving measured performance.</p></li>
    <li><strong>Adjustments and repairs do not describe every unit</strong><p>Pressure-valve demonstrations and a thermostat repair thread show questions a buyer may encounter. They do not establish a safe pressure target, common failure rate or expected service life.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillPippa4100Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
