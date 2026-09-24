import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/TRADITIONAL-ESPRESSO-MACHINES/Krups-Opio-Steam-%26-Pump-XP320840-Traditional-Pump-Espresso-Coffee-Machine--1-5L--Black--Cappuccino/p/8010000482';
const support = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Espresso/Krups-Opio-Steam-%26-Pump-XP320840-Traditional-Pump-Espresso-Coffee-Machine--1-5L--Black--Cappuccino/csp/8010000482';
const manual = 'https://dam.groupeseb.com/m/a9c4ceb02dae2a4f/original/8020007039-IFU.pdf?timestamp=20250714164304';
const seller = 'https://brandcart.co.uk/product/krups-opio-steam-pump-espresso-machine-black-1-5-l-xp320840/';
const independent = 'https://www.coffeeteaclub.co.uk/krups-xp320840-review/';
const film = 'https://www.youtube.com/watch?v=RWkrx948uYo';
const hero = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxMzg1NTF8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3hNaTlvT0dRdk1qa3dOalF6T1RneU56UTFPVEF8YTFmOTQ4ZmI4MmMwOWM5YjA2ZWY5MWU4MzkyMzlmNTg5MDc5OGEyZjdjYzcxMDg3NGQwNzI1YTc0NzFmYThhNw';

const profile: UpgradeReviewProfile = {
  key: 'krups-opio-xp320840', slug: '/espresso-machine/krups-opio-xp320840/', productId: 'CD-EM-000193',
  brand: 'Krups', model: 'Opio XP320840', sku: 'UK XP320840, black, 220–240 V', category: 'Manual pump espresso machine', brandPath: '/krups/',
  title: 'Krups Opio XP320840 review: basic manual espresso',
  description: 'Exact UK XP320840 research review covering its aluminium boiler, 15-bar pump rating, 1.5 L tank, steam wand, current price context and evidence limits.',
  verdictLabel: 'A simple entry point whose current UK availability is unclear',
  verdict: 'Consider the UK XP320840 if you want a basic manual machine, already have a capable grinder or accept preground coffee, and can find a trustworthy seller. Krups documents an aluminium boiler, 15-bar pump rating, 1.5 L removable tank, steam nozzle and two filters. An exact UK listing showed £144.95 but out of stock on September 24, 2026, so current value remains unresolved.',
  assessment: 'This is research, not Coffeedant testing. Exact specifications and care come from Krups UK. The available editorial review has no disclosed measurement protocol, while the exact-model video is an affiliate-style overview. Owner discussion raises questions but cannot establish specifications, performance or failure rates.',
  image: hero, imageAlt: 'Krups UK official front image of the black Opio XP320840 with portafilter and manual steam wand',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact UK XP320840 listing, out of stock', msrp: 'No current manufacturer price established', typical: 'Brandcart displayed £144.95 and OUT OF STOCK on September 24, 2026. A July 24, 2020 TechAdvisor deal article recorded £78.49 at Amazon versus £149.99 at Argos and £179 at Freemans, but those historical prices are not current offers.', currency: 'GBP', numeric: '', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact Krups UK specification', href: official, note: 'Exact XP320840 identity, boiler, pump, tank, filters, steam and care details', primary: true },
    { label: 'Check the dated seller listing', href: seller, note: '£144.95 and out of stock when checked September 24, 2026' },
  ],
  facts: [
    { label: 'Exact market', value: 'UK XP320840 in black, 220–240 V and 50 Hz, with secondary metal colour' },
    { label: 'Brew system', value: 'Manual pump machine with aluminium boiler and 15-bar pump rating; pressure at the coffee was not measured' },
    { label: 'Coffee hardware', value: 'Portafilter with manufacturer-listed single- and double-shot filters; exact basket type and diameter not established' },
    { label: 'Milk', value: 'Manual steam nozzle; no automatic milk dosing, temperature target or texture setting documented' },
    { label: 'Water and waste', value: '1.5 L removable water tank and removable drip tray' },
    { label: 'Included tool', value: 'Manufacturer lists a measuring spoon with integrated tamper' },
    { label: 'Energy', value: 'Official table lists 0.2 W off mode and automatic off after 28 minutes; operating wattage is not shown' },
  ],
  quickAnswers: [
    { question: 'Is this the exact UK XP320840?', answer: 'Yes. The manufacturer page and support route identify XP320840, black finish, 220–240 V and 50 Hz.' },
    { question: 'Does 15 bar mean 15 bar at the coffee?', answer: 'No. It is the pump rating in the official table. Coffeedant found no exact-unit measurement at the puck and does not convert that figure into extraction pressure.' },
    { question: 'Does it include a grinder?', answer: 'No grinder is documented. Budget for a capable grinder or use suitable preground coffee.' },
    { question: 'Are the supplied baskets pressurised?', answer: 'The exact official material calls them one- and two-cup filters but does not establish the basket design. A Reddit poster suspected a pressurised setup; that is not confirmation.' },
    { question: 'Was £144.95 available?', answer: 'No. The exact listing displayed £144.95 and OUT OF STOCK on September 24, 2026.' },
    { question: 'How quickly does it heat?', answer: 'Krups says rapid heat-up but supplies no exact time on the UK page. A precise cold-start figure was not verified.' },
  ],
  bestFor: ['UK buyers seeking a simple manual pump machine at a verified in-stock price', 'Households making one or two drinks and willing to learn grinding, dosing and steaming', 'Owners who prefer a removable tank, basic dial controls and manual milk texture'],
  avoidIf: ['You need an integrated grinder, programmable dosing or automatic milk', 'You need verified basket geometry, brew temperature, pressure control or a current in-stock price before deciding', 'You routinely make several milk drinks and want documented recovery measurements'],
  pros: ['Exact UK identity and support documents are available', '1.5 L removable tank and removable drip tray', 'Single- and double-shot filters plus spoon-tamper listed', 'Manual wand allows the operator to control milk texture'],
  cons: ['No grinder, pressure gauge, PID or programmable dose documented', 'Current exact UK listing was out of stock', 'Independent exact-model evidence is limited and weakly instrumented', 'Manufacturer does not publish dimensions, operating power or basket diameter on the UK page'],
  architecture: 'a UK manual pump machine with an aluminium boiler, portafilter, 1.5 L removable tank, drip tray and steam nozzle',
  identityBoundary: 'This page covers UK XP320840. Regional XP3208 variants may differ in voltage, plug, package and support; their claims do not transfer automatically.',
  primaryStrength: 'Simple controls, a removable tank and manual steam support the basic espresso-and-milk workflow.',
  primaryLimit: 'Stock and value are unresolved, while basket geometry, brew temperature, warm-up and recovery are not documented by strong independent testing.',
  setupNote: 'Confirm XP320840, electrical details, portafilter, both filters, spoon-tamper, tank and manual. Wash removable food-contact parts, prime the circuit, preheat the machine and cup, and leave access to the rear tank and wand. Do not infer fit from photographs because dimensions are unpublished.',
  espressoNote: 'Krups documents an aluminium boiler, manual pump format, 15-bar pump rating and filters for one or two cups. It does not publish basket diameter, basket design, delivered brew temperature, pressure at the coffee, dose range or flow measurements. The CoffeeTeaClub article describes acceptable espresso and a difficult-to-secure filter, but gives no repeatable test protocol. Treat those statements as one editorial impression rather than measured performance.',
  milkNote: 'The right-side steam nozzle leaves aeration and circulation to the operator. Krups instructs users to wipe and purge it immediately after use and clear the opening if blocked. No exact steam-power, recovery-time or temperature measurement was found. CoffeeTeaClub called the wand insufficiently powerful, but does not publish milk quantity, starting temperature, timing or comparison method.',
  workflowNote: 'A central selector handles coffee, off and steam, with three indicator lights. The removable tank and tray simplify access, but grinding, dosing, tamping, shot control, steaming and cleanup are manual. The 1:45 exact-model video is an affiliate-style overview, not a recorded cold-start-to-clean sequence.',
  buildNote: 'Krups identifies an aluminium boiler, removable tank and tray, with exact-model support and parts routing. No duty cycle, life estimate or reliability rate is published. Warranty and repair routes are not lifespan promises. Stop use for leaks, electrical smells, repeated tripping or abnormal heat.',
  featuresNote: 'This is intentionally basic: manual espresso, one- and two-cup filters, manual steam, removable water and waste parts, and automatic off. No grinder, display, shot timer, pressure gauge, PID, volumetric programming, automatic milk or app is documented. That simplicity can suit a learner, but it also leaves consistency and timing to technique.',
  valueNote: 'Brandcart displayed £144.95 but out of stock on September 24, 2026. A 2020 article captured lower and higher retailer prices, not today’s value. Compare an available offer, seller, warranty, filters and grinder cost with a Bambino or Dedica station.',
  ownerPattern: 'In a June 2022 Reddit thread, a user learning on a roommate’s Opio described fast flow, little crema and difficulty fitting a 15 g dose, then asked whether a grinder, portafilter, tamper or distribution tool would help. Replies largely advised saving upgrade money for a future grinder and brewer. That thread records one setup and uncertain basket identification, not a verified machine limit.',
  ownerCaution: 'The poster did not establish exact grind, coffee age, filter design, dose capacity, yield, shot time or maintenance state. Other commenters discussed vaguely similar Krups machines rather than confirmed XP320840 units. These reports help frame setup questions but cannot justify a failure rate or a universal recipe.',
  maintenanceNote: 'Krups directs the owner to clean the brew head, filter holder and filter after use, empty and wash the tray, wipe and purge the steam nozzle immediately, and descale manually as instructed. The listed removable parts are not identified as dishwasher-safe. Use the exact manual and suitable descaler, and do not open the appliance for electrical or pressurised repairs.',
  dimensions: {
    espresso: { score: 6.7, claim: 'A conventional manual pump path offers direct preparation, but key brew variables are undocumented.', consequence: 'Results will depend heavily on grinder, coffee, dose, distribution, tamp and manual stop timing.', status: 'Exact manufacturer architecture plus limited uninstrumented editorial and owner context', signals: ['Aluminium boiler, pump and one- and two-cup filters are documented.', 'No temperature, puck-pressure, basket-diameter or flow measurements were found.', 'Independent exact-model evidence does not disclose a repeatable brew protocol.'] },
    milk: { score: 6.4, claim: 'The manual nozzle gives the operator texture control without automation.', consequence: 'Learning and cleanup are unavoidable, and multi-drink pace is not established.', status: 'Exact official hardware and care guidance; no independent steam measurement', signals: ['Manual steam nozzle on the exact XP320840.', 'No automatic milk dose, temperature or texture program.', 'Wand power criticism lacks milk quantity and timing data.'] },
    workflow: { score: 7.2, claim: 'Simple dial controls reduce menu friction but leave every preparation step manual.', consequence: 'It fits a deliberate one- or two-drink routine better than a fast household queue.', status: 'Official controls plus limited exact-model visual context', signals: ['Coffee, off and steam selector with status lights.', '1.5 L removable tank and removable drip tray.', 'No complete independently timed routine was found.'] },
    build: { score: 6.5, claim: 'Model-linked support and replaceable accessories are traceable, while durability evidence remains sparse.', consequence: 'Seller coverage and parts access matter because no reliability rate or service-life estimate exists.', status: 'Official materials and support path; no representative long-term sample', signals: ['Aluminium boiler and exact-model support route.', 'Portafilter, filters and care path are documented.', 'No exact-model durability rate or teardown evidence.'] },
    features: { score: 5.8, claim: 'The feature set is limited to core manual espresso and steam functions.', consequence: 'Buyers wanting dosing, temperature feedback or automation should compare newer rivals.', status: 'Exact UK manufacturer table', signals: ['One- and two-cup filters, steam and removable water parts.', 'No grinder, gauge, PID, display or programmable dose documented.', 'Automatic off occurs after 28 minutes.'] },
    value: { score: 5.9, claim: 'A £144.95 exact listing exists but was unavailable when checked.', consequence: 'Do not rank it on a non-buyable price; compare only a real offer including grinder and warranty.', status: 'Exact out-of-stock UK listing on September 24, 2026 plus historical price context', signals: ['Brandcart displayed £144.95 and OUT OF STOCK.', 'No current in-stock exact UK checkout was established.', 'Historical 2020 prices are not current offers.'] },
  },
  sources: [
    { label: 'Krups UK exact XP320840 product page', href: official, note: 'Exact identity, voltage, boiler, pump rating, tank, filters, steam, tray, included tool, energy and care details; checked September 24, 2026.' },
    { label: 'Krups exact XP320840 support page and manual', href: support, note: `Model-indexed support route linking the exact instruction PDF at ${manual}; procedures should be matched to the delivered revision.` },
    { label: 'Brandcart exact XP320840 UK listing', href: seller, note: 'Displayed £144.95 and OUT OF STOCK on September 24, 2026; no available checkout was claimed.' },
    { label: 'CoffeeTeaClub XP320840 editorial review', href: independent, note: 'Stella Robinson, January 4, 2021; exact-model impressions but no disclosed measurement protocol, testing inventory or long-term methodology.' },
    { label: 'Best Top Tech XP320840 overview video', href: film, note: 'Exact-model 1:45 affiliate-style overview published July 8, 2024; useful for visual context, not hands-on extraction evidence.' },
    { label: 'Krups UK accessories and spare-parts route', href: 'https://www.krups.co.uk/accessories-store', note: 'Manufacturer parts-search context; compatibility must be checked against XP320840 and the delivered serial details.' },
    { label: 'Krups UK manufacturer warranty', href: 'https://www.krups.co.uk/warranty', note: 'Manufacturer policy and service route; the actual seller, purchase date and delivered terms control coverage.' },
    { label: 'Reddit roommate Opio setup discussion', href: 'https://www.reddit.com/r/espresso/comments/v7rksz/roommates_krups_opio/', note: 'June 2022 self-selected account about fast flow, small perceived dose capacity and upgrade questions; basket identity and recipe were not established.' },
    { label: 'Ubuy syndicated XP320840 customer summary', href: 'https://www.ubuy.sv/en/productuk/QWQYZNRC-krups-xp320840-opio-steam-and-pump-coffee-machine-black', note: 'Regional reseller summary with opaque sample and verification; retained only as low-confidence customer context, not a reliability source.' },
    { label: 'TechAdvisor historical XP320840 price article', href: 'https://www.techadvisor.com/article/740204/get-a-near-half-price-krups-xp320840-opio-coffee-machine.html', note: 'July 24, 2020 price snapshot at Amazon, Argos and Freemans; historical context only, not current stock or value.' },
  ],
  comparisons: [
    { name: 'Krups Opio XP320840', quickDecision: 'Basic manual controls and steam, but current exact UK stock was not established.', priceClass: '£144.95 out-of-stock listing Sep 24', dimensions: 'Not published on exact UK page; 1.5 L tank', heating: 'Aluminium boiler', coffeeSetup: 'Manual portafilter; grinder separate', milkWorkflow: 'Manual steam nozzle', bestFor: 'Simple one- or two-drink routine' },
    { name: 'Breville Bambino', href: '/espresso-machine/breville-bambino/', quickDecision: 'Compare for newer temperature and pre-infusion claims with a compact manual format.', priceClass: 'Check live UK offer', dimensions: 'Compact; verify exact regional model', heating: 'ThermoJet family, regional details vary', coffeeSetup: 'Manual portafilter; grinder separate', milkWorkflow: 'Manual steam', bestFor: 'Faster modern workflow' },
    { name: 'DeLonghi Dedica', href: '/espresso-machine/delonghi-dedica/', quickDecision: 'Compare for a narrow established manual platform and broader owner context.', priceClass: 'Check live exact-model offer', dimensions: 'Narrow body; verify model revision', heating: 'Thermoblock family', coffeeSetup: 'Manual portafilter; grinder separate', milkWorkflow: 'Manual steam', bestFor: 'Small counters' },
  ],
  comparisonNote: 'Compare exact regional model, real stock, warranty, basket package, grinder requirement, milk routine and published service support. A cheap machine paired with an unsuitable grinder can be the more expensive station.',
  recommendations: [
    { kicker: 'Faster manual workflow', title: 'Breville Bambino', text: 'A compact manual alternative with a more modern heating proposition.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read Bambino review', featured: true },
    { kicker: 'Narrow alternative', title: 'DeLonghi Dedica', text: 'Compare exact revision, basket package, steam and available UK price.', href: '/espresso-machine/delonghi-dedica/', linkLabel: 'Read Dedica review' },
    { kicker: 'Another Krups manual', title: 'Krups Virtuoso XP442C40', text: 'The next Krups manual route for a model-by-model comparison.', href: '/espresso-machine/krups-virtuoso-xp442c40/', linkLabel: 'Read Virtuoso review' },
    { kicker: 'Choose the grinder', title: 'Espresso machines without a grinder', text: 'Plan the complete machine, grinder and accessory budget.', href: '/espresso-machine/without-grinder/', linkLabel: 'Read grinder-free guide' },
  ],
  faqs: [
    { question: 'Is the Krups Opio XP320840 currently available in the UK?', answer: 'The exact Brandcart listing displayed £144.95 and out of stock on September 24, 2026. No current in-stock exact UK checkout was established in this research.' },
    { question: 'Does the XP320840 have a grinder?', answer: 'No integrated grinder is documented. Espresso quality and workflow therefore depend on a separate capable grinder or suitable preground coffee.' },
    { question: 'Is it a 15-bar espresso machine?', answer: 'Krups lists a 15-bar pump rating. That does not prove 15 bar at the coffee, establish ideal extraction pressure or replace a measured brew-pressure profile.' },
    { question: 'What basket size does it use?', answer: 'Krups lists single- and double-shot filters but does not publish basket diameter or confirm basket design on the exact UK page. Check the delivered parts before buying accessories.' },
    { question: 'How large is the water tank?', answer: 'The exact UK specification lists a 1.5 L removable tank.' },
    { question: 'How fast does it warm up?', answer: 'Krups uses rapid-heat language but gives no exact time on the UK page. No controlled exact-model cold-start measurement was found.' },
    { question: 'Can its parts go in the dishwasher?', answer: 'The exact manufacturer table does not mark dishwasher-safe parts. Follow the delivered manual and hand-clean the brew head, holder, filters, tray and steam parts as directed.' },
  ],
  finalTitle: 'A basic manual platform that needs a real price and a grinder plan',
  finalVerdict: [
    'The UK XP320840 offers a straightforward aluminium-boiler pump layout, 1.5 L removable tank, one- and two-cup filters and manual steam. It omits the grinder, measurement feedback and automation that some beginners expect, while exact brew and recovery performance remain unmeasured.',
    'At an unavailable £144.95 listing, value is unresolved. Confirm live stock, seller cover, delivered filters and grinder cost. If a Bambino or Dedica station is available near the same complete price, compare workflow and support rather than choosing on the 15-bar label.',
  ],
  video: { id: 'RWkrx948uYo', title: 'Krups Opio Steam & Pump XP320840 Espresso Coffee Machine: Unleash Professional Barista', creator: 'Best Top Tech', published: '2024-07-08', note: 'Independent exact-model 1:45 affiliate-style overview. It provides visual context but no disclosed brew protocol, measurements or long-term testing.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="opio-owner-title"><h3 id="opio-owner-title">What the selected owner thread actually adds</h3><ul>
    <li><strong>One roommate’s Opio setup</strong><p>The poster reported fast flow, limited crema and difficulty fitting a 15 g dose. They were unsure whether the supplied filter was pressurised and did not provide a controlled recipe, so the report raises setup questions rather than proving a machine specification.</p></li>
    <li><strong>Replies focused on upgrade economics</strong><p>Commenters generally advised saving for a future grinder and brewer instead of buying several accessories for this setup. That is personal budget advice from a small self-selected thread, not a product-wide verdict.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeKrupsOpioReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
