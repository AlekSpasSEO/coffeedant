import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://nuovasimonelli.com/machine/oscar/';
const officialDocs = 'https://www.simonelliusa.com/all-equipment-documents-archive';
const manual = 'https://www.simonelliusa.com/PDFs/Oscar%20II/OscarII-Manual-All.pdf';
const brochure = 'https://www.simonelliusa.com/PDFs/Oscar%20II/OscarII-Brochure-All.pdf';
const specSheet = 'https://www.simonelliusa.com/PDFs/Oscar%20II/OscarII-SpecSheet-All.pdf';
const electrical = 'https://www.simonelliusa.com/PDFs/Oscar%20II/OscarII-Electrical-All.pdf';
const programming = 'https://www.simonelliusa.com/PDFs/Oscar%20II/OscarII-Programming-Guide.pdf';
const partsBook = 'https://www.simonelliusa.com/PDFs/Oscar%20II/OscarII-PartsBook-All.pdf';
const currentSeller = 'https://www.webstaurantstore.com/nuova-simonelli-oscar-ii-black-professional-espresso-machine-pourover-110v/238OSC2POBL.html';
const secondSeller = 'https://procoffeegear.com/products/nuova-simonelli-oscar-ii-1-group';
const independent = 'https://prima-coffee.com/blog/video-overview-nuova-simonelli-oscar-ii-espresso-machine/';
const secondIndependent = 'https://www.coffeeness.de/en/nuova-simonelli-oscar-ii-review/';
const crewReview = 'https://www.seattlecoffeegear.com/blogs/scg-blog/crew-review-nuova-simonelli-oscar-ii';
const video = 'https://www.youtube.com/watch?v=tr0hp_m4W7s';
const owner = 'https://www.reddit.com/r/Coffee/comments/j5g2aj/any_thoughts_on_the_nuova_simonelli_oscar_2/';
const image = 'https://nuovasimonelli.com/wp-content/uploads/sites/2/2025/05/Gruppo-di-maschere-244%402x.webp';

const profile: UpgradeReviewProfile = {
  key: 'nuova-simonelli-oscar-ii-black-reservoir-us-110v',
  slug: '/espresso-machine/nuova-simonelli-oscar-ii/',
  productId: 'CD-EM-000216',
  brand: 'Nuova Simonelli',
  model: 'Oscar II Black Pour-Over',
  sku: 'Oscar II black reservoir/pour-over version, US 110-125 V / NEMA 5-15 configuration',
  category: 'Heat-exchanger espresso machine',
  brandPath: '/brands/',
  title: 'Nuova Simonelli Oscar II review: compact HX steam power',
  description: 'Exact US Oscar II black reservoir review with dated $1,995 pricing, 2 L heat exchanger, timed doses, strong manual steam and variant limits.',
  verdictLabel: 'A focused 2 L heat-exchanger machine for milk volume, with timed shots instead of modern temperature control',
  verdict: 'Shortlist the current black US Oscar II reservoir model when a compact 12-inch-wide body, 58 mm manual espresso, timed shot buttons and forceful steam solve a milk-heavy routine. WebstaurantStore displayed the exact black pour-over 110 V machine at $1,995 on September 24, 2026. The trade is old-school control: there is no user-facing brew PID, pressure gauge, hot-water outlet, shot-weight feedback or plumbed drain. It is compelling for practiced cappuccino service, less convincing for buyers who want direct brew-temperature feedback or a gentle beginner steam curve.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Current Nuova Simonelli and Nuova Distribution USA documentation, two current sellers, three exact-model evaluations, an independent video and owner discussion define the evidence. Coffeedant did not reproduce temperature, taste, pressure, warm-up, steam-rate or throughput claims. The score is limited to the US black reservoir/pour-over Oscar II at 110-125 V; the direct-connect Oscar II, 220-240 V regional machines, color variants and Oscar Mood remain separate configurations.',
  image,
  imageAlt: 'Nuova Simonelli official three-quarter view of the current black Oscar II espresso machine',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked exact-version price',
    msrp: '$1,995 at WebstaurantStore',
    typical: 'WebstaurantStore displayed $1,995 for item 238OSC2POBL, the black pour-over 110 V version, on September 24, 2026. Pro Coffee Gear also displayed Oscar II from $1,995 with color, water-source and warranty choices, so confirm the selected configuration before comparing totals.',
    currency: 'USD', numeric: '1995', checked: 'September 24, 2026',
  },
  links: [
    { label: 'Check the exact black pour-over listing', href: currentSeller, note: 'Current US exact-version listing; $1,995 when checked September 24, 2026', primary: true },
    { label: 'Check the official Oscar record', href: official, note: 'Current manufacturer family record; confirm Oscar II rather than Oscar Mood and choose reservoir or direct-connect deliberately' },
  ],
  facts: [
    { label: 'Exact reviewed machine', value: 'Black Oscar II reservoir/pour-over, US 110-125 V, 1,200 W, 10 A and NEMA 5-15 configuration' },
    { label: 'Excluded variants', value: 'Direct-connect Oscar II, red or blue regional machines, 220-240 V versions and Oscar Mood are not included in this exact score' },
    { label: 'Brew system', value: 'Single 2 L copper heat-exchanger boiler, thermocompensated group and manufacturer-listed pre-infusion' },
    { label: 'Coffee controls', value: 'Two time-programmable doses plus manual stop; this is timed delivery rather than a flowmeter-based volumetric system' },
    { label: 'Milk workflow', value: 'Four-hole articulated steam wand with push-pull lever; brewing and steaming can overlap' },
    { label: 'Water and tray', value: '3 L removable reservoir and approximately 1 L drip tray; no hot-water outlet or plumbed drain' },
    { label: 'Footprint and power', value: '300 × 400 × 408 mm W×H×D, 13 kg dry and 1,200 W; US listing rounds to 12 × 16 × 16 inches' },
  ],
  quickAnswers: [
    { question: 'Is this the direct-connect Oscar II?', answer: 'No. The score covers the black reservoir/pour-over US version shown by the exact seller listing.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. The 2 L heat exchanger supports simultaneous espresso and steam work.' },
    { question: 'Does it have brew-temperature PID control?', answer: 'No user-facing brew PID is documented for this Oscar II. Boiler control, idle time and flushing still shape the HX routine.' },
    { question: 'Are the shot buttons volumetric?', answer: 'No. Oscar II stores brew time. Grind, dose and puck resistance can change beverage mass even when the timer repeats.' },
    { question: 'Does it dispense hot water?', answer: 'No dedicated hot-water outlet is documented; the machine has the group and one steam wand.' },
    { question: 'Is Oscar Mood the same machine?', answer: 'No. Oscar Mood is a separate current product family with different controls and should not lend features to this Oscar II score.' },
  ],
  bestFor: [
    'Milk-heavy homes that want strong manual steam and simultaneous brewing in a narrow body',
    'Practiced users who can manage an HX flush routine and audit timed doses with a scale',
    'Low-volume hospitality or mobile setups only after power, water, drainage, warranty and local service are verified',
  ],
  avoidIf: [
    'You want direct brew-temperature control, a pressure gauge or shot-weight automation',
    'A forgiving steam curve and quiet, low-intensity morning workflow matter most',
    'You need a hot-water tap, a plumbed drip-tray drain or direct water while shopping this reservoir version',
  ],
  pros: [
    'The 2 L heat-exchanger platform can brew and steam together',
    'Timed single and double buttons free attention for milk work while remaining manually interruptible',
    'The long articulated four-hole wand and push-pull lever support fast manual steaming',
    'Current official manuals, electrical records, programming guidance and parts documentation remain available',
  ],
  cons: [
    'No user-facing brew PID, pressure gauge, shot timer display or hot-water outlet is documented',
    'Timed dosing cannot compensate for changes in grind, dose, puck resistance or coffee age',
    'The small unplumbed tray and strong steam output can add handling pressure in busy or beginner routines',
    'The current $1,995 price overlaps modern PID heat-exchanger and entry dual-boiler alternatives',
  ],
  architecture: 'a single-group 110 V reservoir-fed espresso machine with a 2 L copper heat-exchanger boiler, vibratory pump, thermocompensated 58 mm group, time-programmable brew controls and a manual four-hole steam wand',
  identityBoundary: 'This review scores the current US black Oscar II reservoir/pour-over machine with 110-125 V power. Direct-connect Oscar II, red and blue regional variants, 220-240 V machines, Oscar Mood and older used machines with different component history are not silently treated as the same purchase.',
  primaryStrength: 'A compact 2 L HX and powerful articulated wand make repeated cappuccino work unusually capable for the footprint.',
  primaryLimit: 'The machine repeats shot time but gives no direct brew-temperature, pressure or beverage-mass feedback, so consistency still depends heavily on technique.',
  setupNote: 'Reserve at least 12 inches of width, 16 inches of body depth and 16 inches of height, plus clearance for reservoir access, the portafilter and pitcher. The US specification calls for 110-125 V, 1,200 W, 10 A and NEMA 5-15. Confirm the pour-over version because direct-connect has separate inlet requirements. Wash and seat the reservoir, prime as the manual directs, measure water hardness and keep the machine on a stable counter.',
  espressoNote: 'Oscar II combines a thermocompensated group, manufacturer-listed pre-infusion, a commercial-format 58 mm portafilter and two programmable brew buttons. The programming guide shows time-based dosing: the machine repeats pump-on duration, not water volume or beverage weight. A scale therefore remains essential because grind, dose, distribution, tamp and coffee age can change flow within the same programmed time. The heat exchanger allows repeated service but has no user-facing brew PID. Group heat, idle duration and flushing routine remain part of temperature management, and the absence of a pressure gauge means taste and measured yield must guide adjustment rather than an instrument panel.',
  milkNote: 'Steam is the clearest Oscar II buying case. The 2 L copper HX allows milk texturing while espresso runs, and the articulated wand uses a four-hole tip and push-pull lever. Prima and Seattle Coffee Gear report fast steaming under their conditions, but Coffeedant did not reproduce their timing or foam results. Purge before and after use, shut steam before removing the pitcher and wipe the wand immediately. The speed that helps a practiced barista can shorten the learning window for small pitchers and alternative milks.',
  workflowNote: 'The sparse console provides power, boiler and water status plus two programmable coffee buttons. A stored duration frees attention for milk, but the machine does not grind, weigh, tamp or verify yield. There is no hot-water tap, and the reservoir and approximately 1 L tray need manual handling. Prima notes that even its direct-connect demonstration unit lacks a drain outlet. Judge the whole routine from warm-up and flushing through preparation, extraction, steaming and cleanup.',
  buildNote: 'Nuova Simonelli lists stainless steel plus ABS, 300 × 400 × 408 mm, 13 kg and 1,200 W. The US listing rounds this to 12 × 16 × 16 inches and specifies 110 V, 10 A and NEMA 5-15. The December 23, 2025 parts book and electrical record aid exact part identification and qualified service. They do not prove component life or cheap repair, or make boiler, pump, pressure or mains work safe for an owner. Check serial, voltage, water, modification and maintenance history on used machines.',
  featuresNote: 'Useful features are simultaneous brewing and steaming, two timed coffee buttons, official pre-infusion, an articulated wand, push-pull steam and factory reservoir or direct-water choice. There is no documented user brew PID, pressure gauge, hot-water outlet, app, grinder, scale, flowmeter or plumbed tray drain. Oscar Mood is a separate product whose controls do not transfer to Oscar II. Value comes from steam workflow and a compact professional-style platform, not extensive feedback.',
  valueNote: 'WebstaurantStore displayed the exact black pour-over 110 V Oscar II at $1,995 on September 24, 2026. Pro Coffee Gear also displayed $1,995 while offering black or red, pour-over or direct-connect, and different warranty choices. Compare the selected configuration and complete station: capable grinder, scale, tamper, pitcher, knock box, water treatment, backflush supplies and service access. The Oscar II earns its price when steam capacity and a narrow body outrank direct temperature feedback. Buyers focused on straight espresso or easier repeatability should compare a PID HX or compact dual boiler before paying.',
  ownerPattern: 'Owner discussion praises strong steam and a solid multi-year platform while describing a learning curve around warm-up, flushing and first-shot behavior. One three-year owner liked the machine but still questioned value relative to grinder spending. Another took months to learn the HX routine and found the steam fast for a beginner. These reports help plan technique and budget, not average lifespan or defect rate.',
  ownerCaution: 'Owner posts mix regions, years, water conditions and modified machines. Pressure-modification discussions may describe older production or personal changes that cannot be assigned to this exact version without serial evidence. A positive three-year report does not establish typical durability, and a complaint does not establish a common defect. No representative failure-rate, repair-cost or boiler-life dataset was located.',
  maintenanceNote: 'Flush the group, brush the gasket and screen, clean baskets and portafilter, wash tray and reservoir, then wipe and purge the wand after milk. Follow the manual for detergent backflushing. Match filtration to measured hardness and ask a technician before descaling a scaled HX boiler. Stop use for leaks, electrical faults, burning smells, uncontrolled heating or abnormal pump behavior.',
  dimensions: {
    espresso: { score: 7.9, claim: 'A 58 mm thermocompensated group, pre-infusion and timed buttons support a repeatable manual routine.', consequence: 'Time-based stopping and no user-facing PID mean grind, yield and HX temperature still need active management.', status: 'Current official documentation plus attributed exact-model reviews; no Coffeedant measurements', signals: ['Two programmable brew durations plus manual stopping.', 'Thermocompensated group and 2 L copper HX boiler.', 'Timed delivery does not guarantee beverage mass.'] },
    milk: { score: 9.2, claim: 'The 2 L HX and articulated four-hole lever wand make fast milk work the machine\'s clearest advantage.', consequence: 'High steam power gives a beginner less time to introduce air and stop cleanly.', status: 'Manufacturer architecture and two attributed exact-model demonstrations', signals: ['Brewing and steaming can overlap.', 'Push-pull lever supports momentary purge and sustained steam.', 'No controlled Coffeedant steam-rate or foam test was performed.'] },
    workflow: { score: 7.9, claim: 'Timed coffee buttons let a practiced user shift attention to milk during a repeated recipe.', consequence: 'Top-fill water, a small tray, no hot-water tap and no weight feedback keep the process hands-on.', status: 'Exact US manual, programming guide, current listing and independent workflow report', signals: ['Programmable single and double durations.', '3 L reservoir and approximately 1 L tray.', 'No integrated scale, grinder or drain.'] },
    build: { score: 8.2, claim: 'A compact steel-and-ABS chassis and current official parts archive support a mature service platform.', consequence: 'Documentation and professional components do not prove long life or low repair cost.', status: 'Current official dimensions, electrical record and December 2025 parts book', signals: ['300 mm-wide stainless steel plus ABS body.', 'Current parts and electrical records remain published.', 'No representative reliability denominator was located.'] },
    features: { score: 7.2, claim: 'Pre-infusion, timed doses and an articulated lever wand focus the machine on traditional milk service.', consequence: 'No PID, gauge, hot water, app, flowmeter or direct shot-weight feedback is documented.', status: 'Current manufacturer family page and exact US records checked September 24, 2026', signals: ['Time-based coffee programming.', 'Reservoir and direct-connect are separate factory configurations.', 'Oscar Mood features are excluded.'] },
    value: { score: 7.5, claim: 'The $1,995 price buys unusually strong steam and a narrow professional-style HX platform.', consequence: 'PID HX and entry dual-boiler rivals can offer clearer temperature feedback near this budget.', status: 'Two current US seller records checked September 24, 2026', signals: ['$1,995 exact black pour-over listing.', '$1,995 configurable second listing.', 'Grinder, water treatment and service add to the station total.'] },
  },
  sources: [
    { label: 'Nuova Simonelli current global Oscar page', href: official, note: 'Current manufacturer record for the Oscar II-generation platform, reservoir/direct-connect choice, thermocompensated group, pre-infusion, dimensions, weight and power; checked September 24, 2026.' },
    { label: 'Nuova Distribution USA document archive', href: officialDocs, note: 'Current US official archive listing Oscar II among active machines, before the discontinued section, with brochure, manual, electrical, programming, specification and parts records.' },
    { label: 'Nuova Simonelli Oscar II manual', href: manual, note: 'Official operating, safety, installation, cleaning and troubleshooting record for the Oscar II family.' },
    { label: 'Nuova Simonelli Oscar II brochure', href: brochure, note: 'Official family record for the 2 L copper HX boiler, 3 L reservoir, 1 L tray, timed dosing, 58 mm filter holder, dimensions, weight and water-source variants.' },
    { label: 'Nuova Distribution USA Oscar II specification sheet', href: specSheet, note: 'Official US site record for 110-125 V, 1,200 W, 10 A, NEMA 5-15, 12 × 16 × 16-inch counter envelope and direct-connect water limits.' },
    { label: 'Nuova Simonelli Oscar II electrical record', href: electrical, note: 'Official wiring record used to confirm the documented platform and qualified-service boundary, not as owner repair guidance.' },
    { label: 'Nuova Simonelli Oscar II programming guide', href: programming, note: 'Official procedure showing that the two coffee buttons store timed doses rather than flowmeter-based volumetric delivery.' },
    { label: 'Nuova Simonelli Oscar II current parts book', href: partsBook, note: 'Official parts record dated December 23, 2025, used for current platform continuity and exact part lookup, not to imply safe owner repair.' },
    { label: 'WebstaurantStore exact black pour-over listing', href: currentSeller, note: 'Exact US item 238OSC2POBL showing black, pour-over, 110 V, 1,200 W, NEMA 5-15 and $1,995 on September 24, 2026.' },
    { label: 'Pro Coffee Gear Oscar II listing', href: secondSeller, note: 'Current US market record showing $1,995 with black/red, pour-over/direct-connect and warranty choices; configuration must be selected before comparing totals.' },
    { label: 'Prima Coffee Oscar II overview', href: independent, note: 'Independent exact-model video overview dated October 30, 2025, demonstrating a direct-connect unit and discussing timed dosing, steam, tray and light-commercial workflow. Coffeedant did not reproduce its claims.' },
    { label: 'Coffeeness Oscar II review', href: secondIndependent, note: 'Arne Preuss exact-model evaluation checked in its 2026 edition, used for attributed design and workflow context. Coffeedant did not reproduce its results.' },
    { label: 'Seattle Coffee Gear Oscar II Crew Review', href: crewReview, note: 'Independent retailer editorial dated May 2, 2016 with exact-model brew, steam, warm-up and construction observations under its own conditions.' },
    { label: 'Seattle Coffee Gear Oscar II video', href: video, note: 'Independent exact-model visual review linked from the dated Crew Review. It demonstrates controls, extraction and steam workflow; it is not Coffeedant testing or reliability evidence.' },
    { label: 'Oscar II owner discussion', href: owner, note: 'Self-selected owner thread with a three-year ownership report and discussion of warm-up, flushing, steam learning curve and grinder budget. It has no representative denominator.' },
  ],
  comparisons: [
    { name: 'Nuova Simonelli Oscar II Black Pour-Over', href: '/espresso-machine/nuova-simonelli-oscar-ii/', quickDecision: 'Choose strong steam and timed shots when direct temperature feedback is not required.', priceClass: '$1,995 checked Sep 24', dimensions: '30 × 40 × 40.8 cm W×H×D', heating: '2 L copper heat exchanger', coffeeSetup: '58 mm portafilter, timed doses', milkWorkflow: 'Manual four-hole lever wand', bestFor: 'Milk-heavy compact service' },
    { name: 'Nuova Simonelli Musica Reservoir', href: '/espresso-machine/nuova-simonelli-musica/', quickDecision: 'Pay more for volumetric dosing, a boiler gauge and dedicated hot water in the same brand family.', priceClass: '$2,950 checked Sep 24', dimensions: '32 × 43 × 40 cm W×H×D', heating: '2 L copper heat exchanger', coffeeSetup: '58 mm portafilter, volumetric doses', milkWorkflow: 'Manual lever steam wand', bestFor: 'Higher-control traditional service' },
    { name: 'Lelit Mara X', href: '/espresso-machine/lelit-mara-x/', quickDecision: 'Choose a home-focused temperature-priority HX and E61 format when espresso management matters more than timed doses.', priceClass: 'Prosumer HX', dimensions: 'Compact E61 footprint', heating: 'Temperature-priority heat exchanger', coffeeSetup: '58 mm E61 manual control', milkWorkflow: 'Manual steam wand', bestFor: 'Espresso and milk balance' },
    { name: 'Lelit Elizabeth', href: '/espresso-machine/lelit-elizabeth/', quickDecision: 'Choose PID dual-boiler separation when direct temperature control matters more than Oscar II steam character.', priceClass: 'Compact dual boiler', dimensions: 'Compact rectangular body', heating: 'PID dual boiler', coffeeSetup: '58 mm group with timed programs', milkWorkflow: 'Manual steam wand', bestFor: 'Temperature-led home routines' },
  ],
  comparisonNote: 'Compare exact voltage, water source, color, warranty and delivered total. Oscar II reservoir and direct-connect versions have different installation needs, while Oscar Mood is a different product rather than a trim option. Used units also require serial, scale, modification and service-history checks.',
  recommendations: [
    { kicker: 'More controls, same brand', title: 'Nuova Simonelli Musica', text: 'Add volumetric dosing, a boiler gauge and hot water when the higher price fits the station.', href: '/espresso-machine/nuova-simonelli-musica/', linkLabel: 'Read Musica review', featured: true },
    { kicker: 'Temperature-priority HX', title: 'Lelit Mara X', text: 'Compare the E61 workflow and temperature-priority control when espresso management matters more than timed buttons.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read Mara X review' },
    { kicker: 'Compact dual boiler', title: 'Lelit Elizabeth', text: 'Choose direct PID brew control and boiler separation when a traditional HX routine is the wrong trade.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read Lelit Elizabeth review' },
    { kicker: 'Set the budget first', title: 'Best prosumer machines under $1,000', text: 'Use the category framework to decide which controls and ownership costs justify moving above the guide\'s price ceiling.', href: '/espresso-machine/prosumer-under-1000/', linkLabel: 'Read prosumer guide' },
  ],
  faqs: [
    { question: 'Which Nuova Simonelli Oscar II does this review cover?', answer: 'The score and Product schema cover the current US black reservoir or pour-over version at 110-125 V with NEMA 5-15 power. Direct-connect, other colors, 220-240 V machines and Oscar Mood are excluded from the exact score.' },
    { question: 'Can Oscar II brew espresso and steam milk at the same time?', answer: 'Yes. Its 2 L copper heat-exchanger boiler supports simultaneous brewing and steaming. It remains one boiler with a heat-exchange path, not a dual boiler.' },
    { question: 'Does Oscar II have a PID or pressure gauge?', answer: 'The current official Oscar II records do not show a user-facing brew PID or pressure gauge. Warm-up, idle time, flushing, grind and measured yield remain central to the routine.' },
    { question: 'What do the programmable coffee buttons control?', answer: 'They store pump-on time. They are not flowmeter-based volumetric doses, and they do not measure beverage weight, so audit the programmed result with a scale whenever grind, dose or coffee changes.' },
    { question: 'Does Oscar II provide hot water?', answer: 'No dedicated hot-water outlet is documented. The current layout provides the 58 mm group and a single articulated steam wand.' },
    { question: 'What is different about direct-connect Oscar II?', answer: 'It is built for a dedicated water supply with pressure, flow and treatment requirements. Even the direct-connect machine lacks a plumbable tray drain, according to Prima. This pour-over review does not imply a simple field conversion.' },
    { question: 'What cleaning does Oscar II require?', answer: 'Routine work includes group flushing, gasket and screen brushing, portafilter and basket cleaning, tray and reservoir washing, immediate wand wiping and purging, plus detergent backflushing on the manual schedule. Water treatment should follow measured hardness.' },
    { question: 'Is $1,995 a permanent price?', answer: 'No. It is the exact WebstaurantStore display checked September 24, 2026. Stock, processing time, water configuration, color, warranty and promotions can change, so confirm the complete delivered machine and total.' },
  ],
  finalTitle: 'Buy Oscar II for steam capacity, not instrument feedback',
  finalVerdict: [
    'The black reservoir Oscar II has a clear job: fit a 2 L HX, 58 mm manual group, timed coffee buttons and a fast articulated steam wand into a 30 cm-wide cabinet on a standard US circuit.',
    'Its limits are just as clear. Timed dosing cannot verify yield, there is no user-facing PID or pressure gauge, and the tray, reservoir and temperature routine stay manual. Exact water source, voltage and warranty must be confirmed before payment.',
    'Choose it when milk service is frequent, technique is welcome and local Nuova Simonelli support is strong. Choose Musica for more front-panel control, Mara X for a home-focused HX routine, or Elizabeth when PID dual-boiler control matters more than Oscar II steam identity.',
  ],
  video: {
    id: 'tr0hp_m4W7s',
    title: 'Crew Review: Nuova Simonelli Oscar II',
    creator: 'Seattle Coffee Gear',
    published: '2016-05-02',
    note: 'Independent exact-model visual review linked from Seattle Coffee Gear\'s dated Crew Review. It demonstrates controls, extraction and steam workflow under that reviewer\'s conditions; it is not Coffeedant testing or durability evidence.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-3">[source]</a> <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-5">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-1">[source]</a> <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-7">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-11">[source]</a> <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-13">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-3">[source]</a> <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-11">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-1">[source]</a> <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-8">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-1">[source]</a> <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-7">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-9">[source]</a> <a href="#nuova-simonelli-oscar-ii-black-reservoir-us-110v-source-10">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="oscar-ii-owner-title"><h3 id="oscar-ii-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Steam power is the recurring attraction</strong><p>Owners repeatedly describe the wand as fast and capable, while newer users say the short texturing window takes practice. That contrast describes fit; it does not quantify a universal steam rate.</p></li>
    <li><strong>The heat-exchanger routine must be learned</strong><p>Owners discuss warm-up, idle time, short flushes and first-shot behavior as parts of daily use. Their recipes vary, so Coffeedant does not convert one person\'s flush timing into a universal instruction.</p></li>
    <li><strong>Budget belongs to the whole station</strong><p>A three-year owner who liked the machine still told a buyer to weigh Oscar II against spending more on the grinder. That is a useful buying question, not evidence that one allocation fits every household.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeNuovaSimonelliOscarIIReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
