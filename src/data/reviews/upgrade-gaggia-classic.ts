import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
type ClassicConfig = {
  key: string; slug: string; productId: string; model: string; sku: string;
  title: string; description: string; image: string; imageAlt: string;
  official: string; manual: string; priceUrl: string; priceLabel: string;
  price: string; priceNumeric: string; priceContext: string;
  exactIdentity: string; architecture: string; brew: string; milk: string;
  controls: string; capacity: string; dimensions: string;
  strength: string; limit: string;
  portafilter?: string; pidAnswer?: string;
  videoId: string; videoTitle: string; videoCreator: string; videoDate: string;
  independent: string; owner: string; rating: [number, number, number, number, number, number];
};

const dim = (score: number, claim: string, consequence: string, signals: [string, string, string]): DimensionCopy => ({
  score,
  claim,
  consequence,
  status: 'Official documentation, exact-generation market context, independent evaluation and owner evidence checked September 23, 2026',
  signals,
});

const makeProfile = (p: ClassicConfig): UpgradeReviewProfile => ({
  key: p.key,
  slug: p.slug,
  productId: p.productId,
  brand: 'Gaggia',
  model: p.model,
  sku: p.sku,
  category: p.model.includes('GT')
    ? 'Dual-boiler prosumer espresso machine'
    : p.model.includes('Espresso Evolution')
      ? 'PID-controlled manual espresso machine'
      : 'Single-boiler semi-automatic espresso machine',
  brandPath: '/gaggia/',
  title: p.title,
  description: p.description,
  verdictLabel: `For home baristas who want ${p.strength.toLowerCase()}`,
  verdict: `Choose the ${p.model} for ${p.strength.toLowerCase()}. Skip it when ${p.limit.toLowerCase()} conflicts with the normal drink routine.`,
  assessment: `${p.strength} The central trade-off is ${p.limit.toLowerCase()}`,
  image: p.image,
  imageAlt: p.imageAlt,
  published: '2026-07-27',
  updated: '2026-09-23',
  price: { label: p.priceLabel, msrp: p.price, typical: p.priceContext, currency: 'USD', numeric: p.priceNumeric, checked: 'September 23, 2026' },
  links: [
    { label: 'Check exact listing or product record', href: p.priceUrl, note: `${p.priceLabel}; verify generation, boiler, voltage, condition and warranty`, primary: true },
    { label: 'Open official product information', href: p.official, note: 'Manufacturer identity, architecture and specification record' },
  ],
  facts: [
    { label: 'Exact identity', value: p.exactIdentity },
    { label: 'Heating', value: p.architecture },
    { label: 'Brew path', value: p.brew },
    { label: 'Milk system', value: p.milk },
    { label: 'Controls', value: p.controls },
    { label: 'Capacity', value: p.capacity },
    { label: 'Dimensions', value: p.dimensions },
    { label: 'Coffee setup', value: p.portafilter ?? '58 mm portafilter; capable espresso grinder and scale required' },
    { label: 'Service boundary', value: 'Routine cleaning is owner work; boiler, pressure, mains-voltage and internal-water repairs need qualified diagnosis' },
  ],
  quickAnswers: [
    { question: `What exact ${p.model} is reviewed?`, answer: p.exactIdentity },
    { question: 'Does it include a grinder?', answer: 'No. Budget for an espresso-capable grinder, scale and suitable water.' },
    { question: 'What portafilter does it use?', answer: p.portafilter ?? 'A 58 mm professional-style portafilter, with included baskets depending on region and revision.' },
    { question: 'Can it brew and steam together?', answer: p.model.includes('GT') ? 'Yes. Separate brew and steam boilers allow overlapping work.' : 'No. The single dual-use boiler changes temperature between brewing and steaming.' },
    { question: 'Is a PID included?', answer: p.pidAnswer ?? (p.model.includes('GT') ? 'Yes. Brew and steam boilers have separate adjustable PID control.' : 'No. Stock temperature control uses thermostats rather than a user-set PID.') },
    { question: 'Who should buy it?', answer: `A buyer who values ${p.strength.toLowerCase()} and accepts ${p.limit.toLowerCase()}` },
  ],
  bestFor: [p.strength, 'A buyer who already budgets for a capable grinder', 'Hands-on espresso preparation and immediate wand cleaning'],
  avoidIf: [p.limit, 'You want bean-to-cup automation', 'You will not verify the exact generation before buying'],
  pros: [p.strength, p.portafilter ?? '58 mm accessory ecosystem', p.controls, 'Documented service and parts context'],
  cons: [p.limit, 'Separate grinder is required', 'Puck preparation remains manual', 'Generation names are easy to blur in listings'],
  architecture: p.architecture.toLowerCase(),
  identityBoundary: p.exactIdentity,
  primaryStrength: p.strength,
  primaryLimit: p.limit,
  setupNote: 'Verify the rating plate and generation before use, wash removable food-contact parts, prime exactly as the manual directs, set up the grinder and scale, and allow the group and portafilter to warm beyond the first ready indication.',
  espressoNote: `${p.brew} Start from a measured dose and beverage mass, distribute and tamp consistently, then change grind before chasing several variables at once.`,
  milkNote: `${p.milk} Purge condensate, introduce air early, establish circulation, stop before overheating, then wipe and purge immediately.`,
  workflowNote: `${p.controls} Count grinder work, warmup, puck preparation, extraction, steam transition or overlap, knock-out and cleanup.`,
  buildNote: `${p.architecture} ${p.dimensions} Match every replacement part and service instruction to the exact serial, voltage and boiler generation.`,
  featuresNote: `${p.controls} The useful controls are the ones that make pressure, temperature, dose and repeatability easier to manage, not drink names listed on a product page.`,
  valueNote: `${p.priceLabel} was recorded as ${p.price}: ${p.priceContext}`,
  ownerPattern: 'Owner discussions repeatedly cover grinder choice, temperature routine, steam transition, scale control, OPV behavior, modifications and exact-generation parts.',
  ownerCaution: `Listings and owner posts often collapse Classic, Pro, Evo, E24 and GT. They are not interchangeable evidence, and anecdotes cannot establish a failure rate for ${p.sku}.`,
  maintenanceNote: 'Backflush only where the exact manual permits it, clean the group and wand on schedule, use suitable water, and never treat an electrical or pressurized internal repair as routine cleaning.',
  dimensions: {
    espresso: dim(p.rating[0], p.brew, 'The grinder and preparation routine decide whether the architecture becomes repeatable espresso.', [p.architecture, p.controls, 'Dose, grind, puck preparation, water and warmup remain user variables.']),
    milk: dim(p.rating[1], p.milk, 'Steam hardware must be judged with transition, recovery, texture control and cleanup.', [p.milk, p.architecture, 'Milk quantity, pitcher, tip cleanliness and technique change the result.']),
    workflow: dim(p.rating[2], p.controls, 'The complete drink is more revealing than the heater-ready signal.', [p.controls, p.capacity, p.dimensions]),
    build: dim(p.rating[3], 'The Classic chassis and 58 mm group support a long-lived ownership model when the exact revision is understood.', 'Serviceability does not remove electrical, pressure or boiler safety boundaries.', [p.architecture, p.dimensions, 'Exact-generation parts and qualified support matter.']),
    features: dim(p.rating[4], p.controls, 'Useful control should reduce uncertainty in a repeated recipe.', [p.controls, p.brew, p.milk]),
    value: dim(p.rating[5], `${p.price} needs a complete-station comparison.`, 'Add grinder, tools, care, tax, warranty and likely service before ranking value.', [`${p.priceLabel}: ${p.price}`, p.priceContext, 'A suitable grinder can materially change the total.']),
  },
  sources: [
    { label: `Gaggia: ${p.model}`, href: p.official, note: 'Official identity, architecture, materials, capacity, controls and regional product information.' },
    { label: `Gaggia ${p.model} manual`, href: p.manual, note: 'Official setup, operation, steam, cleaning, safety and troubleshooting instructions.' },
    { label: p.priceLabel, href: p.priceUrl, note: `${p.price} context recorded September 23, 2026; stock, tax, condition and warranty can change.` },
    { label: `Independent review: ${p.model}`, href: p.independent, note: 'Independent workflow and comparison context; specifications remain anchored to Gaggia.' },
    { label: p.videoTitle, href: `https://www.youtube.com/watch?v=${p.videoId}`, note: `Independent video by ${p.videoCreator}, published ${p.videoDate}, used for visible workflow context.` },
    { label: 'Gaggia North America product manuals', href: 'https://www.gaggia-na.com/pages/product-manuals', note: 'Official regional manual and support index used to separate current and legacy revisions.' },
    { label: 'Gaggia manual-machine range', href: 'https://www.gaggia.com/manual-machines/', note: 'Official current family context for Classic generations and adjacent manual machines.' },
    { label: `Owner discussion: ${p.model}`, href: p.owner, note: 'Self-selected owner context for workflow, maintenance and generation questions; not incidence evidence.' },
    { label: 'r/gaggiaclassic owner discussions', href: 'https://www.reddit.com/r/gaggiaclassic/', note: 'Broader self-selected community context for grinders, temperature routines, parts and modifications.' },
    { label: 'Gaggia Classic Pro E24 current product page', href: 'https://www.gaggia-na.com/products/gaggia-classic-pro', note: 'Current North American successor context; not evidence that an older Evo has the E24 brass boiler.' },
    { label: 'Barista Hustle water recipe background', href: 'https://www.baristahustle.com/blog/diy-water-recipes-redux/', note: 'Independent water-composition background; the exact Gaggia manual controls machine safety.' },
  ],
  comparisons: [
    { name: p.model, quickDecision: `Choose for ${p.strength.toLowerCase()}.`, priceClass: p.price, dimensions: p.dimensions, heating: p.architecture, coffeeSetup: p.portafilter ?? '58 mm portafilter plus separate grinder', milkWorkflow: p.milk, bestFor: p.strength },
    { name: 'Gaggia Classic Pro E24', href: '/espresso-machine/gaggia-classic-evo/', quickDecision: 'Choose the current brass-boiler single-boiler route when cost and simplicity matter.', priceClass: '$549 current US reference', dimensions: '8 by 9.5 by 14.2 in official listing order', heating: 'Lead-free brass single dual-use boiler', coffeeSetup: '58 mm portafilter; separate grinder', milkWorkflow: 'Sequential manual steam', bestFor: 'Traditional compact learning platform' },
    { name: 'Gaggia Classic GT', href: '/espresso-machine/gaggia-classic-gt/', quickDecision: 'Choose dual boilers, two PIDs, pressure feedback and pre-infusion when faster control earns the cost.', priceClass: '$1,699 current US reference', dimensions: '10.2 by 16.5 by 16.7 in', heating: 'Brass brew boiler plus stainless steam boiler', coffeeSetup: '58 mm portafilter; separate grinder', milkWorkflow: 'Simultaneous commercial-style wand', bestFor: 'Higher-throughput prosumer workflow' },
  ],
  comparisonNote: 'Classic, Classic Pro, 2023 Evo, E24 and GT are different hardware decisions. Verify the rating plate, boiler and region rather than trusting a shortened listing title.',
  recommendations: [
    { kicker: 'Current single boiler', title: 'Gaggia Classic Pro E24', text: 'Choose the brass-boiler current model when a compact traditional platform and grinder budget matter.', href: '/espresso-machine/gaggia-classic-evo/', linkLabel: 'Read the E24 review', featured: !p.model.includes('GT') },
    { kicker: 'Dual-boiler step-up', title: 'Gaggia Classic GT', text: 'Choose dual boilers, PIDs and pre-infusion when milk queues and temperature control justify the jump.', href: '/espresso-machine/gaggia-classic-gt/', linkLabel: 'Read the Classic GT review', featured: p.model.includes('GT') },
    { kicker: 'Faster appliance route', title: 'Breville Bambino', text: 'Choose compact rapid heating when convenience matters more than the Classic platform.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the Bambino review' },
    { kicker: 'Single-boiler PID', title: 'Profitec GO', text: 'Choose a factory PID and pressure display without moving to a dual boiler.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read the Profitec GO review' },
  ],
  faqs: [
    { question: `Which ${p.model} does this page cover?`, answer: p.exactIdentity },
    { question: 'Does it include a grinder?', answer: 'No. A capable espresso grinder is part of the required station.' },
    { question: 'Can it use pre-ground coffee?', answer: 'Yes, but repeatable non-pressurized espresso depends on fresh, suitably fine and adjustable grinding.' },
    { question: 'Can it brew and steam simultaneously?', answer: p.model.includes('GT') ? 'Yes. Its separate brew and steam boilers support overlap.' : 'No. Brewing and steaming use one dual-use boiler in sequence.' },
    { question: 'Is nine bar the same as the pump label?', answer: 'No. Pump capability and brew-pressure calibration describe different points in the hydraulic system.' },
    { question: 'Should I install a modification immediately?', answer: 'Establish a safe stock baseline first. Modifications can affect warranty, electrical safety and diagnosis.' },
    { question: `Is ${p.price} a permanent worldwide price?`, answer: `No. It is the dated ${p.priceLabel.toLowerCase()} context recorded September 23, 2026. Region, tax, stock, condition and warranty vary.` },
    { question: 'How should I use owner reports?', answer: 'Use them to form inspection and service questions, never as a measured reliability rate.' },
  ],
  finalTitle: `${p.model} earns its place only when the workflow fits`,
  finalVerdict: [p.strength, `${p.limit} Verify the exact generation, budget for the grinder, and treat temperature, water and cleaning routines as part of the purchase.`],
  video: { id: p.videoId, title: p.videoTitle, creator: p.videoCreator, published: p.videoDate, note: 'Independent visual workflow evidence. Current specifications, generation and price are verified separately.' },
});

const products: ClassicConfig[] = [
  {
    key: 'gaggia-espresso-evolution-eg2115', slug: '/espresso-machine/gaggia-espresso-evolution-eg2115/', productId: 'CD-EM-000175', model: 'Espresso Evolution EG2115/01', sku: 'EG2115/01 Stone Black, 230V European and UK package',
    title: 'Gaggia Espresso Evolution EG2115 review: PID control at a verified £199',
    description: 'A research-led Gaggia Espresso Evolution EG2115/01 review covering its factory PID, double-wall filter holder, Crema XL system, pannarello, £199 UK listing and limits.',
    image: 'https://www.gaggia.com/app/uploads/2023/10/Espresso-Evolution-Stone-Black-3_4_sx-0001-1.png', imageAlt: 'Stone Black Gaggia Espresso Evolution EG2115 manual espresso machine',
    official: 'https://www.gaggia.com/manual-machines/espresso-evolution/', manual: 'https://www.gaggia.com/product-search/eg2115-01-espresso-evolution/', priceUrl: 'https://www.gaggiadirect.com/caffitaly-capsule-machines.html', priceLabel: 'Gaggia Direct UK listing', price: '£199.00', priceNumeric: '199.00', priceContext: 'Out-of-stock EG2115/01 listing with five-year parts warranty; availability and bundle can change',
    exactIdentity: 'Stone Black 230V EG2115/01 with factory PID, pre-infusion, 1.2 L side tank and Crema XL system; it is not a Gaggia Classic or 58 mm platform.',
    architecture: 'Officially documented stainless-steel boiler, PID, 15-bar pump and pre-infusion', brew: 'ABS and stainless-steel holder with double-wall two-cup and single-cup or ESE-pod filters', milk: 'Classic plastic pannarello; espresso and steaming happen in sequence', controls: 'Backlit buttons and memo volume; no pressure gauge or temperature menu is documented', capacity: '1.2 L side tank; ground coffee and ESE pod support', dimensions: '19.9 W by 25.5 D by 30.3 H cm; 3.7 kg',
    strength: 'Compact PID-assisted entry-level espresso with simple dosing and a side tank', limit: 'Plastic brew hardware, low cup clearance and a non-58 mm accessory path',
    portafilter: 'Gaggia ABS and stainless-steel holder with supplied double-wall filters; not 58 mm',
    pidAnswer: 'Yes. Gaggia documents a factory PID, but no user-adjustable temperature menu or coffee-bed measurement is claimed.',
    videoId: '5S3_93Qlg1c', videoTitle: 'Gaggia Espresso Evolution Review', videoCreator: 'Whole Latte Love', videoDate: '2024-03-25', independent: 'https://coffeeblog.co.uk/gaggia-espresso-style-deluxe-evolution-review/', owner: 'https://www.reddit.com/r/espresso/comments/190sxry/gaggia_espresso_styledeluxeevolution_2023_first/', rating: [7.1, 6.7, 8.2, 6.2, 7.9, 8.2],
  },
  {
    key: 'gaggia-classic-evo', slug: '/espresso-machine/gaggia-classic-evo/', productId: 'CD-EM-000172', model: 'Classic Pro E24', sku: 'Current North American Classic Pro E24, 110-120V',
    title: 'Gaggia Classic E24 review: brass-boiler tradition at $549',
    description: 'A research-led Gaggia Classic Pro E24 review covering its lead-free brass single boiler, 58 mm portafilter, nine-bar calibration, two-hole wand, $549 price and workflow.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/Silver_IMG_9834_03_1000x.progressive.jpg?v=1601493881', imageAlt: 'Stainless Gaggia Classic Pro E24 semi-automatic espresso machine',
    official: 'https://www.gaggia-na.com/products/gaggia-classic-pro', manual: 'https://www.gaggia-na.com/pages/gaggia-classic-e24-manuals', priceUrl: 'https://www.gaggia-na.com/products/gaggia-classic-pro', priceLabel: 'Gaggia North America direct price', price: '$549.00', priceNumeric: '549.00', priceContext: 'Current new North American E24 listing; color, tax, stock and warranty vary',
    exactIdentity: 'Current North American Classic Pro E24 with lead-free brass 3.5 oz boiler, 58 mm stainless portafilter, nine-bar OPV calibration and 110-120V power. This is not the coated-boiler 2023 Evo.',
    architecture: 'Single 3.5 oz lead-free brass dual-use boiler with embedded heater and thermostat control', brew: '58 mm group and portafilter, nine-bar OPV calibration and three-way solenoid without a factory PID', milk: 'Commercial-style rotating stainless wand with insulated grip and two-hole tip; brew and steam happen in sequence', controls: 'Three mechanical rocker switches and indicator lights; shot timing and temperature routine remain manual', capacity: '72 oz removable reservoir, 16 oz drip tray and 7-18 g listed basket range', dimensions: '8 W by 9.5 D by 14.2 H in; 19 lb',
    strength: 'A compact, repairable brass-boiler 58 mm platform that preserves grinder budget', limit: 'No PID, shot timer or simultaneous steam, so consistency depends on routine and grinder quality',
    videoId: 'JB124pMbv24', videoTitle: 'Gaggia Classic Pro E24 Espresso Machine Review', videoCreator: 'Whole Latte Love', videoDate: '2024-10-30', independent: 'https://www.wholelattelove.com/blogs/reviews/gaggia-classic-pro-e24-review', owner: 'https://www.reddit.com/r/gaggiaclassic/comments/1hbksfc/positive_experience_with_new_e24/', rating: [8.0, 7.6, 6.8, 8.2, 6.4, 8.4],
  },
  {
    key: 'gaggia-classic-evo-pro', slug: '/espresso-machine/gaggia-classic-evo-pro/', productId: 'CD-EM-000173', model: 'Classic Evo Pro RI9380/46', sku: '2023 North American RI9380/46 Classic Evo Pro',
    title: 'Gaggia Classic Evo Pro review: identify the 2023 boiler before buying',
    description: 'A research-led Gaggia Classic Evo Pro RI9380/46 review covering the 2023 coated aluminum boiler, 58 mm portafilter, nine-bar setup, used-buying checks and successor context.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/Silver_IMG_9834_03_1000x.progressive.jpg?v=1601493881', imageAlt: 'Stainless Gaggia Classic family machine representing the 2023 Evo Pro exterior',
    official: 'https://www.gaggia.com/app/uploads/2023/07/4219-465-10461-MANUAL-GAG.-CLASSIC-USA-Rev-00_New_Classic_Evo.pdf', manual: 'https://www.gaggia.com/app/uploads/2023/07/4219-465-10461-MANUAL-GAG.-CLASSIC-USA-Rev-00_New_Classic_Evo.pdf', priceUrl: 'https://www.wholelattelove.com/blogs/reviews/introducing-the-gaggia-classic-evo-pro', priceLabel: 'Documented 2023 launch price', price: '$499.00', priceNumeric: '499.00', priceContext: 'Historical launch reference, not a current new-stock offer; used and old-stock condition, boiler history and warranty must be checked individually',
    exactIdentity: 'North American 2023 RI9380/46 Classic Evo Pro with the factory-coated aluminum boiler, not the later E24.',
    architecture: 'Single coated-aluminum dual-use boiler with thermostat control', brew: '58 mm portafilter, nine-bar calibration and three-way solenoid without a PID', milk: 'Manual wand; brewing, steaming and cooling happen in sequence', controls: 'Three rocker switches, manual shot stop and no temperature display', capacity: 'About 72 oz reservoir and 16 oz tray', dimensions: 'About 8 W by 9.5 D by 14.2 H in; verify the rating plate',
    strength: 'A low-cost 58 mm Classic platform when the exact boiler history and condition are documented', limit: 'The 2023 coated-boiler generation carries unresolved used-buying uncertainty and has been superseded by E24',
    videoId: 'LSTzXjZ4fW0', videoTitle: 'Gaggia Classic EVO Pro Review: Upgrade?', videoCreator: 'Lifestyle Lab', videoDate: '2023-09-16', independent: 'https://coffeegeek.com/reviews/firstlooks/gaggia-classic-evo-pro-espresso-machine-first-look/', owner: 'https://www.reddit.com/r/gaggiaclassic/comments/1ikhxej/gaggia_classic_evo_pro_boilergate_any_fix_this_is/', rating: [7.6, 7.1, 6.5, 6.2, 6.2, 5.8],
  },
  {
    key: 'gaggia-classic-gt', slug: '/espresso-machine/gaggia-classic-gt/', productId: 'CD-EM-000174', model: 'Classic GT', sku: 'Classic GT North America 120V',
    title: 'Gaggia Classic GT review: dual boilers, dual PIDs and pre-infusion at $1,699',
    description: 'A research-led Gaggia Classic GT review covering its brass brew boiler, 0.9 L steam boiler, dual PIDs, low-flow pre-infusion, volumetric shots, $1,699 price and ownership.',
    image: 'https://www.gaggia-na.com/cdn/shop/files/GaggiaClassicGTHeadline2_1000x.progressive.jpg?v=1741205137', imageAlt: 'Stainless Gaggia Classic GT dual-boiler espresso machine with color display',
    official: 'https://www.gaggia-na.com/products/gaggia-classic-gt', manual: 'https://www.gaggia-na.com/pages/gaggia-classic-gt-manuals', priceUrl: 'https://www.gaggia-na.com/products/gaggia-classic-gt', priceLabel: 'Gaggia North America direct price', price: '$1,699.00', priceNumeric: '1699.00', priceContext: 'Current new 120V direct listing; tax, stock and warranty vary',
    exactIdentity: 'Current North American 120V Classic GT with brass brew boiler, stainless steam boiler, two PIDs and adjustable OPV.',
    architecture: 'Dual PID boilers: 3.4 oz brass brew plus 30.4 oz stainless steam', brew: '58 mm portafilter, gauge, volumetric option, adjustable OPV and manual or automatic low-flow pre-infusion', milk: 'Articulated one-hole wand with four steam settings and simultaneous brewing', controls: 'Five toggles, 2.4-inch TFT, capacitive buttons, dual PID settings and programmable volume', capacity: '67.6 oz reservoir, 24 oz tray and 11-18 g baskets', dimensions: '10.2 W by 16.5 D by 16.7 H in; 39 lb',
    strength: 'Classic familiarity with dual-boiler pace, temperature control, pressure feedback and programmable pre-infusion', limit: 'The $1,699 price and larger 39 lb station compete with mature prosumer alternatives',
    videoId: 'tQLgSfOxpjc', videoTitle: 'Gaggia Classic GT Review: Just a Dual Boiler Classic?', videoCreator: 'Coffee Kev', videoDate: '2025-10-20', independent: 'https://coffeeblog.co.uk/gaggia-classic-gt-dual-boiler-review/', owner: 'https://www.home-barista.com/marketplace/gaggia-classic-gt-available-for-purchase-t100997.html', rating: [8.8, 9.0, 8.8, 8.5, 9.1, 7.7],
  },
];

export const upgradeGaggiaClassicReviews: MachineReviewData[] = products.map((product) => buildUpgradeReview(makeProfile(product)));
