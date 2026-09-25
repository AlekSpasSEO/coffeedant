import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const officialProduct = 'https://slayerespresso.com/product/single-group/';
const officialSupport = 'https://slayerespresso.com/support/';
const officialVersions = 'https://slayerespresso.com/slayer-versions/';
const officialTraining = 'https://slayerespresso.com/training/';
const prima = 'https://prima-coffee.com/equipment/slayer/slayer-single-group';
const espressoCoffeeShop = 'https://www.espressocoffeeshop.com/en/espresso-machines/522-0-slayer-espresso-single-group-espresso-machine.html';
const chrisCoffee = 'https://www.chriscoffee.com/products/slayer-espresso';
const video = 'https://www.youtube.com/watch?v=Yx_ZrQ-M3Rc';
const ownerLongTerm = 'https://www.reddit.com/r/espresso/comments/11t9iia/have_an_opportunity_to_by_a_slayer_single_group/';
const ownerCurrent = 'https://www.reddit.com/r/espresso/comments/1rql3vo/talk_me_out_of_buying_slayer_steam_single_an/';
const ownerComparison = 'https://www.reddit.com/r/espresso/comments/1n5b3zg/slayer_single_group_steam_single_or_linea_mini_no/';
const smallCafe = 'https://www.reddit.com/r/Coffee/comments/3xqvkv/is_a_single_group_slayer_enough_for_a_small/';
const hero = 'https://slayerespresso.com/wp-content/uploads/2021/05/model-feat-sg01c-1536x768.jpg';

const profile: UpgradeReviewProfile = {
  key: 'slayer-espresso-single-group-current',
  slug: '/espresso-machine/slayer-single-group/',
  productId: 'CD-EM-000243',
  brand: 'Slayer',
  model: 'Espresso Single Group',
  sku: 'Current Slayer Espresso Single Group; confirm voltage, pump, water-feed and finish configuration on the written order',
  category: 'Premium saturated-group dual-boiler flow-profiling espresso machine',
  brandPath: '/espresso-machine/',
  title: 'Slayer Espresso Single Group review: beautiful flow control, demanding ownership',
  description: 'Research-led Slayer Espresso Single Group review covering needle-valve flow control, dual boilers, current specifications, regional prices, installation, service and alternatives.',
  verdictLabel: 'A distinctive mechanical profiling machine for an experienced buyer who has already solved water, power, counter space and service',
  verdict: 'Slayer Espresso Single Group is built around a patented needle valve, a saturated group, independent 1.1 L brew and 3.3 L steam tanks, a three-position actuator and a current rotary-vane pump. Its slow pre-brew and manual flow control can make pressure development part of the recipe without turning the machine into a screen-led appliance. That appeal comes with commercial-scale consequences: 110 lb of machine, a 23-inch body before working clearance, region-specific power, plumbing decisions and a US listing of $13,600 at Prima Coffee on September 25, 2026. Buy it because you want the Slayer extraction method and a highly configurable permanent installation. Skip it if ordinary dual-boiler consistency, easy transport or straightforward value matters more than the tactile profiling ritual.',
  assessment: 'Exceptional mechanical flow control, balanced against installation, price and service burdens.',
  image: hero,
  imageAlt: 'Slayer official photograph of the current Espresso Single Group machine in the standard black, silver and wood configuration',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: { label: 'Current US dealer listing', msrp: '$13,600', numeric: '13600', currency: 'USD', typical: 'Prima Coffee listed standard current configurations at US$13,600 and asked buyers to contact it for lead time; custom finishes, freight, installation, tax and service arrangements can change the total', checked: 'September 25, 2026' },
  links: [
    { label: 'Check current US configuration and lead time', href: prima, note: 'Dated dealer price, voltage choices, finish options and drop-ship timing', primary: true },
    { label: 'Read the Slayer product record', href: officialProduct, note: 'Factory identity, patented flow control, current dimensions, tanks, power and configuration overview' },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'Current Slayer Espresso Single Group, not Steam Single, a two- or three-group commercial Slayer, or an unidentified older revision' },
    { label: 'Brew system', value: 'Saturated group, patented needle-valve flow control and three-position actuator' },
    { label: 'Boilers', value: 'Independent 1.1 L brew tank with 600 W element and 3.3 L steam tank with 1,300 W or 2,000 W element' },
    { label: 'Pump', value: 'Current factory page specifies a rotary-vane pump; older machines and dealer histories may describe earlier gear-pump revisions' },
    { label: 'Dimensions', value: '18.5 W × 23 D × 13 H in (47 × 58 × 33 cm), excluding overhanging portafilters, actuators and cup rails' },
    { label: 'Weight', value: '110 lb / 50 kg factory figure before water, accessories and working clearance' },
    { label: 'North American power', value: '120 V, 60 Hz, 13 A, 1.6 kW factory configuration' },
    { label: 'International power', value: '220 to 240 V, 50/60 Hz, 10 A, 2.1 to 2.4 kW factory configuration' },
    { label: 'Water', value: 'Factory says the pump can draw from an external reservoir; multiple current dealers describe direct-plumb configurations, so the written order must decide the delivered setup' },
    { label: 'Current standard finish', value: 'Silver powder-coated X panels, black rear and side panels, European Ash actuators; customization changes price and lead time' },
  ],
  quickAnswers: [
    { question: 'What is the special feature?', answer: 'A patented needle valve meters water during the pre-brew phase. The three-position actuator moves from off to restricted pre-brew to full brew, giving the operator direct mechanical control over puck saturation.' },
    { question: 'What did it cost in the US?', answer: 'Prima Coffee listed the current Espresso Single Group at US$13,600 on September 25, 2026. Custom finishes, freight, tax, installation and local service can add materially.' },
    { question: 'Can it use a reservoir?', answer: 'Slayer says the current rotary-vane pump can draw from an external reservoir, while several dealers describe direct-plumb packages. Confirm the pump, reservoir kit, drain and warranty conditions on the exact written order.' },
    { question: 'Is it suitable for a normal kitchen?', answer: 'Only a carefully planned one. The body is 23 inches deep and 110 lb before portafilter, actuator, hoses, drain, ventilation and working room.' },
    { question: 'Does it save profiles?', answer: 'No. This is tactile manual flow control, not an electronic machine that records and replays a pressure or flow graph. Repeatability comes from a disciplined recipe and operator timing.' },
    { question: 'Who should buy it?', answer: 'An experienced owner or very low-volume bar that values Slayer-specific extraction, manual control, steam capacity and customization enough to accept the price and infrastructure.' },
  ],
  bestFor: [
    'Experienced espresso users who want tactile needle-valve profiling and will document dose, yield, time and actuator timing',
    'Design-led permanent bars with treated water, correct power, drainage, counter strength and a known Slayer service path',
    'A home or very low-volume setting that values simultaneous brewing and steaming more than compactness or automated repeatability',
  ],
  avoidIf: [
    'You need saved electronic profiles, brew-by-weight stops, app control or a forgiving one-button routine',
    'You have not confirmed counter depth, lifting access, voltage, water treatment, drainage and qualified local service',
    'The machine price would displace the grinder, water system, electrical work or training that the complete station needs',
  ],
  pros: [
    'Patented needle-valve pre-brew creates a genuinely distinct manual extraction workflow',
    'Independent brew and steam tanks support simultaneous espresso and milk preparation',
    'Low 13-inch factory height can fit under upper cabinets when actuator and cup access are included in planning',
    'Highly configurable finishes and visible mechanical controls make the machine feel intentionally built for its space',
  ],
  cons: [
    'US$13,600 dealer price makes the complete installation a major purchase',
    'A 110 lb, 23-inch-deep body needs permanent placement, lifting planning and service access',
    'Manual profiling is powerful but depends on operator consistency and does not replay itself',
    'Official and dealer water-feed, size, weight, warranty and package records conflict, so generic listing copy is unsafe',
  ],
  architecture: 'a saturated-group semi-automatic with separate brew and steam tanks, patented needle-valve pre-brew, a three-position mechanical actuator, PID-controlled tanks, rotary-vane pumping, manual steam, hot water, shot mirror and configurable water-feed and drain installation',
  identityBoundary: 'This review scores the current Slayer Espresso Single Group shown on Slayer’s live product page. It does not merge Slayer Steam Single, commercial two- or three-group machines, pre-2020 gear-pump revisions, modified machines, used examples without a serial and version check, or a regional package whose voltage, pump and water-feed configuration are unknown.',
  primaryStrength: 'The needle valve turns the first phase of extraction into a tactile, controllable variable that feels materially different from a conventional pump-on semi-automatic.',
  primaryLimit: 'Price, mass, utilities and service decide whether the machine can be owned responsibly.',
  setupNote: 'Plan the installation before ordering a finish. The factory body is 18.5 inches wide, 23 inches deep and 13 inches high at 110 lb, excluding portafilters, actuators and cup rails. Add room for hoses, drainage, ventilation, cup access and service. Confirm 120 V 13 A or 220 to 240 V 10 A against the delivered rating plate. Slayer says the pump can draw from an external reservoir, while dealer pages often say direct plumb only. Put the feed, drain, treatment, pump and warranty terms on the written order.',
  espressoNote: 'The machine’s identity is the three-position actuator and needle valve. Pre-brew sends restricted water to the coffee bed; brew opens full flow and engages the pump. The operator can hold or revisit restriction to influence saturation and pressure development. That makes grinder quality, distribution and timing more important, not less. iDrinkCoffeeCanada shows the group and a shot but publishes no controlled temperature, flow, extraction or taste data. Coffeedant did not measure those variables. Treat it as a manual tool that needs a written recipe, not proof that every coffee improves under a long pre-brew.',
  milkNote: 'The separate 3.3 L steam tank allows steaming while the 1.1 L brew tank and saturated group handle espresso. Slayer publishes two steam-element possibilities across voltage configurations, 1,300 W or 2,000 W, which helps explain why regional power and recovery cannot be generalized. The independent video demonstrates milk steaming but does not provide standardized recovery, milk-temperature or texture measurements. Steam capacity is generous for home use and plausible for a very low-volume bar, while pitcher choice, tip cleanliness, pressure setting, milk and technique still decide texture. Higher-volume service needs an honest drink-sequence test rather than a boiler-size assumption.',
  workflowNote: 'Daily use is deliberately physical. Warm the group, lock dose and distribution, place a scale, enter restricted pre-brew, watch puck response, then move to full brew and stop by yield. The shot mirror helps reveal bottomless-portafilter behavior. There is no saved curve, volumetric stop or integrated scale, so repeatability belongs to the operator. Optional tray and reservoir arrangements matter only when the ordered configuration supports them. A shop should time its busiest complete sequence with one operator.',
  buildNote: 'Slayer publishes a 50 kg machine with independent PID tanks, saturated group, rotary-vane pump, wood actuators, shot mirror and a grouphead rated for one million cycles. That is a manufacturer component rating, not a complete-machine lifespan promise. Dealers differ on weight and dimensions. Use current factory envelope figures for planning, then obtain an exact build sheet and rating-plate confirmation.',
  featuresNote: 'The valuable features are the needle valve, three actuator positions, independent PID tanks, simultaneous brewing and steaming, shot mirror, rotary pump, hot water and extensive finish customization. The current factory page also lists an optional removable drip tray and external-reservoir capability. It does not promise stored electronic profiles, volumetric dosing, brew-by-weight, an app, automatic milk or a built-in grinder. Buyers comparing feature counts can miss the point: the Slayer premium pays for a particular mechanical interaction, build style and configurable installation, not maximum automation.',
  valueNote: 'Prima Coffee listed US$13,600 on September 25, 2026. Espresso Coffee Shop displayed €8,975.41 excluding tax for a 220 V listing, but region, tax, shipping and support differ. Neither is a universal price. Add the grinder, water treatment, circuit, plumbing, freight, installation and service reserve. Rocket R Nine One, Linea Mini, Lelit Bianca and Profitec Pro 700 solve overlapping jobs with different control philosophies.',
  ownerPattern: 'Selected owner discussions consistently frame the purchase around the needle valve rather than generic prestige. One Espresso Single Group owner values repeatable analog profiles and the ability to train others around a simple actuator sequence. Another long-term owner reported roughly 16,000 shots and no major failure while also describing smaller part issues, modifications and multiple design revisions. Comparison threads include both “rock solid” accounts and secondhand warnings. Together they create a list of questions about version, parts and local service, not a representative reliability rate.',
  ownerCaution: 'Community accounts span revisions, modifications, water, maintenance, volume and service access. A high-shot success story cannot guarantee another unit, and one difficult repair cannot establish prevalence. Ask for the serial-linked version, pump, modifications, water history, service invoices, warranty administrator and local technician.',
  maintenanceNote: 'Use Slayer’s support record and the exact supplied documentation for cleaning, water, backflushing, steam-wand care, screen and gasket service and technical intervals. Test source water before choosing treatment; scale, corrosion and level-sensing risk cannot be managed by a generic “soft water” slogan. Backflush and wipe on the documented schedule, purge the wand immediately, keep the drain clear and investigate leaks, electrical smells, pressure instability or pump changes promptly. Internal electrical, boiler, pump, needle-valve and safety work belongs with a qualified technician. Slayer’s Seattle training is designed for experienced technicians, not as a substitute for a local ownership plan.',
  dimensions: {
    espresso: dim(9.7, 'The saturated group and manually controlled needle valve offer unusually direct control over pre-brew and pressure development.', 'The capability rewards measured recipes and a capable grinder, but operator timing can vary from shot to shot.', 'Current factory design, independent retailer demonstration and bounded owner context; no Coffeedant measurements', ['Patented needle-valve pre-brew.', 'Three-position actuator controls restricted and full flow.', 'No saved electronic curve or Coffeedant extraction data.']),
    milk: dim(9.2, 'A separate 3.3 L steam tank provides substantial capacity while the brew tank remains independent.', 'Regional element power, pressure setting and operator technique change real recovery and texture.', 'Current factory tank and power records plus visual demonstration', ['3.3 L steam tank.', '1,300 W or 2,000 W regional steam element.', 'No standardized Coffeedant steam or milk measurements.']),
    workflow: dim(8.0, 'The actuator and shot mirror make profiling tactile and legible for a practiced operator.', 'No volumetric or brew-by-weight stop means every drink depends on timing, yield control and reset discipline.', 'Factory controls, independent demonstration and owner workflow reports', ['Three clear actuator positions.', 'Shot mirror supports visual diagnosis.', 'Manual yield and profile repeatability.']),
    build: dim(9.3, 'Independent tanks, saturated group hardware, rotary pumping and a 50 kg chassis create serious commercial-style construction.', 'Moving, installing and opening the machine require planning, and component ratings do not establish complete-machine lifespan.', 'Current official specifications with dealer conflicts recorded', ['110 lb / 50 kg factory figure.', 'Rotary-vane pump on the current page.', 'Factory group-cycle rating is not a reliability rate.']),
    features: dim(8.7, 'Flow control, dual PID tanks, shot mirror, water options and customization form a focused manual feature set.', 'Buyers seeking electronic profile replay, volumetrics, scales or apps must look elsewhere.', 'Current official feature list separated from configuration-dependent options', ['Needle valve and independent PIDs.', 'Optional removable tray and stated reservoir capability.', 'No stored profiles or automatic dosing.']),
    value: dim(6.8, 'The purchase is coherent for someone who specifically wants the Slayer extraction method and presentation.', 'At US$13,600 before infrastructure, a buyer who only needs excellent dual-boiler espresso has many less costly choices.', 'Dated US and EU dealer checks on September 25, 2026', ['$13,600 current US listing.', '€8,975.41 excluding tax on one 220 V EU listing.', 'Installation, grinder, water and service remain additional.']),
  },
  sources: [
    { label: 'Slayer Espresso Single Group product page', href: officialProduct, note: 'Current factory identity, standard finish, needle-valve flow control, independent tanks, rotary pump, dimensions, weight, power, water options and media.' },
    { label: 'Slayer support center', href: officialSupport, note: 'Current documentation, troubleshooting, parts, technical-support and warranty-claim routes; support requests require the machine serial number.' },
    { label: 'Prima Coffee Slayer Espresso Single Group listing', href: prima, note: 'Current US$13,600 price, voltage choices, drop-ship context, touchscreen and package claims checked September 25, 2026. Its direct-plumb wording conflicts with the factory reservoir statement.' },
    { label: 'iDrinkCoffeeCanada Single Group walkthrough', href: video, note: 'Independent retailer video published November 12, 2024, showing specifications, group controls, a shot and milk steaming without controlled performance measurements.' },
    { label: 'Espresso Coffee Shop 220 V listing', href: espressoCoffeeShop, note: 'EU price, tax basis, displayed stock, 220 V details, dimensions and pump context checked September 25, 2026. Price, inventory and import support are volatile.' },
    { label: 'Chris Coffee Slayer Espresso listing', href: chrisCoffee, note: 'Dealer version context describing the 2020 rotary-pump, solid-state relay, internal switch, display and removable-tray changes, plus seller-specific package and warranty language.' },
    { label: 'Slayer version history', href: officialVersions, note: 'Factory version context used to avoid treating older gear-pump or modified machines as the current standard configuration.' },
    { label: 'Slayer technical training', href: officialTraining, note: 'Factory technical-training scope for experienced technicians at Seattle headquarters; evidence that service skill should be planned rather than improvised.' },
    { label: 'Long-term Espresso Single Group owner discussion', href: ownerLongTerm, note: 'Self-selected report mentioning about 16,000 shots, revisions, modifications and smaller part issues without a major failure. One experience cannot establish incidence.' },
    { label: 'Recent Slayer ownership and profiling discussion', href: ownerCurrent, note: 'Current self-selected comparison including an Espresso Single Group owner’s comments on needle-valve profiles, repeatability and training.' },
    { label: 'Slayer, Steam and Linea Mini comparison discussion', href: ownerComparison, note: 'Mixed owner and secondhand reliability impressions used only to identify service questions, not to calculate a failure rate.' },
    { label: 'Historical small-cafe Single Group discussion', href: smallCafe, note: 'Older throughput discussion and historical company response about shared group and tank hardware. Used as context, not current capacity proof.' },
  ],
  comparisons: [
    { name: 'Slayer Espresso Single Group', quickDecision: 'Choose for patented manual needle-valve profiling when infrastructure, service and price are already acceptable.', priceClass: '$13,600 US check', dimensions: '18.5 × 23 × 13 in W×D×H', heating: '1.1 L brew and 3.3 L steam tanks', coffeeSetup: 'Saturated group and needle-valve pre-brew', milkWorkflow: 'Manual steam from independent tank', bestFor: 'Tactile Slayer profiling' },
    { name: 'Rocket R Nine One', href: '/espresso-machine/rocket-r-nine-one/', quickDecision: 'Choose when saved electronic pressure curves, reservoir flexibility and a lower price matter more than the Slayer actuator.', priceClass: '$6,990 US check', dimensions: '410 × 505 × 430 mm', heating: '1.9 L brew and 3.6 L steam boilers', coffeeSetup: 'Saturated group with pump-pressure profiles', milkWorkflow: 'Manual steam and large service boiler', bestFor: 'Saved and manual pressure profiles' },
    { name: 'La Marzocco Linea Mini', href: '/espresso-machine/la-marzocco-linea-mini/', quickDecision: 'Choose for a more conventional paddle workflow and broad brand familiarity when needle-valve control is not essential.', priceClass: 'Premium home commercial', dimensions: 'Check current regional specification', heating: 'Dual-boiler saturated-group platform', coffeeSetup: 'Conventional paddle-led extraction', milkWorkflow: 'Strong manual steam', bestFor: 'Familiar premium daily workflow' },
    { name: 'Lelit Bianca PL162T', href: '/espresso-machine/lelit-bianca-pl162t/', quickDecision: 'Spend far less for manual flow control, reservoir or plumbing flexibility and a smaller domestic footprint.', priceClass: 'Upper prosumer', dimensions: 'Check current regional specification', heating: 'Dual boiler', coffeeSetup: 'E61 group with manual flow paddle', milkWorkflow: 'Manual steam', bestFor: 'Value-oriented manual flow control' },
  ],
  comparisonNote: 'Compare control philosophy first, then exact voltage, pump, water feed, drain, warm-up routine, dimensions with actuators and portafilters, mass, dealer package, warranty administrator, technician access, grinder, water treatment and complete installed cost. A machine with “flow control” is not automatically equivalent to Slayer’s needle-valve sequence.',
  recommendations: [
    { kicker: 'Saved profiling', title: 'Rocket R Nine One', text: 'Choose editable electronic pressure curves and manual paddle control when repeatable replay matters more than Slayer’s mechanical ritual.', href: '/espresso-machine/rocket-r-nine-one/', linkLabel: 'Read Rocket R Nine One review' },
    { kicker: 'Commercial familiarity', title: 'La Marzocco Linea Mini', text: 'Compare a more conventional premium workflow and a widely recognized service ecosystem.', href: '/espresso-machine/la-marzocco-linea-mini/', linkLabel: 'Read Linea Mini review' },
    { kicker: 'Lower-cost flow control', title: 'Lelit Bianca PL162T', text: 'Get a dual boiler, manual flow paddle and flexible water setup for far less money and less mass.', href: '/espresso-machine/lelit-bianca-pl162t/', linkLabel: 'Read Lelit Bianca review' },
    { kicker: 'Conventional rotary dual boiler', title: 'Profitec Pro 700', text: 'Choose proven dual-boiler fundamentals when manual flow profiling is optional rather than central.', href: '/espresso-machine/profitec-pro-700/', linkLabel: 'Read Profitec Pro 700 review' },
  ],
  faqs: [
    { question: 'Is the Slayer Single Group a flow-profiling machine?', answer: 'Yes. Its patented needle valve restricts flow during pre-brew, and the three-position actuator moves between off, restricted pre-brew and full brew. The operator controls timing manually.' },
    { question: 'Does it save and replay a shot profile?', answer: 'No. It does not record and replay an electronic pressure or flow graph. Repeatability comes from a stable recipe, grinder, puck preparation, actuator timing and target yield.' },
    { question: 'How much does the current Slayer Single Group cost?', answer: 'Prima Coffee listed it at US$13,600 on September 25, 2026. An EU seller displayed €8,975.41 excluding tax for a 220 V listing. Region, tax, freight, customization, installation and support make those prices non-equivalent.' },
    { question: 'Can the Slayer Single Group run from a reservoir?', answer: 'The current factory page says its rotary-vane pump can draw from an external reservoir, while several dealer pages say direct plumb only. Obtain written confirmation for the exact pump, reservoir kit, drain setup and warranty before ordering.' },
    { question: 'How much counter space does it need?', answer: 'The factory body is 18.5 inches wide, 23 inches deep and 13 inches high, but those dimensions exclude overhanging portafilters, actuators and cup rails. Add hoses, drainage, ventilation and service access.' },
    { question: 'Can it brew and steam at the same time?', answer: 'Yes. Slayer describes independent brew and steam tanks and simultaneous shot and steam operation. Real recovery still depends on voltage, element configuration, pressure setting and drink sequence.' },
    { question: 'Is the current machine the same as older Slayer Single Groups?', answer: 'Not necessarily. Dealer and factory records describe revisions including a move from older gear-pump configurations to a rotary pump around 2020. Confirm the serial-linked version and modifications on any used machine.' },
    { question: 'Is it suitable for a small coffee shop?', answer: 'Possibly for genuinely low volume, but boiler size alone is not a capacity guarantee. Time the busiest complete drink sequence, confirm duty cycle and service coverage, and leave margin for cleaning, recovery and failures.' },
  ],
  finalTitle: 'Buy the extraction method only after solving the installation',
  finalVerdict: [
    'Slayer Espresso Single Group remains one of the clearest examples of a machine built around a specific extraction philosophy. The needle valve and actuator make pre-brew a tactile recipe variable, while independent tanks and the saturated group provide the commercial foundation.',
    'The ownership burden is equally specific. A US$13,600 listing, 110 lb mass, 23-inch depth, utilities, water treatment and revision-dependent details require more diligence than a normal countertop purchase. Dealer conflicts about plumbing and dimensions must be resolved on the exact order.',
    'Choose it when the Slayer workflow itself is the point and local service is real. Choose Rocket R Nine One for saved pressure curves, Linea Mini for a more conventional premium routine, or Lelit Bianca when manual flow control matters more than brand-specific execution.',
  ],
  video: { id: 'Yx_ZrQ-M3Rc', title: 'Slayer Espresso Single Group Espresso Machine', creator: 'iDrinkCoffeeCanada', published: '2024-11-12', note: 'Independent retailer video running 10 minutes 53 seconds. It demonstrates specifications, the grouphead and actuator, a shot and milk steaming, but it does not provide Coffeedant testing, controlled measurements or long-term reliability evidence.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#slayer-espresso-single-group-current-source-1">[source]</a> <a href="#slayer-espresso-single-group-current-source-3">[source]</a> <a href="#slayer-espresso-single-group-current-source-5">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#slayer-espresso-single-group-current-source-1">[source]</a> <a href="#slayer-espresso-single-group-current-source-4">[source]</a> <a href="#slayer-espresso-single-group-current-source-10">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#slayer-espresso-single-group-current-source-1">[source]</a> <a href="#slayer-espresso-single-group-current-source-4">[source]</a> <a href="#slayer-espresso-single-group-current-source-12">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#slayer-espresso-single-group-current-source-1">[source]</a> <a href="#slayer-espresso-single-group-current-source-3">[source]</a> <a href="#slayer-espresso-single-group-current-source-10">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#slayer-espresso-single-group-current-source-1">[source]</a> <a href="#slayer-espresso-single-group-current-source-5">[source]</a> <a href="#slayer-espresso-single-group-current-source-6">[source]</a> <a href="#slayer-espresso-single-group-current-source-7">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#slayer-espresso-single-group-current-source-1">[source]</a> <a href="#slayer-espresso-single-group-current-source-3">[source]</a> <a href="#slayer-espresso-single-group-current-source-7">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#slayer-espresso-single-group-current-source-3">[source]</a> <a href="#slayer-espresso-single-group-current-source-5">[source]</a> <a href="#slayer-espresso-single-group-current-source-6">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="slayer-owner-title"><h3 id="slayer-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>The needle valve is the reason to own it</strong><p>One current Espresso Single Group owner describes repeatable analog profiles and an actuator sequence that can be taught to other users. That supports the workflow claim, not a universal taste advantage.</p></li>
    <li><strong>High use can coexist with repair and revision questions</strong><p>One long-term owner reported around 16,000 shots without a major failure while also mentioning smaller failures, modifications and design revisions. It is one machine history, not a population result.</p></li>
    <li><strong>Service reports are mixed</strong><p>Comparison discussions include both “rock solid” ownership and secondhand warnings about challenges. The responsible conclusion is to verify the exact version and local service, not to declare the model reliable or unreliable.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeSlayerSingleGroupReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
