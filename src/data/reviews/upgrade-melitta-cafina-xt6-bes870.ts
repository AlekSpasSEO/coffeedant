import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.melitta-professional.com/us/en/coffeemachines/fuer-den-praktischen-comfort/Melitta-Cafina-XT6';
const officialInternational = 'https://www.melitta-professional.com/int/en/coffeemachines/fuer-den-praktischen-comfort/Melitta-Cafina-XT6';
const hygiene = 'https://www.melitta-professional.com/int/en/coffeemachines/technologiekompetenzen/hygiene';
const independentReview = 'https://vendingtests.com/test/heissgetraenkeautomaten/melitta-cafina-xt6';
const coffeeRepublic = 'https://www.coffeerepublic.com.au/automatic-coffee-machine/melitta-cafina-xt6';
const greenPlantation = 'https://www.greenplantation.com/a/automatic-coffee-machines-from-melitta';
const diPacci = 'https://dipacciusa.com/products/melitta-r-cafina-r-xt7';
const beanBarn = 'https://beanbarndistributors.com.au/products/melitta-cafina-xt6';
const coffeeBeanery = 'https://www.coffeebeanery.com.au/product/melitta-cafina-xt6/';
const intergastro = 'https://www.intergastro.com/coffee-automat-cafina-xt6-incl-two-mills-milk-frother-hot-water-supply-981199';
const video = 'https://www.youtube.com/watch?v=JDBvia6zW9M';
const image = 'https://www.melitta-professional.com/content/dam/mpcs/01-coffee-machines/fully-automatics/xt6/xt6_keyvisual.jpg';

const profile: UpgradeReviewProfile = {
  key: 'melitta-cafina-xt6-commercial',
  slug: '/espresso-machine/melitta-cafina-xt6-bes870/',
  productId: 'CD-EM-000208',
  brand: 'Melitta Professional',
  model: 'Cafina XT6',
  sku: 'Current commercial XT6 family; configured-to-order 200–240 V platform',
  category: 'Commercial superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Melitta Cafina XT6 review: compact commercial capacity',
  description: 'Current Melitta Cafina XT6 review: official DIN output, 200–240 V installation, configurable grinders and milk, CIP cleaning, dated dealer prices and evidence limits.',
  verdictLabel: 'A compact commercial platform whose configuration and support matter as much as its rated output',
  verdict: 'Shortlist the current Cafina XT6 for a staffed or supervised site that needs a narrow commercial machine, broad one-touch menu and up to 250 drinks per day. Melitta publishes drink-specific DIN capacity, a 300 mm-wide cabinet, 200–240 V power and configurable coffee, milk and instant systems. Buy only against a signed configuration, site plan, recipe acceptance test and local service agreement: the family name alone does not identify the grinders, cooler, milk paths, instant module or installation work.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Current specifications come from Melitta Professional. VendingTests supplies a clearly disclosed source-based data review rather than a physical test; dealer pages provide dated pricing, configurations and limited field context. No representative exact-model owner dataset or independently audited uptime record was located.',
  image,
  imageAlt: 'Melitta Professional official key visual of the current Cafina XT6 commercial superautomatic with stainless cabinet and touch display',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked dealer price',
    msrp: 'US$19,850 sale listing',
    typical: 'Di Pacci USA displayed $19,850, reduced from $20,999, on September 24, 2026. Its URL says XT7 while the product title says XT6, so confirm the model and every option in a written quote. Australian listings ranged from AUD$21,074 to AUD$26,399 and differed by configuration and stock status.',
    currency: 'USD',
    checked: 'September 24, 2026',
  },
  links: [
    { label: 'Request the current XT6 specification', href: official, note: 'Current US family page, DIN output, functions, dimensions and dealer contact', primary: true },
    { label: 'Check the dated US dealer listing', href: diPacci, note: 'Volatile advertised price; URL/title conflict and delivered configuration require written confirmation' },
  ],
  facts: [
    { label: 'Commercial scope', value: 'Configured-to-order XT6 family for hospitality and supervised self-service' },
    { label: 'Electrical and size', value: '200–240 V, 2.175–3.040 kW; 300 × 580 × 715 mm W×D×H' },
    { label: 'Rated daily output', value: '250 drinks, subject to recipes, equipment and operating conditions' },
    { label: 'DIN paired output', value: '192 café crème, 300 espresso, 270 cappuccino, 196 latte macchiato per hour' },
    { label: 'Coffee system', value: 'Configurable grinders, up to 20 g brewer, ACS quality correction and VPS pressure control' },
    { label: 'Milk and options', value: 'Professional Milk with cold foam and two milk types; steam, instant and hot-water options' },
    { label: 'Cleaning and modes', value: 'CIP coffee and milk cleaning, waiter or self-service mode, optional Insights telemetry' },
  ],
  quickAnswers: [
    { question: 'Is BES870 an XT6 model number?', answer: 'No official Melitta source uses BES870 for the XT6. It remains only in this legacy URL; the reviewed product is the Cafina XT6.' },
    { question: 'Is it a home machine?', answer: 'No. It is commercial equipment that needs an engineered site, water, waste, cleaning and service plan.' },
    { question: 'Does every XT6 have two grinders?', answer: 'No. Grinder, milk, instant, cooler and water configurations vary by quote.' },
    { question: 'Can it produce paired drinks?', answer: 'Yes, in suitable configurations. Melitta publishes separate single and paired DIN rates.' },
    { question: 'Is the displayed price universal?', answer: 'No. Dealer prices are dated, regional and configuration-specific.' },
    { question: 'Does CIP remove daily work?', answer: 'No. Staff still handle approved agents, milk, waste, contact areas and prompts.' },
  ],
  bestFor: [
    'Hospitality, workplace and institutional sites planning around roughly 250 drinks per day',
    'Counters that need a narrow 300 mm machine with configurable milk and instant capability',
    'Operators able to contract installation, water treatment, cleaning, preventive maintenance and response-time support',
  ],
  avoidIf: [
    'You need a domestic appliance, a portable cart machine or a simple retail-box purchase',
    'You cannot verify the exact grinder, milk, cooler, instant, water and electrical configuration before ordering',
    'You lack trained daily operators, a documented cleaning workflow or local commercial service coverage',
  ],
  pros: [
    'Current official DIN table separates single and paired drink rates',
    'Narrow 300 mm cabinet can conserve counter width in a fixed commercial installation',
    'ACS, VPS, a 20 g stainless brewer and configurable milk support recipe-led operation',
    'CIP, waiter and self-service modes, payment options and telemetry address real operating workflows',
  ],
  cons: [
    'Model name does not reveal the delivered grinders, milk, instant, cooler or water arrangement',
    'Dealer prices vary materially and one US listing has a conflicting XT7 URL',
    'CIP still requires operator chemicals, waste handling, milk sanitation and prompt response',
    'Independent drink, energy, queue, uptime and lifecycle measurements were not located',
  ],
  architecture: 'a 200–240 V commercial bean-to-cup platform with a stainless brewer, up to 20 g dose, configurable bean paths, ACS quality correction, VPS pressure control, an 8.4-inch touch display, Professional Milk options, CIP cleaning and optional telemetry',
  identityBoundary: 'This page covers the current Melitta Professional Cafina XT6 family shown in the United States on September 24, 2026. “BES870” is not an official Melitta XT6 identifier; it is retained only in the historical page address. This review does not merge the XT7, XT8, CT8, older regional builds or any particular used machine. The signed configuration schedule and delivered rating plate control grinder count, milk system, instant modules, power, water, cooler, payment hardware and warranty.',
  primaryStrength: 'It combines serious paired-drink capacity, a broad configurable menu and a narrow cabinet in a commercial platform.',
  primaryLimit: 'Its real value remains inseparable from the exact options, installation, cleaning labour and local service contract.',
  setupNote: 'Plan the menu and peak queue before choosing options. Confirm the 200–240 V supply and actual amperage, water treatment, fixed-water or tank arrangement, drain and waste route, counter load, 300 × 580 × 715 mm machine envelope, cooler and payment modules, refill access and service clearances. The official family page lists multiple modes and options; only the signed schedule identifies the delivered installation.',
  espressoNote: 'Melitta lists a stainless brewer, micro-fine sieve, up to 20 g dose, ACS and VPS. The current DIN table reaches 170 single or 300 paired espressos per hour. Those are standardized capacity figures, not Coffeedant measurements of extraction, beverage mass, temperature, consistency or sensory quality.',
  milkNote: 'Professional Milk can support hot and cold foam and two milk types, depending on configuration. Melitta lists 165 single or 270 paired cappuccinos and 150 single or 196 paired latte macchiatos per DIN hour. Cooler capacity, hose routing, recipes, milk choice and sanitation determine the live result.',
  workflowNote: 'The 8.4-inch touch display supports waiter and self-service modes, electric height adjustment and configured double products. Official capacity is drink-specific: 133 single or 192 paired café crème, 170/300 espresso, 165/270 cappuccino and 150/196 latte macchiato. A dealer quotes lower rates for some drinks, so procurement should use the current official DIN table and verify the chosen recipes in an on-site acceptance test.',
  buildNote: 'The stainless commercial cabinet is only 300 mm wide, but it is 580 mm deep and 715 mm high before accessories and service clearance. Current material lists lockable, expandable bean containers and fixed-water or tank operation. No independent teardown or representative component-life dataset was located.',
  featuresNote: 'Configurable bean paths, ACS, VPS, two milks, cold foam, steam, instant product, hot water, self-service, payment and telemetry can support a broad program. They are not all standard. A line-item schedule should convert each requested capability into specified hardware, commissioned recipes and acceptance criteria.',
  valueNote: 'The checked US listing displayed $19,850 but used an XT7 URL, while Australian listings showed AUD$21,074 and AUD$26,399 for differing packages and availability. Treat all as dated context. Compare exact hardware, freight, commissioning, water treatment, cooler, cleaners, filters, telemetry, preventive maintenance, labour, parts and contracted response time.',
  ownerPattern: 'Exact-model public owner evidence is sparse. Coffee Republic publishes one named Stone & Chalk testimonial and a private-school installation snapshot; both are dealer-curated and do not disclose a complete matched configuration or audited uptime. Di Pacci showed zero customer reviews when checked. That absence does not indicate either good or bad reliability.',
  ownerCaution: 'Use the limited field material to form questions, not rates. Request references with comparable menu, daily volume, milk setup and water; cleaning logs; preventive intervals; local parts stock; first-time-fix capability; service response targets; and a contingency plan. Do not turn one testimonial, one installation or an empty review count into representative sentiment.',
  maintenanceNote: 'CIP cleans coffee and milk paths in place, but it does not remove operator responsibility. Staff still use approved chemicals, manage the milk container and cooler, empty waste, wipe the outlet and milk contact areas, and respond to prompts. The dealer should demonstrate the delivered cleaning sequence and document shift ownership before launch.',
  dimensions: {
    espresso: { score: 8.1, claim: 'A stainless 20 g brewer, ACS and VPS provide a credible commercial recipe-control base.', consequence: 'Commission each drink with the actual beans and vessels; rated capacity is not a sensory result.', status: 'Current official architecture and DIN capacity; no Coffeedant extraction testing', signals: ['170 single or 300 paired espressos per DIN hour.', 'ACS and VPS adjust the configured brewing process.', 'Independent dose, temperature and extraction data were not located.'] },
    milk: { score: 8.5, claim: 'Professional Milk can support hot and cold foam, two milks and strong paired output.', consequence: 'Specify cooler, lines, recipes and sanitation together and validate them during acceptance.', status: 'Current official options and capacity; no Coffeedant milk testing', signals: ['165 single or 270 paired cappuccinos per DIN hour.', 'Cold foam and two milk types depend on configuration.', 'Daily sanitation remains trained operator work.'] },
    workflow: { score: 8.6, claim: 'A touch interface, waiter and self-service modes, paired drinks and payment options suit queue-based service.', consequence: 'Keep the menu purposeful and time the real peak queue before sign-off.', status: 'Current official functions with bounded dealer field context', signals: ['8.4-inch touch display and electric outlet adjustment.', 'Separate single and paired DIN capacity.', 'Actual output varies with recipes, settings and equipment.'] },
    build: { score: 8.0, claim: 'A narrow stainless commercial body is designed for a fixed, serviced installation.', consequence: 'Water, power, drainage, clearances and local parts support matter more than cabinet appearance.', status: 'Official dimensions and electrical range; no independent teardown', signals: ['300 × 580 × 715 mm and 200–240 V.', 'Fixed-water or tank operation is listed.', 'Representative component-life data were not located.'] },
    features: { score: 8.7, claim: 'Coffee, two milks, cold foam, instant, steam, payment and telemetry form a flexible system.', consequence: 'Specify every option; “XT6” alone does not define the delivered machine.', status: 'Current official functions checked September 24, 2026', signals: ['ACS, VPS and up to 20 g brewing.', 'Waiter, self-service, payment and Insights options.', 'XT7, XT8 and CT8 are separate platforms.'] },
    value: { score: 7.2, claim: 'Dated prices give a budget range, but conflicting listings and configurations prevent a universal number.', consequence: 'Compare complete five-year installed cost and contracted uptime across matched quotes.', status: 'Current dealer price snapshots; no verified transaction price', signals: ['US listing displayed $19,850 with a URL/title conflict.', 'Australian listings differed by thousands and package.', 'Consumables, labour, service and downtime belong in total cost.'] },
  },
  sources: [
    { label: 'Melitta Professional US current Cafina XT6 page', href: official, note: 'Current family identity, DIN output, power, dimensions, coffee, milk, cleaning, operating modes and telemetry options; checked September 24, 2026.' },
    { label: 'Melitta Professional international Cafina XT6 page', href: officialInternational, note: 'Regional cross-check of the current family specification and configurable commercial functions.' },
    { label: 'Melitta Professional hygiene and CIP explainer', href: hygiene, note: 'Manufacturer explanation of closed-path cleaning and continuing operator handling of approved chemicals and containers.' },
    { label: 'VendingTests XT6 data review', href: independentReview, note: 'Source-based independent review updated August 3, 2026; it explicitly says the machine was not physically tested and its score is not a Coffeedant measurement.' },
    { label: 'Coffee Republic XT6 dealer page', href: coffeeRepublic, note: 'Australian technical and installation context plus dealer-curated customer material; some capacity figures differ from the current official DIN table.' },
    { label: 'Green Plantation Melitta automatic overview', href: greenPlantation, note: 'Secondary exact-model summary of XT6 capacity and features; useful corroboration, not authority over Melitta.' },
    { label: 'Di Pacci USA XT6 price listing', href: diPacci, note: 'Displayed US$19,850 sale price on September 24, 2026. The URL says XT7 while page title says XT6, so identity and configuration require written confirmation.' },
    { label: 'Bean Barn Australia XT6 listing', href: beanBarn, note: 'Displayed AUD$21,074 and sold-out status when checked; dated regional price context only.' },
    { label: 'Coffee Beanery Australia XT6 listing', href: coffeeBeanery, note: 'Displayed AUD$26,399 for a stated one-grinder, two-milk, hot-water and two-instant configuration; package-specific context.' },
    { label: 'Intergastro XT6 configuration listing', href: intergastro, note: 'Shows a different two-grinder, milk-frother and hot-water package, illustrating why quotes are not directly comparable.' },
    { label: 'Lázeňská Káva XT6 cleaning video', href: video, note: 'Independent retailer exact-model cleaning video published March 25, 2020; useful workflow context, not performance, uptime or current US configuration evidence.' },
  ],
  comparisons: [
    { name: 'Melitta Cafina XT6', quickDecision: 'Choose for a narrow commercial system around the 250-drink daily class with configured milk and instant options.', priceClass: 'Commercial project, dated US listing $19,850', dimensions: '300 × 580 × 715 mm W×D×H', heating: '200–240 V, 2.175–3.040 kW', coffeeSetup: 'Configurable grinders, ACS/VPS, 20 g brew', milkWorkflow: 'Professional Milk, up to two milks', bestFor: 'Medium/high-volume fixed sites' },
    { name: 'Melitta Cafina CT8', href: '/espresso-machine/melitta-cafina-ct8/', quickDecision: 'Step up when higher daily capacity, 400 V infrastructure and broader high-output options fit the site.', priceClass: 'Larger commercial project quote', dimensions: '350 × 650 × 810 mm W×D×H', heating: '400 V, 6.8 kW', coffeeSetup: 'One or two grinders, ACS/VPS, 20 g brew', milkWorkflow: 'Professional Milk or TopFoam', bestFor: 'Higher-volume fixed sites' },
    { name: 'Melitta Cafina XT7', href: '/espresso-machine/melitta-cafina-xt7/', quickDecision: 'Compare when the quote calls for the next XT platform; do not infer XT7 features or price from an XT6 listing.', priceClass: 'Commercial project quote', dimensions: 'Configuration-dependent commercial body', heating: 'Verify regional rating plate', coffeeSetup: 'Verify current regional configuration', milkWorkflow: 'Verify current regional configuration', bestFor: 'Sites needing a documented XT7 package' },
    { name: 'Jura GIGA 6', href: '/espresso-machine/jura-giga-6/', quickDecision: 'Choose a premium home or lighter workplace machine when commercial utilities, output and service contracts are unnecessary.', priceClass: 'Premium domestic/workplace', dimensions: 'Smaller countertop appliance', heating: 'Domestic automatic system', coffeeSetup: 'Dual grinders and guided recipes', milkWorkflow: 'Automatic milk with guided cleaning', bestFor: 'Home or executive office use' },
  ],
  comparisonNote: 'Separate true commercial requirements from domestic convenience first. For commercial quotes, match grinder count, milk and instant modules, cooler, electrical load, water and waste, payment, telemetry, commissioned recipes, queue acceptance, cleaning labour, consumables, warranty, preventive maintenance, parts and response time.',
  recommendations: [
    { kicker: 'Higher commercial capacity', title: 'Melitta Cafina CT8', text: 'A larger 400 V platform for sites whose menu and peak model justify more output and configuration depth.', href: '/espresso-machine/melitta-cafina-ct8/', linkLabel: 'Read Cafina CT8 review', featured: true },
    { kicker: 'Adjacent commercial platform', title: 'Melitta Cafina XT7', text: 'Compare a separately specified XT7 package when a dealer proposes the next platform rather than the XT6.', href: '/espresso-machine/melitta-cafina-xt7/', linkLabel: 'Read Cafina XT7 review' },
    { kicker: 'Lower-volume premium', title: 'Jura GIGA 6', text: 'A dual-grinder automatic for lighter office or household use without a commercial installation project.', href: '/espresso-machine/jura-giga-6/', linkLabel: 'Read Jura GIGA 6 review' },
    { kicker: 'Category framework', title: 'Superautomatic buying guide', text: 'Use the guide to separate domestic convenience from commercial capacity, sanitation and service requirements.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What exact Melitta Cafina XT6 does this review cover?', answer: 'The current commercial XT6 family shown by Melitta Professional in the United States on September 24, 2026. It is configured to order, so the signed schedule and rating plate define the exact machine.' },
    { question: 'Why does the URL contain BES870?', answer: 'It is a legacy address retained to avoid breaking links. Melitta’s current XT6 page does not use BES870 as a model identifier, and this review does not treat it as one.' },
    { question: 'How many drinks can the XT6 produce?', answer: 'Melitta lists 250 daily and drink-specific DIN rates. Single/paired figures are café crème 133/192, espresso 170/300, cappuccino 165/270 and latte macchiato 150/196 per hour. Equipment and settings affect results.' },
    { question: 'Does every XT6 include two grinders?', answer: 'No. Current material describes configurable bean paths, and dealer listings show differing packages. Confirm grinders, hopper assignment, instant modules and recipes in the quote.' },
    { question: 'What power and space does it need?', answer: 'The current official range is 200–240 V and 2.175–3.040 kW, with a 300 × 580 × 715 mm machine body. The site also needs clearance, water, waste and room for configured accessories.' },
    { question: 'Does Clean in Place eliminate cleaning labour?', answer: 'No. CIP cleans internal coffee and milk paths, but staff still use approved agents, manage milk and waste, wipe contact areas, clean refrigeration and respond to prompts.' },
    { question: 'What is the current XT6 price?', answer: 'A US dealer displayed $19,850 on September 24, 2026, but its URL named XT7 while its title named XT6. Australian listings showed different prices and packages. Request a matched line-item quote rather than treating any snapshot as universal.' },
    { question: 'What owner evidence supports the review?', answer: 'Public exact-model evidence is limited to dealer-curated testimonials and installation context, plus an empty retailer review count. No representative owner survey, fleet failure rate or independently audited uptime dataset was located.' },
  ],
  finalTitle: 'Buy the specified XT6 operation, not the inherited URL or family name',
  finalVerdict: [
    'The current Cafina XT6 has a coherent commercial case: a narrow stainless cabinet, drink-specific DIN capacity, a 20 g brewer, ACS, VPS, configurable milk and instant work, CIP and service-oriented modes. For a properly supported site around the 250-drink daily class, it can consolidate a broad menu without requiring the CT8’s larger 400 V platform.',
    'The risk is ambiguity. The legacy BES870 suffix is not an XT6 identifier, dealer packages differ, and even one live US listing conflicts with its own URL. Define the exact hardware, utilities, menu and service terms; test real recipes and the peak queue; document cleaning ownership; and compare five-year installed cost. Without those steps, neither the advertised price nor the family name is a dependable purchase specification.',
  ],
  video: {
    id: 'JDBvia6zW9M',
    title: 'Melitta Cafina XT6 Cleaning',
    creator: 'Lázeňská Káva',
    published: '2020-03-25',
    note: 'Independent retailer exact-model cleaning video. It predates the current US page and does not establish the delivered configuration, cleaning time, performance, service response or reliability.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#melitta-cafina-xt6-commercial-source-1">[source]</a> <a href="#melitta-cafina-xt6-commercial-source-10">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#melitta-cafina-xt6-commercial-source-1">[source]</a> <a href="#melitta-cafina-xt6-commercial-source-4">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#melitta-cafina-xt6-commercial-source-1">[source]</a> <a href="#melitta-cafina-xt6-commercial-source-5">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="melitta-xt6-owner-title"><h3 id="melitta-xt6-owner-title">What the available operator context actually says</h3><ul>
    <li><strong>One named testimonial is dealer-selected</strong><p>Coffee Republic publishes praise from Stone &amp; Chalk about service and coffee experience. It does not disclose a matched XT6 configuration, operating period, failure record or independent methodology.</p></li>
    <li><strong>One school installation shows a plausible use case</strong><p>The same dealer describes a private-school program for about 200 daily cups with 300 staff and configured milk and instant products. The account is useful context, not an audited queue or uptime study.</p></li>
    <li><strong>Zero reviews is not a reliability signal</strong><p>Di Pacci displayed no customer reviews on its XT6-titled page when checked. An empty review count cannot establish satisfaction, faults or fleet reliability.</p></li>
    </ul><p class="review-community-evidence-note">This panel keeps the evidence and its limits readable inside Coffeedant. Source addresses, dates and conflicts remain in the annotated list below.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeMelittaCafinaXT6Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
