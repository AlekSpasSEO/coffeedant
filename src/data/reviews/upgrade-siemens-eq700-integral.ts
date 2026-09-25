import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const officialProduct = 'https://www.siemens-home.bsh-group.com/ie/en/mkt-product/TQ717GB3';
const officialFamily = 'https://www.siemens-home.bsh-group.com/uk/en/mkt-category-page/coffee-machine/automated-freestanding/eq700';
const costco = 'https://www.costco.co.uk/Appliances/Coffee-Machines-Accessories/Siemens-EQ700-Bean-to-Cup-Coffee-Machine-TQ717GB3/p/9717';
const video = 'https://www.youtube.com/watch?v=ac0AQ0BOSXM';
const ao = 'https://ao.com/product/tq717gb3-siemens-bean-to-cup-coffee-machine-stainless-steel-104408-65.aspx';
const donaghy = 'https://donaghybros.co.uk/siemens-tq717gb3-fully-automatic-coffee-machine-stainless-steel.html';
const homeConnect = 'https://www.home-connect.com/global/en/works-with-home-connect/coffee-machines';
const ownerComparison = 'https://www.reddit.com/r/superautomatic/comments/199mofj/delonghi_dinamica_or_siemens_eq700/';
const ownerAdvice = 'https://www.reddit.com/r/superautomatic/comments/1oyupgx/help_please_i_want_to_buy_a_coffee_machine_i_was/';
const ownerRepair = 'https://www.reddit.com/r/superautomatic/comments/1ob02h8/breakdown_siemens_eq700_grain_machine/';
const ownerStrength = 'https://www.reddit.com/r/superautomatic/comments/1petm1s/siemens_eq6_plus_weak_coffee_would_the_eq700_be/';
const amazon = 'https://www.amazon.co.uk/SIEMENS-Automatic-coffeeWorld-Integrated-TQ717GB3/dp/B0DG628HCW';
const hero = 'https://media3.bsh-group.com/Product_Shots/23033501_TQ713D03_STP_def.webp';

const profile: UpgradeReviewProfile = {
  key: 'siemens-eq700-integral-tq717gb3-uk',
  slug: '/espresso-machine/siemens-eq700-integral/',
  productId: 'CD-EM-000241',
  brand: 'Siemens',
  model: 'EQ700 Integral TQ717GB3',
  sku: 'TQ717GB3, UK and Ireland 230 V market generation',
  category: 'Superautomatic espresso machine',
  brandPath: '/espresso-machine/',
  title: 'Siemens EQ700 Integral review: smart workflow, model-detail traps',
  description: 'Research-led Siemens EQ700 Integral TQ717GB3 review covering its 5-inch display, integrated milk container, Home Connect, 30 favourites, cold drinks, care and UK price.',
  verdictLabel: 'A polished family automatic that rewards an exact-model check before purchase',
  verdict: 'The UK and Ireland Siemens EQ700 Integral TQ717GB3 is built around a 5-inch iSelect display, integrated 0.7 L milk container, 2.4 L water tank, 320 g hopper, ceramic grinder, OneTouch DoubleCup, autoMilk Clean, coffeeWorld and Home Connect. The interface and thirty saved favourites suit a household that wants many repeatable drinks without manual espresso preparation. The complication is the market record: Siemens marks this exact product no longer available while retailers still list stock, and some retailer claims conflict with Siemens family documentation. Costco displayed £929.98 on September 25, 2026. Buy only after checking the delivered rating plate, warranty, included milk parts, app region and the exact cup-preheat feature rather than relying on a generic EQ700 feature list.',
  assessment: 'Excellent screen-led convenience, with enough regional and catalog ambiguity to make model verification essential.',
  image: hero,
  imageAlt: 'Siemens official product image of an EQ700 Integral automatic coffee machine with integrated milk container',
  published: '2026-01-05',
  updated: '2026-09-25',
  price: { label: 'Costco UK listed price', msrp: '£929.98', numeric: '929.98', currency: 'GBP', typical: 'Exact TQ717GB3 listing; stock and warehouse pricing can vary', checked: 'September 25, 2026' },
  links: [
    { label: 'Check Costco UK listing', href: costco, note: 'Exact TQ717GB3 listing; price, membership and stock can change', primary: true },
    { label: 'Check Siemens product record', href: officialProduct, note: 'Official Ireland record; Siemens marks the exact product no longer available' },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'TQ717GB3, UK and Ireland EQ700 Integral generation' },
    { label: 'Milk system', value: 'Integrated removable 0.7 L container' },
    { label: 'Display', value: '5-inch iSelect full-touch display' },
    { label: 'Water and beans', value: '2.4 L tank and 320 g single hopper' },
    { label: 'Dimensions', value: '380 × 352 × 467 mm H×W×D' },
    { label: 'Saved drinks', value: 'Up to 30 customised favourites, not 30 separate people profiles' },
    { label: 'Connected features', value: 'Home Connect, coffeeWorld and additional app-led recipes subject to account, region and service availability' },
    { label: 'Cleaning', value: 'autoMilk Clean plus removable brewing unit and guided cleaning, descaling and calc’nClean programmes' },
    { label: 'Market status', value: 'Official product page says no longer available; retailer listings remain' },
    { label: 'Electrical region', value: 'UK and Ireland appliance; do not import into an incompatible voltage or plug market' },
  ],
  quickAnswers: [
    { question: 'Which EQ700 is reviewed?', answer: 'The UK and Ireland TQ717GB3 Integral with a built-in milk container. The Classic hose models, TQ713, TQ707, TQ727, TP-series and newer iAroma revisions can differ.' },
    { question: 'Is it discontinued?', answer: 'Siemens marks the exact TQ717GB3 product no longer available, but current retailer pages still list it. Treat it as remaining or channel stock and confirm warranty start and support.' },
    { question: 'Does it save 30 user profiles?', answer: 'The exact listing supports up to 30 customised favourites. That is a library of saved drinks, not evidence of 30 isolated household accounts.' },
    { question: 'Does it make two milk drinks?', answer: 'Siemens documents doubleCup for two specialty coffees, including milk drinks, on the EQ700 iAroma family. Confirm the exact programme on the delivered TQ717GB3 software.' },
    { question: 'Does autoMilk Clean replace washing?', answer: 'No. The steam rinse reduces residue after milk drinks, but the container, tube, outlet, drip tray and brew unit still need the manual care routine.' },
    { question: 'Does it have beanIdent?', answer: 'Do not assume so. One retailer page attributes beanIdent to TQ717GB3, while Siemens positions beanIdent as an EQ900 distinction in its current family comparison.' },
  ],
  bestFor: [
    'A UK or Ireland household that values a large touch interface and many saved drinks',
    'Milk-drink users who prefer a fridge-storable integrated container over a loose hose',
    'Someone prepared to maintain the brew unit and verify connected services before depending on them',
  ],
  avoidIf: [
    'You are shopping in a 120 V market or considering an unsupported import',
    'You expect manual dose, yield, pressure or temperature profiling',
    'A slow interface, deep body or app dependency would become daily friction',
  ],
  pros: [
    'Large 5-inch display and up to 30 saved favourite recipes',
    'Integrated milk container, OneTouch DoubleCup and automatic post-milk steam rinse',
    'Large 2.4 L tank, 320 g hopper and removable brewing unit',
    'Home Connect and coffeeWorld broaden recipe discovery beyond the front panel',
  ],
  cons: [
    'Exact model is officially unavailable even while channel stock remains',
    'Deep 467 mm body needs more working clearance than the width suggests',
    'Retailer feature lists conflict on beanIdent and active cup warming',
    'Automation cannot remove physical milk, tray and brew-unit cleaning',
  ],
  architecture: 'a connected single-hopper bean-to-cup machine with a ceramic grinder, removable brewing unit, screen-led recipes and an integrated milk container',
  identityBoundary: 'This review scores TQ717GB3 for the UK and Ireland market. It does not silently transfer claims from EQ700 Classic hose models, TQ713/TQ707/TQ727 variants, newer TQ7X5 iAroma machines, EQ900, 120 V imports or unknown marketplace bundles.',
  primaryStrength: 'The 5-inch interface, thirty favourites, paired-drink option and integrated milk workflow make a large menu manageable for several repeat users.',
  primaryLimit: 'The exact model is at the edge of availability, and conflicting retailer copy means support, software and feature verification matter more than the EQ700 family name.',
  setupNote: 'Photograph the rating plate and confirm TQ717GB3, UK electrical compatibility, seller, invoice, warranty and return window before discarding packaging. Allow more than 467 mm of counter depth for the cord, doors, tank, bean lid and brew-unit access. Install the water filter only through the documented menu, enter water hardness, rinse the milk parts, connect Home Connect if the account region is supported, and build one reference espresso before saving a large favourites library. Do not enable remote routines until every user understands that a cup and clean milk system must be ready.',
  espressoNote: 'The ceramic grinder, aromaSelect choices, strength controls, doubleShot logic and saved volumes give useful automatic adjustment, but they do not expose manual dose, pressure, flow or puck preparation. Caffeine Mag’s independent video examines coffee quality, grinder behaviour and drink settings on an EQ700, while owner comparisons disagree about strength against De’Longhi machines. Treat the screen as a repeatability tool: begin with a sensible black-drink volume, medium fresh beans and one grinder change at a time, then judge taste rather than the pump-pressure headline.',
  milkNote: 'Integral means the milk container is built into the left side and can be removed for refrigeration. OneTouch drinks and paired milk recipes reduce handling, while autoMilk Clean sends steam through the path after use. That purge is not a sanitation guarantee. Empty and wash the container, inspect the tube and connectors, clean the outlet and follow storage limits. Milk type, fill level, recipe ratio, outlet cleanliness and software setting can all change heat and foam, so owner comments about temperature cannot be converted into a universal result.',
  workflowNote: 'The machine’s best argument is organization. A clear 5-inch interface, 30 favourites, coffeeWorld, pot function, cold-labelled recipes and Home Connect reduce menu hunting once configured. The same layers can feel slow if the household wants only espresso and cappuccino, and one owner discussion specifically criticises interface responsiveness. Automatic rinses also use water and fill the tray. Judge the complete routine from wake-up through tray, milk and brew-unit care, not only the number of screen icons.',
  buildNote: 'The official record lists a 380 × 352 × 467 mm body, 2.4 L water tank, 320 g hopper and one bean container. Retailers list roughly 10.5 kg and 1,500 W. The removable brewing unit is a meaningful ownership advantage because coffee residue remains accessible. Siemens still provides manuals, repair services, spare-part routes and cleaning products, but that does not establish the future stock or cost of every display, valve, grinder, hose or electronic board for TQ717GB3.',
  featuresNote: 'Useful features include aromaSelect, iSelect, coffeeWorld, Home Connect, favourites, cold-labelled drinks, OneTouch DoubleCup, pot function and autoMilk Clean. Two catalog conflicts must remain visible. Costco attributes beanIdent to TQ717GB3, while Siemens calls beanIdent an EQ900 advantage; the current Siemens FAQ also ties an active top cup warmer to TQ727 prefixes even though some TQ717 retailer listings advertise cup warming. The review therefore scores only the functions that the exact official record supports and tells buyers to verify the others on the delivered unit.',
  valueNote: 'Costco UK displayed £929.98 for TQ717GB3 on September 25, 2026. Donaghy Bros displayed £1,199 but showed an out-of-stock notification, and Siemens called the exact product no longer available. This is not a stable MSRP market. Compare the delivered warranty, new versus returned condition, milk accessories, filter, app region, shipping and service route with a current De’Longhi Dinamica Plus, Miele CM 6360 or simpler Philips 5400. A low clearance price is only good value if support and exact features remain acceptable.',
  ownerPattern: 'Owner discussions commonly value the quiet automatic workflow, wide recipe range, removable internals and integrated or hose-fed milk choices. Repeated cautions concern screen speed, deep counter space, drink strength, tray water, milk temperature, app dependence and the need to keep the brew unit and milk path clean.',
  ownerCaution: 'These reports are self-selected and mix Integral and Classic bodies, several TQ and TP suffixes, software versions, countries, beans, water conditions and ages. One blind comparison, one slow interface or one loose internal hose cannot establish a representative preference, failure rate or expected lifespan for TQ717GB3.',
  maintenanceNote: 'Use the on-screen programmes and exact manual for milk cleaning, tray and grounds-bin care, brew-unit rinsing, cleaning tablets, descaling and calc’nClean. Remove the brewing unit only as directed, rinse it with warm water and a gentle brush, and do not use detergent, vinegar or a dishwasher. A failure that sends coffee into the tray needs diagnosis and service rather than repeated descaling or speculative disassembly.',
  dimensions: {
    espresso: dim(7.9, 'The grinder, aroma choices, strength logic and saved volumes support consistent automatic coffee.', 'Good for repeat favourites, but buyers seeking manual ratios and very strong small shots have less control.', 'Official controls, independent video and conflicting self-selected comparisons', ['Ceramic grinder with adjustable settings and one bean hopper.', 'Strength, volume, aroma and doubleShot-style choices are recipe controls.', 'No Coffeedant dose, temperature, extraction or taste measurements.']),
    milk: dim(8.7, 'The integrated 0.7 L container, paired recipes and automatic steam rinse create a strong milk workflow.', 'Excellent for frequent shared milk drinks if the household accepts physical container and outlet cleaning.', 'Exact-model documentation, independent demonstration and owner context', ['Removable integrated container distinguishes Integral from Classic.', 'One-touch recipes and DoubleCup reduce cup movement.', 'autoMilk Clean supplements rather than replaces manual washing.']),
    workflow: dim(9.0, 'A large display, thirty favourites, app control and broad recipe library make complex choice approachable.', 'The depth, automatic rinses and occasional interface delay reports prevent a friction-free score.', 'Official interface record, independent video and owner discussion', ['5-inch iSelect display and up to 30 saved favourites.', 'Home Connect and coffeeWorld add connected recipes.', 'Screen layers, water use and tray filling remain part of every day.']),
    build: dim(7.7, 'A removable brew unit and continuing Siemens service routes are positive ownership signals.', 'Discontinued exact-model status and unknown electronic-part economics limit long-term confidence.', 'Official dimensions and support record with bounded troubleshooting context', ['Deep 380 × 352 × 467 mm cabinet with accessible brew unit.', '2.4 L tank, 320 g hopper and integrated milk container.', 'No representative component-life or repair-cost dataset was found.']),
    features: dim(8.9, 'Cold-labelled drinks, pot mode, DoubleCup, favourites and connectivity make the equipment unusually broad.', 'Conflicting beanIdent and cup-warmer claims show why suffix-level checking is mandatory.', 'Exact official record separated from family and retailer claims', ['iSelect, aromaSelect, coffeeWorld, Home Connect and autoMilk Clean.', 'Retailer beanIdent and active-warmer claims are not treated as settled.', 'Features depend on exact software, region, account and delivered package.']),
    value: dim(7.4, 'At £929.98 the TQ717GB3 offers a premium interface and milk workflow below some original four-figure listings.', 'Remaining-stock status, conflicting copy and model age weaken the apparent discount.', 'Dated UK retailer price and availability check on September 25, 2026', ['£929.98 Costco UK listing on the check date.', 'Siemens says no longer available while other retailers still list stock.', 'Warranty, condition, accessories and repair access determine real value.']),
  },
  sources: [
    { label: 'Siemens Ireland TQ717GB3 product record', href: officialProduct, note: 'Exact-model identity, Integral milk system, dimensions, capacities, official images, documents and no-longer-available status.' },
    { label: 'Siemens UK EQ700 iAroma family guide', href: officialFamily, note: 'Official Integral versus Classic boundary, drink library, DoubleCup, pot function, Home Connect, cleaning and current cup-warmer and EQ900 comparisons.' },
    { label: 'Costco UK TQ717GB3 listing', href: costco, note: 'Exact-model £929.98 price, package, dimensions and retailer feature claims checked September 25, 2026. The beanIdent claim conflicts with Siemens family guidance.' },
    { label: 'Caffeine Mag honest EQ700 review', href: video, note: 'Independent hands-on video published November 4, 2025, covering coffee, milk, grinder, interface and app workflow. It is not a laboratory reliability study.' },
    { label: 'AO TQ717GB3 product and owner-review page', href: ao, note: 'Exact-model specifications, current availability signal and 52 self-selected customer reviews. Retailer pressure language is not treated as extraction proof.' },
    { label: 'Donaghy Bros TQ717GB3 listing', href: donaghy, note: 'Exact-model £1,199 display, out-of-stock state, two-year retailer warranty language and basic UK specifications checked September 25, 2026.' },
    { label: 'Home Connect coffee-machine overview', href: homeConnect, note: 'Official connected-service context, account and app functions. Continued feature and regional availability can change.' },
    { label: 'Reddit EQ700 versus Dinamica Plus comparison', href: ownerComparison, note: 'Self-selected owner blind preference and counter-space comments; one household comparison is not controlled population evidence.' },
    { label: 'Reddit EQ700 purchase-advice discussion', href: ownerAdvice, note: 'Self-selected observations on cleaning, longevity of an older EQ7, screen speed and model choice; several generations are mixed.' },
    { label: 'Reddit EQ700 internal-drain troubleshooting', href: ownerRepair, note: 'Self-selected repair thread that ended with a loose hose diagnosis; useful inspection context, not a failure-rate estimate.' },
    { label: 'Reddit EQ6 and EQ700 strength discussion', href: ownerStrength, note: 'Self-selected comparison raising drink-strength and brew-unit questions. The thread does not prove identical internals or output.' },
    { label: 'Amazon UK TQ717GB3 listing', href: amazon, note: 'Exact-model catalog and no-featured-offer state checked September 25, 2026; feature copy and customer ratings remain retailer evidence.' },
  ],
  comparisons: [
    { name: 'Siemens EQ700 Integral TQ717GB3', quickDecision: 'Choose for the large display, integrated milk container and thirty favourites after confirming remaining-stock support.', priceClass: '£929.98 checked Sep 25', dimensions: '352 × 467 × 380 mm W×D×H', heating: '1,500 W automatic platform', coffeeSetup: 'Single 320 g hopper and ceramic grinder', milkWorkflow: 'Integrated 0.7 L container and automatic steam rinse', bestFor: 'Screen-led shared households' },
    { name: 'DeLonghi Dinamica Plus', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', quickDecision: 'Compare a widely sold automatic with LatteCrema when current-market support matters more than thirty favourites.', priceClass: 'Premium automatic class', dimensions: 'Compact deep countertop body', heating: 'Automatic thermoblock platform', coffeeSetup: 'Single integrated grinder and bypass', milkWorkflow: 'Automatic LatteCrema carafe', bestFor: 'Mainstream one-touch ownership' },
    { name: 'Miele CM 6360 MilkPerfection', href: '/espresso-machine/miele-cm6360-milkperfection/', quickDecision: 'Pay for current paired milk service and four named profiles in a narrower body.', priceClass: '$2,549 US check', dimensions: '251 × 427 × 359 mm W×D×H', heating: '1.45 kW automatic system', coffeeSetup: 'One conical grinder, hopper and bypass', milkWorkflow: 'External glass flask and paired OneTouch milk', bestFor: 'Current premium multi-user homes' },
    { name: 'Saeco Xelsis SM7685', href: '/espresso-machine/saeco-xelsis/', quickDecision: 'Choose only as a documented refurb when deeper milk control and eight profiles justify older hardware.', priceClass: '$1,249 sold-out refurb check', dimensions: '11 × 20 × 15.5 in W×D×H', heating: '120 V thermoblock platform', coffeeSetup: '12-step ceramic grinder and bypass', milkWorkflow: 'LatteDuo carafe and HygieSteam', bestFor: 'Profile-heavy milk households' },
  ],
  comparisonNote: 'Compare region, voltage, exact suffix, new versus remaining stock, milk-container style, saved-drink logic, paired drinks, tank and hopper access, body depth, app requirements, cleaning cadence and repair route. EQ700 is a family label, not one universal specification.',
  recommendations: [
    { kicker: 'Current mainstream option', title: 'DeLonghi Dinamica Plus', text: 'Compare current retail support and LatteCrema against the Siemens screen and favourites library.', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', linkLabel: 'Read Dinamica Plus review' },
    { kicker: 'Premium paired drinks', title: 'Miele CM 6360', text: 'Choose a narrower current machine with named profiles and paired milk service.', href: '/espresso-machine/miele-cm6360-milkperfection/', linkLabel: 'Read Miele CM 6360 review' },
    { kicker: 'Deeper milk control', title: 'Saeco Xelsis SM7685', text: 'Compare LatteDuo and eight profiles only if a documented refurb fits the risk tolerance.', href: '/espresso-machine/saeco-xelsis/', linkLabel: 'Read Saeco Xelsis review' },
    { kicker: 'Category checklist', title: 'Best superautomatic machines', text: 'Compare cleaning, brew-unit access, profiles, app dependence, voltage and warranty across the category.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'What does Integral mean on Siemens EQ700?', answer: 'Integral uses a removable built-in milk container. Classic models use a hose that draws from a carton or separate container.' },
    { question: 'Is TQ717GB3 still available?', answer: 'Siemens marks it no longer available, while UK retailers still show listings. Confirm actual stock, condition and warranty before paying.' },
    { question: 'How many favourites can it save?', answer: 'The exact retailer and manufacturer records support up to 30 customised favourites. These are saved drinks, not thirty independent user accounts.' },
    { question: 'Can it make cold brew?', answer: 'The exact product record includes a Cold Brew programme. Coffeedant did not measure water temperature, extraction time or dissolved solids, so the label should not be equated automatically with café steeped cold brew.' },
    { question: 'Can it make two cappuccinos at once?', answer: 'Siemens documents doubleCup for two specialties, including milk drinks, on the EQ700 iAroma family. Verify the option on the delivered software.' },
    { question: 'Does TQ717GB3 have an active cup warmer?', answer: 'The records conflict. Some retailers advertise warming, while Siemens’ current family FAQ reserves the active top warmer for TQ727 prefixes. Confirm the exact delivered feature and distinguish it from hot-water cup preheating.' },
    { question: 'Is the brew unit removable?', answer: 'Yes. Use the service-menu guidance, warm water and a gentle brush. Siemens says not to use detergent, vinegar, acid or a dishwasher on it.' },
    { question: 'What should I check before importing one?', answer: 'Do not import blindly. Verify voltage, frequency, plug, complete suffix, app region, warranty country, service network, milk parts, seller return terms and rating plate first.' },
  ],
  finalTitle: 'The interface is the attraction, but the suffix decides the purchase',
  finalVerdict: [
    'TQ717GB3 makes a complicated automatic feel orderly. Its large display, favourites, integrated milk container, paired drinks and guided care are meaningful advantages for a household that rotates through black and milk recipes.',
    'The product record is less orderly than the interface. Siemens calls this exact model unavailable while retailer stock persists, and catalog pages disagree about beanIdent and the active cup warmer. Those conflicts are reasons to inspect the delivered machine, not small-print trivia.',
    'Buy it at a documented UK price when its support, warranty and exact functions are clear. Choose Dinamica Plus for a more conventional current-market route, Miele CM 6360 for premium paired drinks, or the older Xelsis only when its deeper profiles justify refurbished-unit diligence.',
  ],
  video: { id: 'ac0AQ0BOSXM', title: 'Honest review of the Siemens EQ700 Bean to Cup machine.', creator: 'Caffeine Mag', published: '2025-11-04', note: 'Independent 12-minute 32-second hands-on review covering coffee, milk, grinder, interface and connected workflow. The exact regional suffix is not treated as interchangeable with every EQ700 variant, and the video does not establish long-term failure rates.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#siemens-eq700-integral-tq717gb3-uk-source-1">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-2">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-3">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#siemens-eq700-integral-tq717gb3-uk-source-1">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-4">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-8">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#siemens-eq700-integral-tq717gb3-uk-source-1">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-2">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-4">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#siemens-eq700-integral-tq717gb3-uk-source-2">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-4">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-9">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#siemens-eq700-integral-tq717gb3-uk-source-1">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-5">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#siemens-eq700-integral-tq717gb3-uk-source-1">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-2">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-3">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#siemens-eq700-integral-tq717gb3-uk-source-1">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-3">[source]</a> <a href="#siemens-eq700-integral-tq717gb3-uk-source-6">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="siemens-eq700-owner-title"><h3 id="siemens-eq700-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Interface depth divides otherwise happy owners</strong><p>Some users value the recipe library and saved settings; another calls the screen slow for its price. This is a workflow preference, not a measured response-time study.</p></li>
    <li><strong>Coffee strength is recipe dependent</strong><p>Comparisons with De’Longhi machines disagree about preferred espresso and milk drinks. Bean, grinder setting, selected strength, water volume and milk ratio all change that result.</p></li>
    <li><strong>Access helps, but faults still need service</strong><p>Owners praise removable cleaning parts, while one drain-tray fault was traced to a loose internal hose. A single repair story identifies a question for service, not a failure rate.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeSiemensEQ700IntegralReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
