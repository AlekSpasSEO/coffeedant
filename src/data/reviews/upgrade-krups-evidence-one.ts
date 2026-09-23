import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/EVIDENCE-One-Bean-to-Cup-Coffee-Machine---Black/p/8010001019';
const support = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/EVIDENCE-One-Bean-to-Cup-Coffee-Machine---Black/csp/8010001019';
const retailer = 'https://www.northxsouth.co.uk/products/krups-evidence-bean-to-cup-coffee-machine-ea895n40';
const ownerReview = 'https://www.youtube.com/watch?v=t7CcnEZ2SGI';
const repairFilm = 'https://www.youtube.com/watch?v=_qZpuhXIeUA';
const image = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxMjk4ODl8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGlZUzlvWkRJdk1qWTRPRGN5T0RjM05qY3dOekF8MjM3MWM5YTA2ZDZjNWEzNjFlYmU3ODlmNGQxMjI1YTA4MDAwMWZjOTVmMDVmZjcyMzIyYTE0NjY3NzJjNTBjZQ';

const profile: UpgradeReviewProfile = {
  key: 'krups-evidence-one-ea895n40', slug: '/espresso-machine/krups-evidence-one-ea895n40/', productId: 'CD-EM-000189',
  brand: 'Krups', model: 'Evidence One EA895N40', sku: 'UK EA895N40, Meteor Grey, UK plug', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Evidence One EA895N40 review: 17 choices, milk and care',
  description: 'Exact UK EA895N40 research review: 17 options from 12 recipes, paired milk, owner video, dated sold-out listing, cleaning costs, model boundaries and alternatives.',
  verdictLabel: 'Broad preset range for a two-person milk-coffee household',
  verdict: 'Consider the UK EA895N40 if paired milk drinks, five grinder positions and up to 12 saved favourites matter more than a removable brewing module. The exact Krups UK page supports those features and a two-year guarantee. A September 24, 2026 Northern Ireland £499 listing was sold out, so it is not a current available purchase price. Compare a stocked UK offer and its warranty before deciding.',
  assessment: 'This is a research-led judgment. An independent owner film labels its machine EA895 without showing an unambiguous UK EA895N40 rating plate; another independent repair film names EA895N40/70A. Neither is Coffeedant extraction testing or a reliability survey. Krups documents 17 options across 12 recipes, not 17 fundamentally different drinks.',
  image, imageAlt: 'Krups UK manufacturer image of Meteor Grey Evidence One EA895N40 with two milk drinks',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact EA895N40 UK listing, sold out', msrp: 'No current manufacturer checkout price confirmed', typical: 'NorthXSouth displayed £499 incl tax against £799 on September 24, 2026 but marked EA895N40 sold out; its delivery terms focus on Northern Ireland. Amazon UK exact ASIN B08TLTY94C had no featured offer. Neither listing verifies an available mainland UK checkout.', currency: 'GBP', numeric: '', checked: 'September 24, 2026' },
  links: [
    { label: 'Check EA895N40 retailer stock', href: retailer, note: '£499 displayed but sold out September 24, 2026; NI delivery terms', primary: true },
    { label: 'Read exact Krups UK EA895N40 specification', href: official, note: '17 options, 12 recipes, five grinder steps, UK plug and cleaning' },
  ],
  facts: [
    { label: 'Exact market', value: 'EA895N40 with UK plug; official page says “Black” in its URL while the specifications call its finish Meteor Grey' },
    { label: 'Menu', value: '12 named recipes with 17 choice combinations: five black, four milk/frothy-milk and three tea-temperature recipes; check variant-specific menu' },
    { label: 'Paired drinks', value: 'Two black or two milk drinks per manufacturer setting; food-contact tube and milk parts still require cleaning' },
    { label: 'Controls', value: 'Five grind positions, three temperature levels, adjustable strength/length and up to 12 saved favourites' },
    { label: 'Capacities', value: 'Krups UK lists 2.3 L water, 260 g beans, nine-puck collector and 15 cm maximum under-outlet clearance' },
    { label: 'Power and pressure', value: '1450 W and 15-bar pump rating on official UK table; the latter is not a measured extraction pressure' },
    { label: 'Aftercare', value: 'Two-year guarantee and ten-year repairability statement from Krups; neither is unit lifespan or a failure-rate estimate' },
  ],
  quickAnswers: [
    { question: 'Is this the UK EA895N40?', answer: 'Yes. Manufacturer product and support pages explicitly identify EA895N40, Meteor Grey and UK plug. EA895N10 and other Evidence models are not interchangeable.' },
    { question: 'Are there 17 recipes?', answer: 'No. Krups lists 12 recipes and 17 drink options/selection combinations. Some options share a base recipe.' },
    { question: 'Does it make two milk coffees?', answer: 'Krups UK says it can prepare two milk-based drinks at a time. That requires the external milk path and subsequent hygiene.' },
    { question: 'Does it have an app?', answer: 'No app support is verified for this exact UK article. Do not inherit the app feature from Evidence Connected or generic support FAQ text.' },
    { question: 'Is the £499 offer available now?', answer: 'The exact-model NorthXSouth page showed £499 but was sold out on September 24, 2026, with Northern Ireland delivery language. Treat it as a dated listing, not an obtainable mainland price.' },
    { question: 'Can I clean the milk system without touching it?', answer: 'No. Krups lists automatic rinsing and cleaning programs but also says the milk system disassembles for thorough cleaning. Follow the specific delivered instructions.' },
  ],
  bestFor: ['Couples with repeat black and milk orders needing two-cup operation', 'Households using several favourites without manual barista preparation', 'Buyers comfortable with a closed brewer and scheduled cleaning supplies'],
  avoidIf: ['You require a verified stocked £499 mainland offer today', 'You want an owner-removable brew group or manual latte-art steam control', 'You expect smartphone control or 17 wholly distinct base recipes'],
  pros: ['Exact UK article documents paired black and milk recipes', 'Five grind steps and twelve saved favourites', '2.3 L water and 260 g beans per Krups UK', 'Manufacturer parts/support path and two-year guarantee'],
  cons: ['Milk assembly requires disassembly as well as automatic rinses', 'No verified exact current in-stock UK checkout', 'Independent owner film has only EA895 family identity', 'Closed-brew ownership and ongoing tablets/filter/tube expense'],
  architecture: 'a UK-plug bean-to-cup machine with an integrated metal conical grinder, compact thermoblock, XL OLED coloured touch panel, dual spouts and an external automatic milk tube',
  identityBoundary: 'This page covers Krups UK EA895N40. Do not transfer app claims from Evidence Connected, recycled-plastic figures from EA897B40 or the EA891D27 milk-jug identity. Rob Locke films EA895 family hardware without a verified UK plate, while Appliance Repairman names EA895N40/70A in the repair video description.',
  primaryStrength: 'Its precise UK specification combines paired milk, five grind steps and up to twelve saved choices.',
  primaryLimit: 'Dated retailer prices are sold-out references and milk-path cleanup remains hands-on.',
  setupNote: 'Check the EA895N40 rating plate, UK plug, milk-tube fittings and delivered manual. Krups specifies a 2.3 L tank and 260 g bean store, but leave cabinet access for filling and a separate chilled milk vessel. Register the purchase and follow the water-hardness and initial-rinse sequence.',
  espressoNote: 'The exact UK product lists ristretto, doppio, espresso, long coffee and Americano, five grind levels, three temperature settings and strength adjustment. Rob Locke’s independent EA895 film demonstrates some coffee workflow but does not independently certify UK EA895N40 cup taste, temperature or brew pressure. Treat the 15-bar figure as a pump rating.',
  milkNote: 'Krups confirms two milk drinks together, including cappuccino and latte choices. The milk hose draws from a separate vessel and can be disassembled for thorough cleaning, so automatic rinses do not make dairy hygiene touch-free. Do not infer a measured foam temperature or fault incidence from owner anecdotes.',
  workflowNote: 'Twelve favourites, five direct-access selections and a coloured OLED menu help frequent orders. Count filling, connecting milk, selection, waste emptying and cleanup. The independent EA895 film illustrates family navigation but its unverified article plate limits exact-model conclusions.',
  buildNote: 'Krups offers a two-year UK guarantee and a ten-year repairability program. These describe policy, not how long an individual machine lasts. The published 15 cm cup clearance requires checking your tallest glasses and hose route; the brew circuit is managed by prompted cleaning rather than owner-removable-group washing.',
  featuresNote: 'The official UK table lists five grinding positions, three temperature levels, dual milk/black output, a metal conical grinder and 12 favourites. Networked standby is marked NA; a manufacturer family or generic FAQ should not imply this model supports Bluetooth.',
  valueNote: 'September 24, 2026: NorthXSouth displayed £499 including tax but marked sold out, with NI delivery conditions, while Amazon UK showed no featured offer. The £799 struck-through amount is a retailer comparison, not independently verified MSRP. Include parts, milk cleaner, tablets, filter and seller warranty in the total.',
  ownerPattern: 'An independent repairer recorded a September 2024 EA895N40/70A maintenance-fault case and documented a repair process. Separately, Home Tester Club listed 63 self-selected reviews for EA895N40, but sample selection and incentives mean its aggregate cannot predict defects or mean performance.',
  ownerCaution: 'One filmed fault does not show a fleet-level failure rate. The film involves electrical/appliance internals and is not an instruction to open or repair a plugged-in machine; use the official service and guarantee route. Owner experiences and region-specific variants may differ.',
  maintenanceNote: 'Krups specifies automatic coffee and milk rinsing, but also says the milk system can be taken apart for thorough cleaning. Rinse tube and milk-contact pieces after each milk session, follow prompts for cleaning tablets and descaling, and check official compatible parts before replacement. Do not remove sealed internals or treat a repair video as safe DIY guidance.',
  dimensions: {
    espresso: { score: 7.7, claim: 'Five black recipes, five grind steps and three temperature levels are specified for UK EA895N40.', consequence: 'Daily black coffees are customisable, not independently measured by Coffeedant.', status: 'Exact Krups UK table; adjacent EA895 owner film only', signals: ['Ristretto through Americano listed.', 'Five grinder positions and three temperatures.', '15-bar is pump rating, not extraction pressure.'] },
    milk: { score: 7.7, claim: 'Krups specifies two milk drinks at a time via its external milk path.', consequence: 'Paired output helps mornings, but milk assembly must be cleaned.', status: 'Exact official UK page; no Coffeedant foam trial', signals: ['Two simultaneous milk recipes listed.', 'Automatic rinse plus disassembled deep clean.', 'No reliable model-wide frother failure rate.'] },
    workflow: { score: 8.2, claim: 'Up to twelve favourites and five quick-selection icons suit repeating household orders.', consequence: 'Compare total order-to-clean time, not just touch count.', status: 'Krups UK controls plus independent EA895-family filmed context', signals: ['17 selectable options across 12 recipes.', 'Coloured OLED control panel.', 'External milk hose and waste need attention.'] },
    build: { score: 7.0, claim: 'The UK manufacturer documents parts, two-year guarantee and ten-year repair policy.', consequence: 'A repair program provides options, not measured longevity.', status: 'Manufacturer terms and one EA895N40/70A repair film; no cohort', signals: ['15 cm stated cup limit.', 'Closed brewer uses prompted cleaning.', 'Repair footage is not representative reliability data.'] },
    features: { score: 8.1, claim: 'A strong documented set of settings avoids relying on another Evidence model.', consequence: 'Use the exact EA895N40 plate for milk parts and menu claims.', status: 'Official UK specifications; no verified app on this SKU', signals: ['2.3 L tank and 260 g beans.', 'Three drink strengths and saved favourites.', 'Bluetooth not established on UK page.'] },
    value: { score: 6.6, claim: 'The £499 exact-model Northern Ireland offer was sold out on the dated check.', consequence: 'Only a live stocked checkout with warranty can settle value.', status: 'NorthXSouth and Amazon UK checked September 24, 2026', signals: ['£499 shown against £799 but out of stock.', 'NI delivery terms require location check.', 'Cleaning supplies and service add cost.'] },
  },
  sources: [
    { label: 'Krups UK exact EA895N40 product and specification', href: official, note: 'Article identity, UK plug, Meteor Grey table, 12 recipes/17 options, capacities, settings, cleaning, guarantee and repairability; checked September 24, 2026.' },
    { label: 'Krups UK EA895N40 support and FAQ', href: support, note: 'Exact-model documentation and support, not a transferable Connected-edition feature list.' },
    { label: 'NorthXSouth UK EA895N40 listing', href: retailer, note: '£499 incl tax, £799 struck-through, sold out September 24, 2026; NI delivery language means not a current mainland offer.' },
    { label: 'Rob Locke independent Evidence One EA895 owner review', href: ownerReview, note: 'September 20, 2022 independent 7:13 family film with affiliate link; UK EA895N40 plate not verified, so no exact-spec transfer.' },
    { label: 'Appliance Repairman EA895N40 maintenance-case video', href: repairFilm, note: 'September 13, 2024 15:15 independent repair footage names EA895N40/70A; one case, not Coffeedant test or safe DIY instruction; affiliate parts links.' },
    { label: 'Amazon UK EA895N40 ASIN B08TLTY94C', href: 'https://www.amazon.co.uk/Krups-EA895N40-Evidence-Coffee-Machine/dp/B08TLTY94C', note: 'No featured offer on September 24, 2026; 83 self-selected ratings, not an incidence estimate.' },
    { label: 'Krups EA895N40 compatible accessories', href: 'https://www.krups.co.uk/accessories-store/Products-/Beverages/Full-automatic/EVIDENCE-One-Bean-to-Cup-Coffee-Machine---Black/csp/8010001019', note: 'Manufacturer milk hose, cleaners, filters and parts matched to article; inventory and prices may change.' },
    { label: 'Home Tester Club EA895N40 owner reviews', href: 'https://www.hometesterclub.com/uk/en/reviews/krups-evidence-one-bean-to-cup-coffee-machine-ea895n40', note: 'Search-indexed 63 user reviews and 4.8 aggregate; site blocked detailed access. Self-selected and possible free-product testing; no reliability inference.' },
    { label: 'JustAnswer EA895N40 maintenance question', href: 'https://www.justanswer.co.uk/small-appliance/n9v3t-hours-try-open-coffee-machine.html', note: '2023 question about a prompted automatic-maintenance cycle; self-selected, no verified technician diagnosis; broad “often” summary ignored.' },
    { label: 'Krups EA895N40 official instruction PDF', href: 'https://dam.groupeseb.com/m/2a34de9896c7c603/original/8020009301-IFU.pdf?timestamp=20250714172332', note: 'Official manual linked by exact support page; PDF retrieval blocked during research, so specific claims rely on accessible exact UK product/support text.' },
  ],
  comparisons: [
    { name: 'Krups Evidence One EA895N40', quickDecision: 'Twelve favourites and paired milk if a stocked UK seller appears.', priceClass: '£499 sold-out NI listing Sep 24, 2026', dimensions: '15 cm outlet clearance specified', heating: 'Krups compact thermoblock', coffeeSetup: 'Five grind steps, 12 recipes/17 options', milkWorkflow: 'Automatic paired output and separate milk cleaning', bestFor: 'Shared preset variety' },
    { name: 'Krups Evidence Eco-Design EA897B40', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/', quickDecision: 'Fewer presets and two favourites, with exact-model independent hands-on coverage.', priceClass: 'NI listing £399 Sep 23; verify stock', dimensions: '15.8 cm manufacturer outlet limit', heating: 'Manufacturer thermoblock', coffeeSetup: 'Eight recipes, five-step grinder', milkWorkflow: 'Two milk drinks, external rinsed hose', bestFor: 'Simpler menu' },
    { name: 'De’Longhi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Compare a precise variant for user-removable brewer access.', priceClass: 'Check exact UK version', dimensions: 'Check delivered model', heating: 'Automatic thermoblock', coffeeSetup: 'Integrated grinder and presets', milkWorkflow: 'Manual or automatic by article', bestFor: 'Brewer access' },
  ],
  comparisonNote: 'Match the UK code, stock, warranty, milk hardware and cleanup. Do not use prices or app capabilities from EA895N10, Evidence Connected or the Eco-Design edition.',
  recommendations: [
    { kicker: 'Fewer choices', title: 'Krups Evidence Eco-Design EA897B40', text: 'Paired milk with a simpler eight-choice menu and an exact-model hands-on review.', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/', linkLabel: 'Read Evidence Eco review', featured: true },
    { kicker: 'Related 15-choice model', title: 'Krups Evidence Milk EA891D27', text: 'Compare the silver Evidence Milk and its exact-model evidence gaps.', href: '/espresso-machine/krups-evidence-milk-ea891d27/', linkLabel: 'Read Evidence Milk review' },
    { kicker: 'Service preference', title: 'De’Longhi Magnifica Evo', text: 'Consider a particular SKU with owner brew-unit access and appropriate milk hardware.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read Magnifica Evo review' },
    { kicker: 'Category context', title: 'Superautomatic espresso machines', text: 'Compare black coffee, milk and maintenance decisions before choosing.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read the category guide' },
  ],
  faqs: [
    { question: 'Are there 17 different recipes?', answer: 'No. The exact Krups UK product says 17 drink options across 12 recipes. Do not count strength, length or paired servings as new base recipes.' },
    { question: 'Is this EA895N40 or EA895N10?', answer: 'The review covers the UK-plug EA895N40 whose Krups UK table calls the finish Meteor Grey. EA895N10 and the filmed EA895 family unit are not assumed identical in region or article.' },
    { question: 'Can it make two cappuccinos at once?', answer: 'Krups UK lists dual milk output. Milk vessel, hose and appropriate cups must be positioned, and milk-contact parts must be cleaned after the session.' },
    { question: 'Does automatic cleaning remove manual milk care?', answer: 'No. The official product page explicitly describes both automatic rinse/clean cycles and a milk system that can be disassembled for thorough cleansing.' },
    { question: 'Does it connect to a smartphone?', answer: 'No official exact-EA895N40 app function was verified. A generic Evidence Connected reference or support FAQ cannot certify Bluetooth on this UK SKU.' },
    { question: 'Does a maintenance-fault film prove poor reliability?', answer: 'No. The independent 2024 video documents one EA895N40/70A repair case. Without a representative sample, exposure and diagnostic follow-up it cannot establish how often machines fail.' },
    { question: 'Is £499 a current buy price?', answer: 'NorthXSouth displayed £499 on September 24, 2026 but the exact-model listing was sold out and its delivery tab describes Northern Ireland. Confirm a live in-stock UK checkout, tax, warranty and delivery before relying on a price.' },
  ],
  finalTitle: 'Strong documented flexibility, uncertain current buying value',
  finalVerdict: [
    'Krups UK specifies five grind steps, three temperature settings, 12 favourite slots and paired drinks from 12 recipes with 17 choices. The 2.3 L tank and nine-coffee waste bin are manufacturer details, not Coffeedant measurements.',
    'The EA895 family film lacks a verified UK article plate; an exact-labeled repair case is not fleet reliability evidence. The £499 exact listing was sold out and NI-oriented. Confirm stocked checkout, warranty and milk hygiene before buying, not an imaginary app feature.',
  ],
  video: { id: '_qZpuhXIeUA', title: 'How To Fix - Automatic Maintenance Fault - On Krups EA895N40 Coffee Machine (Simple Fix)', creator: 'Appliance Repairman', published: '2024-09-13', note: 'Independent 15:15 exact-EA895N40/70A repair case with parts-affiliate links; one fault, not a general reliability result. Do not attempt internal repairs without qualified service.' },
};

profile.sectionOverrides = {
  ownership: `
    <p>${profile.ownerPattern} These are separate evidence types. The annotated source list preserves the original discussions; their practical limits are readable here.</p>
    <aside class="review-community-evidence" aria-labelledby="evidence-one-owner-title">
      <h3 id="evidence-one-owner-title">What the owner material can and cannot tell us</h3>
      <ul>
        <li><strong>One filmed maintenance fault, September 2024</strong><p>An independent appliance-repair account labels a machine EA895N40/70A and shows a maintenance-cycle fault. The video documents one repair case and includes commercial parts links. It does not reveal how often this fault occurs.</p></li>
        <li><strong>Selected buyer reports</strong><p>A UK consumer-review page indexes 63 EA895N40 submissions, while a separate question describes a machine stuck in automatic maintenance. Submission incentives, exact delivered revisions and diagnoses could not be checked. Neither set is a representative survey.</p></li>
      </ul>
      <p class="review-community-evidence-note">Evidence kept readable inside Coffeedant with no outbound links in this panel. Do not open powered internals from an online video; use Krups support and a qualified technician.</p>
    </aside>
    <p>${profile.ownerCaution}</p>
  `,
};

const built = buildUpgradeReview(profile);
export const upgradeKrupsEvidenceOneReviews: MachineReviewData[] = [{
  ...built,
  alternatives: [
    { name: 'Krups Evidence Eco-Design EA897B40', reason: 'Two-cup milk and a simpler menu.', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/' },
    { name: 'Krups Evidence Milk EA891D27', reason: 'Different silver UK Evidence article and menu.', href: '/espresso-machine/krups-evidence-milk-ea891d27/' },
    { name: 'De’Longhi Magnifica Evo', reason: 'Compare an exact variant with owner brewer access.', href: '/espresso-machine/delonghi-magnifica-evo/' },
  ],
}];
