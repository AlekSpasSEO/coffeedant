import {
  buildResearchReview,
  comparisonTablesHtml,
  faqHtml,
  recommendationCardsHtml,
} from '../batch-review-builder';

export const nineBaristaMk2Review = buildResearchReview({
  slug: '/espresso-machine/9barista-mk2/',
  productId: 'CD-EM-000108',
  brand: '9Barista',
  model: 'Espresso Machine Mk.2',
  sku: '9B-MK2',
  category: 'Stovetop espresso machine',
  brandPath: '/espresso-machine/',
  brandLinkLabel: 'More espresso machine reviews',
  title: '9Barista Espresso Machine Mk.2 review',
  description: 'A research-led 9Barista Mk.2 review covering its fixed 9-bar stovetop system, single-shot rhythm, grinder needs, five-year warranty and closest manual alternatives.',
  verdictLabel: 'Brilliant within a very narrow brief',
  verdict: 'I would buy the 9Barista Mk.2 for one or two straight espressos when counter space or access to electricity is genuinely constrained. It is a precisely engineered brewer, not a small all-purpose espresso station. The fixed-temperature, fixed-pressure design makes repeatability easier, but one shot at a time, a hot reset and no milk system make it a poor answer for a busy latte household.',
  assessment: 'A compelling mechanical espresso brewer for a specific owner, not a universal compact-machine substitute.',
  image: 'images/products/9barista-mk2.jpeg',
  imageAlt: '9Barista Espresso Machine Mk.2 stovetop espresso brewer',
  published: '2025-11-08',
  updated: '2026-09-15',
  authorNote: 'The useful question is not whether this extraordinary mechanism can make espresso. It can. The question is whether its one-cup stovetop rhythm fits the way you actually drink coffee. I reviewed current official documentation, independent demonstrations and several owner communities to answer that. This is a research-led assessment; I have not physically tested the Mk.2.',
  basisDisclosure: 'This score is an editorial synthesis of current manufacturer documentation, independent hands-on work and attributed owner reports. Coffeedant did not bench-test this machine. Scores describe the buying fit and documented design, not measurements produced in our own lab.',
  price: {
    label: '9Barista US direct price',
    msrp: 'From $750.00',
    numeric: '750.00',
    currency: 'USD',
    typical: 'Standard from $750; selected Pro and stove-option configurations can cost more',
    checked: 'September 15, 2026',
  },
  links: [
    { label: 'Check 9Barista price', href: 'https://9barista.com/en-us/products/9barista-espresso-machine-mk2', note: 'Official US store; choose Standard or Pro and the correct stove option', primary: true },
    { label: 'Check Amazon availability', href: 'https://amzn.to/4a4dFQM', note: 'Affiliate link; seller, bundle and warranty eligibility can differ', affiliate: true },
  ],
  facts: [
    { label: 'Brewer type', value: 'Mechanical twin-boiler stovetop espresso machine' },
    { label: 'Published brew conditions', value: '9 bar and about 93°C' },
    { label: 'Coffee dose', value: '17–20 g in a 53 mm basket' },
    { label: 'Published output', value: 'About 40–45 g' },
    { label: 'Water fill', value: '110–120 ml' },
    { label: 'Published cycle', value: '3–6 minutes from cold; about 25–30 seconds of visible extraction' },
    { label: 'Heat source', value: 'Gas, electric ring, ceramic or halogen; induction needs the selected adaptor' },
    { label: 'Milk system', value: 'None' },
    { label: 'Primary body materials', value: 'Nickel-plated ECOBrass, stainless steel and anodized aluminium' },
    { label: 'Warranty', value: 'Five years for eligible new Mk.2 purchases; exclusions apply' },
  ],
  quickAnswers: [
    { question: 'Is it a moka pot?', answer: 'No. Both use a stove, but 9Barista publishes a regulated 9-bar brew stage at about 93°C and a 53 mm espresso basket. Its thermodynamic system and cup result belong in an espresso decision, not a moka-pot capacity comparison.' },
    { question: 'Standard or Pro?', answer: 'The brewing base is the same. Standard supplies a conventional portafilter, standard basket, silicone cap and wooden handles. Pro adds a naked portafilter, IMS precision basket, stainless cap and anodized aluminium handles.' },
    { question: 'Can it steam milk?', answer: 'No. You need a separate frother or steamer, which adds cost, counter work and another cleanup sequence.' },
    { question: 'Can it make two drinks quickly?', answer: 'Not in the way a pump machine can. It produces one approximately 40–45 g extraction, then must be cooled, opened, cleaned and refilled before another cycle.' },
    { question: 'Do I still need a grinder?', answer: 'Yes, unless you accept pressurized-style convenience from another system. The 9Barista uses an unpressurized espresso basket, so a capable espresso grinder is part of the real budget.' },
    { question: 'Is it truly portable?', answer: 'It needs no wall power and packs smaller than a boiler machine, but independent long-term reporting puts the brewer around 1.7 kg before plate, tamper and grinder. It suits car or camper travel better than ultralight luggage.' },
  ],
  bestFor: [
    'One straight-espresso drinker who values repeatability more than pressure or temperature profiling',
    'A small kitchen, boat, camper or off-grid setup with a suitable and controllable stove',
    'An owner attracted to repairable mechanical hardware and willing to learn a hot-metal routine',
  ],
  avoidIf: [
    'You make several drinks back to back or regularly serve guests',
    'Milk drinks are the default and you do not already own a separate milk solution',
    'You want to vary brew temperature, pressure, preinfusion or output precisely from shot to shot',
  ],
  pros: [
    'Publishes genuine espresso pressure and temperature without a pump or plug',
    'Small footprint with an unusually substantial metal construction',
    'Standardized brew conditions can make repeatability easier once grind is correct',
    'Five-year eligible-purchase warranty and an unusually broad official spare-parts catalog',
  ],
  cons: [
    'One fixed-size extraction followed by a cooling and reset sequence',
    'No milk system and no simultaneous second task',
    'Hot handling and safety-valve instructions demand close attention',
    'Full setup cost includes an espresso grinder and possibly a milk tool',
  ],
  dimensions: [
    {
      id: 'espresso', score: 8.8, reason: 'The regulated 9-bar, approximately 93°C system targets real espresso and independent reviewers consistently report convincing cup quality, but the owner cannot directly profile pressure or temperature.',
      buyerMeaning: 'Excellent for repeatable medium-roast straight shots after dialing the grind; restrictive for someone who treats changing pressure, temperature and ratio as the hobby.',
      evidenceStatus: 'Published brew design with independent Mk.2 and prior-generation context; no Coffeedant measurements',
      sourceIds: ['9b-official-product', '9b-how', '9b-manual', '9b-toms', '9b-lance', '9b-hoffmann'],
      deepDiveId: 'espresso', title: 'Espresso: fixed conditions shift the work to the grinder',
      intro: [
        '9Barista controls the water side of the recipe for you. The company specifies about 9 bar and 93°C, while the basket accepts 17–20 g and the collected output is normally around 40–45 g. That leaves coffee, dose, distribution and grind as the useful daily controls.',
        'This is not automatically limiting. A stable target can be liberating when you want a familiar espresso every morning. It becomes restrictive when a very light coffee asks for a different temperature, longer preinfusion or intentionally declining pressure.',
      ],
      evidence: [
        { signal: 'Regulated brew stage', evidence: '9Barista documents a mechanical twin-boiler system that reaches approximately 9 bar and controls brew water near 93°C.', decision: 'Treat it as an espresso brewer with a fixed operating point, not as a moka pot and not as a profiling machine.' },
        { signal: '53 mm basket', evidence: 'The current Standard uses a 53 mm basket; Pro includes an IMS precision basket and naked portafilter.', decision: 'A capable espresso grinder and careful puck preparation remain essential even though the brewer regulates pressure.' },
        { signal: 'Independent cup reports', evidence: 'Tom’s Guide evaluated a Mk.2 Pro for roughly a month; Lance Hedrick demonstrated the Mk.2. Older Hoffmann, Bon Appétit and The Drive work covers the same core concept but not every Mk.2 revision.', decision: 'The evidence supports the concept, while generation labels should stay attached to any observation.' },
        { signal: 'One output window', evidence: 'The official target is approximately 40–45 g from a 17–20 g dose.', decision: 'Buy it for a compact double-espresso style result, not for one-touch singles, long drinks or freely selected brew ratios.' },
      ],
      diagnosis: [
        { signal: 'No coffee reaches the cup', guidance: 'Stop within the manual’s time limit, remove heat, cool fully and then grind coarser. Do not keep increasing stove power against a choked basket.' },
        { signal: 'Extraction appears early and runs pale', guidance: 'Keep dose stable and grind finer in small steps. Confirm that the stove setting and water fill did not change at the same time.' },
        { signal: 'Cup tastes harsh at a normal output', guidance: 'Try a coarser grind or a slightly lower dose. The machine does not offer a lower brew-temperature menu.' },
        { signal: 'Light roast remains sharp', guidance: 'Allow a longer rest after roasting and consider a more soluble coffee. If temperature control is the missing lever, a pump or manual lever alternative is the more honest fix.' },
      ],
      note: 'Flavor descriptions in cited reviews remain those reviewers’ observations. Coffeedant has not verified extraction temperature, pressure or taste on a test unit.',
    },
    {
      id: 'milk', score: null, reason: 'The Mk.2 has no steam wand, frother or milk-heating circuit.',
      buyerMeaning: 'Milk is N/A rather than a low-performing feature. It is excluded from the calculated overall score, but the missing function still changes the verdict and total setup cost.',
      evidenceStatus: 'Not applicable by design',
      sourceIds: ['9b-official-product', '9b-manual'],
      deepDiveId: 'milk', title: 'Milk: N/A is an honest limitation, not a hidden zero',
      intro: [
        'There is no milk hardware to assess. That makes the category not applicable to the brewer’s score, yet it matters immediately if cappuccinos or flat whites are part of your routine.',
        'A separate electric frother is simple but usually produces a different texture from a steam wand. A standalone steamer can be more capable, but it erodes the space and simplicity argument that makes 9Barista appealing.',
      ],
      evidence: [
        { signal: 'No integrated milk path', evidence: 'The official product and guide describe espresso brewing only.', decision: 'A straight-espresso buyer loses nothing; a milk-drink buyer is choosing a two-device station.' },
        { signal: 'Separate heat task', evidence: 'Any milk device runs outside the 9Barista cycle.', decision: 'You may overlap tasks with the right separate tool, but the combined workflow and electrical needs depend on that tool.' },
        { signal: 'Score treatment', evidence: 'The rating model excludes N/A categories from the average.', decision: 'Do not read the overall score as proof that 9Barista serves milk-drink households as well as a six-function machine.' },
      ],
      diagnosis: [
        { signal: 'You make one occasional latte', guidance: 'A small frother may be enough if you accept its texture and cleaning routine.' },
        { signal: 'You make two or more milk drinks daily', guidance: 'Price and stage the complete two-device workflow before deciding that the brewer saves space.' },
        { signal: 'Latte art is important', guidance: 'Choose a capable standalone steamer or an espresso machine with a conventional wand.' },
      ],
      note: 'Milk is excluded from the numerical average. The verdict still penalizes the absent function whenever the intended buyer makes milk drinks.',
    },
    {
      id: 'workflow', score: 6.3, reason: 'The cold-start sequence is compact and repeatable, but hot disassembly and a full reset between cups sharply limit throughput.',
      buyerMeaning: 'Pleasant for one deliberate espresso; frustrating when the second drink should arrive immediately.',
      evidenceStatus: 'Official sequence corroborated by hands-on and owner reports',
      sourceIds: ['9b-manual', '9b-toms', '9b-lance', '9b-drive', '9b-two-year', '9b-reddit-pool'],
      deepDiveId: 'workflow', title: 'Workflow: the second drink is the real test',
      intro: [
        'The published 3–6 minute cold cycle sounds competitive with warming a traditional boiler machine. It does not describe grinding, puck preparation, stove adjustment, cooling, disassembly or the next drink.',
        'The first cup is the machine’s strongest use case. A queue exposes the thermal reset: the hot brewer must become safe enough to handle and refill before the same process begins again.',
      ],
      evidence: [
        { signal: 'Cold start', evidence: 'Official guidance gives approximately 3–6 minutes from cold and 25–30 seconds for the visible extraction phase.', decision: 'Good for a prepared one-cup routine; not instant and dependent on the stove.' },
        { signal: 'Heat source variability', evidence: 'Gas, electric and induction arrangements deliver heat differently; induction requires the selected adaptor.', decision: 'Expect to learn a repeatable stove setting and position rather than copying another owner’s number blindly.' },
        { signal: 'Back-to-back reset', evidence: 'The guide requires removing heat and cooling before safe reopening; owner reports repeatedly flag the second shot as the weak point.', decision: 'Two independent drinkers should rehearse the queue before choosing this as the only household brewer.' },
        { signal: 'Cleaning', evidence: 'The basket and parts are rinsed after use, with periodic scale care and replaceable seals.', decision: 'The individual cleanup is simple, but it sits inside every repeat cycle.' },
      ],
      diagnosis: [
        { signal: 'First shot takes longer than six minutes', guidance: 'Check water quantity, heat-transfer plate, stove position and power against the manual rather than simply waiting longer.' },
        { signal: 'Second shot feels unsafe or rushed', guidance: 'Use a cooling bowl and a deliberate landing zone, or accept that a different brewer suits back-to-back use.' },
        { signal: 'Output changes day to day', guidance: 'Mark the stove setting and control dose, grind and water fill. Household induction cycling can still change timing.' },
      ],
    },
    {
      id: 'build', score: 9.1, reason: 'Dense metal construction, user-replaceable wear parts and a five-year eligible-purchase warranty are unusually strong, though the hot and pressurized device must be operated exactly as instructed.',
      buyerMeaning: 'This is the main reason to pay the premium, provided official parts supply and safe handling matter more than low weight.',
      evidenceStatus: 'Current materials, warranty and parts documented; lifetime claims remain unproven',
      sourceIds: ['9b-official-product', '9b-warranty', '9b-parts', '9b-toms', '9b-drive', '9b-one-year'],
      deepDiveId: 'build', title: 'Build: serviceable hardware with safety responsibilities',
      intro: [
        'Mk.2 changes are mostly about durability and service rather than a new cup format. 9Barista lists harder nickel-plated ECOBrass, a steatite ceramic thermal break, anodized chimney components and a thicker 3 mm boiler O-ring.',
        'That is encouraging evidence, not a promise of indefinite life. The warranty excludes consumables, scale damage, misuse and unauthorized parts, and it is limited to eligible original purchasers.',
      ],
      evidence: [
        { signal: 'Primary construction', evidence: '9Barista lists nickel-plated ECOBrass, 304 stainless steel, anodized aluminium, silicone, PTFE and PEI in the current product.', decision: 'Expect a compact but heavy object whose value rests partly on machining and material choice.' },
        { signal: 'Mk.2 revisions', evidence: 'The company identifies harder brass, a ceramic thermal break, anodized components and a revised boiler seal.', decision: 'Do not apply every Mk.1 wear report directly to Mk.2, but keep older reports as context for the platform.' },
        { signal: 'Parts catalog', evidence: 'Official listings include seals, safety components, handles, portafilters, baskets and other service items, with compatibility notes.', decision: 'Order by exact generation; some Mk.1 and Mk.2 portafilter parts are not interchangeable.' },
        { signal: 'Warranty', evidence: 'New Mk.2 machines have a five-year limited warranty under the published eligibility and exclusion terms.', decision: 'Direct or authorized purchase has practical value; secondhand coverage is not equivalent.' },
      ],
      diagnosis: [
        { signal: 'Steam or water exits unexpectedly', guidance: 'Remove the brewer from heat, keep clear and follow the safety-valve instructions. Never open it hot or pressurized.' },
        { signal: 'A seal begins leaking', guidance: 'Identify the exact seal and generation from official diagrams, cool the brewer completely and use the specified replacement.' },
        { signal: 'Scale becomes visible', guidance: 'Follow 9Barista’s approved descaling instructions and improve source-water planning instead of scraping precision parts.' },
      ],
      note: 'Independent reviewers praise the construction, but no credible population-level failure data establish a service-life figure. “Built to last” remains a design intention, not a measured lifespan.',
    },
    {
      id: 'features', score: 6.0, reason: 'The thermodynamic regulation is a remarkable core feature, while conventional convenience controls, brew profiling, hot water and milk functions are intentionally absent.',
      buyerMeaning: 'A high score for engineering should not be confused with a long feature list.',
      evidenceStatus: 'Official feature set and limitations documented',
      sourceIds: ['9b-official-product', '9b-how', '9b-manual', '9b-lance'],
      deepDiveId: 'features', title: 'Features: one sophisticated job and almost nothing extra',
      intro: [
        'Heat drives a lower boiler until a valve opens at the designed pressure, then heat exchange controls the brew water before it crosses the coffee. That mechanical choreography replaces a pump, electronic PID and user interface.',
        'The elegance is real. So is the absence of a timer, temperature menu, pressure gauge, saved recipes, water spout, cup warmer and steam wand. The right owner sees focus. The wrong owner sees a costly brewer with missing tools.',
      ],
      evidence: [
        { signal: 'Automatic mechanical regulation', evidence: 'The twin-boiler arrangement creates pressure and manages brew temperature without electronics.', decision: 'There is no app or control panel to fail, but there is also no user-set brew temperature.' },
        { signal: 'Standard and Pro choices', evidence: 'Pro changes the portafilter, basket, basket cap and handles rather than the base brewing principle.', decision: 'Choose Pro for workflow and basket preferences, not for a higher published pressure or larger drink.' },
        { signal: 'Stove adapters', evidence: 'The order flow pairs the machine with an induction adaptor or heat-transfer plate according to stove type.', decision: 'Select the correct option at checkout; portability still assumes a compatible heat source.' },
      ],
      diagnosis: [
        { signal: 'You want to explore pressure curves', guidance: 'A Cafelat Robot, Flair 58 or electronically controlled pump machine gives more direct experimentation.' },
        { signal: 'You want the same shot with little interface work', guidance: 'The fixed mechanical operating point is exactly the Mk.2’s strength once grind is established.' },
        { signal: 'You want an Americano station', guidance: 'Plan a kettle or second hot-water source because the brewer does not dispense bypass water.' },
      ],
    },
    {
      id: 'value', score: 6.8, reason: 'The current $750 starting price buys distinctive engineering, parts access and a long warranty, but practical capability per dollar is low beside capable electric and lever systems.',
      buyerMeaning: 'Good value only when compact non-electric espresso and mechanical ownership are requirements rather than aesthetic bonuses.',
      evidenceStatus: 'Price checked September 15, 2026; bundle and retailer availability vary',
      sourceIds: ['9b-official-product', '9b-warranty', '9b-toms', '9b-lance', '9b-robot-thread'],
      deepDiveId: 'value', title: 'Value: price the requirement, not the novelty',
      intro: [
        'The US direct page showed a from-price of $750 on the review date. Configuration choices can lift the total, and a grinder remains mandatory. Milk drinkers also need separate hardware.',
        'A lower-priced electric semi-automatic usually adds hot water and steam. A manual lever can add pressure control and quicker repeats. Neither duplicates the 9Barista combination of small storage, stove operation and automatic mechanical brew regulation.',
      ],
      evidence: [
        { signal: 'Direct price', evidence: '9Barista’s US storefront showed “From $750” when checked September 15, 2026.', decision: 'Compare configured totals, not older launch prices repeated in reviews.' },
        { signal: 'Five-year warranty', evidence: 'Eligible new Mk.2 purchases receive published five-year limited coverage.', decision: 'The premium carries more ownership support than many niche manual brewers, subject to territory and exclusions.' },
        { signal: 'Full setup', evidence: 'An espresso grinder, scale and perhaps milk hardware sit outside the box.', decision: 'The machine price is not the complete route to the drinks shown in your plan.' },
        { signal: 'Alternative capability', evidence: 'Electric Bambino-class machines add steam; Robot and Flair-class levers add manual control.', decision: 'Pay the Mk.2 premium only when its particular constraints solve your particular space or power problem.' },
      ],
      diagnosis: [
        { signal: 'You mainly want a conversation piece', guidance: 'Wait a week and write down actual drink counts. Novelty alone is a fragile reason for a $750 brewer.' },
        { signal: 'You live in a very small kitchen', guidance: 'Measure the complete stored kit, including grinder, plate, scale and cooling bowl, against a compact electric setup.' },
        { signal: 'You travel by car or camper', guidance: 'Its no-plug brewing and strong build may justify the weight better than it does for air travel.' },
      ],
    },
  ],
  alternatives: [
    { name: 'Breville Bambino Plus', reason: 'Choose it for fast electric startup and integrated automatic milk at a lower machine price.', href: '/espresso-machine/breville-bambino/' },
    { name: 'Cafelat Robot', reason: 'Choose it for manually controlled pressure, a simpler repeat cycle and no stove.', href: '/espresso-machine/cafelat-robot-barista/' },
    { name: 'Flair 58', reason: 'Choose it when pressure profiling and conventional 58 mm accessories matter more than packability.', href: '/espresso-machine/flair-58/' },
    { name: 'Gaggia Classic', reason: 'Choose a pump machine for steam, hot water and a more familiar multi-drink station.', href: '/espresso-machine/gaggia-classic-evo-pro/' },
  ],
  article: {
    methodology: 'I separated current Mk.2 documentation from earlier 9Barista coverage, checked the US direct price and availability on September 15, 2026, and compared manufacturer claims with independent Mk.2 demonstrations, older-platform reviews and three different owner-discussion pools. No taste, pressure, temperature or durability statement is presented as a Coffeedant test result.',
    sections: [
      {
        id: 'orientation', eyebrow: 'Decision first', title: 'Who should buy this unusual brewer?', html: `
          <p>The 9Barista Mk.2 makes the most sense when three conditions overlap: you drink straight espresso, you normally make one cup at a time, and you have a real reason to avoid a conventional machine. That reason may be a tiny kitchen, a camper, a boat, unreliable wall power or a desire to own a compact mechanical device with replaceable parts. If those conditions do not overlap, the same money buys broader capability elsewhere.</p>
        `,
      },
      {
        id: 'setup', eyebrow: 'First week', title: 'Set up the stove and safety routine before chasing flavor', html: `
          <p>Give cooling a physical home. A shallow bowl of cool water may be part of a repeat-shot routine if the official instructions allow the relevant parts to be cooled that way, but the point is not to race. The body contains boiling water and pressure. Remove it from the heat if the expected sequence does not occur, stay clear of any vent, and do not attempt to open it until it is fully depressurized and safe to touch. Tom’s Guide’s Mk.2 reviewer described damaging a single-use release element during an early mistake, which is one reviewer’s experience rather than a failure rate. It is still a useful warning to learn the safety system before improvising.</p>
          <p>Next, calibrate the stove with inexpensive medium-roast coffee. Fill within the official 110–120 ml range, use a consistent 17–20 g dose, distribute and tamp level, then place the brewer in the same position at the same power. Time from heat-on to the first visible coffee. If the process overruns the manual’s limit, remove heat and diagnose only after cooling. More fire is not the default cure for a basket ground too fine.</p>
        `,
      },
      {
        id: 'espresso', eyebrow: 'Cup performance', title: 'Consistency is the feature, control is the tradeoff', html: `
          <p>Independent coverage broadly agrees that the result is legitimate espresso. Tom’s Guide used the Mk.2 Pro for about a month and praised the coffee and repeatability. Lance Hedrick’s Mk.2 review is valuable because the mechanism, preparation and cup can be seen rather than accepted from a product page. James Hoffmann, Bon Appétit and The Drive evaluated the original generation, so their observations support the concept and workflow but cannot verify every Mk.2 material or safety revision. A one-year owner account likewise reports consistent use, while explicitly noting that small grind errors can choke the machine.</p>
        `,
      },
      {
        id: 'milk', eyebrow: 'No integrated system', title: 'Milk is N/A, but your drink plan still has to add up', html: `
          <p>This is why the absence affects the verdict even though N/A does not reduce the calculated score. A straight-espresso buyer should not see an arbitrary zero for a feature never promised. A daily cappuccino buyer should not use the healthy overall number as proof of equal fitness. The drink plan, not the average, settles that question.</p>`,
      },
      {
        id: 'workflow', eyebrow: 'Daily cadence', title: 'A satisfying first cup and a slow second one', html: `
          <p>For one drink, the work can feel coherent: grind during or before filling, tamp, heat, pour and rinse. There is no tank to top up for the week, no group to warm for half an hour and no drip tray. For the second drink, every strength becomes a constraint. The first hot dose assembly has to be cooled and made safe; spent coffee and remaining water have to be cleared; seals and threads need clean seating; the chamber is refilled and a new puck prepared. A two-year owner follow-up describes reliable twice-daily use but also places back-to-back brewing among the practical limits. Other owners say the rinse is under a minute once learned. Both can be true: the cleaning motions are brief, while the thermal reset still interrupts service.</p>
        `,
      },
      {
        id: 'build', eyebrow: 'Long ownership', title: 'Parts access is more persuasive than vague heirloom language', html: `
          <p>The stronger ownership evidence is the official parts catalog. Seals, thermal and safety components, baskets, handles, portafilter parts and cleaning products are listed directly. Compatibility must be read line by line. At least one official portafilter listing explicitly distinguishes Mk.1 from Mk.2 fit, so the brand name alone is not enough when ordering.</p>
        `,
      },
      {
        id: 'features', eyebrow: 'Mechanical design', title: 'Understanding what the twin boilers do, and do not do', html: `
          <p>The lower chamber turns stove heat into the pressure that an electric machine would obtain from a pump. A valve delays the brew phase until the system reaches its operating point. Heat exchange then brings the water delivered to the puck toward the published brew temperature instead of sending unrestricted boiling water through the coffee. The upper path ends in the basket and collector where the shot can be poured.</p>
        `,
      },
      {
        id: 'value', eyebrow: 'Buying decision', title: 'The complete budget includes the grinder and every missing function', html: `
          <p>Value is strongest for a person who would otherwise buy both a compact manual system and a travel solution. It is weakest for someone seduced by the mechanism but who makes two oat lattes every morning. In that household, a Bambino Plus or dual-boiler machine is not less serious. It is simply aligned to the job.</p>`,
      },
      {
        id: 'comparisons', eyebrow: 'Closest choices', title: '9Barista versus compact pump and manual machines', html: `
          <p>The fastest shortlist separates regulated operation from manual control. 9Barista fixes pressure and temperature mechanically. A Cafelat Robot or Flair 58 lets your hands shape pressure and makes the next dose without cooling a stove boiler. A Bambino Plus trades the all-metal mechanical object for wall-powered speed and milk capability. A Gaggia Classic-style machine asks for more warm-up and counter room but becomes a conventional espresso station.</p>
          ${comparisonTablesHtml('9Barista Mk.2', [
            { name: '9Barista Mk.2', href: '/espresso-machine/9barista-mk2/', quickDecision: 'Choose for one compact, stove-powered and mechanically regulated espresso.', priceClass: 'From $750 direct on check date', dimensions: 'About 7 in tall and 7.5 in across the handle in independent measurement; verify configured kit', heating: 'External stove, published 3–6 minute cold cycle', coffeeSetup: '53 mm basket, fixed brew conditions, roughly 40–45 g output', milkWorkflow: 'None; separate device required', bestFor: 'One straight espresso with minimal counter occupation' },
            { name: 'Breville Bambino Plus', href: '/espresso-machine/breville-bambino/', quickDecision: 'Choose for fast wall-powered espresso and automatic milk.', priceClass: 'Lower machine price in the US at last Coffeedant check', dimensions: 'Compact appliance plus separate grinder', heating: 'ThermoJet with very short claimed ready time', coffeeSetup: '54 mm, manual puck preparation, programmable volumes', milkWorkflow: 'Automatic or manual wand, sequential with brew', bestFor: 'Everyday lattes and easier shared use' },
            { name: 'Cafelat Robot', href: '/espresso-machine/cafelat-robot-barista/', quickDecision: 'Choose for direct pressure control and easier repeat dosing.', priceClass: 'Premium manual lever class', dimensions: 'Narrow lever body; kettle and grinder live beside it', heating: 'Kettle water, manual thermal management', coffeeSetup: 'Manual lever pressure and user-selected ratio', milkWorkflow: 'None; separate device required', bestFor: 'Hands-on straight espresso and pressure exploration' },
            { name: 'Flair 58', href: '/espresso-machine/flair-58/', quickDecision: 'Choose for a 58 mm manual platform and profiling.', priceClass: 'Premium manual lever class', dimensions: 'Taller lever frame plus kettle and grinder', heating: 'Electrical group preheat plus kettle on current electric version', coffeeSetup: '58 mm basket and manual pressure profile', milkWorkflow: 'None; separate device required', bestFor: 'Enthusiasts who want control more than packing density' },
          ], 'Dimensions and prices vary by version and territory. Published readiness never includes grinding, puck preparation, milk or cleanup. Confirm current product pages before purchase.')}
        `,
      },
      {
        id: 'recommendations', eyebrow: 'Four routes', title: 'Choose the station that matches the drink queue', html: `
          <p>Start with number of drinks, milk frequency and appetite for control. These four cards are decision routes, not a ranking of engineering prestige.</p>
          ${recommendationCardsHtml([
            { kicker: 'Best fit here', title: '9Barista Mk.2', text: 'For one straight espresso, a compatible stove and a buyer who values compact mechanical regulation.', href: '/espresso-machine/9barista-mk2/', linkLabel: 'Read the 9Barista decision', featured: true },
            { kicker: 'Milk convenience', title: 'Breville Bambino Plus', text: 'For quick lattes, automatic frothing and a conventional electric morning routine.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the Bambino Plus review' },
            { kicker: 'Manual pressure', title: 'Cafelat Robot', text: 'For repeatable manual lever shots without a stove pressure vessel or integrated milk.', href: '/espresso-machine/cafelat-robot-barista/', linkLabel: 'See the Cafelat Robot' },
            { kicker: '58 mm ecosystem', title: 'Flair 58', text: 'For a larger manual setup with preheating assistance and direct pressure profiling.', href: '/espresso-machine/flair-58/', linkLabel: 'See the Flair 58' },
          ])}
        `,
      },
      {
        id: 'faq', eyebrow: 'Quick reference', title: '9Barista Mk.2 FAQ', html: faqHtml([
          { question: 'Does the 9Barista Mk.2 make real espresso?', answer: 'The manufacturer specifies approximately 9 bar and 93°C through a 53 mm espresso basket, and multiple independent reviewers report espresso-style results. Coffeedant did not independently measure pressure, temperature or taste.' },
          { question: 'How long does one shot take?', answer: 'The current product page publishes about 3–6 minutes from cold and 25–30 seconds of visible extraction. Grinding, preparation, cooling and cleanup add time, and the stove changes the result.' },
          { question: 'What changes between Standard and Pro?', answer: 'The base brewer is the same. Pro adds a naked portafilter, IMS precision basket, stainless basket cap and aluminium handles; Standard uses a conventional portafilter, standard basket, silicone cap and wooden handles.' },
          { question: 'Why is Milk marked N/A?', answer: 'There is no milk system to test, so a numerical milk score would be fictional. N/A is excluded from the average, while the verdict and buying guidance still account for the cost and work of a separate milk device.' },
          { question: 'What is the biggest unknown?', answer: 'There is no population-level durability or failure-rate data for Mk.2. Parts access and a five-year eligible-purchase warranty are positive, but they do not prove a particular lifespan.' },
        ]),
      },
    ],
    sources: [
      { id: '9b-official-product', label: '9Barista Mk.2 official US product page', href: 'https://9barista.com/en-us/products/9barista-espresso-machine-mk2', note: 'Current variants, price, operating claims, materials, box contents and stove options; checked September 15, 2026.' },
      { id: '9b-how', label: '9Barista: How the Mk.2 works', href: 'https://9barista.com/pages/how-9barista-mk2-works', note: 'Manufacturer explanation of the twin-boiler pressure and temperature system.' },
      { id: '9b-manual', label: '9Barista Mk.2 getting-started and safety guidance', href: 'https://9barista.com/pages/getting-started-with-your-9barista-mk2', note: 'Official fill, preparation, heat, cooling and safety sequence.' },
      { id: '9b-warranty', label: '9Barista refund and warranty policy', href: 'https://9barista.com/policies/refund-policy', note: 'Five-year Mk.2 limited warranty, original-purchaser terms, consumables and exclusions.' },
      { id: '9b-parts', label: '9Barista official spare parts', href: 'https://9barista.com/collections/spare-parts', note: 'Current replacement-part catalog; exact Mk.1/Mk.2 compatibility must be checked.' },
      { id: '9b-toms', label: 'Tom’s Guide: 9Barista Espresso Machine Mk.2 review', href: 'https://www.tomsguide.com/home/coffee-makers/9barista-espresso-machine-mk-2-review', note: 'Independent Mk.2 Pro use over roughly one month, including workflow and an early safety-component incident.' },
      { id: '9b-lance', label: 'Lance Hedrick: 9Barista Mk.2 full review', href: 'https://www.youtube.com/watch?v=pGWnyUUJjHA', note: 'Independent Mk.2 technical and cup demonstration; selected video.' },
      { id: '9b-hoffmann', label: 'James Hoffmann: The 9Barista Espresso Machine review', href: 'https://www.youtube.com/watch?v=ZcZMGx15QBU', note: 'Independent original-generation demonstration; useful for the core system, not a source for Mk.2 revisions.' },
      { id: '9b-bonappetit', label: 'Bon Appétit: 9Barista espresso maker review', href: 'https://www.bonappetit.com/story/9barista-espresso-maker-review', note: 'Independent original-generation daily-use account; generation limitation retained.' },
      { id: '9b-drive', label: 'The Drive: 9Barista hands-on review', href: 'https://www.thedrive.com/guides-and-gear/9barista-espresso-maker-hands-on-review-turbocharge-your-coffee-routine', note: 'Independent hands-on and camping-stove context for the original-generation platform.' },
      { id: '9b-one-year', label: '9Barista Espresso Machine: one year later', href: 'https://xn--gckvb8fzb.com/9barista-espresso-machine-one-year-later/', note: 'Individual long-term owner account with weight, scale care and consistency observations; anecdotal.' },
      { id: '9b-two-year', label: 'Coffeetime: two-year follow-up with 9Barista', href: 'https://coffeetime.freeflarum.com/d/2449-two-year-followup-with-the-9barista', note: 'Forum owner follow-up covering twice-daily use, seal replacement and repeat-shot limitations.' },
      { id: '9b-reddit-pool', label: 'r/9Barista owner discussion pool', href: 'https://www.reddit.com/r/9Barista/comments/1941qb1/owners_thoughts/', note: 'Dedicated community pool with multi-owner use and maintenance reports; self-selected and anecdotal.' },
      { id: '9b-robot-thread', label: 'r/espresso: Robot versus 9Barista discussion', href: 'https://www.reddit.com/r/espresso/comments/u7w3b1/robot_vs_9barista/', note: 'Comparison discussion from a broader espresso community; opinions vary and are not controlled tests.' },
      { id: '9b-trustpilot', label: 'Trustpilot: 9Barista customer review pool', href: 'https://uk.trustpilot.com/review/www.9barista.com', note: 'Separate customer-service and purchase-experience pool; not a reliability denominator.' },
    ],
    finalTitle: 'Final verdict: buy the single-cup rhythm, not just the mechanism',
    finalVerdict: [
      'The 9Barista Mk.2 solves a difficult brief with uncommon elegance: genuine high-pressure espresso conditions from a compact, non-electric mechanism. Current materials, direct parts and the eligible five-year warranty make the premium easier to understand. Once the grind is right, fixed operating conditions can turn the daily shot into a reassuring ritual rather than a control-panel exercise.',
      'Its limitations are equally fundamental. One approximately 40–45 g extraction, a hot reset, no milk and no brew profiling define every day of ownership. Milk is N/A in the score because the hardware does not exist, but the verdict still treats its absence as decisive. Buy it for one straight espresso where space or power genuinely matters. For a shared latte routine, faster repeat drinks or experimental light-roast control, choose the alternative designed for that job.',
    ],
  },
  video: {
    id: 'pGWnyUUJjHA',
    title: 'Is THIS the Best Espresso Machine?: 9Barista Mk2 Full Review',
    creator: 'Lance Hedrick',
    published: '2026-02-22',
    note: 'A detailed independent Mk.2 demonstration. Any tasting or measurement shown belongs to the creator; Coffeedant did not reproduce the test.',
  },
});

export const gaggiaBreraReview = buildResearchReview({
  slug: '/espresso-machine/gaggia-brera-ri9305/',
  productId: 'CD-EM-000130',
  brand: 'Gaggia',
  model: 'Brera RI9305',
  sku: 'RI9305 family / SUP 037RG',
  category: 'Super-automatic espresso machine',
  brandPath: '/gaggia/',
  title: 'Gaggia Brera RI9305 review',
  description: 'A research-led Gaggia Brera review covering the exact RI9305 family, $499 US retail status, ceramic grinder, Panarello milk, removable brew group and ownership work.',
  verdictLabel: 'Old-school bean-to-cup at an accessible price',
  verdict: 'I would choose the Brera for a small household that wants espresso or long coffee at one button, does not mind steaming milk by hand and will rinse a removable brew group every week. The design is mature rather than modern: five grinder steps, three strengths, two saved coffee volumes and a small display. At $499 in the US listing checked for this review, that simplicity is the appeal, but current Magnifica Evo and Philips alternatives deserve a direct workflow comparison.',
  assessment: 'A compact, maintainable entry super-automatic whose manual milk and limited adjustment must be intentional choices.',
  image: 'images/products/gaggia-brera.png',
  imageAlt: 'Gaggia Brera RI9305 super-automatic espresso machine',
  published: '2025-11-09',
  updated: '2026-09-15',
  authorNote: 'I approached the long-running Brera as an ownership question, not a nostalgia exercise. I checked the current global product page, North American manuals and parts, a live US listing, independent reviews and owner discussions. This is a research-led review; I have not physically tested this RI9305 machine.',
  basisDisclosure: 'Ratings combine current documentation, dated retail status, independent hands-on reviews and attributed owner reports. Coffeedant did not brew, time, taste or reliability-test a Brera, and no anecdotal issue is presented as a population failure rate.',
  price: {
    label: 'US retailer price', msrp: '$499.00', numeric: '499.00', currency: 'USD',
    typical: 'Black US listing with one-year parts-and-labor coverage from the named retailer',
    checked: 'September 15, 2026',
  },
  links: [
    { label: 'Check Whole Latte Love price', href: 'https://www.wholelattelove.com/products/gaggia-brera-espresso-machine-in-black', note: 'US retailer listing; confirm exact model label, stock and seller warranty', primary: true },
    { label: 'Check Amazon price', href: 'https://amzn.to/3XJ8nhf', note: 'Affiliate link; verify voltage, suffix, seller and warranty before ordering', affiliate: true },
  ],
  facts: [
    { label: 'Exact family', value: 'Gaggia Brera RI9305; service designation SUP 037RG' },
    { label: 'US electrical listing', value: '120 V / 60 Hz; current official global table lists 1250 W' },
    { label: 'Grinder', value: 'Ceramic flat burrs, 5 grind settings' },
    { label: 'Coffee choices', value: 'Espresso and long coffee with programmable volumes; 3 strength levels' },
    { label: 'Milk', value: 'Manual Panarello steam wand; also dispenses hot water' },
    { label: 'Water tank', value: '1.2 L / about 40.6 fl oz, removable' },
    { label: 'Bean hopper', value: '250 g / about 8.8 oz' },
    { label: 'Waste capacity', value: 'About 8 pucks' },
    { label: 'Official dimensions', value: '25.6 W × 31.5 H × 44.7 D cm' },
    { label: 'Official weight', value: '8.5 kg' },
  ],
  quickAnswers: [
    { question: 'Which Brera is covered?', answer: 'The RI9305 family, identified in service literature as SUP 037RG. Suffix, finish, voltage, plug and warranty differ by region; the checked US retail page was the black 120 V machine.' },
    { question: 'Is it still sold new?', answer: 'Yes in the checked US specialty-retailer listing at $499 on September 15, 2026, and Gaggia still maintains a current global product page and North American documentation. That does not mean every regional suffix remains available.' },
    { question: 'Does milk happen automatically?', answer: 'No. The machine grinds and brews coffee automatically, but you switch to steam and texture milk with the Panarello wand, then clean it yourself.' },
    { question: 'Can I remove the brew group?', answer: 'Yes. The side-access brew group is designed for regular rinsing and periodic lubrication according to the manual.' },
    { question: 'Can it use decaf?', answer: 'Yes. A bypass doser accepts one measured portion of pre-ground coffee. It is not a second bean hopper and should be used exactly as the manual describes.' },
    { question: 'Is 15-bar pump pressure the cup pressure?', answer: 'No. The pump rating is not a claim that coffee should extract at 15 bar. The automatic brew group regulates the practical coffee process internally, with limited user control.' },
  ],
  bestFor: [
    'A one- or two-person home wanting simple bean-to-cup black coffee in a narrow body',
    'Someone willing to rinse a removable brew group and steam milk manually',
    'A buyer who values parts diagrams and a mature service ecosystem over an app or color screen',
  ],
  avoidIf: [
    'You want one-touch cappuccino or a detachable milk carafe',
    'You expect many grind, temperature or drink-profile choices',
    'A travel mug taller than the approximately 4.5-inch published maximum must fit under the spout',
  ],
  pros: [
    'Compact width with water, grounds and brew-group access designed around a small kitchen',
    'Removable brew group, official service material and current parts diagrams',
    'Ceramic grinder, bypass doser and saved espresso or long-coffee volumes',
    'Manual wand gives more milk involvement than a basic automatic frother',
  ],
  cons: [
    'Only five grinder steps and three coffee-strength choices',
    'Milk requires a separate manual sequence after brewing',
    'Small tank, tray and eight-puck waste box increase attention in a busy household',
    'Mature interface and plastic-heavy body feel dated beside newer rivals',
  ],
  dimensions: [
    {
      id: 'espresso', score: 6.7, reason: 'The ceramic grinder, preinfusion cycle and three dose strengths can produce a credible compact automatic espresso, but five grind steps and no user temperature menu limit correction.',
      buyerMeaning: 'Best with forgiving medium or medium-dark beans and modest drink sizes; not a route to manual-machine clarity or light-roast experimentation.',
      evidenceStatus: 'Documented system with independent cup assessments; no Coffeedant tasting',
      sourceIds: ['brera-official', 'brera-manual', 'brera-techgearlab', 'brera-coffeeness', 'brera-coffeekev'], deepDiveId: 'espresso', title: 'Espresso: tune within a small adjustment window',
      intro: ['Three aroma strengths, five grinder positions and two saved coffee volumes give the Brera useful but finite control. The practical goal is a short, balanced automatic espresso rather than stretching one puck into a large cup.'],
      evidence: [
        { signal: 'Ceramic grinder', evidence: 'Gaggia documents a 250 g hopper, ceramic burrs and five settings adjusted while the grinder is operating.', decision: 'Use small changes and allow several drinks for retained coffee and adaptive dosing to settle.' },
        { signal: 'Three strengths', evidence: 'The bean button selects three dose levels; the bypass handles one pre-ground portion.', decision: 'Find the shortest drink that tastes complete before using more water to make it stronger.' },
        { signal: 'Independent results differ', evidence: 'TechGearLab called espresso good but not great; Coffeeness was more enthusiastic about entry-level value.', decision: 'Expect credible convenience coffee, not a guaranteed match for a well-dialed semi-automatic.' },
      ],
      diagnosis: [
        { signal: 'Coffee runs fast and tastes thin', guidance: 'Move one grinder step finer only while grinding, then judge after several cycles.' },
        { signal: 'Coffee tastes harsh or stalls', guidance: 'Shorten the saved volume or move coarser; clean the brew group before assuming a grinder fault.' },
        { signal: 'A large cup tastes weak', guidance: 'Use a separate hot-water addition after a shorter coffee instead of pushing excessive water through one puck.' },
      ],
    },
    {
      id: 'milk', score: 6.0, reason: 'The Panarello wand is approachable and can make serviceable cappuccino foam, but milk is manual, serial and generally airier than skilled commercial-wand texture.',
      buyerMeaning: 'Reasonable for an occasional cappuccino; weak for several one-touch milk drinks or a household expecting push-button completion.',
      evidenceStatus: 'Official operation with differing independent texture judgments',
      sourceIds: ['brera-official', 'brera-manual', 'brera-techgearlab', 'brera-coffeeness', 'brera-wll-video'], deepDiveId: 'milk', title: 'Milk: the machine stops being automatic at the wand',
      intro: ['After coffee, select steam, wait for readiness, purge condensation, texture milk and wipe the wand. The sleeve helps introduce air but gives less direct control than a conventional single-hole commercial-style tip.'],
      evidence: [
        { signal: 'Panarello system', evidence: 'The sleeve draws air into milk and the same circuit provides hot water.', decision: 'Beginners can make foam, while fine latte-art texture takes more practice and may remain limited.' },
        { signal: 'Single heating path', evidence: 'Coffee and steam are sequential tasks.', decision: 'A two-latte morning includes brew, steam and return-to-coffee transitions rather than one-touch parallel work.' },
        { signal: 'Reviewer disagreement', evidence: 'TechGearLab described airy foam; positive reviews emphasize ease and acceptable milk drinks.', decision: 'Buy for cappuccino convenience, not because the evidence proves glossy café microfoam.' },
      ],
      diagnosis: [
        { signal: 'Large bubbles dominate', guidance: 'Purge first, start with cold milk and keep the air intake consistent rather than repeatedly lifting the tip.' },
        { signal: 'Next coffee is too hot or delayed', guidance: 'Follow the manual’s return-to-coffee cooling sequence after steaming.' },
        { signal: 'Steam weakens', guidance: 'Clean the sleeve and opening after cooling, then address scale through the prescribed program.' },
      ],
    },
    {
      id: 'workflow', score: 7.6, reason: 'One-button black coffee, front-area service access and saved volumes are convenient, while manual milk and small capacities create frequent interventions.',
      buyerMeaning: 'Fast for one black coffee, less automatic for a milk household or a group.',
      evidenceStatus: 'Documented workflow corroborated by tests and owner use',
      sourceIds: ['brera-manual', 'brera-wll', 'brera-techgearlab', 'brera-coffee-forum', 'brera-reddit'], deepDiveId: 'workflow', title: 'Workflow: easy coffee, hands-on ownership',
      intro: ['The Brera wakes, rinses, grinds, doses, preinfuses and brews after a compact button sequence. Rinse water, an eight-puck box and a 1.2 L tank mean the owner still has regular chores.'],
      evidence: [
        { signal: 'Two saved volumes', evidence: 'Espresso and long-coffee buttons can memorize delivered volume.', decision: 'Program by taste and cup, then keep the larger recipe from becoming an over-extracted puck.' },
        { signal: 'Access pattern', evidence: 'The tank and grounds area are reached from the front; the brew group removes through the side service door.', decision: 'Leave side clearance for weekly group removal and front clearance for trays.' },
        { signal: 'Small capacities', evidence: '1.2 L water, 250 g beans and about eight pucks suit light domestic use.', decision: 'A larger household will empty and fill more often than the small footprint implies.' },
      ],
      diagnosis: [
        { signal: 'The machine asks for water unexpectedly', guidance: 'Account for startup and shutdown rinses, not only drink volume.' },
        { signal: 'The drip tray fills quickly', guidance: 'Empty it when handling the grounds box rather than waiting for the float.' },
        { signal: 'The second milk drink drags', guidance: 'Stage cups and milk, but accept that brew and steam cannot happen together.' },
      ],
    },
    {
      id: 'build', score: 6.8, reason: 'The plastic-heavy compact enclosure is ordinary, but a removable brew group, deep official service library and illustrated parts support improve the ownership case.',
      buyerMeaning: 'Not a luxury object, yet more owner-inspectable than sealed-brew-group competitors.',
      evidenceStatus: 'Materials and service access documented; reliability rate unknown',
      sourceIds: ['brera-official', 'brera-support', 'brera-parts', 'brera-coffeeness', 'brera-coffee-forum'], deepDiveId: 'build', title: 'Build: judge access before appearance',
      intro: ['Gaggia lists a black ABS body, stainless-steel front and ABS tray with stainless trim. Independent inspection has questioned how much of the front treatment feels metallic, so the safe conclusion is a mostly plastic appliance with selected steel pieces.'],
      evidence: [
        { signal: 'Removable group', evidence: 'The manual instructs regular removal, rinsing and periodic food-safe lubrication.', decision: 'You can see and clean the central coffee mechanism, but must reseat it correctly.' },
        { signal: 'Service documentation', evidence: 'Gaggia North America hosts full, service, descale, parts, electrical, alert and troubleshooting documents.', decision: 'A technician or confident owner has unusually good model-specific reference material.' },
        { signal: 'Owner anecdotes', evidence: 'Long-use stories include trouble-free machines and repairs; no controlled installed-base data exist.', decision: 'Do not turn individual failures or successes into a reliability percentage.' },
      ],
      diagnosis: [
        { signal: 'Brew group will not insert', guidance: 'Return the mechanism and machine to their manual-defined neutral positions rather than forcing plastic guides.' },
        { signal: 'Error lights appear', guidance: 'Use the exact North American display-alert and troubleshooting document for the pattern.' },
        { signal: 'Buying used', guidance: 'Inspect group movement, leaks, grinder sound, complete rinse and steam transitions; budget for seals and service.' },
      ],
    },
    {
      id: 'features', score: 6.5, reason: 'Bypass dosing, adjustable grind, three strengths, two memories and hot water cover basics, but there are no profiles, app, temperature selection or automatic milk recipes.',
      buyerMeaning: 'Enough control for two familiar household coffees, deliberately sparse beside current screen-led automatics.',
      evidenceStatus: 'Current official feature list',
      sourceIds: ['brera-official', 'brera-manual', 'brera-wll'], deepDiveId: 'features', title: 'Features: a short list that is easy to learn',
      intro: ['The display communicates status rather than presenting a recipe gallery. Most useful settings live behind physical buttons: aroma strength, espresso volume, long-coffee volume, steam and hot water.'],
      evidence: [
        { signal: 'Optidose', evidence: 'Three bean-strength choices change the coffee quantity prepared by the brew group.', decision: 'Useful for two household preferences, without named profiles.' },
        { signal: 'Bypass chute', evidence: 'One manual-specified scoop of pre-ground coffee can bypass the hopper.', decision: 'Good for occasional decaf, not for storing a second bean.' },
        { signal: 'No temperature menu', evidence: 'The current feature table does not expose user brew-temperature selection.', decision: 'Bean choice, strength, volume and grind carry the tuning burden.' },
      ],
    },
    {
      id: 'value', score: 7.3, reason: 'At the checked $499 US price, the Brera delivers grinder-to-cup coffee and unusually rich service documentation, though newer rivals may offer automatic milk or more adjustment near the same sale range.',
      buyerMeaning: 'Good value for simple black coffee plus manual milk, especially if removable-group care appeals.',
      evidenceStatus: 'Live US price and warranty checked September 15, 2026; market prices move',
      sourceIds: ['brera-wll', 'brera-official', 'brera-support', 'brera-coffeeness', 'brera-coffeekev-compare'], deepDiveId: 'value', title: 'Value: $499 is attractive only if the old-school workflow fits',
      intro: ['Whole Latte Love listed the black Brera at $499 with add-to-cart controls and one-year parts-and-labor coverage on the check date. The exact RI suffix was not printed in the visible title, so confirm voltage and model label before purchase.'],
      evidence: [
        { signal: 'Current retail status', evidence: 'The checked US specialty listing showed $499 and one-year retailer coverage.', decision: 'Use that as a dated snapshot, not a universal MSRP or promise of stock elsewhere.' },
        { signal: 'Included grinder', evidence: 'The machine covers grinding, internal dosing and brewing.', decision: 'Its complete black-coffee station costs less than a comparable separate new grinder and semi-automatic for many beginners.' },
        { signal: 'Alternative features', evidence: 'Magnifica Evo and Philips 3200 families can add newer controls or automatic-milk variants.', decision: 'Compare the exact suffix and milk system, not family names or sale badges.' },
      ],
    },
  ],
  alternatives: [
    { name: 'De’Longhi Magnifica Evo', reason: 'Choose it for a newer control layout and a broader range of exact milk configurations.', href: '/espresso-machine/delonghi-magnifica-evo/' },
    { name: 'Philips 3200 LatteGo', reason: 'Choose it when detachable automatic milk is more important than a manual wand.', href: '/espresso-machine/philips-3200-lattego/' },
    { name: 'Gaggia Anima', reason: 'Choose it for a taller-cup format and a step up within Gaggia’s automatic family.', href: '/espresso-machine/gaggia-anima/' },
    { name: 'Gaggia Magenta Prestige', reason: 'Choose it for one-touch milk recipes and a more modern drink interface.', href: '/espresso-machine/gaggia-magenta-prestige-ri8702/' },
  ],
  article: {
    methodology: 'I matched the RI9305 name to Gaggia’s current global product and North American SUP 037RG support set, checked a live 120 V US retailer page on September 15, 2026, and separated manufacturer claims from independent tests and three owner pools. Regional suffixes, electrical ratings and warranty terms are not blended. Coffeedant did not test coffee, milk, speed or durability.',
    sections: [
      {
        id: 'orientation', eyebrow: 'Decision first', title: 'A mature design that still has a clear buyer', html: `
          <p>The Gaggia Brera is for someone who wants the machine to grind, dose and brew but does not need it to finish a cappuccino. Press an espresso or long-coffee button and the ceramic grinder and removable brew group handle the coffee. Turn to steam and the owner takes over with a Panarello wand. That division is the entire buying decision.</p>
          <p>The exact identity requires care because Brera has lived through many years and regional suffixes. This review covers the RI9305 family, referenced in North American service documentation as SUP 037RG. Gaggia’s current global page lists both 230 V and 120 V electrical data, while finish codes and retail names vary. The US listing checked here was a black machine at Whole Latte Love for $499 with a one-year parts-and-labor statement. Its visible title did not spell out the full RI suffix, so confirm the rating plate and seller warranty before treating an imported or marketplace Brera as equivalent.</p>
          <p>My verdict is favorable at $499 when the desired result is convenient espresso or small black coffee, plus occasional manually textured milk. It becomes much weaker if you want modern personalization or automatic cappuccinos. In that case, compare the exact Magnifica Evo, Philips LatteGo or Gaggia Magenta configuration and count cleaning work as carefully as drink buttons.</p>
          <p>Also ask who will perform the weekly care. The removable group is an advantage only when someone actually rinses, dries and reinstalls it. In a shared kitchen, assign that job and the descale checks before purchase. Brera makes the coffee mechanism easier to inspect, but visibility helps only when it changes behavior.</p>`,
      },
      {
        id: 'setup', eyebrow: 'First week', title: 'Set water, grinder and maintenance habits before saving drinks', html: `
          <p>Begin at the rating plate. Verify 120 V for the checked US context, the exact RI suffix, intact water tank, drip tray, grounds box, brew group, Panarello pieces, scoop and lubricant. Gaggia’s global page names a grease tube and measuring spoon as included accessories. Used and retailer bundles may differ, so the manual’s parts diagram is the better checklist.</p>
          <p>Program espresso volume by taste, not by cup size alone. Start short, use the middle strength and watch the flow. If it is fast and watery, move finer. If it labors and tastes harsh, move coarser. For an americano-style drink, preserve a shorter coffee and add hot water rather than forcing a large volume through one internal puck. These are editorial starting points, not Coffeedant test recipes.</p>
          <p>Learn the brew-group routine in week one. Switch off through the normal control so the mechanism parks correctly, open the service door, remove the group as the manual shows, rinse with lukewarm water and air dry before reinserting. Do not put detergent on components where the manual prohibits it. Gaggia calls for regular rinsing and periodic food-safe lubrication, with the manual giving the model-specific intervals and points.</p>
          <p>Finally, steam one small pitcher and practice the transition back to coffee. Purge condensation, keep the sleeve clean, wipe immediately and follow the cool-down or circuit-fill prompts before another espresso. This sequence is the part a “fully automatic” label does not convey.</p>`,
      },
      {
        id: 'espresso', eyebrow: 'Coffee quality', title: 'Competent automatic espresso within five grinder steps', html: `
          <p>Five grinder positions are enough to rescue a clearly fast or slow recipe, not enough to make tiny corrections across many light coffees. The adjustment must be made while the burrs turn so the mechanism is not forced against trapped beans. Keep a new setting for several drinks before deciding. Changing beans, strength, volume and grind simultaneously makes the small control set feel more confusing than it is.</p>
          <p>Independent assessments do not agree on how high the cup ceiling sits. TechGearLab’s purchased test described espresso as good rather than exceptional and scored the older machine behind stronger performers. Coffeeness ordered a Brera and regarded it as a particularly good entry automatic, while also criticizing the limited grinder and plastic-heavy construction. CoffeeKev’s comparison with the De’Longhi Magnifica favors different strengths on grinder range, interface and coffee character. The disagreement is useful: the Brera can satisfy a convenience buyer without matching a carefully dialed manual 58 mm setup.</p>
          <p>Medium and medium-dark blends are the safest fit because their solubility works within the fixed temperature logic and narrow grinder range. Start with the middle strength and a short espresso. Increase strength if body is missing after grind is sensible. Do not make a “stronger” drink by extending water indefinitely; that extracts more bitterness from the same puck.</p>
        `,
      },
      {
        id: 'milk', eyebrow: 'Manual finishing', title: 'Panarello foam is approachable, not one-touch', html: `
          <p>Selecting steam asks the single heating system to move from coffee conditions to steam. Once ready, purge water into an empty vessel, place the Panarello in cold milk and texture. The sleeve entrains air, helping a beginner create cappuccino foam without precisely holding a small steam hole at the liquid line. It also tends toward more aeration than a skilled conventional wand, which is why latte-art expectations should be modest.</p>
          <p>For two drinks, brew both coffees first if their wait will be brief, then steam a pitcher sized for both. That reduces heat-mode switching but means the first espresso sits. Alternatively finish each drink one at a time and accept the second person’s wait. If that tradeoff appears every morning, an automatic LatteGo or LatteCrema model is not merely more feature-rich; it is a better workflow.</p>`,
      },
      {
        id: 'workflow', eyebrow: 'Daily use', title: 'The second drink reveals every capacity and heat transition', html: `
          <p>One black coffee is the Brera at its best. Let the startup rinse finish, place a cup under the adjustable spout, choose strength and press the saved drink. The machine grinds and brews, then the puck drops automatically. After programming, there is little daily technique beyond keeping supplies and service parts ready.</p>
          <p>Capacity defines attention. An eight-puck box may fill after a few two-cycle mornings. Startup and shutdown rinses consume water and occupy the compact tray. The 1.2 L tank and 250 g hopper suit one or two people, but a group will service the machine frequently. Empty the grounds and tray together while the machine is on if the manual requires that state for its counter to reset; otherwise it may continue reporting a full bin.</p>
          <p>Owners report both easy long use and the usual automatic-machine friction around warning lights, stuck groups, grinder blockage and scale. A Coffee Forums contributor reported a year of heavy daily shots with the unit running well. A Reddit buyer reported a very used example that cleaned up and worked for two years. Those are encouraging stories, not probabilities. Use them to understand tasks, then rely on the exact service guide when a light pattern appears.</p>`,
      },
      {
        id: 'build', eyebrow: 'Ownership', title: 'Removable coffee mechanics are the Brera’s durable advantage', html: `
          <p>The brew group is the strongest ownership feature. Weekly rinsing removes loose grounds and oils before they harden, and periodic lubrication keeps sliding points moving. The official North American hub goes beyond a consumer manual: it links a service manual, descale guide, machine and group parts diagrams, electrical diagram, troubleshooting, performance test and display-alert guide. Whole Latte Love also hosts a shoppable exploded parts view and service kits.</p>
          <p>Water is the largest controllable risk. Set hardness honestly, descale when prompted with the approved method and never treat a filter as permanent. The manual separates brew-group rinsing, oil cleaning and mineral removal because they solve different contamination. More detergent is not a substitute for the correct process.</p>
          <p>For a used Brera, price evidence differently from new. The checked new unit carried a retailer one-year parts-and-labor statement. A secondhand machine may have no coverage and an unknown water history. Demand a cold startup, complete rinse, coffee cycle, steam transition and leak check. A bargain that immediately needs grinder or boiler work may cost more than current new stock.</p>`,
      },
      {
        id: 'features', eyebrow: 'Controls', title: 'Everything important fits on a small control panel', html: `
          <p>The Brera has a small status display and physical controls rather than a scrolling drink library. Three bean icons represent aroma strength. Espresso and long-coffee keys store volume. A selector covers steam and hot water, while warning symbols report missing water, full grounds, service access and maintenance needs.</p>
          <p>This simplicity reduces daily navigation but limits personalization. There are no named users, saved milk proportions, adjustable brew-temperature menu, Wi-Fi connection or remotely scheduled coffee. The five-position grinder and three strengths are the flavor controls, joined by coffee volume and bean selection.</p>
        `,
      },
      {
        id: 'value', eyebrow: 'Price and alternatives', title: 'Compare exact milk systems, not family names', html: `
          <p>The $499 US retailer snapshot makes the Brera one of the less expensive new specialist-store super-automatics. That price included the integrated grinder and bean-to-cup coffee path, with one-year parts-and-labor coverage stated by the retailer. Stock, promotions and the exact warranty can change after the September 15, 2026 check.</p>
          <p>Brera’s value rests on a balanced package: narrow body, familiar coffee buttons, decaf bypass and removable group. It falls when the owner wants light-roast tuning, tall travel cups or daily one-touch milk. Those are not minor missing conveniences; each changes the way every drink happens.</p>
          ${comparisonTablesHtml('Gaggia Brera RI9305', [
            { name: 'Gaggia Brera RI9305', href: '/espresso-machine/gaggia-brera-ri9305/', quickDecision: 'Choose for compact black coffee and manual milk with a removable group.', priceClass: '$499 checked US listing', dimensions: '25.6 W × 31.5 H × 44.7 D cm official', heating: 'Single heating path; coffee and steam in sequence', coffeeSetup: '5 grind steps, 3 strengths, 2 saved volumes', milkWorkflow: 'Manual Panarello', bestFor: 'One or two simple drinkers' },
            { name: 'De’Longhi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Choose the exact version for newer controls or automatic LatteCrema.', priceClass: 'Entry-to-mid automatic class; promotions vary', dimensions: 'Exact ECAM version required', heating: 'Thermoblock platform, configuration dependent', coffeeSetup: 'More recipe-led interface on many variants', milkWorkflow: 'Manual wand or LatteCrema by suffix', bestFor: 'Buyers wanting a newer daily interface' },
            { name: 'Philips 3200 LatteGo', href: '/espresso-machine/philips-3200-lattego/', quickDecision: 'Choose for simple detachable automatic milk.', priceClass: 'Often above Brera list, sale-dependent', dimensions: 'Wider body with top and front access needs', heating: 'Automatic sequential drink platform', coffeeSetup: 'Touch recipes with AquaClean ecosystem', milkWorkflow: 'Two-piece LatteGo carafe', bestFor: 'Milk drinks with minimal tube cleaning' },
            { name: 'Gaggia Magenta Prestige', href: '/espresso-machine/gaggia-magenta-prestige-ri8702/', quickDecision: 'Choose for one-touch drinks within Gaggia’s service family.', priceClass: 'Higher midrange automatic', dimensions: 'Larger, newer control format', heating: 'Automatic drink sequencing', coffeeSetup: 'Broader recipe menu and display', milkWorkflow: 'Integrated milk carafe', bestFor: 'Households prioritizing one-touch cappuccino' },
          ], 'Prices are dated positions, not synchronized offers. Model suffix determines voltage, finish, milk hardware, bundle and warranty. Verify the exact listing before comparing totals.')}
        `,
      },
      {
        id: 'recommendations', eyebrow: 'Four routes', title: 'Pick by milk labor and control depth', html: `
          ${recommendationCardsHtml([
            { kicker: 'Best simple manual-milk value', title: 'Gaggia Brera', text: 'For one-button coffee, a removable brew group and hands-on Panarello steaming.', href: '/espresso-machine/gaggia-brera-ri9305/', linkLabel: 'Review the Brera decision', featured: true },
            { kicker: 'Newer interface', title: 'De’Longhi Magnifica Evo', text: 'For a more recipe-led panel; choose the exact manual or automatic-milk suffix.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the Magnifica Evo review' },
            { kicker: 'Easy carafe cleaning', title: 'Philips 3200 LatteGo', text: 'For automatic milk without internal milk tubing and a broader one-touch menu.', href: '/espresso-machine/philips-3200-lattego/', linkLabel: 'Read the Philips 3200 review' },
            { kicker: 'Gaggia one-touch step-up', title: 'Gaggia Magenta Prestige', text: 'For a modern display and automatic cappuccino within the Gaggia ecosystem.', href: '/espresso-machine/gaggia-magenta-prestige-ri8702/', linkLabel: 'See the Magenta Prestige' },
          ])}
        `,
      },
      {
        id: 'faq', eyebrow: 'Quick reference', title: 'Gaggia Brera RI9305 FAQ', html: faqHtml([
          { question: 'Is the Gaggia Brera fully automatic?', answer: 'Coffee is automatic from bean to cup. Milk is not: you switch to steam, texture with the Panarello, clean it and return the machine to coffee readiness.' },
          { question: 'How often should I clean the brew group?', answer: 'Follow the exact manual, which calls for regular rinsing and periodic lubrication. A practical habit is a weekly group rinse, with lubrication at the documented interval rather than whenever it feels stiff.' },
          { question: 'Can I put oily beans in the hopper?', answer: 'Very oily beans can stick and complicate compact automatic grinders. Start with a dry medium roast and follow Gaggia’s bean and grinder guidance.' },
          { question: 'Does it make two coffees at once?', answer: 'It can run a two-cup coffee sequence through the dual spout. It does not make two milk drinks automatically or brew and steam at the same time.' },
          { question: 'Is RI9305/11 the same everywhere?', answer: 'RI9305 is a family. Suffixes identify regional or finish variants, and voltage, plug, accessories and coverage can differ. Confirm the rating plate and live seller listing.' },
          { question: 'What warranty did the checked US listing include?', answer: 'Whole Latte Love stated one year of parts and labor on September 15, 2026. Other sellers, used units and imports can have different or no coverage.' },
          { question: 'What is the main ownership unknown?', answer: 'No credible installed-base data provides a defect or lifespan rate. Official service access is strong, while individual positive and negative reports remain anecdotes.' },
        ]),
      },
    ],
    sources: [
      { id: 'brera-official', label: 'Gaggia Brera official global product page', href: 'https://www.gaggia.com/automatic-machines/brera/', note: 'Current feature, material, capacity, dimension, accessory and electrical table.' },
      { id: 'brera-manual', label: 'Gaggia Brera official multilingual manual', href: 'https://www.gaggia.com/app/uploads/2023/07/4219-465-04381-GAG.-MAN.-BRERA-IT-EN-DE-FR-Rev-00.pdf', note: 'Operating, safety, grinder, milk, cleaning and maintenance instructions.' },
      { id: 'brera-support', label: 'Gaggia North America Brera manuals hub', href: 'https://www.gaggia-na.com/pages/gaggia-brera-manuals', note: 'Full and service manuals, descale guide, diagrams, troubleshooting, performance test and alert guide.' },
      { id: 'brera-parts', label: 'Gaggia Brera parts diagram', href: 'https://www.wholelattelove.com/products/gaggia-brera-part-diagram-er0286', note: 'Illustrated retailer-hosted parts route; part fit and professional repair needs must be verified.' },
      { id: 'brera-wll', label: 'Whole Latte Love: Gaggia Brera black product listing', href: 'https://www.wholelattelove.com/products/gaggia-brera-espresso-machine-in-black', note: '$499, add-to-cart state and one-year parts-and-labor statement checked September 15, 2026.' },
      { id: 'brera-techgearlab', label: 'TechGearLab: Gaggia Brera tested review', href: 'https://www.techgearlab.com/reviews/kitchen/espresso-machine/gaggia-brera', note: 'Independent purchased-machine test covering espresso, milk, usability and cleaning; older review context retained.' },
      { id: 'brera-coffeeness', label: 'Coffeeness: Gaggia Brera review', href: 'https://www.coffeeness.de/en/gaggia-brera-review/', note: 'Independent ordered-machine review, updated 2025, with grinder, interface, materials and comparison observations.' },
      { id: 'brera-coffeekev', label: 'CoffeeKev: Gaggia Brera review', href: 'https://coffeeblog.co.uk/gaggia-brera-review/', note: 'Independent long-form use and buying context for the UK Brera; regional details kept separate.' },
      { id: 'brera-coffeekev-compare', label: 'CoffeeKev: Gaggia Brera versus De’Longhi Magnifica', href: 'https://coffeeblog.co.uk/gaggia-brera-vs-delonghi-magnifica/', note: 'Direct hands-on comparison of grinder, controls, milk and ownership tradeoffs.' },
      { id: 'brera-voltage', label: 'Voltage Coffee: Gaggia Brera review', href: 'https://voltagecoffee.com/gaggia-brera-review/', note: 'Independent overview of compact use, programming and removable components; older market context.' },
      { id: 'brera-wll-video', label: 'Whole Latte Love: Gaggia Brera unboxing, startup and first use', href: 'https://www.youtube.com/watch?v=dUACiKlQ2OU', note: 'Exact-machine setup, coffee and milk livestream from a specialist retailer; selected video.' },
      { id: 'brera-coffee-forum', label: 'Coffee Forums: Brera owner review thread', href: 'https://www.coffeeforums.com/threads/gaggia-brera-review.11970/', note: 'Independent community owner pool including a year of heavy use; self-selected reports.' },
      { id: 'brera-reddit', label: 'r/espresso: used Brera owner discussion', href: 'https://www.reddit.com/r/espresso/comments/yjtoao/used_gaggia_brera_199_worth_it/', note: 'Broader espresso-community pool with used ownership and milk-workflow reports; anecdotal.' },
      { id: 'brera-wll-owner-pool', label: 'Whole Latte Love Brera owner reviews and questions', href: 'https://www.wholelattelove.com/products/gaggia-brera-espresso-machine-in-black#judgeme_product_reviews', note: 'Verified-purchase and retailer Q&A pool where available; commercial platform and self-selection noted.' },
    ],
    finalTitle: 'Final verdict: simple coffee and visible maintenance at a fair price',
    finalVerdict: [
      'The Brera remains coherent because it does not pretend to be a touchscreen café. It grinds, doses and saves two black-coffee volumes, provides a decaf bypass, and lets the owner remove and rinse the brew group. Gaggia’s unusually deep North American document set makes the long-running design easier to understand and service.',
      'Buy it at the checked $499 level when one-button espresso or small coffee is the daily job and manual Panarello milk sounds acceptable. Skip it when automatic cappuccino, many profiles, tall cups or fine light-roast adjustment are requirements. Confirm the RI suffix, 120 V rating and seller coverage, then compare the exact rival configuration rather than a family name.',
    ],
  },
  video: {
    id: 'dUACiKlQ2OU', title: 'Gaggia Brera Espresso Machine: Unboxing, Startup, & First Use Livestream', creator: 'Whole Latte Love', published: '2023-12-22',
    note: 'A clear exact-model setup and demonstration from a specialist retailer. It is useful for operation, not independent price or reliability evidence, and Coffeedant did not reproduce its cup judgments.',
  },
});

export const lineaMicraReview = buildResearchReview({
  slug: '/espresso-machine/la-marzocco-linea-micra/',
  productId: 'CD-EM-000004',
  brand: 'La Marzocco',
  model: 'Linea Micra',
  sku: 'LINEA-MICRA-110V',
  category: 'Dual-boiler semi-automatic espresso machine',
  brandPath: '/la-marzocco/',
  title: 'La Marzocco Linea Micra review',
  description: 'A research-led Linea Micra review covering the current $4,500 US machine, five-minute workflow, dual boilers, app controls, cup clearance, warranty and Mini R comparison.',
  verdictLabel: 'Exceptional fundamentals, deliberately few controls',
  verdict: 'I would choose the Linea Micra for a home that wants fast, repeatable espresso and powerful manual milk from a compact, supported dual boiler. I would not choose it for flow profiling, automatic shot stopping or an app-free control experience. At the current $4,500 US direct price, the decision is less about whether it works and more about whether quiet rotary-pump consistency, quick readiness and La Marzocco service justify paying far beyond feature-richer dual boilers.',
  assessment: 'A polished home workhorse whose premium buys execution and service more than experimentation.',
  image: 'images/products/la-marzocco-linea-micra.jpg',
  imageAlt: 'La Marzocco Linea Micra compact dual-boiler espresso machine',
  published: '2025-10-21',
  updated: '2026-09-15',
  authorNote: 'I focused on the tension that matters at this price: the Micra is simpler than many cheaper machines, yet independent tests consistently praise the things it does. I checked the current US store, manuals, parts, warranty, measured reviews and owner discussions. This is research-led; I have not physically tested a Micra.',
  basisDisclosure: 'Scores synthesize current US documentation, independent measurements and attributed owner experience. Coffeedant did not measure temperature, steam, sound, energy or taste. Any long-life claim is treated as an ownership aspiration rather than proven duration.',
  price: {
    label: 'La Marzocco Home US price', msrp: '$4,500.00', numeric: '4500.00', currency: 'USD',
    typical: 'Machine only; espresso grinder and optional plumb-in kit sold separately', checked: 'September 15, 2026',
  },
  links: [
    { label: 'Check La Marzocco price', href: 'https://home.lamarzoccousa.com/product/linea-micra/', note: 'Official US direct store; select color and confirm freight timing', primary: true },
    { label: 'Check Amazon availability', href: 'https://amzn.to/3Z0a1fN', note: 'Affiliate link; authorized status, voltage and coverage must be confirmed', affiliate: true },
  ],
  facts: [
    { label: 'US electrical', value: '110 V, 1600 W' },
    { label: 'Heating system', value: 'PID dual boiler with saturated brew group and rotary pump' },
    { label: 'Coffee boiler', value: '0.25 L on current US specification; parts literature uses 0.23 L nominal' },
    { label: 'Steam boiler', value: '1.6 L; can be disabled in the app' },
    { label: 'Water reservoir', value: '2 L; optional plumb-in configuration' },
    { label: 'Official dimensions', value: '11.5 W × 13 H × 18 D in on current US technical table' },
    { label: 'Official weight', value: '42 lb' },
    { label: 'Portafilter', value: '58 mm convertible single-spout, double-spout or bottomless format' },
    { label: 'Included baskets', value: '14 g, 17 g and blind cleaning basket' },
    { label: 'US direct warranty', value: '12 months parts and labor; exclusions apply' },
  ],
  quickAnswers: [
    { question: 'Does the paddle control flow?', answer: 'No. It is an electronic brew on/off control. The Micra does not provide manual flow or pressure profiling through the paddle.' },
    { question: 'Does it stop by weight or volume?', answer: 'No native automatic stop is documented for the Micra. Start and stop the shot manually; use a thin scale and timer. App features and accessory compatibility can change, so verify live documentation rather than assuming Mini R functions.' },
    { question: 'How fast is it ready?', answer: 'La Marzocco describes quick heating, and Kaffeemacher independently confirmed brew readiness around five minutes in its protocol. Grinding, cup warming and steam readiness still affect the first complete drink.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. Separate coffee and 1.6 L steam boilers support simultaneous work, within domestic duty-cycle limits.' },
    { question: 'Does it require the app?', answer: 'Basic brew and steam operation is on the machine. Temperature, steam-boiler state, scheduling, pre-brew or preinfusion choices and cleaning controls rely on the connected app.' },
    { question: 'Micra or Mini R?', answer: 'Choose Micra for lower price, smaller width and fast home use. Choose Mini R for more working room, higher sustained capacity and current brew-by-weight integration with the compatible La Marzocco scale.' },
  ],
  bestFor: [
    'One or two serious home users wanting repeatable espresso and strong steam with little warm-up planning',
    'A buyer who prefers a simple physical interface and established US support over a long feature list',
    'Medium-to-dark or contemporary espresso drinkers who do not need manual flow profiling',
  ],
  avoidIf: [
    'You want pressure or flow profiling, automatic stop or onboard shot data',
    'You refuse app-based temperature and schedule controls',
    'Tall cups, thick scales or frequent high-volume entertaining define the station',
  ],
  pros: [
    'Independent five-minute readiness with stable domestic shot performance',
    'Dual boilers and quiet rotary pump support simultaneous espresso and steam',
    'Compact width, convertible 58 mm portafilter and powerful manual milk',
    'Official manual, parts catalog, technical bulletins and US service channel',
  ],
  cons: [
    'Current $4,500 US price before an espresso grinder',
    'Paddle is on/off only, with no native flow profiling or automatic stop',
    'Short steam wand and tight cup-plus-scale clearance divide reviewers and owners',
    'Important controls live in the app rather than on the machine',
  ],
  dimensions: [
    {
      id: 'espresso', score: 9.2, reason: 'A saturated group, small PID coffee boiler and rotary pump deliver the stable traditional espresso platform praised across strong independent tests, without profiling controls.',
      buyerMeaning: 'Excellent repeatability for conventional recipes; less expressive for coffees that benefit from deliberately shaped flow or pressure.',
      evidenceStatus: 'Official design corroborated by measured and extended hands-on reviews',
      sourceIds: ['micra-official', 'micra-manual', 'micra-kaffee', 'micra-serious', 'micra-homebarista'], deepDiveId: 'espresso', title: 'Espresso: consistency instead of a control laboratory',
      intro: ['The Micra heats a small coffee boiler and saturated group quickly, then uses a rotary pump for fixed-pressure brewing. App temperature control lets the owner move the setpoint, but the physical paddle only starts and stops water.'],
      evidence: [
        { signal: 'Fast thermal system', evidence: 'Kaffeemacher measured useful readiness around five minutes and stable espresso in domestic cadence.', decision: 'A scheduled half-hour warm-up is not necessary for the first normal shot, though cups and portafilter configuration still matter.' },
        { signal: 'Independent extended use', evidence: 'Serious Eats used a loaned Micra for two months and more than 200 shots, reporting very strong repeatability and taste.', decision: 'The evidence for conventional espresso is strong, but its flavor judgments remain that reviewer’s.' },
        { signal: 'No flow profile', evidence: 'The paddle is an on/off switch; pre-brew settings are app-defined rather than continuous manual control.', decision: 'Choose a Bianca or Decent-style platform if changing flow is central to the hobby.' },
      ],
      diagnosis: [
        { signal: 'Shot runs too quickly', guidance: 'Correct grind, dose and puck preparation; the paddle cannot reduce flow gradually.' },
        { signal: 'Light roast stays sharp', guidance: 'Increase app temperature within the documented range, improve preheating and recipe, then recognize the fixed-pressure ceiling.' },
        { signal: 'Coffee changes during a fast queue', guidance: 'Leave the steam boiler on for thermal support and allow recovery when the app or group light indicates it.' },
      ],
    },
    {
      id: 'milk', score: 9.1, reason: 'The 1.6 L steam boiler produces serious home steam while dual boilers preserve simultaneous brewing, though the short wand geometry can crowd some pitchers.',
      buyerMeaning: 'Excellent for daily flat whites and cappuccinos once the fast steam and short wand are learned.',
      evidenceStatus: 'Official capacity with multiple independent milk demonstrations',
      sourceIds: ['micra-official', 'micra-manual', 'micra-serious', 'micra-kaffee', 'micra-barista'], deepDiveId: 'milk', title: 'Milk: compact geometry, commercial-style pace',
      intro: ['The insulated short wand and PEEK tip are designed to remain safer to touch than traditional hot metal, while the 1.6 L steam boiler supplies much more capacity than most compact domestic machines.'],
      evidence: [
        { signal: 'Separate steam boiler', evidence: 'The 1.6 L boiler operates independently and can be disabled through the app.', decision: 'Leave it off for espresso-only efficiency; turn it on early for milk or a rapid coffee queue.' },
        { signal: 'Hands-on texture', evidence: 'Serious Eats reported glossy milk; Kaffeemacher also found strong steam but discussed the compact wand and working room.', decision: 'Capability is high, while ergonomics depend on pitcher size and technique.' },
        { signal: 'Simultaneous operation', evidence: 'Dual boilers allow brewing and steaming together.', decision: 'Two milk drinks can move quickly once dosing is staged, unlike a single-heater transition.' },
      ],
      diagnosis: [
        { signal: 'Milk expands too fast', guidance: 'Use a lower app steam setting, begin with less air and choose a pitcher that lets the short wand reach comfortably.' },
        { signal: 'Wand feels cramped', guidance: 'Practice the insertion angle before filling; do not overfill the pitcher to compensate.' },
        { signal: 'Steam weakens in a queue', guidance: 'Confirm boiler setting and readiness, then allow recovery rather than increasing aeration time.' },
      ],
    },
    {
      id: 'workflow', score: 8.9, reason: 'Five-minute readiness, quiet pumping, simultaneous steam and a simple paddle make daily drinks fast, while manual stopping and tight clearance demand attention.',
      buyerMeaning: 'A superb one- or two-drink routine for someone happy to weigh shots and work the wand.',
      evidenceStatus: 'Measured warm-up plus extended hands-on and owner corroboration',
      sourceIds: ['micra-kaffee', 'micra-serious', 'micra-homebarista', 'micra-reddit-pool', 'micra-long-video'], deepDiveId: 'workflow', title: 'Workflow: fast does not mean automatic',
      intro: ['The machine removes waiting, not barista tasks. You still grind, distribute, tamp, start, watch weight, stop, knock out and wipe. The reward is that the machine is ready when those skills are.'],
      evidence: [
        { signal: 'Cold start', evidence: 'Independent testing confirmed approximately five-minute espresso readiness.', decision: 'Scheduling is optional convenience rather than a remedy for a slow boiler.' },
        { signal: 'Manual stop', evidence: 'No onboard volumetric or weight stop is documented.', decision: 'A thin scale earns a permanent place under the cup, tightening already limited clearance.' },
        { signal: 'Domestic queue', evidence: 'Measured testing shows strong home cadence but eventual limits under compressed professional-style shots.', decision: 'Excellent for several normal drinks, not a substitute for a larger commercial duty cycle.' },
      ],
      diagnosis: [
        { signal: 'Scale and cup do not fit', guidance: 'Use the bottomless conversion and a thinner scale or shorter cup; test the full stack before buying accessories.' },
        { signal: 'Second drink is delayed', guidance: 'Stage the next dose and steam during extraction; the machine itself is unlikely to be the first bottleneck.' },
        { signal: 'App schedule fails', guidance: 'Basic on-machine operation remains available; troubleshoot connection without making coffee dependent on remote start.' },
      ],
    },
    {
      id: 'build', score: 9.0, reason: 'Dense steel construction, rotary-pump architecture, official parts catalog and service network create a strong ownership case, but twelve-month US coverage is short at this price.',
      buyerMeaning: 'Service access is credible; a long lifespan still depends on water, maintenance and future parts rather than brand reputation alone.',
      evidenceStatus: 'Materials, documentation and warranty current; lifetime unquantified',
      sourceIds: ['micra-official', 'micra-manual', 'micra-parts', 'micra-warranty', 'micra-support', 'micra-coffeetime'], deepDiveId: 'build', title: 'Build: professional lineage needs domestic water discipline',
      intro: ['At 42 lb in the current US table, the Micra is compact but not light. Its service story includes a model manual, exploded parts catalog, plumb-in guide, support contacts and technical bulletins.'],
      evidence: [
        { signal: 'Official support', evidence: 'La Marzocco USA publishes model documents, technical updates and direct support contact routes.', decision: 'Local authorized service availability should be confirmed before a $4,500 purchase.' },
        { signal: 'US warranty', evidence: 'Direct US Micra purchases carry 12 months of parts and labor under current terms.', decision: 'Water damage, scale, wear, unauthorized service and taking a US unit abroad can remove coverage.' },
        { signal: 'Owner evidence', evidence: 'Owner communities praise fit and use while also documenting leaks, hoses, finish concerns and app issues.', decision: 'Treat each issue as a diagnostic lead, not a failure-rate estimate.' },
      ],
      diagnosis: [
        { signal: 'Water test is outside spec', guidance: 'Solve water before first use. The warranty explicitly excludes poor-water and scale damage.' },
        { signal: 'A leak appears', guidance: 'Power down, close a plumbed supply if applicable and contact authorized support rather than continuing to heat.' },
        { signal: 'Considering self-repair', guidance: 'Use official diagrams for identification, while recognizing warranty and electrical-safety consequences.' },
      ],
    },
    {
      id: 'features', score: 7.1, reason: 'App temperature, schedules, steam setting, pre-brew and cleaning are useful, but automatic stopping, onboard timer, profiles and paddle modulation are absent.',
      buyerMeaning: 'Buy for disciplined simplicity; feature hunters can spend much less and receive more variables.',
      evidenceStatus: 'Current machine and app functions documented; software can change',
      sourceIds: ['micra-official', 'micra-manual', 'micra-app', 'micra-kaffee'], deepDiveId: 'features', title: 'Features: the app carries controls the fascia omits',
      intro: ['On the machine, the interface is almost elemental: power state, brew paddle, steam knob and hot-water control. The app handles brew temperature, steam boiler, schedules, pre-brew or preinfusion options and cleaning.'],
      evidence: [
        { signal: 'Connected controls', evidence: 'La Marzocco Home app is the route to temperature and several setup functions.', decision: 'Owners who dislike accounts or phone dependence should assess the default physical experience first.' },
        { signal: 'Convertible portafilter', evidence: 'Polymer spouts switch between single, double and bottomless use on a 58 mm body.', decision: 'Low thermal mass helps quick readiness, though some buyers prefer a conventional metal portafilter.' },
        { signal: 'Paddle behavior', evidence: 'The paddle commands brew on or off, not proportional pressure.', decision: 'Its commercial appearance should not be read as manual profiling.' },
      ],
    },
    {
      id: 'value', score: 6.9, reason: 'The $4,500 price buys excellent traditional execution, support and compactness, while several cheaper dual boilers add shot timers, volumetrics or profiling.',
      buyerMeaning: 'Strong emotional and ownership value for the right buyer, modest feature-per-dollar value.',
      evidenceStatus: 'Official US price checked September 15, 2026; grinder excluded',
      sourceIds: ['micra-official', 'micra-warranty', 'micra-serious', 'micra-kaffee', 'micra-mini-compare'], deepDiveId: 'value', title: 'Value: pay for repetition, not a specification contest',
      intro: ['The official US store listed $4,500 with add-to-cart controls. A serious grinder, scale, water treatment and perhaps plumb-in hardware sit outside that number.'],
      evidence: [
        { signal: 'Current direct price', evidence: '$4,500 on the official US page on September 15, 2026.', decision: 'Compare a complete grinder-equipped station and the direct twelve-month warranty.' },
        { signal: 'Execution over features', evidence: 'Independent reviewers praise coffee, steam, speed and repeatability while noting missing timer, clearance and profiling.', decision: 'Value is high only if those praised fundamentals are the buyer’s priorities.' },
        { signal: 'Mini R step', evidence: 'Mini R adds working space, capacity and compatible brew-by-weight functions at a higher total.', decision: 'Do not buy Mini R merely for status, or Micra merely because it is the cheaper La Marzocco.' },
      ],
    },
  ],
  alternatives: [
    { name: 'La Marzocco Linea Mini R', reason: 'Choose it for larger working room, greater sustained capacity and current brew-by-weight support.', href: '/espresso-machine/la-marzocco-linea-mini/' },
    { name: 'Lelit Bianca V3', reason: 'Choose it for manual flow control and richer experimentation at a lower machine price.', href: '/espresso-machine/lelit-bianca-pl162t/' },
    { name: 'Lelit Elizabeth', reason: 'Choose the PL92T for compact dual-boiler control and programmable doses at much lower cost.', href: '/espresso-machine/lelit-elizabeth/' },
    { name: 'Rancilio Silvia Pro X', reason: 'Choose it for a conventional compact dual boiler with onboard controls and soft infusion.', href: '/espresso-machine/rancilio-silvia-pro-x/' },
  ],
  article: {
    methodology: 'I used current US price, warranty, technical and support pages, then compared those claims with Serious Eats’ two-month and 200-plus-shot review, Kaffeemacher’s measurements, Home-Barista’s early independent review, specialist demonstrations, an 18-month owner video and three owner pools. Conflicting dimensions and boiler labels stay visible. Coffeedant performed no hands-on test.',
    sections: [
      {
        id: 'orientation', eyebrow: 'Decision first', title: 'What the Micra’s $4,500 premium actually buys', html: `
          <p>The Linea Micra buys a narrow form of luxury: the machine should disappear behind the barista’s repeatable routine. Its dual boilers, saturated group, PID and rotary pump aim to deliver stable traditional espresso and fast steam without a long morning wait. It does not try to justify $4,500 with a color display, recipe catalog, automatic milk, flow graph or automatic shot stop.</p>
          <p>The current US page showed $4,500 and an add-to-cart flow on September 15, 2026. Grinder sold separately is printed beside the offer. Direct purchases receive the currently published 12-month parts-and-labor warranty, with exclusions for wear, poor water, scale, misuse, unauthorized work, commercial use and US equipment taken abroad. Other countries have separate pricing, electrical versions and support.</p>
          <p>The verdict is not that everyone should stretch for one. It is that the core performance evidence is unusually consistent. Serious Eats ran a press-loan machine for two months and more than 200 shots. Kaffeemacher bought and measured one. Home-Barista published an early detailed evaluation. All identify strong espresso and steam fundamentals, while repeatedly returning to tight clearance, short wand, app reliance and minimal brew control. Those compromises should decide the purchase, not the badge.</p>
          <p>Before ordering, price the grinder at the same seriousness as the machine. Micra can repeat temperature and pressure, but it cannot correct broad grind steps, stale coffee or uneven preparation. A balanced station with a suitable grinder will outperform a prestige-heavy budget that leaves the coffee side compromised.</p>`,
      },
      {
        id: 'setup', eyebrow: 'First week', title: 'Water, clearance and the app come before dialing in', html: `
          <p>Test water before filling. The US warranty calls poor water and scale the most common cause of machine and part failure and specifically excludes resulting damage. The right water needs enough mineral for sensing and pleasant extraction without excessive scale or corrosiveness. Use La Marzocco’s current limits and a treatment supplier who understands espresso equipment; a generic refrigerator filter does not automatically create correct boiler water.</p>
          <p>Measure the complete cup stack. Place your thinnest scale, normal cup and both spouted and bottomless portafilter formats under the group. Serious Eats and owners point to low clearance as a daily constraint. The convertible polymer spout has low thermal mass and supports rapid readiness, but it also divides owners who expected a conventional all-metal handle. Decide by fit and heat behavior rather than appearance alone.</p>
          <p>For a first medium espresso, use the 17 g basket near its intended dose, choose an approximately 1:2 yield and change grind until flow is sensible. That is a controlled editorial starting point, not a Micra taste test. Stop with the paddle while watching the scale. The machine will not rescue a poor grind or uneven puck simply because it holds temperature well.</p>
          <p>Finish week one by running the documented rinse and backflush sequence, practicing steam purge and learning the tray float. Know which daily tasks use water only and which scheduled cleaning calls for approved detergent. Good ownership begins before an alert.</p>`,
      },
      {
        id: 'espresso', eyebrow: 'Coffee performance', title: 'A stable platform for traditional manual espresso', html: `
          <p>Serious Eats’ reviewer used the Micra for more than 200 shots and reported exceptional consistency and taste across the period. Home-Barista and Barista Magazine likewise praised the traditional espresso result. Those are strong independent signals, but Coffeedant has not duplicated them and flavor remains dependent on grinder, coffee, water and puck preparation.</p>
          <p>Control is intentionally limited. Temperature changes in the app. A pre-brew setting can pause or alter the opening sequence depending on reservoir or plumbed configuration, but the paddle does not meter live flow. Once activated, the pump runs the machine’s designed pressure behavior until the owner stops it. A Lelit Bianca or Decent offers more help when a dense light roast wants a shaped profile.</p>
        `,
      },
      {
        id: 'milk', eyebrow: 'Steam performance', title: 'More steam than the small body suggests', html: `
          <p>The 1.6 L steam boiler is large beside the 0.25 L coffee boiler and works independently. This means a practiced owner can begin steaming while espresso runs, then finish a latte without waiting for a shared heater to change modes. Serious Eats described glossy, strong milk results, and independent videos show the pace is closer to commercial habits than beginner appliances.</p>
          <p>The PEEK steam tip and insulated design reduce heat transfer into touch points, but no “cool touch” phrase makes fresh steam harmless. Purge before milk, wipe immediately after, purge again and handle according to the manual. Dried milk inside a tip is both a hygiene and performance problem.</p>
          <p>For two drinks, dose the second basket while the first shot and milk are being completed only if the station remains controlled. Otherwise finish one drink, clean the wand and group, then repeat. The machine has capacity to move quickly; rushed puck preparation becomes the likely quality limit.</p>
        `,
      },
      {
        id: 'workflow', eyebrow: 'Daily cadence', title: 'The first and second drink both arrive quickly', html: `
          <p>Pull the first shot manually: lock in, place the scale, move the paddle, watch flow and stop at target. Steam simultaneously or immediately after. Knock out, flush only as needed, wipe the basket and wand and return tools to a dry place. There is no volumetric control masking a scale drift, and no brew-by-weight system on the current Micra offer.</p>
          <p>The second drink is where dual boilers matter. The machine does not have to cool from steam back to coffee, and the next extraction can follow as soon as the dose is ready. Kaffeemacher’s stress work shows that extremely compressed repeated shots eventually challenge the small thermal system. In a normal home, grinder speed, puck preparation and pitcher handling are more likely to form the queue first.</p>
        `,
      },
      {
        id: 'build', eyebrow: 'Long ownership', title: 'Service structure is strong, warranty length is not', html: `
          <p>The 42 lb chassis, saturated group and rotary pump place the Micra closer to professional espresso architecture than most compact appliances. La Marzocco USA publishes a dedicated manual and exploded parts catalog, plus a shared home-machine plumb-in guide and model technical bulletins. Its support page provides direct phone and email routes. This is concrete ownership evidence.</p>
          <p>The direct US warranty is only 12 months of parts and labor. That is difficult to celebrate on a $4,500 machine, especially when the Mini receives longer published coverage. The policy also excludes normal wear, gaskets, filters, vacuum breakers, O-rings, poor water, scale, commercial use, damage, unauthorized modification or service and US units taken abroad. A reseller purchase begins with that reseller’s procedure.</p>
          <p>Owner pools add nuance. The r/LaMarzocco community commonly praises quick heat, steam, sound and compact fit while debating cup room, polymer portafilter pieces, connected features and occasional component issues. Home-Barista’s review thread adds technically experienced discussion. Coffeetime’s La Marzocco owner chat provides a separate forum culture. None supplies the denominator needed for a failure rate or ten-year promise.</p>
          <p>Preventive ownership is straightforward: correct water from day one, daily wipe and rinse, water-only backflush at the documented cadence, detergent cleaning when specified, clean shower screen and basket, and periodic gasket or technician inspection. A plumbed installation adds pressure regulation, leak protection, drain planning and water-treatment service. Follow the official plumb-in manual rather than copying a café schematic.</p>`,
      },
      {
        id: 'features', eyebrow: 'Control philosophy', title: 'A simple machine with a connected settings drawer', html: `
          <p>The app is effectively the settings drawer. It carries coffee temperature, steam boiler state or power, schedules, cleaning and the supported pre-brew choices. That keeps the machine visually calm and lets settings remain out of the daily way. It also makes important adjustments dependent on a supported phone, account and connection.</p>
          <p>Missing features should stay explicit: no paddle modulation, no pressure graph, no onboard shot timer, no automatic volume stop, no integrated scale and no user profiles on the machine. Some buyers call that focus. Others can buy a Lelit Elizabeth, Bianca or Decent for less and receive much more direct control.</p>`,
      },
      {
        id: 'value', eyebrow: 'Price and comparison', title: 'Micra versus Mini R, Bianca and compact dual boilers', html: `
          <p>Lelit Bianca V3 is the sharper contrast: E61 warm-up and a larger visual presence in exchange for manual flow control and a lower price. Lelit Elizabeth and Rancilio Silvia Pro X make the financial question harder, providing compact dual-boiler function and onboard controls far below $4,500. They do not duplicate Micra’s exact rotary-pump feel, saturated-group speed or service ecosystem.</p>
          ${comparisonTablesHtml('La Marzocco Linea Micra', [
            { name: 'Linea Micra', href: '/espresso-machine/la-marzocco-linea-micra/', quickDecision: 'Choose for fast, compact traditional espresso and steam.', priceClass: '$4,500 official US check', dimensions: '11.5 W × 13 H × 18 D in technical table', heating: 'PID dual boiler, independent five-minute result', coffeeSetup: '58 mm, manual paddle stop, app temperature', milkWorkflow: '1.6 L boiler, simultaneous manual steam', bestFor: 'One or two premium home users' },
            { name: 'Linea Mini R', href: '/espresso-machine/la-marzocco-linea-mini/', quickDecision: 'Choose for room, sustained capacity and compatible brew by weight.', priceClass: 'Higher La Marzocco tier', dimensions: 'Wider and heavier with more cup room', heating: 'Larger home-commercial dual-boiler platform', coffeeSetup: 'Manual paddle plus supported connected-scale workflow', milkWorkflow: 'Larger-capacity manual steam', bestFor: 'Entertaining and buyers wanting the larger platform' },
            { name: 'Lelit Bianca V3', href: '/espresso-machine/lelit-bianca-pl162t/', quickDecision: 'Choose for direct flow control and experimentation.', priceClass: 'Substantially below Micra', dimensions: 'Larger E61 body with movable tank', heating: 'Dual boiler E61, longer thermal routine', coffeeSetup: '58 mm paddle flow control and programmable features', milkWorkflow: 'Strong dual-boiler manual steam', bestFor: 'Light-roast and profiling enthusiasts' },
            { name: 'Lelit Elizabeth PL92T', href: '/espresso-machine/lelit-elizabeth/', quickDecision: 'Choose for compact value, timed doses and onboard settings.', priceClass: 'About $1,800 current US PL92T snapshot', dimensions: 'Narrow stainless domestic body', heating: 'Compact dual boiler', coffeeSetup: '58 mm, timed doses and programmable preinfusion', milkWorkflow: '0.6 L steam boiler, simultaneous use', bestFor: 'Control and value over premium finish' },
          ], 'Prices, firmware and accessory compatibility can move independently. Dimensions use the cited manufacturer axes. Grinder, scale, water treatment and plumbing are outside machine prices.')}
        `,
      },
      {
        id: 'recommendations', eyebrow: 'Four routes', title: 'Choose which kind of control deserves the budget', html: `
          ${recommendationCardsHtml([
            { kicker: 'Best focused premium choice', title: 'Linea Micra', text: 'For quick, repeatable traditional shots, serious steam and a compact La Marzocco service path.', href: '/espresso-machine/la-marzocco-linea-micra/', linkLabel: 'Review the Micra decision', featured: true },
            { kicker: 'More room and throughput', title: 'Linea Mini R', text: 'For frequent guests, a larger work area and current connected brew-by-weight support.', href: '/espresso-machine/la-marzocco-linea-mini/', linkLabel: 'Read the Linea Mini review' },
            { kicker: 'Flow control', title: 'Lelit Bianca V3', text: 'For an owner who wants to shape extraction rather than repeat a fixed-pressure style.', href: '/espresso-machine/lelit-bianca-pl162t/', linkLabel: 'Read the Bianca review' },
            { kicker: 'Compact value', title: 'Lelit Elizabeth PL92T', text: 'For timed doses and dual boilers at far lower cost, with a less premium build.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read the Elizabeth review' },
          ])}
        `,
      },
      {
        id: 'faq', eyebrow: 'Quick reference', title: 'Linea Micra FAQ', html: faqHtml([
          { question: 'Does Linea Micra have a shot timer?', answer: 'Not on the machine. Use a separate scale or timer and stop the paddle manually. Do not infer Mini R connected-scale features.' },
          { question: 'Can it make several drinks in a row?', answer: 'Yes for normal home sequences, especially with the steam boiler on. Independent stress testing found limits under compressed professional-style cadence, so it is not a café-duty substitute.' },
          { question: 'Can I plumb it in?', answer: 'Yes with the official home-machine plumb-in route. Water treatment, supply pressure, leak protection and drain planning should follow the current manual and qualified installation advice.' },
          { question: 'Why do dimensions differ?', answer: 'The current US page’s marketing block says 12 × 12 × 15 inches while its technical table says 11.5 × 13 × 18. Independent measurement aligns more closely with the technical table. Use that table and add operating clearance.' },
          { question: 'How long is the US warranty?', answer: 'Current direct US terms give the Micra 12 months of parts and labor. Water, scale, wear, misuse, unauthorized work, commercial use and taking US equipment abroad are among stated exclusions.' },
          { question: 'Is it good for light roasts?', answer: 'It can make excellent light-roast espresso with temperature and recipe work, according to independent reviewers, but offers no live flow profiling. Buyers centered on pressure shaping have better tools.' },
          { question: 'What remains unknown?', answer: 'No credible public dataset establishes a typical lifespan or failure rate. Software features and accessory compatibility can also change after publication.' },
        ]),
      },
    ],
    sources: [
      { id: 'micra-official', label: 'La Marzocco Home US: Linea Micra', href: 'https://home.lamarzoccousa.com/product/linea-micra/', note: '$4,500 price, current availability, inclusions and technical table checked September 15, 2026; page dimension conflict recorded.' },
      { id: 'micra-manual', label: 'La Marzocco Linea Micra manual', href: 'https://lamarzoccousa.com/wp-content/uploads/2023/09/MAN.29.1_LINEA_EN_V1.0_ONLINE-1-1.pdf', note: 'Official setup, operation, safety, water and cleaning instructions.' },
      { id: 'micra-parts', label: 'La Marzocco Linea Micra parts catalog', href: 'https://lamarzoccousa.com/wp-content/uploads/2023/09/Linea-Micra_Parts_Catalog_V1.0.pdf', note: 'Official exploded assemblies and part identification; not a general authorization for owner repair.' },
      { id: 'micra-support', label: 'La Marzocco USA support and product documents', href: 'https://www.lamarzoccousa.com/support/', note: 'Current manual, parts, plumb-in, bulletin and direct support routes.' },
      { id: 'micra-warranty', label: 'La Marzocco Home US warranty', href: 'https://home.lamarzoccousa.com/warranty/', note: 'Current 12-month Micra parts-and-labor term and exclusions.' },
      { id: 'micra-app', label: 'La Marzocco Home app overview', href: 'https://home.lamarzoccousa.com/mobile-app/', note: 'Manufacturer account of connected settings; exact software behavior may change.' },
      { id: 'micra-serious', label: 'Serious Eats: Linea Micra review', href: 'https://www.seriouseats.com/la-marzocco-linea-micra-espresso-machine-review-7377775', note: 'Independent two-month, 200-plus-shot test on a press-loan machine; espresso, milk and ergonomic observations.' },
      { id: 'micra-kaffee', label: 'Kaffeemacher: Linea Micra measured review', href: 'https://kaffeemacher.de/en/blogs/kaffeewissen/la-marzocco-linea-micra', note: 'Purchased-machine heat, energy, temperature, queue, portafilter and espresso measurements.' },
      { id: 'micra-video', label: 'Kaffeemacher:innen: Linea Micra measured video review', href: 'https://www.youtube.com/watch?v=GWt0Cf6j3hE', note: 'Exact embedded video paired with the published measured test; selected video.' },
      { id: 'micra-homebarista', label: 'Home-Barista: Linea Micra review', href: 'https://www.home-barista.com/blog/la-marzocco-linea-micra-espresso-machine-review-t83283.html', note: 'Independent technical review and discussion thread with early ownership context.' },
      { id: 'micra-barista', label: 'Barista Magazine: Linea Micra test drive', href: 'https://www.baristamagazine.com/test-drive-the-linea-micra-espresso-machine/', note: 'Independent professional-barista workflow and drink perspective.' },
      { id: 'micra-long-video', label: 'Linea Micra 18-month ownership review', href: 'https://www.youtube.com/watch?v=wtJn4NwswJk', note: 'Long-term individual owner video; valuable anecdotal context, not reliability data.' },
      { id: 'micra-mini-compare', label: 'Artisti Coffee: Micra versus Mini comparison', href: 'https://artisticoffee.com/blogs/product-reviews/battle-of-the-home-icons-la-marzocco-linea-micra-vs-linea-mini', note: 'Direct specialist comparison of scale, workflow and capacity; retailer perspective noted.' },
      { id: 'micra-reddit-pool', label: 'r/LaMarzocco: Micra experience thread', href: 'https://www.reddit.com/r/LaMarzocco/comments/1g2n8ck/what_is_your_experience_on_the_linea_micra_so_far/', note: 'Dedicated owner pool covering daily drinks, fit, upgrades and issues; self-selected.' },
      { id: 'micra-reddit-compare', label: 'r/LaMarzocco: Micra versus Mini R owner thread', href: 'https://www.reddit.com/r/LaMarzocco/comments/1emx7m9/la_marzocco_linea_micra_vs_linea_mini_r_which_is/', note: 'Owner comparison pool on capacity, clearance and brew-by-weight value.' },
      { id: 'micra-coffeetime', label: 'Coffeetime: La Marzocco owners chat', href: 'https://coffeetime.freeflarum.com/d/1787-la-marzocco-owners-chat-all-welcome', note: 'Separate specialist forum owner pool with tips and troubleshooting; anecdotal.' },
    ],
    finalTitle: 'Final verdict: premium simplicity works when repetition is the goal',
    finalVerdict: [
      'The Micra earns its strongest marks in the parts of espresso ownership that recur: fast readiness, stable conventional extraction, quiet pumping, abundant steam and a support structure with real model documents. Strong independent tests agree on those fundamentals more than premium reviews usually do.',
      'It remains a $4,500 machine with a 12-month US direct warranty, manual shot stop, tight cup room and important app-based settings. Buy it because those constraints feel like focus and because traditional espresso and milk repeatability are the goal. Buy a Bianca, Elizabeth or Silvia Pro X for control value, or a Mini R for more working space and supported brew-by-weight. The badge cannot answer that choice for you.',
    ],
  },
  video: {
    id: 'GWt0Cf6j3hE', title: 'La Marzocco LINEA MICRA im Test: Neuer Dualboiler-Meilenstein!', creator: 'Kaffeemacher:innen', published: '2022-11-12',
    note: 'A technically detailed independent video paired with published heat, temperature, energy and workflow measurements. Results belong to the creator’s machine and protocol.',
  },
});

export const lelitElizabethReview = buildResearchReview({
  slug: '/espresso-machine/lelit-elizabeth/',
  productId: 'CD-EM-000001',
  brand: 'Lelit',
  model: 'Elizabeth PL92T',
  sku: 'PL92T-120',
  category: 'Dual-boiler semi-automatic espresso machine',
  brandPath: '/lelit/',
  title: 'Lelit Elizabeth PL92T review',
  description: 'A research-led Lelit Elizabeth PL92T review covering the current $1,799.95 US machine, dual boilers, timed doses, preinfusion, warm-up, ownership and separate Elizabeth3.',
  verdictLabel: 'The compact control-value choice, with a successor caveat',
  verdict: 'I would choose the current Elizabeth PL92T for a household making two or three espresso and milk drinks that wants dual boilers, timed shot buttons, programmable preinfusion and onboard temperature controls without an E61 footprint. It remains on sale in the US at $1,799.95 as of this update. However, Lelit now lists the separate Elizabeth3 PL92T3 with electronic Pagaia flow control. Its US rollout and price were not confirmed, so buyers who value the new profiling system should wait for a real regional offer rather than assuming this PL92T will receive it.',
  assessment: 'Outstanding compact functionality for the current price, provided you knowingly buy PL92T rather than the announced PL92T3 generation.',
  image: 'images/products/lelit-elizabeth.jpg',
  imageAlt: 'Lelit Elizabeth PL92T dual-boiler espresso machine in brushed stainless steel',
  published: '2025-11-03',
  updated: '2026-09-15',
  authorNote: 'This update needed a generation line more than a new superlative. I matched the available US Elizabeth to PL92T-120, documented the separate PL92T3, checked official and retailer support, and reconciled independent warm-up and workflow tests. This is research-led; I have not physically tested either Elizabeth generation.',
  basisDisclosure: 'Ratings apply only to the established Elizabeth PL92T reviewed here. They combine official documentation, current US offers, independent tests and attributed owner reports. Coffeedant did not measure temperature, pressure, sound, steam, taste or durability, and PL92T3 features are not credited to PL92T.',
  price: {
    label: 'Lelit US PL92T price', msrp: '$1,799.95', numeric: '1799.95', currency: 'USD',
    typical: 'Current PL92T-120 generation; grinder sold separately; seller coverage can add to the Lelit warranty', checked: 'September 15, 2026',
  },
  links: [
    { label: 'Check Lelit US price', href: 'https://www.lelit.com/en-us/product/elizabeth-pesel01', note: 'Official US PL92T offer; confirm model code before buying', primary: true },
    { label: 'Check Clive Coffee price', href: 'https://clivecoffee.com/products/lelit-elizabeth-dual-boiler-espresso-machine', note: 'US authorized retailer with separate published coverage terms' },
    { label: 'Check Amazon availability', href: 'https://amzn.to/4j2hL7C', note: 'Affiliate link; verify PL92T-120, seller authorization and warranty', affiliate: true },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'Elizabeth PL92T, US electrical code PL92T-120' },
    { label: 'Lifecycle', value: 'Still sold in US; separate Elizabeth3 PL92T3 announced/listed globally' },
    { label: 'Brew system', value: 'LELIT58 group, 3-way solenoid, vibration pump and PID/LCC control' },
    { label: 'Coffee boiler', value: '300 ml brass' },
    { label: 'Steam/hot-water boiler', value: '600 ml AISI 316L stainless steel' },
    { label: 'Reservoir', value: '2.5 L, tank only' },
    { label: 'Official dimensions', value: '32 W × 38 D × 38 H cm' },
    { label: 'Official weight', value: '15.3 kg' },
    { label: 'Included double basket', value: 'IMS 14–18 g; single and blind IMS baskets also included' },
    { label: 'North American manufacturer warranty', value: '12 months, non-transferable; terms and exclusions apply' },
  ],
  quickAnswers: [
    { question: 'Is this the new Elizabeth3?', answer: 'No. This review and $1,799.95 US offer cover Elizabeth PL92T, specifically PL92T-120 for 120 V. Elizabeth3 is PL92T3, a separate machine with Pagaia and revised hardware.' },
    { question: 'Should I wait for PL92T3?', answer: 'Wait if electronic flow profiling is a priority and you can tolerate an unknown US launch date and price. Buy current PL92T only if its proven feature set and current offer already meet the need.' },
    { question: 'Are the shot buttons volumetric?', answer: 'They are programmable by brew time, not true flow-meter volumetrics. The LCC becomes a shot timer, so output should still be checked on a scale as coffee changes.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. The independent 300 ml coffee boiler and 600 ml steam boiler support simultaneous work, within their compact capacity.' },
    { question: 'How long should it warm up?', answer: 'The display can indicate readiness sooner, but Kaffeemacher and CoffeeKev both identify roughly 20 minutes for stronger full-system stability. A smart plug can make that wait irrelevant if used safely.' },
    { question: 'Can it be plumbed in?', answer: 'No. PL92T uses its 2.5 L reservoir. Buyers requiring a water line should compare a rotary-pump machine designed for plumbing.' },
  ],
  bestFor: [
    'A couple making back-to-back espresso and milk drinks in a compact kitchen',
    'An intermediate owner who values timed doses, two preinfusion styles and direct LCC controls',
    'Someone willing to manage reservoir water and routine backflushing for high capability per dollar',
  ],
  avoidIf: [
    'You specifically want the Elizabeth3 Pagaia profiling system',
    'You need plumbing, a rotary pump or truly automatic output by weight or volume',
    'A more substantial case, controls and easier dealer-local service matter more than features',
  ],
  pros: [
    'Independent coffee and steam boilers support simultaneous work',
    'LCC exposes temperature, preinfusion, timed dosing, purge, standby and steam-boiler control',
    'Commercial-size LELIT58 group with useful IMS basket bundle',
    'Current $1,799.95 US price is unusually strong for this control set',
  ],
  cons: [
    'Elizabeth3 PL92T3 makes the current generation decision less simple',
    'Full thermal settling takes longer than the early ready indication suggests',
    'Thin case elements, plastic control pieces and tank access divide reviewers and owners',
    'Vibration pump, reservoir-only design and timed rather than volumetric doses',
  ],
  dimensions: [
    {
      id: 'espresso', score: 8.8, reason: 'The 300 ml PID brew boiler, LELIT58 group, two preinfusion approaches and timed controls give unusually deep compact-machine tuning, without live flow profiling.',
      buyerMeaning: 'Excellent for an owner who wants repeatable recipes and temperature control; PL92T3 is the separate route to electronic Pagaia profiling.',
      evidenceStatus: 'Official design corroborated by measured and hands-on reviews',
      sourceIds: ['eliz-official', 'eliz-manual', 'eliz-kaffee', 'eliz-lance', 'eliz-kev'], deepDiveId: 'espresso', title: 'Espresso: deep programmed control, not live profiling',
      intro: ['PL92T can set brew temperature, pump-on and pause behavior, preinfusion time and a timed dose for each coffee button. It cannot vary flow through a paddle during the shot, and time does not guarantee the same mass when coffee changes.'],
      evidence: [
        { signal: 'Two preinfusion styles', evidence: 'The LCC supports pump-and-pause bloom behavior and steam-pressure-assisted wetting according to current guides and independent demonstrations.', decision: 'Use one simple mode first; recipe complexity cannot compensate for poor grind and distribution.' },
        { signal: 'Timed buttons', evidence: 'Official material says brewing time is programmable and the display shows extraction time.', decision: 'Saved buttons improve repetition, but a scale remains the check on output.' },
        { signal: 'Independent results', evidence: 'Kaffeemacher, CoffeeKev, Coffeeness and Lance Hedrick report strong espresso capability while noting warm-up and build tradeoffs.', decision: 'The performance case is robust without claiming Coffeedant tasted it.' },
      ],
      diagnosis: [
        { signal: 'Saved shot changes mass', guidance: 'Recheck grind and bean age, then reprogram time only after the recipe is stable.' },
        { signal: 'Early shot tastes inconsistent', guidance: 'Allow about 20 minutes for full heating in the independent protocols and warm the locked portafilter.' },
        { signal: 'Light coffee channels', guidance: 'Improve distribution and try a gentle programmed preinfusion before changing several LCC values.' },
      ],
    },
    {
      id: 'milk', score: 8.5, reason: 'A dedicated 600 ml steam boiler and insulated articulating wand make back-to-back milk realistic, though compact capacity and the two-hole tip reward controlled pitcher size.',
      buyerMeaning: 'A strong two-latte machine; a larger steam boiler is better for repeated large pitchers or frequent entertaining.',
      evidenceStatus: 'Official hardware with independent steam timing and comparisons',
      sourceIds: ['eliz-official', 'eliz-manual', 'eliz-kev', 'eliz-coffeeness', 'eliz-clive-compare'], deepDiveId: 'milk', title: 'Milk: compact dual-boiler speed is the point',
      intro: ['Steam is immediately available once the second boiler is ready, and espresso can run at the same time. The anti-burn multidirectional wand avoids the single-boiler wait that defines cheaper upgrades.'],
      evidence: [
        { signal: '600 ml boiler', evidence: 'Lelit specifies a separate AISI 316L steam and hot-water boiler.', decision: 'Enough for a normal household sequence, with less reserve than larger prosumer machines.' },
        { signal: 'Independent timing', evidence: 'CoffeeKev reports roughly 24–33 seconds for its milk protocol depending on steam setting.', decision: 'Begin conservatively and adjust temperature or technique rather than assuming maximum power is best.' },
        { signal: 'Direct comparison', evidence: 'Clive’s compact-machine comparison gives Silvia Pro X the steam-power edge while rating Elizabeth close behind.', decision: 'Choose Silvia for raw reserve; choose Elizabeth for its broader preinfusion and button workflow.' },
      ],
      diagnosis: [
        { signal: 'Milk finishes before texture develops', guidance: 'Lower steam temperature, use colder milk or a slightly larger suitable pitcher.' },
        { signal: 'Large bubbles appear', guidance: 'Introduce air briefly, then keep the tip submerged for a stable roll.' },
        { signal: 'Steam weakens in a group', guidance: 'Reduce pitcher volume and allow compact-boiler recovery rather than continuing with wet steam.' },
      ],
    },
    {
      id: 'workflow', score: 8.8, reason: 'Timed buttons, shot display, reserve mode, simultaneous steam and no E61 cooling flush create a calm routine, although warm-up and top-rear tank access need planning.',
      buyerMeaning: 'Well suited to two drinks before work once the machine is preheated and recipes are saved.',
      evidenceStatus: 'Official controls with independent warm-up and daily-use evidence',
      sourceIds: ['eliz-official', 'eliz-manual', 'eliz-kaffee', 'eliz-kev', 'eliz-homebarista'], deepDiveId: 'workflow', title: 'Workflow: program the routine, then keep using the scale',
      intro: ['A scheduled smart plug can start the machine ahead of use because PL92T has no built-in clock. Once warm, a shot button, live timer and simultaneous steam reduce attention without turning preparation automatic.'],
      evidence: [
        { signal: 'Readiness disagreement', evidence: 'The machine signals usable readiness early; independent work recommends about 20 minutes for stronger thermal equilibrium.', decision: 'Plan to the longer interval when consistency matters.' },
        { signal: 'Reserve mode', evidence: 'The LCC warns of low water and can preserve completion of the current operation.', decision: 'Helpful protection, not permission to ignore the 2.5 L rear tank.' },
        { signal: 'Second drink', evidence: 'Separate boilers remove the steam-to-brew transition and buttons repeat shot time.', decision: 'Dose preparation, grinder speed and compact steam reserve become the queue.' },
      ],
      diagnosis: [
        { signal: 'Cup weight drifts on the same button', guidance: 'Treat the button as a time memory, then adjust grind and verify output on a scale.' },
        { signal: 'Refilling under cabinets is awkward', guidance: 'Measure lid and tank access before purchase or choose a station where the machine can slide safely.' },
        { signal: 'Two drinks differ', guidance: 'Fully warm the portafilter and keep the same basket dry, dose and preparation between shots.' },
      ],
    },
    {
      id: 'build', score: 7.2, reason: 'Stainless casework and accessible standard-style internals are positive, while thin panels, plastic touch points and owner repair reports keep it below heavier prosumer rivals.',
      buyerMeaning: 'Capability and compactness lead; buyers paying primarily for tactile construction should compare Profitec, Rancilio or La Marzocco.',
      evidenceStatus: 'Official materials, independent inspection and owner reports; no failure rate',
      sourceIds: ['eliz-official', 'eliz-parts', 'eliz-warranty', 'eliz-kaffee', 'eliz-clive-owner', 'eliz-homebarista'], deepDiveId: 'build', title: 'Build: serviceable does not mean indestructible',
      intro: ['Lelit lists brushed stainless bodywork, brass brew boiler, stainless steam boiler and a 15.3 kg machine. Independent reviewers admire the compact use of space while criticizing sheet-metal feel, sharp edges, plastic knob or tamper and tank details.'],
      evidence: [
        { signal: 'Parts and support', evidence: 'Clive hosts a 23-page parts diagram and a current support collection for PL92T; Lelit US offers authorized service after warranty.', decision: 'Seller support can materially change the ownership experience.' },
        { signal: 'Manufacturer warranty', evidence: 'Lelit North America publishes 12 months, non-transferable, for authorized consumer purchases used in-region.', decision: 'Clive separately advertises three years on its eligible sale; read both live terms rather than combining them.' },
        { signal: 'Owner patterns', evidence: 'Pools contain many satisfied long-use reports plus pump, valve, tank and leak repairs.', decision: 'Plan maintenance and support, but do not infer a defect percentage.' },
      ],
      diagnosis: [
        { signal: 'Water appears under the machine', guidance: 'Disconnect safely, confirm tank seating and contact support; do not keep heating to locate a pressurized leak.' },
        { signal: 'A valve drips', guidance: 'Document when it occurs and use the exact PL92T diagram with an authorized technician.' },
        { signal: 'Buying used', guidance: 'Confirm generation, serial, both-boiler heating, pump, solenoid discharge, steam and complete leak behavior from cold.' },
      ],
    },
    {
      id: 'features', score: 9.0, reason: 'PL92T combines LCC temperature control, timed doses, preinfusion, auto purge, standby, cleaning program, reserve mode and switchable steam boiler in a small body.',
      buyerMeaning: 'One of the richest conventional dual-boiler control sets near $1,800, even though the new PL92T3 goes much further.',
      evidenceStatus: 'Current PL92T functions documented; PL92T3 excluded from score',
      sourceIds: ['eliz-official', 'eliz-manual', 'eliz-clive', 'eliz-kaffee', 'eliz-successor'], deepDiveId: 'features', title: 'Features: keep PL92T and PL92T3 on separate scorecards',
      intro: ['The current machine’s OLED LCC manages coffee and steam temperature, timed coffee buttons, preinfusion, automatic purge, standby, washing and steam-boiler disable. The gauge displays pump-side coffee pressure.'],
      evidence: [
        { signal: 'Useful automation', evidence: 'Timed buttons and purge settings remove repeated inputs while the owner still grinds, tamps and verifies yield.', decision: 'Good balance for a shared enthusiast household.' },
        { signal: 'No live flow control', evidence: 'PL92T does not have Pagaia or a manual profiling lever.', decision: 'Do not expect a software update to add PL92T3 hardware.' },
        { signal: 'Separate successor', evidence: 'PL92T3 adds a new heated group, silent pump, electronic Pagaia, up to five programmed extraction steps, freestyle mode and other revisions.', decision: 'Wait for confirmed US price and support if those exact features justify delay.' },
      ],
    },
    {
      id: 'value', score: 8.8, reason: 'The current $1,799.95 US price delivers true dual boilers and rare control depth, but successor uncertainty and the separate grinder remain part of the cost.',
      buyerMeaning: 'Excellent current value when PL92T already fits; poor value if buying it while secretly wanting PL92T3 profiling.',
      evidenceStatus: 'Official US price and add-to-cart status checked September 15, 2026; successor price unknown',
      sourceIds: ['eliz-us-store', 'eliz-clive', 'eliz-successor', 'eliz-kaffee', 'eliz-lance', 'eliz-clive-compare'], deepDiveId: 'value', title: 'Value: a strong live offer beside an unpriced next generation',
      intro: ['Lelit US and Clive both displayed $1,799.95 and add-to-cart controls for the established Elizabeth on the check date. Clive stated a separate three-year parts-and-labor offer, while Lelit’s manufacturer warranty is 12 months.'],
      evidence: [
        { signal: 'Current PL92T price', evidence: '$1,799.95 in live US direct and specialty listings on September 15, 2026.', decision: 'An unusually complete machine below $2,000, before grinder and water care.' },
        { signal: 'PL92T3 status', evidence: 'The global Lelit page gives specifications and 120 V codes but no confirmed US offer or price.', decision: 'Do not invent a replacement date, discount expectation or US MSRP.' },
        { signal: 'Direct rivals', evidence: 'Silvia Pro X emphasizes steam and build; Breville Dual Boiler emphasizes flexible preinfusion and convenience; Bianca adds flow control at greater cost.', decision: 'Choose the feature set and support route, not the highest score in isolation.' },
      ],
    },
  ],
  alternatives: [
    { name: 'Rancilio Silvia Pro X', reason: 'Choose it for stronger steam reserve, conventional build and simple soft infusion.', href: '/espresso-machine/rancilio-silvia-pro-x/' },
    { name: 'Breville Dual Boiler BES920XL', reason: 'Choose it for broad temperature and preinfusion control with a mature appliance workflow.', href: '/espresso-machine/breville-dual-boiler-bes920xl/' },
    { name: 'Lelit Bianca V3', reason: 'Choose it for rotary-pump plumbing and manual flow profiling.', href: '/espresso-machine/lelit-bianca-pl162t/' },
    { name: 'La Marzocco Linea Micra', reason: 'Choose it for premium fast readiness, rotary-pump quiet and stronger service positioning.', href: '/espresso-machine/la-marzocco-linea-micra/' },
  ],
  article: {
    methodology: 'I treated PL92T and PL92T3 as separate products, checked both official product pages plus the live Lelit US and Clive PL92T offers on September 15, 2026, and reconciled manuals, parts, warranty, five independent tests or comparisons and three owner pools. No US PL92T3 date or price is assumed. Coffeedant performed no physical test.',
    sections: [
      {
        id: 'orientation', eyebrow: 'Identity first', title: 'This is the available PL92T, not the new PL92T3', html: `
          <p>The most important fact in this Elizabeth review is printed on the model plate. The machine available from Lelit US and Clive for $1,799.95 on September 15, 2026 is the established Elizabeth PL92T, with PL92T-120 identifying the 120 V, 60 Hz Type B version. It uses a 300 ml brass coffee boiler, 600 ml stainless steam boiler and familiar button-led LCC system.</p>
          <p>Elizabeth3 is PL92T3. Lelit’s global page now documents it as a separate generation with a redesigned 200 ml heated coffee group, new silent pump, three-hole steam tip and electronic Pagaia flow-control system. Pagaia supports two automatic profiles, user programs with up to five extraction steps and a freestyle mode. None of that hardware belongs to the PL92T scored here.</p>
          <p>The PL92T3 page includes 120 V codes, which demonstrates an electrical configuration, not a confirmed United States launch, stock date or retail price. I found no reliable US offer to anchor those questions on the review date. That leaves a clean decision: buy PL92T because its current features and price solve today’s problem, or wait because Pagaia is central to what you want. Do not buy current stock while expecting a firmware transformation. Put the exact code on the invoice.</p>
        `,
      },
      {
        id: 'setup', eyebrow: 'First week', title: 'Set water, heat time and one simple recipe', html: `
          <p>Test source water and install the supplied treatment only if it matches the live instructions and local chemistry. A small reservoir cartridge has a finite capacity and does not make every hard water safe forever. Keep hardness records, replace treatment on schedule and avoid casual boiler descaling. Two-boiler mineral work is better prevented and, when necessary, handled under manufacturer or seller guidance.</p>
          <p>Turn on both boilers and allow about 20 minutes before judging stability. The LCC may show readiness earlier; that means the sensor target has been reached, not that every gram of metal has fully equalized under every protocol. Lock the portafilter in loosely during warm-up and warm cups with a brief water routine that follows the manual rather than excessive flushing.</p>
          <p>Start with the 14–18 g basket, a dose appropriate to its coffee, a roughly 1:2 yield and no elaborate preinfusion. Dial grind first. Then program one coffee button by time while continuing to weigh output. Once the basic recipe is repeatable, explore a short pump wetting and pause or the steam-pressure method. These are editorial starting steps, not Coffeedant taste results.</p>
        `,
      },
      {
        id: 'espresso', eyebrow: 'Coffee performance', title: 'The LCC gives recipes depth without live flow control', html: `
          <p>Preinfusion is the distinctive control. One approach runs the pump, pauses for a programmed bloom and resumes. Another uses low pressure associated with the steam system to wet the puck before full pumping. Exact menus depend on firmware and guide, so keep the manual beside any online recipe. Start simple and use preinfusion to solve a specific extraction problem rather than to add impressive numbers.</p>
          <p>PL92T has no Pagaia. It cannot execute PL92T3’s five-step electronic flow profile or freestyle lever input. A good shot on current Elizabeth does not need that feature, but a buyer fascinated by it should wait for real regional information rather than rationalize the missing hardware.</p>`,
      },
      {
        id: 'milk', eyebrow: 'Steam performance', title: 'Two morning milk drinks fit the 600 ml boiler well', html: `
          <p>The separate 600 ml AISI 316L steam and hot-water boiler is the reason Elizabeth changes life after a single-boiler machine. It can steam while the 300 ml coffee boiler extracts, eliminating temperature surfing and the cool-down wait. The multidirectional insulated wand uses a two-hole tip on the PL92T reviewed here.</p>
          <p>For the second drink, prepare its dose while finishing the first milk only if the station remains tidy. Brew and steam together, knock out, wipe, refill the pitcher and repeat. Clive’s direct compact-machine comparison gives Rancilio Silvia Pro X the advantage in raw steam power, while Elizabeth counters with richer preinfusion and programmable-button logic. A household making two flat whites may prefer the Lelit balance. A group making four large lattes may prefer the Rancilio reserve or a larger boiler machine.</p>
        `,
      },
      {
        id: 'workflow', eyebrow: 'Daily cadence', title: 'The second drink is where Elizabeth earns its counter space', html: `
          <p>Weigh a dose, distribute, tamp and press the programmed button. The display times the shot and the gauge offers a pressure check. Watch output on a scale and stop early if needed. Steam simultaneously, close the valve, wipe and purge. The automatic purge setting can clear the coffee path and adds water to the tray, so tray capacity belongs in the routine.</p>
          <p>Second drink speed is genuinely good. There is no steam-to-brew transition, and the next timed shot can start as soon as the grinder and basket are ready. Small boilers recover quickly under ordinary home use, although repeated large milk pitchers and hot-water draws can expose their capacity. Clive rates Elizabeth close to Silvia Pro X for milk but gives Rancilio the reserve edge.</p>
        `,
      },
      {
        id: 'build', eyebrow: 'Ownership', title: 'Good internal access, modest tactile polish and a short base warranty', html: `
          <p>The base manufacturer warranty in North America is 12 months, non-transferable, for authorized consumer purchases used within the region. It excludes wear, corrosion, mishandling, unauthorized parts or work, irregular power, commercial use and other listed causes. Clive advertised a separate three-year parts-and-labor benefit with its current machine. A retailer promise does not rewrite Lelit’s warranty; read eligibility, water requirements, shipping and remote-diagnosis obligations for both.</p>
          <p>Owner evidence is mixed in the useful way. Home-Barista’s long owner-experience thread contains setup discoveries, successful long use and repairs. Coffeetime owners share tuning and two-week through later impressions. Clive’s 56-review pool is largely positive about espresso, steam and value while containing specific pump, part and tank complaints. Reddit adds buying and successor anxiety. These pools explain likely chores and annoyances, not a failure percentage.</p>
          <p>Protect both boilers through water planning, daily wand care, water-only group rinsing and the manual’s detergent backflush schedule. Do not routinely descale a dual boiler without the correct instructions. If an internal leak, erratic fill or electrical symptom appears, stop heating and use qualified support.</p>`,
      },
      {
        id: 'features', eyebrow: 'Generation split', title: 'What PL92T has, and what only PL92T3 adds', html: `
          <p>Some labels require precision. The coffee buttons are programmable by time rather than a flow meter. The gauge helps diagnose pump pressure but does not control a profile. The preinfusion settings create defined low-pressure or paused phases, not a freely drawn flow curve. Tank-only supply means no line-pressure preinfusion or drain connection.</p>
          <p>PL92T3 changes the machine, not just the casing. Lelit documents a new saturated group with stainless heating element, new silent pump, Pagaia, two programmed profiles, two user programs with up to five steps, freestyle feedback, three-hole steam tip, group lighting, revised tank and wood details. Its coffee boiler is published at 200 ml versus PL92T’s 300 ml. The successor should receive its own review once price, regional availability, manual and independent tests exist.</p>
          <p>That clean separation protects both buyers. PL92T is not obsolete if timed repetition, two boilers and LCC preinfusion are enough. PL92T3 is not automatically better until its new complexity, price and service experience are independently understood.</p>`,
      },
      {
        id: 'value', eyebrow: 'Price and alternatives', title: 'Buy the current machine only for its current strengths', html: `
          <p>At $1,799.95, PL92T competes with Rancilio Silvia Pro X, Breville Dual Boiler and newer compact dual boilers, while sitting well below Lelit Bianca and Linea Micra. Add an espresso grinder, scale, correct water and ordinary care products to every comparison.</p>
          <p>The unpriced PL92T3 is not a valid numeric comparison yet. It may arrive above current Elizabeth, and PL92T stock may change, but neither result is established. The responsible decision uses today’s $1,799.95 offer and today’s PL92T features.</p>
          ${comparisonTablesHtml('Lelit Elizabeth PL92T', [
            { name: 'Elizabeth PL92T', href: '/espresso-machine/lelit-elizabeth/', quickDecision: 'Choose for compact control depth and two-drink milk cadence.', priceClass: '$1,799.95 US check', dimensions: '32 W × 38 D × 38 H cm official', heating: '300 ml plus 600 ml dual boiler; plan about 20 minutes', coffeeSetup: '58 mm, PID, timed buttons and two preinfusion approaches', milkWorkflow: 'Simultaneous two-hole manual steam', bestFor: 'Feature-focused couple or small household' },
            { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', quickDecision: 'Choose for stronger steam and conventional build.', priceClass: 'Similar compact dual-boiler class', dimensions: 'Narrow, deep traditional steel case', heating: 'Dual boiler with soft infusion', coffeeSetup: '58 mm, PID, manual shot stop', milkWorkflow: 'Strong simultaneous manual steam', bestFor: 'Build and steam over programmable depth' },
            { name: 'Breville Dual Boiler BES920XL', href: '/espresso-machine/breville-dual-boiler-bes920xl/', quickDecision: 'Choose for broad convenience and temperature control.', priceClass: 'Similar or lower depending on live promotion', dimensions: 'Wider appliance body with front-fill option', heating: 'Dual boiler with active group heating', coffeeSetup: '58 mm, programmable preinfusion and volumetric controls', milkWorkflow: 'Simultaneous manual steam', bestFor: 'Workflow features over Italian styling' },
            { name: 'Lelit Bianca V3', href: '/espresso-machine/lelit-bianca-pl162t/', quickDecision: 'Choose for plumbing, rotary pump and manual flow.', priceClass: 'Higher prosumer tier', dimensions: 'Larger E61 body with movable reservoir', heating: 'E61 dual boiler, longer warm-up ritual', coffeeSetup: '58 mm manual paddle profiling', milkWorkflow: 'Larger dual-boiler steam system', bestFor: 'Hands-on pressure and flow exploration' },
          ], 'Elizabeth3 PL92T3 is excluded because a confirmed US price and date were unavailable. Compare exact electrical versions, seller coverage and complete grinder-equipped station costs.')}
        `,
      },
      {
        id: 'recommendations', eyebrow: 'Four routes', title: 'Choose control, construction or premium repetition', html: `
          ${recommendationCardsHtml([
            { kicker: 'Best current control value', title: 'Lelit Elizabeth PL92T', text: 'For two boilers, timed doses and advanced preinfusion in a compact current package.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Review the PL92T decision', featured: true },
            { kicker: 'Steam and traditional build', title: 'Rancilio Silvia Pro X', text: 'For robust manual controls and greater steam emphasis with simpler infusion.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read the Silvia Pro X review' },
            { kicker: 'Convenience controls', title: 'Breville Dual Boiler', text: 'For an established dual-boiler workflow with flexible preinfusion and appliance ergonomics.', href: '/espresso-machine/breville-dual-boiler-bes920xl/', linkLabel: 'Read the Breville Dual Boiler review' },
            { kicker: 'Manual flow and plumbing', title: 'Lelit Bianca V3', text: 'For a rotary-pump E61 platform and hands-on paddle profiling at a higher price.', href: '/espresso-machine/lelit-bianca-pl162t/', linkLabel: 'Read the Bianca review' },
          ])}
        `,
      },
      {
        id: 'faq', eyebrow: 'Quick reference', title: 'Lelit Elizabeth PL92T FAQ', html: faqHtml([
          { question: 'Is Lelit Elizabeth discontinued?', answer: 'The PL92T was still available with add-to-cart controls from Lelit US and Clive on September 15, 2026. Lelit also lists the separate Elizabeth3 PL92T3. Regional stock can change, so “successor announced” is more accurate than assuming current PL92T is unavailable.' },
          { question: 'Will PL92T get Pagaia?', answer: 'No hardware retrofit or update was documented. Pagaia belongs to the separate PL92T3 generation with a new pump, group and control system.' },
          { question: 'Does PL92T stop shots automatically?', answer: 'Its buttons stop after programmed brew time. That is not measurement by volume or weight, so verify output on a scale when coffee or grind changes.' },
          { question: 'What is the real warm-up time?', answer: 'The display indicates usable readiness earlier, while two independent reviewers point to about 20 minutes for stronger thermal equilibrium. Use the longer interval for comparative dialing.' },
          { question: 'Can Elizabeth make back-to-back lattes?', answer: 'Yes. Separate boilers support simultaneous espresso and steam. The 600 ml steam boiler fits a normal home sequence, although larger machines retain more reserve for repeated large pitchers.' },
          { question: 'What warranty applies in the US?', answer: 'Lelit publishes a 12-month non-transferable North American warranty for eligible authorized consumer purchases. Clive separately advertised three years for its sale. Read both sets of current terms.' },
          { question: 'What remains unknown?', answer: 'PL92T3’s US sale date, price and mature independent evidence were unconfirmed. Neither PL92T nor PL92T3 has public population-level reliability data.' },
        ]),
      },
    ],
    sources: [
      { id: 'eliz-official', label: 'Lelit Elizabeth PL92T official product page', href: 'https://www.lelit.com/product/elizabeth-pl92t/', note: 'Current PL92T functions, variants, dimensions, boilers, accessories and 120 V code.' },
      { id: 'eliz-us-store', label: 'Lelit US Elizabeth store page', href: 'https://www.lelit.com/en-us/product/elizabeth-pesel01', note: '$1,799.95 and add-to-cart state for current Elizabeth checked September 15, 2026.' },
      { id: 'eliz-manual', label: 'Lelit Elizabeth PL92T user manual', href: 'https://support.clivecoffee.com/en/articles/16426790-lelit-elizabeth-user-manual', note: 'Current retailer-hosted manual and exact operating, LCC, safety and care guidance.' },
      { id: 'eliz-warranty', label: 'Lelit North America warranty', href: 'https://www.lelit.com/en-us/support/warranty', note: 'Current 12-month, non-transferable coverage, authorized-purchase rules, claim process and exclusions.' },
      { id: 'eliz-parts', label: 'Lelit Elizabeth V2 parts diagram', href: 'https://links.imagerelay.com/cdn/2615/ql/bbd70e1df4f741759cdf53983bc81dee/Elizabeth-V02-Part-Diagram.pdf', note: 'Retailer-hosted 23-page assembly and parts reference; verify exact revision fit.' },
      { id: 'eliz-clive', label: 'Clive Coffee: Lelit Elizabeth product page', href: 'https://clivecoffee.com/products/lelit-elizabeth-dual-boiler-espresso-machine', note: '$1,799.95, current stock controls, specifications, support and separate three-year coverage statement checked September 15, 2026.' },
      { id: 'eliz-successor', label: 'Lelit Elizabeth3 PL92T3 official product page', href: 'https://www.lelit.com/product/elizabeth3-pl92t3/', note: 'Separate-generation identity, Pagaia modes, revised hardware and electrical codes; no confirmed US price/date used.' },
      { id: 'eliz-kaffee', label: 'Kaffeemacher: Lelit Elizabeth PL92T measured test', href: 'https://kaffeemacher.de/en/blogs/kaffeewissen/lelit-elizabeth', note: 'Purchased-machine heat, energy, temperature, preinfusion, build and workflow analysis, updated with successor context.' },
      { id: 'eliz-lance', label: 'Lance Hedrick: Dual Boiler? Look no Further', href: 'https://www.youtube.com/watch?v=qw1MtYtwIrs', note: 'Detailed independent PL92T review and workflow demonstration; selected video.' },
      { id: 'eliz-kev', label: 'CoffeeKev: Lelit Elizabeth review', href: 'https://coffeeblog.co.uk/lelit-elizabeth-review/', note: 'Independent 2026 hands-on measurements, controls, steam and Breville Dual Boiler comparison.' },
      { id: 'eliz-coffeeness', label: 'Coffeeness: Lelit Elizabeth review', href: 'https://www.coffeeness.de/en/lelit-elizabeth-review/', note: 'Independent review of control depth, compact boilers, milk and daily use.' },
      { id: 'eliz-clive-compare', label: 'Clive Coffee compact espresso machine comparison', href: 'https://clivecoffee.com/blogs/learn/compact-espresso-machine-comparison', note: 'Direct retailer test comparing Elizabeth, Silvia Pro X and peers, including steam and maintenance.' },
      { id: 'eliz-silvia-video', label: '1st-line Equipment: Elizabeth versus Silvia Pro', href: 'https://www.youtube.com/watch?v=Und2zZdBG8o', note: 'Direct specialist video comparison of exact dual-boiler workflows; retailer perspective noted.' },
      { id: 'eliz-homebarista', label: 'Home-Barista: Lelit Elizabeth owner experience', href: 'https://www.home-barista.com/espresso-machines/lelit-elizabeth-owner-experience-t58290.html', note: 'Long-running technical owner pool with setup, use, maintenance and repair reports.' },
      { id: 'eliz-coffeetime', label: 'Coffeetime: Lelit Elizabeth two-week experience', href: 'https://coffeetime.freeflarum.com/d/357-lelit-elizabeth-2-week-experience', note: 'Separate specialist forum owner pool; initial and follow-up observations are anecdotal.' },
      { id: 'eliz-clive-owner', label: 'Clive Coffee Elizabeth owner review pool', href: 'https://clivecoffee.com/products/lelit-elizabeth-dual-boiler-espresso-machine#reviews', note: '56-review retailer pool on the check date, including long-use praise and specific repairs; self-selected.' },
      { id: 'eliz-reddit', label: 'r/espresso Elizabeth buying and successor discussion', href: 'https://www.reddit.com/r/espresso/comments/1l1ssqf/is_the_lelit_elizabeth_the_right_choice_for_me/', note: 'Broader community pool on alternatives and ownership priorities; not a controlled test.' },
    ],
    finalTitle: 'Final verdict: PL92T is still excellent, if it is the generation you want',
    finalVerdict: [
      'The established Elizabeth remains one of the strongest control packages around $1,800: two boilers, useful LCC automation, two preinfusion routes, timed buttons, a shot display and genuinely capable steam. Its casework and touch points are less luxurious than the specification list, but service documents and strong independent evidence make the value argument credible.',
      'The generation choice must be explicit. PL92T3 adds hardware and Pagaia that PL92T will not gain, while its US date and price were unconfirmed. Buy today’s PL92T for today’s features, current availability and seller support. Wait if programmable multi-step flow is the reason you are shopping. Either path is sensible; pretending they are the same Elizabeth is not.',
    ],
  },
  video: {
    id: 'qw1MtYtwIrs', title: 'Dual Boiler? Look no Further: Lelit Elizabeth Review', creator: 'Lance Hedrick', published: '2025-05-19',
    note: 'A detailed independent PL92T review covering extraction controls, steaming and value. Results and cup judgments belong to the creator’s setup, not a Coffeedant test.',
  },
});

export const remainingReviews = [
  nineBaristaMk2Review,
  gaggiaBreraReview,
  lineaMicraReview,
  lelitElizabethReview,
];
