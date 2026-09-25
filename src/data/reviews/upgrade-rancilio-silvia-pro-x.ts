import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const officialNA = 'https://www.ranciliogroupna.com/equipment/rancilio-silvia-pro-x/';
const officialGlobal = 'https://www.ranciliogroup.com/rancilio/silvia-pro-x/';
const specSheet = 'https://www.ranciliogroupna.com/wp-content/uploads/2024/09/SPEC-HL_SPX.pdf';
const manual = 'https://www.ranciliogroupna.com/wp-content/uploads/2026/03/Manual-User-Silvia-Pro-X-2026-01.pdf';
const clive = 'https://clivecoffee.com/products/rancilio-silvia-pro-x-espresso-machine';
const wholeLatteLove = 'https://www.wholelattelove.com/products/rancilio-silvia-pro-x-dual-boiler-espresso-machine';
const seattleCoffeeGear = 'https://www.seattlecoffeegear.com/products/rancilio-silvia-pro-x-espresso-machine';
const independentReview = 'https://www.nicolebattefeld.com/post/rancilio-silvia-pro-x-review';
const currentIndependentReview = 'https://www.coffeeness.de/en/rancilio-silvia-pro-x-review/';
const video = 'https://www.youtube.com/watch?v=PolUqU-ieSA';
const ownerYear = 'https://www.reddit.com/r/espresso/comments/1g6piac/a_year_with_my_rancilio_silvia_pro_x/';
const ownerFit = 'https://www.reddit.com/r/espresso/comments/161syur/convince_me_not_to_get_a_rancilio_silvia_pro_x/';
const ownerTroubleshooting = 'https://www.reddit.com/r/ranciliosilvia/comments/1gkbd1n/completely_unhappy_with_silvia_pro_x_its_making/';
const lelitOfficial = 'https://www.lelit.com/product/elizabeth-pl92t/';
const ascasoOfficial = 'https://ascaso-usa.com/products/steel-duo-pid-programmable-espresso-machine-w-volumetric-conrtroller-dual-thermoblock-120v-black';
const quickMillCurrent = 'https://espressooutlet.com/products/quick-mill-qm67-evo-espresso-machine';
const image = 'https://www.seattlecoffeegear.com/cdn/shop/files/RANCILIOSILVIAPROXESPRESSOMACHINEnew.jpg?v=1711387173';

const profile: UpgradeReviewProfile = {
  key: 'rancilio-silvia-pro-x-na-current',
  slug: '/espresso-machine/rancilio-silvia-pro-x/',
  productId: 'CD-EM-000235',
  brand: 'Rancilio',
  model: 'Silvia Pro X',
  sku: 'Current North American Silvia Pro X, 110 V / 15 A; color-specific article number not confirmed',
  category: 'Compact reservoir-fed dual-boiler semi-automatic espresso machine',
  brandPath: '/rancilio/',
  title: 'Rancilio Silvia Pro X review: current US price, soft infusion and limits',
  description: 'Research-led Rancilio Silvia Pro X review covering the current North American 110 V model, dual boilers, soft infusion, dimensions, US price, owner evidence and realistic alternatives.',
  verdictLabel: 'A narrow dual boiler with serious steam and direct controls, but no volumetric shot stop or plumbing path',
  verdict: 'The current North American Silvia Pro X combines a 0.3 L insulated brass coffee boiler, 1 L steam boiler, two PID controllers, 58 mm commercial-style brass group, pressure gauge, automatic shot timer and adjustable zero-to-six-second soft infusion. Rancilio Group North America, Clive Coffee, Whole Latte Love and Seattle Coffee Gear all displayed US$2,195 on September 25, 2026. Its 9.8-inch width is unusually useful in a tight station, but the 16.5-inch depth, top-filled 2 L tank and 44 lb body still demand planning. Buy it for manual espresso plus repeated milk drinks, not for automatic dosing, flow profiling, direct plumbing or a simplified one-button interface.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores apply to the current North American 110 V Silvia Pro X documented by Rancilio Group North America and the January 2026 user manual. Four colors share the current family, but a color-specific article number was not exposed in the reviewed official records, so none is invented. Seller language sometimes calls soft infusion pre-infusion; this review keeps the factory distinction that it is an ambient-pressure wetting stage adjustable from zero to six seconds.',
  image,
  imageAlt: 'Seattle Coffee Gear product photograph of the current Rancilio Silvia Pro X espresso machine',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: { label: 'Current North American reference price', msrp: '$2,195', typical: 'Rancilio Group North America, Clive Coffee, Whole Latte Love and Seattle Coffee Gear displayed US$2,195 on September 25, 2026. Seattle Coffee Gear showed limited stock for one color while other colors were sold out. Confirm exact finish, stock, warranty, return terms and included accessories before purchase.', currency: 'USD', numeric: '2195', checked: 'September 25, 2026' },
  links: [
    { label: 'Check the current factory price and specifications', href: officialNA, note: 'US$2,195 factory reference, current model identity, boilers, group, tank, soft infusion and colors checked September 25, 2026', primary: true },
    { label: 'Compare a current authorized-retailer listing', href: clive, note: 'US$2,195 listing with dimensions, water system, service resources and package context checked September 25, 2026' },
  ],
  facts: [
    { label: 'Scored model', value: 'Current North American Rancilio Silvia Pro X, 110 V / 15 A configuration' },
    { label: 'Heating', value: 'Independent 0.3 L insulated brass coffee boiler and 1 L steam boiler with one PID controller each' },
    { label: 'Coffee setup', value: '58 mm ergonomic portafilter, commercial-style brass group, pressure gauge, manual rocker control and automatic shot timer' },
    { label: 'Soft infusion', value: 'Ambient-pressure puck wetting adjustable from 0 to 6 seconds before pump pressure rises' },
    { label: 'Milk system', value: 'Articulating stainless manual steam wand supplied from the dedicated steam boiler' },
    { label: 'Water and pump', value: '2 L removable top-access reservoir, vibration pump, low-water alert; no direct plumbing or drain connection' },
    { label: 'Fit and power', value: '9.8 W × 16.5 D × 15.3 H in, about 44 lb, 110 V, 1000 W, 15 A' },
  ],
  quickAnswers: [
    { question: 'What is the current US price?', answer: 'The factory and three authorized-retailer pages displayed US$2,195 on September 25, 2026.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. Independent coffee and steam boilers support simultaneous manual brewing and steaming.' },
    { question: 'Is soft infusion true pump-pressure pre-infusion?', answer: 'No. Rancilio describes an ambient-pressure wetting stage before normal pump pressure, adjustable from zero to six seconds.' },
    { question: 'Can it be plumbed?', answer: 'No current North American record documents a direct-water or drain connection. It is a removable-reservoir machine.' },
    { question: 'Does it stop shots automatically?', answer: 'No. The display starts an automatic timer, but the operator stops the brew rocker and should watch beverage mass.' },
    { question: 'Who should consider it?', answer: 'A hands-on user who wants a narrow dual boiler, strong steam reserve, direct temperature adjustment and conventional service access.' },
  ],
  bestFor: ['Espresso and milk-drink households that need both boilers ready at the same time', 'Narrow counters where a 9.8-inch body matters more than shallow depth', 'Buyers who prefer simple rocker controls, direct PID settings and serviceable conventional parts'],
  avoidIf: ['You want automatic dosing, automatic milk, app control, flow profiling or brew-by-weight', 'You cannot provide top clearance for the reservoir or enough depth for the 16.5-inch chassis and portafilter', 'You need direct plumbing, a drainable tray, a rotary pump or a nearly silent workflow'],
  pros: ['Dual boilers and dual PIDs separate coffee temperature from steam demand', 'Narrow stainless chassis fits stations that cannot accept a wide E61 machine', 'Zero-to-six-second soft infusion, pressure gauge and timer add useful feedback', 'Current factory support includes a 2026 manual, spec sheet and North American service channel'],
  cons: ['Manual shot stop means the timer does not replace a scale or attention', 'Vibration pump and compact steel case are not the quietest route', 'Shallow drip tray and top-fill reservoir recur in owner-fit discussions', 'Soft infusion is limited ambient-pressure wetting, not adjustable pump-pressure or flow profiling'],
  architecture: 'a current North American 110 V semi-automatic built around a 0.3 L insulated brass coffee boiler, 1 L steam boiler, one PID controller per boiler, 58 mm commercial-style brass group, vibration pump, 2 L removable reservoir, pressure gauge, automatic shot timer, adjustable zero-to-six-second ambient-pressure soft infusion, manual brew rocker, manual hot-water control and articulating stainless steam wand',
  identityBoundary: 'The Product schema and scores refer to the current North American 110 V Silvia Pro X family supported by the January 2026 user manual and current factory page. They do not silently cover the original single-boiler Silvia, the earlier Silvia Pro without the X updates, 220 to 240 V regional versions, modified machines, open-box units or a specific color article number. Four finishes are current, but no color-specific SKU was confirmed in the reviewed official sources.',
  primaryStrength: 'Silvia Pro X puts independent temperature control and substantial manual steam in one of the narrowest current dual-boiler bodies.',
  primaryLimit: 'Its manual shot stop, top-fill tank, vibration pump, compact tray and basic coded display keep the workflow deliberately hands-on.',
  setupNote: 'Confirm the delivered rating plate, North American plug, finish, serial, package, warranty and return terms before discarding the box. The current spec sheet lists 9.8 inches of width, 16.5 inches of depth and 15.3 inches of height. Add working room for the portafilter, steam wand, rear cord, cup tray and top reservoir access. The 2026 manual calls for a stable level counter, about 2 L of water, correct softening practice and an extensive first-use rinse. Test the actual water and follow the seller or technician guidance instead of assuming any bottled or filtered water is suitable.',
  espressoNote: 'The dedicated 0.3 L brass coffee boiler, PID, Pt1000 probe, brass group, 58 mm basket platform, pressure gauge and timer provide a clear manual espresso toolset. Temperature selection does not automate dose, grind, distribution, tamp, yield or shot stop. The timer begins with brewing, while a separate scale remains the practical way to control beverage mass. Soft infusion can wet the puck for up to six seconds at ambient pressure, which is useful to test, but it cannot reproduce pump-pressure profiling or flow-control recipes. Coffeedant did not measure temperature stability, pressure, flow, warm-up, recovery or taste.',
  milkNote: 'The independent 1 L steam boiler is the machine\'s most important advantage over single boilers and thermoblock hybrids. It remains available while coffee brewing proceeds, and current independent reviews consistently describe strong steam for the size. The manual wand still needs a purge, correct pitcher depth, immediate wiping and a final purge. Steam pressure can be managed through the display, but milk type, starting volume, tip condition and technique change the result. No universal steaming time or capacity claim is made.',
  workflowNote: 'The daily sequence is direct: warm the machine and portafilter, prepare the basket, choose the soft-infusion duration, start the rocker, watch time and beverage mass, stop manually, knock out, rinse and wipe. Steam can follow or overlap the shot. The display also exposes temperature, water alert, a delayed power-on timer and guided cleaning functions. This is faster to understand than a large menu system, but codes and button combinations still reward keeping the manual nearby. Reservoir filling and tray emptying remain physical chores.',
  buildNote: 'Rancilio documents a stainless body, insulated boilers, brass coffee boiler and group, commercial-style portafilter, articulating stainless wand and removable panels. Clive publishes a current parts diagram and service resources, which improves repair planning without proving future parts cost or turnaround. The 44 lb body is substantial for its width and should be lifted with care. Boiler, pump, solenoid, pressure and mains-voltage work belong with a qualified technician.',
  featuresNote: 'The practical feature set is focused: two PIDs, direct coffee temperature adjustment, steam setting, pressure gauge, automatic shot timer, delayed power-on timer, low-water alert, guided backflush cycle and boiler-emptying functions in the 2026 manual. There is no volumetric shot button, rotary pump, direct plumbing, app, profile storage, integrated grinder or automatic milk. Four colors change appearance, not scored performance.',
  valueNote: 'At US$2,195, Silvia Pro X sits above Lelit Elizabeth and near other compact premium dual-boiler or dual-thermoblock machines. Value comes from the narrow body, large steam boiler, conventional controls and current support, not from feature count alone. Lelit Elizabeth offers more programmable button logic for less money. Ascaso Steel Duo PID favors quick thermoblock readiness and volumetric convenience but has different electrical and steam tradeoffs. Quick Mill QM67 Evo offers E61 styling and a larger traditional chassis for more money. Include grinder, scale, water treatment, cleaning supplies and local service in the real budget.',
  ownerPattern: 'Owner discussions repeatedly praise steam strength, temperature control, narrow width and the absence of brew-to-steam waiting. They also repeat fit complaints about the shallow tray, top reservoir access, vibration-pump sound and manual control. Some owners find those issues minor in a low-volume routine; others buy an aftermarket tray or prefer a different machine. Individual posts also show how grinder, coffee, water, dose and ratio can be mistaken for machine faults. These accounts set questions for inspection and setup, not failure rates.',
  ownerCaution: 'Community records combine different production dates, markets, grinders, waters, baskets, soft-infusion settings, maintenance histories and skill levels. One satisfied year does not prove long-term durability, and a malfunction or difficult dialing-in thread does not establish family incidence. A used unit should be checked by rating plate and serial, then observed heating both boilers, building pressure, filling correctly, brewing, steaming, draining and completing its cleaning functions without leaks or error codes.',
  maintenanceNote: 'Follow the 2026 manual for the guided F.01 cleaning cycle, blind-filter detergent process, group-gasket brushing, wand cleaning and safe boiler emptying. Flush loose coffee from the group, wipe and purge the wand immediately after milk, empty the compact tray before it overfills, refresh tank water and inspect hoses and seals. Use tested water and the correct treatment plan. Descaling, internal leaks, pressure faults and electrical repairs should be handled by an authorized or qualified service provider.',
  dimensions: {
    espresso: { score: 8.8, claim: 'A dedicated PID coffee boiler, brass group, 58 mm platform, pressure gauge and timer support repeatable manual espresso work.', consequence: 'Dose, grind, puck preparation, beverage mass and shot stop remain fully manual, while soft infusion is limited to ambient-pressure wetting.', status: 'Current factory records and independent context; no Coffeedant testing', signals: ['0.3 L insulated brass coffee boiler.', 'Pt1000 probe and PID.', '58 mm group, gauge and timer.'] },
    milk: { score: 9.0, claim: 'The independent 1 L steam boiler gives a narrow home machine substantial simultaneous milk capability.', consequence: 'Milk texture still depends on purge, tip cleanliness, pitcher position and operator technique.', status: 'Current factory specifications and bounded independent reports', signals: ['1 L steam boiler.', 'Independent steam PID.', 'Simultaneous brew and steam.'] },
    workflow: { score: 8.4, claim: 'Rocker controls, timer, delayed power-on and guided cleaning keep the manual routine clear.', consequence: 'The operator still stops every shot, fills from above and manages a compact tray.', status: 'January 2026 manual and current product pages', signals: ['Automatic shot timer.', 'Delayed power-on timer.', '2 L reservoir and low-water alert.'] },
    build: { score: 8.7, claim: 'Stainless bodywork, brass coffee hardware and current service documentation support a conventional repair path.', consequence: 'The 44 lb chassis, vibration pump and pressurized internals still require careful handling and competent service.', status: 'Factory and retailer construction records; no Coffeedant teardown', signals: ['Stainless body.', 'Brass boiler and group.', 'Current manual and parts resources.'] },
    features: { score: 8.3, claim: 'Dual PIDs, soft infusion, gauge, timer and cleaning functions cover the controls that matter most for manual use.', consequence: 'There is no volumetric stop, plumbing, flow control, app, grinder or automatic milk.', status: 'Current official page and 2026 manual', signals: ['0 to 6 second soft infusion.', 'Two PIDs.', 'Pressure gauge and timer.'] },
    value: { score: 8.2, claim: 'The current price buys strong steam, independent temperatures and a narrow conventional chassis.', consequence: 'Lower-priced or more programmable rivals can fit buyers who do not prioritize Rancilio construction and steam reserve.', status: 'Four current US references checked September 25, 2026', signals: ['US$2,195 factory reference.', 'Multiple authorized-retailer matches.', 'Current North American support.'] },
  },
  sources: [
    { label: 'Rancilio Group North America Silvia Pro X page', href: officialNA, note: 'Current North American identity, US$2,195 and CAD$3,405 factory prices, colors, 0.3 L and 1 L boilers, 2 L reservoir, brass group, Pt1000 probe, 58 mm package and soft infusion checked September 25, 2026.' },
    { label: 'Rancilio Group North America Silvia Pro X spec sheet', href: specSheet, note: 'Current 110 V, 1000 W, 15 A configuration and 9.8 W × 16.5 D × 15.3 H inch dimensions, plus manual brew and hot-water controls.' },
    { label: 'Rancilio January 2026 Silvia Pro X user manual', href: manual, note: 'Current setup, display functions, first-use rinse, softening, brewing, steam, hot water, guided cleaning, error, boiler-emptying and safety instructions.' },
    { label: 'Rancilio global Silvia Pro X product page', href: officialGlobal, note: 'Global family identity, two PID controllers, dual boilers, zero-to-six-second soft infusion, display, timer, delayed power-on function, 25 cm width and four colors.' },
    { label: 'Clive Coffee current Silvia Pro X listing', href: clive, note: 'US$2,195 listing, vibration pump, reservoir-only water path, dimensions, materials, parts diagram and service resources checked September 25, 2026.' },
    { label: 'Whole Latte Love current Silvia Pro X listing', href: wholeLatteLove, note: 'US$2,195 current price, two-year manufacturer warranty listing, current package, soft-infusion explanation and product comparison context checked September 25, 2026.' },
    { label: 'Seattle Coffee Gear current Silvia Pro X listing', href: seattleCoffeeGear, note: 'US$2,195 price, color-specific stock signal, 9.8-inch width, 16.5-inch depth, 15.3-inch height, 15 A listing, package and owner-review count checked September 25, 2026.' },
    { label: 'Nicole Battefeld Silvia Pro X review', href: independentReview, note: 'Independent barista review published April 26, 2022, covering narrow footprint, brushed finish, controls and hands-on workflow. It is not current-price evidence.' },
    { label: 'Coffeeness Silvia Pro X review', href: currentIndependentReview, note: 'Current independent review context for dual-PID operation, steam, pressure gauge, timer, backflush and auto-on features. Measurements and opinions are attributed, not adopted as Coffeedant tests.' },
    { label: 'Seattle Coffee Gear Silvia Pro X Crew Review video', href: video, note: 'Unique exact-model retailer demonstration published December 30, 2021. It shows controls, workflow and machine use but is not Coffeedant testing or current-price evidence.' },
    { label: 'Reddit: one year with Silvia Pro X', href: ownerYear, note: 'Self-selected owner follow-up on routine and ownership fit. It cannot establish durability or average service experience.' },
    { label: 'Reddit Silvia Pro X buyer-fit discussion', href: ownerFit, note: 'Multi-owner context on sound, tray size, plumbing limits, steam, auto-on and alternatives. Reports are anecdotal and configuration-dependent.' },
    { label: 'Reddit Silvia Pro X troubleshooting discussion', href: ownerTroubleshooting, note: 'Troubleshooting context showing the interaction among grinder, coffee, water, ratio, settings and possible machine faults. It provides no failure denominator.' },
    { label: 'Lelit official Elizabeth page', href: lelitOfficial, note: 'Current compact dual-boiler comparison used for programmable workflow and buyer-fit contrast.' },
    { label: 'Ascaso USA Steel Duo PID page', href: ascasoOfficial, note: 'Current dual-thermoblock comparison used for quick-readiness and volumetric-workflow contrast.' },
    { label: 'Espresso Outlet Quick Mill QM67 Evo page', href: quickMillCurrent, note: 'Current specialist listing used for US configuration, architecture and buyer-fit contrast.' },
  ],
  comparisons: [
    { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', quickDecision: 'Choose the narrow conventional dual boiler for strong steam, direct PID control and current Rancilio support.', priceClass: 'US$2,195 current reference', dimensions: '9.8 W × 16.5 D × 15.3 H in', heating: '0.3 L brass coffee and 1 L steam boilers', coffeeSetup: '58 mm group, gauge, timer and soft infusion', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Narrow dual-boiler station' },
    { name: 'Lelit Elizabeth PL92T', href: '/espresso-machine/lelit-elizabeth/', quickDecision: 'Choose richer button programming and a lower current price when steam reserve is less important.', priceClass: 'Lower compact dual-boiler class', dimensions: 'Wider but shallower compact body', heating: 'PID dual boiler', coffeeSetup: '58 mm group with programmable buttons and preinfusion choices', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Programmable compact workflow' },
    { name: 'Ascaso Steel Duo PID', href: '/espresso-machine/ascaso-steel-duo-pid/', quickDecision: 'Choose fast thermoblock readiness and volumetric convenience after confirming the exact North American circuit.', priceClass: 'Similar premium compact class', dimensions: 'Wider, shallower steel chassis', heating: 'Independent brew and steam thermoblocks', coffeeSetup: '58 mm PID platform with volumetric controls', milkWorkflow: 'Simultaneous thermoblock steam', bestFor: 'Short notice daily use' },
    { name: 'Quick Mill QM67 Evo', href: '/espresso-machine/quick-mill-qm67-evo/', quickDecision: 'Choose an E61 group and traditional lever ritual when more width, warm-up and price are acceptable.', priceClass: 'US$2,495 current reference', dimensions: '11.25 W × 17.75 D × 16.25 H in', heating: 'PID dual boiler', coffeeSetup: '58 mm E61 with vibration pump', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Traditional E61 workflow' },
  ],
  comparisonNote: 'Choose the daily control model before comparing finishes. Silvia Pro X is the narrow, strong-steam conventional dual boiler. Elizabeth emphasizes programmable buttons, Steel Duo emphasizes fast thermoblock readiness, and QM67 Evo preserves E61 ritual. Then compare circuit, depth, reservoir access, tray, grinder, water, service and written warranty.',
  recommendations: [
    { kicker: 'More programmable dual boiler', title: 'Lelit Elizabeth PL92T', text: 'Choose richer button logic and a lower entry price when a smaller steam boiler fits the household.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read Lelit Elizabeth review', featured: true },
    { kicker: 'Fast thermoblock alternative', title: 'Ascaso Steel Duo PID', text: 'Choose faster readiness and volumetric controls after verifying the exact circuit and regional version.', href: '/espresso-machine/ascaso-steel-duo-pid/', linkLabel: 'Read Ascaso Steel Duo PID review' },
    { kicker: 'Traditional E61 alternative', title: 'Quick Mill QM67 Evo', text: 'Choose the exposed E61 group and lever ritual when a larger body and longer warm-up are welcome.', href: '/espresso-machine/quick-mill-qm67-evo/', linkLabel: 'Read Quick Mill QM67 Evo review' },
    { kicker: 'Larger E61 dual boiler', title: 'Profitec Pro 600', text: 'Choose a larger traditional E61 platform when local Profitec support and its control layout fit better.', href: '/espresso-machine/profitec-pro-600/', linkLabel: 'Read Profitec Pro 600 review' },
  ],
  faqs: [
    { question: 'What is the current Rancilio Silvia Pro X price?', answer: 'Rancilio Group North America, Clive Coffee, Whole Latte Love and Seattle Coffee Gear all displayed US$2,195 on September 25, 2026.' },
    { question: 'Can Silvia Pro X brew and steam at the same time?', answer: 'Yes. It has independent coffee and steam boilers with separate PID controllers.' },
    { question: 'How does soft infusion work?', answer: 'The machine wets the puck with ambient-pressure boiler water for zero to six seconds before the vibration pump raises pressure. It is not adjustable-pressure profiling.' },
    { question: 'Does it stop a shot automatically?', answer: 'No. The display times the shot automatically, but the operator stops brewing and should use a scale when beverage mass matters.' },
    { question: 'How large is it?', answer: 'The current North American spec sheet lists 9.8 inches wide, 16.5 inches deep and 15.3 inches high. Allow extra depth for the portafilter and top clearance for reservoir filling.' },
    { question: 'Can it be plumbed?', answer: 'No current North American factory or seller record documents direct plumbing or a drainable tray for the standard Silvia Pro X.' },
    { question: 'What is the electrical requirement?', answer: 'The current North American spec sheet lists 110 V, 1000 W and 15 A. The delivered rating plate and local electrical requirements govern.' },
    { question: 'What water should it use?', answer: 'Test the water and follow the delivered manual, warranty and qualified service guidance. Use a compatible treatment plan rather than assuming bottled, distilled or heavily softened water is automatically correct.' },
  ],
  finalTitle: 'Choose Silvia Pro X for narrow dual-boiler control and strong manual steam',
  finalVerdict: [
    'Silvia Pro X is a focused current machine: independent PID boilers, a 58 mm brass group, pressure feedback, timer and adjustable soft infusion inside a narrow stainless body.',
    'The compromise is equally clear. Shots stop manually, the pump is vibratory, the tray is compact, the reservoir fills from above and there is no plumbing, flow control or automation layer.',
    'At US$2,195, buy it when steam reserve, narrow width and conventional service matter. Choose Elizabeth for more programming, Steel Duo for quicker thermoblock readiness or QM67 Evo for E61 ritual.',
  ],
  video: { id: 'PolUqU-ieSA', title: 'Rancilio Silvia Pro X Espresso Machine | Crew Review', creator: 'Seattle Coffee Gear', published: '2021-12-30', note: 'Unique exact-model independent retailer demonstration covering controls, setup and drink workflow. It is not Coffeedant testing, a current-price record or a controlled performance benchmark.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#rancilio-silvia-pro-x-na-current-source-1">[source]</a> <a href="#rancilio-silvia-pro-x-na-current-source-3">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#rancilio-silvia-pro-x-na-current-source-1">[source]</a> <a href="#rancilio-silvia-pro-x-na-current-source-8">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#rancilio-silvia-pro-x-na-current-source-1">[source]</a> <a href="#rancilio-silvia-pro-x-na-current-source-9">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#rancilio-silvia-pro-x-na-current-source-3">[source]</a> <a href="#rancilio-silvia-pro-x-na-current-source-7">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#rancilio-silvia-pro-x-na-current-source-1">[source]</a> <a href="#rancilio-silvia-pro-x-na-current-source-5">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#rancilio-silvia-pro-x-na-current-source-3">[source]</a> <a href="#rancilio-silvia-pro-x-na-current-source-4">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#rancilio-silvia-pro-x-na-current-source-1">[source]</a> <a href="#rancilio-silvia-pro-x-na-current-source-16">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="rancilio-silvia-pro-x-owner-title"><h3 id="rancilio-silvia-pro-x-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Narrow width and steam reserve drive satisfaction</strong><p>Owners commonly value the compact width, independent boilers and milk pace. Those advantages are strongest in households making several espresso-based milk drinks.</p></li>
    <li><strong>The tray, top tank and pump sound divide buyers</strong><p>Some owners consider the compact tray and reservoir access minor chores. Others use an aftermarket tray or prefer a different body. Counter layout and drink volume decide which experience is more relevant.</p></li>
    <li><strong>Dialing-in problems are not automatic failure evidence</strong><p>Troubleshooting threads repeatedly involve grinder calibration, coffee age, water, dose, ratio, temperature and puck preparation alongside possible machine faults. A structured check is more useful than assuming either user error or defective hardware.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeRancilioSilviaProXReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
