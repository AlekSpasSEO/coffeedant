import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.quick-mill.com/products/orione/';
const crema = 'https://www.cremashop.eu/en/products/quick-mill/orione-espresso-machine';
const cremaOutlet = 'https://www.cremashop.eu/en/outlet/quick-mill/orione';
const naturBohne = 'https://naturbohne.de/en/products/quick-mill-03000-orione';
const kaffeemacher = 'https://kaffeemacher.de/en/blogs/kaffeewissen/quickmill-orione-3000';
const coffeeness = 'https://www.coffeeness.de/quickmill-orione-test/';
const longTermVideo = 'https://www.youtube.com/watch?v=eizVTdq3E8k';
const ownerReview = 'https://www.kaffee-netz.de/threads/erfahrungsbericht-quickmill-orione-3000.129354/';
const temperatureOwners = 'https://www.kaffee-netz.de/threads/quickmill-3000-bruehtemperatur.73519/';
const modifiedOwner = 'https://www.reddit.com/r/espresso/comments/1nylw8a/quick_mill_3000_orione_pid_tweaked_to_perfection/';
const manual = 'https://www.manua.ls/quickmill/3000/manual';
const galaxus = 'https://www.galaxus.at/en/s2/product/ratings/quick-mill-orione-3000-espresso-machines-7727532';
const cassiopea = 'https://www.quick-mill.com/products/cassiopea/';
const image = 'https://www.quick-mill.com/wp-content/uploads/2025/08/1-1.png';

const profile: UpgradeReviewProfile = {
  key: 'quick-mill-orione-3000-eu',
  slug: '/espresso-machine/quick-mill-orione-3000/',
  productId: 'CD-EM-000229',
  brand: 'Quick Mill',
  model: 'Orione 03000',
  sku: '03000 European 230 V current thermoblock configuration',
  category: 'Single-thermoblock semi-automatic espresso machine',
  brandPath: '/quick-mill/',
  title: 'Quick Mill Orione 3000 review: current price, temperature limits and milk workflow',
  description: 'Research-led Quick Mill Orione 3000 review covering the current 03000 EU identity, thermoblock workflow, temperature control, steam limits, price and owner evidence.',
  verdictLabel: 'A compact, durable manual machine for patient espresso drinkers, not temperature control or frequent milk service',
  verdict: 'Orione 03000 combines a stainless body, 58 mm portafilter, side-access 1.8 L tank, pressure gauge and compact thermoblock in an unusually simple manual machine. It heats water quickly, but the stock machine has no PID and independent testing found that repeatable brewing depends on a learned heating-and-flush routine. The steam wand can make occasional milk drinks, yet a single thermoblock serves brewing and steaming sequentially. Crema displayed €759 including VAT with zero stock and unconfirmed availability on September 24, 2026. Buy it for compact simplicity and straight espresso, not for adjustable temperature, automated dosing or fast milk-drink batches.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Scores cover the current European 230 V Orione 03000 represented by Quick Mill and EAN 8007062300033. Older 3000 machines, 120 V examples, regional packages, thermostat revisions and owner-installed PID or pressure modifications remain separate configurations.',
  image,
  imageAlt: 'Quick Mill official three-quarter view of the current Orione compact stainless thermoblock espresso machine',
  published: '2026-07-28',
  updated: '2026-09-24',
  price: { label: 'Current EU reference price', msrp: '€759', typical: 'Crema displayed €759 including VAT, zero stock and unconfirmed availability on September 24, 2026. Its outlet card showed €739 but did not establish ordinary new-stock availability. Regional voltage, plug, tax, delivery, warranty and stock must be checked before purchase.', currency: 'EUR', numeric: '759', checked: 'September 24, 2026' },
  links: [
    { label: 'Check Crema price and availability', href: crema, note: '€759 VAT-inclusive reference, zero stock, unconfirmed availability, EAN and EU specification checked September 24, 2026', primary: true },
    { label: 'Read the official Orione specification', href: official, note: 'Current manufacturer identity, thermoblock, tank, controls, dimensions, power, voltage and warranty guidance' },
  ],
  facts: [
    { label: 'Scored model', value: 'Quick Mill Orione 03000, EAN 8007062300033, current European 230 V configuration' },
    { label: 'Heating', value: 'One die-cast aluminum thermoblock with copper heating coil; thermostat controlled and no stock PID' },
    { label: 'Coffee setup', value: 'Quick Mill O-ring brew group, seller-listed 58 mm portafilter, manual lever switches and 0-16 bar gauge' },
    { label: 'Milk system', value: 'Manual steam wand with aerator; brewing and steaming are sequential on one thermoblock' },
    { label: 'Water and pump', value: 'Official 1.8 L side-access tank and vibration pump; no fixed-water connection documented' },
    { label: 'Fit', value: 'Official 247 W × 330 D × 375 H mm and 8.8 kg; retailer dimensions conflict' },
    { label: 'Current status', value: '€759 with zero stock and unconfirmed availability at Crema on September 24, 2026' },
  ],
  quickAnswers: [
    { question: 'Does Orione 3000 have PID temperature control?', answer: 'No. The current official page explicitly lists PID as absent. Coffee and steam thermostats govern the stock thermoblock, so temperature selection is not user adjustable.' },
    { question: 'Is Orione fast to heat?', answer: 'The thermoblock can heat water quickly, but the portafilter, group and cup still need thermal preparation. Independent and owner evidence shows that a useful routine is longer than the first heating light.' },
    { question: 'Can it steam milk?', answer: 'Yes, through a manual wand with aerator. It brews and steams sequentially, and independent evaluation found the stock steaming slow and easier to overwhelm than stronger boiler systems.' },
    { question: 'Is it the same as every Quick Mill 3000?', answer: 'No. Orione has existed for years across voltage, thermostat, shower-plate and modified configurations. The score is for the current 03000 EU identity, not every historical machine.' },
    { question: 'Does it include pre-infusion or an OPV?', answer: 'The current manufacturer page does not document programmable pre-infusion or an adjustable over-pressure valve. Seller and modified-owner claims are not assigned to the stock scored machine.' },
    { question: 'Who should consider it?', answer: 'A one- or two-person household that mostly drinks espresso, accepts a thermostat routine and values a compact stainless machine with simple manual controls.' },
  ],
  bestFor: ['Straight-espresso drinkers who want a compact stainless machine with simple manual switches', 'One- or two-person households that can learn a repeatable thermostat and flush routine', 'Buyers who value a side-access tank, 58 mm tool ecosystem and low interface complexity'],
  avoidIf: ['You want adjustable brew temperature, a PID display or automated shot stopping', 'You make several milk drinks consecutively or need strong steam with no waiting', 'You expect every historical Orione 3000 specification or owner modification to match a current unit'],
  pros: ['Compact 247 mm official width and side-access reservoir suit constrained counters', 'Stainless body, simple switches and few electronic features keep the interface direct', '58 mm seller-listed portafilter and pressure gauge support conventional manual espresso practice', 'Independent long-term evidence documents both the machine\'s strengths and its thermal and steam limitations'],
  cons: ['No PID or user temperature setting; repeatability depends on thermostat state and routine', 'Single thermoblock means sequential brewing and steaming, with modest milk capacity', 'Current €759 reference was out of stock with unconfirmed availability', 'Long production history creates conflicting tank, dimension, weight and feature claims'],
  architecture: 'a reservoir-fed semi-automatic with one die-cast aluminum thermoblock containing a copper heating coil longer than 0.5 meter, separate coffee and steam thermostats, safety thermal fuse, Quick Mill O-ring brew group, seller-listed 58 mm portafilter, vibration pump, 0-16 bar gauge, lever switches, power and heating lights, manual steam wand with aerator and 1.8 L side-access tank',
  identityBoundary: 'The Product schema and scores refer to the current European Orione 03000, 230 V, EAN 8007062300033 as represented by Quick Mill and Crema. Historical 3000 machines, the 120 V version, seller-specific dimensions, older shower plates, reported thermostat changes, portafilter variants, owner-installed PID or OPV hardware and other modifications are not silently combined.',
  primaryStrength: 'It packages manual espresso, a pressure gauge and occasional steam into a compact stainless body with very little interface overhead.',
  primaryLimit: 'The stock thermostat-controlled single thermoblock offers neither adjustable brew temperature nor strong consecutive milk-drink capacity.',
  setupNote: 'Confirm model 03000, EAN, voltage, plug, rating plate, retailer authorization and included baskets before use. Inspect the side tank, drip tray, portafilter, group seal, shower plate, gauge, switches, wand and cord. Follow the delivered manual for first fill and priming. A thermoblock may make hot water quickly, but the group, metal portafilter and cup still need deliberate thermal preparation. Use a stable counter and leave side clearance for the 1.8 L tank.',
  espressoNote: 'Orione gives the user a conventional 58 mm workflow and a pressure gauge but no brew-temperature setting. Independent testing found that normal thermostat behavior could produce inconsistent thermal states and that a learned flush routine was necessary for repeatability. The gauge does not measure flow or beverage yield, and a pump-pressure number is not a recipe. Grind, dose, distribution, tamp, basket, roast, warm state and a scale still determine the shot. Coffeedant did not taste coffee or measure temperature, pressure, flow, noise, warm-up or extraction.',
  milkNote: 'The manual wand and aerator make milk drinks possible, not effortless. One thermoblock changes from coffee to steam conditions and back, so brewing and milk texturing are sequential. Kaffeemacher reported more than a minute for a one-cappuccino milk quantity and steam that could weaken during use on its tested machine. Scale or service condition can also change steam behavior. That single test does not establish every unit, but frequent cappuccino buyers should compare a stronger steam system.',
  workflowNote: 'A practical session starts with fresh tank water and enough time for the portafilter and group to warm, not merely the first lamp cycle. Prepare and weigh the basket, watch thermostat state, use the chosen flush routine consistently, start the manual pump switch, observe yield and stop manually. For milk, switch to steam, wait for readiness, purge, texture a small quantity, wipe and purge the wand, then return the system toward brew temperature. There is no volumetric stop, timer, PID, grinder or app.',
  buildNote: 'Quick Mill specifies full stainless bodywork, an O-ring-sealed brew group, aluminum thermoblock with copper coil, vibration pump, two operating thermostats and a thermal fuse. The side tank is convenient under cabinets. Simple construction may help diagnosis, but the machine still combines hot water, mains electricity, seals, valves and aluminum. Owner longevity anecdotes are useful inspection context, not a failure-rate estimate or promise for a new unit.',
  featuresNote: 'The useful stock equipment is basic: pressure gauge, two lever switches, power and heating lamps, side reservoir, manual steam wand and 58 mm seller-listed portafilter. The current manufacturer page says no PID. It does not document programmable pre-infusion, volumetric dosing, shot timer, adjustable temperature, direct plumbing, rotary pump, automatic milk, grinder or connectivity. A recent owner-installed PID and OPV configuration is a modified machine, not an included feature.',
  valueNote: 'At a €759 reference with no confirmed stock, Orione competes on compact metal construction and simplicity rather than electronic control. Compare a Gaggia Classic Evo Pro for a boiler-based mod ecosystem, Lelit Victoria for PID and electronic assistance, DeLonghi Dedica for lower-cost compact convenience, and Quick Mill Pippa for a boiler-based step within the brand. Budget for an espresso-capable grinder, scale, tamper fit, water management, cleaning, tax and service.',
  ownerPattern: 'Owner discussions repeatedly praise fast water heating, compactness, simple cleaning and strong straight-espresso fit. Recurring cautions concern the time needed to warm the metal path, flush timing, lack of adjustable temperature, modest steam, light chassis, basket fit and sensitivity to grinder and puck preparation. Some long-term owners report years of service and replacement parts; those self-selected stories show service questions to ask, not population reliability.',
  ownerCaution: 'Community evidence spans more than a decade of Orione and related Quick Mill 3000 production, multiple voltages, thermostats, shower plates, water practices and modifications. Cup-temperature measurements are not brew-path measurements, and one ten-year machine cannot establish a ten-year expected life. Match rating plate, photos, internal configuration and service history before transferring an anecdote.',
  maintenanceNote: 'After use, flush the group briefly, remove coffee from the basket and shower area, wipe and purge the steam wand, empty the tray and keep the side tank fresh. Follow the delivered manual and qualified service guidance for cleaning and descaling; do not infer that a thermoblock never needs scale management. Test water rather than guessing. Changes in heat cycling, flow, pressure, leaks, steam or electrical behavior deserve diagnosis. Thermostat, thermal fuse, pump, thermoblock and mains work belongs with a competent technician.',
  dimensions: {
    espresso: { score: 7.0, claim: 'A 58 mm seller-listed portafilter, pressure gauge and compact thermoblock can support capable manual espresso.', consequence: 'No PID means the user must learn and repeat the machine\'s thermostat and flush routine.', status: 'Current architecture plus independent and owner evidence; no Coffeedant testing', signals: ['58 mm seller-listed portafilter.', '0-16 bar pressure gauge.', 'No user temperature setting.'] },
    milk: { score: 5.6, claim: 'A manual wand can texture a small milk portion after switching the thermoblock into steam conditions.', consequence: 'Steam is sequential and independent testing found a slow, potentially fading workflow.', status: 'Current official wand plus bounded independent evaluation', signals: ['Manual aerator wand.', 'One thermoblock for brew and steam.', 'Best for occasional small milk drinks.'] },
    workflow: { score: 7.6, claim: 'Lever switches and a side tank keep daily operation direct and physically accessible.', consequence: 'Temperature surfing, manual shot stopping and brew-to-steam transitions demand attention.', status: 'Official controls plus owner workflow themes', signals: ['Simple lever switches.', 'Side-access 1.8 L tank.', 'No timer or volumetric stop.'] },
    build: { score: 8.0, claim: 'Stainless bodywork and a simple serviceable architecture are credible ownership strengths.', consequence: 'Aluminum thermoblock, seals, thermostat and pump still depend on suitable water and qualified service.', status: 'Manufacturer construction record plus owner service context; no teardown', signals: ['Full stainless body.', 'Copper coil in aluminum thermoblock.', 'Thermal fuse and dual thermostats.'] },
    features: { score: 5.8, claim: 'Gauge, steam wand and side tank cover the essential manual brief.', consequence: 'PID, temperature choice, dosing automation, timer, plumbing and connectivity are absent.', status: 'Current stock configuration separated from seller claims and modifications', signals: ['Pressure gauge.', 'Manual steam wand.', 'No PID.'] },
    value: { score: 7.3, claim: 'The €759 reference buys compact stainless construction and a proven simple concept.', consequence: 'Unconfirmed stock and stronger control or steam alternatives make local price and service decisive.', status: 'EU listing checked September 24, 2026', signals: ['€759 current reference.', 'Zero stock and unconfirmed availability.', 'Grinder and maintenance budget still required.'] },
  },
  sources: [
    { label: 'Quick Mill official current Orione page', href: official, note: 'Current identity, beginner positioning, thermoblock, no-PID status, group, wand, pump, safety, gauge, 1.8 L tank, dimensions, weight, power, voltage and official media checked September 24, 2026.' },
    { label: 'Crema current Orione listing', href: crema, note: '€759 VAT-inclusive price, zero stock, unconfirmed availability, product number 13288, EAN 8007062300033, 230 V, 58 mm seller record and specification cross-check on September 24, 2026.' },
    { label: 'Crema Orione outlet listing', href: cremaOutlet, note: '€739 outlet price card checked September 24, 2026. Outlet condition, package and stock are not treated as the normal new-machine reference.' },
    { label: 'NaturBohne Orione 03000 listing', href: naturBohne, note: 'Exact 03000 identity and retailer specification cross-check. Its dimensions, weight, tank and pre-infusion claims conflict with official evidence and remain attributed.' },
    { label: 'Kaffeemacher independent Orione evaluation', href: kaffeemacher, note: 'Independently purchased testing and later flat-share follow-up covering heat routine, temperature behavior, espresso, steam, basket fit and service context. Tested-generation limits remain explicit.' },
    { label: 'Coffeeness independent Orione review', href: coffeeness, note: 'Independent test covering compact fit, fast thermoblock concept, manual controls, steam and one- or two-person use. Its price and specification snapshot remains dated and attributed.' },
    { label: 'Kaffeemacher two-year follow-up video', href: longTermVideo, note: 'Unique independent video published March 18, 2023 after extended flat-share use, covering the exact Orione 3000 concept, temperature routine, steam and service. It is not Coffeedant testing.' },
    { label: 'Kaffee-Netz Orione owner review thread', href: ownerReview, note: 'Self-selected 2020 owner reports covering compactness, straight-espresso fit, cleaning, grinder sensitivity, milk limits, parts and long-term use. No reliability denominator is available.' },
    { label: 'Kaffee-Netz Quick Mill temperature discussion', href: temperatureOwners, note: 'Historical owner discussion about warm-up, blank flushes, thermostat behavior and measurement limits. It does not define a universal recipe or current measured temperature.' },
    { label: 'Reddit modified Orione PID discussion', href: modifiedOwner, note: 'Recent self-selected owner record for an added PID and OPV. It is included only to separate modified from stock equipment.' },
    { label: 'Quick Mill 3000 manual reference', href: manual, note: 'Historical 44-page operating and safety reference. Revision, voltage and delivered-machine applicability must be checked before use.' },
    { label: 'Galaxus Orione owner ratings', href: galaxus, note: 'Retailer-hosted owner context used only for recurring fit and workflow questions; ratings are self-selected and not a controlled test.' },
    { label: 'Quick Mill official Cassiopea page', href: cassiopea, note: 'Current manufacturer comparison for a dual-thermoblock Quick Mill that can brew and steam simultaneously. It does not change Orione specifications.' },
  ],
  comparisons: [
    { name: 'Quick Mill Orione 03000', href: '/espresso-machine/quick-mill-orione-3000/', quickDecision: 'Choose compact stainless simplicity when thermostat-managed espresso and occasional milk fit.', priceClass: '€759 current out-of-stock EU reference', dimensions: '247 W × 330 D × 375 H mm', heating: 'Single thermostat-controlled thermoblock', coffeeSetup: '58 mm seller-listed portafilter and gauge', milkWorkflow: 'Sequential manual steam wand', bestFor: 'Straight espresso with occasional small milk drinks' },
    { name: 'Gaggia Classic Evo Pro', href: '/espresso-machine/gaggia-classic-evo-pro/', quickDecision: 'Choose a boiler platform with a larger modification and parts community.', priceClass: 'Entry manual single-boiler class', dimensions: 'Compact traditional chassis', heating: 'Single boiler', coffeeSetup: '58 mm commercial-style group', milkWorkflow: 'Sequential steam mode', bestFor: 'Tinkerers who want a familiar boiler platform' },
    { name: 'Lelit Victoria', href: '/espresso-machine/lelit-victoria-pl91t/', quickDecision: 'Choose PID control, timer and electronic assistance in a compact single boiler.', priceClass: 'Higher compact PID single-boiler class', dimensions: 'Compact stainless chassis', heating: 'PID single boiler', coffeeSetup: '58 mm group with electronic controls', milkWorkflow: 'Sequential manual steam', bestFor: 'Temperature control and programmable workflow' },
    { name: 'Quick Mill Pippa 4100', href: '/espresso-machine/quick-mill-pippa-4100/', quickDecision: 'Choose a boiler-based Quick Mill step when stronger traditional steam matters more than instant thermoblock speed.', priceClass: 'Compact manual boiler class', dimensions: 'Compact stainless Quick Mill chassis', heating: 'Single boiler', coffeeSetup: '58 mm manual group', milkWorkflow: 'Sequential boiler steam', bestFor: 'Brand continuity with a traditional boiler workflow' },
  ],
  comparisonNote: 'Choose the temperature and milk workflow first. Orione is thermostat-controlled and sequential; Victoria adds PID and electronic help, Classic offers a familiar boiler and modification community, and Pippa changes the Quick Mill proposition to a traditional boiler. Then compare voltage, actual stock, side clearance, warranty, water and local service.',
  recommendations: [
    { kicker: 'PID compact route', title: 'Lelit Victoria', text: 'Choose adjustable temperature, a shot timer and electronic assistance when repeatability matters more than Orione simplicity.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Read Lelit Victoria review', featured: true },
    { kicker: 'Boiler and mod ecosystem', title: 'Gaggia Classic Evo Pro', text: 'Choose a widely understood single-boiler platform when parts, accessories and modification context matter.', href: '/espresso-machine/gaggia-classic-evo-pro/', linkLabel: 'Read Gaggia Classic Evo Pro review' },
    { kicker: 'Same-brand boiler step', title: 'Quick Mill Pippa 4100', text: 'Choose a traditional single boiler when stronger steam potential matters more than a fast compact thermoblock.', href: '/espresso-machine/quick-mill-pippa-4100/', linkLabel: 'Read Quick Mill Pippa review' },
    { kicker: 'Lower-cost compact route', title: 'DeLonghi Dedica', text: 'Choose a narrower, cheaper convenience-first machine when counter width and assisted accessories outrank 58 mm manual tradition.', href: '/espresso-machine/delonghi-dedica/', linkLabel: 'Read DeLonghi Dedica review' },
  ],
  faqs: [
    { question: 'Does Quick Mill Orione 3000 have a PID?', answer: 'No. Quick Mill explicitly lists PID as absent on the current Orione. The stock machine uses coffee and steam thermostats.' },
    { question: 'What is the current Orione price?', answer: 'Crema displayed €759 including VAT on September 24, 2026, but showed zero stock and unconfirmed availability. Its outlet card showed €739.' },
    { question: 'How quickly is Orione ready?', answer: 'The thermoblock heats water quickly, but useful espresso preparation also requires warming the group, portafilter and cup. No single universal ready time is claimed here.' },
    { question: 'Can Orione make cappuccino?', answer: 'Yes, one small drink at a time through the manual steam wand. Brewing and steaming are sequential, and independent testing found steam modest and relatively slow.' },
    { question: 'What size is the current machine?', answer: 'Quick Mill lists 247 mm wide, 330 mm deep, 375 mm high and 8.8 kg. Some retailers publish conflicting dimensions and weight, so official current data governs this review.' },
    { question: 'Does Orione use a 58 mm portafilter?', answer: 'Crema lists a 58 mm portafilter for product number 13288. Confirm delivered baskets and tamper fit because historical and regional packages can differ.' },
    { question: 'Does it have adjustable brew pressure or pre-infusion?', answer: 'The current official page does not document programmable pre-infusion or a user-adjustable OPV. Modified owner machines must not be treated as stock.' },
    { question: 'What water should I use?', answer: 'Use tested water within the delivered manual and qualified local service guidance. A thermoblock is not immune to scale, and unsuitable water can create scale or corrosion risk.' },
  ],
  finalTitle: 'Choose Orione for compact manual simplicity, not invisible automation',
  finalVerdict: [
    'Orione is easy to understand: a stainless body, side tank, conventional portafilter, pressure gauge, manual switches and one compact thermoblock.',
    'Its simplicity transfers responsibility to the user. There is no PID or shot stop, the thermostat routine matters, and modest sequential steam is better suited to occasional milk than repeated cappuccino service.',
    'Buy only after confirming exact 03000 identity, 230 V compatibility, stock, warranty and service. Choose Victoria for temperature control, Classic for a boiler and mod ecosystem, Pippa for a same-brand boiler step, or Dedica for lower-cost compact convenience.',
  ],
  video: { id: 'eizVTdq3E8k', title: 'Quick Mill Orione 3000 - Hat sie 2 Jahre WG-Leben überlebt?', creator: 'Kaffeemacher', published: '2023-03-18', note: 'Unique independent long-term follow-up after extended flat-share use, covering the exact Orione 3000 concept, temperature routine, steam and service context. It is not Coffeedant testing, a current-price source or a reliability-rate study.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#quick-mill-orione-3000-eu-source-11">[source]</a> <a href="#quick-mill-orione-3000-eu-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#quick-mill-orione-3000-eu-source-1">[source]</a> <a href="#quick-mill-orione-3000-eu-source-5">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#quick-mill-orione-3000-eu-source-1">[source]</a> <a href="#quick-mill-orione-3000-eu-source-5">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#quick-mill-orione-3000-eu-source-5">[source]</a> <a href="#quick-mill-orione-3000-eu-source-9">[source]</a></p>`,
  build: `<p>${profile.buildNote} <a href="#quick-mill-orione-3000-eu-source-1">[source]</a> <a href="#quick-mill-orione-3000-eu-source-8">[source]</a></p><p>${profile.maintenanceNote}</p>`,
  features: `<p>${profile.featuresNote} <a href="#quick-mill-orione-3000-eu-source-1">[source]</a> <a href="#quick-mill-orione-3000-eu-source-10">[source]</a></p>`,
  value: `<p>${profile.valueNote} <a href="#quick-mill-orione-3000-eu-source-2">[source]</a> <a href="#quick-mill-orione-3000-eu-source-13">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="quick-mill-orione-owner-title"><h3 id="quick-mill-orione-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Fast water heat is not the whole warm-up</strong><p>Owners distinguish the first thermoblock cycle from warming the portafilter, group and cup. Their routines vary, so consistency matters more than claiming one universal number.</p></li>
    <li><strong>Straight espresso is the strongest fit</strong><p>Long-term owners value the compact body and simple cleaning, while also describing limited adjustment and slower sequential milk work. That pattern helps define buyer fit without proving performance for every unit.</p></li>
    <li><strong>Modified machines are a separate configuration</strong><p>Recent PID and pressure-valve projects show what enthusiasts can change. They do not establish that stock Orione includes those controls, that a modification is safe, or that its recipe transfers to another machine.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeQuickMillOrione3000Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
