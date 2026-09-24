import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.melitta-professional.com/us/en/coffeemachines/fuer-die-grosse-getraenkevielfalt/melitta-cafina-ct8';
const manual = 'https://ct8.melitta-professional.com/fileadmin/Resources/Public/PDF/es/Operators%20manual%20ct8.pdf';
const hygiene = 'https://www.melitta-professional.com/int/en/coffeemachines/technologiekompetenzen/hygiene';
const brochure = 'https://pdf.archiexpo.com/pdf/melitta-professional-coffee-solutions-gmbh-co-k/melitta-cafina-ct8/10393-389479.html';
const cstore = 'https://www.cstoredive.com/news/7-eleven-updated-coffee-specialty-cold-brew-closer-look/692340/';
const coffeeRepublic = 'https://www.coffeerepublic.com.au/automatic-coffee-machine/melitta-cafina-ct8';
const greenPlantation = 'https://www.greenplantation.com/p/melitta-cafina-ct8';
const video = 'https://www.youtube.com/watch?v=gj797Gu76rw';
const employee = 'https://www.reddit.com/r/McDonaldsEmployees/comments/1e04c5z/coffee_and_espresso_machines_can/';
const owner = 'https://www.justanswer.com/small-appliance/r87p1-says-grounds-drawer-full-not-fix.html';
const dailyCleaning = 'https://ct8.melitta-professional.com/fileadmin/Resources/Public/PDF/en/Daily%20Cleaning%20CT8%202-3-15%20Approved.pdf';
const image = 'https://www.melitta-professional.com/content/dam/mpcs/01-coffee-machines/fully-automatics/ct8/ct8_keyvisual.jpg';

const profile: UpgradeReviewProfile = {
  key: 'melitta-cafina-ct8-commercial',
  slug: '/espresso-machine/melitta-cafina-ct8/',
  productId: 'CD-EM-000207',
  brand: 'Melitta Professional',
  model: 'Cafina CT8',
  sku: 'Current US commercial CT8 family; configured-to-order 400 V platform',
  category: 'Commercial superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Melitta Cafina CT8 review: commercial output, real obligations',
  description: 'Current Melitta Cafina CT8 commercial review: DIN output, 400 V installation, one- or two-grinder configurations, CIP cleaning, quote-only buying and service limits.',
  verdictLabel: 'A high-output commercial platform that must be bought as a complete service system',
  verdict: 'Shortlist the current US Cafina CT8 for staffed or supervised high-volume service when a dealer can engineer the exact grinder, milk, instant, water, waste and electrical configuration. Melitta lists up to 350 drinks daily and paired output as high as 300 espressos per hour under DIN conditions. This is not a countertop home machine or a price-comparison purchase: installation, cleaning, telemetry, consumables and response-time support belong in the quote.',
  assessment: 'This is research-led, not Coffeedant testing. Current claims come from Melitta Professional’s US page, while a linked 2015 operator manual documents an earlier CT8 workflow. C-Store Dive supplies observed deployment context; dealers, one service question and employee comments are bounded evidence, not performance or reliability statistics.',
  image,
  imageAlt: 'Melitta Professional official key visual of the current Cafina CT8 commercial superautomatic with stainless body and large touch display',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current commercial price',
    msrp: 'No public US list price located',
    typical: 'Quote required on September 24, 2026. The final figure depends on grinders, milk system, instant module, cooler, payment hardware, installation, water treatment, telemetry and service cover.',
    currency: 'USD',
    checked: 'September 24, 2026',
  },
  links: [
    { label: 'Request the current CT8 specification', href: official, note: 'Current US family page, output table, functions, downloads and dealer contact', primary: true },
    { label: 'Read the linked operator instructions', href: manual, note: 'Older official manual; verify delivered revision and configuration before use' },
  ],
  facts: [
    { label: 'Commercial scope', value: 'Configured-to-order CT8 family for staffed or supervised self-service' },
    { label: 'Electrical and size', value: '400 V, 6.8 kW; 350 × 650 × 810 mm W×D×H' },
    { label: 'Rated daily output', value: '350 drinks, configuration and quality settings dependent' },
    { label: 'DIN paired output', value: '198 café crème, 300 espresso, 288 cappuccino, 232 latte macchiato per hour' },
    { label: 'Coffee system', value: 'One or two grinders, up to 20 g brew, stainless brewer, ACS and VPS' },
    { label: 'Milk and options', value: 'Professional Milk or TopFoam, cold foam, two milks, instant and steam options' },
    { label: 'Cleaning', value: 'CIP coffee and milk cleaning with approved chemicals and operator tasks' },
  ],
  quickAnswers: [
    { question: 'Is this a home espresso machine?', answer: 'No. It is a 400 V commercial system requiring site planning, installation and service.' },
    { question: 'Does every CT8 have two grinders?', answer: 'No. Melitta says up to two; the delivered build controls the bean paths.' },
    { question: 'Can it make two drinks?', answer: 'Configured double products are supported, with separate DIN paired-output figures.' },
    { question: 'Is the price public?', answer: 'No current US list price was located. Treat it as a project quote.' },
    { question: 'Is cleaning hands-free?', answer: 'No. CIP avoids dismantling core paths, but staff still handle chemicals, waste, milk and contact areas.' },
    { question: 'Is 250 cups per hour universal?', answer: 'No. Output varies by drink, single or paired dispense, settings and configuration.' },
  ],
  bestFor: [
    'High-volume hospitality, convenience, workplace or institutional programs with trained daily operators',
    'Sites needing parallel milk and coffee work, configurable menus and supervised self-service',
    'Operators able to contract installation, water treatment, preventive maintenance and response-time support',
  ],
  avoidIf: [
    'You need a plug-in home machine, portable cart appliance or simple retail checkout purchase',
    'Your site lacks 400 V power, suitable water and waste planning, ventilation clearance or local service',
    'You are comparing headline throughput without modelling the actual menu, peak queue and cleaning labour',
  ],
  pros: [
    'Current DIN table separates single and paired output instead of one vague speed number',
    'Configurable one- or two-grinder, milk, instant, steam, hot-water and telemetry system',
    'Stainless brewing group, up to 20 g dose, ACS and VPS support repeat recipe engineering',
    'CIP cleans coffee and milk paths in place without routine brewer disassembly',
  ],
  cons: [
    'No public US list price makes dealer quotes and scope comparison essential',
    '400 V, 6.8 kW and commercial plumbing turn purchase into a facilities project',
    'Options materially change output, menu, cleaning work, footprint and total cost',
    'Independent controlled drink, energy, waste, uptime and lifecycle data were not located',
  ],
  architecture: 'a 400 V, 6.8 kW commercial bean-to-cup platform with a stainless brewing group, one or two high-performance grinders, ACS quality correction, VPS pressure control, a 10-inch touch display, configurable professional milk and instant systems, CIP cleaning and optional telemetry',
  identityBoundary: 'This page covers the current US Melitta Professional Cafina CT8 family shown on September 24, 2026. It does not merge CT8-F filter brewers, CT8plus, XT8, older regional CT8 configurations or a specific used machine. Grinder count, milk system, instant module, water mode, outlets, telemetry, cooler and payment hardware are configuration choices. The signed dealer schedule and delivered rating plate control the purchase.',
  primaryStrength: 'It combines high paired-drink throughput with configurable coffee, milk, cocoa, hot-water, self-service and telemetry workflows in one commercial platform.',
  primaryLimit: 'Its value cannot be judged apart from the engineered configuration, local service contract, water treatment, cleaning labour and downtime plan.',
  setupNote: 'Begin with a menu and peak-hour queue model, not the brochure maximum. Confirm 400 V / 6.8 kW supply, water pressure and treatment, waste route, counter load, 350 × 650 × 810 mm machine envelope, cooler and payment modules, refill access and service clearances. The 2015 manual allowed fixed water or pressure-free canisters, but the current delivered schedule must confirm the intended installation.',
  espressoNote: 'The current page lists a stainless brewer, micro-fine sieve, up to 20 g weighing, ACS and VPS. DIN output reaches 178 single or 300 paired espressos per hour, depending on equipment and settings. Those figures describe standardized capacity, not sensory quality. Coffeedant did not measure dose accuracy, extraction, temperature, beverage mass or recovery.',
  milkNote: 'Current options include Professional Milk or TopFoam with cold foam, two milk types, a foam lance and simultaneous steam capability. DIN figures list 168 single or 288 paired cappuccinos and 150 single or 232 paired latte macchiatos per hour. Milk formulation, cooler layout, hose length, recipes and sanitation determine real service.',
  workflowNote: 'The 10-inch touch display supports waiter and self-service modes, product groups and configured double products. C-Store Dive documented a CT8 deployment offering hot and iced lattes, cappuccino, mocha, flat white, Americano, café con leche and double espresso. That store visit demonstrates menu use, not a universal factory configuration or measured queue test.',
  buildNote: 'The stainless commercial body is 350 mm wide but 650 mm deep and 810 mm high. Melitta lists lockable hoppers, payment integration, fixed water, tank mode and accessory modules. The machine is only one part of the installed footprint. No independent teardown or representative component-life dataset was located.',
  featuresNote: 'One or two grinders, ACS, VPS, two milk types, cold foam, instant product, parallel hot water, tea temperatures, self-service, payment and telemetry can build a broad program. They are not all standard. Require a line-item configuration, capacity calculation and acceptance test so a feature name becomes an operational deliverable.',
  valueNote: 'No public current US list price was located on September 24, 2026. Compare quotes by exact hardware, freight, commissioning, training, water treatment, cleaners, filters, cooler, payment, telemetry fees, preventive maintenance, labour rates, parts availability and response-time commitments. A cheaper incomplete quote is not lower total cost.',
  ownerPattern: 'Public operating evidence is thin. C-Store Dive observed a CT8 in a 7-Eleven program; one employee thread identifies CT8 use in US McDonald’s; one consumer service question reports a persistent grounds-drawer message. Dealers describe high-volume installations and automated cleaning. None provides a fleet denominator, controlled uptime data or a matched configuration comparison.',
  ownerCaution: 'Treat isolated praise, faults and service answers as questions for the dealer. Ask for references with similar daily volume, milk menu and water; documented preventive intervals; first-time-fix capability; parts stock; loaner or contingency plans; and actual cleaning logs. Do not infer a failure rate from one post or a reliability guarantee from a dealer description.',
  maintenanceNote: 'CIP cleans coffee and milk paths in a closed system, but operators still insert approved agents, exchange the milk container for a cleaning container, empty waste, wipe milk tubes, clean the refrigeration interior and respond to prompts. The linked manual directs staff to stop use, isolate power and water, and call approved service for leaks, odour, heat or error messages. Never pressure-wash the machine.',
  dimensions: {
    espresso: { score: 8.2, claim: 'A commercial stainless brewer, 20 g capacity, ACS and VPS provide a strong recipe-control foundation.', consequence: 'Commission every core drink with measured recipes; capacity technology does not replace taste and yield acceptance.', status: 'Current official architecture and DIN capacity; no Coffeedant sensory or extraction testing', signals: ['178 single or 300 paired espressos per DIN hour.', 'One or two grinders depending on configuration.', 'No independent dose, temperature or extraction dataset located.'] },
    milk: { score: 8.7, claim: 'Configurable professional milk systems support hot and cold foam, two milks and high paired output.', consequence: 'The cooler, hoses, recipes, milk choice and cleaning process must be validated as one system.', status: 'Current official milk options plus observed commercial menu context', signals: ['168 single or 288 paired cappuccinos per DIN hour.', 'Professional Milk or TopFoam, cold foam and two milk types.', 'Daily sanitation still requires trained operator work.'] },
    workflow: { score: 8.8, claim: 'A large touch interface, waiter and self-service modes, paired drinks and payment options suit queue-based service.', consequence: 'Program the smallest useful menu and test the real peak queue before launch.', status: 'Current official functions and one documented retail deployment', signals: ['10-inch touch display and self-service mode.', 'Configured double-product service and product grouping.', 'Actual speed depends on menu, settings, vessels and equipment.'] },
    build: { score: 8.0, claim: 'The stainless commercial platform is designed for fixed high-volume use and approved service.', consequence: 'Site services, clearances, water and a local parts route matter more than cabinet finish.', status: 'Official dimensions, electrical record and safety manual; no independent teardown', signals: ['350 × 650 × 810 mm and 400 V / 6.8 kW.', 'Commercial water, waste and accessory planning required.', 'Representative component-life data not located.'] },
    features: { score: 9.0, claim: 'Coffee, two milks, cold foam, instant, steam, tea water, payment and telemetry form a highly configurable platform.', consequence: 'Specify and price each option; “CT8” alone does not identify the delivered machine.', status: 'Current official functions list checked September 24, 2026', signals: ['One or two grinders, ACS, VPS and up to 20 g brewing.', 'Instant, telemetry, lockable hoppers and payment integration available.', 'CT8-F, CT8plus and XT8 remain separate machines.'] },
    value: { score: 7.3, claim: 'Value is potentially strong at sustained volume, but no public US price supports a simple scorecard.', consequence: 'Compare total five-year system cost and contracted uptime, not the machine line alone.', status: 'Quote-only current market position; no verified public transaction price', signals: ['Hardware and installation price not published.', 'Cleaning chemistry, filters, labour and service belong in TCO.', 'Downtime contingency can outweigh headline acquisition cost.'] },
  },
  sources: [
    { label: 'Melitta Professional US current Cafina CT8 page', href: official, note: 'Current family identity, output table, 400 V / 6.8 kW, dimensions, grinder, brew, milk, cleaning, self-service and telemetry options; checked September 24, 2026.' },
    { label: 'Melitta Cafina CT8 operator manual', href: manual, note: 'Official 2015 operator record for safety, installation modes, chip keys, double products, cleaning and approved service; older than the current web specification.' },
    { label: 'Melitta Professional hygiene and CIP explainer', href: hygiene, note: 'Current manufacturer explanation of closed-system coffee and milk cleaning plus required chemicals and cleaning-container exchange.' },
    { label: 'Melitta Cafina CT8 current brochure record', href: brochure, note: 'Current-family architecture, one- or two-grinder boundary, 1.3 kg hoppers, ACS, VPS, capacity, dimensions and optional modules.' },
    { label: 'C-Store Dive 7-Eleven field report', href: cstore, note: 'Jessica Loder’s September 5, 2023 store visit documents a CT8 specialty menu and reported 200-drink throughput in one live retail program.' },
    { label: 'Coffee Republic CT8 dealer page', href: coffeeRepublic, note: 'Commercial deployment and 12-minute cleaning claim from an equipment seller; useful procurement context, not independent laboratory evidence.' },
    { label: 'Green Plantation CT8 technical overview', href: greenPlantation, note: 'Independent retailer description of ACS, VPS, CIP, output and configuration, used as secondary context rather than authority over Melitta.' },
    { label: 'Lázeňská Káva independent CT8 video', href: video, note: 'Exact-model visual walkthrough published March 25, 2020; independent retailer media, not a current US configuration or performance test.' },
    { label: 'McDonald’s employee equipment discussion', href: employee, note: 'One self-selected comment identifies CT8 use in US stores; no configuration, uptime or service denominator.' },
    { label: 'CT8 grounds-drawer service question', href: owner, note: 'One customer reports a persistent grounds-drawer warning and a remote troubleshooting exchange; diagnosis was unresolved and cannot establish frequency.' },
    { label: 'Melitta CT8 daily cleaning guide', href: dailyCleaning, note: 'Official two-page workflow showing cleaner, waste drawer, cleaning pitcher and daily operator interventions.' },
  ],
  comparisons: [
    { name: 'Melitta Cafina CT8', quickDecision: 'Choose when engineered high-volume milk and paired-drink output, stainless construction and configurable service are central.', priceClass: 'Commercial project quote', dimensions: '350 × 650 × 810 mm W×D×H', heating: '400 V, 6.8 kW commercial platform', coffeeSetup: 'One or two grinders, ACS/VPS, 20 g brew', milkWorkflow: 'Professional Milk or TopFoam, two milks', bestFor: 'High-volume fixed sites' },
    { name: 'Jura GIGA 6', href: '/espresso-machine/jura-giga-6/', quickDecision: 'Compare for lower-volume premium workplace service where a consumer-class electrical installation is more appropriate.', priceClass: 'Premium home/workplace', dimensions: 'Smaller countertop body', heating: 'Automatic thermoblock system', coffeeSetup: 'Dual grinders and guided recipes', milkWorkflow: 'Automatic milk with prescribed cleaning', bestFor: 'Executive office or home use' },
    { name: 'Saeco Xelsis', href: '/espresso-machine/saeco-xelsis/', quickDecision: 'Choose a domestic one-touch platform when household convenience matters more than commercial queue capacity.', priceClass: 'Premium domestic', dimensions: 'Home countertop body', heating: 'Domestic automatic platform', coffeeSetup: 'Single bean path and profiles', milkWorkflow: 'Detachable automatic milk system', bestFor: 'Multi-user households' },
    { name: 'Siemens EQ.9 Plus S700', href: '/espresso-machine/siemens-eq9-plus-s700/', quickDecision: 'Compare a dual-hopper domestic route for varied home drinks without commercial utilities and service contracts.', priceClass: 'Premium domestic', dimensions: 'Large home automatic', heating: 'Domestic automatic platform', coffeeSetup: 'Dual bean containers on selected model', milkWorkflow: 'Tube-fed automatic milk', bestFor: 'Home two-bean convenience' },
  ],
  comparisonNote: 'First separate commercial and domestic classes. Then compare the exact quote: grinders, milk and instant modules, electrical load, water and waste, cooler, payment, telemetry, commissioned recipes, rated and tested queue output, cleaning labour, consumables, warranty, preventive maintenance, parts and response time.',
  recommendations: [
    { kicker: 'Lower-volume premium', title: 'Jura GIGA 6', text: 'A premium dual-grinder automatic for lighter office or household duty without a 400 V commercial project.', href: '/espresso-machine/jura-giga-6/', linkLabel: 'Read Jura GIGA 6 review', featured: true },
    { kicker: 'Domestic milk route', title: 'Saeco Xelsis', text: 'Choose home-scale profiles and milk drinks when commercial throughput and payment integration are unnecessary.', href: '/espresso-machine/saeco-xelsis/', linkLabel: 'Read Saeco Xelsis review' },
    { kicker: 'Two-bean domestic', title: 'Siemens EQ.9 Plus S700', text: 'Compare a premium household two-bean workflow before committing to commercial utilities and service.', href: '/espresso-machine/siemens-eq9-plus-s700/', linkLabel: 'Read Siemens EQ.9 review' },
    { kicker: 'Category framework', title: 'Superautomatic buying guide', text: 'Use the guide to separate home convenience from true commercial capacity, sanitation and support requirements.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What exact Melitta Cafina CT8 does this review cover?', answer: 'The current US commercial CT8 family shown by Melitta Professional on September 24, 2026. It is configured to order; the dealer schedule and rating plate define the exact machine. CT8-F, CT8plus and XT8 are separate.' },
    { question: 'How many drinks can the CT8 produce?', answer: 'Melitta lists 350 daily and drink-specific DIN hourly figures. Singles and pairs differ: espresso is 178/300, cappuccino 168/288, latte macchiato 150/232 and café crème 142/198. Equipment, settings and vessels affect results.' },
    { question: 'Does every CT8 include two grinders?', answer: 'No. Current material says up to two high-performance grinders. Confirm grinder count, hopper capacity, bean assignment and instant module in the signed quote.' },
    { question: 'Can a CT8 run in a home kitchen?', answer: 'It is not a normal home appliance. The current specification calls for 400 V and 6.8 kW, and the system needs commercial site, water, waste, cleaning and service planning.' },
    { question: 'Does Clean in Place remove all cleaning labour?', answer: 'No. CIP cleans coffee and milk paths without routine disassembly, but staff must use approved agents, exchange containers, empty waste, wipe tubes and contact areas, clean refrigeration and respond to prompts.' },
    { question: 'Is there a current public price?', answer: 'No public current US list price was located on September 24, 2026. Request a line-item project quote including hardware, freight, commissioning, accessories, water treatment, training, consumables, telemetry and service.' },
    { question: 'What should a site acceptance test include?', answer: 'Use the real beans, milk, cups and recipes. Time the peak queue, check beverage mass and temperature, paired drinks, refill and waste interruptions, milk sanitation, cleaning duration, payment, telemetry and recovery after common prompts.' },
    { question: 'What owner evidence exists?', answer: 'Public evidence is sparse: one documented 7-Eleven deployment, an employee equipment comment and one unresolved grounds-drawer service question. None supports a fleet failure rate, so request comparable operator references and service records.' },
  ],
  finalTitle: 'Buy the configured operation, not the CT8 nameplate',
  finalVerdict: [
    'The Cafina CT8 is credible commercial equipment because the current record exposes serious capacity, utility and configuration detail: 400 V, 6.8 kW, a stainless brewing group, up to two grinders, professional milk choices, paired-drink DIN rates, CIP and telemetry. For a busy fixed site, that can consolidate a large menu and shorten queues.',
    'The purchase decision is operational. A bare model name does not reveal the grinders, milk system, cooler, instant module, payment stack, water treatment, cleaning labour or service response. Build the menu and peak model first, obtain comparable line-item quotes, demand a recipe and queue acceptance test, and contract the support path. If those pieces are missing, the CT8’s headline output is not yet a business case.',
  ],
  video: {
    id: 'gj797Gu76rw',
    title: 'Melitta Cafina CT8',
    creator: 'Lázeňská Káva',
    published: '2020-03-25',
    note: 'Independent retailer exact-model visual walkthrough. It predates the current US page and does not establish the delivered configuration, throughput, drink quality, service response or long-term reliability.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#melitta-cafina-ct8-commercial-source-1">[source]</a> <a href="#melitta-cafina-ct8-commercial-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#melitta-cafina-ct8-commercial-source-1">[source]</a> <a href="#melitta-cafina-ct8-commercial-source-4">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#melitta-cafina-ct8-commercial-source-1">[source]</a> <a href="#melitta-cafina-ct8-commercial-source-5">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="melitta-ct8-owner-title"><h3 id="melitta-ct8-owner-title">What the selected operating evidence actually says</h3><ul>
    <li><strong>A live retail program demonstrates menu breadth</strong><p>C-Store Dive observed a CT8 serving multiple hot and iced milk drinks at one 7-Eleven. The report did not audit recipe quality, uptime or maintenance cost.</p></li>
    <li><strong>Employee identification confirms institutional use, not performance</strong><p>One McDonald’s employee discussion names the CT8 in US stores. It does not expose configuration, service history or representative sentiment.</p></li>
    <li><strong>One persistent grounds warning remains one service case</strong><p>A customer reported a grounds-drawer message and an unresolved remote diagnosis. It is a useful acceptance and support question, not a failure rate.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links. Original addresses, dates and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeMelittaCafinaCT8Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
