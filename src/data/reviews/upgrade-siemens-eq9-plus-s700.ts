import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const officialProduct = 'https://www.siemens-home.bsh-group.com/uk/en/mkt-product/TI9573X9GB';
const officialService = 'https://www.siemens-home.bsh-group.com/uk/en/productservice/TI9573X9GB-21';
const trustedReviews = 'https://www.trustedreviews.com/reviews/siemens-eq-9-plus-connect-s700';
const testseek = 'https://uk.testseek.com/house/home/kitchen-appliances/coffee/espresso-machines/siemens-eq.9-plus-connect-s700-p-800a7f4c-3483-ffbb-115e-55c0894d66c1.html';
const video = 'https://www.youtube.com/watch?v=VRBhT4ENhI4';
const homeConnect = 'https://www.home-connect.com/global/en/works-with-home-connect/coffee-machines';
const amazon = 'https://www.amazon.co.uk/Siemens-TI9573X9GB-connect-Coffee-Machine/dp/B0B7B1XBZS';
const londonAppliances = 'https://www.londonappliances.com/products/siemens-ti9573x9gb-fully-automatic-coffee-machine';
const currysBusiness = 'https://business.currys.co.uk/catalogue/domestic-appliances/small-kitchen-appliances/coffee-machines/siemens-eq-9-s700-ti9573x9gb-smart-bean-to-cup-coffee-machine-black-stainless-steel/N529380W';
const ebay = 'https://www.ebay.co.uk/b/bn_7027726949';
const ownerAdvice = 'https://www.reddit.com/r/superautomatic/comments/1dswsg2/alternative_for_siemens_eq9_plus_connect_s700_for/';
const ownerApp = 'https://github.com/home-assistant/core/issues/156372';
const hero = 'https://media3.bsh-group.com/Product_Shots/13189632_TI9573X9RW_def.webp';

const profile: UpgradeReviewProfile = {
  key: 'siemens-eq9-plus-s700-ti9573x9gb-uk',
  slug: '/espresso-machine/siemens-eq9-plus-s700/',
  productId: 'CD-EM-000242',
  brand: 'Siemens',
  model: 'EQ.9 Plus Connect s700 TI9573X9GB',
  sku: 'TI9573X9GB, Great Britain 230 V market model',
  category: 'Superautomatic espresso machine',
  brandPath: '/espresso-machine/',
  title: 'Siemens EQ.9 Plus Connect s700 review: TI9573X9GB used-buying guide',
  description: 'Research-led Siemens EQ.9 Plus Connect s700 TI9573X9GB review covering two bean containers, one-touch paired drinks, Home Connect, cleaning, discontinued status and used value.',
  verdictLabel: 'A capable two-bean flagship that now makes sense mainly as a carefully checked used purchase',
  verdict: 'The Great Britain Siemens EQ.9 Plus Connect s700 TI9573X9GB combines two bean containers, a 2.3 L water tank, colour display, baristaMode adjustments, Home Connect, oneTouch DoubleCup and automatic steam rinsing of the milk path. That is still an unusually useful package for a household that keeps regular and decaf beans ready or prepares two milk drinks together. The problem is availability rather than the drink menu. London Appliances labels the exact model discontinued, Amazon UK had no featured offer, and Siemens now directs buyers to dealers instead of displaying a price. An exact-model pre-owned eBay listing showed £361.42 plus £14.30 postage on September 25, 2026. Buy only after confirming the complete suffix, voltage, service history, milk parts, both bean paths, app status and return rights.',
  assessment: 'Strong shared-household automation and bean choice, offset by used-market condition risk and an ageing connected platform.',
  image: hero,
  imageAlt: 'Siemens official product image used on the UK TI9573X9GB page for the EQ.9 Plus Connect s700',
  published: '2026-01-05',
  updated: '2026-09-25',
  price: { label: 'Exact-model pre-owned listing', msrp: '£361.42', numeric: '361.42', currency: 'GBP', typical: 'Used TI9573X9GB listing; £14.30 postage shown separately and condition varies', checked: 'September 25, 2026' },
  links: [
    { label: 'Check exact-model used listings', href: ebay, note: 'Condition, completeness, seller terms and price can change', primary: true },
    { label: 'Check Siemens product record', href: officialProduct, note: 'Official UK TI9573X9GB identity, specifications, documents and dealer route' },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'TI9573X9GB, Great Britain EQ.9 Plus Connect s700' },
    { label: 'Water tank', value: '2.3 L' },
    { label: 'Bean storage', value: 'Two bean containers; official overview lists 250 g capacity' },
    { label: 'Dimensions', value: '392 × 299 × 470 mm H×W×D' },
    { label: 'Milk system', value: 'Integrated milk system with hose and automatic steam rinse' },
    { label: 'Paired drinks', value: 'oneTouch DoubleCup, including two milk specialities' },
    { label: 'Controls', value: 'Colour display, rotary control, saved favourites and baristaMode recipe adjustment' },
    { label: 'Connected features', value: 'Home Connect, subject to account, app, region, network and continued service support' },
    { label: 'Support identity', value: 'Official service record located for revision TI9573X9GB/21' },
    { label: 'Market status', value: 'No stable new-stock price found; exact model is discontinued at one UK retailer' },
  ],
  quickAnswers: [
    { question: 'Which EQ.9 is reviewed?', answer: 'The Great Britain TI9573X9GB. TI9573X9RW, TI9575X1DE, TI9578X1DE and other regional suffixes can differ in plug, language, package, warranty and software.' },
    { question: 'Is it still sold new?', answer: 'A stable new-stock offer was not located on September 25, 2026. London Appliances marked it discontinued and Amazon UK showed no featured offer, while Siemens retained a dealer finder and service record.' },
    { question: 'Can it keep regular and decaf beans ready?', answer: 'It has two bean containers and lets the user choose a bean side for recipes. Verify both paths on a used unit and expect some retained grounds during changes rather than assuming medical-grade separation.' },
    { question: 'Can it make two milk drinks together?', answer: 'Yes. Siemens explicitly lists oneTouch DoubleCup for two milk specialities, which is a meaningful advantage for two-person morning service.' },
    { question: 'Does autoMilk Clean replace washing?', answer: 'No. The automatic steam rinse helps after preparation, but the hose, container or carton connection, outlet, tray and other removable parts still need the manual routine.' },
    { question: 'Does Home Connect still work?', answer: 'Siemens still lists Home Connect, but a used purchase should verify account pairing, Wi-Fi compatibility, app region and current functions before treating connectivity as guaranteed value.' },
  ],
  bestFor: [
    'A UK household that genuinely needs two beans available without emptying one hopper',
    'Two regular milk-drink users who will benefit from paired one-touch preparation',
    'A careful used buyer who can inspect, return or obtain service for an older premium automatic',
  ],
  avoidIf: [
    'You need a current new-unit warranty, simple parts economics or predictable replacement support',
    'You are in a 120 V market or considering a transformer-based import',
    'You expect manual espresso variables, guaranteed app longevity or zero milk-system cleaning',
  ],
  pros: [
    'Two bean containers make regular and decaf routines far easier than a single-hopper machine',
    'oneTouch DoubleCup can prepare two milk specialities in one cycle',
    '2.3 L tank, adjustable recipes, cup heater and broad one-touch menu suit a busy household',
    'Official manuals, service pages and spare-part routes remain available for the exact suffix',
  ],
  cons: [
    'Exact model has no dependable current new-stock price and appears discontinued in retail',
    'A 470 mm body needs more depth and service clearance than the 299 mm width suggests',
    'Automatic milk rinsing does not remove hands-on cleaning of the hose and outlet',
    'Used condition, limescale, seals, grinder wear and connected-service support are unit-specific unknowns',
  ],
  architecture: 'a connected two-bean bean-to-cup machine with ceramic grinding, a removable brewing unit, colour menu controls, tube-fed milk and paired one-touch drinks',
  identityBoundary: 'This review scores TI9573X9GB for Great Britain. It does not merge TI9573X9RW, TI9575X1DE, TI9578X1DE, other EQ.9 s700 suffixes, the later EQ700 or EQ900, 120 V conversions or marketplace machines with unreadable rating plates.',
  primaryStrength: 'Two beans, paired milk drinks and deep recipe adjustment solve a real shared-household problem without requiring manual espresso preparation.',
  primaryLimit: 'The model is now a condition-sensitive used purchase, so service history and inspection matter more than its original flagship specification.',
  setupNote: 'Before paying, photograph the full rating plate and match TI9573X9GB, voltage and revision. Ask for the invoice or service record, Home Connect reset, milk hose and connectors, water tank, trays, grounds bin and any filter accessories. Inspect both bean compartments for oil or foreign material, the brew area for compacted residue, the tank and hydraulic path for scale, and the drip tray for unexplained water. At home, set water hardness, fit a compatible filter only through the documented menu, run the guided rinse and cleaning programmes, wash milk-contact parts and make reference drinks from each bean side before saving favourites.',
  espressoNote: 'baristaMode and the standard drink menu let the user adjust strength, volume, temperature, coffee-to-milk balance and other recipe choices more deeply than a basic automatic. aromaDouble Shot uses two grinding and brewing steps for stronger coffee with less over-extraction than simply pushing more water through one puck. Trusted Reviews praised the espresso, while the independent walkthrough demonstrates the controls rather than publishing dose, temperature, extraction or taste measurements. Use medium-fresh beans, a modest cup volume and one grinder change at a time. Do not treat the pump-pressure headline as proof of cup quality.',
  milkNote: 'The hose can draw from a suitable milk container and the front outlet handles cappuccino, latte macchiato, flat white, caffe latte, espresso macchiato and café cortado from one position. oneTouch DoubleCup is the standout because Siemens says it can prepare two milk specialities together. Trusted Reviews found the automatic frothing strong but called the milk system fiddly to clean. The automatic steam rinse reduces residue after use; it does not wash every removable surface or make stored milk safe. Foam and temperature still depend on milk, recipe, cleanliness, cup and maintenance.',
  workflowNote: 'The two bean containers are the daily reason to choose this older flagship. A household can keep regular and decaf or two roast styles ready, select the appropriate side and save repeat recipes. The large tank, paired drinks, cup heater and Home Connect reduce repeated steps. Automatic rinses consume water and fill the tray, a bean change can leave retained grounds, and connected commands still require a ready cup and clean milk path. The 470 mm depth also needs space behind and above the machine for ventilation, lids and service access.',
  buildNote: 'Siemens lists a 392 × 299 × 470 mm cabinet, 2.3 L water tank, two bean containers, switchable cup heater and integrated milk hose. Amazon UK lists roughly 12.5 kg and 1,500 W for the exact model, but retailer values remain secondary to the rating plate and official documents. The official TI9573X9GB/21 service page still provides manuals, product documents, repair booking and original spare-part routes. That is useful infrastructure, not a promise that every display, board, valve, grinder or seal remains economical or immediately stocked.',
  featuresNote: 'The useful feature set is specific rather than decorative: two beans, baristaMode, aromaDouble Shot, oneTouch DoubleCup, autoMilk Clean, ceramDrive, saved favourites, cup heating and Home Connect. Some functions depend on firmware, account and app region. The page does not convert the official 4.6/5 rating from 25 reviews or Amazon’s 3.8/5 from 19 ratings into a reliability rate, because neither sample is controlled and ownership duration is unknown.',
  valueNote: 'This is no longer a normal new-versus-new purchase. London Appliances says discontinued, Amazon UK had no featured offer, Currys Business retained a catalog page without a useful current price, and Siemens directed visitors to dealers. An exact TI9573X9GB pre-owned listing displayed £361.42 plus £14.30 postage on September 25, 2026. That number is only a dated condition-specific reference. Budget for filter and cleaning supplies, possible milk parts, descaling, return shipping and professional repair. Compare the all-in risk with a current Siemens EQ700, DeLonghi Dinamica Plus or a supported refurbished Saeco Xelsis.',
  ownerPattern: 'Selected discussions show why two beans matter: one household wanted regular and decaf ready together, while import questions exposed the model’s limited North American availability and electrical mismatch. A separate Home Assistant issue reported that bean-container selector entities became unavailable after a drink on one integration setup. These reports identify practical checks around region and connectivity, not representative failure rates.',
  ownerCaution: 'Owner posts mix regional suffixes, machine ages, water conditions, cleaning histories, integrations and software versions. One happy import, one taste complaint, one app fault or one repair cannot establish the expected experience for TI9573X9GB. Used-machine condition can dominate the model-level design.',
  maintenanceNote: 'Follow the exact manual and on-screen programmes for the milk path, outlet, drip tray, grounds bin, brewing unit, cleaning tablet cycle, descaling and filter changes. Remove and rinse the brewing unit only as directed. Do not use vinegar or improvise internal repair from a video when a leak, grinder fault, sensor error or repeated tray fill requires diagnosis. A demonstration with clean water cannot reveal scale inside the hydraulic circuit.',
  dimensions: {
    espresso: dim(8.2, 'baristaMode, two bean choices, strength controls and aromaDouble Shot provide unusually useful automatic adjustment.', 'Strong for repeat black drinks, but it cannot expose the manual dose, distribution, yield and pressure control of a portafilter setup.', 'Official controls, independent review and independent walkthrough without Coffeedant measurements', ['Two bean containers support roast or caffeine choice.', 'baristaMode and saved recipes organize repeat settings.', 'No Coffeedant dose, temperature, extraction or taste measurements.']),
    milk: dim(8.6, 'Paired one-touch milk drinks and automatic steam rinsing create a high-capacity household workflow.', 'The benefit is real only when the hose, outlet and milk vessel receive regular physical cleaning.', 'Official milk menu plus independent review and walkthrough', ['oneTouch DoubleCup includes two milk specialities.', 'The hose supports a flexible external milk source.', 'autoMilk Clean supplements rather than replaces washing.']),
    workflow: dim(8.8, 'Two bean containers, a broad colour menu, favourites and Home Connect reduce daily switching and repetition.', 'Automatic rinses, retained grounds, app dependencies and cabinet depth remain part of ownership.', 'Exact official record with bounded owner and integration context', ['2.3 L tank and two bean containers suit repeat service.', '299 mm width is compact, but the body is 470 mm deep.', 'Connected functions depend on supported accounts, software and a prepared machine.']),
    build: dim(7.5, 'A removable brew unit and continuing exact-model service record make inspection and care more practical.', 'Age, scale and component economics prevent confidence based on the Siemens badge alone.', 'Official service infrastructure with no representative durability dataset', ['Exact TI9573X9GB/21 service record remains live.', 'Cup heater, removable parts and guided programmes support routine care.', 'No representative component-life, repair-cost or failure-rate evidence was found.']),
    features: dim(8.9, 'The combination of two beans, baristaMode, paired drinks, cup heating and connectivity remains distinctive.', 'Several functions need firmware, region and account checks on an older used machine.', 'Official specification separated from volatile connected-service assumptions', ['aromaDouble Shot and ceramDrive support automatic coffee recipes.', 'oneTouch DoubleCup is valuable for two-person milk service.', 'Home Connect value must be verified on the actual used unit.']),
    value: dim(7.1, 'Around £361 used can buy a broad former-flagship feature set for far less than a new premium automatic.', 'A single repair, missing milk assembly or unsupported return can erase that saving.', 'Dated exact-model pre-owned listing and discontinued-market check on September 25, 2026', ['£361.42 plus £14.30 postage was one exact-model used listing.', 'No stable current new-stock price was located.', 'Condition, service history, completeness and seller protection decide real value.']),
  },
  sources: [
    { label: 'Siemens UK TI9573X9GB product record', href: officialProduct, note: 'Exact UK identity, dimensions, capacities, milk menu, Home Connect, core features, official rating context and product media.' },
    { label: 'Siemens UK TI9573X9GB/21 service record', href: officialService, note: 'Exact revision identity, manuals, product documents, repair booking and original spare-part route.' },
    { label: 'Trusted Reviews EQ.9 Plus Connect s700 review', href: trustedReviews, note: 'Independent evaluation published November 9, 2019, praising espresso and milk frothing while noting app and milk-cleaning friction.' },
    { label: 'Testseek EQ.9 Plus Connect s700 index', href: testseek, note: 'Independent-review publication context and aggregation record; not used as a substitute for the underlying review.' },
    { label: 'TechAbet Solutions beginner walkthrough', href: video, note: 'Independent 13-minute 57-second TI9573X9RW sibling walkthrough published March 28, 2020. It demonstrates the shared s700 workflow but does not prove UK suffix details or long-term reliability.' },
    { label: 'Home Connect coffee-machine overview', href: homeConnect, note: 'Official connected-service context. Account, region, supported functions and continued availability can change.' },
    { label: 'Amazon UK TI9573X9GB listing', href: amazon, note: 'Exact-model catalog, retailer specifications, rating context and no-featured-offer state checked September 25, 2026.' },
    { label: 'London Appliances TI9573X9GB listing', href: londonAppliances, note: 'Exact-model discontinued and no-restock notice checked September 25, 2026.' },
    { label: 'Currys Business TI9573X9GB catalog', href: currysBusiness, note: 'Exact-model UK channel record retained without a useful current price on the check date.' },
    { label: 'eBay UK Siemens automatic-machine listings', href: ebay, note: 'Exact TI9573X9GB pre-owned listing displayed at £361.42 plus £14.30 postage on September 25, 2026. It is a volatile condition-specific benchmark.' },
    { label: 'Reddit EQ.9 s700 regional purchase discussion', href: ownerAdvice, note: 'Self-selected owner and buyer context about two-bean needs, imports and North American availability. It does not establish reliability or universal taste.' },
    { label: 'Home Assistant Siemens EQ.9 integration issue', href: ownerApp, note: 'One model-specific 2025 report about bean-selector entities becoming unavailable after a drink. It concerns one third-party setup, not the machine population.' },
  ],
  comparisons: [
    { name: 'Siemens EQ.9 Plus Connect s700 TI9573X9GB', quickDecision: 'Choose used for two ready beans and paired milk drinks only after an inspection and return-path check.', priceClass: '£361.42 used check', dimensions: '299 × 470 × 392 mm W×D×H', heating: '1,500 W retailer rating', coffeeSetup: 'Two bean containers with ceramic grinding', milkWorkflow: 'External hose, paired drinks and steam rinse', bestFor: 'Used two-bean household value' },
    { name: 'Siemens EQ700 Integral TQ717GB3', href: '/espresso-machine/siemens-eq700-integral/', quickDecision: 'Compare the newer 5-inch interface and integrated milk container when remaining-stock support matters more than two beans.', priceClass: '£929.98 channel-stock check', dimensions: '352 × 467 × 380 mm W×D×H', heating: '1,500 W automatic platform', coffeeSetup: 'Single 320 g hopper and ceramic grinder', milkWorkflow: 'Integrated 0.7 L container and paired milk drinks', bestFor: 'Newer screen-led ownership' },
    { name: 'Miele CM 7750 CoffeeSelect', href: '/espresso-machine/miele-cm7750-coffeeselect/', quickDecision: 'Pay much more for three beans and named profiles when current premium support is essential.', priceClass: '$4,299 US check', dimensions: '311 × 445 × 397 mm W×D×H', heating: 'Premium automatic platform', coffeeSetup: 'Three bean containers and CoffeeSelect', milkWorkflow: 'External milk flask and one-touch cleaning', bestFor: 'Supported multi-bean flagship buyers' },
    { name: 'Saeco Xelsis SM7685', href: '/espresso-machine/saeco-xelsis/', quickDecision: 'Compare a supported refurb when profiles and milk adjustment matter more than keeping two beans ready.', priceClass: '$1,249 sold-out refurb check', dimensions: '11 × 20 × 15.5 in W×D×H', heating: '120 V thermoblock platform', coffeeSetup: 'Single hopper, ceramic grinder and bypass', milkWorkflow: 'LatteDuo carafe and HygieSteam', bestFor: 'Profile-heavy milk households' },
  ],
  comparisonNote: 'Compare complete suffix, voltage, bean-path design, new versus used condition, seller protection, paired drinks, milk parts, body depth, app support, cleaning history, scale, repair route and total ownership cost. EQ.9 s700 is a family label, not one worldwide specification.',
  recommendations: [
    { kicker: 'Newer Siemens route', title: 'Siemens EQ700 Integral', text: 'Choose the newer display and integrated milk container when one bean and clearer channel support are acceptable.', href: '/espresso-machine/siemens-eq700-integral/', linkLabel: 'Read Siemens EQ700 review' },
    { kicker: 'Current multi-bean flagship', title: 'Miele CM 7750 CoffeeSelect', text: 'Compare three beans and named profiles when budget allows a more current premium support path.', href: '/espresso-machine/miele-cm7750-coffeeselect/', linkLabel: 'Read Miele CM 7750 review' },
    { kicker: 'Profile-focused refurb', title: 'Saeco Xelsis SM7685', text: 'Consider deeper milk adjustment and eight profiles when a documented refurbished unit fits the risk tolerance.', href: '/espresso-machine/saeco-xelsis/', linkLabel: 'Read Saeco Xelsis review' },
    { kicker: 'Category checklist', title: 'Best superautomatic machines', text: 'Compare bean switching, brew-unit access, milk cleaning, app dependence, voltage and service across the category.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'Is TI9573X9GB the same as TI9573X9RW?', answer: 'No. They are close regional s700 siblings, but the suffix identifies market-specific voltage, plug, language, warranty, package and possible software differences. This page scores TI9573X9GB.' },
    { question: 'Is the Siemens EQ.9 Plus s700 discontinued?', answer: 'London Appliances marks TI9573X9GB discontinued and Amazon UK had no featured offer on September 25, 2026. Siemens still maintains the product and service records and directs shoppers to dealers.' },
    { question: 'Does it have two grinders?', answer: 'The exact machine has two bean containers and a selectable bean workflow. Because current official overview text does not clearly enumerate grinder motors, inspect the actual machine and exact manual rather than buying from a generic dual-grinder claim.' },
    { question: 'Can it make two cappuccinos at once?', answer: 'Yes. Siemens documents oneTouch DoubleCup for two milk specialities. The cups still need to fit under the paired outlet and the milk path must be ready.' },
    { question: 'Can regular and decaf stay loaded?', answer: 'Yes, that is the main reason to value the two-container design. Some retained grounds can remain in a grinder or chute, so it is not a guaranteed zero-crossover system for a medical caffeine restriction.' },
    { question: 'Is the milk system self-cleaning?', answer: 'Only partly. autoMilk Clean sends a steam rinse through the milk path after drinks, but users must still wash the hose, connectors, outlet, vessel and tray as the manual directs.' },
    { question: 'Is a used EQ.9 s700 worth £361?', answer: 'It can be if both bean paths, brew unit, milk parts, heater, valves, display and connectivity work and the seller offers a meaningful return path. A repair or missing assembly can quickly erase the price advantage.' },
    { question: 'Can I import it to North America?', answer: 'Do not assume so. TI9573X9GB is a Great Britain appliance for a different electrical market. Verify voltage, frequency, plug, circuit, app region, service eligibility and warranty before any import, and do not rely casually on a transformer.' },
  ],
  finalTitle: 'The two-bean workflow is still compelling, but the purchase is now about condition',
  finalVerdict: [
    'TI9573X9GB remains unusually practical for a household that wants regular and decaf beans ready, two milk drinks together and deep recipe control without manual espresso work.',
    'Its age changes the decision. There is no dependable current new price, one retailer calls it discontinued, and app plus repair economics depend on the actual unit. Inspect both bean paths, milk hardware, scale history, service record and return protection before valuing the old flagship features.',
    'Buy a clean, complete and returnable example at a condition-adjusted price. Choose EQ700 Integral for a newer Siemens interface, Miele CM 7750 for a current multi-bean flagship, or Xelsis when profiles and milk tuning matter more than two ready beans.',
  ],
  video: { id: 'VRBhT4ENhI4', title: 'A Beginners Guide - Siemens EQ.9 Plus Connect S700 Espresso Coffe Machine TI9573X9RW', creator: 'TechAbet Solutions', published: '2020-03-28', note: 'Independent 13-minute 57-second walkthrough of the TI9573X9RW regional sibling covering menus and drink preparation. It demonstrates shared s700 workflow but does not prove TI9573X9GB package details, measured performance or long-term reliability.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-1">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-2">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-7">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-1">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-3">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-5">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-1">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-3">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-5">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-1">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-6">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-11">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-1">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-2">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-7">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-1">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-7">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-7">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-8">[source]</a> <a href="#siemens-eq9-plus-s700-ti9573x9gb-uk-source-10">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="siemens-eq9-owner-title"><h3 id="siemens-eq9-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Two ready beans solve a real household problem</strong><p>A buyer who had used Siemens in Norway wanted regular and decaf beans ready in one machine. That use case supports the design choice, not a universal preference.</p></li>
    <li><strong>Regional availability changes the answer</strong><p>The same discussion showed difficulty finding Siemens machines in the United States and uncertainty about import delivery. Voltage, service and warranty make that more than a shipping question.</p></li>
    <li><strong>Third-party connectivity can lose a control</strong><p>One Home Assistant issue reported unavailable bean-selector entities after preparing a drink. It identifies an integration check, not a defect rate for Home Connect or the machine itself.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeSiemensEQ9PlusS700Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
