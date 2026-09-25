import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const chrisCoffee = 'https://www.chriscoffee.com/products/quick-mill-vetrano-2b';
const wholeLatteLove = 'https://www.wholelattelove.com/products/quick-mill-vetrano-2b-evo-dual-boiler-espresso-machine';
const manual = 'https://manuals.plus/quick-mill/0995p-a-evoled-vetrano-2b-evo-espresso-machine-manual';
const independentReview = 'https://espressooutlet.com/blogs/news/espresso-outlet-blog-quick-mill-vetrano-2b-evo-in-depth-review';
const video = 'https://www.youtube.com/watch?v=Is4YmLpYKYc';
const ownerSetup = 'https://www.reddit.com/r/espresso/comments/1b2czrf/my_endgame_set_up_quick_mill_vetrano_2b_evo/';
const ownerComparison = 'https://www.reddit.com/r/espresso/comments/1ct8m78/quickmill_vetrano_2b/';
const repairThread = 'https://www.home-barista.com/repairs/quick-mill-vetrano-2b-evo-slow-fill-t96179.html';
const olderReview = 'https://www.home-barista.com/vetrano-buyers-guide.html';
const rancilioOfficial = 'https://www.ranciliogroup.com/rancilio/silvia-pro-x/';
const profitecOfficial = 'https://www.profitec-espresso.com/en/products/move';
const lelitOfficial = 'https://www.lelit.com/product/bianca-pl162t/';
const image = 'https://www.chriscoffee.com/cdn/shop/products/vetrano-hero.jpg?v=1659444327';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-vetrano-2b-evo-0995-us',
  slug: '/espresso-machine/quick-mill-vetrano-2b-evo/',
  productId: 'CD-EM-000234',
  brand: 'Quick Mill',
  model: 'Vetrano 2B Evo',
  sku: '0995P-A-EVOLED, current US 110 V dual-boiler configuration',
  category: 'Plumbable rotary-pump dual-boiler E61 espresso machine',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Vetrano 2B Evo review: US price, plumbing and 15A limits',
  description: 'Research-led Quick Mill Vetrano 2B Evo review covering SKU 0995P-A-EVOLED, dual stainless boilers, rotary pump, plumbing, current US price, owner evidence and 15A versus 20A operation.',
  verdictLabel: 'A traditional E61 dual boiler for buyers who will use its rotary pump, plumbing flexibility and strong steam capacity',
  verdict: 'The current US Vetrano 2B Evo 0995P-A-EVOLED combines a 0.75 L brew boiler, 1.4 L steam boiler, E61 group, PID with shot timer, rotary pump, 3 L reservoir and direct water plus drain capability. Chris Coffee displayed US$2,995 and in-stock status on September 25, 2026, while Whole Latte Love displayed US$2,895 for its 15 A version. The machine can run on 15 or 20 A, but 15 A mode alternates boiler heating instead of powering both elements together. Its case is strongest for a permanent, water-managed station. Buyers who will leave it tank-fed still carry the 70 lb body, long E61 warm-up and plumbing-grade cost.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores apply to current US SKU 0995P-A-EVOLED. Chris Coffee, Whole Latte Love and the exact-SKU manual agree on the E61 group, PID, rotary pump, reservoir or direct-feed operation and dual stainless boilers. Seller width differs by one inch, and current prices differ by US$100. Flow control and joystick valves appear in reviews and dealer options but are not treated as standard equipment.',
  image,
  imageAlt: 'Chris Coffee product photograph of the Quick Mill Vetrano 2B Evo espresso machine',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: { label: 'Current US reference price', msrp: '$2,895 to $2,995', typical: 'Whole Latte Love displayed US$2,895 for the 15 A version and Chris Coffee displayed US$2,995 with in-stock status for SKU 0995P-A-EVOLED on September 25, 2026. Confirm amperage setup, cord, exact accessories, warranty, plumbing kit and return terms before purchase.', currency: 'USD', numeric: '2995', checked: 'September 25, 2026' },
  links: [
    { label: 'Check current US price and exact SKU', href: chrisCoffee, note: 'US$2,995, in-stock status and SKU 0995P-A-EVOLED checked September 25, 2026', primary: true },
    { label: 'Compare the current 15 A listing', href: wholeLatteLove, note: 'US$2,895 current listing with 15 A configuration, dual-boiler specifications and included plumbing hardware' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Vetrano 2B Evo, US SKU 0995P-A-EVOLED, 110 V configuration' },
    { label: 'Heating', value: 'Insulated 0.75 L brew and 1.4 L steam boilers with PID control; simultaneous brew and steam' },
    { label: 'Coffee setup', value: '58 mm E61 group, manual lever, PID shot timer and dual brew plus steam manometer' },
    { label: 'Milk system', value: 'No-burn manual steam wand with two- and four-hole tips listed in current packages' },
    { label: 'Water and pump', value: 'Rotary pump, 3 L reservoir, direct-water inlet and drain kit; correct treated water remains essential' },
    { label: 'Electrical', value: '110 V with configurable 15 or 20 A logic; 15 A mode alternates boiler-element demand' },
    { label: 'Fit', value: 'About 12 to 13 W × 18 D × 16 H in, 5.375-inch cup clearance and 70 lb' },
  ],
  quickAnswers: [
    { question: 'Can Vetrano 2B Evo be plumbed?', answer: 'Yes. Current US listings include direct-water and drain hardware, while the machine can also use its 3 L reservoir.' },
    { question: 'Does it use a rotary pump?', answer: 'Yes. Current US seller records specify a vertically mounted rotary pump.' },
    { question: 'What changes between 15 and 20 A?', answer: 'The manual and seller context say 20 A permits both boiler elements to heat together. In 15 A mode the controller alternates element demand.' },
    { question: 'What is the current US price?', answer: 'Current listings showed US$2,895 to US$2,995 on September 25, 2026, depending on seller and configuration.' },
    { question: 'Is flow control included?', answer: 'No standard flow-control device is listed in the current base package. Treat any dealer-installed kit as a separate option.' },
    { question: 'Who should consider it?', answer: 'A buyer planning a long-term E61 station who values quiet rotary pumping, direct water, strong manual steam and serviceable conventional hardware.' },
  ],
  bestFor: ['Dedicated espresso stations where a direct water line and drain can be installed with suitable treatment', 'Milk-drink households that want dual boilers, rotary pumping and substantial steam capacity', 'Experienced users who prefer E61 preparation, manual shot control and specialist service access'],
  avoidIf: ['You need fast cold-start readiness, automatic dosing, automatic milk or an integrated grinder', 'You cannot support the 70 lb chassis, 18-inch depth, 110 V circuit and safe water plan', 'You would pay for plumbing and rotary-pump capability but leave the machine tank-fed permanently'],
  pros: ['Dual stainless boilers support simultaneous espresso and steam with independent controls', 'Rotary pump and direct-water option suit a quiet permanent installation', 'PID with timer, dual manometer and E61 group provide useful manual feedback', 'Current package includes reservoir, plumb kit, drain kit, two portafilters, tamper and two steam tips'],
  cons: ['E61 thermal mass rewards a longer warm-up than modern electronically heated groups', 'Seventy-pound body and plumbing work make installation less flexible', '15 A mode cannot energize both boiler elements together', 'No automatic shot stop, factory brew-by-weight, app or standard flow-control device'],
  architecture: 'a 110 V semi-automatic built around an E61 lever group, insulated 0.75 L brew boiler, insulated 1.4 L steam boiler, PID controller with shot timer, dual manometer, vertically mounted rotary pump, 3 L reservoir, selectable direct-water inlet, drainable drip tray, no-burn steam and hot-water arms, independent boiler switches and configurable 15 or 20 A element logic',
  identityBoundary: 'The Product schema and scores refer to current US Vetrano 2B Evo SKU 0995P-A-EVOLED. They do not silently cover the original Vetrano heat exchanger, earlier 2B revisions, 230 V machines, dealer-installed flow control, joystick conversions or owner modifications. Chris Coffee lists a 13-inch width while Whole Latte Love lists 12 inches. The delivered rating plate, serial, manual, electrical setup and measured counter space govern.',
  primaryStrength: 'Vetrano 2B Evo combines dual-boiler control with a quiet rotary pump and a real path from reservoir use to direct water and drainage.',
  primaryLimit: 'Its cost, weight, E61 warm-up and installation demands only make sense when the buyer values the traditional architecture and plumbing capability.',
  setupNote: 'Confirm SKU 0995P-A-EVOLED, 110 V rating plate, 15 or 20 A setup, supplied cord, seller bench configuration, warranty and included plumbing hardware before payment. Preserve packaging and use two people for the 70 lb machine. Measure depth with the portafilter and top clearance with the reservoir door open. For direct plumbing, use a qualified installer, an accessible shutoff, leak protection, pressure control and water that satisfies both the seller and local technician. Follow the exact first-fill sequence before heating.',
  espressoNote: 'The 58 mm E61 group, dedicated brew boiler, PID, shot timer and rotary pump form a conventional manual espresso platform. The group remains a large separate thermal mass, so a boiler-ready display is not proof that every metal path is fully stabilized. Dose, grind, distribution, tamp, yield and shot stop remain manual. The dual manometer reports pump and service pressure, not beverage weight or extraction quality. Independent review context praises the quiet pump and familiar E61 response, but Coffeedant did not measure temperature, pressure, flow, warm-up, noise or taste.',
  milkNote: 'A 1.4 L steam boiler and included two- plus four-hole tips give the machine more milk capacity than compact single boilers and hybrids. The no-burn wand still needs purging, wiping and correct pitcher technique. Twenty-amp configuration can reheat both boilers together, while 15 A logic alternates element demand. Owners report strong steam, but reports span milk volumes, tips, pressure settings and circuits. No universal steaming time or recovery rate is claimed.',
  workflowNote: 'The daily routine is deliberately manual. Let the E61 group heat, grind into a 58 mm basket, lift the lever, watch time and beverage mass, lower the lever, purge the group and clean the basket. The steam boiler can be switched off for espresso-only use. Tank mode preserves installation flexibility, while direct water removes refilling and the drain kit reduces tray handling. Neither plumbing mode adds volumetric shot stopping, automatic pre-infusion recipes or connectivity.',
  buildNote: 'Current sellers document stainless body panels, stainless frame, stainless boilers, a stainless mushroom and gicleur valve, rotary-pump access from the right panel, and bottom access for heaters and boiler drains. These are parts and service-path records, not teardown findings. The heavy chassis, mains voltage, pressurized boilers and hard-plumbed water require competent service. Seller width and warranty language should be confirmed in writing.',
  featuresNote: 'The useful feature set includes PID temperature control, integrated timer, dual pressure gauge, independent boiler switches, eco modes, low-water sensing, selectable tank or line feed, direct drain, passive cup tray and no-burn arms. The manual documents a 60-minute steam-boiler eco action and a 120-minute full-boiler action. Flow control, joystick valves, smart switching and bottomless portafilters are options or accessories, not assumed stock equipment.',
  valueNote: 'At US$2,895 to US$2,995, value depends on using the rotary pump and plumbing capability rather than buying by feature count alone. Quick Mill QM67 Evo costs less and occupies less width but uses a vibration pump and reservoir. Rancilio Silvia Pro X offers a quicker electronically managed routine for less money. Lelit Bianca adds factory flow control and movable reservoir competition. Compare grinder, water treatment, electrical work, plumbing, service access, delivery and written warranty as part of the installed cost.',
  ownerPattern: 'Owner discussions repeatedly value quiet pumping, direct water, strong steam, stainless construction and consistent manual operation. They also show why configuration matters: some users stay on 15 A without issue, others choose 20 A for simultaneous reheating, and plumbing details change daily convenience. Individual accounts mention stiff E61 levers, basket fit, drains, slow-fill troubleshooting and one defective example. Those reports define inspection questions, not a reliability rate.',
  ownerCaution: 'Community evidence combines different production years, dealer configurations, valves, flow-control kits, circuits, water treatment and maintenance histories. Praise after a month cannot establish long-term durability, while one defective unit or repair thread cannot establish family incidence. A used machine should be verified by serial, rating plate, live heating, pump behavior, boiler pressure, water-source switching, leaks, drain condition and service records.',
  maintenanceNote: 'Backflush with water after routine use and detergent on the schedule in the delivered manual, keep the shower screen and gasket clean, wipe and purge the steam wand, empty or verify the drain path, and inspect the reservoir, inlet and hoses for leaks. Test water rather than guessing. The manual warns against removing more than six ounces from the hot-water tap at one time. Boiler, pump, solenoid, pressure, electrical and plumbing work belongs with a qualified technician.',
  dimensions: {
    espresso: { score: 8.7, claim: 'A dedicated PID brew boiler, E61 group, timer and rotary pump support a capable manual espresso workflow.', consequence: 'The group needs heat-soak time and the operator still controls dose, flow start, shot stop and beverage mass.', status: 'Current seller and exact-SKU documentation plus independent context; no Coffeedant testing', signals: ['0.75 L insulated brew boiler.', '58 mm E61 group.', 'PID timer and rotary pump.'] },
    milk: { score: 8.8, claim: 'The 1.4 L steam boiler and two supplied tips support serious manual milk preparation.', consequence: 'Steam results depend on tip, pressure, milk volume and technique, and 15 A mode alternates element demand.', status: 'Current seller records and bounded owner evidence', signals: ['1.4 L insulated steam boiler.', 'Two- and four-hole tips.', 'Simultaneous brew and steam.'] },
    workflow: { score: 8.3, claim: 'Reservoir or line feed, direct drain, shot timer and quiet rotary pump reduce friction in a permanent station.', consequence: 'Warm-up, shot stop, puck preparation and cleaning remain manual.', status: 'Exact-SKU manual and current listings', signals: ['3 L reservoir or direct water.', 'Drain kit included.', 'Independent boiler switches.'] },
    build: { score: 8.7, claim: 'Stainless frame, body and boilers plus documented service access support long-term repair planning.', consequence: 'A 70 lb plumbable machine raises delivery, installation and technician requirements.', status: 'Seller construction records; no Coffeedant teardown', signals: ['Stainless frame and boilers.', 'Right-side rotary-pump access.', 'Bottom boiler-drain access.'] },
    features: { score: 8.5, claim: 'PID, timer, gauges, eco logic, dual-boiler switches and water-source choice cover the useful prosumer essentials.', consequence: 'Flow control, volumetric dosing, automatic milk, app control and brew-by-weight are absent from the standard package.', status: 'Current seller and manual records', signals: ['PID with timer.', 'Dual manometer.', 'Tank, line and drain flexibility.'] },
    value: { score: 8.0, claim: 'The current price buys a full rotary-pump, plumbable dual-boiler E61 platform.', consequence: 'Buyers who will not plumb it or need quicker readiness may get better fit from a smaller electronic dual boiler.', status: 'Two US listings checked September 25, 2026', signals: ['US$2,895 to US$2,995.', 'Current in-stock reference.', 'Plumb and drain hardware included.'] },
  },
  sources: [
    { label: 'Chris Coffee current Vetrano 2B Evo listing', href: chrisCoffee, note: 'US$2,995 price, in-stock status, SKU 0995P-A-EVOLED, 15 or 20 A setup, boilers, pump, controls, dimensions, package and two-year retailer warranty checked September 25, 2026.' },
    { label: 'Whole Latte Love current Vetrano 2B Evo listing', href: wholeLatteLove, note: 'US$2,895 15 A listing, 0.75 L and 1.4 L boilers, E61 group, rotary pump, 3 L tank, plumbing, drain, dimensions and package checked September 25, 2026.' },
    { label: 'Vetrano 2B Evo 0995P-A-EVOLED instruction manual copy', href: manual, note: 'Exact-SKU controls, tank or line selection, first fill, 15 or 20 A logic, PID, eco modes, hot-water warning, maintenance and troubleshooting. Hosted by Manuals+, not the current factory site.' },
    { label: 'Espresso Outlet Vetrano 2B Evo in-depth review', href: independentReview, note: 'Independent seller review published March 28, 2021 covering rotary-pump noise, 15 and 20 A logic, reservoir, plumbing, direct drain, optional flow control and daily use. Not current-price evidence.' },
    { label: 'iDrinkCoffeeCanada Vetrano 2B Evo video review', href: video, note: 'Unique exact-model demonstration published September 15, 2018, covering controls, two espresso shots and two milk drinks. It is not Coffeedant testing or a current-SKU benchmark.' },
    { label: 'Reddit Vetrano 2B Evo endgame setup discussion', href: ownerSetup, note: 'Self-selected owner context on plumbed use, drain setup, steam tips, service, lever feel, basket fit and one replaced machine. No reliability denominator.' },
    { label: 'Reddit Vetrano 2B owner comparison', href: ownerComparison, note: 'Owner context on 15 versus 20 A use, plumbing, steaming, fit and alternative machines. Individual reports cannot establish measured performance.' },
    { label: 'Home-Barista Vetrano 2B Evo slow-fill repair thread', href: repairThread, note: 'Single-machine troubleshooting context for fill behavior and service questions. It does not establish failure incidence.' },
    { label: 'Home-Barista original Vetrano buyer guide', href: olderReview, note: 'Historical independent Vetrano review used for family ergonomics and service context only. It predates the scored 2B Evo SKU.' },
    { label: 'Rancilio official Silvia Pro X page', href: rancilioOfficial, note: 'Current electronically managed dual-boiler comparison used for buyer-fit contrast rather than Vetrano specification evidence.' },
    { label: 'Profitec official MOVE page', href: profitecOfficial, note: 'Current modern dual-boiler comparison used for buyer-fit contrast rather than Vetrano specification evidence.' },
    { label: 'Lelit official Bianca page', href: lelitOfficial, note: 'Current rotary-pump E61 comparison with factory flow control, used for buyer-fit contrast rather than Vetrano specification evidence.' },
  ],
  comparisons: [
    { name: 'Quick Mill Vetrano 2B Evo', href: '/espresso-machine/quick-mill-vetrano-2b-evo/', quickDecision: 'Choose the full-size Quick Mill when rotary pumping, direct water and a drain-ready E61 station matter.', priceClass: 'US$2,895 to US$2,995 current reference', dimensions: 'About 12 to 13 W × 18 D × 16 H in', heating: 'PID 0.75 L and 1.4 L dual boilers', coffeeSetup: '58 mm E61, timer and rotary pump', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Permanent plumbed station' },
    { name: 'Quick Mill QM67 Evo', href: '/espresso-machine/quick-mill-qm67-evo/', quickDecision: 'Choose the smaller same-brand machine when reservoir use and lower cost matter more than rotary pumping.', priceClass: 'US$2,495 current reference', dimensions: '11.25 W × 17.75 D × 16.25 H in', heating: 'PID dual boiler', coffeeSetup: '58 mm E61 with vibration pump', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Compact traditional workflow' },
    { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', quickDecision: 'Choose a quicker electronic dual boiler with soft infusion when plumbing and E61 ritual are unnecessary.', priceClass: 'Compact dual-boiler class', dimensions: 'Smaller box-style chassis', heating: 'PID dual boilers', coffeeSetup: '58 mm group, timer and soft infusion', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Faster daily readiness' },
    { name: 'Lelit Bianca PL162T', href: '/espresso-machine/lelit-bianca-pl162t/', quickDecision: 'Choose factory flow control and a movable reservoir when profiling matters more than Vetrano simplicity.', priceClass: 'Premium rotary-pump E61 class', dimensions: 'Large E61 chassis with movable tank', heating: 'PID dual boiler', coffeeSetup: 'E61 with paddle flow control', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Manual flow profiling' },
  ],
  comparisonNote: 'Choose installation and group architecture before finish. Vetrano 2B Evo is the plumbing-first rotary-pump option; QM67 Evo is the smaller reservoir Quick Mill; Silvia Pro X favors quicker electronic readiness; Bianca adds factory flow control. Then compare exact voltage, circuit, counter clearance, water, drain, warranty and local service.',
  recommendations: [
    { kicker: 'Smaller Quick Mill', title: 'Quick Mill QM67 Evo', text: 'Choose the narrower reservoir-fed dual boiler when plumbing and rotary pumping do not justify the added cost.', href: '/espresso-machine/quick-mill-qm67-evo/', linkLabel: 'Read QM67 Evo review', featured: true },
    { kicker: 'Quicker electronic dual boiler', title: 'Rancilio Silvia Pro X', text: 'Choose soft infusion and a smaller modern group when daily readiness matters more than E61 tradition.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read Silvia Pro X review' },
    { kicker: 'Factory flow control', title: 'Lelit Bianca PL162T', text: 'Choose a rotary-pump E61 machine with factory paddle profiling when manual flow experiments are central.', href: '/espresso-machine/lelit-bianca-pl162t/', linkLabel: 'Read Lelit Bianca review' },
    { kicker: 'Alternative E61 dual boiler', title: 'Profitec Pro 600', text: 'Choose another PID E61 platform when local Profitec support and its electronic controls fit better.', href: '/espresso-machine/profitec-pro-600/', linkLabel: 'Read Profitec Pro 600 review' },
  ],
  faqs: [
    { question: 'What is the current Quick Mill Vetrano 2B Evo price?', answer: 'Whole Latte Love displayed US$2,895 for the 15 A version, while Chris Coffee displayed US$2,995 and in-stock status for SKU 0995P-A-EVOLED on September 25, 2026.' },
    { question: 'Can it be directly plumbed?', answer: 'Yes. Current US packages list a plumb kit and drain kit, and the exact-SKU manual documents tank and direct-water selection.' },
    { question: 'Does it have a rotary pump?', answer: 'Yes. Current US seller records specify a vertically mounted rotary pump.' },
    { question: 'What does 15 versus 20 A change?', answer: 'Twenty-amp configuration allows both boiler elements to heat together. Fifteen-amp mode alternates element demand through the controller.' },
    { question: 'How large is the Vetrano 2B Evo?', answer: 'Current sellers list about 12 to 13 inches wide, 18 inches deep, 16 inches high and 70 pounds. Measure the delivered unit and allow lever, portafilter, hose and reservoir-door clearance.' },
    { question: 'Is flow control standard?', answer: 'No standard flow-control device appears in the current base package. Dealer-installed or aftermarket kits should be priced and warranted separately.' },
    { question: 'Can the steam boiler be turned off?', answer: 'Yes. Current documentation describes independent coffee- and steam-boiler switches for espresso-only operation.' },
    { question: 'What water should a plumbed machine use?', answer: 'Use tested water that meets the seller warranty and qualified technician guidance, with accessible filtration, pressure control, shutoff and leak protection. Do not assume very soft or untested water is automatically safe.' },
  ],
  finalTitle: 'Choose Vetrano 2B Evo when plumbing and rotary pumping justify a permanent E61 station',
  finalVerdict: [
    'Vetrano 2B Evo is a complete traditional platform: separate stainless boilers, E61 group, PID timer, pressure feedback, rotary pump, reservoir backup, direct water and drain capability.',
    'Its advantages arrive with installation duties. Circuit choice, water treatment, drain routing, counter support, warm-up and technician access belong in the purchase plan.',
    'At US$2,895 to US$2,995, it fits buyers who will use the plumbing and steam capacity. Choose QM67 Evo or Silvia Pro X when compact flexibility and quicker daily readiness matter more.',
  ],
  video: { id: 'Is4YmLpYKYc', title: 'iDrinkCoffee.com Review - Quick Mill Vetrano 2B Evo Espresso Machine', creator: 'iDrinkCoffeeCanada', published: '2018-09-15', note: 'Unique exact-model independent retailer demonstration covering controls, paired espresso shots and paired milk drinks. It is not Coffeedant testing, current-price evidence or a universal performance measurement.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-vetrano-2b-evo-0995-us-source-1">[source]</a> <a href="#quick-mill-vetrano-2b-evo-0995-us-source-3">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-vetrano-2b-evo-0995-us-source-2">[source]</a> <a href="#quick-mill-vetrano-2b-evo-0995-us-source-4">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-vetrano-2b-evo-0995-us-source-1">[source]</a> <a href="#quick-mill-vetrano-2b-evo-0995-us-source-7">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-vetrano-2b-evo-0995-us-source-2">[source]</a> <a href="#quick-mill-vetrano-2b-evo-0995-us-source-3">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-vetrano-2b-evo-0995-us-source-1">[source]</a> <a href="#quick-mill-vetrano-2b-evo-0995-us-source-8">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-vetrano-2b-evo-0995-us-source-1">[source]</a> <a href="#quick-mill-vetrano-2b-evo-0995-us-source-3">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-vetrano-2b-evo-0995-us-source-1">[source]</a> <a href="#quick-mill-vetrano-2b-evo-0995-us-source-12">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-vetrano-owner-title"><h3 id="quick-mill-vetrano-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Plumbing changes the daily value</strong><p>Owners who connect both the water line and drain describe a low-friction routine. Others use only the reservoir, showing that the installation benefit depends on the kitchen and water plan.</p></li>
    <li><strong>Steam capacity is a recurring strength</strong><p>Multiple owners praise steam performance and included tip choices. Their milk, settings, circuit and technique differ, so the pattern supports buyer fit rather than a universal steaming time.</p></li>
    <li><strong>Service history still controls used value</strong><p>Positive long-term reports sit beside individual defects, stiff levers, basket fit and fill troubleshooting. Inspection and specialist support are more useful than either praise or one repair anecdote alone.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillVetrano2BEvoReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
