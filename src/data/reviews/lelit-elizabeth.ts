import { buildResearchReview, comparisonTablesHtml, faqHtml, internalHref, recommendationCardsHtml } from '../batch-review-builder';

const ref = (...ids: string[]) => ids.map(id => `<a href="#${id}">[source]</a>`).join(' ');
const link = (path: string, name: string) => `<a href="${internalHref(path)}">${name}</a>`;

export const lelitElizabethReview = buildResearchReview({
  slug: '/espresso-machine/lelit-elizabeth/', productId: 'CD-EM-000001',
  brand: 'Lelit', model: 'Elizabeth PL92T', sku: 'PL92T-120',
  category: 'Dual-boiler semi-automatic espresso machine', brandPath: '/lelit/',
  title: 'Lelit Elizabeth review: dual boilers, a longer warm-up',
  description: 'Lelit Elizabeth PL92T review: warm-up evidence, milk workflow, timed shots, V3/V4 listing checks and alternatives. US price rechecked. Research-led, not hands-on.',
  verdictLabel: 'For a planned espresso-and-milk routine',
  // Keep this first sentence aligned with the already translated Finder card.
  verdict: 'I would choose the current Elizabeth PL92T for a household making two or three espresso and milk drinks that wants dual boilers, timed shot buttons, programmable preinfusion and onboard temperature controls without an E61 footprint. The main compromise is first-cup readiness: independent reviewers recommend a longer preheat than the early ready signal suggests. Choose it for control once warm; compare another machine if a spontaneous first drink, plumbing or automatic beverage weighing matters more. Lelit US and Clive listed it at $1,799.95 on October 30, 2026; confirm the exact model and offer before buying.',
  assessment: 'A capable compact dual boiler for an owner willing to preheat, weigh the cup and learn the LCC. The controls are the attraction; fast cold starts and automatic output measurement are not its strengths.',
  image: 'images/products/lelit-elizabeth.jpg',
  imageAlt: 'Lelit Elizabeth PL92T dual-boiler espresso machine in brushed stainless steel',
  published: '2025-11-03', updated: '2026-10-30',
  authorNote: 'I checked the current manufacturer documents and US listings, compared independent test protocols, and separated useful owner questions from unsupported reliability claims. This is a research-led assessment. I have not physically tested the Elizabeth; the measurements below belong to their named authors.',
  basisDisclosure: 'This review evaluates the established Elizabeth PL92T, with US buying scope tied to PL92T-120. Ratings are editorial judgments from documented features, attributed independent evaluations and owner context. Coffeedant has not measured temperature, pressure, steaming, sound, taste or durability. Third-party results are not measurements of a Coffeedant sample.',
  price: {
    label: 'Lelit US listing, checked Oct 30', msrp: '$1,799.95', numeric: '1799.95', currency: 'USD',
    typical: 'Lelit US and Clive offer snapshot; grinder and any extra coverage are separate. Confirm the live listing.', checked: 'October 30, 2026',
  },
  links: [
    { label: 'Check Lelit US price', href: 'https://www.lelit.com/en-us/product/elizabeth-pesel01', note: 'PL92T US offer checked October 30, 2026; verify the shipped model', primary: true },
    { label: 'Check Clive Coffee price', href: 'https://clivecoffee.com/products/lelit-elizabeth-dual-boiler-espresso-machine', note: 'Listing showed stock and $1,799.95 on October 30; read seller coverage terms' },
    { label: 'Check Amazon availability', href: 'https://amzn.to/4j2hL7C', note: 'Affiliate link; verify exact model, seller and warranty', affiliate: true },
  ],
  facts: [
    { label: 'Reviewed identity', value: 'Elizabeth PL92T; US electrical variant PL92T-120' },
    { label: 'Shot stopping', value: 'Programmable time; weigh beverage output separately' },
    { label: 'Coffee boiler', value: '300 ml brass, manufacturer specification' },
    { label: 'Steam/hot-water boiler', value: '600 ml AISI 316L stainless steel' },
    { label: 'Water supply', value: '2.5 L reservoir; no mains-water connection' },
    { label: 'Basket system', value: 'LELIT58; current manufacturer lists IMS baskets' },
    { label: 'Manufacturer dimensions', value: '32 W × 38 D × 38 H cm; confirm counter and tank clearance' },
    { label: 'Manufacturer weight', value: '15.3 kg; older documents and seller tables differ' },
    { label: 'US electrical identity', value: 'PL92T-120: 120 V, 60 Hz, Type B' },
    { label: 'Manufacturer warranty', value: '12 months in North America; non-transferable and subject to terms' },
  ],
  quickAnswers: [
    { question: 'Who is Elizabeth best for?', answer: 'An owner making espresso and a few milk drinks who values programmable preinfusion and separate boilers, and can plan preheating. It still needs an espresso grinder, puck preparation and a scale.' },
    { question: 'How long should I preheat?', answer: 'Plan around 20–30 minutes when repeatable espresso is the priority, based on independent PL92T observations. An early ready indication is not the same as a fully warmed group and portafilter; those tests do not establish every US unit’s timing.' },
    { question: 'Does it brew and steam together?', answer: 'Yes. Separate coffee and steam boilers allow overlap. That removes the single-boiler temperature transition, but does not establish unlimited milk capacity or an automatic two-drink service time.' },
    { question: 'Are the shot buttons volumetric?', answer: 'No. They stop after a saved time. The resulting beverage mass can change with grind, dose and coffee, so weigh output rather than treating the button as a guaranteed number of grams.' },
    { question: 'Which version is reviewed?', answer: 'The established PL92T, with US electrical code PL92T-120. Retail V2/V3/V4 labels need checking against the actual machine; the separate Pagaia-equipped Elizabeth3 is PL92T3.' },
    { question: 'What is the verified US price?', answer: 'Lelit US and Clive displayed $1,799.95 on October 30, 2026. That is a dated offer check, not a permanent price, a guaranteed shipment date or an Amazon price verification.' },
  ],
  bestFor: [
    'A couple making back-to-back espresso and milk drinks in a compact kitchen',
    'A hands-on owner who wants two programmable preinfusion routines',
    'A compact station with room for a separate espresso grinder and top tank access',
  ],
  avoidIf: [
    'You want a spontaneous first espresso with little advance heating',
    'You need plumbing, automatic beverage weighing or repeated large milk pitchers',
    'You are buying primarily for heavy casework or dislike menu-based setup',
  ],
  pros: [
    'Separate boilers permit brewing and steaming together',
    'Useful temperature, preinfusion and timed-dose controls',
    'Conventional 58 mm workflow with documented care and parts support',
    'US manufacturer and dealer offers were verifiable at the review check',
  ],
  cons: [
    'Independent evidence favors a meaningful preheat before consistent espresso',
    'Timed buttons do not measure beverage output',
    'Compact steam reserve and top tank access need planning',
    'Retail revision names and conflicting specification tables need checking',
  ],
  dimensions: [
    {
      id: 'espresso', score: 8.8,
      reason: 'Adjustable temperature and preinfusion; weigh output alongside timed stopping.',
      buyerMeaning: 'Repeat the preparation before experimenting with controls.',
      evidenceStatus: 'Documented controls and attributed evaluation',
      sourceIds: ['eliz-official', 'eliz-extended', 'eliz-kaffee'], deepDiveId: 'espresso',
      title: 'Espresso: control is useful when the starting conditions repeat',
      intro: ['The score evaluates control and practical adjustment, with the research basis disclosed above.'],
      evidence: [
        { signal: 'Temperature setting', evidence: 'The LCC provides a brew-temperature setting.', decision: 'Establish consistent preheat and grind before adjusting it.' },
        { signal: 'Preinfusion options', evidence: 'The 2021 extended guide distinguishes steam-assisted and pump/pause behavior.', decision: 'Match the guide to the software revision before applying a setting.' },
        { signal: 'Shot stopping', evidence: 'The manufacturer describes programmable brewing time.', decision: 'Check the beverage on a scale as beans or grind change.' },
      ],
    },
    {
      id: 'milk', score: 8.5,
      reason: 'Separate steam circuit; useful overlap for ordinary household drink sequences.',
      buyerMeaning: 'Compare repeated-pitcher recovery if entertaining is the priority.',
      evidenceStatus: 'Official architecture and attributed pitcher benchmark',
      sourceIds: ['eliz-official', 'eliz-kev', 'eliz-clive-compare'], deepDiveId: 'milk',
      title: 'Milk: a separate boiler, with a household-sized brief',
      intro: ['Capacity, single-pitcher speed and repeated-pitcher recovery answer different questions.'],
      evidence: [
        { signal: 'Brew/steam overlap', evidence: 'The two boilers support simultaneous operation.', decision: 'You can overlap tasks once preparation and wand control are comfortable.' },
        { signal: 'Pitcher benchmark', evidence: 'CoffeeKev’s single-pitcher result is attributed in the Espresso evidence table.', decision: 'Treat the reported time as that author’s result, not a specification.' },
        { signal: 'Recovery limit', evidence: 'There is no Coffeedant repeated-pitcher recovery test.', decision: 'For frequent entertaining, compare larger steam reserves and obtain a suitable demonstration.' },
      ],
    },
    {
      id: 'workflow', score: 8.8,
      reason: 'Saved routines reduce repeated inputs once the machine is ready.',
      buyerMeaning: 'Include cold-start convenience in the purchase decision.',
      evidenceStatus: 'Official controls and independent readiness observations',
      sourceIds: ['eliz-extended', 'eliz-kaffee', 'eliz-kev'], deepDiveId: 'workflow',
      title: 'Workflow: count the cold start as part of the routine',
      intro: ['Counter fit includes the grinder, cups and working space above the reservoir.'],
      evidence: [
        { signal: 'Cold start', evidence: 'Two independent authors distinguish early readiness from longer thermal preparation.', decision: 'Plan heating before the first dose instead of judging only the display.' },
        { signal: 'Saved routines', evidence: 'The two brew buttons can store time and preinfusion settings.', decision: 'Keep one known recipe before experimenting with the other.' },
        { signal: 'Reservoir access', evidence: 'The machine uses a removable reservoir accessed from above.', decision: 'Measure working clearance, not just the cabinet opening around the case.' },
      ],
    },
    {
      id: 'build', score: 7.2,
      reason: 'Documented service route; fit-and-finish preferences and condition still need checking.',
      buyerMeaning: 'Include support and inspection in the purchase.',
      evidenceStatus: 'Support documents and anecdotal owner context',
      sourceIds: ['eliz-official', 'eliz-parts', 'eliz-warranty', 'eliz-clive-warranty', 'eliz-homebarista'], deepDiveId: 'build',
      title: 'Ownership: support and maintenance matter more than an anecdote count',
      intro: ['Owner anecdotes supply inspection questions, rather than a representative failure rate.'],
      evidence: [
        { signal: 'Service route', evidence: 'A parts diagram and dealer support collection are available.', decision: 'Ask who will diagnose and repair the exact revision locally.' },
        { signal: 'Coverage', evidence: 'Manufacturer and seller coverage are separate contracts.', decision: 'Read transferability, water exclusions and shipping obligations before comparing headline years.' },
        { signal: 'Used condition', evidence: 'A used unit’s history is not established by its exterior or version label.', decision: 'Request records and a safe seller demonstration before paying.' },
      ],
    },
    {
      id: 'features', score: 9.0,
      reason: 'Useful LCC temperature, timing, preinfusion and housekeeping controls.',
      buyerMeaning: 'Verify the applicable manual on older stock.',
      evidenceStatus: 'Current PL92T specification and revision-qualified manufacturer guides',
      sourceIds: ['eliz-official', 'eliz-extended', 'eliz-manual', 'eliz-successor'], deepDiveId: 'features',
      title: 'Features: match the control names to the actual machine',
      intro: ['Use the plate, supplied manual and documented software to identify capabilities.'],
      evidence: [
        { signal: 'Established machine', evidence: 'PL92T is the subject of this review and score.', decision: 'Keep its controls and supplied accessories attached to that identity.' },
        { signal: 'Guide differences', evidence: 'The older user manual and later extended guide describe steam-off preinfusion differently.', decision: 'Confirm revision compatibility instead of copying an advanced sequence blindly.' },
        { signal: 'Separate successor', evidence: 'The separate PL92T3 product has Pagaia and changed hardware.', decision: 'Do not assume a retail “V3” label means that machine.' },
      ],
    },
    {
      id: 'value', score: 8.8,
      reason: 'Useful controls at the dated offer, with grinder and ownership costs extra.',
      buyerMeaning: 'Buy the capabilities your household will use.',
      evidenceStatus: 'US offers rechecked October 30, 2026; rival features compared without invented prices',
      sourceIds: ['eliz-us-store', 'eliz-clive', 'eliz-move', 'eliz-silvia', 'eliz-silvia-spec', 'eliz-bes920', 'eliz-marax'], deepDiveId: 'value',
      title: 'Value: compare the complete station and the actual alternatives',
      intro: ['Compare complete stations with exact models and current seller terms.'],
      evidence: [
        { signal: 'Dated offer', evidence: 'The manufacturer and named US dealer listed the same price at this check.', decision: 'Verify the basket, voltage and coverage on the particular offer.' },
        { signal: 'Complete cost', evidence: 'A separate espresso grinder and ordinary ownership supplies are needed.', decision: 'Compare a grinder-equipped station rather than the machine price alone.' },
        { signal: 'Alternative controls', evidence: 'The linked manufacturers document different heating and dosing approaches.', decision: 'Choose the control you will use instead of adding features to a shopping list.' },
      ],
    },
  ],
  alternatives: [
    { name: 'Profitec MOVE', href: '/espresso-machine/profitec-move/', reason: 'Compare scheduling, Fast Heat-Up and the different compact dual-boiler layout.' },
    { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', reason: 'Compare reduced-pressure soft infusion and a larger nominal steam boiler.' },
    { name: 'Breville Dual Boiler BES920XL', href: '/espresso-machine/breville-dual-boiler-bes920xl/', reason: 'Compare its selectable time-based or volumetric shot stopping.' },
    { name: 'Lelit MaraX PL62X', href: '/espresso-machine/lelit-mara-x/', reason: 'Compare an E61 heat-exchanger workflow rather than another independently controlled dual boiler.' },
  ],
  article: {
    methodology: 'This October 30, 2026 update rechecked manufacturer documents, US offers, warranty terms and exact-model comparisons. Independent measurements remain attributed to their authors and protocols; owner anecdotes inform inspection questions. The older manual and later extended guide are distinguished. Coffeedant has not physically tested the machine or collected new measurements; existing editorial scores are retained. Standardized V4 specifications, a US successor offer, representative failure rates and repeated-pitcher recovery remain unverified.',
    sections: [
      {
        id: 'orientation', eyebrow: 'The buying decision', title: 'Buy it for control after warm-up',
        html: `<p>The Elizabeth is most convincing when the household’s routine already has room for preheating. A separate steam circuit means you can make espresso and milk without the heating-and-cooling transition of a single boiler. Two buttons can retain different timed routines. A scale and a capable grinder still determine whether those routines repeat in the cup.</p>
          <p>That distinction helps with a common shopping mistake: comparing machines only after they are hot. A station used at a predictable breakfast time faces a different problem from one expected to produce an unplanned afternoon espresso. Decide which problem you actually have before paying for more controls.</p>
          <div class="review-note"><strong>Scope and price check:</strong> this is the established PL92T, with US buying advice tied to PL92T-120. Lelit US and Clive displayed $1,799.95 on October 30, 2026; Clive also showed stock. An active listing establishes an offer at that check, not continued factory production. ${ref('eliz-us-store', 'eliz-clive')}</div>
          <p>The comparisons below turn those priorities into specific alternatives, with model and evidence limits kept explicit.</p>`,
      },
      {
        id: 'setup', eyebrow: 'Before the first dose', title: 'Check the box, the water and the working clearance',
        html: `<p>Use the current manufacturer specification as a starting checklist, then ask the seller what the shipped unit contains. The manufacturer lists IMS 9–11 g and 14–18 g baskets; Clive’s table still describes a 7 g single basket. This disagreement is a reason to confirm the box, not to combine both lists into a universal bundle. A basket’s nominal range is also not an instruction to force that dose into every coffee.</p>
          <p>Measure the complete working station. The current manufacturer gives 32 × 38 × 38 cm and 15.3 kg; older documents and seller tables publish smaller or lighter figures. Do not design a close-fitting counter recess around the most convenient number. Leave room for the portafilter handle, a grinder, cups and the top reservoir opening, and ask the seller to confirm dimensions if the fit is tight. ${ref('eliz-spec-sheet', 'eliz-manual', 'eliz-clive')}</p>
          <p>Check source water before treating the supplied cartridge as an answer. Follow the applicable manufacturer water and care instructions, record treatment changes, and keep purchase and service records. A cartridge’s stated capacity cannot establish a replacement interval for every supply. Water management matters to warranty eligibility as well as scale buildup.</p>
          <p>Begin with one basket, one coffee and a straightforward weighed recipe. A roughly 1:2 dose-to-beverage ratio can be a starting experiment, not a Coffeedant taste recommendation. Adjust grind before changing several advanced settings, and record whether the displayed time includes the preinfusion portion. Keep a known routine on one button while exploring the other.</p>
          <p>Identify the applicable manual before changing advanced menus. Photograph original settings and seek seller guidance if the instructions differ from the actual screen.</p>`,
      },
      {
        id: 'espresso', eyebrow: 'Evidence before settings', title: 'Separate the ready signal from a repeatable first espresso',
        html: `<p>An early boiler indication does not establish that the group, portafilter and the next extraction share a repeatable temperature. Kaffeemacher’s PL92T evaluation recommends at least about 20 minutes for its thermal protocol; CoffeeKev’s comparison reports stable preparation around 20–30 minutes. Their electrical variants and conditions do not establish an exact PL92T-120 timer. The practical recommendation is to allow a deliberate preheat and keep the starting routine consistent. ${ref('eliz-kaffee', 'eliz-kev')}</p>
          <div class="review-table-wrap" role="region" aria-label="Independent Elizabeth measurements and their limits" tabindex="0"><table class="review-table"><caption>What the published tests can actually tell a buyer</caption><thead><tr><th scope="col">Source and question</th><th scope="col">Reported observation</th><th scope="col">Limit and buying meaning</th></tr></thead><tbody>
            <tr><th scope="row">Kaffeemacher: thermal preparation</th><td>Its non-Pagaia PL92T needed a longer preheat than the early indication; the article favors at least 20 minutes.</td><td>Sample and protocol dependent. Its temperature adjustment is not a universal offset to copy.</td></tr>
            <tr><th scope="row">CoffeeKev: one pitcher</th><td>170 ml to 60°C in 24–25 seconds at maximum steam setting, versus 25–27 seconds for its Sage comparison.</td><td>Starting milk temperature, repetitions and uncertainty are not supplied. This does not establish general superiority or repeated-pitcher recovery.</td></tr>
            <tr><th scope="row">Kaffeemacher: steam-off energy</th><td>Its lower-energy run lasted 15 minutes; the article says the machine was not fully warmed.</td><td>Do not turn that run into a complete ready-to-drink energy comparison or an annual savings promise.</td></tr>
          </tbody></table></div>
          <p>For actual dialing-in, separate the variables you can control from the outcomes you are trying to explain. Repeat dose, beverage mass and preparation before attributing a different cup to temperature or preinfusion. Change one setting at a time. A longer displayed shot after adding a pause is not directly comparable with a continuous extraction measured from a different starting point.</p>
          <p>The LCC’s programmed time is a convenience once a recipe is established. If grind or bean condition changes, the same saved time can produce a different yield. Check the scale and taste before saving a new duration. The pressure gauge offers context; a preferred needle position by itself does not prove even extraction.</p>
          <p>This review does not assign a taste result to an imagined Coffeedant session. The case for the controls is that they let an owner make a documented, repeatable adjustment. Whether that adjustment helps a particular coffee still needs to be established at the owner’s station.</p>`,
      },
      {
        id: 'milk', eyebrow: 'A few drinks, not a throughput claim', title: 'Plan the milk order around preparation and recovery',
        html: `<p>Separate boilers remove a temperature transition; they do not dose coffee, organize pitchers or clean the wand. For a normal two-person order, prepare cups and the next dose before starting. Brew and steam consecutively while learning, then overlap them when stopping both tasks feels controlled.</p>
          <p>The small-pitcher benchmark in the evidence table is useful because it gives a defined amount and target temperature. It still does not tell us what happens after several large pitchers, or how quickly the steam circuit recovers between them. A short test and a steam-boiler capacity are different forms of evidence.</p>
          <p>Choose a pitcher and milk quantity that let you learn the wand’s response. Wipe and purge as the applicable manual directs. If a sequence slows, allow recovery rather than compensating by stretching the same milk repeatedly. For entertaining, ask a dealer to demonstrate the size and number of drinks you expect; specify the order rather than asking whether the machine has “good steam.”</p>
          <p>Clive’s compact-machine comparison offers useful household context, but it is retailer evidence and mixes Silvia Pro and Pro X naming. It does not provide a controlled repeated-pitcher recovery protocol. The more defensible comparison is the documented architecture and a demonstration matched to your routine. ${ref('eliz-clive-compare')}</p>
          <p>For larger milk orders, compare recovery and service support alongside counter fit.</p>`,
      },
      {
        id: 'workflow', eyebrow: 'Make the routine predictable', title: 'A two-person morning, including the cold start',
        html: `<ol><li><strong>Before the first dose:</strong> check water and tray capacity, preheat with the portafilter fitted, and set out the cups and scale.</li><li><strong>First drink:</strong> dry the basket, prepare the puck, run the saved routine and watch beverage mass. The button remembers a time, not the coffee’s changing resistance.</li><li><strong>Second drink:</strong> clear and dry the basket, prepare the next dose and repeat. Overlap steaming only when the order remains manageable.</li><li><strong>Finish:</strong> follow the group-cleaning instructions, clean the wand promptly and empty rinse water before carrying the tray.</li></ol>
          <p>A planned preheat can make first-cup readiness less disruptive, but scheduling hardware is part of a safe installation, not a universal accessory recommendation. Follow the machine and switching device instructions. If effortless scheduled readiness is central to the purchase, compare a machine with that function built in.</p>
          <p>Tank access deserves a physical check. An owner who must slide a hot machine forward at every refill has a different daily experience from someone with open space above it. Include a safe route for refilling and cleaning when planning the counter. A published case dimension does not capture that movement.</p>
          <p>If the first drink differs from later ones, record the preheat, flush and idle sequence before changing several settings. That record also helps support diagnose the problem.</p>`,
      },
      {
        id: 'build', eyebrow: 'Support and used buying', title: 'Inspect the ownership history, not just the stainless case',
        html: `<p>A parts diagram is a useful service reference, but it does not establish that a part is locally stocked, that labor is inexpensive or that every revision uses the same component. Ask who supports the exact serial and electrical version. A nearby authorized service route can matter more than a small difference in headline specifications. ${ref('eliz-parts', 'eliz-warranty')}</p>
          <h3>Buying a used Elizabeth</h3><p>Start with the model plate, purchase record and applicable manual. Ask for maintenance and repair records, the water treatment used, and a safe demonstration from cold by the seller or a qualified technician. Confirm that both heating circuits, the pump, steam controls and normal discharge behavior operate as documented. Do not infer a healthy steam circuit from a single espresso photograph.</p>
          <ul><li>Confirm voltage and plug suitability for the intended installation.</li><li>Check which baskets, portafilter, reservoir parts and care accessories are actually included.</li><li>Ask about leaks and repairs, including what parts were replaced and by whom.</li><li>Inspect accessible external areas while cool; leave internal electrical and pressurized work to qualified support.</li><li>Obtain a written return or inspection agreement where appropriate, and budget for a professional assessment when history is incomplete.</li></ul>
          <p>Do not price a used unit around an assumed easy pump or valve fix. A visible symptom can have more than one cause, and a repair estimate needs the actual machine. Nor should the absence of a warranty be treated as evidence that failure is inevitable. It changes who carries the uncertainty.</p>
          <h3>Manufacturer coverage and dealer coverage are separate</h3><p>Lelit’s North American manufacturer warranty is 12 months and non-transferable, subject to eligibility and exclusions. Clive separately advertises three years of parts and labor for its eligible sale. Its policy normally begins with remote troubleshooting and can leave inbound shipping with the customer after 30 days. Keep those obligations separate rather than adding years together. ${ref('eliz-clive', 'eliz-clive-warranty')}</p>
          <p>Owner discussions help identify questions about tank access, controls, leaks and repairs. They are self-selected and cannot establish a failure percentage. A long thread can contain both successful ownership and difficult repairs without telling us which outcome is typical. Use it as an inspection checklist, not a reliability league table. ${ref('eliz-homebarista', 'eliz-coffeetime')}</p>`,
      },
      {
        id: 'features', eyebrow: 'Version and manual checks', title: 'V2, V3, V4 and Elizabeth3: identify the machine before the menu',
        html: `<p>Version searches are understandable because “V3” and “Elizabeth3” look interchangeable. The manufacturer documents two distinct product codes here: the established <strong>PL92T</strong> and the Pagaia-equipped <strong>PL92T3</strong>. The sources checked for this review do not establish a standardized “V4” specification that can safely be attached to every retail listing. Ask a seller what its label means, then check the plate and manual. ${ref('eliz-official', 'eliz-successor')}</p>
          <div class="review-note"><strong>The separate successor:</strong> Elizabeth3 PL92T3 has a changed heated group, electronic Pagaia flow control and different hardware. A Netherlands manufacturer listing had active purchase controls at this check. That is not a verified US offer. Its functions are not included in this review’s PL92T rating. ${ref('eliz-successor', 'eliz-successor-nl')}</div>
          <h3>Steam-assisted and bloom preinfusion depend on the guide</h3><p>The manufacturer’s 2021 extended guide describes steam-assisted wetting and pump/pause bloom behavior, with BLS and BLP settings governing their pump phases. The steam-boiler state and related controls affect the available mode. Its example timings illustrate operation; they are not a tested recipe to copy for every roast. ${ref('eliz-extended')}</p>
          <p>The older Clive-hosted user manual instead says preinfusion is unavailable when the steam boiler is disabled. That difference makes software and manual compatibility a real used-buying question. It is not evidence that a particular seller’s “V2” or “V3” label guarantees every later function. Ask for the guide applicable to the actual unit before changing advanced values. ${ref('eliz-manual')}</p>
          <p>For a useful first experiment, keep the coffee, dose and target yield constant, then compare a straightforward routine with one documented preinfusion change. Record when your timing begins. If you disable steam to reduce heating, check what that changes in the selected preinfusion mode as well; energy settings and extraction settings are connected.</p>`,
      },
      {
        id: 'value', eyebrow: 'The complete purchase', title: 'Elizabeth versus MOVE, Silvia Pro X, BES920 and MaraX',
        html: `<p>Add a grinder, scale, water treatment and care supplies to the dated machine price. Check the delivered bundle before budgeting for accessories already included.</p>
          <p><strong>Profitec MOVE:</strong> scheduling and Fast Heat-Up may suit a planned cold start. Its manufacturer lists 0.4 L/0.75 L boilers; the heating feature is not a measured readiness-time comparison. ${ref('eliz-move')}</p>
          <p><strong>Silvia Pro X:</strong> Rancilio lists 0.3 L coffee and 1 L steam boilers with adjustable reduced-pressure soft infusion. Greater nominal steam capacity alone does not establish faster texturing; compare a demonstration of your pitcher sequence. ${ref('eliz-silvia', 'eliz-silvia-spec')}</p>
          <p><strong>Breville Dual Boiler BES920:</strong> its manual offers volume-based FLo or time-based SEc stopping, with timed factory defaults. Elizabeth stops by time. Volumetric control may help your routine, but it does not weigh beverage output. ${ref('eliz-bes920')}</p>
          <p><strong>MaraX PL62X:</strong> its 1.8 L boiler with heat exchanger has coffee/steam priority modes. Choose that E61 workflow deliberately: it differs from Elizabeth’s independently controlled boilers. ${ref('eliz-marax')}</p>
          ${comparisonTablesHtml('Elizabeth PL92T', [
            { name: 'Elizabeth PL92T', href: '/espresso-machine/lelit-elizabeth/', priceClass: '$1,799.95 US, Oct 30', quickDecision: 'Compact control; planned preheat.', dimensions: '32 × 38 × 38 cm, manufacturer', heating: 'Independent boilers', coffeeSetup: '58 mm; timed buttons; preinfusion', milkWorkflow: 'Separate steam circuit', bestFor: 'A few espresso and milk drinks' },
            { name: 'Profitec MOVE', href: '/espresso-machine/profitec-move/', priceClass: 'Check local offer', quickDecision: 'Scheduling and Fast Heat-Up.', dimensions: 'Check refill clearance', heating: '0.4 L coffee / 0.75 L steam', coffeeSetup: 'Programmable controls and preinfusion', milkWorkflow: 'Separate steam circuit', bestFor: 'Scheduled readiness' },
            { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', priceClass: 'Check local offer', quickDecision: 'Soft infusion; steam reserve.', dimensions: 'Check installed footprint', heating: '0.3 L coffee / 1 L steam; two PIDs', coffeeSetup: 'Soft infusion: 0–6 seconds', milkWorkflow: 'Larger nominal reserve', bestFor: 'Milk-focused households' },
            { name: 'Breville Dual Boiler BES920', href: '/espresso-machine/breville-dual-boiler-bes920xl/', priceClass: 'Check BES920 region/offer', quickDecision: 'Selectable shot stopping.', dimensions: 'Check installed footprint', heating: 'Dual boilers; heated group', coffeeSetup: 'FLo or SEc; timed default', milkWorkflow: 'Separate steam circuit', bestFor: 'Selectable output control' },
            { name: 'Lelit MaraX PL62X', href: '/espresso-machine/lelit-mara-x/', priceClass: 'Verify PL62X identity', quickDecision: 'E61 HX workflow.', dimensions: 'Check lever/tank clearance', heating: '1.8 L boiler with heat exchanger', coffeeSetup: 'E61/L58E; mechanical preinfusion', milkWorkflow: 'HX with steam boost', bestFor: 'E61 HX preference' },
          ], 'Manufacturer features, not a Coffeedant head-to-head test. No rival price or equal-condition performance result is assumed; verify electrical region and bundle.')}
          <p>Prioritize the constraint you will notice daily: cold-start readiness, shot stopping, milk order or refill access.</p>`,
      },
      {
        id: 'recommendations', eyebrow: 'Four useful comparisons', title: 'Choose the trade-off you will notice every morning',
        html: recommendationCardsHtml([
          { kicker: 'Scheduled readiness', title: 'Profitec MOVE', text: 'Compare its documented scheduling and Fast Heat-Up functions, with a separate check of real readiness and counter fit.', href: '/espresso-machine/profitec-move/', linkLabel: 'Read the MOVE review' },
          { kicker: 'Soft infusion and reserve', title: 'Rancilio Silvia Pro X', text: 'Compare its reduced-pressure infusion and nominal steam capacity without assuming that boiler size alone wins a milk test.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read the Pro X review' },
          { kicker: 'Selectable shot stopping', title: 'Breville Dual Boiler BES920', text: 'Compare the actual BES920 timed/volumetric choice and regional support, keeping newer Oracle models separate.', href: '/espresso-machine/breville-dual-boiler-bes920xl/', linkLabel: 'Read the BES920 review' },
          { kicker: 'E61 heat exchanger', title: 'Lelit MaraX PL62X', text: 'Compare an intentionally different heating and lever workflow, not just the brand badge or case style.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read the MaraX review' },
        ]) + `<p>For mostly straight espresso, the ${link('/espresso-machine/profitec-go/', 'Profitec GO')} is also worth comparing before paying for a steam circuit you will rarely use. If plumbing and live flow control are central, compare the ${link('/espresso-machine/lelit-bianca-pl162t/', 'Lelit Bianca')} on those requirements rather than assuming Elizabeth’s menu can add the hardware later.</p>`,
      },
      {
        id: 'faq', eyebrow: 'Direct answers', title: 'Lelit Elizabeth buying and ownership questions',
        html: faqHtml([
          { question: 'Is the Lelit Elizabeth worth buying for home use?', answer: 'It suits a planned espresso-and-milk routine with configurable preinfusion. Consider alternatives for spontaneous cold starts, plumbing or beverage weighing.' },
          { question: 'Is Lelit Elizabeth discontinued?', answer: 'Lelit US and Clive offered PL92T at $1,799.95 on October 30, 2026; Clive showed stock. Those listings do not establish continued factory production.' },
          { question: 'Is Elizabeth V3 the same as Elizabeth3 PL92T3?', answer: 'A retail V3 label is insufficient. PL92T3 identifies the Pagaia-equipped successor; check the plate and manual to distinguish it from PL92T.' },
          { question: 'What changed from Elizabeth V3 to V4?', answer: 'The checked primary sources do not establish a standardized V4 specification. Ask the seller for the exact code, software revision and documented hardware changes.' },
          { question: 'Can I program a 36 g shot and leave it?', answer: 'PL92T saves time, not beverage mass. Set it against a scale and recheck yield when coffee or grind changes.' },
          { question: 'Can I use preinfusion with the steam boiler off?', answer: 'The later extended guide and older manual differ. Match steam-off and bloom instructions to the actual software revision before changing settings.' },
          { question: 'How should I judge a used Elizabeth?', answer: 'Check voltage, service/water history, accessories and the manual. Request a safe seller or technician demonstration of both circuits; manufacturer coverage is non-transferable.' },
          { question: 'Does it need a separate grinder?', answer: 'Yes, for whole-bean espresso. Budget for espresso-capable grind adjustment, a scale and suitable water.' },
        ]),
      },
    ],
    sources: [
      { id: 'eliz-official', label: 'Lelit: established Elizabeth PL92T', href: 'https://www.lelit.com/product/elizabeth-pl92t/', note: 'Controls, electrical variants and specifications checked October 30, 2026.' },
      { id: 'eliz-spec-sheet', label: 'Lelit: Elizabeth technical sheet', href: 'https://www.lelit.com/wp-content/uploads/2024/09/EN-Elizabeth.pdf?x30689=', note: 'Dimensions and supplied equipment; retailer bundles differ.' },
      { id: 'eliz-us-store', label: 'Lelit US: Elizabeth offer', href: 'https://www.lelit.com/en-us/product/elizabeth-pesel01', note: '$1,799.95 and active purchase controls checked October 30, 2026.' },
      { id: 'eliz-clive', label: 'Clive: Elizabeth US listing', href: 'https://clivecoffee.com/products/lelit-elizabeth-dual-boiler-espresso-machine', note: '$1,799.95 and stock checked October 30, 2026; basket and weight conflict with manufacturer data.' },
      { id: 'eliz-manual', label: 'Lelit: older user manual via Clive', href: 'https://links.imagerelay.com/cdn/2615/ql/a9eab104e81b45f2bd5546efbdd445a9/Lelit-Elizabeth-User-Manual.pdf', note: 'Printed pp. 17–18: timed shots and older steam-off guidance; physical specifications differ.' },
      { id: 'eliz-extended', label: 'Lelit: 2021 extended PL92T guide', href: 'https://www.maxicoffee.com/images/pdf/TECH_PL92T_ELIZABETH_extended_guide_2021_REV00.pdf', note: 'Printed pp. 15, 20–21: timed shots and steam/bloom controls; illustrative timings.' },
      { id: 'eliz-warranty', label: 'Lelit: North American warranty', href: 'https://www.lelit.com/en-us/support/warranty', note: 'Eligibility, non-transferability and exclusions checked October 30, 2026.' },
      { id: 'eliz-clive-warranty', label: 'Clive: seller warranty policy', href: 'https://support.clivecoffee.com/en/articles/16427452-clive-coffee-warranty', note: 'Seller coverage, troubleshooting and shipping obligations.' },
      { id: 'eliz-parts', label: 'Elizabeth V2 parts diagram via Clive', href: 'https://links.imagerelay.com/cdn/2615/ql/bbd70e1df4f741759cdf53983bc81dee/Elizabeth-V02-Part-Diagram.pdf', note: 'V2 parts reference; confirm revision compatibility and availability.' },
      { id: 'eliz-successor', label: 'Lelit: separate Elizabeth3 PL92T3', href: 'https://www.lelit.com/product/elizabeth3-pl92t3/', note: 'Pagaia-equipped PL92T3; US offer unverified.' },
      { id: 'eliz-successor-nl', label: 'Lelit Netherlands: Elizabeth3 storefront', href: 'https://www.lelit.com/en-nl/product/elizabeth3-pesel03', note: 'European purchase controls checked October 30, 2026.' },
      { id: 'eliz-kaffee', label: 'Kaffeemacher: PL92T evaluation, updated July 2026', href: 'https://kaffeemacher.de/en/blogs/kaffeewissen/lelit-elizabeth', note: 'Non-Pagaia measurements; update date does not date each test. Thermal and energy protocols differ.' },
      { id: 'eliz-kev', label: 'CoffeeKev: firsthand Elizabeth comparison', href: 'https://coffeeblog.co.uk/lelit-elizabeth-review/', note: 'Updated October 20, 2026; older sample and incomplete milk protocol, not PL92T-120.' },
      { id: 'eliz-lance', label: 'Lance Hedrick: Dual Boiler? Look no Further', href: 'https://www.youtube.com/watch?v=qw1MtYtwIrs', note: 'Independent PL92T video; no numerical results reproduced.' },
      { id: 'eliz-clive-compare', label: 'Clive: compact-machine comparison', href: 'https://clivecoffee.com/blogs/learn/compact-espresso-machine-comparison', note: 'Retailer comparison with mixed Silvia Pro/Pro X naming; no controlled recovery test.' },
      { id: 'eliz-homebarista', label: 'Home-Barista: Elizabeth owner experience', href: 'https://www.home-barista.com/espresso-machines/lelit-elizabeth-owner-experience-t58290.html', note: 'Self-selected ownership and repair reports.' },
      { id: 'eliz-coffeetime', label: 'Coffeetime: Elizabeth ownership discussion', href: 'https://coffeetime.freeflarum.com/d/357-lelit-elizabeth-2-week-experience', note: 'Anecdotal owner experience.' },
      { id: 'eliz-reddit', label: 'r/espresso: Elizabeth buying discussion', href: 'https://www.reddit.com/r/espresso/comments/1l1ssqf/is_the_lelit_elizabeth_the_right_choice_for_me/', note: 'Self-selected buying priorities.' },
      { id: 'eliz-move', label: 'Profitec: MOVE specifications', href: 'https://www.profitec-espresso.com/en/products/move', note: 'Boilers, scheduling, preinfusion and Fast Heat-Up checked October 30, 2026.' },
      { id: 'eliz-silvia', label: 'Rancilio: Silvia Pro X', href: 'https://www.ranciliogroup.com/rancilio/silvia-pro-x/', note: 'Dual boilers and adjustable reduced-pressure soft infusion.' },
      { id: 'eliz-silvia-spec', label: 'Rancilio: Silvia Pro X specifications', href: 'https://www.ranciliogroup.com/rancilio/silvia-pro-x/silvia-pro-x/', note: '0.3 L coffee / 1 L steam boilers; see overview for infusion controls.' },
      { id: 'eliz-bes920', label: 'Breville: BES920 US manual', href: 'https://assets.breville.com/BES920/BES920_USCM_IB_Y23_LR.pdf', note: 'Printed p. 17: FLo/SEc choices, timed defaults; BES920 only.' },
      { id: 'eliz-marax', label: 'Lelit: established MaraX PL62X', href: 'https://www.lelit.com/product/marax-pl62x/', note: 'PL62X HX boiler and priority modes; excludes PL62X3.' },
    ],
    finalTitle: 'Final verdict: a good fit when you can plan the first drink',
    finalVerdict: [
      'Choose Elizabeth for the station you will actually use: a few espresso and milk drinks, a planned preheat and an owner who wants control over the routine. Separate boilers and saved timing make sense in that setting. If the main requirement is an almost spontaneous cold-start espresso, investigate readiness directly before buying on the strength of the feature list.',
      'The dated US offer, documented service route and exact-model comparison make it a defensible shortlist choice. Confirm the plate, manual, delivered bundle and coverage, especially with used stock. The honest limit remains unchanged: this is a research-led recommendation, with attributed outside evidence and no Coffeedant physical test.',
    ],
  },
  video: {
    id: 'qw1MtYtwIrs', title: 'Dual Boiler? Look no Further: Lelit Elizabeth Review', creator: 'Lance Hedrick', published: '2025-05-19',
    note: 'A separate independent perspective on PL92T controls and ownership. The creator’s opinions belong to that review, not a Coffeedant test.',
  },
});
