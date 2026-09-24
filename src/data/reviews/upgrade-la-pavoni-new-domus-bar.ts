import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.lapavoni.com/en/products/domestic-machines/new-domus-bar';
const productSheet = 'https://pi-exchange.smeg.it/catalog/LPCDMB02EU/en-TT';
const manual = 'https://www.lapavoni.com/media/usermanual/147';
const parts = 'https://www.lapavoni.com/media/spareparts/147';
const coffeeness = 'https://www.coffeeness.de/en/la-pavoni-domus-bar-review/';
const workflowGuide = 'https://www.espresso.co.nz/how-to-guides/how-to-use-the-la-pavoni-domus-bar/';
const retailer = 'https://www.coffeefriend.co.uk/p/coffee-machine-la-pavoni-domus-bar-2/';
const film = 'https://www.youtube.com/watch?v=oJojANYNmgU';
const ownerFilm = 'https://www.youtube.com/watch?v=wTWKeqUJZZ0';
const hero = 'https://assets.4flow.cloud/WEB_LPCDMB02EU.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVMUl2QnVXRzZjRVRaRnBaMVpxazZwUUt4a2toNmM0WGtSVnFKT0VKK2kyNzlCNGJPV20wclZ5cjFZdkc5NmcvanhnMWVoMGs3b1lWTkJjTUNKbHFwY0w0VEhnM2NERU4wOUxvNTYyellrUitlZ0QwNHZNK1I0YjJRSEUvQWVyeW10OUMvWUlwMytHNVNVUm9iWWp3c2g0PQ';

const profile: UpgradeReviewProfile = {
  key: 'la-pavoni-new-domus-bar', slug: '/espresso-machine/la-pavoni-new-domus-bar/', productId: 'CD-EM-000199',
  brand: 'La Pavoni', model: 'New Domus Bar', sku: 'EU LPCDMB02EU, stainless steel, Schuko plug', category: 'Manual single-boiler espresso machine with integrated grinder', brandPath: '/la-pavoni/',
  title: 'La Pavoni New Domus Bar review: compact all-in-one, analog limits',
  description: 'Exact EU LPCDMB02EU review: 0.25 L stainless single boiler, 58 mm holder, 38 mm conical grinder, 2.7 L tank, current price and owner context.',
  verdictLabel: 'A compact all-in-one for hands-on buyers who accept manual dosing, boiler switching and unresolved grinder documentation',
  verdict: 'Consider EU LPCDMB02EU if you want a 300 mm wide stainless station with a 58 mm brass group, pump gauge, 2.7 L tank and integrated 38 mm conical grinder. Grinding is hold-to-run, brewing is manually stopped and the 0.25 L single boiler changes between coffee and steam. La Pavoni listed it at €831 on September 24, 2026.',
  assessment: 'This is research-led, not a Coffeedant bench test. Current LPCDMB02EU records govern exact identity and specifications; demonstrations and owner discussion add context. Coffeedant did not measure temperature, puck pressure, grind distribution, steam speed, sound, recovery or reliability.',
  image: hero, imageAlt: 'La Pavoni official three-quarter image of the stainless New Domus Bar with integrated grinder, pump gauge and steam wand',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Official EU price', msrp: '€831', typical: 'La Pavoni listed EU LPCDMB02EU at €831 on September 24, 2026. Coffeeness discussed US LPCDMB02US at $1,198 in a May 2025 first look, while other listings cover older 110 V machines. Voltage, boiler, holder size, grinder description, warranty and stock can differ by market and generation.', currency: 'EUR', numeric: '831', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact La Pavoni EU specification', href: official, note: 'Exact LPCDMB02EU identity, live price, materials, current functions and included accessories', primary: true },
    { label: 'Watch the exact-model walkthrough', href: film, note: 'DoEkspresu retailer unboxing and review published January 22, 2026; commercially connected to sales' },
  ],
  facts: [
    { label: 'Exact market', value: 'EU LPCDMB02EU, stainless steel, 220-240 V, 50/60 Hz, 950 W and type F/E Schuko plug' },
    { label: 'Boiler and group', value: '0.25 L stainless single boiler, chromed-brass brew group and 58 mm internal holder diameter' },
    { label: 'Pump and gauge', value: 'Vibration pump with 15-bar component rating and one pump manometer; target puck pressure is not specified' },
    { label: 'Integrated grinder', value: '38 mm conical burrs, 130 g hopper and manual portafilter-activated grinding; official adjustment descriptions conflict' },
    { label: 'Water and milk', value: '2.7 L removable tank with level indicator; one stainless wand for steam and hot water' },
    { label: 'Size and mass', value: '300 × 250 × 345 mm and 10.5 kg in the September 24, 2026 official product sheet' },
    { label: 'Included coffee kit', value: 'Double-spout holder, one-cup, two-cup and paper-pod filters, ABS tamper and scoop' },
  ],
  quickAnswers: [
    { question: 'Is this the current EU New Domus Bar?', answer: 'Yes. This covers stainless LPCDMB02EU. Older and US records can specify a brass boiler, 57 mm holder or 1200 W supply.' },
    { question: 'Is the current EU holder 58 mm?', answer: 'Yes. The exact current product page and sheet both specify a 58 mm internal diameter. Do not transfer the 57 mm figure from older or US records.' },
    { question: 'Does the grinder dose automatically?', answer: 'No documented timer or weight system was found. The manual shows grinding while the portafilter presses and holds the grinder switch, so the user controls dose duration.' },
    { question: 'Is the grinder stepped or stepless?', answer: 'First-party records conflict. La Pavoni calls it seven-position adjustable, shows seven numbered references in the manual and also lists stepless micrometric adjustment. Verify the delivered unit.' },
    { question: 'Can it brew and steam at the same time?', answer: 'No. Coffee and steam share a 0.25 L single boiler, so the machine changes modes and needs a temperature reset before another espresso.' },
    { question: 'Does 15 bar mean espresso is brewed at 15 bar?', answer: 'No. It is the pump rating. La Pavoni does not publish controlled pressure at a prepared coffee puck.' },
  ],
  bestFor: ['Buyers who want one compact stainless chassis rather than a separate machine and grinder', 'Hands-on users comfortable controlling grind time, dose, tamp, yield and shot stop', 'One- or two-drink sessions where sequential milk steaming is acceptable'],
  avoidIf: ['You want guided dosing, PID temperature control, a shot timer or automatic milk', 'You regularly prepare several milk drinks and need rapid brew-and-steam overlap', 'You want a clearly documented grinder adjustment system or an easy independent grinder upgrade path'],
  pros: ['Current exact EU documentation, product sheet, manual and parts drawing', '58 mm holder and real pump manometer on the current LPCDMB02EU', 'Integrated 38 mm conical grinder in a compact 300 mm wide cabinet', 'Large 2.7 L removable tank with water-level indication', 'Stainless body, brass group, passive warmer and hot-water function'],
  cons: ['Tiny 0.25 L single boiler requires brew-to-steam switching', 'No PID, shot timer, volumetric dosing or automatic grinder dose', 'First-party records conflict on seven-position versus stepless grind adjustment', '130 g hopper and integrated grinder constrain upgrade flexibility', 'ABS tamper and no documented blind basket in the exact EU package'],
  architecture: 'a current European all-in-one built around a 0.25 L stainless single boiler, chromed-brass 58 mm group, vibration pump, pump manometer, 2.7 L removable tank, passive cup warmer, shared steam and hot-water wand, plus an integrated 38 mm conical-burr grinder with a 130 g hopper and manual activation',
  identityBoundary: 'This page covers EU LPCDMB02EU. Current documents say 950 W, stainless boiler and 58 mm holder. US LPCDMB02US material says 1200 W and 57 mm, while older listings often say brass boiler. Those claims only define regional and generational boundaries.',
  primaryStrength: 'A grinder, proper current-EU pump gauge, 58 mm holder and large tank fit one unusually compact stainless cabinet.',
  primaryLimit: 'The small single boiler and fully manual grinder-to-shot sequence trade speed and guidance for space efficiency.',
  setupNote: 'Confirm LPCDMB02EU and a 220-240 V Schuko supply. Leave top access for the tank and hopper. Wash removable parts, seat the tank, follow the first-use rinse and warm the clean holder. Check the delivered grinder dial because the adjustment descriptions conflict.',
  espressoNote: 'Warm the group and holder consistently, grind only the amount needed, distribute and tamp level, then use a scale and timer while stopping the pump manually. The gauge reports pump-system pressure, not a guaranteed number at the puck. Dial by flow and taste; do not chase the 15-bar component label.',
  milkNote: 'Steam and coffee share the 0.25 L boiler. Pull espresso first, enter steam mode, wait for the temperature light, purge condensation, texture, close the valve before removing the tip, then wipe and purge. The manual requires cooling the boiler path before returning to coffee. No controlled pitcher or recovery time was found.',
  workflowNote: 'The holder runs the grinder switch only while pressed. The user levels, tamps, locks in, starts brewing and stops by yield. Milk adds a separate heat phase and post-steam reset. Integration does not mean automation.',
  buildNote: 'La Pavoni specifies a stainless body and boiler, chromed-brass group, stainless grid and wand, plus a plastic drip-tray drawer. The exact parts record aids identification but does not prove local stock, service life or failure rates. Water chemistry and qualified electrical or boiler service remain important.',
  featuresNote: 'The exact machine includes the grinder, 58 mm holder, pump gauge, temperature light, removable tank, level indicator, passive warmer, steam, hot water and paper-pod filter. It has no documented PID, shot timer, automatic dosing, pre-infusion program, volumetrics, direct plumbing or automatic milk.',
  valueNote: 'At €831, the current EU package undercuts many separate specialist stations while including a grinder. Its value depends on accepting that grinder and the small boiler. Compare with a Breville hybrid for guidance or a Gaggia plus separate grinder for easier component upgrades.',
  ownerPattern: 'Owner evidence centres on accessory compatibility and the manual sequence. One owner reported a Lelit 57.35 mm levelling tool fit an older Domus, while the current EU sheet says 58 mm. An owner video shows grinding, tamping and extraction.',
  ownerCaution: 'Those accounts span older machines and regions. A tool fitting one basket does not override current LPCDMB02EU documentation, and a clean video shot is not a controlled test.',
  maintenanceNote: 'Purge and wipe the wand, rinse the holder and baskets, brush loose grounds, empty the tray and keep the hopper throat clean. Follow the exact manual’s water and descaling instructions. No blind basket is documented, so confirm the approved method before pressure backflushing.',
  dimensions: {
    espresso: { score: 7.8, claim: 'The current EU 58 mm brass group and pump gauge provide credible manual control.', consequence: 'Results still depend on grinder adjustment, puck preparation, temperature routine and manual stopping.', status: 'Exact architecture plus demonstrations; no controlled extraction test', signals: ['58 mm internal holder diameter.', 'Pump manometer with manual brew switch.', 'No brew-temperature or puck-pressure dataset.'] },
    milk: { score: 6.7, claim: 'The stainless wand covers occasional cappuccino and hot water.', consequence: 'The 0.25 L single boiler forces mode switching and recovery.', status: 'Exact hardware plus workflow guidance', signals: ['Shared coffee and steam boiler.', 'Manual steam valve.', 'No measured pitcher time or recovery.'] },
    workflow: { score: 7.1, claim: 'One chassis simplifies the counter footprint.', consequence: 'Grinding, dosing, tamping, brewing and boiler reset are all manual.', status: 'Official manual plus owner workflow', signals: ['Portafilter-activated grinder switch.', '2.7 L removable tank.', 'No timed dose, shot timer or volumetrics.'] },
    build: { score: 8.0, claim: 'Stainless bodywork and a brass group create substantial core hardware for the size.', consequence: 'The integrated layout can couple machine and grinder service decisions.', status: 'Official materials; no durability sample', signals: ['Stainless body and boiler.', 'Chromed-brass group.', 'Exact parts drawing.'] },
    features: { score: 7.0, claim: 'Grinder, gauge, hot water and large tank cover useful manual essentials.', consequence: 'Digital feedback and dosing assistance are absent.', status: 'Exact September 2026 documents', signals: ['38 mm conical grinder and 130 g hopper.', 'Pump gauge and water-level indicator.', 'No PID, timer, automation or plumbing.'] },
    value: { score: 7.3, claim: 'The €831 EU price packages a complete manual station into 300 mm of width.', consequence: 'A separate grinder station may offer clearer adjustment and a better upgrade path.', status: 'Official price checked September 24, 2026', signals: ['€831 current EU list price.', 'Grinder included.', 'Regional specifications differ materially.'] },
  },
  sources: [
    { label: 'La Pavoni exact New Domus Bar product page', href: official, note: 'Current EU identity, price, materials, functions, electrical data and package; checked September 24, 2026.' },
    { label: 'La Pavoni LPCDMB02EU product sheet', href: productSheet, note: 'Official sheet generated September 24, 2026 with exact dimensions, mass, boiler, holder and grinder data.' },
    { label: 'La Pavoni New Domus Bar manual', href: manual, note: 'Official first use, manual grinder activation, numbered adjustment references, brewing, steam, cooling and cleaning instructions.' },
    { label: 'La Pavoni New Domus Bar spare-parts record', href: parts, note: 'Official exploded service drawing for exact-family identification, not a local-stock promise.' },
    { label: 'Coffeeness Domus Bar first look', href: coffeeness, note: 'Updated May 23, 2025 for US LPCDMB02US; explicitly says the machine had not been tested, so it is comparison context only.' },
    { label: 'Espresso New Zealand Domus Bar workflow guide', href: workflowGuide, note: 'Commercial how-to covering warm-up, grinder activation, manual brewing, steaming and post-steam cooling.' },
    { label: 'Coffee Friend Domus Bar listing', href: retailer, note: 'Commercial current-style description of seven adjustment positions and package details; exact EU documents govern conflicts.' },
    { label: 'DoEkspresu exact-model video', href: film, note: 'Polish retailer unboxing and review published January 22, 2026; exact model, commercially connected and not a controlled Coffeedant test.' },
    { label: 'Reddit Domus accessory discussion', href: 'https://www.reddit.com/r/espresso/comments/1h4u7cf/does_lelit_5335_mm_portafilter_fits_on_la_pavoni/', note: 'Self-selected older-machine accessory discussion demonstrating holder-size and generation confusion.' },
    { label: 'Felix Ahlemann owner workflow video', href: ownerFilm, note: 'Owner-produced grind, tamp and pull sequence published May 10, 2026; useful for manual workflow, not measured performance.' },
  ],
  comparisons: [
    { name: 'Breville Barista Express', href: '/espresso-machine/breville-barista-express-bes870xl/', quickDecision: 'Compare for more guided dosing and temperature-control logic in a mainstream all-in-one.', priceClass: 'Mainstream hybrid class', dimensions: 'Wider integrated-grinder chassis', heating: 'PID-managed thermocoil by generation', coffeeSetup: '54 mm manual with dose support', milkWorkflow: 'Sequential manual steam', bestFor: 'Easier learning and broader support' },
    { name: 'Breville Barista Pro', href: '/espresso-machine/breville-barista-pro-bes878/', quickDecision: 'Compare for faster heat-up, screen guidance and a more modern integrated workflow.', priceClass: 'Higher mainstream hybrid class', dimensions: 'Wider integrated-grinder chassis', heating: 'ThermoJet system', coffeeSetup: '54 mm manual with timed grinder', milkWorkflow: 'Sequential manual steam', bestFor: 'Speed and interface guidance' },
    { name: 'Gaggia Classic Evo Pro', href: '/espresso-machine/gaggia-classic-evo-pro/', quickDecision: 'Pair with a separate grinder when modular upgrades and independent replacement matter more than width.', priceClass: 'Entry specialist machine plus grinder', dimensions: 'Separate two-piece station', heating: 'Compact single boiler', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Sequential manual steam', bestFor: 'Modular ownership and upgrades' },
    { name: 'La Pavoni New Domus Bar', quickDecision: 'Choose for a compact traditional station and accept manual dosing plus single-boiler sequencing.', priceClass: '€831 official EU Sep 24', dimensions: '300 × 250 × 345 mm; 10.5 kg', heating: '0.25 L stainless single boiler', coffeeSetup: '58 mm manual; integrated 38 mm grinder', milkWorkflow: 'Sequential manual steam', bestFor: 'Compact analog all-in-one use' },
  ],
  comparisonNote: 'Compare exact regional model, boiler material and power, holder diameter, grinder adjustment and dosing method, warm-up, brew-to-steam delay, gauge, included baskets, dealer service and full station width. Similar stainless styling does not resolve the documented model differences.',
  recommendations: [
    { kicker: 'Guided all-in-one', title: 'Breville Barista Express', text: 'Choose broader training support and more guided dosing while keeping manual espresso involvement.', href: '/espresso-machine/breville-barista-express-bes870xl/', linkLabel: 'Read Barista Express review', featured: true },
    { kicker: 'Faster integrated workflow', title: 'Breville Barista Pro', text: 'Compare cold-start speed, screen guidance, grinder control and total counter width.', href: '/espresso-machine/breville-barista-pro-bes878/', linkLabel: 'Read Barista Pro review' },
    { kicker: 'Modular 58 mm station', title: 'Gaggia Classic Evo Pro', text: 'Choose a separate grinder path when independent upgrades and replacement flexibility matter.', href: '/espresso-machine/gaggia-classic-evo-pro/', linkLabel: 'Read Gaggia review' },
    { kicker: 'PID single boiler', title: 'Lelit Anna', text: 'Compare explicit temperature control and a separate grinder against the Domus Bar’s compact integration.', href: '/espresso-machine/lelit-anna/', linkLabel: 'Read Lelit Anna review' },
  ],
  faqs: [
    { question: 'Is the current New Domus Bar a 58 mm machine?', answer: 'Yes. The exact LPCDMB02EU page and September 24, 2026 sheet specify a 58 mm internal holder diameter. Older and US records can say 57 mm.' },
    { question: 'Is its boiler stainless steel or brass?', answer: 'The current exact EU page and sheet specify a 0.25 L stainless boiler. Brass-boiler claims belong to older or regional records and should not be transferred to LPCDMB02EU.' },
    { question: 'Does the integrated grinder have seven steps?', answer: 'That remains unclear. The official introduction says seven-position adjustable, the manual shows seven numbered references, and the same product page calls adjustment stepless. Check the delivered dial.' },
    { question: 'Can the New Domus Bar brew and steam together?', answer: 'No. It has one 0.25 L boiler for coffee, hot water and steam, so milk requires a separate higher-temperature phase.' },
    { question: 'Does the grinder stop at a programmed dose?', answer: 'No timed or weighed dose is documented. The manual instructs the user to press the portafilter against the grinder switch and hold it for the desired amount.' },
    { question: 'What does the gauge show?', answer: 'La Pavoni calls it a pump manometer. It can show system pressure while brewing, but it does not prove pressure at the coffee puck and the 15-bar label is only the pump rating.' },
    { question: 'Is it suitable for continuous office use?', answer: 'The manual says it is not intended for continuous professional use. Its manual grinder, small single boiler and reset sequence also make busy shared service a poor fit.' },
  ],
  finalTitle: 'A compact all-in-one whose manual character must be the point',
  finalVerdict: [
    'The current EU New Domus Bar combines a 0.25 L stainless single boiler, 58 mm brass group, pump gauge, 2.7 L tank and 38 mm conical grinder in a 300 mm wide machine. That is space-efficient traditional hardware for €831.',
    'Buy it when you want the hands-on process and can verify the grinder dial on the exact delivered LPCDMB02EU. Choose a guided Breville hybrid for easier repetition, or a separate machine and grinder when upgrade flexibility and clearer component choices matter more than one-box width.',
  ],
  video: { id: 'oJojANYNmgU', title: 'La Pavoni Domus Bar - Unboxing i recenzja domowego ekspresu kolbowego ze zintegrowanym młynkiem', creator: 'doekspresu', published: '2026-01-22', note: 'Exact-model Polish retailer unboxing and review. It is independent of La Pavoni but commercially connected to sales, so current LPCDMB02EU documents govern exact EU identity and specifications.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="domus-owner-title"><h3 id="domus-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Accessory size depends on generation</strong><p>An older-machine owner reported a Lelit 57.35 mm levelling tool fit. The current exact EU sheet says 58 mm, so buyers should not assume interchangeability.</p></li>
    <li><strong>The workflow is fully manual</strong><p>The owner video shows grinding into the holder, manual distribution and tamping, then a manually stopped extraction. Integration does not mean automatic dosing.</p></li>
    <li><strong>Integration does not automate the process</strong><p>The owner workflow still requires manual dose judgment and shot stopping. It does not establish consistency or a failure rate.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLaPavoniNewDomusBarReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
