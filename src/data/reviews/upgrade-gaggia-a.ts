import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
type ProductConfig = {
  key: string;
  slug: string;
  productId: string;
  model: string;
  sku: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  official: string;
  manual: string;
  priceUrl: string;
  priceLabel: string;
  price: string;
  priceNumeric: string;
  priceContext: string;
  exactIdentity: string;
  milkSystem: string;
  drinkSystem: string;
  grinder: string;
  capacity: string;
  dimensions: string;
  interface: string;
  primaryStrength: string;
  primaryLimit: string;
  videoId: string;
  videoTitle: string;
  videoCreator: string;
  videoDate: string;
  independent: string;
  owner: string;
  rating: [number, number, number, number, number, number];
};

const dim = (score: number, claim: string, consequence: string, signals: [string, string, string]): DimensionCopy => ({
  score,
  claim,
  consequence,
  status: 'Official documentation, exact-model retail context, independent review and owner evidence checked September 23, 2026',
  signals,
});

const makeProfile = (p: ProductConfig): UpgradeReviewProfile => ({
  key: p.key,
  slug: p.slug,
  productId: p.productId,
  brand: 'Gaggia',
  model: p.model,
  sku: p.sku,
  category: 'Superautomatic espresso machine',
  brandPath: '/gaggia/',
  title: p.title,
  description: p.description,
  verdictLabel: `For households that want ${p.primaryStrength.toLowerCase()}`,
  verdict: `Choose the ${p.model} for ${p.primaryStrength.toLowerCase()}. Skip it when ${p.primaryLimit.toLowerCase()} is a deal-breaker or you want direct portafilter control.`,
  assessment: `${p.primaryStrength} The trade-off is ${p.primaryLimit.toLowerCase()}`,
  image: p.image,
  imageAlt: p.imageAlt,
  published: '2026-07-27',
  updated: '2026-09-23',
  price: {
    label: p.priceLabel,
    msrp: p.price,
    typical: p.priceContext,
    currency: p.price.startsWith('£') ? 'GBP' : 'USD',
    numeric: p.priceNumeric,
    checked: 'September 23, 2026',
  },
  links: [
    { label: 'Check current listing', href: p.priceUrl, note: `${p.priceLabel}; availability and warranty are volatile`, primary: true },
    { label: 'Open official product information', href: p.official, note: 'Manufacturer identity, feature and specification record' },
  ],
  facts: [
    { label: 'Exact identity', value: p.exactIdentity },
    { label: 'Coffee system', value: p.drinkSystem },
    { label: 'Milk system', value: p.milkSystem },
    { label: 'Grinder', value: p.grinder },
    { label: 'Interface', value: p.interface },
    { label: 'Capacity', value: p.capacity },
    { label: 'Dimensions', value: p.dimensions },
    { label: 'Brew group', value: 'Removable Gaggia automatic brew group; follow the exact manual for rinsing and lubrication' },
    { label: 'Water care', value: 'Intenza+ compatible with automatic rinse and guided or automatic descaling' },
  ],
  quickAnswers: [
    { question: `What exact ${p.model} does this review cover?`, answer: p.exactIdentity },
    { question: 'Does it grind beans automatically?', answer: `Yes. ${p.grinder} A bypass doser handles occasional pre-ground coffee.` },
    { question: 'How does it handle milk?', answer: p.milkSystem },
    { question: 'Can it make two drinks?', answer: 'It supports two-cycle black coffee where documented, not simultaneous milk drinks.' },
    { question: 'Is maintenance automatic?', answer: 'No. Prompts help, but the tray, grounds bin, brew group and milk parts still need cleaning.' },
    { question: 'Who should buy it?', answer: `A buyer who values ${p.primaryStrength.toLowerCase()} and accepts ${p.primaryLimit.toLowerCase()}` },
  ],
  bestFor: [
    p.primaryStrength,
    'Fresh coffee without a separate grinder and portafilter',
    'An owner who will follow brew-group and water-care guidance',
  ],
  avoidIf: [
    p.primaryLimit,
    'You want a separate grinder and direct puck control',
    'No one will own cleaning and descaling',
  ],
  pros: [p.primaryStrength, p.grinder, p.interface, 'Owner-removable brew group'],
  cons: [p.primaryLimit, 'No gram-level puck control', 'Milk parts need prompt cleaning', 'Suffix and warranty vary by region'],
  architecture: `a bean-to-cup appliance with ${p.grinder.toLowerCase()}, an automatic removable brew group, ${p.interface.toLowerCase()}, and ${p.milkSystem.toLowerCase()}`,
  identityBoundary: p.exactIdentity,
  primaryStrength: p.primaryStrength,
  primaryLimit: p.primaryLimit,
  setupNote: `Confirm the rating plate and warranty, allow the documented clearances, set water hardness, prime as directed, and let several cycles settle before a large grinder change.`,
  espressoNote: `${p.drinkSystem} Start short and medium-strength. Adjust grind only while the burrs run, then judge several cycles.`,
  milkNote: `${p.milkSystem} Use cold milk, assemble consistently, and rinse or purge immediately.`,
  workflowNote: `${p.interface} Daily work still includes rinses, refills, grounds, tray and milk care.`,
  buildNote: `The removable brew group is owner-accessible; grinder, heater, valves, sensors and controls need exact-model service. ${p.dimensions}`,
  featuresNote: `${p.drinkSystem} The core controls are strength, volume, temperature, grind and milk path.`,
  valueNote: `${p.priceLabel} showed ${p.price}: ${p.priceContext}`,
  ownerPattern: `Owners discuss grinder settling, rinse water, tray capacity, brew-group cleaning, milk hygiene and parts support.`,
  ownerCaution: `Self-selected reports often omit suffix, voltage, water and maintenance history. They cannot establish defect rates or expected life for ${p.sku}.`,
  maintenanceNote: `Rinse and lubricate the group as directed, clean oils separately from scale, and clean the milk path immediately.`,
  dimensions: {
    espresso: dim(p.rating[0], `${p.drinkSystem} give useful automatic adjustment.`, 'Repeatable household coffee without direct puck control.', [p.grinder, p.drinkSystem, 'Beans, water, volume and grinder settling affect the cup.']),
    milk: dim(p.rating[1], p.milkSystem, 'The score includes cleaning and sequencing.', [p.milkSystem, 'Assembly and milk formulation affect texture.', 'Every milk use creates a rinse task.']),
    workflow: dim(p.rating[2], `${p.interface} keep drinks approachable.`, 'Best for a repeated routine.', [p.interface, p.capacity, 'Rinses add water and tray load.']),
    build: dim(p.rating[3], 'The removable group improves owner inspection.', 'Internal work needs exact parts and qualified service.', ['Owner-removable brew group', p.dimensions, 'Match suffix, voltage and support.']),
    features: dim(p.rating[4], `${p.drinkSystem} cover the core use case.`, 'The milk architecture decides the fit.', [p.interface, p.drinkSystem, p.milkSystem]),
    value: dim(p.rating[5], `${p.price} needs condition and warranty context.`, 'Compare complete ownership.', [`${p.priceLabel}: ${p.price}`, p.priceContext, 'Care and service add cost.']),
  },
  sources: [
    { label: `Gaggia: ${p.model}`, href: p.official, note: 'Official model identity, drink, grinder, milk, capacity, material and electrical information.' },
    { label: `Gaggia ${p.model} manual`, href: p.manual, note: 'Official setup, operation, grinder adjustment, cleaning, descaling and troubleshooting instructions.' },
    { label: p.priceLabel, href: p.priceUrl, note: `${p.price} and availability context checked September 23, 2026; taxes, region and warranty vary.` },
    { label: `Independent review: ${p.model}`, href: p.independent, note: 'Independent workflow and comparison context; specifications remain anchored to Gaggia.' },
    { label: p.videoTitle, href: `https://www.youtube.com/watch?v=${p.videoId}`, note: `Independent video by ${p.videoCreator}, published ${p.videoDate}, used for visible workflow context.` },
    { label: 'Gaggia product support search', href: 'https://www.gaggia.com/product-search/', note: 'Official exact-code route for manuals, safety, declaration and warranty documents.' },
    { label: 'Gaggia automatic machine range', href: 'https://www.gaggia.com/automatic-machines/', note: 'Official current family context used to separate adjacent milk systems and generations.' },
    { label: `Owner discussion: ${p.model}`, href: p.owner, note: 'Self-selected owner and buyer context for setup, drinks, maintenance and service; not rate evidence.' },
    { label: 'r/superautomatic Gaggia discussions', href: 'https://www.reddit.com/r/superautomatic/search/?q=Gaggia&restrict_sr=1', note: 'Broader self-selected category context for cleaning, grinder adjustment and service questions.' },
    { label: 'Gaggia Direct Anima and automatic-machine guidance', href: 'https://www.gaggiadirect.com/automatic-machines-range.html', note: 'Authorized UK distributor comparison and care context; regional prices and warranty differ.' },
    { label: 'Barista Hustle water recipe background', href: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/', note: 'Independent water-composition background; the Gaggia manual remains controlling for machine safety.' },
  ],
  comparisons: [
    { name: p.model, quickDecision: `Choose for ${p.primaryStrength.toLowerCase()}.`, priceClass: p.price, dimensions: p.dimensions, heating: 'Automatic thermoblock or boiler platform', coffeeSetup: p.grinder, milkWorkflow: p.milkSystem, bestFor: p.primaryStrength },
    { name: 'Gaggia Anima Prestige', href: '/espresso-machine/gaggia-anima-prestige/', quickDecision: 'Choose a slim integrated-carafe route for one-touch cappuccino and latte macchiato.', priceClass: '$849 current US direct reference', dimensions: 'About 8.8 in wide by 13.4 in high; top access required', heating: 'Automatic single-platform system', coffeeSetup: 'Five-step ceramic grinder', milkWorkflow: 'Removable automatic carafe', bestFor: 'Compact one-touch milk' },
    { name: 'Gaggia Cadorna Barista Plus', href: '/espresso-machine/gaggia-cadorna-barista-plus-ri9603-47/', quickDecision: 'Choose profiles, color menus and a two-hole manual wand when milk craft matters.', priceClass: '$899 current US direct reference', dimensions: '10.2 by 15 by 17.3 in', heating: 'Automatic coffee plus manual steam sequence', coffeeSetup: 'Ten-step ceramic grinder and four profiles', milkWorkflow: 'Manual commercial-style wand', bestFor: 'Shared home with manual milk' },
  ],
  comparisonNote: 'Match model code, voltage, condition and milk architecture before comparing price. Anima names are especially easy to blur across pannarello, Cappuccinatore and carafe versions.',
  recommendations: [
    { kicker: 'One-touch milk', title: 'Gaggia Anima Prestige', text: 'Choose the integrated carafe when the shortest milk workflow matters most.', href: '/espresso-machine/gaggia-anima-prestige/', linkLabel: 'Read the Anima Prestige review', featured: true },
    { kicker: 'Manual milk with profiles', title: 'Gaggia Cadorna Barista Plus', text: 'Choose four profiles and a two-hole wand when the household wants saved coffee plus manual texture.', href: '/espresso-machine/gaggia-cadorna-barista-plus-ri9603-47/', linkLabel: 'Read the Cadorna Barista Plus review' },
    { kicker: 'Premium dual milk', title: 'Gaggia Accademia', text: 'Choose the current Accademia when automatic carafe and separate professional wand both matter.', href: '/espresso-machine/gaggia-accademia-ri9781-01/', linkLabel: 'Read the Accademia review' },
    { kicker: 'Manual espresso route', title: 'Gaggia Classic Evo', text: 'Choose a separate grinder, portafilter and wand when direct coffee craft matters more than automation.', href: '/espresso-machine/gaggia-classic-evo/', linkLabel: 'Read the Classic Evo review' },
  ],
  faqs: [
    { question: `Is ${p.model} fully automatic?`, answer: 'It grinds, doses and brews, but still needs refills, waste handling and cleaning.' },
    { question: `What is the main reason to choose ${p.model}?`, answer: p.primaryStrength },
    { question: `What is its main limitation?`, answer: p.primaryLimit },
    { question: 'Can I use pre-ground decaf?', answer: 'Yes, through the bypass doser in the manual-specified quantity.' },
    { question: 'Can I use oily or flavored beans?', answer: 'Use clean, dry beans within Gaggia guidance and check the manual.' },
    { question: 'Does the removable brew group go in a dishwasher?', answer: 'Follow the exact manual; normal care is a lukewarm-water rinse and air drying.' },
    { question: `Is ${p.price} the worldwide price?`, answer: `No. It is the dated ${p.priceLabel.toLowerCase()} context checked September 23, 2026. Currency, tax, stock, condition and warranty vary.` },
    { question: 'How should I judge owner reports?', answer: 'Use them for questions, not a failure percentage.' },
  ],
  finalTitle: `${p.model} works when its milk path matches the household`,
  finalVerdict: [
    `${p.primaryStrength} The removable group and documented controls make ownership understandable.`,
    `${p.primaryLimit} Match suffix and local support, then treat cleaning as part of the drink workflow.`,
  ],
  video: { id: p.videoId, title: p.videoTitle, creator: p.videoCreator, published: p.videoDate, note: 'Independent visual workflow evidence. Current specifications, price and availability are verified separately.' },
});

const products: ProductConfig[] = [
  {
    key: 'gaggia-anima', slug: '/espresso-machine/gaggia-anima/', productId: 'CD-EM-000165', model: 'Anima', sku: 'Anima North America 120V',
    title: 'Gaggia Anima review: simple bean-to-cup coffee with manual milk',
    description: 'A research-led Gaggia Anima review covering its five-step ceramic grinder, pannarello wand, 1.8 L tank, tall spouts, current US price, cleaning and exact family differences.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/Anima_IMG_9820_01_49ff03a2-6815-498b-8918-7f26dc5391ec_1024x1024.jpg?v=1571326415', imageAlt: 'Black Gaggia Anima superautomatic espresso machine with pannarello wand',
    official: 'https://www.gaggia-na.com/products/gaggia-anima', manual: 'https://www.gaggia.com/automatic-machines/anima/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-anima', priceLabel: 'Gaggia North America direct price', price: '$699.00', priceNumeric: '699.00', priceContext: 'New US 120V stock with pannarello wand; tax and availability vary',
    exactIdentity: 'Current Gaggia North America Anima with black ABS front, pannarello wand and 110-120V, 1400W specification; other RI8760 suffixes can differ.',
    milkSystem: 'Manual auto-aerating pannarello wand for steam and hot water; no integrated milk carafe', drinkSystem: 'Espresso and espresso lungo buttons, five aroma strengths, three temperatures, programmable volume and bypass dosing', grinder: 'Flat ceramic burr grinder with five adjustment positions', capacity: '1.8 L water, about 250 g beans and up to 15 coffee pucks', dimensions: 'About 22.1 W by 34 H by 43 D cm; allow top tank and hopper access', interface: 'LED or LCD status interface with physical drink, steam, hot-water and menu buttons',
    primaryStrength: 'A narrow, straightforward black-coffee machine with a manual milk option', primaryLimit: 'Milk drinks require a separate steaming step and the five-step grinder leaves limited fine correction',
    videoId: 'mFpFLv-ak1k', videoTitle: 'Review: Gaggia Anima Super-Automatic Espresso Machine', videoCreator: 'Whole Latte Love', videoDate: '2015-11-06', independent: 'https://coffeeblog.co.uk/gaggia-anima-bean-to-cup-coffee-machine-review/', owner: 'https://www.reddit.com/r/superautomatic/search/?q=Gaggia%20Anima&restrict_sr=1', rating: [7.7, 6.8, 7.9, 7.4, 7.2, 7.3],
  },
  {
    key: 'gaggia-anima-deluxe', slug: '/espresso-machine/gaggia-anima-deluxe/', productId: 'CD-EM-000166', model: 'Anima Deluxe', sku: 'RI8759/01 and regional Anima Deluxe family',
    title: 'Gaggia Anima Deluxe review: convenient tube-fed foam, with cleanup attached',
    description: 'A research-led Gaggia Anima Deluxe review covering RI8759/01 identity, Cappuccinatore milk, ceramic grinder, current refurbished price, workflow, care and region differences.',
    image: 'https://www.gaggia.com/app/uploads/2023/07/AnimaDeluxe_int_variante_1200x1520.png', imageAlt: 'Silver-front Gaggia Anima Deluxe with automatic Cappuccinatore milk system',
    official: 'https://www.gaggia.com/automatic-machines/anima-deluxe/', manual: 'https://www.gaggiadirect.com/uploads/2/5/0/9/25099443/gaggia_anima_deluxe_user_manual.pdf', priceUrl: 'https://www.wholelattelove.com/products/refurbished-gaggia-anima-deluxe-super-automatic-espresso-machine', priceLabel: 'Whole Latte Love refurbished reference', price: '$490.62', priceNumeric: '490.62', priceContext: 'Sold-out refurbished US listing against a stated $749 comparison price and six-month limited warranty; not a new-stock price',
    exactIdentity: 'Anima Deluxe with Cappuccinatore tube system; the official RI8759/01 record is European, while US refurbished listings can use a regional 120V suffix.',
    milkSystem: 'Automatic Cappuccinatore draws milk from a separate container through a tube and dispenses foam into the cup; no refrigerated integrated carafe', drinkSystem: 'Espresso, espresso lungo, milk froth and hot water, with five aroma levels, three temperatures and memo volume', grinder: 'Flat ceramic burr grinder with five adjustment positions', capacity: '1.8 L water, 150-250 g bean references by market, and up to 15 pucks', dimensions: '22.1 W by 34 H by 43 D cm; 8.3 kg in official global data', interface: 'LCD plus physical buttons with dedicated coffee, milk-froth and hot-water actions',
    primaryStrength: 'Push-button tube-fed milk foam without storing a proprietary carafe', primaryLimit: 'The milk hose and Cappuccinatore demand prompt cleaning and the checked US unit was refurbished and sold out',
    videoId: 'ctOSg4F-2eQ', videoTitle: 'Review: Gaggia Anima Deluxe Espresso Machine', videoCreator: 'Whole Latte Love', videoDate: '2015-11-09', independent: 'https://www.wholelattelove.com/products/refurbished-gaggia-anima-deluxe-super-automatic-espresso-machine', owner: 'https://www.reddit.com/r/superautomatic/search/?q=Anima%20Deluxe&restrict_sr=1', rating: [7.7, 8.1, 8.0, 7.4, 7.6, 7.5],
  },
  {
    key: 'gaggia-anima-prestige', slug: '/espresso-machine/gaggia-anima-prestige/', productId: 'CD-EM-000167', model: 'Anima Prestige', sku: 'Anima Prestige North America 120V',
    title: 'Gaggia Anima Prestige review: compact one-touch milk at $849',
    description: 'A research-led Gaggia Anima Prestige review covering its removable milk carafe, four one-touch beverages, five-step ceramic grinder, current $849 US price, cleaning and ownership.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/AnimaPrestigeOption2_IMG_9772_01_a2acf6fd-7d1b-4a17-9382-66147f5335c4_1024x1024.jpg?v=1571331690', imageAlt: 'Gaggia Anima Prestige with stainless front and integrated milk carafe',
    official: 'https://www.gaggia-na.com/products/gaggia-anima-prestige', manual: 'https://www.gaggia.com/app/uploads/2023/07/421946045941-Anima-00-USA_Prestige-Class.pdf', priceUrl: 'https://www.gaggia-na.com/products/gaggia-anima-prestige', priceLabel: 'Gaggia North America direct price', price: '$849.00', priceNumeric: '849.00', priceContext: 'New US 110-120V listing with integrated carafe; tax, finish, stock and warranty vary',
    exactIdentity: 'Current North American Anima Prestige with integrated carafe, stainless front panel, four one-touch beverages and 110-120V electrical package.',
    milkSystem: 'Removable double-chamber automatic milk carafe with quick-clean cycle and separate hot-water spout', drinkSystem: 'Espresso, espresso lungo, cappuccino, latte macchiato and milk foam with memo volumes, five strengths and three temperatures', grinder: 'Flat ceramic burr grinder with five adjustment positions and adapting logic', capacity: 'About 60 oz water, 8.8 oz beans, 17 oz milk and 15 pucks in North American listing', dimensions: 'About 8.8 W by 13.4 H by 16.9 D in; top and front access required', interface: 'Blue LCD and direct physical beverage buttons with status and maintenance prompts',
    primaryStrength: 'A slim integrated-carafe workflow for cappuccino and latte macchiato at one touch', primaryLimit: 'Carafe convenience brings milk storage and disassembly, while there are no named user profiles',
    videoId: 'Xjt07jsfhCA', videoTitle: 'Review: Gaggia Anima Prestige Espresso Machine', videoCreator: 'Whole Latte Love', videoDate: '2015-11-11', independent: 'https://www.wholelattelove.com/products/gaggia-anima-prestige-super-automatic-espresso-machine', owner: 'https://www.reddit.com/r/superautomatic/comments/1dco6z8/gaggia_worth_it/', rating: [7.8, 8.8, 8.7, 7.6, 8.0, 7.7],
  },
  {
    key: 'gaggia-babila-ri9700', slug: '/espresso-machine/gaggia-babila-ri9700/', productId: 'CD-EM-000168', model: 'Babila RI9700/64', sku: 'RI9700/64 (SUP046DG)',
    title: 'Gaggia Babila RI9700 review: deep control in a discontinued flagship',
    description: 'A research-led Gaggia Babila RI9700/64 review covering its 15-step ceramic grinder, Espresso Plus flow control, dual milk paths, sold-out price, care and used-buying risks.',
    image: 'https://www.cerinicoffee.com/cdn/shop/products/RI9700_60_01_RGB__F_copia__81230.1575066680.1280.1280.jpg?v=1608052507', imageAlt: 'Stainless Gaggia Babila RI9700 automatic espresso machine with milk carafe',
    official: 'https://www.gaggiadirect.com/babila-range.html', manual: 'https://wiki.wholelattelove.com/images/5/5e/Gaggia-Babila-Manual.pdf', priceUrl: 'https://www.cerinicoffee.com/products/gaggia-babila-espresso-machine', priceLabel: 'Cerini Coffee sold-out US reference', price: '$1,888.95', priceNumeric: '1888.95', priceContext: 'Sold-out RI9700/64 listing against $1,993.95 comparison price; the complete machine is legacy stock, not current Gaggia flagship production',
    exactIdentity: 'North American RI9700/64, service platform SUP046DG. RI9700/60 and other suffixes change voltage and regional package; this is not the current Accademia.',
    milkSystem: 'Integrated automatic carafe plus separate stainless hot-water and steam dispenser, supporting both one-touch and manual finishing', drinkSystem: 'Eight programmable beverages, five aroma levels, three temperatures, adjustable prebrew and manual Espresso Plus flow control', grinder: 'Ceramic burr grinder with 15 adjustment positions', capacity: 'About 1.5 L water, 300 g beans and 11 pucks', dimensions: 'About 24.5 W by 36 H by 42 D cm; roughly 13.4 kg', interface: 'Color TFT with physical multi-beverage controls; no named multi-user profiles',
    primaryStrength: 'Fifteen grinder steps, flow control and both automatic and manual milk paths', primaryLimit: 'The platform is discontinued, expensive as old stock and dependent on exact-model parts and service',
    videoId: 'cLibV1dgwiE', videoTitle: 'Review: Gaggia Accademia and Babila Automatic Coffee Machines', videoCreator: 'Whole Latte Love', videoDate: '2019-08-30', independent: 'https://www.wholelattelove.com/blogs/reviews/gaggia-babila-review', owner: 'https://www.reddit.com/r/superautomatic/comments/1o01x7a/help_bought_a_second_hand_gaggia_babila_keeps/', rating: [8.8, 9.0, 8.3, 7.6, 8.8, 6.6],
  },
  {
    key: 'gaggia-cadorna-barista-plus-ri9603-47', slug: '/espresso-machine/gaggia-cadorna-barista-plus-ri9603-47/', productId: 'CD-EM-000169', model: 'Cadorna Barista Plus RI9603/47', sku: 'RI9603/47 North America',
    title: 'Gaggia Cadorna Barista Plus RI9603/47 review: profiles meet a real steam wand',
    description: 'A research-led Gaggia Cadorna Barista Plus RI9603/47 review covering four profiles, six coffee beverages, two-hole steam wand, ten-step ceramic grinder, $899 price and care.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/CadornaOption2_IMG_9859_03_1024x1024.jpg?v=1592517142', imageAlt: 'Black Gaggia Cadorna Barista Plus with color display and stainless steam wand',
    official: 'https://www.gaggia-na.com/products/gaggia-cadorna-barista-plus', manual: 'https://www.gaggia.com/automatic-machines/cadorna-plus-barista/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-cadorna-barista-plus', priceLabel: 'Gaggia North America direct price', price: '$899.00', priceNumeric: '899.00', priceContext: 'Current US 110-120V direct listing; tax, stock and warranty vary',
    exactIdentity: 'North American RI9603/47 Cadorna Barista Plus with black ABS body, four profiles, color TFT and two-hole manual stainless wand.',
    milkSystem: 'Pivoting commercial-style stainless steam wand with two-hole tip and insulated grip; milk texture and cleanup are manual', drinkSystem: 'Six listed coffee beverages plus hot water and steam, four profiles, five strengths, three temperatures and adjustable volume', grinder: 'Flat ceramic burr grinder with ten adjustment positions', capacity: '1.5 L water, 10.58 oz beans, 18 oz tray and 10 pucks', dimensions: '10.2 W by 15 H by 17.3 D in; 20.5 lb', interface: 'Full-color TFT plus backlit buttons with four named user profiles',
    primaryStrength: 'Saved profiles and automatic coffee paired with a capable two-hole manual steam wand', primaryLimit: 'Milk is not one-touch and the wand-to-coffee sequence still asks the user to learn texture and clean immediately',
    videoId: '66liV-9I5-U', videoTitle: 'Gaggia Cadorna Barista Plus unboxing, features, review', videoCreator: 'Jess - Gadgets, Gear, Coffee', videoDate: '2020-11-24', independent: 'https://www.gadgetsgearcoffee.com/gaggia-cadorna-barista-plus-unboxing-features-review-superautomatic-espresso-latte-art-steam-wand', owner: 'https://www.reddit.com/r/superautomatic/comments/1buyys7/gaggia_cadorna_barista_plus_user_experience/', rating: [8.1, 8.9, 8.6, 7.6, 8.8, 8.0],
  },
];

export const upgradeGaggiaAReviews: MachineReviewData[] = products.map((product) => buildUpgradeReview(makeProfile(product)));
