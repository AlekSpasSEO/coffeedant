import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.lelit.com/product/marax-pl62x/';
const usOfficial = 'https://www.lelit.com/en-us/product/marax-pesmx02';
const technicalSheet = 'https://www.lelit.com/wp-content/uploads/2024/09/EN-MaraX.pdf?x47602=';
const manual = 'https://www.seattlecoffeegear.com/cdn/shop/files/lelit-mara-x-user-manual.pdf?v=1731386808111294464';
const extendedGuide = 'https://www.seattlecoffeegear.com/cdn/shop/files/MaraX_ExtendedGuidePL62.pdf';
const kanen = 'https://kanencoffee.com/products/lelit-mara-x-heat-exchanger-espresso-machine';
const seattle = 'https://www.seattlecoffeegear.com/products/lelit-mara-x-espresso-machine';
const kaffeeMacher = 'https://kaffeemacher.de/en/blogs/kaffeewissen/lelit-mara-x';
const chronicler = 'https://coffeechronicler.com/lelit-mara-x-review/';
const film = 'https://www.youtube.com/watch?v=X8QFNTOY7uU';
const parts = 'https://www.1st-line.com/technical-support/lelit-technical-support-page/parts-diagram-lelit-pl62x-mara/';
const ownerBuying = 'https://www.reddit.com/r/espresso/comments/1ci1sv9/buying_a_lelit_mara_x_v2_any_advice/';
const ownerLongTerm = 'https://www.reddit.com/r/espresso/comments/1ipfrar/lelit_mara_x_v2_long_term_review/';
const generationDiscussion = 'https://coffeetime.freeflarum.com/d/417-lelit-mara-x-v1-and-v2-the-differences';
const hero = 'https://assets.breville.com/cdn-cgi/image/width%3D1300%2Cformat%3Dauto/Lelit/PESMX02/PESMX02BSS1BXX1.png?pdp=';

const profile: UpgradeReviewProfile = {
  key: 'lelit-mara-x', slug: '/espresso-machine/lelit-mara-x/', productId: 'CD-EM-000203',
  brand: 'Lelit', model: 'MaraX PL62X', sku: 'PL62X family; US PESMX02; region-specific voltage, plug, finish and article codes', category: 'Temperature-managed heat-exchanger manual espresso machine', brandPath: '/lelit/',
  title: 'Lelit Mara X PL62X review: clever HX, strict rhythm',
  description: 'Exact current PL62X review: Xmode Coffee and Steam, 1.8 L stainless heat exchanger, independent temperature evidence, owner context and $1,699.95 US price.',
  verdictLabel: 'A compact heat exchanger whose brew-priority logic helps only when the owner follows its timing rules',
  verdict: 'MaraX PL62X fits a 58 mm L58E group, 1.8 L stainless heat exchanger, double-probe control, quiet pump and two modes into a 22.5 cm-wide body. Xmode Coffee can reduce overheating by pausing heat during extraction; Xmode Steam prioritizes steam. Independent testing shows that results still depend on a short post-shot flush, roughly two minutes between extractions and deliberate recovery. It is a thoughtful compact HX, not a machine that removes thermal judgment.',
  assessment: 'This is a research-led assessment, not a Coffeedant bench test. Current manufacturer records control identity and specifications. Kaffeemacher and Coffee Chronicler provide independent but conflicting temperature evidence, and owner discussions add bounded context. Coffeedant did not measure temperature, pressure, flow, steam, sound, energy, recovery or reliability.',
  image: hero, imageAlt: 'Lelit official front image of the current stainless MaraX PESMX02 with L58E group, dual manometer, lever and cool-touch wands',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Current official US price', msrp: '$1,699.95', typical: 'Lelit US, Kanen Coffee and Seattle Coffee Gear each displayed $1,699.95 on September 24, 2026. Lelit US showed the stainless PESMX02 available to add to cart; dealer color stock and regional terms differed.', currency: 'USD', numeric: '1699.95', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact current Lelit specification', href: official, note: 'Current PL62X identity, operating modes, dimensions, regional articles and delivered equipment', primary: true },
    { label: 'Watch the independent exact-generation review', href: film, note: 'Lance Hedrick Mara X V2 review published April 1, 2023' },
  ],
  facts: [
    { label: 'Exact model', value: 'Current MaraX PL62X family, including US PESMX02; later V2 control logic, not the separate flow-control MaraX3 PL62X3' },
    { label: 'Heating architecture', value: '1.8 L AISI 316L stainless heat exchanger with double-probe HX and steam-boiler monitoring plus thermosyphon circulation' },
    { label: 'Group and pump', value: '58 mm L58E lever group, mechanical pre-infusion and a manufacturer-described silent vibration pump' },
    { label: 'Operating modes', value: 'Xmode Coffee prioritizes brew stability; Xmode Steam prioritizes steam and activates a post-extraction steam boost' },
    { label: 'Temperature choices', value: 'Warm, Hot and Extra Hot selector; the extended guide maps them to nominal 90°C, 92°C and 94°C suggestions' },
    { label: 'Water and feedback', value: '2.5 L current official tank record, reserve mode, standby, dual pressure gauge and cool-touch steam and hot-water wands' },
    { label: 'Size and mass', value: '22.5 × 52 × 35.5 cm as width × depth × height and 18.5 kg; the E61 group projects beyond the cabinet' },
  ],
  quickAnswers: [
    { question: 'Is MaraX a dual boiler?', answer: 'No. It is a heat-exchanger machine with a 1.8 L stainless HX boiler and two probes used to manage brew and steam priorities. It can brew and steam together, but the circuits are not independently heated like a dual boiler.' },
    { question: 'Is this the MaraX3?', answer: 'No. This review covers current PL62X and US PESMX02 with the later V2-style logic. MaraX3 PL62X3 adds Lelit’s Pagaia flow-control system and must be evaluated separately.' },
    { question: 'Does it need a cooling flush?', answer: 'Independent Kaffeemacher testing found a brief flush after each extraction and roughly two minutes between shots produced the most repeatable temperature behavior. That differs from the classic long pre-shot HX flush.' },
    { question: 'How long does it warm up?', answer: 'Lelit says the machine reaches readiness within about 24 minutes. That is a manufacturer time, not a Coffeedant measurement, and cups plus the locked filterholder still benefit from deliberate preheating.' },
    { question: 'What do the three temperature settings mean?', answer: 'Lelit suggests about 90°C, 92°C and 94°C. Independent results varied with timing and flush routine, so treat them as repeatable ranges rather than guaranteed beverage temperatures.' },
    { question: 'Can it make several milk drinks?', answer: 'Xmode Steam and the post-shot steam boost support a strong milk workflow. The operator still controls pitcher size, purge, texture and recovery, and Xmode Steam gives up some brew-temperature stability.' },
  ],
  bestFor: ['Compact kitchens that still need manual espresso and steam available at the same time', 'Owners willing to learn one repeatable post-shot flush and recovery rhythm', 'Milk-drink households that value E61 ritual, strong steam and current manufacturer support'],
  avoidIf: ['You want independent brew and steam temperature control from two boilers', 'You expect the machine to make temperature management automatic regardless of shot spacing', 'You need a shallow machine, instant warm-up or a one-button drink workflow'],
  pros: ['Unusually narrow 22.5 cm cabinet for a full-size L58E heat exchanger', 'Xmode Coffee directly addresses common overheating behavior', 'Xmode Steam and steam boost suit milk-heavy use', 'Quiet pump, dual gauge, cool-touch wands and spring-closure taps', 'Current official documentation, retail availability and parts diagrams'],
  cons: ['Independent evidence shows timing and flush technique still change brew temperature', '52 cm official depth and projecting group demand meaningful counter space', 'No independent control or display of exact brew and steam temperatures', 'One long-term reviewer reported severe temperature problems on his unit', 'Manufacturer records disagree between 2.5 L and 2.6 L tank capacity'],
  architecture: 'a tank-fed Italian manual machine with a 1.8 L AISI 316L stainless heat exchanger, L58E lever group, mechanical pre-infusion, thermosyphon circulation, two temperature probes, vibration pump, dual manometer, 2.5 L current official tank record, reserve mode and separate cool-touch steam and hot-water wands',
  identityBoundary: 'This page covers current PL62X and US PESMX02 with the later control strategy commonly called V2. Early red-logo V1 machines have different logic. The newer MaraX3 PL62X3 adds Pagaia flow control and is a separate product. Retailers use “V3” inconsistently for PL62X, so the rating plate, article code, region, voltage, finish and manual govern identity.',
  primaryStrength: 'Xmode Coffee applies a considered control strategy to a compact E61 heat exchanger without giving up simultaneous manual steam.',
  primaryLimit: 'Temperature repeatability still depends on post-shot flushing, shot spacing, selected mode and recovery time.',
  setupNote: 'Confirm PL62X or the regional equivalent, compatible voltage and plug, current manual, finish, serial number, package and warranty. Leave space for the 52 cm body depth, projecting group, tank access and full lever movement. Fill and rinse as the manual directs, install a suitable water treatment cartridge and allow the documented warm-up before judging the first shot.',
  espressoNote: 'Xmode Coffee turns the heater off during extraction to reduce overheating, but it does not create a displayed PID setpoint. Kaffeemacher obtained coherent basket temperatures with a brief after-shot flush and about two minutes between extractions. A second independent review reported much hotter results on one unit. Hold mode, range, flush, spacing, dose and yield steady while evaluating taste, and seek service when behavior remains abnormal.',
  milkNote: 'Xmode Steam prioritizes steam readiness and activates a boost after the brew lever cycle. Lelit says the boost can hold more than 1.2 bar for up to 120 seconds. That is a manufacturer specification, not a Coffeedant test. Purge condensation, texture one consistent pitcher, wipe and purge immediately, then allow the machine to return to the planned coffee state.',
  workflowNote: 'The temperature selector and two modes describe different thermal priorities. Xmode Coffee suits espresso-focused use; Xmode Steam supports milk queues. Kaffeemacher advises a brief after-shot flush, about two minutes before another extraction and at least 15 minutes of stabilization after a long session.',
  buildNote: 'Lelit specifies a stainless body, 18.5 kg mass, stainless 1.8 L heat exchanger, spring-closure taps, cool-touch wands and L58E group. Exact exploded diagrams support component identification but do not prove local stock. The long body, hot group and pressurized boiler require clearance, careful handling and qualified internal service.',
  featuresNote: 'Useful equipment includes Xmode Coffee and Steam, three brew-temperature ranges, steam boost, standby, reserve mode, mechanical pre-infusion, dual manometer, silent pump, cool-touch wands and IMS baskets. No brew-temperature display, shot timer, volumetric stop, direct plumbing, grinder, automatic milk or app is documented for PL62X.',
  valueNote: 'At $1,699.95, MaraX competes with compact heat exchangers and dual boilers. Its case rests on narrow width, E61 feel, simultaneous steam and defined HX temperature management. Buyers wanting numerical temperatures, independent boilers or faster response may get more useful control elsewhere.',
  ownerPattern: 'Owners repeatedly praise compact width, quiet operation, steam capacity and the supplied accessories. They also describe learning the heat cycle, leaving suitable time between drinks and watching for behavior that differs from the manual. Individual probe, fault and overheating reports are inspection prompts, not reliability rates.',
  ownerCaution: 'Self-selected discussions span V1, later PL62X, different voltages, water, grinders, maintenance histories and usage patterns. They cannot establish a failure rate, universal warm-up, temperature accuracy or the condition of a specific machine.',
  maintenanceNote: 'The exact manual calls for routine group, tray and wand cleaning, weekly detergent backflushing and specialist annual descaling. The extended guide recommends replacing its resin filter after 35 L and within four months and keeping chloride below 30 ppm. Water treatment must still match local water, taste and current regional service advice.',
  dimensions: {
    espresso: { score: 8.3, claim: 'Xmode Coffee, mechanical pre-infusion and an L58E group can deliver stable manual espresso when the documented rhythm is respected.', consequence: 'Shot spacing, post-shot flushes and long-session recovery remain part of dialing in.', status: 'Current official architecture plus two independent but conflicting temperature evaluations', signals: ['Kaffeemacher measured coherent ranges around 90-95°C with its recommended routine.', 'Coffee Chronicler reported 98-100°C on medium on his privately owned unit.', 'No Coffeedant basket-temperature or extraction-yield measurement.'] },
    milk: { score: 8.7, claim: 'Xmode Steam and a timed steam boost give the compact machine credible milk-drink capacity.', consequence: 'Brew stability is less favored in Steam mode, and the operator still manages purge, texture and recovery.', status: 'Manufacturer mode documentation plus independent hands-on context', signals: ['1.8 L HX permits brewing and steaming together.', 'Manufacturer states boost can exceed 1.2 bar for up to 120 seconds.', 'No Coffeedant milk-heating or back-to-back recovery test.'] },
    workflow: { score: 7.5, claim: 'Two modes and three temperature ranges reduce classic HX guesswork without eliminating it.', consequence: 'The wrong mode, flush timing or shot interval can move the brew result substantially.', status: 'Exact guides and Kaffeemacher sequence testing', signals: ['About 24 minutes manufacturer warm-up.', 'Brief after-shot flush and about two-minute spacing in independent tests.', 'At least 15 minutes stabilization advised after a long session.'] },
    build: { score: 8.4, claim: 'Stainless construction, L58E group and conventional service diagrams form a substantial compact package.', consequence: 'E61 heat, 52 cm depth and pressurized internals demand space and qualified service.', status: 'Current manufacturer records and exact parts documentation', signals: ['18.5 kg stainless cabinet.', '1.8 L AISI 316L stainless heat exchanger.', 'No representative service-life or local parts-stock dataset.'] },
    features: { score: 8.2, claim: 'The modes, temperature selector, steam boost and pressure feedback target the most useful HX tasks.', consequence: 'There is no numerical temperature display, shot timer or independent boiler control.', status: 'Current PL62X product page, technical sheet and extended guide', signals: ['Xmode Coffee and Xmode Steam.', 'Three nominal brew-temperature ranges.', 'Dual gauge, standby and reserve mode.'] },
    value: { score: 7.8, claim: 'The current price buys a narrow, well-equipped and actively supported E61 heat exchanger.', consequence: 'Compact dual boilers and newer HX rivals may provide more explicit control for similar money.', status: 'Official US and two dealer prices checked September 24, 2026', signals: ['$1,699.95 official US price.', 'Same displayed price at Kanen and Seattle Coffee Gear.', 'Grinder, water treatment and care remain additional costs.'] },
  },
  sources: [
    { label: 'Lelit MaraX PL62X official product page', href: official, note: 'Current global identity, regional codes, architecture, dimensions, tank and package.' },
    { label: 'Lelit US MaraX PESMX02 product page', href: usOfficial, note: 'Current US identity, media, $1,699.95 price, availability and readiness claim checked September 24, 2026.' },
    { label: 'Lelit MaraX current technical sheet', href: technicalSheet, note: 'Official L58E, double-probe HX, 1.8 L exchanger, tank, dimensions and electrical codes.' },
    { label: 'Lelit PL62X user manual', href: manual, note: 'Exact-model startup, operation and care; it says 2.6 L where current records say 2.5 L.' },
    { label: 'Lelit MaraX extended guide', href: extendedGuide, note: 'Official generation, mode, temperature, boost, water and maintenance guidance.' },
    { label: 'Kanen Coffee exact PL62X listing', href: kanen, note: '$1,699.95 US listing checked September 24, 2026; stainless displayed in stock and colored finishes as special order.' },
    { label: 'Seattle Coffee Gear Mara X listing', href: seattle, note: 'Exact current US listing at $1,699.95 with finish-level availability and access to manufacturer manuals.' },
    { label: 'Kaffeemacher independent Mara X test', href: kaffeeMacher, note: 'Independently purchased test machines; temperature series, flush, spacing and generation boundary.' },
    { label: 'Coffee Chronicler one-year Mara X V2 review', href: chronicler, note: 'Privately purchased unit reviewed April 22, 2025; its severe temperature result conflicts with other testing.' },
    { label: 'Lance Hedrick Mara X V2 video', href: film, note: 'Independent exact-generation review published April 1, 2023.' },
    { label: '1st-line exact PL62X parts diagrams', href: parts, note: 'Exploded component records for identification. Diagram presence does not guarantee local stock or authorize electrical and boiler repair.' },
    { label: 'Reddit Mara X V2 buying discussion', href: ownerBuying, note: 'Owner context on size, sound, accessories and one early probe repair; not reliability evidence.' },
    { label: 'Reddit Mara X V2 long-term review', href: ownerLongTerm, note: 'Self-selected context on heat-cycle learning, several drinks and extended-on behavior.' },
    { label: 'Coffee Time V1 and V2 differences discussion', href: generationDiscussion, note: 'Historical community documentation of the logic change. Current official PL62X records and exact rating plates control the reviewed identity.' },
  ],
  comparisons: [
    { name: 'Profitec Pro 400', href: '/espresso-machine/profitec-pro-400/', quickDecision: 'Compare its compact HX modes and dealer network when a more conventional thermal strategy is acceptable.', priceClass: 'Current premium compact HX', dimensions: 'Compact E61 body', heating: 'Mode-managed heat exchanger', coffeeSetup: '58 mm manual E61', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Traditional compact HX ownership' },
    { name: 'Rocket Appartamento TCA', href: '/espresso-machine/rocket-appartamento-tca/', quickDecision: 'Choose Rocket styling and tactile feel when MaraX brew-priority logic matters less.', priceClass: 'Higher premium compact HX', dimensions: 'Compact E61 body', heating: 'Heat exchanger with temperature adjustment', coffeeSetup: '58 mm manual E61', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Design-led traditional HX use' },
    { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', quickDecision: 'Choose independent brew and steam boilers, numerical control and faster temperature changes over E61 ritual.', priceClass: 'Compact dual-boiler class', dimensions: 'Boxier and shallower body', heating: 'PID dual boiler', coffeeSetup: '58 mm saturated-style group', milkWorkflow: 'Independent boiler steam', bestFor: 'Explicit temperature control' },
    { name: 'Lelit MaraX PL62X', quickDecision: 'Choose narrow E61 heat-exchanger workflow when simultaneous steam and a learned thermal rhythm fit the household.', priceClass: '$1,699.95 US Sep 24', dimensions: '22.5 × 52 × 35.5 cm; 18.5 kg', heating: '1.8 L temperature-managed HX', coffeeSetup: '58 mm L58E manual lever', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Compact brew-priority HX use' },
  ],
  comparisonNote: 'Compare exact regional model, boiler architecture, warm-up, shot spacing, temperature feedback, depth, grinder, water treatment, warranty and service. A dual boiler and a heat exchanger can both brew and steam together but manage temperature differently.',
  recommendations: [
    { kicker: 'Alternative compact HX', title: 'Profitec Pro 400', text: 'Compare operating modes, steam behavior, controls, support and delivered price.', href: '/espresso-machine/profitec-pro-400/', linkLabel: 'Read Pro 400 review', featured: true },
    { kicker: 'Design-led E61', title: 'Rocket Appartamento TCA', text: 'Choose Rocket design and dealer experience when brew-priority logic is secondary.', href: '/espresso-machine/rocket-appartamento-tca/', linkLabel: 'Read Appartamento TCA review' },
    { kicker: 'Compact dual boiler', title: 'Rancilio Silvia Pro X', text: 'Choose independent boiler temperatures and numerical control over E61 styling.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read Silvia Pro X review' },
    { kicker: 'Higher Lelit control', title: 'Lelit Bianca', text: 'Move to dual boilers and manual flow control when budget and counter space allow.', href: '/espresso-machine/lelit-bianca-pl162t/', linkLabel: 'Read Bianca review' },
  ],
  faqs: [
    { question: 'What exact Lelit Mara X does this review cover?', answer: 'Current PL62X and US PESMX02 with the later V2-style operating logic. It does not cover early red-logo V1 behavior or the separate MaraX3 PL62X3 with Pagaia flow control.' },
    { question: 'Is the Lelit Mara X a dual boiler?', answer: 'No. It is a 1.8 L stainless heat-exchanger machine with separate brew and steam paths inside one heated architecture and two probes used to manage priorities.' },
    { question: 'Which Mara X mode should be used?', answer: 'Xmode Coffee prioritizes brew stability and suits espresso-focused use. Xmode Steam prioritizes steam and adds a post-shot boost for milk-heavy sessions. Neither mode removes the need for a consistent timing routine.' },
    { question: 'Should Mara X be flushed before or after a shot?', answer: 'Lelit’s guide says a short pre-shot purge is optional. Kaffeemacher’s independent series found a brief flush after extraction, followed by about two minutes before the next shot, gave its most repeatable result.' },
    { question: 'How accurate are the three temperature settings?', answer: 'Lelit suggests nominal 90°C, 92°C and 94°C ranges. Independent results changed with mode, shot spacing and flush sequence, and one privately owned unit ran much hotter. They are selection ranges, not guaranteed beverage temperatures.' },
    { question: 'Is the water tank 2.5 or 2.6 litres?', answer: 'Current official product records and the technical sheet say 2.5 L, while one manufacturer-branded manual says 2.6 L. Check the current manual and tank supplied with the exact regional machine.' },
    { question: 'Is Mara X worth $1,699.95?', answer: 'It can be when narrow width, E61 feel, simultaneous steam and the brew-priority mode match the buyer. Compare a complete station with the Profitec Pro 400, Rocket Appartamento TCA and compact dual boilers before deciding.' },
  ],
  finalTitle: 'A genuinely smarter heat exchanger, but not an automatic one',
  finalVerdict: [
    'MaraX PL62X is a coherent answer to the compact heat-exchanger problem. It combines a narrow stainless cabinet, L58E group, quiet pump, strong steam equipment and two useful thermal priorities. Xmode Coffee is more than a label: it changes heater behavior during extraction to reduce overheating.',
    'Independent work also defines the limit. Flush sequence, shot spacing and recovery still matter, while one long-term reviewer’s unit behaved far hotter than another tester’s machines. Buy MaraX when learning a repeatable rhythm is acceptable. Choose a compact dual boiler when independent numerical temperatures and less HX interpretation matter more than E61 feel.',
  ],
  video: { id: 'X8QFNTOY7uU', title: 'BEST BUDGET HEAT EXCHANGER?: Lelit Mara X Review', creator: 'Lance Hedrick', published: '2023-04-01', note: 'Independent review of the later Mara X generation. The video predates the current September 2026 catalog and price check, so manufacturer records govern identity, specifications and regional availability.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#lelit-mara-x-source-1">[source]</a> <a href="#lelit-mara-x-source-4">[source]</a></p>
    <p>Current official records say 2.5 L while the manual says 2.6 L. Match filtration intervals to the regional guide and local water.</p>`,
  espresso: `<p>${profile.espressoNote} <a href="#lelit-mara-x-source-5">[source]</a> <a href="#lelit-mara-x-source-8">[source]</a> <a href="#lelit-mara-x-source-9">[source]</a></p>
    <p>The independent measurements disagree. Persistent abnormal behavior warrants a technique check and qualified diagnosis, not a universal offset.</p>`,
  workflow: `<p>${profile.workflowNote} <a href="#lelit-mara-x-source-5">[source]</a> <a href="#lelit-mara-x-source-8">[source]</a></p>
    <p>Judge the complete order from cold start through group rinse, grinding, extraction, milk, recovery and cleanup. The machine rewards consistency more than constant switching between modes.</p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="mara-x-owner-title"><h3 id="mara-x-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Compact and quiet are recurring reasons to buy</strong><p>Owners repeatedly value the narrow body, restrained pump sound and useful supplied accessories.</p></li>
    <li><strong>The heating cycle has to be learned</strong><p>Long-term users discuss shot spacing, recovery and behavior after the machine remains on for an extended session.</p></li>
    <li><strong>Individual faults remain individual</strong><p>One early probe replacement and separate overheating reports justify inspection and service, not a model-wide failure rate.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLelitMaraXReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
