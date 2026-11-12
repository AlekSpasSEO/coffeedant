import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (score: number, claim: string, consequence: string, status: string, signals: [string, string, string], label?: string): DimensionCopy => ({ score, claim, consequence, status, signals, label });
const official = 'https://www.baratza.com/en-us/product/variotm-w-zcg987';
const manual = 'https://assets.breville.com/ZCG987/manual-variowplus-en-v1-6_082123.pdf';
const hub = 'https://www.baratza.com/en-us/producthub/zcg987';
const parts = 'https://www.baratza.com/en-us/landing/product/parts';
const warranty = 'https://www.baratza.com/en-us/support/warranty';
const coffeeness = 'https://www.coffeeness.de/en/baratza-vario-w-review/';
const lifestyle = 'https://lifestylelab.ca/baratza-vario-w-review/';
const video = 'https://www.youtube.com/watch?v=OzpXTYtIFy0';
const ownerFilter = 'https://www.reddit.com/r/pourover/comments/1i2e7gt';
const ownerWeight = 'https://www.reddit.com/r/espresso/comments/1lnrno0';
const ownerRecent = 'https://www.reddit.com/r/pourover/comments/1uqugg5/need_help_choosing_femobook_a4z_vs_baratza_vario_w/';
const hero = 'https://assets.breville.com/cdn-cgi/image/width=1304,format=auto,quality=75/ZCG987/ZCG987BLK1BUC1A.png?pdp';

const profile: UpgradeReviewProfile = {
  excludeSelfFromAlternatives: true,
  key: 'baratza-vario-w-plus-us-20261112',
  slug: '/grinder/baratza-vario-w-plus/', productId: 'CD-GR-000009',
  brand: 'Baratza', model: 'Vario W+', sku: 'US black ZCG987BLK1BUC1A / ZCG987, 100–120 V; not white ZCG988 or Vario+',
  category: '54 mm steel flat-burr grinder with grounds-bin weight dosing for espresso and filter', brandPath: '/grinder/',
  title: 'Baratza Vario W+ review: precise bin dosing for a one-coffee routine',
  description: 'Research-led US Vario W+ review of the exact black ZCG987, 54 mm steel burrs, weight presets, espresso calibration, filter results and hopper tradeoffs.',
  verdictLabel: 'A strong hopper-fed filter and occasional espresso grinder when grounds-bin transfer is acceptable',
  verdict: 'The black US Vario W+ combines 54 mm steel flat burrs, macro/micro adjustment and a scale under its grounds bin with three saved weight targets. Baratza showed $599.95 on November 12, 2026. Its clearest routine is repeatedly grinding one coffee by weight for pour-over or drip; espresso is supported, but the manual warns that finer calibration may be needed and the bin must be emptied into a portafilter. Independent reviewers like its filter range and dosing while noting that the scale can interrupt single dosing. Owners disagree about filter bitterness and whether bypassing weight mode is worthwhile. Those accounts cannot establish a general taste or failure rate. Buy it for the specific measured-bin workflow, not an assumed portafilter cradle, zero retention or a universal 220-setting recipe.',
  assessment: 'The six scores are source-led buying judgments about range, dose control, service access and workflow. Coffeedant has not ground, tasted, weighed or serviced a Vario W+.',
  image: hero, imageAlt: 'Baratza official image of black US Vario W+ ZCG987 grinder with integrated grounds-bin scale',
  published: '2026-11-12', updated: '2026-11-12',
  price: { label: 'Baratza US black Vario W+ direct listing', msrp: '$599.95', numeric: '599.95', currency: 'USD', typical: 'Exact black US model selected on November 12, 2026; $599.95 before tax and shipping. The separate fresh-bean promotion is not a grinder discount; no offer expiry applies to this regular listing.', checked: 'November 12, 2026' },
  links: [
    { label: 'Check the exact black ZCG987 at Baratza US', href: official, note: 'Select black, confirm ZCG987BLK1BUC1A, current total and warranty', primary: true },
    { label: 'Read the Vario W+ operations manual', href: manual, note: 'Manufacturer setup, weight presets, espresso calibration, errors and cleaning' },
  ],
  facts: [
    { label: 'Exact scope', value: 'US black ZCG987BLK1BUC1A, 100–120 V; white ZCG988 and Vario+ are different variants' },
    { label: 'Burrs', value: 'Baratza specifies 54 mm steel flat burrs; no Coffeedant particle or cup measurement' },
    { label: 'Adjustment', value: 'Macro and micro levers; Baratza describes 22 micro positions per macro range' },
    { label: 'Dosing', value: 'Built-in load cell weighs grounds in the supplied bin, with three programmable targets; not direct portafilter dosing' },
    { label: 'Espresso boundary', value: 'Manufacturer manual says espresso may require finer burr calibration and recommends hopper-fed use' },
    { label: 'Filter range', value: 'Manual gives V60, automatic, Chemex and press starts; actual calibration and coffee change the settings' },
    { label: 'US direct price', value: '$599.95 on November 12, 2026 before tax; fresh-bean promotion is separate' },
  ],
  quickAnswers: [
    { question: 'Does Vario W+ grind into a portafilter?', answer: 'Its weight system uses a grounds bin on a scale platform. Transfer the dose to a portafilter; do not assume a direct cradle.' },
    { question: 'Is Vario W+ an espresso grinder?', answer: 'Yes, but the manufacturer notes that a finer calibration may be needed. It is most convenient with beans in the hopper and a separate bin transfer.' },
    { question: 'Can it grind for pour-over?', answer: 'Yes. Baratza provides filter starts, and independent reviews used it for pour-over. Tune by your coffee, water and drawdown.' },
    { question: 'Can I single-dose espresso?', answer: 'Baratza advises against espresso single dosing in the normal weight mode. The manual documents override mode, which disables the weighing workflow.' },
    { question: 'Are 220 positions universal recipes?', answer: 'No. Macro/micro positions are local references affected by calibration, beans and brewing equipment.' },
    { question: 'What did the checked US listing cost?', answer: '$599.95 for the black ZCG987 on November 12, 2026 before tax; verify the current selected cart.' },
  ],
  bestFor: ['A household that repeats one or two filter recipes from a loaded hopper', 'A buyer who wants measured output without a separate grounds scale', 'Someone willing to transfer an occasional espresso dose from bin to basket'],
  avoidIf: ['You require direct hands-free portafilter dosing', 'You change beans almost every cup and expect single-dose espresso to use the scale normally', 'You want a guaranteed filter flavor or zero-retention specification'],
  pros: ['Real grounds-bin weight targets and three presets', '54 mm steel flat burrs and fine macro/micro range', 'Manual documents calibration, cleaning and error recovery', 'Factory parts and support routes are available'],
  cons: ['Grounds-bin transfer adds a step for espresso', 'Scale mode can stop when beans are single-dosed too slowly', 'One owner found bitter filter cups after a month; another reported good results with changed settings', 'Dated $599.95 US price is substantial for a bin-based workflow'],
  architecture: 'a 100–120 V, hopper-fed 54 mm steel flat-burr grinder with macro and micro levers, a load cell under its grounds bin, three programmable weight buttons, hopper shutoff and a documented override mode',
  identityBoundary: 'Only black US ZCG987BLK1BUC1A is evaluated. The white ZCG988, non-weight Vario+, older ceramic-burr Vario and direct-portafilter weight grinders are not the same purchase. A product-page bean promotion is separate from the grinder price.',
  overview: 'The Vario W+ makes sense when its built-in bin scale is central to the routine: fill a hopper with one coffee, select a saved gram target and grind for a filter brew. It can make espresso, but the manual allows recalibration and the measured grounds still need transferring to a portafilter. Independent reviewers praise the range while describing the friction of single dosing. The buying choice rests on whether a measured bin is more useful to this household than direct basket dosing or a dedicated filter grinder.',
  primaryStrength: 'Weight-based grounds output and fine adjustment make repeated filter doses and occasional espresso easier to organize.',
  primaryLimit: 'The scale and bin favor a loaded-hopper routine, while direct portafilter dosing and frequent single-dose switching need another workflow.',
  setupNote: 'Confirm the black ZCG987 model and 100–120 V rating. Hand-wash and dry the removable hopper and grounds bin, lock the hopper to engage its switch, seat the bin on the scale platform and follow the manual before adding beans. Save a modest filter target first and check actual output on an independent scale during early use. The default preset values of 15, 30 and 60 g are editable. Record the macro/micro setting and the coffee; someone else’s 5M is not guaranteed to match your calibration.',
  espressoNote: 'The manual includes an espresso starting area and explicitly says a finer burr calibration may be required if the stock range cannot slow a shot enough. That is a documented adjustment, not evidence that every Vario W+ is badly set. Use a hopper with sufficient beans in normal weight mode, grind into the bin, transfer into the portafilter and prepare a puck. The scale measures dry grounds, not beverage yield. Set a stable dose and target beverage mass, then move the micro lever gradually as you taste your own shots. Coffeeness found the grinder capable of espresso on its sample, but it preferred a more direct espresso-first machine for frequent portafilter work.',
  milkNote: 'For V60 and automatic drip, the 54 mm steel flat burrs and macro/micro positions provide a broad filter range. Baratza’s setting chart is a starting point, not a transferable dial across grinders. Coffeeness reports appealing filter cups; Lifestyle Lab particularly liked the loaded-hopper pour-over workflow. A separate owner found bitterness after a month, while another proposed a coarser, cooler recipe. These are different beans, water and extraction choices, not a controlled burr comparison or Coffeedant tasting. Work from one repeatable recipe before blaming burr geometry.',
  workflowNote: 'The bin sits on the load cell, so the grinder can stop at a programmed mass. Three buttons let a household save common doses, but fresh beans, grind changes and retained grounds still deserve an output check. The hopper shutoff helps switch coffees, yet a trace from the prior batch can remain in the chamber. Lifestyle Lab found normal weight mode inconvenient for single dosing because the no-weight-increase guard can stop the motor. The manual’s override runs without the scale until power is reset; it is a workaround, not measured dosing. For routine espresso, transferring every bin into a basket can be more work than a direct portafilter grinder.',
  buildNote: 'Baratza provides an operations manual, calibration and burr-removal tools and a support hub for the ZCG987 family. That makes ordinary maintenance and troubleshooting more concrete than a sealed device. The manual’s expected burr life is a manufacturer estimate under standard home use, not Coffeedant durability evidence or a warranty. A load-cell error, grinding stall or damaged cord deserves the documented support route; do not infer that published parts make every repair owner-safe. Check the seller’s current US warranty terms before purchase.',
  featuresNote: 'The features worth paying for are a scale under the bin, three saved gram targets, a wide macro/micro map and a shutoff hopper. Baratza’s 0.1 g display resolution describes the control system, not guaranteed output accuracy on every coffee. The manual documents an offset for consistent overshoot and an override for operating without weight feedback; both should be used only according to the relevant instructions. No direct portafilter cradle or beverage-yield sensor follows from the W+ name.',
  valueNote: 'Baratza US displayed $599.95 for the selected black grinder on November 12, 2026. Add tax, shipping, optional accessories and coffee used while dialing in before comparing complete station costs. The separate 25% fresh-bean promotion does not cut the grinder’s sticker price. Buyers brewing a repeat filter recipe every day may save time with the bin scale; an espresso-only buyer who wants grounds to land in the portafilter should compare a dedicated grinder. A simpler ESP Pro or a specialist filter grinder can cost less, but neither duplicates this exact combination of built-in weight dosing and broad flat-burr range.',
  ownerPattern: 'Self-selected accounts are mixed. One pour-over owner reported bitter cups across methods after a month; a responder said their own settings and water gave good cups. A former owner liked Vario W+ but moved away from automatic weight dosing, and a recent owner reported using it for both espresso and pour-over with some bitterness relative to another grinder. These experiences raise recipe and workflow questions, not a representative satisfaction score.',
  ownerCaution: 'Forum posts are small, self-selected observations with unknown calibration, coffee, water and technique. Do not turn one bitterness report into a burr defect or a recent happy account into a durability promise. Inspect the scale, repeatability and filter/espresso switching on the delivered grinder during the seller return period.',
  maintenanceNote: 'Unplug before cleaning. Baratza says hand-wash the hopper and bin, keep the housing dry and do not wash burrs with water. Use the supplied burr tool and a brush for permitted chamber cleaning. Its manual advises at least monthly cleaning in normal home use, more often for oily or flavored coffee. If Err2 appears, check hopper seating, gate and potential clogs before seeking support; Err4 indicates a scale communication issue requiring Baratza help.',
  dimensions: {
    espresso: dim(7.8, 'Fine macro/micro adjustment and optional calibration support espresso.', 'Grounds-bin transfer and hopper dependence make it less direct than an espresso-first grinder.', 'Factory manual plus independent sample and owners; no Coffeedant extraction', ['54 mm steel flat burrs.', 'Espresso calibration may be necessary.', 'No direct portafilter weight dosing.']),
    milk: dim(8.5, 'Filter brewing is a strong match for the measured-bin and broad burr range.', 'Water, beans and setting affect the cup; owner experiences differ.', 'Factory filter chart and independent reviews; no Coffeedant tasting', ['V60 and drip starts in manual.', 'Independent filter assessments.', 'A conflicting owner bitterness account.'], 'Filter brewing'),
    workflow: dim(8.1, 'Three gram presets streamline repeated loaded-hopper doses.', 'Frequent bean switching and single-dose espresso interrupt the scale’s main advantage.', 'Manufacturer operation and independent workflow reports', ['Three weight targets.', 'Hopper shutoff.', 'Override disables weighing.']),
    build: dim(8.1, 'Manual, calibration tools and support routes make maintenance legible.', 'Published access cannot guarantee future parts or a personal service result.', 'Factory documentation and selected owner accounts', ['Burr-removal tool included.', 'Load-cell error guidance.', 'No reliability rate.']),
    features: dim(8.4, 'Bin scale and two adjustment levers have concrete recipe utility.', '0.1 g resolution is not a guarantee of each final dose.', 'Current factory controls and independent use', ['54 mm steel flats.', '22 micro positions per macro range.', 'Three programmable weights.']),
    value: dim(7.7, 'The $599.95 US listing buys a distinctive hopper-fed grind-by-weight workflow.', 'It is poor value if direct portafilter dosing or single dosing is the real need.', 'November 12 official US selection and comparison', ['$599.95 black ZCG987.', 'Bean promotion is separate.', 'Tax and accessories excluded.']),
  },
  sources: [
    { label: 'Baratza US black Vario W+ product page', href: official, note: 'Exact selected ZCG987BLK1BUC1A, 54 mm steel burrs, bin scale, macro/micro control, media and direct listing.' },
    { label: 'Baratza Vario W+ operations manual', href: manual, note: '100–120 V rating check, setup, three weights, filter starts, espresso calibration, override, errors and cleaning.' },
    { label: 'Baratza US direct price check', href: official, note: 'Black variant $599.95 on November 12, 2026 before tax; fresh-bean promotion is not a grinder discount.' },
    { label: 'Coffeeness 2026 Vario W+ review', href: coffeeness, note: 'Arne Preuss independent sample and judgment on filter range, espresso and bin-only dosing; his cup is not Coffeedant tasting.' },
    { label: 'Lifestyle Lab hands-on review', href: lifestyle, note: 'Matthew’s 2022 sample, hopper-fed use, weight-stop limitation and bounded retention measurements; not a current-unit guarantee.' },
    { label: 'Lifestyle Lab exact-model video', href: video, note: 'September 10, 2022, 8:01 exact Vario W+ review. The creator’s demonstrations are not Coffeedant tests.' },
    { label: 'Baratza Vario W+ product hub', href: hub, note: 'Current manufacturer support, tutorials and troubleshooting route for exact family.' },
    { label: 'r/pourover bitterness discussion', href: ownerFilter, note: 'One 2025 owner reported bitter filter cups; another gave a conflicting positive recipe. Self-selected, different water and coffee.' },
    { label: 'r/espresso weight-dosing discussion', href: ownerWeight, note: 'Former Vario W+ owner liked the grinder but left automatic weight dosing; workflow anecdote only.' },
    { label: 'r/pourover 2026 Vario W+ owner reply', href: ownerRecent, note: 'Recent owner reports espresso and pour-over use with some bitterness relative to another grinder; not a blind comparison.' },
    { label: 'Baratza US parts route', href: parts, note: 'Manufacturer parts catalog route; verify exact ZCG987 compatibility and current stock.' },
    { label: 'Baratza US warranty information', href: warranty, note: 'Manufacturer support route; confirm applicable current US seller terms.' },
  ],
  comparisons: [
    { name: 'Baratza Vario W+', href: '/grinder/baratza-vario-w-plus/', quickDecision: 'Choose for weighed grounds in a bin across filter and occasional espresso.', priceClass: '$599.95 US direct check', dimensions: 'Countertop hopper grinder', heating: '100–120 V electric', coffeeSetup: '54 mm steel flats, bin scale, macro/micro', milkWorkflow: 'No milk system', bestFor: 'Repeated hopper-fed filter doses' },
    { name: 'Baratza Encore ESP Pro', href: '/grinder/baratza-encore-esp-pro/', quickDecision: 'Choose lower-cost stepless espresso and filter without built-in bin weighing.', priceClass: 'Lower-cost US grinder', dimensions: 'Compact countertop', heating: 'US electric', coffeeSetup: '40 mm M2 conical, stepless, timer/auto-stop', milkWorkflow: 'No milk system', bestFor: 'More direct espresso adjustment at lower cost' },
    { name: 'Eureka Mignon Specialità', href: '/grinder/eureka-mignon-specialita/', quickDecision: 'Choose direct portafilter grinding with timed dosing for espresso.', priceClass: 'Midrange espresso grinder', dimensions: 'Compact countertop', heating: 'US voltage variant required', coffeeSetup: '55 mm flat, stepless timer, portafilter fork', milkWorkflow: 'No milk system', bestFor: 'Espresso-only portafilter routine' },
    { name: 'Mazzer Philos', href: '/grinder/mazzer-philos/', quickDecision: 'Choose a separate single-dose flat-burr workflow if frequent coffee changes matter.', priceClass: 'Higher-priced single-dose class', dimensions: 'Countertop grinder', heating: 'US voltage variant required', coffeeSetup: '64 mm flat, single dose', milkWorkflow: 'No milk system', bestFor: 'Frequent bean switching' },
  ],
  comparisonNote: 'These grinders answer different dosing decisions. Vario W+ weighs grounds in a bin, ESP Pro offers lower-cost broad adjustment, Specialità doses by time into a portafilter, and Philos favors single doses. Compare exact US packages and delivered totals.',
  recommendations: [
    { kicker: 'Less expensive mixed-method control', title: 'Baratza Encore ESP Pro', text: 'For stepless espresso and filter adjustment when a separate scale is acceptable.', href: '/grinder/baratza-encore-esp-pro/', linkLabel: 'Read ESP Pro review' },
    { kicker: 'Portafilter-first espresso', title: 'Eureka Mignon Specialità', text: 'For timed direct-basket dosing rather than a grounds-bin transfer.', href: '/grinder/eureka-mignon-specialita/', linkLabel: 'Read Specialità review' },
    { kicker: 'Frequent coffee switching', title: 'Mazzer Philos', text: 'For weighed beans and single-dose flat-burr grinding without a loaded hopper.', href: '/grinder/mazzer-philos/', linkLabel: 'Read Philos review' },
    { kicker: 'Match the coffee', title: 'Coffee bean reviews', text: 'Choose a roast and process suited to the brewer before judging grind settings.', href: '/coffee-beans/', linkLabel: 'Browse bean reviews' },
  ],
  faqs: [
    { question: 'Does Vario W+ weigh beans or grounds?', answer: 'Its load cell weighs grounds in the supplied bin during grinding. It does not weigh the finished drink.' },
    { question: 'Can it grind directly into a portafilter?', answer: 'Normal weight-dosing uses the grounds bin, then you transfer the dose. Do not assume a portafilter cradle from another Vario model.' },
    { question: 'Can I single-dose espresso?', answer: 'The manufacturer cautions against normal weight-mode single dosing at espresso fineness; override mode removes the scale feedback. It is less convenient than a purpose-built single-dose grinder.' },
    { question: 'Will it grind fine enough for espresso?', answer: 'The manual supports espresso but says a finer calibration may be required on a given machine. Follow the exact manual and measure your own dose and beverage.' },
    { question: 'Is the white model the same item?', answer: 'The checked purchase is black US ZCG987BLK1BUC1A. White ZCG988 is a separate finish/SKU; verify the selected cart and electrical rating.' },
    { question: 'How often should it be cleaned?', answer: 'The manual says at least monthly under standard home use, more often with oily or flavored coffee, and gives dry-burr cleaning instructions.' },
    { question: 'Is $599.95 a promotional price?', answer: 'It was the selected black US grinder price on November 12, 2026. The separate fresh-bean promotion is not a grinder discount.' },
    { question: 'Does it guarantee a clearer filter cup?', answer: 'No. Independent and owner reports differ; beans, water, calibration and brew recipe affect the result.' },
  ],
  finalTitle: 'Choose the measured-bin routine deliberately',
  finalVerdict: [
    'Vario W+ is a specific tool: a hopper-fed steel-flat grinder with a scale under the grounds bin and three saved gram targets. It fits a repeated filter routine especially well and can support espresso with separate calibration and bin transfer.',
    'The official $599.95 US black listing is worthwhile only if that scale workflow saves real time. Independent use and owner accounts show why frequent single dosing, direct portafilter filling and a guaranteed filter flavor are weak reasons to choose it.',
    'Check the exact ZCG987, current total and warranty. Try the same coffee at a repeatable setting during the return period, measuring output and recording both filter and any espresso results before deciding to keep it.',
  ],
  video: { id: 'OzpXTYtIFy0', title: 'Baratza Vario W+ Review', creator: 'Lifestyle Lab', published: '2022-09-10', note: 'Independent exact-model 8:01 review; the creator’s workflow and sample measurements are not Coffeedant testing or proof of current-unit performance.' },
};

const review = buildUpgradeReview(profile);
review.article.authorNote = 'I checked the exact black Baratza US selection, manufacturer manual, current support route, two independent evaluations and bounded owner accounts on November 12, 2026. Coffeedant has not used, weighed, tasted from or serviced this grinder.';
review.article.basisDisclosure = 'Research-led US grinder assessment. The six scores are editorial buying judgments supported by cited design, independent samples and dated price; they are not Coffeedant particle, flavor, retention or durability measurements.';
export const weekdayBaratzaVarioWPlusReviews: MachineReviewData[] = [review];

