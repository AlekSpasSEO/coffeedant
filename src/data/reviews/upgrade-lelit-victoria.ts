import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.lelit.com/product/victoria-pl91t/';
const usOfficial = 'https://www.lelit.com/en-us/product/victoria-pesvi01?sku=PESVI01BSS1BXX1';
const technicalSheet = 'https://www.lelit.com/wp-content/uploads/2024/09/EN-Victoria.pdf?x47602=';
const manual = 'https://www.messinacoffeestore.ch/resources/TECH_7800015_PL81T-PL91T-GRACE-VICTORIA_COVER_REV04_InstructionManuals.pdf';
const softwareGuide = 'https://www.maxicoffee.com/images/pdf/gracevictoria.pdf';
const kanen = 'https://kanencoffee.com/products/lelit-victoria-single-boiler-espresso-machine';
const sweetMarias = 'https://www.sweetmarias.com/products/lelit-victoria-espresso-machine';
const kaffeeMacher = 'https://kaffeemacher.de/en/blogs/kaffeewissen/lelit-victoria-test-und-tipps';
const coffeeKev = 'https://coffeekev.com/lelit-victoria-review/';
const coffeeGeek = 'https://coffeegeek.com/reviews/firstlooks/lelit-victoria-espresso-machine-first-look-review/';
const film = 'https://www.youtube.com/watch?v=aNeCGmEiLoA';
const parts = 'https://www.1st-line.com/technical-support/lelit-technical-support-page/parts-diagram-lelit-pl91t-victoria/';
const ownerReview = 'https://www.reddit.com/r/espresso/comments/qnipiq/impressions_and_review_of_the_lelit_victoria/';
const ownerOpinions = 'https://www.reddit.com/r/Lelit/comments/15kbu6i/considering_buying_a_lelit_victoria_any_opinions/';
const ownerComparison = 'https://www.reddit.com/r/espresso/comments/166jxti/profitec_go_vs_lelit_victoria_pl91t/';
const hero = 'https://assets.breville.com/cdn-cgi/image/width%3D1300%2Cformat%3Dauto/Lelit/PESVI01/PESVI01BSS1BXX1.png?pdp=';

const profile: UpgradeReviewProfile = {
  key: 'lelit-victoria-pl91t', slug: '/espresso-machine/lelit-victoria-pl91t/', productId: 'CD-EM-000204',
  brand: 'Lelit', model: 'Victoria PL91T', sku: 'PL91T family; US PL91T-120 / PESVI01; region-specific voltage and plug codes', category: 'PID-controlled single-boiler manual espresso machine', brandPath: '/lelit/',
  title: 'Lelit Victoria PL91T review: strong PID, slow milk queue',
  description: 'Exact current PL91T review: LELIT58 group, 300 ml brass boiler, independent temperature and steam evidence, owner context and $999.95 US price.',
  verdictLabel: 'An espresso-first single boiler with useful electronic control and a real milk-workflow pause',
  verdict: 'Victoria PL91T combines a 58 mm LELIT58 group, 300 ml brass boiler, LCC temperature control, shot timer, extraction-pressure gauge and 2.5 L tank in a narrow stainless body. Independent testing found solid repeatability across 14 shots but also a meaningful temperature-offset error on the tested machine. Steam is capable for occasional cappuccinos, yet the roughly 90-second transition keeps this an espresso-first single boiler rather than a fast mixed-drink machine.',
  assessment: 'This is a research-led assessment, not a Coffeedant bench test. Current Lelit records control identity and specifications. Kaffeemacher, Coffee Kev and CoffeeGeek provide independent evaluations with different instruments and units. Owner discussions add bounded context. Coffeedant did not measure temperature, pressure, flow, steam, sound, energy, recovery or reliability.',
  image: hero, imageAlt: 'Lelit official front image of the current stainless Victoria PESVI01 with LELIT58 group, LCC display, manometer and steam wand',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Current US price', msrp: '$999.95', typical: 'Lelit US displayed $999.95 but was out of stock on September 24, 2026. Kanen Coffee and Sweet Maria’s displayed the exact Victoria at $999.95 with stock available. Tax, voltage, package and warranty remain regional.', currency: 'USD', numeric: '999.95', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact current Lelit specification', href: official, note: 'Current PL91T identity, regional articles, controls, dimensions and delivered equipment', primary: true },
    { label: 'Watch the independent exact-model test', href: film, note: 'Kaffeemacher video accompanying its July 29, 2026 PL91T test' },
  ],
  facts: [
    { label: 'Exact model', value: 'Current conventional Victoria PL91T family, including US PL91T-120 / PESVI01; not the announced Victoria 3 with Pagaia' },
    { label: 'Heating architecture', value: '300 ml brass single boiler serving brew, steam and hot water sequentially' },
    { label: 'Group and valve', value: 'LELIT58 commercial group with 58 mm tools and a three-way solenoid valve' },
    { label: 'Control', value: 'LCC high-resolution OLED for temperatures, shot time, preinfusion toggle, standby, washing cycle and reserve mode' },
    { label: 'Feedback', value: 'Backlit extraction-pressure manometer and backlit stainless buttons' },
    { label: 'Water and steam', value: '2.5 L current official tank and one multidirectional steam/hot-water wand with anti-burn handle' },
    { label: 'Current official size', value: '23 × 38 × 38 cm as width × depth × height and 11.3 kg; earlier documents and independent measurements differ' },
  ],
  quickAnswers: [
    { question: 'Is Victoria a dual boiler?', answer: 'No. One 300 ml brass boiler handles espresso, steam and hot water in sequence. It cannot brew and steam at the same time.' },
    { question: 'Is this the Victoria 3?', answer: 'No. This review covers the current conventional PL91T. Lelit showed a Victoria 3 with electronic Pagaia flow control in July 2026, but Kaffeemacher had not tested it and current PL91T records remain distinct.' },
    { question: 'How stable is the brew temperature?', answer: 'Kaffeemacher recorded a 1.28°C standard deviation across 14 shots, which supports good repeatability on its unit. It also found a meaningful offset between the setting and delivered temperature, so repeatability and accuracy must not be treated as the same claim.' },
    { question: 'How long does it warm up?', answer: 'The display reported brew temperature after about three minutes in independent testing, but Kaffeemacher found about 23 minutes was needed for full stability. Its faster steam-heat routine enabled one useful shot but did not make the machine continuously stable.' },
    { question: 'Can it make milk drinks?', answer: 'Yes, but sequentially. Independent tests put the coffee-to-steam wait around 90 seconds. That is workable for occasional cappuccino and slower for a queue.' },
    { question: 'Is the preinfusion adjustable?', answer: 'The current LCC lets the owner enable or disable it. Independent work describes a fixed pump-on and pause sequence rather than user-programmable pressure or time.' },
  ],
  bestFor: ['Espresso-first homes wanting PID control, a shot timer and the common 58 mm tool format', 'Small kitchens that can accept top tank access and a sequential milk workflow', 'Buyers who will verify temperature behavior with a knowledgeable dealer when taste and setpoint disagree'],
  avoidIf: ['You need to brew and steam together or make several milk drinks quickly', 'You expect the displayed setpoint to guarantee exact basket temperature without offset verification', 'You want adjustable low-pressure preinfusion, flow control or automatic volumetric stopping'],
  pros: ['Compact stainless body with a 58 mm commercial-size group', 'LCC temperature control, shot timing, standby, reserve and cleaning support', 'Solid independent shot-to-shot repeatability on one tested unit', 'Large 2.5 L official tank for a compact single boiler', 'Current official documentation, US retail stock and exact parts diagrams'],
  cons: ['Roughly 90-second coffee-to-steam transition in two independent accounts', 'Independent testing found a meaningful temperature-offset error', 'Fixed on/off pre-brewing behavior is not true flow or pressure profiling', 'Top tank access and a plain plastic steam knob divide owner opinion', 'Official, older-manual and independent size, mass and tank records do not fully agree'],
  architecture: 'a tank-fed Italian manual machine with a 300 ml brass single boiler, PID-regulated LCC display, LELIT58 group, three-way solenoid, vibration pump, extraction-pressure manometer, 2.5 L current official tank record and one articulated steam and hot-water wand',
  identityBoundary: 'This page covers the conventional PL91T family and US PL91T-120 / PESVI01. It excludes the Victoria 3 shown in July 2026 with electronic Pagaia flow control, a pressure sensor and programmable profile buttons. It also keeps early and later PL91T software behavior separate because the display changed from a countdown to a chronometer and reserve logic was revised. Rating plate, article code, voltage, region and exact manual govern identity.',
  primaryStrength: 'It gives an espresso-first buyer PID control, shot timing, useful feedback and 58 mm tools in a genuinely compact body.',
  primaryLimit: 'One boiler must change states for milk, while independent evidence shows the displayed setpoint may need a dealer-checked offset.',
  setupNote: 'Confirm PL91T or the correct regional article, voltage, plug, current manual, package and warranty. Leave room for top tank access and the 38 cm current official depth. Fill and rinse as directed, fit suitable water treatment, lock in the filterholder during warm-up and judge the machine only after the group and accessories are fully heated.',
  espressoNote: 'The LCC controls boiler temperature and displays elapsed brew time, while the 58 mm group and three-way valve support a conventional workflow. Kaffeemacher’s 14-shot WBC sequence was repeatable, but its unit delivered a significant setpoint offset. Hold dose, yield, grind, warm-up and flush constant, then ask a qualified dealer to verify offset if taste and setting remain inconsistent.',
  milkNote: 'Switching from coffee to steam takes about 90 seconds in independent use. Coffee Kev reported heating 170 ml of milk from cold to 140°F in roughly 35 to 36 seconds once ready; Kaffeemacher used a 0.6 L pitcher with water and recorded 65 seconds. Those are different protocols, not interchangeable milk benchmarks. Purge, texture a modest pitcher, wipe and purge again, then cool the boiler before the next shot.',
  workflowNote: 'The display, shot timer, reserve mode and cleaning cycle are unusually useful in this size class. The single-boiler sequence remains brew, wait for steam, texture, vent and refill, then return to brew temperature. The fixed pre-brewing routine can be disabled when it harms the recipe.',
  buildNote: 'Lelit specifies a brushed stainless body, 11.3 kg mass, 300 ml brass boiler, LELIT58 group and wire drip-tray grate. Independent measurement was 23.5 cm wide, 27.8 cm deep before the plug, 38 cm high and 10.9 kg. Preserve clearance for the plug, controls, hot wand and pressurized internals, and use qualified service inside the machine.',
  featuresNote: 'Useful equipment includes programmable brew and steam temperature, shot timing, on/off preinfusion, standby, reserve mode, automatic washing cycle, extraction-pressure gauge, cup warmer, mug clearance and IMS baskets. No volumetric stop, adjustable pressure profile, simultaneous brew and steam, grinder, automatic milk or app is documented for current PL91T.',
  valueNote: 'At $999.95, Victoria sits close to Profitec GO and above simpler single boilers such as Lelit Anna and Rancilio Silvia. Its price is most defensible when the LCC, timer, 58 mm format and large tank matter. Buyers prioritizing milk throughput should price a dual boiler rather than forcing a single boiler into that role.',
  ownerPattern: 'Long-term owners repeatedly praise espresso quality, PID convenience, compact width and capable steam once ready. They also describe awkward top refilling, water on the lines, cooldown purges and the limits of fixed preinfusion. These are workflow prompts, not measured prevalence.',
  ownerCaution: 'Self-selected discussions mix markets, software revisions, water, grinders, technique, age and maintenance. They cannot establish a defect rate, exact heat-up, universal temperature offset or the condition of a used machine.',
  maintenanceNote: 'The manufacturer-branded manual and LCC guide cover group rinsing, detergent washing, wand cleaning, drip-tray care and water-softener replacement. Exact parts diagrams help identify components but do not prove local stock or make internal boiler and electrical work appropriate for an owner.',
  dimensions: {
    espresso: { score: 8.5, claim: 'PID control, a 58 mm group and good measured repeatability support serious espresso in a compact single boiler.', consequence: 'A machine-specific offset can make the displayed setpoint inaccurate until checked.', status: 'Current official architecture plus Kaffeemacher’s 14-shot protocol', signals: ['1.28°C standard deviation across 14 independent test shots.', 'Significant offset error found on the tested machine.', 'No Coffeedant temperature or extraction-yield measurement.'] },
    milk: { score: 7.2, claim: 'Steam is capable once ready for an occasional cappuccino.', consequence: 'The roughly 90-second state change and single boiler make a milk-drink queue slow.', status: 'Two independent exact-model evaluations with different protocols', signals: ['Around 90 seconds to steam readiness.', 'Coffee Kev reported 170 ml milk to 140°F in 35 to 36 seconds once ready.', 'No Coffeedant steam-power or milk-texture test.'] },
    workflow: { score: 8.1, claim: 'The LCC, timer, reserve mode and cleaning cycle make a manual single boiler unusually informative.', consequence: 'Milk still requires switching, venting and recovery, and fixed pre-brewing may need to be disabled.', status: 'Current official control record plus independent use', signals: ['Brew timer and temperature display.', 'On/off preinfusion, standby and washing cycle.', 'No automatic dose stop or simultaneous steam.'] },
    build: { score: 8.2, claim: 'Stainless construction, a brass boiler and LELIT58 group make a substantial small machine.', consequence: 'Top-fill access, the plastic steam knob and pressurized internals remain practical constraints.', status: 'Current manufacturer records, independent inspection and exact diagrams', signals: ['11.3 kg current official mass.', '300 ml brass boiler and three-way solenoid.', 'No representative service-life or parts-stock dataset.'] },
    features: { score: 8.3, claim: 'PID, shot timing, pressure feedback and cleaning support cover the features most useful to espresso-first owners.', consequence: 'Pre-brewing is fixed on/off and there is no flow control or volumetric stop.', status: 'Current PL91T page, technical sheet and software guide', signals: ['LCC OLED with multiple settings.', 'Backlit extraction-pressure gauge.', 'Victoria 3 Pagaia features are excluded.'] },
    value: { score: 8.0, claim: 'The $999.95 price buys meaningful control, 58 mm tools and active support in a compact chassis.', consequence: 'Profitec GO and entry dual boilers deserve comparison before purchase.', status: 'Official and two retailer prices checked September 24, 2026', signals: ['$999.95 official US price, currently out of stock direct.', 'Kanen and Sweet Maria’s showed the exact model at $999.95 with stock.', 'Grinder, water care and service remain additional costs.'] },
  },
  sources: [
    { label: 'Lelit Victoria PL91T official product page', href: official, note: 'Current global identity, regional codes, controls, specifications, dimensions and delivered equipment.' },
    { label: 'Lelit US Victoria PESVI01 product page', href: usOfficial, note: 'Current US identity, official media, $999.95 price and out-of-stock status checked September 24, 2026.' },
    { label: 'Lelit Victoria current technical sheet', href: technicalSheet, note: 'Official LELIT58 group, LCC, 300 ml boiler, tank, dimensions and regional electrical codes.' },
    { label: 'Lelit PL81T and PL91T manufacturer manual', href: manual, note: 'Manufacturer-branded operation, safety, care and earlier size and mass records.' },
    { label: 'Lelit LCC software update guide', href: softwareGuide, note: 'Manufacturer-branded later countdown-to-chronometer, reserve-mode, counter and factory-setting documentation.' },
    { label: 'Kanen Coffee exact Victoria listing', href: kanen, note: '$999.95 exact US listing with two units shown available when checked September 24, 2026.' },
    { label: 'Sweet Maria’s exact Victoria listing', href: sweetMarias, note: '$999.95 exact US listing shown in stock when checked September 24, 2026.' },
    { label: 'Kaffeemacher independent Victoria test', href: kaffeeMacher, note: 'Independently purchased PL91T; warm-up, WBC temperature series, offset, steam transition and Victoria 3 boundary.' },
    { label: 'Coffee Kev independent Victoria review', href: coffeeKev, note: 'Exact-model hands-on heat-up, preinfusion, milk, hot-water and cooldown observations; affiliate business context disclosed.' },
    { label: 'CoffeeGeek Victoria first look', href: coffeeGeek, note: 'Independent exact-model inspection of controls, construction and single-boiler workflow published November 13, 2024.' },
    { label: 'Kaffeemacher Victoria video', href: film, note: 'Independent exact-model video embedded with the July 29, 2026 test. Current manufacturer records govern catalog identity.' },
    { label: '1st-line exact PL91T parts diagrams', href: parts, note: 'Manufacturer-supplied component diagrams for identification, not a local stock guarantee or repair authorization.' },
    { label: 'Reddit six-month Victoria owner review', href: ownerReview, note: 'Self-selected owner context on espresso, steam, refill access, wet lines and preinfusion.' },
    { label: 'Reddit Victoria owner-opinion thread', href: ownerOpinions, note: 'Owner context on PID, steam, cooldown and preinfusion limits; not reliability evidence.' },
    { label: 'Reddit Profitec GO comparison', href: ownerComparison, note: 'Community comparison of controls, pricing and preinfusion. Exact current records control factual specifications.' },
  ],
  comparisons: [
    { name: 'Profitec GO', href: '/espresso-machine/profitec-go/', quickDecision: 'Compare its dedicated brew-pressure adjustment, fast-heating focus and service network at a similar price.', priceClass: 'Similar premium single-boiler class', dimensions: 'Compact but wider chassis', heating: 'PID single boiler', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Explicit brew-pressure setup' },
    { name: 'Lelit Anna PID', href: '/espresso-machine/lelit-anna/', quickDecision: 'Spend less when LELIT57 tools and a simpler PID workflow are acceptable.', priceClass: 'Lower PID single-boiler class', dimensions: 'Narrower and lighter', heating: 'PID single boiler', coffeeSetup: '57 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Lower-cost Lelit PID ownership' },
    { name: 'Rancilio Silvia', href: '/espresso-machine/rancilio-silvia/', quickDecision: 'Choose the established mechanical platform when factory PID and shot timing matter less.', priceClass: 'Lower traditional single-boiler class', dimensions: 'Compact steel body', heating: 'Thermostat single boiler', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Simple established hardware' },
    { name: 'Lelit Victoria PL91T', quickDecision: 'Choose the LCC, shot timer and narrow 58 mm platform when espresso matters more than milk throughput.', priceClass: '$999.95 US Sep 24', dimensions: '23 × 38 × 38 cm; 11.3 kg current official', heating: 'PID 300 ml brass single boiler', coffeeSetup: 'LELIT58 manual; grinder separate', milkWorkflow: 'Sequential, about 90 sec to steam in independent tests', bestFor: 'Compact espresso-first control' },
  ],
  comparisonNote: 'Compare exact regional model, boiler size, full warm-up, setpoint accuracy, steam transition, tank access, tool diameter, grinder, water treatment, warranty and service. Similar front-panel features do not make single boilers and dual boilers equivalent in a milk queue.',
  recommendations: [
    { kicker: 'Closest control rival', title: 'Profitec GO', text: 'Compare pressure setup, warm-up behavior, controls, support and complete delivered price.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read Profitec GO review', featured: true },
    { kicker: 'Lower-cost Lelit', title: 'Lelit Anna PID', text: 'Keep PID control and compact proportions while accepting the smaller LELIT57 tool ecosystem.', href: '/espresso-machine/lelit-anna/', linkLabel: 'Read Lelit Anna review' },
    { kicker: 'Traditional platform', title: 'Rancilio Silvia', text: 'Choose simpler established hardware when an integrated PID and shot timer are not essential.', href: '/espresso-machine/rancilio-silvia/', linkLabel: 'Read Silvia review' },
    { kicker: 'More milk capacity', title: 'Lelit Elizabeth', text: 'Move to independent brew and steam boilers when several milk drinks are a normal order.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read Elizabeth review' },
  ],
  faqs: [
    { question: 'What exact Lelit Victoria does this review cover?', answer: 'The current conventional PL91T family, including US PL91T-120 / PESVI01. It does not cover the Victoria 3 with electronic Pagaia flow control shown in July 2026.' },
    { question: 'Is the Lelit Victoria a dual boiler?', answer: 'No. Its 300 ml brass single boiler changes between brew, steam and hot-water states, so espresso and steaming happen sequentially.' },
    { question: 'How long does Lelit Victoria take to heat?', answer: 'Kaffeemacher saw the display reach brew temperature after about three minutes but measured about 23 minutes for full normal stability. Its accelerated routine produced one useful shot, not continuous thermal stability.' },
    { question: 'Is the Lelit Victoria temperature accurate?', answer: 'The tested machine was repeatable across 14 shots but had a significant offset from the selected setpoint. A qualified dealer can check and correct the specific machine rather than applying a universal number.' },
    { question: 'Can Victoria brew and steam together?', answer: 'No. Independent evaluations put the switch to useful steam near 90 seconds. It is suitable for occasional milk drinks and slower for several in succession.' },
    { question: 'Does Victoria have preinfusion?', answer: 'It has an LCC-controlled on/off pre-brewing routine. Independent review describes a fixed pump-on and pause sequence, not adjustable low-pressure profiling, and Kaffeemacher recommends disabling it when it harms extraction.' },
    { question: 'Is Lelit Victoria worth $999.95?', answer: 'It can be for an espresso-first buyer who values a 58 mm group, PID, timer, gauge and compact width. Compare the Profitec GO and the full cost of a dual boiler if milk throughput matters.' },
  ],
  finalTitle: 'A complete espresso-first single boiler, with two limits to verify',
  finalVerdict: [
    'Victoria PL91T is coherent because its electronics serve real manual tasks. The LCC sets temperature, times the shot, manages standby and cleaning, and warns about low water. A 58 mm group, brass boiler, three-way valve and pressure gauge make the physical platform equally credible.',
    'The limits are just as clear. Milk requires about a 90-second state change, and one rigorous independent test found a meaningful temperature offset despite good shot-to-shot repeatability. Buy Victoria when compact espresso control is the priority and occasional milk is enough. Verify the exact regional machine, software and temperature behavior instead of treating the display as proof by itself.',
  ],
  video: { id: 'aNeCGmEiLoA', title: 'Lelit Victoria OPTIMIERT - So ist die Espressomaschine doppelt so gut!', creator: 'Kaffeemacher', published: '2026-07-29', note: 'Independent exact-model video embedded with Kaffeemacher’s July 29, 2026 test of the conventional PL91T. The separate Victoria 3 remained untested there.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#lelit-victoria-pl91t-source-1">[source]</a> <a href="#lelit-victoria-pl91t-source-4">[source]</a></p>
    <p>Current official records say 23 × 38 × 38 cm and 11.3 kg. Earlier documentation and independent measurement differ, so measure the intended counter and preserve plug plus tank-access clearance.</p>`,
  espresso: `<p>${profile.espressoNote} <a href="#lelit-victoria-pl91t-source-5">[source]</a> <a href="#lelit-victoria-pl91t-source-8">[source]</a></p>
    <p>Repeatability and accuracy answer different questions. The 1.28°C series supports consistent behavior on the tested unit, while the offset finding means its displayed number did not equal the measured brew result.</p>`,
  milk: `<p>${profile.milkNote} <a href="#lelit-victoria-pl91t-source-8">[source]</a> <a href="#lelit-victoria-pl91t-source-9">[source]</a></p>
    <p>Do not compare the milk result and the water-in-pitcher result as one test. They establish that steam is usable after the transition, not a universal heating rate.</p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="victoria-owner-title"><h3 id="victoria-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Espresso and PID convenience earn repeated praise</strong><p>Owners describe the machine as compact, capable and easier to repeat than thermostat-only single boilers.</p></li>
    <li><strong>Milk drinks expose the single-boiler sequence</strong><p>Owners plan around the steam wait, cooldown purge and boiler refill rather than treating it like a dual boiler.</p></li>
    <li><strong>Refilling and fixed pre-brewing are recurring friction points</strong><p>Top access, wet tank lines and the non-adjustable pre-brew sequence matter more to some kitchens and recipes than others.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLelitVictoriaReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
