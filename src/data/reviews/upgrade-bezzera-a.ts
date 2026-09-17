import type { MachineReviewData } from '../reviews';
import {
  buildResearchReview,
  comparisonTablesHtml,
  internalHref,
  recommendationCardsHtml,
  type ResearchDimensionInput,
} from '../batch-review-builder';

type Source = MachineReviewData['article']['sources'][number];
type Section = MachineReviewData['article']['sections'][number];

const UPDATED = '2026-09-17';
const disclosure = 'This is a research-led assessment assembled from current manufacturer documentation, dated retailer records, independent demonstrations, technical reviews and owner discussions. Coffeedant has not physically tested this machine. Scores are editorial judgments about the documented ownership proposition, not laboratory measurements.';
const refs = (ids: string[]) => ids.map((id) => `<a href="#${id}">[source]</a>`).join(' ');
const dimension = (
  id: ResearchDimensionInput['id'], score: number, reason: string, buyerMeaning: string,
  evidenceStatus: string, sourceIds: string[], deepDiveId: string, title: string,
  intro: string[], evidence: ResearchDimensionInput['evidence'],
  diagnosis: ResearchDimensionInput['diagnosis'], note: string,
): ResearchDimensionInput => ({
  id, score, reason, buyerMeaning, evidenceStatus, sourceIds, deepDiveId,
  title, intro, evidence, diagnosis, note,
});

const staticFaqHtml = (items: Array<{ question: string; answer: string }>) => `
  <div class="review-faq-list">
    ${items.map((item) => `<article class="review-faq-item"><h3>${item.question}</h3><p>${item.answer}</p></article>`).join('')}
  </div>`;

const bz09Sources: Source[] = [
  { id: 'bz09-official', label: 'Bezzera: BZ09 official product page', href: 'https://www.bezzera.it/en/machines/bz09', note: 'Primary record for the current BZ09 identity, electrically heated BZ group, thermostat arrangement, 0.5 L boiler, 3 L tank, regional power ranges, dimensions and weight. Checked September 17, 2026.' },
  { id: 'bz09-brochure', label: 'Bezzera: BZ09 PM product brochure', href: 'https://www.bezzera.it/uploads/prod_images/BZ09/BZ09PM-Depliant.pdf', note: 'Manufacturer brochure used to cross-check architecture and controls. Exact supplied accessories and electrical configuration remain region-specific.' },
  { id: 'bz09-parts', label: 'Bezzera: official spare-parts portal', href: 'https://spareparts.bezzera.it/', note: 'Manufacturer route for manuals, exploded references and parts lookup. Availability, eligibility and local labor were not inferred from the existence of the portal.' },
  { id: 'bz09-coffeefriend', label: 'Coffee Friend Europe: Bezzera BZ09 PM listing', href: 'https://www.coffeefriend.eu/p/coffee-machine-bezzera-bz09-pm/', note: 'Dated European offer and regional specification cross-check: 220 to 240 V, 1650 W listing, 58 mm basket, 0.5 L boiler, 3 L tank and 17 kg. Price was EUR 999 and in stock when checked.' },
  { id: 'bz09-koffiewarenhuis', label: 'Koffiewarenhuis: Bezzera BZ09', href: 'https://www.koffiewarenhuis.nl/producten/bezzera-bz09', note: 'Dutch dealer description of the single-boiler workflow, current switch revision, included kit and service offer. Retailer performance language is not treated as measurement.' },
  { id: 'bz09-casabarista', label: 'CasaBarista: Bezzera BZ09', href: 'https://www.casabarista.nl/en/products/bezzera-bz-09', note: 'Regional retailer comparison and FAQ covering the BZ09 versus BZ10, absence of digital PID and the 58 mm heated group.' },
  { id: 'bz09-maxicoffee', label: 'MaxiCoffee: Bezzera BZ09 product guide', href: 'https://www.maxicoffee.com/machine-expresso-bezzera-bz09-p-7510.html', note: 'Commercial hands-on context for controls, thermostat, steam lever and intended espresso-first use. French bundle and warranty details are not transferred to other markets.' },
  { id: 'bz09-video', label: 'MaxiCoffee: BEZZERA BZ09PM test video', href: 'https://www.youtube.com/watch?v=H1wsPucESj8', note: 'Independent commercial demonstration published April 28, 2017. It shows an older regional unit, so current identity and electrical facts come from Bezzera.' },
  { id: 'bz09-reddit', label: 'Reddit r/espresso: Bezzera BZ09 owner discussion', href: 'https://www.reddit.com/r/espresso/comments/190bwat/bezzera_bz09/', note: 'Small owner discussion used to surface buying and setup questions. It is self-selected anecdote and cannot establish reliability or performance rates.' },
  { id: 'bz09-hb', label: 'Home-Barista: Bezzera owners and service discussions', href: 'https://www.home-barista.com/espresso-machines/bezzera-bz09-t46031.html', note: 'Enthusiast discussion used only for owner themes such as warmup, thermostat behavior and service access. Individual claims are not treated as controlled tests.' },
  { id: 'bz09-go', label: 'Profitec: GO official product page', href: 'https://www.profitec-espresso.com/en/products/go', note: 'Primary comparison source for the factory PID, shot timer, pressure gauge and compact single-boiler alternative.' },
  { id: 'bz09-victoria', label: 'LELIT: Victoria PL91T official product page', href: 'https://www.lelit.com/product/victoria-pl91t/', note: 'Primary comparison source for the PID-controlled single-boiler Victoria and its electronic aids.' },
  { id: 'bz09-silvia', label: 'Rancilio North America: Silvia', href: 'https://www.ranciliogroupna.com/equipment/rancilio-silvia/', note: 'Primary comparison source for the conventional thermostat-controlled 58 mm single-boiler Silvia.' },
  { id: 'bz09-bz10', label: 'Bezzera: BZ10 official product page', href: 'https://www.bezzera.it/en/machines/bz10', note: 'Primary comparison source for the related 1.5 L heat-exchanger model and its separate steam and hot-water workflow.' },
];

const bz09Sections: Section[] = [
  {
    id: 'orientation', eyebrow: 'The buying decision', title: 'A narrow traditional single boiler with a genuinely different group', html: `
      <p>The Bezzera BZ09 is easy to misread. Its polished steel case, 58 mm portafilter and substantial 17 kg weight suggest a small prosumer machine, yet its internal logic is simpler than the styling implies. One 0.5-liter copper boiler changes duty between brewing and steaming. The proprietary BZ group adds two cartridge heaters controlled by a thermostat around 90 degrees Celsius. A vibration pump moves water from a three-liter tank, and the front gauge reports coffee pressure rather than boiler temperature. ${refs(['bz09-official','bz09-brochure'])}</p>
      <p>The current identity needs regional care. Bezzera lists both 110 to 120 V and 220 to 240 V variants, with different heater ranges. The European retailer checked for this review showed a 220 to 240 V, 1650 W machine at EUR 999. That listing does not prove a current authorized US offer, US warranty or compatible plug. Confirm the exact voltage, frequency, model label, dealer support and included accessories before payment. ${refs(['bz09-official','bz09-coffeefriend'])}</p>
      <p><strong>My short verdict:</strong> the BZ09 is most coherent for an espresso-first buyer who wants conventional 58 mm preparation, a compact 25 cm width and manual steam only occasionally. Its stainless body and heated group are appealing, but a buyer comparing near EUR 1,000 should also ask what a front-panel PID and shot timer are worth. The <a href="${internalHref('/espresso-machine/profitec-go/')}">Profitec GO</a> and <a href="${internalHref('/espresso-machine/lelit-victoria-pl91t/')}">LELIT Victoria</a> answer that question more directly.</p>
      <div class="review-callout"><strong>Identity check:</strong> this review covers the BZ09 PM-style single-boiler platform shown on Bezzera's current page. It does not cover the heat-exchanger BZ10 or assume that every older BZ09 has the same switches, electrical rating or bundle.</div>`,
  },
  {
    id: 'setup', eyebrow: 'The first week', title: 'Make the thermostat routine observable before buying accessories', html: `
      <p>A quiet first week is more useful than an accessory spree. Start by confirming the electrical label against the outlet and local supply. Fill the removable tank with appropriate water, follow the regional manual for first fill and priming, lock in the portafilter, and allow the boiler, group, basket and cup to warm together. The cartridge-heated group helps, but an illuminated switch is not evidence that every part has reached equilibrium.</p>
      <ol>
        <li><strong>Day one:</strong> learn safe filling, brewing, steam selection, boiler refill and shutdown. Do not heat an empty boiler.</li>
        <li><strong>Days two and three:</strong> choose one medium-roast coffee, one basket and one dose. Weigh the drink and adjust only the grinder until flow becomes repeatable.</li>
        <li><strong>Days four and five:</strong> write down one heat and flush sequence. Repeat it before deciding the thermostat is inconsistent.</li>
        <li><strong>Days six and seven:</strong> make the largest normal order, including milk. The change from brew to steam and back reveals more than a single demonstration shot.</li>
      </ol>
      <p>The top-filled three-liter reservoir sounds generous, but usable capacity and access are separate questions. Measure the 25 cm width, 42.5 cm depth and 37.5 cm height with room above to lift the tank and cups. Include the protruding portafilter and front tray in a real counter mock-up. The machine is narrow, not shallow. ${refs(['bz09-official','bz09-coffeefriend','bz09-koffiewarenhuis'])}</p>`,
  },
  {
    id: 'espresso', eyebrow: 'Rating deep dive', title: 'Espresso depends on repeatable heat management, not the pressure-gauge target', html: `
      <p>The BZ09 supplies a credible espresso foundation: a heated metal group, standard-size 58 mm preparation, manual shot stop and a pressure gauge that can reveal gross grind or puck problems. It does not supply a numeric brew-temperature setting, a shot timer or automated pre-infusion. The operator still decides when to brew in the thermostat cycle and when to stop by weight.</p>
      <p>The actively heated group is the strongest technical argument for the BZ09. It can reduce one source of temperature lag compared with a group warmed only by boiler conduction. It does not erase the single boiler's thermostat cycle or turn an internal thermostat into coffee-by-coffee control. For a stable medium roast and a repeated morning recipe, that may be enough. For frequent movement between light and dark coffees, a visible PID is easier to reason about.</p>
      <p>Independent evidence for the BZ09 is much thinner than for Silvia or Profitec GO. The MaxiCoffee demonstration and scattered owners show the controls and plausible workflow, but they do not provide a modern, instrumented dataset across multiple units. This score therefore rewards documented architecture and compatibility while keeping temperature repeatability claims conservative. ${refs(['bz09-official','bz09-maxicoffee','bz09-video','bz09-reddit'])}</p>`,
  },
  {
    id: 'milk', eyebrow: 'Rating deep dive', title: 'Milk is capable for one drink and serial by design', html: `
      <p>The lever-operated wand handles both steam and hot water. For milk, the boiler must leave brew temperature, heat to steam conditions, deliver the steam, then be refilled and cooled before the next espresso. There is no simultaneous brewing and steaming. This is ordinary single-boiler physics, but it matters more than promotional language about cappuccino speed.</p>
      <p>Two milk drinks expose the architecture. You can brew two espresso portions before steaming if taste and serving order allow, or complete each drink serially. Either way, the boiler transition and cleanup remain. A household making several flat whites every morning should compare the heat-exchanger <a href="${internalHref('/espresso-machine/bezzera-bz10/')}">BZ10</a> or a dual boiler. Occasional milk does not justify buying more machine than necessary, but repeated milk makes the BZ09's compromise recur every day.</p>
      <p>No defensible universal steaming time is stated here. Milk volume, starting temperature, boiler pressure, tip, pitcher and technique change the result. Retailer demonstrations show capability, not a Coffeedant timing trial. ${refs(['bz09-official','bz09-koffiewarenhuis','bz09-video'])}</p>`,
  },
  {
    id: 'workflow', eyebrow: 'Rating deep dive', title: 'Simple switches do not equal an automatic routine', html: `
      <p>Cold-start claims need restraint. The electrically heated group can become usable sooner than a large passive E61 group, but readiness is not one binary moment. Boiler water, group metal, locked portafilter, basket and cup warm at different rates. A retailer or owner saying the machine feels ready in a certain number of minutes is useful context, not a transferable promise for every voltage, room and recipe. Plan a conservative warmup, then shorten it only after observing repeatability.</p>
      <p>For an espresso-first morning, the BZ09 can settle into a calm rhythm. For mixed coffees that demand temperature changes, the internal thermostat is a poor daily interface. For four milk drinks, the single boiler becomes the schedule. Workflow should be rated against the household order rather than the number of switches on the fascia.</p>
      <p>Used examples add another layer. Dealer descriptions mention revised toggle switches and an updated group on newer stock, so an online photo or old review may not match the machine offered. Ask for the data plate and current photographs. A model name alone does not establish revision, voltage or service history. ${refs(['bz09-koffiewarenhuis','bz09-casabarista','bz09-hb'])}</p>`,
  },
  {
    id: 'build', eyebrow: 'Rating deep dive', title: 'Traditional construction is promising only when service is reachable', html: `
      <p>Bezzera specifies an AISI 304 stainless body, copper boiler, vibration pump and solenoid-controlled coffee path around a substantial heated group. Seventeen kilograms in a 25 cm-wide case indicates more structure than a lightweight appliance, but weight alone does not prove finish quality or lifespan. The useful ownership question is whether seals, valves, pumps, thermostats and heating elements can be diagnosed and sourced locally.</p>
      <p>The official spare-parts portal is a positive signal because it exposes a manufacturer route for diagrams and parts. It does not promise that every component for every serial number is in local stock, that a consumer may buy it directly or that a nearby technician knows the BZ group. Before purchase, ask the selling dealer who handles warranty labor, whether shipping is required, what voltage-specific parts are stocked and how water damage is treated.</p>
      <p>Copper and brass are familiar service materials, not immunity from scale. A large reservoir can encourage long intervals between refills, but standing water should still be refreshed. Leaks, unusual pump noise, slow flow, failed heating or breaker trips deserve diagnosis rather than repeated operation. Pressurized, hot and mains-powered internals are work for a qualified technician.</p>
      <p>Owner discussions can reveal questions worth asking, such as warmup expectations, thermostat adjustment and parts access. They cannot supply a failure rate because the sample is self-selected and mixes regions, ages, water conditions and repairs. This review therefore scores construction above average while leaving long-run reliability unquantified. ${refs(['bz09-official','bz09-parts','bz09-reddit','bz09-hb'])}</p>
      `,
  },
  {
    id: 'features', eyebrow: 'Rating deep dive', title: 'The feature set is intentionally mechanical and now looks sparse', html: `
      <p>The useful features are real: a separately heated BZ group, 58 mm format, manual shot control, three-liter removable tank, pressure gauge, steam and hot water, cup-warming surface and an adjustable internal coffee thermostat. Safety and automatic boiler-fill functions depend on the exact regional implementation and should be confirmed against its manual. There is no integrated grinder, display, shot timer, front-panel PID or volumetric dosing in the PM-style workflow reviewed here.</p>
      <p>The internal thermostat deserves careful wording. It means a technician or informed owner can alter a setting inside the machine. It is not equivalent to pressing a button for 93 degrees and seeing a sensor value on a display. Changing it frequently also undermines the repeatable routine that makes a thermostat machine manageable. Buyers who treat temperature as a recipe variable should pay for a better interface at the start.</p>
      <p>What is absent can be beneficial. There is no app account, touchscreen or software lifecycle, and direct controls are legible. Yet simplicity should not be romanticized. A cheap external timer replaces the shot clock; it does not replace visible temperature control. The feature score reflects both the sensible core and the strong factory-PID competition. ${refs(['bz09-official','bz09-casabarista','bz09-go','bz09-victoria'])}</p>`,
  },
  {
    id: 'value', eyebrow: 'Rating deep dive', title: 'Value depends on regional support and how much you prize the heated group', html: `
      <p>The checked Coffee Friend offer was EUR 999 for a 220 to 240 V unit. Another current Dutch listing showed EUR 925, while marketplace and comparison feeds varied. Those are dated European anchors, not a worldwide MSRP. Import tax, shipping, plug compatibility, warranty geography and return freight can erase a discount. A buyer outside the dealer's supported region should value the delivered, serviceable machine rather than the cart subtotal. ${refs(['bz09-coffeefriend','bz09-koffiewarenhuis'])}</p>
      <p>At roughly this price, the BZ09 offers substantial steel construction and its distinctive heated group, but it asks the operator to accept hidden thermostat adjustment and sequential milk. Profitec GO makes temperature and shot time visible. LELIT Victoria adds electronic workflow aids. Rancilio Silvia offers a much larger body of service knowledge, though it retains thermostat management. The right comparison is not which badge looks more commercial. It is which daily compromise costs the least attention.</p>
      <p>My rating lands in the middle of the class. The BZ09 is not obsolete, and the heated group is more than decoration. It is also hard to call exceptional value when factory PID control has become normal near the same budget. ${refs(['bz09-go','bz09-victoria','bz09-silvia'])}</p>`,
  },
  {
    id: 'ownership', eyebrow: 'Living with it', title: 'Cleaning, maintenance and a safer used-machine checklist', html: `
      <h3>After every session</h3>
      <p>Rinse the basket and portafilter, wipe the group gasket area, run the brief water flush prescribed by the manual, empty the tray as needed, and refresh the reservoir regularly. After milk, purge before and after steaming, wipe the wand immediately and make sure the boiler is refilled before shutdown. Never assume that a hot wand has sanitized dried milk inside the tip.</p>
      <h3>On the written schedule</h3>
      <p>Use the detergent, backflush method and frequency in the manual for the exact machine. Blind-filter cleaning addresses coffee oils, not boiler scale. Treat water before scale forms rather than applying an aggressive generic descaler. Inspect the group gasket, shower screen, wand tip and hoses by condition, and let a technician assess electrical, pressure or internal leak concerns.</p>
      <h3>Before buying used</h3>
      <p>Record the serial number, voltage, frequency and plug. Ask which revision it is, where it was purchased, whether an internal thermostat or pump setting was changed, what water was used, and whether repairs have invoices. Observe a cold start through heating, brewing, steaming and refill. Budget for a professional inspection when history is incomplete.</p>
      <h3>Unknowns that remain unknown</h3>
      <p>Public sources do not establish population-level reliability, current US distribution, local parts lead time, exact cup clearance or a universal warmup. This is why the review names a regional price and avoids a fake global warranty. The dealer relationship is part of the product.</p>`,
  },
  {
    id: 'compare', eyebrow: 'Quick and detailed comparison', title: 'BZ09, a factory-PID single boiler or the BZ10?', html: comparisonTablesHtml('Bezzera BZ09', [
      { name: 'Bezzera BZ09', quickDecision: 'Choose for the heated BZ group, narrow case and espresso-first mechanical routine.', priceClass: 'EUR 999 checked EU offer', dimensions: '250 W x 425 D x 375 H mm; 17 kg', heating: '0.5 L single boiler plus cartridge-heated group', coffeeSetup: '58 mm, manual stop, pressure gauge, internal thermostat', milkWorkflow: 'Sequential steam and hot water through one wand', bestFor: 'Espresso-first buyer with occasional milk' },
      { name: 'Profitec GO', href: '/espresso-machine/profitec-go/', quickDecision: 'Choose when visible PID control and a shot timer matter more than Bezzera group character.', priceClass: 'Similar premium single-boiler class', dimensions: 'Compact upright single-boiler body', heating: 'PID-controlled single boiler', coffeeSetup: '58 mm, display, timer and pressure gauge', milkWorkflow: 'Sequential brew and steam', bestFor: 'Recipe-focused espresso buyer' },
      { name: 'LELIT Victoria', href: '/espresso-machine/lelit-victoria-pl91t/', quickDecision: 'Choose for electronic temperature and workflow assistance in a compact format.', priceClass: 'Similar or somewhat higher by region', dimensions: 'Compact single-boiler footprint', heating: 'PID-controlled single boiler', coffeeSetup: '58 mm with display and programmable aids', milkWorkflow: 'Sequential with electronic management', bestFor: 'Buyer wanting more guidance' },
      { name: 'Bezzera BZ10', href: '/espresso-machine/bezzera-bz10/', quickDecision: 'Choose when several milk drinks justify a heat exchanger and two service circuits.', priceClass: 'Higher than BZ09', dimensions: 'Same stated footprint; 19 kg', heating: '1.5 L heat exchanger plus heated BZ group', coffeeSetup: '58 mm, manual stop and dual gauge', milkWorkflow: 'Brew and steam at the same time', bestFor: 'Milk-drink household' },
    ], 'Price positions are dated regional anchors. Verify voltage, seller authorization, warranty, revisions and box contents for the exact listing.'),
  },
  {
    id: 'related', eyebrow: 'Four sensible routes', title: 'Choose the workflow, then choose the machine', html: recommendationCardsHtml([
      { kicker: 'Reviewed machine', title: 'Bezzera BZ09', text: 'For an espresso-first buyer who wants a narrow traditional machine and values the actively heated BZ group.', href: '/espresso-machine/bezzera-bz09/', linkLabel: 'Review the BZ09 decision', featured: true },
      { kicker: 'Visible temperature control', title: 'Profitec GO', text: 'A better fit when a front-panel PID, timer and clear recipe changes matter more than Bezzera-specific character.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read the Profitec GO review' },
      { kicker: 'Electronic single boiler', title: 'LELIT Victoria', text: 'Adds temperature display and workflow assistance while keeping a compact 58 mm single-boiler format.', href: '/espresso-machine/lelit-victoria-pl91t/', linkLabel: 'Compare the Victoria' },
      { kicker: 'More milk drinks', title: 'Bezzera BZ10', text: 'Keeps the narrow Bezzera format but uses a heat exchanger for simultaneous espresso and steam.', href: '/espresso-machine/bezzera-bz10/', linkLabel: 'See the BZ10 review' },
    ]),
  },
  {
    id: 'faq', eyebrow: 'Before ordering', title: 'Bezzera BZ09 questions answered', html: staticFaqHtml([
      { question: 'Does the Bezzera BZ09 have a PID?', answer: 'No digital PID is listed. Bezzera documents an internal thermostat adjustment for coffee temperature and a separate thermostat around the cartridge-heated group.' },
      { question: 'Can the BZ09 brew and steam at the same time?', answer: 'No. Its 0.5 L boiler changes duty between brewing and steaming, so milk drinks are made sequentially.' },
      { question: 'Is the group 58 mm?', answer: 'Current manufacturer and retailer material identify a 58 mm preparation format. Confirm accessory fit for the Bezzera BZ group rather than relying on diameter alone.' },
      { question: 'How long does it take to warm up?', answer: 'No universal time is promised here. Voltage, room temperature, portafilter heat and the required repeatability all matter. Use a conservative routine and shorten it only after observation.' },
      { question: 'What price was checked?', answer: 'Coffee Friend Europe showed EUR 999 for a 220 to 240 V unit on September 17, 2026. That is a dated regional offer, not a global MSRP.' },
      { question: 'BZ09 or BZ10?', answer: 'Choose BZ09 for mostly espresso and occasional milk. Choose BZ10 when simultaneous brewing and steaming will improve the normal household order.' },
      { question: 'Can I adjust pump pressure or the thermostat myself?', answer: 'Internal adjustments affect hot, pressurized and mains-powered equipment. Use an authorized or qualified technician unless the exact manual and dealer explicitly support owner service.' },
      { question: 'Is it a good used purchase?', answer: 'Potentially, when voltage, water history, heating, flow, steam, refill, leaks and service support are verified. An unsupported import deserves a repair and shipping allowance.' },
    ]),
  },
];

export const bezzeraBz09Review = buildResearchReview({
  slug: '/espresso-machine/bezzera-bz09/', productId: 'CD-EM-000022', brand: 'Bezzera', model: 'BZ09', sku: 'BZ09 PM',
  category: 'Semi-automatic espresso machine, single boiler', brandPath: '/bezzera/',
  title: 'Bezzera BZ09 review: heated group, manual discipline',
  description: 'A research-led Bezzera BZ09 review covering its heated 58 mm group, 0.5 L single boiler, espresso and milk workflow, current EU price, service questions and closest PID alternatives.',
  verdictLabel: 'For the espresso-first traditionalist',
  verdict: 'The BZ09 is a solid narrow single boiler whose cartridge-heated BZ group gives it more identity than its sparse control panel suggests. Buy it when local Bezzera support is strong and manual temperature routine is part of the appeal. At the EUR 999 offer checked September 17, 2026, compare a factory-PID Profitec GO or LELIT Victoria before accepting an internal thermostat as the temperature interface.',
  assessment: 'Distinctive traditional hardware, held back by hidden temperature control and serial milk work.',
  image: 'https://www.bezzera.it/uploads/prod_images/BZ09/BZ09_Featured.jpg',
  imageAlt: 'Bezzera BZ09 stainless steel espresso machine viewed from the front',
  published: '2025-11-13', updated: UPDATED,
  authorNote: 'I treated the BZ09 as a current buying and ownership decision. I checked Bezzera specifications and brochure material, current European listings, independent demonstration, comparison machines and owner discussions. I have not physically tested this machine.',
  basisDisclosure: disclosure,
  price: { label: 'Checked European retailer price', msrp: '€999.00', typical: '220 to 240 V listing; availability and tax vary by country', currency: 'EUR', numeric: '999.00', checked: 'September 17, 2026' },
  links: [
    { label: 'Check current retailer price', href: 'https://www.coffeefriend.eu/p/coffee-machine-bezzera-bz09-pm/', note: 'Regional voltage and delivery eligibility apply', primary: true },
    { label: 'Check Bezzera specifications', href: 'https://www.bezzera.it/en/machines/bz09', note: 'Official manufacturer page' },
    { label: 'Find an authorized reseller', href: 'https://www.bezzera.it/en/resellers', note: 'Confirm service and warranty before purchase' },
  ],
  facts: [
    { label: 'Heating', value: '0.5 L copper single boiler' },
    { label: 'Group', value: '58 mm BZ group with two cartridge heaters' },
    { label: 'Temperature', value: 'Thermostat controlled; internal coffee adjustment' },
    { label: 'Water', value: '3 L removable tank; vibration pump' },
    { label: 'Controls', value: 'Manual shot stop; pressure gauge' },
    { label: 'Milk', value: 'Steam and hot water through lever wand' },
    { label: 'Size', value: '250 W x 425 D x 375 H mm' },
    { label: 'Weight', value: '17 kg net' },
  ],
  quickAnswers: [
    { question: 'The one-line decision?', answer: 'Choose it for a narrow traditional build and actively heated group, not for modern temperature feedback.' },
    { question: 'Does it have a PID?', answer: 'No digital PID. Coffee temperature is adjusted through an internal thermostat.' },
    { question: 'Brew and steam together?', answer: 'No. The single boiler changes from brewing to steaming and must be refilled afterward.' },
    { question: 'What price was verified?', answer: 'EUR 999 for a 220 to 240 V European listing on September 17, 2026.' },
    { question: 'Do I need a grinder?', answer: 'Yes for fresh-bean espresso. Protect enough budget for a capable, finely adjustable grinder.' },
    { question: 'Main alternative?', answer: 'Profitec GO for visible PID control, or BZ10 if repeated milk drinks matter more.' },
  ],
  bestFor: [
    'Espresso-first buyer who wants a compact 58 mm traditional machine',
    'Owner comfortable repeating a thermostat and flush routine',
    'Household making one occasional manual milk drink',
  ],
  avoidIf: [
    'You want to select and see brew temperature from the front panel',
    'Several milk drinks must be made with little waiting',
    'No authorized Bezzera technician supports your exact voltage and region',
  ],
  pros: [
    'Actively heated BZ group in a narrow 25 cm body',
    'Conventional 58 mm preparation and visible pressure gauge',
    'Substantial stainless body and three-liter reservoir',
    'Direct manual controls without software dependence',
  ],
  cons: [
    'No front-panel PID, temperature display or shot timer',
    'Single boiler makes coffee and steam sequentially',
    'Internal temperature adjustment is poor for frequent coffee changes',
    'Regional voltage, dealer coverage and current US availability require checking',
  ],
  dimensions: [
    dimension('espresso', 7.8,
      'The heated 58 mm group is credible, while thermostat timing limits temperature control.',
      'Best with one repeated coffee; frequent roast changes favor a visible PID.',
      'Documented design and demonstrations',
      ['bz09-official','bz09-brochure','bz09-maxicoffee','bz09-video'], 'espresso', 'What the BZ group solves and what it does not',
      [
        'Two cartridge heaters warm the group independently of the boiler, reducing one source of lag in a compact single-boiler design.',
      ],
      [
        { signal: 'Heated 58 mm group', evidence: 'Bezzera specifies two group cartridges held by a thermostat around 90 degrees Celsius.', decision: 'The group has its own heat source, but this figure is not the displayed brew-water temperature.' },
        { signal: 'Internal thermostat', evidence: 'Bezzera lists an internal adjustment for coffee temperature.', decision: 'A stable house coffee suits it better than daily set-point changes.' },
      ],
      [
        { signal: 'Shot is fast, pale and sharp', guidance: 'Grind finer while holding the basket, dose and target yield steady.' },
        { signal: 'Gauge looks normal but the cup varies', guidance: 'Check distribution, channeling, yield and heat routine instead of chasing a pressure number.' },
      ],
      'Starting ratios in the article are editorial guidance, not Coffeedant BZ09 measurements.'),
    dimension('milk', 6.8,
      'The lever wand can texture one drink, but the 0.5 L boiler must change duty and refill.',
      'Suitable for occasional cappuccino, slow for a regular queue.',
      'Documented design and demonstrations',
      ['bz09-official','bz09-koffiewarenhuis','bz09-video'], 'milk', 'Judge the whole milk sequence, not steam power alone',
      [
        'The important sequence includes heating, purging, steaming, wiping, refilling and cooling back toward brew conditions.',
      ],
      [
        { signal: '0.5 L shared boiler', evidence: 'One boiler serves coffee and steam at different temperatures.', decision: 'Coffee and milk cannot happen simultaneously.' },
        { signal: 'Espresso-first architecture', evidence: 'Dealers position BZ09 below the heat-exchanger BZ10 for milk volume.', decision: 'Buy to the normal drink queue, not the occasional party.' },
      ],
      [
        { signal: 'Milk has large bubbles', guidance: 'Introduce less air near the start, then keep the milk rolling.' },
        { signal: 'Next espresso tastes overheated', guidance: 'Complete the prescribed refill and cool-down routine rather than rushing the transition.' },
      ],
      'No fixed steaming or recovery time is claimed because pitcher, milk, tip, voltage and technique vary.'),
    dimension('workflow', 7.1,
      'Direct controls are clear, but timing, top access and boiler transitions add work.',
      'Calm for one espresso, less adaptable for varied coffee or milk queues.',
      'Documented layout and owner context',
      ['bz09-official','bz09-koffiewarenhuis','bz09-casabarista','bz09-hb'], 'workflow', 'The narrow case still needs a complete station',
      [
        'The 25 cm body saves lateral space, while the 42.5 cm depth, portafilter and tank access determine whether it actually fits.',
      ],
      [
        { signal: 'Three-liter tank', evidence: 'The removable reservoir is accessed from the top.', decision: 'Fewer refills, but cabinet clearance must be measured.' },
        { signal: 'No timer or display', evidence: 'Shot stop and heat management are manual.', decision: 'A scale, timer and written routine belong beside the machine.' },
      ],
      [
        { signal: 'First shot changes day to day', guidance: 'Standardize water level, warmup, locked portafilter, flush and dose.' },
        { signal: 'Two drinks create a queue', guidance: 'Time the complete sequence and compare BZ10 before adding gadgets.' },
      ],
      'Readiness is defined by repeatable cups, not the first illuminated lamp.'),
    dimension('build', 8.2,
      'Stainless, copper and a parts route support repair, but local expertise is not guaranteed.',
      'Promising when water and dealer support are settled first.',
      'Documented construction and owner context',
      ['bz09-official','bz09-parts','bz09-coffeefriend','bz09-reddit'], 'build', 'Repairable hardware still needs a repair plan',
      [
        'Traditional pumps, valves, thermostats and seals can be diagnosed, but the BZ group is not the same service ecosystem as every E61 machine.',
      ],
      [
        { signal: 'Official parts portal', evidence: 'Bezzera exposes manuals and spare-parts lookup.', decision: 'Ask whether your dealer can actually source and fit parts locally.' },
        { signal: 'Owner anecdotes', evidence: 'Forums mix different ages, water and service histories.', decision: 'Use them to form inspection questions, not a reliability percentage.' },
      ],
      [
        { signal: 'Leak, burning smell or breaker trip', guidance: 'Stop operating and arrange qualified electrical and pressure-system service.' },
        { signal: 'Buying an import', guidance: 'Confirm voltage, frequency, plug, warranty geography and return freight in writing.' },
      ],
      'The review does not infer expected lifespan from material names or isolated long-term owners.'),
    dimension('features', 6.3,
      'Heated group, gauge and 58 mm format matter, but PID, display and timer are absent.',
      'Good for a minimalist; recipe-driven buyers get clearer control elsewhere.',
      'Current features and rival specifications',
      ['bz09-official','bz09-casabarista','bz09-go','bz09-victoria'], 'features', 'Mechanical clarity with a modern control deficit',
      [
        'The BZ09 has enough hardware to make serious espresso, yet its most important adjustment is hidden inside the case.',
      ],
      [
        { signal: 'No display', evidence: 'No temperature value or shot clock appears on the current page.', decision: 'Add a timer, or buy a machine with integrated feedback.' },
        { signal: '58 mm label', evidence: 'Retail sources confirm the basket class.', decision: 'Check BZ-specific fit before buying portafilters and deep baskets.' },
      ],
      [
        { signal: 'Planning a day-one temperature modification', guidance: 'Price a factory-PID alternative and preserve the support comparison.' },
        { signal: 'Accessory will not lock in', guidance: 'Stop forcing it and confirm ear, gasket and depth compatibility.' },
      ],
      'Aftermarket modifications are not counted as factory features and may change warranty or service.'),
    dimension('value', 7.2,
      'The price works when local support and the manual workflow align with the buyer.',
      'Good regional value, weaker for importers or immediate PID modifiers.',
      'Dated offers and feature comparison',
      ['bz09-coffeefriend','bz09-koffiewarenhuis','bz09-go','bz09-victoria','bz09-silvia'], 'value', 'Compare serviceable systems, not bare machine prices',
      [
        'The EUR 999 check gives a real anchor, while country, tax and voltage differences prevent a global price claim.',
      ],
      [
        { signal: 'EUR 999 current offer', evidence: 'Coffee Friend showed the regional machine in stock on the check date.', decision: 'Confirm delivered price, voltage and warranty eligibility.' },
        { signal: 'Factory-PID rivals', evidence: 'GO and Victoria make temperature visible from the front.', decision: 'Value the control you will use, not the hardware story alone.' },
      ],
      [
        { signal: 'Machine consumes grinder money', guidance: 'Buy a less expensive brewer and protect grind quality.' },
        { signal: 'Imported offer looks much cheaper', guidance: 'Add tax, freight, voltage conversion risk, warranty and return shipping.' },
      ],
      'Prices are dated snapshots and retailer warranty terms are not manufacturer-wide promises.'),
  ],
  alternatives: [
    { name: 'Profitec GO', reason: 'Factory PID, shot timer and pressure gauge in a compact single-boiler format.', href: '/espresso-machine/profitec-go/' },
    { name: 'LELIT Victoria PL91T', reason: 'Electronic temperature and workflow assistance in a compact 58 mm machine.', href: '/espresso-machine/lelit-victoria-pl91t/' },
    { name: 'Bezzera BZ10', reason: 'Related narrow heat-exchanger design for repeated milk drinks.', href: '/espresso-machine/bezzera-bz10/' },
  ],
  article: {
    methodology: `<p>I began with Bezzera's current BZ09 page, brochure and official spare-parts route, then cross-checked dimensions, regional power, basket format, controls and price with three current European dealers. A commercial demonstration was used for visible workflow only. Owner discussions were treated as small, self-selected pools that suggest questions, never as reliability data. Comparison claims were checked against the official Profitec GO, LELIT Victoria, Rancilio Silvia and Bezzera BZ10 records. The EUR 999 price was checked September 17, 2026. Coffeedant did not time, measure or taste shots from a BZ09, and uncertainty is stated where public evidence is thin.</p>`,
    sections: bz09Sections,
    sources: bz09Sources,
    finalTitle: 'Buy the BZ09 for the heated group, not in spite of the thermostat routine',
    finalVerdict: [
      'The Bezzera BZ09 combines a narrow 25 cm body, substantial traditional construction and an actively heated BZ group. It can make a satisfying espresso station for a methodical owner, especially when milk is occasional and a local Bezzera dealer can support the exact unit.',
      'Its central limitation is equally clear. Coffee temperature is not a visible daily control, and the 0.5 L boiler makes milk sequential. Around the checked EUR 999 level, compare Profitec GO and LELIT Victoria for factory control, and compare BZ10 when repeated milk drinks define the household. The BZ09 wins only when its mechanical rhythm is the workflow you actually want.',
    ],
  },
  video: {
    id: 'H1wsPucESj8',
    title: 'BEZZERA BZ09PM | Machine expresso Barista | Le Test',
    creator: 'MaxiCoffee',
    published: '2017-04-28',
    note: 'An independent commercial demonstration of a regional BZ09 PM. It is useful for the physical workflow, but current specifications, voltage and price come from the dated manufacturer and retailer records.',
  },
});

const bz10Sources: Source[] = [
  { id: 'bz10-official', label: 'Bezzera: BZ10 official product page', href: 'https://www.bezzera.it/en/machines/bz10', note: 'Primary record for the heat exchanger, cartridge-heated group, PM push-button operation, vibration pump, 1.5 L boiler, 3 L tank, regional electrical ranges, dimensions and weight. Checked September 17, 2026.' },
  { id: 'bz10-brochure', label: 'Bezzera: BZ10 PM product brochure', href: 'https://www.bezzera.it/uploads/prod_images/BZ10/bz10pm-low.pdf', note: 'Manufacturer brochure used to cross-check layout and intended semi-professional workflow. Regional voltage, revision and box contents still require listing-level confirmation.' },
  { id: 'bz10-parts', label: 'Bezzera: official spare-parts portal', href: 'https://spareparts.bezzera.it/', note: 'Manufacturer route for model documentation and parts lookup. The portal does not establish local stock, labor cost or consumer eligibility.' },
  { id: 'bz10-wll-product', label: 'Whole Latte Love: Bezzera BZ10 Espresso Machine', href: 'https://www.wholelattelove.com/products/bezzera-bz10-espresso-machine', note: 'Current US retail and availability context checked September 17, 2026: $1,449 listing. Confirm color, stock, seller authorization and written warranty at checkout.' },
  { id: 'bz10-wll-review', label: 'Whole Latte Love: Bezzera BZ10 review', href: 'https://www.wholelattelove.com/blogs/reviews/bezzera-bz10-review', note: 'Commercial hands-on overview published August 26, 2019, useful for internal layout, cup workflow and comparison context. Current price comes from the separate dated product record.' },
  { id: 'bz10-coffeefriend', label: 'Coffee Friend Europe: Bezzera BZ10 PM listing', href: 'https://www.coffeefriend.eu/p/coffee-machine-bezzera-bz10-pm/', note: 'Current European offer and regional specification context. Price was EUR 1,049 on September 17, 2026; market, voltage and warranty differ from the US listing.' },
  { id: 'bz10-kaffee', label: 'Kaffeemacher: Bezzera BZ10 review', href: 'https://kaffeemacher.de/en/blogs/kaffeewissen/bezzera-bz10', note: 'Independent technical and practical review covering temperature behavior, dimensions, milk capacity and the BZ10 value proposition. Swiss and EU price context is kept regional.' },
  { id: 'bz10-alt-product', label: 'Alternative Brewing: Bezzera BZ10 Coffee Machine', href: 'https://alternativebrewing.com.au/products/bezzera-bz10-coffee-machine', note: 'Australian commercial demonstration and product context. Regional voltage, accessories and warranty are not transferred to a US purchase.' },
  { id: 'bz10-video', label: 'Alternative Brewing: Bezzera BZ10 Espresso Machine Review', href: 'https://www.youtube.com/watch?v=7nNZ7PyL0AE', note: 'Independent commercial demonstration published August 14, 2021. It shows operation and steaming but is not Coffeedant testing.' },
  { id: 'bz10-chronicles', label: 'Espresso Chronicles: Bezzera BZ10 owner review', href: 'https://espressochronicles.com/equipment/best-espresso-machine/bezzera-bz10/', note: 'Longer-term owner account used for warmup, routine and service themes. One owner cannot establish typical performance or reliability.' },
  { id: 'bz10-homegrounds', label: 'Home Grounds: Bezzera BZ10 review', href: 'https://www.homegrounds.co/bezzera-bz10-review/', note: 'Independent/commercial review updated January 21, 2025, used for workflow and competitive framing rather than exact current offer claims.' },
  { id: 'bz10-reddit', label: 'Reddit r/espresso: Barista Express to Bezzera BZ10 upgrade', href: 'https://www.reddit.com/r/espresso/comments/12ns2b3/just_upgraded_from_breville_barista_express_to_a/', note: 'Owner discussion about upgrade experience, flushing and basket choices. It is anecdotal and not a controlled comparison.' },
  { id: 'bz10-hb-repair', label: 'Home-Barista: Bezzera BZ10 repair discussion', href: 'https://www.home-barista.com/repairs/i-have-just-about-had-it-with-this-bezzera-bz10-t77738.html', note: 'Self-selected troubleshooting thread used to identify service questions. It does not support a model-wide failure rate.' },
  { id: 'bz10-wiki', label: 'KaffeeWiki: Bezzera BZ10', href: 'https://www.kaffeewiki.de/wiki/Bezzera_BZ10', note: 'Community technical reference for revision and maintenance context, last noted update July 14, 2024. Manufacturer records take priority for current specifications.' },
  { id: 'bz10-bz09', label: 'Bezzera: BZ09 official product page', href: 'https://www.bezzera.it/en/machines/bz09', note: 'Primary comparison source for the related lower-cost 0.5 L single-boiler model.' },
  { id: 'bz10-mara', label: 'LELIT: Mara X PL62X official product page', href: 'https://www.lelit.com/product/marax-pl62x/', note: 'Primary comparison source for a temperature-managed compact heat-exchanger alternative.' },
  { id: 'bz10-pro400', label: 'Profitec: Pro 400 official product page', href: 'https://www.profitec-espresso.com/en/products/pro-400', note: 'Primary comparison source for an E61 heat exchanger with selectable temperature and preinfusion functions.' },
  { id: 'bz10-silvia-pro', label: 'Rancilio North America: Silvia Pro X', href: 'https://www.ranciliogroupna.com/equipment/rancilio-silvia-pro-x/', note: 'Primary comparison source for a compact PID dual boiler with independent brew and steam temperature control.' },
];

const bz10Sections: Section[] = [
  {
    id: 'orientation', eyebrow: 'The buying decision', title: 'A compact heat exchanger that trades digital control for a fast bar rhythm', html: `
      <p>The Bezzera BZ10 is a narrow heat-exchanger machine built around two heat sources with different jobs. A 1.5-liter boiler supplies steam and heats fresh brew water through an internal exchanger. The proprietary BZ group uses two electric cartridges controlled by its own thermostat. A vibration pump draws from a three-liter reservoir, and a dual gauge reports boiler and pump pressure. The result is a 25 cm-wide machine that can pull espresso and steam milk at the same time. ${refs(['bz10-official','bz10-brochure'])}</p>
      <p>Bezzera lists both 110 to 120 V and 220 to 240 V electrical versions. The US retailer record showed $1,449 when checked September 17, 2026, while a European retailer showed EUR 1,049 for its regional machine. Those figures are not interchangeable after tax, voltage, plug, freight and warranty geography. Confirm the exact configuration and an authorized service route before ordering. ${refs(['bz10-official','bz10-wll-product','bz10-coffeefriend'])}</p>
      <p><strong>My short verdict:</strong> the BZ10 is attractive when the normal order contains several cappuccinos and the owner prefers tactile controls to menus. Its heated group and narrow case make it more distinctive than a generic heat exchanger. It still asks for heat-exchanger flushing judgment, has no displayed brew temperature or shot timer, and cannot set coffee and steam temperatures independently. Buyers near this price should compare the <a href="${internalHref('/espresso-machine/lelit-mara-x/')}">LELIT Mara X</a>, <a href="${internalHref('/espresso-machine/profitec-pro-400/')}">Profitec Pro 400</a> and compact dual-boiler options.</p>
      <div class="review-callout"><strong>The defining choice:</strong> BZ10 buys simultaneous coffee and steam. If most days contain straight espresso, the cheaper BZ09 or a PID single boiler can offer a simpler temperature story.</div>`,
  },
  {
    id: 'setup', eyebrow: 'The first week', title: 'Learn the idle flush and drink cadence before changing hardware', html: `
      <p>Installation begins with voltage, water and space, not coffee. Verify the data plate against the outlet, use the correct circuit, fill the reservoir and follow the regional manual for initial boiler filling. The stated body is 250 mm wide, 425 mm deep and 375 mm high, but the portafilter projects forward and the top tank needs clearance. At 19 kg, the machine is easier to position before the grinder and knock box claim the counter.</p>
      <p>A heat exchanger rewards routine. After a long idle, water held in the exchanger can be hotter than the intended brew condition. A flush moves that water and lets fresh supply enter. The right amount is not a fixed internet number because boiler pressure, idle time, ambient conditions, voltage and intended coffee all matter. Start with the official/dealer guidance for the exact machine, observe flow behavior, and change one variable at a time.</p>
      <ol>
        <li><strong>Day one:</strong> learn safe fill, heat, pump, hot-water and steam controls. Record the factory gauge behavior without adjusting anything.</li>
        <li><strong>Days two and three:</strong> choose one basket, dose and medium roast. Weigh the output and use grind to establish repeatable flow.</li>
        <li><strong>Days four and five:</strong> compare a shot after a short idle with one after a long idle, using a consistent flush routine and taste notes.</li>
        <li><strong>Days six and seven:</strong> prepare the largest household order while brewing and steaming overlap. That is the capacity the BZ10 is priced to provide.</li>
      </ol>
      `,
  },
  {
    id: 'espresso', eyebrow: 'Rating deep dive', title: 'Espresso can be strong, but temperature is managed by routine rather than a number', html: `
      <p>The BZ10 combines a conventional 58 mm coffee workflow with a less conventional heated group. The cartridges give the group its own thermostatic heat source, while brew water is heated as it crosses the exchanger inside the steam boiler. This arrangement can become repeatable once warm and understood. It does not display the water temperature reaching the puck.</p>
      <p>Long idle is the central heat-exchanger problem. Water can overheat in the exchanger, so the first flush may release energetic flow or steam. After several drinks, the thermal condition changes again. Experienced owners develop a routine based on idle state rather than mechanically flushing the same number of seconds. An external group thermometer might add information, but it is not a direct puck-temperature measurement and is not a factory BZ10 feature.</p>
      <p>Kaffeemacher's technical review, commercial demonstrations and owner reports broadly support the BZ10 as a capable espresso platform. Their exact warmup, flush and flavor observations are not interchangeable because coffees, grinders and protocols differ. Coffeedant did not reproduce those tests, so this rating recognizes the architecture while discounting the missing numeric control. ${refs(['bz10-kaffee','bz10-wll-review','bz10-video','bz10-chronicles'])}</p>`,
  },
  {
    id: 'milk', eyebrow: 'Rating deep dive', title: 'Milk service is the BZ10 reason to spend more than BZ09 money', html: `
      <p>The 1.5-liter boiler stores steam while the heat exchanger supplies brewing water, so coffee and milk tasks can overlap. That changes a two-drink breakfast more than a larger specification number suggests. One person can watch the shot while beginning to texture milk, then repeat without waiting for a shared boiler to climb and cool.</p>
      <p>The third drink is the meaningful trial. BZ10 can maintain a more coherent rhythm than a single boiler, but the grinder, dosing, basket clearing, pitcher rinsing and drink assembly may become the bottleneck. A dual boiler adds independent temperature settings, not automatic bar organization. For one occasional cappuccino, this capacity may be unused; for a family queue, it is the machine's clearest value.</p>
      <p>Steam safety matters. The wand, boiler water and group stay hot after the visible work ends. Children, loose cloth and hurried hands need clearance. A leaking valve or wand that will not close fully deserves service, not extra force. ${refs(['bz10-official','bz10-video','bz10-alt-product','bz10-homegrounds'])}</p>`,
  },
  {
    id: 'workflow', eyebrow: 'Rating deep dive', title: 'Fast drink production follows a deliberate warmup and idle-state routine', html: `
      <p>BZ10 avoids the long thermal path of a classic E61 group by heating the BZ group with cartridges, yet the 1.5-liter boiler, portafilter and cups still need time. Several reviewers and owners describe useful readiness around ten minutes, but that observation is not a manufacturer guarantee. Define readiness by repeatable results and the household's coffee, then use a timer if the manual permits scheduled power.</p>
      <p>The workflow becomes difficult when the owner treats every idle state the same. Too little flushing after a long rest can push an overheated first extraction; habitual large flushes waste water and may change the thermal balance unnecessarily. Learn observable cues from the exact machine with dealer guidance. Internet seconds are a starting question, not a calibration certificate.</p>
      <p>Compared with BZ09, BZ10 removes the brew-to-steam transition. Compared with a PID dual boiler, it hides the brew temperature and couples the steam-boiler condition to the exchanger. That middle ground is the whole proposition: more bar rhythm than a single boiler, less explicit control than a dual boiler. ${refs(['bz10-official','bz10-kaffee','bz10-chronicles','bz10-reddit'])}</p>`,
  },
  {
    id: 'build', eyebrow: 'Rating deep dive', title: 'Compact traditional hardware needs a dealer who understands the BZ group', html: `
      <p>Bezzera documents an AISI 304 stainless body, copper 1.5-liter boiler, vibration pump, automatic boiler fill, low-water protection and solenoid-controlled group. At 19 kg, it is a dense machine for its width. These are constructive signs, not evidence that every unit lasts a decade without repair.</p>
      <p>The BZ group is central to the machine and specific enough that service familiarity matters. Bezzera's parts portal and published spare-parts material are positives. A portal cannot guarantee regional inventory, turnaround or technician competence. Ask the dealer who performs warranty work, whether the machine must be shipped, which consumables are stocked and whether the exact voltage variant is supported.</p>
      <p>Owner forums contain both long-running examples and frustrating repair stories. The Home-Barista repair thread is useful because it makes service complexity visible, not because one difficult machine predicts another. Self-selected reports lack a denominator and mix age, water, modifications and maintenance. They should produce questions, never a numerical failure claim. ${refs(['bz10-parts','bz10-hb-repair','bz10-wiki'])}</p>
      <p>Water and heat drive much of the long-term risk. Scale can restrict the exchanger, valves and fill system. Corrosive water can create a different problem. Regular detergent backflushing removes coffee oil from the group path but does not descale the boiler. A qualified technician should diagnose internal scale and pressure issues rather than following a universal social-media recipe.</p>
      `,
  },
  {
    id: 'features', eyebrow: 'Rating deep dive', title: 'Strong core functions, little digital assistance and no independent boiler control', html: `
      <p>The BZ10 feature list is focused: heated BZ group, heat exchanger, 58 mm preparation, simultaneous brew and steam, separate hot-water and steam outlets, dual pressure gauge, three-liter tank, automatic boiler filling and low-water heat protection. The operator starts and stops the PM shot manually. There is no integrated grinder, displayed brew temperature, shot timer, app or direct plumbing on the current tank model.</p>
      <p>A pressurestat-style heat-exchanger system links boiler conditions to steam and brew-water behavior. That means increasing boiler pressure to chase stronger steam can change the thermal problem seen at the group. This is not equivalent to independent brew and steam PID settings. Buyers who want one temperature for light-roast espresso and another for steam should compare a dual boiler rather than expecting one adjustment to isolate both jobs.</p>
      <p>The cartridge-heated group remains meaningful. It reduces reliance on thermosyphon heating through a large passive assembly and helps explain the narrow footprint. It does not add flow control, pressure profiling or programmable preinfusion. The brew button is simple manual input, and any line-pressure style preinfusion claim would be inappropriate on a tank-fed vibration-pump setup without specific documentation.</p>
      <p>Pro 400 and Mara X represent the modern heat-exchanger response: preserve simultaneous steam while adding more explicit modes or temperature strategy. Silvia Pro X represents the next architectural step, with separate PID boilers. BZ10 remains compelling when directness and compactness matter more than settings. ${refs(['bz10-official','bz10-mara','bz10-pro400','bz10-silvia-pro'])}</p>`,
  },
  {
    id: 'value', eyebrow: 'Rating deep dive', title: 'At $1,449, the compact footprint and milk cadence must earn the premium', html: `
      <p>Whole Latte Love listed BZ10 at $1,449 on September 17, 2026. Coffee Friend's European offer was EUR 1,049. Currency conversion alone cannot compare them because voltage, tax, shipping, warranty and service differ. The valid price is the supported machine delivered to the buyer's region. ${refs(['bz10-wll-product','bz10-coffeefriend'])}</p>
      <p>At the US anchor, BZ10 offers simultaneous brewing and steaming in a notably narrow case. That is real value for a crowded counter and milk-heavy household. It does not offer a shot timer or visible brew-temperature setting, features that now appear on many similarly priced machines. The value argument must therefore rest on the BZ group, proven local support, compact layout and preferred manual experience.</p>
      <p>The closest rival depends on the order. BZ09 costs less and makes sense for espresso-first use. Mara X tries to manage heat-exchanger brew conditions more explicitly. Pro 400 adds selectable operating modes in a traditional E61 body. Silvia Pro X moves to dual boilers and independent temperature control, usually at a higher price but with less flush interpretation. Comparing only boiler volume misses the ownership differences.</p>
      `,
  },
  {
    id: 'ownership', eyebrow: 'Living with it', title: 'Cleaning, preventive service and the questions owner forums cannot answer', html: `
      <h3>After every session</h3>
      <p>Rinse the basket and portafilter, wipe the group-seal area, flush as directed, empty the tray before overflow and refresh the tank. Purge the steam wand before use, wipe it immediately afterward and purge briefly again. Run water through the hot-water outlet as the manual specifies. Do not store milk residue or a wet puck in a hot machine.</p>
      <h3>On the maintenance schedule</h3>
      <p>Backflush with water and detergent only as the exact manual directs. Replace group seals, screens and valve consumables by condition and service guidance. Test the water treatment plan rather than assuming a cartridge remains effective indefinitely. Boiler and heat-exchanger scale deserve diagnosis by a technician familiar with Bezzera, particularly when water history is unknown.</p>
      <h3>Known unknowns</h3>
      <p>Public evidence does not establish current parts lead time by postcode, an expected lifespan, a universal flush, exact cup clearance or a single warmup time. Those gaps are more honest than borrowed precision. Dealer access and the normal drink order should decide the purchase.</p>`,
  },
  {
    id: 'compare', eyebrow: 'Quick and detailed comparison', title: 'BZ10 against its closest heat-exchanger and dual-boiler choices', html: comparisonTablesHtml('Bezzera BZ10', [
      { name: 'Bezzera BZ10', quickDecision: 'Choose for a narrow body, heated BZ group and direct simultaneous milk workflow.', priceClass: '$1,449 checked US price', dimensions: '250 W x 425 D x 375 H mm; 19 kg', heating: '1.5 L heat exchanger plus cartridge-heated group', coffeeSetup: '58 mm, manual stop, dual gauge, no displayed temperature', milkWorkflow: 'Simultaneous brew and steam', bestFor: 'Compact milk-drink station' },
      { name: 'LELIT Mara X', href: '/espresso-machine/lelit-mara-x/', quickDecision: 'Choose for a heat exchanger designed around more explicit brew-temperature management.', priceClass: 'Similar compact HX class', dimensions: 'Narrow E61 body with deeper group projection', heating: 'Brew-priority heat exchanger', coffeeSetup: '58 mm E61 lever and operating modes', milkWorkflow: 'Simultaneous; mode behavior matters', bestFor: 'Buyer prioritizing HX thermal management' },
      { name: 'Profitec Pro 400', href: '/espresso-machine/profitec-pro-400/', quickDecision: 'Choose for E61 styling and selectable temperature/preinfusion functions.', priceClass: 'Usually above BZ10', dimensions: 'Compact traditional E61 footprint', heating: 'Heat exchanger with selectable controls', coffeeSetup: '58 mm lever, gauges and mode switches', milkWorkflow: 'Simultaneous, strong manual steam', bestFor: 'Traditional E61 buyer wanting modes' },
      { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', quickDecision: 'Choose for independent PID brew and steam boilers with less flush interpretation.', priceClass: 'Higher compact dual-boiler class', dimensions: 'Narrow but deeper steel dual-boiler body', heating: 'PID dual boiler', coffeeSetup: '58 mm, timer and soft infusion', milkWorkflow: 'Simultaneous with independent settings', bestFor: 'Recipe repeatability over HX ritual' },
    ], 'Current prices vary by country and offer. Verify voltage, version, seller authorization, warranty and included accessories before treating any row as equivalent.'),
  },
  {
    id: 'related', eyebrow: 'Four sensible routes', title: 'Match the architecture to the normal drink queue', html: recommendationCardsHtml([
      { kicker: 'Reviewed machine', title: 'Bezzera BZ10', text: 'For a narrow, direct heat-exchanger station serving repeated espresso and milk drinks.', href: '/espresso-machine/bezzera-bz10/', linkLabel: 'Review the BZ10 decision', featured: true },
      { kicker: 'More thermal guidance', title: 'LELIT Mara X', text: 'A compact heat exchanger designed to make brew-priority temperature management more explicit.', href: '/espresso-machine/lelit-mara-x/', linkLabel: 'Read the Mara X review' },
      { kicker: 'Traditional controls plus modes', title: 'Profitec Pro 400', text: 'Keeps E61 lever character while adding selectable temperature and preinfusion functions.', href: '/espresso-machine/profitec-pro-400/', linkLabel: 'Compare the Pro 400' },
      { kicker: 'Independent boiler control', title: 'Rancilio Silvia Pro X', text: 'A compact dual boiler for buyers who prefer visible PID control to heat-exchanger flushing judgment.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'See the Silvia Pro X' },
    ]),
  },
  {
    id: 'faq', eyebrow: 'Before ordering', title: 'Bezzera BZ10 questions answered', html: staticFaqHtml([
      { question: 'Is the Bezzera BZ10 a dual boiler?', answer: 'No. It uses one 1.5 L steam boiler with an internal heat exchanger for fresh brew water, plus electric cartridges that heat the group.' },
      { question: 'Can it brew and steam at the same time?', answer: 'Yes. The heat-exchanger architecture supports simultaneous espresso and manual steaming.' },
      { question: 'Does the BZ10 have a PID?', answer: 'The current BZ10 PM page does not list a digital brew PID or displayed set point. Boiler and group conditions are thermostat or pressure controlled.' },
      { question: 'Does it need a cooling flush?', answer: 'After a long idle, a flush can move overheated exchanger water. The useful amount depends on the machine state, so follow exact dealer guidance and learn observable cues rather than memorizing one duration.' },
      { question: 'How long does it take to warm up?', answer: 'Some independent owners report useful readiness around ten minutes, but Coffeedant does not turn that into a universal promise. Portafilter heat, voltage and repeatability standard matter.' },
      { question: 'What US price was checked?', answer: 'Whole Latte Love showed $1,449 on September 17, 2026. Price, stock, color and warranty can change.' },
      { question: 'BZ09 or BZ10?', answer: 'BZ09 for mainly espresso and occasional milk at lower cost. BZ10 for a household that will use simultaneous brewing and steaming regularly.' },
      { question: 'BZ10 or a dual boiler?', answer: 'BZ10 favors compact direct heat-exchanger ritual. A PID dual boiler is easier when coffee and steam temperatures must be set independently.' },
    ]),
  },
];

export const bezzeraBz10Review = buildResearchReview({
  slug: '/espresso-machine/bezzera-bz10/', productId: 'CD-EM-000051', brand: 'Bezzera', model: 'BZ10', sku: 'BZ10 PM',
  category: 'Semi-automatic espresso machine, heat exchanger', brandPath: '/bezzera/',
  title: 'Bezzera BZ10 review: compact heat-exchanger rhythm',
  description: 'A research-led Bezzera BZ10 review covering its heated BZ group, 1.5 L heat exchanger, simultaneous milk workflow, flush routine, current US price, service and closest rivals.',
  verdictLabel: 'For the compact milk-drink station',
  verdict: 'The BZ10 turns a narrow counter slot into a capable espresso-and-steam station. Its cartridge-heated group and 1.5 L heat exchanger support a quick manual bar rhythm, but temperature remains an inferred routine rather than a displayed recipe setting. At the $1,449 US price checked September 17, 2026, it is strongest when simultaneous milk service and local Bezzera support matter more than PID control or a shot timer.',
  assessment: 'A distinctive compact heat exchanger with strong milk cadence and an analog temperature learning curve.',
  image: 'https://www.bezzera.it/uploads/prod_images/BZ10/bz10-black-gauge-1.jpg',
  imageAlt: 'Bezzera BZ10 stainless steel heat-exchanger espresso machine viewed from the front',
  published: '2025-11-13', updated: UPDATED,
  authorNote: 'I approached the BZ10 as a current ownership decision and separated the US listing from European and Australian versions. I checked Bezzera specifications, current prices, independent technical reviews, demonstrations, comparison machines and owner reports. I have not physically tested this machine.',
  basisDisclosure: disclosure,
  price: { label: 'Checked US retailer price', msrp: '$1,449.00', typical: 'Machine only; confirm color, stock and written warranty', currency: 'USD', numeric: '1449.00', checked: 'September 17, 2026' },
  links: [
    { label: 'Check current US price', href: 'https://www.wholelattelove.com/products/bezzera-bz10-espresso-machine', note: 'Price and availability can change', primary: true },
    { label: 'Check Bezzera specifications', href: 'https://www.bezzera.it/en/machines/bz10', note: 'Official manufacturer page' },
    { label: 'Find an authorized reseller', href: 'https://www.bezzera.it/en/resellers', note: 'Confirm exact version, service and warranty' },
  ],
  facts: [
    { label: 'Heating', value: '1.5 L copper boiler with heat exchanger' },
    { label: 'Group', value: '58 mm BZ group with two cartridge heaters' },
    { label: 'Water', value: '3 L removable tank; vibration pump' },
    { label: 'Controls', value: 'Manual PM shot button; dual pressure gauge' },
    { label: 'Milk', value: 'Simultaneous brew and steam; separate hot water' },
    { label: 'Temperature', value: 'No displayed brew PID on current PM page' },
    { label: 'Size', value: '250 W x 425 D x 375 H mm' },
    { label: 'Weight', value: '19 kg net' },
  ],
  quickAnswers: [
    { question: 'The one-line decision?', answer: 'Choose it for compact simultaneous espresso and steam, provided you accept heat-exchanger flush judgment.' },
    { question: 'Is it a dual boiler?', answer: 'No. One steam boiler contains a heat exchanger for brew water; the group is electrically heated.' },
    { question: 'Does it have a PID?', answer: 'No displayed brew-temperature PID is listed for the current BZ10 PM.' },
    { question: 'Current US price?', answer: '$1,449 at the checked retailer on September 17, 2026; offers can change.' },
    { question: 'Does it need a grinder?', answer: 'Yes. A precise espresso grinder, scale and consistent basket preparation remain essential.' },
    { question: 'Main alternative?', answer: 'LELIT Mara X for a different HX temperature strategy, or Silvia Pro X for independent PID boilers.' },
  ],
  bestFor: [
    'Milk-drink household that needs espresso and steam at the same time',
    'Buyer fitting a serious 58 mm machine into a narrow counter space',
    'Owner who prefers direct switches and gauges to menus and apps',
  ],
  avoidIf: [
    'You want a displayed brew temperature and shot timer',
    'You do not want to learn an idle-dependent heat-exchanger flush',
    'Local Bezzera service and correct-voltage parts are difficult to reach',
  ],
  pros: [
    'Simultaneous brewing and steaming from a narrow 25 cm case',
    'Actively heated BZ group with 58 mm preparation',
    'Separate steam and hot-water outlets with dual gauge',
    'Traditional construction and official parts route',
  ],
  cons: [
    'No displayed brew PID or built-in shot timer',
    'Long-idle temperature requires a learned flush routine',
    'Vibration pump and tank only on the current model',
    'Regional revisions, voltage and service coverage require verification',
  ],
  dimensions: [
    dimension('espresso', 8.2,
      'The heated 58 mm group can be repeatable, but brew temperature is not displayed.',
      'Strong for a house recipe, less transparent for frequent coffee changes.',
      'Documented design and independent reviews',
      ['bz10-official','bz10-kaffee','bz10-wll-review','bz10-chronicles'], 'espresso', 'A capable platform with an inferred temperature state',
      [
        'Fresh water crosses the heat exchanger while cartridge heaters stabilize the group, giving the BZ10 a different thermal layout from a passive E61 heat exchanger.',
      ],
      [
        { signal: 'Heated BZ group', evidence: 'Bezzera specifies two cartridge elements controlled by a thermostat.', decision: 'Group heat has active control, but the user does not see puck-water temperature.' },
        { signal: 'Heat exchanger', evidence: 'Fresh brew water travels through the 1.5 L boiler environment.', decision: 'After idle, a cooling flush can be part of the recipe.' },
      ],
      [
        { signal: 'First post-idle shot tastes harsh', guidance: 'Standardize the cooling flush before changing several recipe variables.' },
        { signal: 'Normal gauge but uneven cup', guidance: 'Inspect distribution and channeling rather than treating pressure as a flavor score.' },
      ],
      'No Coffeedant temperature, pressure or extraction measurements are claimed.'),
    dimension('milk', 8.6,
      'The 1.5 L boiler allows overlapping espresso and milk work in a compact body.',
      'Easy to justify when two or more milk drinks are normal.',
      'Documented design and demonstrations',
      ['bz10-official','bz10-video','bz10-alt-product','bz10-homegrounds'], 'milk', 'Steam capacity becomes useful only in the complete drink queue',
      [
        'Simultaneous operation removes the shared-boiler climb and cool-down cycle, so the operator can organize drinks rather than wait for modes.',
      ],
      [
        { signal: 'Dedicated steam path', evidence: 'The boiler remains in steam service while brew water uses the exchanger.', decision: 'Espresso and milk tasks can overlap.' },
        { signal: 'Independent demonstrations', evidence: 'Multiple regional sources show substantial manual steam.', decision: 'Capability is established, while exact timing remains setup-dependent.' },
      ],
      [
        { signal: 'Large dry bubbles', guidance: 'Add less air at the beginning, then establish a stable roll.' },
        { signal: 'Steam valve drips or will not close', guidance: 'Stop forcing it and arrange seal or valve service.' },
      ],
      'Steam time depends on regional power, pressure, tip, milk, pitcher and operator technique.'),
    dimension('workflow', 8.0,
      'Direct controls and simultaneous steam create a quick rhythm, while flushing adds judgment.',
      'Efficient once learned, but never push-button.',
      'Documented controls and workflow evidence',
      ['bz10-official','bz10-kaffee','bz10-video','bz10-reddit'], 'workflow', 'Fast after it is stable is different from instant',
      [
        'The BZ group can reduce the wait associated with heating a large passive group, but boiler, basket and portafilter still have thermal mass.',
      ],
      [
        { signal: 'Manual push button', evidence: 'The PM description starts and stops the pump by button.', decision: 'Use a scale and timer; do not expect volumetric dosing.' },
        { signal: 'Simultaneous work', evidence: 'Heat exchanger separates brew-water path from stored steam.', decision: 'Milk-drink throughput is materially better than BZ09.' },
      ],
      [
        { signal: 'Long-idle shots vary', guidance: 'Record idle length and flush cue until the routine becomes predictable.' },
        { signal: 'Morning service still feels slow', guidance: 'Time grinding, puck prep, steaming and cleanup to find the actual bottleneck.' },
      ],
      'Reported ten-minute readiness is owner context, not a manufacturer guarantee.'),
    dimension('build', 8.3,
      'Dense traditional hardware supports repair, but the BZ group needs local expertise.',
      'Good when a dealer supports the exact regional version.',
      'Documented construction and owner context',
      ['bz10-official','bz10-parts','bz10-hb-repair','bz10-wiki'], 'build', 'Parts diagrams matter more when a technician can act on them',
      [
        'The machine uses familiar boiler, pump, valve and solenoid concepts around Bezzera’s own electrically heated group.',
      ],
      [
        { signal: 'Official parts portal', evidence: 'Manufacturer provides a route to documentation and parts search.', decision: 'Verify dealer inventory and labor before relying on it.' },
        { signal: 'Repair-thread outliers', evidence: 'Owner forums include difficult failures without a denominator.', decision: 'Use reported modes for inspection, never a failure-rate claim.' },
      ],
      [
        { signal: 'Leak, steam where it should not be or electrical trip', guidance: 'Switch off, unplug safely and use qualified service.' },
        { signal: 'Buying outside the region', guidance: 'Obtain written voltage, warranty and parts-support confirmation.' },
      ],
      'Neither a forum success story nor a repair thread establishes expected lifespan.'),
    dimension('features', 7.0,
      'Heated group and dual gauges are strong, but temperature, timer and independent settings are absent.',
      'Good for analog bar work, sparse for recipe feedback.',
      'Current features and rival specifications',
      ['bz10-official','bz10-mara','bz10-pro400','bz10-silvia-pro'], 'features', 'The right functions for service, fewer controls for experimentation',
      [
        'BZ10 prioritizes simultaneous coffee and steam, pressure visibility and direct controls over a digital interface.',
      ],
      [
        { signal: 'Heated group plus HX', evidence: 'Two thermal subsystems support compact simultaneous operation.', decision: 'Distinct architecture, still without a displayed brew set point.' },
        { signal: 'Manual PM control', evidence: 'Shot starts and stops by button on the current description.', decision: 'Flexible by weight, not hands-off volumetric service.' },
      ],
      [
        { signal: 'Wanting a precise light-roast set point', guidance: 'Compare a PID dual boiler before adding external sensors.' },
        { signal: 'Expecting automatic shot volume', guidance: 'Verify version; the PM workflow reviewed here stops manually.' },
      ],
      'Aftermarket sensors and modifications are not counted as factory features.'),
    dimension('value', 7.7,
      'The $1,449 anchor is competitive for compact simultaneous milk service.',
      'Strong for a supported milk station, weaker for espresso-only use.',
      'Dated offers and rival comparison',
      ['bz10-wll-product','bz10-coffeefriend','bz10-bz09','bz10-mara','bz10-silvia-pro'], 'value', 'Pay for the workflow you will repeat',
      [
        'A current US offer makes comparison concrete, while regional voltage and warranty prevent casual currency conversion.',
      ],
      [
        { signal: '$1,449 checked US listing', evidence: 'Whole Latte Love provided a dated current offer.', decision: 'Recheck stock, color, seller and written warranty at purchase.' },
        { signal: 'Dual-boiler step', evidence: 'Silvia Pro X adds independent temperatures at a higher class.', decision: 'Repeated recipe changes can justify spending more for clarity.' },
      ],
      [
        { signal: 'Budget leaves a weak grinder', guidance: 'Protect grinding quality and choose a less expensive brewer.' },
        { signal: 'One espresso is the normal order', guidance: 'Compare PID single boilers and BZ09 before paying for steam capacity.' },
      ],
      'Retail prices are snapshots; no residual value or lifespan is assumed.'),
  ],
  alternatives: [
    { name: 'LELIT Mara X', reason: 'A compact heat exchanger with a more explicit brew-priority temperature strategy.', href: '/espresso-machine/lelit-mara-x/' },
    { name: 'Profitec Pro 400', reason: 'E61 heat-exchanger styling with selectable temperature and preinfusion modes.', href: '/espresso-machine/profitec-pro-400/' },
    { name: 'Rancilio Silvia Pro X', reason: 'Independent PID boilers for transparent brew and steam control.', href: '/espresso-machine/rancilio-silvia-pro-x/' },
  ],
  article: {
    methodology: `<p>I began with Bezzera's current BZ10 product page, brochure and official parts route, then separated the 110 to 120 V US context from 220 to 240 V European and Australian material. Architecture and workflow were cross-checked across Kaffeemacher, Whole Latte Love, Alternative Brewing, Home Grounds and a longer owner review. Reddit and Home-Barista were used as self-selected owner pools to identify questions, never to estimate reliability. Comparison claims were checked against official BZ09, LELIT Mara X, Profitec Pro 400 and Rancilio Silvia Pro X records. The US $1,449 and EU EUR 1,049 offers were checked September 17, 2026. Coffeedant did not measure temperature, pressure, steaming time or flavor on this machine.</p>`,
    sections: bz10Sections,
    sources: bz10Sources,
    finalTitle: 'Buy the BZ10 when simultaneous milk service earns its place every day',
    finalVerdict: [
      'The Bezzera BZ10 is a persuasive compact heat exchanger. Its electrically heated BZ group, 1.5 L boiler, separate steam and water outlets, dual gauge and 25 cm width create a serious milk-drink station without a sprawling case.',
      'The tradeoff is temperature visibility. Long-idle flushing and recent use shape the brew condition, while the panel provides pressure rather than a numeric coffee setting. At the checked $1,449, buy it when you want that direct routine and have local Bezzera support. Choose Mara X for a different HX-management concept, Pro 400 for E61 modes, or Silvia Pro X when independent PID temperatures matter more than analog compactness.',
    ],
  },
  video: {
    id: '7nNZ7PyL0AE',
    title: 'Bezzera BZ10 Espresso Machine Review',
    creator: 'Alternative Brewing',
    published: '2021-08-14',
    note: 'An independent commercial demonstration of BZ10 operation and milk work. It uses an Australian regional unit, so voltage, bundle, price and warranty are not transferred to the US listing.',
  },
});

export const bezzeraUpgradeAReviews = [bezzeraBz09Review, bezzeraBz10Review];
