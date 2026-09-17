import type { MachineReviewData } from '../reviews';
import {
  buildResearchReview,
  comparisonTablesHtml,
  faqHtml,
  internalHref,
  recommendationCardsHtml,
} from '../batch-review-builder';

const checked = 'September 17, 2026';

// Canonical identity: Ascaso Steel Duo PID / CD-EM-000050.
// Evidence packet checked 2026-09-17. This is a research-led assessment, not a Coffeedant hands-on test.
export const ascasoSteelDuoPidReview: MachineReviewData = buildResearchReview({
  slug: '/espresso-machine/ascaso-steel-duo-pid/',
  productId: 'CD-EM-000050',
  brand: 'Ascaso',
  model: 'Steel Duo PID',
  sku: 'ASCDUOPID',
  category: 'Dual-thermoblock semi-automatic espresso machine',
  brandPath: '/ascaso/',
  title: 'Ascaso Steel Duo PID review: fast control, with an electrical catch',
  description: 'A research-led Ascaso Steel Duo PID review covering V3 power requirements, espresso controls, steam performance, current US price, ownership evidence and alternatives.',
  verdictLabel: 'Fast, capable, and installation-sensitive',
  verdict: 'The current US Steel Duo PID is a persuasive choice for someone who wants a 58 mm machine, adjustable brew temperature, volumetric buttons, and espresso and steam at the same time without waiting for traditional boilers. Its deciding caveat is not subtle: the 120 V V3 is designed around a 20 A circuit, and using the supplied 15 A adapter can reduce steam performance. Confirm the outlet before falling for the workflow.',
  assessment: 'A strong dual-thermoblock workflow whose value depends on electrical fit, steam expectations, and comfort with appliance-style service.',
  image: 'https://ascaso-usa.com/cdn/shop/files/STEEL-DUO-PID-NEGRA-2026-001.png?v=1782405656',
  imageAlt: 'Black Ascaso Steel Duo PID espresso machine with walnut controls',
  published: '2025-11-12',
  updated: '2026-09-17',
  authorNote: 'I approached the Duo as a workflow purchase, not as a smaller substitute for every dual boiler. The central question is whether fast on-demand heating and programmable controls matter more in your kitchen than maximum steam force, a traditional boiler architecture, or easy owner service.',
  basisDisclosure: 'This score is an editorial judgment based on current Ascaso US and global specifications, the shared Steel manual, support and warranty documents, independent reviews and demonstrations, plus separately labeled owner discussions. Coffeedant has not physically tested this machine. Reviewer measurements remain attributed, and owner reports cannot establish a failure rate.',
  price: {
    label: 'Ascaso USA price',
    msrp: '$2,095.00',
    typical: 'Listed by Ascaso USA when checked; colors and dealer stock can vary',
    currency: 'USD',
    numeric: '2095.00',
    checked,
  },
  links: [
    { label: 'Check Ascaso USA price', href: 'https://ascaso-usa.com/products/steel-duo-pid-programmable-espresso-machine-w-volumetric-conrtroller-dual-thermoblock-120v-black', note: 'Official US product page; confirm color, circuit and current package', primary: true },
    { label: 'Read the Steel manual', href: 'https://ep-shopify.s3.amazonaws.com/related-documents/ascaso/steel/steel-manual.pdf', note: 'Official shared Steel manual, 2022 edition' },
  ],
  facts: [
    { label: 'Heating', value: 'Two thermoblocks; independent brew and steam circuits' },
    { label: 'Power', value: '120 V, 2000 W current US V3; NEMA 5-20 plug' },
    { label: 'Portafilter', value: '58 mm, walnut-handled' },
    { label: 'Controls', value: 'PID, two volumetric doses, shot timer, programmable pre-infusion' },
    { label: 'Water tank', value: '67 fl oz / about 2 L, removable' },
    { label: 'Size and weight', value: '11.125 × 12.375 × 14.75 in; about 31.8 lb without portafilter' },
  ],
  quickAnswers: [
    { question: 'Is it a dual boiler?', answer: 'No. It uses separate brew and steam thermoblocks. That enables simultaneous jobs, but its heat storage and steam character differ from boiler machines.' },
    { question: 'Does it need a 20 amp outlet?', answer: 'The current US V3 has a NEMA 5-20 plug and is specified at 2000 W. Ascaso supplies a 15 A adapter, but dealer evidence says steam output is reduced. Verify the circuit and local electrical guidance.' },
    { question: 'How fast is it ready?', answer: 'Ascaso pages, older FAQs, and independent reviews describe different milestones. Expect display readiness within a few minutes, then allow additional time or flushing for the group and portafilter to reach a stable working condition.' },
    { question: 'Can it brew and steam together?', answer: 'Yes, on the Duo. Its separate circuits are the main workflow advantage over the Steel Uno PID.' },
    { question: 'Is volumetric dosing automatic espresso?', answer: 'Only partly. The flowmeter stops at a saved water volume, but grind, dose, puck resistance, coffee age, and bypass flow still affect the cup. Use a scale while establishing a recipe.' },
    { question: 'Which generation is reviewed?', answer: 'The current 120 V US V3 listing and the current global Steel specification sheet. Older V1, V2, regional, and Steel Duo Plus evidence is identified rather than silently combined.' },
  ],
  bestFor: [
    'A milk-drink household that wants to extract and steam at the same time from a compact 58 mm machine',
    'Someone who values fast on-demand heating, programmable doses, adjustable temperature, and pre-infusion',
    'A kitchen with a confirmed suitable 20 A circuit and realistic expectations for thermoblock steam',
  ],
  avoidIf: [
    'You need to plug a 2000 W machine into an unverified shared 15 A kitchen circuit',
    'You want the sustained steam character, thermal mass, or service layout of a traditional dual boiler',
    'Published long-term repair data and broad owner-service documentation are prerequisites for the purchase',
  ],
  pros: [
    'Separate brew and steam thermoblocks support simultaneous espresso and milk work',
    '58 mm platform, adjustable PID, OPV, pressure gauge, timer, and programmable pre-infusion offer useful control',
    'Current US bundle includes traditional and pressurized baskets plus cleaning accessories',
    'Compact width and on-demand heating reduce the commitment of a conventional dual-boiler routine',
  ],
  cons: [
    'Current US model is designed for a 20 A outlet, with a performance compromise through the 15 A adapter',
    'Steam is capable but independent reviewers do not place it with the strongest boiler machines',
    'Warm-up claims describe different readiness points and generations',
    'Parts listings and warranty coverage do not prove simple or inexpensive post-warranty repair',
  ],
  alternatives: [
    { name: 'Ascaso Steel Uno PID', reason: 'Keep the 58 mm PID platform and lower electrical draw if milk is occasional.', href: '/espresso-machine/ascaso-steel-uno/' },
    { name: 'Lelit Elizabeth', reason: 'Choose compact dual boilers and strong milk sequencing with a more traditional heating layout.', href: '/espresso-machine/lelit-elizabeth/' },
    { name: 'Rancilio Silvia Pro X', reason: 'Choose dual boilers, substantial steam, and a deliberately manual workflow.', href: '/espresso-machine/rancilio-silvia-pro-x/' },
    { name: 'Profitec Pro 400', reason: 'Choose an E61 heat-exchanger ritual and rotary-style controls over fast thermoblock convenience.', href: '/espresso-machine/profitec-pro-400/' },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. I checked current Ascaso US and global specifications, the official manual and FAQs, support and warranty records, independent reviews, and owner discussions.</p>
      <p>V1, V2, current US V3, and Duo Plus evidence is kept separate. Price was checked September 17, 2026. Coffeedant did not measure performance or durability, and owner posts do not establish reliability rates.</p>
    `,
    sections: [
      {
        id: 'orientation',
        eyebrow: 'The decision in one minute',
        title: 'The Duo is compelling when speed and simultaneous work solve a real problem',
        html: `
          <p>The Duo combines a 58 mm portafilter, adjustable temperature and pressure, a gauge, and manual preparation with two on-demand thermoblocks. One supplies brewing and the other steam, so both jobs can overlap without keeping two boilers hot.</p>
          <p>That architecture suits repeated milk drinks, but the $2,095 current US model requires a suitable 20 A setup and competes with established boiler machines. Confirm the exact V3, circuit, space, seller support, and returns before deciding whether short startup matters more than boiler steam reserve. Older V1 and V2 reviews inform workflow, not current output or durability. <a href="#duo-official">[1]</a></p>
        `,
      },
      {
        id: 'setup',
        eyebrow: 'Before the first coffee',
        title: 'Treat electrical fit, water, grinder, and thermal routine as part of installation',
        html: `
          <p>The current US Duo is rated 120 V and 2000 W with a NEMA 5-20 plug. An included 15 A adapter changes plug compatibility, while Clive's V2 evidence reports lower steam performance. Confirm the branch circuit with the seller or an electrician and include any installation work in the budget. <a href="#duo-official">[1]</a> <a href="#duo-clive-overview">[7]</a></p>
          <p>Ascaso lists 11.125 inches wide, 12.375 deep, and 14.75 high, about 16.5 inches deep with the portafilter. Leave access for the 67 oz tank, cord, cup rail, tray, and handle. A capable grinder and 0.1 g scale matter more than immediate accessory upgrades; verify the supplied basket set because packages change.</p>
          <p>Learn the water's hardness and alkalinity instead of assuming every bottled water is suitable. Prime and rinse as the manual directs, then warm the locked portafilter and cup consistently before judging the first shot. <a href="#duo-clive-setup">[8]</a> <a href="#duo-manual">[3]</a></p>
        `,
      },
      {
        id: 'espresso',
        eyebrow: 'Espresso performance',
        title: 'The controls are genuinely useful, but they cannot rescue preparation',
        html: `
          <p>Current Steel documentation lists adjustable brew temperature, programmable pre-infusion, two volumetric doses, a timer, gauge, and adjustable OPV. These controls can refine a stable recipe, but none measures extraction quality. The flowmeter counts water rather than beverage mass, so use a scale while programming. <a href="#duo-global">[2]</a> <a href="#duo-official">[1]</a></p>
          <p>For a medium roast, 18 g in and about 36 g out is editorial starting guidance, not a Duo test. Improve distribution and grind finer for a fast sharp shot; grind coarser for a slow dry one. Change temperature only after dose and yield repeat.</p>
          <p>Ascaso publishes a tight stability claim, while Coffeeness and Lance Hedrick support the platform's espresso capability under different older samples and protocols. That convergence is useful, not a current-V3 laboratory result. Confirm exact fit before buying third-party 58 mm accessories. <a href="#duo-coffeeness">[9]</a> <a href="#duo-lance">[10]</a></p>
        `,
      },
      {
        id: 'milk',
        eyebrow: 'Steam and milk',
        title: 'Separate steam makes the queue faster, not identical to a large boiler',
        html: `
          <p>The second thermoblock lets steam overlap extraction, the Duo's defining advantage over Uno. The cool-touch wand and one-hole tip remain manual: purge, introduce air early, create a roll, then wipe and purge immediately.</p>
          <p>The older official FAQ and Coffeeness describe less force than strong boiler steam. Clive found better V2 output on a true 20 A supply than through the adapter. These sources support the tradeoff but not one universal steaming time. <a href="#duo-faq">[4]</a> <a href="#duo-clive-overview">[7]</a> <a href="#duo-coffeeness">[9]</a></p>
          <p>Ordinary lattes benefit from control and overlap. Large pitchers or cafe-like pace favor a strong boiler. Keep milk type, quantity, jug, and temperature consistent before changing the steam setting; hotter does not automatically produce finer texture.</p>
        `,
      },
      {
        id: 'workflow',
        eyebrow: 'Daily pace',
        title: 'Fast readiness is real, but the full workflow still needs a warm portafilter and a plan',
        html: `
          <p>Published readiness ranges from about one minute to 3:30, while Clive separates roughly three-minute shot capability from about ten minutes for broader stabilization. The sources describe different generations and endpoints, so use a repeatable locked-portafilter routine rather than one universal claim. <a href="#duo-global">[2]</a> <a href="#duo-official">[1]</a> <a href="#duo-faq">[4]</a> <a href="#duo-clive-overview">[7]</a></p>
          <p>Two dose buttons, timer, gauge, cup warmer, and lights reduce daily friction. Verify saved output by scale. Beginners can pull then steam before learning to overlap both jobs; simultaneous capability is an option, not a requirement.</p>
          <p>Rinse the basket and group, wipe the gasket and wand, purge safely, and empty the tray. Backflushing removes coffee oils while descaling targets minerals, so follow the current manual and actual water conditions.</p>
        `,
      },
      {
        id: 'build',
        eyebrow: 'Construction and service',
        title: 'The exterior feels substantial, while the long-term evidence stays incomplete',
        html: `
          <p>The current US description combines metal panels, walnut controls, a 58 mm group, stainless-lined aluminum thermoblocks, and about 31.8 pounds of weight in an 11-inch-wide body. That supports a premium impression, not a lifespan claim. <a href="#duo-official">[1]</a></p>
          <p>Ascaso USA publishes support resources and selected parts, but that does not prove every V3 component or local repair is available. The product page states 12 months generally and advertises five years for thermoblocks and groups; exclusions include wear, scale, water damage, misuse, and unauthorized work. <a href="#duo-resources">[5]</a> <a href="#duo-parts">[6]</a> <a href="#duo-warranty">[12]</a></p>
          <p>Owner reports identify inspection questions, not failure odds. Keep proof of purchase, use suitable water, avoid unauthorized modifications, and ask how local service works. A used unit should demonstrate cold start, espresso, simultaneous steam, hot water, programmed stopping, pressure response, and leak-free operation.</p>
        `,
      },
      {
        id: 'features',
        eyebrow: 'Controls that matter',
        title: 'PID, pre-infusion, volumetrics, pressure adjustment, and statistics reward a disciplined recipe',
        html: `
          <p>Current documentation lists one-degree brew adjustment, steam temperature, two volumetric selections, programmable pre-infusion, timer, standby, statistics, gauge, and OPV. It is broad control without a touchscreen. <a href="#duo-global">[2]</a></p>
          <p>Stabilize dose, distribution, grind, and yield before temperature or pre-infusion. Interpret pressure under flow rather than chasing a blind-basket peak, and follow current authorized guidance before OPV work. <a href="#duo-faq">[4]</a></p>
          <p>Volumetrics and the timer simplify repeat drinks but do not replace a scale. Record one reliable baseline, change one variable, and do not transfer Duo Plus photographs or features to the standard Duo PID.</p>
        `,
      },
      {
        id: 'value',
        eyebrow: 'Price and ownership value',
        title: 'At $2,095, the Duo must earn its price through workflow rather than specifications alone',
        html: `
          <p>Ascaso USA listed the black V3 at $2,095 on September 17, 2026. Confirm revision, plug, color, package, and seller. Add a capable grinder, scale, suitable water, care supplies, wear parts, and any electrical work; the broad included basket and cleaning kit limits immediate accessory spending. <a href="#duo-official">[1]</a></p>
          <p>Value is strongest when simultaneous steam removes a daily wait. Espresso-only buyers can preserve much of the brew platform with the <a href="${internalHref('/espresso-machine/ascaso-steel-uno/')}">Steel Uno PID</a>. The <a href="${internalHref('/espresso-machine/lelit-elizabeth/')}">Lelit Elizabeth</a> and <a href="${internalHref('/espresso-machine/rancilio-silvia-pro-x/')}">Silvia Pro X</a> instead offer dual boilers; the <a href="${internalHref('/espresso-machine/profitec-pro-400/')}">Profitec Pro 400</a> offers an E61 heat-exchanger routine.</p>
          <p>No representative lifespan, repair-cost, or resale dataset was found. Get local service, shipping, parts, and warranty answers in writing rather than treating a five-year component headline as full ownership coverage.</p>
        `,
      },
      {
        id: 'compare',
        eyebrow: 'Choose by constraint',
        title: 'Steel Duo PID versus Uno PID, Lelit Elizabeth, and Silvia Pro X',
        html: `
          <p>These machines can all make serious home espresso. They differ most in electrical demand, heating architecture, milk cadence, warm-up behavior, and how much manual control the household actually wants to use.</p>
          ${comparisonTablesHtml('Ascaso Steel Duo PID', [
            { name: 'Ascaso Steel Duo PID', href: '/espresso-machine/ascaso-steel-duo-pid/', priceClass: '$2,095 current US listing', quickDecision: 'Choose fast dual-circuit work if a suitable 20 A setup is available.', dimensions: '11.125 × 12.375 × 14.75 in; about 31.8 lb', heating: 'Two thermoblocks; current US 2000 W', coffeeSetup: '58 mm; PID, gauge, OPV, pre-infusion, timer, volumetrics', milkWorkflow: 'Simultaneous; thermoblock steam', bestFor: 'Frequent milk drinks with short startup priorities' },
            { name: 'Ascaso Steel Uno PID', href: '/espresso-machine/ascaso-steel-uno/', priceClass: '$1,695 official US reference; new stock unclear', quickDecision: 'Choose the brew controls and lower draw when milk is occasional.', dimensions: 'About 10.5 × 12.5 × 15 in on US listing; verify revision', heating: 'One thermoblock; 1050 W US listing', coffeeSetup: '58 mm; PID, gauge, OPV, pre-infusion, timer, volumetrics', milkWorkflow: 'Sequential; mode change and recovery', bestFor: 'Espresso-first use and one drink at a time' },
            { name: 'Lelit Elizabeth', href: '/espresso-machine/lelit-elizabeth/', priceClass: 'Check current dealer price', quickDecision: 'Choose compact dual boilers and programmable pre-infusion.', dimensions: 'Verify current regional specification', heating: 'Dual boiler', coffeeSetup: '58 mm; PID and programmable functions', milkWorkflow: 'Simultaneous; stored boiler steam', bestFor: 'Compact traditional dual-boiler shoppers' },
            { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', priceClass: 'Check current dealer price', quickDecision: 'Choose dual boilers, strong manual milk work, and simple controls.', dimensions: 'Verify current regional specification', heating: 'Dual boiler', coffeeSetup: '58 mm; dual PID and soft-infusion control', milkWorkflow: 'Simultaneous; boiler steam', bestFor: 'Buyers prioritizing steam and familiar service architecture' },
          ], 'The Ascaso figures and prices reflect the cited current US listings checked September 17, 2026. Rival prices, dimensions, electrical needs, accessories and warranties must be checked for the exact regional model before purchase.')}
          <p>The quick answer is workload-based. Choose Duo for overlapping espresso and milk with short startup. Choose Uno for espresso-first use and lower draw. Choose Elizabeth or Silvia Pro X when dual-boiler behavior and local boiler-machine service matter more than thermoblock speed.</p>
        `,
      },
      {
        id: 'ownership',
        eyebrow: 'Living with the machine',
        title: 'A simple maintenance map prevents most avoidable ambiguity',
        html: `
          <h3>Daily care</h3>
          <p>Rinse the basket and group, wipe and purge the wand, and empty the tray. Keep coffee cleaning separate from mineral treatment.</p>
          <h3>Backflushing and water</h3>
          <p>The older FAQ suggests weekly backflushing at two or three drinks daily, but the current manual, cleaner, water, and use should set the routine. Descale only on suitable guidance. <a href="#duo-faq">[4]</a></p>
          <h3>Changed pressure or flow</h3>
          <p>Check coffee age, grind, dose, basket, screen, and water before touching the OPV. Pressure without a known flow state and recipe is incomplete evidence.</p>
          <h3>Service and unknowns</h3>
          <p>Document symptoms, leaks, sounds, serial, purchase date, and water practice. Stop for electrical concerns or uncontrolled leaks. Representative V3 failure rates, temperature curves, steam output, repair costs, and comprehensive parts availability remain unknown.</p>
        `,
      },
      {
        id: 'recommendations',
        eyebrow: 'Four sensible directions',
        title: 'Choose the machine that removes your actual bottleneck',
        html: `
          ${recommendationCardsHtml([
            { kicker: 'Best Ascaso fit for milk', title: 'Ascaso Steel Duo PID', text: 'Keep the Duo when simultaneous espresso and steam, fast startup, and 58 mm control justify the 20 A requirement.', href: '/espresso-machine/ascaso-steel-duo-pid/', linkLabel: 'Stay with the Duo', featured: true },
            { kicker: 'Espresso-first alternative', title: 'Ascaso Steel Uno PID', text: 'Choose one thermoblock and lower draw when straight espresso dominates and milk can wait.', href: '/espresso-machine/ascaso-steel-uno/', linkLabel: 'Read the Uno review' },
            { kicker: 'Compact dual boiler', title: 'Lelit Elizabeth', text: 'Compare a traditional dual-boiler layout with programmable functions and stored steam.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read the Elizabeth review' },
            { kicker: 'Manual dual-boiler route', title: 'Rancilio Silvia Pro X', text: 'Compare substantial boiler steam and a deliberately hands-on 58 mm workflow.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read the Silvia Pro X review' },
          ])}
        `,
      },
      {
        id: 'faq',
        eyebrow: 'FAQ',
        title: 'Ascaso Steel Duo PID questions, answered',
        html: `
          ${faqHtml([
            { question: 'Is the Ascaso Steel Duo PID a dual boiler?', answer: 'No. It has two thermoblocks, one for brewing and one for steam. The circuits can operate together, but their thermal behavior and service layout differ from two boilers.' },
            { question: 'Can the Steel Duo PID brew and steam at the same time?', answer: 'Yes. Independent brew and steam thermoblocks enable simultaneous use. The current US machine performs best on the intended 20 amp supply.' },
            { question: 'Can I use the supplied 15 amp adapter?', answer: 'Ascaso supplies one with the current US listing, but dealer evidence reports reduced steam performance. Verify circuit suitability and local electrical guidance rather than treating the adapter as a full-performance conversion.' },
            { question: 'How long does the Steel Duo PID take to heat?', answer: 'Published figures describe different generations and readiness points, from roughly one minute to several minutes. A dealer suggests around three minutes for a shot and closer to ten for full thermal stabilization. Use a repeatable portafilter-warming routine.' },
            { question: 'Does the volumetric control measure espresso weight?', answer: 'No. It counts water flow and stops at a programmed volume. Puck resistance and bypass flow affect the beverage, so verify output with a scale.' },
            { question: 'What warranty does Ascaso USA provide?', answer: 'The current product page states 12 months generally and advertises five years for thermoblocks and groups. Read the full terms, exclusions, labor and shipping conditions, seller eligibility, and transfer rules before relying on that headline.' },
          ])}
        `,
      },
    ],
    sources: [
      { id: 'duo-official', label: 'Ascaso USA Steel Duo PID product page', href: 'https://ascaso-usa.com/products/steel-duo-pid-programmable-espresso-machine-w-volumetric-conrtroller-dual-thermoblock-120v-black', note: 'Primary source for the current US V3 price, 120 V power, NEMA 5-20 plug, stated dimensions, tank, controls, materials, accessories, warranty headline and manufacturer claims. It does not independently verify performance or longevity.' },
      { id: 'duo-global', label: 'Ascaso global Steel range and 2026 specification sheet', href: 'https://ascaso.com/en/steel/', note: 'Primary source for the current family architecture, control range, nominal dimensions, thermoblock count and global feature claims. Regional voltage, package and configuration can differ.' },
      { id: 'duo-manual', label: 'Ascaso Steel user manual', href: 'https://ep-shopify.s3.amazonaws.com/related-documents/ascaso/steel/steel-manual.pdf', note: 'Official 2022 shared manual for operation, programming, cleaning, water and safety. Some electrical figures predate the current US V3 listing, so the selected machine label and current product page control.' },
      { id: 'duo-faq', label: 'Ascaso USA Steel Duo FAQ', href: 'https://ep-shopify.s3.amazonaws.com/related-documents/ascaso/user-resources/ascaso-steel-duo-faq.pdf', note: 'Official support document for the two-block workflow, older heat-up guidance, flowmeter, OPV and cleaning context. It appears to describe an earlier generation and is not used as a current V3 performance guarantee.' },
      { id: 'duo-resources', label: 'Ascaso USA Steel Duo resources', href: 'https://ascaso-usa.com/pages/steel-duo-resources', note: 'Primary support index for manuals and product help. Presence of resources does not prove local technician coverage or future parts supply.' },
      { id: 'duo-parts', label: 'Ascaso USA home espresso parts collection', href: 'https://ascaso-usa.com/collections/home-espresso-parts', note: 'Official evidence that Ascaso USA sells selected replacement components. It is not evidence that every V3 internal part is stocked, compatible or economical to install.' },
      { id: 'duo-clive-overview', label: 'Clive Coffee, Ascaso Steel Duo overview', href: 'https://clivecoffee.com/blogs/learn/the-ascaso-duo-espresso-machine-overview', note: 'Dealer-authored performance and workflow context, including V2 20 A versus adapter behavior and staged warm-up. Commercial interest, tested revision and protocol limit generalization.' },
      { id: 'duo-clive-setup', label: 'Clive Coffee Steel Duo setup guide', href: 'https://support.clivecoffee.com/en/articles/16421335-ascaso-steel-duo-setup-guide', note: 'Dealer setup context for plug, initial flush and water. Its introductory machine-type wording is not used to classify the Duo, and water advice must be adapted to local chemistry.' },
      { id: 'duo-coffeeness', label: 'Coffeeness Ascaso Steel Duo review', href: 'https://www.coffeeness.de/en/ascaso-steel-duo-review/', note: 'Independent review context for espresso, heat-up, build and steam impressions. Sample generation, grinder, coffee and test method differ from the current US V3.' },
      { id: 'duo-lance', label: 'Lance Hedrick, Ascaso Steel Duo PID Review', href: 'https://www.youtube.com/watch?v=ZKHVjOqGPIA', note: 'Embedded independent video published June 20, 2024, based on an older personally owned non-Plus machine. Useful for long-term workflow critique, not a specification source for current V3 or Plus models.' },
      { id: 'duo-warranty', label: 'Ascaso USA warranty terms and conditions', href: 'https://ascaso-usa.com/pages/warranty-terms-and-conditions', note: 'Primary source for exclusions, transfer limits and claim conditions. Exact remedy and statutory rights depend on the selected seller, region and problem.' },
      { id: 'duo-owner-thread', label: 'r/espresso owner discussion about the Steel Duo', href: 'https://www.reddit.com/r/espresso/comments/1d5w2wh/i_want_an_ascaso_steel_duo_opinions/', note: 'Self-selected owner anecdotes used to identify questions about noise, steam, controls and ownership. It is not a representative survey or failure-rate dataset.' },
      { id: 'duo-lance-discussion', label: 'r/Ascaso discussion of the Lance Hedrick review', href: 'https://www.reddit.com/r/Ascaso/comments/1dmgx52/new_ascaso_steel_duo_pid_review_by_lance_hedrick/', note: 'Community context that helps separate older Duo evidence from later Plus changes. Claims remain anecdotal and may reflect regional or modified machines.' },
    ],
    finalTitle: 'The bottom line',
    finalVerdict: [
      'Buy the Ascaso Steel Duo PID if your kitchen has the right electrical setup and your normal use includes enough milk drinks to benefit from simultaneous steam. It combines short startup, serious 58 mm preparation, temperature and pre-infusion control, and a compact body in a way few machines do.',
      'Skip it if you want the strongest boiler steam, a proven owner-service path, or a simple 15 A installation with no caveat. At $2,095, the Duo is not valuable merely because it is fast. It earns its price only when its particular pace and control fit the drinks you make every week.',
    ],
  },
  video: {
    id: 'ZKHVjOqGPIA',
    title: 'Ascaso Steel Duo PID Review',
    creator: 'Lance Hedrick',
    published: '2024-06-20',
    note: 'Independent long-term review of an older personally owned Steel Duo PID. Watch for workflow and ownership analysis, while keeping V3 electrical and current product differences separate.',
  },
  dimensions: [
    {
      id: 'espresso', score: 8.7,
      reason: 'A 58 mm group, adjustable PID, pre-infusion, pressure gauge, OPV and timer create a strong control platform, with independent evidence supporting capability but not a standardized current-V3 thermal test.',
      buyerMeaning: 'It rewards a good grinder and measured preparation; the feature set gives more room to adapt than a fixed-temperature starter machine.',
      evidenceStatus: 'Current design documented; performance independently contextualized across revisions',
      sourceIds: ['duo-official', 'duo-global', 'duo-manual', 'duo-coffeeness', 'duo-lance'],
      deepDiveId: 'espresso',
      title: 'What the brew controls establish, and what remains yours to solve',
      intro: [
        'The Duo supplies useful controls, not an automatic quality guarantee. Grinder quality, coffee, distribution, dose and measured yield still create the extraction.',
      ],
      evidence: [
        { signal: 'Current control platform', evidence: 'Official sources document one-degree PID adjustment, programmable pre-infusion, volumetrics, a timer, gauge and adjustable OPV around a 58 mm group.', decision: 'A good fit for someone who will actually record recipes and change one variable at a time.' },
        { signal: 'Temperature claim', evidence: 'Ascaso publishes a tight stability claim for the Steel platform, but the packet lacks an independent standardized current-US-V3 group test.', decision: 'Treat the claim as promising manufacturer evidence, not a measured Coffeedant result.' },
        { signal: 'Volumetric behavior', evidence: 'The flowmeter stops at saved water volume rather than beverage mass; puck and bypass behavior can change output.', decision: 'Use a scale to establish and periodically audit the programmed buttons.' },
      ],
      diagnosis: [
        { signal: 'Shot is fast, pale, and sharp', guidance: 'Verify dose and distribution, then grind finer while keeping target yield visible.' },
        { signal: 'Shot is slow, dry, and bitter', guidance: 'Grind coarser before changing PID, pressure and pre-infusion together.' },
      ],
      note: 'Recipe examples in the article are editorial starting points, not Coffeedant tests or factory settings.',
    },
    {
      id: 'milk', score: 8.2,
      reason: 'A separate adjustable steam thermoblock enables genuine overlap and good home cadence, though official and independent evidence place ultimate steam force below stronger boilers.',
      buyerMeaning: 'Excellent for ordinary back-to-back milk drinks when used on the intended circuit; less ideal for large pitchers or cafe-like steam expectations.',
      evidenceStatus: 'Architecture documented; steam impressions revision- and circuit-dependent',
      sourceIds: ['duo-official', 'duo-global', 'duo-faq', 'duo-clive-overview', 'duo-coffeeness'],
      deepDiveId: 'milk',
      title: 'Steam performance depends on supply, quantity, and technique',
      intro: [
        'The Duo removes the Uno waiting step by dedicating a second thermoblock to steam. That changes pace more reliably than it predicts texture.',
      ],
      evidence: [
        { signal: 'Simultaneous operation', evidence: 'Official documentation identifies two independent thermoblocks for brewing and steam.', decision: 'Choose the Duo over the Uno when milk work regularly overlaps extraction.' },
        { signal: '20 A operation', evidence: 'The current US listing specifies 2000 W and a NEMA 5-20 plug; dealer material reports stronger V2 steam on the intended supply.', decision: 'Confirm the circuit before using steam performance as the reason to buy.' },
        { signal: 'Boiler comparison', evidence: 'Ascaso FAQ and independent review context describe capable texture with less force than a strong boiler.', decision: 'Prioritize control and overlap, or choose a boiler machine for maximum reserve.' },
      ],
      diagnosis: [
        { signal: 'Large bubbles and thin milk', guidance: 'Introduce less air, earlier, then keep the milk rolling with a consistent small quantity.' },
        { signal: 'Steam feels weaker than expected', guidance: 'Confirm machine revision, steam setting, clean tip, full warm state and intended electrical supply.' },
      ],
    },
    {
      id: 'workflow', score: 9.0,
      reason: 'Short on-demand startup, simultaneous circuits, saved volumes, timer and front controls create a notably quick domestic routine once thermal readiness is defined consistently.',
      buyerMeaning: 'The Duo is strongest for households that want serious manual espresso without organizing mornings around boiler warm-up.',
      evidenceStatus: 'Workflow documented; published warm-up figures use different milestones',
      sourceIds: ['duo-official', 'duo-global', 'duo-manual', 'duo-faq', 'duo-clive-overview'],
      deepDiveId: 'workflow',
      title: 'Judge the complete drink, not the first readiness light',
      intro: [
        'The Duo can be ready much faster than many conventional machines, but the display, brew water, group, portafilter and cup do not all reach the same state at the same instant.',
      ],
      evidence: [
        { signal: 'Published readiness', evidence: 'Current global, current US, older FAQ and dealer sources range from about one minute to several minutes depending on revision and endpoint.', decision: 'Use a personal repeatable warm-up protocol rather than advertising one universal time.' },
        { signal: 'Drink queue', evidence: 'Independent circuits let extraction and milk overlap.', decision: 'The time benefit grows with each milk drink and matters less for one straight espresso.' },
        { signal: 'Programmed controls', evidence: 'Two doses, timer, pre-infusion and standby settings reduce repeated button work.', decision: 'Program only after verifying the output by scale with a stable recipe.' },
      ],
      diagnosis: [
        { signal: 'First drink tastes different', guidance: 'Standardize locked-portafilter warming, cup temperature and flush before changing brew temperature.' },
        { signal: 'Saved volume drifts', guidance: 'Weigh the output, then check grind, dose and puck resistance before reprogramming.' },
      ],
    },
    {
      id: 'build', score: 8.0,
      reason: 'A substantial metal exterior, 58 mm group and replaceable listed assemblies support the premium position, while comprehensive long-term V3 parts and failure data remain unavailable.',
      buyerMeaning: 'It feels and functions like a serious counter appliance, but buyers who prioritize owner repair should confirm local support before purchase.',
      evidenceStatus: 'Materials and selected parts documented; representative durability unresolved',
      sourceIds: ['duo-official', 'duo-global', 'duo-manual', 'duo-resources', 'duo-parts', 'duo-warranty', 'duo-owner-thread'],
      deepDiveId: 'build',
      title: 'Premium materials do not remove the need to investigate service',
      intro: [
        'Build has two parts: what can be observed and specified at purchase, and what can be repaired economically years later. The evidence is stronger for the first than the second.',
      ],
      evidence: [
        { signal: 'Chassis and touch points', evidence: 'Official sources list a steel or stainless case, walnut handles, substantial weight and a 58 mm group.', decision: 'Expect a stable premium appliance, while checking finish care and exact color in person.' },
        { signal: 'Parts evidence', evidence: 'Ascaso USA publishes resources and sells selected home espresso components.', decision: 'Ask about the exact V3 part and labor path; a collection page is not comprehensive availability.' },
        { signal: 'Reliability evidence', evidence: 'Owner reports are mixed and self-selected, with no representative current-V3 failure dataset.', decision: 'Do not convert anecdotes into a lifespan promise or failure percentage.' },
      ],
      diagnosis: [
        { signal: 'A leak or electrical smell appears', guidance: 'Stop using the machine and contact authorized support rather than opening the case.' },
        { signal: 'Long ownership is the priority', guidance: 'Get written dealer answers about local labor, shipping, parts and out-of-warranty service.' },
      ],
      note: 'The build score does not assume a service life. No controlled longevity study was found.',
    },
    {
      id: 'features', score: 8.8,
      reason: 'The Duo combines the controls most engaged home users need without requiring a screen-heavy interface, though the value of volumetrics and pressure adjustment depends on disciplined use.',
      buyerMeaning: 'A strong match for someone who wants to tune and save a recipe, not someone seeking a grind-to-cup automatic process.',
      evidenceStatus: 'Current feature set documented; outcomes preparation-dependent',
      sourceIds: ['duo-official', 'duo-global', 'duo-manual', 'duo-faq'],
      deepDiveId: 'features',
      title: 'Useful controls become valuable in a deliberate order',
      intro: [
        'The Duo offers enough adjustment to solve real espresso problems. It also offers enough adjustment to make troubleshooting harder if several settings move together.',
      ],
      evidence: [
        { signal: 'PID and steam temperature', evidence: 'Current documentation provides adjustable brew and steam temperatures.', decision: 'Tune temperature after grind, dose and yield are stable.' },
        { signal: 'Gauge and OPV', evidence: 'The machine shows brew pressure and provides pressure adjustment.', decision: 'Interpret pressure under flow and avoid unauthorized adjustment during warranty.' },
        { signal: 'Volumetrics and timer', evidence: 'Two saved water volumes and an extraction timer support repeat routines.', decision: 'Audit beverage mass periodically because water volume is not cup weight.' },
      ],
      diagnosis: [
        { signal: 'Too many settings have changed', guidance: 'Return to a recorded baseline and alter only grind first.' },
        { signal: 'Pressure becomes the target', guidance: 'Use taste and measured ratio as primary outcomes; the gauge is supporting evidence.' },
      ],
    },
    {
      id: 'value', score: 7.2,
      reason: 'The $2,095 current US price buys a rare fast simultaneous workflow and broad controls, but electrical work, a strong grinder, service uncertainty and credible dual-boiler rivals raise the bar.',
      buyerMeaning: 'Good value for a frequent milk-drink household that specifically benefits from short startup; weak value when steam is rarely used or a 20 A circuit is costly.',
      evidenceStatus: 'Current manufacturer price verified; total cost and lifespan household-specific',
      sourceIds: ['duo-official', 'duo-clive-overview', 'duo-warranty', 'duo-parts'],
      deepDiveId: 'value',
      title: 'Count installation, grinder, maintenance, and support before calling it value',
      intro: [
        'At this price, the Duo competes with machines that make a different promise. Its strongest return is time and flexibility during an ordinary milk-drink queue.',
      ],
      evidence: [
        { signal: 'Current machine price', evidence: 'Ascaso USA listed the current black V3 at $2,095 on the check date.', decision: 'Verify color, revision, plug, included accessories and seller before comparing discounts.' },
        { signal: 'Installation', evidence: 'The current US model specifies 2000 W and NEMA 5-20, with an adapter-related steam compromise in dealer evidence.', decision: 'Add any electrical assessment or work to the acquisition budget.' },
        { signal: 'Long-term cost', evidence: 'Warranty terms and selected parts are published, but representative repair cost, lifespan and resale data are absent.', decision: 'Treat ownership return as uncertain and investigate local service.' },
      ],
      diagnosis: [
        { signal: 'The price seems high beside the Uno', guidance: 'Count how often simultaneous steam saves a real wait in your weekly drinks.' },
        { signal: 'The grinder budget is squeezed', guidance: 'Choose a cheaper machine or wait. A strong brewer cannot compensate for unsuitable grind control.' },
      ],
    },
  ],
});

// Canonical identity: Ascaso Steel Uno PID / CD-EM-000071.
// Evidence packet checked 2026-09-17. This is a research-led assessment, not a Coffeedant hands-on test.
export const ascasoSteelUnoPidReview: MachineReviewData = buildResearchReview({
  slug: '/espresso-machine/ascaso-steel-uno/',
  productId: 'CD-EM-000071',
  brand: 'Ascaso',
  model: 'Steel Uno PID',
  sku: 'STEEL-UNO-PID-120V',
  category: 'Single-thermoblock semi-automatic espresso machine',
  brandPath: '/ascaso/',
  title: 'Ascaso Steel Uno PID review: excellent for espresso, conditional for milk',
  description: 'A research-led Ascaso Steel Uno PID review covering its single-thermoblock workflow, 58 mm brew controls, milk limitations, US availability, maintenance and alternatives.',
  verdictLabel: 'An espresso-first Steel',
  verdict: 'The Steel Uno PID makes sense when you want Ascaso’s 58 mm group, adjustable temperature, programmable pre-infusion, volumetric buttons, gauge, and quick on-demand heating, but milk is occasional and a 1050 W single circuit suits the kitchen better than the Duo. It is harder to recommend at a $1,695 US reference price while the official listing available to verify is refurbished and sold out. Confirm new stock, generation, warranty, and service before treating the reference price as a live offer.',
  assessment: 'A refined, low-draw espresso platform whose single-heater milk sequence and uncertain US availability narrow the audience.',
  image: 'https://ascaso-usa.com/cdn/shop/files/uno-black-frt.jpg?v=1711739532',
  imageAlt: 'Black Ascaso Steel Uno PID espresso machine with walnut controls',
  published: '2025-11-13',
  updated: '2026-09-17',
  authorNote: 'I evaluated the Uno as an espresso-first machine rather than a discounted Duo. One thermoblock can be an advantage for power demand, simplicity and straight-shot routines, but it creates a real mode change for milk. The right buyer should see that trade clearly before comparing finish or feature counts.',
  basisDisclosure: 'This score is an editorial judgment based on the current global Steel specification sheet, official manual and FAQ, an official US refurbished product listing, manufacturer warranty and support pages, independent video and retailer context, and separately labeled owner discussions. Coffeedant has not physically tested this machine. No source packet established representative failure rates, a standardized current-generation thermal test, or confirmed new-US inventory.',
  price: {
    label: 'Ascaso USA reference price',
    msrp: '$1,695.00 reference',
    typical: 'Official US refurbished listing showed $1,440.75 and sold out; verify new stock and warranty',
    currency: 'USD',
    numeric: '1695.00',
    checked,
  },
  links: [
    { label: 'Check Ascaso USA listing', href: 'https://ascaso-usa.com/products/refurbished-steel-uno-pid-programmable-espresso-machine-w-volumetric-controls-single-thermoblock-120v-black', note: 'Official refurbished listing; sold out when checked, not a confirmed new-machine offer', primary: true },
    { label: 'Read the Steel manual', href: 'https://ep-shopify.s3.amazonaws.com/related-documents/ascaso/steel/steel-manual.pdf', note: 'Official shared Steel manual, 2022 edition' },
  ],
  facts: [
    { label: 'Heating', value: 'One thermoblock for brewing, hot water, and steam in sequence' },
    { label: 'Power', value: '120 V, 1050 W, 9 A on official US reference listing' },
    { label: 'Portafilter', value: '58 mm, walnut-handled' },
    { label: 'Controls', value: 'PID, two volumetric doses, shot timer, programmable pre-infusion' },
    { label: 'Water tank', value: '67 fl oz / about 2 L, removable' },
    { label: 'Size and weight', value: 'About 10.5 × 12.5 × 15 in on US listing; current global sheet lists 270 × 360 × 315 mm and 12 kg' },
  ],
  quickAnswers: [
    { question: 'Can the Steel Uno brew and steam together?', answer: 'No. One thermoblock changes between brewing and steam. Make the espresso, enter steam mode, texture milk, then cool or prime the circuit before another shot as the manual directs.' },
    { question: 'Is it the same brewer as the Duo?', answer: 'It shares many controls and the 58 mm Steel platform, but the heating and milk workflow are materially different. The Duo has independent brew and steam thermoblocks.' },
    { question: 'How fast does it warm up?', answer: 'Official and retailer sources quote different readiness points and revisions. The US listing says 3 minutes 30 seconds, while an older FAQ says about 1 minute 30 seconds to brew temperature. Warm the portafilter and use repeatable first-shot preparation.' },
    { question: 'Is a new Uno available in the United States?', answer: 'That was not confirmed on the check date. The official US page found for this review was a sold-out refurbished listing, so ask Ascaso or an authorized dealer about new stock, model year, price, and warranty.' },
    { question: 'Does it need a 20 amp circuit?', answer: 'The official US Uno reference listing says 120 V, 1050 W, and 9 A, unlike the current 2000 W Duo. Still follow the label, manual, and local electrical requirements for the exact unit.' },
    { question: 'Is it automatic?', answer: 'No. Volumetric buttons stop a saved water volume, but you still grind, distribute, tamp, judge the shot, steam manually, and clean.' },
  ],
  bestFor: [
    'An espresso-first household that wants 58 mm accessories, PID control, a gauge, and programmable pre-infusion',
    'One or two drinks at a time, with milk made occasionally rather than in a daily queue',
    'A kitchen that values lower electrical draw and short on-demand startup over simultaneous steam',
  ],
  avoidIf: [
    'You regularly make two or more milk drinks and dislike waiting or cooling the heater between modes',
    'You need confirmed new US stock and a simple current manufacturer purchase path today',
    'Traditional boiler thermal mass, powerful steam, and broad owner-service evidence are priorities',
  ],
  pros: [
    '58 mm group with adjustable PID, pressure gauge, OPV, timer, pre-infusion, and volumetric buttons',
    '1050 W official US reference load is easier to place than the current 2000 W Duo',
    'On-demand heating and programmable standby suit short espresso sessions',
    'Metal Steel chassis and walnut controls make a compact, coherent work station',
  ],
  cons: [
    'Single thermoblock makes espresso and steam a serial process with a reset before returning to coffee',
    'Thermoblock steam is less forceful than strong boiler steam in official and independent context',
    'Official US listing available for verification was refurbished and sold out',
    'Current-generation independent measurements and representative reliability data are limited',
  ],
  alternatives: [
    { name: 'Ascaso Steel Duo PID', reason: 'Keep the Steel controls and add independent steam for a frequent milk-drink queue.', href: '/espresso-machine/ascaso-steel-duo-pid/' },
    { name: 'Profitec Go', reason: 'Choose a PID single boiler with a deliberately espresso-first traditional workflow.', href: '/espresso-machine/profitec-go/' },
    { name: 'Rancilio Silvia', reason: 'Choose a simpler single-boiler platform with a long-established manual routine.', href: '/espresso-machine/rancilio-silvia/' },
    { name: 'Breville Dual Boiler', reason: 'Choose independent boilers and broader milk pace if footprint and appliance styling are acceptable.', href: '/espresso-machine/breville-dual-boiler-bes920xl/' },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. I checked current global specifications, the official manual and FAQ, a US refurbished listing, support and warranty pages, independent video, retailers, and owner discussions.</p>
      <p>Generations and regions are kept separate. The US page was sold out and refurbished. Price was checked September 17, 2026. Coffeedant did not measure performance or durability, and owner posts do not establish failure rates.</p>
    `,
    sections: [
      {
        id: 'orientation',
        eyebrow: 'The decision in one minute',
        title: 'Choose the Uno for an espresso routine, not because it looks like a cheaper Duo',
        html: `
          <p>The Uno puts a 58 mm group, adjustable temperature, pre-infusion, gauge, OPV, timer, and two volumetric buttons around one 1050 W on-demand thermoblock. That lower-load platform is coherent for straight espresso and occasional milk. <a href="#uno-global">[2]</a> <a href="#uno-us-listing">[1]</a></p>
          <p>One heater means brewing and steam are serial. After steaming, the manual says to wait five minutes or run water to refill and cool the circuit before another coffee. The US page checked was a sold-out refurb showing a $1,695 reference and $1,440.75 refurb price, not proof of new stock or warranty. Verify the exact offer in writing. <a href="#uno-manual">[3]</a></p>
        `,
      },
      {
        id: 'setup',
        eyebrow: 'Before the first shot',
        title: 'Verify the exact machine first, then build a controlled grinder and water setup',
        html: `
          <p>Ask for model, voltage, production revision, serial, accessories, condition, service history, and written warranty. The US reference lists 120 V, 1050 W, 9 A, a 67 oz tank, 3-inch cup clearance, and roughly 10.5 by 12.5 by 15 inches. The global sheet uses different axes and lists 12 kg, so measure a tight space and trust the selected unit's label. <a href="#uno-us-listing">[1]</a> <a href="#uno-global">[2]</a></p>
          <p>Use a fine-adjustment espresso grinder and a 0.1 g scale. Volumetrics count water, not beverage mass, and nominal 58 mm size does not guarantee every accessory fits. Start with the supplied basket and portafilter.</p>
          <p>Learn the water's hardness and alkalinity, then follow current Ascaso guidance. Prime, rinse, and program the exact version as documented, leaving access for the tank, tray, cord, and portafilter.</p>
        `,
      },
      {
        id: 'espresso',
        eyebrow: 'Espresso performance',
        title: 'The brew platform offers unusual control for a compact single thermoblock',
        html: `
          <p>Current documentation combines adjustable brew temperature, pre-infusion, two volumetric doses, timer, gauge, standby, statistics, OPV, and a 58 mm group. These tools influence a recipe but do not measure its quality. <a href="#uno-global">[2]</a> <a href="#uno-us-listing">[1]</a></p>
          <p>For medium roast, 18 g in and about 36 g out is editorial starting guidance, not a Coffeedant test. Stop by scale and adjust grind. Use pressure as context, not a taste target; the older FAQ's static and flowing figures are not permission to adjust an unknown current machine. <a href="#uno-faq">[4]</a></p>
          <p>Ascaso claims close Steel-family stability, while The Real Sprometheus supplies older-sample context. Neither is a standardized current-generation test. Warm the locked portafilter consistently, stabilize grind and yield, then adjust PID temperature one step at a time. <a href="#uno-sprometheus-video">[7]</a></p>
        `,
      },
      {
        id: 'milk',
        eyebrow: 'Milk workflow',
        title: 'The wand can texture milk, but the mode change defines the experience',
        html: `
          <p>The single heater moves from brew to steam. The older FAQ describes another roughly one to one-and-a-half minutes and lower force than boiler steam, though generation and starting state matter. One cappuccino remains practical: purge, introduce air early, roll a small cold quantity, then wipe and purge. <a href="#uno-faq">[4]</a></p>
          <p>After steam, the manual says to wait five minutes or run water to refill and cool the circuit before another coffee. Follow the exact procedure, because the heater must return safely to brew condition. <a href="#uno-manual">[3]</a></p>
          <p>Keep milk, quantity, jug, and setting consistent. If two lattes are routine, compare the <a href="${internalHref('/espresso-machine/ascaso-steel-duo-pid/')}">Steel Duo PID</a> or a dual boiler rather than expecting technique to remove the serial delay.</p>
        `,
      },
      {
        id: 'workflow',
        eyebrow: 'Daily pace',
        title: 'Straight espresso is quick and tidy; mixed drink queues expose every transition',
        html: `
          <p>For straight espresso, warm the portafilter and cup, prepare the puck, watch timer and gauge, and weigh the yield until a saved button proves reliable. The US page says 3:30 readiness; the older FAQ says about 1:30 to brew temperature. Different revisions and endpoints prevent one universal claim. <a href="#uno-us-listing">[1]</a> <a href="#uno-faq">[4]</a> <a href="#uno-global">[2]</a></p>
          <p>Repeatability matters more than the shortest countdown. Keep the portafilter locked in and use the same brief water routine. The flowmeter is not brew-by-weight, so audit saved output after changing coffee or grind.</p>
          <p>One espresso and one pitcher are straightforward. Several drinks repeat steam transition, heater reset, puck preparation, and cleanup. Rinse the basket and group, wipe and purge the wand, and empty the tray after the session.</p>
        `,
      },
      {
        id: 'build',
        eyebrow: 'Construction and support',
        title: 'The Steel chassis is convincing, but US service evidence is thinner than the finish',
        html: `
          <p>Official sources list metal panels, walnut controls, active cup warming, lights, a 2 L tank, 12 kg global weight, and a stainless-lined aluminum thermoblock. It is substantial but not all stainless, and materials alone do not establish durability. <a href="#uno-global">[2]</a> <a href="#uno-us-listing">[1]</a></p>
          <p>Ascaso USA publishes resources and a model-specific thermoblock assembly, not a comprehensive parts guarantee. General product copy advertises 12 months and five years for thermoblocks and groups, while terms exclude wear, scale, water damage, misuse, and unauthorized work. Refurbished coverage may differ. <a href="#uno-resources">[5]</a> <a href="#uno-block-part">[6]</a> <a href="#uno-warranty">[10]</a></p>
          <p>Older video, European retailers, and owner posts cannot establish US stock or failure rates. For used or refurbished units, test cold start, flow, pressure, volumetrics, steam, hot water, display, sensing, and leaks, then ask about water and service history.</p>
        `,
      },
      {
        id: 'features',
        eyebrow: 'Control without automation',
        title: 'The Uno gives an espresso enthusiast more levers than its simple face suggests',
        html: `
          <p>Current documentation covers brew and steam temperature, two volumes, pre-infusion, timer, statistics, standby, gauge, and pressure control. Grinding, distribution, tamping, taste, milk, and cleaning remain manual. <a href="#uno-global">[2]</a></p>
          <p>Stabilize basket, dose, grind, yield, and distribution before temperature or pre-infusion. A gauge shows hydraulic pressure, not even extraction, and the older FAQ does not imply every current machine needs OPV adjustment. <a href="#uno-faq">[4]</a></p>
          <p>Save volumes only after weighed shots repeat. Steam temperature cannot remove the single-heater reset, and use statistics cannot diagnose scale, oils, gaskets, or water quality.</p>
        `,
      },
      {
        id: 'value',
        eyebrow: 'Price and availability',
        title: 'The Uno can be a rational purchase only after the actual offer is known',
        html: `
          <p>The official US page showed a $1,695 crossed-out reference, $1,440.75 refurb price, and sold-out status on September 17, 2026. It is not a live new-machine price. Confirm condition, revision, voltage, accessories, warranty, returns, parts, and local service. <a href="#uno-us-listing">[1]</a></p>
          <p>Budget for a grinder, scale, suitable water, care supplies, and wear items. At the reference price, compare the <a href="${internalHref('/espresso-machine/profitec-go/')}">Profitec Go</a> and <a href="${internalHref('/espresso-machine/rancilio-silvia/')}">Rancilio Silvia</a> for traditional single-boiler service and different steam behavior.</p>
          <p>Frequent milk makes the <a href="${internalHref('/espresso-machine/ascaso-steel-duo-pid/')}">Steel Duo PID</a> or <a href="${internalHref('/espresso-machine/breville-dual-boiler-bes920xl/')}">Breville Dual Boiler</a> more relevant. No resale, lifespan, or repair-cost dataset supports a life-cycle claim, so value stays conservative until a supported current offer is verified.</p>
        `,
      },
      {
        id: 'compare',
        eyebrow: 'Choose by workflow',
        title: 'Steel Uno PID versus Steel Duo PID, Profitec Go, and Rancilio Silvia',
        html: `
          <p>All four can serve an engaged espresso drinker. The real split is on-demand thermoblock versus single boiler, serial versus simultaneous milk work, control set, electrical demand, and the strength of the local purchase and service path.</p>
          ${comparisonTablesHtml('Ascaso Steel Uno PID', [
            { name: 'Ascaso Steel Uno PID', href: '/espresso-machine/ascaso-steel-uno/', priceClass: '$1,695 US reference; official refurb sold out', quickDecision: 'Choose fast espresso-first control after verifying an actual unit and warranty.', dimensions: 'US listing about 10.5 × 12.5 × 15 in; global chassis differs by axis context', heating: 'One thermoblock; 1050 W and 9 A on US reference', coffeeSetup: '58 mm; PID, gauge, OPV, pre-infusion, timer, volumetrics', milkWorkflow: 'Sequential; heat to steam, then cool or refill before coffee', bestFor: 'Straight espresso and occasional single milk drinks' },
            { name: 'Ascaso Steel Duo PID', href: '/espresso-machine/ascaso-steel-duo-pid/', priceClass: '$2,095 current US listing', quickDecision: 'Pay for simultaneous steam if the 20 A installation fits.', dimensions: '11.125 × 12.375 × 14.75 in; about 31.8 lb', heating: 'Two thermoblocks; current US 2000 W', coffeeSetup: '58 mm; similar Steel PID control platform', milkWorkflow: 'Simultaneous; separate steam circuit', bestFor: 'Frequent milk drinks and short startup' },
            { name: 'Profitec Go', href: '/espresso-machine/profitec-go/', priceClass: 'Check current dealer price', quickDecision: 'Choose a PID single boiler and intentionally manual routine.', dimensions: 'Verify exact current regional listing', heating: 'Single boiler', coffeeSetup: '58 mm; PID and pressure gauge', milkWorkflow: 'Sequential; boiler temperature change', bestFor: 'Espresso-first buyers who prefer traditional architecture' },
            { name: 'Rancilio Silvia', href: '/espresso-machine/rancilio-silvia/', priceClass: 'Check current dealer price', quickDecision: 'Choose simplicity and an established manual platform.', dimensions: 'Verify exact current regional listing', heating: 'Single boiler', coffeeSetup: '58 mm; fewer stock brew controls', milkWorkflow: 'Sequential; strong technique requirement', bestFor: 'Hands-on owners prioritizing a long-running design' },
          ], 'Ascaso price, power and dimension context comes from the cited official US pages checked September 17, 2026. The Uno page was refurbished and sold out. Verify exact revision, voltage, price, package, warranty and measurements for every live offer.')}
          <p>Choose Uno if espresso dominates and a verified offer makes sense. Choose Duo if milk volume justifies the power and price. Choose Go or Silvia if a traditional single boiler and its service ecosystem are more important than volumetrics and on-demand heat.</p>
        `,
      },
      {
        id: 'ownership',
        eyebrow: 'Maintenance and evidence limits',
        title: 'Separate daily cleaning, backflushing, descaling, and heater reset',
        html: `
          <h3>Daily care and reset</h3>
          <p>Rinse basket and group, wipe and purge the wand, empty the tray, and return the heater to brew condition exactly as documented after steam.</p>
          <h3>Coffee oils and scale</h3>
          <p>Treat the older FAQ's weekly interval as historical context, then follow the current instructions for the exact cleaner and use pattern. A chemical backflush removes coffee oils from the brew path; descaling addresses mineral deposits and depends on water chemistry, so the two jobs are not interchangeable. <a href="#uno-faq">[4]</a></p>
          <h3>Parts and service</h3>
          <p>Match gasket, screen, basket, group, production year, and part number. One official thermoblock listing does not make every future repair certain. <a href="#uno-block-part">[6]</a></p>
          <h3>Evidence gaps</h3>
          <p>No representative failure study, current standardized temperature series, confirmed new-US stock, comprehensive parts matrix, or average repair cost was found. Those gaps reduce the build and value scores.</p>
        `,
      },
      {
        id: 'recommendations',
        eyebrow: 'Four sensible directions',
        title: 'Match the heater to the drinks you actually make',
        html: `
          ${recommendationCardsHtml([
            { kicker: 'Best Ascaso fit for espresso', title: 'Ascaso Steel Uno PID', text: 'Keep the Uno if straight shots dominate, lower draw matters, and you can verify a well-supported current unit.', href: '/espresso-machine/ascaso-steel-uno/', linkLabel: 'Stay with the Uno', featured: true },
            { kicker: 'Best Ascaso fit for milk', title: 'Ascaso Steel Duo PID', text: 'Add an independent steam circuit when milk drinks are frequent and a suitable 20 amp setup is available.', href: '/espresso-machine/ascaso-steel-duo-pid/', linkLabel: 'Read the Duo review' },
            { kicker: 'Traditional PID single boiler', title: 'Profitec Go', text: 'Compare a familiar boiler architecture, 58 mm workflow, and intentionally manual milk transition.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read the Profitec Go review' },
            { kicker: 'Established manual platform', title: 'Rancilio Silvia', text: 'Compare a simpler long-running single boiler if service familiarity matters more than stock programmability.', href: '/espresso-machine/rancilio-silvia/', linkLabel: 'Read the Silvia review' },
          ])}
        `,
      },
      {
        id: 'faq',
        eyebrow: 'FAQ',
        title: 'Ascaso Steel Uno PID questions, answered',
        html: `
          ${faqHtml([
            { question: 'Can the Ascaso Steel Uno PID brew and steam at the same time?', answer: 'No. Its one thermoblock changes from brew to steam temperature. The Duo adds a separate steam circuit for simultaneous work.' },
            { question: 'How do I make another espresso after steaming?', answer: 'Follow the exact manual. It says to wait five minutes or run water to refill and cool the circuit until the temperature indication returns. Use caution because water and steam can be hot.' },
            { question: 'Does the Steel Uno PID require a 20 amp outlet?', answer: 'The official US reference listing says 120 volts, 1050 watts, and 9 amps. Check the rating plate and instructions for the exact unit, and follow local electrical requirements.' },
            { question: 'How long does the Uno take to heat?', answer: 'Sources give different figures and endpoints. The US listing says 3 minutes 30 seconds, while an older official FAQ says about 1 minute 30 seconds to brew temperature. Portafilter and cup warming add context.' },
            { question: 'Is the Steel Uno PID currently sold new in the US?', answer: 'This review could not confirm it. The official US page found was a sold-out refurbished listing. Contact Ascaso USA or an authorized dealer for current new stock, revision, price, and warranty.' },
            { question: 'Is volumetric dosing accurate enough to skip a scale?', answer: 'Not while dialing in. It saves water volume, not beverage weight, and puck resistance or bypass can alter output. Use a scale until the recipe is established and audit it periodically.' },
          ])}
        `,
      },
    ],
    sources: [
      { id: 'uno-us-listing', label: 'Ascaso USA refurbished Steel Uno PID product page', href: 'https://ascaso-usa.com/products/refurbished-steel-uno-pid-programmable-espresso-machine-w-volumetric-controls-single-thermoblock-120v-black', note: 'Primary US reference for 120 V power, nominal dimensions, tank, controls, materials, accessories, reference price and refurbished status. It was sold out and does not establish current new-machine availability or pricing.' },
      { id: 'uno-global', label: 'Ascaso global Steel range and 2026 specification sheet', href: 'https://ascaso.com/en/steel/', note: 'Primary current-family source for one-thermoblock architecture, control range, nominal global dimensions, weight and manufacturer claims. Regional voltage, package, configuration and availability may differ.' },
      { id: 'uno-manual', label: 'Ascaso Steel user manual', href: 'https://ep-shopify.s3.amazonaws.com/related-documents/ascaso/steel/steel-manual.pdf', note: 'Official 2022 shared manual for safe use, programming, the Uno post-steam reset, cleaning and water. Exact specifications should be checked against the selected machine label and current offer.' },
      { id: 'uno-faq', label: 'Ascaso USA Steel Uno FAQ', href: 'https://ep-shopify.s3.amazonaws.com/related-documents/ascaso/user-resources/ascaso-steel-uno-faq.pdf', note: 'Official support context for the single-block sequence, older heat-up timing, flowmeter, OPV, steam pressure and cleaning. It appears older and is not treated as a current-generation performance guarantee.' },
      { id: 'uno-resources', label: 'Ascaso USA user resources', href: 'https://ascaso-usa.com/pages/user-resources', note: 'Primary support index showing manuals and product help. It does not establish current new inventory, local technician coverage or future parts availability.' },
      { id: 'uno-block-part', label: 'Ascaso USA Steel Uno PID thermoblock assembly listing', href: 'https://ascaso-usa.com/products/ascaso-steel-uno-pid-120v-thermoblock-assembly-standard-portafilter-2018', note: 'Official evidence for a model-specific 120 V assembly associated with 2018 and later machines. Compatibility, stock, labor and comprehensive parts coverage still require confirmation.' },
      { id: 'uno-sprometheus-video', label: 'The Real Sprometheus, Ascaso UNO: Thermoblock Or Thermo-NOT?', href: 'https://www.youtube.com/watch?v=HfNaYJE9pmI', note: 'Embedded independent video published September 1, 2023. Useful for workflow and performance context on the presented unit, but sample generation, region, coffee, grinder and protocol limit transfer to every current Uno.' },
      { id: 'uno-scg-video', label: 'Seattle Coffee Gear, Ascaso Steel Uno vs. Steel Duo', href: 'https://www.youtube.com/watch?v=gcdq-nmhENg', note: 'Retailer comparison published August 30, 2021. Useful for illustrating the single- versus dual-circuit decision, not current pricing, current-generation output or independent longevity.' },
      { id: 'uno-eu-retailer', label: 'Koffiewarenhuis Steel Uno PID listing', href: 'https://www.koffiewarenhuis.nl/producten/ascaso-steel-uno-pid', note: 'European retailer evidence that a regional Uno listing existed with a current-looking configuration. Euro price, voltage, package, tax, stock and warranty cannot be transferred to the United States.' },
      { id: 'uno-warranty', label: 'Ascaso USA warranty terms and conditions', href: 'https://ascaso-usa.com/pages/warranty-terms-and-conditions', note: 'Primary source for exclusions, non-transfer language and claim conditions. Refurbished terms, exact remedy and statutory rights must be confirmed with the selected seller.' },
      { id: 'uno-owner-features', label: 'r/espresso discussion of machines with Uno-like features', href: 'https://www.reddit.com/r/espresso/comments/x86lh2/is_there_any_machine_combining_the_same_features/', note: 'Includes a self-identified Uno owner’s comments about build and volumetric behavior. Used only as anecdotal question context, not as performance measurement or reliability evidence.' },
      { id: 'uno-versus-duo-thread', label: 'r/espresso Steel Duo versus Uno discussion', href: 'https://www.reddit.com/r/espresso/comments/14xo4p7/should_i_get_the_ascaso_steel_duo_or_uno/', note: 'Self-selected community opinions about drink volume and heater choice. It helps frame buyer use cases but cannot prove broad satisfaction, failure rate or objective value.' },
    ],
    finalTitle: 'The bottom line',
    finalVerdict: [
      'Buy the Steel Uno PID when espresso is the main event, milk is occasional, a lower-power on-demand heater fits the kitchen, and you have verified the exact machine, price, warranty, and service route. The 58 mm group and unusually complete control set give a skilled owner meaningful room to tune coffee.',
      'Do not buy it as a bargain Duo or on the assumption that a current new US offer is easy to find. The single thermoblock creates a real brew-to-steam-to-brew sequence, and the official US listing available for this review was refurbished and sold out. Those two facts define the recommendation more than the walnut handles do.',
    ],
  },
  video: {
    id: 'HfNaYJE9pmI',
    title: 'Ascaso UNO | Thermoblock Or Thermo-NOT?',
    creator: 'The Real Sprometheus',
    published: '2023-09-01',
    note: 'Independent review of an older regional Steel Uno PID sample. Use it for demonstrated workflow and reviewer observations, while confirming current US specifications and avoiding generation-wide conclusions.',
  },
  dimensions: [
    {
      id: 'espresso', score: 8.5,
      reason: 'A 58 mm group, adjustable PID, pre-infusion, gauge, OPV, timer and volumetrics create a highly capable espresso-first platform, with limited standardized current-generation independent measurement.',
      buyerMeaning: 'The Uno offers serious control to someone with a suitable grinder and measured technique, without requiring a large boiler routine.',
      evidenceStatus: 'Current design documented; independent context older and protocol-limited',
      sourceIds: ['uno-us-listing', 'uno-global', 'uno-manual', 'uno-faq', 'uno-sprometheus-video'],
      deepDiveId: 'espresso',
      title: 'The brew controls support a disciplined recipe, not a shortcut around one',
      intro: [
        'The Uno gives an espresso drinker more useful adjustment than most compact single-thermoblock machines. The coffee, grinder and puck still determine whether those controls help.',
      ],
      evidence: [
        { signal: 'Brew platform', evidence: 'Official sources document a 58 mm group, one-degree PID steps, programmable pre-infusion, timer, gauge and adjustable pressure system.', decision: 'A strong match for measured espresso preparation and changing roast styles.' },
        { signal: 'Saved volume', evidence: 'The flowmeter stops at a programmed water count rather than weighing the beverage.', decision: 'Dial in with a scale and audit the buttons after coffee or grind changes.' },
        { signal: 'Thermal claim', evidence: 'Ascaso publishes a narrow stability claim for the Steel family, without a standardized independent current-Uno series in this packet.', decision: 'Value the control but do not present the tolerance as Coffeedant measurement.' },
      ],
      diagnosis: [
        { signal: 'Fast and sharp espresso', guidance: 'Check dose and distribution, then grind finer while holding target yield steady.' },
        { signal: 'Slow and drying espresso', guidance: 'Grind coarser before changing PID, pre-infusion and pressure together.' },
      ],
      note: 'The article’s recipe is an editorial starting point, not a Coffeedant-tested Uno recipe.',
    },
    {
      id: 'milk', score: 6.6,
      reason: 'The adjustable single thermoblock can texture a normal home quantity, but mode-change delay, lower steam force and the documented return-to-brew procedure constrain queues.',
      buyerMeaning: 'Suitable for an occasional cappuccino; regularly making several milk drinks is a strong reason to choose the Duo or a dual boiler.',
      evidenceStatus: 'Sequence documented; exact steam performance generation- and protocol-dependent',
      sourceIds: ['uno-global', 'uno-manual', 'uno-faq', 'uno-sprometheus-video', 'uno-scg-video'],
      deepDiveId: 'milk',
      title: 'Milk is possible, while throughput remains the central compromise',
      intro: [
        'One heater performs both jobs. The delay before steam and the reset before another shot matter at least as much as peak steam force.',
      ],
      evidence: [
        { signal: 'Single circuit', evidence: 'Official sources state that Uno cannot brew and steam simultaneously.', decision: 'Choose it for one drink at a time, not a household latte queue.' },
        { signal: 'Return to coffee', evidence: 'The manual directs a five-minute wait or a water procedure to refill and cool the heater after steam.', decision: 'Follow the exact reset before a subsequent shot and plan drink order.' },
        { signal: 'Steam character', evidence: 'Official support acknowledges lower pressure than boiler steam, while demonstrations show milk texturing is possible.', decision: 'Expect technique-friendly home steam rather than high-throughput boiler reserve.' },
      ],
      diagnosis: [
        { signal: 'Milk has large bubbles', guidance: 'Introduce less air near the start and create a steady roll with a smaller, consistent quantity.' },
        { signal: 'Steam output seems weak', guidance: 'Confirm full steam mode, temperature setting and a clear tip before assuming a fault.' },
      ],
    },
    {
      id: 'workflow', score: 7.7,
      reason: 'Straight espresso benefits from on-demand heat, front controls and saved volumes, while milk transitions and conflicting readiness figures prevent a universal fast-workflow claim.',
      buyerMeaning: 'Quick and satisfying for one espresso session; progressively less convenient as the drink mix and queue grow.',
      evidenceStatus: 'Operation documented; readiness milestones and generations differ',
      sourceIds: ['uno-us-listing', 'uno-global', 'uno-manual', 'uno-faq', 'uno-scg-video'],
      deepDiveId: 'workflow',
      title: 'A fast heater does not make every drink sequence fast',
      intro: [
        'The Uno’s workflow score changes sharply with the order. One straight espresso uses its strengths; several milk drinks repeat its main limitation.',
      ],
      evidence: [
        { signal: 'Brew readiness', evidence: 'Official sources publish different figures, likely reflecting different revisions and definitions.', decision: 'Build a repeatable portafilter-warming routine rather than promising one countdown.' },
        { signal: 'Milk routine', evidence: 'The heater changes to steam and must return to brew condition afterward.', decision: 'The workflow is best for occasional milk and one completed drink at a time.' },
        { signal: 'Lower load', evidence: 'The official US reference lists 1050 W and 9 A.', decision: 'Electrical placement is easier than the current Duo, subject to the exact rating plate and circuit.' },
      ],
      diagnosis: [
        { signal: 'First espresso is inconsistent', guidance: 'Warm the portafilter and cup the same way before extending the full startup blindly.' },
        { signal: 'Programmed yield changes', guidance: 'Return the cup to a scale and check puck resistance before reprogramming.' },
      ],
    },
    {
      id: 'build', score: 7.9,
      reason: 'Substantial metal construction, a standard-diameter group and at least some model-specific parts evidence are positives, while current US support, complete parts coverage and representative longevity remain unclear.',
      buyerMeaning: 'The exterior earns the premium impression, but service should be verified as carefully as finish and dimensions.',
      evidenceStatus: 'Materials and selected parts documented; long-term population data absent',
      sourceIds: ['uno-us-listing', 'uno-global', 'uno-manual', 'uno-resources', 'uno-block-part', 'uno-warranty', 'uno-owner-features'],
      deepDiveId: 'build',
      title: 'Visible substance is stronger evidence than long-term repair economics',
      intro: [
        'The Steel body, walnut controls and roughly 12 kg global weight create a substantial object. The harder question is what happens when an internal component needs attention years later.',
      ],
      evidence: [
        { signal: 'External construction', evidence: 'Official sources describe steel or stainless panels, walnut touch points and a 58 mm group.', decision: 'Expect a stable counter presence, while checking finish and exact dimensions on the selected unit.' },
        { signal: 'Parts signal', evidence: 'A model-specific Uno thermoblock assembly and support resources are published.', decision: 'Confirm stock, generation fit, technician and labor rather than generalizing from one assembly.' },
        { signal: 'Durability evidence', evidence: 'No representative failure study or repair-cost dataset was found; owner comments are self-selected.', decision: 'Do not assign a lifespan based on isolated praise or complaints.' },
      ],
      diagnosis: [
        { signal: 'Buying refurbished', guidance: 'Get condition grade, service history, serial, accessories, return terms and exact warranty in writing.' },
        { signal: 'Long-term repair matters most', guidance: 'Call an authorized local service option before purchase and price shipping if none exists.' },
      ],
      note: 'No assumed service life is built into this score.',
    },
    {
      id: 'features', score: 8.2,
      reason: 'PID, pre-infusion, volumetrics, timer, gauge, OPV, statistics and standby are unusually complete for a simple single-heater face, but none automates preparation or removes mode changes.',
      buyerMeaning: 'Excellent for a user who wants repeatable manual control; unnecessary complexity for someone who only wants push-button drinks.',
      evidenceStatus: 'Feature set documented; utility depends on user method',
      sourceIds: ['uno-us-listing', 'uno-global', 'uno-manual', 'uno-faq'],
      deepDiveId: 'features',
      title: 'The controls help when each has a defined job',
      intro: [
        'The Uno packs substantial adjustability behind a restrained interface. The best approach is to introduce controls only after a stable baseline exists.',
      ],
      evidence: [
        { signal: 'Temperature control', evidence: 'Current global documentation lists one-degree brew and steam temperature adjustment.', decision: 'Use brew temperature to refine a stable recipe, not to repair severe flow problems.' },
        { signal: 'Pressure feedback', evidence: 'Gauge and adjustable OPV expose pressure behavior.', decision: 'Interpret under flow and use authorized adjustment guidance.' },
        { signal: 'Convenience controls', evidence: 'Two volumetric doses, timer, standby and statistics reduce repeated input.', decision: 'Keep a scale in the workflow because convenience data does not measure extraction.' },
      ],
      diagnosis: [
        { signal: 'Recipe becomes hard to troubleshoot', guidance: 'Return temperature, pre-infusion and volume to a known baseline, then adjust grind first.' },
        { signal: 'The gauge drives every decision', guidance: 'Put measured yield and taste first; use pressure as supporting evidence.' },
      ],
    },
    {
      id: 'value', score: 6.8,
      reason: 'The control set and lower-draw Steel platform can justify a premium, but a sold-out official US refurb page, unconfirmed new price, single-heater milk limits and unclear long-term service reduce confidence.',
      buyerMeaning: 'Potentially good value in a verified supported offer for an espresso-first buyer; poor value when purchased blind or when frequent milk quickly prompts an upgrade.',
      evidenceStatus: 'Reference pricing verified; live new-US offer and life-cycle cost unresolved',
      sourceIds: ['uno-us-listing', 'uno-warranty', 'uno-block-part', 'uno-eu-retailer', 'uno-versus-duo-thread'],
      deepDiveId: 'value',
      title: 'The real offer matters more than the crossed-out reference price',
      intro: [
        'A sold-out refurbished page cannot support the same buying conclusion as a current new machine with clear warranty and returns. Value begins only after the offer is identified.',
      ],
      evidence: [
        { signal: 'US reference', evidence: 'The official refurbished page showed $1,695 crossed out, $1,440.75 refurbished, and sold out.', decision: 'Do not present either figure as a live new-machine street price.' },
        { signal: 'Regional stock', evidence: 'European retailer listings show the model in another market with different voltage, tax and consumer terms.', decision: 'Do not import price or warranty assumptions across regions.' },
        { signal: 'Ownership uncertainty', evidence: 'Published warranty and a part listing exist, while average repair cost, resale and lifespan do not.', decision: 'Get support details in writing and keep the score conservative.' },
      ],
      diagnosis: [
        { signal: 'A used Uno looks inexpensive', guidance: 'Test brew, steam, cooldown, volumetrics, pressure, leaks and display from a cold start.' },
        { signal: 'The offer lacks written warranty', guidance: 'Treat missing coverage as a price risk, especially for refurbished or imported stock.' },
      ],
    },
  ],
});

export const ascasoUpgradeReviews: MachineReviewData[] = [
  ascasoSteelDuoPidReview,
  ascasoSteelUnoPidReview,
];
