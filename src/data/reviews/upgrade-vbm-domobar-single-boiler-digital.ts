import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const official = 'https://vbmespresso.com/en/professional-coffee-machines/home/domobar/';
const brochure = 'https://vbmespresso.com/wp-content/uploads/2024/02/BROCHURE_DOMOBAR_JUNIOR.pdf';
const dataSheet = 'https://vbmespresso.com/wp-content/uploads/2024/06/SpecTec_Domobar.pdf';
const instructions = 'https://vbmespresso.com/wp-content/uploads/2024/06/Domobar_InstructionsManuals.zip';
const history = 'https://vbmespresso.com/en/our-history/';
const houseOfCoffee = 'https://www.house-of-coffee.de/en/products/vbm-vibiemme-new-domobar-digital-espressomaschine';
const coffeeLimit = 'https://shop.coffeelimit.cz/gb/home-espresso-machines/366-domobar-digital-silver-domaci-pakovy-kavovar.html';
const video = 'https://www.youtube.com/watch?v=kD7CV-8WO_A';
const ownerExact = 'https://www.reddit.com/r/espresso/comments/1ni1xzl/anyone_has_a_vbm_domobar_digital/';
const ownerLongTerm = 'https://www.reddit.com/r/espresso/comments/13pmllj/my_trusty_machine_for_over_10_years/';
const hero = 'https://vbmespresso.com/wp-content/uploads/2024/05/VBM_Domobar_Basic_3-4-Dark.jpg';

const profile: UpgradeReviewProfile = {
  key: 'vbm-domobar-single-boiler-digital',
  slug: '/espresso-machine/vbm-domobar-single-boiler-digital/',
  productId: 'CD-EM-000244',
  brand: 'VBM',
  model: 'Domobar Digital',
  sku: 'Current Domobar Digital single-boiler family; confirm finish, 240 V electrical package, plug and regional warranty',
  category: 'OLED-controlled single-boiler manual espresso machine',
  brandPath: '/espresso-machine/',
  title: 'VBM Domobar Digital review: compact group, sequential steam',
  description: 'Current VBM Domobar Digital review covering its 0.5 L single boiler, OLED control, 58 mm VBM group, European price, exact-model video and owner context.',
  verdictLabel: 'A narrow traditional-group single boiler with modern temperature control and a deliberately sequential milk workflow',
  verdict: 'The current VBM Domobar Digital combines a 58 mm VBM 1961 thermosiphonic chromed-brass group, mechanical preinfusion, 0.5 L single boiler, OLED temperature control, pressure gauge and vibration pump in a body only about 22 cm wide. It is an espresso-first machine that changes boiler state for brewing, steam and hot water rather than doing those jobs together. Official documentation is unusually clear, but controlled independent measurements for the current Digital are scarce and some retailer copy conflicts with the factory record. At a checked European price of €1,289, it suits a buyer who wants the VBM group and a compact footprint, accepts sequential milk preparation and has confirmed 240 V regional support.',
  assessment: 'This is a research-led assessment, not a Coffeedant bench test. Current VBM records control model identity and specifications. A short exact-model dealer video documents the interface and workflow, while owner discussions provide bounded context. Coffeedant did not measure temperature, pressure, flow, steam, sound, energy, recovery, durability or reliability.',
  image: hero,
  imageAlt: 'VBM official three-quarter image of the current compact Domobar Digital espresso machine',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: {
    label: 'Current European price',
    msrp: '€1,289',
    numeric: '1289',
    currency: 'EUR',
    typical: 'House of Coffee listed the Domobar Digital at €1,289 including tax on September 25, 2026. Coffee Limit listed the exact model at Kč35,175 including tax. Shipping, finish, plug, voltage, tax treatment and warranty remain regional.',
    checked: 'September 25, 2026',
  },
  links: [
    { label: 'Check the current VBM product record', href: official, note: 'Factory identity, single-boiler architecture, OLED control, dimensions and current finish choices', primary: true },
    { label: 'Watch the exact-model walkthrough', href: video, note: 'Dinzler Kaffeerösterei video published September 22, 2021' },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'Current VBM Domobar Digital single boiler, not Domobar Junior Digital or a Domobar Super heat-exchanger model' },
    { label: 'Heating architecture', value: 'One 0.5 L boiler serving coffee, steam and water separately' },
    { label: 'Group', value: '58 mm VBM 1961 thermosiphonic chromed-brass group with mechanical preinfusion and manual lever' },
    { label: 'Control', value: '128 × 64 OLED with capacitive keyboard for coffee and steam temperature, counters, alerts, units and standby' },
    { label: 'Pump and gauge', value: 'Vibration pump and 40 mm pressure gauge' },
    { label: 'Water and steam', value: 'Removable sensor tank, one steam wand and no separately documented hot-water wand' },
    { label: 'Official size', value: '22 W × 40 D × 37 H cm and 15 kg in the current data sheet' },
    { label: 'Electrical record', value: '1,400 W, 240 V, 50/60 Hz in the current factory data sheet' },
  ],
  quickAnswers: [
    { question: 'Is it a heat exchanger?', answer: 'No. Current VBM documentation calls this a single-boiler machine with coffee, steam and water used separately. Retailer copy describing a heat exchanger or two heating circuits conflicts with the factory record.' },
    { question: 'Is it the Domobar Junior?', answer: 'No. VBM separates Domobar Digital from Domobar Junior Digital in its own brochure. The Junior has a different heating architecture and must not supply specifications or scores for this page.' },
    { question: 'Can it brew and steam together?', answer: 'No. The 0.5 L boiler changes between brew and steam states, so milk drinks are prepared sequentially.' },
    { question: 'Does it have pressure profiling?', answer: 'No current factory document lists programmable pressure profiles. The group provides mechanical preinfusion and manual lever operation, not saved pressure curves.' },
    { question: 'How wide is it?', answer: 'The factory data sheet says 22 cm wide, 40 cm deep and 37 cm high. The live product page rounds width to 22.5 cm and depth to 41.5 cm, so measure the intended counter with working clearance.' },
    { question: 'Who should buy it?', answer: 'An espresso-first European buyer who values the traditional VBM group, OLED temperature settings and narrow body more than simultaneous milk throughput.' },
  ],
  bestFor: [
    'Espresso-first kitchens wanting a traditional 58 mm VBM group in a narrow body',
    'Buyers who value direct temperature settings, a shot count-up and pressure feedback without app dependence',
    'One- or two-drink routines that can accommodate the boiler transition for steam',
  ],
  avoidIf: [
    'You need to brew and steam together or prepare several milk drinks quickly',
    'You need a documented 120 V North American package or established local parts and warranty support',
    'You expect a touchscreen, automatic volumetric stop or programmable pressure profiles from conflicting retailer copy',
  ],
  pros: [
    'Narrow 22 cm factory width with a full 58 mm group',
    'OLED temperature settings, shot count-up, standby and useful fault alerts',
    '0.5 L boiler is larger than many compact single-boiler competitors',
    'Removable sensor tank, drip-tray float and magnetic side panels simplify daily access',
    'Current factory brochure and data sheet establish a clear product boundary',
  ],
  cons: [
    'Single boiler requires a sequential espresso and steam routine',
    'No controlled independent temperature, recovery or steam measurements for the current model',
    'Current evidence and pricing are centered on 240 V European distribution',
    'Retailer descriptions conflict about the display and heating architecture',
    'The traditional thermosiphonic group may need more full warm-up time than the OLED ready indication alone suggests',
  ],
  architecture: 'a tank-fed Italian semi-automatic with one 0.5 L boiler, OLED temperature control, 58 mm VBM 1961 thermosiphonic chromed-brass group, mechanical preinfusion, vibration pump, brew-pressure gauge and one manual steam wand',
  identityBoundary: 'This review scores the current VBM Domobar Digital identified by the live factory page, Domobar brochure and current data sheet. It excludes Domobar Junior Digital, Domobar Super heat-exchanger variants, older Domobar machines without an exact serial and manual match, retailer-created feature combinations and modified or used examples with unknown electrical and service history.',
  primaryStrength: 'It fits a traditional 58 mm group, useful OLED settings and a relatively generous single boiler into a genuinely narrow body.',
  primaryLimit: 'The single boiler makes milk preparation sequential, while independent controlled performance evidence for the current Digital remains limited.',
  setupNote: 'Confirm the exact Domobar Digital, 240 V supply, plug, finish, included accessories, current instructions, warranty and local service before purchase. Allow more than the listed body dimensions for the portafilter, lever, cable, tank removal and safe steam-wand movement. Fill and rinse according to the manufacturer instructions, use suitable water and let the group and portafilter heat fully before judging a recipe.',
  espressoNote: 'The OLED sets coffee temperature and counts brew time upward, while the 40 mm gauge reports brew pressure and the group provides mechanical preinfusion. Those controls support a disciplined manual recipe, but no current independent test establishes basket temperature, recovery or shot-to-shot variation. Keep dose, yield, grind, warm-up and flush behavior fixed, then adjust by taste rather than assuming the display equals coffee-bed temperature.',
  milkNote: 'The same 0.5 L boiler supplies steam after a state change. That is suitable for an occasional cappuccino and slower for a queue. Set the documented steam temperature, wait for steam readiness, purge condensation, texture a modest pitcher, wipe and purge the wand, then return the boiler safely to brew temperature before the next shot.',
  workflowNote: 'The OLED and capacitive controls cover the practical basics: coffee temperature, steam temperature, elapsed brewing, low-water warning, inactivity, temperature units and standby. There is no documented automatic dose stop, app, grinder, saved profile or simultaneous brew and steam. The removable tank, drip-tray float and magnetic side panels help routine access without changing the single-boiler sequence.',
  buildNote: 'VBM documents a chromed-brass thermosiphonic group, 15 kg mass, magnetic side panels, removable sensor tank and synthetic dishwasher-safe drip tray. The current product page offers multiple colors, but finish availability and exact package can vary. Internal boiler, electrical and pump work belongs with qualified service.',
  featuresNote: 'Useful features are temperature settings for coffee and steam, brew count-up, pressure gauge, low-water and timeout alerts, standby and a compact traditional group. Current factory documents do not support retailer claims of a TFT touchscreen, heat exchanger, two heating circuits or programmable pressure profiling.',
  valueNote: 'At €1,289 including tax in one current German listing, the Domobar Digital competes with strong single boilers such as Profitec GO and Lelit Victoria, while Lelit Elizabeth asks more for dual-boiler milk throughput. Its value depends on wanting the VBM group, narrow body and European support rather than simply counting front-panel features.',
  ownerPattern: 'The exact-model discussion shows how little independent coverage exists and how buyers compare it with established PID single boilers and small dual boilers. A separate owner described more than ten years with an older single-boiler Domobar, but that older family example cannot prove the current Digital will share the same life.',
  ownerCaution: 'One exact-model commenter repeated a shop quality concern without details or a dataset. It is an unverified secondhand claim, not defect-rate evidence. Self-selected threads mix markets, generations, water, maintenance, dealer support and owner technique.',
  maintenanceNote: 'Follow the exact VBM instructions for group cleaning, steam-wand care, tank and tray cleaning and water management. The official instruction archive is a ZIP download, so verify that the included manual matches the rating plate. Do not infer parts availability or local repair competence from a European listing.',
  dimensions: {
    espresso: dim(8.1, 'The 58 mm VBM group, temperature setting, pressure gauge and mechanical preinfusion form a credible espresso-first platform.', 'No current controlled independent test establishes basket temperature, recovery or extraction repeatability.', 'Current factory architecture plus exact-model visual documentation', ['0.5 L temperature-controlled coffee boiler.', '58 mm VBM 1961 thermosiphonic group.', 'No Coffeedant or independent controlled brew-temperature series.']),
    milk: dim(6.8, 'A 0.5 L boiler and dedicated steam temperature setting can handle an occasional milk drink.', 'The boiler changes state, so espresso and steaming cannot happen together.', 'Current factory single-boiler record; no controlled steam test', ['One manual steam wand.', 'Separate coffee, steam and water states.', 'No measured transition, steam-power or milk-texture result.']),
    workflow: dim(7.8, 'OLED settings, brew count-up, alerts and standby add useful feedback to a traditional lever routine.', 'Manual dosing and the single-boiler state change keep the workflow operator-dependent.', 'Current factory interface documentation and exact-model video', ['128 × 64 OLED with capacitive keyboard.', 'Low-water, inactivity and timeout alerts.', 'No volumetric stop, app or saved profile.']),
    build: dim(8.1, 'A 15 kg body, chromed-brass group and service-access panels make the compact machine feel substantial on paper.', 'Current reliability and regional parts support are not quantified.', 'Current factory data sheet, brochure and product page', ['15 kg factory mass.', 'Magnetic side panels and removable sensor tank.', 'No representative service-life or failure-rate dataset.']),
    features: dim(7.7, 'The machine includes the temperature, timing and pressure feedback that matter most in manual espresso use.', 'It does not document the touchscreen, heat exchanger or profiling functions claimed by some retailers.', 'Current VBM documents control feature identity', ['Coffee and steam temperature settings.', 'Brew count-up and 40 mm gauge.', 'Retailer feature conflicts excluded.']),
    value: dim(7.5, 'The €1,289 listing buys a compact VBM group machine with modern temperature control.', 'Established single-boiler rivals have broader independent coverage, while a dual boiler can be better for frequent milk drinks.', 'Two exact-model European prices checked September 25, 2026', ['€1,289 German listing including tax.', 'Kč35,175 Czech listing including tax.', 'No dependable current US price or 120 V package found.']),
  },
  sources: [
    { label: 'VBM Domobar Digital official product page', href: official, note: 'Current identity, single-boiler description, OLED control, tank, tray, colors and compact dimensions.' },
    { label: 'VBM Domobar family brochure', href: brochure, note: 'Factory separation of Domobar Digital and Junior Digital, interface functions, group, boiler and equipment.' },
    { label: 'VBM Domobar current data sheet', href: dataSheet, note: 'Official 0.5 L boiler, vibration pump, 1,400 W electrical record, dimensions and 15 kg mass.' },
    { label: 'VBM Domobar instruction archive', href: instructions, note: 'Official downloadable instruction archive. The exact rating-plate and language manual must be confirmed after download.' },
    { label: 'House of Coffee exact-model listing', href: houseOfCoffee, note: '€1,289 tax-included price checked September 25, 2026. Conflicting feature copy is not used for architecture.' },
    { label: 'Coffee Limit exact-model listing', href: coffeeLimit, note: 'Kč35,175 tax-included listing and specifications aligned with the factory single-boiler record.' },
    { label: 'Dinzler exact-model walkthrough', href: video, note: 'One-minute 32-second exact-model video published September 22, 2021; useful for interface and workflow context, not a controlled test.' },
    { label: 'Exact Domobar Digital owner discussion', href: ownerExact, note: 'Self-selected buyer and owner context showing limited coverage and one unverified secondhand quality claim.' },
    { label: 'Older Domobar long-term owner discussion', href: ownerLongTerm, note: 'One older single-boiler Domobar account over more than ten years; not evidence for current Digital reliability.' },
    { label: 'VBM company history', href: history, note: 'Manufacturer context for the VBM name and group heritage, not current-model performance evidence.' },
  ],
  comparisons: [
    { name: 'Profitec GO', href: '/espresso-machine/profitec-go/', quickDecision: 'Compare its faster-heating focus, dedicated brew-pressure adjustment and broader current independent evidence.', priceClass: 'Similar premium single-boiler class', dimensions: 'Compact but wider body', heating: 'PID single boiler', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Transparent setup and current test coverage' },
    { name: 'Lelit Victoria PL91T', href: '/espresso-machine/lelit-victoria-pl91t/', quickDecision: 'Compare its LCC functions, large tank and stronger exact-model independent measurement record.', priceClass: 'Similar premium single-boiler class', dimensions: '23 cm wide compact body', heating: 'PID 0.3 L single boiler', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Compact control with more independent evidence' },
    { name: 'Rancilio Silvia', href: '/espresso-machine/rancilio-silvia/', quickDecision: 'Spend less for an established mechanical platform when factory temperature display and shot timing are not essential.', priceClass: 'Lower traditional single-boiler class', dimensions: 'Compact steel body', heating: 'Thermostat single boiler', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Simple established hardware' },
    { name: 'VBM Domobar Digital', quickDecision: 'Choose the narrow VBM group platform when the European package and sequential workflow fit.', priceClass: '€1,289 Sep 25', dimensions: '22 × 40 × 37 cm; 15 kg', heating: 'OLED-controlled 0.5 L single boiler', coffeeSetup: '58 mm VBM group; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Traditional group in a narrow body' },
  ],
  comparisonNote: 'Compare exact voltage, full warm-up, boiler architecture, group behavior, steam transition, tank access, grinder, water treatment, warranty and qualified local service. Retailer feature lists do not override current factory documentation.',
  recommendations: [
    { kicker: 'Closest current rival', title: 'Profitec GO', text: 'Compare pressure setup, heat-up design, test evidence, support and complete regional price.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read Profitec GO review', featured: true },
    { kicker: 'Compact PID alternative', title: 'Lelit Victoria', text: 'Compare its LCC workflow and stronger independent measurement record at a similar width.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Lelit Victoria review' },
    { kicker: 'Traditional value', title: 'Rancilio Silvia', text: 'Choose established simpler hardware when factory temperature control is not essential.', href: '/espresso-machine/rancilio-silvia/', linkLabel: 'Read Rancilio Silvia review' },
    { kicker: 'More milk capacity', title: 'Lelit Elizabeth', text: 'Move to separate brew and steam boilers when several milk drinks are a normal order.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read Lelit Elizabeth review' },
  ],
  faqs: [
    { question: 'What exact VBM Domobar does this review cover?', answer: 'The current Domobar Digital single-boiler model documented by VBM. It excludes Domobar Junior Digital, Domobar Super heat-exchanger machines and unidentified older Domobar revisions.' },
    { question: 'Is the VBM Domobar Digital a single boiler?', answer: 'Yes. The factory data sheet documents one 0.5 L boiler, and the product page says coffee, steam and water are used separately.' },
    { question: 'Can Domobar Digital brew and steam at the same time?', answer: 'No. It changes the single boiler between brew and steam states, so milk drinks are made sequentially.' },
    { question: 'Does Domobar Digital have a touchscreen?', answer: 'Current factory documentation specifies a 128 × 64 OLED with a capacitive keyboard. Retailer descriptions of a TFT touchscreen are not used for this review.' },
    { question: 'Does it offer pressure profiling?', answer: 'No programmable pressure profiles are documented. The VBM group provides mechanical preinfusion and manual lever control, while the gauge reports pressure.' },
    { question: 'How large is the VBM Domobar Digital?', answer: 'The current factory data sheet says 22 cm wide, 40 cm deep, 37 cm high and 15 kg. The live page rounds two measurements slightly, so preserve practical clearance.' },
    { question: 'How much does VBM Domobar Digital cost?', answer: 'House of Coffee listed it at €1,289 including tax and Coffee Limit at Kč35,175 including tax on September 25, 2026. Regional electrical package, shipping and warranty can change the total.' },
    { question: 'Is VBM Domobar Digital good for milk drinks?', answer: 'It can steam an occasional pitcher, but the single boiler cannot brew and steam together. A dual boiler such as Lelit Elizabeth is better aligned with several milk drinks in succession.' },
  ],
  finalTitle: 'A narrow, serious single boiler whose limits should be part of the purchase decision',
  finalVerdict: [
    'Domobar Digital makes sense as an espresso-first machine. The traditional 58 mm VBM group, 0.5 L boiler, OLED temperature control, shot count-up and pressure gauge cover the core manual workflow in a narrow footprint. The current factory record is specific enough to separate it cleanly from Junior and Super models.',
    'The purchase still requires restraint. It is a sequential single boiler with little current controlled independent measurement, European electrical evidence and conflicting retailer copy. Choose it when the VBM group, compact width and local support matter. Choose a better-documented single boiler or a small dual boiler when measured performance evidence or milk throughput matters more.',
  ],
  video: {
    id: 'kD7CV-8WO_A',
    title: 'Siebträger Espressomaschine La Vibiemme Domobar Digital | DINZLER Kaffeerösterei',
    creator: 'Dinzler Kaffeerösterei AG',
    published: '2021-09-22',
    note: 'Exact-model walkthrough running 1 minute 32 seconds. It documents the machine and controls but is not a controlled performance evaluation.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#vbm-domobar-single-boiler-digital-source-1">[source]</a> <a href="#vbm-domobar-single-boiler-digital-source-4">[source]</a></p>
    <p>The data sheet says 22 × 40 × 37 cm and 15 kg, while the live page rounds width and depth slightly. Treat those as body measurements and preserve working room around every hot or moving part.</p>`,
  espresso: `<p>${profile.espressoNote} <a href="#vbm-domobar-single-boiler-digital-source-2">[source]</a> <a href="#vbm-domobar-single-boiler-digital-source-3">[source]</a></p>
    <p>The display and gauge are useful inputs, not independent proof of coffee-bed temperature, pressure at the puck or extraction quality. No current controlled series was found for this exact model.</p>`,
  milk: `<p>${profile.milkNote} <a href="#vbm-domobar-single-boiler-digital-source-1">[source]</a> <a href="#vbm-domobar-single-boiler-digital-source-2">[source]</a></p>
    <p>Factory wording that coffee, steam and water operate separately is the decisive architecture statement. A retailer calling this a heat exchanger does not make simultaneous use available.</p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="domobar-owner-title"><h3 id="domobar-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Current buyers struggle to find exact-model evaluation</strong><p>The exact-model thread starts from a lack of reviews and a comparison with more established machines. That information gap is itself relevant to purchase confidence.</p></li>
    <li><strong>One quality warning remains unverified</strong><p>A commenter repeated what a shop allegedly said without repair records, sample size or current-model detail. It cannot establish a defect pattern.</p></li>
    <li><strong>An older Domobar account shows family longevity, not a promise</strong><p>One owner reported more than ten years from an older single-boiler Domobar. Different generation, electronics, water and maintenance prevent transfer to the current Digital.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeVbmDomobarSingleBoilerDigitalReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
