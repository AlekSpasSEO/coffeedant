import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const officialSupport = 'https://www.usa.philips.com/c-p/SM7685_04/xelsis-super-automatic-espresso-machine/support';
const officialManual = 'https://dam.versuni.com/adaptivemedia/rendition?id=094871b54e3fa4be0932e478b37c7675727e36cf';
const parts = 'https://philips.encompass.com/model/SAESM7685%7C04';
const retailer = 'https://www.seattlecoffeegear.com/products/saeco-xelsis-sm7685-superautomatic-espresso-machine-stainless-steel-certified-refurbished';
const retailerGuide = 'https://www.seattlecoffeegear.com/pages/product-resources/saeco-xelsis-sm7685-superautomatic-espresso-machine-stainless-steel-certified-refurbished-product-guide';
const currentFamily = 'https://saeco.com/xelsis/';
const independentReview = 'https://brainsreport.com/2020/07/25/saeco-xelsis-espresso-machine-review/';
const video = 'https://www.youtube.com/watch?v=yNaPPvjBDsU';
const ownerFeedback = 'https://www.reddit.com/r/superautomatic/comments/14u3uow/saeco_xelsis_honest_feedback_wanted/';
const ownerComparison = 'https://www.reddit.com/r/superautomatic/comments/18j8h9l/philips_5400_or_saeco_xelsis_for_130_more/';
const regionalCaution = 'https://www.reddit.com/r/superautomatic/comments/17v48z1/just_ordered_the_saeco_xelsis_sm7685_1375_after/';
const milkIssue = 'https://www.coffeeforums.com/threads/help-please-saeco-xelsis-sm7685-milk-frothing-issues.20480/';
const hero = 'https://www.seattlecoffeegear.com/cdn/shop/files/SAECOXELSISSUPERAUTOMATICESPRESSOMACHINEnew-4_8dcbf061-575d-4e6a-a79d-40c819cab4cd.jpg?v=1713731223&width=1200';

const profile: UpgradeReviewProfile = {
  key: 'saeco-xelsis-sm7685-north-america',
  slug: '/espresso-machine/saeco-xelsis/',
  productId: 'CD-EM-000240',
  brand: 'Saeco',
  model: 'Xelsis SM7685',
  sku: 'North American 120 V SM7685 generation; Philips support record SM7685/04 and retailer refurbished record SM7685/05',
  category: 'Superautomatic espresso machine',
  brandPath: '/philips/',
  title: 'Saeco Xelsis review: excellent milk control, legacy-stock risk',
  description: 'Research-led Saeco Xelsis SM7685 review covering 15 drinks, eight profiles, LatteDuo, Coffee Equalizer, HygieSteam, AquaClean and the current refurbished market.',
  verdictLabel: 'A sophisticated legacy superautomatic that only makes sense with documented condition and support',
  verdict: 'The North American Saeco Xelsis SM7685 remains unusually capable for a legacy one-touch machine. It combines 15 drinks, eight profiles, Coffee Equalizer controls, LatteDuo paired milk drinks, LattePerfetto foam, HygieSteam cleaning, a 12-step ceramic grinder and a removable brewer. Seattle Coffee Gear displayed a certified-refurbished 120 V SM7685/05 at $1,249 on September 25, 2026, but marked it sold out and offered a six-month warranty. That condition and support context matters more than the old $2,199 reference price. Buy only when the exact rating plate, milk parts, brewer, return window and service route are documented.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Philips support and manual records establish the North American SM7685/04 identity and care system. Seattle Coffee Gear documents a closely related SM7685/05 120 V certified-refurbished listing, price, six-month coverage, physical specifications and package. An independent long-use review covers the sister SM7684/04 platform, while a retailer video and self-selected owner discussions add workflow context. Coffeedant did not measure dose, temperature, extraction, foam, speed, sound, energy, durability or failure incidence.',
  image: hero,
  imageAlt: 'Seattle Coffee Gear product photograph of a stainless North American Saeco Xelsis SM7685 superautomatic machine',
  published: '2026-07-27',
  updated: '2026-09-25',
  price: {
    label: 'Certified-refurbished listing checked September 25, 2026',
    msrp: '$1,249 displayed sale price',
    typical: 'Seattle Coffee Gear displayed $1,249 against a $2,199 reference price for its 120 V SM7685/05 certified-refurbished listing, with a six-month warranty, but the page was sold out. This is not a current new-machine MSRP or a promise of stock.',
    currency: 'USD', numeric: '1249.00', checked: 'September 25, 2026',
  },
  links: [
    { label: 'Check refurbished price and stock', href: retailer, note: 'SM7685/05, 120 V, condition, price, stock state and six-month retailer warranty', primary: true },
    { label: 'Open official US support', href: officialSupport, note: 'Philips SM7685/04 manuals, accessories and troubleshooting' },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'North American 120 V Saeco Xelsis SM7685 generation; verify /04 or /05 suffix on the rating plate' },
    { label: 'Drink system', value: '15 programmed beverages with Coffee Equalizer adjustment and eight user profiles on SM7685' },
    { label: 'Coffee path', value: 'One 12-step ceramic grinder, one bean hopper and a preground bypass' },
    { label: 'Milk', value: 'External HygieSteam carafe, LattePerfetto foam and LatteDuo paired milk-drink preparation' },
    { label: 'Care', value: 'Removable brew group, guided rinses, HygieSteam purge, AquaClean filtration and prompted descaling' },
    { label: 'Retailer physical record', value: '11 × 20 × 15.5 inches W×D×H, 2 L reservoir, 12 oz hopper and 3 to 6 inch cup clearance' },
    { label: 'Electrical record', value: '120 V and 1,350 W on the SM7685/05 retailer listing' },
    { label: 'Current market', value: 'Legacy and refurbished stock; current Saeco Xelsis Suprema and Deluxe are different generations' },
  ],
  quickAnswers: [
    { question: 'Which Xelsis is reviewed?', answer: 'The older North American 120 V SM7685 generation, not the current Wi-Fi Xelsis Suprema or Deluxe.' },
    { question: 'Why are /04 and /05 both mentioned?', answer: 'Philips keeps official US support for SM7685/04, while Seattle Coffee Gear labels its 120 V certified-refurbished stainless listing SM7685/05. Verify the physical rating plate before buying parts or claiming support.' },
    { question: 'Can it make two milk drinks?', answer: 'Yes. Seattle Coffee Gear documents LatteDuo as the SM7685 feature that prepares two matching milk drinks in one cycle.' },
    { question: 'How many profiles are included?', answer: 'Eight on SM7685 according to the exact-model retailer guide. Do not apply that number to SM7684 or every Xelsis generation.' },
    { question: 'Is $1,249 a live buy price?', answer: 'It was the displayed certified-refurbished price on September 25, 2026, but the listing was sold out. Availability and condition can change.' },
    { question: 'Is the brewer removable?', answer: 'Yes. Philips provides cleaning and lubrication guidance, and the owner still needs to remove and care for it on schedule.' },
  ],
  bestFor: ['Households that want several saved milk and black-coffee recipes from one machine', 'Two people who often order the same cappuccino or latte and will use LatteDuo', 'A careful refurbished buyer with a written warranty, complete milk system and credible service path'],
  avoidIf: ['You need current new-stock availability, a long new-machine warranty or an unambiguous single-SKU retail channel', 'You prefer a very simple milk container with fewer small parts and less cleaning', 'You want cold extraction, current Wi-Fi recipes or the larger display of Xelsis Suprema'],
  pros: ['Eight profiles and deep Coffee Equalizer controls suit a mixed-preference household', 'LatteDuo can prepare two matching milk drinks, an uncommon domestic convenience', 'Removable brewer, front-access containers and guided care improve routine access', 'Philips still hosts official support, manuals and compatible maintenance items'],
  cons: ['The verified 2026 market is legacy refurbished stock rather than dependable new inventory', 'Model suffix, condition, accessories and warranty require more diligence than a current machine', 'HygieSteam still leaves milk hose, carafe and internal parts to clean', 'Owner reports are mixed and too self-selected to quantify reliability or remaining life'],
  architecture: 'a North American 120 V bean-to-cup platform with one ceramic grinder, one hopper, preground bypass, removable brew group, thermoblock, 3.5 inch touchscreen, Coffee Equalizer controls, front water and waste access, external HygieSteam milk carafe, LattePerfetto foam and LatteDuo paired beverage routing',
  identityBoundary: 'The scores cover the North American 120 V SM7685 generation. Philips supports SM7685/04, while Seattle Coffee Gear identifies its certified-refurbished stainless 120 V listing as SM7685/05. The review does not merge SM7684, SM7580, older HD89xx Xelsis machines, current Xelsis Deluxe or Suprema, European 230 V articles, imported units or unknown marketplace bundles. The /04 and /05 records are kept visible rather than treated as interchangeable parts records.',
  primaryStrength: 'Eight profiles, Coffee Equalizer adjustment and LatteDuo make the older SM7685 exceptionally flexible for a household that repeatedly orders customized milk drinks.',
  primaryLimit: 'In 2026 the buying decision is dominated by condition, suffix, complete milk parts, seller warranty and repair access rather than the original feature list.',
  setupNote: 'Photograph the rating plate before purchase and confirm 120 V, the complete model suffix, seller identity, written warranty and return terms. The retailer lists a body about 20 inches deep, so measure the counter with front tank and brew-group access rather than using width alone. Confirm the HygieSteam carafe, milk tube and cleaning hose, AquaClean holder, drip tray, waste bin and power cord. At first use, set water hardness, activate a compatible filter only if the manual and machine state allow it, rinse the brewer and establish one reference recipe before filling eight profiles.',
  espressoNote: 'Coffee Equalizer lets the user change strength, volume, temperature and preinfusion-related taste settings, while the ceramic grinder provides 12 steps. That is meaningful automatic control, not manual dose, yield, pressure or flow profiling. Brains Report praised the sister SM7684/04 grinder and espresso after extended household use, but those sensory results do not prove the condition or output of a refurbished SM7685. Start with medium-roast, non-oily beans and change one variable at a time.',
  milkNote: 'SM7685 adds LatteDuo and LattePerfetto above the SM7684 in Seattle Coffee Gear’s exact-model guide. The external carafe supports milk amount and texture choices, paired drinks and a HygieSteam cleaning cycle. It is more adjustable than a simple two-piece milk cup, but it also has more hose and carafe parts. Owner discussions disagree about temperature and foam; milk type, settings, blocked air paths, cleaning and unit condition can all change the result.',
  workflowNote: 'A bright touchscreen, eight profiles, 15 drinks, front tank, front waste access and automatic prompts reduce repeated decisions. LatteDuo is most valuable when two people want the same recipe. A 2 L tank and 12 oz hopper are generous for home use, though automatic rinses consume water and fill the tray. A legacy unit can also arrive with another owner’s settings, filter state or maintenance history, so a factory-reset and service review may matter more than the interface demo.',
  buildNote: 'Seattle Coffee Gear records stainless-steel and plastic construction, a thermoblock, 120 V, 1,350 W and a 35 lb shipping weight. Philips still provides support, and Encompass lists manuals, a service manual and exploded-view resources for SM7685/04. Those are positive ownership signals, but they do not prove that every control panel, valve, grinder, seal or milk component remains available or economical to replace.',
  featuresNote: 'For its generation, the feature set is still strong: 15 recipes, eight profiles, Coffee Equalizer, LatteDuo, LattePerfetto, HygieSteam, AquaClean, 12 grinder steps, bypass dosing and a removable brewer. The newer Xelsis family adds a different display, BeanMaestro, CoffeeMaestro, Wi-Fi content and more recipes. That makes a current Suprema or Deluxe a separate comparison, not evidence that SM7685 receives the same software or drink catalog.',
  valueNote: 'The September 25, 2026 retailer page displayed $1,249, reduced from a $2,199 reference, with a six-month warranty, but marked the unit sold out. Treat that as a dated condition-specific benchmark. Add missing milk parts, filters, cleaners, shipping, return cost and possible service before comparing it with a current Philips 5400, DeLonghi Dinamica Plus or Miele CM 6360. A low marketplace price without a rating-plate photo or return path is not equivalent value.',
  ownerPattern: 'Owners and shoppers repeatedly praise milk adjustment, profile depth and the guided interface. Recurring cautions concern milk temperature, blocked air or milk paths, tray water, cleaning effort, imported voltage, warranty support and the uncertainty of older refurbished units.',
  ownerCaution: 'The owner material is self-selected and spans SM7684, SM7685, several regions, ages, water conditions and service histories. A thread about one blocked air path or one long-lived machine cannot establish failure incidence, expected lifespan or the condition of a seller’s unit.',
  maintenanceNote: 'Follow the exact manual for daily rinsing, milk-path care, tray and waste-bin cleaning, weekly brewer rinsing, periodic lubrication, coffee-oil removal, filter replacement and descaling. HygieSteam automates a purge, not every physical cleaning step. Use the machine’s prompts and water-hardness setup, and do not claim a 5,000-cup no-descale interval without the official filter conditions and timely replacements.',
  dimensions: {
    espresso: dim(8.1, 'Coffee Equalizer, 12 grinder steps and positive sister-model evaluation support capable automatic espresso.', 'Good for repeat household recipes, but it does not offer manual espresso profiling or proof of current-unit condition.', 'Official controls, exact-generation documentation and bounded independent context', ['Ceramic grinder with 12 adjustment steps.', 'Strength, volume, temperature and taste controls are saved by profile.', 'No Coffeedant dose, temperature or extraction measurements.']),
    milk: dim(9.0, 'LatteDuo, LattePerfetto, adjustable recipes and HygieSteam form the strongest part of SM7685.', 'Excellent when two personalized milk drinks matter, provided the extra hose and carafe care is acceptable.', 'Exact-model retailer guide, visual review and owner context', ['Two matching milk drinks can run in one selected cycle.', 'Milk amount, foam and order are adjustable by recipe.', 'Cleaning and air-path condition directly affect output.']),
    workflow: dim(8.8, 'Eight profiles, 15 drinks, touchscreen guidance and front access suit a genuinely shared kitchen.', 'Legacy settings and unknown maintenance history can add setup work that a new unit avoids.', 'Official and retailer workflow records with independent household use', ['Eight saved user profiles on SM7685.', 'Front tank, waste access and guided prompts.', 'Automatic rinses trade button effort for water and tray capacity.']),
    build: dim(7.9, 'Removable-brewer access and continuing official support are meaningful positives for a legacy automatic.', 'Age, suffix and refurbisher quality prevent a stronger durability judgment.', 'Official support, parts records and current refurbished listing', ['Philips still hosts SM7685/04 manuals and troubleshooting.', 'Retailer documents a 120 V thermoblock and mixed metal/plastic case.', 'No representative repair or component-life dataset was located.']),
    features: dim(9.1, 'The older platform still combines unusually deep profiles, paired milk drinks and guided care.', 'It lacks the current family’s Wi-Fi content, BeanMaestro and broader recipe catalog.', 'Generation-specific feature record separated from current Xelsis marketing', ['15 drinks and eight profiles.', 'Coffee Equalizer, LatteDuo, LattePerfetto and HygieSteam.', 'Current Suprema and Deluxe features are not assigned to SM7685.']),
    value: dim(7.5, 'A complete supported refurb at $1,249 can offer premium workflow for less than its old reference price.', 'Sold-out status, six-month coverage and condition risk make the headline discount incomplete.', 'Dated retailer price and stock state checked September 25, 2026', ['$1,249 displayed certified-refurbished price.', 'Six-month Seattle Coffee Gear warranty on the checked listing.', 'Rating plate, accessories, return terms and repair access determine real value.']),
  },
  sources: [
    { label: 'Philips USA SM7685/04 support', href: officialSupport, note: 'Official North American identity, manuals updated March 13, 2026, compatible AquaClean and descaling products, FAQs and troubleshooting.' },
    { label: 'Philips SM76xx user manual', href: officialManual, note: 'Official operation, profiles, drink adjustment, grinder, brewer, milk, AquaClean, cleaning, lubrication, descaling, errors and safety guidance.' },
    { label: 'Philips Encompass SM7685/04 parts record', href: parts, note: 'Current official-parts channel with owner manual, service manual and exploded-view resources; availability of every individual component still needs confirmation.' },
    { label: 'Seattle Coffee Gear SM7685 refurbished listing', href: retailer, note: 'Displayed $1,249, sold-out state, 120 V, SM7685/05 suffix, dimensions, capacity and six-month warranty on September 25, 2026.' },
    { label: 'Seattle Coffee Gear SM7685 product guide', href: retailerGuide, note: 'Exact-model box contents, LatteDuo, LattePerfetto, eight profiles, HygieSteam, setup, cleaning and support boundary.' },
    { label: 'Brains Report long-use Xelsis review', href: independentReview, note: 'Independent household evaluation published July 25, 2020, of sister model SM7684/04. Used only for shared-platform workflow, coffee and care context.' },
    { label: 'Seattle Coffee Gear Xelsis Crew Review', href: video, note: 'Independent retailer video published October 3, 2018, showing the SM76xx generation interface, drink adjustment, milk system and physical workflow.' },
    { label: 'Saeco current Xelsis family', href: currentFamily, note: 'Current Suprema and Deluxe features used to separate today’s Wi-Fi generation from the scored SM7685.' },
    { label: 'Reddit Xelsis feedback discussion', href: ownerFeedback, note: 'Self-selected owner and shopper observations about milk, interface, care and regional differences; not representative outcome data.' },
    { label: 'Reddit Philips 5400 versus Xelsis discussion', href: ownerComparison, note: 'Self-selected comparison emphasizing Xelsis milk texture control and added maintenance; not a controlled product test.' },
    { label: 'Reddit imported SM7685 caution', href: regionalCaution, note: 'Community account highlighting voltage and warranty risks when importing; exact seller, region and outcome vary.' },
    { label: 'Coffee Forums SM7685 milk troubleshooting', href: milkIssue, note: 'Self-selected troubleshooting thread about a used unit and a blocked milk air path; useful inspection context, not a failure-rate estimate.' },
  ],
  comparisons: [
    { name: 'Saeco Xelsis SM7685', quickDecision: 'Choose only as a documented refurb when eight profiles, LatteDuo and deep milk adjustment justify legacy risk.', priceClass: '$1,249 sold-out refurb check', dimensions: '11 × 20 × 15.5 in W×D×H', heating: '120 V, 1,350 W thermoblock', coffeeSetup: 'One 12-step ceramic grinder, hopper and bypass', milkWorkflow: 'HygieSteam carafe, LattePerfetto and paired LatteDuo', bestFor: 'Profile-heavy milk households' },
    { name: 'Philips 5400 LatteGo', href: '/espresso-machine/philips-5400-lattego/', quickDecision: 'Choose the simpler hose-free milk container and four profiles when paired milk drinks are unnecessary.', priceClass: 'Legacy refurbished class', dimensions: '9.7 × 17 × 14.6 in W×D×H', heating: '1,400 W automatic system', coffeeSetup: 'One 12-step ceramic grinder and bypass', milkWorkflow: 'Two-piece LatteGo, one milk drink at a time', bestFor: 'Easier milk cleanup' },
    { name: 'DeLonghi Dinamica Plus', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', quickDecision: 'Compare current seller support and LatteCrema workflow when condition certainty matters more than LatteDuo.', priceClass: 'Premium automatic class', dimensions: 'Compact deep automatic body', heating: 'Automatic thermoblock platform', coffeeSetup: 'One integrated grinder and bypass', milkWorkflow: 'Automatic LatteCrema carafe', bestFor: 'Current-market one-touch buyers' },
    { name: 'Miele CM 6360 MilkPerfection', href: '/espresso-machine/miele-cm6360-milkperfection/', quickDecision: 'Pay for paired milk drinks, current support and Miele workflow in a narrower current machine.', priceClass: '$2,549 checked Sep 24', dimensions: '251 × 427 × 359 mm W×D×H', heating: '1.45 kW automatic system', coffeeSetup: 'One conical grinder, hopper and bypass', milkWorkflow: 'Glass flask and paired OneTouch milk', bestFor: 'Current multi-user premium homes' },
  ],
  comparisonNote: 'Compare exact voltage and model suffix, new versus refurbished condition, seller warranty, return shipping, included milk parts, profile count, paired-drink behavior, brewer access, cleaning cadence and repair channel. A generic Xelsis name can refer to materially different generations.',
  recommendations: [
    { kicker: 'Simpler milk cleanup', title: 'Philips 5400 LatteGo', text: 'Choose a two-piece hose-free milk container and four profiles when two simultaneous milk drinks are unnecessary.', href: '/espresso-machine/philips-5400-lattego/', linkLabel: 'Read Philips 5400 review' },
    { kicker: 'Current alternative', title: 'DeLonghi Dinamica Plus', text: 'Compare a current automatic platform and LatteCrema workflow before accepting legacy-stock risk.', href: '/espresso-machine/delonghi-dinamica-plus-ecam370/', linkLabel: 'Read Dinamica Plus review' },
    { kicker: 'Premium paired drinks', title: 'Miele CM 6360', text: 'Move to a current premium machine with paired milk service and a documented US support path.', href: '/espresso-machine/miele-cm6360-milkperfection/', linkLabel: 'Read Miele CM 6360 review' },
    { kicker: 'Category checklist', title: 'Best superautomatic machines', text: 'Compare milk cleaning, profiles, brewer access, condition, warranty and ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'Is Saeco Xelsis SM7685 discontinued?', answer: 'It is a legacy generation in the verified North American market. Philips still hosts support, but the checked US specialist listing was certified-refurbished and sold out. Current Xelsis Suprema and Deluxe are different machines.' },
    { question: 'What is the difference between SM7684 and SM7685?', answer: 'Seattle Coffee Gear’s exact-model guide says SM7685 adds LatteDuo paired milk drinks, LattePerfetto foam and eight profiles above SM7684. Confirm the suffix because regional packages can differ.' },
    { question: 'Can SM7685 make two cappuccinos at once?', answer: 'Yes. LatteDuo is documented for two matching milk drinks in one selected cycle, assuming the complete milk system is present and working.' },
    { question: 'How many drinks and profiles does it have?', answer: 'The North American SM7685 record supports 15 drinks and eight profiles. Do not transfer those figures to every machine sold under the Xelsis name.' },
    { question: 'Does HygieSteam eliminate milk cleaning?', answer: 'No. It automates a purge and cleaning step, but the milk carafe, hose and internal components still require the exact manual’s physical care.' },
    { question: 'Is the brew group removable?', answer: 'Yes. Remove, rinse and lubricate it on the documented schedule, and follow prompts for coffee-oil cleaning and descaling.' },
    { question: 'Does AquaClean mean the machine never needs descaling?', answer: 'No. The extended interval depends on correct activation and timely filter replacement. Follow water-hardness setup and machine prompts.' },
    { question: 'What should I inspect on a used or refurbished Xelsis?', answer: 'Verify rating plate, voltage, suffix, seller warranty, return rights, screen, grinder, brewer, leaks, tray, milk draw, foam, HygieSteam cycle, carafe, hoses, filter state and service history.' },
  ],
  finalTitle: 'The SM7685 feature set aged well, but the buying market did not',
  finalVerdict: [
    'Saeco built an unusually thoughtful shared-household machine. Eight profiles, Coffee Equalizer, LatteDuo and LattePerfetto still solve real drink and milk preferences, while the removable brewer and front access keep ownership visible.',
    'The current decision is about the specific unit. The only verified specialist price was a sold-out $1,249 certified refurb with six-month coverage. Model suffixes differ between Philips support and the retailer record, so the rating plate and written support route outrank a generic Xelsis listing.',
    'Buy a complete SM7685 when paired milk drinks and deep profiles justify the extra diligence. Choose Philips 5400 for simpler milk cleanup, Dinamica Plus for a more current one-touch market, or Miele CM 6360 for premium paired drinks with current support.',
  ],
  video: { id: 'yNaPPvjBDsU', title: 'Saeco Xelsis Crew Review', creator: 'Seattle Coffee Gear', published: '2018-10-03', note: 'Unique independent retailer walkthrough of the SM76xx Xelsis generation, interface, Coffee Equalizer and milk workflow. Seattle Coffee Gear sells the product, and the video does not prove current stock, condition, durability or performance for a refurbished SM7685.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#saeco-xelsis-sm7685-north-america-source-1">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-4">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-5">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#saeco-xelsis-sm7685-north-america-source-2">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-6">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#saeco-xelsis-sm7685-north-america-source-5">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-12">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#saeco-xelsis-sm7685-north-america-source-5">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-7">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#saeco-xelsis-sm7685-north-america-source-1">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-3">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-4">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#saeco-xelsis-sm7685-north-america-source-5">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-8">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#saeco-xelsis-sm7685-north-america-source-4">[source]</a> <a href="#saeco-xelsis-sm7685-north-america-source-5">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="saeco-xelsis-owner-title"><h3 id="saeco-xelsis-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Milk flexibility is the recurring attraction</strong><p>Owners and shoppers repeatedly distinguish Xelsis from simpler automatic machines through milk texture choices, recipe order and paired drinks. That is a fit signal, not proof that every carafe produces the same temperature or foam.</p></li>
    <li><strong>Cleaning and airflow change the result</strong><p>Reports of weak foam often lead to questions about milk type, carafe assembly, air paths and cleaning. One successful repair or one blocked part cannot diagnose another machine or establish a failure rate.</p></li>
    <li><strong>Region and condition can outweigh features</strong><p>Import and refurbished discussions emphasize voltage, warranty, missing parts and service access. A low headline price is not comparable until those facts are documented.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeSaecoXelsisReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
