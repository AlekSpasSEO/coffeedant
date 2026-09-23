import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.keurig.com/Home-Coffee-Makers/K-Duo-Plus%E2%84%A2-Single-Serve-%26-Carafe-Coffee-Maker/p/K-Duo-Plus-Single-Serve-Carafe-Coffee-Maker';
const support = 'https://support.keurig.com/?category=EXT_US_K_Duo_Plus&kdp-product=kdp-product-details&page=shell&shell=kdp-product';
const retailer = 'https://www.homedepot.com/p/Keurig-K-Duo-Plus-12-Cup-Black-Matte-Single-Serve-and-Carafe-Coffee-Maker-5000204978/311636446';
const video = 'https://www.youtube.com/watch?v=9VvWwr4lEzg';
const source = (n: number) => `<a href="#k-duo-plus-source-${n}">[source]</a>`;

const profile: UpgradeReviewProfile = {
  key: 'k-duo-plus', slug: '/coffee-machine/k-duo-plus/', productId: 'CD-CM-000002',
  brand: 'Keurig', model: 'K-Duo Plus', sku: 'US K-Duo Plus, retailer model 5000204978',
  category: 'Pod and drip coffee maker', brandPath: '/keurig/',
  title: 'Keurig K-Duo Plus review: one narrow brewer for pods and a thermal carafe',
  description: 'Research-led review of the US Keurig K-Duo Plus 5000204978, with pod and 12-cup carafe workflow, model boundaries, current listing context and upkeep.',
  verdictLabel: 'For a household alternating between one quick cup and a shared pot',
  verdict: 'Choose the K-Duo Plus when K-Cup convenience, ground-coffee carafes and a repositionable reservoir matter together. Skip it if you need espresso, a hotplate, detailed extraction controls or a guaranteed current in-stock price.',
  assessment: 'Its useful trick is two coffee formats in a relatively narrow station. Its compromises are fixed pod portions, limited brew control, carafe cleaning and uncertain live stock on an older model.',
  image: 'https://images.keurig.com/is/image/keurig/K-Duo-Plus-Single-Serve-Carafe-Coffee-Maker_en_general?dpr=off&fmt=jpg&hei=668&wid=668',
  imageAlt: 'Keurig K-Duo Plus pod and drip brewer with stainless thermal carafe',
  published: '2026-07-27', updated: '2026-09-23',
  price: { label: 'Home Depot US listed price', msrp: '$229.99', typical: 'Listed price for model 5000204978, not a verified in-stock checkout offer; Best Buy marks the same model sold out', currency: 'USD', numeric: '229.99', checked: 'September 23, 2026' },
  links: [
    { label: 'Check retailer stock and price', href: retailer, note: 'US listing, tax and actual availability vary', primary: true },
    { label: 'Read Keurig model details', href: official, note: 'Official features and dimensions; check live purchase options separately' },
  ],
  facts: [
    { label: 'Exact identity', value: 'US K-Duo Plus single-serve and thermal-carafe model 5000204978; not the glass-carafe K-Duo, Essentials or newer Hot & Iced Gen 2' },
    { label: 'Coffee formats', value: 'K-Cup pods for single cups; ground coffee in the supplied gold-tone mesh filter for carafes' },
    { label: 'Cup sizes', value: '6, 8, 10 or 12 oz single serve; 6, 8, 10 or 12 cups in the carafe mode' },
    { label: 'Carafe', value: 'Supplied 12-cup insulated thermal carafe, without a glass-carafe warming plate' },
    { label: 'Controls', value: 'Strong Brew, programmable carafe Auto Brew and Pause & Pour' },
    { label: 'Water tank', value: '60 oz removable reservoir, positionable behind, left or right' },
    { label: 'Body', value: 'Keurig lists 14.19 H by 7.68 W by 15.88 D inches; allow extra clearance for moving the reservoir' },
    { label: 'Care', value: 'Wash basket and carafe after use; clean needles and descale both brew paths per exact Keurig support guidance' },
  ],
  quickAnswers: [
    { question: 'Which K-Duo is this?', answer: 'The K-Duo Plus with a single front dispensing area, 12-cup thermal carafe and movable 60 oz tank; retailer model 5000204978.' },
    { question: 'Does it make espresso?', answer: 'No. It brews pod coffee and drip coffee, without an espresso pressure extraction or milk frother.' },
    { question: 'Can I make a single cup with grounds?', answer: 'The supplied mesh filter is for the carafe basket. A compatible reusable pod accessory is a separate purchase; confirm fit with Keurig.' },
    { question: 'Is the carafe heated?', answer: 'The insulated carafe retains heat passively. This Plus version does not use the glass-carafe hotplate.' },
    { question: 'What does the Strong button do?', answer: 'It offers a bolder setting for a single cup or carafe, but cannot change the amount of coffee sealed inside a disposable pod.' },
    { question: 'Is $229.99 a live deal?', answer: 'No. It is a dated Home Depot listing price, not proof of current stock or final checkout cost.' },
  ],
  bestFor: ['One counter location for K-Cup mornings and larger ground-coffee servings', 'A narrow layout that benefits from a movable tank', 'A household willing to rinse the basket and thermal carafe promptly'],
  avoidIf: ['You need pressure-brewed espresso or automatic milk', 'You want a hotplate or actively heated carafe', 'You require independently verified brew-temperature control or a guaranteed new-stock offer'],
  pros: ['Single-cup pod and batch-ground formats in one housing', 'Movable 60 oz reservoir makes placement flexible', 'Insulated 12-cup carafe needs no hotplate', 'Strong option, timer and pause-and-pour convenience'],
  cons: ['Older model stock is unclear across retailers', 'Limited control over pod dose and drip extraction', 'Two brew paths add cleaning work', 'No espresso, milk system, grinder or iced-specific program'],
  architecture: 'a North American pod and drip brewer with one front station, a K-Cup chamber, a ground-coffee basket and a thermal carafe',
  identityBoundary: 'The 5000204978 retailer model matters: the wider glass-carafe K-Duo, K-Duo Essentials and current Hot & Iced Gen 2 should not be described as this thermal-carafe Plus version.',
  primaryStrength: 'The same counter station handles a one-person K-Cup morning and a larger pot from grounds, while the tank can move to suit the space.',
  primaryLimit: 'Stock is uncertain, extraction control is sparse and the carafe holds heat passively rather than on a hotplate.',
  setupNote: 'Identify the thermal-carafe Plus model on the carton before setting up. Confirm the 60 oz tank can be detached in the chosen position, clean the removable food-contact parts and run the instructed water-only rinse through both brew modes.',
  espressoNote: 'Single-serve brewing takes a K-Cup pod and a chosen 6 to 12 oz volume. The dose sealed inside a pod is fixed; choosing the largest cup can dilute the same grounds. Judge taste with one pod and one cup size before moving to Strong Brew.',
  milkNote: 'The 12-cup thermal carafe is the second service mode, not a milk system. Its insulation avoids a warming plate but temperature falls with time and repeated lid opening. Rinse promptly and preheat only when permitted by Keurig care instructions.',
  workflowNote: 'Switch between the pod holder and the separate ground-coffee basket, position a cup or the carafe, then select the corresponding mode and size. Auto Brew is for the carafe routine; empty grounds and rinse the vessel after serving.',
  buildNote: 'The official 7.68-inch body width does not include every reservoir position. Check reachable tank removal, lid clearance and safe carafe landing room in the actual kitchen.',
  featuresNote: 'Strong Brew, four sizes per format, a carafe timer and a pause-and-pour interval are useful only if the household uses both formats; none adds a grinder, pressure espresso or an actively heated carafe.',
  valueNote: 'Home Depot displayed $229.99 for model 5000204978 on September 23, 2026, while Best Buy labeled that model sold out. Compare a verifiable new offer, warranty and replacement-carafe availability before using that number as a budget.',
  ownerPattern: 'Owner discussions raise carafe-pouring, refill placement, reusable-pod compatibility and cross-path flow questions. Some threads refer to the glass-carafe K-Duo, so they are not direct proof of a Plus-specific fault.',
  ownerCaution: 'The online reports are self-selected, mix K-Duo revisions and lack a unit denominator. They suggest checks at purchase and during the return window, not a failure rate.',
  maintenanceNote: 'Keurig support separates pod-holder and reservoir care from descaling. Empty the basket and wash the carafe after use; check the exact Plus support instructions before cleaning a needle or running solution through either path.',
  dimensions: {
    espresso: { label: 'Cup brewing', score: 7.1, claim: 'Four cup sizes and Strong Brew provide basic control, but a sealed pod fixes the dose.', consequence: 'Start with a shorter serving for a stronger cup; do not confuse this with espresso extraction.', status: 'Official US product listing and independent exact-model kitchen review checked September 23, 2026', signals: ['K-Cup single servings from 6 to 12 oz', 'Strong option without a user-adjustable pod dose', 'The independent kitchen review liked convenience but found limited customization'] },
    milk: { label: 'Carafe serving', score: 7.7, claim: 'The supplied 12-cup thermal carafe supports batch serving without a hotplate.', consequence: 'Plan the pot around a real serving window; thermal retention is not active reheating.', status: 'Official Plus product page and independent carafe-use report checked September 23, 2026', signals: ['Six to twelve cup carafe settings, with a 12-cup insulated vessel', 'Ground coffee goes into the supplied gold-tone basket', 'Heat retention varies with fill level, preheating and serving time'] },
    workflow: { score: 8.1, claim: 'One narrow front station and a repositionable tank can simplify a mixed-size household.', consequence: 'Pod and carafe modes still have separate preparation and cleanup.', status: 'Official layout and two independent exact-model reviews checked September 23, 2026', signals: ['60 oz tank shifts behind, left or right', 'Cup or carafe uses the same dispensing area', 'Carafe Auto Brew and Pause & Pour add convenience with conditions'] },
    build: { score: 7.0, claim: 'The removable reservoir, basket and thermal carafe expose ordinary care tasks.', consequence: 'Check fit, warranty and replacement parts for an older SKU.', status: 'Official support and retailer model number checked September 23, 2026', signals: ['14.19 H by 7.68 W by 15.88 D inch published body', 'Two water paths need exact-model maintenance', 'No controlled long-term defect rate is available'] },
    features: { score: 7.6, claim: 'The useful extras are Strong Brew, four sizes per mode, a timer and Pause & Pour.', consequence: 'None controls bloom, temperature or grind, and there is no milk or espresso function.', status: 'Keurig feature list and independent exact-model evaluation checked September 23, 2026', signals: ['Single cup and ground-coffee carafe in one unit', 'No user-adjustable water temperature listed for this model', 'No active hotplate on the thermal-carafe Plus'] },
    value: { score: 6.9, claim: 'A $229.99 listed price is less useful without verified current stock.', consequence: 'Compare total pod cost, ground-coffee cost, carafe condition and seller warranty.', status: 'Home Depot listed price and Best Buy sold-out status checked September 23, 2026', signals: ['$229.99 Home Depot listing, availability not verified', 'Best Buy lists 5000204978 as sold out', 'Pods, water filters and descaling solution add running cost'] },
  },
  sources: [
    { label: 'Keurig K-Duo Plus official product page', href: official, note: 'US manufacturer model features, sizes, thermal carafe, tank and dimensions, checked September 23, 2026.' },
    { label: 'Keurig K-Duo Plus support', href: support, note: 'Official product-specific cleaning, descaling, tank-adjustment and reusable-filter support route.' },
    { label: 'Home Depot model 5000204978 listing', href: retailer, note: '$229.99 listed US price checked September 23, 2026; live stock and checkout not established.' },
    { label: 'The Spruce Eats K-Duo Plus hands-on review', href: 'https://www.thespruceeats.com/keurig-k-duo-plus-review-5073169', note: 'Cheyenne Elwell purchased and evaluated the exact thermal-carafe Plus; updated January 26, 2024.' },
    { label: 'Doresoom Reviews: K-Duo Plus video', href: video, note: 'Independent exact-model demonstration, published March 25, 2022; visual workflow, not Coffeedant testing.' },
    { label: 'Keurig K-Duo Plus product support', href: support, note: 'Official help for water filters, descaling and multi-position reservoir; specific procedure must match delivered model.' },
    { label: 'Keurig K-Duo Hot & Iced Gen 2 product page', href: 'https://www.keurig.com/p/K-Duo-hot-and-iced-Single-Serve-Carafe-Coffee-Maker-Gen2', note: 'Official newer model contrast; not an authority for Plus specifications.' },
    { label: 'StudyFinds K-Duo Plus evaluation', href: 'https://studyfinds.com/keurig-k-duo-plus-coffee-maker-review/', note: 'Terri Williams one-week exact-model review, December 8, 2023; observed serving and tank routine.' },
    { label: 'Best Buy K-Duo Plus model listing', href: 'https://www.bestbuy.com/product/keurig-k-duo-plus-12-cup-coffee-maker-and-single-serve-k-cup-brewer-black/JX72HWGGTZ', note: '5000204978 identity and sold-out status checked September 23, 2026; displayed clearance price is not purchasable stock.' },
    { label: 'Owner question on K-Duo Plus flow', href: 'https://www.reddit.com/r/keurig/comments/1go4arn/kduo_leaks_water_into_pot_side_when_brewing_k_cup/', note: 'Self-selected mixed-model owner discussion; one commenter identifies a Plus unit, not a defect-rate estimate.' },
    { label: 'Owner reusable-pod discussion', href: 'https://www.reddit.com/r/keurig/comments/17g7sqk/duo_plus_reusable_k_cups/', note: 'Self-selected fit question, October 2023; verify any accessory against Keurig support.' },
  ],
  comparisons: [
    { name: 'Keurig K-Duo Plus', quickDecision: 'Choose for pods plus a thermal carafe at one narrow dispensing station.', priceClass: '$229.99 dated US listing, stock unclear', dimensions: '7.68 W by 14.19 H by 15.88 D in, before alternate tank placement', heating: 'Pod and drip paths, passive thermal retention', coffeeSetup: 'K-Cup or ground-coffee basket; no grinder', milkWorkflow: 'No milk system', bestFor: 'Mixed solo and group coffee' },
    { name: 'Breville Luxe Brewer Thermal', href: '/coffee-machine/breville-luxe-brewer-thermal-bdc465/', quickDecision: 'Choose a dedicated ground-coffee brewer when pod compatibility is unnecessary.', priceClass: 'Higher-class dedicated brewer', dimensions: 'Confirm current Breville dimensions', heating: 'Drip brewing and thermal serving', coffeeSetup: 'Separate grinder and ground coffee', milkWorkflow: 'No milk system', bestFor: 'Batch coffee priority' },
    { name: 'Nespresso Vertuo Plus', href: '/espresso-machine/nespresso-vertuo-plus/', quickDecision: 'Choose a capsule-only routine if carafe-sized ground-coffee batches are unnecessary.', priceClass: 'Capsule-machine entry class', dimensions: 'Compact capsule station', heating: 'Capsule extraction', coffeeSetup: 'Vertuo capsules; no grounds basket', milkWorkflow: 'Milk accessory separate', bestFor: 'Solo capsule convenience' },
  ],
  comparisonNote: 'Do not mistake the Plus thermal carafe for the original K-Duo glass carafe or the newer Hot & Iced Gen 2. Compare live seller stock, warranty and consumable cost on the same date.',
  recommendations: [
    { kicker: 'Ground-coffee priority', title: 'Breville Luxe Brewer Thermal', text: 'Choose a purpose-built thermal drip station when you do not need K-Cups.', href: '/coffee-machine/breville-luxe-brewer-thermal-bdc465/', linkLabel: 'Read the Luxe Brewer review', featured: true },
    { kicker: 'Capsules only', title: 'Nespresso Vertuo Plus', text: 'Compare a single-cup capsule path without the basket and 12-cup carafe.', href: '/espresso-machine/nespresso-vertuo-plus/', linkLabel: 'Read the Vertuo Plus review' },
    { kicker: 'Fresh grounds', title: '1Zpresso K-Ultra', text: 'A hand grinder adds control to a separate ground-coffee setup, but also adds effort.', href: '/grinder/1zpresso-k-ultra/', linkLabel: 'Read the grinder review' },
    { kicker: 'Broader brewer search', title: 'Coffee maker index', text: 'Explore other coffee makers before paying an uncertain older-model listing.', href: '/coffee-machine/', linkLabel: 'Browse coffee makers' },
  ],
  faqs: [
    { question: 'Does K-Duo Plus make espresso?', answer: 'No. Neither its pod cup nor drip carafe is pressure-extracted espresso. Strong Brew does not change that category.' },
    { question: 'What is the difference between K-Duo and K-Duo Plus?', answer: 'This Plus review covers a single front station, adjustable reservoir and insulated thermal carafe. Many original K-Duo or Essentials versions use a wider glass-carafe layout. Confirm the exact carton and model number.' },
    { question: 'Can K-Duo Plus brew a full 12-cup pot?', answer: 'It offers 6, 8, 10 and 12-cup carafe settings with ground coffee in its basket. Fill the shared reservoir sufficiently and do not assume that 12 coffee-maker cups equal twelve large mugs.' },
    { question: 'Does it have a warming plate?', answer: 'No warming plate is part of the Plus thermal-carafe proposition. Heat retention depends on insulation, fill, preheating and serving time.' },
    { question: 'Can I use reusable K-Cup filters?', answer: 'Keurig support has a My K-Cup accessory guide. Confirm the exact accessory generation and fit; a community fit report is not a manufacturer compatibility guarantee.' },
    { question: 'Is the water tank removable?', answer: 'Yes. Keurig specifies a 60 oz removable reservoir that can sit at the rear or either side; check the footprint and removal clearance in your actual kitchen.' },
    { question: 'How do I clean and descale both sides?', answer: 'Empty grounds, wash food-contact parts and follow the K-Duo Plus support procedure for the pod path, carafe path and descaling. Do not transfer a different Gen 2 sequence to this model.' },
    { question: 'Is the listed $229.99 price guaranteed?', answer: 'No. It was a Home Depot listing on September 23, 2026, while Best Buy marked the SKU sold out. Confirm current stock, seller, condition, warranty, tax and final price.' },
  ],
  finalTitle: 'Buy the two-format routine, not an assumed deal',
  finalVerdict: [
    'The K-Duo Plus is a sensible fit when one household truly uses pods for quick cups and grounds for shared thermal-carafe coffee. The movable reservoir and single front station are practical, not a promise of café-level control.',
    'Check the exact 5000204978 unit and live warranty-backed stock first. If only one format matters, a simpler dedicated brewer can be a better long-term purchase.',
  ],
  video: { id: '9VvWwr4lEzg', title: 'Keurig K-Duo Plus Coffee Maker Review and Demonstration', creator: 'Doresoom Reviews', published: '2022-03-25', note: 'Independent visual demonstration of the thermal-carafe Plus; product specifications and current listing context checked separately.' },
  dimensionDiagnostics: {
    espresso: [
      { signal: 'The largest pod cup tastes thin', guidance: 'Try a smaller cup from the same pod; a fixed capsule dose spread across more water will taste different.' },
      { signal: 'A pod tastes harsh or flat', guidance: 'Try a fresh pod, a smaller cup or a different coffee; the machine offers no grind or temperature dial to correct the dose.' },
    ],
    milk: [
      { signal: 'The carafe cools sooner than expected', guidance: 'Check fill level, lid fit, serving interval and whether the manufacturer permits safe preheating.' },
      { signal: 'The pot tastes weak', guidance: 'Check fresh grounds, basket fill and selected cup count; change one of these at a time.' },
    ],
  },
  sectionOverrides: {
    espresso: `<p>Single-cup mode is for a K-Cup pod, not espresso. Select 6, 8, 10 or 12 ounces. A sealed pod limits the dose, so a larger drink may taste weaker even if the machine runs perfectly. Strong Brew can alter the brewing routine, but it does not add coffee to the pod. Start with one familiar pod at a smaller cup size and compare the ordinary and Strong settings on separate mornings. ${source(1)} ${source(4)}</p>
      <p>The independent kitchen review valued convenient single servings while finding the settings less customizable than a manual brewer. This is a more useful performance boundary than a claim that Strong Brew has a measured extraction advantage; no Coffeedant sample or extraction-yield measurement exists. Variety comes from changing pod choice and cup size, not from adjusting grind, dose or water temperature. ${source(4)}</p>
      <p>If a cup is watery, first make sure the selected size and inserted pod match the desired strength. If it is unexpectedly short, inspect the tank seating and consult Keurig's exact-model support rather than compensating by repeatedly brewing through the same used pod. If coffee tastes stale, check pod age, water and cleanliness before diagnosing a mechanical fault. This cup-brewing score describes controllability and household convenience, not espresso quality.</p>`,
    milk: `<p>The second rating is <strong>carafe serving</strong>, because the K-Duo Plus has no steam wand, frother or milk circuit. Its supplied insulated vessel takes up to 12 coffee-maker cups, with 6, 8, 10 and 12-cup settings for ground coffee. A thermal wall retains heat without a powered plate, but it cannot reheat a pot and its practical holding time depends on initial temperature, fill level and how often the lid is opened. ${source(1)} ${source(8)}</p>
      <p>Put fresh grounds in the gold-tone mesh basket and match the selected pot size to the actual drinkers. Twelve small marked cups are not twelve large mugs. If the household pours only two mugs, the six-cup setting may waste less coffee; if it hosts a crowd, plan how many carafes and tank refills will be needed. The supplied filter removes a mandatory paper-filter purchase but must be emptied and washed. A paper filter may change body and cleanup, if compatible with the basket. ${source(1)} ${source(4)}</p>
      <p>The Spruce Eats reported that the carafe kept coffee warm for several hours in its kitchen, and Terri Williams described similar utility in a separate one-week evaluation. Those experiences are not a Coffeedant temperature curve or an assurance for every home. Pouring behavior, lid seating and cleaning are worth checking during the seller's return period. Never put the thermal carafe on a stove or hotplate, and follow the exact care instructions for its parts. ${source(4)} ${source(8)}</p>`,
    workflow: `<p>The same front area accepts either a mug or the thermal carafe. This is the Plus design distinction: it avoids two separated front serving bays, while the 60 oz tank can be placed behind the unit or to either side. The published body is 7.68 inches wide, 14.19 inches tall and 15.88 inches deep in one configuration. Tank position, lid lift and access to a wall outlet may change the space you actually need. Measure the route for removing a full tank, not only the static base. ${source(1)} ${source(4)}</p>
      <p>A pod morning asks for water, a pod, a cup and a size selection. A carafe morning asks for grounds, the basket, an adequate tank fill, an empty insulated vessel and a different mode. Programming the carafe for a morning brew makes sense only after setting the clock and preparing fresh ingredients safely. Pause & Pour is a short interruption to a continuing pot, not a mode for abandoning the brew half finished. ${source(1)} ${source(5)}</p>
      <p>Count cleanup when evaluating speed. Dispose of the spent pod without touching hot needles, empty wet grounds, rinse the mesh filter, clean the carafe and empty the drip tray. A family alternating between formats can still save a counter footprint; someone who never makes a carafe will carry extra parts for no benefit. This rating is about the complete morning, not an unmeasured seconds-per-cup benchmark.</p>`,
    build: `<p>The Plus body combines a removable 60 oz tank, pod holder, ground-coffee basket and insulated carafe. Confirm that the intended reservoir position leaves room to lift and refill it, that the thermal carafe lid seats correctly, and that the drip tray and filter are easy to reach. A published 7.68-inch body width alone cannot guarantee a workable under-cabinet setup. ${source(1)} ${source(2)}</p>
      <p>Empty the grounds and wash the basket after carafe service; rinse and dry the carafe in accordance with Keurig's instructions. The pod side needs attention to the holder and needles, while both paths need the correct descaling procedure. Do not import instructions for the glass-carafe K-Duo or newer Gen 2, and do not open the powered enclosure to diagnose an internal leak. Stop use and seek Keurig or qualified support if water appears in the wrong path or around electrical parts. ${source(2)} ${source(6)}</p>
      <p>Neither independent kitchen review is a controlled multi-year durability study. Owner complaints identify checks, such as delivery condition and both-path flow, but do not supply a denominator for a reliability percentage. Replacement carafe and lid availability matter more for an older SKU than a generic plastic-versus-metal claim. The build rating reflects documented access and support with uncertainty intact.</p>`,
    features: `<p>Four sizes for pods and four for the carafe, Strong Brew, programmable carafe brewing and Pause & Pour make a coherent convenience set. The repositionable 60 oz reservoir is unusually useful when a wall or cabinet constrains one side. The gold-tone filter is included, while any compatible reusable single-serve pod accessory is a separate choice. The ordinary K-Duo glass-carafe model and newer Hot & Iced Gen 2 have different equipment, so their photos and feature lists do not substitute for the Plus page. ${source(1)} ${source(7)}</p>
      <p>These controls do not turn it into a precision drip brewer. Keurig does not list owner-adjustable brew temperature, bloom timing or flow profile for this exact page. The machine also lacks an integrated grinder, espresso pressure extraction, active carafe warming and automatic milk. A Strong label should be judged by the cup at a consistent size, not treated as evidence of a particular measured caffeine increase.</p>
      <p>Buy the feature that changes a repeated task. A one-person household that keeps a bag of grounds but only occasionally hosts guests may appreciate the flexibility. A daily batch brewer may prefer a dedicated ground-coffee machine with more control, while a pod-only household may pay less for a simpler device. Feature breadth is valuable when each path actually gets used.</p>`,
    value: `<p>On September 23, 2026, Home Depot displayed $229.99 for the US 5000204978 listing. Best Buy displayed a sold-out status for that same model, despite an apparent clearance price. A displayed old or clearance number is not evidence that a new unit can be purchased at that price. Keurig's official page identifies the product and purchase options but the accessible text did not establish a stable direct checkout price. ${source(3)} ${source(9)}</p>
      <p>Compare a live offer with a current dual-format alternative only after checking seller identity, delivery, warranty, included original thermal carafe and return terms. A used machine needs additional checks for tank seals, pod path, basket path and carafe lid condition; a cheap machine with missing proprietary parts may cost more in practice. Never treat a marketplace image of a glass carafe as proof it is this Plus model.</p>
      <p>Running cost changes with the ratio of pods to grounds. Individually packaged pods buy convenience but can cost more per drink and create more packaging than the same household's ground-coffee carafe. The carafe path adds filter care and potentially a separate grinder. Water filters and descaling solution also belong in a household budget. Without a verified market basket and use pattern, a universal cost-per-cup figure would be invented.</p>`,
    ownership: `<p>Owner discussions suggest checking three things early: does the vessel pour cleanly, does the chosen tank position fit the kitchen, and does a separately bought reusable pod actually close correctly in the holder? A cross-path flow thread includes a Plus owner, but it also discusses other K-Duo versions. These are questions for a specific delivered unit, not evidence of a design-wide failure rate. ${source(10)} ${source(11)}</p>
      <p>The older model name creates a further trap. Original K-Duo and Essentials comments often refer to glass-carafe pouring, heating-plate settings or different internal layouts. This review does not transfer their anecdotes to the Plus thermal carafe. If a seller's title, photograph and model number disagree, ask for a rating-plate photo or walk away rather than trying to infer a revision from the listing prose.</p>
      <p>Check both paths during the return window using safe, ordinary water-only and coffee cycles. Record the model and purchase proof, note any unexpectedly short cup or leakage, and contact Keurig support before opening electrical or internal-water parts. A functioning week in one kitchen is reassuring but cannot establish service life; an isolated complaint cannot establish the opposite.</p>`,
  },
};

const trimFirstParagraph = (html: string) => html.replace(/<p>[\s\S]*?<\/p>/, '');
const trimSecondParagraph = (html: string) => {
  let seen = 0;
  return html.replace(/<p>[\s\S]*?<\/p>/g, (paragraph) => (++seen === 2 ? '' : paragraph));
};

const review = buildUpgradeReview(profile);
export const upgradeKeurigReviews: MachineReviewData[] = [{
  ...review,
  alternatives: [
    { name: 'Breville Luxe Brewer Thermal', reason: 'Choose dedicated ground-coffee brewing when pods are unnecessary.', href: '/coffee-machine/breville-luxe-brewer-thermal-bdc465/' },
    { name: 'Nespresso Vertuo Plus', reason: 'Choose a capsule-only station if a ground-coffee carafe would go unused.', href: '/espresso-machine/nespresso-vertuo-plus/' },
  ],
  article: {
    ...review.article,
    sections: review.article.sections.map((section) => ({
      ...section,
      html: ['orientation', 'setup'].includes(section.id) ? trimSecondParagraph(section.html)
        : ['comparisons', 'recommendations'].includes(section.id) ? trimFirstParagraph(section.html)
          : section.html,
    })),
  },
}];
