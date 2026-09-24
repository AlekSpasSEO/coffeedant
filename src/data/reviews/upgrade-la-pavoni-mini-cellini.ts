import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.lapavoni.com/en/products/domestic-machines/mini-cellini';
const productSheet = 'https://pi-exchange.smeg.it/catalog/LPSMCS01EU/en-TT';
const manual = 'https://www.lapavoni.com/media/usermanual/110';
const parts = 'https://www.lapavoni.com/media/spareparts/110';
const livingetc = 'https://www.livingetc.com/reviews/la-pavoni-mini-cellini-espresso-machine-review';
const coffeeness = 'https://www.coffeeness.de/en/la-pavoni-mini-cellini-review/';
const rangeGuide = 'https://www.coffeeitalia.co.uk/la-pavoni-cellini-guide-to-the-main-models/';
const film = 'https://www.youtube.com/watch?v=XH5sQfqhdIU';
const hero = 'https://assets.4flow.cloud/WEB_LPSMCS01EU.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVMnBtZS9pcFR0S3NESjBmNnc2NVBBL2tiL1l0NnVvN2I4UVJMR2dpc1NMc0hGUEpsV0xxK1RtREFUUlNtY3dvMHlSREFMTm5zdjBqZ2MwN0tZd2p6THBnQjBhYnp6WW43YWlSZFNoaitvbnF6amJBNGdSWEtOQjh4NCs3aWNDRU11L3Z6em5ualROUmtEN2lqejhqRVNZPQ';

const profile: UpgradeReviewProfile = {
  key: 'la-pavoni-mini-cellini', slug: '/espresso-machine/la-pavoni-mini-cellini/', productId: 'CD-EM-000198',
  brand: 'La Pavoni', model: 'Mini Cellini', sku: 'EU LPSMCS01EU, stainless steel, Schuko plug', category: 'Semi-professional single-boiler espresso machine', brandPath: '/la-pavoni/',
  title: 'La Pavoni Mini Cellini review: compact E61, single-boiler limits',
  description: 'Exact EU LPSMCS01EU review: 0.8 L stainless single boiler, E61 group, 58 mm holder, 2.9 L tank, current price, independent evaluation and owner context.',
  verdictLabel: 'A narrow E61 machine for espresso-first buyers who accept boiler-mode switching and analog temperature control',
  verdict: 'Consider the current EU Mini Cellini LPSMCS01EU if you want a narrow stainless machine with a full chromed-brass E61 group, 58 mm holder, 0.8 L stainless single boiler, 2.9 L removable tank and manual steam. It cannot brew and steam together, and it omits a PID, shot timer and pump-pressure gauge. La Pavoni listed it at €1,247 on September 24, 2026, before a grinder, scale, water treatment and upgraded tamper.',
  assessment: 'This is research-led, not a Coffeedant bench test. Exact identity and specifications come from current LPSMCS01EU records. Livingetc reports a short evaluation of a black regional variant; other records explain workflow. Coffeedant did not measure temperature, puck pressure, warm-up, steaming speed, sound or reliability.',
  image: hero, imageAlt: 'La Pavoni official three-quarter image of the stainless Mini Cellini with E61 group, boiler gauge and steam wand',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Official EU price', msrp: '€1,247', typical: 'La Pavoni listed stainless EU LPSMCS01EU at €1,247 on September 24, 2026. Livingetc cited roughly £1,000 for the black machine evaluated in the United Kingdom, while Australian and North American listings use different plugs, voltage, distribution and warranty terms.', currency: 'EUR', numeric: '1247', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact La Pavoni EU specification', href: official, note: 'Exact LPSMCS01EU identity, live price, architecture, materials and included accessories', primary: true },
    { label: 'Read the independent in-store evaluation', href: livingetc, note: 'Livingetc evaluation published January 25, 2026; black regional variant and short session' },
  ],
  facts: [
    { label: 'Exact market', value: 'EU LPSMCS01EU, stainless steel, 220-240 V, 50/60 Hz, 1400 W and type F/E Schuko plug' },
    { label: 'Boiler and group', value: '0.8 L stainless single boiler without heat exchanger; chromed-brass E61 group and 58 mm internal holder diameter' },
    { label: 'Pump and gauge', value: 'Vibration pump with 15-bar component rating; one boiler manometer and no documented factory brew-pressure gauge' },
    { label: 'Water path', value: '2.9 L removable tank with empty alarm and no direct water connection' },
    { label: 'Milk and water', value: 'Cool-touch stainless steam and hot-water wand; coffee, steam and hot-water functions share one boiler' },
    { label: 'Size and mass', value: '240 × 420 × 370 mm and 18 kg in the September 15, 2026 official product sheet' },
    { label: 'Included coffee kit', value: 'Double-spout holder, single, double and blind filters, brush, ABS tamper and coffee scoop' },
  ],
  quickAnswers: [
    { question: 'Is this the current EU Mini Cellini?', answer: 'Yes. This review covers stainless LPSMCS01EU. Black LPSMCB01, white LPSMCW01, non-EU electrical versions, Mini Cellini X and larger Cellini machines are separate identities.' },
    { question: 'Can it brew and steam at the same time?', answer: 'No. The 0.8 L single boiler has no heat exchanger, so it must change from brew duty to steam duty and return to brew temperature afterward.' },
    { question: 'Does it have a PID?', answer: 'No. The current exact sheet lists a boiler manometer and temperature light, not a PID, adjustable brew-temperature display or shot timer.' },
    { question: 'Is the gauge showing brew pressure?', answer: 'No. La Pavoni identifies it as a boiler manometer. The 15-bar specification is the pump component rating, not pressure measured at the coffee puck.' },
    { question: 'Is the portafilter 58 mm?', answer: 'Yes. The exact official page and sheet specify a 58 mm internal filter-holder diameter and chromed-brass E61 group.' },
    { question: 'How quickly is it ready?', answer: 'La Pavoni calls the machine quick to heat but publishes no full E61 heat-soak time. A secondary preview suggests about 25 minutes; treat that as guidance, not a controlled exact-model result.' },
  ],
  bestFor: ['Espresso-first households that want a narrow E61 machine and standard 58 mm tools', 'Buyers comfortable weighing shots, timing externally and learning an analog heat routine', 'One- or two-drink sessions where sequential milk steaming is acceptable'],
  avoidIf: ['You regularly need several milk drinks or simultaneous brewing and steaming', 'You want PID setpoints, a built-in shot timer or live pump-pressure feedback', 'You need fast cold-start service, direct plumbing or an integrated grinder'],
  pros: ['Current exact EU documentation and model-specific parts drawing', 'Chromed-brass E61 group and broad 58 mm accessory ecosystem', 'Narrow 240 mm stainless chassis with a 2.9 L removable tank', 'Cool-touch wand plus separate steam and hot-water functions', 'Tank-empty alarm, passive cup warmer and blind filter in the box'],
  cons: ['Single boiler requires brew-to-steam mode switching', 'No PID, shot timer or documented brew-pressure gauge', 'E61 thermal mass still needs meaningful heat soak despite the small boiler', 'ABS tamper and no grinder add to the usable station cost', 'Reservoir only, with no direct-water connection'],
  architecture: 'a current European tank-fed machine built around a 0.8 L stainless single boiler without a heat exchanger, chromed-brass E61 group, 58 mm holder, vibration pump, 2.9 L removable reservoir, boiler manometer, passive cup warmer, tank-empty alarm and one cool-touch wand serving steam and hot-water functions',
  identityBoundary: 'This page covers stainless EU LPSMCS01EU. Matte-black LPSMCB01 and white LPSMCW01 are finish variants but still require exact regional checks. US, UK and Australian versions use different electrical articles. Mini Cellini X LPSMXS02EU is a separate newer product. Cellini Classic adds a 1.8 L copper heat exchanger, while Evoluzione models can change pump and plumbing. None is treated as the reviewed machine.',
  primaryStrength: 'A full E61 group and 58 mm workflow fit a narrow stainless body with a large removable tank.',
  primaryLimit: 'The single boiler, absent PID and heavy E61 group demand patience before brewing and a deliberate temperature reset after steaming.',
  setupNote: 'Confirm LPSMCS01EU on the rating plate and a 220-240 V Schuko supply. Allow room behind the 420 mm cabinet and above the top-access reservoir. Rinse and seat the tank, warm with the clean holder installed and inspect the wand, gasket and tray. Never run the element without water.',
  espressoNote: 'The brass E61 adds thermal mass and manual lever activation, not digital temperature control. Warm the group and holder consistently, then weigh dose and yield with an external scale and timer. The 15-bar pump label is not pressure at the puck, and the boiler gauge is not a shot gauge.',
  milkNote: 'Steam comes from the brewing boiler, so enter steam mode only after espresso and return it safely afterward. Livingetc found the wand capable during a short in-store session but published no pitcher time. Purge condensation, texture, close the valve before removing the tip, then wipe and purge.',
  workflowNote: 'Warm the E61 group, grind separately, prepare the 58 mm basket, lift the lever to start and lower it to stop. For milk, switch to steam, wait, purge, texture, then cool and refill the boiler path before another espresso. The machine does not automate dose, time, temperature or recovery.',
  buildNote: 'La Pavoni specifies stainless bodywork and boiler, a chromed-brass E61 group and cool-touch wand. The exploded drawing supports parts identification but does not establish lifespan or failure rate. Safe water and qualified boiler service still matter.',
  featuresNote: 'Equipment includes the E61 group, 58 mm holder, boiler gauge, temperature light, removable tank, empty alarm, passive warmer, steam, hot water and blind basket. La Pavoni’s compatible flow-profile kit is optional, not included. There is no PID, timer, volumetric dosing, pump gauge, plumbing, grinder or automatic milk.',
  valueNote: 'At €1,247, the Mini Cellini asks buyers to value compact E61 hardware over feature count. Profitec Go adds PID feedback; Cellini Classic adds HX service. Add a grinder, scale, proper tamper, safe water and local service before comparing total cost.',
  ownerPattern: 'Discussions compare the Mini Cellini with PID single boilers, ask whether its lever controls pressure and confuse the boiler gauge with group pressure. Owners frame the single boiler as the main milk-workflow constraint while crediting learned espresso routines.',
  ownerCaution: 'Posts mix Mini, Mini X, finishes, voltages, modifications and older Cellini machines. They rarely document grinder, basket, water or service history. Use them for questions about mode switching and gauges, not reliability rates or recipes.',
  maintenanceNote: 'Flush loose grounds, rinse the holder and basket, wipe the gasket, empty the tray and purge the wand. Backflush with the blind filter on a use-based schedule. Use stainless-boiler-safe water and qualified service for pump, electrical or safety work.',
  dimensions: {
    espresso: { score: 8.3, claim: 'A fully warmed E61 group and 58 mm workflow support capable manual espresso.', consequence: 'Consistency depends on grinder, puck preparation, thermal routine and manual stopping.', status: 'Exact architecture plus short independent evaluation', signals: ['Chromed-brass E61 group.', '58 mm holder and manual lever.', 'No controlled temperature or puck-pressure dataset.'] },
    milk: { score: 7.2, claim: 'The cool-touch wand can texture milk for a small home session.', consequence: 'The single boiler forces a separate steam phase and recovery before more espresso.', status: 'Exact hardware plus qualitative independent account', signals: ['0.8 L shared boiler.', 'Steam mode and adjustable valve.', 'No measured pitcher time or recovery.'] },
    workflow: { score: 7.0, claim: 'Simple switches and a removable tank make the analog routine legible.', consequence: 'Heat soak, external timing and boiler-mode transitions slow mixed-drink service.', status: 'Official manual and owner context', signals: ['2.9 L removable tank with alarm.', 'Manual lever and boiler gauge.', 'No PID, timer or automatic mode reset.'] },
    build: { score: 8.5, claim: 'Stainless steel and a brass E61 group create substantial traditional hardware.', consequence: 'Materials alone do not prove longevity, and scale control remains essential.', status: 'Official materials; no durability sample', signals: ['Stainless boiler and body.', 'Chromed-brass E61 group.', 'Exact parts drawing.'] },
    features: { score: 7.0, claim: 'It covers the core analog espresso and steam functions in a narrow body.', consequence: 'Feedback and automation are sparse at this price.', status: 'Exact September 2026 product sheet', signals: ['Steam, hot water, tank alarm and passive warmer.', 'Optional flow-profile kit compatibility.', 'No PID, timer, pump gauge or volumetrics.'] },
    value: { score: 7.2, claim: 'The price buys compact E61 construction rather than convenience technology.', consequence: 'PID singles and entry HX rivals may be better fits at similar station cost.', status: 'Official price checked September 24, 2026', signals: ['€1,247 exact EU list price.', 'Grinder and better tamper cost extra.', 'Current documentation and parts record.'] },
  },
  sources: [
    { label: 'La Pavoni exact Mini Cellini product page', href: official, note: 'Current EU identity, price, materials, architecture, electrical data and package; checked September 24, 2026.' },
    { label: 'La Pavoni LPSMCS01EU product sheet', href: productSheet, note: 'Official sheet generated September 15, 2026 with dimensions, mass, power and accessories.' },
    { label: 'La Pavoni Mini Cellini manual record', href: manual, note: 'Official setup, brewing, steam, cleaning and safety instructions for the documented family.' },
    { label: 'La Pavoni Mini Cellini spare-parts drawing', href: parts, note: 'Official exploded drawing for service identification, not a local-stock promise.' },
    { label: 'Livingetc Mini Cellini review', href: livingetc, note: 'Short in-store evaluation by Olivia Wolfe, published January 25, 2026; black regional variant and roughly eight shots.' },
    { label: 'Coffeeness initial Mini Cellini review', href: coffeeness, note: 'June 25, 2025 secondary preview that explicitly says the machine had not yet been tested; useful only for comparison context.' },
    { label: 'Coffee Italia Cellini range guide', href: rangeGuide, note: 'January 24, 2025 retailer comparison separating the Mini single boiler from the Classic heat exchanger.' },
    { label: 'Alternative Brewing Mini Cellini video', href: film, note: 'Retailer-produced independent-from-manufacturer demonstration published August 9, 2025.' },
    { label: 'Reddit Mini Cellini versus Profitec Go discussion', href: 'https://www.reddit.com/r/espresso/comments/1gr61q2/should_i_get_a_la_pavoni_mini_cellini_or_profitec/', note: 'Self-selected buyer discussion showing recurring PID, E61 and lever confusion; not a controlled comparison.' },
    { label: 'Reddit Mini Cellini gauge discussion', href: 'https://www.reddit.com/r/LaPavoniLovers/comments/1nclyry/group_head_pressure_gauge_for_la_pavoni_cellini/', note: 'Self-selected modification question illustrating the difference between the stock boiler gauge and optional group feedback.' },
  ],
  comparisons: [
    { name: 'La Pavoni Mini Cellini', quickDecision: 'Choose for a narrow analog E61 and accept single-boiler sequencing.', priceClass: '€1,247 official EU Sep 24', dimensions: '240 × 420 × 370 mm; 18 kg', heating: '0.8 L stainless single boiler; E61', coffeeSetup: '58 mm manual lever; grinder separate', milkWorkflow: 'Manual steam after brewing', bestFor: 'Espresso-first E61 ritual' },
    { name: 'Profitec Go', href: '/espresso-machine/profitec-go/', quickDecision: 'Compare for PID control and a shot timer in a compact single-boiler format without E61 thermal mass.', priceClass: 'Similar specialist single-boiler class', dimensions: 'Compact ring-group chassis', heating: 'PID single boiler', coffeeSetup: '58 mm manual pump machine', milkWorkflow: 'Sequential manual steam', bestFor: 'Faster, more explicit temperature control' },
    { name: 'ECM Casa V', href: '/espresso-machine/ecm-casa-v/', quickDecision: 'Compare for a compact traditional single boiler with simpler group warm-up.', priceClass: 'Specialist compact class', dimensions: 'Narrow upright chassis', heating: 'Single boiler; ring group', coffeeSetup: '58 mm manual pump machine', milkWorkflow: 'Sequential manual steam', bestFor: 'Compact traditional simplicity' },
    { name: 'La Pavoni Cellini Classic', href: '/espresso-machine/la-pavoni-cellini-classic/', quickDecision: 'Spend more and accept a wider body for a 1.8 L copper heat exchanger and simultaneous steam.', priceClass: '€1,559 official EU Sep 24', dimensions: '295 × 430 × 370 mm; 23 kg', heating: '1.8 L copper HX; E61', coffeeSetup: '58 mm manual lever', milkWorkflow: 'Simultaneous manual steam', bestFor: 'More frequent milk drinks' },
  ],
  comparisonNote: 'Compare exact regional code, boiler architecture, group design, temperature control, warm-up, brew-to-steam delay, gauges, water feed, included tools, dealer setup, warranty and full grinder-and-water cost. A shared 58 mm holder or E61 silhouette does not make workflows equivalent.',
  recommendations: [
    { kicker: 'PID single boiler', title: 'Profitec Go', text: 'Choose explicit temperature control and faster group readiness when E61 ritual is not essential.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read Profitec Go review', featured: true },
    { kicker: 'Compact traditional rival', title: 'ECM Casa V', text: 'Compare footprint, warm-up, pressure feedback, dealer support and current regional price.', href: '/espresso-machine/ecm-casa-v/', linkLabel: 'Read Casa V review' },
    { kicker: 'Smaller-budget single boiler', title: 'Lelit Anna', text: 'Compare PID availability and station cost while accepting a different accessory ecosystem.', href: '/espresso-machine/lelit-anna/', linkLabel: 'Read Lelit Anna review' },
    { kicker: 'Milk-focused step up', title: 'La Pavoni Cellini Classic', text: 'Move to the 1.8 L HX when simultaneous brewing and steaming justifies the added size and price.', href: '/espresso-machine/la-pavoni-cellini-classic/', linkLabel: 'Read Cellini Classic review' },
  ],
  faqs: [
    { question: 'Is the La Pavoni Mini Cellini a heat-exchanger machine?', answer: 'No. The current LPSMCS01EU has a 0.8 L single boiler and La Pavoni marks heat-exchanger type as unavailable. It cannot brew and steam simultaneously.' },
    { question: 'Does the Mini Cellini have a PID or shot timer?', answer: 'No. It has a temperature light and boiler manometer but no digital brew-temperature setpoint or built-in extraction timer.' },
    { question: 'What does the pressure gauge measure?', answer: 'La Pavoni specifies a boiler manometer. It is not a factory group or puck-pressure gauge, and the 15-bar pump rating is not extraction pressure.' },
    { question: 'How long does the Mini Cellini need to warm up?', answer: 'La Pavoni gives no complete E61 heat-soak time. Secondary guidance suggests roughly 25 minutes, but no controlled exact-model timing was found.' },
    { question: 'Can the Mini Cellini connect to a water line?', answer: 'No. LPSMCS01EU uses a removable 2.9 L tank and La Pavoni marks a water-supply connection as unavailable.' },
    { question: 'What size accessories fit?', answer: 'The exact sheet specifies a 58 mm internal holder diameter. Confirm third-party portafilter ears and basket fit before ordering.' },
    { question: 'Is the flow-profile kit included?', answer: 'No. La Pavoni lists LPAFLOWM01 as a compatible optional accessory. This review does not assume it is installed or tested.' },
  ],
  finalTitle: 'A compact E61 with a very specific espresso-first trade-off',
  finalVerdict: [
    'The current EU Mini Cellini is clearly documented: 0.8 L stainless single boiler, chromed-brass E61 group, 58 mm holder, vibration pump, 2.9 L tank, boiler gauge, cool-touch wand and an 18 kg body only 240 mm wide. It brings traditional hardware to a small counter without pretending to be an HX machine.',
    'Buy it when the E61 lever, 58 mm ecosystem and analog routine are the appeal. If you want explicit temperature control, rapid cold-start service or frequent milk drinks, compare PID single boilers and the Cellini Classic before paying the €1,247 official EU price.',
  ],
  video: { id: 'XH5sQfqhdIU', title: 'La Pavoni Cellini Mini Espresso Machine: E61 on a Budget', creator: 'Alternative Brewing', published: '2025-08-09', note: 'Retailer-produced exact-model demonstration independent of La Pavoni. It is commercially connected to sales, so current LPSMCS01EU documents govern exact EU identity and specifications.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="mini-cellini-owner-title"><h3 id="mini-cellini-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>The lever is an on-off control</strong><p>Buyer questions often assume manual pressure profiling. On the stock machine, the E61 lever starts and stops the pump; it is not a direct piston lever.</p></li>
    <li><strong>The stock gauge is for the boiler</strong><p>An owner asking about adding group feedback illustrates the limitation. The factory manometer is not a live puck-pressure display.</p></li>
    <li><strong>Milk frequency decides the fit</strong><p>Occasional milk drinks can fit a sequence, but repeated mixed service favours an HX or dual boiler.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLaPavoniMiniCelliniReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
