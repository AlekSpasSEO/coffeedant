import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.londiniumespresso.com/products/londinium-r24/';
const support = 'https://www.londiniumespresso.com/support';
const launchContext = 'https://kostverlorenvaart.blogspot.com/2020/06/londinium-lr24.html';
const brianVideo = 'https://www.youtube.com/watch?v=sTWPFPZCyOw';
const brianQuan = 'https://www.youtube.com/@BrianQuan';
const ownerYear = 'https://www.reddit.com/r/espresso/comments/17tnpcz/londinium_r24_1_year_review/';
const ownerAdvice = 'https://www.home-barista.com/advice/owners-londinium-r24-t84984.html';
const ownerThread = 'https://www.home-barista.com/levers/londinium-r24-t65994.html';
const ownerCritical = 'https://coffeetime.freeflarum.com/d/2452-londinium-r24';
const ownerLongTerm = 'https://www.reddit.com/r/espresso/comments/1l7h5is/londinium_never_disappoints/';
const retailer = 'https://shibacoffeeandtea.com/shop/gear-accessories-and-gifts/londinium-r24-espresso-machine/';
const independentOverview = 'https://roastaroma.com/gear/londinium-r24';
const hero = 'https://cdn.swell.store/londinium/6a640a825a07bc0012eb3e15/9f86c3d3587376bb4abb0dbd93589812/Londinium1.jpeg?width=1080&fm=jpg&q=80';

const profile: UpgradeReviewProfile = {
  key: 'londinium-r24', slug: '/espresso-machine/londinium-r24/', productId: 'CD-EM-000205',
  brand: 'Londinium', model: 'R24', sku: 'LR-24V; select the correct 120 V or 240 V edition and regional plug', category: 'Tank-fed heat-exchanger spring-lever espresso machine', brandPath: '/brands/',
  title: 'Londinium R24 review: superb lever body, long warm-up',
  description: 'Exact current LR-24V review: 58 mm spring group, app-set 1–6 bar preinfusion, 2.3 L copper HX boiler, owner evidence and £3,333 ex-VAT price.',
  verdictLabel: 'A high-end spring lever that makes one app-controlled variable do unusual work',
  verdict: 'The current Londinium R24 combines a full-size 58 mm spring group with a tank-fed 24 V rotary pump, a 2.3 L copper heat-exchanger boiler and app-controlled 1.0–6.0 bar preinfusion. The appeal is not unrestricted profiling: it is a quiet, repeatable lever workflow in which preinfusion pressure also shifts group temperature and brew volume. The trade is substantial size, roughly an hour of cold warm-up, cloud-and-Wi-Fi dependence for convenient adjustment, and a £3,333 ex-VAT starting point before delivery and regional tax.',
  assessment: 'This is a research-led assessment, not a Coffeedant bench test. Current Londinium records control identity and specifications. Brian Quan supplies an independent exact-model walkthrough, while owner threads provide bounded daily-use evidence. Coffeedant did not measure performance or reliability.',
  image: hero,
  imageAlt: 'Londinium official studio photograph of the current stainless R24 spring-lever espresso machine with raised wenge lever and bottomless portafilter',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Current direct price', msrp: '£3,333 ex VAT', typical: 'Londinium displayed £3,333 excluding VAT and showed LR-24V in stock on September 24, 2026. UK VAT is added at checkout; delivery, import duty, plug, voltage, portafilter choice and warranty route vary by destination.', currency: 'GBP', numeric: '3333.00', checked: 'September 24, 2026' },
  links: [
    { label: 'Check the current exact R24 specification', href: official, note: 'Current LR-24V identity, direct price, voltage, dimensions, included equipment and app-controlled architecture', primary: true },
    { label: 'Watch the independent exact-model walkthrough', href: brianVideo, note: 'Brian Quan’s July 11, 2022 R24 overview, shot workflow, Decent-profile comparison and app demonstration' },
  ],
  facts: [
    { label: 'Exact model', value: 'Current Londinium R24, SKU LR-24V; not the earlier Londinium R, R2/R3, Vectis, Compressa or commercial Londinium I/II/III' },
    { label: 'Brew system', value: 'Full-size commercial 58 mm spring group with heat exchanger and thermosiphon' },
    { label: 'Preinfusion', value: 'Digitally adjustable 1.0–6.0 bar through the Londinium phone or tablet app' },
    { label: 'Pump and water', value: 'Tank-fed 24 V rotary pump and 3.0 L reservoir; no direct-plumb option documented' },
    { label: 'Boiler', value: '2.3 L pure copper boiler with lead-free brass fittings and thermistor regulation on production from April 19, 2021' },
    { label: 'Electrical', value: '2400 W at 240 V for UK, EU and ANZAC editions; 1400 W at 120 V for US edition' },
    { label: 'Size', value: '330 mm wide × 540 mm deep × 345 mm to case top; 740 mm to lever top; boxed weight 38 kg' },
  ],
  quickAnswers: [
    { question: 'Does R24 need plumbing?', answer: 'No. It is a tank-fed model with a 3.0 L reservoir and 24 V rotary pump. Londinium does not document a direct-water conversion for R24.' },
    { question: 'How long does it warm up?', answer: 'Plan around one hour from cold for the large spring group. One owner reported finding 30–40 minutes sufficient for that person’s routine, but that does not replace the conservative one-hour operating expectation.' },
    { question: 'What can the app change?', answer: 'The app adjusts preinfusion pressure from 1.0 to 6.0 bar and provides a weekly smart timer with multiple on/off events. It is not unrestricted pressure profiling during the spring-driven extraction.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. The heat-exchanger architecture and separate steam boiler space allow milk steaming while the spring group extracts.' },
    { question: 'Does it need backflushing?', answer: 'Londinium says no because the lever group has no three-way brew solenoid to backflush. That does not eliminate shower-screen, gasket, water, wand and general machine care.' },
    { question: 'Is a grinder included?', answer: 'No. R24 is sold as an espresso machine. Budget for an espresso-capable grinder, scale, water management, accessories, delivery, tax and service.' },
  ],
  bestFor: ['Lever enthusiasts who value texture, quiet spring extraction and a deliberately narrow control set', 'Homes making espresso and milk drinks that can schedule a long warm-up in advance', 'Owners comfortable buying direct from a specialist maker and learning self-service procedures with remote support'],
  avoidIf: ['You need quick unscheduled cold starts or clearance below ordinary upper cabinets', 'You want live shot graphs, arbitrary pressure stages or all controls on the machine face', 'You prefer a broad local dealer and technician network over a direct specialist support relationship'],
  pros: ['Full-size 58 mm commercial spring group with classic declining-pressure extraction', 'Digitally repeatable 1.0–6.0 bar preinfusion adjusted without tools', 'Quiet 24 V rotary pump and silent spring-driven extraction after preinfusion', 'Large 2.3 L copper HX boiler supports espresso and steam together', 'Current maker publishes parts, support paths and remote training', 'Substantial stainless and powder-coated steel construction with wenge handles'],
  cons: ['Roughly one-hour conservative cold warm-up and 740 mm raised-lever height', '£3,333 ex VAT before delivery, tax, grinder and water treatment', 'App and cloud path make convenient pressure changes dependent on 2.4 GHz Wi-Fi', 'No direct plumbing, shot-stop bypass, group gauge or unrestricted profile editor', 'The same direct specialist supplies the machine, firmware, parts and much support', 'Owner evidence is positive overall but too self-selected to establish reliability rates'],
  architecture: 'a tank-fed 58 mm commercial spring-lever machine with heat exchanger, thermosiphon, 2.3 L copper boiler, 24 V rotary pump, 3.0 L reservoir and app-controlled digital preinfusion',
  identityBoundary: 'This review covers current SKU LR-24V in its 120 V and 240 V editions. It does not transfer specifications from the earlier Londinium R, later-numbered R variants, the smaller Vectis, the non-pump Compressa, or plumbed commercial Londinium I/II/III. Production changes such as thermistor regulation from April 19, 2021 must be checked against serial, rating plate and delivered documentation.',
  primaryStrength: 'It combines the body and quiet declining-pressure character of a commercial spring group with repeatable app-set preinfusion and tank-fed installation.',
  primaryLimit: 'The large group needs time and vertical space, while convenient adjustment and scheduling depend on a specialist app, Wi-Fi path and direct support ecosystem.',
  setupNote: 'Choose the correct 120 V or 240 V edition, plug, steam-arm side and portafilter option before ordering. Reserve at least 330 × 540 mm of counter, substantially more than 740 mm of vertical clearance to operate the lever safely, and space to lift panels and fill the 3.0 L tank. Confirm delivery, import tax, warranty and who handles qualified electrical or pressure-vessel service in the destination country.',
  espressoNote: 'Pulling the lever down opens the group to pump-supplied preinfusion at the selected 1.0–6.0 bar. Releasing it lets the spring drive a declining-pressure extraction. Londinium says changing preinfusion pressure also changes group temperature and brew volume; treat that as the maker’s integrated-control design claim, then dial grind, dose, yield and lever-down time by taste rather than assuming pressure alone selects a roast recipe.',
  milkNote: 'The 2.3 L HX boiler and four-hole steam tip are intended for steam during extraction. Owners commonly describe plentiful steam, but Coffeedant found no standardized exact-model milk-heating dataset. Start with a smaller pitcher, purge condensate, learn the tip’s faster air intake, stop at the desired texture and temperature, then wipe and purge immediately.',
  workflowNote: 'A scheduled warm-up is central, not optional polish. The app can set multiple daily on/off events by weekday, while the lever, scale and catch cup still make this a manual routine. Extraction does not stop on command: move the cup when the target yield is reached and allow the remaining spring stroke to finish safely into another vessel.',
  buildNote: 'Londinium specifies heavy solid stainless panels, stainless drip tray and grate, solid wenge handles and a 3 mm powder-coated zintec chassis doubled to 6 mm at high-load areas. The listed 38 kg is boxed weight, not a verified net machine mass. Removable panels improve access but do not make mains-voltage, hot-water or pressurized work routine owner maintenance.',
  featuresNote: 'The useful differentiators are the 1.0–6.0 bar digital preinfusion setting, weekly smart timer, tank-fed rotary pump, low-water protection and side-selectable steam arm. There is no documented brew-pressure graph, shot timer on the machine, volumetric stop, direct-plumb kit, built-in grinder or milk automation. “No backflushing” describes the lever-group circuit, not a maintenance-free machine.',
  valueNote: 'At £3,333 ex VAT direct, R24 competes with premium dual boilers, other spring levers and software-led machines. Its case is strongest when lever texture, silence, simultaneous steam and one-variable roast adjustment are the goal. It is weak value if the buyer mainly wants quick heat-up, dealer-local service, an integrated shot timer or broad electronic profiling.',
  ownerPattern: 'Selected owners repeatedly praise body, forgiving extraction, quiet operation, steam reserve and accessible internals. They also describe the large group’s warm-up, the need to swap the cup before the spring finishes, and occasional sensitivity of the 2.4 GHz Wi-Fi connection. Those themes are decision prompts, not measured prevalence.',
  ownerCaution: 'Owner forums span production dates, regions, water, grinders, roast styles and maintenance histories. One dissatisfied new owner reported poor results and inadequate help, while several longer-term owners report years of reliable daily use. Neither side establishes a representative failure rate, universal support outcome or guaranteed cup profile.',
  maintenanceNote: 'Use Londinium’s knowledgebase, exact delivered instructions and video support for water treatment, group lubrication, seals, shower screen, steam tip and internal service boundaries. The included BWT medium cartridge is a starting point, not proof that every supply is suitable. A lever group stores spring energy; hot, electrical and pressurized work requires the documented safe procedure and qualified help where specified.',
  dimensions: {
    espresso: { score: 9.2, claim: 'The full-size spring group and adjustable preinfusion offer a distinctive, repeatable lever extraction with strong body potential.', consequence: 'It favors an integrated declining-pressure style over arbitrary multi-stage profiling and instant shot stopping.', status: 'Current official architecture, independent filmed use and multi-year owner context', signals: ['Commercial 58 mm spring group with thermosiphon and HX.', 'App-set preinfusion from 1.0 to 6.0 bar.', 'No Coffeedant temperature, pressure or extraction-yield measurement.'] },
    milk: { score: 8.7, claim: 'A 2.3 L HX boiler and four-hole tip provide serious simultaneous-steam capacity.', consequence: 'Fast steam still demands technique, and there is no standardized exact-model milk benchmark.', status: 'Current official hardware record plus selected owner use', signals: ['Brew chamber separates from the boiler after lever release.', 'Owners report plentiful steam across several drinks.', 'No Coffeedant steam-rate or milk-texture test.'] },
    workflow: { score: 7.8, claim: 'Scheduling and tank-fed operation make a commercial spring group realistic at home.', consequence: 'The long warm-up, tall lever, manual yield stop and app path remain daily commitments.', status: 'Current official timer and dimensions plus independent and owner workflow evidence', signals: ['Multiple weekly on/off events in the app.', '740 mm lever height and 540 mm depth.', 'Cup must be moved when target yield is reached.'] },
    build: { score: 8.9, claim: 'Heavy stainless, reinforced steel and a commercial group form a substantial serviceable platform.', consequence: 'A direct specialist ecosystem concentrates parts, firmware and support in one company relationship.', status: 'Current manufacturer construction record and owner access reports', signals: ['3 mm zintec chassis doubled to 6 mm at high-load points.', '2.3 L copper boiler with lead-free brass fittings.', 'No representative lifetime or defect-incidence dataset.'] },
    features: { score: 8.4, claim: 'Digital preinfusion and a smart timer modernize the two controls most useful on this lever.', consequence: 'Buyers wanting live graphs, front-panel adjustment or unrestricted profiles need another architecture.', status: 'Current LR-24V product and support records', signals: ['1.0–6.0 bar app adjustment.', 'Weekly smart timer and low-water logic.', 'No direct plumbing, volumetric stop or built-in shot graph.'] },
    value: { score: 7.6, claim: 'The price buys a rare tank-fed commercial spring group with direct specialist support.', consequence: 'Premium dual boilers and software-led machines deliver different flexibility for similar total spend.', status: 'Direct price and US retailer context checked September 24, 2026', signals: ['£3,333 ex VAT direct price.', 'US specialist listing showed $5,999.', 'Grinder, delivery, tax, water and service add to the station cost.'] },
  },
  sources: [
    { label: 'Londinium R24 official product page', href: official, note: 'Current LR-24V identity, price, stock, specifications, dimensions, construction, inclusions and factory performance claims.' },
    { label: 'Londinium support portal', href: support, note: 'Current knowledgebase, manuals, contact, remote support and supported machine families.' },
    { label: 'Shiba Coffee and Tea R24 listing', href: retailer, note: 'US specialist listing and $5,999 price context checked September 24, 2026; retailer repeats maker claims.' },
    { label: 'Brian Quan R24 video', href: brianVideo, note: 'Independent exact-model walkthrough, shot, app and Decent-profile comparison published July 11, 2022 after several days with the machine.' },
    { label: 'Brian Quan channel', href: brianQuan, note: 'Creator identity for the unique independent exact-model video; affiliate links are disclosed in the video description.' },
    { label: 'Kostverlorenvaart R24 launch context', href: launchContext, note: 'Independent blog preserving the 2020 R-to-R24 design explanation.' },
    { label: 'Home-Barista R24 owner thread', href: ownerThread, note: 'Long-running owner and enthusiast discussion covering preinfusion, temperature, workflow and revisions; self-selected evidence.' },
    { label: 'Reddit one-year R24 owner review', href: ownerYear, note: 'Detailed daily-use report on warm-up, steam, Wi-Fi, app scheduling, cup handling and perceived espresso style.' },
    { label: 'Home-Barista R24 buying-advice thread', href: ownerAdvice, note: 'Selected owner context on access, support, steam, routine and competing spring levers.' },
    { label: 'Reddit long-term Londinium owner thread', href: ownerLongTerm, note: 'Self-selected long-term daily-use context spanning Londinium R and R24; not a reliability-rate source.' },
    { label: 'Coffeetime critical R24 owner thread', href: ownerCritical, note: 'A dissatisfied new-owner report retained as counter-evidence; no diagnosis or prevalence can be inferred.' },
    { label: 'RoastAroma R24 overview', href: independentOverview, note: 'Independent synthesis of architecture, warm-up, support concentration and market position.' },
  ],
  comparisons: [
    { name: 'Profitec Pro 800', href: '/espresso-machine/profitec-pro-800/', quickDecision: 'Compare another premium spring lever when front-panel PID control and a broader dealer channel matter.', priceClass: 'Premium spring-lever class', dimensions: 'Large tall lever chassis', heating: 'PID HX spring lever', coffeeSetup: '58 mm manual; grinder separate', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Traditional controls and dealer access' },
    { name: 'Flair 58', href: '/espresso-machine/flair-58/', quickDecision: 'Spend far less and gain direct manual pressure control when a kettle and separate milk solution are acceptable.', priceClass: 'Far lower manual-lever class', dimensions: 'Narrow open frame', heating: 'Electrically preheated manual group', coffeeSetup: '58 mm fully manual', milkWorkflow: 'No built-in steam', bestFor: 'Hands-on profiling on a budget' },
    { name: 'Lelit Bianca V3', href: '/espresso-machine/lelit-bianca-pl162t/', quickDecision: 'Choose dual boilers, paddle flow control and conventional pump workflow when fast electronic readiness matters more than spring character.', priceClass: 'Premium dual-boiler class', dimensions: 'Large E61 chassis', heating: 'PID dual boiler', coffeeSetup: '58 mm pump machine; grinder separate', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Flexible pump-machine profiling' },
    { name: 'Londinium R24', quickDecision: 'Choose the commercial spring group, quiet extraction and app-set preinfusion when long warm-up is acceptable.', priceClass: '£3,333 ex VAT Sep 24', dimensions: '330 × 540 × 740 mm to lever top', heating: '2.3 L copper HX and thermosiphon', coffeeSetup: '58 mm spring lever; grinder separate', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Lever body with repeatable preinfusion' },
  ],
  comparisonNote: 'Compare full lever clearance, cold-start time, water source, pressure-control range, shot stopping, steam workflow, grinder, tax, delivery, warranty and local service. Spring levers, manual levers, dual boilers and software-led pump machines can reach excellent espresso through very different routines.',
  recommendations: [
    { kicker: 'Closest lever rival', title: 'Profitec Pro 800', text: 'Compare the more conventional front-panel and dealer experience against R24’s app-set preinfusion.', href: '/espresso-machine/profitec-pro-800/', linkLabel: 'Read Profitec Pro 800 review', featured: true },
    { kicker: 'Manual pressure', title: 'Flair 58', text: 'Trade boiler steam and automation for a much lower price and direct hand-controlled pressure.', href: '/espresso-machine/flair-58/', linkLabel: 'Read Flair 58 review' },
    { kicker: 'Dual-boiler alternative', title: 'Lelit Bianca V3', text: 'Choose paddle flow control, dual boilers and a conventional pump-machine ecosystem.', href: '/espresso-machine/lelit-bianca-pl162t/', linkLabel: 'Read Lelit Bianca review' },
    { kicker: 'Compact classic lever', title: 'La Pavoni Europiccola', text: 'Accept a smaller direct lever and manual thermal learning curve for far less money and counter depth.', href: '/espresso-machine/la-pavoni-europiccola/', linkLabel: 'Read Europiccola review' },
  ],
  faqs: [
    { question: 'What exact Londinium R24 does this review cover?', answer: 'Current SKU LR-24V in its correct 120 V or 240 V regional edition. It excludes the earlier Londinium R, Vectis, Compressa and plumbed commercial Londinium machines.' },
    { question: 'Does Londinium R24 need a water line?', answer: 'No. It uses a 3.0 L internal reservoir and a 24 V rotary pump. No direct-plumb conversion is documented for the current R24.' },
    { question: 'How long does Londinium R24 take to heat?', answer: 'Use roughly one hour from cold as the conservative plan for the full commercial spring group. The weekly app timer is the practical way to make that wait disappear from a scheduled routine.' },
    { question: 'Can the R24 pressure-profile a shot?', answer: 'It can set preinfusion pressure from 1.0 to 6.0 bar. The spring then supplies its own declining extraction curve. It is not an arbitrary multi-stage pump profiler.' },
    { question: 'Can R24 make several milk drinks?', answer: 'Its 2.3 L HX boiler and four-hole tip are designed for simultaneous extraction and strong steam. Selected owners report ample reserve, but Coffeedant did not run a standardized milk queue.' },
    { question: 'Does Londinium R24 require backflushing?', answer: 'The maker says the lever-group brew circuit does not require backflushing. The shower screen, group seals, steam tip, water system, panels and exterior still require documented care.' },
    { question: 'Is Londinium R24 worth £3,333 ex VAT?', answer: 'It can be when quiet spring-lever extraction, body, simultaneous steam and repeatable preinfusion are the priorities. It is difficult value when quick warm-up, local dealer service or unrestricted electronic profiling matter more.' },
  ],
  finalTitle: 'An unusually coherent lever, if the station and support model fit',
  finalVerdict: [
    'R24’s design is focused. A full commercial spring group supplies the extraction character; the 24 V rotary pump makes tank-fed preinfusion quiet and repeatable; the app changes one pressure variable and schedules the long warm-up. The 2.3 L HX boiler keeps milk service available without turning the machine into a dual-boiler pump platform.',
    'Buy it for that exact combination, not for a generic “endgame” label. The 740 mm lever height, one-hour cold start, app dependence and direct specialist ecosystem are real commitments, and £3,333 is before VAT and the rest of the station. For the buyer who wants lever body and a deliberately constrained workflow, R24 remains distinctive. For quick starts, broad dealer coverage or live shot design, its alternatives are more rational.',
  ],
  video: { id: 'sTWPFPZCyOw', title: 'The Londinium R24 Lever Espresso Machine', creator: 'Brian Quan', published: '2022-07-11', note: 'Independent exact-model walkthrough after several days with the R24, including a filmed shot, app view and comparison with a Decent Londinium-style profile. It is not a long-term test.' },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#londinium-r24-source-1">[source]</a> <a href="#londinium-r24-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#londinium-r24-source-1">[source]</a> <a href="#londinium-r24-source-4">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#londinium-r24-source-1">[source]</a> <a href="#londinium-r24-source-8">[source]</a></p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="r24-owner-title"><h3 id="r24-owner-title">What the selected owner evidence actually says</h3><ul>
    <li><strong>Texture, body and repeatability drive the enthusiasm</strong><p>Multiple owners describe a forgiving lever profile and strong body across different coffees, while some clarity-focused users prefer another machine for modern light-roast styles.</p></li>
    <li><strong>Warm-up and cup swapping shape the routine</strong><p>The large group rewards scheduled heat, and owners commonly move the cup or scale before the spring has fully finished.</p></li>
    <li><strong>Wi-Fi and direct support experiences differ</strong><p>One owner added a nearby 2.4 GHz extender; others praise remote help and easy panel access; a critical new-owner report describes an unsatisfactory outcome.</p></li>
    </ul><p class="review-community-evidence-note">Evidence is readable here without outbound links. Original addresses and scope limits remain in the source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeLondiniumR24Reviews: MachineReviewData[] = [buildUpgradeReview(profile)];
