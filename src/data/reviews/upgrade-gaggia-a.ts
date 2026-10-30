import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
type ProductConfig = {
  overview: string; updated?: string;
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

type OwnershipCopy = Pick<UpgradeReviewProfile, 'setupNote' | 'workflowNote' | 'ownerPattern' | 'maintenanceNote'>;
const ownership: Record<string, OwnershipCopy> = {
  'gaggia-magenta-prestige-ri8702': {
    setupNote: 'Check for RI8702/46 and the North American Over-Ice menu before comparing offers. Leave room in front for the tank, tray and carafe, then save the drink used most. Separate household members cannot each keep a named profile on this model.',
    workflowNote: 'Magenta replaces pitcher technique with carafe handling. Its thirteen selections help when the household orders different drinks, but changing a shared beverage setting can affect the next person. Agree on a default cappuccino before tuning the less frequently used recipes.',
    ownerPattern: 'The useful home demonstration is two people ordering different milk drinks from the small TFT. Watch how the saved settings are changed and how the carafe comes off afterward. If personal presets are the missing convenience, compare a four-profile Cadorna instead of paying for menu breadth alone.',
    maintenanceNote: 'The approximately 17 oz carafe can be refrigerated between uses; that storage option does not clean its dispensing path. Include carafe disassembly, removable-group care and the milk rinse in the comparison with a simpler black-coffee automatic.',
  },
  'gaggia-naviglio-deluxe-hd8749': {
    setupNote: 'This silver HD8749/11 is a 230 V UK and European purchase. Confirm local electrical compatibility first, then check that the Cappuccinatore and tube are present. A front-removable 1.5 L tank helps under cabinets, while the 44 cm body still needs substantial counter depth.',
    workflowNote: 'Three Optiaroma positions and memo volume make this a focused espresso-and-lungo appliance. The Deluxe adds tube-fed froth rather than a stored integrated carafe. Set a milk container beside it and assess the hose reach before deciding that the front-access layout fits the whole station.',
    ownerPattern: 'For a used Deluxe, ask to see milk drawn through the actual supplied attachment. A working coffee cycle does not demonstrate a complete Cappuccinatore. Check that the spout range of roughly 70–110 mm accepts the cups you intend to use.',
    maintenanceNote: 'Remove and rinse the tube-fed frother promptly after milk. The 10-puck bin and rinse water create separate emptying jobs: a 300 g hopper should not be mistaken for enough waste capacity to run through all those beans unattended.',
  },
  'gaggia-naviglio-milk-hd8749-01': {
    setupNote: 'Ignore the word “Milk” in this historical route: HD8749/01 is the black 230 V Naviglio with a manual plastic pannarello. Verify photographs and the code before ordering, especially if the advertised reason to buy is automatic cappuccino.',
    workflowNote: 'Prepare the coffee with the espresso or lungo button, then move to a pitcher and steam manually. The pannarello supplies aeration assistance; it does not turn this into the tube-fed Deluxe or Capp-in-Cup Naviglio Milk. That distinction changes the work on every milk drink.',
    ownerPattern: 'The purchase test is whether a basic front-access coffee machine plus a separate milk step suits the user. Ask the seller to show the pannarello rather than demonstrate a similarly named Naviglio. A lower price cannot replace milk hardware that is absent from this code.',
    maintenanceNote: 'The removable pannarello needs cleaning after steaming, in addition to brew-group care. Clear the 10-puck bin and front tray regularly; taking the water tank out from the front is convenient only when the counter remains clear enough for removal.',
  },
  'gaggia-velasca-prestige-ri8263': {
    setupNote: 'RI8263/47 is the North American carafe-equipped Velasca Prestige. Check your actual cup against its 2.75–4.5 in spout range before buying accessories. Start with a familiar bean so the ten grinder positions and adjustable pre-infusion can be assessed separately.',
    workflowNote: 'Dedicated cappuccino gives Velasca Prestige a more direct milk routine than the plain Velasca. The monochrome display and buttons suit repeating a few drinks; named profiles are absent. Tall mugs and several users changing the same recipe expose its limitations sooner than a single espresso order.',
    ownerPattern: 'Ask for a cappuccino demonstration using your normal cup shape, then remove and refit the carafe. Its low dispensing clearance can matter more than the extra grinder steps. For a shared household wanting personal recipes, compare the Cadorna interfaces before treating this as the obvious upgrade.',
    maintenanceNote: 'Refrigerating the detachable carafe preserves convenient storage between sessions, while its milk parts still require cleaning. Use the removable brew-group routine as well; the hot-water service outlet and carafe are different components to account for when checking an older package.',
  },
  'gaggia-anima': {
    setupNote: 'The standard North American Anima has a pannarello, not a carafe. Measure overhead access for the tank and hopper as well as its approximately 22.1 cm width. Plan a pitcher beside it if occasional milk is part of the reason for buying.',
    workflowNote: 'Use the two coffee buttons as repeatable espresso and lungo choices, with strength and temperature set for the usual bean. A milk drink adds a separate steaming operation. This is a coherent compromise for mostly black coffee; frequent cappuccinos make the Prestige’s different milk hardware more relevant.',
    ownerPattern: 'Five grinder positions give less room for fine correction than the ten-step Velasca. Before blaming the machine for an unsuitable drink, compare the programmed beverage length and strength with the coffee you actually want. A larger milk menu is not the remedy when the household mostly drinks espresso.',
    maintenanceNote: 'Rinse the owner-removable brew group according to Anima guidance and clean the pannarello after use. Up to 15 pucks of waste capacity reduces one interruption, but the top-access tank and tray still need to remain reachable in a narrow installation.',
  },
  'gaggia-anima-deluxe': {
    setupNote: 'Identify the Deluxe’s Cappuccinatore and external milk hose before considering a refurbished offer. The checked US example was sold out, so its price is historical context. The RI8759/01 family also spans regions; verify the supplied electrical package rather than assuming North American compatibility.',
    workflowNote: 'Deluxe automates froth without a proprietary refrigerator carafe. That suits someone happy to place a milk container beside the machine and manage the tube. It still requires arranging coffee and milk actions, so compare a full cappuccino sequence with the Prestige’s integrated-carafe approach.',
    ownerPattern: 'For a refurbished Deluxe, the practical questions are which milk fittings are included, who performed the work and what the written warranty covers. A clean exterior and a successful espresso do not establish that the hose-fed frother is complete or hygienic.',
    maintenanceNote: 'The milk hose and Cappuccinatore must be cleaned promptly, even when the separate container is put away. Allow space to handle wet fittings. Check the actual hopper specification on the regional unit: the existing records vary from 150 to 250 g.',
  },
  'gaggia-anima-prestige': {
    setupNote: 'Leave both top access and front clearance around the slim 8.8 in body. Fit the supplied double-chamber carafe and separate hot-water spout before trying the saved milk recipes. This is the Anima variant to verify when the intended purchase is one-touch cappuccino.',
    workflowNote: 'Prestige concentrates on espresso, lungo, cappuccino and latte macchiato through direct buttons. That is useful when a small recurring drink order matters more than exploring a large touchscreen menu. There are no named user profiles, so agree on the saved volumes in a shared kitchen.',
    ownerPattern: 'The meaningful comparison with standard Anima is the time spent finishing a milk drink and restoring the station afterward. Demonstrate the quick-clean cycle and carafe removal, not just the first cappuccino. If several people need separate recipes, the missing profiles remain a reason to look elsewhere.',
    maintenanceNote: 'Treat the double-chamber carafe as an assembly to clean, not simply a milk bottle. Follow its quick-clean and disassembly instructions, then store it as directed. Check that an old-stock package still includes the separate hot-water spout when budgeting for a complete machine.',
  },
  'gaggia-babila-ri9700': {
    setupNote: 'Babila RI9700/64 is a discontinued platform, so establish parts support and seller protection before learning its settings. Check both milk outlets, all carafe pieces and the Espresso Plus control. A low old-stock headline price is incomplete when a missing fitting prevents the intended workflow.',
    workflowNote: 'The fifteen-position grinder, adjustable prebrew and manual flow control offer several ways to alter the same cup. Establish a normal espresso before changing flow. Babila is most persuasive when both automatic carafe drinks and the separate manual milk path will be used; it does not add named household profiles.',
    ownerPattern: 'A demonstration should exercise the flow control and both milk paths, rather than run an ordinary black coffee alone. Ask the service provider about this SUP046DG platform specifically. The broader feature set is valuable only if the actual older unit is complete and supportable.',
    maintenanceNote: 'Two milk routes mean two sets of care instructions to understand. Clean the automatic carafe after use and attend to the separate steam dispenser when used manually. With discontinued stock, verify replacement milk fittings before assuming a cleaning problem will be inexpensive to fix.',
  },
  'gaggia-cadorna-barista-plus-ri9603-47': {
    setupNote: 'The reviewed North American Barista Plus is RI9601/47 despite the historical RI9603-47 route. Match that rating plate and the two-hole stainless wand. Set up the four profiles for the actual household members before adjusting everyone’s shared bean and grind.',
    workflowNote: 'Cadorna Barista Plus automates grinding and coffee preparation while leaving milk texture to the user. Save a coffee recipe per profile, then learn the pivoting two-hole wand separately. It suits someone who wants personal coffee settings without giving up pitcher control; it is not one-touch milk.',
    ownerPattern: 'Have each regular user select a profile and prepare their normal drink. The useful test is whether the manual wand is a welcome skill or an unwanted extra job. Compare Cadorna Milk for tube-fed froth and Prestige for a removable carafe if automatic milk is the actual goal.',
    maintenanceNote: 'Wipe and purge the two-hole wand immediately after texturing. An 18 oz tray also collects rinse water, so its capacity is not reserved solely for accidental spills. Keep access for the 10-puck bin when positioning the larger, 17.3 in deep Cadorna body.',
  },
  'gaggia-cadorna-milk': {
    setupNote: 'Reserve counter space for the separate 0.5 L container and route the Capp-in-Cup tube before judging the machine’s footprint. Four profiles can save individual preferences, but only three milk specialties are one-touch; confirm the household’s preferred drinks against the actual ten-beverage menu.',
    workflowNote: 'Capp-in-Cup trades an attached carafe for a hose leading to a separate milk container. This can suit a refrigerator layout that makes an integrated carafe awkward, while adding something to position and rinse at the counter. The choice against Prestige is primarily milk handling, not the shared ten-step grinder.',
    ownerPattern: 'Watch a milk drink from container placement through cleanup. If moving and rinsing the tube irritates the intended user, four profiles will not fix that burden. Conversely, someone who dislikes refrigerating a proprietary carafe may find this the more sensible Cadorna.',
    maintenanceNote: 'Clean the Capp-in-Cup tube and dispensing path after milk use, along with the separate container. Do not count the 0.5 L supply as an invitation to leave milk on the counter. The removable brew group has its own care routine independent of the milk hardware.',
  },
  'gaggia-cadorna-prestige': {
    setupNote: 'Confirm the North American Over-Ice revision when comparing a fifteen-drink Prestige with older reviews. Check that the 0.6 L carafe fits the intended refrigerator shelf and leaves removal room at the counter. Create the four profiles around real drink orders rather than copying factory quantities.',
    workflowNote: 'Seven one-touch milk specialties and four profiles make Prestige useful when several people want different recurring milk drinks. Over-Ice is a programmed hot extraction served with ice, not cold brew. Compare that actual use with Cadorna Milk’s external tube before paying for the wider menu.',
    ownerPattern: 'Ask to see the favorite milk recipe selected from two different profiles and the carafe put away afterward. Menu breadth earns its cost when those saved choices are used regularly. A household drinking one unchanged espresso will gain less from this Cadorna’s most distinctive hardware.',
    maintenanceNote: 'The removable 0.6 L carafe brings refrigerator storage and additional pieces to dismantle and wash. Include that work when choosing between automatic milk and Barista Plus’s manual wand. Emptying the tray and ten-puck bin remains separate from milk-system care.',
  },
};

const alternativeReasons: Record<string, [string, string, string, string]> = {
  'gaggia-magenta-prestige-ri8702': [
    'A more focused carafe menu if Magenta’s extra specialties go unused.',
    'Gain personal profiles while exchanging Magenta’s automatic milk for pitcher control.',
    'Add a separate professional wand alongside the automatic carafe.',
    'Leave automatic preparation behind for a grinder and hand-prepared espresso.',
  ],
  'gaggia-naviglio-deluxe-hd8749': [
    'Replace the Deluxe’s external milk hose with a removable integrated carafe.',
    'Choose saved household profiles and manual milk over Naviglio’s simple buttons.',
    'Compare two milk paths if tube-fed foam feels too restrictive.',
    'Choose direct extraction control instead of Naviglio’s automatic coffee preparation.',
  ],
  'gaggia-naviglio-milk-hd8749-01': [
    'Automate cappuccino instead of steaming with the HD8749/01 pannarello.',
    'Keep milk manual while adding profiles and a two-hole wand.',
    'Explore carafe drinks with an additional separate wand for manual finishing.',
    'Accept separate grinding to gain a 58 mm manual brewing platform.',
  ],
  'gaggia-velasca-prestige-ri8263': [
    'Compare a narrower carafe machine with five rather than ten grinder steps.',
    'Trade Velasca’s automatic milk for four profiles and manual texture.',
    'Retain automatic milk while adding a professional wand option.',
    'Choose independent grinder upgrades and direct portafilter preparation.',
  ],
  'gaggia-anima': [
    'Stay in the Anima family and replace manual milk with a carafe.',
    'Gain ten grinder positions, personal profiles and a two-hole steam wand.',
    'Consider both automatic and manual milk rather than a pannarello alone.',
    'Move from automatic dosing to weighing and preparing each puck yourself.',
  ],
  'gaggia-anima-deluxe': [
    'Exchange the Deluxe’s external tube for integrated-carafe milk preparation.',
    'Compare a profile-based manual-wand alternative to the refurbished Deluxe.',
    'Evaluate a dual-milk-path upgrade before paying for old Deluxe stock.',
    'Separate the grinder and brewer instead of buying another integrated automatic.',
  ],
  'gaggia-anima-prestige': [
    'Use an external milk container instead of refrigerating Anima’s proprietary carafe.',
    'Save four users’ recipes while taking manual control of the pitcher.',
    'Keep carafe convenience and add a separate professional milk wand.',
    'Prioritize espresso technique over Anima’s direct cappuccino buttons.',
  ],
  'gaggia-babila-ri9700': [
    'Accept simpler adjustment and carafe-only milk instead of Babila’s breadth.',
    'Choose saved profiles and manual steam without Babila’s dual milk hardware.',
    'Compare the alternative that also offers automatic and manual milk paths.',
    'Build an independently upgradeable grinder-and-portafilter station rather than hunting Babila parts.',
  ],
  'gaggia-cadorna-barista-plus-ri9603-47': [
    'Automate milk with a simpler interface when profiles are less important.',
    'Keep four profiles and automate milk with the Prestige’s removable carafe.',
    'Add a carafe while retaining a separate professional wand.',
    'Keep manual milk and take charge of coffee preparation too.',
  ],
  'gaggia-cadorna-milk': [
    'Choose an attached carafe instead of Cadorna Milk’s external hose.',
    'Retain profiles but replace Capp-in-Cup with deliberate pitcher technique.',
    'Compare both milk methods before committing to external-container handling.',
    'Replace stored automatic recipes with a fully manual espresso station.',
  ],
  'gaggia-cadorna-prestige': [
    'Choose a smaller recurring milk menu when fifteen specialties are unnecessary.',
    'Keep the four profiles while exchanging carafe care for wand technique.',
    'Add a professional wand if carafe-only milk limits your drinks.',
    'Choose direct brewing control when milk-menu convenience is secondary.',
  ],
};

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
  overview: p.overview,
  description: p.description,
  verdictLabel: `For households that want ${p.primaryStrength.toLowerCase()}`,
  verdict: `Choose the ${p.model} for ${p.primaryStrength.toLowerCase()}. Skip it when ${p.primaryLimit.toLowerCase()} is a deal-breaker or you want direct portafilter control.`,
  assessment: `${p.primaryStrength} The trade-off is ${p.primaryLimit.toLowerCase()}`,
  image: p.image,
  imageAlt: p.imageAlt,
  published: '2026-07-27',
  updated: p.updated ?? '2026-09-23',
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
  setupNote: ownership[p.key].setupNote,
  espressoNote: p.drinkSystem,
  milkNote: p.milkSystem,
  workflowNote: ownership[p.key].workflowNote,
  buildNote: `${p.dimensions}. The brew group is removable for cleaning.`,
  featuresNote: p.interface,
  valueNote: `${p.priceLabel} showed ${p.price}: ${p.priceContext}`,
  ownerPattern: ownership[p.key].ownerPattern,
  ownerCaution: `Owner evidence is anecdotal. ${p.primaryLimit}.`,
  maintenanceNote: ownership[p.key].maintenanceNote,
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
  comparisonNote: `${p.model}: ${p.primaryStrength}. The limiting factor in this comparison is ${p.primaryLimit.toLowerCase()}.`,
  recommendations: [
    { kicker: 'Alternative milk handling', title: p.key === 'gaggia-anima-prestige' ? 'Gaggia Cadorna Milk' : 'Gaggia Anima Prestige', text: alternativeReasons[p.key][0], href: p.key === 'gaggia-anima-prestige' ? '/espresso-machine/gaggia-cadorna-milk/' : '/espresso-machine/gaggia-anima-prestige/', linkLabel: 'Compare the milk workflow', featured: true },
    { kicker: 'Profiles and milk choice', title: p.key === 'gaggia-cadorna-barista-plus-ri9603-47' ? 'Gaggia Cadorna Prestige' : 'Gaggia Cadorna Barista Plus', text: alternativeReasons[p.key][1], href: p.key === 'gaggia-cadorna-barista-plus-ri9603-47' ? '/espresso-machine/gaggia-cadorna-prestige/' : '/espresso-machine/gaggia-cadorna-barista-plus-ri9603-47/', linkLabel: 'Compare the Cadorna alternative' },
    { kicker: 'Premium dual milk', title: 'Gaggia Accademia', text: alternativeReasons[p.key][2], href: '/espresso-machine/gaggia-accademia-ri9781-01/', linkLabel: 'Read the Accademia review' },
    { kicker: 'Manual espresso route', title: 'Gaggia Classic Evo', text: alternativeReasons[p.key][3], href: '/espresso-machine/gaggia-classic-evo/', linkLabel: 'Read the Classic Evo review' },
  ],
  faqs: [
    { question: `What milk work does ${p.model} leave to the user?`, answer: ownership[p.key].workflowNote },
    { question: `How much grinder adjustment does ${p.model} offer?`, answer: p.grinder },
    { question: `What should I check before ordering ${p.model}?`, answer: ownership[p.key].setupNote },
    { question: `Why might I choose a different model?`, answer: p.primaryLimit },
    { question: `Which coffee recipes and controls does ${p.model} provide?`, answer: p.drinkSystem },
    { question: `What care does this particular milk system add?`, answer: ownership[p.key].maintenanceNote },
  ],
  finalTitle: `${p.model} works when its milk path matches the household`,
  finalVerdict: [
    p.primaryStrength,
    p.primaryLimit,
  ],
  video: { id: p.videoId, title: p.videoTitle, creator: p.videoCreator, published: p.videoDate, note: 'Independent visual workflow evidence. Current specifications, price and availability are verified separately.' },
});

const products: ProductConfig[] = [
  {
    key: 'gaggia-magenta-prestige-ri8702', slug: '/espresso-machine/gaggia-magenta-prestige-ri8702/', productId: 'CD-EM-000176', model: 'Magenta Prestige RI8702/46', sku: 'RI8702/46 North America 110-120V, current Over-Ice menu',
    title: "Gaggia Magenta Prestige RI8702 review: a wider milk menu without separate user profiles",
    description: 'A research-led Gaggia Magenta Prestige RI8702/46 review covering its thirteen-drink Over-Ice menu, integrated carafe, five-step ceramic grinder, $899 price and care.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/MagentaPrestide_Header_02_1024x1024.jpg?v=1620847549', imageAlt: 'Black Gaggia Magenta Prestige RI8702/46 with integrated milk carafe',
    official: 'https://www.gaggia-na.com/products/gaggia-magenta-prestige', manual: 'https://www.gaggia.com/automatic-machines/magenta-prestige/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-magenta-prestige', priceLabel: 'Gaggia North America direct price', price: '$899.00', priceNumeric: '899.00', priceContext: 'Current black or Moonlight Grey North American listing; tax, stock, bundle and warranty can change',
    exactIdentity: 'North American 110-120V RI8702/46 with removable carafe and thirteen-specialty Over-Ice menu; the global 230V version lists twelve beverages.',
    milkSystem: 'Integrated removable automatic milk carafe with one-touch milk specialties and refrigerator storage between uses; the carafe and dispensing path still require prompt cleaning',
    drinkSystem: 'Thirteen North American specialties spanning black coffee, milk drinks, hot water and Over-Ice programs',
    grinder: 'Flat ceramic burr grinder with five adjustment positions, five aroma strengths and a bypass doser',
    capacity: '60.9 oz water, 8.8 oz beans, about 17 oz milk and 15-puck waste capacity in the North American specification', dimensions: 'About 8.8 W by 14 H by 17.1 D in; allow front access for tank, tray and carafe', interface: '2.4-inch full-color TFT with capacitive buttons, saved beverage customization and no named multi-user profiles',
    primaryStrength: 'Compact one-touch milk with a broad current menu', primaryLimit: 'Five grinder steps and no named profiles',
    videoId: 'OKXhAiuOdM8', videoTitle: 'Review Gaggia Magenta Prestige Super Automatic Espresso Machine', videoCreator: 'Whole Latte Love', videoDate: '2021-05-03', independent: 'https://www.coffeeness.de/en/gaggia-magenta-prestige-review/', owner: 'https://www.reddit.com/r/superautomatic/comments/18ev06d/gaggia_magenta_prestige_thoughts_and_findings/', rating: [8.2, 8.9, 9.0, 7.7, 8.8, 8.2],

    overview: "Magenta Prestige brings a current North American thirteen-specialty menu and automatic milk carafe to a compact machine with a small color display. It is attractive when one-touch milk matters more than storing separate named profiles: beverage customization is available, but several users do not each get a personal account on the machine. The ceramic grinder offers five positions, giving another reason to judge the intended coffee routine realistically. Its Over-Ice program and regional menu need to be distinguished from the twelve-beverage global version. The practical appeal is broad drink access from a small station, with carafe care included in the daily work.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-naviglio-deluxe-hd8749', slug: '/espresso-machine/gaggia-naviglio-deluxe-hd8749/', productId: 'CD-EM-000177', model: 'Naviglio Deluxe HD8749/11', sku: 'HD8749/11 silver 230V UK and European package',
    title: 'Gaggia Naviglio Deluxe HD8749 review: tube-fed milk and front access at £369',
    description: 'A research-led Gaggia Naviglio Deluxe HD8749/11 review covering its Cappuccinatore, five-step ceramic grinder, front-loading 1.5 L tank, £369 UK price and maintenance.',
    image: 'https://www.gaggia.com/app/uploads/2023/07/NaviglioDeluxe_Int_Varianti_Colori_Gaggia_2023.png', imageAlt: 'Silver-front Gaggia Naviglio Deluxe HD8749/11 automatic coffee machine',
    official: 'https://www.gaggia.com/automatic-machines/naviglio-deluxe/', manual: 'https://www.gaggia.com/product-search/hd8749-11-naviglio-deluxe/', priceUrl: 'https://www.gaggiadirect.com/naviglio-range1.html', priceLabel: 'Gaggia Direct UK listing', price: '£369.00', priceNumeric: '369.00', priceContext: 'Current HD8749/11 UK listing including VAT; voltage, delivery, stock and five-year parts-warranty terms are regional',
    exactIdentity: 'Silver 230V HD8749/11 with Cappuccinatore tube; base Naviglio uses a pannarello and Naviglio Milk uses Capp-in-Cup.',
    milkSystem: 'New Cappuccinatore draws milk through a tube and dispenses automatic froth; the attachment is removable and needs immediate rinsing after milk use',
    drinkSystem: 'One-touch espresso, espresso lungo, frothed milk and hot water, with three Optiaroma strengths, programmable beverage length and two-cycle black coffee',
    grinder: 'Ceramic burr grinder with five adjustment positions and Gaggia adapting logic',
    capacity: '1.5 L front-removable water tank, 300 g bean hopper and 10-puck waste bin', dimensions: '25.6 W by 34 H by 44 D cm; about 9.1 kg; spouts adjust roughly 70-110 mm', interface: 'Physical buttons and LED indicators with a rotary three-level Optiaroma control and memo volume',
    primaryStrength: 'Front-access bean-to-cup coffee with automatic tube-fed milk at an entry-level UK price', primaryLimit: 'The 230V regional model, five-step grinder and hose-cleaning routine narrow its audience',
    videoId: 'xi7Lwj7NrWo', videoTitle: 'Gaggia Naviglio de Luxe automatic coffeemachine', videoCreator: 'Cady Hungary', videoDate: '2017-05-17', independent: 'https://www.techadvisor.com/article/720090/gaggia-naviglio-review.html', owner: 'https://www.reddit.com/r/superautomatic/search/?q=Naviglio%20Deluxe&restrict_sr=1', rating: [7.5, 7.8, 8.0, 7.3, 7.1, 8.1],

    overview: "Naviglio Deluxe adds tube-fed frothing to an automatic coffee platform with front access and physical controls. The HD8749/11 can therefore interest someone who wants milk foam without operating a steam wand or buying a more elaborate screen-based machine. Three Optiaroma strengths and a five-position ceramic grinder keep customization limited and understandable. The removable cappuccinatore must be rinsed promptly, so automatic foam still leaves a cleaning task. This is the 230 V Deluxe with the milk tube, not the base pannarello Naviglio or the separate Capp-in-Cup model. Those distinctions matter when comparing apparently similar low-priced listings.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-naviglio-milk-hd8749-01', slug: '/espresso-machine/gaggia-naviglio-milk-hd8749-01/', productId: 'CD-EM-000178', model: 'Naviglio HD8749/01', sku: 'HD8749/01 black 230V European package; not Naviglio Milk',
    title: 'Gaggia Naviglio HD8749/01 review: the model code is not Naviglio Milk',
    description: 'A research-led correction of the Gaggia Naviglio HD8749/01 route, covering the black pannarello model, ceramic grinder, front-loading 1.5 L tank, £349 price and identity mismatch.',
    image: 'https://www.gaggia.com/app/uploads/2023/07/Naviglio_black_Int_Varianti_Colori_Gaggia_2023.png', imageAlt: 'Black Gaggia Naviglio HD8749/01 automatic coffee machine with pannarello',
    official: 'https://www.gaggia.com/automatic-machines/naviglio/', manual: 'https://www.gaggia.com/product-search/hd8749-01-naviglio/', priceUrl: 'https://www.coffeeitalia.co.uk/gaggia-naviglio-hd8749-01-black/', priceLabel: 'Coffee Italia UK price', price: '£349.00', priceNumeric: '349.00', priceContext: 'Current in-stock HD8749/01 black 230V listing with VAT; delivery and warranty vary',
    exactIdentity: 'HD8749/01 identifies the black 230V Naviglio with classic pannarello, not the Naviglio Milk Capp-in-Cup model. The historical Coffeedant URL contains “milk,” so this review preserves the route while correcting the product identity.',
    milkSystem: 'Manual classic black plastic pannarello for steam and hot water; the cup must be moved and milk texture remains an operator task',
    drinkSystem: 'One-touch espresso and espresso lungo plus hot water and steam, three Optiaroma strengths, programmable length, pre-infusion and two-cycle black coffee',
    grinder: 'Ceramic burr grinder with five adjustment positions and Gaggia adapting logic',
    capacity: '1.5 L front-removable water tank, 300 g bean hopper and 10-puck waste bin', dimensions: '25.6 W by 34 H by 44 D cm; about 9 kg; spouts adjust roughly 70-110 mm', interface: 'Physical buttons and LEDs with rotary Optiaroma strength selection and memo volume',
    primaryStrength: 'A simple front-access bean-to-cup route with manual milk and transparent owner cleaning access', primaryLimit: 'The route name misstates the model, the unit is 230V, and manual pannarello milk is not one-touch',
    videoId: 'L352My9y4w0', videoTitle: 'Recensione del Gaggia HD8749/01 Naviglio Black', videoCreator: 'Scelta Perfetta', videoDate: '2025-03-08', independent: 'https://www.techadvisor.com/article/720090/gaggia-naviglio-review.html', owner: 'https://www.reddit.com/r/superautomatic/search/?q=Gaggia%20Naviglio&restrict_sr=1', rating: [7.4, 6.7, 7.7, 7.3, 6.8, 7.8],

    overview: "The HD8749/01 reviewed here has a manual pannarello, despite the word 'milk' in its historical URL. Its automatic espresso and lungo controls, front access and removable brewer suit someone seeking straightforward beans-to-cup coffee with occasional hands-on frothing. Three strength levels and a five-position ceramic grinder provide a modest adjustment range without a recipe screen. The incorrect route label must not become a promise of one-touch cappuccino: the owner still moves the cup and prepares the milk. Confirm the black 230 V base Naviglio identity when buying, and choose a genuine automatic-milk version if that convenience is essential.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-velasca-prestige-ri8263', slug: '/espresso-machine/gaggia-velasca-prestige-ri8263/', productId: 'CD-EM-000179', model: 'Velasca Prestige RI8263/47', sku: 'RI8263/47 North America 120V, SUP047RG platform',
    title: 'Gaggia Velasca Prestige RI8263 review: one-touch carafe control at $799',
    description: 'A research-led Gaggia Velasca Prestige RI8263/47 review covering its detachable milk carafe, ten-step ceramic grinder, five strengths, $799 US price, cleaning and support.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/ValescaPrestige_IMG_9833_01_2bbe50f8-12b9-4aa6-8a59-89c22901bec6_1024x1024.jpg?v=1571323436', imageAlt: 'Stainless-front Gaggia Velasca Prestige RI8263/47 with detachable milk carafe',
    official: 'https://www.gaggia-na.com/products/gaggia-velasca-prestige', manual: 'https://www.gaggia.com/product-search/ri8263-01-velasca-prestige/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-velasca-prestige', priceLabel: 'Gaggia North America direct price', price: '$799.00', priceNumeric: '799.00', priceContext: 'Current North American direct listing; tax, stock, finish and warranty can change',
    exactIdentity: 'North American RI8263/47 Velasca Prestige on the SUP047RG platform with 120V power and detachable automatic milk carafe. RI8263/01 is a 230V regional code and should not be treated as the same electrical package.',
    milkSystem: 'Detachable automatic milk carafe with one-touch cappuccino and refrigerator storage, plus hot-water dispensing through the service outlet',
    drinkSystem: 'Dedicated espresso, espresso lungo and cappuccino plus special drinks, five aroma strengths, three temperatures, adjustable pre-infusion and programmable lengths',
    grinder: 'Ceramic burr grinder with ten adjustment positions, five aroma strengths and a bypass doser',
    capacity: '54 oz front-removable water tank, 10.5 oz bean hopper and 10-puck waste bin', dimensions: '10.3 W by 13.5 H by 17 D in; 17.6 lb; spouts adjust 2.75-4.5 in', interface: 'Monochrome display with physical direct-drink and menu buttons; no named user profiles or app',
    primaryStrength: 'A compact carafe machine with more grinder and pre-infusion adjustment than simpler Gaggia automatics', primaryLimit: 'The older interface, low 4.5-inch cup clearance and carafe cleaning are meaningful daily constraints',
    videoId: 'I_iwmeM80VM', videoTitle: 'Gaggia Velasca Prestige: Basic Operation and Programming', videoCreator: 'Whole Latte Love', videoDate: '2017-12-22', independent: 'https://www.wholelattelove.com/blogs/reviews/review-of-gaggia-velasca-velasca-prestige-bean-to-cup-coffee-machines', owner: 'https://www.reddit.com/r/superautomatic/comments/1l5y589/gaggia_magenta_prestige_or_velasca_prestige_whats/', rating: [8.0, 8.4, 8.1, 7.6, 7.8, 7.8],

    overview: "Velasca Prestige combines an automatic carafe with ten grinder positions and adjustable preinfusion, making its coffee settings a stronger part of the proposition than those on simpler Gaggia automatics. The monochrome screen and physical buttons favor a familiar, compact interface rather than a modern touchscreen. Its 4.5-inch cup clearance deserves attention if the normal order goes into a tall mug, and the milk carafe brings storage and cleaning work after the convenience of cappuccino. The reviewed North American RI8263/47 should be matched to the seller's unit; a 230 V RI8263/01 is a different electrical package.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-anima', slug: '/espresso-machine/gaggia-anima/', productId: 'CD-EM-000165', model: 'Anima', sku: 'Anima North America 120V',
    title: "Gaggia Anima review: the black-coffee choice in the Anima family",
    description: 'A research-led Gaggia Anima review covering its five-step ceramic grinder, pannarello wand, 1.8 L tank, tall spouts, current US price, cleaning and exact family differences.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/Anima_IMG_9820_01_49ff03a2-6815-498b-8918-7f26dc5391ec_1024x1024.jpg?v=1571326415', imageAlt: 'Black Gaggia Anima superautomatic espresso machine with pannarello wand',
    official: 'https://www.gaggia-na.com/products/gaggia-anima', manual: 'https://www.gaggia.com/automatic-machines/anima/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-anima', priceLabel: 'Gaggia North America direct price', price: '$699.00', priceNumeric: '699.00', priceContext: 'New US 120V stock with pannarello wand; tax and availability vary',
    exactIdentity: 'Current Gaggia North America Anima with black ABS front, pannarello wand and 110-120V, 1400W specification; other RI8760 suffixes can differ.',
    milkSystem: 'Manual auto-aerating pannarello wand for steam and hot water; no integrated milk carafe', drinkSystem: 'Espresso and espresso lungo buttons, five aroma strengths, three temperatures, programmable volume and bypass dosing', grinder: 'Flat ceramic burr grinder with five adjustment positions', capacity: '1.8 L water, about 250 g beans and up to 15 coffee pucks', dimensions: 'About 22.1 W by 34 H by 43 D cm; allow top tank and hopper access', interface: 'LED or LCD status interface with physical drink, steam, hot-water and menu buttons',
    primaryStrength: 'A narrow, straightforward black-coffee machine with a manual milk option', primaryLimit: 'Milk drinks require a separate steaming step and the five-step grinder leaves limited fine correction',
    videoId: 'mFpFLv-ak1k', videoTitle: 'Review: Gaggia Anima Super-Automatic Espresso Machine', videoCreator: 'Whole Latte Love', videoDate: '2015-11-06', independent: 'https://coffeeblog.co.uk/gaggia-anima-bean-to-cup-coffee-machine-review/', owner: 'https://www.reddit.com/r/superautomatic/search/?q=Gaggia%20Anima&restrict_sr=1', rating: [7.7, 6.8, 7.9, 7.4, 7.2, 7.3],

    overview: "The standard Anima automates black coffee and gives milk a separate manual step. Espresso and lungo buttons, programmable volumes and a five-position ceramic grinder keep its coffee routine compact, while the pannarello wand can supply steam or hot water when needed. This arrangement is a natural fit for someone who mainly drinks espresso or longer coffee and only occasionally wants froth. It gives less reason to choose the machine for a daily run of cappuccinos. The narrow body remains attractive, but the grinder's limited steps and the absence of an automatic milk path should be treated as deliberate boundaries.",
    updated: '2026-10-13',
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

    overview: "Anima Deluxe draws milk through a tube from a separate container, offering automatic foam without an integrated storage carafe. That distinction is its main reason to exist beside the manual-milk Anima and carafe-equipped Prestige. Espresso and lungo remain straightforward button choices, with a five-position ceramic grinder supplying the beans. The hose and cappuccinatore require prompt cleaning, so the convenience should be judged over the whole drink-and-clean sequence. The regional identity also matters because European official records and North American refurbished listings describe different electrical packages. Verify the actual unit rather than transferring a specification from another Anima.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-anima-prestige', slug: '/espresso-machine/gaggia-anima-prestige/', productId: 'CD-EM-000167', model: 'Anima Prestige', sku: 'Anima Prestige North America 120V',
    title: "Gaggia Anima Prestige review: cappuccino and latte macchiato from direct buttons",
    description: 'A research-led Gaggia Anima Prestige review covering its removable milk carafe, four one-touch beverages, five-step ceramic grinder, current $849 US price, cleaning and ownership.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/AnimaPrestigeOption2_IMG_9772_01_a2acf6fd-7d1b-4a17-9382-66147f5335c4_1024x1024.jpg?v=1571331690', imageAlt: 'Gaggia Anima Prestige with stainless front and integrated milk carafe',
    official: 'https://www.gaggia-na.com/products/gaggia-anima-prestige', manual: 'https://www.gaggia.com/app/uploads/2023/07/421946045941-Anima-00-USA_Prestige-Class.pdf', priceUrl: 'https://www.gaggia-na.com/products/gaggia-anima-prestige', priceLabel: 'Gaggia North America direct price', price: '$849.00', priceNumeric: '849.00', priceContext: 'New US 110-120V listing with integrated carafe; tax, finish, stock and warranty vary',
    exactIdentity: 'Current North American Anima Prestige with integrated carafe, stainless front panel, four one-touch beverages and 110-120V electrical package.',
    milkSystem: 'Removable double-chamber automatic milk carafe with quick-clean cycle and separate hot-water spout', drinkSystem: 'Espresso, espresso lungo, cappuccino, latte macchiato and milk foam with memo volumes, five strengths and three temperatures', grinder: 'Flat ceramic burr grinder with five adjustment positions and adapting logic', capacity: 'About 60 oz water, 8.8 oz beans, 17 oz milk and 15 pucks in North American listing', dimensions: 'About 8.8 W by 13.4 H by 16.9 D in; top and front access required', interface: 'Blue LCD and direct physical beverage buttons with status and maintenance prompts',
    primaryStrength: 'A slim integrated-carafe workflow for cappuccino and latte macchiato at one touch', primaryLimit: 'Carafe convenience brings milk storage and disassembly, while there are no named user profiles',
    videoId: 'Xjt07jsfhCA', videoTitle: 'Review: Gaggia Anima Prestige Espresso Machine', videoCreator: 'Whole Latte Love', videoDate: '2015-11-11', independent: 'https://www.wholelattelove.com/products/gaggia-anima-prestige-super-automatic-espresso-machine', owner: 'https://www.reddit.com/r/superautomatic/comments/1dco6z8/gaggia_worth_it/', rating: [7.8, 8.8, 8.7, 7.6, 8.0, 7.7],

    overview: "The Anima Prestige puts cappuccino and latte macchiato beside espresso and lungo as direct choices, using a removable automatic milk carafe to supply the foam. Its slim form and physical beverage buttons suit a household that wants a small, understandable automatic station rather than a large recipe screen. Memo volumes offer personalization, but there are no named user profiles to separate several people's preferences. The carafe adds storage, quick cleaning and periodic disassembly to the routine. Choose this Anima for the specific convenience of one-touch milk, with those care steps accepted as part of the drink.",
    updated: '2026-10-13',
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

    overview: "Babila combines fifteen grinder positions and Espresso Plus flow adjustment with two milk options: an automatic carafe and a separate manual dispenser. That makes the RI9700/64 more flexible than a basic automatic, especially for a household that wants to alter coffee flow or finish milk differently. It is also a discontinued platform whose specification must be matched to the actual regional unit. Old-stock pricing needs to be weighed against exact-model parts, warranty and service, rather than the former flagship position. The hardware can still be appealing, but support and condition decide whether the available example is a sensible purchase.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-cadorna-barista-plus-ri9603-47', slug: '/espresso-machine/gaggia-cadorna-barista-plus-ri9603-47/', productId: 'CD-EM-000169', model: 'Cadorna Barista Plus RI9601/47', sku: 'RI9601/47 North America',
    title: 'Gaggia Cadorna Barista Plus RI9601/47 review: profiles meet a real steam wand',
    description: 'A research-led Gaggia Cadorna Barista Plus RI9601/47 review covering four profiles, six coffee beverages, two-hole steam wand, ten-step ceramic grinder, $899 price and care.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/CadornaOption2_IMG_9859_03_1024x1024.jpg?v=1592517142', imageAlt: 'Black Gaggia Cadorna Barista Plus with color display and stainless steam wand',
    official: 'https://www.gaggia-na.com/products/gaggia-cadorna-barista-plus', manual: 'https://www.gaggia.com/automatic-machines/cadorna-plus-barista/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-cadorna-barista-plus', priceLabel: 'Gaggia North America direct price', price: '$899.00', priceNumeric: '899.00', priceContext: 'Current US 110-120V direct listing; tax, stock and warranty vary',
    exactIdentity: 'North American RI9601/47 Cadorna Barista Plus with black ABS body, four profiles, color TFT and two-hole manual stainless wand. RI9603/47 is Cadorna Milk with automatic milk hardware, a different model.',
    milkSystem: 'Pivoting commercial-style stainless steam wand with two-hole tip and insulated grip; milk texture and cleanup are manual', drinkSystem: 'Six listed coffee beverages plus hot water and steam, four profiles, five strengths, three temperatures and adjustable volume', grinder: 'Flat ceramic burr grinder with ten adjustment positions', capacity: '1.5 L water, 10.58 oz beans, 18 oz tray and 10 pucks', dimensions: '10.2 W by 15 H by 17.3 D in; 20.5 lb', interface: 'Full-color TFT plus backlit buttons with four named user profiles',
    primaryStrength: 'Saved profiles and automatic coffee paired with a capable two-hole manual steam wand', primaryLimit: 'Milk is not one-touch and the wand-to-coffee sequence still asks the user to learn texture and clean immediately',
    videoId: '66liV-9I5-U', videoTitle: 'Gaggia Cadorna Barista Plus unboxing, features, review', videoCreator: 'Jess - Gadgets, Gear, Coffee', videoDate: '2020-11-24', independent: 'https://www.gadgetsgearcoffee.com/gaggia-cadorna-barista-plus-unboxing-features-review-superautomatic-espresso-latte-art-steam-wand', owner: 'https://www.reddit.com/r/superautomatic/comments/1buyys7/gaggia_cadorna_barista_plus_user_experience/', rating: [8.1, 8.9, 8.6, 7.6, 8.8, 8.0],

    overview: "Cadorna Barista Plus is the Cadorna for someone who wants saved coffee preferences and a proper manual milk task. Four profiles and a ten-position ceramic grinder support automatic coffee preparation, while the two-hole stainless wand leaves texture and pouring to the owner. That division gives a shared kitchen convenience without an automatic milk container, provided someone is willing to learn steaming and clean the wand promptly. The reviewed North American model is RI9601/47. The historical URL's RI9603/47 code belongs to Cadorna Milk, so the listing and rating plate need to follow the corrected identity rather than the route text.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-cadorna-milk', slug: '/espresso-machine/gaggia-cadorna-milk/', productId: 'CD-EM-000170', model: 'Cadorna Milk', sku: 'Cadorna Milk North America 120V',
    title: 'Gaggia Cadorna Milk review: Capp-in-Cup convenience with four profiles',
    description: 'A research-led Gaggia Cadorna Milk review covering its Capp-in-Cup system, ten beverages, four profiles, ten-step ceramic grinder, current $849 US price and cleaning work.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/CadornaMilk_IMG_0275_01_b69709d7-1511-472f-b16e-92856c4d5351_1000x.progressive.jpg?v=1571323369', imageAlt: 'Black Gaggia Cadorna Milk superautomatic espresso machine with Capp-in-Cup milk system',
    official: 'https://www.gaggia-na.com/products/gaggia-cadorna-milk', manual: 'https://www.gaggia.com/automatic-machines/cadorna-milk/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-cadorna-milk', priceLabel: 'Gaggia North America direct price', price: '$849.00', priceNumeric: '849.00', priceContext: 'Current US 110-120V direct listing; tax, stock, finish and warranty vary',
    exactIdentity: 'Current North American Cadorna Milk with Capp-in-Cup milk system, four profiles, ten beverages and a 110-120V, 1400W electrical package.',
    milkSystem: 'Capp-in-Cup system draws milk through a tube and dispenses automatic froth into the cup; the separate 0.5 L container and milk path need immediate care', drinkSystem: 'Ten beverages including ristretto, espresso, lungo, coffee, americano, cappuccino, cafe au lait, latte macchiato, frothed milk and hot water', grinder: 'Flat ceramic burr grinder with ten adjustment positions', capacity: '1.5 L water, 10.58 oz beans, 0.5 L milk container, 18 oz tray and 10 pucks', dimensions: '10.2 W by 15 H by 17.3 D in; 20.5 lb', interface: 'Full-color LCD with tactile buttons and four user profiles',
    primaryStrength: 'Automatic milk drinks without storing an integrated proprietary carafe in the refrigerator', primaryLimit: 'The external milk tube adds routing and cleaning work, and only three milk specialties are one-touch',
    videoId: 'COIJ6d0Gqew', videoTitle: 'Gaggia Cadorna Review: the perfect weekend barista?', videoCreator: 'Coffee Kev', videoDate: '2021-03-08', independent: 'https://coffeeblog.co.uk/gaggia-cadorna-review/', owner: 'https://www.reddit.com/r/superautomatic/comments/1gimjzm/gaggia_cadorna_milk_takes_its_place_on_the_counter/', rating: [8.0, 8.2, 8.5, 7.6, 8.5, 7.8],

    overview: "Cadorna Milk routes milk from a separate container through its Capp-in-Cup system, then dispenses the froth into the drink. It is an option for a household that wants automatic cappuccino and latte macchiato without using the Prestige's integrated carafe. Four profiles keep coffee preferences separate, and ten grinder positions offer more adjustment than the simpler five-step Gaggia automatics. The tube still has to be routed, rinsed and cleaned after milk use; moving the storage outside the machine does not remove that work. Compare the actual one-touch milk choices with the household's orders before paying for the larger Cadorna menu.",
    updated: '2026-10-13',
  },
  {
    key: 'gaggia-cadorna-prestige', slug: '/espresso-machine/gaggia-cadorna-prestige/', productId: 'CD-EM-000171', model: 'Cadorna Prestige', sku: 'Cadorna Prestige North America Over-Ice revision',
    title: 'Gaggia Cadorna Prestige review: fifteen drinks and a removable milk carafe',
    description: 'A research-led Gaggia Cadorna Prestige review covering its fifteen beverages, Over-Ice program, integrated 0.6 L carafe, four profiles, $1,049 US price and ownership.',
    image: 'https://www.gaggia-na.com/cdn/shop/products/CadornaPrestige_IMG_0303_03_1000x.progressive.jpg?v=1744732422', imageAlt: 'Anthracite Gaggia Cadorna Prestige with integrated milk carafe',
    official: 'https://www.gaggia-na.com/products/gaggia-cadorna-prestige', manual: 'https://www.gaggia.com/automatic-machines/cadorna-prestige/', priceUrl: 'https://www.gaggia-na.com/products/gaggia-cadorna-prestige', priceLabel: 'Gaggia North America direct price', price: '$1,049.00', priceNumeric: '1049.00', priceContext: 'Current US Over-Ice revision with integrated 0.6 L carafe; tax, stock and warranty vary',
    exactIdentity: 'Current North American Cadorna Prestige Over-Ice revision with fifteen beverages, four profiles, integrated 0.6 L milk carafe and 110-120V power.',
    milkSystem: 'Removable integrated 0.6 L automatic milk carafe with seven one-touch specialties and refrigerator storage between uses', drinkSystem: 'Fifteen beverages including ristretto, espresso, lungo, coffee, americano, cortado, flat white, cappuccino, cafe au lait, latte macchiato, XL milk drinks and Over-Ice', grinder: 'Flat ceramic burr grinder with ten adjustment positions', capacity: '1.5 L water, 10.58 oz beans, 0.6 L milk carafe, 18 oz tray and 10 pucks', dimensions: '10.2 W by 15 H by 17.3 D in; 20.5 lb', interface: 'Full-color LCD with tactile buttons and four user profiles',
    primaryStrength: 'The broadest Cadorna drink menu with one-touch milk, a removable carafe and four saved profiles', primaryLimit: 'The carafe has more parts to clean, and Over-Ice is a programmed hot extraction rather than cold brew',
    videoId: 'cXpgP705LB4', videoTitle: 'Review: Gaggia Cadorna Prestige Super Automatic Espresso Machine', videoCreator: 'Whole Latte Love', videoDate: '2020-10-02', independent: 'https://www.coffeeness.de/en/gaggia-cadorna-prestige-review/', owner: 'https://www.reddit.com/r/superautomatic/comments/197aeam/not_a_lot_of_information_on_these_two_machines/', rating: [8.2, 8.8, 8.8, 7.7, 9.0, 7.8],

    overview: "Prestige is the Cadorna built around a removable milk carafe and the broadest menu in the family. Its current North American Over-Ice revision offers fifteen beverages and four profiles, making it relevant to several people who want their coffee and milk settings saved. Refrigerator storage of the carafe is convenient between drinks, with disassembly and cleaning still part of the routine. Over-Ice should be understood as a hot extraction program for serving over ice, rather than cold brew. The purchase makes most sense when the carafe and wider milk menu will be used frequently enough to justify their care.",
    updated: '2026-10-13',
  },
];

export const upgradeGaggiaAReviews: MachineReviewData[] = products.map((product) => buildUpgradeReview(makeProfile(product)));
