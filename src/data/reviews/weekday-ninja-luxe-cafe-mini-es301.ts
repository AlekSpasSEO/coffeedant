import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (score: number, claim: string, consequence: string, status: string, signals: [string, string, string]): DimensionCopy => ({ score, claim, consequence, status, signals });
const official = 'https://www.sharkninja.com/ninja-luxe-cafe-mini-espresso-machine/ES301.html?dwvar_ES301_color=000000';
const techradar = 'https://www.techradar.com/home/coffee-machines/ninja-luxe-cafe-mini-review';
const geardiary = 'https://geardiary.com/2026/10/29/ninja-luxe-cafe-mini-review/';
const bestbuy = 'https://www.bestbuy.com/product/ninja-luxe-cafe-mini-espresso-machine-drip-coffee-maker-with-built-in-grinder-manual-steam-wand-black/JXJVXLXK68/sku/6681798/reviews?pageSize=20';
const video = 'https://www.youtube.com/watch?v=MlAhtvWD66U';
const owner = 'https://www.reddit.com/r/espresso/comments/1wdgy5z/brand_new_to_espresso/';
const hero = 'https://assets.sharkninja.com/image/upload/c_fill,w_690,h_690,f_auto,g_auto,q_auto,dpr_2.0,b_rgb:FFFFFF/v1/storefront/products/ES301/ES301_Hero_Component';

const profile: UpgradeReviewProfile = {
  excludeSelfFromAlternatives: true,
  key: 'ninja-luxe-cafe-mini-es301-us-20261112',
  slug: '/espresso-machine/ninja-luxe-cafe-mini-es301/', productId: 'CD-EM-000256',
  brand: 'Ninja', model: 'Luxe Café Mini ES301', sku: 'US black ES301, 120 V; not Mini Plus ES351, Premier ES601 or Pro ES701',
  category: 'Compact guided semi-automatic espresso and drip coffee machine with grinder, dose scale and manual steam wand', brandPath: '/espresso-machine/',
  title: 'Ninja Luxe Café Mini ES301 review: compact espresso and drip with hands-on milk',
  description: 'Research-led US ES301 review of espresso consistency, drip modes, guided grinder, manual steaming, compact fit, comparisons and dated value.',
  verdictLabel: 'A compact mixed-drink station for buyers willing to learn a manual wand',
  verdict: 'The black US ES301 puts an integrated conical grinder, dose scale, guided grind recommendations, espresso and three drip styles into a 12.17-inch-wide body. SharkNinja listed it at $449.99 on November 12, 2026. Its manual steam wand and two-basket kit distinguish it from the hands-free Mini Plus and larger cold-brew-capable Premier. TechRadar liked its drip output but reported variable espresso yields and no obvious path into the grinder for cleaning on its sample; Gear Diary enjoyed its drinks after a month while noting a tight portafilter and hot-wand clearance. Those accounts support a useful but qualified buying judgment, not a Coffeedant taste or reliability test. Choose this model when guided espresso plus hot and over-ice drip in a small footprint matters more than automatic milk or rapid cold brew.',
  assessment: 'Six dimension scores are editorial buying judgments grounded in exact-model specifications, two independent samples, dated US value and limited owner reports. Coffeedant has not operated, tasted from or measured the ES301.',
  image: hero, imageAlt: 'SharkNinja official image of the black US Ninja Luxe Café Mini ES301',
  published: '2026-11-12', updated: '2026-11-12',
  price: { label: 'SharkNinja US black ES301 direct listing', msrp: '$449.99', numeric: '449.99', currency: 'USD', typical: 'Selected black ES301 on November 12, 2026; before tax, shipping, filters, beans and any separate accessories. This is a dated regular listing, not a verified discount.', checked: 'November 12, 2026' },
  links: [
    { label: 'Check exact black ES301 at SharkNinja US', href: official, note: 'Verify ES301, current cart, included kit and one-year warranty', primary: true },
    { label: 'Compare the ES301 and other Luxe Café models', href: official, note: 'Manufacturer model matrix distinguishes Mini, Mini Plus, Premier and Pro' },
  ],
  facts: [
    { label: 'Exact scope', value: 'Black US ES301, 120 V / 60 Hz, 1,650 W; not ES351, ES601 or ES701' },
    { label: 'Drinks', value: 'Double or triple espresso; classic, rich or over-ice drip. No rapid cold-brew program on the ES301 matrix.' },
    { label: 'Grinder and dose', value: 'Integrated conical burr grinder with 60 settings and guided recommendations; built-in grounds dose scale' },
    { label: 'Milk', value: 'Manual steam wand and included jug; Mini Plus is the automatic frothing variant' },
    { label: 'Footprint', value: '10.24 in L × 12.17 in W × 13.43 in H, 18.96 lb per SharkNinja; allow handling clearance' },
    { label: 'Capacity and kit', value: '47 oz water tank, 250 g bean hopper, double and Luxe baskets, funnel, assisted tamper and cleaning supplies' },
    { label: 'US direct price', value: '$449.99 on November 12, 2026, before tax and beans; one-year limited warranty shown' },
  ],
  quickAnswers: [
    { question: 'Does the ES301 make cold brew?', answer: 'No rapid cold-brew mode appears in the manufacturer ES301 model matrix. Over Ice is a drip setting, not the Premier cold-brew program.' },
    { question: 'Is milk automatic?', answer: 'No. The ES301 has a manual steam wand. The similarly named ES351 Mini Plus adds automatic frothing.' },
    { question: 'Is it fully automatic?', answer: 'No. It recommends grind size and weighs grounds, but you still move, tamp and lock the portafilter and steam milk by hand.' },
    { question: 'Does it brew regular coffee?', answer: 'Yes. It has classic, rich and over-ice drip styles alongside double and triple espresso.' },
    { question: 'Can it brew a single espresso?', answer: 'The included baskets are double and Luxe. TechRadar describes the espresso selection as a double; do not buy it expecting a supplied single basket.' },
    { question: 'What did the checked US machine cost?', answer: '$449.99 for selected black ES301 on November 12, 2026 before tax and shipping; recheck the current cart.' },
  ],
  bestFor: ['A compact counter that needs both espresso and hot or over-ice drip', 'A learner who wants guided grind and dose but enjoys steaming milk manually', 'A buyer who values a bundled grinder more than independent component upgrades'],
  avoidIf: ['You need automatic milk texture or cold foam', 'You require a rapid cold-brew program', 'You want a separate grinder that can be replaced independently', 'Portafilter locking strength or hot-wand clearance is a concern'],
  pros: ['Espresso and three drip styles in one compact station', '60-position guided grinder and built-in dose scale', 'Manual wand permits hands-on milk practice', 'Useful basket, tamper, funnel and cleaning kit included'],
  cons: ['TechRadar reported inconsistent espresso yield on its sample', 'Portafilter took strength in two independent accounts', 'Manual steam wand and close clearance demand care', 'Grinder cleaning access was unclear to one reviewer'],
  architecture: 'a US 120 V integrated grinder-and-brewer with conical burrs, a grounds dose scale, assisted tamper, double and Luxe baskets, espresso and drip brew paths, and a manual steam wand',
  identityBoundary: 'Only black US ES301 is assessed. Mini Plus ES351 changes the frothing system; Premier ES601 and Pro ES701 add drink paths and larger bodies. A generic Luxe Café claim, regional voltage model or retail bundle cannot be substituted for the selected ES301.',
  overview: 'ES301 is a useful answer to a narrow space problem: espresso and drip from whole beans with one integrated grinder. The controls guide a new user through grind and dose, but the operation still has physical steps and a learning curve. The key trade is manual milk and a smaller drink menu at a lower dated US price than Premier. Independent reports conflict on espresso consistency, so a buyer should check repeatability with the same coffee during the return period.',
  primaryStrength: 'One small station covers double/triple espresso plus hot and over-ice drip with guided grinding and weighing.',
  primaryLimit: 'Manual steaming, coupled grinder service and reported sample-level espresso variation weaken the promise of effortless café drinks.',
  setupNote: 'Check the ES301 plate and US 120 V supply before first use. Leave enough side and overhead room to remove the tank, fill the hopper, turn the portafilter and position a jug around the steam wand. Fit the double or Luxe basket and funnel, choose the intended drink, accept the recommended grinder starting point, then let the dose scale stop grinding. Use the assisted tamper and lock the portafilter fully; reviewers found that action surprisingly firm. A factory suggestion is a starting point, not a universal recipe for every roast.',
  espressoNote: 'The Mini offers double and triple espresso paths with guided grind recommendations and adaptive brewing. That saves decisions, but cannot guarantee identical beverage yield. TechRadar observed espresso volumes that sometimes stopped short even with the same beans and setting, while its drip modes were steady on its sample. Gear Diary described good espresso over a month, with a firm portafilter lock. Those are two uncontrolled machines, coffees and methods. Weigh or mark a few repeat shots on the delivered unit, adjust only one variable at a time, and use the return window if the behavior is unsuitable. Coffeedant has not pulled a shot.',
  milkNote: 'The ES301 has a manual steam wand and milk jug. It asks the owner to set the wand angle, introduce air and manage texture, then wipe and purge safely. TechRadar found milk texture took practice; Gear Diary liked almond-milk foam but warned that its compact layout can put a hand near the hot wand. Neither account establishes universal plant-milk performance. The official product page has a generic auto-frother bullet, but its title, product detail, selected ES301 kit and comparison matrix identify manual frothing. Buy ES351 Mini Plus if hands-free froth is essential.',
  workflowNote: 'The built-in grinder, grounds scale and funnel streamline an espresso dose, yet the user still chooses a basket, follows a grind recommendation, tamps, moves and locks the portafilter. Drip coffee uses the same station and hopper; changing beans between drinks may need clearing retained grounds and re-learning a setting. Over Ice is brewed drip intended for ice dilution, not cold brew. TechRadar liked the drip modes but found the several accessories needed regular washing. Keep the tamping and cleaning steps in mind when comparing a one-button appliance.',
  buildNote: 'SharkNinja specifies 10.24 × 12.17 × 13.43 inches and 18.96 pounds, a 47-ounce reservoir, 250-gram hopper and one-year limited warranty for the selected US machine. The narrow body helps a compact counter, but the portafilter still swings outward, and side clearance around a hot wand matters. Gear Diary received a review sample from the maker; its month of use does not show long-term durability. Check the delivered fit and service instructions rather than assuming a small footprint means easy maintenance.',
  featuresNote: 'The 60-position conical grinder and dose scale are concrete convenience features. They do not measure espresso in the cup, and a displayed grind number will vary with coffee and machine. Assisted tamping adds consistency of action; it does not remove puck preparation. The manufacturer describes adaptive temperature and pressure control, but provides no independent Coffeedant trace for this unit. A generic page bullet calls an auto frother built in, conflicting with ES301-specific manual-wand details; the model comparison points to ES351 for automatic froth.',
  valueNote: 'At SharkNinja US, the selected black ES301 showed $449.99 on November 12, 2026. Its kit includes a grinder, jug, baskets, funnel, assisted tamper and cleaning supplies, reducing the need for immediate separate equipment. Coffee, filters, descaler, tax and potential future repair costs remain. Premier ES601 was listed at $599.99 in the same manufacturer comparison and adds cold brew and hands-free froth; Mini Plus ES351 was $499.99 and adds auto frothing. Those dated regular listings are not promises of current discounts. Choose the Mini only when its omitted functions are truly unnecessary.',
  ownerPattern: 'Exact-model owner evidence is early and sparse. The Best Buy ES301 review page had only a handful of self-selected submissions at this check and warns some customers may be incentivized. One novice espresso forum owner called the Mini a useful entry point at about $450. Neither sample can establish a failure rate or a typical cup. Independent reviewers provide more detailed but still limited observations: one reported uneven espresso yield and another described pleasant daily drinks with a strong portafilter lock.',
  ownerCaution: 'Treat retailer and forum reports as inspection prompts. New products have little long-term owner history, and samples may reflect different beans, technique and incentives. Check grind stopping, repeat espresso volume, drip output, steam clearance and cleaning during the actual return period. Do not turn a few comments into a durability rating.',
  maintenanceNote: 'Rinse and dry the supplied baskets, funnel, portafilter and jug according to the ES301 instructions. Wipe and purge the wand after each milk use, empty the drip tray, and follow the machine’s descale prompts using compatible supplies. TechRadar could not find an obvious route into the grinder chamber for deeper cleaning; that is a service-access question, not proof of imminent failure. Confirm the model-specific cleaning instructions and support route before using a tool or liquid near the grinder.',
  dimensions: {
    espresso: dim(7.4, 'Guided dose and grind make espresso approachable.', 'Reported short and variable yields on one independent sample limit confidence in repeatability.', 'Manufacturer controls and conflicting independent samples; no Coffeedant extraction', ['Double and triple paths.', 'TechRadar observed variable espresso yield.', 'Gear Diary liked its espresso.']),
    milk: dim(7.0, 'Manual wand offers hands-on texture control.', 'A novice needs practice and must manage tight hot-wand clearance.', 'Exact ES301 specification and two independent reports', ['Manual, not automatic.', 'Included jug.', 'Keep hands clear of hot wand.']),
    workflow: dim(8.1, 'Integrated grinder, scale and drip paths consolidate a small counter.', 'Tamping, locking, accessory washing and bean changes remain manual.', 'Manufacturer steps and hands-on reviewer reports', ['60 grind positions.', 'Grounds dose scale.', 'Three drip styles.']),
    build: dim(7.5, 'Compact dimensions and included kit suit a small station.', 'Coupled grinder/brewer and unclear grinder access complicate service planning.', 'Official US specification and limited independent use', ['12.17-inch listed width.', 'One-year limited warranty.', 'No representative durability data.']),
    features: dim(7.9, 'Guided brewing has useful espresso and drip breadth.', 'No rapid cold brew or automatic milk on ES301.', 'Exact-model manufacturer matrix and kit', ['Double/triple espresso.', 'Classic, rich, over-ice drip.', 'Manual wand.']),
    value: dim(8.0, 'The checked $449.99 US bundle combines grinder and brewer.', 'Pay more for ES351 auto froth or ES601 cold brew only if used.', 'November 12 selected US listings; no offer claim', ['$449.99 ES301.', '$499.99 ES351 comparison.', '$599.99 ES601 comparison.']),
  },
  sources: [
    { label: 'SharkNinja US black ES301 listing', href: official, note: 'Exact model, selected $449.99 price, kit, dimensions, electrical rating and one-year warranty checked November 12, 2026.' },
    { label: 'SharkNinja Luxe Café model comparison', href: official, note: 'ES301 manual froth and two drink categories versus ES351 auto froth and ES601 cold brew.' },
    { label: 'SharkNinja ES301 grind and features', href: official, note: '60 grind positions, dose scale, guided recommendations and manufacturer adaptive-brewing claims.' },
    { label: 'TechRadar exact Mini review', href: techradar, note: 'Karen Freeman hands-on August 2026: drip success, variable espresso yield, learning curve and grinder-cleaning question on her sample.' },
    { label: 'Gear Diary exact Mini review', href: geardiary, note: 'Perry Brauner October 29 2026 month of use; review sample provided by Ninja; hot-wand and tight-portafilter caveats.' },
    { label: 'Amanda Buy or Bye? ES301 video', href: video, note: 'August 3 2026 exact-model brief demonstration with affiliate links; visual context, not Coffeedant testing.' },
    { label: 'Best Buy ES301 customer review page', href: bestbuy, note: 'Small self-selected owner sample; site notes possible incentivized reviewers. No reliability inference.' },
    { label: 'Novice ES301 owner discussion', href: owner, note: 'One self-selected novice considered Mini an entry point near $450; no representative taste or durability finding.' },
    { label: 'SharkNinja US Premier ES601 listing', href: 'https://www.sharkninja.com/ninja-luxe-cafe-premier-3-in-1-espresso-coffee-cold-brew/ES601.html', note: 'Manufacturer details for the larger cold-brew and automatic-froth option; compare exact current variant.' },
    { label: 'SharkNinja US Pro ES701 listing', href: 'https://www.sharkninja.com/ninja-luxe-cafe-pro-4-in-1-espresso-coffee-cold-brew-hot-water/ES701.html', note: 'Manufacturer details for the larger, broader drink menu; compare exact current variant.' },
  ],
  comparisons: [
    { name: 'Ninja Luxe Café Mini ES301', href: '/espresso-machine/ninja-luxe-cafe-mini-es301/', quickDecision: 'Compact guided espresso and drip with manual milk.', priceClass: '$449.99 US direct check', dimensions: '12.17 in listed width', heating: '120 V / 1,650 W', coffeeSetup: '60-step integrated grinder and dose scale', milkWorkflow: 'Manual steam wand', bestFor: 'Small mixed-drink counter' },
    { name: 'Ninja Luxe Café Premier ES601', href: '/espresso-machine/ninja-luxe-cafe-premier-es601/', quickDecision: 'Choose when rapid cold brew and automatic froth matter.', priceClass: '$599.99 manufacturer comparison', dimensions: 'Larger countertop system', heating: 'US 120 V model', coffeeSetup: 'Guided integrated grinder and scale', milkWorkflow: 'Hands-free hot/cold froth', bestFor: 'Wider mixed-drink menu' },
    { name: 'Ninja Luxe Café Pro ES701', href: '/espresso-machine/ninja-luxe-cafe-pro-es701/', quickDecision: 'Choose a larger guided system for hot water and expanded drink control.', priceClass: 'Higher-priced class', dimensions: 'Larger countertop system', heating: 'US 120 V model', coffeeSetup: 'Integrated grinder, dose guidance', milkWorkflow: 'Five hands-free presets', bestFor: 'Broad all-in-one menu' },
    { name: 'Breville Barista Express BES870XL', href: '/espresso-machine/breville-barista-express-bes870xl/', quickDecision: 'Choose a traditional integrated espresso workflow without drip modes.', priceClass: 'Separate current-cart check', dimensions: 'Countertop espresso system', heating: 'US 120 V model', coffeeSetup: 'Integrated grinder, manual dose/tamp', milkWorkflow: 'Manual steam wand', bestFor: 'Espresso-first practice' },
  ],
  comparisonNote: 'The decision is menu and milk workflow, not a generic ranking. ES301 has the compact manual-wand espresso/drip bundle; ES601 adds cold brew and auto froth; ES701 broadens further; Barista Express omits drip for a conventional espresso station. Verify exact US variant and current delivered total.',
  recommendations: [
    { kicker: 'Cold brew and hands-free milk', title: 'Ninja Luxe Café Premier ES601', text: 'The larger family member adds the drink and milk functions absent from Mini.', href: '/espresso-machine/ninja-luxe-cafe-premier-es601/', linkLabel: 'Read Premier review' },
    { kicker: 'Wider café menu', title: 'Ninja Luxe Café Pro ES701', text: 'For a household that will use hot water and more froth presets.', href: '/espresso-machine/ninja-luxe-cafe-pro-es701/', linkLabel: 'Read Pro review' },
    { kicker: 'Espresso-only practice', title: 'Breville Barista Express BES870XL', text: 'Compare a more conventional portafilter station if drip is unnecessary.', href: '/espresso-machine/breville-barista-express-bes870xl/', linkLabel: 'Read Barista Express review' },
    { kicker: 'Choose beans deliberately', title: 'Coffee bean reviews', text: 'Try a known fresh roast before deciding whether the machine or coffee causes a cup problem.', href: '/coffee-beans/', linkLabel: 'Browse bean reviews' },
  ],
  faqs: [
    { question: 'Does Ninja Mini ES301 have automatic milk frothing?', answer: 'No. The exact ES301 comparison says manual frothing. Mini Plus ES351 is the similarly named automatic-froth version.' },
    { question: 'Does Over Ice mean cold brew?', answer: 'No. ES301 brews drip coffee over ice; the manufacturer lists rapid cold brew for Premier and Pro instead.' },
    { question: 'Can I make a single shot?', answer: 'The supplied kit lists double and Luxe baskets, not a single basket. Verify any separately sold accessory compatibility before purchase.' },
    { question: 'Is the grind setting chosen automatically?', answer: 'The machine recommends a grind position; the user turns the dial and can adjust it for a coffee. A recommendation is not guaranteed extraction.' },
    { question: 'Does the built-in scale weigh the drink?', answer: 'No. It controls the mass of ground coffee for dosing. Measure beverage yield separately if consistency matters.' },
    { question: 'How wide is the machine?', answer: 'SharkNinja lists 12.17 inches wide for US ES301. Allow more room to handle the portafilter, tank and hot steam wand.' },
    { question: 'Is espresso output consistent?', answer: 'Independent accounts differ. TechRadar saw varying yield from its sample; Gear Diary liked its drinks after a month. Check repeat shots on your delivered unit.' },
    { question: 'Is $449.99 a discount?', answer: 'It was SharkNinja US selected black ES301 listing on November 12, 2026, not a claimed sale. Recheck the live cart and tax.' },
  ],
  finalTitle: 'Buy the Mini for its exact menu',
  finalVerdict: [
    'ES301 is compelling for a small counter when the household wants guided whole-bean espresso and drip, and someone is happy to steam milk. The included grinder and dose scale reduce separate gear, while the manual steps remain real.',
    'Two independent exact-model accounts diverge on espresso consistency and agree that compactness brings a firm portafilter or hot-wand handling caveat. Early owner reports are too sparse for a reliability claim. No Coffeedant tasting or bench measurement is implied.',
    'Check the black US ES301, current total and return terms. During the return period, repeat the same espresso recipe and a drip recipe, inspect wand clearance, and decide whether the coupled station fits daily use.',
  ],
  video: { id: 'MlAhtvWD66U', title: 'Espresso & Drip Coffee in One Small Footprint! Ninja Luxe Café Mini Test', creator: 'Amanda Buy or Bye?', published: '2026-08-03', note: 'Exact ES301 short affiliate-disclosed video for visual workflow context; not Coffeedant testing or a durability sample.' },
};

const review = buildUpgradeReview(profile);
review.article.authorNote = 'I checked the exact black US ES301 listing, manufacturer comparison, two independent exact-model reviews, one affiliate-disclosed demonstration and sparse owner reports on November 12, 2026. Coffeedant has not used or tasted from the machine.';
review.article.basisDisclosure = 'Research-led US ES301 buying assessment. Scores are editorial judgments supported by identified sources, not Coffeedant extraction, milk, temperature or reliability measurements. Manufacturer claims and independent samples are identified separately.';
export const weekdayNinjaEs301Reviews: MachineReviewData[] = [review];

