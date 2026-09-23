import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Arabica-Digital-Bean-to-Cup-Coffee-Machine---Black/p/8010000001';
const manual = 'https://dam.groupeseb.com/m/e394ee30f0322ff8/original/8080014573-IFU.pdf?timestamp=20250714200216';
const retail = 'https://www.amazon.co.uk/KRUPS-Automatic-Espresso-Cappuccino-EA817040/dp/B077PRPRK8';
const image = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wzMzk2OHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobE9TOW9NbUl2TWprM01UWXlPVFF6TURNM056UXw1ZTcyYWQ0NDViZDY5OWMwNjA4OGUzMWUxNWQxZjQxMzEzZWE4ODNiOGQyYzg4M2ZmNjZiMDQ2NDhhYmE0MWZl';
const video = 'https://www.youtube.com/watch?v=snkES99AKdc';

const profile: UpgradeReviewProfile = {
  key: 'krups-arabica-digital-ea817040', slug: '/espresso-machine/krups-arabica-digital-ea817040/', productId: 'CD-EM-000185',
  brand: 'Krups', model: 'Arabica Digital EA817040', sku: 'EA817040, UK black 220–240 V edition', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Arabica Digital EA817040 review: compact black coffee, manual milk',
  description: 'Research-led UK EA817040 review separating the black Arabica Digital from EA817840, with exact-model documentation, milk and cleaning workflow, owner evidence and dated price caveats.',
  verdictLabel: 'For a small kitchen making mostly black coffee',
  verdict: 'Choose EA817040 if a compact automatic grinder, two saved black-coffee recipes and occasional manual milk match your routine. Skip it if you expect one-touch milk, direct brew-group access or a verified new-stock UK offer.',
  assessment: 'Krups documents a small 245 mm-wide bean-to-cup appliance with a manual steam nozzle. The strengths are compactness and repeatable saved drinks, while the closed brew mechanism, three grinder steps, milk work and uncertain current stock constrain the buying case.',
  image, imageAlt: 'Black Krups Arabica Digital EA817040 with cup and manual steam nozzle',
  published: '2026-07-27', updated: '2026-09-23',
  price: { label: 'Historical UK owner-video price claim', msrp: 'Under £300 (December 2025 claim)', typical: 'Not a current offer. Amazon UK did not show a featured new offer and Krups gave no live machine price on September 23, 2026. Check exact-model stock and warranty before buying.', currency: 'GBP', numeric: '', checked: 'December 8, 2025; live listing rechecked September 23, 2026' },
  links: [
    { label: 'Check exact-model listing', href: retail, note: 'No verified featured new-stock price on the September 2026 check; confirm seller, voltage and warranty', primary: true },
    { label: 'Read Krups EA817040 specifications', href: official, note: 'Official UK identity, features and manual' },
  ],
  facts: [
    { label: 'Exact model', value: 'UK black Arabica Digital EA817040; not silver EA817840, carbon EA817K40 or Arabica Manual EA811040' },
    { label: 'Coffee', value: 'Automatic bean-to-cup ristretto, espresso and long coffee; two black cups can run sequential cycles' },
    { label: 'Grinder', value: 'Integrated metal conical burrs, three manually selected grind steps; change only while grinding as instructed' },
    { label: 'Milk', value: 'Manual removable steam nozzle; no integrated one-touch milk carafe' },
    { label: 'Controls', value: 'LCD and buttons, three coffee temperature levels and two saved favourite recipes' },
    { label: 'Capacity', value: '1.7 L removable water tank; Krups prose says 250 g beans while its specification table says 260 g, so verify the delivered manual' },
    { label: 'Footprint and power', value: '245 W × 365 D × 330 H mm; UK 220–240 V, 50 Hz, 1450 W' },
    { label: 'Care', value: 'Automatic coffee-circuit cleaning prompts, separate descaling and hands-on steam-nozzle cleaning; brew unit is not presented as owner-removable' },
  ],
  quickAnswers: [
    { question: 'Which Arabica Digital is this?', answer: 'The black UK EA817040. Silver EA817840 and EA817K40 are different article numbers; regional specifications and photos should not be silently combined.' },
    { question: 'Does it grind beans?', answer: 'Yes, with integrated metal burrs and three grind settings. The manufacturer describes bean-to-cup operation, not a manual portafilter.' },
    { question: 'Is cappuccino one touch?', answer: 'No. Espresso is automatic, but the owner manually steams milk and cleans the nozzle afterward.' },
    { question: 'Can it make two coffees?', answer: 'Yes for the documented black-coffee recipes, in two cycles. This is not two finished milk drinks at once.' },
    { question: 'Is the brew unit removable?', answer: 'Krups documents an automatic coffee-circuit cleaning program, not an owner-removable brew group. Do not dismantle it as routine care.' },
    { question: 'What does it cost now?', answer: 'No current UK new-stock checkout price was verified September 23, 2026. A creator mentioned under £300 in December 2025; that is historical context only.' },
  ],
  bestFor: ['A tight counter where 245 mm body width helps', 'A primarily espresso or long-coffee household using two saved recipes', 'An owner willing to purge and wash a manual steam nozzle'],
  avoidIf: ['Milk drinks must be one touch', 'You require many grinder steps or an owner-removable brew group', 'You cannot verify exact-model new stock, voltage and support'],
  pros: ['Compact 245 mm-wide documented body', 'Two saved recipes and adjustable strength, temperature and volume', 'Two black cups in sequential cycles', 'Krups UK model-specific manual and support'],
  cons: ['Manual steam and immediate milk cleanup', 'Three grinder steps offer coarse adjustment', 'Internal brew system relies on guided cleaning and service', 'No verified current UK new-stock offer'],
  architecture: 'a compact closed-brew bean-to-cup machine with metal conical burrs, thermoblock brewing and a separate manual steam nozzle',
  identityBoundary: 'The UK manufacturer page names EA817040 in black and lists 220–240 V. Silver EA817840, carbon EA817K40 and the knob-led Arabica Manual must not substitute for the article on the rating plate.',
  primaryStrength: 'Compact automatic black coffee with two favourite recipes and a separate steam nozzle covers a focused daily routine.',
  primaryLimit: 'Manual milk, a closed brew path and uncertain exact-model retail availability make a routine and warranty check essential.',
  setupNote: 'Confirm EA817040 and UK voltage on the rating plate. Wash accessible parts, fill with fresh water, set hardness and run the initial priming/rinse according to the EA815–EA817 family manual. Allow room above for beans and behind for the tank.',
  espressoNote: 'The official manual lists ristretto at 20–30 ml, espresso at 30–70 ml and coffee at 80–180 ml, each at three strength levels. Those are programmed beverage ranges, not measured output from Coffeedant. Start with a smaller drink, choose one bean and change one documented control at a time.',
  milkNote: 'The removable nozzle is a manual milk step. Krups instructs owners to purge residual milk and clean its openings; steam does not stop instantaneously when the stop control is pressed. Keep the vessel supported and follow the safety warnings in the exact manual.',
  workflowNote: 'A saved favourite reduces repeat button presses, but filling, cup placement, grounds disposal, tray emptying, nozzle purging and prompted care remain physical jobs. Two black drinks use two cycles rather than parallel extraction.',
  buildNote: 'Krups specifies a 245 × 365 × 330 mm housing and a 15-year repairability promise; a repairability program is not a demonstrated life expectancy. Confirm local parts availability and the delivered revision before purchase.',
  featuresNote: 'Two favourites, three temperatures, three grinder steps and an LCD are useful controls. The advertised AutoClean applies to the coffee path, not automatic washing of the manual steam nozzle or a promise of zero descaling.',
  valueNote: 'The December 2025 independent creator described a sub-£300 UK purchase route; that is not a September 2026 market price. Krups displayed no machine checkout price and the checked Amazon UK page lacked a featured new offer. Compare only a verifiable seller-backed offer with warranty, cleaning supplies and service.',
  ownerPattern: 'One exact-model owner described bitter coffee despite changing beans, grind, strength, temperature and water; another sought help with a leak. The independent video describes one owner’s three-year daily routine, not a population survey.',
  ownerCaution: 'These self-selected accounts have no controlled denominator and do not establish a nozzle-defect or failure rate. The older Coffeedant claim of a frequent nozzle detachment and scalding defect is unsupported; use the manual’s ordinary hot-steam safety procedures and inspect the actual unit.',
  maintenanceNote: 'Follow the on-screen coffee-circuit cleaning prompt with approved tablets, descale when instructed, empty the drip tray and grounds bin, and clean the detachable steam nozzle after milk. The official FAQ says not to pre-emptively descale before the model allows it.',
  dimensions: {
    espresso: { score: 7.5, claim: 'Automatic ristretto, espresso and long coffee have three strength and three grind choices.', consequence: 'The compact system favors repeated convenience over direct puck and flow control.', status: 'Manufacturer model page and EA815–EA817 manual checked September 23, 2026; no Coffeedant cup testing', signals: ['Official 20–180 ml recipe ranges vary by selected drink.', 'Metal conical burrs have three manual settings.', 'An owner’s bitter-cup report is one anecdote, not a measured extraction result.'] },
    milk: { score: 6.2, claim: 'Milk is prepared by a separate removable manual steam nozzle.', consequence: 'The user controls the jug and must purge and clean the nozzle after each session.', status: 'Manufacturer manual and independent owner video; no Coffeedant steaming protocol', signals: ['No one-touch milk carafe on EA817040.', 'The manual warns that steam stopping is not immediate.', 'A nozzle-cleaning task follows every milk session.'] },
    workflow: { score: 7.8, claim: 'Two favourites and an LCD simplify a repeatable black-coffee morning.', consequence: 'Two cups are sequential and manual milk adds a second routine.', status: 'Official controls and manual checked September 23, 2026', signals: ['Two stored favourites.', 'Two-cup black-coffee program runs two cycles.', 'Refills, tray, grounds and cleaning prompts remain.'] },
    build: { score: 7.1, claim: 'Compact French-made housing and manufacturer repair program aid support planning.', consequence: 'Closed internal brewing makes the exact service route more important than DIY access.', status: 'Official model and service claims; no reliability-rate evidence', signals: ['245 × 365 × 330 mm manufacturer dimensions.', 'Brew circuit uses automatic cleaning rather than owner removal.', 'A 15-year repairability promise does not prove individual lifespan.'] },
    features: { score: 7.3, claim: 'Two favourites and three settings each for grind and temperature are focused controls.', consequence: 'Do not infer automatic milk or precision extraction from the digital interface.', status: 'Official EA817040 feature list and family manual', signals: ['LCD with physical buttons and two saved recipes.', 'Three grinder and temperature positions.', 'Manual nozzle and separate cleaning cycle.'] },
    value: { score: 6.7, claim: 'The historical under-£300 claim cannot establish a current UK deal.', consequence: 'Do not rank value until exact-stock condition, seller and warranty are verified.', status: 'Creator video December 8, 2025; manufacturer and retailer rechecked September 23, 2026', signals: ['Historical owner-video statement: under £300.', 'No verified current UK new-stock checkout price.', 'Care supplies and local service add ownership costs.'] },
  },
  sources: [
    { label: 'Krups UK EA817040 product and specifications', href: official, note: 'Exact black UK article, dimensions, capacity, controls, grinder, steam and warranty claims; checked September 23, 2026.' },
    { label: 'Krups EA815–EA817 family instruction manual', href: manual, note: 'Official 74-page manual for priming, recipe ranges, sequential two-cup cycles, milk safety and cleaning; not a different-model substitute.' },
    { label: 'Amazon UK EA817040 listing', href: retail, note: 'Exact article listing checked September 23, 2026 without a verified featured new-stock checkout offer.' },
    { label: 'DavidInFrance Reviews: three-year EA817040 review', href: video, note: 'Independent owner video published December 8, 2025; affiliate link and historical under-£300 statement disclosed. One-owner experience only.' },
    { label: 'Currys EA817040 product overview', href: 'https://www.youtube.com/watch?v=hn8X3Uyu61k', note: 'Retailer-produced exact-model walkthrough; independent of Krups but not a laboratory evaluation.' },
    { label: 'Krups UK EA817040 support and FAQ', href: 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/Arabica-Digital-Bean-to-Cup-Coffee-Machine---Black/csp/8010000001', note: 'Official maintenance, nozzle troubleshooting and model-specific support.' },
    { label: 'Krups UK repairability policy', href: 'https://www.krups.co.uk/reparability-page?ref=EA817040', note: 'Manufacturer repairability claim and exact-model support context, not reliability statistics.' },
    { label: 'EA817040 owner taste question', href: 'https://www.reddit.com/r/superautomatic/comments/1991787/krups_ea817040_70_super_automatic_bean_to_cup/', note: 'Self-selected exact-model owner anecdote about bitter coffee and attempted adjustments, not a failure rate.' },
    { label: 'EA817040 owner leak question', href: 'https://www.reddit.com/r/fixit/comments/1sxxo3s/fix_leak_of_krups_coffee_machine_ea817040/', note: 'Single exact-model owner report; diagnostic context only, not proof of systematic fault.' },
    { label: 'Coffeeness Krups EA8250 hands-on review', href: 'https://www.coffeeness.de/en/krups-ea8108-review/', note: 'Independent adjacent Krups platform evaluation. EA8250 is not EA817040; no exact-model result is transferred.' },
    { label: 'Argos EA817040 support record', href: 'https://argos-support.co.uk/2010579-krups-arabica-digital', note: 'UK retailer support identity; not proof of current sale or price.' },
  ],
  comparisons: [
    { name: 'Krups Arabica Digital EA817040', quickDecision: 'Choose compact black-coffee automation with occasional manual milk, once stock and warranty are verified.', priceClass: 'No verified current UK new-stock price', dimensions: '245 W × 365 D × 330 H mm', heating: 'Compact thermoblock', coffeeSetup: 'Metal burr grinder, three steps, two favourites', milkWorkflow: 'Manual steam nozzle', bestFor: 'Small-counter black coffee' },
    { name: 'Krups Arabica Manual EA811040/EA811840', href: '/espresso-machine/krups-arabica-manual-ea811040-ea811840/', quickDecision: 'Consider the simpler Arabica control scheme if the digital favourites add little value.', priceClass: 'Confirm current UK offer', dimensions: 'Verify exact manual article', heating: 'Automatic bean-to-cup system', coffeeSetup: 'Integrated grinder, simpler controls', milkWorkflow: 'Manual milk', bestFor: 'Fewer programmed controls' },
    { name: "De’Longhi Magnifica Evo", href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Compare when owner-removable brew-group cleaning is a priority.', priceClass: 'Confirm exact UK variant and price', dimensions: 'Check local article', heating: 'Automatic thermoblock', coffeeSetup: 'Integrated grinder and presets', milkWorkflow: 'Variant-dependent manual or automatic milk', bestFor: 'Owner brew-group access' },
  ],
  comparisonNote: 'Compare UK article numbers, voltage, live checkout price, milk hardware and warranty. EA817840 photos or a US-import listing do not resolve EA817040 stock.',
  recommendations: [
    { kicker: 'Simpler sibling', title: 'Krups Arabica Manual EA811040/EA811840', text: 'Compare a simpler control routine when two saved digital favourites do not matter.', href: '/espresso-machine/krups-arabica-manual-ea811040-ea811840/', linkLabel: 'Read the Arabica Manual review', featured: true },
    { kicker: 'Removable brew group', title: "De’Longhi Magnifica Evo", text: 'Read the exact regional configuration when direct brew-group access matters.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the Magnifica Evo review' },
    { kicker: 'Manual-milk alternative', title: 'Gaggia Anima', text: 'Compare a removable brew unit and pannarello milk routine before committing to a closed system.', href: '/espresso-machine/gaggia-anima/', linkLabel: 'Read the Gaggia Anima review' },
    { kicker: 'Explore the class', title: 'Superautomatic machine guide', text: 'Compare milk, cleaning and service trade-offs across automatic coffee systems.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read the superautomatic guide' },
  ],
  faqs: [
    { question: 'Is EA817040 the same as EA817840?', answer: 'No. They are distinct Krups UK article numbers. This review covers the black EA817040; check the rating plate and supplied manual before applying an accessory or replacement part.' },
    { question: 'Does Arabica Digital make a cappuccino automatically?', answer: 'No. It brews the coffee automatically, but you steam milk separately with the manual nozzle and clean the nozzle after use.' },
    { question: 'Can EA817040 brew two cups simultaneously?', answer: 'Krups advertises two cups, and its manual describes two consecutive black-coffee cycles. It does not simultaneously steam and prepare two complete cappuccinos.' },
    { question: 'How many grinder settings are there?', answer: 'The manufacturer specifies three manual grind levels. Make adjustments during grinding as directed in the manual and allow the next cups to reflect the change.' },
    { question: 'Is the water tank 1.7 or 1.8 litres?', answer: 'The EA817040 manufacturer product specification gives 1.7 L. A replacement-water-tank accessory is described as 1.8 L; do not silently substitute accessory capacity for the machine specification.' },
    { question: 'Does automatic cleaning wash the steam wand?', answer: 'No. The coffee-circuit program and manual steam-nozzle cleaning are distinct. The nozzle requires purging and physical cleaning after milk.' },
    { question: 'Is nozzle detachment a proven widespread defect?', answer: 'No reliable incidence or recall evidence was established for EA817040. Follow the hot-steam warnings, inspect the actual nozzle, and contact Krups or a qualified service provider if anything is loose or damaged.' },
    { question: 'Is the historical under-£300 price available now?', answer: 'Not verified. It was a creator statement dated December 8, 2025; no new-stock UK checkout price was confirmed on September 23, 2026.' },
  ],
  finalTitle: 'Buy a verified EA817040 for the focused routine',
  finalVerdict: [
    'The black EA817040 is a plausible fit for limited counter space and mostly black coffee. Two favourites help a repeated recipe, while the manual steam nozzle offers occasional milk without a hose or carafe.',
    'Do not buy on a recycled historical price or a different Arabica article. Confirm a legitimate UK unit, current stock, seller-backed warranty and service before accepting the closed-brew cleaning trade-off.',
  ],
  video: { id: 'snkES99AKdc', title: 'KRUPS Arabica Digital After 3 Years of Daily Use Review', creator: 'DavidInFrance Reviews', published: '2025-12-08', note: 'Independent exact-EA817040 owner account with disclosed Amazon affiliate link; individual experience and historical price, not Coffeedant testing or a current offer.' },
};

const review = buildUpgradeReview(profile);
export const upgradeKrupsArabicaDigitalReviews: MachineReviewData[] = [{
  ...review,
  alternatives: [
    { name: 'Krups Arabica Manual EA811040/EA811840', reason: 'Choose the simpler Arabica controls if saved digital favourites would go unused.', href: '/espresso-machine/krups-arabica-manual-ea811040-ea811840/' },
    { name: 'De’Longhi Magnifica Evo', reason: 'Compare an owner-removable brew group, while checking the exact UK milk configuration.', href: '/espresso-machine/delonghi-magnifica-evo/' },
    { name: 'Gaggia Anima', reason: 'Compare owner brew-group access and a separate pannarello milk routine.', href: '/espresso-machine/gaggia-anima/' },
  ],
}];
