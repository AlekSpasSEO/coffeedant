import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const support = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/KRUPS-Evidence-Milk-Bean-to-Cup-Coffee-Machine--Silver-EA891D27/csp/8010000319';
const manual = 'https://dam.groupeseb.com/m/9242d4332a46dacd/original/8020005297-IFU.pdf?timestamp=20251008195825';
const retailer = 'https://www.amazon.co.uk/Krups-EA891D27-Evidence-Automatic-Espresso/dp/B083PJNPFQ';
const independent = 'https://www.herfavfood.com/blog/krups-evidence-bean-to-cup-coffee-machine-review';
const video = 'https://www.youtube.com/watch?v=t7CcnEZ2SGI';
const community = 'https://www.elektroda.com/rtvforum/topic4086695.html';
const image = 'https://m.media-amazon.com/images/I/61RLxyAf6-L._AC_SL1500_.jpg';

const profile: UpgradeReviewProfile = {
  key: 'krups-evidence-milk-ea891d27', slug: '/espresso-machine/krups-evidence-milk-ea891d27/', productId: 'CD-EM-000188',
  brand: 'Krups', model: 'Evidence Milk EA891D27', sku: 'UK silver EA891D27', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Evidence Milk EA891D27 review: paired milk, careful ownership',
  description: 'Research-led UK EA891D27 review: 15 recipes and paired milk, exact-model documentation, dated stock check, evidence limits, cleaning, alternatives and owner context.',
  verdictLabel: 'Paired milk convenience, if the exact UK article is available',
  verdict: 'EA891D27 is a useful option for two-person households wanting automated cappuccino and latte without a separate grinder. The UK support page identifies the 15-choice menu, paired milk and OLED controls. The exact Amazon UK listing had no featured offer on September 24, 2026, so verify the seller, return terms and warranty before making a purchase decision.',
  assessment: 'Krups documents EA891D27, but no independent exact-model test was located. Evidence Connected and Evidence One reviews cover other variants. One milk complaint cannot establish a failure rate.',
  image, imageAlt: 'Retailer listing image of silver Krups Evidence Milk EA891D27 with two milk drinks and external milk vessel',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact EA891D27 UK offer checked', msrp: 'No current manufacturer list price verified', typical: 'Amazon UK exact ASIN B083PJNPFQ showed no featured offer on September 24, 2026. No current exact-model UK checkout price or stock was independently verified; the older £893 Coffeedant claim is not current evidence.', currency: 'GBP', numeric: '', checked: 'September 24, 2026' },
  links: [
    { label: 'Check exact EA891D27 UK listing', href: retailer, note: 'No featured offer observed September 24, 2026; inspect live seller and warranty', primary: true },
    { label: 'Read Krups EA891D27 instructions', href: support, note: 'Exact UK silver article, support FAQ and documentation' },
  ],
  facts: [
    { label: 'Identity', value: 'Krups UK EA891D27 silver Evidence Milk; not Evidence Connected, Evidence One EA895 or a generic EA89-series machine' },
    { label: 'Drinks', value: '15 one-touch hot drink choices on the exact UK support page; black, milk and temperature-selected hot-water/tea options vary by menu' },
    { label: 'Milk routine', value: 'Manufacturer confirms two milk drinks together using a separate milk container and hose; handle and clean all milk-contact parts as instructed' },
    { label: 'Controls', value: 'OLED display and touch controls; Dark and Extra Shot choices identified on exact support page' },
    { label: 'Tank and beans', value: 'Krups Ireland family product listing describes 2.3 L water and 260 g bean capacities; confirm the delivered UK article plate and included parts' },
    { label: 'Connectivity', value: 'No verified Bluetooth/app support for EA891D27. Evidence Connected is a different variant; generic support FAQ app text is not SKU-level proof.' },
    { label: 'Evidence limits', value: 'No Coffeedant brewing, foam temperature, shot timing, decibels, teardown or representative reliability data' },
  ],
  quickAnswers: [
    { question: 'Which model does this cover?', answer: 'The silver UK EA891D27 named on Krups’s support page. Confirm the label before using replacement-part lists or another Evidence review.' },
    { question: 'Can it make two milk drinks?', answer: 'Yes. Krups UK explicitly lists two milk-based drinks at once. The external milk container and hose still require proper cleaning.' },
    { question: 'Does it connect to a phone?', answer: 'App and Bluetooth operation were demonstrated for Evidence Connected, not verified for EA891D27. Do not buy this exact article expecting phone control.' },
    { question: 'What is the current UK price?', answer: 'No exact-model checkout price was verified on September 24, 2026. Amazon UK showed no featured offer for ASIN B083PJNPFQ; the older £893 claim should not be treated as current.' },
    { question: 'Does the milk frother fail after a few months?', answer: 'No rate is established. One EA891D27 forum author reported a loss of foam in November 2024 after fewer than 15 drinks; a single self-selected report cannot predict incidence.' },
    { question: 'Can I remove the brewer to wash it?', answer: 'Do not assume it is removable. Follow the exact Krups maintenance program, cleaning tablets and manufacturer service instructions rather than disassembling the machine.' },
  ],
  bestFor: ['Two-person households making paired cappuccinos or other preset milk drinks', 'Buyers willing to rinse and clean a separate milk vessel and tube', 'Owners who prefer touch-selected recipes over manual dosing and steaming'],
  avoidIf: ['You need verified smartphone control on this exact article', 'You require an owner-removable brew unit or hands-on latte-art texture control', 'You cannot find an authorized seller with clear UK warranty and spare parts'],
  pros: ['Exact UK support confirms 15 drink choices and paired milk output', 'OLED display and dedicated Dark and Extra Shot options', 'Manufacturer-supported milk jug and replaceable milk tubes', 'Independent context and precise owner-claim limitations published transparently'],
  cons: ['No independently tested exact EA891D27 review located', 'Milk hose and container impose cleaning and storage work', 'No verified current UK offer on the dated check', 'Connected-family reviews cannot certify this model’s app capability'],
  architecture: 'a UK-listed silver bean-to-cup machine with integrated grinding, an OLED touch panel, two adjustable outlets and an external milk container served by a tube',
  identityBoundary: 'The confirmed UK model is EA891D27. The 2019 independent reviewer tested an Evidence Connected variant, and Rob Locke filmed Evidence One EA895. Their first-person flavour, app and measured experience cannot be assigned to EA891D27.',
  primaryStrength: 'Krups documents paired automatic milk preparation and a broad one-touch menu.',
  primaryLimit: 'Exact-model third-party testing and a current UK checkout price remain unverified.',
  setupNote: 'Check the EA891D27 rating plate, local plug, supplied milk vessel and tube before setup. Follow the delivered manual for water hardness, initial rinse, grinder adjustment, milk-hose connection and minimum vessel clearance. Do not use the connected variant’s app instructions for this SKU.',
  espressoNote: 'Krups UK lists adjustable drink choices, a Dark option and Extra Shot; those are menu controls rather than a guarantee of café espresso. A 2019 reviewer enjoyed coffee from her Evidence Connected unit, but her flavour verdict does not test EA891D27. Start with one reproducible black-coffee recipe and adjust the grinder only as the manual directs.',
  milkNote: 'Krups UK specifies two simultaneous milk drinks. The milk vessel and hose need cleaning. An exact-model forum author reported lukewarm unfoamed milk on one new unit without a confirmed cause or rate; request a seller demonstration.',
  workflowNote: 'OLED selection, 15 one-touch choices, Dark and Extra Shot can simplify repeat orders. The family review’s phone feature belongs to Evidence Connected and the owner film is EA895, so neither establishes a wireless shortcut on this machine. Include filling, attaching milk, prompted rinses and refrigeration in any workflow comparison.',
  buildNote: 'Krups UK maintains an EA891D27 support and accessory listing. Check dimensions in the delivered revision, not a conflicting older page. The service/parts program and an anecdotal failure report are neither a durability guarantee nor a measured fleet failure rate.',
  featuresNote: 'The exact UK support page confirms 15 drinks, paired milk, OLED, Dark and Extra Shot. It does not substantiate app connectivity. The linked family manual explains operating sequences, while product-specific accessory compatibility should be matched to EA891D27.',
  valueNote: 'No live exact-model UK offer was found September 24, 2026; Amazon listed no featured offer. Avoid anchoring to a stale £893 claim or prices for EA895, EA8908 or a different region. Include filters, milk cleaner, tablets and replacement tubes in comparisons, without inventing consumption rates.',
  ownerPattern: 'An EA891D27 owner posted in November 2024 that a unit bought August 8 and used fewer than 15 times stopped frothing despite cleaning the milk connector; milk became lukewarm. Another participant recommended further cleaning/descaling and warranty if unresolved.',
  ownerCaution: 'That thread contains one verified self-described model identity but no technician diagnosis, follow-up resolution or denominator. Amazon’s 31 self-selected ratings are a different signal, not a reliability cohort.',
  maintenanceNote: 'After milk drinks, follow the exact support instructions for milk-path rinse and wash removable milk-contact parts; keep the vessel chilled per food-safety guidance. Empty grounds and drip tray, use prompted coffee-cleaning tablets and descale only as the delivered machine instructs. Do not interpret an automatic circuit rinse as a substitute for all milk hygiene.',
  dimensions: {
    espresso: { score: 7.0, claim: 'Dark, Extra Shot and drink-level control broaden black-coffee choices.', consequence: 'The machine can simplify repeat coffees, but flavour on EA891D27 has not been independently measured here.', status: 'Exact Krups UK menu; independent Evidence Connected review is another variant', signals: ['Krups UK specifies 15 one-touch options.', 'Dark and Extra Shot controls are manufacturer-confirmed.', 'No exact-model independent flavour test was identified.'] },
    milk: { score: 7.3, claim: 'Krups confirms two milk drinks together through a separate vessel and hose.', consequence: 'A couple can prepare paired drinks, with a deliberate milk-cleaning step.', status: 'Exact-model manufacturer confirmation plus one limited owner complaint; no failure rate', signals: ['Two milk drinks listed on UK support.', 'Separate milk parts need cleaning.', 'A self-selected exact-model owner reported no foam on one unit.'] },
    workflow: { score: 7.7, claim: 'OLED touch choices and paired output target busy mornings.', consequence: 'Count attaching, cleaning and storing milk rather than only button presses.', status: 'Exact UK Krups controls; adjacent-model independent video is illustrative only', signals: ['15 recipe choices on exact-model support.', 'Dark and Extra Shot on the panel.', 'App control is unverified for EA891D27.'] },
    build: { score: 7.0, claim: 'Exact UK support lists documentation and replacement milk components.', consequence: 'Documented parts support helps service planning, but does not demonstrate longevity.', status: 'Manufacturer support and anecdotal owner thread; no cohort or teardown', signals: ['Milk jug and tubes have listed replacement references.', 'Follow exact-model cleaning prompts.', 'One complaint does not give incidence or diagnosis.'] },
    features: { score: 7.4, claim: 'Paired milk, OLED, Dark and Extra Shot are model-supported.', consequence: 'Useful features are present without assuming Bluetooth from the Connected edition.', status: 'Krups UK exact-model support, family manual with edition boundary', signals: ['Paired milk output documented.', 'OLED display and touch input documented.', 'No exact EA891D27 app proof located.'] },
    value: { score: 6.3, claim: 'The exact UK ASIN had no featured offer on September 24, 2026.', consequence: 'A full price/value ranking needs a verified seller, checkout and warranty.', status: 'Dated Amazon UK listing; historical page price excluded', signals: ['No confirmed current exact-SKU checkout price.', 'Check milk-care and filter supplies.', 'Compare UK-authorized warranty rather than adjacent SKU prices.'] },
  },
  sources: [
    { label: 'Krups UK EA891D27 support', href: support, note: 'Exact silver UK article EA891D27, 15 choices, paired milk, OLED, Dark/Extra Shot and maintenance FAQ; checked September 24, 2026.' },
    { label: 'Official EA89-series instruction manual', href: manual, note: 'Family operating and cleaning guide linked by official support; manual spans variants, so an instruction is not proof of EA891D27 connectivity.' },
    { label: 'Amazon UK exact ASIN B083PJNPFQ', href: retailer, note: 'EA891D27 listing showed no featured offer September 24, 2026; 31 self-selected ratings, not a reliability estimate. Retailer gallery supplies three credited images.' },
    { label: 'Her Favourite Food independent Evidence review', href: independent, note: 'May 12, 2019, first-person ownership evaluation of the Bluetooth-enabled Evidence Connected, NOT exact EA891D27. Its taste/app observations are not transferred.' },
    { label: 'Rob Locke independent Evidence One EA895 review video', href: video, note: 'Published September 20, 2022; filmed EA895 workflow, 7:13; adjacent model, affiliate link, no EA891D27 performance inference.' },
    { label: 'Krups UK Evidence family page', href: 'https://www.krups.co.uk/evidence', note: 'Family-level positioning and 15-drink description; contains separate Evidence Connected listing, which must not be conflated.' },
    { label: 'Krups compatible Evidence milk jug', href: 'https://www.krups.co.uk/accessory/Milk-jug-for-the-Espresso-Evidence-MS-8030000372/a/8030000372', note: 'Manufacturer replacement jug reference; confirm delivered SKU compatibility and current stock.' },
    { label: 'Elektroda EA891D27 owner discussion', href: community, note: 'Original November 13–14, 2024 report of one owner’s no-foam issue; one anecdote, diagnosis unknown; readable summary appears on-page.' },
    { label: 'Krups EA891D27 accessories', href: 'https://www.krups.co.uk/accessories-store/Products-/Beverages/Full-automatic/KRUPS-Evidence-Milk-Bean-to-Cup-Coffee-Machine--Silver-EA891D27/csp/8010000319', note: 'Exact article accessory matches, milk tubes, cleaning and filter options; checked September 24, 2026.' },
    { label: 'Smartblend affiliate Evidence roundup', href: 'https://www.smartblend.co.uk/blog/best-krups-coffee-machines-uk', note: 'April 15, 2026, reproduces product-menu copy and includes affiliate disclosure; not an independent hands-on exact-model test.' },
  ],
  comparisons: [
    { name: 'Krups Evidence Milk EA891D27', quickDecision: 'Choose paired milk and OLED if a current UK seller verifies the exact article.', priceClass: 'No exact UK offer verified Sep 24, 2026', dimensions: 'Verify delivered edition and counter fit', heating: 'Automatic integrated bean-to-cup', coffeeSetup: '15 menu choices, Dark and Extra Shot', milkWorkflow: 'Separate milk vessel and hose; paired drinks', bestFor: 'Two-person preset milk routine' },
    { name: 'Krups Evidence Eco-Design EA897B40', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/', quickDecision: 'Eight menus and paired milk; a verified exact-model hands-on review is available.', priceClass: 'NI £399 listing Sep 23, delivery caveat', dimensions: 'Check 15.8 cm outlet limit', heating: 'Manufacturer thermoblock', coffeeSetup: 'Five grind positions, two favourites', milkWorkflow: 'Detachable hose, manually rinsed', bestFor: 'Current documented alternative' },
    { name: 'De’Longhi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Compare a variant with owner-removable brewer; milk system changes by model.', priceClass: 'Verify exact UK article', dimensions: 'Verify regional listing', heating: 'Automatic thermoblock', coffeeSetup: 'Integrated grinder and presets', milkWorkflow: 'Milk hardware varies by variant', bestFor: 'Hands-on brewer access' },
  ],
  comparisonNote: 'Compare exact UK codes, included milk hardware, authorised seller, return period and total cleaning routine. Evidence One and Connected are not synonyms for EA891D27.',
  recommendations: [
    { kicker: 'Closest Krups alternative', title: 'Evidence Eco-Design EA897B40', text: 'Eight recipes, paired milk and a verified hands-on review; check the regional offer.', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/', linkLabel: 'Read the Evidence Eco review', featured: true },
    { kicker: 'Simpler coffee', title: 'Krups Arabica Digital EA817040', text: 'Saved black-coffee routines and a manual steam nozzle instead of paired automatic milk.', href: '/espresso-machine/krups-arabica-digital-ea817040/', linkLabel: 'Read Arabica Digital review' },
    { kicker: 'Accessible care', title: 'De’Longhi Magnifica Evo', text: 'Compare removable brewer maintenance; milk equipment varies by SKU.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read Magnifica Evo review' },
    { kicker: 'Decision guide', title: 'Superautomatic machines', text: 'Compare milk pathways and ongoing cleaning before buying for a household.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'Is EA891D27 the connected Bluetooth model?', answer: 'No Bluetooth support was verified for UK EA891D27. The 2019 independent review covers a Bluetooth-capable Evidence Connected, a different variant. A generic support-page app FAQ is not proof for this article.' },
    { question: 'What does the 15-drink menu include?', answer: 'Krups UK confirms 15 one-touch hot drink choices; Krups Ireland family documentation divides these into seven black, five milk and three tea-temperature options. Check the delivered EA891D27 menu and regional manual before promising a specific recipe.' },
    { question: 'Can it make two cappuccinos at once?', answer: 'Krups UK explicitly says two milk drinks at once. Space two cups under the outlets and attach the cleaned milk tube and vessel as the manual directs.' },
    { question: 'Does the milk system need manual cleaning?', answer: 'Yes. Automatic coffee rinses and prompts are not a substitute for rinsing the milk-contact tube and container. Follow the exact manual and manufacturer cleaning guidance.' },
    { question: 'Has an independent reviewer tested EA891D27?', answer: 'We did not locate a reputable hands-on test identifying the exact UK EA891D27 rating plate. The independent article covers Evidence Connected and the film covers Evidence One EA895; neither proves this model’s cup quality or connectivity.' },
    { question: 'How common are frother faults?', answer: 'No reliable frequency has been established. A November 2024 forum post describes one EA891D27 with a milk-foam problem shortly after purchase; that account cannot establish incidence, cause or a typical time to failure.' },
    { question: 'How much does a new unit cost?', answer: 'No current exact-model UK checkout price was verified September 24, 2026; Amazon UK showed no featured offer. Compare offers for EA891D27 with proper seller, condition, tax and warranty rather than old articles or other Evidence codes.' },
  ],
  finalTitle: 'A good documented workflow, with a real exact-model evidence gap',
  finalVerdict: [
    'The UK EA891D27 support page establishes the core proposition: 15 selectable hot drinks, paired automatic milk, an OLED panel and Dark or Extra Shot options. It does not prove phone control, a measured cup temperature or a failure rate. This is a research-led buying assessment, not a Coffeedant test.',
    'An independent owner’s Connected review and an EA895 video show why the wider Evidence interface appeals, but their observations cannot be moved onto this exact SKU. One EA891D27 owner reported a milk-foam fault, which deserves a realistic service question but not alarmist statistics. With no verified current UK checkout, the prudent next step is to confirm the exact plate, included parts, live offer and warranty.',
  ],
  video: { id: 't7CcnEZ2SGI', title: 'Review of Krups Evidence One Bean to Cup Machine EA895', creator: 'Rob Locke', published: '2022-09-20', note: 'Independent 7:13 adjacent-model EA895 filmed workflow, with an affiliate link. NOT EA891D27, so no exact-model tasting, specification or Bluetooth inference.' },
};

profile.sectionOverrides = {
  ownership: `
    <p>${profile.ownerPattern} The original discussion appears in the annotated sources; the essential evidence is readable here without leaving Coffeedant.</p>
    <aside class="review-community-evidence" aria-labelledby="evidence-milk-owner-title">
      <h3 id="evidence-milk-owner-title">What an exact-model owner reported</h3>
      <ul>
        <li><strong>November 13, 2024, one EA891D27</strong><p>The author said the machine had been bought August 8, 2024, had made fewer than 15 cups, and stopped producing foam; only lukewarm milk came out. They said cleaning the connector and trying other milks did not restore foam.</p></li>
        <li><strong>November 14 reply</strong><p>Another participant suggested a more thorough clean and descaling, then warranty service if unresolved. This was advice, not a technician finding or confirmed repair.</p></li>
      </ul>
      <p class="review-community-evidence-note">One self-selected owner account; no diagnosis, follow-up or denominator. Neither the earlier page’s “most users” claim nor a precise failure window is supported. No outgoing links in this panel.</p>
    </aside>
    <p>${profile.ownerCaution} Verify the exact SKU and a practical warranty path when shopping.</p>
  `,
};

const built = buildUpgradeReview(profile);
export const upgradeKrupsEvidenceMilkReviews: MachineReviewData[] = [{
  ...built,
  alternatives: [
    { name: 'Krups Evidence Eco-Design EA897B40', reason: 'Verified independent hands-on coverage and paired milk.', href: '/espresso-machine/krups-evidence-eco-design-ea897b40/' },
    { name: 'De’Longhi Magnifica Evo', reason: 'Compare accessible brew-unit care by exact variant.', href: '/espresso-machine/delonghi-magnifica-evo/' },
    { name: 'Krups Arabica Digital EA817040', reason: 'Saved black drinks with manual steaming.', href: '/espresso-machine/krups-arabica-digital-ea817040/' },
  ],
}];
