import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.profitec-espresso.com/en/products/go';
const officialHome = 'https://www.profitec-espresso.com/en';
const locator = 'https://www.profitec-espresso.com/en/storelocator';
const clive = 'https://clivecoffee.com/products/profitec-go-espresso-machine';
const wholeLatteLove = 'https://www.wholelattelove.com/products/profitec-go-espresso-machine';
const manual = 'https://support.clivecoffee.com/en/articles/16427117-profitec-go-user-manual';
const parts = 'https://links.imagerelay.com/cdn/2615/ql/1af0222db40c4e8793df631cfc6b7251/Profitec-GO--Parts-Diagram.pdf';
const independent = 'https://coffeekev.com/profitec-go-review/';
const firstLook = 'https://coffeegeek.com/reviews/firstlooks/profitec-go-espresso-machine-first-look/';
const goTwo = 'https://kaffeemacher.de/en/blogs/kaffeewissen/profitec-go-im-test';
const community = 'https://www.reddit.com/r/espresso/comments/1gbt2gy/describe_the_pros_cons_after_2_years_of_using/';
const ownerFit = 'https://www.reddit.com/r/espresso/comments/1e28n4e/profitec_go_yay_or_nay/';
const video = 'https://www.youtube.com/watch?v=FKiJLR0jjjA';
const image = 'https://clivecoffee.com/cdn/shop/files/Profitec-Go-Black-Hero-Espresso-Machine-KO-by-Clive-Coffee.jpg?v=1776200683&width=1200';

const profile: UpgradeReviewProfile = {
  key: 'profitec-go-original-us',
  slug: '/espresso-machine/profitec-go/',
  productId: 'CD-EM-000220',
  brand: 'Profitec',
  model: 'GO original generation',
  sku: 'Current US original GO, 115 V retailer stock; excludes GO 2.0',
  category: 'PID single-boiler espresso machine',
  brandPath: '/profitec/',
  title: 'Profitec GO review: the US original after GO 2.0 arrived',
  description: 'Research-led Profitec GO review of the current US original generation, with PID workflow, single-boiler limits, $1,199 price, owner evidence and GO 2.0 boundary.',
  verdictLabel: 'A compact espresso-first machine whose controls still work, but whose generation now needs checking',
  verdict: 'Buy the original US Profitec GO when a 58 mm group, front PID with shot timer, visible brew pressure and top-access OPV matter more than simultaneous brewing and steaming. Clive Coffee displayed the black, blue, red and yellow original GO at $1,199 with Add to Cart on September 24, 2026. Profitec launched GO 2.0 in Europe in June 2026, so confirm the generation, color-specific 2025 updates, voltage, included portafilters and warranty before comparing prices.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. The original GO manual, parts diagram and current US specialist listings establish the scored machine. Profitec’s current site and Kaffeemacher’s purchased GO 2.0 test define the successor boundary rather than supplying features to the original. Coffee Kev and CoffeeGeek provide attributed hands-on original-GO context. Retail reviews and forum discussions are self-selected and cannot establish failure rates, measured performance or expected life.',
  image,
  imageAlt: 'Clive Coffee product image of the black original-generation Profitec GO espresso machine',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: { label: 'Current US original-generation price checked', msrp: 'Current specialist price $1,199', typical: 'Clive Coffee displayed the original GO at $1,199 with Add to Cart on September 24, 2026. Whole Latte Love also displayed $1,199 with a three-year parts-and-labor warranty, but stock and color selection can vary. GO 2.0 European prices are not treated as US original-GO prices.', currency: 'USD', numeric: '1199', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the current US GO offer', href: clive, note: '$1,199 with Add to Cart displayed September 24, 2026; verify generation, color, updates and warranty', primary: true },
    { label: 'Open the original GO user manual', href: manual, note: 'Current specialist-hosted manual for setup, PID functions, cleaning and safety' },
  ],
  facts: [
    { label: 'Scored generation', value: 'Original GO sold by current US specialists, not the GO 2.0 introduced in Europe in June 2026' },
    { label: 'Brew system', value: 'PID-controlled brass single boiler, 58 mm ring group, vibration pump, three-way solenoid and automatic shot timer' },
    { label: 'Pressure control', value: 'Front brew-pressure gauge and externally accessible OPV below the cup tray; adjust only with a suitable blind basket and documented procedure' },
    { label: 'Water and fit', value: 'About 2.8 L removable reservoir; manufacturer dimensions 210 × 362 × 381 mm without portafilter and 210 × 410 × 381 mm with it' },
    { label: 'Electrical record', value: 'Official product record lists the US version at 115 V and 900 W; verify the rating plate because regional listings and retailer wattage cells conflict' },
    { label: 'Milk workflow', value: 'One boiler changes from brew to steam and must be cooled back to brew temperature; no simultaneous brewing and steaming' },
    { label: '2025 running change', value: 'Whole Latte Love says non-red US colors receive a quieter reservoir lid and larger BPA-free plastic tray; red did not receive those updates in its checked record' },
  ],
  quickAnswers: [
    { question: 'Which Profitec GO is reviewed?', answer: 'The original-generation GO still sold by current US specialists at $1,199, not the GO 2.0 introduced in Europe in June 2026.' },
    { question: 'Does it have a PID?', answer: 'Yes. The front display sets brew and steam temperatures and becomes a shot timer while the pump runs.' },
    { question: 'Can it brew and steam together?', answer: 'No. One brass boiler handles both jobs sequentially, so the machine must heat for steam and then cool back to brew temperature.' },
    { question: 'Does it have pre-infusion?', answer: 'The original GO does not provide programmable automatic pre-infusion. That is a GO 2.0 feature and must not be transferred backward.' },
    { question: 'Is the pressure adjustable?', answer: 'Yes. The OPV is accessible below the cup tray, but adjustment requires a suitable blind basket, gauge reading and careful small changes.' },
    { question: 'Is every color the same?', answer: 'Not necessarily. Whole Latte Love says the 2025 quieter lid and larger plastic tray exclude red, and older inventory or photographs may show the previous tray.' },
  ],
  bestFor: ['Espresso-first buyers who want PID temperature control and visible pressure without modifying a machine', 'One-person or two-person routines with occasional small milk drinks', 'Compact kitchens that can still provide top access to the reservoir'],
  avoidIf: ['You make several milk drinks back to back or require simultaneous brewing and steaming', 'You expect GO 2.0 pre-infusion, timed dosing, OLED controls or automatic post-steam cooling', 'You need a dedicated hot-water wand, plumb-in operation or an included grinder'],
  pros: ['PID temperature control and automatic shot timing support repeatable recipes', 'Front pressure gauge and accessible OPV make pump-pressure setup visible', '58 mm group and conventional service layout support a broad accessory and repair ecosystem', 'Compact 210 mm width leaves grinder room on a small counter'],
  cons: ['Single-boiler transitions interrupt milk-heavy service', 'No programmed pre-infusion, volumetric stop, dedicated hot-water outlet or app', 'GO 2.0 and 2025 running changes make generation and color verification necessary', 'Current US $1,199 pricing overlaps alternatives with different workflow strengths'],
  architecture: 'a reservoir-fed, vibration-pump, PID-controlled single-boiler machine with a compact heated ring group, 58 mm commercial-format portafilter, three-way solenoid, front brew-pressure gauge, automatic shot timer, articulated steam wand and externally reachable expansion-valve adjustment',
  identityBoundary: 'The Product schema, scores and $1,199 benchmark refer to the original-generation US GO still listed by Clive Coffee and Whole Latte Love. GO 2.0’s OLED display, programmable pre-infusion, timed dosing, cleaning program, last-shot recall, automatic post-steam cooling and revised controls are excluded. The red original GO also differs from other colors in the 2025 US running update.',
  primaryStrength: 'It combines the controls most espresso-focused buyers otherwise add later: PID temperature, shot time, pressure feedback and accessible OPV adjustment.',
  primaryLimit: 'One boiler cannot brew and steam together, and the new GO 2.0 makes an unlabeled generation comparison unreliable.',
  setupNote: 'Confirm the box, rating plate and retailer invoice identify the original US GO and 115 V service. Ask whether the selected color has the 2025 tray and reservoir-lid update, then inventory the portafilters, baskets, blind basket, brush and manual. Leave top room to remove the reservoir, rear room for the cord, front room for the portafilter and tray, and side room to articulate the steam wand. Use water inside the retailer or manufacturer specification, rinse as the manual directs, install the portafilter during heat-up and follow the displayed flush request before the first recipe. Do not copy GO 2.0 menu instructions.',
  espressoNote: 'The original GO combines a PID, 58 mm group, pressure gauge, shot timer and externally accessible OPV. That supports a disciplined recipe built around coffee dose, beverage mass, time, temperature and pressure ceiling. Coffee Kev reported strong original-GO espresso control and noted that the display offset affects how set temperature relates to group behavior. Those are attributed observations, not Coffeedant measurements. The gauge is pump-pressure feedback, not a measurement inside the coffee puck, and a pressure target cannot repair uneven distribution or an unsuitable grind.',
  milkNote: 'Pressing steam mode raises the same boiler used for brewing, so milk service is sequential. The articulated wand and two-hole tip can texture a small pitcher, but the routine includes purging water, waiting for steam temperature, steaming, wiping and purging the wand, then cooling the boiler through a flush before another espresso. Owner discussions split between satisfactory daily cappuccinos and frustration with power, wand angle or back-to-back pitchers. Skill, milk volume, steam setpoint and version details matter, so no universal steam time is claimed.',
  workflowNote: 'The original GO’s front controls are deliberately direct: power, brew, steam, a PID display and two setting keys. Fast Heat Up deliberately overshoots and requests a flush to warm the group and portafilter; this is a sequence, not proof that every component has stabilized at the first ready signal. The timer starts with pump activation, while a scale remains necessary for beverage mass. The top-fill reservoir, removable tray and compact width suit a small station, but overhead access and limited cup clearance belong in the fit check.',
  buildNote: 'The machine weighs about 12.9 kg and uses a steel cabinet around a brass boiler, ring group, copper and stainless plumbing, vibration pump and replaceable conventional components. The parts diagram is useful repair evidence but does not guarantee local stock or inexpensive labor. US retailer specifications conflict over 0.3 versus 0.4 L boiler volume, 2.8 versus 3.0 L tank and 900 versus 1200 W. The review retains the manufacturer’s 115 V/900 W record and labels the capacity conflict rather than inventing a merged specification.',
  featuresNote: 'The useful original-GO set is PID brew and steam temperature control, automatic shot timer, Fast Heat Up, pressure gauge, accessible OPV, ECO mode, cleaning reminder, 58 mm portafilter, three-way solenoid and manual steam. It does not provide programmable pre-infusion, time-dosed auto stop, OLED menus, last-shot recall, automatic boiler cooling, a dedicated hot-water wand or simultaneous milk service. Those missing functions define the GO 2.0 and higher-category comparisons.',
  valueNote: 'Clive Coffee displayed the original GO at $1,199 in black, red, blue and yellow with Add to Cart on September 24, 2026. Whole Latte Love also displayed $1,199 and three-year parts-and-labor coverage, with a note that black now ships with the updated tray and that non-red colors receive the 2025 update. The price buys factory controls and conventional service access, but it also approaches the cost of machines with automatic pre-infusion or faster milk workflows. Compare total grinder, water, scale, pitcher and care costs, not the machine alone.',
  ownerPattern: 'Longer-term owner threads repeatedly praise espresso control, compact weight, fast practical readiness and access to replaceable parts. Repeated cautions concern the single-boiler delay, steam technique, cup clearance, reservoir or tray rattle, display buttons and version-specific parts. These patterns help form an inspection and workflow checklist. They cannot establish a defect rate, prove service life or predict what another owner will taste.',
  ownerCaution: 'Retail reviews and forum threads are self-selected. They mix original production, 2025 running changes, colors, countries, grinders, water, recipes and user experience. A two-year report can reveal a concrete owner experience but not population reliability. Diagnoses are rarely technician-confirmed, and praise from a retailer page has a commercial context.',
  maintenanceNote: 'Purge and wipe the steam wand immediately after milk. Empty the drip tray before it reaches the internal relief outlet, rinse the reservoir, backflush with water routinely and use detergent only at the documented interval. Keep the group gasket, screen, baskets and portafilter clean. Use scale-safe water rather than routine acid descaling without exact guidance. Disconnect power before service, and use a qualified technician for electrical faults, leaks, failed heating, abnormal pump behavior or safety-valve problems.',
  dimensions: {
    espresso: { score: 8.9, claim: 'PID temperature, a shot timer, pressure feedback and an accessible OPV support a clear 58 mm espresso recipe.', consequence: 'No automatic pre-infusion or volumetric stop, and the gauge does not measure pressure inside the puck.', status: 'Exact original-GO documentation plus attributed independent use; no Coffeedant measurements', signals: ['PID sets brew temperature.', 'Display times pump-on duration.', 'Scale and suitable grinder remain essential.'] },
    milk: { score: 7.5, claim: 'Adjustable steam temperature and an articulated wand can handle one small milk drink with manual texture control.', consequence: 'The boiler must change modes and cool again, making repeated milk service slow and technique-sensitive.', status: 'Original-GO manual, retailer workflow and bounded owner evidence', signals: ['One boiler handles brew and steam.', 'Purge before and after texturing.', 'Cool through the documented refill and flush routine.'] },
    workflow: { score: 8.7, claim: 'Fast Heat Up, direct buttons, shot timing and visible pressure keep an espresso-first morning concise.', consequence: 'Flush prompts, top filling, a separate scale and brew-to-steam transitions remain part of the routine.', status: 'Exact US listing and manual evidence with independent context', signals: ['210 mm cabinet width.', 'Top reservoir needs clearance.', 'Timer does not stop the shot.'] },
    build: { score: 8.5, claim: 'A heavy steel cabinet, brass boiler and published parts diagram support conventional inspection and repair.', consequence: 'Parts documentation does not establish failure incidence, local stock, labor price or remaining life.', status: 'Manual, parts diagram and retailer construction records; no Coffeedant teardown', signals: ['About 12.9 kg.', 'Three-way solenoid and vibration pump.', '2025 tray and lid vary by color and stock.'] },
    features: { score: 8.2, claim: 'The original GO includes the espresso controls that matter most without requiring aftermarket modification.', consequence: 'GO 2.0 adds pre-infusion, dosing and automation that this scored generation lacks.', status: 'Generation-bounded original-GO record', signals: ['PID and shot timer.', 'Gauge and accessible OPV.', 'No dedicated hot-water outlet.'] },
    value: { score: 7.8, claim: '$1,199 buys a compact factory-controlled 58 mm platform with current US dealer support.', consequence: 'The same budget deserves comparison against automatic pre-infusion, dual-thermoblock and used dual-boiler options.', status: 'Dated current US specialist checks on September 24, 2026', signals: ['Clive displayed Add to Cart at $1,199.', 'Whole Latte Love displayed $1,199 and three-year coverage.', 'Generation and color must be confirmed.'] },
  },
  sources: [
    { label: 'Profitec GO product record', href: official, note: 'Manufacturer dimensions, weight, US 115 V/900 W record and official downloads. The live line has transitioned toward GO 2.0, so original-only claims are cross-checked against the manual and US listings.' },
    { label: 'Profitec current home and GO 2.0 boundary', href: officialHome, note: 'Manufacturer’s current promotion of GO 2.0, used to prevent successor features from being assigned to the original US GO.' },
    { label: 'Profitec authorized dealer locator', href: locator, note: 'Official statement that Profitec products are sold through its dealer network; useful for seller verification rather than performance.' },
    { label: 'Original Profitec GO user manual', href: manual, note: 'Specialist-hosted manufacturer manual for setup, PID menus, Fast Heat Up, ECO, cleaning, safety and original-generation operation.' },
    { label: 'Original Profitec GO parts diagram', href: parts, note: 'Nine-page exact-model exploded parts record for service planning; not evidence of stock, price or reliability.' },
    { label: 'Clive Coffee current original GO listing', href: clive, note: 'US $1,199 Add to Cart, current colors, 0.3 L boiler record, setup resources, returns and product media checked September 24, 2026.' },
    { label: 'Whole Latte Love current original GO listing', href: wholeLatteLove, note: 'US $1,199 display, three-year warranty, 2025 tray and lid update with red exception, and exact-model media checked September 24, 2026. Its 0.4 L and 1200 W cells conflict with other records.' },
    { label: 'Coffee Kev original Profitec GO review', href: independent, note: 'Hands-on review and workflow discussion published in 2026, including the 0.3 L boiler dispute, PID offset, steaming and original-generation limitations.' },
    { label: 'CoffeeGeek Profitec GO first look', href: firstLook, note: 'Independent February 19, 2025 inspection and category comparison; treated as one sample, not a reliability study.' },
    { label: 'Kaffeemacher purchased GO 2.0 test', href: goTwo, note: 'Independent June 2026 successor test used only to identify GO 2.0 changes and market timing; its measured results are not transferred to the original GO.' },
    { label: 'Two-year Profitec GO owner discussion', href: community, note: 'Self-selected reports about PID control, build, steam limits, buttons and repair access. Useful questions, not defect incidence.' },
    { label: 'Profitec GO fit and milk-workflow discussion', href: ownerFit, note: 'Self-selected owner experiences about cappuccinos, back-to-back use, wand technique and overheating caution. It cannot establish frequency or diagnosis.' },
    { label: 'Coffee Kev original Profitec GO video', href: video, note: 'Unique hands-on video published September 28, 2025, showing espresso preparation, original controls and milk workflow. Affiliate and coffee-sales interests are disclosed.' },
  ],
  comparisons: [
    { name: 'Profitec GO original', href: '/espresso-machine/profitec-go/', quickDecision: 'Choose direct PID, shot timing and pressure adjustment for an espresso-first routine.', priceClass: '$1,199 checked Sep 24', dimensions: '8.3 W × 14.3 D × 15.0 H in without portafilter', heating: 'PID brass single boiler', coffeeSetup: '58 mm group, gauge, timer and OPV', milkWorkflow: 'Sequential manual steam', bestFor: 'Compact controlled espresso' },
    { name: 'Lelit Victoria PL91T', href: '/espresso-machine/lelit-victoria-pl91t/', quickDecision: 'Compare programmable pre-infusion and LELIT58 controls in another compact single boiler.', priceClass: 'Similar premium single-boiler class', dimensions: 'Compact stainless single boiler', heating: 'PID brass single boiler', coffeeSetup: '58 mm group with LCC controls', milkWorkflow: 'Sequential manual steam', bestFor: 'Pre-infusion and menu control' },
    { name: 'Rancilio Silvia', href: '/espresso-machine/rancilio-silvia/', quickDecision: 'Choose the long service history and simpler thermostat design when factory PID control is not essential.', priceClass: 'Lower base machine price', dimensions: 'Compact traditional single boiler', heating: 'Thermostat single boiler', coffeeSetup: '58 mm group, no factory PID', milkWorkflow: 'Sequential manual steam', bestFor: 'Established service ecosystem' },
    { name: 'Gaggia Classic Evo Pro', href: '/espresso-machine/gaggia-classic-evo-pro/', quickDecision: 'Spend less for a compact 58 mm platform if you accept fewer factory controls and exact-generation checks.', priceClass: 'Lower entry traditional class', dimensions: 'Compact box-style body', heating: 'Thermostat single boiler', coffeeSetup: '58 mm group, no factory PID', milkWorkflow: 'Sequential manual steam', bestFor: 'Budget and modification paths' },
  ],
  comparisonNote: 'Compare exact generation, voltage, color, running changes, warranty and stock. The original GO and GO 2.0 share a name but not a control set, while US retailer specification cells conflict on boiler size, tank size and wattage.',
  recommendations: [
    { kicker: 'Programmable pre-infusion', title: 'Lelit Victoria', text: 'Compare another compact PID single boiler when automatic pre-infusion and menu controls matter.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Lelit Victoria review', featured: true },
    { kicker: 'Long service history', title: 'Rancilio Silvia', text: 'Choose a simpler established platform when factory PID and pressure feedback are optional.', href: '/espresso-machine/rancilio-silvia/', linkLabel: 'Read Rancilio Silvia review' },
    { kicker: 'Lower-cost 58 mm route', title: 'Gaggia Classic Evo Pro', text: 'Spend less if you accept fewer factory controls and a more version-sensitive buying process.', href: '/espresso-machine/gaggia-classic-evo-pro/', linkLabel: 'Read Gaggia Classic Evo Pro review' },
    { kicker: 'Category checklist', title: 'Best single-boiler machines', text: 'Compare warm-up, temperature control, steam transitions, service access and grinder budget.', href: '/espresso-machine/single-boiler/', linkLabel: 'Read single-boiler guide' },
  ],
  faqs: [
    { question: 'Is this review about Profitec GO 2.0?', answer: 'No. It scores the original GO still sold by current US specialists. GO 2.0 arrived in Europe in June 2026 and adds a different display and automation.' },
    { question: 'How fast does the original Profitec GO heat up?', answer: 'Fast Heat Up deliberately overshoots and requests a cooling flush. US retailers describe roughly six to nine minutes for that ready sequence, but Clive also lists 15 minutes as warm-up. Treat the prompt as a workflow aid, not a Coffeedant measurement of full thermal equilibrium.' },
    { question: 'Does Profitec GO have pre-infusion?', answer: 'The original generation has no programmable automatic pre-infusion. GO 2.0 adds programmable pre-infusion, so confirm the generation before relying on that feature.' },
    { question: 'Can Profitec GO steam milk well?', answer: 'It can manually texture one small pitcher after changing to steam mode. Results depend on purge, steam temperature, milk volume and technique, and repeated drinks remain slower than on a dual boiler.' },
    { question: 'Can Profitec GO brew and steam simultaneously?', answer: 'No. Its single boiler changes between brew and steam temperature, then needs a cooling and refill routine before espresso resumes.' },
    { question: 'Does Profitec GO include a grinder?', answer: 'No. Budget for an espresso-capable burr grinder, scale, suitable water, milk pitcher if needed and cleaning supplies.' },
    { question: 'Is the 2025 updated drip tray on every Profitec GO?', answer: 'Whole Latte Love says the update applies to non-red colors and specifically excludes red in its checked listing. Older inventory and photos may also show the previous design, so ask the seller.' },
    { question: 'What should I verify before buying?', answer: 'Confirm original GO versus GO 2.0, 115 V rating plate, color-specific updates, included portafilters and baskets, warranty, return terms, seller authorization and current stock.' },
  ],
  finalTitle: 'Buy the original GO for its control set, not because the GO 2.0 name is nearby',
  finalVerdict: [
    'The original Profitec GO remains a coherent espresso-first machine. PID temperature, shot timing, pressure feedback and accessible OPV adjustment arrive in a compact 58 mm platform without requiring modifications.',
    'The single boiler is the real limit: milk service is sequential, cooling back matters and several drinks expose the wait. Versioning now adds another task because 2025 color updates and the 2026 GO 2.0 do not apply uniformly to US stock.',
    'Choose it when the exact original US unit, warranty and $1,199 package are verified and most drinks are espresso. Choose Victoria for programmed pre-infusion, Silvia for a simpler established platform, or Gaggia for a lower entry price.',
  ],
  video: { id: 'FKiJLR0jjjA', title: 'Profitec Go Review 2025 + Pro Barista Coffee Making Demo', creator: 'Coffee Kev', published: '2025-09-28', note: 'Independent hands-on video of the original Profitec GO, including espresso preparation, PID workflow and milk steaming. Coffee Kev uses affiliate links and sells coffee, so commercial interests are explicit; the video does not establish reliability or another unit’s performance.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#profitec-go-original-us-source-4">[source]</a> <a href="#profitec-go-original-us-source-7">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#profitec-go-original-us-source-4">[source]</a> <a href="#profitec-go-original-us-source-8">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#profitec-go-original-us-source-8">[source]</a> <a href="#profitec-go-original-us-source-12">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#profitec-go-original-us-source-4">[source]</a> <a href="#profitec-go-original-us-source-6">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#profitec-go-original-us-source-5">[source]</a> <a href="#profitec-go-original-us-source-7">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#profitec-go-original-us-source-4">[source]</a> <a href="#profitec-go-original-us-source-10">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#profitec-go-original-us-source-6">[source]</a> <a href="#profitec-go-original-us-source-7">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="profitec-go-owner-title"><h3 id="profitec-go-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Espresso control is the recurring reason to keep it</strong><p>Owners repeatedly value the PID, timer, pressure gauge and compact heavy chassis. That supports a feature-fit decision, not a promise about taste or learning time.</p></li>
    <li><strong>Steam satisfaction changes with the routine</strong><p>Some owners make daily cappuccinos comfortably; others dislike wand angle, power or back-to-back recovery. Milk volume, purge, setpoint, technique and exact version all matter.</p></li>
    <li><strong>Rattle, buttons and heat reports belong on an inspection list</strong><p>Reports about reservoir noise, tray fit, display buttons or overheating show what to check and when to stop. They do not establish incidence, remaining life or a technician-confirmed cause.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeProfitecGoReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
