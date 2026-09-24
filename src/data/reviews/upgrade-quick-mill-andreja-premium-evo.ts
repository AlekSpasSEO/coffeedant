import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const quickMill = 'https://www.quickmill.it/en/';
const chrisCoffee = 'https://www.chriscoffee.com/products/quick-mill-andreja-premium-evo';
const manuals = 'https://www.chriscoffee.com/pages/product-manuals';
const manual = 'https://shopify-er.s3.amazonaws.com/resources/1354518134820/manual.pdf';
const firstInCoffee = 'https://www.1stincoffee.com/quickmill-andreja-premium.htm';
const espressoOutlet = 'https://espressooutlet.com/products/quick-mill-andreja-premium-evo-espresso-machine';
const europeanListing = 'https://naturbohne.de/en/products/quick-mill-0980-andreja-premium-evo';
const video = 'https://www.youtube.com/watch?v=voHnJjJzgIY';
const buyerGuide = 'https://www.home-barista.com/andreja-buyers-guide-conclusion.html';
const readyLight = 'https://www.home-barista.com/espresso-machines/quick-mill-andreja-ready-light-t60854-10.html';
const ownerFit = 'https://www.reddit.com/r/espresso/comments/mlhd3n/thoughts_on_the_quick_mill_andreja_premium_evo/';
const usedValue = 'https://www.reddit.com/r/espresso/comments/12i2i2q/is_750_a_good_price_for_a_quick_mill_andreja/';
const repair = 'https://www.reddit.com/r/espresso/comments/1ft8z20/purchased_broken_secondhand_machine_quickmill/';
const directConnect = 'https://www.chriscoffee.com/blogs/espresso-machine-faq/andreja-premium-how-to-install-the-direct-connect-kit';
const image = 'https://espressooutlet.com/cdn/shop/files/andreja-hero.webp?v=1709840771&width=720';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-andreja-premium-evo-na',
  slug: '/espresso-machine/quick-mill-andreja-premium-evo/',
  productId: 'CD-EM-000227',
  brand: 'Quick Mill',
  model: 'Andreja Premium Evo 0980P-A',
  sku: '0980P-A North American 110 V pressurestat configuration',
  category: 'Reservoir-fed E61 heat-exchanger espresso machine',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Andreja Premium Evo review: current price, HX workflow and version boundaries',
  description: 'Research-led Quick Mill Andreja Premium Evo review covering North American 0980P-A identity, E61 heat-exchanger workflow, current price, owner evidence, service and alternatives.',
  verdictLabel: 'A current traditional heat exchanger for milk-heavy routines, with no PID shortcut',
  verdict: 'Andreja Premium Evo 0980P-A is a manual E61 heat exchanger built around a 1.8 L boiler, Sirai pressurestat, 3 L reservoir and 52 W vibration pump. It can brew and steam together, but the North American machine does not document a PID, shot timer, rotary pump or factory plumbing. Chris Coffee and 1st in Coffee each listed it in stock at $1,995 on September 24, 2026. Choose it for traditional HX rhythm, strong seller support and service access, not for digital temperature control or compact-machine speed.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores cover North American 110 V product ID 0980P-A. Earlier Andreja machines, regional 0980 PID versions, owner-plumbed units and machines fitted with flow control or joystick valves are context, not silent equivalents.',
  image,
  imageAlt: 'Espresso Outlet three-quarter product view of the current Quick Mill Andreja Premium Evo 0980P-A E61 heat-exchanger machine',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: { label: 'Current US price', msrp: '$1,995', typical: 'Chris Coffee and 1st in Coffee each displayed $1,995 and in-stock status on September 24, 2026. Seller warranty and fulfillment terms differ. Used value depends on generation, voltage, water history, scale, pressurestat and heating condition, pump health, E61 service, accessories and modifications.', currency: 'USD', numeric: '1995', checked: 'September 24, 2026' },
  links: [
    { label: 'Check Chris Coffee price and stock', href: chrisCoffee, note: '$1,995 in-stock listing, SKU 0980P-A, North American specification, two-year seller warranty and importer support checked September 24, 2026', primary: true },
    { label: 'Open the Andreja manual index', href: manuals, note: 'Current Chris Coffee manual index links the Andreja Premium Evo operating manual; confirm revision and regional applicability before service' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Andreja Premium Evo, SKU 0980P-A, North American 110 V pressurestat version' },
    { label: 'Brew system', value: '58 mm E61 thermosiphon group with one heat-exchanger boiler for simultaneous brewing and steaming' },
    { label: 'Boiler control', value: 'Sirai mechanical pressurestat and dual analog gauges; no documented PID on the scored US SKU' },
    { label: 'Water and pump', value: '3 L bottom-fed reservoir, 52 W Ulka vibration pump with Pulsar dampener; reservoir-only stock configuration' },
    { label: 'Fit', value: '11.5 W × 17.5 D × 16 H in with rail, about 46 lb; allow top access for filling' },
    { label: 'Power', value: 'Checked North American version: 110 V, 1,400 W, 15 A; verify rating plate and circuit' },
    { label: 'Current status', value: '$1,995 and in stock at two checked US specialists on September 24, 2026' },
  ],
  quickAnswers: [
    { question: 'Is Andreja Premium Evo still current?', answer: 'Yes in the checked US specialist channel. Chris Coffee and 1st in Coffee both showed SKU 0980P-A in stock at $1,995 on September 24, 2026, although it was absent from Quick Mill\'s current home-page lineup.' },
    { question: 'Does the US model have PID?', answer: 'Not in the authoritative 0980P-A record used here. It uses a Sirai pressurestat. Some regional 0980 versions and retailer tables mention PID or a timer, so match the rating plate and controls before buying.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. Its heat exchanger supplies brew water through the E61 circuit while the main boiler maintains steam and hot-water pressure.' },
    { question: 'Can it be plumbed in?', answer: 'Treat the current base machine as reservoir-only. Chris Coffee says the old direct-connect kit has not been available since 2020. Any plumbed example is a separate modification requiring inspection.' },
    { question: 'Does it include flow control?', answer: 'No factory flow-control device is documented for the base 0980P-A. An E61 kit may be offered separately, with its installer, calibration and warranty effect verified.' },
    { question: 'Who should consider it?', answer: 'A buyer making frequent milk drinks who accepts E61 warm-up, cooling-flush judgment, manual shot stopping and mechanical pressurestat control.' },
  ],
  bestFor: ['Households making several espresso and milk drinks in one session', 'Buyers who value a traditional E61 heat exchanger, analog gauges and serviceable controls', 'Owners with counter depth and top-fill clearance for a 46 lb reservoir machine'],
  avoidIf: ['You want independent brew and steam temperatures, PID control or a built-in shot timer', 'You need a stock rotary-pump plumbed machine or near-silent operation', 'You prefer rapid cold-start readiness and minimal heat-exchanger temperature management'],
  pros: ['Heat exchanger supports brewing and steaming at the same time', 'Current US stock and importer-backed service record reduce availability uncertainty', 'E61 group, standard 58 mm tools and conventional components support long ownership', 'Three-liter reservoir, dual gauges and strong steam fit multi-drink sessions'],
  cons: ['Pressurestat control provides less direct brew-temperature feedback than a dual-boiler PID', 'E61 mass and a nearly two-liter boiler require warm-up and stable routine', 'Vibration pump and reservoir-only base configuration limit plumbing and noise expectations', 'Regional specifications and older 1.6 L records make identity checking essential'],
  architecture: 'a reservoir-fed E61 heat exchanger with a current importer-listed 1.8 L T.E.A.-coated boiler, Sirai pressurestat, 3 L bottom-fed tank, 52 W Ulka vibration pump, Pulsar dampener, dual analog gauges, three-way group, no-burn steam and hot-water arms, low-water sensing and 1,400 W North American heating element',
  identityBoundary: 'The Product schema and scores refer to North American SKU 0980P-A in 110 V form. Current Chris Coffee and 1st in Coffee records govern the scored identity. Earlier Andreja Premium machines, regional 0980 PID or timer listings, 230 V units, the unavailable direct-connect kit, optional joysticks, owner plumbing and group flow-control kits are not assumed equivalent.',
  primaryStrength: 'It pairs simultaneous brew-and-steam capacity with a narrow E61 chassis, current US stock and a long specialist service record.',
  primaryLimit: 'Mechanical HX temperature management, warm-up and the absence of stock PID or plumbing make newer electronic alternatives easier to control.',
  setupNote: 'Confirm 0980P-A, 110 V, pressurestat controls and included accessories before setup. Inspect shipping damage, reservoir seating, drip tray, gauges, valves, cords and any seller-installed options. Follow the three-position switch and initial-fill sequence in the manual before energizing the heater. Use a suitable 15 A circuit and water within the seller and service guidance. The 46 lb machine needs a stable counter, about 17.5 inches of depth and space above the 16-inch rail for filling and cup removal.',
  espressoNote: 'The E61 lever, dual gauges and heat exchanger provide a familiar manual espresso workflow, but boiler pressure is not puck temperature and the pump gauge is not beverage yield. Repeatability still depends on warm state, cooling-flush routine, dose, grind, distribution, tamp, time and measured yield. Darker and lighter roasts may need different thermal routines. Coffeedant did not taste coffee or measure temperature, pressure, flow, recovery, noise or extraction.',
  milkNote: 'The heat exchanger is the main reason to choose Andreja over a single boiler. Steam pressure remains available while brew water passes through the exchanger, allowing overlapping extraction and milk texturing. The articulated no-burn wand and non-compression valve support manual microfoam work. Actual steaming speed, recovery and batch capacity depend on boiler setting, fill state, milk volume and technique; seller and owner reports are not Coffeedant measurements.',
  workflowNote: 'Once fully warm, prepare and lock the basket, establish the appropriate cooling flush, lift the E61 lever, track time and yield, and stop manually. Steam can run at the same time or immediately after. The 3 L tank reduces refills, while top access, tray care and a vibration-pump sound remain part of ownership. There is no built-in volumetric stop or documented timer on the scored US machine. If an offered unit has joysticks, flow control or plumbing, record those as separate modifications.',
  buildNote: 'Current specialist records describe polished 304 stainless panels and frame, an insulated T.E.A.-coated boiler, commercial-style Sirai pressurestat, resettable high limit, vacuum breaker, accessible expansion valve, brass-ended pump and magnetic low-water sensor. Panel-removal and importer service articles support repair planning. Those parts do not prove a universal lifespan; scale, water, heat, transport and earlier repairs determine condition.',
  featuresNote: 'Useful equipment includes dual gauges, E61 pre-infusion mechanics, simultaneous steam, low-water alert, passive cup warming, three-position fill and heat switch, no-burn arms, large tray and optional seller-supplied joystick valves. It has no documented PID, automatic shot timer, volumetric dosing, brew-by-weight, app, rotary pump or current factory direct-plumb package in the scored configuration.',
  valueNote: 'At $1,995, Andreja trades electronic control for a proven traditional HX layout and specialist support. Compare Profitec Pro 400 for programmable temperature modes and faster modern controls, Lelit Mara X for brew-priority HX management, Rocket Appartamento TCA for another current compact E61 HX, and Quick Mill QM67 Evo for dual-boiler separation. Total cost still includes grinder, scale, water testing, cleaning supplies, tax and future E61 service.',
  ownerPattern: 'Owner discussions frame Andreja as a substantial workflow upgrade from compact single boilers when milk drinks dominate. Repeated positives include steam capacity, analog simplicity, large reservoir, familiar E61 parts and specialist support. Repeated questions concern cooling flushes, ready-light behavior, pressurestat cycling, grinder priority, plumbing claims and the price of older examples. Those themes guide questions; they do not establish performance or reliability rates.',
  ownerCaution: 'Community reports span pre-Evo and Evo generations, 1.6 and 1.8 L records, different voltages, grinders, water, maintenance and modifications. One satisfied owner cannot prove longevity, and one broken used machine cannot establish incidence. Current SKU, controls and service history must govern the purchase.',
  maintenanceNote: 'Flush the group briefly after use, wipe basket and gasket areas, purge and wipe the steam wand, empty the tray and refresh the reservoir. Backflush the three-way E61 circuit using the manual and service-provider schedule. Test water rather than guessing; unsuitable hardness drives scale, while aggressive water can increase corrosion risk. Inspect group gasket, shower screen, cam lubrication, valves, vacuum breaker, pressurestat behavior, pump mounts and hoses as symptoms change. Mains electrical, boiler, heater, control and pressure work belongs with a competent technician.',
  dimensions: {
    espresso: { score: 8.1, claim: 'E61 mechanics, dual gauges and a large heat exchanger support repeatable manual espresso after a stable warm-up.', consequence: 'The user must manage flush, grind, puck preparation and yield without PID or automatic shot stopping.', status: 'Documented architecture plus independent and owner context; no Coffeedant testing', signals: ['58 mm E61 group.', 'Dual analog gauges.', 'Manual pressurestat HX control.'] },
    milk: { score: 8.7, claim: 'The 1.8 L heat exchanger and articulated steam wand support simultaneous extraction and texturing.', consequence: 'Results and speed still depend on boiler pressure, milk volume and technique.', status: 'Hardware documented; no measured steam rate or recovery', signals: ['Simultaneous brew and steam.', 'No-burn articulated wand.', 'Non-compression valve.'] },
    workflow: { score: 7.7, claim: 'Large reservoir, dual gauges and simultaneous steam make multi-drink sessions efficient once warm.', consequence: 'Cooling-flush judgment, manual timing, top filling and long thermal preparation remain part of the routine.', status: 'Manual, retailer records and owner themes', signals: ['3 L bottom-fed reservoir.', 'Three-position switch.', 'Manual shot stop.'] },
    build: { score: 8.4, claim: 'Stainless construction, conventional controls and importer service material support repair-oriented ownership.', consequence: 'Generation, water and prior modifications matter more than the reputation of the model name.', status: 'Specialist records and service documentation; no Coffeedant teardown', signals: ['304 stainless panels and frame.', 'Sirai pressurestat.', 'Resettable high limit and accessible expansion valve.'] },
    features: { score: 6.9, claim: 'The machine covers core E61 HX needs with gauges, low-water protection and simultaneous steam.', consequence: 'It omits stock PID, timer, volumetrics, rotary pump and current factory plumbing.', status: 'North American base SKU separated from regional and optional equipment', signals: ['Dual gauges.', 'Pulsar pump dampener.', 'No documented US PID or timer.'] },
    value: { score: 7.4, claim: 'Current $1,995 stock buys traditional HX capacity plus established specialist support.', consequence: 'Modern HX rivals add electronic temperature tools, and dual boilers offer clearer separation near this budget.', status: 'US listings checked September 24, 2026', signals: ['$1,995 current reference.', 'In stock at two checked specialists.', 'Grinder and service budget still required.'] },
  },
  sources: [
    { label: 'Quick Mill current manufacturer site', href: quickMill, note: 'Manufacturer identity and current home range checked September 24, 2026. Andreja was absent from the home-page lineup, so US importer records define the scored current configuration.' },
    { label: 'Chris Coffee current Andreja listing', href: chrisCoffee, note: '$1,995 in-stock status, SKU 0980P-A, two-year seller warranty, current 1.8 L architecture, pressurestat, pump, tank, electrical record, controls and accessories checked September 24, 2026.' },
    { label: 'Chris Coffee manual index', href: manuals, note: 'Current support index linking the Andreja Premium Evo manual and confirming continued specialist documentation.' },
    { label: 'Andreja Premium Evo operating manual', href: manual, note: 'Historical operating, fill, brew, steam, cleaning and safety reference. Unit revision and regional applicability must be confirmed.' },
    { label: '1st in Coffee current Andreja listing', href: firstInCoffee, note: 'Independent specialist cross-check for 0980P-A, $1,995 in-stock status, pressurestat HX architecture, dimensions, tank and two-year seller warranty.' },
    { label: 'Espresso Outlet current Andreja listing', href: espressoOutlet, note: 'Current price and availability cross-check, exact-model product media, feature record and owner-review context.' },
    { label: 'Naturbohne European 0980 listing', href: europeanListing, note: 'Current regional cross-check for model 0980, E61 HX architecture, 1.8 L boiler, 3 L tank and 230 V market context. It is not assigned to the US SKU.' },
    { label: 'iDrinkCoffee 2018 redesigned Andreja review', href: video, note: 'Unique independent specialist video published October 18, 2018 with overview, espresso and latte workflow. It is not Coffeedant testing or a current-price source.' },
    { label: 'Home-Barista Andreja buyer-guide conclusion', href: buyerGuide, note: 'Independent comparative editorial for espresso capability and buyer fit, with generation and test-era limits preserved.' },
    { label: 'Home-Barista ready-light discussion', href: readyLight, note: 'Self-selected owner and technician discussion about Sirai pressurestat cycling and US customization. It does not supply a universal setpoint.' },
    { label: 'Reddit Andreja Premium Evo fit discussion', href: ownerFit, note: 'Self-selected upgrade discussion about milk workflow, grinder priority and plumbing assumptions. No performance rate is inferred.' },
    { label: 'Reddit $750 used Andreja discussion', href: usedValue, note: 'Self-selected used-market discussion used to identify age, condition, service and grinder questions, not to set a current fair price.' },
    { label: 'Reddit broken used Andreja repair discussion', href: repair, note: 'One broken second-hand machine and community diagnostic ideas. It is a service prompt, not a model-wide failure rate.' },
    { label: 'Chris Coffee retired direct-connect kit article', href: directConnect, note: 'Specialist installation history stating the kit has not been available since 2020. It supports treating current base machines as reservoir-only.' },
  ],
  comparisons: [
    { name: 'Quick Mill Andreja Premium Evo 0980P-A', href: '/espresso-machine/quick-mill-andreja-premium-evo/', quickDecision: 'Choose traditional pressurestat HX operation and current specialist support when simultaneous steam matters.', priceClass: '$1,995 current US reference', dimensions: '11.5 W × 17.5 D × 16 H in', heating: '1.8 L pressurestat heat exchanger', coffeeSetup: '58 mm E61 lever with manual flush and shot stop', milkWorkflow: 'Simultaneous brewing and steaming', bestFor: 'Traditional multi-drink E61 routine' },
    { name: 'Profitec Pro 400', href: '/espresso-machine/profitec-pro-400/', quickDecision: 'Choose newer electronic temperature modes and programmable convenience in a compact HX.', priceClass: 'Current compact premium HX class', dimensions: 'Compact E61 chassis', heating: 'Electronically managed heat exchanger', coffeeSetup: '58 mm E61 with timer and modes', milkWorkflow: 'Simultaneous brewing and steaming', bestFor: 'Modern controls with HX capacity' },
    { name: 'Lelit Mara X', href: '/espresso-machine/lelit-mara-x/', quickDecision: 'Choose brew-priority temperature management and a narrower current HX platform.', priceClass: 'Current compact HX class', dimensions: 'Narrow E61 chassis', heating: 'Brew-priority managed heat exchanger', coffeeSetup: '58 mm E61 with temperature modes', milkWorkflow: 'Simultaneous-capable HX with mode tradeoffs', bestFor: 'Espresso-focused HX temperature management' },
    { name: 'Quick Mill QM67 Evo', href: '/espresso-machine/quick-mill-qm67-evo/', quickDecision: 'Choose separate brew and steam boilers when independent PID control matters more than the lower Andreja price.', priceClass: 'Current dual-boiler class', dimensions: 'Larger Quick Mill E61 chassis', heating: 'PID dual boiler', coffeeSetup: '58 mm E61 with separate brew boiler', milkWorkflow: 'Simultaneous brewing and steaming', bestFor: 'Independent brew and steam control' },
  ],
  comparisonNote: 'Compare control architecture first. Andreja is a pressurestat HX, Pro 400 an electronically managed HX, Mara X a brew-priority HX, and QM67 a dual boiler. Then compare actual stock, warranty, warm-up, flush routine, pump, plumbing, water, grinder and local service.',
  recommendations: [
    { kicker: 'Modern HX route', title: 'Profitec Pro 400', text: 'Choose newer electronic temperature modes and programmable controls when traditional pressurestat simplicity is not the priority.', href: '/espresso-machine/profitec-pro-400/', linkLabel: 'Read Profitec Pro 400 review', featured: true },
    { kicker: 'Brew-priority HX', title: 'Lelit Mara X', text: 'Choose a narrower machine with brew-priority heat-exchanger management for an espresso-led routine.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read Lelit Mara X review' },
    { kicker: 'Classic current rival', title: 'Rocket Appartamento TCA', text: 'Compare another compact current E61 heat exchanger with a different seller and temperature-control ecosystem.', href: '/espresso-machine/rocket-appartamento-tca/', linkLabel: 'Read Rocket Appartamento TCA review' },
    { kicker: 'Dual-boiler step', title: 'Quick Mill QM67 Evo', text: 'Choose separate PID brew and steam boilers when independent temperature control justifies the higher cost.', href: '/espresso-machine/quick-mill-qm67-evo/', linkLabel: 'Read Quick Mill QM67 review' },
  ],
  faqs: [
    { question: 'Is Quick Mill Andreja Premium Evo still sold new?', answer: 'Yes. Chris Coffee and 1st in Coffee both showed North American SKU 0980P-A in stock at $1,995 on September 24, 2026.' },
    { question: 'Does the US Andreja Premium Evo have a PID?', answer: 'The scored 0980P-A uses a Sirai mechanical pressurestat and dual gauges. Regional and retailer records can differ, so verify the exact controls and rating plate.' },
    { question: 'Can it steam and brew simultaneously?', answer: 'Yes. Its heat-exchanger boiler is designed to supply brew water and steam during the same workflow.' },
    { question: 'Can current machines connect to a water line?', answer: 'The base current machine is treated as reservoir-only. Chris Coffee says its older direct-connect kit has been unavailable since 2020. Inspect any modified plumbed example separately.' },
    { question: 'What is the current US price?', answer: 'Two checked specialists displayed $1,995 on September 24, 2026. Confirm stock, tax, freight, warranty and included accessories at purchase.' },
    { question: 'How large is Andreja Premium Evo?', answer: 'The current US record is about 11.5 inches wide, 17.5 inches deep and 16 inches high with the cup rail, at roughly 46 lb.' },
    { question: 'What should I inspect on a used Andreja?', answer: 'Verify generation, voltage, heat, autofill, pressurestat cycling, pump, gauges, leaks, scale, E61 cam and gasket, valves, water history, accessories and every modification.' },
    { question: 'What water should I use?', answer: 'Use tested water within the seller, manual and qualified service guidance for scale and corrosion control. Do not assume bottled or softened water is suitable.' },
  ],
  finalTitle: 'Choose Andreja for the heat-exchanger rhythm, not for features it does not have',
  finalVerdict: [
    'Andreja Premium Evo remains a coherent current machine for households that make milk drinks: a large heat exchanger, strong steam, E61 handling, dual gauges and established specialist support in a relatively narrow body.',
    'The trade is traditional control. North American 0980P-A uses a pressurestat, vibration pump and reservoir, with no documented stock PID, timer or plumbing. Warm-up and cooling-flush judgment remain part of every session.',
    'Buy it when simultaneous steam and service familiarity matter more than digital control. Compare Pro 400 and Mara X for newer HX management, Appartamento TCA for another current classic HX, and QM67 when dual-boiler separation is worth the step up.',
  ],
  video: { id: 'voHnJjJzgIY', title: 'iDrinkCoffee.com Review - Quick Mill Andreja Premium Redesigned Espresso Machine', creator: 'iDrinkCoffeeCanada', published: '2018-10-18', note: 'Unique independent specialist video for the redesigned 2018 Andreja Premium, showing feature, espresso and latte workflow context. It is not Coffeedant testing, a current-price source or a reliability sample.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-andreja-premium-evo-na-source-4">[source]</a> <a href="#quick-mill-andreja-premium-evo-na-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-andreja-premium-evo-na-source-5">[source]</a> <a href="#quick-mill-andreja-premium-evo-na-source-9">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-andreja-premium-evo-na-source-2">[source]</a> <a href="#quick-mill-andreja-premium-evo-na-source-8">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-andreja-premium-evo-na-source-4">[source]</a> <a href="#quick-mill-andreja-premium-evo-na-source-10">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-andreja-premium-evo-na-source-2">[source]</a> <a href="#quick-mill-andreja-premium-evo-na-source-14">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-andreja-premium-evo-na-source-5">[source]</a> <a href="#quick-mill-andreja-premium-evo-na-source-7">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-andreja-premium-evo-na-source-2">[source]</a> <a href="#quick-mill-andreja-premium-evo-na-source-12">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-andreja-owner-title"><h3 id="quick-mill-andreja-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Milk workflow is the central upgrade</strong><p>Prospective owners moving from a single boiler focus on simultaneous steam, but experienced replies also redirect attention to grinder quality, puck preparation and the drinks actually made each day.</p></li>
    <li><strong>Ready lights describe control state, not cup temperature</strong><p>Owner and technician discussion links cycling behavior to the Sirai pressurestat. It does not establish one universal flush, temperature or adjustment for every installation.</p></li>
    <li><strong>A repair bargain can carry high uncertainty</strong><p>One buyer paid $100 for a non-heating used machine and began electrical diagnosis. The case shows why service documents, safe testing and repair budget matter; it cannot establish failure incidence.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillAndrejaPremiumEvoReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
