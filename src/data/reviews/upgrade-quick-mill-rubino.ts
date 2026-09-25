import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.quickmill.it/prodotti/rubino-macchina-da-caffe-quick-mill/';
const officialPlus = 'https://www.quickmill.it/prodotti/rubino-plus/';
const chrisCoffee = 'https://www.chriscoffee.com/products/quick-mill-rubino-plus';
const video = 'https://www.youtube.com/watch?v=TSxp32Y_MPQ';
const artisti = 'https://artisti.com.au/products/quick-mill-rubino-coffee-machine-black';
const crema = 'https://www.cremashop.eu/en/products/quick-mill/rubino-espresso-machine';
const diPacci = 'https://dipacciusa.com/products/quick-mill-rubino';
const ownerReview = 'https://www.reddit.com/r/espresso/comments/1nc8r9x/quick_mill_rubino_6_month_review/';
const repairThread = 'https://www.home-barista.com/repairs/quick-mill-rubino-reservoir-part-needed-t104751.html';
const usedThread = 'https://www.reddit.com/r/espresso/comments/1ppv4n7/quick_mill_rubino_0981/';
const buyerThread = 'https://www.reddit.com/r/espresso/comments/1phikh8/should_i_skip_the_gaggia_e24_and_a_buy_a_used/';
const pro400Official = 'https://www.profitec-espresso.com/en/products/pro400';
const maraXOfficial = 'https://www.lelit.com/product/marax-pl62x/';
const image = 'https://www.quickmill.it/wp-content/uploads/2025/07/13-3.png';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-rubino-0981-us',
  slug: '/espresso-machine/quick-mill-rubino/',
  productId: 'CD-EM-000232',
  brand: 'Quick Mill',
  model: 'Rubino 0981',
  sku: '0981RIS-A-XX-XX, current US 115 V reservoir configuration',
  category: 'Heat-exchanger E61 semi-automatic espresso machine',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Rubino 0981 review: current price, HX workflow and model boundary',
  description: 'Research-led Quick Mill Rubino 0981 review covering the 1.8 L heat exchanger, E61-style group, no-PID workflow, current US price, owner evidence and the separate Rubino Plus generation.',
  verdictLabel: 'A narrow traditional heat exchanger for hands-on espresso and milk drinks, not the newer PID-equipped Rubino Plus',
  verdict: 'The current Rubino 0981 combines a 1.8 L insulated heat-exchanger boiler, Quick Mill E61-style group, vibration pump with pulsor, 3 L reservoir, boiler-pressure gauge and simultaneous brewing and steaming in a body only 265 mm wide. The current factory page explicitly lists no PID. That matters because Quick Mill also sells a separate Rubino Plus with a stainless HX boiler, PID, OLED display, shot timer, pre-brew settings and dual gauge. Chris Coffee displayed US$1,999 and in-stock status for SKU 0981RIS-A-XX-XX on September 25, 2026, while calling it Rubino Plus but describing the analog copper-boiler Rubino. Buy only after confirming the rating plate and controls on the actual unit.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores apply to the analog Quick Mill Rubino 0981 family and current US SKU 0981RIS-A-XX-XX, not the newer factory Rubino Plus. The official Rubino page specifies no PID, a 1.8 L insulated HX boiler, one boiler-pressure gauge, 1500 W and 19.5 kg. The official Rubino Plus page specifies PID, OLED display, dual pressure gauge, programmable pre-brew and 20 kg. A US seller title conflicts with its own analog specification, so the machine offered, serial, rating plate, controller and written invoice govern.',
  image,
  imageAlt: 'Quick Mill official front three-quarter view of the current analog Rubino heat-exchanger espresso machine',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: { label: 'Current US reference price', msrp: '$1,999', typical: 'Chris Coffee displayed US$1,999 and in-stock status for SKU 0981RIS-A-XX-XX on September 25, 2026. Its page title says Rubino Plus, but the listed copper boiler, analog controls and single gauge match the Rubino rather than the newer PID-equipped factory Rubino Plus. Confirm exact generation, voltage, warranty and delivered configuration in writing.', currency: 'USD', numeric: '1999', checked: 'September 25, 2026' },
  links: [
    { label: 'Check current US price and exact configuration', href: chrisCoffee, note: 'US$1,999, in-stock SKU 0981RIS-A-XX-XX checked September 25, 2026; seller title and specification conflict, so confirm the exact machine', primary: true },
    { label: 'Read the official Rubino specification', href: official, note: 'Current manufacturer identity, no-PID status, HX boiler, pump, controls, tank, dimensions, weight, power and voltage' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Rubino 0981, current analog reservoir configuration; US seller SKU 0981RIS-A-XX-XX' },
    { label: 'Heating', value: 'Official 1.8 L insulated heat-exchanger boiler; factory Rubino page lists no PID' },
    { label: 'Coffee setup', value: 'Quick Mill E61-style group, mechanical brew lever and manual flush-based temperature routine' },
    { label: 'Milk system', value: 'Multidirectional anti-burn steam and hot-water wands; simultaneous brewing and steaming supported' },
    { label: 'Water and pump', value: '3 L reservoir with low-water sensor and vibration pump with manufacturer-claimed noise reduction; no plumbing claim' },
    { label: 'Fit', value: 'Official 265 W × 452 D × 358 H mm and 19.5 kg' },
    { label: 'Identity warning', value: 'Rubino Plus is a separate PID/OLED generation; seller naming is not sufficient to prove which version is offered' },
  ],
  quickAnswers: [
    { question: 'Does Quick Mill Rubino 0981 have a PID?', answer: 'No. The current official Rubino page explicitly lists PID as absent. The separate Rubino Plus has PID, OLED display, shot timer, pre-brew settings and a dual gauge.' },
    { question: 'Can Rubino brew and steam together?', answer: 'Yes. Its heat-exchanger architecture allows espresso brewing and steam service at the same time once the machine is fully hot and ready.' },
    { question: 'Is the US$1,999 listing the newer Rubino Plus?', answer: 'The page title says Rubino Plus, but SKU 0981RIS-A-XX-XX and the copper-boiler analog description align with Rubino 0981. Ask the seller to confirm the exact front panel, boiler, PID display and rating plate before payment.' },
    { question: 'How is brew temperature managed without PID?', answer: 'The thermosyphon E61-style group and heat exchanger require a repeatable warm-up and flush routine. Some owners add a group thermometer, but that is not stock equipment.' },
    { question: 'Can Rubino be plumbed in?', answer: 'Current Rubino records describe a 3 L reservoir and do not document a direct-plumb mode. Buyers who require plumbing should choose a machine designed for it.' },
    { question: 'Who should consider Rubino 0981?', answer: 'A buyer who wants a narrow traditional HX machine, makes espresso and milk drinks, accepts E61 warm-up and cooling-flush technique, and has a clear local service path.' },
  ],
  bestFor: ['Milk-drink households that want simultaneous espresso and steam in a narrow traditional chassis', 'Buyers who enjoy an E61-style lever, manual flush routine and analog controls', 'Owners who can verify the exact 0981 generation and buy through a capable service retailer'],
  avoidIf: ['You want the PID, OLED display, shot timer and pre-brew controls of the newer Rubino Plus', 'You need fast cold-start readiness, volumetric dosing, brew-by-weight control or direct plumbing', 'The seller cannot identify the exact generation, voltage, front panel, boiler and warranty in writing'],
  pros: ['Only 265 mm wide while retaining a 1.8 L HX boiler and 3 L reservoir', 'Heat-exchanger layout supports simultaneous brewing and steaming', 'Current factory documentation clearly defines the analog Rubino and separates it from Rubino Plus', 'E61-style mechanics, manual valves and conventional service parts suit buyers who value repairability'],
  cons: ['No PID, shot timer or programmable pre-brew on the scored Rubino 0981', 'E61-style warm-up and cooling-flush technique add time and judgment to every session', 'Vibration pump and reservoir-only feed are less refined than rotary and plumbable alternatives', 'A current US retailer uses the Rubino Plus name for a listing whose SKU and analog specifications align with Rubino 0981'],
  architecture: 'a reservoir-fed semi-automatic built around Quick Mill’s E61-style thermosyphon group, one insulated 1.8 L heat-exchanger boiler, pressostat control, vibration pump with pulsor, mechanical brew lever, boiler-pressure gauge, ergonomic steam and hot-water valves, multidirectional anti-burn wands, low-water indicator, safety valve, resettable safety thermostat and 3 L top reservoir',
  identityBoundary: 'The Product schema and scores refer to the analog Rubino 0981 family, including current US seller SKU 0981RIS-A-XX-XX. They do not refer to the newer factory Rubino Plus, which Quick Mill documents separately with a stainless HX boiler, PID, OLED display, shot timer, programmable pre-brew, dual pressure gauge, Instant Stability and a different power range. Black-and-timber finishes, dealer accessories, group thermometers, flow-control kits, 230 V units and used modifications remain separate.',
  primaryStrength: 'Rubino 0981 fits a genuine HX boiler, simultaneous steam workflow and traditional E61-style controls into an unusually narrow body.',
  primaryLimit: 'Its analog pressostat system asks the user to manage warm-up and cooling flushes, while current seller naming can obscure the newer Rubino Plus boundary.',
  setupNote: 'Confirm model 0981, SKU, serial, front control layout, boiler material, 115 V rating plate, plug, written warranty and seller authorization before payment. Do not infer PID from the words Plus in a listing. Preserve packaging and inspect the body, group, gauge, reservoir, valves, wands, cord and accessories on arrival. Follow the delivered manual for filling and first start, never heat an empty boiler, and give the 452 mm depth, portafilter swing, lever travel, top-fill reservoir and cup rail real clearance.',
  espressoNote: 'The thermosyphon group and HX circuit can produce a stable manual routine after the machine is fully heat soaked, but the analog Rubino offers no user-set brew temperature. The operator manages idle heat with a repeatable cooling flush, then controls grind, dose, distribution, tamp, yield and time. Artisti’s exact-model review demonstrates the process, while a six-month owner reports that a group thermometer made temperature decisions easier. Those are useful observations, not Coffeedant measurements. We did not measure warm-up, group temperature, pressure, flow, noise or taste.',
  milkNote: 'The 1.8 L service boiler can maintain steam while brew water passes through the heat exchanger, which makes the machine fundamentally better suited to consecutive cappuccinos than a single boiler. Official records show multidirectional anti-burn wands and ergonomic valves. Video demonstrations show practical latte preparation, but do not establish a universal steaming speed or texture result. Boiler pressure, tip condition, milk quantity, pitcher size and technique still shape the outcome.',
  workflowNote: 'The daily rhythm is traditional: fill the 3 L tank, allow the boiler and heavy group to stabilize, prepare a 58 mm basket, flush according to the idle state, lift the lever, and stop the shot by time and beverage mass. For milk drinks, steam can run during or immediately around brewing, then the wand needs wiping and purging. There is no automatic shot stop, PID display, timer, grinder, app or direct plumbing. A group thermometer can help observation but remains an owner-added accessory.',
  buildNote: 'Quick Mill specifies stainless bodywork, an E61-style group with stainless mushroom, insulated 1.8 L HX boiler, pressostat, safety valve, resettable thermostat and a vibration pump with pulsor. The official page allows polished stainless or matte black finishes and lists 19.5 kg. Chris Coffee describes copper boiler construction for the current US SKU, while the separate Rubino Plus page specifies stainless. That difference is another reason to verify the exact generation rather than generalize from the family name.',
  featuresNote: 'The scored Rubino’s useful features are analog and visible: brew lever, boiler-pressure gauge, steam and hot-water valves, low-water warning, standby function, cup warmer, anti-burn wands and a large reservoir. Quick Mill explicitly lists no PID. The newer Rubino Plus adds features that must not be backfilled into this review: OLED display, temperature control, shot timer, pre-brew settings, eco modes, dual gauge and Instant Stability.',
  valueNote: 'At US$1,999, Rubino 0981 value depends on wanting compact HX mechanics rather than the newest electronic controls. Profitec Pro 400 and Lelit MaraX offer more explicit temperature-management features; Quick Mill Andreja Premium Evo gives a larger same-brand traditional HX alternative; QM67 Evo moves to dual boilers and PID for more money. Used Rubino prices can look attractive, but service history, water condition, steam valves, reservoir parts, seals, pump, boiler and local labor belong in the calculation.',
  ownerPattern: 'Owner evidence repeatedly praises the narrow body, strong milk-drink workflow and satisfying espresso once a flush routine is learned. A six-month review describes improved control after adding a group thermometer. Buying threads compare the analog Rubino with PID machines and note that documentation and modification support are thinner than for Gaggia or larger E61 communities. Repair discussions include reservoir and steam-valve questions. These patterns guide inspection and buyer fit; they do not establish failure rates.',
  ownerCaution: 'Community posts mix Rubino 0981, Rubino Plus, different voltages, finishes, water, age, seller packages and owner modifications. A positive six-month report cannot prove long-term durability, and a reservoir or steam fault does not prove a common defect. Used buyers should obtain service invoices and budget for professional inspection instead of assuming that traditional construction makes every repair simple.',
  maintenanceNote: 'After use, flush the group briefly, remove coffee from the basket and shower area, wipe and purge the steam wand, empty the tray and refresh the reservoir. Follow the delivered manual and qualified service guidance for water backflushing, detergent and scale control. Test water rather than guessing. Changes in fill behavior, boiler pressure, heating, steam flow, leaks or pump sound deserve diagnosis. Boiler, pressostat, valve, heater, pump and mains work belongs with a qualified technician.',
  dimensions: {
    espresso: { score: 8.0, claim: 'The E61-style group and 1.8 L HX boiler provide a serious traditional espresso platform once fully stabilized.', consequence: 'No PID means idle time and cooling-flush technique remain part of repeatability.', status: 'Current official architecture, independent video and bounded owner evidence; no Coffeedant testing', signals: ['1.8 L insulated HX boiler.', 'E61-style thermosyphon group.', 'No PID on Rubino 0981.'] },
    milk: { score: 8.5, claim: 'Heat-exchanger architecture supports simultaneous espresso and manual steam.', consequence: 'Steam results still depend on boiler pressure, tip condition, milk volume and technique.', status: 'Official specification plus independent demonstration', signals: ['Simultaneous brew and steam.', 'Multidirectional anti-burn wand.', '1.8 L service boiler.'] },
    workflow: { score: 7.4, claim: 'A 3 L reservoir, clear lever controls and simultaneous steam make service practical after warm-up.', consequence: 'Cooling flushes, manual shot stopping and top filling remain active tasks.', status: 'Official controls plus owner routines', signals: ['3 L reservoir.', 'Mechanical lever and valves.', 'No timer or volumetric stop.'] },
    build: { score: 8.2, claim: 'Stainless bodywork, conventional HX mechanics and safety components support service planning.', consequence: 'Water, seals, valves, pressostat and vibration pump still require care and qualified repair.', status: 'Manufacturer construction record and repair context; no teardown', signals: ['19.5 kg stainless chassis.', 'Safety valve and resettable thermostat.', 'Serviceable analog architecture.'] },
    features: { score: 6.9, claim: 'Gauge, low-water protection, standby and anti-burn wands cover the analog essentials.', consequence: 'PID, OLED display, shot timer and programmable pre-brew belong to Rubino Plus, not Rubino 0981.', status: 'Current factory generations explicitly separated', signals: ['Boiler-pressure gauge.', 'Low-water sensor and standby.', 'No PID or electronic shot tools.'] },
    value: { score: 7.2, claim: 'US$1,999 buys a compact Italian HX platform with current stock and specialist support.', consequence: 'At this price, electronic HX and dual-boiler rivals make exact generation and warranty decisive.', status: 'Current US listing checked September 25, 2026 with naming conflict disclosed', signals: ['US$1,999 in-stock reference.', 'SKU 0981RIS-A-XX-XX.', 'Seller title and analog specification conflict.'] },
  },
  sources: [
    { label: 'Quick Mill official Rubino page', href: official, note: 'Current analog Rubino identity, no-PID status, 1.8 L HX boiler, group, pump, controls, tank, dimensions, weight, power, voltage and official media checked September 25, 2026.' },
    { label: 'Quick Mill official Rubino Plus page', href: officialPlus, note: 'Separate newer generation with stainless HX boiler, PID, OLED display, timer, pre-brew settings, dual gauge and Instant Stability. Used to enforce the model boundary.' },
    { label: 'Chris Coffee current US listing', href: chrisCoffee, note: 'US$1,999, in-stock status and SKU 0981RIS-A-XX-XX checked September 25, 2026. Page title says Plus while copper-boiler analog specifications align with Rubino 0981, so identity remains flagged.' },
    { label: 'Artisti Coffee Roasters Rubino review video', href: video, note: 'Unique exact-model review published June 3, 2020 covering unboxing, controls, espresso, steam and buyer fit. It is not Coffeedant testing or current-price evidence.' },
    { label: 'Artisti black-and-timber Rubino listing', href: artisti, note: 'Regional exact-family listing used for finish, package and independent demonstration context. Australian pricing, power and accessories are not transferred to the US SKU.' },
    { label: 'Crema Quick Mill Rubino 0981 listing', href: crema, note: 'Model-number cross-check for polished stainless Rubino 0981, E61 group and copper HX architecture. Regional availability and voltage remain separate.' },
    { label: 'Di Pacci USA Rubino listing', href: diPacci, note: 'US-facing cross-check for Rubino identity, 1.8 L copper boiler, 3 L tank, dimensions, accessories and two-year listing warranty. Its 220 V Schuko specification is not the scored US electrical setup.' },
    { label: 'Reddit six-month Rubino review', href: ownerReview, note: 'Self-selected owner context on two-cup use, cooling flushes, repeatability and an added group thermometer. It provides no controlled benchmark or reliability denominator.' },
    { label: 'Home-Barista Rubino reservoir repair thread', href: repairThread, note: 'Recent single repair discussion used to identify reservoir-part and service questions. It does not establish incidence or a universal repair path.' },
    { label: 'Reddit Rubino 0981 used-machine thread', href: usedThread, note: 'Used 2019 machine and weak-steam discussion used for inspection and service boundaries. Individual repair advice is not a diagnosis for another unit.' },
    { label: 'Reddit Rubino versus Gaggia used-buy thread', href: buyerThread, note: 'Buyer context on no-PID HX use, documentation, modification support and used pricing. Comments are opinions, not performance measurements.' },
    { label: 'Profitec official Pro 400 page', href: pro400Official, note: 'Current compact HX comparison with electronically selectable temperature and pre-infusion features.' },
    { label: 'Lelit official MaraX page', href: maraXOfficial, note: 'Current heat-exchanger comparison used for temperature-management and buyer-fit contrast rather than Rubino specification evidence.' },
  ],
  comparisons: [
    { name: 'Quick Mill Rubino 0981', href: '/espresso-machine/quick-mill-rubino/', quickDecision: 'Choose a narrow analog HX when manual E61-style warm-up and flush technique are welcome.', priceClass: 'US$1,999 current reference', dimensions: '265 W × 452 D × 358 H mm', heating: '1.8 L pressostat-controlled HX boiler', coffeeSetup: 'E61-style group and boiler gauge', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Traditional compact HX workflow' },
    { name: 'Profitec Pro 400', href: '/espresso-machine/profitec-pro-400/', quickDecision: 'Choose selectable temperature and electronic pre-infusion modes in another compact HX.', priceClass: 'Premium compact HX class', dimensions: 'Compact traditional chassis', heating: 'Temperature-selectable HX boiler', coffeeSetup: 'E61 group with electronic assistance', milkWorkflow: 'Simultaneous manual steam', bestFor: 'More guided HX ownership' },
    { name: 'Lelit MaraX', href: '/espresso-machine/lelit-mara-x/', quickDecision: 'Choose an HX platform designed around easier brew-temperature management and compact width.', priceClass: 'Premium compact HX class', dimensions: 'Narrow E61 chassis', heating: 'Managed HX system', coffeeSetup: 'E61 group with temperature modes', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Less cooling-flush guesswork' },
    { name: 'Quick Mill QM67 Evo', href: '/espresso-machine/quick-mill-qm67-evo/', quickDecision: 'Choose separate boilers, PID and shot timer when independent brew and steam control justifies more cost.', priceClass: 'US$2,495 current reference', dimensions: '11.25 W × 17.75 D × 16.25 H in', heating: '0.75 L brew plus 1 L steam boilers', coffeeSetup: 'E61, PID, timer and dual gauge', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Dual-boiler control' },
  ],
  comparisonNote: 'Choose the exact generation and temperature architecture first. Rubino 0981 is analog; Rubino Plus is a separate PID/OLED machine; Pro 400 and MaraX add managed HX tools; QM67 Evo adds a dedicated brew boiler. Then compare voltage, dimensions, water, warranty and service instead of assuming similar names mean similar controls.',
  recommendations: [
    { kicker: 'Managed HX alternative', title: 'Profitec Pro 400', text: 'Choose selectable temperature and pre-infusion modes when compact E61 looks matter but an analog flush routine does not.', href: '/espresso-machine/profitec-pro-400/', linkLabel: 'Read Profitec Pro 400 review', featured: true },
    { kicker: 'Compact HX alternative', title: 'Lelit MaraX', text: 'Choose an HX design centered on easier brew-temperature management in another narrow traditional body.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read Lelit MaraX review' },
    { kicker: 'Dual-boiler Quick Mill', title: 'Quick Mill QM67 Evo', text: 'Choose separate boilers, PID and a shot timer when independent brew control matters more than the lower Rubino price.', href: '/espresso-machine/quick-mill-qm67-evo/', linkLabel: 'Read QM67 Evo review' },
    { kicker: 'Larger analog Quick Mill', title: 'Quick Mill Andreja Premium Evo', text: 'Choose another traditional same-brand HX when the larger chassis and its service package fit better.', href: '/espresso-machine/quick-mill-andreja-premium-evo/', linkLabel: 'Read Andreja Premium Evo review' },
  ],
  faqs: [
    { question: 'What is the current Quick Mill Rubino 0981 price?', answer: 'Chris Coffee displayed US$1,999 and in-stock status for SKU 0981RIS-A-XX-XX on September 25, 2026. Confirm the exact generation because the page title and analog specifications conflict.' },
    { question: 'Does the Quick Mill Rubino have PID?', answer: 'Rubino 0981 does not. Quick Mill lists PID as absent. The separate Rubino Plus adds PID, OLED display, shot timer, pre-brew settings and dual pressure gauge.' },
    { question: 'Can Rubino brew and steam simultaneously?', answer: 'Yes. Its 1.8 L heat-exchanger boiler supplies steam while brew water moves through the HX circuit.' },
    { question: 'How large is Rubino 0981?', answer: 'Quick Mill lists 265 mm wide, 452 mm deep, 358 mm high and 19.5 kg, plus space for the lever, portafilter and top reservoir access.' },
    { question: 'Is Rubino 0981 plumbable?', answer: 'Current official and seller records describe a 3 L reservoir and do not document direct plumbing.' },
    { question: 'Does it need a cooling flush?', answer: 'As an analog HX machine, it benefits from a repeatable flush routine matched to idle time and desired brew conditions. Coffeedant does not claim one universal flush volume.' },
    { question: 'Is a group thermometer included?', answer: 'No stock thermometer is documented. Some owners add one to observe group temperature, but it remains an accessory and does not turn Rubino 0981 into Rubino Plus.' },
    { question: 'What should a used buyer inspect?', answer: 'Verify model, voltage, service invoices, water history, heat, fill behavior, steam valve, reservoir parts, leaks, pump sound, gauge and local parts support before agreeing on price.' },
  ],
  finalTitle: 'Choose Rubino 0981 for compact analog HX craft, not Rubino Plus electronics',
  finalVerdict: [
    'Rubino 0981 is a coherent traditional machine: 1.8 L HX boiler, E61-style group, simultaneous steam, 3 L reservoir and analog controls in a 265 mm body.',
    'Its limitations are part of the design. There is no PID or shot timer, temperature management requires a warm-up and flush routine, and the vibration-pump reservoir platform is fully manual.',
    'Buy only after the seller confirms the exact 0981 generation, controls, boiler, voltage, warranty and service. Choose Pro 400 or MaraX for managed HX operation, or QM67 Evo for dual-boiler PID control.',
  ],
  video: { id: 'TSxp32Y_MPQ', title: 'Quick Mill Rubino Home Espresso Machine (Full Review)', creator: 'Artisti Coffee Roasters.', published: '2020-06-03', note: 'Unique exact-model independent review covering unboxing, controls, espresso preparation, steam workflow and buyer fit. It is not Coffeedant testing, current-price evidence or a universal performance measurement.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-rubino-0981-us-source-1">[source]</a> <a href="#quick-mill-rubino-0981-us-source-3">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-rubino-0981-us-source-4">[source]</a> <a href="#quick-mill-rubino-0981-us-source-8">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-rubino-0981-us-source-1">[source]</a> <a href="#quick-mill-rubino-0981-us-source-4">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-rubino-0981-us-source-1">[source]</a> <a href="#quick-mill-rubino-0981-us-source-8">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-rubino-0981-us-source-1">[source]</a> <a href="#quick-mill-rubino-0981-us-source-3">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-rubino-0981-us-source-1">[source]</a> <a href="#quick-mill-rubino-0981-us-source-2">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-rubino-0981-us-source-3">[source]</a> <a href="#quick-mill-rubino-0981-us-source-12">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-rubino-owner-title"><h3 id="quick-mill-rubino-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>A group thermometer can clarify an analog HX routine</strong><p>One six-month owner reports better temperature decisions after adding a group thermometer. That is a useful workflow idea, not factory equipment or a controlled proof of repeatability.</p></li>
    <li><strong>Model identity changes the advice</strong><p>Buying discussions mix Rubino 0981 and Rubino Plus. The analog 0981 lacks the newer PID, OLED display and shot tools, so advice must begin with the front panel and rating plate.</p></li>
    <li><strong>Used value depends on service condition</strong><p>Reservoir and steam-valve questions show why invoices, water history and a live inspection matter. Individual faults do not establish a family-wide reliability rate.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillRubinoReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
