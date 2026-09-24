import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.lelit.com/product/anna-pl41tem/';
const productSheet = 'https://www.lelit.com/wp-content/uploads/2024/09/EN-Anna-TEM.pdf';
const usOfficial = 'https://www.lelit.com/en-us/product/anna-pesan06';
const manual = 'https://lazenskakava.s24.cdn-upgates.com/v/v6566008ac343e-n6566008ac00f5.pdf';
const coffeeBlog = 'https://coffeeblog.co.uk/lelit-anna-review/';
const caseta = 'https://casetacoffee.com/en/blogs/news/review-lelit-anna-pl41tem-a-melhor-maquina-de-espresso-ate-700';
const retailer = 'https://www.coffeefriend.eu/p/coffee-machine-lelit-anna-pl41tem/';
const film = 'https://www.youtube.com/watch?v=aGgqYmeJ48U';
const ownerThread = 'https://www.reddit.com/r/espresso/comments/tqa251/lelit_anna_pl41tem_as_first_machine/';
const ownerThreadTwo = 'https://www.reddit.com/r/espresso/comments/129vi44/thoughts_on_lelit_anna_pl41tem/';
const hero = 'https://www.lelit.com/wp-content/uploads/2024/03/MAIN-e1741266073723.png';

const profile: UpgradeReviewProfile = {
  key: 'lelit-anna', slug: '/espresso-machine/lelit-anna/', productId: 'CD-EM-000200',
  brand: 'Lelit', model: 'Anna PL41TEM', sku: 'EU PL41TEM, polished stainless steel, type E+F plug', category: 'PID single-boiler manual espresso machine', brandPath: '/lelit/',
  title: 'Lelit Anna PL41TEM review: PID value, LELIT57 trade-off',
  description: 'Exact EU PL41TEM review: PID, 250 ml brass single boiler, LELIT57 group, pressure gauge, 2.7 L tank, current price and measured independent context.',
  verdictLabel: 'A compact PID single boiler for espresso learners who accept LELIT57 tools and sequential milk service',
  verdict: 'Consider EU PL41TEM for adjustable boiler temperature, a pressure manometer, three-way valve and 2.7 L tank in a 230 mm wide machine. Its 250 ml brass boiler handles coffee, steam and hot water sequentially, while LELIT57 has fewer third-party tools than 58 mm rivals. Coffee Friend listed it at €549 on September 24, 2026.',
  assessment: 'This is research-led, not a Coffeedant bench test. Current EU PL41TEM records govern specifications; two hands-on reviewers add bounded context. Coffeedant did not measure group temperature, puck pressure, extraction yield, sound, energy, recovery or reliability.',
  image: hero, imageAlt: 'Lelit official front image of the polished stainless Anna PL41TEM with PID display, pressure gauge and multidirectional wand',
  published: '2025-12-03', updated: '2026-09-24',
  price: { label: 'Current EU retailer price', msrp: '€549', typical: 'Coffee Friend listed Anna PL41TEM at €549 and in stock on September 24, 2026; US PESAN06 was $599.95. Price, voltage, plug, warranty, tools and stock are regional, so compare the exact article and dealer terms.', currency: 'EUR', numeric: '549', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact Lelit EU specification', href: official, note: 'Current PL41TEM identity, architecture, regional electrical codes and delivered accessories', primary: true },
    { label: 'Watch the independent Anna review', href: film, note: 'Coffee Kev exact-model video published December 28, 2024; hands-on and commercially disclosed' },
  ],
  facts: [
    { label: 'Exact market', value: 'EU PL41TEM, polished stainless steel, 220-240 V, 50 Hz and type E+F plug' },
    { label: 'Boiler and group', value: '250 ml brass single boiler with PID control, LELIT57 group and three-way solenoid valve' },
    { label: 'Pressure feedback', value: 'Front manometer for coffee pressure with a marked green target area; it is not a measurement at the coffee puck' },
    { label: 'Water and milk', value: '2.7 L tank with side level window; multidirectional steam and hot-water wand with anti-burn handle' },
    { label: 'Size and mass', value: '230 × 380 × 340 mm and 7.5 kg in current official EU records' },
    { label: 'Control style', value: 'PID display plus separate lever switches for machine power, coffee pump and water-or-steam mode' },
    { label: 'Included coffee kit', value: 'Two-spout LELIT57 holder, one-dose, two-dose and pod filters, tamper and measuring spoon; the current page omits a blind filter that the older sheet lists' },
  ],
  quickAnswers: [
    { question: 'Is this the current PID Anna?', answer: 'Yes. This covers EU PL41TEM, often called Anna 2 or Anna PID. Earlier PL41EM and PL41LEM machines have different controls and should not inherit this review.' },
    { question: 'Is the group 58 mm?', answer: 'No. Lelit specifies its LELIT57 group and compatible LELIT57 tools. Owners find suitable accessories, but the selection is smaller than for standard 58 mm machines.' },
    { question: 'Can it brew and steam together?', answer: 'No. Coffee and steam share one 250 ml brass boiler, so the machine heats into steam mode and must be refilled and cooled before another espresso.' },
    { question: 'Does the PID remove the need for a scale?', answer: 'No. The PID controls the boiler setpoint, not dose, beverage mass or time. A capable grinder, scale and consistent puck preparation still matter.' },
    { question: 'How fast is milk steaming?', answer: 'Coffee Blog measured 170 ml from cold to 60°C in about 36-40 seconds at a 140°C steam setting. That is one reviewer’s setup, not a universal Coffeedant result.' },
    { question: 'What does the gauge show?', answer: 'Lelit calls it a manometer for coffee pressure. It provides system feedback during brewing, but it does not directly measure pressure inside a prepared puck.' },
  ],
  bestFor: ['Espresso learners who want PID temperature control without installing a modification', 'Small kitchens that can accommodate a separate capable grinder and 380 mm machine depth', 'One- or two-drink sessions where a deliberate brew-to-steam sequence is acceptable'],
  avoidIf: ['You already own many 58 mm baskets, tampers or puck-preparation tools', 'You regularly prepare several milk drinks and need brewing and steaming at the same time', 'You want a shot timer, volumetric dosing, automatic milk or a one-button workflow'],
  pros: ['Current exact EU product page and technical sheet', 'PID-adjusted 250 ml brass boiler at an accessible current price', 'Coffee-pressure manometer and three-way solenoid valve', 'Compact 230 mm width with a large 2.7 L tank', 'Hands-on reviewers report manageable steam and credible espresso potential'],
  cons: ['LELIT57 ecosystem offers fewer third-party choices than 58 mm', 'Single boiler requires a steam wait and post-steam refill and cooling routine', 'No built-in shot timer, volumetric dosing or pre-infusion program is documented', 'Current page and older sheet disagree on whether a blind filter is delivered', 'Polished body marks easily, while owner and reviewer reports note tight cup-and-scale clearance'],
  architecture: 'a current European tank-fed machine built around a PID-controlled 250 ml brass single boiler, LELIT57 group, three-way solenoid valve, vibration pump, coffee-pressure manometer, 2.7 L removable tank, passive cup warmer, side level window and a multidirectional wand serving steam and hot water',
  identityBoundary: 'This page covers EU PL41TEM at 220-240 V, 50 Hz and type E+F. Australia PL41TEMDAUS4I80, Israel PL41TEM-AS, UK PL41TEMD-2G80 and US PESAN06 are regional articles. Older PL41EM, PL41LEM and PL41TEM/110 records can differ in controls, power and package. Current EU records govern.',
  primaryStrength: 'PID control, a pressure gauge and three-way valve make this compact specialist machine unusually legible at €549.',
  primaryLimit: 'LELIT57 compatibility and a 250 ml shared boiler set firm limits on accessory choice and multi-drink speed.',
  setupNote: 'Confirm PL41TEM and a compatible 220-240 V type E+F supply. Leave access above the tank and behind the 380 mm cabinet. Fill the boiler before heating, warm the holder and verify the basket set because package records differ.',
  espressoNote: 'Set an appropriate boiler temperature, warm the group and holder consistently, then weigh dose and yield and time externally. Reviewers used 17.5-18 g starting doses with their coffees; those are not universal settings. Dial by flow and taste.',
  milkNote: 'Pull espresso first, switch to steam, wait, purge condensation, texture, then wipe and purge. The exact-model manual requires opening the valve and running the pump in hot-water mode until water flows before returning to coffee mode, refilling the boiler.',
  workflowNote: 'The left selector chooses coffee, hot water or steam while a separate pump switch starts coffee or hot-water flow. Espresso stops manually by yield. Milk adds a heat-up phase and boiler refill. The PID improves temperature repeatability but does not automate the drink.',
  buildNote: 'Lelit specifies a polished stainless body, stainless grate and brass boiler. Coffee Blog found its unit stable but noted some sharp edges; that is not a production-wide defect rate. No representative service-life dataset was found.',
  featuresNote: 'PL41TEM equipment includes PID control, pressure manometer, three-way valve, LELIT57 group, cup warmer, water-level window, steam, hot water and lever switches. No shot timer, programmable pre-infusion, volumetrics, plumbing, grinder or automatic milk is documented.',
  valueNote: 'At €549, the Anna places PID control below many specialist rivals. The station still needs a grinder, scale and fitted tamper. Gaggia and Rancilio offer broader 58 mm ecosystems; Victoria adds 58 mm, a larger boiler and richer feedback at a higher price.',
  ownerPattern: 'Owners value the PID, frame the small boiler for short sessions and find fewer LELIT57 tools. They stress refilling after steaming. Trouble-free reports are anecdotes, not a reliability rate.',
  ownerCaution: 'Community posts span 110 V and 230 V units, ages, grinders and maintenance histories. They define workflow questions, not universal warm-up, pressure, durability or repair outcomes.',
  maintenanceNote: 'Rinse the holder and filters, flush grounds, empty the tray, wipe and purge the wand, and clean the tank. The 2017 manual recommends backflushing with a 57 mm blind filter and detergent plus suitable descaling. Confirm current regional instructions before chemical cleaning.',
  dimensions: {
    espresso: { score: 8.3, claim: 'PID control, a three-way valve and pressure feedback support repeatable manual espresso.', consequence: 'Cup quality still depends on grinder, puck preparation, warm-up and manual yield control.', status: 'Exact architecture plus two bounded hands-on evaluations', signals: ['PID-controlled 250 ml brass boiler.', 'LELIT57 group and coffee-pressure manometer.', 'No Coffeedant group-temperature or extraction-yield test.'] },
    milk: { score: 7.5, claim: 'The adjustable steam setpoint and wand can make capable small milk drinks.', consequence: 'A single 250 ml boiler adds a steam wait and refill before more espresso.', status: 'Exact hardware plus Coffee Blog measurement', signals: ['36-40 seconds for 170 ml to 60°C at 140°C in one test.', 'About 60-95 seconds to reach steam readiness in that review.', 'Results depend on voltage, pitcher, milk and starting temperature.'] },
    workflow: { score: 7.7, claim: 'PID feedback, simple switches and a large tank keep the manual process understandable.', consequence: 'Separate mode and pump controls, external timing and post-steam reset remain hands-on.', status: 'Official controls, exact-model manual and owner context', signals: ['2.7 L tank with side level window.', 'Manual shot stop and no built-in timer.', 'Boiler refill required after steaming.'] },
    build: { score: 8.0, claim: 'Stainless bodywork and a brass boiler are substantial at this price.', consequence: 'Thin polished panels and some reported sharp edges reflect cost control.', status: 'Official materials plus one hands-on unit; no durability sample', signals: ['Polished stainless body and grate.', '250 ml brass boiler.', 'No representative failure-rate data.'] },
    features: { score: 8.0, claim: 'PID, pressure gauge and three-way valve cover valuable entry-specialist controls.', consequence: 'It omits a timer, volumetrics, pre-infusion programming and automated milk.', status: 'Current September 2026 official records', signals: ['Adjustable boiler setpoint.', 'Coffee-pressure manometer.', 'LELIT57 rather than standard 58 mm.'] },
    value: { score: 8.6, claim: 'The €549 current price buys unusually strong out-of-box temperature feedback.', consequence: 'A grinder, scale and fitted accessories increase the real station cost.', status: 'EU price checked September 24, 2026', signals: ['€549 current EU retailer price.', 'PID and gauge included.', 'Broader 58 mm alternatives may cost less to accessorise.'] },
  },
  sources: [
    { label: 'Lelit exact Anna PL41TEM product page', href: official, note: 'Current EU identity, functions, regional articles, dimensions, mass and package; checked September 24, 2026.' },
    { label: 'Lelit Anna PL41TEM technical sheet', href: productSheet, note: 'Official 2024 sheet confirming core architecture and LELIT57 filters; it lists a blind filter that the current page omits.' },
    { label: 'Lelit US Anna PESAN06 product page', href: usOfficial, note: 'Current US regional identity, 120 V article, $599.95 price and under-ten-minute heat-up claim; not transferred to EU PL41TEM.' },
    { label: 'Lelit PL41TEM user manual mirror', href: manual, note: 'Retailer-hosted 2017 exact-model manual for first fill, PID, steam reset and care; current EU records govern later changes.' },
    { label: 'Coffee Blog Lelit Anna review', href: coffeeBlog, note: 'June 5, 2026 hands-on measurements; independent editorial with affiliate links and the author’s coffee used.' },
    { label: 'Caseta Coffee Lelit Anna review', href: caseta, note: 'Retailer hands-on review published June 1, 2026 using two coffees, whole milk and oat milk; commercially connected and some listed dimensions conflict with current official records.' },
    { label: 'Coffee Friend Anna PL41TEM listing', href: retailer, note: 'EU price €549 and in-stock status checked September 24, 2026; retailer claims do not override exact official specifications.' },
    { label: 'Coffee Kev exact-model video', href: film, note: 'Hands-on Anna 2/PID video published December 28, 2024 and embedded with the 2026 Coffee Blog review; no duplicate video ID found in Coffeedant.' },
    { label: 'Reddit PL41TEM first-machine discussion', href: ownerThread, note: 'Self-selected owner context on recovery, tools, care and post-steam refill; not reliability statistics.' },
    { label: 'Reddit PL41TEM ownership discussion', href: ownerThreadTwo, note: 'Self-selected owner context on PID usability, daily use and accessory limits; spans different regions and ages.' },
  ],
  comparisons: [
    { name: 'Gaggia Classic Evo Pro', href: '/espresso-machine/gaggia-classic-evo-pro/', quickDecision: 'Choose the broader 58 mm ecosystem and modification community when a factory PID is not essential.', priceClass: 'Entry specialist single-boiler class', dimensions: 'Compact upright chassis', heating: 'Compact single boiler without stock PID', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Accessory choice and modification paths' },
    { name: 'Rancilio Silvia', href: '/espresso-machine/rancilio-silvia/', quickDecision: 'Compare for heavier traditional construction and stronger steam, accepting temperature surfing without a PID version.', priceClass: 'Higher traditional single-boiler class', dimensions: 'Deeper, heavier chassis', heating: 'Brass single boiler without stock PID on core model', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Traditional build and steam power' },
    { name: 'Lelit Victoria PL91T', href: '/espresso-machine/lelit-victoria-pl91t/', quickDecision: 'Spend more for 58 mm tools, a 300 ml boiler, LCC control and a shot timer.', priceClass: 'Higher PID single-boiler class', dimensions: 'Larger and heavier stainless chassis', heating: 'PID 300 ml brass single boiler', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'A longer-term 58 mm Lelit platform' },
    { name: 'Lelit Anna PL41TEM', quickDecision: 'Choose the lowest-cost factory-PID path and accept LELIT57 plus a small shared boiler.', priceClass: '€549 EU retail Sep 24', dimensions: '230 × 380 × 340 mm; 7.5 kg', heating: 'PID 250 ml brass single boiler', coffeeSetup: 'LELIT57 manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Compact PID value' },
  ],
  comparisonNote: 'Compare regional code, voltage, group diameter, PID, timer, boiler, steam transition, baskets, support and full station cost. Similar single boilers can have different accessory and temperature workflows.',
  recommendations: [
    { kicker: 'Broad 58 mm ecosystem', title: 'Gaggia Classic Evo Pro', text: 'Choose widespread tools and modification options when you can accept no factory PID.', href: '/espresso-machine/gaggia-classic-evo-pro/', linkLabel: 'Read Gaggia review', featured: true },
    { kicker: 'Traditional alternative', title: 'Rancilio Silvia', text: 'Compare build, steam behaviour, temperature management and total PID cost.', href: '/espresso-machine/rancilio-silvia/', linkLabel: 'Read Silvia review' },
    { kicker: 'Higher Lelit step', title: 'Lelit Victoria PL91T', text: 'Move to 58 mm, a larger boiler and richer digital feedback if the budget permits.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Victoria review' },
    { kicker: 'Compact PID value', title: 'Lelit Anna PL41TEM', text: 'Choose factory temperature control at a low entry price and build a fitted LELIT57 toolkit.', href: '/espresso-machine/lelit-anna/', linkLabel: 'Read this Anna review' },
  ],
  faqs: [
    { question: 'Does the Lelit Anna PL41TEM have a PID?', answer: 'Yes. The PID sets and displays boiler temperature. It does not measure group temperature or automate dose, yield or shot time.' },
    { question: 'What size portafilter does the Anna use?', answer: 'It uses Lelit’s LELIT57 group and filterholder system, not standard 58 mm. Official LELIT57 tools exist, but third-party choice is narrower.' },
    { question: 'Can the Anna brew and steam at the same time?', answer: 'No. Its 250 ml brass single boiler changes between coffee and steam temperatures, so drinks are prepared sequentially.' },
    { question: 'How should the boiler be reset after steaming?', answer: 'The exact-model manual instructs the user to open the wand, select hot water and run the pump until water flows, then close the valve and return to coffee mode. Follow the current regional manual supplied with the machine.' },
    { question: 'Is a blind filter included?', answer: 'The 2024 official sheet lists one, while the current product page’s package list does not. Confirm the delivered box with the seller before planning backflushing.' },
    { question: 'How long does the Anna take to heat?', answer: 'Current US material says under 10 minutes, but Coffeedant found no controlled current EU group-readiness test. Boiler display readiness is not the same as complete holder and group heat soak.' },
    { question: 'Is the €549 price universal?', answer: 'No. It was the Coffee Friend EU listing checked September 24, 2026. Regional article, tax, stock, warranty and dealer preparation can change the delivered price.' },
  ],
  finalTitle: 'A strong PID bargain with two non-negotiable limits',
  finalVerdict: [
    'The current EU Anna is clearly defined: PID-controlled 250 ml brass single boiler, LELIT57 group, three-way valve, coffee-pressure manometer, 2.7 L tank and a 230 mm wide stainless body. At €549, it offers useful temperature feedback before most traditional rivals include it.',
    'Buy it when one or two carefully prepared drinks matter more than speed and you are willing to build a LELIT57 toolkit. Choose a 58 mm rival for broader accessories, or move to the Victoria when a larger boiler, shot timer and richer control justify the higher price.',
  ],
  video: { id: 'aGgqYmeJ48U', title: 'Lelit Anna 2 / PID - Best Espresso Machine Under £500?', creator: 'Coffee Kev', published: '2024-12-28', note: 'Independent exact-model hands-on review later embedded in Coffee Blog’s June 2026 article. The author discloses affiliate links and demonstrates his own coffee, so current official PL41TEM records govern identity and specifications.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="anna-owner-title"><h3 id="anna-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>LELIT57 is workable but less universal</strong><p>Owners find fitted tampers and bottomless holders, but fewer choices than in the 58 mm market. Check compatibility item by item.</p></li>
    <li><strong>The boiler suits short sessions</strong><p>Owners frame one or two shots as comfortable and back-to-back milk service as the constraint. This is context, not a fleet test.</p></li>
    <li><strong>Post-steam refill matters</strong><p>Owners tell new users to refill the boiler after steaming, matching the exact-model manual.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLelitAnnaReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
