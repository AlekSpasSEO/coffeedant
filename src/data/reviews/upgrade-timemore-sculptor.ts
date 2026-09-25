import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type DimensionCopy = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (
  score: number, claim: string, consequence: string, status: string,
  signals: [string, string, string], label?: string,
): DimensionCopy => ({ score, claim, consequence, status, signals, label });

const official = 'https://www.timemore.com/products/timemore-electric-coffee-grinder-sculptor-series';
const officialReturns = 'https://www.timemore.com/policies/refund-policy';
const nucleus = 'https://nucleuscoffee.com/en/blogs/specialty-coffee/timemore-sculptor-078-078s';
const video = 'https://www.youtube.com/watch?v=SUDpLjo7y5k';
const ownerCurrent = 'https://www.reddit.com/r/espresso/comments/1qd86he/made_an_impulsive_purchasetimemore_sculptor_078s/';
const ownerLongTerm = 'https://www.reddit.com/r/espresso/comments/1vqka76/timemore_078s_long_term_review_mixed_feelings/';
const ownerDialIn = 'https://www.reddit.com/r/espresso/comments/1gqi72e/at_my_wits_end_cannot_dial_in_sculptor_078s/';
const filterComparison = 'https://www.reddit.com/r/pourover/comments/1cj5td0/ode_gen2_or_sculptor_078s/';
const modelComparison = 'https://www.reddit.com/r/pourover/comments/1lurqsz/timemore_078_or_078s/';
const currentModelThread = 'https://www.reddit.com/r/Timemore/comments/1qxmtbk/078s_vs_064s/';
const hero = 'https://www.timemore.com/cdn/shop/files/078S_73619fcd-8af5-464b-a157-492e7c3d830b.jpg?v=1713171847';

const profile: UpgradeReviewProfile = {
  key: 'timemore-sculptor-078s-us-current',
  slug: '/grinder/timemore-sculptor/',
  productId: 'CD-GR-000003',
  brand: 'Timemore',
  model: 'Sculptor 078S',
  sku: 'Current US 078S espresso-and-pour-over variant, white SKU STMUS100071; black SKU STMUS100070',
  category: 'Electric single-dose 78 mm flat-burr coffee grinder',
  brandPath: '/grinder/',
  title: 'Timemore Sculptor 078S review: excellent control, important model choices',
  description: 'Research-led Timemore Sculptor 078S review covering the exact 78 mm espresso model, stepless adjustment, variable RPM, workflow, current US price, filter trade-offs and owner context.',
  verdictLabel: 'A refined single-dose grinder for espresso-first buyers who will use its stepless dial and accept a less specialized filter profile',
  verdict: 'The current US Sculptor 078S combines 78 mm flat burrs, stepless adjustment, a 400 W brushless motor, variable speed, magnetic dosing cup and Timemore’s rotary knocker in a compact single-dose format. The official US store listed it at $799 on September 25, 2026, with white available and black unavailable during the check. Independent evaluation supports its strong espresso range, clean presentation and quiet-feeling workflow, while also finding that the brew-only 078 gives clearer, more separated filter cups. Buy the 078S when one grinder must cover espresso and occasional filter. Choose the 078 when filter is the real priority, and do not confuse either model with the smaller 064S.',
  assessment: 'Strong espresso control and polished daily handling, with model-selection and maintenance caveats.',
  image: hero,
  imageAlt: 'Timemore official product image of the white Sculptor 078S single-dose coffee grinder',
  published: '2026-01-15',
  updated: '2026-09-25',
  price: {
    label: 'Current US manufacturer listing',
    msrp: '$799',
    numeric: '799',
    currency: 'USD',
    typical: 'Timemore US listed both 078S colors at US$799; white showed available and black showed unavailable during the September 25, 2026 check',
    checked: 'September 25, 2026',
  },
  links: [
    { label: 'Check current 078S price and color stock', href: official, note: 'Select the exact 078S espresso-and-pour-over variant, not 078 or 064S', primary: true },
    { label: 'Read the independent 078 and 078S comparison', href: nucleus, note: 'Hands-on comparison of burrs, RPM, retention, espresso and filter results' },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'Current US Timemore Sculptor 078S, the stepless espresso-and-pour-over version' },
    { label: 'Do not confuse with', value: 'Brew-only stepped 078, smaller 064S, newer 064S Gen 2, or 078SSP package' },
    { label: 'Burrs', value: '78 mm flat burrs designed by Timemore for fine espresso grinding and multi-method use' },
    { label: 'Adjustment', value: 'Large front stepless dial on the 078S; the brew-only 078 uses 36 stepped settings' },
    { label: 'Motor', value: '400 W brushless motor with PID and Hall-sensor control on the 078 series' },
    { label: 'Speed control', value: 'Variable RPM; an independent review records an 800 to 1,400 RPM range' },
    { label: 'Feed path', value: 'Vertical auger and gravity feed from the small single-dose hopper' },
    { label: 'Grounds exit', value: 'Rotary knocker is intended to clear fines and chaff from the chute' },
    { label: 'Cup and lid', value: 'Magnetic catch-cup alignment and magnetic bean lid' },
    { label: 'Current US listing', value: 'US$799 on September 25, 2026; white available, black unavailable during the check' },
  ],
  quickAnswers: [
    { question: 'Which Sculptor is reviewed?', answer: 'The 78 mm 078S with stepless adjustment for espresso and pour-over. This is not the stepped, brew-only 078 or the smaller 064S.' },
    { question: 'What did it cost in the US?', answer: 'Timemore US listed both 078S colors at $799 on September 25, 2026. White showed available and black unavailable during the check.' },
    { question: 'Can it grind for espresso?', answer: 'Yes. The 078S burrs and stepless dial are designed for fine espresso adjustment. Exact settings move with coffee, dose, basket, calibration and burr condition.' },
    { question: 'Can it grind for pour-over?', answer: 'Yes, but independent and owner comparisons often prefer the brew-only 078 for filter clarity and flavor separation. The 078S is the more flexible one-grinder choice.' },
    { question: 'What does the knocker do?', answer: 'A rotating ring flexes the chute area to dislodge retained fines and chaff. It helps cleanup but does not guarantee zero exchange or zero retention.' },
    { question: 'Who should buy it?', answer: 'An espresso-first single-doser who also makes filter coffee and values a compact metal body, large dial, variable RPM and deliberate dose-by-dose workflow.' },
  ],
  bestFor: [
    'Espresso-first households that single-dose and change coffees or recipes intentionally',
    'One-grinder setups that need fine espresso control plus credible occasional filter range',
    'Buyers who value a large adjustment dial, magnetic cup, variable speed and rotary chute knocker',
  ],
  avoidIf: [
    'You brew only filter coffee and would benefit more from the dedicated 078 Turbo Burr profile',
    'You want a hopper, timed dosing, weight-based dosing or rapid repeat service for several drinks',
    'You expect owner disassembly to be as simple as removing a tool-free front burr carrier',
  ],
  pros: [
    '78 mm espresso-oriented flat burrs with a stepless, easy-to-read front dial',
    '400 W brushless motor and adjustable speed give dense-coffee headroom and another controlled variable',
    'Magnetic cup, magnetic lid and rotary knocker create a tidy single-dose routine',
    'Independent comparison finds clean, sweet espresso with useful acidity and body',
  ],
  cons: [
    'The 078S is less specialized for filter clarity than the brew-only 078',
    'The family name makes 078S, 078, 064S and current variants unusually easy to confuse',
    'Owner reports describe popcorning, static, calibration sensitivity and demanding internal access',
    'US$799 places it against mature 64 mm and 83 mm alternatives with different burr and service ecosystems',
  ],
  architecture: 'a compact vertical single-dose grinder with 78 mm espresso-oriented flat burrs, stepless front adjustment, a 400 W brushless variable-speed motor, vertical auger, magnetic dosing cup and a rotary chute knocker',
  identityBoundary: 'This review scores the current US 078S espresso-and-pour-over variant. It does not blend in the stepped brew-only 078, the 64 mm 064S, the 064S Gen 2, the 078SSP package, Kickstarter pricing, aftermarket burr swaps or a used unit whose calibration and service history are unknown.',
  primaryStrength: 'The 078S puts fine espresso control, a powerful motor and a polished single-dose path into one unusually cohesive body.',
  primaryLimit: 'Its versatility is a compromise: the dedicated 078 has the stronger filter identity, while internal access and long-term support deserve scrutiny.',
  setupNote: 'Confirm the carton and rating label say 078S before seasoning, recalibrating or changing the pin position. Place the grinder where the hopper lid, rear ventilation, power switch, RPM control, front dial and catch cup remain accessible. Begin with the factory calibration and one coffee. Record dose, dial, RPM, yield and taste before changing one variable. Do not copy another owner’s dial number as an absolute reference because chirp point, burr condition, roast and basket differ.',
  espressoNote: 'The 078S earns its place through stepless control and an espresso-oriented burr set, not through a universal dial number. Independent testing by Nucleus found clean, sweet espresso with vibrant acidity and more intensity than its 064S comparison, while also noting that dense light roasts could challenge the lowest speed. Coffeedant did not reproduce those shots or measurements. Use a stable dose and target yield, make small dial changes, and raise speed if the grinder audibly labors rather than treating low RPM as automatically superior.',
  milkNote: 'For filter brewing, the 078S is capable but not the family specialist. Nucleus reported fuller body and slightly more astringency from the 078S, while the dedicated 078 produced greater complexity and flavor distinction. Owner discussions are mixed because taste preference and recipes differ. If filter is most of the week, buy the 078. If espresso is central and filter is secondary, the 078S avoids maintaining two grinders.',
  workflowNote: 'Weigh a dose, start the motor according to the chosen feed routine, add beans, allow the chamber to clear, rotate the knocker and transfer the magnetic cup. The large front dial makes recipe changes legible, but the narrow espresso window rewards notes and small movements. The knocker helps move chaff and fines out of the chute; it should not be read as proof of zero retention. A small purge can still be necessary after a major setting change when cross-dose carryover matters.',
  buildNote: 'Timemore describes an all-metal construction, brushless motor, sensor control, rear ventilation, magnetic parts and vertically mounted auger. Independent reviewers praise the weight and finish while criticizing details such as the power switch, cup behavior or access screws. Those observations describe review samples, not every unit. The non-standard 78 mm platform also makes factory parts and qualified service more important than with a broadly interchangeable 64 mm grinder.',
  featuresNote: 'Variable RPM is useful as a controlled recipe variable, but evidence does not support one speed as universally best. The large stepless dial directly helps espresso, the magnetic cup reduces placement fuss, and the lid can reduce bean escape. The rotary knocker improves chute clearing. None of these features weighs coffee, times a dose or corrects a poor recipe automatically.',
  valueNote: 'At the current US listing of $799, value depends on needing the 078S combination. An espresso-only buyer should compare mature flat-burr alternatives and their service routes. A filter-only buyer should compare the 078. A true multi-method buyer may justify the premium because one motor, one footprint and one dose workflow replace two grinders, but only if switching range and cup profile remain acceptable.',
  ownerPattern: 'Current owner threads repeatedly focus on a sensitive espresso dial, burr break-in, hopper popcorning, static, calibration and cleaning access. Some owners report attractive, quiet and repeatable daily use; others describe narrow sweet spots or difficult service events. Those reports identify questions and routines, not representative reliability rates.',
  ownerCaution: 'One eight-month owner described good coffee and strong support alongside difficult disassembly and two repair events. Other owners in the same thread said they had not needed to open the grinder. Neither account supplies a denominator. Verify current warranty terms, permitted owner maintenance and parts availability before assuming either trouble-free ownership or inevitable failure.',
  maintenanceNote: 'Keep water away from the burr chamber and motor. Brush the hopper, exit and cup; use the knocker after grinding; and follow Timemore’s instructions for deeper care. Unplug before permitted cleaning. Do not open the burr chamber, move calibration hardware or force a jam based only on a forum procedure when warranty or reassembly consequences are unclear. A stone, abnormal scraping, electrical smell or repeated stall calls for support rather than repeated restarts.',
  dimensions: {
    espresso: dim(9.1, 'The stepless dial and 78 mm S burrs provide serious espresso adjustment with a clean, body-supporting cup profile.', 'The useful range can feel sensitive, so dose, yield and small dial movements need discipline.', 'Current factory architecture plus independent and owner use', ['78 mm espresso-oriented flat burrs.', 'Stepless oversized adjustment dial.', 'No controlled Coffeedant particle or extraction measurements.']),
    milk: dim(8.0, 'The 078S covers filter competently when one grinder must serve both methods.', 'Dedicated filter buyers give up some of the clarity and separation associated with the 078 Turbo Burr version.', 'Independent 078 versus 078S comparison and owner context', ['Wide multi-method grind range.', 'Fuller filter profile than the brew-only 078 in one review.', 'Recipe and taste preference remain decisive.'], 'Filter brewing'),
    workflow: dim(9.0, 'Magnetic cup alignment, the large dial and rotary knocker make single dosing unusually coherent.', 'Beans can popcorn and grounds exchange can remain after large setting changes.', 'Factory design records plus independent and owner workflow reports', ['Dose-by-dose hopper and vertical feed.', 'Rotary chute knocker.', 'No timer, scale or hopper dosing.']),
    build: dim(8.4, 'The metal body, 400 W brushless motor and 78 mm assembly feel substantial for a home single-doser.', 'Deep cleaning and calibration are more consequential than the simple exterior suggests.', 'Factory construction claims and self-selected service reports', ['400 W 078-series motor.', 'All-metal construction claim.', 'Representative long-term failure incidence is unknown.']),
    features: dim(8.8, 'Variable RPM, stepless control, magnetic parts and the knocker are directly relevant to daily grinding.', 'RPM is an experiment, not a guaranteed flavor upgrade, and the grinder provides no automatic dosing.', 'Current factory feature set with independent context', ['Variable-speed brushless drive.', 'Large stepless dial.', 'No weight or time dosing.']),
    value: dim(8.0, 'The $799 proposition is strong when one polished grinder must cover espresso and occasional filter.', 'Filter-only buyers should choose the 078, while espresso-only buyers have a broad competitive field.', 'Dated official US price and availability check', ['$799 official US listing.', 'White available and black unavailable at check.', 'Parts, tax and regional warranty can change ownership cost.']),
  },
  sources: [
    { label: 'Timemore Sculptor series product page', href: official, note: 'Current US variant identities, SKU records, 078S burr purpose, stepless adjustment, 400 W motor class, magnetic parts, vertical feed, rotary knocker, price, availability and official media.' },
    { label: 'Timemore Sculptor design and feature record', href: official, note: 'Manufacturer explanation of the 078S flat burrs, brushless PID motor, variable RPM, ventilation, adjustment and auger. Performance language is treated as a claim, not Coffeedant measurement.' },
    { label: 'Timemore US 078S price and stock check', href: official, note: 'Both 078S colors listed at US$799 on September 25, 2026; white variant available and black variant unavailable in the embedded Shopify record.' },
    { label: 'Nucleus 078 and 078S independent review', href: nucleus, note: 'Louis-Charles Blais review published May 27, 2024 with hands-on espresso and filter comparison, 800 to 1,400 RPM observation, retention notes, workflow strengths and caveats.' },
    { label: 'Toms Grinder Lab 078S and 064S video review', href: video, note: 'Independent 27-minute 17-second comparison published May 7, 2025. Used for visual workflow and comparative context, not Coffeedant testing.' },
    { label: 'Current 078S versus 064S owner discussion', href: currentModelThread, note: 'Self-selected current model comparison about motor, feed bin, burr size and priorities. Used only to frame questions, not to establish superiority.' },
    { label: 'Timemore US refund policy', href: officialReturns, note: 'Current direct-store return conditions and exclusions. Buyers should recheck terms because region, dealer and use state can change eligibility.' },
    { label: 'Recent 078S setup owner discussion', href: ownerCurrent, note: 'Self-selected exact-model discussion about dial sensitivity, calibration, RPM and changing espresso behavior. Anecdotes are not universal setup rules.' },
    { label: 'Eight-month 078S owner review', href: ownerLongTerm, note: 'Detailed self-selected account praising cup quality and build while describing difficult internal access, repair events and support. One unit cannot establish incidence.' },
    { label: '078S dial-in troubleshooting discussion', href: ownerDialIn, note: 'Mixed owner advice showing how dose, puck preparation, grind adjustment, calibration and burr condition can be confused. Used to emphasize controlled changes.' },
    { label: 'Ode Gen 2 and 078S filter comparison discussion', href: filterComparison, note: 'Owner context separating espresso-first 078S use from filter-focused grinders. Preferences are recipe- and taste-dependent.' },
    { label: 'Current 078 or 078S model-choice discussion', href: modelComparison, note: 'Recent self-selected context on choosing the brew-only 078 for filter or 078S when espresso capability is required.' },
  ],
  comparisons: [
    { name: 'Timemore Sculptor 078S', quickDecision: 'Choose when espresso is central and one grinder must also cover filter.', priceClass: '$799 US check', dimensions: 'Compact vertical single-dose body', heating: '400 W brushless variable-speed motor', coffeeSetup: '78 mm S burrs and stepless dial', milkWorkflow: 'Magnetic cup and rotary knocker', bestFor: 'Espresso-first multi-method use' },
    { name: 'Timemore Sculptor 078', quickDecision: 'Choose the stepped Turbo Burr version when filter clarity is the primary goal and espresso is not required.', priceClass: '$799 US check', dimensions: 'Same 078-series body class', heating: '400 W brushless variable-speed motor', coffeeSetup: '78 mm Turbo Burrs and 36-step dial', milkWorkflow: 'Same basic single-dose path', bestFor: 'Dedicated filter brewing' },
    { name: 'Baratza Encore ESP', href: '/grinder/baratza-encore-esp/', quickDecision: 'Spend much less for a repair-oriented stepped grinder when ultimate adjustment feel and motor refinement matter less.', priceClass: 'Entry electric espresso', dimensions: 'Taller hopper grinder', heating: 'Lower-power conventional motor', coffeeSetup: '40 mm conical burr and stepped range', milkWorkflow: 'Cup or bin dosing', bestFor: 'Budget espresso start' },
    { name: '1Zpresso K-Ultra', href: '/grinder/1zpresso-k-ultra/', quickDecision: 'Choose a portable manual grinder for broad brewing range without motor, counter permanence or mains power.', priceClass: 'Premium hand grinder', dimensions: 'Portable hand-held body', heating: 'Manual', coffeeSetup: '48 mm conical burr and external click dial', milkWorkflow: 'Manual catch cup transfer', bestFor: 'Travel and quiet manual dosing' },
  ],
  comparisonNote: 'Compare exact burr set, adjustment type and intended method before comparing body shape. The 078S is not simply a color option for the 078. Also compare permitted maintenance, calibration, parts route, noise preference, dose size, switching frequency and whether one grinder or two specialized grinders makes the better station.',
  recommendations: [
    { kicker: 'Lower-cost electric', title: 'Baratza Encore ESP', text: 'Start with a repair-friendly stepped espresso grinder when budget matters more than large flat burrs and variable speed.', href: '/grinder/baratza-encore-esp/', linkLabel: 'Read Encore ESP review' },
    { kicker: 'Portable all-rounder', title: '1Zpresso K-Ultra', text: 'Choose a quiet manual workflow with broad brew range and no permanent counter footprint.', href: '/grinder/1zpresso-k-ultra/', linkLabel: 'Read K-Ultra review' },
    { kicker: 'Browse the category', title: 'Coffee grinder guide', text: 'Compare grinder types, burr geometry, adjustment and workflow before choosing a price tier.', href: '/grinder/', linkLabel: 'Open grinder guide' },
    { kicker: 'Understand the trade-off', title: 'Conical versus flat burrs', text: 'Use the burr-shape guide to separate repeatable design differences from oversimplified flavor promises.', href: '/blog/conical-vs-flat-burr-grinders/', linkLabel: 'Read burr guide' },
  ],
  faqs: [
    { question: 'Is this review about every Timemore Sculptor?', answer: 'No. It scores the current US 078S with 78 mm espresso-oriented burrs and stepless adjustment. The 078, 064S, 064S Gen 2 and 078SSP are different buying decisions.' },
    { question: 'Is the 078S better than the 078?', answer: 'Not universally. Choose 078S when espresso capability is required. Choose the 078 when filter is the priority and you want its dedicated Turbo Burr profile and stepped dial.' },
    { question: 'What is the Timemore Sculptor 078S price?', answer: 'Timemore US listed it at $799 on September 25, 2026. White was available and black unavailable during that check. Recheck stock, tax, shipping and regional warranty.' },
    { question: 'Does the 078S work for light-roast espresso?', answer: 'It is designed for espresso and has a 400 W motor, but one independent review reported that very dense light roasts could challenge the lowest RPM. Increase speed if it audibly labors and avoid treating low speed as automatically better.' },
    { question: 'Does it have zero retention?', answer: 'No grinder should be assumed to have literal zero exchange or retention. The rotary knocker helps clear fines and chaff, but beans, static, grind setting and major dial changes can alter what remains.' },
    { question: 'Do the burrs need seasoning?', answer: 'Owners report changing behavior over the first kilograms, but Coffeedant found no controlled basis for prescribing a universal quantity. Learn the delivered grinder with normal coffee, record recipes and recalibrate only with a documented reason.' },
    { question: 'Can I clean the burrs myself?', answer: 'Routine external brushing is straightforward. For internal access, follow the current Timemore instructions and warranty terms. Owner reports describe consequential reassembly, so do not improvise around the burr carrier or calibration.' },
    { question: 'Should I change RPM for every coffee?', answer: 'Not at first. Pick a sensible speed, dial the coffee by taste and change one variable at a time. Use RPM only when you can identify what it changes for that coffee or when the motor needs more headroom.' },
  ],
  finalTitle: 'Choose the 078S for its exact espresso-first compromise',
  finalVerdict: [
    'The Sculptor 078S is a well-integrated single-dose grinder, not a generic member of one interchangeable family. Its 78 mm S burrs, stepless dial, variable-speed 400 W motor, magnetic cup and rotary knocker support a serious espresso routine with occasional filter flexibility.',
    'The model boundary is the buying decision. The brew-only 078 is more compelling for dedicated filter use, while the 064S and current successors carry different burr, motor and service considerations. A listing that says only Sculptor is incomplete.',
    'Buy the 078S when one grinder must cover espresso first and filter second, the $799 dated price fits, and the current support route is acceptable. Buy the 078 for filter, Encore ESP for a lower-cost start, or K-Ultra when manual portability matters more than powered speed.',
  ],
  video: {
    id: 'SUDpLjo7y5k',
    title: 'Review of Timemore Sculptor 078S and 064S',
    creator: 'Toms Grinder Lab',
    published: '2025-05-07',
    note: 'Independent comparison running 27 minutes 17 seconds. It shows exact-model workflow and comparative observations but does not provide Coffeedant testing or population-level reliability evidence.',
  },
};

profile.dimensionDiagnostics = {
  espresso: [
    { signal: 'Shot runs quickly and tastes thin', guidance: 'Hold dose and yield steady, then move the stepless dial finer in a small, recorded step.' },
    { signal: 'Motor audibly labors at a fine setting', guidance: 'Stop, clear the condition safely, and use more motor speed rather than repeatedly forcing the lowest RPM.' },
  ],
  milk: [
    { signal: 'Filter cup tastes dry or stalls', guidance: 'Move coarser or reduce agitation while keeping coffee, ratio, water and brewer steady.' },
    { signal: 'Filter cup feels heavy and lacks separation', guidance: 'Try a coarser recipe first; if clarity remains the priority, compare the dedicated 078 rather than chasing settings indefinitely.' },
  ],
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#timemore-sculptor-078s-us-current-source-1">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-4">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-8">[source]</a></p><p>Use the first week to establish a reference instead of exploring every speed. Keep one coffee, dose and method stable. Record dial, RPM, yield and taste for espresso; add water, temperature, brewer and drawdown for filter. Numbers matter only inside a complete recipe.</p>`,
  espresso: `<p>${profile.espressoNote} <a href="#timemore-sculptor-078s-us-current-source-1">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-4">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-10">[source]</a></p><p>The large dial supports very small changes, but a fine mechanical range does not eliminate the rest of espresso. Basket fill, distribution, tamp, bean age and machine temperature can imitate a grinder problem. Diagnose the puck and recipe before moving calibration hardware. Judge several ordinary shots, not the most dramatic cup of the week.</p>`,
  milk: `<p>${profile.milkNote} <a href="#timemore-sculptor-078s-us-current-source-4">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-11">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-12">[source]</a></p><p>Switching methods means more than turning the dial. A large move can leave old grounds in the path, and the next dose may carry a small amount of the previous setting. Use the knocker, allow the grinder to clear, and decide whether a small purge is worth the coffee when the recipe is sensitive. Write down useful espresso and filter landmarks, but treat them as local references for this grinder.</p>`,
  workflow: `<p>${profile.workflowNote} <a href="#timemore-sculptor-078s-us-current-source-1">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-4">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-8">[source]</a></p><p>Single dosing shifts labor from filling a hopper to measuring each coffee. That helps when changing beans and decaf, but is not fastest for repeated identical drinks. Time weighing, grinding, transfer, puck preparation or brewer loading, knocking the chute, and resetting the dial. The 078S is strongest when that deliberate sequence is welcome.</p>`,
  build: `<p>${profile.buildNote} <a href="#timemore-sculptor-078s-us-current-source-1">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-4">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-9">[source]</a></p><p>${profile.maintenanceNote}</p><p>Build quality and serviceability are separate judgments. A heavy metal body and smooth dial can feel excellent while internal work remains specialized. Confirm who handles a warranty claim, whether the seller or Timemore supplies parts, which procedures owners may perform, and whether opening the burr chamber changes coverage.</p>`,
  features: `<p>${profile.featuresNote} <a href="#timemore-sculptor-078s-us-current-source-1">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-4">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-5">[source]</a></p><p>Prioritize grind, then recipe, then RPM. Use speed to answer a defined motor or taste question, not as another simultaneous change. The knocker and magnetic cup help every dose, so they provide more dependable value than speculative speed rules.</p>`,
  value: `<p>${profile.valueNote} <a href="#timemore-sculptor-078s-us-current-source-3">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-4">[source]</a> <a href="#timemore-sculptor-078s-us-current-source-7">[source]</a></p><p>Price the complete decision on the same day. Include tax, seller support, return restrictions, any purge coffee, a scale, the espresso machine or brewer, and the cost of replacing a compromise early. The white 078S was available and the black one unavailable during this check, so color stock should not be turned into a general availability claim.</p>`,
  ownership: `<p>${profile.ownerPattern}</p><aside class="review-community-evidence" aria-labelledby="timemore-owner-title"><h3 id="timemore-owner-title">Selected owner evidence kept in proportion</h3><ul><li><strong>The dial rewards notes</strong><p>Recent 078S owners describe a sensitive espresso range and value a repeatable zero or pointer reference. That supports careful recipe logging, not a universal number.</p></li><li><strong>Filter preferences divide</strong><p>Some owners enjoy the 078S as an all-rounder, while others reserve it for espresso and prefer a dedicated filter grinder. The difference is a buying preference, not proof that one cup is objectively best.</p></li><li><strong>Internal access deserves respect</strong><p>One long-term report describes difficult disassembly and repair events; other owners say they rarely or never open the grinder. This identifies a service question without establishing a failure rate.</p></li></ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

const timemoreSculptor078S = buildUpgradeReview(profile);
timemoreSculptor078S.article.authorNote = 'I treated the exact Timemore Sculptor 078S as a grinder decision, not as a name for the whole family. I checked the current US variant record, dated price, independent evaluation, video evidence and owner discussions. Coffeedant has not physically tested this grinder.';
timemoreSculptor078S.article.basisDisclosure = 'This is a research-led assessment built from current Timemore material, independent review and video evidence, owner discussions and dated US price context. Coffeedant has not physically tested or measured this grinder. Scores describe the documented ownership proposition, not Coffeedant particle analysis, extraction tests, sound readings or durability trials.';

export const upgradeTimemoreSculptorReviews: MachineReviewData[] = [timemoreSculptor078S];
