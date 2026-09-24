import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.lapavoni.com/en/products/domestic-machines/europiccola-lusso';
const productSheet = 'https://pi-exchange.smeg.it/catalog/LPLELQ01EU/en-TT';
const manual = 'https://www.lapavoni.com/media/usermanual/17';
const parts = 'https://www.lapavoni.com/media/spareparts/17';
const leverGuide = 'https://www.lapavoni.com/en/families/domestic-machines/lever-coffee-machines';
const techRadar = 'https://www.techradar.com/home/coffee-machines/using-la-pavonis-europiccola-lever-espresso-machine-is-a-labor-of-love-but-the-steep-learning-curve-made-me-a-better-at-home-barista';
const coffeeBlog = 'https://coffeeblog.co.uk/la-pavoni-europiccola-espresso-machine/';
const regionalSeller = 'https://www.wholelattelove.com/products/la-pavoni-europiccola-epc-8-espresso-machine';
const film = 'https://www.youtube.com/watch?v=lKimj0vRM5A';
const hero = 'https://assets.4flow.cloud/WEB_LPLELQ01EU.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVOHRrdTBYSFI1WXhVbm4vaTRNdkI4eHIzK01MbjlHdms5dTU3b1I3a3VZZVY1czdCZlAxY0pYYmVHSUx0SThiTll6ZGlDWkd5RDMzaTF6T3cxeEpaY2xBUC9nblhPZjEwK01QcDU0eTQwMGVBYTZRZDNLbUZkaHMrZHlKMU12VUZjVnpoK2s5aEI0RDYvbGxMQnlmUjFNPQ';

const profile: UpgradeReviewProfile = {
  key: 'la-pavoni-europiccola', slug: '/espresso-machine/la-pavoni-europiccola/', productId: 'CD-EM-000197',
  brand: 'La Pavoni', model: 'Europiccola Lusso', sku: 'EU LPLELQ01EU, chrome and black Bakelite, Schuko plug', category: 'Manual direct-lever espresso machine', brandPath: '/la-pavoni/',
  title: 'La Pavoni Europiccola review: rewarding lever control, demanding heat management',
  description: 'Exact EU LPLELQ01EU review: 0.8 L brass boiler, direct lever, 52 mm filter holder, 950 W heater, current price, independent evaluation and owner context.',
  verdictLabel: 'A compact lever icon for buyers who want to learn the machine rather than press a button',
  verdict: 'Consider the current EU Europiccola Lusso LPLELQ01EU if a manual piston lever, small footprint and tactile control matter more than speed or repeatability aids. Its 0.8 L brass single boiler, pressurestat, sight glass and three-hole steam wand make a complete espresso-and-milk station, but there is no brew gauge, temperature display, PID, pump or refillable reservoir. La Pavoni listed it at €727 on September 24, 2026. A suitable grinder, accurate scale, compatible tamper and scale-safe water remain separate costs.',
  assessment: 'This is a research-led assessment, not a Coffeedant bench test. Exact identity and specifications come from La Pavoni documents for LPLELQ01EU. TechRadar reports six months of exact-model home use; James Hoffmann and specialist sources explain the platform. Coffeedant did not independently measure temperature, lever pressure, shot yield, steam speed, sound or durability.',
  image: hero, imageAlt: 'La Pavoni official three-quarter image of the chrome Europiccola Lusso with direct lever, sight glass and steam wand',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Official EU price', msrp: '€727', typical: 'La Pavoni listed the exact EU LPLELQ01EU at €727 on September 24, 2026. TechRadar recorded €699 in September 2025, and North American EPC-8 listings refer to different voltage, plug, distribution and warranty terms.', currency: 'EUR', numeric: '727', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the exact La Pavoni EU specification', href: official, note: 'Exact LPLELQ01EU identity, live price, materials, dimensions and included accessories', primary: true },
    { label: 'Read the six-month independent review', href: techRadar, note: 'TechRadar home-use account published September 15, 2025; independent of La Pavoni' },
  ],
  facts: [
    { label: 'Exact market', value: 'EU LPLELQ01EU, 220-240 V, 50/60 Hz, 950 W and type F/E Schuko plug' },
    { label: 'Boiler and pressure', value: '0.8 L chromed brass single boiler, pressurestat, safety valve and 0.8-bar documented boiler pressure' },
    { label: 'Brewing system', value: 'Manual direct piston lever, chromed brass group and 52 mm internal filter-holder diameter with filter installed' },
    { label: 'Water and safety', value: 'Direct-fill boiler with sight glass, temperature light and manual-reset safety thermostat; no removable tank' },
    { label: 'Milk', value: 'Chromed-brass wand with three 1.2 mm holes; espresso and steam share the same boiler' },
    { label: 'Size and mass', value: '200 × 335 × 490 mm and 6.5 kg in the August 28, 2026 official product sheet' },
    { label: 'Included coffee kit', value: 'Standard holder, one- and two-cup filters, ABS tamper and coffee scoop' },
  ],
  quickAnswers: [
    { question: 'Is this the current EU Europiccola Lusso?', answer: 'Yes. This page covers chrome LPLELQ01EU. Historic pre-Millennium machines, the US EPC-8, Europiccola Special, Professional and Esperto models are separate identities.' },
    { question: 'Does it have a pump?', answer: 'No. Your arm moves the piston and creates brew pressure. The official 0.8-bar figure is boiler steam pressure, not pressure at the coffee puck.' },
    { question: 'Does it have a pressure gauge?', answer: 'No. The current Lusso has a sight glass and readiness light but no boiler or group-pressure gauge. Gauge-equipped Professional and Esperto variants are different machines.' },
    { question: 'Can it make milk drinks?', answer: 'Yes. It has a three-hole manual steam wand, but the small shared boiler and exposed hot hardware reward a careful sequence and modest serving volume.' },
    { question: 'How quickly is it ready?', answer: 'La Pavoni publishes no complete group-stability time. Independent accounts commonly allow about 10 to 15 minutes, but room temperature, water level and routine matter. Treat that as experience, not a factory guarantee.' },
    { question: 'Can I refill it while hot?', answer: 'Do not open a pressurised boiler. Follow the manual to switch off, release residual pressure and cool the machine before removing the cap or adding water.' },
  ],
  bestFor: ['Espresso drinkers who want tactile pressure control and a learned manual routine', 'Small households serving one or two drinks per session', 'Owners who value compact metal construction and published parts information'],
  avoidIf: ['You want automatic dosing, fast group service or immediate repeatability', 'Children or hurried users can reach the hot boiler, group, wand or cap', 'You require a brew gauge, PID, removable reservoir or 58 mm tools'],
  pros: ['Exact current EU documentation and official parts support', 'Direct lever gives tactile control over pre-infusion and pressure', 'Compact 200 mm width despite an integrated steam wand', 'Brass boiler and group with simple mechanical architecture', 'Independent six-month exact-model evaluation is available'],
  cons: ['Steep learning curve and sensitive thermal routine', 'Exposed metal becomes dangerously hot during use', 'No brew gauge, temperature display, PID or shot timer', 'Direct-fill pressurised boiler must cool and depressurise before refilling', 'Small boiler and manual reset make it poorly suited to groups'],
  architecture: 'a current European direct-lever machine built around a chromed 0.8 L brass single boiler, pressurestat, safety valve, sight glass, manual-reset thermostat, chromed brass group, steel lever, 52 mm filter-holder opening and a three-hole chromed-brass steam wand on a 200 mm-wide steel base',
  identityBoundary: 'This page covers the current chrome-and-black EU Lusso LPLELQ01EU. Historic pre-Millennium Europiccolas can use different group dimensions and parts. The 120 V North American EPC-8 is not the same electrical article. Europiccola Special changes trim and price; Professional models use a 1.6 L boiler and gauge; Esperto versions add competition hardware and pressure feedback. None is silently treated as this exact machine.',
  primaryStrength: 'The lever makes pre-infusion and pressure physical inputs, while the boiler and wand preserve a compact ritual.',
  primaryLimit: 'Temperature, puck preparation, lever force and timing are all exposed to the operator, and the hot pressurised boiler imposes a strict safety and refill routine.',
  setupNote: 'Match LPLELQ01EU on the rating plate, confirm a 220-240 V Schuko circuit and allow clearance for the 490 mm height and lever. With the machine cold and unplugged, inspect the cap, sight glass, group seal, safety valve and cord. Fill within manual limits and never operate below the safe water level.',
  espressoNote: 'Raising the lever admits boiler water for pre-infusion; lowering it drives the piston. The owner controls dwell, force and flow without a puck-pressure or temperature readout. A fine-adjustment grinder, even distribution, compatible tamper, scale and consistent motion are central. The official 0.8-bar boiler figure is not brew pressure.',
  milkNote: 'The 0.8 L boiler supplies a three-hole 1.2 mm steam tip. Independent evaluation found it adequate but demanding, especially for plant milk and larger service. Confirm water level, purge condensation, avoid exposed metal, close the valve before removing the pitcher, then wipe and purge. Promotional cup counts are not measured milk throughput.',
  workflowNote: 'Fill and seal the cold boiler, heat, warm the group, prepare coffee, pre-infuse with the lever raised, then lower it steadily. Wait before unlocking the holder because residual pressure can eject hot grounds. Steam after brewing, release pressure as directed, cool fully before opening the cap, and unplug when finished.',
  buildNote: 'La Pavoni specifies a brass boiler and group, steel base, grid and lever, chromed-brass wand, Bakelite handles and an ABS tray. The exact records support identification and repair planning but do not establish service life, failure rates or current production quality.',
  featuresNote: 'Functional equipment is deliberately sparse: direct lever, pressurestat, sight glass, readiness light, safety valve, manual-reset thermostat, steam wand, one- and two-cup filters and a standard holder. There is no pump, gauge, PID, timer, dose programming, removable tank, hot-water outlet, grinder or automatic milk system.',
  valueNote: 'At €727 official EU pricing, the Lusso buys current support and a heated lever-and-steam platform, not feedback or convenience. Add the grinder, scale, tamper, pitcher, water and service before comparing it with pump machines, unheated levers or used Europiccolas.',
  ownerPattern: 'Selected owner discussions agree on the small footprint, strong espresso potential and pleasure of a learned lever routine. They also repeatedly mention overheating during long idle periods, limited multi-drink cadence, refill constraints, exposed hot metal and the importance of identifying pre- versus post-Millennium parts.',
  ownerCaution: 'Community reports mix decades, modifications, voltages, baskets, grinders and maintenance histories. Vintage, pre-Millennium or modified machines cannot establish LPLELQ01EU performance or reliability. Use them for inspection questions, not rates or universal recipes.',
  maintenanceNote: 'After use, let pressure dissipate before loosening the holder, rinse coffee parts, wipe the group, empty the tray and purge the wand. Keep water within sight-glass limits and prevent scale without using corrosive water. Follow official descaling guidance, use exact-generation seals and involve qualified service for electrical, pressurestat or safety-valve work.',
  dimensions: {
    espresso: { score: 8.4, claim: 'The direct lever gives unusually tactile control over pre-infusion and pressure.', consequence: 'Repeatability depends on grinder, preparation, thermal state and learned force.', status: 'Exact architecture plus independent qualitative evaluation', signals: ['Manual piston lever and brass group.', 'No pump or brew-pressure readout.', 'No instrumented Coffeedant shot test.'] },
    milk: { score: 7.0, claim: 'An integrated three-hole wand makes milk drinks possible in a tiny station.', consequence: 'The 0.8 L shared boiler rewards small batches and careful sequencing.', status: 'Exact hardware; qualitative independent account', signals: ['Three 1.2 mm steam holes.', 'Shared brass boiler.', 'No controlled pitcher-time dataset.'] },
    workflow: { score: 6.7, claim: 'The ritual becomes coherent once heat, pressure and safety steps are learned.', consequence: 'Cold fill, manual pull, residual pressure and cool-down make service slow.', status: 'Official safety record plus independent use', signals: ['Direct-fill pressurised boiler.', 'No automated stop or refill.', 'Exposed hot components.'] },
    build: { score: 8.8, claim: 'Brass, steel and a simple serviceable layout are genuine strengths.', consequence: 'Finish and longevity still depend on water, seals, safe use and exact-generation parts.', status: 'Official materials; no failure-rate sample', signals: ['Brass boiler and group.', 'Steel base and lever.', 'Official parts documentation.'] },
    features: { score: 6.5, claim: 'It includes only the mechanisms needed for lever espresso and steam.', consequence: 'Buyers wanting feedback or automation should choose another class.', status: 'Exact August 2026 product sheet', signals: ['Pressurestat, sight glass and safety thermostat.', 'One- and two-cup filters.', 'No gauge, PID, timer or reservoir.'] },
    value: { score: 7.7, claim: 'The official price buys an iconic complete lever platform with current support.', consequence: 'The true station cost includes grinder, tools, water and learning time.', status: 'Official price checked September 24, 2026', signals: ['€727 exact EU list price.', 'Current product and parts records.', 'Used examples need generation checks.'] },
  },
  sources: [
    { label: 'La Pavoni exact Europiccola Lusso product page', href: official, note: 'Current EU identity, price, materials, controls, electrical data, dimensions and package; checked September 24, 2026.' },
    { label: 'La Pavoni LPLELQ01EU product sheet', href: productSheet, note: 'Official sheet generated August 28, 2026 with boiler pressure, safety equipment, dimensions, mass and accessories.' },
    { label: 'La Pavoni lever-machine user manual record', href: manual, note: 'Official operating, pressure-release, cleaning and safety instructions; model family requires exact-code attention.' },
    { label: 'La Pavoni lever-machine spare-parts record', href: parts, note: 'Official service identification record, not a local-stock or labour promise.' },
    { label: 'La Pavoni lever-machine family guide', href: leverGuide, note: 'Manufacturer explanation of manual pressure and lever workflow; marketing claims remain attributed.' },
    { label: 'TechRadar Europiccola Lusso review', href: techRadar, note: 'Independent exact-model home evaluation after six months, published September 15, 2025.' },
    { label: 'Coffee Blog Europiccola and Professional guide', href: coffeeBlog, note: 'Specialist 2026 platform and variant comparison with commercial links.' },
    { label: 'Whole Latte Love EPC-8 listing', href: regionalSeller, note: 'North American retailer context; EPC-8 electrical and market details are not transferred to the EU article.' },
    { label: 'James Hoffmann Europiccola video', href: film, note: 'Independent historical and practical review published August 18, 2020; generation differences remain material.' },
    { label: 'Reddit daily-use discussion', href: 'https://www.reddit.com/r/LaPavoniLovers/comments/1nkratz/europiccola_for_daily_coffee/', note: 'Self-selected 2025 discussion of two-latte workflow, heat-up and daily ownership expectations.' },
  ],
  comparisons: [
    { name: 'La Pavoni Europiccola Lusso', quickDecision: 'Current 0.8 L direct lever with integrated steam and no feedback gauges.', priceClass: '€727 official EU Sep 24', dimensions: '200 × 335 × 490 mm; 6.5 kg', heating: '0.8 L brass pressurestat boiler', coffeeSetup: '52 mm direct piston lever', milkWorkflow: 'Manual three-hole steam', bestFor: 'Tactile compact espresso ritual' },
    { name: 'Flair 58', href: '/espresso-machine/flair-58/', quickDecision: 'Compare for a modern 58 mm manual lever with electric preheat but no integrated steam.', priceClass: 'Lower complete-machine price; kettle and milk separate', dimensions: 'Open lever frame', heating: 'Electric brew-head preheat plus kettle', coffeeSetup: '58 mm direct lever', milkWorkflow: 'No built-in steam', bestFor: 'Pressure-focused manual espresso' },
    { name: 'Cafelat Robot Barista', href: '/espresso-machine/cafelat-robot-barista/', quickDecision: 'Compare for an unheated manual lever with simple cleaning and no exposed pressurised boiler.', priceClass: 'Lower manual-lever class', dimensions: 'Very compact', heating: 'External kettle; no boiler', coffeeSetup: 'Manual dual-arm lever', milkWorkflow: 'No built-in steam', bestFor: 'Straight espresso with minimal machine maintenance' },
    { name: 'La Pavoni Professional', quickDecision: 'Compare if you want the related lever platform with a 1.6 L boiler and boiler gauge.', priceClass: 'Higher La Pavoni lever class', dimensions: 'Similar width, larger boiler', heating: '1.6 L pressurestat boiler', coffeeSetup: 'Related direct lever', milkWorkflow: 'More water and steam reserve', bestFor: 'More drinks per session' },
  ],
  comparisonNote: 'Compare regional code, voltage, boiler capacity, group generation, filter size, feedback, refill method, steam, tools, warranty and total station cost. A vintage Europiccola can use a different parts ecosystem, not merely be a used example of this article.',
  recommendations: [
    { kicker: 'Modern 58 mm lever', title: 'Flair 58', text: 'Choose electric group preheat and broad 58 mm tools if integrated steam is unnecessary.', href: '/espresso-machine/flair-58/', linkLabel: 'Read Flair 58 review', featured: true },
    { kicker: 'Simpler manual station', title: 'Cafelat Robot Barista', text: 'Compare an unheated lever with faster cleanup, external kettle dependence and no steam wand.', href: '/espresso-machine/cafelat-robot-barista/', linkLabel: 'Read Robot review' },
    { kicker: 'Compact pump workflow', title: 'Breville Bambino', text: 'Choose rapid thermocoil convenience when repeatable weekday milk drinks matter more than lever control.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read Bambino review' },
    { kicker: 'Traditional pump machine', title: 'Gaggia Classic Evo Pro', text: 'Compare a compact pump-driven single boiler with a different learning curve and easier refill access.', href: '/espresso-machine/gaggia-classic-evo-pro/', linkLabel: 'Read Gaggia review' },
  ],
  faqs: [
    { question: 'Is the Europiccola Lusso a pump espresso machine?', answer: 'No. Raising and lowering the lever fills the group and drives its piston. Your arm produces brew pressure.' },
    { question: 'What is the official boiler pressure?', answer: 'The current LPLELQ01EU sheet specifies 0.8 bar. That is boiler pressure, not pressure at the coffee puck.' },
    { question: 'Does the Europiccola have a pressure gauge or PID?', answer: 'No. The Lusso uses a pressurestat, readiness light and sight glass. Gauge-equipped Professional and Esperto variants are different products.' },
    { question: 'How long does the Europiccola take to warm up?', answer: 'La Pavoni publishes no full thermal-stability time. Independent accounts commonly use roughly 10 to 15 minutes, depending on conditions and routine.' },
    { question: 'Can I refill the Europiccola while it is hot?', answer: 'Never open the boiler while it is pressurised. Switch off, release pressure and cool it according to the manual before removing the cap.' },
    { question: 'What tamper and tools fit the current model?', answer: 'The exact sheet states 52 mm internal filter-holder diameter, while La Pavoni lists a 51 mm lever tamper. Verify basket and tool fit rather than relying on historic pre-Millennium advice.' },
    { question: 'Is it suitable for several milk drinks in a row?', answer: 'The official page claims up to eight espressos, but independent use shows that pressure release, heat management, refill limits and steaming make it a low-volume home machine.' },
  ],
  finalTitle: 'A deeply rewarding lever only when its constraints are part of the appeal',
  finalVerdict: [
    'The current EU Europiccola Lusso is precisely documented: 0.8 L brass pressurestat boiler, direct piston lever, 52 mm filter-holder opening, sight glass, safety valve, manual-reset thermostat, three-hole wand, 950 W heater and a remarkably narrow steel base. It provides real manual control without a separate kettle or steamer.',
    'Buy it for learning, physical feedback and compact metal design. Do not expect beginner-friendly repeatability, group service or casual use. Verify LPLELQ01EU, plan the grinder and water, respect the pressurised boiler, and compare its €727 price with modern levers and compact pump machines.',
  ],
  video: { id: 'lKimj0vRM5A', title: 'The La Pavoni Europiccola', creator: 'James Hoffmann', published: '2020-08-18', note: 'Independent historical and practical review. Its machine context helps explain the platform, but the August 2026 LPLELQ01EU sheet governs exact current specifications.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="europiccola-owner-title"><h3 id="europiccola-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Two drinks can fit the ritual</strong><p>Daily-use discussions describe a workable two-drink morning once grind, heating and lever technique are settled, but not an automatic five-minute promise.</p></li>
    <li><strong>Long idle is a known concern</strong><p>Owners repeatedly describe rising group heat when the machine sits on, so they favour short sessions and deliberate thermal routines.</p></li>
    <li><strong>Generation decides the parts</strong><p>Pre-Millennium, post-Millennium, EPC-8 and modified machines appear together in advice. Basket, seal and tool claims need an exact identity check.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLaPavoniEuropiccolaReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
