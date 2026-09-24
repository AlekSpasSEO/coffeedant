import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.melitta-professional.com/us/en/coffeemachines/fuer-den-praktischen-comfort/Melitta-Cafina-XT7';
const officialInternational = 'https://www.melitta-professional.com/int/en/coffeemachines/fuer-den-praktischen-comfort/Melitta-Cafina-XT7';
const milkSystems = 'https://www.melitta-professional.com/us/en/coffeemachines/technologiekompetenzen/milchsysteme';
const hygiene = 'https://www.melitta-professional.com/int/en/coffeemachines/technologiekompetenzen/hygiene';
const beanScene = 'https://www.beanscenemag.com.au/melitta-cafina-xt7/';
const coffeeRepublic = 'https://www.coffeerepublic.com.au/automatic-coffee-machine/melitta-cafina-xt7';
const greenPlantation = 'https://www.greenplantation.com/p/melitta-cafina-xt7';
const intergastro = 'https://www.intergastro.com/fully-automatic-single-cup-machine-melitta-cafina-xt7-400-volts-incl-2nd-mill-topfoam2-hw-instant1-981571';
const coffeeBeanery = 'https://www.coffeebeanery.com.au/product/melitta-cafina-xt7/';
const brochure = 'https://caffemat.com/data/userfiles/files/Brochure%20Melitta%20Cafina%20XT7%20UK.pdf';
const video = 'https://www.youtube.com/watch?v=4hGSAe-uX1E';
const image = 'https://www.melitta-professional.com/content/dam/mpcs/01-coffee-machines/fully-automatics/xt7/xt7_preview.png';

const profile: UpgradeReviewProfile = {
  key: 'melitta-cafina-xt7-commercial',
  slug: '/espresso-machine/melitta-cafina-xt7/',
  productId: 'CD-EM-000209',
  brand: 'Melitta Professional',
  model: 'Cafina XT7',
  sku: 'Current US two-step XT7 family; 400 V / 5.7 kW commercial platform',
  category: 'Commercial superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Melitta Cafina XT7 review: specify the milk workflow',
  description: 'Current Melitta Cafina XT7 review: US two-step identity, international TopFoam boundary, DIN output, 400 V installation, dated prices, cleaning and evidence limits.',
  verdictLabel: 'A milk-focused commercial platform whose regional configuration must be settled before price',
  verdict: 'Shortlist the current Cafina XT7 when a 300 mm-wide commercial platform, paired-drink capacity and an engineered milk program fit the site. The essential first question is regional identity: Melitta’s US page says North America receives a two-step-only XT7 with an automatic steam wand, while the international page leads with integrated TopFoam. Do not import international milk features or dealer prices into a US quote. Buy the exact grinder, milk, instant, water, cooler and service package, then validate the real menu and peak queue.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Current specifications and the North American two-step boundary come from Melitta Professional. BeanScene provides a dated trade-publication profile; dealer pages supply configuration, field and price context. No independent controlled drink test, representative exact-model owner survey or fleet reliability dataset was located.',
  image,
  imageAlt: 'Melitta Professional official transparent product image of the current Cafina XT7 commercial superautomatic',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked dealer price',
    msrp: '€14,080 current listing',
    typical: 'Green Plantation displayed €14,080 on September 24, 2026. Intergastro showed $16,520.40 plus VAT for a specified 400 V, second-grinder, TopFoam, hot-water and instant package; Coffee Beanery Australia showed AUD$30,799 for a different one-grinder package. These are not US two-step transaction prices.',
    currency: 'EUR',
    checked: 'September 24, 2026',
  },
  links: [
    { label: 'Request the current US XT7 specification', href: official, note: 'Current North American two-step identity, DIN output, power, dimensions and functions', primary: true },
    { label: 'Check the current international XT7', href: officialInternational, note: 'International TopFoam family; do not assume this milk system is sold in the US' },
  ],
  facts: [
    { label: 'US identity', value: 'North America lists the XT7 as two-step only with automatic steam-wand milk work' },
    { label: 'Electrical and size', value: '400 V, 5.7 kW; 300 × 580 × 715 mm W×D×H' },
    { label: 'Rated daily output', value: '250 drinks, dependent on equipment, vessels, water and quality settings' },
    { label: 'DIN paired output', value: '196 café crème, 300 espresso, 280 cappuccino, 210 latte macchiato per hour' },
    { label: 'Coffee system', value: 'Configurable grinders, up to 20 g stainless brewer, ACS and VPS' },
    { label: 'International milk options', value: 'TopFoam, cold foam, two milks and Steam Control Plus; not a US default' },
    { label: 'Cleaning and modes', value: 'CIP coffee and milk cleaning, waiter or self-service mode, optional Insights telemetry' },
  ],
  quickAnswers: [
    { question: 'Is the US XT7 a one-step milk machine?', answer: 'Melitta says North America offers it only as a two-step version; verify the delivered wand and cooler workflow.' },
    { question: 'Does every XT7 include TopFoam?', answer: 'No. TopFoam is central to the international page, but the current US page establishes a two-step-only boundary.' },
    { question: 'Does every XT7 have two grinders?', answer: 'No. Current dealer packages show both one- and two-grinder configurations.' },
    { question: 'Can it produce paired drinks?', answer: 'Yes, in suitable configurations; Melitta publishes separate single and paired DIN rates.' },
    { question: 'Is €14,080 a US price?', answer: 'No. It is a dated international retailer listing and excludes a matched US installation scope.' },
    { question: 'Does CIP remove daily work?', answer: 'No. Operators still handle approved agents, milk, waste, contact areas and prompts.' },
  ],
  bestFor: [
    'Hospitality and workplace sites that can design a deliberate two-step or integrated milk workflow by region',
    'Counters needing a narrow 300 mm commercial machine with strong paired-drink capacity',
    'Operators able to contract electrical, water, cleaning, commissioning and response-time support',
  ],
  avoidIf: [
    'You need a domestic appliance or cannot support a 400 V / 5.7 kW commercial installation',
    'You are assuming the international TopFoam specification applies to the North American machine',
    'You cannot verify the grinder, milk, cooler, instant, water and service package before ordering',
  ],
  pros: [
    'Current official table gives drink-specific single and paired DIN capacity',
    'A 300 mm-wide body preserves counter width while retaining commercial output',
    'ACS, VPS and a stainless 20 g brewer provide a serious recipe-control foundation',
    'International TopFoam offers broad foam formats where that exact configuration is available',
  ],
  cons: [
    'The current North American two-step machine differs materially from international TopFoam positioning',
    '400 V / 5.7 kW, water and accessory planning make this a facilities project',
    'Dated dealer prices describe different hardware and tax treatment',
    'Independent controlled drink, cleaning, uptime and lifecycle data were not located',
  ],
  architecture: 'a 400 V, 5.7 kW commercial bean-to-cup platform with a stainless brewer, up to 20 g dose, configurable bean paths, ACS quality correction, VPS pressure control, an 8.4-inch touch display, CIP cleaning and region-specific milk workflows',
  identityBoundary: 'This page covers the current Cafina XT7 family shown by Melitta Professional on September 24, 2026. The US page says Melitta North America offers the XT7 only as a two-step version with an automatic steam wand. The international page instead promotes integrated TopFoam, cold foam and two-milk capability. Those are not interchangeable purchase specifications. This review does not merge XT6, XT8, CT8, older regional packages or any used machine. The signed schedule and rating plate control the delivered grinder, milk, instant, power, water, cooler, payment, telemetry and warranty.',
  primaryStrength: 'It combines high paired-drink capacity, a narrow cabinet and unusually broad milk capability in the international configuration.',
  primaryLimit: 'Its headline milk features and dealer prices can be misleading unless region and exact hardware are resolved first.',
  setupNote: 'Start with the country, menu and desired division of labour. In North America, confirm the two-step steam-wand workflow, milk storage and staff technique; elsewhere, specify whether TopFoam, cold foam and two milk types are actually included. Verify 400 V / 5.7 kW, amperage, water treatment, drain and waste route, 300 × 580 × 715 mm machine body, cooler, instant and payment modules, refill access and service clearances.',
  espressoNote: 'The current page lists a stainless brewer, micro-fine sieve, up to 20 g dose, ACS and VPS. DIN output reaches 176 single or 300 paired espressos per hour. Those are standardized capacity figures, not Coffeedant measurements of dose, extraction, beverage mass, temperature, recovery or sensory quality.',
  milkNote: 'Milk is the XT7 identity issue. International material describes TopFoam, cold foam, two milk types and Steam Control Plus, while the current US page says North America receives a two-step-only machine with an automatic wand. The current DIN table lists 165 single or 280 paired cappuccinos and 150 single or 210 paired latte macchiatos, but real labour, output and sanitation depend on the delivered milk system.',
  workflowNote: 'The 8.4-inch touch display supports configured products, waiter and self-service modes, lighting and electric spout adjustment. Paired DIN rates reach 196 café crème, 300 espresso, 280 cappuccino and 210 latte macchiato per hour. A US two-step milk drink adds staff work outside the one-touch sequence, so the acceptance test must time the complete drink rather than coffee dispense alone.',
  buildNote: 'The commercial body is 300 mm wide, 580 mm deep and 715 mm high before cooler, cup, payment and service clearance. Melitta lists fixed-water or tank operation, lockable or expandable bean containers and accessory blocks. No independent teardown or representative component-life record was located.',
  featuresNote: 'ACS, VPS, configurable grinders, instant, hot water, self-service, payment and telemetry can support a broad program. TopFoam and two-milk capability are international configuration features, not assumptions for a US purchase. Turn every feature name into line-item hardware, commissioned recipes and acceptance criteria.',
  valueNote: 'The checked €14,080, $16,520.40-plus-VAT and AUD$30,799 listings describe different packages and markets. None supplies a matched US two-step installed price. Compare hardware, freight, commissioning, water treatment, cooler, cleaners, filters, telemetry, training, preventive maintenance, labour, parts and contracted response time over five years.',
  ownerPattern: 'Representative owner evidence was not found. Coffee Republic presents a featured custom XT7 site and says its configured machine can handle two milk types, chocolate and chai; this is dealer-curated project context, not an independent queue or uptime audit. Coffee Beanery lists zero reviews for its package, and Intergastro says there are no user reviews. Empty review counts are evidence of scarcity, not reliability.',
  ownerCaution: 'Request references running the same regional milk system, menu, daily volume and water. Ask for cleaning logs, staff minutes per shift, preventive intervals, local parts stock, first-time-fix capability, response targets and downtime contingency. Do not convert a dealer case study or zero reviews into representative sentiment or a failure rate.',
  maintenanceNote: 'CIP cleans internal coffee and milk paths in place, but staff still add approved cleaning agents, manage the delivered milk equipment, empty waste, wipe outlet and milk contact areas, clean refrigeration and respond to prompts. Two-step US wand care and international TopFoam cleaning are different operating routines; the dealer must demonstrate the exact delivered sequence.',
  dimensions: {
    espresso: { score: 8.3, claim: 'A stainless 20 g brewer, ACS and VPS provide a credible commercial recipe-control base.', consequence: 'Commission each drink with the actual beans, water and vessels; rated capacity is not a sensory result.', status: 'Current official architecture and DIN capacity; no Coffeedant extraction testing', signals: ['176 single or 300 paired espressos per DIN hour.', 'ACS adjusts multiple brewing variables in the configured system.', 'Independent dose, temperature and extraction data were not located.'] },
    milk: { score: 9.0, claim: 'International TopFoam offers exceptional format breadth, while the US two-step version prioritizes automatic wand work.', consequence: 'Choose and validate the regional milk workflow before comparing price or labour.', status: 'Current official regional pages; no Coffeedant milk testing', signals: ['165 single or 280 paired cappuccinos per DIN hour.', 'International TopFoam includes cold foam and two milks.', 'North America is explicitly two-step only.'] },
    workflow: { score: 8.7, claim: 'A touch interface, paired drinks, service modes and payment options suit commercial queues.', consequence: 'Time the complete beverage including two-step milk labour, refills and interruptions.', status: 'Current official functions with bounded dealer project context', signals: ['8.4-inch touch display and electric outlet adjustment.', 'Waiter and self-service modes are listed.', 'Actual throughput varies by regional configuration and recipe.'] },
    build: { score: 8.1, claim: 'A narrow commercial body is engineered for a fixed, professionally serviced installation.', consequence: 'Utilities, clearances, cooler layout and local parts support matter more than cabinet finish.', status: 'Official dimensions and electrical load; no independent teardown', signals: ['300 × 580 × 715 mm and 400 V / 5.7 kW.', 'Fixed-water or tank operation is listed.', 'Representative component-life data were not located.'] },
    features: { score: 9.1, claim: 'Coffee, international TopFoam, two milks, instant, steam, payment and telemetry form a flexible platform.', consequence: 'Specify every option and preserve the US two-step boundary.', status: 'Current official functions checked September 24, 2026', signals: ['ACS, VPS and up to 20 g brewing.', 'CIP, self-service, payment and Insights options.', 'XT6, XT8 and CT8 are separate machines.'] },
    value: { score: 7.0, claim: 'Several dated prices exist, but regional milk systems and packages prevent a universal number.', consequence: 'Compare complete installed systems and contracted uptime on the same scope.', status: 'Current dealer price snapshots; no verified US transaction price', signals: ['€14,080 current international listing.', 'Other packages ranged by market, grinder, milk, instant and tax.', 'Consumables, labour, service and downtime belong in total cost.'] },
  },
  sources: [
    { label: 'Melitta Professional US current Cafina XT7 page', href: official, note: 'Current North American two-step identity, Steam Perfect/Steam Control Plus context, DIN output, 400 V / 5.7 kW, dimensions and functions; checked September 24, 2026.' },
    { label: 'Melitta Professional international Cafina XT7 page', href: officialInternational, note: 'Current international TopFoam, cold-foam, two-milk and Steam Control Plus positioning plus shared capacity and dimensions.' },
    { label: 'Melitta Professional milk systems overview', href: milkSystems, note: 'Manufacturer boundaries among Basic, Standard, Professional and TopFoam Plus milk systems; configuration authority remains the signed quote.' },
    { label: 'Melitta Professional hygiene and CIP explainer', href: hygiene, note: 'Manufacturer explanation of closed-path cleaning and continuing operator handling of agents and containers.' },
    { label: 'BeanScene XT7 trade profile', href: beanScene, note: 'May 10, 2021 trade-publication profile of the XT7, 8.4-inch interface, ACS and stated 170-cup output; not a disclosed controlled test.' },
    { label: 'Coffee Republic XT7 dealer page', href: coffeeRepublic, note: 'Australian configuration, utilities, cleaning claim and featured-site context; seller evidence, and its hourly figures differ from the current official DIN table.' },
    { label: 'Green Plantation current XT7 listing', href: greenPlantation, note: 'Displayed €14,080 and described a two-grinder international TopFoam configuration on September 24, 2026.' },
    { label: 'Intergastro configured XT7 listing', href: intergastro, note: 'Displayed $16,520.40 plus VAT for a 400 V, second-grinder, TopFoam, hot-water and instant package; no user reviews.' },
    { label: 'Coffee Beanery Australia XT7 listing', href: coffeeBeanery, note: 'Displayed AUD$30,799 for a one-grinder, two-milk, hot-water, two-instant and 2×10 L cooler package; zero reviews shown.' },
    { label: 'Cafina XT7 UK brochure archive', href: brochure, note: 'Older four-page regional brochure corroborating 400 V / 5.7 kW, compact dimensions, ACS and milk configuration; not treated as current US package authority.' },
    { label: 'Lázeňská Káva XT7 video', href: video, note: 'Independent retailer exact-model visual walkthrough published March 25, 2020; not a current US configuration or measured performance and reliability test.' },
  ],
  comparisons: [
    { name: 'Melitta Cafina XT7', href: '/espresso-machine/melitta-cafina-xt7/', quickDecision: 'Choose when a milk-led commercial workflow, narrow cabinet and paired output justify precise regional specification.', priceClass: 'Commercial project; €14,080 checked international listing', dimensions: '300 × 580 × 715 mm W×D×H', heating: '400 V, 5.7 kW', coffeeSetup: 'Configurable grinders, ACS/VPS, 20 g brew', milkWorkflow: 'US two-step; international TopFoam options', bestFor: 'Milk-focused commercial sites' },
    { name: 'Melitta Cafina XT6', href: '/espresso-machine/melitta-cafina-xt6-bes870/', quickDecision: 'Choose the lower-power XT platform when the menu does not require the XT7’s region-specific milk proposition.', priceClass: 'Commercial project, dated US listing $19,850', dimensions: '300 × 580 × 715 mm W×D×H', heating: '200–240 V, 2.175–3.040 kW', coffeeSetup: 'Configurable grinders, ACS/VPS, 20 g brew', milkWorkflow: 'Professional Milk options', bestFor: 'Medium/high-volume fixed sites' },
    { name: 'Melitta Cafina CT8', href: '/espresso-machine/melitta-cafina-ct8/', quickDecision: 'Step up when higher daily capacity and a larger 400 V platform fit the site better than milk specialization.', priceClass: 'Larger commercial project quote', dimensions: '350 × 650 × 810 mm W×D×H', heating: '400 V, 6.8 kW', coffeeSetup: 'One or two grinders, ACS/VPS, 20 g brew', milkWorkflow: 'Professional Milk or TopFoam by configuration', bestFor: 'Higher-volume fixed sites' },
    { name: 'Jura GIGA 6', href: '/espresso-machine/jura-giga-6/', quickDecision: 'Choose a premium home or lighter office automatic when commercial utilities and service contracts are unnecessary.', priceClass: 'Premium domestic/workplace', dimensions: 'Smaller countertop appliance', heating: 'Domestic automatic system', coffeeSetup: 'Dual grinders and guided recipes', milkWorkflow: 'Automatic milk with guided cleaning', bestFor: 'Home or executive office use' },
  ],
  comparisonNote: 'Resolve region and milk workflow first. Then compare grinder count, milk and instant modules, cooler, electrical load, water and waste, payment, telemetry, commissioned recipes, full-drink queue acceptance, cleaning labour, consumables, warranty, preventive maintenance, parts and response time.',
  recommendations: [
    { kicker: 'Lower-power XT route', title: 'Melitta Cafina XT6', text: 'A narrower-scope commercial platform when the site does not need the XT7’s region-specific milk proposition.', href: '/espresso-machine/melitta-cafina-xt6-bes870/', linkLabel: 'Read Cafina XT6 review', featured: true },
    { kicker: 'Higher commercial capacity', title: 'Melitta Cafina CT8', text: 'A larger 400 V platform when daily and peak output matter more than the XT7’s milk specialization.', href: '/espresso-machine/melitta-cafina-ct8/', linkLabel: 'Read Cafina CT8 review' },
    { kicker: 'Lower-volume premium', title: 'Jura GIGA 6', text: 'A dual-grinder automatic for lighter office or household duty without a commercial installation project.', href: '/espresso-machine/jura-giga-6/', linkLabel: 'Read Jura GIGA 6 review' },
    { kicker: 'Category framework', title: 'Superautomatic buying guide', text: 'Use the guide to separate domestic convenience from commercial capacity, milk labour and service requirements.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What exact Melitta Cafina XT7 does this review cover?', answer: 'The current commercial XT7 family shown by Melitta Professional on September 24, 2026. The US two-step machine and international TopFoam family are kept distinct.' },
    { question: 'Is TopFoam included on the North American XT7?', answer: 'Do not assume it is. Melitta’s current US page says North America offers the XT7 in a two-step-only version with automatic wand milk work. Require the exact milk hardware in writing.' },
    { question: 'How many drinks can the XT7 produce?', answer: 'Melitta lists 250 daily and drink-specific DIN rates. Single/paired figures are café crème 135/196, espresso 176/300, cappuccino 165/280 and latte macchiato 150/210 per hour. Configuration and settings matter.' },
    { question: 'Does every XT7 include two grinders?', answer: 'No. Current dealer packages show one- and two-grinder machines. Confirm grinder count, hopper assignment, instant modules and recipes in the signed schedule.' },
    { question: 'What power and space does it need?', answer: 'The current official specification lists 400 V, 5.7 kW and a 300 × 580 × 715 mm body. The project also needs actual amperage, clearance, water, waste and accessory planning.' },
    { question: 'Does Clean in Place eliminate cleaning labour?', answer: 'No. CIP cleans internal paths, but staff still handle approved agents, milk equipment, waste, contact areas, refrigeration and prompts.' },
    { question: 'What is the current XT7 price?', answer: 'Green Plantation displayed €14,080 on September 24, 2026. Other dealers showed different configured packages and currencies. None is a universal or matched US two-step installed price.' },
    { question: 'What owner evidence supports the review?', answer: 'Public exact-model evidence is sparse and mostly dealer-curated. Two checked retailer packages showed no user reviews, and no representative owner survey or fleet reliability dataset was located.' },
  ],
  finalTitle: 'Buy the regional milk system, not the XT7 headline',
  finalVerdict: [
    'The Cafina XT7 has a credible commercial foundation: compact width, 400 V power, drink-specific paired capacity, a stainless 20 g brewer, ACS, VPS, CIP and a capable service interface. International TopFoam can make it a particularly flexible milk platform; the North American two-step machine can instead suit staffed service that wants automatic wand support.',
    'Those are different operations. Settle country, exact milk system and staff workflow before price. Then specify grinders, cooler, instant, water, payment and service; test complete drinks with the real menu and peak queue; document cleaning ownership; and compare five-year installed cost. Without that discipline, TopFoam claims and international listing prices do not describe the machine a US buyer will receive.',
  ],
  video: {
    id: '4hGSAe-uX1E',
    title: 'Melitta Cafina XT7',
    creator: 'Lázeňská Káva',
    published: '2020-03-25',
    note: 'Independent retailer exact-model visual walkthrough. It predates the current US two-step page and does not establish the delivered configuration, drink performance, cleaning labour, service response or reliability.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#melitta-cafina-xt7-commercial-source-1">[source]</a> <a href="#melitta-cafina-xt7-commercial-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#melitta-cafina-xt7-commercial-source-1">[source]</a> <a href="#melitta-cafina-xt7-commercial-source-5">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#melitta-cafina-xt7-commercial-source-1">[source]</a> <a href="#melitta-cafina-xt7-commercial-source-2">[source]</a> <a href="#melitta-cafina-xt7-commercial-source-3">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="melitta-xt7-owner-title"><h3 id="melitta-xt7-owner-title">What the available operator context actually says</h3><ul>
    <li><strong>One featured site is dealer-curated</strong><p>Coffee Republic presents a customised XT7 program with two milk types, chocolate and chai. It does not publish the matched hardware schedule, operating period, cleaning logs or audited uptime.</p></li>
    <li><strong>Package pages expose configuration differences</strong><p>One Australian listing pairs a single grinder with two milks and two instant bins, while an Intergastro listing includes a second grinder and TopFoam. Neither package defines the North American machine.</p></li>
    <li><strong>No reviews is not a reliability result</strong><p>Coffee Beanery showed zero reviews and Intergastro said there were no user reviews. Empty counts cannot establish satisfaction, failure incidence or lifecycle cost.</p></li>
    </ul><p class="review-community-evidence-note">This panel keeps the evidence and limits readable inside Coffeedant. Source addresses and dated configuration details remain in the annotated list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeMelittaCafinaXT7Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
