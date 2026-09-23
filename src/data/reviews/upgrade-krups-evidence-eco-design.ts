import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/EVIDENCE-ECO-DESIGN---Black/p/8010001175';
const support = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/EVIDENCE-ECO-DESIGN---Black/csp/8010001175';
const review = 'https://www.trustedreviews.com/reviews/krups-evidence-eco-design-ea897b40';
const retailer = 'https://www.northxsouth.co.uk/products/krups-ea897b40-bean-to-cup-coffee-machine';
const video = 'https://www.youtube.com/watch?v=Jkb_2zHs7-A';
const image = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxNTA2OTR8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzRaQzlvTjJFdk1qWTRPRGMxTURNMU5EUXpOVEF8MTQyNzAzZDE3NDRmMTYxMjYzZjQwZWYxZGFiYmVlZWU3ZmE0NWFmZGMwMDM3YTRjMDdmZjZjYjk1N2QzMjllMQ';

const profile: UpgradeReviewProfile = {
  key: 'krups-evidence-eco-design-ea897b40', slug: '/espresso-machine/krups-evidence-eco-design-ea897b40/', productId: 'CD-EM-000187',
  brand: 'Krups', model: 'Evidence Eco-Design EA897B40', sku: 'UK EA897B40, slate/black, UK plug', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Evidence Eco-Design EA897B40 review: two milk drinks, real cleanup',
  description: 'Research-led UK EA897B40 review: exact-model specifications, independent hands-on findings, milk-tube cleaning, recycled-plastic accounting, dated price and owner caveats.',
  verdictLabel: 'For shared black and milk drinks with a separate rinse routine',
  verdict: 'Consider the UK EA897B40 if one-touch paired cappuccinos, a five-step grinder and two stored favourites matter more than removable-brewer access or profiles. Budget for cleaning the detachable milk tube. Check whether a retailer delivers to your address before treating a visible Northern Ireland offer as a mainland UK quote.',
  assessment: 'The exact UK product page and an independently tested EA897B40 support convenient paired drinks. The environmental percentages describe material composition and potential recycling, not carbon savings or a proven machine lifetime.',
  image, imageAlt: 'Krups UK Evidence Eco-Design EA897B40 slate bean-to-cup machine, manufacturer front image',
  published: '2026-07-27', updated: '2026-09-23',
  price: { label: 'Exact-model retailer listing, Northern Ireland delivery area', msrp: '£669.99 historical review price, not current MSRP', typical: 'NorthXSouth displayed £399 including tax, crossed-out £499, and add-to-cart on September 23, 2026. Its product delivery tab describes Northern Ireland service; check your postcode and shipping before interpreting this as a mainland UK purchase.', currency: 'GBP', numeric: '399', checked: 'September 23, 2026' },
  links: [
    { label: 'Check exact EA897B40 retailer offer', href: retailer, note: '£399 displayed September 23, 2026; check delivery region and checkout terms', primary: true },
    { label: 'Check Krups UK EA897B40 specifications', href: official, note: 'Official SKU, eight presets, five grind settings, material and cleaning claims' },
  ],
  facts: [
    { label: 'Exact article and market', value: 'EA897B40 slate/black UK listing with UK plug; EA897B10 and other Evidence variants are not interchangeable article identities' },
    { label: 'Drink choices', value: 'Eight manufacturer presets: ristretto, espresso, long coffee, Americano, cappuccino, latte macchiato, café latte and hot water' },
    { label: 'Two cups', value: 'Manufacturer lists two black or two milk drinks at a time; check selected recipe and jug clearance rather than assuming every preset pairs' },
    { label: 'Milk', value: 'Automatic frothing through a detachable hose into a separate container; rinse and hand-clean milk-contact parts after use' },
    { label: 'Grinder and capacities', value: 'Five grind steps, three coffee-temperature levels, 2.3 L water tank, 260 g bean hopper and ten-coffee grounds bin per exact UK specifications' },
    { label: 'Outlet and electrical', value: '15.8 cm maximum spout clearance, UK plug, manufacturer 1450 W and 15-bar pump rating; no Coffeedant brew-pressure measurement' },
    { label: 'Environmental claims', value: '62% recycled plastic by plastic mass, equal to 31% of total machine weight; up to 90% recyclable and a 15-year repairability program are manufacturer claims, not a durability test' },
  ],
  quickAnswers: [
    { question: 'Which exact machine is covered?', answer: 'The Krups UK Evidence Eco-Design EA897B40 with slate finish and UK plug. The same marketing name is used in other regions; inspect the article plate.' },
    { question: 'Can it prepare two cappuccinos?', answer: 'The exact UK manufacturer page says its one-touch system can prepare two cappuccinos or lattes simultaneously. The paired workflow still uses a milk hose that needs cleaning.' },
    { question: 'Does 62% recycled mean most of the whole machine?', answer: 'No. Krups defines 62% of the plastic weight, amounting to 31% of the complete machine weight. Its up-to-90%-recyclable claim is a different measure.' },
    { question: 'Does it have an owner-removable brewer?', answer: 'Krups describes a closed brewing assembly cleaned with prompted tablet cycles. A review claiming a dishwasher-safe removable brew unit conflicts with the manufacturer support; do not attempt to remove it.' },
    { question: 'Is the milk system self-cleaning?', answer: 'The coffee circuit automatically rinses after drinks. The detached milk hose and related parts still need rinsing and regular hand-cleaning, even though the specification table calls its milk rinse automatic.' },
    { question: 'What does it cost today?', answer: 'An exact EA897B40 NorthXSouth listing displayed £399 on September 23, 2026, but its delivery tab describes Northern Ireland service. The £669.99 independent review figure dates to February 2025.' },
  ],
  bestFor: ['Two-person households wanting paired espresso and milk presets', 'Buyers comfortable rinsing a milk tube and using prompted cleaning tablets', 'People who value a documented UK article, service channel and five-step grind adjustment'],
  avoidIf: ['You require an owner-removable brewing unit for hands-on interior cleaning', 'You expect a built-in milk carafe or tightly textured manual-wand microfoam', 'You need named user profiles, swappable bean hoppers or a verified mainland UK £399 checkout'],
  pros: ['Manufacturer-documented paired black and milk drinks', 'Five grinder positions and two saved recipes', 'Large manufacturer-specified 2.3 L water tank', 'Exact-model independent hands-on evaluation'],
  cons: ['Detachable milk tube adds post-drink hand-cleaning', 'No user profiles or bean swapping in the hands-on review', 'Closed brew circuit relies on prompted tablet care', 'Visible £399 offer has unverified mainland delivery'],
  architecture: 'a UK-plug, closed-brewer bean-to-cup machine with a five-step integrated grinder, touch-sensitive recipe buttons, adjustable dual coffee outlets and a detachable automatic milk hose',
  identityBoundary: 'All specifications and listed price are for UK EA897B40 unless specifically described otherwise. EA897B10 is a distinct regional article; Marcel Ouwendijk films an Evidence Eco family unit without showing a verified UK EA897B40 plate.',
  primaryStrength: 'It prepares paired black or milk recipes through a straightforward interface.',
  primaryLimit: 'Milk-tube care and the closed brew circuit are ongoing ownership obligations.',
  setupNote: 'Verify the UK article plate and supplied milk tube. Fill the 2.3 L tank and 260 g bean hopper, then prime and rinse according to the delivered guide. Position two cups before paired recipes.',
  espressoNote: 'Krups lists ristretto, espresso, long coffee and Americano, strength and length adjustments and five grind steps. Trusted Reviews reported robust flavour and crema from its EA897B40 sample, not Coffeedant testing. The 15-bar pump rating is not extraction pressure.',
  milkNote: 'A detachable hose draws from a separate vessel for one or two cups. The independent reviewer found decent rather than exceptional foam. Rinse milk parts after use; there is no built-in refrigerated carafe.',
  workflowNote: 'Eight options, two saved favourites and touch-sensitive selection suit repeat orders. The independent evaluator found no profiles or bean swapping. Paired preparation is a manufacturer-listed mode.',
  buildNote: 'Krups specifies 15.8 cm cup clearance and a UK plug. Leave access for tank, hopper and milk vessel. A 15-year repair program does not promise 15 years of unit life.',
  featuresNote: 'Krups says 62% of plastic mass is recycled, equating to 31% of machine weight, with up to 90% recyclability. These are not Coffeedant lifecycle measurements. The independent review’s 100% figure conflicts with the manufacturer.',
  valueNote: 'NorthXSouth displayed £399 including tax, from £499, on September 23, 2026. Verify its Northern Ireland delivery and checkout stock. Trusted Reviews listed £669.99 in February 2025, a historical reference. Budget consumables.',
  ownerPattern: 'An Evidence Eco owner video shows milk preparation without a verified UK EA897B40 plate. Commenters ask about tablet care, warmth and splashing; these are not defect statistics.',
  ownerCaution: 'The 29-comment thread is self-selected and may include other regional versions. A lukewarm-milk anecdote is not a measurement or failure rate. Request an exact-unit milk demonstration.',
  maintenanceNote: 'Krups says the coffee circuit auto-rinses after each cup and describes deep tablet cleaning around three times a year, subject to the prompts and local use. Detach and rinse the milk tube manually; empty the grounds container and drip tray and follow machine-specific descale alerts. A specification table’s automatic milk-cleaning label does not cancel that hand-cleaning instruction.',
  dimensions: {
    espresso: { score: 8.4, claim: 'The exact UK article offers four black-coffee recipes and adjustable five-step grinding.', consequence: 'Convenient repeatable black coffee, while beans and settings still change results.', status: 'Manufacturer specifications plus David Ludlow’s February 2025 independent EA897B40 tasting; no Coffeedant cup testing', signals: ['Four black-coffee choices include Americano.', 'Independent reviewer describes strong flavour and crema.', '15-bar figure is a pump rating, not a puck measurement.'] },
    milk: { score: 7.3, claim: 'An automatic detachable hose can pour two milk drinks simultaneously.', consequence: 'Paired cappuccinos are convenient but foam quality and the rinse workload matter.', status: 'Krups exact-model product page and independent hands-on review; no Coffeedant frothing test', signals: ['No integrated cold-milk carafe.', 'Reviewer judged foam adequate, not outstanding.', 'Milk-contact components need manual rinsing.'] },
    workflow: { score: 8.5, claim: 'Eight presets and two saved favourites cover common household orders.', consequence: 'Two users can share the interface, although there are no separate profiles or quick-change bean containers.', status: 'Krups exact-model controls and Trusted Reviews hands-on findings', signals: ['Two black or milk drinks listed by Krups.', 'Touch-sensitive monochrome controls.', 'No named user profiles reported by independent tester.'] },
    build: { score: 7.2, claim: 'A closed-brew chassis has official parts and repair support.', consequence: 'The owner cannot assume a removable dishwasher-safe brew unit; service policy does not establish a failure rate.', status: 'Manufacturer care documentation; no Coffeedant teardown or long-term reliability cohort', signals: ['15.8 cm maximum cup clearance.', 'Up to 90% recyclable is a qualified claim.', '15-year repairability program is not a life expectancy.'] },
    features: { score: 8.0, claim: 'Five grind positions, three temperature levels and paired milk distinguish this exact article.', consequence: 'Check the UK EA897B40 rather than transferring features from other Evidence Eco codes.', status: 'Krups UK EA897B40 specifications; independent reviewer confirms controls', signals: ['Two stored favourites.', '2.3 L tank and 260 g beans per official UK table.', 'Recycled-plastic percentage applies to plastic mass.'] },
    value: { score: 7.5, claim: 'One seller listed £399 for the exact UK code on the September 23, 2026 check.', consequence: 'A postcode, warranty and final checkout total decide whether it is a meaningful deal.', status: 'Dated exact-model NorthXSouth listing; 2025 review reference is historical', signals: ['£399 incl tax displayed, £499 struck through.', 'Product delivery tab describes Northern Ireland service.', 'Milk-path consumables add ownership costs.'] },
  },
  sources: [
    { label: 'Krups UK EA897B40 product and specifications', href: official, note: 'Exact SKU, 8 drinks, capacities, settings, recycled-material footnote, care and repair terms; checked September 23, 2026.' },
    { label: 'Krups UK EA897B40 support and FAQ', href: support, note: 'Exact-model documentation and cleaning guidance; checked September 23, 2026.' },
    { label: 'NorthXSouth EA897B40 checkout listing', href: retailer, note: '£399 incl tax and £499 comparison displayed September 23, 2026; confirm stock and checkout.' },
    { label: 'Trusted Reviews EA897B40 hands-on review', href: review, note: 'David Ludlow, February 19, 2025; tested coffee and milk. Removable brew-unit and 100% recyclability claims conflict with manufacturer; not repeated.' },
    { label: 'Krups EA897B40 instruction PDF linked from support', href: 'https://dam.groupeseb.com/m/1ac1484bda2edb52/original/8020010540-IFU.pdf?timestamp=20260528111302', note: 'Official large PDF linked by exact-model support; product page and FAQ used for claims where file retrieval was unavailable.' },
    { label: 'Marcel Ouwendijk Evidence Eco milk video', href: video, note: 'Independent owner-posted footage May 15, 2022; regional article plate not verified, so not an exact UK unit test.' },
    { label: 'Krups UK repairability information', href: 'https://www.krups.co.uk/reparability-page?ref=EA897B40', note: 'Manufacturer repair-program detail for EA897B40; program is not a measured lifespan.' },
    { label: 'Video owner discussion and questions', href: video, note: '29 public comments visible September 23, 2026; self-selected, mixed-region and unverified claims. Summarized on page.' },
    { label: 'NorthXSouth delivery and tracking information', href: 'https://www.northxsouth.co.uk/pages/delivery-and-tracking', note: 'Product delivery tab describes Northern Ireland service; check postcode terms before purchase.' },
    { label: 'Trusted Reviews ethics and commercial policy', href: 'https://www.trustedreviews.com/info/trusted-reviews-ethics-policy-3521647', note: 'Publisher disclosure and ethics context; specific findings attributed to David Ludlow’s article.' },
  ],
  comparisons: [
    { name: 'Krups Evidence Eco-Design EA897B40', quickDecision: 'Two simultaneous milk drinks if manual milk-tube rinsing is acceptable.', priceClass: '£399 listed Sep 23, 2026, NI delivery area', dimensions: 'Check site cabinet clearance; 15.8 cm under spout', heating: 'Manufacturer thermoblock', coffeeSetup: 'Five-step grinder, eight presets and two favourites', milkWorkflow: 'Automatic hose, manually rinsed', bestFor: 'Shared milk and black drinks' },
    { name: 'De’Longhi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Compare when owner-removable brew access is a priority; milk hardware depends on variant.', priceClass: 'Verify variant and region', dimensions: 'Check exact UK model', heating: 'Automatic thermoblock', coffeeSetup: 'Integrated grinder and preset drinks', milkWorkflow: 'Manual or automatic by exact version', bestFor: 'Accessible brew unit' },
    { name: 'Krups Arabica Digital EA817040', href: '/espresso-machine/krups-arabica-digital-ea817040/', quickDecision: 'Take simpler saved black-coffee recipes if paired automatic milk is unnecessary.', priceClass: 'No verified current UK checkout', dimensions: '245 W × 365 D × 330 H mm official', heating: 'Thermoblock', coffeeSetup: 'Three-step grinder and LCD', milkWorkflow: 'Manual steam nozzle', bestFor: 'Occasional manual milk' },
  ],
  comparisonNote: 'Match UK SKU, milk hardware, delivery postcode, warranty and service options; do not move another region’s dimensions or sales price onto EA897B40.',
  recommendations: [
    { kicker: 'Owner brew access', title: 'De’Longhi Magnifica Evo', text: 'Compare a removable brew group, but check the exact milk-system variant.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the Magnifica Evo review', featured: true },
    { kicker: 'Simpler controls', title: 'Krups Arabica Digital EA817040', text: 'Two stored black-coffee recipes, an LCD and hands-on steaming.', href: '/espresso-machine/krups-arabica-digital-ea817040/', linkLabel: 'Read the Arabica Digital review' },
    { kicker: 'Hands-on milk', title: 'Krups Arabica Manual EA811040 / EA811840', text: 'Physical dial controls with a separate steam nozzle and cleaning routine.', href: '/espresso-machine/krups-arabica-manual-ea811040-ea811840/', linkLabel: 'Read the Arabica Manual review' },
    { kicker: 'Category context', title: 'Superautomatic espresso machines', text: 'Compare milk paths, grinder steps and long-term care before choosing.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read the superautomatic guide' },
  ],
  faqs: [
    { question: 'Is this review for EA897B40 or EA897B10?', answer: 'The specification and priced listing are for the UK EA897B40, identified with a UK plug on Krups’s page. EA897B10 is a different regional article; the owner video does not establish which article plate is filmed.' },
    { question: 'How much of the machine is recycled material?', answer: 'Krups says 62% of the plastic mass is recycled, equivalent to 31% of the machine’s total weight. Up to 90% recyclability and 90% recycled box fibres are separate claims.' },
    { question: 'Can I put its brew unit in the dishwasher?', answer: 'Do not rely on the independent review’s conflicting removable-brew-unit claim. The manufacturer documents automatic rinses and prompted tablet cleaning for the closed brewing assembly; follow the specific UK support instructions.' },
    { question: 'Does the milk hose clean itself?', answer: 'The coffee circuit automatically rinses after each drink, while the detachable milk pathway needs a rinse and hand-cleaning. A table label saying automatic milk rinse does not eliminate manual milk-contact hygiene.' },
    { question: 'Is the £399 price available across the UK?', answer: 'The exact-model NorthXSouth listing showed £399 including tax on September 23, 2026. The product delivery tab describes Northern Ireland service, so a mainland UK buyer must confirm postcode eligibility and checkout terms.' },
    { question: 'Does 15-year repairability guarantee a 15-year lifespan?', answer: 'No. This is a Krups repair-program commitment, not an observed failure or survival rate for EA897B40 units. Warranty, spare parts and service conditions should be checked for the delivered article.' },
    { question: 'What do owners report about milk temperature?', answer: 'A self-selected comment under an Evidence Eco family video reports lukewarm cappuccino with cold milk; others ask about splashing or cleaning. These are anecdotal and the UK article plate is unverified. There is no measured model-specific temperature or incidence rate.' },
  ],
  finalTitle: 'A capable two-cup machine, provided milk cleanup fits your routine',
  finalVerdict: [
    'Krups UK clearly specifies EA897B40 as an eight-preset Evidence Eco-Design machine with five grind positions and the ability to prepare two milk drinks together. David Ludlow’s exact-model evaluation supports pleasing coffee and easy controls while judging milk foam less impressive than the rest. Those are his observations, not a Coffeedant tasting claim.',
    'The environmental story needs careful arithmetic: 62% of plastic weight is recycled, 31% of the entire machine, and up to 90% is described as recyclable. The UK SKU and £399 Northern Ireland retailer offer must be checked against delivery, warranty and ongoing cleaning supplies. Choose it for paired convenience, not a claim of effortless milk hygiene or guaranteed lifespan.',
  ],
  video: { id: 'Jkb_2zHs7-A', title: 'Latte macchiato op de Krups Evidence Eco.', creator: 'Marcel Ouwendijk', published: '2022-05-15', note: 'Independent owner-posted 1:55 milk demonstration of an Evidence Eco family machine. Regional/article plate not shown; no confirmed UK EA897B40 identity, testing protocol or Coffeedant access.' },
};

profile.sectionOverrides = {
  ownership: `
    <p>${profile.ownerPattern} The source ledger identifies the discussion; the essential observations are here on Coffeedant.</p>
    <aside class="review-community-evidence" aria-labelledby="evidence-eco-owner-title">
      <h3 id="evidence-eco-owner-title">What the owner discussion actually says</h3>
      <ul>
        <li><strong>Milk warmth, one self-selected report</strong><p>A commenter says a cappuccino feels lukewarm despite a higher setting. No thermometer reading, UK article plate or diagnosis is given.</p></li>
        <li><strong>Care and operation questions</strong><p>Other viewers ask how often to use a cleaning tablet, how to make foam and why milk might splash. Questions are not verified faults and the thread is not a representative survey.</p></li>
      </ul>
      <p class="review-community-evidence-note">Evidence summarized within Coffeedant; no outgoing links in this panel. Discussion source, date and identity limitations are listed in the source ledger.</p>
    </aside>
    <p>${profile.ownerCaution} Check the EA897B40 plate and demonstrate the cleaning sequence.</p>
  `,
};

const built = buildUpgradeReview(profile);
export const upgradeKrupsEvidenceEcoDesignReviews: MachineReviewData[] = [{
  ...built,
  alternatives: [
    { name: 'De’Longhi Magnifica Evo', reason: 'Check a UK variant with owner brew-group access.', href: '/espresso-machine/delonghi-magnifica-evo/' },
    { name: 'Krups Arabica Digital EA817040', reason: 'Saved black-coffee recipes with manually steamed milk.', href: '/espresso-machine/krups-arabica-digital-ea817040/' },
    { name: 'Krups Arabica Manual EA811040 / EA811840', reason: 'Simple physical buttons and separate steam nozzle.', href: '/espresso-machine/krups-arabica-manual-ea811040-ea811840/' },
  ],
}];
