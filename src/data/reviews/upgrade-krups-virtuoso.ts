import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/TRADITIONAL-ESPRESSO-MACHINES/Krups-Virtuoso-XP442C40-Pump-Espresso-Coffee-Machine--Stainless-Steel/p/8010001076';
const support = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Espresso/Krups-Virtuoso-XP442C40-Pump-Espresso-Coffee-Machine--Stainless-Steel/csp/8010001076';
const manual = 'https://dam.groupeseb.com/m/c4e7a97480c001aa/original/1820007472-IFU.pdf?timestamp=20250312062849';
const seller = 'https://business.currys.co.uk/catalogue/domestic-appliances/small-kitchen-appliances/coffee-machines/krups-virtuoso-xp442c40-coffee-machine-stainless-steel-black/N612076W';
const independent = 'https://www.hometesterclub.com/uk/en/reviews/krups-virtuoso-xp442c4';
const film = 'https://www.youtube.com/watch?v=7kCNPulmbS8';
const hero = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w1MTEzNXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJneFpTOW9PRGd2TWpZNE9EY3pNVGsyT0RNeE1ESXxkNGIxMjAxZmMyMzZlNmRkMzMxNWZlMjgzOTY4ZDM5MmYwMDMyODA3MTkxNTkxNDc0YjdiOWFjN2U4ZjA2OTU0';

const profile: UpgradeReviewProfile = {
  key: 'krups-virtuoso-xp442c40', slug: '/espresso-machine/krups-virtuoso-xp442c40/', productId: 'CD-EM-000195',
  brand: 'Krups', model: 'Virtuoso XP442C40', sku: 'UK XP442C40, stainless steel and black, UK plug', category: 'Manual pump espresso machine', brandPath: '/krups/',
  title: 'Krups Virtuoso XP442C40 review: compact and programmable',
  description: 'Exact UK XP442C40 research review: thermoblock, programmable one- and two-cup doses, ESE pod filter, manual steam, 1 L tank, dated stock and owner context.',
  verdictLabel: 'Compact programmed espresso for a buyer who accepts a closed accessory path',
  verdict: 'Consider the UK XP442C40 if a trustworthy in-stock unit appears and you want a 143 mm-wide manual machine with programmable one- and two-cup volumes, ESE pod support, hot water and manual steam. The exact manual confirms 1400 W, a 1 L tank, 280 × 143 × 285 mm dimensions and a two-year domestic guarantee. Current exact UK retail stock was not established on September 24, 2026.',
  assessment: 'This is a document-led assessment, not a Coffeedant taste test. Exact hardware and procedures come from the Krups UK page and XP442 manual. Home Tester Club adds 65 self-reported ratings, while the independent Virtuoso+ video covers a later adjacent model. Neither source supplies controlled brew measurements for UK XP442C40.',
  image: hero, imageAlt: 'Krups UK official angled image of the stainless steel and black Virtuoso XP442C40 with portafilter and steam nozzle',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact UK XP442C40 unavailable', msrp: 'Historical £199.99 reference', typical: 'Currys Business marked the exact XP442C40 out of stock when checked on September 24, 2026. TechRadar recorded a £99.99 Amazon promotion against £199.99 on July 12, 2023. Those figures are historical context, not a current offer.', currency: 'GBP', numeric: '', checked: 'September 24, 2026' },
  links: [
    { label: 'Read the exact Krups UK specification', href: official, note: 'Exact XP442C40 identity, thermoblock, tank, electrical details, ESE support and care', primary: true },
    { label: 'Check the dated exact-model retailer page', href: seller, note: 'Currys Business exact XP442C40 archive; out of stock September 24, 2026' },
  ],
  facts: [
    { label: 'Exact market', value: 'UK XP442C40, stainless steel and black, UK plug, 220–240 V, 50–60 Hz and 1400 W' },
    { label: 'Heating and pump', value: 'Krups thermoblock and 15-bar pump rating; no measured pressure at the coffee is published' },
    { label: 'Coffee formats', value: 'Ground coffee in one- and two-cup filters plus a separate ESE soft-pod filter' },
    { label: 'Dose buttons', value: 'Programmable 15–65 ml single and 30–130 ml double; defaults are 40 ml and 80 ml' },
    { label: 'Milk and water', value: 'Manual steam nozzle with removable frothing tube; the same side outlet dispenses hot water' },
    { label: 'Capacity and size', value: '1 L removable tank; 280 × 143 × 285 mm in the exact manual; Currys lists 3.5 kg' },
    { label: 'Energy and cover', value: '0.2 W off mode, 28-minute off timing on the current product table, and two-year domestic guarantee' },
  ],
  quickAnswers: [
    { question: 'Is this the exact UK XP442C40?', answer: 'Yes. The Krups UK page identifies XP442C40, UK plug, stainless-steel-and-black finish, 220–240 V and 1400 W.' },
    { question: 'Does it stop shots automatically?', answer: 'Yes. One- and two-cup buttons stop at saved volumes. The manual allows 15–65 ml for one cup and 30–130 ml for two.' },
    { question: 'Can it use ESE pods?', answer: 'Yes. A dedicated ESE soft-pod filter is documented, in addition to the one- and two-cup ground-coffee filters.' },
    { question: 'Does it include a grinder?', answer: 'No integrated grinder is documented. Ground coffee quality and the chosen filter therefore control much of the result.' },
    { question: 'Is the 40-second claim a measured shot time?', answer: 'No. It is Krups marketing that combines preheating and espresso delivery. No independent exact-model cold-start protocol was found.' },
    { question: 'Is it currently available in the UK?', answer: 'The exact Currys Business page was out of stock on September 24, 2026. No current exact-model UK checkout was verified.' },
  ],
  bestFor: ['Very narrow counters where a 143 mm body matters', 'Buyers who want programmed cup volumes but still accept manual grinding, dosing and steaming', 'Households that value both ground-coffee filters and an ESE soft-pod option'],
  avoidIf: ['You want a standard 58 mm accessory ecosystem, pressure gauge or temperature adjustment', 'You need automatic milk or frequent back-to-back cappuccinos', 'You require an available exact-model UK offer before deciding value'],
  pros: ['Exact 143 mm width and compact 280 × 285 mm depth and height', 'Programmable one- and two-cup flow stop', 'Ground coffee and ESE soft-pod filters documented', 'Manual steam, hot water, cup warmer and removable 1 L tank'],
  cons: ['No grinder, pressure gauge, PID or published brew-temperature setting', 'Brew-after-steam workflow requires a manual cooling flush', 'Several exact accessories are already unavailable from Krups UK', 'No current exact UK machine stock or strong instrumented independent test found'],
  architecture: 'a compact UK manual pump machine with a thermoblock, four front buttons, one- and two-cup programmed flow, separate ESE filter, 1 L removable rear tank, side steam and hot-water outlet, cup warmer and removable tray',
  identityBoundary: 'This page covers UK XP442C40. Virtuoso+ XP444GG0 is a different later model, while XP442C regional suffixes may differ in plug, voltage, package and support. Their features and test results do not transfer automatically.',
  primaryStrength: 'The 143 mm body, saved one- and two-cup volumes and three supplied coffee filters make a flexible compact routine.',
  primaryLimit: 'The non-standard accessory path, manual brew-to-steam recovery and unresolved current stock reduce its case as a long-term platform.',
  setupNote: 'Confirm XP442C40 on the rating plate, UK plug, tank, holder, all three filters, spoon-tamper, nozzle parts, manual and invoice. Rinse both circuits. Leave rear tank access and side room for the knob and jug. Check the delivered locking geometry before buying accessories.',
  espressoNote: 'The manual documents programmable 15–65 ml single and 30–130 ml double volumes, defaulting to 40 and 80 ml. Krups specifies one spoon per 40 ml and warns against overfilling. The 15-bar pump label does not establish pressure at the puck, brew temperature or extraction consistency. Owner ratings are not laboratory measurements.',
  milkNote: 'Krups suggests 60–100 ml cold milk, a water purge, about 10 seconds of initial stretching and continued movement with the nozzle submerged. The manual caps continuous steaming at 45 seconds for 100 ml and recommends brewing all espressos before a multi-drink milk round. Exact steam output remains unmeasured.',
  workflowNote: 'Four front buttons cover power, steam, one cup and two cups; the side knob selects preheat or steam and hot water. Saved volumes remove manual stopping, while grinding, dosing, tamping, steaming and cleanup remain hands-on. After steam, the manual requires a cooling-water flush before coffee.',
  buildNote: 'Krups documents a stainless-steel-and-black exterior, overheating safeguards, support and a two-year domestic guarantee. Some filters and tray parts remained listed, while the holder, two-cup filter, nozzle, tank, grid and spoon showed limited availability. This does not establish machine life.',
  featuresNote: 'Useful extras are programmed flow stop, ESE support, cup warmer, hot water, manual steam, removable tank and tray, descaling alert and automatic descaling routine. No grinder, gauge, display, adjustable temperature, automatic milk, app or standard commercial holder is documented.',
  valueNote: 'Currys Business showed the exact machine out of stock on September 24, 2026. TechRadar recorded a £99.99 Amazon promotion against £199.99 in July 2023, not today’s market. Compare only a live offer with its seller, warranty, filters and grinder cost against an available rival.',
  ownerPattern: 'Home Tester Club displayed 4.5/5 from 65 reviews and 97% recommendation for its XP442C4 page, without a representative sampling method or final regional digit. Reddit threads describe weak or sour shots, accessory uncertainty, wand learning and upgrade questions. Some posters report improvement after changing coffee, ratio or basket.',
  ownerCaution: 'These are self-selected accounts. Exact suffix, coffee, grind, filter, dose, yield, water and care often differ or are missing. Conflicting 51 or 52 mm claims are not manufacturer specifications. Use them to frame questions, not purchases, failure rates or a universal recipe.',
  maintenanceNote: 'Clean the holder and filter after each use, wipe the group, empty and wash the tray, and purge and wipe the steam nozzle immediately after milk. The manual says no appliance parts belong in a dishwasher. The machine counts cycles for a descaling alert and runs a timed automatic program, followed by two or three clean-water rinses. Limescale-related repairs may be excluded from guarantee cover.',
  dimensions: {
    espresso: { score: 6.9, claim: 'Programmed volumes and three coffee filters add convenience, but brew performance is not independently measured.', consequence: 'Fresh coffee and a compatible grind still matter; the 15-bar label cannot predict extraction quality.', status: 'Exact manual and product page plus bounded self-reported context', signals: ['15–65 ml single and 30–130 ml double programming.', 'Ground coffee and ESE filters are documented.', 'No exact pressure, temperature or repeatability dataset.'] },
    milk: { score: 6.7, claim: 'The manual nozzle offers direct control in a very narrow machine.', consequence: 'Technique, a cooling flush and immediate nozzle care add work to every milk drink.', status: 'Exact manufacturer procedure; no instrumented steam test', signals: ['60–100 ml starting milk guidance.', '45-second continuous-steam limit for 100 ml.', 'No automatic texture, dose or temperature control.'] },
    workflow: { score: 7.6, claim: 'Saved cup volumes and a four-button panel simplify a compact manual routine.', consequence: 'Brew-to-steam switching is still sequential and multi-drink rounds require planning.', status: 'Exact manual sequence and controls', signals: ['One- and two-cup automatic flow stop.', 'Separate steam preheat and manual side knob.', 'Manual cooling flush before brewing after steam.'] },
    build: { score: 6.6, claim: 'Exact support and some original parts remain traceable, but several model-specific parts are unavailable.', consequence: 'Confirm the seller, cover and delivered accessories before treating a used unit as repairable.', status: 'Manufacturer parts and guarantee records; no representative durability sample', signals: ['Overheating safeguards and two-year domestic guarantee.', 'Holder, nozzle, tank and other parts showed limited availability.', 'No verified service-life or failure-rate evidence.'] },
    features: { score: 6.8, claim: 'Programming, ESE support, hot water and steam are useful at this size.', consequence: 'Buyers seeking feedback, temperature control or a broad accessory path will outgrow it.', status: 'Exact UK product page and manual', signals: ['Programmable single and double volumes.', 'Cup warmer, steam, hot water and ESE filter.', 'No grinder, gauge, display, PID or app.'] },
    value: { score: 5.8, claim: 'The exact machine was unavailable, so its current value is unresolved.', consequence: 'Use only a real checkout price and include grinder, accessories and warranty in the comparison.', status: 'Exact out-of-stock page September 24, 2026 plus historical 2023 promotion', signals: ['Currys Business showed out of stock.', '£99.99 was a July 2023 promotion, not a live price.', 'Parts availability and non-standard fit affect long-term cost.'] },
  },
  sources: [
    { label: 'Krups UK exact XP442C40 product page', href: official, note: 'Exact UK identity, thermoblock, pump rating, coffee formats, tank, materials, controls, electrical details, energy and care; checked September 24, 2026.' },
    { label: 'Krups exact XP442 support page and manual', href: support, note: `Model-indexed route linking manual revision 1820007472/02 at ${manual}; dimensions, power, programming, steam, cleaning, descaling and guarantee.` },
    { label: 'Currys Business exact XP442C40 archive', href: seller, note: 'Exact product code and EAN, 1400 W, 1 L, 3.5 kg, two-year guarantee and out-of-stock status on September 24, 2026.' },
    { label: 'Home Tester Club XP442C4 review panel', href: independent, note: 'Displayed 4.5/5 from 65 ratings and 97% recommendation; self-selected product-test context with final regional digit and sampling method unresolved.' },
    { label: 'Coffealover EN Virtuoso+ independent video', href: film, note: 'Independent review and demonstration published June 16, 2026; adjacent Virtuoso+ model rather than verified UK XP442C40, so used only for family context.' },
    { label: 'TechRadar July 2023 deal record', href: 'https://www.techradar.com/home/coffee-machines/we-made-it-our-mission-to-find-the-best-espresso-machine-prime-day-deal-and-we-succeeded', note: 'Historical exact-model £99.99 promotion against £199.99 on July 12, 2023; not a current price or hands-on test.' },
    { label: 'Krups UK exact accessories route', href: 'https://www.krups.co.uk/accessories-store/Products-/Beverages/Espresso/Krups-Virtuoso-XP442C40-Pump-Espresso-Coffee-Machine--Stainless-Steel/csp/8010001076?superCategoryCode=Espresso', note: 'Exact filters, holder, tray, tank, nozzle and stock status; availability can change.' },
    { label: 'Reddit XP442 weak-shot discussion', href: 'https://www.reddit.com/r/espresso/comments/10bs7ds/krups_pump_espresso_virtuoso_xp442/', note: 'Self-selected setup using preground coffee and a weak flat-white result; exact suffix and controlled recipe were not established.' },
    { label: 'Reddit exact XP442C40 holder discussion', href: 'https://www.reddit.com/r/espresso/comments/17msp25/krups_xp442c40/', note: 'Exact-model question about a bottomless holder with no documented compatible answer; shows accessory uncertainty, not a specification.' },
    { label: 'Reddit Virtuoso+ dial-in discussion', href: 'https://www.reddit.com/r/espresso/comments/1jpq8u5/how_can_i_get_a_decent_espresso_krups_virtuoso/', note: 'Detailed adjacent-model owner account with dose, yield, time and sourness, followed by conflicting basket and grinder advice; not transferable performance evidence.' },
  ],
  comparisons: [
    { name: 'Krups Virtuoso XP442C40', quickDecision: 'Narrow body, programmed doses and ESE support, but unavailable exact stock.', priceClass: 'Exact model out of stock Sep 24', dimensions: '280 × 143 × 285 mm; 1 L', heating: 'Thermoblock', coffeeSetup: 'Ground coffee or ESE; grinder separate', milkWorkflow: 'Manual steam plus cooling flush', bestFor: 'Very narrow counters' },
    { name: 'Krups Opio XP320840', href: '/espresso-machine/krups-opio-xp320840/', quickDecision: 'Simpler dial-led Krups with larger tank but no documented dose programming.', priceClass: '£144.95 out-of-stock listing Sep 24', dimensions: 'Exact dimensions unpublished; 1.5 L', heating: 'Aluminium boiler', coffeeSetup: 'Manual ground coffee', milkWorkflow: 'Manual steam', bestFor: 'Basic Krups routine' },
    { name: 'Breville Bambino', href: '/espresso-machine/breville-bambino/', quickDecision: 'Compare for a newer compact heating and manual-steam platform with broader support.', priceClass: 'Check live exact UK offer', dimensions: 'Compact; verify regional model', heating: 'ThermoJet family', coffeeSetup: 'Manual portafilter; grinder separate', milkWorkflow: 'Manual steam', bestFor: 'Faster modern workflow' },
  ],
  comparisonNote: 'Compare exact model, real stock, warranty, programmed volume, holder and basket availability, grinder needs, steam sequence and total station cost. Do not rank a discontinued or unavailable listing against a live rival.',
  recommendations: [
    { kicker: 'Simpler Krups manual', title: 'Krups Opio XP320840', text: 'Larger tank and basic selector controls without Virtuoso dose programming.', href: '/espresso-machine/krups-opio-xp320840/', linkLabel: 'Read Opio review', featured: true },
    { kicker: 'Faster compact alternative', title: 'Breville Bambino', text: 'Compare current price, heating, steam and accessory support.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read Bambino review' },
    { kicker: 'Narrow rival', title: 'DeLonghi Dedica', text: 'An established compact manual family with current-model details to verify.', href: '/espresso-machine/delonghi-dedica/', linkLabel: 'Read Dedica review' },
    { kicker: 'Plan the station', title: 'Espresso machines without a grinder', text: 'Budget for the machine, grinder, scale and compatible tools together.', href: '/espresso-machine/without-grinder/', linkLabel: 'Read grinder-free guide' },
  ],
  faqs: [
    { question: 'How wide is the Krups Virtuoso XP442C40?', answer: 'The exact manual gives 280 × 143 × 285 mm. Its 143 mm body width is the key compact advantage, but leave side room for the knob and steam jug and rear access for the tank.' },
    { question: 'Can it program shot volume?', answer: 'Yes. The exact manual allows 15–65 ml for the one-cup button and 30–130 ml for two cups. Factory defaults are 40 ml and 80 ml.' },
    { question: 'Does it use ESE coffee pods?', answer: 'Yes. Krups supplies a dedicated ESE soft-pod filter, separate from the one- and two-cup ground-coffee filters.' },
    { question: 'What size portafilter does it use?', answer: 'Krups does not publish a nominal diameter on the exact UK page or manual. Owner posts conflict between 51 and 52 mm and do not establish locking geometry. Measure the delivered parts before ordering replacements.' },
    { question: 'Can it brew immediately after steaming?', answer: 'Not directly. The exact manual requires a cooling-water flush through the steam nozzle until brew temperature returns.' },
    { question: 'Are the accessories dishwasher-safe?', answer: 'No. The exact manual says not to clean any appliance parts in a dishwasher. Wash the holder, filters, tray and nozzle parts as directed.' },
    { question: 'Is the XP442C40 still available in the UK?', answer: 'The exact Currys Business page was out of stock on September 24, 2026, and no verified current exact-model UK checkout was found.' },
  ],
  finalTitle: 'A genuinely narrow programmable manual, held back by availability',
  finalVerdict: [
    'The UK XP442C40 combines a 143 mm body, programmed doses, three filters, manual steam, hot water and a 1 L tank. No strong independent dataset establishes brew temperature, puck pressure or repeatability.',
    'Value is unresolved because the exact retail page was unavailable. Buy only from a trustworthy listing with all three filters and clear cover. Compare the complete station and service path with Bambino or Dedica.',
  ],
  video: { id: '7kCNPulmbS8', title: 'Krups Virtuoso+: HONEST Review and Test', creator: 'Coffealover EN', published: '2026-06-16', note: 'Independent Virtuoso+ review and demonstration. This is adjacent-family context, not an exact UK XP442C40 test; no XP442C40 measurements or conclusions are transferred.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="virtuoso-owner-title"><h3 id="virtuoso-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Ratings are positive but not a controlled test</strong><p>Home Tester Club displayed 4.5 out of 5 from 65 ratings and 97% recommendation for an XP442C4-labelled page. The sample is self-selected, the final regional digit is not shown, and review conditions are not standardised.</p></li>
    <li><strong>Dial-in and accessory questions repeat</strong><p>Owners describe weak or sour cups with preground coffee, ask about unpressurised baskets and bottomless holders, and disagree about nominal diameter. These threads show where the buying friction lies, but they do not override the manual or prove a universal fix.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeKrupsVirtuosoReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
