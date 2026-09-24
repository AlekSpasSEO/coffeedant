import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const quickMill = 'https://www.quickmill.it/en/';
const espressoOutlet = 'https://espressooutlet.com/products/quick-mill-alexia-evo-espresso-machine';
const parts = 'https://cdn.shopify.com/s/files/1/0564/3288/5835/files/Alexia_Evo_parts-breakdown.pdf?v=1709839302';
const manual = 'https://nei583dq.cdn.imgeng.in/media/catalog/product/instructions/alexia-manual.pdf';
const firstInCoffee = 'https://www.1stincoffee.com/quickmill-alexia.htm';
const espressoPlanet = 'https://www.espressoplanet.com/products/quick-mill-alexia-evo-with-pid-semi-automatic-espresso-machine';
const myEspressoShop = 'https://www.myespressoshop.com/products/quick-mill-alexia-evo';
const foodal = 'https://foodal.com/drinks-2/coffee/espresso-machines/quick-mill-alexia-review/';
const buyerGuide = 'https://www.home-barista.com/blog/buyers-guide-to-quick-mill-alexia-t4119.html';
const ownerTemperature = 'https://www.home-barista.com/espresso-machines/quickmill-alexia-evo-temperature-management-t39088.html';
const ownerBudget = 'https://www.home-barista.com/advice/espresso-machine-with-1500-budget-leaning-towards-quickmill-alexia-evo-t48410.html';
const ownerRepair = 'https://www.home-barista.com/repairs/quick-mill-alexia-evo-poor-flow-t99517.html';
const usedMarket = 'https://www.reddit.com/r/espresso/comments/11b0jef/800_for_a_2018_quick_mill_alexia_evo_fair/';
const video = 'https://www.youtube.com/watch?v=FpA7vt6iqqs';
const image = 'https://espressooutlet.com/cdn/shop/files/alexia-evo-hero.webp?v=1709839465&width=1000';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-alexia-evo-na',
  slug: '/espresso-machine/quick-mill-alexia-evo-flow/',
  productId: 'CD-EM-000226',
  brand: 'Quick Mill',
  model: 'Alexia Evo 0970-A-CEVO',
  sku: '0970-A-CEVO North American 110 V configuration; flow control is optional hardware',
  category: 'Reservoir-fed E61 single-boiler espresso machine with PID',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Alexia Evo review: sold-out status, single-boiler workflow and flow-control boundary',
  description: 'Research-led Quick Mill Alexia Evo review covering model 0970-A-CEVO, current sold-out status, E61 single-boiler workflow, PID, optional flow control, service evidence and alternatives.',
  verdictLabel: 'A capable espresso-first E61 that now makes most sense as a carefully inspected used buy',
  verdict: 'Alexia Evo is an espresso-first single boiler, not a heat exchanger and not a factory flow-control package. Model 0970-A-CEVO combines a 0.75 L boiler, E61 group, PID shot timer, 3 L reservoir and 58 mm accessories in a narrow stainless body. On September 24, 2026, two US specialists showed $1,550 but out of stock, and Alexia was absent from Quick Mill\'s current home lineup. Buy only after confirming actual availability, voltage, seller support and whether any group-mounted valve is included, professionally installed or an owner modification.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores cover the North American 110 V Alexia Evo identified as 0970-A-CEVO. The older Alexia, Eliane, 230 V regional machines and modified flow-control examples are context, not silent equivalents.',
  image,
  imageAlt: 'Espresso Outlet three-quarter product view of the Quick Mill Alexia Evo 0970-A-CEVO E61 single-boiler espresso machine',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: { label: 'Last checked US listing', msrp: '$1,550, sold out at checked specialists', typical: 'Espresso Outlet and 1st in Coffee each displayed $1,550 and out-of-stock or sold-out status on September 24, 2026. That is a dated listing reference, not evidence that a new machine can be purchased. Used value depends on age, water history, scale, element and pump condition, E61 service, PID behavior, accessories, modification quality and transferable support.', currency: 'USD', numeric: '1550', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the dated Espresso Outlet listing', href: espressoOutlet, note: '$1,550 sold-out listing, product ID, North American specifications, exact-model images, parts diagram and warranty wording checked September 24, 2026', primary: true },
    { label: 'Review Quick Mill\'s current home range', href: quickMill, note: 'Manufacturer site checked September 24, 2026; Alexia was not present in the current home collection, so production status is not inferred from old dealer pages' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Alexia Evo, product ID 0970-A-CEVO, North American 110 V configuration' },
    { label: 'Brew system', value: 'Single 0.75 L insulated boiler, 58 mm E61 thermosiphon group and lever-operated three-way brew circuit' },
    { label: 'Control', value: 'PID brew-temperature setting with integrated shot timer; front dual-purpose pressure gauge' },
    { label: 'Water and pump', value: '3 L removable reservoir, no fixed-water connection; 52 W Ulka vibration pump with Pulsar dampener' },
    { label: 'Fit', value: 'Retailer records vary slightly: about 9 to 9.5 W × 17 to 17.5 D × 15.25 to 15.875 H in; approximately 38 lb' },
    { label: 'Power', value: 'Checked North American version: 110 V, 1,400 W, 15 A; verify the rating plate on every unit' },
    { label: 'Flow control', value: 'Not part of the checked base SKU. A group needle valve and gauge must be verified as a separate kit or modification.' },
  ],
  quickAnswers: [
    { question: 'Is Alexia Evo still current?', answer: 'Availability is doubtful. It was absent from Quick Mill\'s current home lineup, while Espresso Outlet and 1st in Coffee showed $1,550 but sold out or out of stock on September 24, 2026.' },
    { question: 'Is it a heat exchanger?', answer: 'No. The consistent product record identifies one 0.75 L boiler that alternates between brew and steam temperatures. One retailer page incorrectly labels it a heat exchanger and is not used for that claim.' },
    { question: 'Does it include flow control?', answer: 'Not in the checked base 0970-A-CEVO record. The route name reflects a common E61 upgrade path. Confirm the exact valve, gauge, spring, installer and warranty effect on any offered package.' },
    { question: 'Can it brew and steam together?', answer: 'No. Brew first, raise the single boiler to steam temperature, steam, then refill and cool the circuit before another espresso.' },
    { question: 'How long should it warm?', answer: 'The PID can reach its setting before the heavy E61 group is fully stable. Coffeedant did not measure a group-ready time; use a consistent routine and judge the complete thermal system.' },
    { question: 'Who should consider one?', answer: 'An espresso-focused buyer who accepts single-boiler sequencing, reservoir operation, E61 warm-up and the added inspection burden of remaining or used stock.' },
  ],
  bestFor: ['Espresso-first households making a few drinks per session', 'Buyers who want an E61 lever, PID timer and standard 58 mm accessories in a narrow body', 'Used-machine shoppers able to inspect water history, service condition and modification quality'],
  avoidIf: ['You need simultaneous brewing and steaming or frequent back-to-back milk drinks', 'You want a currently listed factory model with simple new-stock availability and unambiguous warranty', 'You assume the route name guarantees an included or factory-installed flow-control kit'],
  pros: ['PID with shot timer removes thermostat guessing from the brew-temperature setting', 'E61 group and 58 mm format support a familiar manual workflow and broad accessory choice', 'Three-liter reservoir and large tray reduce interruptions in espresso-focused use', 'Parts diagram, conventional components and retailer support records help service planning'],
  cons: ['New-stock availability was not established and multiple checked US listings were sold out', 'Single boiler forces a brew, heat, steam, cool and refill sequence for milk drinks', 'E61 thermal mass adds warm-up time despite the modest boiler', 'Flow-control hardware, calibration and warranty status vary by seller or owner installation'],
  architecture: 'a reservoir-fed, single-boiler dual-use machine with a 0.75 L insulated boiler, E61 thermosiphon group, PID with shot timer, 3 L tank, 52 W vibration pump with Pulsar dampener, three-way brew circuit, front pressure gauge and one articulated steam and hot-water wand',
  identityBoundary: 'The Product schema and scores refer to North American product ID 0970-A-CEVO in 110 V form. Flow control is treated as optional E61 hardware, not an included feature of the base machine. Older Alexia versions without the Evo changes, Eliane, regional 230 V configurations, dealer-installed kits and owner modifications are not assumed identical. Quick Mill\'s current site did not list Alexia on September 24, 2026.',
  primaryStrength: 'It puts PID-controlled single-boiler espresso, E61 handling and standard 58 mm tools into a relatively narrow serviceable chassis.',
  primaryLimit: 'Unclear new-stock status, E61 warm-up and single-boiler milk sequencing make newer supported alternatives easier for many buyers.',
  setupNote: 'Confirm identity before setup. Match 0970-A-CEVO, rating plate, voltage, boiler, PID and included portafilters to the seller record. Inspect shipping damage, tank sensor, tray, hoses, wiring and any flow-control modification before energizing. The three-position switch has a dedicated initial-fill position; follow the manual so the boiler contains water before heat is enabled. Use water that meets the seller and local service guidance. Place the 38 lb machine on a level counter with room for its deep body, hinged top fill and hot E61 group.',
  espressoNote: 'The PID sets boiler temperature and the timer starts with the brew lever, but neither measures puck temperature or beverage yield. A repeatable recipe still needs dose, grind, distribution, tamp, yield, warm state and time. The stock E61 adds mechanical pre-infusion and thermosiphon behavior. Optional flow control can restrict inlet flow and extend low-flow wetting, but valve position is not a universal pressure profile and a group gauge is not a flow meter. Coffeedant did not taste coffee or measure temperature, pressure, debit, recovery or extraction.',
  milkNote: 'One boiler serves brewing, steam and hot water at different temperature ranges. The Evo record includes a no-burn articulated wand, non-compression valve and two-hole tip. That can support occasional milk drinks, but the sequence matters: pull espresso, switch to steam, wait, purge, texture, then cool and refill before returning to brew. Retailer and owner observations do not establish a universal transition or steaming time. Buyers serving several milk drinks should compare a dual boiler or heat exchanger.',
  workflowNote: 'Straight espresso is direct once the group is stable: prepare the puck, lift the E61 lever, watch time and yield, then lower the lever to vent the group. The large reservoir and tray reduce refill and emptying frequency. Milk adds temperature switching and a cooling routine. A flow-control kit adds another variable that must be logged deliberately; leaving the valve fully open should be the reference only after the installer confirms its calibration. Top-fill clearance, hot metal and the manual initial-fill procedure are daily practical concerns.',
  buildNote: 'Retailer records identify a 304 stainless exterior, low-lead brass components, insulated T.E.A.-treated boiler, E61 group, magnetic low-water protection, resettable high limit, accessible expansion valve and external boiler drain. The Quick Mill parts drawing for model 0970 provides revision-aware component references. These details support service planning, not a lifetime claim. Age, water, transport, previous repairs and modifications determine the condition of any remaining unit.',
  featuresNote: 'The useful feature set is focused: PID, automatic shot timer, pressure gauge, E61 lever, three-position fill and heat switch, hinged tank lid, low-water sensor, Pulsar pump dampener, large tray and articulated wand. There is no volumetric stop, brew-by-weight, app, fixed-water connection, separate steam boiler or factory electronic profiling program. Optional flow control must be documented separately rather than folded into the base specification.',
  valueNote: 'The checked $1,550 number is a sold-out reference, not a current transaction price. At that level, compare the supported Profitec Go for faster heating, Lelit Victoria for a compact PID single boiler, ECM Classika PID for a current E61 single boiler, and Rancilio Silvia Pro X for dual-boiler milk workflow. Used Alexia value should subtract for unknown water history, missing accessories, overdue E61 service, weak pump or element, PID faults and undocumented group modifications. A good grinder and suitable water remain part of the station cost.',
  ownerPattern: 'Owner discussions repeatedly frame Alexia Evo as an espresso-focused upgrade from smaller single boilers, praising the E61 feel, PID, build and large reservoir while accepting delayed milk service. Repeated questions concern PID offset, full-group warm-up, confusing initial fill, steam comparison, flow restriction after years of use and the price of used examples. Those themes are useful inspection prompts, not measured failure rates or proof that every unit behaves the same.',
  ownerCaution: 'Community reports are self-selected and span older Alexia, Evo, different voltages, grinders, water, service histories and modifications. A happy owner cannot establish longevity; a repair thread cannot establish incidence. Retailer pages sometimes copy contradictory category data, so the single-boiler parts and cross-retailer record govern.',
  maintenanceNote: 'After use, flush the group briefly, wipe the basket and gasket area, empty the tray as needed, purge and wipe the wand, and keep the reservoir fresh. Backflush the three-way E61 circuit on the schedule and chemical method supported by the manual and service provider. Suitable water is essential; do not guess hardness or use scale-forming water. Inspect group gasket, screen, cam lubrication, valves, hoses, pump mounts and tank sensor as behavior changes. Boiler, mains electrical, high-limit, PID, pump, pressure and flow-control work belongs with a competent technician.',
  dimensions: {
    espresso: { score: 8.6, claim: 'PID timing, a 58 mm E61 group and a modest dedicated brew volume create a strong manual espresso platform.', consequence: 'Results still depend on group warm state, grinder, puck preparation, yield and any optional valve setting.', status: 'Documented architecture plus independent and owner context; no Coffeedant testing', signals: ['0.75 L PID-controlled boiler.', 'E61 thermosiphon group.', 'Integrated shot timer.'] },
    milk: { score: 6.7, claim: 'The articulated no-burn wand and two-hole tip support occasional home milk drinks.', consequence: 'A single boiler cannot brew and steam together, so every milk drink adds heating, purging, cooling and refill steps.', status: 'Hardware documented; no measured steaming or transition time', signals: ['One shared boiler.', 'Two-hole steam tip.', 'No simultaneous brew and steam.'] },
    workflow: { score: 7.1, claim: 'Espresso operation is clear once the E61 is warm, with lever control, timer and a large reservoir.', consequence: 'Initial fill, warm-up, top access, milk transitions and optional flow control demand a deliberate routine.', status: 'Manual, parts record and owner questions', signals: ['Three-position power switch.', '3 L removable reservoir.', 'Manual optional profiling.'] },
    build: { score: 8.5, claim: 'Stainless panels, E61 hardware, service drawings and conventional components support repair-oriented ownership.', consequence: 'Remaining examples may be old, scaled or modified, so condition matters more than the original specification.', status: 'Parts drawing and specialist records; no Coffeedant teardown', signals: ['304 stainless exterior.', 'Resettable high limit and boiler drain.', 'Model-specific parts breakdown.'] },
    features: { score: 7.6, claim: 'PID, timer, gauge, low-water protection and pump dampening cover the useful single-boiler essentials.', consequence: 'There is no volumetric stop, plumbing, separate steam boiler or guaranteed factory flow-control hardware.', status: 'Base SKU separated from optional modification', signals: ['PID plus timer.', 'Front pressure gauge.', 'Optional, not bundled, flow control.'] },
    value: { score: 6.2, claim: 'The last checked $1,550 price positioned it as a traditional PID E61 without dual-boiler cost.', consequence: 'Sold-out status and uncertain support reduce value unless a remaining or used unit is priced for condition and risk.', status: 'Dated US listings checked September 24, 2026', signals: ['$1,550 sold-out reference.', 'Current production not confirmed.', 'Used inspection and service budget required.'] },
  },
  sources: [
    { label: 'Quick Mill current manufacturer site', href: quickMill, note: 'Current home range and manufacturer identity checked September 24, 2026. Alexia was absent, so the site supports a lifecycle caution rather than a discontinuation date.' },
    { label: 'Espresso Outlet Alexia Evo listing', href: espressoOutlet, note: '$1,550 sold-out status, product ID 0970-A-CEVO, North American specification, accessories, warranty wording, exact-model media and parts link checked September 24, 2026.' },
    { label: 'Quick Mill Alexia Evo parts breakdown', href: parts, note: 'Nine-page Quick Mill drawing and component list for model 0970, used for service architecture and revision boundaries.' },
    { label: 'Alexia operating manual', href: manual, note: 'Historical operating and safety reference for fill, brew, steam, cleaning and electrical procedures. Exact revision applicability must be confirmed with the unit.' },
    { label: '1st in Coffee Alexia Evo listing', href: firstInCoffee, note: 'Independent retailer cross-check for product ID, $1,550 out-of-stock status, dimensions, single-boiler architecture, electrical specification and two-year seller warranty.' },
    { label: 'Espresso Planet Alexia Evo listing', href: espressoPlanet, note: 'North American importer record for Evo changes including PID timer, boiler drain, Pulsar, magnetic tank sensor, resettable high limit, valves and included portafilters.' },
    { label: 'My Espresso Shop Alexia Evo listing', href: myEspressoShop, note: 'Retailer cross-check for North American dimensions, 1,400 W power, tank, tray, materials, accessories and one-year seller warranty.' },
    { label: 'Foodal Quick Mill Alexia review', href: foodal, note: 'Independent editorial for the older Alexia generation. Used only for lineage and workflow context; its non-Evo wand and optional PID are not assigned to 0970-A-CEVO.' },
    { label: 'Home-Barista Alexia buyer guide', href: buyerGuide, note: 'Independent community editorial for Alexia lineage and single-boiler E61 buyer fit. Older-version boundaries remain explicit.' },
    { label: 'Home-Barista Evo temperature discussion', href: ownerTemperature, note: 'Self-selected owner discussion about PID offsets and group-temperature management. It does not supply Coffeedant measurements or universal settings.' },
    { label: 'Home-Barista $1,500 owner comparison', href: ownerBudget, note: 'Self-selected owner experience and comparison context for Evo workflow, build and PID behavior. No reliability rate is inferred.' },
    { label: 'Home-Barista poor-flow repair thread', href: ownerRepair, note: 'Six-year owner repair discussion used as a maintenance and inspection prompt, not evidence of model-wide incidence.' },
    { label: 'Reddit used Alexia Evo discussion', href: usedMarket, note: 'Self-selected used-market discussion about a 2018 machine and $800 asking price. It demonstrates condition questions, not a current fair-value rule.' },
    { label: 'Kanen Coffee Alexia Evo service video', href: video, note: 'Unique independent exact-model service-completion and test-shot video published December 23, 2017. It shows one serviced machine, not a controlled review or reliability sample.' },
  ],
  comparisons: [
    { name: 'Quick Mill Alexia Evo 0970-A-CEVO', href: '/espresso-machine/quick-mill-alexia-evo-flow/', quickDecision: 'Choose only when an inspected example and single-boiler E61 ritual outweigh uncertain new-stock support.', priceClass: '$1,550 sold-out reference', dimensions: 'About 9 to 9.5 W × 17 to 17.5 D × 15.25 to 15.875 H in', heating: '0.75 L PID single boiler', coffeeSetup: '58 mm E61 lever; optional separate flow-control kit', milkWorkflow: 'Sequential brew and steam', bestFor: 'Espresso-first used or remaining-stock buyer' },
    { name: 'ECM Classika PID Flow Control', href: '/espresso-machine/ecm-classika-pid-flow-control/', quickDecision: 'Compare a current premium E61 single boiler with a clearer supported flow-control configuration.', priceClass: 'Current premium single-boiler class', dimensions: 'Narrow E61 chassis', heating: 'PID single boiler', coffeeSetup: '58 mm E61 with offered flow control', milkWorkflow: 'Sequential brew and steam', bestFor: 'Current supported E61 single-boiler ownership' },
    { name: 'Profitec Go', href: '/espresso-machine/profitec-go/', quickDecision: 'Choose faster warm-up and current compact support when an E61 group is not essential.', priceClass: 'Current compact PID class', dimensions: 'Compact saturated-group footprint', heating: 'PID single boiler', coffeeSetup: '58 mm group with timer and pressure adjustment', milkWorkflow: 'Sequential brew and steam', bestFor: 'Modern compact espresso workflow' },
    { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', quickDecision: 'Choose dual boilers when back-to-back milk drinks matter more than E61 feel or manual flow control.', priceClass: 'Current compact dual-boiler class', dimensions: 'Compact deep rectangular chassis', heating: 'PID dual boiler', coffeeSetup: '58 mm pump extraction with pre-infusion tools', milkWorkflow: 'Simultaneous brewing and steaming', bestFor: 'Mixed espresso and milk service' },
  ],
  comparisonNote: 'Compare lifecycle and heating architecture first. Alexia and Classika are E61 single boilers; Go is a faster compact single boiler; Silvia Pro X is a dual boiler. Then compare actual stock, warranty, warm-up, milk sequence, flow-control provenance, water, grinder, parts and installed service cost.',
  recommendations: [
    { kicker: 'Current E61 route', title: 'ECM Classika PID Flow Control', text: 'Choose a current premium single boiler when supported E61 ownership and a clearer flow-control configuration matter.', href: '/espresso-machine/ecm-classika-pid-flow-control/', linkLabel: 'Read ECM Classika review', featured: true },
    { kicker: 'Faster compact route', title: 'Profitec Go', text: 'Choose a current PID single boiler with quicker readiness when E61 thermal mass is not part of the appeal.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read Profitec Go review' },
    { kicker: 'Compact PID alternative', title: 'Lelit Victoria', text: 'Compare another compact 58 mm single boiler with electronic controls and a smaller ownership footprint.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Lelit Victoria review' },
    { kicker: 'Milk-workflow upgrade', title: 'Rancilio Silvia Pro X', text: 'Choose dual boilers when switching between espresso and steam is the compromise you most want to remove.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read Silvia Pro X review' },
  ],
  faqs: [
    { question: 'Is Quick Mill Alexia Evo discontinued?', answer: 'Coffeedant did not find an official discontinuation notice. It was absent from Quick Mill\'s current home lineup, and two US specialists showed it sold out or out of stock on September 24, 2026. Treat current production as unconfirmed.' },
    { question: 'Is Alexia Evo a heat-exchanger machine?', answer: 'No. Model 0970-A-CEVO is consistently documented as a single-boiler dual-use machine. One retailer page carries contradictory heat-exchanger copy, which conflicts with the parts and specialist record.' },
    { question: 'Does Alexia Evo come with flow control?', answer: 'The checked base SKU does not document it as included. Some sellers or owners add an E61 needle valve and group gauge. Confirm the parts, installer, calibration and warranty effect.' },
    { question: 'Can it steam and brew at the same time?', answer: 'No. The boiler must move from brew temperature to steam temperature and then be cooled and refilled before brewing again.' },
    { question: 'What is the current price?', answer: 'Espresso Outlet and 1st in Coffee each displayed $1,550 on September 24, 2026, but both also showed no stock. Used and remaining-stock prices need condition and support context.' },
    { question: 'How large is Alexia Evo?', answer: 'Retailer dimensions vary slightly by measuring method, from about 9 to 9.5 inches wide, 17 to 17.5 inches deep and 15.25 to 15.875 inches high. Weight is about 38 lb.' },
    { question: 'What should I inspect on a used machine?', answer: 'Verify the rating plate, initial-fill function, heat, PID, pump, tank sensor, leaks, scale, E61 cam and gasket, steam valve, accessories, water history, repair record and any flow-control modification.' },
    { question: 'What water should I use?', answer: 'Use water within the manual, seller and qualified service guidance for corrosion and scale control. Test the actual water rather than assuming bottled or softened water is suitable.' },
  ],
  finalTitle: 'Treat Alexia Evo as a condition-led purchase, not a current factory default',
  finalVerdict: [
    'Alexia Evo remains a coherent espresso machine: PID timing, an E61 group, a large reservoir and serviceable conventional parts in a narrow stainless chassis. For straight espresso, that basic proposition still makes sense.',
    'Its market context has changed. The checked US listings were sold out, the manufacturer\'s current range did not show Alexia, and flow control is a separate modification rather than a guaranteed factory feature. Milk drinks also retain every single-boiler transition.',
    'Buy a remaining or used unit only after identification and inspection. Compare Classika for a current E61 route, Profitec Go or Victoria for current compact single boilers, and Silvia Pro X when milk workflow justifies dual boilers.',
  ],
  video: { id: 'FpA7vt6iqqs', title: 'Quickmill Alexia Evo Making A Shot Service Complete', creator: 'Kanen Coffee, LLC.', published: '2017-12-23', note: 'Unique independent exact-model service-completion and test-shot video. It supplies visual workflow context for one serviced machine, not Coffeedant testing, a controlled performance comparison or a reliability rate.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-alexia-evo-na-source-4">[source]</a> <a href="#quick-mill-alexia-evo-na-source-6">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-alexia-evo-na-source-2">[source]</a> <a href="#quick-mill-alexia-evo-na-source-10">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-alexia-evo-na-source-2">[source]</a> <a href="#quick-mill-alexia-evo-na-source-12">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-alexia-evo-na-source-4">[source]</a> <a href="#quick-mill-alexia-evo-na-source-11">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-alexia-evo-na-source-3">[source]</a> <a href="#quick-mill-alexia-evo-na-source-6">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-alexia-evo-na-source-2">[source]</a> <a href="#quick-mill-alexia-evo-na-source-5">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-alexia-evo-na-source-2">[source]</a> <a href="#quick-mill-alexia-evo-na-source-13">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-alexia-owner-title"><h3 id="quick-mill-alexia-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>PID setpoint is not the whole thermal system</strong><p>Owners discuss offsets and group-temperature routines because the display tracks boiler control while the E61 group has its own thermal mass. This supports a consistent warm-up and verification routine, not one universal correction value.</p></li>
    <li><strong>Used condition can dominate original specification</strong><p>A 2018-machine value discussion turns on maintenance, water and service rather than age alone. Any asking price needs an inspection and repair budget, not comparison with the old list price by itself.</p></li>
    <li><strong>Poor flow is a diagnostic symptom, not a reliability statistic</strong><p>One owner reported restricted flow after about six years. Scale, pump, valve, jet and group causes require diagnosis. The report cannot establish a model-wide failure rate.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillAlexiaEvoFlowReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
