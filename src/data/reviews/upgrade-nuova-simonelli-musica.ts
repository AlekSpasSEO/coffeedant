import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://nuovasimonelli.com/machine/musica/';
const officialDocs = 'https://www.simonelliusa.com/all-equipment-documents-archive';
const manual = 'https://www.simonelliusa.com/PDFs/Musica/Musica-Manual-All.pdf';
const brochure = 'https://www.simonelliusa.com/PDFs/Musica/Musica-Brochure-All.pdf';
const specSheet = 'https://www.simonelliusa.com/PDFs/Musica/Musica-SpecSheet-All.pdf';
const partsBook = 'https://www.simonelliusa.com/PDFs/Musica/Musica-PartsBook-Current.pdf';
const currentSeller = 'https://www.seattlecoffeegear.com/products/nuova-simonelli-musica-standard-version-black-lining';
const independent = 'https://espressooutlet.com/blogs/news/nuova-simonelli-musica-in-depth-review';
const secondIndependent = 'https://www.coffeeness.de/en/nuova-simonelli-musica-review/';
const crewReview = 'https://www.seattlecoffeegear.com/blogs/scg-blog/crew-review-nuova-simonelli-musica';
const video = 'https://www.youtube.com/watch?v=iOMgcvGHm1s';
const owner = 'https://www.reddit.com/r/espresso/comments/16cgz9f/nuova_simonelli_musica_from_2020_for_560_would/';
const community = 'https://www.reddit.com/r/espresso/comments/1q25r8s/nuova_simonelli_is_not_discussed_a_lot_or_what/';
const market = 'https://procoffeegear.com/collections/nuova-simonelli';
const image = 'https://cdn.shopify.com/s/files/1/0564/3288/5835/files/musica-main-1_4c2a6f36-0b41-41f0-8e22-39d1d8b35743.jpg?v=1710606754';

const profile: UpgradeReviewProfile = {
  key: 'nuova-simonelli-musica-reservoir-standard-us-110v',
  slug: '/espresso-machine/nuova-simonelli-musica/',
  productId: 'CD-EM-000215',
  brand: 'Nuova Simonelli',
  model: 'Musica Reservoir Standard',
  sku: 'Musica reservoir-only, standard black-lining version, US 110-125 V / NEMA 5-15 configuration',
  category: 'Heat-exchanger espresso machine',
  brandPath: '/brands/',
  title: 'Nuova Simonelli Musica review: steam power, old-school control',
  description: 'Exact US Musica reservoir review with dated $2,950 pricing, 2 L heat exchanger, volumetric shots, manual steam and variant limits.',
  verdictLabel: 'A compact commercial-style HX machine that rewards milk-heavy routines, not temperature experimentation',
  verdict: 'Shortlist the current US Musica reservoir model when forceful manual steam, simultaneous brewing and steaming, programmable volumetric buttons and a compact 32 cm cabinet solve your daily workflow. Seattle Coffee Gear displayed the reservoir-only standard black-lining version at $2,950 on September 24, 2026. The design is mature rather than modern: there is no user-facing brew PID, shot timer or quiet rotary pump. Buy it for fast traditional milk service and a serviceable professional parts ecosystem, not because its curved case makes it equivalent to a current dual boiler.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Current Nuova Simonelli product and US documentation, an exact current retailer listing, three independent exact-model evaluations, an independent video, owner discussion and a current market listing define the evidence. Coffeedant did not reproduce temperature, taste, steam, warm-up or noise observations. The score is limited to the US 110 V reservoir-only standard version with black lining; direct-connect and Lux LED versions remain separate purchase configurations.',
  image,
  imageAlt: 'Espresso Outlet exact-model photograph of the Nuova Simonelli Musica reservoir machine on a counter',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked exact-version price',
    msrp: '$2,950 at Seattle Coffee Gear',
    typical: 'Seattle Coffee Gear displayed $2,950, available to add to cart, with vendor-shipping notice and a one-year manufacturer warranty on September 24, 2026. Pro Coffee Gear also displayed $2,950 for Musica, but buyers must confirm its water configuration before comparing totals.',
    currency: 'USD', numeric: '2950', checked: 'September 24, 2026',
  },
  links: [
    { label: 'Check the current reservoir listing', href: currentSeller, note: 'Current US exact-version listing; $2,950 when checked September 24, 2026', primary: true },
    { label: 'Check the official Musica record', href: official, note: 'Current manufacturer family record; choose reservoir, direct-connect, Black or LED version deliberately' },
  ],
  facts: [
    { label: 'Exact reviewed machine', value: 'Reservoir-only Musica, standard black lining, US 110-125 V and NEMA 5-15 electrical configuration' },
    { label: 'Excluded variants', value: 'Direct-connect plumbing and Lux/LED trim are not included in this exact product score' },
    { label: 'Brew system', value: 'Single 2 L copper heat-exchanger boiler, thermoregulated group and electronic pre-infusion' },
    { label: 'Coffee controls', value: 'Two programmable volumetric doses, continuous/manual brew control and commercial-style 58 mm portafilter' },
    { label: 'Milk workflow', value: 'Manual articulated steam wand with push-pull lever; brew and steam can run together' },
    { label: 'Reservoir record', value: 'Official records conflict: brochure says 3.0 L while US manual states 2.3 L' },
    { label: 'Footprint and power', value: '32 × 43 × 40 cm W×H×D, about 20 kg and 1,200 W; US spec allows 110-125 V' },
  ],
  quickAnswers: [
    { question: 'Is this the plumbed Musica?', answer: 'No. The score is locked to the current US reservoir-only standard black-lining listing.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. The heat exchanger and 2 L steam boiler support simultaneous work.' },
    { question: 'Does it have brew-temperature PID control?', answer: 'No user-facing brew PID is documented. Boiler pressure and HX routine shape the temperature workflow.' },
    { question: 'Are the buttons volumetric?', answer: 'Yes. The single and double buttons stop by programmed water volume; manual operation is also available.' },
    { question: 'How large is the reservoir?', answer: 'Official records conflict between 3.0 L in the brochure and 2.3 L in the US manual. Confirm the delivered tank.' },
    { question: 'Is it suitable for a small business?', answer: 'It carries professional positioning, but volume, water, drainage, warranty, code and service requirements must match the exact site.' },
  ],
  bestFor: [
    'Milk-heavy homes that want commercial-style steam and simultaneous brewing',
    'Skilled users who value volumetric repeatability but still control grind, dose, tamp and milk manually',
    'Low-volume hospitality settings with a verified circuit, water plan and local service route',
  ],
  avoidIf: [
    'You want direct brew-temperature control, a shot timer or dual-boiler recovery logic',
    'Quiet operation and a small, light machine matter more than steam capacity',
    'You need direct plumbing but are looking at this reservoir-only version',
  ],
  pros: [
    'The 2 L heat-exchanger platform can brew and steam together',
    'Programmable volumetric buttons reduce stop-time variation in a repeated recipe',
    'The articulated wand and push-pull lever support fast manual milk work',
    'Current manufacturer documentation, parts books and service records remain available',
  ],
  cons: [
    'No user-facing brew PID or shot timer is documented for this mature platform',
    'The vibratory pump, 20 kg body and 43 cm height are substantial for a home counter',
    'Official reservoir capacity records conflict between 2.3 and 3.0 L',
    'The current $2,950 price enters modern PID heat-exchanger and dual-boiler territory',
  ],
  architecture: 'a single-group 110 V reservoir-fed espresso machine with a 2 L copper heat-exchanger boiler, vibratory pump, thermoregulated group, 58 mm portafilter, volumetric flow control and manual steam and hot-water outlets',
  identityBoundary: 'This review scores the current US reservoir-only standard Musica with black lining. Direct-connect Musica, Lux/LED trim, 220-240 V regional machines and older units with different boards or service history are not silently treated as the same purchase.',
  primaryStrength: 'Commercial-style steam capacity and volumetric stopping make repeated cappuccino service faster than on a typical single boiler.',
  primaryLimit: 'At $2,950, its pressurestat-led HX workflow asks buyers to prefer mature simplicity over current PID and dual-boiler control.',
  setupNote: 'Reserve at least 32 cm of width, 40 cm of body depth and 43 cm of height, then add top clearance for reservoir filling, side clearance for the pitcher and room to remove the drip tray and portafilter. The US specification calls for 110-125 V, 1,200 W, a 10 A draw and NEMA 5-15 receptacle. Do not choose the reservoir version while planning a direct water line. Wash and seat the tank, confirm water treatment against local hardness, fill the boiler as the manual directs and verify that the portafilter, baskets and blind filter match the delivered package.',
  espressoNote: 'The Musica combines a thermoregulated group, electronic pre-infusion, a 58 mm portafilter and two programmable volumetric doses. Volumetric stopping repeats water movement through the circuit, not beverage mass: puck absorption, grind and dose still change yield. Program with a scale, keep dose and basket stable, and periodically recheck the cup. The heat exchanger permits rapid sequences but has no user-facing brew PID. Group heat, idle time and flushing routine remain part of temperature management, so a boiler gauge alone does not establish water temperature at the puck.',
  milkNote: 'Steam is the Musica buying case. The 2 L boiler and heat exchanger let the user texture milk while espresso runs, and the articulated wand uses a push-pull lever rather than a slow multi-turn knob. Seattle Coffee Gear and Coffeeness both describe strong steam performance under their conditions. That is useful attribution, not Coffeedant measurement. Purge before and after use, start with a controlled milk volume, shut steam off before removing the pitcher, and wipe the wand immediately. Fast power raises the learning cost for small pitchers and alternative milks.',
  workflowNote: 'The front panel offers programmed single and double doses, continuous brewing, hot water, boiler status and light controls. A saved dose helps during a milk sequence because the barista can focus on the pitcher, but the machine does not grind, weigh, tamp or verify final yield. The reservoir is filled from above and the cup tray can obstruct access. The official capacity conflict makes refill planning more important, not less. Time the real routine from warm-up through grinding, a post-idle flush, extraction, steaming, purging and cleanup.',
  buildNote: 'Nuova Simonelli lists stainless steel plus ABS, 32 × 43 × 40 cm, 20 kg and 1,200 W. The US installation sheet is close at 13 × 17 × 16 inches and 45 pounds. The 2011-and-newer parts book, hydraulic drawing and electrical record remain in the official archive, which is useful for qualified diagnosis and exact part identification. Accessible documentation does not prove a failure rate or make mains, boiler and pump service an owner task. Used machines need serial, voltage, water and maintenance history checked before power-up.',
  featuresNote: 'The useful features are volumetric dosing, electronic pre-infusion, simultaneous brew and steam capability, boiler gauge, dedicated hot water, adjustable lighting and reservoir or direct-connect factory choice. The Lux version adds LED case lighting; it does not define this standard black-lining machine. There is no documented app, grinder, integrated scale, shot timer or user-facing brew-temperature PID. At this price, feature value comes from workflow and parts continuity rather than a long settings menu.',
  valueNote: 'Seattle Coffee Gear displayed the exact reservoir-only version at $2,950 on September 24, 2026, and Pro Coffee Gear displayed Musica at the same price with in-stock language. The direct-connect configuration, Lux lighting, warranty plan, installation and filtration can change the total. Compare a complete station: capable grinder, scale, metal tamper, pitcher, knock box, water treatment, backflush supplies and service access. The Musica is rational when steam throughput and a familiar professional platform outrank direct temperature control.',
  ownerPattern: 'Owner discussion consistently frames the Musica as a strong steamer whose espresso improves once the user learns its heat-exchanger routine. A 2020-machine resale discussion includes one owner praising milk work and espresso while warning that water history matters. Current brand discussion also notes that Nuova Simonelli home machines receive less enthusiast attention because the company emphasizes professional HX platforms. These themes help form inspection questions but do not establish durability rates.',
  ownerCaution: 'Owner posts are self-selected and mix new, used, reservoir, direct-connect and regional machines. A bargain used price may reflect age, scale, deferred service or local demand. Positive multi-year ownership does not establish average lifespan, while a leak or flow complaint does not establish a common defect. No representative Musica failure-rate, pump-life, boiler-life or repair-cost dataset was located.',
  maintenanceNote: 'Flush the group after service, brush the gasket and screen, clean baskets and portafilter, empty and wash the tray, and wipe and purge the steam wand immediately after milk. Follow the exact manual for detergent backflushing and cleaning frequency. Wash the reservoir and never leave stagnant water. Match filtration to measured hardness and ask a qualified technician before chemical descaling of a scaled HX boiler. Stop use for leaks, electrical faults, burning smells, abnormal pump behavior or boiler-control problems.',
  dimensions: {
    espresso: { score: 8.2, claim: 'A 58 mm group, electronic pre-infusion and volumetric doses support repeatable traditional espresso.', consequence: 'Without user brew-temperature control, the HX flush and idle routine remain part of dialing in.', status: 'Current manufacturer documentation plus attributed exact-model reviews; no Coffeedant measurements', signals: ['Two programmable doses plus manual brewing.', 'Thermoregulated group and 2 L copper HX boiler.', 'Volumetric water delivery does not guarantee beverage mass.'] },
    milk: { score: 9.1, claim: 'The 2 L boiler and articulated lever wand make fast manual milk work the machine\'s clearest advantage.', consequence: 'High steam power demands pitcher control and immediate wand hygiene.', status: 'Manufacturer architecture and three independent exact-model evaluations', signals: ['Brewing and steaming can happen together.', 'Push-pull lever reduces valve turns.', 'No controlled Coffeedant steam-rate or foam test was performed.'] },
    workflow: { score: 8.4, claim: 'Volumetric stopping lets a practiced user divide attention between espresso and milk.', consequence: 'Top-fill access, warm-up and HX temperature routine keep the process hands-on.', status: 'Exact US manual, current listing and independent workflow reports', signals: ['Programmable single and double buttons.', 'Reservoir fill is from the top.', 'No integrated shot timer, scale or grinder.'] },
    build: { score: 8.5, claim: 'A 20 kg chassis and current official parts archive support a mature serviceable platform.', consequence: 'Weight and documentation do not prove component life or inexpensive repair.', status: 'Current official dimensions, installation sheet, parts book and hydraulic record', signals: ['Stainless steel plus ABS body.', '2011-and-newer parts book remains published.', 'No representative reliability denominator was located.'] },
    features: { score: 7.7, claim: 'Pre-infusion, volumetrics, gauge and lighting all serve repeated barista tasks.', consequence: 'No user-facing brew PID, app or current convenience electronics are documented.', status: 'Current manufacturer family page and exact US records checked September 24, 2026', signals: ['Electronic pre-infusion is programmable.', 'Black and Lux/LED trims must not be conflated.', 'Reservoir and direct-connect are separate configurations.'] },
    value: { score: 7.4, claim: 'The $2,950 price can make sense for buyers prioritizing steam and professional parts continuity.', consequence: 'Modern PID HX and dual-boiler rivals offer more direct temperature feedback at similar money.', status: 'Two current US seller records checked September 24, 2026', signals: ['$2,950 exact reservoir listing.', '$2,950 second-market Musica listing.', 'Grinder, water treatment and service add to the station total.'] },
  },
  sources: [
    { label: 'Nuova Simonelli current global Musica page', href: official, note: 'Current manufacturer record for reservoir and direct-connect versions, Black and LED styles, thermoregulated group, heat exchanger, pre-infusion, dimensions, weight and power; checked September 24, 2026.' },
    { label: 'Nuova Distribution USA document archive', href: officialDocs, note: 'Current US official archive listing Musica among active machines with brochure, manual, electrical, hydraulic, specification and parts records.' },
    { label: 'Nuova Simonelli Musica US manual', href: manual, note: 'Official operating, programming, safety, cleaning and troubleshooting record. It states a 2.3 L reservoir, which conflicts with the official brochure.' },
    { label: 'Nuova Simonelli Musica brochure', href: brochure, note: 'Official family record for 3 L reservoir claim, 2 L copper boiler, volumetric dosing, electronic pre-infusion, 32 × 43 × 40 cm dimensions, trim and water-source variants.' },
    { label: 'Nuova Distribution USA Musica specification sheet', href: specSheet, note: 'Official US site record for 110-125 V, 1,200 W, 10 A, NEMA 5-15, direct-connect water limits and approximately 13 × 17 × 16-inch countertop envelope.' },
    { label: 'Seattle Coffee Gear current reservoir listing', href: currentSeller, note: 'Exact US reservoir-only standard black-lining listing showing $2,950, add-to-cart state, vendor-shipping notice, one-year manufacturer warranty and HX positioning on September 24, 2026.' },
    { label: 'Espresso Outlet Musica review', href: independent, note: 'Updated March 15, 2024 exact-model hands-on record for reservoir/direct-connect choice, HX routine, volumetric dosing, steam lever, space and maintenance. Coffeedant did not reproduce the observations.' },
    { label: 'Coffeeness Musica review', href: secondIndependent, note: 'Arne Preuss exact-model evaluation checked in its 2026 edition, with attributed design, steam, workflow and accessory observations. Coffeedant did not reproduce its results.' },
    { label: 'Seattle Coffee Gear Crew Review', href: crewReview, note: 'Independent retailer editorial dated July 6, 2015 with exact-model brew, steam and 58 mm workflow observations, linked to the selected video.' },
    { label: 'Seattle Coffee Gear Musica Crew Review video', href: video, note: 'Independent exact-model visual review demonstrating controls, extraction and steam workflow. It is not Coffeedant testing or long-term reliability evidence.' },
    { label: 'Musica used-machine owner discussion', href: owner, note: 'Self-selected 2020-machine purchase thread with one owner\'s milk, espresso and water-history comments. It has no representative denominator.' },
    { label: 'Current Nuova Simonelli community discussion', href: community, note: 'Current enthusiast discussion of brand position, HX preference, steam power and long-running platform design. It does not establish model reliability.' },
    { label: 'Pro Coffee Gear current Nuova Simonelli market page', href: market, note: 'Current US market record showing Musica at $2,950 and in stock on September 24, 2026; exact water configuration must be confirmed before comparison.' },
    { label: 'Nuova Simonelli Musica current parts book', href: partsBook, note: 'Official 2011-and-newer parts record used to confirm platform continuity and exact part lookup, not to imply that owner repair is safe or warranty-neutral.' },
  ],
  comparisons: [
    { name: 'Nuova Simonelli Musica Reservoir', href: '/espresso-machine/nuova-simonelli-musica/', quickDecision: 'Choose strong manual steam and volumetric stopping when a pressurestat HX workflow is acceptable.', priceClass: '$2,950 checked Sep 24', dimensions: '32 × 43 × 40 cm W×H×D', heating: '2 L copper heat exchanger', coffeeSetup: '58 mm portafilter, volumetric doses', milkWorkflow: 'Manual lever steam wand', bestFor: 'Milk-heavy traditional service' },
    { name: 'Nuova Simonelli Oscar II', href: '/espresso-machine/nuova-simonelli-oscar-ii/', quickDecision: 'Spend less when timed dosing and fewer front-panel controls are acceptable.', priceClass: '$1,995 current market context', dimensions: 'Compact single-group body', heating: '2 L heat exchanger', coffeeSetup: '58 mm portafilter, timed controls', milkWorkflow: 'Manual high-output wand', bestFor: 'Value-focused HX workflow' },
    { name: 'Lelit Mara X', href: '/espresso-machine/lelit-mara-x/', quickDecision: 'Choose its temperature-priority HX control and E61 format when espresso feedback matters more than volumetrics.', priceClass: 'Prosumer HX', dimensions: 'Compact E61 footprint', heating: 'Temperature-priority heat exchanger', coffeeSetup: '58 mm E61 manual control', milkWorkflow: 'Manual steam wand', bestFor: 'Home espresso and milk balance' },
    { name: 'Lelit Elizabeth', href: '/espresso-machine/lelit-elizabeth/', quickDecision: 'Choose the dual boiler and PID when direct brew-temperature control matters more than Musica steam character.', priceClass: 'Compact dual boiler', dimensions: 'Compact rectangular body', heating: 'PID dual boiler', coffeeSetup: '58 mm group with timed programs', milkWorkflow: 'Manual steam wand', bestFor: 'Temperature-led home routines' },
  ],
  comparisonNote: 'Compare the exact voltage, water source, trim, warranty and live total. Musica reservoir and direct-connect versions are not a hose-level buying difference, and the Lux/LED body should not be assumed from a standard black-lining listing. Used units also require board generation, scale and service-history checks.',
  recommendations: [
    { kicker: 'Lower-cost sibling', title: 'Nuova Simonelli Oscar II', text: 'Keep the 2 L HX and strong manual steam when timed controls and a simpler body are acceptable.', href: '/espresso-machine/nuova-simonelli-oscar-ii/', linkLabel: 'Read Oscar II review', featured: true },
    { kicker: 'Temperature-priority HX', title: 'Lelit Mara X', text: 'Compare the E61 workflow and temperature-priority control when espresso management matters more than volumetric buttons.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read Mara X review' },
    { kicker: 'Compact dual boiler', title: 'Lelit Elizabeth', text: 'Choose direct PID brew control and dual-boiler separation when traditional HX routine is the wrong trade.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read Lelit Elizabeth review' },
    { kicker: 'See more single-group options', title: 'Best prosumer machines under $1,000', text: 'Use the category framework to decide which controls and ownership costs justify moving above the guide\'s price ceiling.', href: '/espresso-machine/prosumer-under-1000/', linkLabel: 'Read prosumer guide' },
  ],
  faqs: [
    { question: 'Which Nuova Simonelli Musica does this review cover?', answer: 'The score and Product schema cover the current US reservoir-only standard version with black lining, 110-125 V and NEMA 5-15 power. Direct-connect, Lux/LED and 220-240 V configurations are excluded from the exact product score.' },
    { question: 'Can the Musica brew espresso and steam milk at the same time?', answer: 'Yes. Its 2 L copper heat-exchanger boiler supports simultaneous brewing and steaming. That does not make it a dual boiler; brew water passes through a heat exchanger inside the steam-boiler system.' },
    { question: 'Does the Musica have a PID?', answer: 'The current manufacturer and US documents do not show a user-facing brew-temperature PID. The machine uses boiler-pressure control, a heat exchanger and a thermoregulated group, so warm-up, idle time and flushing routine still matter.' },
    { question: 'How large is the Musica water tank?', answer: 'Official records conflict. The official brochure says 3.0 L, while the US manual says 2.3 L. Buyers should ask the seller to confirm the delivered reservoir rather than treating either figure as universally correct.' },
    { question: 'What do the programmable buttons control?', answer: 'The single and double buttons store volumetric water doses. They help repeat a routine, but coffee absorption and grind changes can alter beverage mass, so program and audit them with a scale.' },
    { question: 'What is different about the direct-connect Musica?', answer: 'It is built for a dedicated water supply and has installation requirements for inlet flow, pressure, filtration and fittings. This reservoir-only review does not imply that the two versions convert with a simple hose.' },
    { question: 'What cleaning does the Musica require?', answer: 'Routine work includes group flushing, gasket and screen brushing, portafilter and basket cleaning, tray washing, reservoir washing, immediate wand wiping and purging, plus detergent backflushing on the manual schedule. Water treatment should follow measured hardness.' },
    { question: 'Is $2,950 a permanent price?', answer: 'No. It is the Seattle Coffee Gear display checked September 24, 2026. Stock, shipping, warranty plan, trim, water configuration and promotions can change. Confirm the complete delivered version and total.' },
  ],
  finalTitle: 'Buy the Musica for steam rhythm, not for modern controls',
  finalVerdict: [
    'The reservoir Musica still has a coherent job: it combines a 2 L HX, 58 mm manual espresso, electronic pre-infusion, programmable volumetric stopping and fast lever-controlled steam in a single 32 cm-wide machine.',
    'Its age is also visible. There is no user-facing brew PID or shot timer, official tank-capacity records conflict, and the $2,950 price overlaps machines with more direct temperature control. Exact voltage, water source, trim and warranty must be confirmed before payment.',
    'Choose it when milk service is frequent, manual technique is welcome and local Nuova Simonelli support is strong. Choose Oscar II to spend less, Mara X for a home-focused HX routine, or Elizabeth when PID dual-boiler control matters more than Musica steam identity.',
  ],
  video: {
    id: 'iOMgcvGHm1s',
    title: 'Nuova Simonelli Musica Crew Review',
    creator: 'Seattle Coffee Gear',
    published: '2015-07-06',
    note: 'Independent exact-model visual review linked from Seattle Coffee Gear\'s dated Crew Review. It demonstrates controls, espresso and steam workflow under that reviewer\'s conditions; it is not Coffeedant testing or durability evidence.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-3">[source]</a> <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-5">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-1">[source]</a> <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-7">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-8">[source]</a> <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-9">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-3">[source]</a> <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-7">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-1">[source]</a> <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-14">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-1">[source]</a> <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-4">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-6">[source]</a> <a href="#nuova-simonelli-musica-reservoir-standard-us-110v-source-13">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="musica-owner-title"><h3 id="musica-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Steam power is the recurring attraction</strong><p>Owners and prospective buyers repeatedly identify fast manual milk work as the reason to consider Nuova Simonelli\'s compact HX machines. That preference does not quantify steam rate or guarantee the same result with another milk, tip or boiler setting.</p></li>
    <li><strong>Water history matters on used machines</strong><p>One former two-year owner praised espresso and milk performance while telling a used buyer to ask which water was used. That is a sensible inspection question, not proof of a particular failure probability.</p></li>
    <li><strong>The platform divides home enthusiasts</strong><p>Current discussion treats the mature HX design as robust and milk-capable while noting that many current home buyers prefer PID dual boilers. That explains fit better than it predicts ownership outcomes.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeNuovaSimonelliMusicaReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
