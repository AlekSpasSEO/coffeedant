import {
  buildResearchReview,
  comparisonTablesHtml,
  faqHtml,
  recommendationCardsHtml,
} from '../batch-review-builder';

export const bezzeraBz13PidReview = buildResearchReview({
  slug: '/espresso-machine/bezzera-bz13-pid/',
  productId: 'CD-EM-000069',
  brand: 'Bezzera',
  model: 'BZ13 PID',
  sku: 'BZ13 DE / BZ13 PM',
  category: 'Semi-automatic heat-exchanger espresso machine',
  brandPath: '/bezzera/',
  title: 'Bezzera BZ13 PID review: fast BZ group, HX steam, and a real availability question',
  description: 'A research-led Bezzera BZ13 PID review covering the DE and PM controls, heat-exchanger temperature logic, milk pace, ownership, current availability, and the best alternatives.',
  verdictLabel: 'Compact heat-exchanger specialist',
  verdict: 'The BZ13 PID is a strong match for a milk-drink household that wants a narrow traditional machine, quicker group readiness than a large E61, and either manual PM control or the DE model’s volumetric buttons. Its 1.5 L heat-exchanger boiler can brew and steam together, but the PID manages boiler temperature through an offset rather than measuring water at the puck. The harder question in 2026 is not capability. It is whether discontinued or limited new stock, regional support, and a defensible warranty make a particular unit worth buying.',
  assessment: '4.1/5 overall: capable and unusually compact, with availability now part of the product decision.',
  image: 'https://cdn.shopify.com/s/files/1/0078/9502/3675/products/Bezzera-BZ13-PM_0089.jpg?v=1764083295',
  imageAlt: 'Bezzera BZ13 PID espresso machine in polished stainless steel',
  published: '2025-11-13',
  updated: '2026-09-17',
  authorNote: 'I approached the BZ13 as a current buying decision, not a nostalgia piece. I reconciled the DE and PM listings, current availability, the manual, independent demonstrations, service material, and owner discussions. This is a research-led review; I have not physically tested this machine.',
  basisDisclosure: 'The scores are editorial judgments based on manufacturer documentation, current dealer records, independent demonstrations, service information, and clearly labeled owner reports. They are not Coffeedant measurements, tasting results, or a disguised hands-on test.',
  price: {
    label: 'Last listed US price',
    msrp: '$1,699.00 DE',
    numeric: '1699.00',
    currency: 'USD',
    typical: 'DE $1,699 and PM $1,599 in archived retailer data; both marked unavailable when checked',
    checked: 'September 17, 2026',
  },
  links: [
    { label: 'Check DE availability', href: 'https://www.wholelattelove.com/products/bezzera-bz13-de', note: 'Dealer listing, marked unavailable at the research check', primary: true },
    { label: 'Check Amazon availability', href: 'https://amzn.to/3Z8Pw5e', note: 'Affiliate link, model and seller may vary', affiliate: true },
  ],
  facts: [
    { label: 'Boiler', value: '1.5 L copper heat exchanger with PID-managed boiler temperature' },
    { label: 'Group', value: 'Bezzera 58 mm chrome-plated brass BZ group with electric cartridge heating' },
    { label: 'Controls', value: 'DE volumetric buttons or PM manual brew switch, depending on version' },
    { label: 'Water', value: '3 L removable reservoir; no factory direct-water connection' },
    { label: 'Pump', value: 'Vibratory pump with brew-pressure gauge' },
    { label: 'Size', value: 'About 25 cm wide, 42.5 to 45 cm deep, and 37.5 cm high; verify the exact trim' },
    { label: 'Weight', value: 'Roughly 18.5 to 19 kg, depending on listing and trim' },
    { label: 'Current status', value: 'US DE and PM dealer records checked for this review were marked unavailable' },
  ],
  quickAnswers: [
    { question: 'Which version does this cover?', answer: 'Both PID versions: BZ13 DE with programmable volumetric buttons and BZ13 PM with manual start and stop control.' },
    { question: 'Is the PID controlling brew water directly?', answer: 'No. It regulates the steam boiler and displays a brew-temperature offset. Group and shot conditions still matter.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. The heat exchanger supplies brew water while the boiler retains steam service, so the two jobs can overlap.' },
    { question: 'How quickly is it ready?', answer: 'The dealer claims about eight minutes. Treat that as a readiness claim, then verify the locked-in portafilter and cup are adequately heated for your routine.' },
    { question: 'Can it be plumbed in?', answer: 'Not in its standard reservoir configuration. Buyers who need mains water and a drain should compare rotary-pump alternatives.' },
    { question: 'Is it still a sensible new purchase?', answer: 'Only with confirmed stock, model identity, warranty, and service. The main US dealer records were unavailable at the September 2026 check.' },
  ],
  bestFor: [
    'Milk-drink households that want HX steam and simultaneous brewing in a narrow body',
    'Buyers who prefer Bezzera’s electrically heated group over a slower, larger E61 group',
    'Someone who finds a supported DE or PM unit at a price that reflects its current availability',
  ],
  avoidIf: [
    'You want a brew boiler whose temperature is measured and controlled directly',
    'You need a rotary pump, direct plumbing, or quiet early-morning operation',
    'The seller cannot establish model identity, warranty coverage, parts access, and return terms',
  ],
  pros: [
    'Narrow 250 mm body and electrically heated group reduce the usual E61 space and warm-up burden',
    'Heat exchanger supports brewing and steaming at the same time',
    'DE volumetrics can stop the shot while the user textures milk',
    'Standard 58 mm preparation format and a large 3 L reservoir',
  ],
  cons: [
    'PID changes an HX boiler setpoint rather than directly controlling water at the puck',
    'Vibratory pump is more audible and the machine is reservoir-only',
    'No factory pressure or flow-profiling control',
    'Current new-stock availability and after-sale support vary substantially',
  ],
  alternatives: [
    { name: 'Lelit Mara X', reason: 'Compact E61 heat exchanger with a different temperature-management approach.', href: '/espresso-machine/lelit-mara-x/' },
    { name: 'Profitec Pro 400', reason: 'Current compact HX platform with rotary-valve ergonomics and documented modes.', href: '/espresso-machine/profitec-pro-400/' },
    { name: 'Rancilio Silvia Pro X', reason: 'Dual boilers and direct brew-temperature control in a similarly practical footprint.', href: '/espresso-machine/rancilio-silvia-pro-x/' },
  ],
  dimensions: [
    {
      id: 'espresso', score: 8.0,
      reason: 'The heated BZ group and adjustable HX boiler are repeatable, but the display is an offset rather than a puck-temperature measurement.',
      buyerMeaning: 'Good for conventional espresso; exact temperature experiments favor a dedicated brew boiler.',
      evidenceStatus: 'Documented architecture, independently demonstrated, no Coffeedant measurement',
      sourceIds: ['bz13-manual', 'bz13-de', 'bz13-video', 'bz13-pro300', 'bz13-hx-owner'],
      deepDiveId: 'bz13-espresso',
      title: 'Read the PID as an HX control, not a laboratory thermometer',
      intro: [
        'The PID regulates the service boiler through a brew-oriented offset. The heated group helps, but idle time and recent use still affect an HX machine.',
      ],
      evidence: [
        { signal: 'PID display', evidence: 'Dealer and manual material describe boiler control with a brew-temperature offset.', decision: 'Use one repeatable setpoint and routine before chasing single-degree changes.' },
        { signal: 'Electrically heated BZ group', evidence: 'Cartridge elements heat the compact chrome-plated brass group independently.', decision: 'Expect quicker group readiness than a large passive E61, not instant full-system equilibrium.' },
        { signal: 'Heat-exchanger water path', evidence: 'Brew water passes through an exchanger inside the steam boiler.', decision: 'Idle time and recent steaming can make a short flush part of the recipe.' },
      ],
      note: 'Recipe guidance here is an editorial starting protocol. It is not a claim about measured water temperature or Coffeedant tasting.',
    },
    {
      id: 'milk', score: 8.6,
      reason: 'The 1.5 L HX boiler permits brewing and steaming together, within one shared boiler system.',
      buyerMeaning: 'Strong for a home milk queue, especially when DE volumetrics free attention for milk.',
      evidenceStatus: 'Documented HX design, corroborated by independent demonstration and owner reports',
      sourceIds: ['bz13-de', 'bz13-pm', 'bz13-video', 'bz13-owner', 'bz13-manual'],
      deepDiveId: 'bz13-milk',
      title: 'Steam is the BZ13’s clearest reason to choose an HX platform',
      intro: [
        'The heat exchanger keeps steam available during brewing. Milk technique remains manual, and PM still requires the user to stop the shot.',
      ],
      evidence: [
        { signal: '1.5 L copper boiler', evidence: 'Legacy specifications and dealer records agree on a 1.5 L HX service boiler.', decision: 'Suitable for a household milk queue without paying for two boilers.' },
        { signal: 'Simultaneous work', evidence: 'The HX architecture and dealer demonstration support brewing while steam is open.', decision: 'Stage the second dose and milk jug to exploit the overlap.' },
        { signal: 'DE shot buttons', evidence: 'The DE offers programmed single and double doses plus manual control.', decision: 'Choose DE when one person regularly manages espresso and milk together.' },
      ],
    },
    {
      id: 'workflow', score: 8.4,
      reason: 'The heated group, large tank, and DE volumetrics aid mornings; reservoir filling, pump noise, and HX flushes remain.',
      buyerMeaning: 'DE favors multitasking, while PM suits direct manual control.',
      evidenceStatus: 'Documented controls, dealer demonstration, self-selected owner context',
      sourceIds: ['bz13-de', 'bz13-pm', 'bz13-video', 'bz13-owner', 'bz13-manual'],
      deepDiveId: 'bz13-workflow',
      title: 'DE and PM change attention, not the underlying coffee system',
      intro: [
        'Both versions share the core machine. DE can stop a programmed volume; PM runs until the switch is pressed again. Neither weighs the beverage.',
      ],
      evidence: [
        { signal: 'DE volumetric controls', evidence: 'Programmable single and double buttons coexist with manual dispensing.', decision: 'Useful for milk multitasking, but verify output on a scale as coffee changes.' },
        { signal: 'PM manual switch', evidence: 'Start and stop stay entirely with the user.', decision: 'Best for buyers who already stop shots by mass and want simpler controls.' },
        { signal: 'Vibratory pump', evidence: 'The reservoir-fed pump is simpler to install than a plumbed rotary system.', decision: 'Expect audible operation and no mains-water option.' },
      ],
    },
    {
      id: 'build', score: 8.2,
      reason: 'Traditional metal construction supports repair, but age, stock status, and local parts access now matter as much as materials.',
      buyerMeaning: 'Local support can make it durable; an orphaned bargain can become a sourcing project.',
      evidenceStatus: 'Documented construction and service process, long-term failure rates unknown',
      sourceIds: ['bz13-manual', 'bz13-service', 'bz13-de', 'bz13-pm', 'bz13-bezzera'],
      deepDiveId: 'bz13-build',
      title: 'Traditional components help only when parts and technicians are reachable',
      intro: [
        'Familiar valves, a vibration pump, copper boiler, solenoid, and serviceable group support repair without guaranteeing economical local parts.',
      ],
      evidence: [
        { signal: 'Metal structure', evidence: 'Dealer material identifies stainless housing, copper boiler, and chrome-plated brass group.', decision: 'Good material basis, but cosmetic stainless is not a reliability statistic.' },
        { signal: 'BZ group service video', evidence: 'A full tear-down shows replaceable seals and accessible mechanical parts.', decision: 'Routine group work is plausible for a qualified technician.' },
        { signal: 'Current stock status', evidence: 'Both US dealer records were unavailable when checked.', decision: 'Confirm parts, warranty, and return remedy before treating a low price as value.' },
      ],
    },
    {
      id: 'features', score: 7.4,
      reason: 'PID, timer, gauge, hot water, and optional volumetrics cover basics without direct brew PID, profiling, or scheduling.',
      buyerMeaning: 'Buy it for compact HX fundamentals, not a current dual-boiler feature list.',
      evidenceStatus: 'Feature presence documented; disputed or hidden preinfusion claims excluded',
      sourceIds: ['bz13-manual', 'bz13-de', 'bz13-pm', 'bz13-preinfusion', 'bz13-video'],
      deepDiveId: 'bz13-features',
      title: 'Useful controls are present, but do not invent functions the manual does not promise',
      intro: [
        'DE buttons and a timer improve repetition. They do not add low-pressure preinfusion, profiling, direct brew-boiler PID, or grinding.',
      ],
      evidence: [
        { signal: 'PID plus timer display', evidence: 'The controller changes the boiler target and can time extraction.', decision: 'Helpful for repeatability, with the HX offset caveat kept visible.' },
        { signal: 'No documented preinfusion control', evidence: 'Current manual and retailer feature lists do not establish an adjustable preinfusion program.', decision: 'Do not buy based on forum speculation about hidden settings.' },
        { signal: 'No direct plumbing', evidence: 'The standard machine uses a tank and vibratory pump.', decision: 'Move to a rotary platform if mains water is central to the plan.' },
      ],
    },
    {
      id: 'value', score: 8.1,
      reason: 'Strong steam and compact construction had value, but unavailable stock changes a fair transaction.',
      buyerMeaning: 'Worthwhile only when condition, warranty, and price align.',
      evidenceStatus: 'Dated dealer price and availability check, market variability disclosed',
      sourceIds: ['bz13-de', 'bz13-pm', 'bz13-pro300', 'bz13-buying', 'bz13-owner'],
      deepDiveId: 'bz13-value',
      title: 'Value is now a transaction-level judgment',
      intro: [
        'Archived prices were $1,699 DE and $1,599 PM, but both dealer records were unavailable. New old stock, used, refurbished, and marketplace offers carry different remedies.',
      ],
      evidence: [
        { signal: 'Last listed US price', evidence: 'Dealer product data retained $1,699 DE and $1,599 PM while showing both unavailable.', decision: 'Use those figures as dated context, not a promise of inventory.' },
        { signal: 'Successor and alternatives', evidence: 'Current compact HX and dual-boiler machines now occupy the same broad budget.', decision: 'Price the BZ13 against a supported current product, not its old reputation.' },
        { signal: 'Version difference', evidence: 'DE adds volumetrics; PM is mechanically simpler and was listed $100 lower.', decision: 'Pay for DE only if automatic shot stopping changes the daily routine.' },
      ],
    },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. I reconciled Bezzera architecture material, the BZ13 instruction manual, the separate DE and PM dealer records, independent demonstrations, service videos, and owner discussions. Product data and availability were checked September 17, 2026.</p>
      <p>Dealer performance language is treated as a claim, not a measurement. Reddit and forum posts are self-selected experience and identify questions rather than failure rates. Coffeedant did not measure warm-up, water temperature, sound, steam output, or extraction. Exact internal revision, representative lifespan, regional parts inventory, and the condition of any individual used machine remain unknown.</p>
    `,
    sections: [
      {
        id: 'bz13-orientation', eyebrow: 'The buying decision',
        title: 'Choose the BZ13 for its compact HX workflow, then verify that the particular unit is supportable',
        html: `
          <p>The BZ13 sits in an appealing middle ground. Its body is only about 250 mm wide, but a 1.5 L heat-exchanger boiler keeps steam available while a shot runs. Bezzera’s compact brass group has its own cartridge heaters, so it does not depend solely on a large thermosyphon-fed group warming by circulation. The result is a traditional portafilter workflow without the full counter width and warm-up habit associated with many E61 machines. <a href="#bz13-de">[2]</a> <a href="#bz13-pm">[3]</a></p>
          <p>That description needs two qualifications. First, the PID regulates the service boiler and uses an offset to present a brew-oriented target. It is not a temperature sensor sitting above the puck. Second, the BZ13 is no longer an ordinary current-stock purchase in the US evidence checked for this review. Whole Latte Love’s DE and PM product records retained prices but reported unavailable status. A buyer is likely evaluating leftover inventory, a refurbished example, or a used machine, so warranty and service become part of the specification.</p>
        `,
      },
      {
        id: 'bz13-espresso', eyebrow: 'Espresso performance',
        title: 'The heated BZ group improves readiness, while HX behavior still rewards a fixed routine',
        html: `
          <p>The productive way to use this system is to establish a repeatable thermal sequence. Start the machine with the portafilter locked in, let the advertised readiness interval pass, warm the cup, and observe what the first flush does after a long idle. If it spits and flashes aggressively, give the exchanger a consistent cooling flush. If the flow is calm, avoid copying a long flush intended for a different HX machine. The electrically heated group changes the equation, so generic E61 advice can waste water or cool the system unnecessarily. <a href="#bz13-manual">[1]</a> <a href="#bz13-video">[4]</a></p>
          <p>Light roasts expose the architecture’s limit more clearly. A higher target, longer ratio, and thoroughly heated portafilter may help, but the BZ13 does not provide low-pressure preinfusion or live flow control. One owner discussion accurately frames the tradeoff against a small dual boiler: BZ13 gains HX steam and a heated group, while the dual boiler controls brew water more directly. <a href="#bz13-hx-owner">[8]</a> Buyers who want repeatable temperature experiments should favor the latter.</p>
        `,
      },
      {
        id: 'bz13-milk', eyebrow: 'Milk and steam',
        title: 'The boiler earns its space when cappuccinos arrive in a queue',
        html: `
          <p>The BZ13’s strongest case is not a specification-sheet PID. It is the ability to extract and steam at the same time without switching a single boiler between modes. The 1.5 L service boiler is large enough for a serious home milk routine, and independent demonstrations show the intended overlap. That can make two or three cappuccinos feel more coordinated than on a compact dual-use boiler. <a href="#bz13-video">[4]</a></p>
          <p>DE changes where attention goes. Programmed volumetric stopping can end the pump while the user watches milk texture. Treat the saved volume as a convenience, then verify beverage mass when beans, dose, or grind change because a flowmeter counts water, not espresso yield in the cup. PM gives direct start and stop control, which suits someone already using a scale but makes true simultaneous work more demanding.</p>
        `,
      },
      {
        id: 'bz13-workflow', eyebrow: 'Daily workflow',
        title: 'DE reduces divided attention; PM keeps the shot entirely manual',
        html: `
          <p>A realistic morning still contains grinding, dosing, distribution, tamping, a thermal check, extraction, milk, and cleanup. The dealer’s eight-minute heat-up statement concerns machine readiness, not the entire drink or every metal part reaching a measured equilibrium. Owners often report that the heated group makes the wait feel shorter than a large E61, but those reports do not replace a controlled test. <a href="#bz13-owner">[7]</a></p>
          <p>The 3 L tank gives useful autonomy, though its location means cabinetry matters. Measure the full 425 to 450 mm depth reported across listings, add portafilter and hose clearance, and check how the tank lifts out. The 250 mm body may save width only to demand more depth than a photograph suggests. A vibratory pump also makes its presence known. Buyers seeking quiet operation or permanent plumbing should not expect accessories to turn this model into a rotary-pump machine.</p>
        `,
      },
      {
        id: 'bz13-build', eyebrow: 'Build and service',
        title: 'The mechanical layout is legible, but support is now a local question',
        html: `
          <p>Copper boiler, brass group, replaceable valves, vibration pump, solenoids, and stainless panels describe a conventional serviceable machine. Whole Latte Love’s BZ-group maintenance video shows the group being dismantled rather than treated as a sealed module. That is useful evidence for repair access, not proof that every owner should open a heated pressure appliance. Electrical and boiler work belong with a qualified technician. <a href="#bz13-service">[11]</a></p>
          <p>DE adds a control board and flowmeter logic for volumetric dosing. PM removes that convenience but does not eliminate electronics, heating controls, pump wear, scale risk, or seals. A used inspection should demonstrate cold fill, full heat, pump pressure, group flow, steam and hot water, dry closing valves, and clean recovery after a shot. Ask about leaks under the case and the water used, then judge documents and seller remedy as seriously as polished panels.</p>
        `,
      },
      {
        id: 'bz13-features', eyebrow: 'Controls and limits',
        title: 'A focused feature set works best when its boundaries stay explicit',
        html: `
          <p>The front panel supplies what most traditional users need: boiler temperature adjustment, extraction timing, a pressure gauge, steam, hot water, and either manual or volumetric shot control. That is a coherent set. The DE can store dose volumes, yet manual control remains available. The PM asks the user to stop every shot, which is not a flaw if a scale is already part of the station.</p>
          <p>Do not infer preinfusion from a programmed button. A recent owner thread considered using one dose button for a short burst and another for extraction. The three-way valve can relieve pressure and disturb the puck between those events, and no current manual evidence establishes a hidden adjustable preinfusion mode. <a href="#bz13-preinfusion">[9]</a> Treat any seller claim as unverified until it is tied to a documented revision and operation.</p>
        `,
      },
      {
        id: 'bz13-value', eyebrow: 'Price and value',
        title: 'The invoice needs to price support, condition, and version, not just steel and boiler size',
        html: `
          <p>Whole Latte Love’s product data showed $1,699 for the DE and $1,599 for the PM when checked, with both marked unavailable. Those are useful historical anchors but not current offers. A marketplace listing could refer to a different color, wood package, voltage, used condition, or seller with no authorized service. The linked Amazon route is therefore an availability check, not a statement that a compliant new unit exists at a particular price.</p>
          <p>At roughly the old price, compare a current compact HX such as the Mara X or Profitec Pro 400 and a direct-temperature dual boiler such as the Silvia Pro X. The BZ13 can still win on narrow width, heated-group readiness, DE volumetrics, and steam character. A current machine can win on warranty certainty, updated controls, and an active dealer channel. Value turns on which risk the buyer is actually assuming.</p>
        `,
      },
      {
        id: 'bz13-compare', eyebrow: 'Choose the architecture',
        title: 'BZ13 versus compact HX and dual-boiler alternatives',
        html: `
          <p>The closest alternatives divide into two groups. Mara X and Pro 400 preserve a compact heat-exchanger approach with current product support. Silvia Pro X and Profitec Pro 700 use separate brew and steam boilers, gaining direct brew control at the cost of a different footprint and price position.</p>
          ${comparisonTablesHtml('Bezzera BZ13 PID', [
            { name: 'Bezzera BZ13 PID', href: '/espresso-machine/bezzera-bz13-pid/', priceClass: '$1,599 PM / $1,699 DE last listed; unavailable at check', quickDecision: 'Choose for narrow width, heated-group readiness, and HX milk pace if support is established.', dimensions: 'About 250 W × 425–450 D × 375 H mm', heating: '1.5 L copper HX plus electrically heated BZ group', coffeeSetup: '58 mm BZ group; PID offset; DE volumetric or PM manual', milkWorkflow: 'Brew and steam together; joystick steam valve', bestFor: 'Compact milk-drink station with a verified seller' },
            { name: 'Lelit Mara X', href: '/espresso-machine/lelit-mara-x/', priceClass: 'Current compact HX class', quickDecision: 'Choose a current E61 HX with brew-priority temperature logic.', dimensions: 'Compact E61 body; verify tank and cup clearance', heating: 'HX with managed thermosyphon modes', coffeeSetup: '58 mm E61; manual lever', milkWorkflow: 'Simultaneous brew and steam', bestFor: 'Buyer wanting a current supported compact HX' },
            { name: 'Profitec Pro 400', href: '/espresso-machine/profitec-pro-400/', priceClass: 'Current premium compact HX class', quickDecision: 'Choose current support, selectable modes, and E61 familiarity.', dimensions: 'Narrow E61 chassis, deeper than its width suggests', heating: 'HX with PID and E61 group', coffeeSetup: '58 mm E61; manual lever', milkWorkflow: 'Simultaneous brew and steam; rotary valves', bestFor: 'Traditional workflow with an active product channel' },
            { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', priceClass: 'Compact dual-boiler class', quickDecision: 'Choose direct brew PID control and dual-boiler separation.', dimensions: 'Boxy compact body with front-fill-friendly workflow', heating: 'Independent brew and steam boilers', coffeeSetup: '58 mm saturated-style group; programmable preinfusion', milkWorkflow: 'Brew and steam together', bestFor: 'Temperature-focused espresso plus regular milk' },
            { name: 'Profitec Pro 700', href: '/espresso-machine/profitec-pro-700/', priceClass: 'Larger premium dual-boiler class', quickDecision: 'Pay more for rotary plumbing, dual boilers, and expansion room.', dimensions: 'Substantially larger and heavier E61 platform', heating: 'Dual boilers with PID', coffeeSetup: '58 mm E61; flow-control options vary', milkWorkflow: 'High steam capacity; plumbable rotary pump', bestFor: 'Permanent station with mains-water ambitions' },
          ], 'BZ13 prices are dated dealer records checked September 17, 2026, not live inventory. Alternative prices and bundles move. Verify regional voltage, warranty, and exact configuration before purchase.')}
        `,
      },
      {
        id: 'bz13-ownership', eyebrow: 'Ownership plan',
        title: 'Water and service determine whether the compact machine stays convenient',
        html: `
          <h3>Use water as an engineering input</h3>
          <p>The ideal water has enough alkalinity for corrosion protection and taste without excessive hardness that deposits scale. A generic softening pouch cannot correct every source. Ask the seller or technician for a target compatible with the copper boiler and local conditions, then test the water entering the tank. Avoid assuming distilled water is safe without remineralization guidance.</p>
          <h3>Separate daily cleaning from mineral service</h3>
          <p>Rinse the basket, wipe the group, purge the wand, and clean milk residue immediately. Backflush with water on a routine appropriate to use, and use detergent only as the manual or service provider directs. Descaling the internal HX and boiler is a different intervention. If scale is suspected, a professional service may be safer than circulating a strong acid through an unfamiliar used machine.</p>
          <h3>Buy used with a hot demonstration</h3>
          <p>A polished cold machine proves little. Ask the seller to fill and heat it, pull a shot, dispense water, steam, and close both valves. Listen to the pump, inspect underneath for leaks, confirm DE buttons stop as programmed, and record the serial, voltage, and included portafilters before payment.</p>
        `,
      },
      {
        id: 'bz13-related', eyebrow: 'Where to go next',
        title: 'Choose the machine around temperature control, milk pace, and support',
        html: `
          <p>The BZ13 is not automatically the best machine because it combines PID and an HX boiler. It is the right machine when its heated-group cadence, steam, narrow body, and a particular supported offer align. These four reviews move one constraint at a time.</p>
          ${recommendationCardsHtml([
            { kicker: 'Current compact HX', title: 'Lelit Mara X', text: 'Keep simultaneous brew and steam while moving to a current compact E61 platform with managed temperature modes.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read the Mara X review', featured: true },
            { kicker: 'Traditional premium HX', title: 'Profitec Pro 400', text: 'Compare a current PID heat exchanger with familiar E61 service patterns and a polished valve workflow.', href: '/espresso-machine/profitec-pro-400/', linkLabel: 'Read the Pro 400 review' },
            { kicker: 'Direct brew control', title: 'Rancilio Silvia Pro X', text: 'Choose separate boilers and direct brew-temperature adjustment when espresso control matters more than HX simplicity.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read the Silvia Pro X review' },
            { kicker: 'Plumbed dual boiler', title: 'Profitec Pro 700', text: 'Move to a rotary pump, mains-water option, and larger dual-boiler platform for a permanent high-capacity station.', href: '/espresso-machine/profitec-pro-700/', linkLabel: 'Read the Pro 700 review' },
          ])}
        `,
      },
      {
        id: 'faq', eyebrow: 'Questions before buying',
        title: 'Bezzera BZ13 PID FAQ',
        html: faqHtml([
          { question: 'What is the difference between the BZ13 DE and PM?', answer: 'They share the main boiler, heated BZ group, reservoir, pump, and PID concept. DE adds programmable volumetric single and double buttons plus manual dispensing. PM uses manual start and stop control.' },
          { question: 'Does the BZ13 PID directly control brew temperature?', answer: 'It controls the heat-exchanger service boiler and displays a brew-oriented offset. It does not measure puck temperature or independently control a dedicated brew boiler.' },
          { question: 'Can the BZ13 brew espresso and steam milk at the same time?', answer: 'Yes. Its heat exchanger supplies brew water while the service boiler remains available for steam. On DE, programmed shot stopping can make that overlap easier to manage.' },
          { question: 'Does the BZ13 have preinfusion?', answer: 'The evidence reviewed does not establish a user-programmable low-pressure preinfusion mode. Do not rely on hidden-setting claims without documentation for the exact revision.' },
          { question: 'How long does the Bezzera BZ13 take to warm up?', answer: 'The dealer claims readiness in about eight minutes, helped by the compact electrically heated group. Full drink preparation and the preferred thermal routine take longer, and Coffeedant did not measure warm-up.' },
          { question: 'Can the Bezzera BZ13 connect to a water line?', answer: 'Not in its standard configuration. It uses a 3 L removable reservoir and vibratory pump. Choose a plumbable rotary-pump machine if permanent water is essential.' },
          { question: 'Is the BZ13 discontinued?', answer: 'The separate US dealer records checked on September 17, 2026 were marked unavailable. Availability differs by country and seller, so confirm whether an offer is new current stock, new old stock, refurbished, or used.' },
          { question: 'Is every 58 mm portafilter compatible?', answer: 'No. Basket diameter and portafilter locking geometry are separate questions. Buy a handle specifically documented for the Bezzera BZ group.' },
        ]),
      },
    ],
    sources: [
      { id: 'bz13-manual', label: 'Bezzera BZ13 DE user manual, hosted by Whole Latte Love', href: 'https://www.wholelattelove.com/blogs/support-articles/360061922634', note: 'Official documentation copy used for operation, control, cleaning, safety, and model architecture. Primary-document evidence hosted by a dealer.' },
      { id: 'bz13-de', label: 'Whole Latte Love: Bezzera BZ13 DE product record', href: 'https://www.wholelattelove.com/products/bezzera-bz13-de', note: 'Dealer evidence for DE volumetrics, PID offset description, HX workflow, last listed $1,699 price, product imagery, and unavailable status checked September 17, 2026.' },
      { id: 'bz13-pm', label: 'Whole Latte Love: Bezzera BZ13 PM product record', href: 'https://www.wholelattelove.com/products/bezzera-bz13-pm', note: 'Dealer evidence for manual controls, heated BZ group, HX layout, last listed $1,599 price, dimensions context, and unavailable status.' },
      { id: 'bz13-video', label: 'Whole Latte Love: Review of the Bezzera BZ13 PM and DE', href: 'https://www.youtube.com/watch?v=DMbCgF1554E', note: 'Independent retailer demonstration published April 7, 2022. Used for control layout, warm-up claim context, brewing and steaming overlap, and visible workflow, not accepted as Coffeedant testing.' },
      { id: 'bz13-pro300', label: 'Whole Latte Love: BZ13 and Profitec Pro 300 comparison', href: 'https://www.youtube.com/watch?v=RzCgeq_LRP0', note: 'Independent retailer comparison published December 15, 2023. Used to frame HX versus small dual-boiler tradeoffs and not as a universal performance ranking.' },
      { id: 'bz13-bezzera', label: 'Bezzera: company and production background', href: 'https://www.bezzera.it/en/bezzera', note: 'Manufacturer evidence for company identity and in-house component production. It does not establish local parts stock or reliability.' },
      { id: 'bz13-owner', label: 'r/espresso: Bezzera BZ13 DE owner thread', href: 'https://www.reddit.com/r/espresso/comments/liiz9b/bezzera_bz13_de/', note: 'Community evidence with self-reported warm-up, steam, and satisfaction observations. Useful for questions and patterns only; not a representative sample.' },
      { id: 'bz13-hx-owner', label: 'r/espresso: Profitec Pro 300 versus Bezzera BZ13', href: 'https://www.reddit.com/r/espresso/comments/kuu13e/profitec_pro_300_vs_bezzera_bz13/', note: 'Community discussion highlighting the distinction between HX boiler control and direct brew-boiler control. Opinions are not measurements.' },
      { id: 'bz13-preinfusion', label: 'r/espresso: BZ13 volumetric preinfusion question', href: 'https://www.reddit.com/r/espresso/comments/1m6rxc6/preinfusion_question/', note: 'Community evidence used to identify a current buyer question and the three-way-valve caveat. It does not prove an undocumented feature.' },
      { id: 'bz13-buying', label: 'Home-Barista: upgrading from a Breville Infuser', href: 'https://www.home-barista.com/advice/upgrade-from-breville-infuser-t69434.html', note: 'Community buying discussion used to understand why volumetrics and traditional construction attract buyers. Self-selected advice, not performance data.' },
      { id: 'bz13-service', label: 'Whole Latte Love: Bezzera BZ group maintenance and rebuild', href: 'https://www.youtube.com/watch?v=7FyswhrUC3U', note: 'Service demonstration published February 24, 2022. Used to establish that group seals and mechanical components are serviceable, not to encourage unqualified boiler work.' },
      { id: 'bz13-official-bz10', label: 'Bezzera: BZ10 official architecture page', href: 'https://www.bezzera.it/en/machines/bz10', note: 'Manufacturer context for the closely related electrically heated BZ group, vibration-pump HX architecture, and control terminology. It is not substituted for BZ13-specific dimensions.' },
    ],
    finalTitle: 'Buy the BZ13 only when the compact workflow and the specific offer both make sense',
    finalVerdict: [
      'The BZ13 PID remains an intelligent piece of espresso-machine packaging. It puts a 1.5 L heat exchanger, strong steam potential, a separately heated 58 mm BZ group, a 3 L tank, and either manual or volumetric control into a body only about 250 mm wide. For medium-roast espresso and frequent milk drinks, that combination can be more useful than a longer specification list.',
      'Its limits are equally clear. The PID manages an HX service boiler rather than a dedicated brew boiler, the vibration pump is audible, the machine cannot be plumbed in, and no documented stock feature provides flow profiling or adjustable low-pressure preinfusion. Buyers focused on precise light-roast control should start with a dual boiler.',
      'In 2026, availability decides the verdict. Do not pay a scarcity premium or accept vague warranty language. Confirm DE or PM identity, voltage, condition, seller remedy, parts path, and local service. With those pieces in place at a fair price, the BZ13 earns 4.1 out of 5. Without them, a current supported alternative is the better coffee-machine purchase.',
    ],
  },
  video: {
    id: 'DMbCgF1554E',
    title: 'Review: Bezzera BZ13 PM & DE Espresso Machines',
    creator: 'Whole Latte Love',
    published: '2022-04-07',
    note: 'A retailer-produced but useful independent walkthrough of both control versions, the electrically heated BZ group, PID interface, and simultaneous brew-and-steam workflow. Watch it for orientation, not as Coffeedant test evidence.',
  },
});

export const bezzeraDuoMnReview = buildResearchReview({
  slug: '/espresso-machine/bezzera-duo-mn/',
  productId: 'CD-EM-000052',
  brand: 'Bezzera',
  model: 'Duo MN',
  sku: 'DUO MN',
  category: 'Semi-automatic dual-boiler espresso machine',
  brandPath: '/bezzera/',
  title: 'Bezzera Duo MN review: E61 ritual, dual boilers, and a touchscreen that does useful work',
  description: 'A research-led Bezzera Duo MN review covering its E61 group, dual-PID copper boilers, rotary pump, touchscreen, plumbing, milk pace, flow-control options, ownership, and alternatives.',
  verdictLabel: 'Traditional group, modern control layer',
  verdict: 'The Duo MN is for a buyer who wants to lift an E61 lever but does not want an old-fashioned control system. Separate brew and steam boilers, two PID loops, a quiet rotary pump, reservoir or direct-water operation, programmable preinfusion, weekly scheduling, and guided maintenance form a serious long-term station. Its tradeoffs are equally physical: a deep 30 kg-class body, full E61 heat-soak behavior, and no stock flow profiling unless the selected dealer configuration explicitly adds it.',
  assessment: '4.3/5 overall: a capable dual boiler whose software improves a traditional workflow without automating it.',
  image: 'https://cdn.shopify.com/s/files/1/0078/9502/3675/products/IMG_7340_699eb301-b379-4571-a495-2a880fbfce47.jpg?v=1725562312',
  imageAlt: 'Bezzera Duo MN dual-boiler espresso machine with E61 group and touchscreen',
  published: '2025-11-12',
  updated: '2026-09-17',
  authorNote: 'I evaluated the Duo MN as a complete installation and ownership decision, including its current 15 A US configuration, plumbing, E61 warm-up, touchscreen functions, flow-control variants, maintenance support, and competing dual boilers. This is a research-led review; I have not physically tested this machine.',
  basisDisclosure: 'The scores combine current manufacturer and dealer documentation, the user manual, setup and service resources, independent video demonstrations, and labeled owner discussions. Coffeedant did not measure temperature, pressure, warm-up, sound, steam output, or taste.',
  price: {
    label: 'US dealer price',
    msrp: 'From $2,799.00',
    numeric: '2799.00',
    currency: 'USD',
    typical: '$2,799 base product data; $2,899 displayed configured total during the check',
    checked: 'September 17, 2026',
  },
  links: [
    { label: 'Check Whole Latte Love price', href: 'https://www.wholelattelove.com/products/bezzera-duo-mn-dual-boiler-espresso-machine', note: 'Dealer listing, configuration changes total', primary: true },
    { label: 'Check Amazon availability', href: 'https://amzn.to/4iUdSJ6', note: 'Affiliate link, verify seller and configuration', affiliate: true },
  ],
  facts: [
    { label: 'Brew system', value: 'Traditional lever-operated 58 mm E61 group with thermosyphon circulation' },
    { label: 'Boilers', value: 'About 0.4 to 0.45 L copper brew boiler and 1 L copper steam boiler' },
    { label: 'Temperature', value: 'Separate PID control for brew and steam through a 3.5 inch touchscreen' },
    { label: 'Pump', value: 'Rotary pump; selectable 4 L reservoir or direct-water operation' },
    { label: 'Preinfusion', value: 'Programmable up to 5 seconds in 0.5 second increments in current dealer documentation' },
    { label: 'Maintenance', value: 'Automatic backflush program, filter reminders, maintenance alerts, and weekly scheduling' },
    { label: 'Size', value: 'Dealer listing: 12.2 W × 18.5 D × 16.75 H inches; allow extra lever and cup clearance' },
    { label: 'Weight', value: 'Dealer listing: about 70 lb; other regional listings differ, so verify the exact unit' },
  ],
  quickAnswers: [
    { question: 'Is the Duo MN manual or automatic?', answer: 'It is a semi-automatic lever machine. The screen manages settings and programs, but the user grinds, prepares the puck, starts, stops, steams, and cleans.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. Independent brew and steam boilers support simultaneous work, subject to the selected electrical and boiler-priority settings.' },
    { question: 'Does it include flow control?', answer: 'Not on every listing. Some dealers sell a flow-control configuration. Confirm the exact group hardware, price, and warranty before ordering.' },
    { question: 'Can it be plumbed in?', answer: 'Yes. It has a rotary pump and can switch between its large reservoir and direct water. Proper filtration, pressure regulation, shutoff, and drain planning still matter.' },
    { question: 'How long should the E61 group warm?', answer: 'Plan the routine around roughly 20 to 30 minutes of full group and portafilter heat soak, then use the weekly scheduler to remove the wait. Coffeedant did not time it.' },
    { question: 'Does it still require a 20 A circuit?', answer: 'Whole Latte Love says updated US Duo machines now ship with a standard 15 A cord. Verify the exact serial, voltage, circuit, and boiler settings with the seller.' },
  ],
  bestFor: [
    'An E61 buyer who wants dual-boiler separation and a genuinely useful touchscreen',
    'A permanent station that may move from a 4 L reservoir to direct water and drain',
    'Households making repeated milk drinks while retaining manual control of every shot',
  ],
  avoidIf: [
    'You want a compact, light machine that can be moved or filled easily under cabinets',
    'You expect stock paddle profiling without confirming a flow-control configuration',
    'You dislike E61 warm-up, lever and cam maintenance, or touchscreen dependency',
  ],
  pros: [
    'Independent copper boilers with separate PID control and simultaneous brew and steam',
    'Rotary pump supports quiet reservoir use and a future direct-water installation',
    'Touchscreen consolidates scheduling, preinfusion, boiler priority, backflush, and alerts',
    'Traditional 58 mm E61 accessory and service ecosystem',
  ],
  cons: [
    'Large, deep, and roughly 70 lb in the current US dealer specification',
    'E61 group still needs meaningful heat soak despite electronic scheduling',
    'Flow control depends on the selected configuration rather than the basic MN identity',
    'Touchscreen and control electronics add repair dependencies to a traditional platform',
  ],
  alternatives: [
    { name: 'Lelit Bianca', reason: 'Factory paddle profiling and a more flow-focused E61 control philosophy.', href: '/espresso-machine/lelit-bianca-pl162t/' },
    { name: 'ECM Synchronika', reason: 'Premium dual-boiler E61 with rotary plumbing and a more conventional display.', href: '/espresso-machine/ecm-synchronika/' },
    { name: 'La Marzocco Linea Micra', reason: 'Compact saturated-group alternative with app scheduling and a very different workflow.', href: '/espresso-machine/la-marzocco-linea-micra/' },
  ],
  dimensions: [
    {
      id: 'espresso', score: 8.7,
      reason: 'Direct brew PID, an E61 group, preinfusion, and rotary pump create a strong baseline; flow control depends on configuration.',
      buyerMeaning: 'Broad roast flexibility after heat soak; profiling buyers must confirm the physical kit.',
      evidenceStatus: 'Documented architecture and settings, independently demonstrated, no Coffeedant extraction test',
      sourceIds: ['duo-official', 'duo-manual', 'duo-product', 'duo-review', 'duo-video'],
      deepDiveId: 'duo-espresso',
      title: 'Separate the temperature decision from the flow-control decision',
      intro: [
        'Direct brew PID and timed preinfusion support repeatability after E61 heat soak. Neither automatically adds a needle-valve paddle.',
      ],
      evidence: [
        { signal: 'Dedicated copper brew boiler', evidence: 'Current listings specify roughly 0.4 to 0.45 L with its own PID.', decision: 'Temperature can be adjusted independently of steam demand.' },
        { signal: 'Programmable preinfusion', evidence: 'Dealer documentation states up to 5 seconds in 0.5 second increments.', decision: 'Use it as a repeatable starting tool, not a substitute for puck preparation.' },
        { signal: 'Optional flow-control builds', evidence: 'Some current dealer variants add flow control while the basic product identity does not guarantee it.', decision: 'Confirm the photographed and invoiced group hardware before comparing prices.' },
      ],
      note: 'Suggested adjustments are editorial workflow guidance and not Coffeedant taste or temperature measurements.',
    },
    {
      id: 'milk', score: 9.1,
      reason: 'The 1 L steam boiler and priority controls support a milk queue without moving brew temperature.',
      buyerMeaning: 'Strong for several milk drinks, with adjustable steam energy.',
      evidenceStatus: 'Documented dual-boiler system, corroborated by independent review and owner context',
      sourceIds: ['duo-product', 'duo-review', 'duo-official', 'duo-manual', 'duo-love'],
      deepDiveId: 'duo-milk',
      title: 'Dual boilers turn milk work into a coordination problem rather than a waiting problem',
      intro: [
        'Separate vessels support brewing while steaming. Circuit revision and boiler priority still determine heater behavior.',
      ],
      evidence: [
        { signal: '1 L steam boiler', evidence: 'Current US details and regional sources converge on about 1 L capacity.', decision: 'Well suited to repeated home cappuccinos without a brew-to-steam mode change.' },
        { signal: 'Separate steam PID', evidence: 'The touchscreen exposes steam temperature independently from brew temperature.', decision: 'Lower steam energy while learning, then raise it if queue speed matters.' },
        { signal: 'Boiler priority', evidence: 'The menu can prioritize or alternate heating demand.', decision: 'Match the setting to straight espresso or milk-heavy service and circuit limits.' },
      ],
    },
    {
      id: 'workflow', score: 8.4,
      reason: 'Scheduling, a large tank, rotary plumbing, and guided cleaning reduce friction; heat soak and manual stopping remain.',
      buyerMeaning: 'Easy for an enthusiast using the scheduler, not a quick-start machine.',
      evidenceStatus: 'Documented control flow, setup guides, independent orientation',
      sourceIds: ['duo-manual', 'duo-setup', 'duo-product', 'duo-touch', 'duo-video'],
      deepDiveId: 'duo-workflow',
      title: 'The screen removes menu friction, not barista work',
      intro: [
        'The screen schedules heat, changes temperatures and priority, sets preinfusion, selects water, and runs service prompts. The lever still controls extraction.',
      ],
      evidence: [
        { signal: 'Weekly on and off schedule', evidence: 'Dealer and manual sources document programmable times by day.', decision: 'Use scheduling to absorb E61 warm-up without leaving the machine on indefinitely.' },
        { signal: 'Rotary pump', evidence: 'Tank and mains operation use a quieter rotary system.', decision: 'Good for early use and a future permanent installation.' },
        { signal: 'Manual lever stop', evidence: 'MN extraction begins and ends with the E61 lever.', decision: 'A scale and attention remain necessary; there is no volumetric auto-stop.' },
      ],
    },
    {
      id: 'build', score: 8.7,
      reason: 'Traditional metal construction and service access support repair, offset by weight and electronic complexity.',
      buyerMeaning: 'Built for a permanent counter and professional service, not frequent movement.',
      evidenceStatus: 'Construction and access documented, representative lifespan unknown',
      sourceIds: ['duo-official', 'duo-product', 'duo-internals', 'duo-housing', 'duo-manual'],
      deepDiveId: 'duo-build',
      title: 'Traditional hydraulics and modern electronics share the same chassis',
      intro: [
        'Familiar hydraulics support service, while the touchscreen and boards remain version-specific dependencies.',
      ],
      evidence: [
        { signal: 'Steel and stainless body', evidence: 'Dealer specifications identify a steel frame and polished stainless housing.', decision: 'Stable on the counter, but roughly 70 lb demands a planned installation.' },
        { signal: 'Panel removal resources', evidence: 'Service videos document access to Duo MN and DE internals.', decision: 'Access is demonstrable, though safety and warranty still constrain owner work.' },
        { signal: 'Touchscreen control system', evidence: 'Temperature, schedule, source selection, and maintenance depend on the display and boards.', decision: 'Confirm replacement support and local diagnostic capability.' },
      ],
    },
    {
      id: 'features', score: 9.0,
      reason: 'Dual PID, scheduling, preinfusion, source selection, priority, backflush, and alerts form a coherent control set.',
      buyerMeaning: 'Strong modern management around a manual E61 group without an app.',
      evidenceStatus: 'Feature set documented across manufacturer, manual, dealer, and interface demonstration',
      sourceIds: ['duo-official', 'duo-manual', 'duo-product', 'duo-touch', 'duo-review'],
      deepDiveId: 'duo-features',
      title: 'The touchscreen is valuable because it centralizes ownership controls',
      intro: [
        'The screen handles temperatures, boiler priority, preinfusion, schedules, water source, cleaning, counters, and reminders.',
      ],
      evidence: [
        { signal: 'Two PID setpoints', evidence: 'Brew and steam targets are independently adjustable in the interface.', decision: 'Change extraction and milk energy without coupling the two.' },
        { signal: 'Preinfusion timer', evidence: 'Up to 5 seconds in half-second increments is listed by the dealer.', decision: 'Enough for repeatable wetting, not full pressure and flow profiling.' },
        { signal: 'Automatic backflush program', evidence: 'The menu guides a cleaning cycle.', decision: 'Reduces sequence errors but does not remove detergent, rinsing, or group care.' },
      ],
    },
    {
      id: 'value', score: 7.6,
      reason: 'Strong hardware meets premium pricing, while configuration, freight, grinder, water, and installation expand cost.',
      buyerMeaning: 'Good when scheduling, plumbing, and milk capacity are used.',
      evidenceStatus: 'Current dated dealer price and configuration context, total ownership costs partly unknown',
      sourceIds: ['duo-product', 'duo-firstline', 'duo-quality', 'duo-official', 'duo-manual'],
      deepDiveId: 'duo-value',
      title: 'Price the installed station, not a bare machine tile',
      intro: [
        'US product data started at $2,799 while the selected page showed $2,899. Trim, freight, warranty, grinder, and water can change the comparison.',
      ],
      evidence: [
        { signal: 'Current base price', evidence: 'Dealer product data showed $2,799 on September 17, 2026.', decision: 'Use it as a dated starting point and open the final configuration before comparing.' },
        { signal: 'Plumbing capability', evidence: 'Machine includes rotary mains operation and drain adaptability.', decision: 'Add filtration, regulator, shutoff, drain labor, and water testing to the installed cost.' },
        { signal: 'Competitive E61 class', evidence: 'Bianca, Synchronika, and Pro 700 offer overlapping hardware with different control priorities.', decision: 'Pay for the interface and workflow used every day, not brand mythology.' },
      ],
    },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. I used Bezzera’s current Duo page, the hosted user manual, a current US product and price record, setup and service material, independent retailer demonstrations, and owner discussions. Product configuration, price, and electrical notes were checked September 17, 2026.</p>
      <p>Manufacturer and dealer specifications establish features but do not independently prove taste, temperature accuracy, steam rate, sound, or longevity. Owner reports identify real questions and individual faults, not population-level reliability. Coffeedant did not measure this machine. Exact firmware, regional boiler volume, installed flow-control hardware, local parts lead time, and long-term touchscreen supply remain configuration-level unknowns.</p>
    `,
    sections: [
      {
        id: 'duo-orientation', eyebrow: 'The buying decision',
        title: 'The Duo MN modernizes the E61 station without pretending it is automatic',
        html: `
          <p>The Duo MN combines a manually operated 58 mm E61 group with a 3.5 inch touchscreen, two copper boilers, two PID loops, and a rotary pump. The screen handles temperature, a weekly schedule, preinfusion time, boiler priority, water-source selection, backflush, and reminders. The user still grinds, doses, distributes, tamps, lifts and lowers the lever, textures milk, and cleans. That division is the product’s point. <a href="#duo-official">[1]</a> <a href="#duo-product">[3]</a></p>
          <p>Its strongest buyer has already chosen manual espresso and wants a permanent station. The schedule deals with E61 heat soak, the reservoir permits an easy initial installation, and the rotary pump leaves a direct-water path open later. Separate boilers support a shot and steam at once. Programmable preinfusion adds repeatability without replacing the lever ritual. The result rewards planning, especially when several people share temperature, preinfusion, and schedule settings.</p>
          <p>The model name does not guarantee every option. Some sellers add a group-mounted flow-control kit, while others list the standard group. Current US stock also has a revised 15 A cord according to Whole Latte Love. Confirm the photographed hardware, model plate, invoice, manual revision, circuit requirement, included portafilters, and warranty instead of combining specifications from different production years.</p>
        `,
      },
      {
        id: 'duo-espresso', eyebrow: 'Espresso performance',
        title: 'Direct brew PID and repeatable preinfusion provide control before any profiling kit',
        html: `
          <p>The dedicated brew boiler lets the user set extraction temperature without moving steam temperature. Its modest volume is not a weakness by itself; it heats a focused brew circuit while the thermosyphon feeds the massive E61 group. Once fully warm, that separation is a useful platform for conventional medium roasts and higher-temperature light-roast recipes. The manual and current dealer material are the evidence for controls, not Coffeedant cup testing. <a href="#duo-manual">[2]</a></p>
          <p>A stock MN should not be described as a profiling machine merely because E61 flow-control kits exist. A kit adds a physical needle valve and often a group gauge; the touchscreen cannot create that hardware. Factory or dealer installation may preserve support better than an owner modification, but terms differ. Buyers committed to paddle recipes should compare the Lelit Bianca’s native design rather than assuming an add-on makes every platform equivalent.</p>
        `,
      },
      {
        id: 'duo-milk', eyebrow: 'Milk and steam',
        title: 'A separate steam boiler gives milk drinks pace without moving the brew target',
        html: `
          <p>The roughly 1 L steam boiler is independently heated and PID controlled. That means milk energy can be reduced while learning or raised for a queue without changing the brew-boiler setting. A locking joystick valve makes long steam sessions easy, and the articulated wand can be positioned around common pitcher sizes. Whole Latte Love’s review describes simultaneous brewing and steaming as a central benefit. <a href="#duo-review">[6]</a></p>
          <p>Dual boiler does not remove electrical reality. Boiler priority determines how the controller allocates heater demand, and behavior can vary with regional voltage and revision. The current US seller says new Duo machines now use a standard 15 A cord. Verify the exact unit and follow its manual instead of carrying forward older adapter advice. Do not change technician menu values to force simultaneous heating beyond the circuit.</p>
          <p>Technique still governs texture. Purge condensation, introduce air early, establish a controlled roll, stop at the chosen temperature, wipe, and purge again. If milk expands too violently, lower steam temperature or refine valve opening before changing the tip. Persistent dripping from a closed valve is a service symptom whose cause needs inspection, not a normal feature. <a href="#duo-drip">[13]</a></p>
        `,
      },
      {
        id: 'duo-workflow', eyebrow: 'Daily workflow',
        title: 'Scheduling is the feature that turns E61 heat soak into background work',
        html: `
          <p>A cold E61 group contains a large mass of metal beyond the boiler sensor. Plan on a meaningful heat-soak interval, commonly framed by dealers around 20 to 30 minutes, and validate it with a stable routine rather than the first illuminated screen. The weekly scheduler can start the machine before each known session, which is more integrated than relying on a plug that may not reproduce the machine’s normal power sequence.</p>
          <p>The 4 L reservoir reduces refills, but the body is about 18.5 inches deep and 16.75 inches high in the current US listing. Add lever rise, cup rail, hose bend, portafilter swing, and the path used to access water. At roughly 70 lb, this is not something to slide out casually every morning. Measure the installed workflow, not an empty rectangle on the counter.</p>
          <p>For direct water, select the correct source in the menu and install a reachable shutoff, pressure management, suitable treatment, and a drain with reliable fall. Plumbing removes lifting and tray emptying only when the installation is correct. It also connects household-water events to an expensive appliance, making leak detection and shutoff discipline part of ownership.</p>
        `,
      },
      {
        id: 'duo-build', eyebrow: 'Build and service',
        title: 'The chassis is service-oriented, while the screen becomes a long-term parts question',
        html: `
          <p>Bezzera’s official description and independent internal walkthrough show a conventional prosumer arrangement: steel structure, stainless exterior, copper boilers, rotary pump, solenoids, valves, braided connections, and the E61 group. Clive and Whole Latte Love publish panel, pressure, sensor, draining, and setup resources. That evidence establishes access and service pathways, not a guaranteed lifespan. <a href="#duo-internals">[10]</a> <a href="#duo-housing">[11]</a></p>
          <p>The control layer is less generic. The touchscreen, boards, sensors, and firmware coordinate most conveniences. Ask how display faults are diagnosed, which assemblies the dealer stocks, whether remote support is available, and what happens after warranty. A traditional group does not make electronic parts universal.</p>
          <p>Weight is both reassurance and obligation. The machine should arrive on suitable freight packaging, be lifted by two capable people, and sit on a counter rated for it plus water. Keep packaging if remote warranty service is plausible. Do not ship a boiler machine wet or improvise foam around protruding valves and lever hardware.</p>
        `,
      },
      {
        id: 'duo-features', eyebrow: 'Touchscreen and controls',
        title: 'The interface earns its keep by organizing settings owners otherwise forget',
        html: `
          <p>Whole Latte Love’s interface demonstration shows a menu designed around ownership rather than drink graphics. Brew and steam targets sit together, preinfusion is timed, boiler priority can change, weekly start and stop schedules are stored, and tank or mains operation is selected. Cleaning cycles and filter reminders live in the same place. <a href="#duo-touch">[9]</a></p>
          <p>Automatic backflush is best understood as sequence guidance. The user still inserts the blind basket, adds the correct cleaner when instructed, empties and rinses components, and runs adequate clean-water cycles. Likewise, a filter reminder counts according to settings; it cannot analyze actual hardness or alkalinity. Useful software turns good maintenance into a habit, but cannot make unsuitable water safe.</p>
        `,
      },
      {
        id: 'duo-value', eyebrow: 'Price and total cost',
        title: 'The base price is only comparable after configuration, grinder, water, and freight are normalized',
        html: `
          <p>Whole Latte Love’s product data showed a $2,799 base while the configured live page displayed $2,899 during the September 17, 2026 check. The same page offered flow-control choices and multiple finishes, which can move totals and included portafilters. That makes “Duo MN price” an incomplete comparison unless the selected options are listed beside it.</p>
          <p>Value is strongest when the screen, schedule, steam boiler, rotary pump, and plumbing are all used. If the routine is one straight espresso and no mains connection, much of the hardware remains idle while the E61 still consumes time and counter depth. A smaller single boiler or compact dual boiler can be the more rational premium purchase.</p>
        `,
      },
      {
        id: 'duo-compare', eyebrow: 'Choose the control philosophy',
        title: 'Duo MN versus Bianca, Synchronika, Pro 700, and Linea Micra',
        html: `
          <p>All five machines can anchor a serious home station, but they prioritize different interactions. Duo MN puts scheduling and service logic on a local screen. Bianca centers factory flow control. Synchronika and Pro 700 emphasize a polished conventional E61 platform. Linea Micra replaces E61 ritual with a compact saturated group and app-managed settings.</p>
          ${comparisonTablesHtml('Bezzera Duo MN', [
            { name: 'Bezzera Duo MN', href: '/espresso-machine/bezzera-duo-mn/', priceClass: '$2,799 base data; $2,899 selected page build', quickDecision: 'Choose the richest local touchscreen around a manual E61 workflow.', dimensions: '12.2 W × 18.5 D × 16.75 H in; about 70 lb in US listing', heating: 'Copper dual boilers, dual PID, E61 thermosyphon', coffeeSetup: 'Manual lever; programmable preinfusion; optional flow-control trims', milkWorkflow: 'Separate 1 L steam boiler; boiler priority', bestFor: 'Scheduled E61 station with future plumbing' },
            { name: 'Lelit Bianca', href: '/espresso-machine/lelit-bianca-pl162t/', priceClass: 'Premium profiling dual-boiler class', quickDecision: 'Choose factory paddle profiling and flow-focused recipes.', dimensions: 'E61 body with movable external reservoir', heating: 'Dual boilers with PID', coffeeSetup: 'Manual E61 lever with stock flow-control paddle', milkWorkflow: 'Simultaneous brew and steam', bestFor: 'Buyer who knows manual flow is central' },
            { name: 'ECM Synchronika', href: '/espresso-machine/ecm-synchronika/', priceClass: 'Premium dual-boiler E61 class', quickDecision: 'Choose refined conventional controls and established E61 presentation.', dimensions: 'Large, heavy polished E61 platform', heating: 'Dual boilers with PID', coffeeSetup: 'Manual E61; flow-control availability varies', milkWorkflow: 'Rotary pump, plumbable, strong steam', bestFor: 'Traditional interface and finish priority' },
            { name: 'Profitec Pro 700', href: '/espresso-machine/profitec-pro-700/', priceClass: 'Premium dual-boiler E61 class', quickDecision: 'Choose a direct, service-minded E61 layout with rotary plumbing.', dimensions: 'Large fixed prosumer footprint', heating: 'Dual boilers with PID', coffeeSetup: 'Manual E61; configuration-dependent flow control', milkWorkflow: 'Plumbable rotary pump and high steam capacity', bestFor: 'Permanent conventional station' },
            { name: 'La Marzocco Linea Micra', href: '/espresso-machine/la-marzocco-linea-micra/', priceClass: 'Premium compact saturated-group class', quickDecision: 'Choose compact fast thermal behavior and leave E61 ritual behind.', dimensions: 'Much smaller body; external clearances still matter', heating: 'Dual boilers with saturated brew group', coffeeSetup: 'Manual paddle; app-managed temperature and scheduling', milkWorkflow: 'Compact commercial-style steam system', bestFor: 'Small premium station and simpler daily cadence' },
          ], 'Prices, bundles, flow-control hardware, electrical specifications, and warranty differ by region and date. Duo figures are a September 17, 2026 US snapshot; confirm every selected build before ordering.')}
        `,
      },
      {
        id: 'duo-ownership', eyebrow: 'Ownership plan',
        title: 'Plan water, cleaning, electrical load, and service before the machine arrives',
        html: `
          <h3>Confirm the circuit and exact revision</h3>
          <p>The current US dealer says updated Duo machines use a standard 15 A cord. That statement supersedes older listing language for its current stock, but it does not identify every used or regional unit. Send the model plate and serial to the seller, use a grounded circuit that meets the manual, and avoid extension cords or unsupported technician-menu changes.</p>
          <h3>Treat water before plumbing</h3>
          <p>Test hardness, alkalinity, chloride, and relevant local conditions. The goal is not simply “soft” water. It is water compatible with copper boilers, taste, corrosion protection, and scale control. A cartridge must be sized and replaced according to actual input. Direct plumbing without a shutoff, regulator, treatment, and leak strategy converts convenience into risk.</p>
        `,
      },
      {
        id: 'duo-related', eyebrow: 'Where to go next',
        title: 'Choose what should be physical, what should be programmed, and what should disappear',
        html: `
          <p>Duo MN keeps a physical lever while moving housekeeping to a screen. These alternatives shift one major decision: factory flow control, conventional E61 presentation, a service-forward large platform, or a compact saturated group.</p>
          ${recommendationCardsHtml([
            { kicker: 'Factory profiling route', title: 'Lelit Bianca', text: 'Put a stock paddle and flow-focused controls at the center of the E61 experience.', href: '/espresso-machine/lelit-bianca-pl162t/', linkLabel: 'Read the Bianca review', featured: true },
            { kicker: 'Premium classic route', title: 'ECM Synchronika', text: 'Compare a refined conventional dual-boiler E61 with rotary plumbing and restrained controls.', href: '/espresso-machine/ecm-synchronika/', linkLabel: 'Read the Synchronika review' },
            { kicker: 'Service-forward route', title: 'Profitec Pro 700', text: 'Choose a large rotary dual boiler when direct controls and a permanent plumbed station matter most.', href: '/espresso-machine/profitec-pro-700/', linkLabel: 'Read the Pro 700 review' },
            { kicker: 'Compact saturated route', title: 'La Marzocco Linea Micra', text: 'Trade exposed E61 mechanics for a much smaller saturated-group machine with app scheduling.', href: '/espresso-machine/la-marzocco-linea-micra/', linkLabel: 'Read the Linea Micra review' },
          ])}
        `,
      },
      {
        id: 'faq', eyebrow: 'Questions before installation',
        title: 'Bezzera Duo MN FAQ',
        html: faqHtml([
          { question: 'What does MN mean on the Bezzera Duo?', answer: 'MN identifies the manually operated E61 lever version. The user raises the lever to start and lowers it to stop. It differs from the electronically dosed DE version.' },
          { question: 'Can the Duo MN brew and steam at the same time?', answer: 'Yes. It has separate brew and steam boilers. Actual heater behavior also depends on electrical revision and the selected boiler-priority setting.' },
          { question: 'Does every Duo MN include flow control?', answer: 'No. Some dealers offer a flow-control build, while the base MN identity refers to the E61 lever and dual-PID system. Confirm the physical valve, group gauge, price, installation, and warranty.' },
          { question: 'Can I use the Duo MN without plumbing it in?', answer: 'Yes. Its large internal reservoir feeds the rotary pump. The touchscreen selects reservoir or mains operation, so plumbing can be a later project.' },
          { question: 'How long does the Bezzera Duo MN take to warm up?', answer: 'Plan roughly 20 to 30 minutes for the E61 group and portafilter to heat soak, then let the weekly scheduler handle the wait. Coffeedant did not measure the interval.' },
          { question: 'Does the touchscreen stop the shot automatically?', answer: 'No. The MN lever starts and stops extraction manually. The touchscreen controls settings such as temperature, preinfusion, scheduling, boiler priority, water source, and maintenance.' },
          { question: 'Does the US Duo MN need a 20 amp outlet?', answer: 'Whole Latte Love says updated Duo units now ship with a standard 15 A cord. Used and regional units can differ, so verify the model plate, manual, seller guidance, and circuit before purchase.' },
          { question: 'Is the Duo MN better than the Lelit Bianca?', answer: 'It is better for someone prioritizing the local touchscreen, weekly scheduling, and Bezzera interface. Bianca is the clearer choice when factory manual flow profiling is central. Dealer support and total configuration can decide the tie.' },
        ]),
      },
    ],
    sources: [
      { id: 'duo-official', label: 'Bezzera: Duo official product page', href: 'https://www.bezzera.it/en/machines/duo', note: 'Manufacturer evidence for MN identity, E61 lever operation, dual-PID concept, thermosyphon group, touchscreen, and core architecture. Primary source.' },
      { id: 'duo-manual', label: 'Bezzera Duo MN user manual, hosted by Clive Coffee', href: 'https://support.clivecoffee.com/en/articles/16426498-bezzera-duo-mn-user-manual', note: 'Official manual access used for installation, operation, touchscreen settings, water-source selection, cleaning, and safety. Primary document hosted by a dealer.' },
      { id: 'duo-product', label: 'Whole Latte Love: Bezzera Duo MN product and price record', href: 'https://www.wholelattelove.com/products/bezzera-duo-mn-dual-boiler-espresso-machine', note: 'Current dealer evidence for US price, 15 A update, configuration choices, dimensions, weight, boiler volumes, controls, included items, warranty, and product imagery. Checked September 17, 2026.' },
      { id: 'duo-setup', label: 'Clive Coffee: Bezzera Duo MN setup guide', href: 'https://support.clivecoffee.com/en/articles/16426006-bezzera-duo-mn-espresso-machine-setup-guide', note: 'Dealer support evidence for receiving, initial setup, controls, and safe orientation. Used as workflow context, not performance measurement.' },
      { id: 'duo-firstline', label: '1st-line Equipment: Bezzera Duo MN V2 listing', href: 'https://www.1st-line.com/buy/bezzera-duo-mn-dual-boiler-double-pid-espresso-machine/', note: 'Second dealer record used to cross-check model positioning, configuration language, dual-boiler operation, and service context. Prices and bundles can differ.' },
      { id: 'duo-review', label: 'Whole Latte Love: Bezzera Duo MN review', href: 'https://www.wholelattelove.com/blogs/reviews/bezzera-duo-mn-review', note: 'Independent retailer review used for programmable temperature, preinfusion, thermosyphon, simultaneous brewing and steaming, and production context. Claims are attributed.' },
      { id: 'duo-video', label: 'Clive Coffee: Bezzera Duo MN espresso machine overview', href: 'https://www.youtube.com/watch?v=XpXnJSRm0ec', note: 'Independent dealer overview published January 5, 2021. Used to inspect visible layout and workflow, not as Coffeedant testing.' },
      { id: 'duo-love', label: 'r/espresso: Why I love my Bezzera Duo', href: 'https://www.reddit.com/r/espresso/comments/r6zr92/why_i_love_my_bezzera_duo/', note: 'Community owner perspective used to identify satisfaction themes and light-commercial questions. Self-selected and not representative.' },
      { id: 'duo-touch', label: 'Whole Latte Love: Bezzera Matrix and Duo touchscreen operations', href: 'https://www.youtube.com/watch?v=rcWlKoG8mIk', note: 'Interface demonstration published July 6, 2018. Used to verify menu organization and control concepts; firmware can differ on current machines.' },
      { id: 'duo-internals', label: 'Whole Latte Love: Bezzera Matrix and Duo internal components', href: 'https://www.youtube.com/watch?v=UoDRdSXV06U', note: 'Independent internal walkthrough published July 6, 2018. Used for component layout and service-access context, not lifespan claims.' },
      { id: 'duo-housing', label: 'Whole Latte Love: Duo MN and DE housing removal', href: 'https://www.youtube.com/watch?v=yvT3Fi74DGY', note: 'Service demonstration published July 12, 2018. Establishes panel access while leaving electrical and boiler work to qualified technicians.' },
      { id: 'duo-quality', label: 'r/espresso: Duo MN versus Lelit Bianca quality discussion', href: 'https://www.reddit.com/r/espresso/comments/1hsplyi/how_is_bezzeras_quality_deciding_between_duo_mn/', note: 'Community buying discussion from January 2025 used to identify current comparison priorities. Opinions do not establish build-quality or failure rates.' },
      { id: 'duo-drip', label: 'r/espresso: Duo MN steam-wand drip troubleshooting', href: 'https://www.reddit.com/r/espresso/comments/z9sd0y/tip_of_steam_wand_is_dripping_on_bezzera_duo_mn/', note: 'Isolated owner fault report used to flag a service question. It is not evidence that the issue is common or that one cause applies to every machine.' },
    ],
    finalTitle: 'Choose the Duo MN when the screen, schedule, and plumbing support a manual E61 routine',
    finalVerdict: [
      'The Duo MN has a clear identity: a lever-operated E61 machine whose modern electronics manage the repetitive background decisions. Two PID-controlled copper boilers, rotary pump, large reservoir, direct-water option, programmed preinfusion, weekly scheduling, boiler priority, automatic backflush, and maintenance alerts make it a capable full-size home station.',
      'It does not remove the enthusiast’s work. The group needs heat soak, every shot is started and stopped manually, puck preparation still determines evenness, and flow control belongs only to a configuration that physically includes it. The machine is also deep and heavy enough that counter, circuit, water, drain, freight, and service planning should happen before checkout.',
      'At the September 2026 US prices checked, the Duo MN earns 4.3 out of 5 when its local screen and future plumbing path matter more than factory profiling or compactness. Choose Bianca for a stock paddle, Linea Micra for a smaller saturated-group routine, or a conventional Synchronika or Pro 700 when a simpler interface is preferable. Choose Duo MN when the modern control layer is the part you will use every week.',
    ],
  },
  video: {
    id: 'XpXnJSRm0ec',
    title: 'Bezzera Duo MN Espresso Machine Overview',
    creator: 'Clive Coffee',
    published: '2021-01-05',
    note: 'A concise independent dealer orientation to the E61 lever, touchscreen, rotary-pump layout, and daily controls. Use it to see the machine’s scale and interaction, while treating all performance language as attributed rather than Coffeedant testing.',
  },
});

export const upgradeBezzeraBReviews = [bezzeraBz13PidReview, bezzeraDuoMnReview];
