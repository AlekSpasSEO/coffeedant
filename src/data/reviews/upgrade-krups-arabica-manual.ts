import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const black = 'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Arabica-Manual-EA811040-Espresso-Bean-to-Cup-Coffee-Machine-Black/p/8010000003';
const silver = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/KRUPS-Arabica-Manual-Bean-to-Cup-Coffee-Machine--Silver-EA811840-/csp/8000036153';
const manual = 'https://dam.groupeseb.com/m/62cdd0a0d9492811/original/8020003842-IFU.pdf?timestamp=20251212155752';
const retailer = 'https://business.currys.co.uk/catalogue/domestic-appliances/small-kitchen-appliances/coffee-machines/krups-arabica-manual-espresso-ea811840-bean-to-cup-coffee-machine-black-silver/N595110W';
const image = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxNzc4NzJ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaG1ZeTlvWkRVdk1qWTRPRGN4TVRrM05qVTFNelF8MDEyNWIxZjdlZjYzYmZlYjQxYzEyN2FjNTM1NWJmNDllMjg0Mzk3NzA4OGZiNjk1MTgyZWFlMWVjZWRlNWIzOQ';
const video = 'https://www.youtube.com/watch?v=jeaKakwUuQ8';

const profile: UpgradeReviewProfile = {
  key: 'krups-arabica-manual-ea811040-ea811840', slug: '/espresso-machine/krups-arabica-manual-ea811040-ea811840/', productId: 'CD-EM-000186',
  brand: 'Krups', model: 'Arabica Manual EA811040 / EA811840', sku: 'UK black EA811040; UK silver EA811840', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Arabica Manual EA811040 / EA811840 review: simple bean-to-cup controls',
  description: 'Research-led UK review of black EA811040 and silver EA811840, with official instructions, button-and-dial workflow, milk cleanup, independent EA8118-series context and honest stock caveats.',
  verdictLabel: 'For straightforward black coffee and occasional hand-frothed milk',
  verdict: 'Consider a properly warranted EA811040 or EA811840 if simple buttons, a rotary volume dial and a compact automatic coffee routine fit better than recipes and screens. Skip a poorly documented used unit or any listing implying one-touch milk or current stock that cannot be checked.',
  assessment: 'Krups documents two UK Arabica Manual articles with automatic grinding, brewing and manual steaming. Judge a purchase by the exact seller, condition and warranty, not old advertising.',
  image, imageAlt: 'Black UK Krups Arabica Manual EA811040 front view with buttons and steam nozzle',
  published: '2026-07-27', updated: '2026-09-23',
  price: { label: 'Current UK exact-model checkout price', msrp: 'Not verified', typical: 'The checked Currys Business EA811840 page said out of stock September 23, 2026. Krups product and support pages did not establish a machine checkout offer. Verify condition, exact SKU and warranty before comparing prices.', currency: 'GBP', numeric: '', checked: 'September 23, 2026' },
  links: [
    { label: 'Check the silver EA811840 listing', href: retailer, note: 'Out of stock when checked September 23, 2026; do not treat as a live offer', primary: true },
    { label: 'Read official black EA811040 specifications', href: black, note: 'Manufacturer identity and controls; check the delivered article number' },
  ],
  facts: [
    { label: 'Exact UK articles', value: 'Black EA811040; silver EA811840. The EA8118 reviewer names a family code, not proof of the UK EA811840 label.' },
    { label: 'Coffee', value: 'Beans ground and brewed automatically; separate strong and standard buttons, dial-selected volume; two black cups in consecutive brewing cycles' },
    { label: 'Grinder and heat', value: 'Metal conical burr grinder, three manual grind levels and three temperature settings; compact thermoblock and 15-bar pump are manufacturer specifications, not measured extraction pressure' },
    { label: 'Milk', value: 'Separate manual steam nozzle; optional separately sold XS6000 milk accessory in the family manual is not a built-in one-touch carafe' },
    { label: 'Capacity', value: 'Krups EA811040 states a 1.7 L tank; promotional text gives 250 g beans while the specification table lists 260 g' },
    { label: 'Power and cup access', value: 'EA811040 UK listing specifies 220–240 V, 50 Hz, 1450 W and 10.5 cm maximum coffee-outlet clearance; confirm the silver article independently' },
    { label: 'Care', value: 'Remove, empty and wash the grounds bin and tray; run prompted tablet and descaling cycles; purge and hand-clean the steam nozzle after milk' },
  ],
  quickAnswers: [
    { question: 'What models does this review cover?', answer: 'Krups UK identifies the black EA811040 and the silver EA811840 separately. Their control family is comparable, but a rating plate and exact support page control parts and region.' },
    { question: 'Does “Manual” mean a portafilter?', answer: 'No. Beans are ground and coffee is brewed automatically. “Manual” describes its button-and-dial controls and separate milk-steaming step.' },
    { question: 'Can it make two coffees?', answer: 'The official family instructions describe two black-coffee cups in two complete sequential brewing cycles, not two simultaneous extractions or finished cappuccinos.' },
    { question: 'How is milk prepared?', answer: 'The included steam nozzle requires a person to froth the milk, purge the nozzle and wash it. An optional accessory is separately described in the manual, not assumed to be in the box.' },
    { question: 'Is the hopper 250 or 260 grams?', answer: 'Krups EA811040 marketing text says 250 g; its specifications table says 260 g. Neither is a Coffeedant measurement and the delivered label should resolve purchasing questions.' },
    { question: 'What is the current UK price?', answer: 'No in-stock checkout price for the exact two UK SKUs was established September 23, 2026. A Currys Business EA811840 page was marked unavailable.' },
  ],
  bestFor: ['Black-coffee households preferring physical buttons to a screen', 'Owners who accept a three-step grinder and prompted internal cleaning', 'Occasional manual-milk drinkers who will wash the nozzle after every use'],
  avoidIf: ['One-touch cappuccinos or a built-in milk carafe are essential', 'You need fine grind resolution or an owner-removable brew assembly', 'A seller cannot document the exact UK article, condition, voltage and warranty'],
  pros: ['Direct strong/standard buttons and rotary cup-volume control', 'Automatic bean grinding and two consecutive black cups', 'Manufacturer UK support for both named article numbers', 'Separate steam nozzle avoids a permanent milk circuit'],
  cons: ['Manual milk takes a separate frothing and cleaning routine', 'Three grind levels offer limited dialing range', 'Promotional and specification hopper capacities disagree', 'No verified new-stock checkout price for the exact UK variants'],
  architecture: 'a compact closed-brew bean-to-cup appliance with metal conical burrs, a thermoblock, illuminated maintenance indicators, physical buttons and a removable manual steam nozzle',
  identityBoundary: 'Krups UK identifies black EA811040 and silver EA811840 separately. The independent film says EA8118 Arabica Picto without a verified UK EA811840 plate. EA8108, EA8250 and EA817040 are different labels.',
  primaryStrength: 'Physical coffee buttons and a rotary dial simplify black coffee.',
  primaryLimit: 'Manual milk and uncertain exact-SKU availability constrain value.',
  setupNote: 'Check the UK rating plate. Fill the tank with cold water and hopper with plain beans, fit the tray and run the first-use rinse with a 0.6 L container. Never put ground coffee, milk or water in the bean hopper.',
  espressoNote: 'Krups lists ristretto at 20–30 ml, espresso at 30–70 ml and coffee at 80–220 ml, with strong/standard buttons and a volume dial. These are programmed ranges, not our measurements. Change grind only while the grinder runs.',
  milkNote: 'Steam needs an extra heating stage. Froth manually, allow for delayed steam cutoff, purge for about ten seconds and wash the removable nozzle after cooling. It is not dishwasher safe.',
  workflowNote: 'Two cups take two complete cycles. The Manual has no documented digital favourites. Krups suggests two shorter cycles when a large single drink tastes weak.',
  buildNote: 'Krups lists 10.5 cm maximum outlet clearance and 220–240 V for black EA811040. Currys gives 330 × 365 × 245 mm H × W × D for silver EA811840, conflicting with other axis descriptions. Measure before buying.',
  featuresNote: 'The family manual describes a separately sold XS6000 milk accessory. Do not mistake it for standard one-touch milk. The official EA811040 specification labels milk cleaning manual and coffee-circuit cleaning automatic.',
  valueNote: 'Currys Business marked EA811840 out of stock September 23, 2026; Krups gave no verified machine checkout price. The legacy £200–£350 refurb range is not a current quote. Budget consumables and service.',
  ownerPattern: 'mrbowlfish films an EA8118 Arabica Picto and describes hot coffee and easy controls, disclosing manufacturer-provided equipment and affiliate links. Amazon Singapore lists 180 self-selected EA811840 ratings, not a UK performance test or failure rate.',
  ownerCaution: 'Neither a sales video nor aggregated owner stars is a controlled test. The legacy assertion of widespread nozzle detachment lacks model-specific incidence evidence and was removed. Follow Krups steam warnings; stop using a damaged nozzle.',
  maintenanceNote: 'The manual lists a nine-coffee grounds bin, prompted tablet cleaning and descaling, tray draining and manual nozzle washing. The FAQ discourages premature descaling. Listed spare parts do not establish lifespan.',
  dimensions: {
    espresso: { score: 7.2, claim: 'Beans are ground and brewed automatically with strong/standard keys and a dial for volume.', consequence: 'Straightforward black-coffee operation is more convincing than claims of precise manual extraction control.', status: 'Official EA811040 listing and EA81-family manual; no Coffeedant cup testing', signals: ['20–220 ml programmed ranges depend on drink choice.', 'Two black cups use two separate brew cycles.', 'Three grinder steps constrain fine adjustment.'] },
    milk: { score: 5.9, claim: 'The standard machine uses a manual steam nozzle and separately heats for steam.', consequence: 'Every cappuccino needs hands-on jug control, a purge and removable-nozzle cleaning.', status: 'Official manufacturer pages and manual; no Coffeedant steaming protocol', signals: ['No integrated one-touch milk carafe.', 'Manual warns steam stopping is not immediate.', 'Optional XS6000 accessory is not presumed included.'] },
    workflow: { score: 7.6, claim: 'Buttons and rotary volume dial avoid menu navigation.', consequence: 'There is less recipe memory than on Arabica Digital, and two cups are sequential.', status: 'Exact-model product pages and family manual checked September 23, 2026', signals: ['Strong and standard coffee buttons.', 'Rotary water-volume selection.', 'Indicator lights call for grounds, cleaning and descaling.'] },
    build: { score: 6.9, claim: 'Krups documents a thermoblock, metal grinder and manufacturer parts/support.', consequence: 'The internal brew circuit uses guided cleaning; inspect the exact used unit and service route.', status: 'Manufacturer component claims, retailer dimensions; no reliability-rate evidence', signals: ['Maximum nozzle clearance is specified at 10.5 cm.', 'Silver retailer width/depth orientation is ambiguous.', 'Repair-program claim does not prove an individual lifespan.'] },
    features: { score: 7.1, claim: 'Three grind and temperature levels plus two-cup mode are focused controls.', consequence: 'Do not mistake the manual steam accessory or automatic coffee cleaning for automatic milk cleanup.', status: 'Manufacturer specification and official family instruction PDF', signals: ['Metal conical burrs have three settings.', 'Three coffee-temperature positions.', 'The steam nozzle is hand-cleaned.'] },
    value: { score: 6.3, claim: 'Exact-model UK new-stock price and warranty are presently unverified.', consequence: 'Compare a real seller-backed checkout offer, not a historical refurb quote.', status: 'Currys Business and manufacturer pages rechecked September 23, 2026', signals: ['EA811840 retailer listing marked out of stock.', 'No confirmed new-stock price for black EA811040.', 'Consumables and condition change total ownership cost.'] },
  },
  sources: [
    { label: 'Krups UK black EA811040 specifications', href: black, note: 'Exact UK article, controls, capacity conflict, voltage and care; checked September 23, 2026.' },
    { label: 'Krups UK silver EA811840 support', href: silver, note: 'Distinct UK article and its own manual link; verify parts.' },
    { label: 'Krups UK EA811040 support and FAQ', href: 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/Arabica-Manual-EA811040-Espresso-Bean-to-Cup-Coffee-Machine-Black/csp/8010000003', note: 'Exact-model cleaning guidance and PDF.' },
    { label: 'Krups 2019 EA81 family instruction PDF', href: manual, note: 'Official English startup, recipes, steam safety and care; family scope disclosed.' },
    { label: 'Krups UK EA811040 quick-start PDF', href: 'https://dam.groupeseb.com/m/81d048ccf0827306/original/8020003204-QSG.pdf?timestamp=20250312013215', note: 'Exact-model linked manufacturer guide.' },
    { label: 'Krups UK EA811040 safety instructions', href: 'https://dam.groupeseb.com/m/27971dbb9078694a/original/8020008481-Safety.pdf?timestamp=20250714212102', note: 'Manufacturer hot-steam safety, not defect evidence.' },
    { label: 'mrbowlfish EA8118 Arabica Picto filmed review', href: video, note: 'Independent video November 28, 2019; manufacturer-provided unit, affiliate links and family-code limitation disclosed.' },
    { label: 'Currys EA811840 product overview video', href: 'https://www.youtube.com/watch?v=4YxFA7Rbxk4', note: 'Retailer sales clip October 4, 2021; exact silver UK article, not a test.' },
    { label: 'Currys Business EA811840 listing', href: retailer, note: 'Exact UK article out of stock September 23, 2026; dimension axes ambiguous.' },
    { label: 'Amazon Singapore EA811840 owner ratings', href: 'https://www.amazon.sg/Krups-Expresso-Arabica-Manual-EA8118/dp/B077QT3431', note: '180 self-selected ratings, not UK pricing or reliability statistics.' },
    { label: 'Coffeeness Krups EA8250 hands-on evaluation', href: 'https://www.coffeeness.de/en/krups-ea8108-review/', note: 'Different model, context only; no exact-SKU results transferred.' },
    { label: 'Krups UK EA811040 accessories', href: 'https://www.krups.co.uk/accessories-store/Products-/Beverages/Full-automatic/Arabica-Manual-EA811040-Espresso-Bean-to-Cup-Coffee-Machine-Black/csp/8010000003', note: 'Replacement nozzle and consumables, not machine availability.' },
  ],
  comparisons: [
    { name: 'Krups Arabica Manual EA811040 / EA811840', quickDecision: 'Choose simple black coffee with manual milk when the exact UK unit and warranty are verified.', priceClass: 'No verified current new-stock price', dimensions: 'Measure delivered article; retailer axes conflict', heating: 'Manufacturer thermoblock', coffeeSetup: 'Three-step integrated grinder, buttons and volume dial', milkWorkflow: 'Manual nozzle and purge', bestFor: 'Simple automatic black coffee' },
    { name: 'Krups Arabica Digital EA817040', href: '/espresso-machine/krups-arabica-digital-ea817040/', quickDecision: 'Compare if two saved recipes and an LCD reduce repeated button work.', priceClass: 'No verified current UK offer', dimensions: '245 W × 365 D × 330 H mm per manufacturer', heating: 'Compact thermoblock', coffeeSetup: 'Three-step grinder, LCD and two favourites', milkWorkflow: 'Manual steam nozzle', bestFor: 'Saved black-coffee recipes' },
    { name: 'De’Longhi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Compare when an owner-removable brew unit is more important than Krups’s prompted internal cleaning.', priceClass: 'Check UK variant and stock', dimensions: 'Check exact regional unit', heating: 'Automatic thermoblock', coffeeSetup: 'Integrated grinder and presets', milkWorkflow: 'Manual or automatic by variant', bestFor: 'Direct brew-group access' },
  ],
  comparisonNote: 'Check UK SKU, voltage, price, warranty, milk hardware and returns. Silver retailer images and the filmed EA8118 unit do not prove black EA811040 features.',
  recommendations: [
    { kicker: 'Saved recipes', title: 'Krups Arabica Digital EA817040', text: 'Choose two stored black-coffee favourites and an LCD if the added controls matter.', href: '/espresso-machine/krups-arabica-digital-ea817040/', linkLabel: 'Read the Arabica Digital review', featured: true },
    { kicker: 'Direct brew access', title: 'De’Longhi Magnifica Evo', text: 'Compare a removable brew assembly and check which milk system the exact UK variant includes.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the Magnifica Evo review' },
    { kicker: 'Alternative manual milk', title: 'Gaggia Anima', text: 'Consider another bean-to-cup machine with a separately cleaned pannarello and owner-accessible brewing.', href: '/espresso-machine/gaggia-anima/', linkLabel: 'Read the Gaggia Anima review' },
    { kicker: 'Explore the class', title: 'Superautomatic machine guide', text: 'Compare grinder, milk, cleaning and service decisions before choosing an automatic machine.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read the superautomatic guide' },
  ],
  faqs: [
    { question: 'Are EA811040 and EA811840 the same model?', answer: 'They are two different UK Krups article numbers, identified as black and silver respectively. Their support pages describe the Arabica Manual control concept, but check the delivered rating plate and parts compatibility rather than assuming every revision is identical.' },
    { question: 'Is Arabica Manual a manual espresso machine?', answer: 'No. Its grinder and brewing are automatic. Manual refers to the simple controls and the separate, hands-on milk-steaming task.' },
    { question: 'Does it make two espresso drinks at once?', answer: 'The family manual describes a two-cup black-coffee mode consisting of two complete consecutive brew cycles. It does not prepare two milk drinks automatically.' },
    { question: 'Can I use pre-ground coffee?', answer: 'The official family instructions expressly say beans only and prohibit adding ground coffee to the bean container. Do not infer a bypass chute from the tablet-cleaning inlet.' },
    { question: 'How do I change grind setting?', answer: 'Turn the grind knob only while the grinder is running and never force it. Krups lists three fineness positions; this is limited adjustment, not a stepless espresso grinder.' },
    { question: 'Does it automatically clean its milk nozzle?', answer: 'No. Coffee-circuit cleaning is prompted automatically, while the removable steam nozzle is purged and hand-washed after milk. The optional XS6000 accessory adds its own cleaning tasks.' },
    { question: 'Is a detachable steam-nozzle safety defect established?', answer: 'No reliable model-specific incidence or recall evidence was established for these UK article numbers. Steam is hot and stops after a delay according to the official manual. Stop using a damaged or loose nozzle and consult Krups service.' },
    { question: 'Can I buy the black or silver machine new in the UK now?', answer: 'No exact-model new-stock UK checkout offer was verified on September 23, 2026; Currys Business marked the silver model out of stock. Recheck the seller, warranty, model plate and voltage before buying.' },
  ],
  finalTitle: 'Buy the exact article, not just an Arabica name',
  finalVerdict: [
    'The EA811040 black and EA811840 silver target an uncomplicated automatic black-coffee routine. Their buttons and dial are attractive if milk is occasional and a screen or saved recipes would be wasted. The UK manufacturer documents the main controls, but the independent filmed EA8118-series unit must not be treated as a confirmed exact UK SKU test.',
    'A purchase hinges on a real checkout offer and verifiable condition. The manufacturer’s prompt-led coffee cleaning and separate manual steam cleanup are permanent ownership tasks, and current new-stock pricing was not established at this review date.',
  ],
  video: { id: 'jeaKakwUuQ8', title: 'Krups EA8118 Arabica Picto Quattro Force fully automatic coffee machine - test', creator: 'mrbowlfish reviews', published: '2019-11-28', note: 'Independent filmed EA8118-series evaluation, not verified exact UK EA811840; creator discloses manufacturer-provided review unit and affiliate links. No Coffeedant test access.' },
};

profile.sectionOverrides = {
  ownership: `
    <p>${profile.ownerPattern} The exact UK article on a listing still needs a rating-plate check. The complete owner-rating record is identified in the annotated sources below.</p>
    <aside class="review-community-evidence" aria-labelledby="arabica-manual-owner-title">
      <h3 id="arabica-manual-owner-title">What the owner evidence actually says</h3>
      <ul>
        <li><strong>EA811840, Singapore owner-rating pool</strong><p>Amazon Singapore displayed 180 self-selected ratings for the named silver article when checked. The count documents some consumer feedback; it cannot establish how an individual UK unit brews, how long it lasts, or a failure rate.</p></li>
      </ul>
      <p class="review-community-evidence-note">Owner evidence is summarized here in Coffeedant, without outgoing links in this panel. The original record and the film's manufacturer-provided-unit disclosure remain in the source ledger.</p>
    </aside>
    <p>${profile.ownerCaution} Ask a seller to demonstrate the exact plate, steam attachment, cleaning prompts and warranty. This converts anecdotal concerns into verifiable buying checks.</p>
  `,
};

const review = buildUpgradeReview(profile);
export const upgradeKrupsArabicaManualReviews: MachineReviewData[] = [{
  ...review,
  alternatives: [
    { name: 'Krups Arabica Digital EA817040', reason: 'Choose LCD controls and two stored black-coffee recipes if used daily.', href: '/espresso-machine/krups-arabica-digital-ea817040/' },
    { name: 'De’Longhi Magnifica Evo', reason: 'Check a locally available configuration with owner brew-group access.', href: '/espresso-machine/delonghi-magnifica-evo/' },
    { name: 'Gaggia Anima', reason: 'Compare manual milk with a removable brew unit and a documented parts route.', href: '/espresso-machine/gaggia-anima/' },
  ],
}];
