import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const support = 'https://www.krups.co.uk/instructions-for-use/Products-/Beverages/Full-automatic/KRUPS-Intuition-Essential-Bean-to-Cup-Coffee-Machine--Black-EA870840/csp/8010001077';
const currys = 'https://business.currys.co.uk/catalogue/domestic-appliances/small-kitchen-appliances/coffee-machines/krups-intuition-essential-ea870840-bean-to-cup-coffee-machine-black/N604144W';
const seller = 'https://www.directvacuums.co.uk/krups-ea870840-bean-to-cup-coffee-machine-essential-intuition-1450w-3l-black-1.html';
const film = 'https://www.youtube.com/watch?v=iQFj3ltERzI';
const hero = 'https://brain-images-ssl.cdn.dixons.com/3/4/10235943/l_10235943.jpg';

const profile: UpgradeReviewProfile = {
  key: 'krups-intuition-essential-ea870840', slug: '/espresso-machine/krups-intuition-essential-ea870840/', productId: 'CD-EM-000190',
  brand: 'Krups', model: 'Intuition Essential EA870840', sku: 'UK EA870840, black, EAN 3016661167041', category: 'Superautomatic espresso machine with manual steam wand', brandPath: '/krups/',
  title: 'Krups Intuition Essential EA870840 review: steam and upkeep',
  description: 'UK EA870840 research review of espresso presets, manual steam wand, 3 L reservoir, dated sold-out offers, ownership and regional evidence boundaries.',
  verdictLabel: 'Black-coffee automation with milk made by hand',
  verdict: 'The EA870840 is worth considering if you want bean-to-cup black coffee plus a manual steam wand, not paired automatic milk recipes. Exact UK support confirms its article; a Currys Business listing describes the four drink functions, 3 L tank and two saved recipes. The two exact-model UK pages checked on September 24, 2026 were out of stock. Compare an actual stocked checkout and warranty before using any historic price.',
  assessment: 'This is a research-led review, not Coffeedant tasting. The independent MaxiCoffee demonstration is a French-market YY4371FD package in the Intuition Essential family, not a verified EA870840 UK unit. It illustrates panel and wand workflow without establishing UK specifications or measured taste. Exact UK retailer and manufacturer support anchor the model-specific claims.',
  image: hero, imageAlt: 'Currys Business listing photo of black Krups Intuition Essential EA870840 with manual steam wand',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact UK article, currently sold out in checked listings', msrp: 'No manufacturer UK RRP verified', typical: 'DirectVacuums displayed £319.99 against an unverified £599.99 RRP on September 24, 2026, but sold out; its one-year reseller guarantee differs from the two-year guarantee on Currys Business. Currys Business also showed out of stock without a current checkout price.', currency: 'GBP', numeric: '', checked: 'September 24, 2026' },
  links: [
    { label: 'Check exact EA870840 seller listing', href: seller, note: '£319.99 displayed but out of stock September 24, 2026; one-year reseller guarantee', primary: true },
    { label: 'Read Krups UK EA870840 support', href: support, note: 'Manufacturer identity, manual link, cleaning and compatible parts' },
  ],
  facts: [
    { label: 'Identity', value: 'UK Krups EA870840 black, EAN 3016661167041 on Currys Business; French YY4371FD and EA870810 are not this UK SKU' },
    { label: 'Black drinks', value: 'Currys Business lists ristretto, espresso, long coffee and hot water; two favourite settings' },
    { label: 'Milk', value: 'Manual steam wand, not automatic cappuccino or an external paired-milk tube' },
    { label: 'Capacity', value: 'Currys Business lists 3 L tank, 250 g bean container and dimensions 350 × 240 × 400 mm (H × W × D); retailer specification, not Coffeedant measurements' },
    { label: 'Controls', value: 'Touch icons, three strength choices, illuminated status alerts; manufacturer says length, temperature and grinder can be adjusted' },
    { label: 'Power', value: 'Currys Business lists 1450 W and 15-bar pump rating, not measured brew pressure' },
    { label: 'Care', value: 'Manufacturer automatic coffee-circuit cleaning and separate manual steam-nozzle hygiene; exact accessories are indexed by article number' },
  ],
  quickAnswers: [
    { question: 'Is it fully automatic for milk?', answer: 'No. The UK EA870840 retailer listing specifies a steam wand; you texture and clean milk yourself. Do not transfer automatic milk features from Intuition Preference or Experience.' },
    { question: 'Is a 3 L tank confirmed?', answer: 'The exact Currys Business EA870840 specification lists 3 litres. It is a retailer claim, not Coffeedant measured capacity.' },
    { question: 'How many saved drinks?', answer: 'The exact UK retailer listing describes up to two customised recipes, unlike the larger profile systems on pricier Intuition editions.' },
    { question: 'Can I buy it for £319.99?', answer: 'The exact-model DirectVacuums listing displayed that price on September 24, 2026 but said out of stock. It is not a verified live checkout.' },
    { question: 'Is the MaxiCoffee film this UK SKU?', answer: 'No verified UK rating plate is shown. Its linked package is French YY4371FD, so the film is family-level workflow context only.' },
    { question: 'Is there no manual cleaning?', answer: 'No. Prompted internal coffee cleaning does not clean the milk-steam nozzle or drip tray for you. Follow the delivered instructions.' },
  ],
  bestFor: ['Black-coffee households wanting simple preset selection and a large listed water tank', 'A buyer willing to texture milk with a steam wand', 'Owners willing to follow automatic coffee-cycle prompts and clean the external wand'],
  avoidIf: ['You expect one-touch paired cappuccinos or automatic milk cleaning', 'You need a currently stocked, verified £319.99 UK checkout', 'You require verified independent EA870840 extraction measurements'],
  pros: ['Manufacturer support identifies the exact UK article', 'Four listed drink functions and two favourites', '3 L retailer-listed tank with a separate steam wand', 'Official accessories and two-year manufacturer guarantee path'],
  cons: ['Checked exact UK stock pages were unavailable', 'Manual steam practice and nozzle cleanup are required', 'Independent family film has a different French package number', 'Internal brew care uses prompts and cleaning consumables'],
  architecture: 'a black UK bean-to-cup machine with integrated grinder, thermoblock, touch-icon controls, illuminated maintenance alerts, dual coffee spout and manual steam nozzle',
  identityBoundary: 'Only UK EA870840 is reviewed. The MaxiCoffee film links French YY4371FD, and Krups regional EA870810 media may look similar; neither verifies an identical UK plate or package. Intuition Preference EA875U40 and Experience EA877D40 have different automatic milk and profile features.',
  primaryStrength: 'It combines directly selectable black-coffee drinks with a manually controlled steam wand and a retailer-listed 3 L reservoir.',
  primaryLimit: 'Its sold-out checked listings prevent a defensible current value claim; manual milk handling remains part of every cappuccino.',
  setupNote: 'Confirm the delivered EA870840 plate, UK plug, supplied nozzle and the UK manual. The exact retailer gives 350 mm height, 240 mm width and 400 mm depth, but those are unmeasured listing figures and need real allowance for reservoir, bean lid and steam movement. Configure water hardness and rinse before first coffee.',
  espressoNote: 'The exact Currys Business listing names ristretto, espresso and long coffee, and three strength settings. Krups support mentions adjustment of length, temperature and grind without giving exact counts for this article. MaxiCoffee demonstrates a French Intuition family machine but cannot establish the UK EA870840 temperature or taste. The 15-bar figure is a pump specification.',
  milkNote: 'Use the steam nozzle and a separate pitcher to texture milk after brewing; this is not an automatic dual-cappuccino machine. Practice positioning, purging and surface cleaning per the delivered instructions. Manufacturer generic FAQ discusses an Auto-Cappuccino accessory on some models; it does not certify that EA870840 ships with one.',
  workflowNote: 'Two saved recipes and touch icons can shorten repeated black drinks, while illuminated alerts signal refills and care. A latte adds pitcher filling, steaming, wiping the nozzle and sink cleanup. The independent film shows a related French package; compare its workflow as context, not as proof of exact UK timings.',
  buildNote: 'The UK retailer reports an 8.15 kg weight, thermoblock and two-year manufacturer guarantee. Krups indexes a replacement nozzle, grounds collector, tank and cleaning consumables for EA870840. Parts availability and guarantee terms should be checked at purchase; a reseller one-year promise must not silently replace the manufacturer terms.',
  featuresNote: 'Useful exact-listing features are touch selection, two favourites, strength choices and a steam wand. The UK manufacturer identifies customisable length, strength, temperature and grind but not an exact count of grinder steps in the support summary. No smartphone app or paired automatic milk program is verified for this article.',
  valueNote: 'On September 24, 2026 DirectVacuums displayed £319.99 versus its £599.99 comparison but showed out of stock and one-year reseller cover. Currys Business also showed sold out. Treat both as market context, not buyable offers; cost the filter, tablets, cleaning, warranty and an actually available exact-SKU seller.',
  ownerPattern: 'Currys Business search results indexed 13 Feefo customer reviews and 4.5/5, but detailed scores were not retrievable in the live page. Home Tester Club indexed user opinions for EA870840 but blocked detailed access. A 2024 Reddit purchasing question listed this SKU at a historic £349; the questioner did not report owning it.',
  ownerCaution: 'These are selected submissions and one shopping discussion, not a reliability survey or verified hands-on sample for Coffeedant. Do not turn a review average or a historic asking price into a long-term failure rate, a measured flavour result, or present inventory.',
  maintenanceNote: 'Krups support recommends following descaling prompts rather than preemptively running cycles without instruction, and lists a steam-nozzle cleaning pin, tablets, filter and replacement tank against EA870840. Purge and wipe the milk nozzle after each use when safe, empty drip and grounds containers, and follow the supplied manual for cleaning programs. The generic FAQ includes other models, so check exact applicability.',
  dimensions: {
    espresso: { score: 7.4, claim: 'Three listed black-coffee recipes and three strength choices offer simple repeatability.', consequence: 'Buyer must judge taste using their beans; no exact Coffeedant cup trial exists.', status: 'Exact UK Currys listing plus Krups support; French-family video only', signals: ['Ristretto, espresso and long coffee named.', 'Three strength selections on retailer listing.', 'Pump rating is not extraction pressure.'] },
    milk: { score: 6.8, claim: 'The EA870840 uses a manual steam nozzle rather than automatic paired milk.', consequence: 'More texture agency and more hands-on routine, with nozzle cleaning after use.', status: 'Exact UK listing and manufacturer accessory page', signals: ['Steam wand visible on exact product images.', 'Separate jug and operator technique matter.', 'No exact measured foam temperature.'] },
    workflow: { score: 7.6, claim: 'Touch selection, two favourites and illuminated alerts simplify routine black drinks.', consequence: 'A milk drink remains a sequential coffee, steam and cleanup workflow.', status: 'Krups support, UK retailer and adjacent French demonstration', signals: ['Four drink functions including hot water.', 'Two saved recipes listed.', 'Manual steam and waste emptying remain.'] },
    build: { score: 7.0, claim: 'A UK support article and exact spare-parts catalogue make care traceable.', consequence: 'Verify the delivered revision and seller guarantee before ordering parts.', status: 'Official EA870840 support and accessory listings; no lifespan cohort', signals: ['Replacement nozzle, tank and grounds collector listed.', 'Two-year manufacturer cover on UK retailer listing.', 'One-year reseller guarantee differs.'] },
    features: { score: 7.3, claim: 'Three strength choices and manual steam define a modest feature set.', consequence: 'Avoid paying for unsupported claims of automatic milk or app control.', status: 'Exact UK listing; manufacturer support; no verified smartphone control', signals: ['Touch icons and illuminated alerts.', 'No exact grind-position count asserted.', 'Preference and Experience are distinct variants.'] },
    value: { score: 6.5, claim: 'Both exact UK sellers checked were out of stock on September 24, 2026.', consequence: 'No defensible current purchase ranking follows from their displayed prices.', status: 'Dated DirectVacuums and Currys Business listings', signals: ['£319.99 reseller display, unavailable.', 'Warranty terms differ across listings.', 'Filter and cleaning supplies add costs.'] },
  },
  sources: [
    { label: 'Krups UK exact EA870840 manufacturer support', href: support, note: 'Article identity, customisation, automatic cleaning, linked manual and model-indexed FAQ; generic FAQ items are not all exact-model capabilities.' },
    { label: 'Krups UK EA870840 instruction PDF link', href: 'https://dam.groupeseb.com/m/7fbaddcb233e992b/original/8020005527-IFU.pdf?timestamp=20250714164230', note: 'Official support-linked 29 MB manual; full file not retrievable in research environment. Specific claims rely on accessible exact-model support and retailer text.' },
    { label: 'DirectVacuums exact UK EA870840 listing', href: seller, note: '£319.99 vs retailer-stated £599.99, out of stock September 24, 2026, one-year reseller guarantee, no available checkout.' },
    { label: 'MaxiCoffee independent Intuition Essential film', href: film, note: 'September 12, 2020, 8:45, French retailer demonstration linked to YY4371FD; commercial retailer and adjacent family, not UK EA870840 performance proof.' },
    { label: 'Currys Business exact UK EA870840 specification', href: currys, note: 'EAN, steam wand, 3 L water, 250 g beans, 1450 W, dimensions, two favourites and two-year guarantee; out of stock September 24, 2026.' },
    { label: 'Krups UK exact EA870840 compatible parts', href: 'https://www.krups.co.uk/accessories-store/Products-/Beverages/Full-automatic/KRUPS-Intuition-Essential-Bean-to-Cup-Coffee-Machine--Black-EA870840/csp/8010001077', note: 'Nozzle, cleaning pin, tablet, filter, tank and grounds collector indexed to EA870840; stock and prices vary.' },
    { label: 'Krups UK guarantee terms', href: 'https://www.krups.co.uk/warranty', note: 'Manufacturer guarantee path and general terms, not a prediction of life; compare the seller offer and delivered guarantee.' },
    { label: 'Currys Business EA870840 Feefo review listing', href: currys, note: 'Search indexed 13 reviews and 4.5/5; detailed verified review text could not be independently read from the live page. Selected submissions only.' },
    { label: 'Reddit UK superautomatic purchase question', href: 'https://www.reddit.com/r/superautomatic/comments/1b80r63/replacment_machine_for_the_philips_ep223640/', note: '2024 buyer considered an EA870840 at £349, not an owner test or current quote; manual-wand trade-off discussed.' },
    { label: 'Home Tester Club EA870840 review index', href: 'https://www.hometesterclub.com/uk/en/reviews/krups-intuition-essential-ea870840-bean-to-cup-coffee-machine', note: 'Search-indexed owner context; detailed page blocked (402) during September 24, 2026 research, no quotations or failure-rate inference.' },
  ],
  comparisons: [
    { name: 'Krups Intuition Essential EA870840', quickDecision: 'Manual milk with simple black-coffee presets if exact UK stock appears.', priceClass: '£319.99 displayed but sold out Sep 24', dimensions: '350 × 240 × 400 mm listing, unmeasured', heating: 'Retailer-listed thermoblock', coffeeSetup: 'Ristretto, espresso, long and hot water', milkWorkflow: 'Manual steam wand', bestFor: 'Hands-on milk with preset coffee' },
    { name: 'Krups Arabica Digital EA817040', href: '/espresso-machine/krups-arabica-digital-ea817040/', quickDecision: 'Another manual-frother Krups with smaller manufacturer-listed reservoir.', priceClass: 'Check exact UK current stock', dimensions: 'Manufacturer lists 245 × 365 × 330 mm', heating: 'Automatic thermoblock', coffeeSetup: 'Bean-to-cup black coffee', milkWorkflow: 'Manual frother', bestFor: 'Compact counter' },
    { name: 'Krups Evidence One EA895N40', href: '/espresso-machine/krups-evidence-one-ea895n40/', quickDecision: 'Paired automatic milk, but checked £499 listing was sold out.', priceClass: '£499 sold-out NI listing Sep 24', dimensions: '15 cm outlet limit specified', heating: 'Automatic thermoblock', coffeeSetup: '12 recipes, 17 options', milkWorkflow: 'Paired automatic milk and hose cleaning', bestFor: 'Saved dual-milk drinks' },
  ],
  comparisonNote: 'Compare exact UK article, actual stock, warranty and who does the milk work. French YY4371FD footage and EA870810 documentation are not evidence of an identical delivered EA870840.',
  recommendations: [
    { kicker: 'Same milk approach', title: 'Krups Arabica Digital EA817040', text: 'Review a more compact manual-frother Krups and its exact-model evidence.', href: '/espresso-machine/krups-arabica-digital-ea817040/', linkLabel: 'Read Arabica Digital review', featured: true },
    { kicker: 'Hands-off milk', title: 'Krups Evidence One EA895N40', text: 'Paired milk drinks and more favourites, with cleaning and stock trade-offs.', href: '/espresso-machine/krups-evidence-one-ea895n40/', linkLabel: 'Read Evidence One review' },
    { kicker: 'Alternative brewer care', title: 'De’Longhi Magnifica Evo', text: 'Check an exact variant with user-accessible brewer and appropriate wand or carafe.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read Magnifica Evo review' },
    { kicker: 'Category choice', title: 'Superautomatic buying guide', text: 'Separate milk automation, maintenance and true stock from marketing labels.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read category guide' },
  ],
  faqs: [
    { question: 'Does the EA870840 make cappuccino automatically?', answer: 'No. Exact UK retail materials identify a manual steam nozzle. Brew the coffee, steam milk separately and clean the wand. Do not transfer Intuition Preference automatic-milk claims.' },
    { question: 'Is it the same as French YY4371FD?', answer: 'The independent MaxiCoffee film links that French package. It shows Intuition Essential family workflow but does not verify identical UK EA870840 components, instructions or warranty.' },
    { question: 'Are the tank dimensions independently tested?', answer: 'No. The 3 L reservoir and 350 × 240 × 400 mm size come from the exact Currys Business listing; Coffeedant did not measure the unit.' },
    { question: 'Are there two user profiles?', answer: 'Currys Business says two customised recipes can be saved. This should not be confused with the larger user-profile systems on other Intuition variants.' },
    { question: 'Does automatic cleaning cover the steam wand?', answer: 'No. The manufacturer support describes automatic internal routines and lists steam-nozzle care separately. Follow the delivered manual and clean milk-contact parts after use.' },
    { question: 'Is the listed £319.99 price obtainable?', answer: 'On September 24, 2026 DirectVacuums displayed it but marked the EA870840 out of stock. Its one-year reseller guarantee also differs from the two-year manufacturer term at Currys Business.' },
    { question: 'Can selected user reviews predict failure rates?', answer: 'No. Search-indexed review counts and a prospective buyer discussion have no representative denominator or independent fault diagnoses.' },
  ],
  finalTitle: 'Buy the manual-milk routine, not an out-of-stock discount',
  finalVerdict: [
    'The exact UK EA870840 brings listed black-drink presets, touch selection, two favourites and a wand. Its 3 L reservoir is a retailer specification, not our measurement. Krups support provides a parts and care path, while the independent French-package film offers only bounded family context.',
    'Two exact-model UK sellers showed no stock on September 24, 2026. A stocked price, delivered warranty and willingness to clean the wand should settle the choice. Do not expect automatic milk or app functions.',
  ],
  video: { id: 'iQFj3ltERzI', title: 'KRUPS INTUITION ESSENTIAL | Bean-to-cup coffee machine | The MaxiCoffee Test', creator: 'MaxiCoffee', published: '2020-09-12', note: 'Independent retailer demonstration (8:45) linked to French YY4371FD; family workflow only, commercial seller context. UK EA870840 plate, measured coffee results and exact capabilities are not established.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern} The shopping question did not come from a verified owner; selected review summaries lack a representative denominator.</p>
    <aside class="review-community-evidence" aria-labelledby="essential-owner-title"><h3 id="essential-owner-title">What prospective buyers and review indexes actually show</h3><ul>
    <li><strong>UK purchase consideration, 2024</strong><p>A buyer listed the EA870840 beside other bean-to-cup machines at a then-advertised £349. A commenter favoured wand texture for lattes. Neither person reported an EA870840 ownership test.</p></li>
    <li><strong>Selected review listings</strong><p>Currys search indexed 13 customer scores and a 4.5/5 aggregate, while another UK review platform indexed EA870840 feedback. Detailed entries were unavailable on live inspection. Ratings are selected reports, not a reliability rate.</p></li>
    </ul><p class="review-community-evidence-note">The context is readable here without outbound links in this panel. Source addresses and retrieval limits are in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

const built = buildUpgradeReview(profile);
export const upgradeKrupsIntuitionEssentialReviews: MachineReviewData[] = [built];
