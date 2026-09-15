import type { MachineReviewData } from '../reviews';
import {
  buildResearchReview,
  comparisonTablesHtml,
  faqHtml,
  internalHref,
  recommendationCardsHtml,
  type ResearchDimensionInput,
} from '../batch-review-builder';

type Source = MachineReviewData['article']['sources'][number];
type Section = MachineReviewData['article']['sections'][number];

const UPDATED = '2026-09-15';
const BRAND_PATH = '/de-longhi/';

const basisDisclosure =
  "This is a research-led assessment built from the exact-region manufacturer material, independent hands-on testing, demonstrations, comparison evidence, owner discussions, and dated US price context cited below. Coffeedant has not physically tested this machine, so the scores are editorial judgments rather than disguised measurements.";

const sourceLinks = (ids: string[]) => ids.map((id) => `<a href="#${id}">[source]</a>`).join(' ');

const dimension = (
  id: ResearchDimensionInput['id'],
  score: number,
  reason: string,
  buyerMeaning: string,
  evidenceStatus: string,
  sourceIds: string[],
  deepDiveId: string,
  title: string,
  intro: string[],
  evidence: ResearchDimensionInput['evidence'],
  diagnosis: ResearchDimensionInput['diagnosis'],
  note: string,
): ResearchDimensionInput => ({
  id, score, reason, buyerMeaning, evidenceStatus, sourceIds, deepDiveId, title,
  intro, evidence, diagnosis, note,
});

const review = (input: Parameters<typeof buildResearchReview>[0]): MachineReviewData =>
  buildResearchReview(input);

const dedicaSources: Source[] = [
  { id: 'dedica-support', label: "De'Longhi US: Dedica DeLuxe EC685M Support Center", href: 'https://www.delonghi.com/en-us/s/EC685M', note: 'Exact US support, manuals, setup, care and service; checked September 15, 2026.' },
  { id: 'dedica-manual', label: "De'Longhi: EC685 quick-start guide", href: 'https://library.delonghigroup.com/assetbank-delonghi/action/directLinkImage?assetId=282348&download=true', note: 'Official quick-start guide for controls, settings, baskets, steaming and care.' },
  { id: 'dedica-parts', label: "De'Longhi US: spare-parts and out-of-warranty support", href: 'https://www.delonghi.com/en-us/customer-services/spare-parts', note: 'Current route; verify EC685M compatibility and stock.' },
  { id: 'dedica-accessories', label: "De'Longhi US: coffee accessories and maintenance", href: 'https://www.delonghi.com/en-us/c/coffee-e-espresso/accessories-e-maintenance', note: 'Current US catalog; verify EC685M compatibility.' },
  { id: 'dedica-warranty', label: "De'Longhi US: warranty information", href: 'https://www.delonghi.com/en-us/warranty-information', note: 'Current general route; verify legacy-stock coverage.' },
  { id: 'dedica-techgearlab', label: "GearLab: De'Longhi EC685M tested review", href: 'https://www.techgearlab.com/reviews/kitchen/espresso-machine/delonghi-ec685m', note: 'Independent exact-model test.' },
  { id: 'dedica-coffeeness', label: "Coffeeness: De'Longhi Dedica review", href: 'https://www.coffeeness.de/en/delonghi-dedica-review/', note: 'Independent test and current-market context for EC685, including its temperature settings, narrow footprint and limitations.' },
  { id: 'dedica-coffeeblog', label: 'Coffee Blog: Dedica EC685 review, updated 2026', href: 'https://coffeeblog.co.uk/delonghi-dedica-ec685-review/', note: 'Long-form independent owner/test perspective, including a modern grinder-and-basket workflow and value judgment.' },
  { id: 'dedica-tom', label: "Tom's Coffee Corner: Dedica EC685 review", href: 'https://tomscoffeecorner.com/delonghi-dedica-the-ultimate-review/', note: 'Independent testing and demonstrations across the stock and enthusiast-style workflow.' },
  { id: 'dedica-wll', label: 'Whole Latte Love: Dedica Arte product and workflow overview', href: 'https://www.wholelattelove.com/products/delonghi-ec885m-dedica-arte-espresso-machine', note: 'Retailer demonstration of the successor EC885M. Used only to explain the alternative, not as evidence for an EC685 feature.' },
  { id: 'dedica-video', label: "Tom's Coffee Corner: Delonghi Dedica Home Espresso Machine Review & Test", href: 'https://www.youtube.com/watch?v=G-GeZ9fbajw', note: 'Independent visual demonstration published July 11, 2022 and selected for the embedded video.' },
  { id: 'dedica-owner-guide', label: 'r/espresso: EC685 advanced-beginner guide', href: 'https://www.reddit.com/r/espresso/comments/1o4nsoh/delonghi_dedica_ec685m_a_beginners_guide_by_an/', note: 'Owner pool one: a detailed community workflow discussion. Anecdotal advice was treated as a pattern, not a measured product claim.' },
  { id: 'dedica-owner-ama', label: 'r/espresso: Dedica owner review and AMA', href: 'https://www.reddit.com/r/espresso/comments/197qgzr/delonghi_dedica_reviewama/', note: 'Owner pool two: comparative owner experience, including Bambino and stock-hardware trade-offs.' },
  { id: 'dedica-owner-repair', label: 'r/espresso: long-owned Dedica repair discussion', href: 'https://www.reddit.com/r/espresso/comments/1j7p0pz/is_my_machine_repairable_delonghi_dedica/', note: 'Owner pool three: a repair question after roughly eight to nine years. One machine does not establish a lifespan or failure rate.' },
  { id: 'dedica-owner-bestbuy', label: 'Best Buy: Dedica EC685 buyer-review pool', href: 'https://www.bestbuy.com/product/delonghi-dedica-espresso-machine-white/J7G8ZGSFV2/sku/6307923/reviews', note: 'Distinct US retailer owner pool for footprint, cleaning and expectation themes. Incentivized and individual reviews are not treated as representative.' },
  { id: 'dedica-owner-walmart', label: 'Walmart: Dedica EC685 buyer-review pool', href: 'https://www.walmart.com/ip/De-Longhi-15-Bar-Stainless-Steel-Espresso-and-Cappuccino-Machine/40440289', note: 'Distinct retailer owner pool with long-running beginner-use feedback; listing variants and self-selected reviews limit inference.' },
  { id: 'dedica-retailer', label: 'Amazon US: EC685M retailer listing', href: 'https://amzn.to/4cdohP2', note: 'Affiliate retailer route inherited from the legacy Coffeedant review; price and seller can change.' },
  { id: 'dedica-legacy', label: 'Coffeedant legacy Dedica article', href: 'https://coffeedant.com/espresso-machine/delonghi-dedica/', note: 'Previous Coffeedant page used for continuity of scope and internal product identity, not treated as independent evidence.' },
];

const dedicaSections: Section[] = [
  {
    id: 'orientation', eyebrow: 'The buying decision', title: 'A tiny machine can be a sensible first step, but only at the right price',
    html: `
      <p>The De'Longhi Dedica EC685 is easy to understand when you ignore the family advertising and look at the job it performs. It is a very narrow, thermoblock-heated semi-automatic machine built around a 51 mm portafilter, programmable single- and double-cup buttons, three temperature choices and a Panarello-style milk attachment. You handle the coffee. It handles heating and stops the programmed water delivery. That makes it more involved than a capsule machine and far less adjustable than a prosumer espresso setup.</p>
      <p>I would consider it for a small kitchen, a modest budget and one or two drinks at a time. I would not buy it as an open-ended enthusiast platform. The supplied pressurized baskets are deliberately forgiving of supermarket preground coffee, but they also hide some of the relationship between grind, preparation and flow. A fresh-grinding, non-pressurized path is possible with third-party parts, yet that path adds a grinder, basket, tamper and learning time. Once those purchases are counted, the apparent bargain can approach a stronger machine.</p>
      <p>The exact model matters. This review covers the <strong>US-market Dedica DeLuxe EC685M</strong>, product CD-EM-000012, not the EC885 Dedica Arte, EC890 Dedica Duo, EC900 Dedica Maestro or EC950 Maestro Plus. De'Longhi still maintains a US support page for EC685M, but it does not present the model as a current direct-sale product. Remaining-stock and marketplace listings therefore need more scrutiny than an active manufacturer listing. ${sourceLinks(['dedica-support', 'dedica-retailer'])}</p>
      <div class="review-table-wrap" role="region" aria-label="Dedica EC685 buying context" tabindex="0"><table class="review-table"><caption>What you are buying, and what stays your responsibility</caption><thead><tr><th scope="col">Part of the routine</th><th scope="col">EC685 contribution</th><th scope="col">Your contribution</th></tr></thead><tbody><tr><th scope="row">Coffee preparation</th><td data-label="EC685 contribution">A removable 51 mm basket and programmable delivery</td><td data-label="Your contribution">Choose coffee, dose, distribute, tamp and clean the basket</td></tr><tr><th scope="row">Temperature</th><td data-label="EC685 contribution">Thermoblock and three menu levels</td><td data-label="Your contribution">Preheat the cup and portafilter when repeatability matters</td></tr><tr><th scope="row">Milk</th><td data-label="EC685 contribution">Steam/hot-milk selector on the Panarello assembly</td><td data-label="Your contribution">Choose the milk, position the jug and stop at the desired result</td></tr><tr><th scope="row">Consistency</th><td data-label="EC685 contribution">Stored water quantities</td><td data-label="Your contribution">Keep the coffee dose, grind and preparation consistent</td></tr></tbody></table></div>
      <p>The strongest case is physical: the body is roughly six inches wide, so it can occupy a strip of counter that excludes most grinder-equipped machines. The weak case is “15 bars.” Pump pressure is not a promise of balanced espresso, and the EC685's result still depends on coffee, basket type, water temperature and preparation. Buy the routine and footprint, not the biggest number on the box.</p>
    `,
  },
  {
    id: 'setup', eyebrow: 'Before the first shot', title: 'Budget for the coffee station, not just the six-inch machine',
    html: `
      <p>The removable rear tank holds about 35 fluid ounces. Rear access is the detail most likely to be missed under cabinets. You need enough height and hand clearance to lift or slide it out, and you need frontal room to withdraw the drip tray. De'Longhi lists a maximum cup height around 4.5 inches, so a tall travel mug is not its intended vessel. ${sourceLinks(['dedica-manual', 'dedica-parts'])}</p>
      <h3>Start with the supplied system before buying a modification list</h3>
      <p>The original package uses pressurized filter baskets and supports E.S.E. pods. A pressurized basket creates much of the flow restriction after the coffee bed, which is why it can make a visually convincing drink from coffee that would run far too quickly through a conventional basket. That is useful for a beginner with preground coffee. It is also why internet recipes designed around a non-pressurized basket should not be copied blindly.</p>
      <p>A scale is more useful than a decorative accessory bundle. Weighing the dose and finished beverage gives you two stable reference points. If you remain with the pressurized basket, a scale still helps control strength and prevents the programmed button from stretching a shot simply because the cup has space left.</p>
      <h3>Only upgrade when you can name the problem</h3>
      <p>A non-pressurized basket gives the coffee bed more responsibility for resistance and can make grinder changes more meaningful. It also exposes poor distribution, inconsistent grinding and stale coffee. That is not a free quality upgrade. It is a move to a more demanding system.</p>
      <p>If you take that route, verify the exact 51 mm basket, ear pattern and handle clearance. Keep the original parts so you can return to the documented configuration when diagnosing a problem.</p>
    `,
  },
  {
    id: 'workflow', eyebrow: 'Living with it', title: 'The EC685 is fast to wake up and slower to master',
    html: `
      <p>The thermoblock reduces the wait for the machine to signal readiness. That is different from the whole coffee path being thoroughly warm. The metal basket, portafilter and cup can still pull heat from a small drink, especially on the first shot. An empty-water flush through the locked-in portafilter is a practical warming step when the first espresso tastes notably cooler or sharper than the second.</p>
      <p>A simple morning routine is: fill with fresh water, switch on, prepare the coffee while the machine readies, run a brief warming flush, dry the basket, dose and tamp, then brew over a scale. Knock out the coffee, rinse the basket and wipe the group area before residue dries. For milk, steam after brewing, wipe the attachment immediately and purge it according to the manual.</p>
      <h3>Two drinks change the pace</h3>
      <p>After steaming, the thermoblock must return to brewing temperature. De'Longhi's support material explicitly covers quickly cooling the boiler path. Follow that sequence rather than forcing another extraction while the machine remains in steam mode. The waiting is not enormous, but it is part of the real workflow that a “ready in seconds” claim does not describe. ${sourceLinks(['dedica-support', 'dedica-manual'])}</p>
      <p>Independent reviewers differ on how satisfying its espresso and milk can be. That disagreement is expected when coffee, basket choice and standards vary; it supports a conditional verdict, not a universal taste claim. ${sourceLinks(['dedica-techgearlab', 'dedica-coffeeness', 'dedica-owner-ama'])}</p>
    `,
  },
  {
    id: 'espresso', eyebrow: 'What reaches the cup', title: 'Pressurized convenience and enthusiast potential are two different EC685 experiences',
    html: `
      <p>With the stock basket, the Dedica is designed to make the brewing process tolerant of coffee that is not dialed in with espresso-level precision. The basket's restricted outlet helps build pressure and crema-like foam. That can make a pleasant, concentrated base for cappuccino with little equipment. It cannot restore aromas lost from old coffee or make a long programmed pour taste like a carefully controlled double shot.</p>
      <p>I would begin with a medium or medium-dark coffee and a modest beverage ratio. Weigh what goes in and what comes out, then stop by weight while learning instead of trusting the factory volume. Because basket capacity and coffee density vary, Coffeedant is not presenting a universal gram dose as a tested EC685 recipe. Fill within the manual's guidance, keep the puck clear of the shower area and repeat the same preparation.</p>
      <h3>The non-pressurized route raises both the ceiling and the cost</h3>
      <p>Independent reviewers and a large owner community have shown that the EC685 can be used with a conventional basket and espresso-capable grinder. In that configuration, grind size and puck preparation control the flow more directly. A useful starting ratio is roughly two parts beverage for one part dry coffee by weight, adjusted by taste. That is editorial guidance, not a Coffeedant-tested formula for this machine.</p>
      <p>The three temperature choices provide some help across roasts, but they are broad settings rather than measured user-selected brew temperatures. A higher setting and thorough preheating can help a lighter coffee, yet the machine does not become a precision temperature platform. If exploring light-roast espresso is the primary goal, saving for stronger thermal control and a capable grinder is more rational than building an expensive EC685 accessory collection.</p>
      <p>Our score reflects the documented stock proposition. Upgrade potential is optional rather than silently credited to the base purchase. ${sourceLinks(['dedica-coffeeblog', 'dedica-tom', 'dedica-owner-guide'])}</p>
    `,
  },
  {
    id: 'milk', eyebrow: 'Cappuccino duty', title: 'The Panarello is forgiving foam hardware, not a silent automatic frother',
    html: `
      <p>The EC685's steam assembly is intended to simplify aeration. In cappuccino mode, the sleeve draws air into the milk; the hot-milk position reduces that effect. This is manual milk work: you still select the mode, use a jug, position the attachment and decide when to stop.</p>
      <p>For a first attempt, use cold milk in a cold jug and leave expansion room. Purge condensation before placing the tip, then keep the milk moving rather than holding the jug rigidly. Stop before the milk becomes unpleasantly hot, wipe the wand immediately and purge again. The exact safe sequence belongs to the manual, especially when removing or cleaning the sleeve.</p>
      <p>The attachment creates generous cappuccino foam more readily than fine microfoam. Owner modifications are not the standard workflow and can increase burn and cleaning risk.</p>
      <p>If you want one latte each morning and enjoy learning, the Dedica can be adequate. If two people expect consistent flat whites with minimal practice, a Bambino Plus or an automatic-milk system better matches the job. The EC885 Dedica Arte also uses a different wand and is the closer current-family alternative; its milk evidence should not be backfilled onto the EC685. ${sourceLinks(['dedica-manual', 'dedica-wll'])}</p>
      <p>Steam is sequential with brewing, and the machine needs a cleanup step every time milk touches the attachment. Buyers who regard wiping and purging as optional will quickly turn a tolerable system into a blocked or unpleasant one. The simplest long-term milk improvement is not a new tip; it is immediate cleaning.</p>
    `,
  },
  {
    id: 'build', eyebrow: 'Small-appliance reality', title: 'Metal cladding makes it tidy; the platform remains an entry appliance',
    html: `
      <p>Do not translate visible metal into an all-metal internal build. The product is a mixed-material thermoblock appliance. Its value comes from packaging and availability, not from promising the service life or component access of a traditional boiler machine. De'Longhi maintains support, service-center and spare-part routes, but current compatibility and labor economics matter on an older model. ${sourceLinks(['dedica-support', 'dedica-parts'])}</p>
      <p>One long-owner repair discussion describes a Dedica-like unit used for eight or nine years before a fault. That is encouraging as an anecdote and useless as a population lifespan. Other threads contain early complaints and user-caused blockages. Without service-rate data, it would be dishonest to convert either group into a reliability percentage. ${sourceLinks(['dedica-owner-repair'])}</p>
    `,
  },
  {
    id: 'features', eyebrow: 'Controls that matter', title: 'Three buttons hide useful settings, but they do not replace technique',
    html: `
      <p>The control panel looks minimal because settings are entered through button combinations. The EC685 supports programmable coffee quantities, three temperature levels, water-hardness setting, standby timing and default reset. Keep the manual available until the indicator patterns are familiar. Guessing from blinking lights is a poor way to change a temperature menu.</p>
      <p>The three temperature selections are meaningful at this price, but the machine does not display an exact brew-water temperature and Coffeedant has not measured it. We can say the setting exists and that preheating matters; we cannot promise a particular temperature at the puck. That distinction protects the buyer from false precision.</p>
    `,
  },
  {
    id: 'owners', eyebrow: 'Patterns, not votes', title: 'Owners agree on the footprint and disagree on how far the EC685 should be pushed',
    html: `
      <p>Across the owner pools, the common praise is predictable: the Dedica fits, warms quickly, looks tidy and can make a satisfying milk-drink base without a large investment. The common cautions are equally consistent: the stock system has a ceiling, temperature management can affect the first shot, and a meaningful enthusiast upgrade needs a proper grinder.</p>
      <p>Long ownership appears in community posts, while retailer pools contain both easy-use praise and repair or low-flow questions. Low flow can come from grind, a blocked basket, scale or a fault. These self-selected pools cannot identify population rates, so they prepare readers for questions rather than establish common defects. ${sourceLinks(['dedica-owner-guide', 'dedica-owner-repair', 'dedica-owner-bestbuy', 'dedica-owner-walmart'])}</p>
    `,
  },
  {
    id: 'ownership', eyebrow: 'Care and real cost', title: 'Water, blocked baskets and milk residue matter more than cosmetic polish',
    html: `
      <p>After each use, discard the puck, rinse the basket and clear coffee from the group area. After milk, wipe the steam tube while residue is wet and purge it. Periodically separate and clean the approved steam components as the manual directs. Never assume a clear outer hole means the internal air and steam paths are clean.</p>
      <p>The machine's water-hardness setting informs descale timing. Use the indicated descaling program and an approved product, protect the worktop from splashes and allow enough time to rinse the path fully. Hard water raises maintenance demand; extremely pure or unsuitable water can create other taste and sensing problems. Follow De'Longhi's water guidance instead of choosing water only by marketing language.</p>
      <p>Ownership cost includes coffee, descaler and perhaps a grinder, scale, milk jug or replacement gasket. On a legacy unit, it also includes uncertainty about warranty and parts. De'Longhi's current US site promotes three-year coverage generally, while the EC685M page is a support page rather than a live product offer. Confirm the invoice, authorized-seller status, exact terms and accessory compatibility instead of repeating a generic banner as an EC685 warranty promise. ${sourceLinks(['dedica-warranty', 'dedica-support', 'dedica-accessories'])}</p>
    `,
  },
  {
    id: 'compare', eyebrow: 'Spend against your real priority', title: 'The closest alternatives solve different parts of the Dedica problem',
    html: comparisonTablesHtml('De\'Longhi Dedica EC685', [
      { name: "De'Longhi Dedica EC685", quickDecision: 'Choose only when narrow width and a low entry price outweigh upgrade headroom.', priceClass: 'Legacy stock, often around $200–250', dimensions: 'Approx. 5.9 W × 13 D × 12 H in', heating: 'Single thermoblock; brew and steam in sequence', coffeeSetup: '51 mm portafilter; stock pressurized baskets; E.S.E. pod support', milkWorkflow: 'Manual Panarello with cappuccino/hot-milk selector', bestFor: 'Tiny counters and one or two simple drinks' },
      { name: 'Breville Bambino Plus', href: '/espresso-machine/breville-bambino/', quickDecision: 'Spend more for automatic milk, stronger included baskets and a friendlier shared-household routine.', priceClass: '$499.95 official price checked', dimensions: 'Approx. 7.7 W × 12.6 D × 12.2 H in', heating: 'ThermoJet; sequential espresso and milk', coffeeSetup: '54 mm portafilter; single- and dual-wall baskets', milkWorkflow: 'Automatic presets or manual steaming', bestFor: 'Frequent lattes with a separate grinder' },
      { name: 'Gaggia Classic Evo Pro', href: '/espresso-machine/gaggia-classic-evo-pro/', quickDecision: 'Choose the traditional platform if learning, parts access and long-term modification matter more than speed.', priceClass: 'Higher machine and grinder budget', dimensions: 'Approx. 8 W × 14.2 D × 9.5 H in', heating: 'Single boiler; transition between brew and steam', coffeeSetup: '58 mm commercial-style portafilter', milkWorkflow: 'Manual steam wand', bestFor: 'Hands-on espresso learners' },
      { name: "De'Longhi Magnifica Evo", href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Change categories if you want beans-to-cup coffee without dosing, tamping or basket cleanup.', priceClass: '$899.95 official price checked', dimensions: '17.32 D × 9.45 W × 14.17 H in', heating: 'Automatic thermoblock workflow', coffeeSetup: 'Built-in 13-setting grinder and brew group', milkWorkflow: 'Automatic LatteCrema on ECAM29084SB', bestFor: 'Push-button households' },
    ], 'Dimensions and bundles vary by exact region and model. The Bambino Plus, Gaggia and Magnifica are not feature upgrades to the EC685; they represent different workflow decisions.'),
  },
  {
    id: 'related', eyebrow: 'Choose the workflow first', title: 'Continue with the guide that matches the problem you are solving',
    html: recommendationCardsHtml([
      { kicker: 'Closest compact upgrade', title: 'Breville Bambino Plus review', text: 'See what automatic milk, a 54 mm platform and a current US package change.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the review', featured: true },
      { kicker: 'Traditional first machine', title: 'Gaggia Classic Evo Pro review', text: 'Compare a proven 58 mm single-boiler platform with the Dedica appliance approach.', href: '/espresso-machine/gaggia-classic-evo-pro/', linkLabel: 'Read the review' },
      { kicker: 'Change categories', title: 'Magnifica Evo review', text: 'See what you gain and give up when the machine grinds, doses and brews automatically.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the review' },
      { kicker: 'Budget context', title: 'Espresso machines under $500', text: 'Compare the whole setup cost instead of judging the EC685 machine price in isolation.', href: '/espresso-machine/cheap-budget-under-500/', linkLabel: 'Open the guide' },
    ]),
  },
  {
    id: 'faq', eyebrow: 'Short answers', title: 'Dedica EC685 questions that deserve an exact answer',
    html: faqHtml([
      { question: 'Is the Dedica EC685 automatic?', answer: 'No. It is a semi-automatic portafilter machine with programmable water delivery. You still choose and prepare the coffee, lock in the portafilter, handle milk and clean the basket.' },
      { question: 'Does it include a grinder?', answer: 'No. The stock pressurized baskets can be used with appropriate preground coffee, while a conventional basket workflow requires a capable espresso grinder.' },
      { question: 'What size portafilter does it use?', answer: 'The EC685 family uses a compact 51 mm format. Verify the exact ear pattern, basket depth and EC685 compatibility before buying third-party parts.' },
      { question: 'Can it make two coffees?', answer: 'The double-spout portafilter can divide one extraction between two small cups, or you can repeat the brewing sequence. It cannot brew and steam simultaneously.' },
      { question: 'Is EC685 the same as Dedica Arte?', answer: 'No. The EC885 Dedica Arte is a later model with a different steam-wand proposition and package. This review does not assign EC885 features to EC685M.' },
      { question: 'Is it still worth buying in 2026?', answer: 'Only at a sensible legacy-stock price, with clear seller and warranty terms, and when its narrow width is genuinely valuable. At an inflated price, newer compact machines are the better decision.' },
    ]),
  },
];

export const delonghiDedicaReview = review({
  slug: '/espresso-machine/delonghi-dedica/', productId: 'CD-EM-000012', brand: "De'Longhi", model: 'Dedica DeLuxe EC685', sku: 'EC685M',
  category: 'Compact semi-automatic espresso machine', brandPath: BRAND_PATH,
  title: "De'Longhi Dedica EC685 review: still worth buying in 2026?",
  description: "A research-led De'Longhi Dedica EC685M review covering the stock baskets, grinder cost, espresso and milk workflow, maintenance, legacy availability and current alternatives.",
  verdictLabel: 'Best when width decides',
  verdict: 'The EC685 remains a defensible small-kitchen starter when it is substantially cheaper than newer compact machines. Its stock pressurized workflow is forgiving, its body is genuinely narrow and its settings are more useful than the three-button panel suggests. Do not pay a nostalgia premium or assume modifications turn it into a prosumer machine.',
  assessment: 'A compact legacy buy, not the automatic bargain its name can imply.',
  image: 'images/products/delonghi-dedica-ec685.jpg', imageAlt: "De'Longhi Dedica EC685 compact espresso machine",
  published: '2025-11-22', updated: UPDATED,
  authorNote: 'I wanted to separate the useful little EC685 from the modification mythology around it. I checked the exact US support material, current availability, independent tests and owner routines. This is a research-led review; I have not physically tested this machine.',
  basisDisclosure,
  price: { label: 'US legacy-stock snapshot', msrp: '$248.85', numeric: '248.85', currency: 'USD', typical: 'Seller, condition and warranty now vary', checked: 'September 15, 2026' },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4cdohP2', note: 'Affiliate link · verify EC685M and seller', affiliate: true, primary: true },
    { label: 'Open De\'Longhi support', href: 'https://www.delonghi.com/en-us/s/EC685M', note: 'Official US model support' },
  ],
  facts: [
    { label: 'Machine type', value: 'Compact semi-automatic' }, { label: 'Coffee system', value: '51 mm pressurized baskets / E.S.E.' },
    { label: 'Heating', value: 'Thermoblock; sequential brew and steam' }, { label: 'Water', value: 'About 35 fl oz removable tank' },
    { label: 'Width', value: 'About 5.9 in' }, { label: 'Exact US model', value: 'EC685M' },
  ],
  quickAnswers: [
    { question: 'Current model?', answer: 'This review is EC685M, an older US Dedica DeLuxe still supported but not currently sold direct by De\'Longhi US.' },
    { question: 'Need a grinder?', answer: 'Not for E.S.E. pods or suitable preground coffee in the stock pressurized baskets. Yes for a credible fresh-ground conventional-basket workflow.' },
    { question: 'Automatic milk?', answer: 'No. The Panarello attachment helps introduce air, but you position the jug, control the process and clean it.' },
    { question: 'Brew and steam together?', answer: 'No. It is a compact sequential thermoblock workflow.' },
    { question: 'Best reason to buy?', answer: 'Its approximately six-inch width, provided the price is low and the seller and warranty are clear.' },
    { question: 'Biggest trap?', answer: 'Spending enough on modifications to erase the value advantage while retaining the entry platform.' },
  ],
  bestFor: ['A genuinely narrow counter where most espresso machines will not fit', 'One or two medium- or dark-roast drinks made with a simple repeatable routine', 'A buyer getting remaining EC685M stock at a clear, low, warrantied price'],
  avoidIf: ['You want automatic milk or one-button bean-to-cup drinks', 'You plan to explore light-roast espresso and precise temperature control', 'The machine plus grinder and modifications approaches a stronger current setup'],
  pros: ['Exceptionally narrow body', 'Programmable cup volumes and three temperature levels', 'Forgiving pressurized baskets plus E.S.E. pod support', 'Large owner knowledge base and continued official support page'],
  cons: ['Legacy US availability complicates seller and warranty checks', 'Stock baskets limit direct control over extraction', 'Manual Panarello milk has a texture ceiling', 'Light body, small tray and sequential workflow slow repeated drinks'],
  dimensions: [
    dimension('espresso', 6.8, 'Pleasant stock-basket results are achievable, with a higher enthusiast ceiling only after grinder and basket spending.', 'Best for traditional blends and milk-drink bases; not a precision light-roast platform.', 'Exact design documented; independent and owner outcomes vary', ['dedica-manual', 'dedica-techgearlab', 'dedica-coffeeness', 'dedica-coffeeblog'], 'espresso', 'What changes the EC685 espresso most', ['Separate the stock pressurized workflow from the optional conventional-basket workflow. They demand different grinders and produce different diagnostic feedback.', 'Use weight and taste to control the beverage. A programmed button repeats delivered water, not the quality of the coffee bed.'], [{ signal: 'Stock pressurized basket', evidence: 'Adds outlet restriction and tolerates less precise grinding.', decision: 'Useful for preground coffee; limited feedback for dialing in.' }, { signal: 'Three temperature settings', evidence: 'Documented menu choice without an exact user-facing brew temperature.', decision: 'Some roast flexibility, but no precision temperature platform.' }, { signal: 'Third-party conventional basket', evidence: 'Widely demonstrated, but requires an espresso-capable grinder and better preparation.', decision: 'Raises potential and total cost together.' }], [{ signal: 'Thin and fast', guidance: 'Shorten the beverage and use fresher coffee; with a conventional basket, grind finer in small steps.' }, { signal: 'Barely flows', guidance: 'Clean the basket and group; if recently adjusted, move the grinder coarser.' }, { signal: 'First shot tastes cooler', guidance: 'Warm the cup, basket and portafilter with a documented flush.' }], 'Scores credit the stock EC685M package. Third-party upgrades are discussed but not silently included in the machine rating.'),
    dimension('milk', 6.3, 'The Panarello makes generous cappuccino foam approachable but gives less fine-texture control than a conventional or automatic system.', 'Acceptable for an occasional cappuccino; demanding flat-white drinkers should move up.', 'Manufacturer workflow plus independent use reports', ['dedica-manual', 'dedica-techgearlab', 'dedica-tom'], 'milk', 'Getting repeatable milk without pretending it is automatic', ['Keep milk, jug size and starting volume consistent before judging the wand.', 'Immediate wiping and purging are part of every milk drink, not periodic deep cleaning.'], [{ signal: 'Cappuccino selector', evidence: 'Panarello sleeve assists air intake.', decision: 'Easier larger foam; less direct control over microfoam.' }, { signal: 'Hot-milk selector', evidence: 'Changes the attachment behavior for lower-aeration heating.', decision: 'Useful second mode, not automatic texture selection.' }, { signal: 'Sequential heating', evidence: 'Espresso and steam are separate stages.', decision: 'Reasonable for one drink; slower for a queue.' }], [{ signal: 'Large dry bubbles', guidance: 'Use colder milk, reduce air intake and keep the milk circulating.' }, { signal: 'Weak steam after residue buildup', guidance: 'Cool safely, disassemble only as the manual allows and clean the documented passages.' }, { signal: 'Second espresso behaves oddly', guidance: 'Return the system from steam to brew temperature using the manual sequence.' }], 'Alternative milks behave differently; no single setting is promised across formulations.'),
    dimension('workflow', 7.4, 'Fast thermoblock readiness, stored volumes and a tiny footprint make a short routine practical.', 'Good for one or two drinks, less convincing for repeated milk orders.', 'Documented controls and convergent owner patterns', ['dedica-support', 'dedica-manual', 'dedica-owner-guide', 'dedica-owner-ama'], 'workflow', 'A routine the small machine can repeat', ['Prepare everything before brewing and treat a warming flush as part of the first drink when needed.', 'Keep the original configuration until you know whether coffee, grinder, basket or machine is limiting you.'], [{ signal: 'Approx. six-inch width', evidence: 'One of the narrowest established pump-machine bodies.', decision: 'Solves a real placement problem.' }, { signal: 'Programmable buttons', evidence: 'Single and double quantities can be stored.', decision: 'Convenient once dose and coffee are stable.' }, { signal: 'Small, light body', evidence: 'Easy to move but less resistant to portafilter force.', decision: 'May need a steadying hand and disciplined work area.' }], [{ signal: 'Machine turns while locking in', guidance: 'Use a dry, stable counter and steady the body without forcing the handle.' }, { signal: 'Routine feels cluttered', guidance: 'Assign fixed places for scale, grinder, portafilter and jug before adding tools.' }], 'Quick heater readiness does not include grinding, puck preparation, cup warming, milk work or cleanup.'),
    dimension('build', 6.7, 'The narrow mixed-material appliance is neatly packaged, though it should not be mistaken for a heavy serviceable boiler platform.', 'Good use of space; ordinary entry-machine expectations for mass, tray and repair economics.', 'Specifications, support routes and cautious owner context', ['dedica-support', 'dedica-parts', 'dedica-owner-repair'], 'build', 'What compact construction gives up', ['Metal-facing parts improve appearance, while the low mass and compact internals enable the footprint.', 'Parts and service routes exist, but exact EC685M compatibility and repair cost must be verified.'], [{ signal: 'Narrow metal-finish body', evidence: 'Tidy appearance with minimal counter width.', decision: 'A legitimate advantage for small kitchens.' }, { signal: 'Rear removable tank', evidence: 'Compact placement still needs refill clearance.', decision: 'Measure under-cabinet access, not only width.' }, { signal: 'Legacy model', evidence: 'Support remains, direct US sales page does not.', decision: 'Seller, condition and coverage matter more now.' }], [{ signal: 'Leak under pressure', guidance: 'Check basket rim and gasket cleanliness, then seek support if it persists.' }, { signal: 'Missing used-machine parts', guidance: 'Price the exact EC685M replacements before buying.' }], 'No failure-rate or expected-lifespan claim is made from anecdotal owner reports.'),
    dimension('features', 6.9, 'Temperature levels, programmable volumes, E.S.E. support and hot water are useful, but the interface and control depth remain basic.', 'Enough control for a stable everyday recipe, not for extensive experimentation.', 'Manufacturer-documented functions', ['dedica-manual', 'dedica-support'], 'features', 'Useful settings behind three buttons', ['Keep the quick guide because indicator combinations are less transparent than labeled controls.', 'Program volumes only after establishing the coffee dose and desired beverage weight.'], [{ signal: 'Three temperature levels', evidence: 'User-selectable low, medium and high menu choices.', decision: 'Practical adjustment without exact-temperature control.' }, { signal: 'Stored cup quantities', evidence: 'Buttons can remember delivery amounts.', decision: 'Reduces attention after dialing in.' }, { signal: 'E.S.E. compatibility', evidence: 'Documented pod basket workflow.', decision: 'Low-mess fallback with limited coffee choice.' }], [{ signal: 'Unexpected light pattern', guidance: 'Use the EC685M instructions instead of guessing from another Dedica model.' }, { signal: 'Programmed drink tastes weak', guidance: 'Shorten delivery and stabilize dose before changing temperature.' }], 'Family successors have different features. This rating is EC685M only.'),
    dimension('value', 7.0, 'Value is strong at a low legacy-stock price and erodes quickly once a grinder and modification package are added.', 'Buy for compact simplicity; skip if building a full enthusiast setup immediately.', 'Dated retailer context plus current alternatives', ['dedica-retailer', 'dedica-coffeeness', 'dedica-wll', 'dedica-warranty'], 'ownership', 'Calculate value with the second purchase included', ['The machine-only price is not the fresh-espresso setup price. Add the grinder and basic tools you actually intend to use.', 'Legacy status makes authorized-seller and warranty checks part of value, not paperwork after the sale.'], [{ signal: 'Machine around $200–250', evidence: 'Can undercut stronger compact alternatives.', decision: 'Good if using the stock workflow.' }, { signal: 'Grinder and conversion plan', evidence: 'Can add several hundred dollars and more learning.', decision: 'Compare the complete setup with a current 54 or 58 mm option.' }, { signal: 'Unclear seller coverage', evidence: 'EC685M is supported but not directly listed for sale in the US.', decision: 'A low price without credible coverage is not automatically value.' }], [{ signal: 'Checkout price nears newer machines', guidance: 'Choose the current alternative unless EC685 width is essential.' }, { signal: 'Accessory cart keeps growing', guidance: 'Stop and identify which drink problem each item will solve.' }], 'Price was checked September 15, 2026 and can move by seller, finish and remaining stock.'),
  ],
  alternatives: [
    { name: 'Breville Bambino Plus', reason: 'Automatic milk and a more complete current package.', href: '/espresso-machine/breville-bambino/' },
    { name: 'Gaggia Classic Evo Pro', reason: 'A more traditional, upgradeable 58 mm platform.', href: '/espresso-machine/gaggia-classic-evo-pro/' },
    { name: "De'Longhi Magnifica Evo", reason: 'A fully automatic workflow instead of a portafilter routine.', href: '/espresso-machine/delonghi-magnifica-evo/' },
  ],
  article: {
    methodology: `<p>I evaluated the exact US EC685M identity against the current De'Longhi support route and manufacturer document, five independent tests or demonstrations, three owner-discussion pools and the retailer availability visible on September 15, 2026. The evidence supports judgments about workflow, documented functions, owner questions and market fit.</p><p>This is not a Coffeedant hands-on test. I did not measure temperature, pressure, noise or extraction, and I did not convert isolated owner problems into a defect rate. The EC885, EC890, EC900 and EC950 are treated as separate products, not evidence for EC685 features.</p>`,
    sections: dedicaSections, sources: dedicaSources,
    finalTitle: 'Buy the EC685 for its narrowness, not for an imagined upgrade journey',
    finalVerdict: [
      'At a clear legacy-stock price, the Dedica EC685 can still be the rational answer to a very small kitchen. The stock baskets accept an uncomplicated coffee routine, the temperature and volume settings are useful, and one cappuccino at a time is realistic.',
      'Walk away when the seller is vague, the price approaches a current Bambino, or your shopping list already includes a serious grinder, basket, portafilter and modification kit. That buyer has outgrown the EC685 before opening the box.',
    ],
  },
  video: { id: 'G-GeZ9fbajw', title: 'Delonghi Dedica Home Espresso Machine Review & Test', creator: "Tom's Coffee Corner", published: '2022-07-11', note: 'A useful visual demonstration of the Dedica workflow and its stock-versus-enthusiast context. The video creator tested the machine; Coffeedant did not.' },
});

const arteSources: Source[] = [
  { id: 'arte-support', label: "De'Longhi US: La Specialista Arte EC9155MB Support Center", href: 'https://www.delonghi.com/en-us/s/EC9155MB', note: 'Exact US support and manual route; checked September 15, 2026.' },
  { id: 'arte-manual', label: "De'Longhi: La Specialista Arte EC9155 instructions", href: 'https://library.delonghigroup.com/assetbank-delonghi/action/directLinkImage?assetId=229357&download=true', note: 'Official US model instructions.' },
  { id: 'arte-uk-support', label: "De'Longhi New Zealand: La Specialista Arte EC9155 switching guidance", href: 'https://www.delonghi.com/en-nz/s/EC9155.YE', note: 'Regional exact-family guidance: one heating system, with quick but sequential coffee-to-milk switching.' },
  { id: 'arte-parts', label: "De'Longhi US: spare-parts and out-of-warranty support", href: 'https://www.delonghi.com/en-us/customer-services/spare-parts', note: 'Current parts route; verify EC9155MB stock.' },
  { id: 'arte-accessories', label: "De'Longhi US: coffee accessories and maintenance", href: 'https://www.delonghi.com/en-us/c/coffee-e-espresso/accessories-e-maintenance', note: 'Current catalog; verify EC9155MB fit.' },
  { id: 'arte-warranty', label: "De'Longhi US: warranty information", href: 'https://www.delonghi.com/en-us/warranty-information', note: 'Current route; verify EC9155MB seller coverage.' },
  { id: 'arte-coffeeness', label: "Coffeeness: De'Longhi La Specialista Arte review", href: 'https://www.coffeeness.de/en/delonghi-la-specialista-arte-review/', note: 'Independent EC9155MB hands-on review.' },
  { id: 'arte-gearlab', label: "GearLab: De'Longhi La Specialista Arte tested review", href: 'https://www.techgearlab.com/reviews/kitchen/espresso-machine/delonghi-la-specialista-arte', note: 'Independent scored exact-product test.' },
  { id: 'arte-techlicious', label: 'Techlicious: La Specialista Arte at-home review', href: 'https://www.techlicious.com/review/delonghi-la-specialista-arte-delivers-for-at-home-baristas/', note: 'Independent household workflow review.' },
  { id: 'arte-tom', label: "Tom's Coffee Corner: La Specialista Arte EC9155 review", href: 'https://tomscoffeecorner.com/delonghi-specialista-arte-ec-9155-review/', note: 'Independent technical and cup-workflow test, updated in 2026.' },
  { id: 'arte-family', label: 'Espresso Rabbit Hole: comparison of La Specialista models', href: 'https://espressorabbithole.com/comparing-all-delonghi-specialista-models/', note: 'Current family comparison with later models.' },
  { id: 'arte-video', label: "Home Coffee Solutions: De'Longhi La Specialista Arte review", href: 'https://www.youtube.com/watch?v=HnOYsyXihr8', note: 'Exact EC9155 video published May 10, 2022.' },
  { id: 'arte-owner-dial', label: 'r/espresso: EC9155 dialing-in discussion', href: 'https://www.reddit.com/r/espresso/comments/w2dtu6/anybody_here_use_a_delonghi_la_specialista_arte/', note: 'Owner pool one: anecdotal dose and grind reports.' },
  { id: 'arte-owner-long', label: 'r/espresso: EC9155MB owner experience, including a high-use report', href: 'https://www.reddit.com/r/espresso/comments/zynv31/delonghi_la_specialista_arte_ec9155mb_good/', note: 'Owner pool two: mixed experience including one report after roughly a year and many shots; no lifespan inference made.' },
  { id: 'arte-owner-grinder', label: 'r/espresso: La Specialista Arte grinder-access discussion', href: 'https://www.reddit.com/r/espresso/comments/16a8cnq/delonghi_specialista_arte/', note: 'Owner pool three: anecdotal grinder-access concerns.' },
  { id: 'arte-owner-bestbuy', label: 'Best Buy: La Specialista Arte EC9155MB buyer-review pool', href: 'https://www.bestbuy.com/site/reviews/delonghi-la-specialista-arte-ec9155mb-espresso-machine-stainless-steel-black/6513287', note: 'Distinct US retailer pool with learning-curve and longer-use reports. Incentivized and self-selected entries remain anecdotal.' },
  { id: 'arte-owner-productreview', label: 'ProductReview Australia: La Specialista Arte EC9155 owner pool', href: 'https://www.productreview.com.au/listings/delonghi-la-specialista-arte-ec9155', note: 'Distinct regional review and Q&A pool for owner routines and fault questions; it does not define the US package or failure rate.' },
  { id: 'arte-retailer', label: 'Amazon US: La Specialista Arte listing', href: 'https://amzn.to/3NkCleW', note: 'Affiliate retailer route preserved from the legacy review. Confirm EC9155MB, not EC9255, and verify price, seller and accessories.' },
  { id: 'arte-evo', label: "Tom's Guide: La Specialista Arte Evo review", href: 'https://www.tomsguide.com/home/coffee-makers/delonghi-la-specialista-arte-evo-review', note: 'Later EC9255 comparison only; its cold program is excluded.' },
];

const arteSections: Section[] = [
  {
    id: 'orientation', eyebrow: 'Know the category', title: 'The original Arte assists your hands; it does not make coffee from one button',
    html: `
      <p>The original De'Longhi La Specialista Arte EC9155MB is best understood as an assisted semi-automatic. It puts a burr grinder, dosing funnel, 51 mm portafilter, temperature choices and manual steam wand into one appliance. You still move the portafilter, tamp the dose, start the extraction, steam the milk and clean the working parts. Calling it bean-to-cup confuses the physical layout with a fully automatic machine that hides the puck inside.</p>
      <p>That distinction decides whether it feels convenient. Someone moving from capsules and wanting to learn will find useful guardrails: the grinder doses into a funnel, the tamper and mat are included, and three recipes make the controls approachable. Someone expecting a latte after pressing one icon will find more work than expected. The <a href="${internalHref('/espresso-machine/delonghi-magnifica-evo/')}">Magnifica Evo</a> is the De'Longhi category change for that buyer.</p>
      <p>This review covers <strong>EC9155MB, the original US La Specialista Arte</strong>, product CD-EM-000063. It is not the later EC9255 La Specialista Arte Evo with cold-extraction programming. Retailers and editorial articles now mix those names, and even current descriptions can use different grind-setting counts. The model plate and SKU matter more than the words “Arte” or “Evo.” ${sourceLinks(['arte-support', 'arte-evo'])}</p>
      <p>The buying case is strongest when you want a single coordinated station and do not plan to separate the grinder soon. It is weakest when you already know you want to explore many coffees, make fine grinder changes or replace components independently. An integrated grinder saves counter planning; it also ties the useful life and upgrade path of two devices together.</p>
      <div class="review-table-wrap" role="region" aria-label="La Specialista Arte task division" tabindex="0"><table class="review-table"><caption>Where EC9155MB helps and where technique remains</caption><thead><tr><th scope="col">Stage</th><th scope="col">Machine assistance</th><th scope="col">Your decision</th></tr></thead><tbody><tr><th scope="row">Grinding</th><td data-label="Machine assistance">Integrated burr grinder and dose control</td><td data-label="Your decision">Choose grind and adjust dose for the coffee</td></tr><tr><th scope="row">Preparation</th><td data-label="Machine assistance">Dosing funnel, tamper and mat</td><td data-label="Your decision">Distribute, tamp level and keep the basket clean</td></tr><tr><th scope="row">Brewing</th><td data-label="Machine assistance">Active Temperature Control and preset delivery</td><td data-label="Your decision">Select temperature and judge the beverage</td></tr><tr><th scope="row">Milk</th><td data-label="Machine assistance">My LatteArt manual steam wand</td><td data-label="Your decision">Introduce air, texture, stop and clean</td></tr></tbody></table></div>
    `,
  },
  {
    id: 'setup', eyebrow: 'Build a repeatable station', title: 'The included kit is useful, but the grinder locks in the long-term decision',
    html: `
      <p>The EC9155MB is compact for a grinder-equipped espresso machine, not tiny. The US-family dimensions commonly listed are roughly 11.2 inches wide, 14.4 inches deep and 15.9 inches high, with a rear water tank around 56 fluid ounces. Leave space above for beans and behind for water access. Measure with the portafilter handle extending to the side and a knock box nearby, because brochure dimensions do not describe the active work area.</p>
      <p>The box includes the pieces needed to begin: single and double baskets, dosing and tamping guide, professional-style tamper, tamping mat and stainless milk jug, plus cleaning items. Confirm the exact current package with the retailer. Bundles shift, and a photo of EC9255 accessories is not evidence of EC9155 contents. ${sourceLinks(['arte-manual', 'arte-coffeeness'])}</p>
      <h3>Do not fill the hopper with a month of beans</h3>
      <p>Grind-step count needs precise wording. The original EC9155 material and period reviews describe eight settings, while newer Arte-family pages and retailer copy may mention fifteen. Our review does not transfer the revised EC9255 grinder specification backward. Check the dial and exact instruction book supplied with the unit.</p>
      <h3>The funnel controls mess, not distribution</h3>
      <p>Begin with De'Longhi's dose guidance and one medium roast. Keep a scale under the cup and record the dry dose, finished drink and grind position. The gauge and recommended zone are feedback about resistance in the system, not a universal flavor target. Taste and repeatability remain the final test.</p>
    `,
  },
  {
    id: 'grinder', eyebrow: 'The fixed partnership', title: 'Eight broad grind positions are approachable until your coffee lands between them',
    html: `
      <p>The built-in grinder is the central bargain. It saves a separate purchase, directs grounds neatly into the portafilter and keeps one set of controls in front of the user. Independent reviewers generally found it capable of producing usable espresso, while owner discussions reveal the predictable limit: a coffee can run too quickly on one step and stall on the next.</p>
      <p>When that happens, hold tamp pressure steady and tune with a small dose change inside the documented basket clearance. Give the new grind position more than one dose before judging it because retained grounds can blur the transition.</p>
      <p>Cleaning access is an owner concern. Some community posts criticize the non-removable hopper and limited internal access compared with Breville's grinder systems. That is a legitimate ownership preference, not proof that every grinder will fail. Follow the approved cleaning route, avoid water near burrs and use service support for internal work. ${sourceLinks(['arte-owner-grinder', 'arte-manual'])}</p>
      <p>If you already own a strong espresso grinder, the Arte duplicates equipment and gives you a second, less flexible grinder to maintain. If you own nothing and value a tidy coordinated setup, it can be rational. The answer depends less on whether integrated grinders are “good” and more on whether you expect to replace one part independently.</p>
    `,
  },
  {
    id: 'espresso', eyebrow: 'Dialing in', title: 'Temperature choice helps, but grinder spacing sets the practical ceiling',
    html: `
      <p>Active Temperature Control offers three settings intended for different roast levels. The useful reading is that you can move the brewing target, not that the machine displays or guarantees an exact puck temperature. Start in the middle with a familiar medium roast, then use the higher setting as an experiment for a lighter coffee or the lower setting when a dark roast tastes harsh.</p>
      <p>A practical starting recipe is a beverage around twice the dry coffee weight, adjusted from there by taste. This is editorial guidance, not a measured EC9155 recipe. Use the dose range and basket indications in the supplied manual, protect headspace, and stop by scale while learning. The preset volume can be programmed later for convenience.</p>
      <p>Independent assessments are broadly positive about the achievable espresso yet disagree on how close it comes to more modular setups. GearLab rated its core performance strongly, Coffeeness praised the compact all-in-one idea while naming grinder limitations, and Tom's Coffee Corner compared its adjustment range critically. The responsible conclusion is capable medium-roast espresso with limited fine tuning, not café perfection from a dial position. ${sourceLinks(['arte-gearlab', 'arte-coffeeness', 'arte-tom'])}</p>
      <p>Light-roast specialists should be cautious. Three temperature choices are welcome, but wide grinder steps and a compact assisted platform can leave less room to find sweetness. Milk-drink households using medium blends are much closer to the machine's natural strength.</p>
    `,
  },
  {
    id: 'milk', eyebrow: 'Manual skill remains', title: 'The My LatteArt wand can teach real texture if you accept the practice',
    html: `
      <p>The steam wand is a conventional manual responsibility, which is a strength for someone who wants to learn and a poor fit for someone who wants consistency without attention. Purge condensation, introduce a small amount of air near the surface, then keep the milk rotating while the bubbles become finer. Stop before overheating, wipe immediately and purge again.</p>
      <p>The EC9155 uses one heating system, but De'Longhi's regional exact-family support guidance says there is no waiting time when switching from coffee to milk. It also clarifies that the two actions do not happen together. That is the honest workflow: quick sequential operation, not simultaneous brewing and steaming. US voltage and package facts still come from the US model material. ${sourceLinks(['arte-uk-support', 'arte-support'])}</p>
      <p>The included metal jug and cool-touch-style wand geometry make practice more approachable. Texture still changes with milk type, quantity, starting temperature and technique. Independent reviewers report strong milk capability, but their hands performed the work; the machine does not reproduce their result automatically. ${sourceLinks(['arte-gearlab', 'arte-techlicious'])}</p>
      <p>For two matching drinks, one larger jug can save time, while separate jugs offer more control. Alternative milks need their own consistent product, fill and temperature baseline.</p>
    `,
  },
  {
    id: 'workflow', eyebrow: 'A real morning', title: 'The guided parts reduce mess, not the number of physical steps',
    html: `
      <p>On an ordinary morning, you switch on, check water and beans, lock the chosen basket into the portafilter, grind through the funnel, distribute, tamp, remove the guide, attach the portafilter and brew. For milk, you fill the jug, purge, texture, wipe and purge again. Then the puck, basket, tray and counter need attention. This is a compact barista station, not a hidden automatic brew group.</p>
      <p>The benefit is coordination. The grinder and machine are already aligned physically, the included tools have obvious places, and the panel offers espresso, Americano and hot-water routes without a deep menu. Once a household records a working grind, dose and temperature, it can reproduce the sequence without rebuilding the setup.</p>
      <p>Cleaning friction stays visible, which is arguably healthy. The portafilter and wand are in your hands, so stale grounds and milk residue are harder to ignore than inside a superautomatic. The trade-off is time. A Magnifica owner presses a recipe and services internal parts periodically; an Arte owner does small manual jobs with every drink.</p>
    `,
  },
  {
    id: 'build', eyebrow: 'One appliance, two machines', title: 'Compact packaging is convincing; integrated complexity is the ownership trade',
    html: `
      <p>The Arte combines grinder, thermally managed brewing, steam hardware and a pressure gauge in a body narrower than many separate arrangements. The stainless-front styling and clear dials look at home on a normal counter without mimicking a commercial machine. At about 21.5 pounds, it is substantially more planted than a Dedica.</p>
      <p>Integrated design removes cables and alignment problems. It also means a grinder service or machine fault affects the whole station. A separate grinder can follow you to a new espresso machine; the Arte grinder cannot. That does not make integrated machines unreliable, but it changes the consequence of wear and the logic of upgrading.</p>
      <p>De'Longhi maintains an exact US support page, downloadable documentation, service locator, spare-parts route and accessories catalog. That is stronger evidence than an assertion that parts are “easy” to obtain. Actual compatibility and availability depend on the component, date and region, while labor can exceed the value of older appliances. ${sourceLinks(['arte-support', 'arte-parts', 'arte-accessories', 'arte-warranty'])}</p>
      <p>Owner reports across Reddit and retailer pools range from heavy, happy use to criticism of grinder access and faults. No service dataset supports a reliability percentage. Treat them as a return-testing checklist, not a forecast for your unit. ${sourceLinks(['arte-owner-long', 'arte-owner-grinder', 'arte-owner-bestbuy', 'arte-owner-productreview'])}</p>
    `,
  },
  {
    id: 'features', eyebrow: 'Useful, not endless', title: 'Three recipes and three temperatures keep attention on the coffee',
    html: `
      <p>The original Arte's feature set is intentionally short: espresso, Americano and hot water, three temperature choices, adjustable grinding and dosing, a gauge and manual steam. It covers the most common café building blocks without asking the user to navigate a touchscreen.</p>
      <p>That simplicity is different from lack of involvement. An Americano preset coordinates water but still begins with prepared coffee. The gauge shows system pressure but still needs interpretation. A temperature choice moves a target but does not identify the correct setting for every bag.</p>
      <p>Cold brew is the major naming trap in 2026. EC9155MB is the original Arte reviewed here. EC9255 is the Arte Evo line associated with cold-extraction programming. If a listing headline says “Arte Evo” while a specifications table says EC9155, ask the seller to reconcile it before paying. ${sourceLinks(['arte-evo', 'arte-family'])}</p>
      <p>The included barista kit is genuinely useful because it reduces immediate accessory spending. It should not be read as a promise that every tool is the last one an enthusiast will want. Begin with it. Replace an item only when a repeated problem shows what a different tool would change.</p>
    `,
  },
  {
    id: 'owners', eyebrow: 'Where users get stuck', title: 'The same broad grinder steps can feel simple or restrictive',
    html: `
      <p>Owner discussions divide along experience and coffee choice. Buyers moving from pod machines often appreciate having the whole station in one body and report settling on a repeatable low-number grind. More experimental users describe a frustrating gap where one click runs fast and the next chokes. Both experiences are plausible on a stepped integrated grinder.</p>
      <p>A high-use owner report describes roughly a year and a large number of shots with satisfaction. That helps counter the assumption that an appliance format cannot serve daily use, but it is one self-selected report. A separate post describes access concerns around the hopper and burr area. That flags a maintenance preference; it does not establish a fault rate. ${sourceLinks(['arte-owner-long', 'arte-owner-grinder'])}</p>
      <p>Dialing threads also show how quickly users change dose, grind, temperature and output at once. The best lesson is methodological: stabilize three variables while moving the fourth. The machine's controls cannot make an uncontrolled experiment interpretable. ${sourceLinks(['arte-owner-dial'])}</p>
      <p>Do not choose by average star score alone. A capsule upgrader, a latte learner and a light-roast hobbyist are reviewing different jobs. The relevant owner is the one whose workflow and standards resemble yours.</p>
    `,
  },
  {
    id: 'ownership', eyebrow: 'Care, warranty and total cost', title: 'A grinder-equipped machine saves setup money and concentrates maintenance risk',
    html: `
      <p>Daily care is visible: brush loose grounds away, rinse the basket and portafilter, wipe the group, empty the tray as needed, and wipe and purge the steam wand immediately after milk. Letting grounds collect around the grinder chute or milk dry on the wand turns a convenient all-in-one into a cleaning project.</p>
      <p>Use the supplied hardness test and program water hardness as directed. Descale when prompted with an approved process, allow the full cycle to finish and rinse thoroughly. Do not put rice, water or unapproved cleaning material through the grinder. Internal burr access and electrical repairs belong to qualified service.</p>
      <p>The total cost is easier to predict than a separate setup because the grinder, tamper, funnel, mat and jug are included. Add a small scale, cleaning supplies, coffee and perhaps a knock box. The integrated grinder becomes poor value only if you soon replace it with a separate one while keeping the same machine.</p>
      <p>Availability needs a final check. On September 15, 2026, the exact EC9155MB remains supported and can appear at retailers, while newer US attention has shifted to Arte Evo and other La Specialista models. Confirm model, voltage, seller authorization, return window, warranty and box contents. The current general warranty message should not be copied onto a legacy retailer listing without that verification. ${sourceLinks(['arte-support', 'arte-warranty', 'arte-retailer'])}</p>
    `,
  },
  {
    id: 'compare', eyebrow: 'The integrated decision', title: 'Compare the Arte to other workflows, not just other grinder-equipped boxes',
    html: comparisonTablesHtml("De'Longhi La Specialista Arte EC9155MB", [
      { name: "De'Longhi La Specialista Arte", quickDecision: 'Choose for an included grinder, manual milk and a compact guided station at a strong sale price.', priceClass: 'Legacy/current-retailer EC9155 stock', dimensions: 'Approx. 11.2 W × 14.4 D × 15.9 H in', heating: 'One heating system; quick sequential coffee and steam use', coffeeSetup: 'Integrated stepped burr grinder, 51 mm portafilter, manual tamp', milkWorkflow: 'Manual My LatteArt wand', bestFor: 'Capsule upgrader who wants to learn' },
      { name: 'Breville Barista Pro', href: '/espresso-machine/breville-barista-pro-bes878/', quickDecision: 'Choose for a more developed grinder interface and 54 mm Breville ecosystem.', priceClass: 'Similar integrated-machine tier', dimensions: 'Approx. 13.9 W × 13.5 D × 16 H in', heating: 'ThermoJet, sequential brew and steam', coffeeSetup: 'Integrated grinder, 54 mm portafilter', milkWorkflow: 'Manual steam wand', bestFor: 'More active dialing and screen guidance' },
      { name: 'Breville Bambino Plus', href: '/espresso-machine/breville-bambino/', quickDecision: 'Choose a separate grinder and automatic milk when modularity and shared use matter.', priceClass: '$499.95 machine plus grinder', dimensions: 'Approx. 7.7 W × 12.6 D × 12.2 H in', heating: 'ThermoJet, sequential', coffeeSetup: 'Separate grinder, 54 mm portafilter', milkWorkflow: 'Automatic presets or manual', bestFor: 'Milk-heavy household with upgradeable grinder' },
      { name: "De'Longhi Magnifica Evo", href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Choose when nobody wants to tamp, hold a portafilter or steam manually.', priceClass: '$899.95 official US price', dimensions: '17.32 D × 9.45 W × 14.17 H in', heating: 'Automatic thermoblock routine', coffeeSetup: 'Built-in grinder and internal brew group', milkWorkflow: 'Automatic LatteCrema carafe', bestFor: 'One-touch convenience' },
    ], 'EC9155 and EC9255 are not interchangeable. Dimensions and bundles should be checked against the exact US listing before purchase.'),
  },
  {
    id: 'related', eyebrow: 'Keep researching', title: 'Four useful paths after the original Arte',
    html: recommendationCardsHtml([
      { kicker: 'Separate-grinder route', title: 'Breville Bambino Plus review', text: 'Compare integrated convenience with a grinder you can keep and replace independently.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the review', featured: true },
      { kicker: 'Integrated rival', title: 'Breville Barista Pro review', text: 'Compare the grinder interface, 54 mm tools and manual milk workflow.', href: '/espresso-machine/breville-barista-pro-bes878/', linkLabel: 'Read the review' },
      { kicker: 'One-touch alternative', title: 'Magnifica Evo review', text: 'See what changes when dosing, tamping, brewing and milk move inside the machine.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the review' },
      { kicker: 'Category guide', title: 'Espresso machines with grinders', text: 'Choose between assisted portafilter and fully automatic systems before comparing features.', href: '/espresso-machine/built-in-grinder/', linkLabel: 'Open the guide' },
    ]),
  },
  {
    id: 'faq', eyebrow: 'Exact-model answers', title: 'La Specialista Arte EC9155MB FAQ',
    html: faqHtml([
      { question: 'Is La Specialista Arte a fully automatic machine?', answer: 'No. EC9155MB is a grinder-equipped assisted semi-automatic. It grinds into a removable portafilter, which you distribute, tamp, attach and empty; milk is manual.' },
      { question: 'Does the original Arte make cold brew?', answer: 'No. Cold-extraction programming belongs to later Arte Evo variants such as EC9255. Check the model code rather than the family name.' },
      { question: 'How many grinder settings does EC9155 have?', answer: 'Period US material and exact-model reviews describe eight settings. Some current retailer copy describes newer Arte variants with fifteen, which should not be transferred to EC9155MB.' },
      { question: 'Can it brew and steam at once?', answer: 'No. De\'Longhi describes one heating system with a quick switch, but the actions remain sequential.' },
      { question: 'Is the pressure gauge a quality score?', answer: 'No. It reports resistance-related pressure. Use it with beverage weight, flow and taste; the printed zone cannot know your roast or recipe.' },
      { question: 'Who should skip it?', answer: 'Skip it if you want one-button drinks, already own a better grinder, or expect to upgrade grinder and machine independently.' },
    ]),
  },
];

export const delonghiLaSpecialistaArteReview = review({
  slug: '/espresso-machine/delonghi-la-specialista-arte/', productId: 'CD-EM-000063', brand: "De'Longhi", model: 'La Specialista Arte', sku: 'EC9155MB',
  category: 'Grinder-equipped assisted semi-automatic espresso machine', brandPath: BRAND_PATH,
  title: "De'Longhi La Specialista Arte review: the original EC9155 in 2026",
  description: "A research-led review of the original De'Longhi La Specialista Arte EC9155MB, with exact-model grinder, espresso, manual milk, cleaning, price and Arte Evo differences.",
  verdictLabel: 'A tidy assisted setup',
  verdict: 'The original EC9155 is a good capsule-to-portafilter bridge when discounted: the grinder, funnel, tamper, temperature choices and manual wand form a coherent station. Its broad grinder steps and integrated ownership make less sense for someone already planning a modular enthusiast setup.',
  assessment: 'Useful assistance without pretending the barista work has disappeared.',
  image: 'images/products/delonghi-la-specialista-arte.png', imageAlt: "De'Longhi La Specialista Arte EC9155 grinder-equipped espresso machine",
  published: '2025-11-24', updated: UPDATED,
  authorNote: 'The name now creates more confusion than the controls. I separated the original US EC9155MB from EC9255 Arte Evo, then judged the grinder, espresso and milk workflow on exact-model evidence. This is research-led; I have not physically tested it.',
  basisDisclosure,
  price: { label: 'US retailer snapshot', msrp: '$699.95', numeric: '699.95', currency: 'USD', typical: 'EC9155MB availability varies; sales may be lower', checked: 'September 15, 2026' },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/3NkCleW', note: 'Affiliate link · verify EC9155MB', affiliate: true, primary: true },
    { label: 'Open De\'Longhi support', href: 'https://www.delonghi.com/en-us/s/EC9155MB', note: 'Official US exact-model page' },
  ],
  facts: [
    { label: 'Machine type', value: 'Assisted semi-automatic' }, { label: 'Grinder', value: 'Integrated burr; original eight-step system' },
    { label: 'Portafilter', value: '51 mm manual preparation' }, { label: 'Temperature', value: 'Three Active Temperature Control settings' },
    { label: 'Milk', value: 'Manual My LatteArt wand' }, { label: 'Exact US model', value: 'EC9155MB, not EC9255' },
  ],
  quickAnswers: [
    { question: 'Original or Evo?', answer: 'Original La Specialista Arte EC9155MB. EC9255 Arte Evo is a later model with different features.' },
    { question: 'One-touch drinks?', answer: 'No. The grinder doses into a portafilter; you tamp, attach, brew, steam and clean.' },
    { question: 'Built-in grinder?', answer: 'Yes. It saves space and initial spending, with broader adjustment steps and no independent upgrade path.' },
    { question: 'Automatic milk?', answer: 'No. My LatteArt is a manual wand that rewards practice.' },
    { question: 'Brew and steam together?', answer: 'No. The transition is designed to be quick, but use is sequential.' },
    { question: 'Best buyer?', answer: 'A beginner who wants real portafilter involvement in one coordinated appliance.' },
  ],
  bestFor: ['A capsule upgrader who wants to learn espresso and manual milk', 'A counter where one integrated appliance is preferable to a separate grinder', 'A medium-roast household buying the exact EC9155MB at a meaningful discount'],
  avoidIf: ['You want milk and coffee from one button', 'You already own or soon want a more adjustable espresso grinder', 'You are shopping specifically for the Arte Evo cold-extraction feature'],
  pros: ['Integrated grinder and useful included barista kit', 'Three brew-temperature choices', 'Quick transition from coffee to manual steam', 'Compact, clear physical controls'],
  cons: ['Broad grinder steps can leave a bean between settings', 'Grinder and espresso machine cannot be upgraded separately', 'No simultaneous brewing and steaming', 'Current listings can confuse EC9155 with EC9255 Arte Evo'],
  dimensions: [
    dimension('espresso', 8.0, 'Good independent results and three temperature choices are moderated by broad grinder steps and a compact 51 mm workflow.', 'Strong for medium-roast espresso and milk-drink bases; less flexible for constant bean changes.', 'Exact-model documentation plus multiple independent tests', ['arte-manual', 'arte-gearlab', 'arte-coffeeness', 'arte-tom'], 'espresso', 'Dial in around the grinder steps', ['Hold dose and beverage weight steady while finding the closest grind position.', 'Use temperature as a roast experiment after grind and ratio are under control.'], [{ signal: 'Three temperature choices', evidence: 'Documented Active Temperature Control.', decision: 'Useful roast flexibility without exact numerical control.' }, { signal: 'Stepped integrated grinder', evidence: 'Independent and owner evidence shows usable espresso with finite adjustment gaps.', decision: 'Simple until a bean needs an in-between setting.' }, { signal: 'Pressure gauge', evidence: 'Shows pressure behavior during extraction.', decision: 'Helpful context, not a taste meter.' }], [{ signal: 'Fast and sharp', guidance: 'Improve distribution, move finer if possible, or increase dose slightly within clearance.' }, { signal: 'Next step stalls', guidance: 'Return coarser and tune dose or beverage weight.' }, { signal: 'Dark roast tastes harsh', guidance: 'Try lower temperature and a shorter controlled beverage.' }], 'Suggested ratios are editorial starting points, not Coffeedant measurements.'),
    dimension('milk', 8.1, 'The manual My LatteArt wand has credible texture potential and a quick transition, but the result depends on the user.', 'A good teaching tool for lattes; wrong for buyers who want automatic repetition.', 'Manufacturer sequence and independent hands-on context', ['arte-manual', 'arte-uk-support', 'arte-gearlab', 'arte-techlicious'], 'milk', 'Manual milk is a feature only if you want the skill', ['Purge, add air briefly, keep the milk circulating, stop before overheating, then wipe and purge.', 'Repeat milk type and fill level while learning so changes in technique are visible.'], [{ signal: 'My LatteArt wand', evidence: 'Conventional manual texturing control.', decision: 'Higher skill ceiling than a Panarello, with practice required.' }, { signal: 'Single heating system', evidence: 'Quick sequential switch, not simultaneous operation.', decision: 'Efficient for one or two drinks.' }, { signal: 'Included metal jug', evidence: 'Ready-to-practise package.', decision: 'No immediate jug purchase needed.' }], [{ signal: 'Large bubbles', guidance: 'Introduce less air and establish stronger circulation.' }, { signal: 'Milk will not rotate', guidance: 'Adjust jug angle and depth while keeping the wand tip safely positioned.' }, { signal: 'Residue hardens', guidance: 'Wipe immediately after every drink and follow the manual cleaning route.' }], 'Independent texture results belong to those testers; Coffeedant did not reproduce them.'),
    dimension('workflow', 8.0, 'Integrated grinding, funnel-guided dosing and included tools reduce setup friction while preserving a real portafilter routine.', 'A coherent learning station, not a one-touch shortcut.', 'Documented task flow and owner evidence', ['arte-support', 'arte-manual', 'arte-owner-dial', 'arte-owner-long'], 'workflow', 'Make the first week intentionally consistent', ['Use one bean and one drink while recording grind, dose, temperature and output.', 'Keep cleaning tools and scale beside the machine so the assisted workflow stays tidy.'], [{ signal: 'Integrated station', evidence: 'Grinder, brewing and steam controls share one body.', decision: 'Less counter planning and fewer initial purchases.' }, { signal: 'Manual portafilter', evidence: 'User moves, tamps and empties the basket.', decision: 'More learning and cleanup than a superautomatic.' }, { signal: 'Three direct recipes', evidence: 'Espresso, Americano and hot-water building blocks.', decision: 'Clear panel with limited menu overhead.' }], [{ signal: 'Morning result varies', guidance: 'Weigh the dose and beverage before changing settings.' }, { signal: 'Counter becomes messy', guidance: 'Use the funnel during grinding and create fixed places for tamp and portafilter.' }], 'The workflow score assumes the buyer wants involvement. It is not a convenience score across all machine types.'),
    dimension('build', 7.6, 'The planted compact body packages two appliances neatly, while integrated service and grinder access reduce modularity.', 'Good counter efficiency; one fault or upgrade decision affects the full station.', 'Specifications, support infrastructure and cautious owner reports', ['arte-support', 'arte-warranty', 'arte-owner-grinder', 'arte-owner-long'], 'build', 'Integrated design changes the consequence of ownership', ['A single body removes alignment and cable clutter but links grinder and machine service.', 'Support availability is documented; long-term failure rates are not.'], [{ signal: 'Approx. 21.5 lb body', evidence: 'More stable than an entry compact machine.', decision: 'Better resistance while locking and tamping.' }, { signal: 'Integrated grinder', evidence: 'Cannot follow you to another machine.', decision: 'Convenient now, less flexible later.' }, { signal: 'Exact-model support page', evidence: 'Manuals and service routes remain live.', decision: 'Positive support signal for legacy/current stock.' }], [{ signal: 'Grinder needs internal work', guidance: 'Use qualified service rather than unapproved disassembly.' }, { signal: 'Used unit is incomplete', guidance: 'Price the funnel, baskets, tamper, jug and water parts before purchase.' }], 'No lifespan is inferred from one high-use owner report.'),
    dimension('features', 7.7, 'Three temperatures, direct recipes, a gauge and a complete kit are useful; cold extraction and automatic tamping are absent.', 'Focused controls for learning rather than a large drink menu.', 'Exact EC9155 documentation with variant controls', ['arte-support', 'arte-manual', 'arte-family', 'arte-evo'], 'features', 'Protect the exact-model boundary', ['EC9155MB is the original Arte. Read its own instructions before relying on a family comparison.', 'Treat the gauge and presets as tools, not decisions that replace taste.'], [{ signal: 'Active Temperature Control', evidence: 'Three user choices.', decision: 'Meaningful flexibility for an integrated starter.' }, { signal: 'Espresso/Americano/hot water', evidence: 'Three direct beverage routes.', decision: 'Covers basics without menu depth.' }, { signal: 'No cold extraction', evidence: 'That program is associated with EC9255 Arte Evo.', decision: 'Do not buy EC9155 for an Evo review feature.' }], [{ signal: 'Listing says Arte Evo and EC9155', guidance: 'Ask the seller for a model-plate photo and written confirmation.' }, { signal: 'Gauge is in range but taste is poor', guidance: 'Adjust recipe by taste; pressure zone alone cannot validate extraction.' }], 'Feature count and grinder details are restricted to EC9155MB.'),
    dimension('value', 7.8, 'The included grinder and kit are compelling on sale, but weak if the original model costs the same as newer rivals.', 'Best for a buyer who will keep the integrated system as designed.', 'September 2026 retailer context and current family comparison', ['arte-retailer', 'arte-coffeeness', 'arte-family', 'arte-evo'], 'ownership', 'The discount must compensate for the fixed partnership', ['Count the scale, coffee and cleaning supplies, but recognize that the key grinder and barista tools are included.', 'Compare exact model codes because a newer EC9255 at a similar price changes the decision.'], [{ signal: 'Meaningful EC9155 discount', evidence: 'Older model can deliver the core assisted workflow for less.', decision: 'Strong value if warranty and condition are clear.' }, { signal: 'Near EC9255 or Barista Pro price', evidence: 'Newer or more flexible alternatives enter range.', decision: 'Original Arte loses its reason to win.' }, { signal: 'Already own a grinder', evidence: 'Integrated grinder duplicates sunk capability.', decision: 'Buy a grinder-free machine instead.' }], [{ signal: 'Price looks unusually low', guidance: 'Confirm voltage, exact SKU, condition, returns and included tools.' }, { signal: 'Plan includes a separate grinder soon', guidance: 'Redirect the budget to a modular machine now.' }], 'The displayed price is a dated retailer snapshot, not a promise of stock or a universal MSRP.'),
  ],
  alternatives: [
    { name: 'Breville Barista Pro', reason: 'A 54 mm integrated rival with a more developed interface.', href: '/espresso-machine/breville-barista-pro-bes878/' },
    { name: 'Breville Bambino Plus', reason: 'A modular grinder route with automatic milk.', href: '/espresso-machine/breville-bambino/' },
    { name: "De'Longhi Magnifica Evo", reason: 'A true one-touch bean-to-cup workflow.', href: '/espresso-machine/delonghi-magnifica-evo/' },
  ],
  article: {
    methodology: `<p>I separated the original US EC9155MB from the later EC9255 Arte Evo, then reviewed its exact US support page and instructions, regional clarification where labeled, five independent reviews or demonstrations, three owner-discussion pools, and current price and availability signals checked September 15, 2026.</p><p>This is a research-led review, not a Coffeedant hands-on test. Independent sensory and measurement claims remain attributed. Owner reports inform questions and routines, not reliability rates. Cold-extraction and revised grinder claims from Arte Evo are explicitly excluded.</p>`,
    sections: arteSections, sources: arteSources,
    finalTitle: 'Buy the original Arte when the price rewards you for choosing the fixed system',
    finalVerdict: [
      'EC9155MB succeeds as a complete first station. It offers enough control to learn, a credible manual milk wand and an included grinder-and-tool package that avoids an intimidating shopping list.',
      'It is no longer an automatic choice at $699.95. Compare the exact EC9255, Barista Pro and a Bambino-plus-grinder setup. The original Arte wins when discounted and when you genuinely prefer one appliance, not when a confusing listing makes it look newer than it is.',
    ],
  },
  video: { id: 'HnOYsyXihr8', title: 'De’Longhi La Specialista Arte Review | New Semi-Automatic Espresso Machine', creator: 'Home Coffee Solutions', published: '2022-05-10', note: 'An exact EC9155 visual review of the grinder, portafilter and milk routine. Its observations belong to the creator and do not replace independent long-term evidence.' },
});

const magnificaSources: Source[] = [
  { id: 'magnifica-product', label: "De'Longhi US: Magnifica Evo with LatteCrema ECAM29084SB", href: 'https://www.delonghi.com/en-us/p/magnifica-evo-magnifica-evo-espresso-machine--automatic-milk-frother/ECAM29084SB.html?pid=0132250155', note: 'Exact US price, availability, features and warranty; checked September 15, 2026.' },
  { id: 'magnifica-support', label: "De'Longhi US: Magnifica Evo ECAM29084SB Support Center", href: 'https://www.delonghi.com/en-us/s/ECAM29084SB', note: 'Exact US instructions, care and service route.' },
  { id: 'magnifica-manual', label: "De'Longhi: Magnifica Evo ECAM29084SB instructions", href: 'https://library.delonghigroup.com/assetbank-delonghi/action/directLinkImage?assetId=282340&download=true', note: 'Official exact-model instructions.' },
  { id: 'magnifica-parts', label: "De'Longhi US: spare-parts and out-of-warranty support", href: 'https://www.delonghi.com/en-us/customer-services/spare-parts', note: 'Current parts route; verify ECAM29084SB stock.' },
  { id: 'magnifica-accessories', label: "De'Longhi US: coffee accessories and maintenance", href: 'https://www.delonghi.com/en-us/c/coffee-e-espresso/accessories-e-maintenance', note: 'Current catalog; verify ECAM29084SB compatibility.' },
  { id: 'magnifica-warranty', label: "De'Longhi US: warranty information", href: 'https://www.delonghi.com/en-us/warranty-information', note: 'General terms; exact coverage appears on the product page.' },
  { id: 'magnifica-wll', label: 'Whole Latte Love: Magnifica Evo machines review', href: 'https://www.wholelattelove.com/blogs/reviews/delonghi-magnifica-evo-review', note: 'Independent comparison across Magnifica Evo variants.' },
  { id: 'magnifica-tom', label: "Tom's Coffee Corner: Magnifica Evo review", href: 'https://tomscoffeecorner.com/delonghi-magnifica-evo-review/', note: 'Independent hands-on category review.' },
  { id: 'magnifica-home', label: 'Home Coffee Expert: Magnifica Evo review', href: 'https://homecoffeeexpert.com/delonghi-magnifica-evo-review/', note: 'Independent household review, updated in 2026.' },
  { id: 'magnifica-long', label: 'Balance Journal: Magnifica Evo longer-use test', href: 'https://balancejournal.co/food-drink/delonghi-magnifica-evo-review', note: 'Supplementary UK account with internally inconsistent duration wording.' },
  { id: 'magnifica-coffeeness', label: "Coffeeness: De'Longhi Magnifica Evo review", href: 'https://www.coffeeness.de/en/delonghi-magnifica-evo-review/', note: 'Independent test of the Magnifica Evo family and comparison with Philips-class machines.' },
  { id: 'magnifica-reviewed', label: "Reviewed: De'Longhi Magnifica Evo tested review", href: 'https://www.reviewed.com/cooking/content/delonghi-magnifica-evo-review', note: 'Independent automatic-milk and drink test.' },
  { id: 'magnifica-video', label: 'Cafelista_Coffee: Magnifica Evo video review', href: 'https://www.youtube.com/watch?v=uJfaochezvQ', note: 'Independent video test selected for the embedded review.' },
  { id: 'magnifica-owner-reddit', label: 'r/superautomatic: Magnifica Evo owner discussion', href: 'https://www.reddit.com/r/superautomatic/comments/1en7jtd/delonghi_magnifica_evo_review/', note: 'Owner/community pool one: setup and performance discussion. Measurements in user posts were not adopted as Coffeedant findings.' },
  { id: 'magnifica-owner-costco', label: 'Costco: Magnifica Evo buyer-review pool', href: 'https://www.costco.com/delonghi-magnifica-evo-automatic-espresso-machine-with-lattecrema-system.product.4000066539.html', note: 'Owner pool two; retailer bundle can differ.' },
  { id: 'magnifica-owner-bestbuy', label: 'Best Buy: Magnifica Evo ECAM29084SB buyer reviews', href: 'https://www.bestbuy.com/site/delonghi-magnifica-evo-coffee-and-espresso-machine-silver/6513285.p', note: 'Owner pool three; individual reports remain anecdotal.' },
  { id: 'magnifica-retailer', label: 'Amazon US: Magnifica Evo listing', href: 'https://amzn.to/4q9WFhq', note: 'Affiliate retailer route preserved from the legacy Coffeedant article; verify ECAM29084SB, seller, price and bundle.' },
];

const magnificaSections: Section[] = [
  {
    id: 'orientation', eyebrow: 'The category change', title: 'Magnifica Evo removes basket work, not the need to choose and maintain a recipe',
    html: `
      <p>The Magnifica Evo ECAM29084SB is a true superautomatic. Beans go into the hopper, the machine grinds a dose, compresses it inside a removable brew group, brews, and sends spent coffee to an internal container. Attach the LatteCrema carafe and it also portions milk for one-touch recipes. You do not own a portafilter, distribute coffee or tamp.</p>
      <p>That is the reason to buy it. Its espresso ceiling is lower than a well-dialed separate grinder and semi-automatic machine, but the routine asks far less of the person using it. The relevant comparison is not whether a skilled barista can make a better drink manually. It is whether your household will perform that manual routine before work and clean it afterward.</p>
      <p>This review is restricted to the <strong>US ECAM29084SB with LatteCrema</strong>, product CD-EM-000002. Magnifica Evo names cover manual-frother versions, different recipe panels and regional codes. The exact US page lists seven recipes: espresso, coffee, over ice, cappuccino, latte macchiato, My Latte and hot water. A review of another ECAM290 number can explain the family but cannot define this panel or package. ${sourceLinks(['magnifica-product', 'magnifica-wll'])}</p>
      <p>At De'Longhi's $899.95 direct price checked September 15, 2026, it sits above impulse-buy territory. Sales frequently determine value. The machine is convincing for several daily milk drinks, a shared kitchen and someone leaving pods for fresh beans. It is harder to defend for an espresso hobbyist, a household that changes beans constantly or a buyer who wants profiles and a touchscreen.</p>
      <div class="review-table-wrap" role="region" aria-label="Magnifica Evo task division" tabindex="0"><table class="review-table"><caption>What becomes automatic and what remains yours</caption><thead><tr><th scope="col">Job</th><th scope="col">Machine</th><th scope="col">Owner</th></tr></thead><tbody><tr><th scope="row">Coffee</th><td data-label="Machine">Grinds, doses, brews and ejects puck</td><td data-label="Owner">Choose beans, strength, grind range and drink volume</td></tr><tr><th scope="row">Milk</th><td data-label="Machine">LatteCrema dispenses programmed foam</td><td data-label="Owner">Fill, attach, run clean setting, refrigerate and wash carafe</td></tr><tr><th scope="row">Care</th><td data-label="Machine">Rinses and prompts for descale</td><td data-label="Owner">Empty trays, rinse brew group and complete prompted cycles</td></tr><tr><th scope="row">Taste</th><td data-label="Machine">Repeats a stored recipe</td><td data-label="Owner">Use suitable fresh beans and tune one setting at a time</td></tr></tbody></table></div>
    `,
  },
  {
    id: 'setup', eyebrow: 'The first bag matters', title: 'Set water hardness before chasing grinder settings',
    html: `
      <p>The box includes the machine, LatteCrema carafe, carbon active filter, hardness test, scoop, cleaning brush, 100 mL descaler and printed guidance according to the current US page. Check the pieces before adding beans. Install and activate the filter only as the instructions direct, then program water hardness from the supplied test. Descale prompts depend on this setup and use.</p>
      <p>The body is approximately 9.45 inches wide, 17.32 inches deep and 14.17 inches high. The narrow front is appealing, while the depth and top access deserve attention. Leave room to reach the 60.87-fluid-ounce tank, fill the roughly 8.82-ounce bean hopper and remove the internal brew group through its service door. The grounds container is rated for 14 portions. ${sourceLinks(['magnifica-product', 'magnifica-manual'])}</p>
      <h3>Use an ordinary medium roast first</h3>
      <p>Choose a dry-surfaced medium or medium-dark blend rather than oily, flavored or extremely light beans. Oily coatings can accumulate in an automatic grinder, and very light coffee demands more temperature and extraction control than this category naturally offers. Put in enough for the learning period, not an entire valuable bag.</p>
      <p>The grinder has 13 positions, but the manual's adjustment procedure matters. Change the dial only while it is actively grinding and move one click at a time. The new result may take several drinks to become clear as the path clears old grounds and the machine settles. Jumping from factory setting to the finest number can stall brewing and wastes coffee.</p>
      <h3>Build one baseline recipe</h3>
      <p>Start with espresso or coffee at a middle strength, default grind and default temperature. Taste several cups before changing anything. If the drink is thin, first shorten the delivered volume or increase aroma strength; then consider one finer grinder step. If it is harsh, shorten contact or move coarser rather than assuming maximum strength is always better.</p>
      <p>The machine can accept a measured scoop of preground coffee through its bypass route, useful for an occasional decaf. It is not a second bean hopper and should be used one approved scoop at a time. Follow the exact manual sequence so grounds do not enter the wrong part of the machine.</p>
    `,
  },
  {
    id: 'workflow', eyebrow: 'A weekday routine', title: 'One touch still creates a tray, puck bin and milk carafe to manage',
    html: `
      <p>A black-coffee morning is straightforward. Wake the machine, let its automatic rinse finish, place the cup, choose a recipe and strength, and allow it to grind and brew. The start and shutdown rinses use water and collect in the tray even when nothing spills. A “full” tray can therefore be normal after several drinks.</p>
      <p>For milk, fill the carafe with what you plan to use, attach it securely, select cappuccino, latte macchiato or My Latte, and respond to the clean prompt afterward. The milk container can return to the refrigerator, but milk-contact parts still need regular disassembly and washing. Automatic delivery reduces technique; it does not make dairy residue shelf-stable.</p>
      <p>My Latte is the most practical recipe when you want to use the milk placed in the carafe rather than leave a guessed quantity. It does not create an independent named profile for every person. ECAM29084SB has a direct-button interface and no app or multi-user profile system. A household can agree on settings, but personalization is lighter than on Eletta Explore.</p>
      <h3>Two people are where automation earns its keep</h3>
      <p>The second drink requires another grinding and brewing cycle, and milk recipes are made sequentially. Even so, the user is free from refilling and cleaning a portafilter between them. Put the first cup aside or hand it over while the next cycle runs. The machine's throughput is domestic rather than party-scale, yet mental workload stays low.</p>
      <p>The dual coffee spouts can serve two espresso-style coffees in supported use, but a milk recipe remains one cup. Confirm cup position before starting because the machine cannot recognize a misplaced vessel. Keep a small catch cup under the spouts between uses to reduce rinse water in the tray if that fits your routine.</p>
      <p>Independent reviewers consistently praise simple operation while disagreeing on the absolute quality and heat of the drinks. That is normal. Cup material, recipe volume, milk temperature and regional variant influence the result. Warm the cup and shorten oversized beverages before concluding that a machine set to a hotter temperature is defective. ${sourceLinks(['magnifica-wll', 'magnifica-home', 'magnifica-long'])}</p>
    `,
  },
  {
    id: 'espresso', eyebrow: 'Automatic extraction', title: 'The best Magnifica espresso comes from controlling volume, not maxing every setting',
    html: `
      <p>A superautomatic brew group uses a smaller, internally formed puck than a typical double basket in a manual espresso machine. Its advantage is repeatability and convenience; its limitation is dose and preparation freedom. The 15-bar pump figure on the specification sheet is not the brewing recipe and does not guarantee café-style concentration.</p>
      <p>Begin with the espresso button, medium aroma and default grinder position. If the result is weak, make the drink shorter before forcing the grinder dramatically finer. More water through the same internal dose produces a larger but usually less concentrated beverage. For an Americano-style cup, a shorter coffee plus separate hot water often preserves better flavor than stretching one puck.</p>
      <p>Use grind as a slow control. One finer step can increase resistance and body; too fine can reduce flow or trigger a failed cycle. Change only while grinding, wait several beverages and compare the same recipe. The owner community frequently recommends patience because immediate repeated changes make the machine impossible to read.</p>
      <p>Tom's Coffee Corner, Whole Latte Love and Reviewed found the automatic workflow competitive, while Home Coffee Expert describes the cup as good rather than transformative. A 2026 longer-use UK page reports favorable daily espresso but uses other regional codes and inconsistent duration language, so it remains supplementary. Our conclusion is strong superautomatic espresso for medium roasts, below a dialed manual setup in clarity and control. ${sourceLinks(['magnifica-tom', 'magnifica-wll', 'magnifica-reviewed', 'magnifica-home', 'magnifica-long'])}</p>
      <p>Freshness remains decisive. A machine cannot recover aromatic coffee from an open hopper left for weeks. Refill smaller amounts, keep the bag sealed and avoid changing beans until the grinder path has cleared. When switching roasts, reset expectations before blaming yesterday's grind position.</p>
      <p>Over Ice changes delivery for a drink intended to meet ice, but it does not chill water inside the machine. Use a sufficiently large glass and fresh ice, and expect dilution. It is an iced-coffee program, not the under-three-minute cold extraction offered by Eletta Explore.</p>
    `,
  },
  {
    id: 'milk', eyebrow: 'LatteCrema convenience', title: 'The carafe makes repeatability easy and adds the most important cleaning job',
    html: `
      <p>LatteCrema is the main reason to choose ECAM29084SB over a manual-frother Magnifica Evo. It draws milk from the attached carafe and dispenses foam according to the selected recipe. The user does not hold a jug or learn a steam vortex, so different household members can obtain similar drinks.</p>
      <p>Similarity is not perfection. Foam amount and drink temperature depend on recipe, milk type, starting milk temperature, cup and programmed volumes. A latte macchiato is intentionally more layered and milk-forward than a cappuccino. Judge each recipe in an appropriate cup before rewriting its quantities.</p>
      <p>After each milk session, turn or select the carafe's clean function when prompted and keep a cup beneath the milk spout. Then remove and refrigerate remaining milk promptly. Periodically disassemble the lid and milk-contact pieces exactly as shown in the manual; selected parts are described as dishwasher safe on the US page. ${sourceLinks(['magnifica-product', 'magnifica-manual'])}</p>
      <p>Alternative milk performance varies by formulation. An oat drink designed for steaming will behave differently from a thin almond beverage. Keep product and fill quantity constant while comparing, and do not infer a machine problem from one carton. The automatic system does not identify milk chemistry.</p>
      <p>The texture is optimized for convenient cappuccino and latte-style drinks, not manual latte-art control. Buyers who enjoy pouring microfoam should prefer a wand. Buyers who never practise manual steaming are paying for a skill they will not use; LatteCrema is the rational compromise.</p>
    `,
  },
  {
    id: 'build', eyebrow: 'Inside the appliance', title: 'A removable brew group is the most valuable ownership feature',
    html: `
      <p>The Magnifica Evo is mostly an appliance build: molded panels, a compact thermoblock, conical burr grinder, removable water and waste parts, and an internal brew unit. It does not feel like a metal prosumer machine because it is not trying to be one. Its job is to coordinate moving parts and stay approachable.</p>
      <p>The brew group can be removed for a cool-water rinse after the machine has shut down and settled, following the instructions. That gives the owner direct access to a critical coffee-contact assembly without opening the electrical body. Let it air-dry as directed and reinstall it only when the machine state permits.</p>
      <p>The narrow width is offset by depth. The milk carafe also needs refrigerator space and a place on the counter when detached. The cup platform and glossy panel collect splashes and fingerprints, while the tray's internal water use means it needs attention more often than visible spills suggest.</p>
      <p>Owner pools include enthusiastic long-use comments, setup frustration and returns. Retail star averages cannot tell us how a unit will age, and the six-week independent test cannot establish a decade-long lifespan. We can say the platform provides owner-cleanable major parts, exact-model support and a three-year path when registration conditions are met. We cannot publish a failure rate without service data. ${sourceLinks(['magnifica-product', 'magnifica-owner-costco', 'magnifica-owner-bestbuy'])}</p>
    `,
  },
  {
    id: 'features', eyebrow: 'Seven direct recipes', title: 'The panel is intentionally simpler than the more expensive De’Longhi machines',
    html: `
      <p>The seven US recipes are espresso, coffee, over ice, cappuccino, latte macchiato, My Latte and hot water. Strength selection and programmable quantities provide the useful customization. There is no color touchscreen, Coffee Link app, Bean Adapt guidance or four-profile memory on ECAM29084SB.</p>
      <p>That makes the machine easier to share casually. A guest can recognize an icon without opening a profile. It also makes repeated individual preferences less elegant. If one person wants a short strong cappuccino and another wants a large mild version, they will adjust rather than recall two names.</p>
      <p>My Latte is not a blank programmable drink database. It is a milk-use-oriented recipe within the panel. Read the exact instructions for personalization and do not import behavior from Magnifica Evo Next, Dinamica or Eletta reviews.</p>
      <p>The bypass chute provides a practical decaf route, the adjustable spout accommodates common cups, and hot water supports tea or an Americano. These modest functions change everyday use more than the pump-pressure headline.</p>
    `,
  },
  {
    id: 'owners', eyebrow: 'What review averages hide', title: 'Ease is the consensus; dial-in patience and milk cleaning explain most friction',
    html: `
      <p>Large retailer pools consistently contain praise for leaving pods, pressing a button and getting repeatable milk drinks. They also contain reports of watery first cups, confusing initial setup, tray water and returned machines. Those patterns make sense for a device that arrives at generic settings and runs automatic rinses.</p>
      <p>Costco's large pool can include a club-specific bundle or regional variation. Best Buy's listing is closer to ECAM29084SB, while De'Longhi's own page includes a large first-party review collection. None is a controlled sample, and incentivized reviews can exist. We use them to identify questions, never as the sole reason for a score. ${sourceLinks(['magnifica-product', 'magnifica-owner-costco', 'magnifica-owner-bestbuy'])}</p>
      <p>Community advice often pushes the grinder finer immediately. The manual's safer rule matters more: adjust during grinding, one step at a time, and allow multiple drinks. A stalled brew after a jump to minimum does not prove the machine cannot make strong coffee; it may show the adjustment outran the bean.</p>
      <p>The 180-shot independent test adds longer routine evidence than an unboxing and describes one descale cycle, but it is still six weeks and a UK variant. It strengthens conclusions about maintenance effort and repeatability, not lifetime reliability or the US recipe panel. ${sourceLinks(['magnifica-long'])}</p>
    `,
  },
  {
    id: 'ownership', eyebrow: 'The appliance bargain', title: 'Convenience is paid back through small, non-negotiable cleaning routines',
    html: `
      <p>Every day, empty the drip tray and grounds container as indicated, refresh water, and complete the LatteCrema clean step after milk. Wipe the dispensing area and do not let wet pucks sit for long absences. Weekly or on the manual schedule, rinse the removable brew group with water only and clean the accessible interior of loose grounds.</p>
      <p>At the prompted interval, run the full descale cycle with suitable descaler. The programmed hardness and filter state influence timing. Do not interrupt the process or assume a filter eliminates all maintenance. Keep a replacement filter and enough descaler available before the warning arrives.</p>
      <p>The current US product page specifies a two-year warranty plus one additional year with product registration, while the site header promotes three-year coverage. Register promptly, retain the receipt and confirm the terms for the purchased seller and serial. De'Longhi also maintains parts and accessories routes, but compatibility and live stock require an exact ECAM29084SB check. ${sourceLinks(['magnifica-product', 'magnifica-warranty', 'magnifica-parts', 'magnifica-accessories'])}</p>
      <p>Running cost includes beans, water treatment, filters where used, EcoDecalk-type descaler and milk-cleaning time. It avoids capsules and a separate grinder, but it is not maintenance-free. The brew group and carafe are benefits precisely because you are expected to care for them.</p>
      <p>Do not use flavored, caramelized or excessively oily beans unless the manufacturer explicitly approves them. Coatings can create grinder and brew-path trouble that a descale cycle will not remove. Descaling addresses mineral buildup in the water path, not coffee oils in the grinder.</p>
    `,
  },
  {
    id: 'compare', eyebrow: 'Choose by household effort', title: 'The nearest alternatives change milk cleaning, profiles or manual control',
    html: comparisonTablesHtml("De'Longhi Magnifica Evo ECAM29084SB", [
      { name: "De'Longhi Magnifica Evo", quickDecision: 'Choose for seven direct recipes, LatteCrema and a removable brew group at a sale-friendly midrange price.', priceClass: '$899.95 official US price', dimensions: '17.32 D × 9.45 W × 14.17 H in', heating: '1250 W thermoblock automatic system', coffeeSetup: 'Built-in conical burr grinder, 13 settings', milkWorkflow: 'Automatic LatteCrema carafe', bestFor: 'Simple shared milk drinks' },
      { name: 'Philips 5400 LatteGo', href: '/espresso-machine/philips-5400-lattego/', quickDecision: 'Choose for profiles, a broader menu and a very simple two-piece milk system.', priceClass: 'Similar to higher depending on availability', dimensions: 'Approx. 9.7 W × 14.6 D × 17 H in', heating: 'Automatic thermoblock', coffeeSetup: 'Built-in ceramic grinder, removable brew group', milkWorkflow: 'Tube-free LatteGo carafe', bestFor: 'Several users with saved preferences' },
      { name: 'Philips 2200 LatteGo', href: '/espresso-machine/philips-2200-lattego/', quickDecision: 'Spend less if you need only a short drink list and simple automatic milk.', priceClass: 'Lower automatic tier', dimensions: 'Approx. 9.7 W × 14.6 D × 17 H in', heating: 'Automatic thermoblock', coffeeSetup: 'Built-in grinder, removable brew group', milkWorkflow: 'LatteGo carafe', bestFor: 'Basic coffee and cappuccino' },
      { name: 'Breville Bambino Plus', href: '/espresso-machine/breville-bambino/', quickDecision: 'Choose the manual coffee path when espresso potential matters more than push-button convenience.', priceClass: '$499.95 plus separate grinder', dimensions: 'Approx. 7.7 W × 12.6 D × 12.2 H in', heating: 'ThermoJet, sequential', coffeeSetup: 'Separate grinder and 54 mm portafilter', milkWorkflow: 'Automatic presets or manual steam', bestFor: 'Higher-control espresso and milk' },
    ], 'Prices were checked September 15, 2026 where stated. Recipe counts, dimensions and bundles vary by exact regional code; compare the model number, not only the family.'),
  },
  {
    id: 'related', eyebrow: 'The next decision', title: 'Compare the machine against the routine you will actually repeat',
    html: recommendationCardsHtml([
      { kicker: 'Closest household rival', title: 'Philips 5400 LatteGo review', text: 'Compare profiles and the tube-free milk system with De\'Longhi recipe simplicity.', href: '/espresso-machine/philips-5400-lattego/', linkLabel: 'Read the review', featured: true },
      { kicker: 'Lower-cost automatic', title: 'Philips 2200 LatteGo review', text: 'See whether a shorter menu is enough to protect the budget.', href: '/espresso-machine/philips-2200-lattego/', linkLabel: 'Read the review' },
      { kicker: 'More espresso control', title: 'Breville Bambino Plus review', text: 'Compare one-touch coffee preparation with a separate grinder and portafilter.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the review' },
      { kicker: 'Category context', title: 'Best superautomatic machines', text: 'Compare cleaning systems, user profiles and drink menus across the category.', href: '/espresso-machine/superautomatic/', linkLabel: 'Open the guide' },
    ]),
  },
  {
    id: 'faq', eyebrow: 'Exact US answers', title: 'Magnifica Evo ECAM29084SB FAQ',
    html: faqHtml([
      { question: 'Is Magnifica Evo fully automatic?', answer: 'Yes. It grinds, doses, brews and ejects the internal puck. The ECAM29084SB LatteCrema carafe also dispenses milk recipes automatically.' },
      { question: 'How many drinks does this model have?', answer: 'The current US ECAM29084SB page lists seven: espresso, coffee, over ice, cappuccino, latte macchiato, My Latte and hot water.' },
      { question: 'Can it use preground coffee?', answer: 'Yes, through the bypass route, one approved scoop and sequence at a time. It is practical for occasional decaf, not a second bulk hopper.' },
      { question: 'Does it have profiles or an app?', answer: 'No. Those are features of higher De\'Longhi families. ECAM29084SB uses direct recipe and setting controls.' },
      { question: 'Is the brew group removable?', answer: 'Yes. Remove and rinse it only when the machine is in the state described by the manual; do not use detergent unless De\'Longhi instructs it.' },
      { question: 'Does Over Ice make cold brew?', answer: 'No. It brews coffee intended to be combined with ice. Eletta Explore uses a different under-three-minute cold-extraction process.' },
    ]),
  },
];

export const delonghiMagnificaEvoReview = review({
  slug: '/espresso-machine/delonghi-magnifica-evo/', productId: 'CD-EM-000002', brand: "De'Longhi", model: 'Magnifica Evo with LatteCrema', sku: 'ECAM29084SB',
  category: 'Fully automatic bean-to-cup espresso machine', brandPath: BRAND_PATH,
  title: "De'Longhi Magnifica Evo review: the ECAM29084SB routine explained",
  description: "A research-led review of the US De'Longhi Magnifica Evo ECAM29084SB, with seven drinks, LatteCrema, espresso setup, cleaning, warranty, current price and alternatives.",
  verdictLabel: 'Simple one-touch value',
  verdict: 'Magnifica Evo is the sensible De’Longhi for a household that wants fresh beans and automatic milk without profiles, an app or a giant drink menu. Its best results come from shorter coffee volumes, patient grinder changes and disciplined carafe care. Buy on workflow and sale price, not the 15-bar headline.',
  assessment: 'A strong first superautomatic when simple controls are an advantage.',
  image: 'images/products/delonghi-magnifica-evo.png', imageAlt: "De'Longhi Magnifica Evo ECAM29084SB with LatteCrema milk carafe",
  published: '2026-02-11', updated: UPDATED,
  authorNote: 'I focused on the exact US ECAM29084SB because Magnifica Evo reviews routinely mix different panels and milk systems. The judgment combines current documentation, independent tests and owner routines. This is research-led; I have not physically tested the unit.',
  basisDisclosure,
  price: { label: "De'Longhi US price", msrp: '$899.95', numeric: '899.95', currency: 'USD', typical: 'Direct price; sales and retailer bundles vary', checked: 'September 15, 2026' },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4q9WFhq', note: 'Affiliate link · verify ECAM29084SB', affiliate: true, primary: true },
    { label: "Check De'Longhi price", href: 'https://www.delonghi.com/en-us/p/magnifica-evo-magnifica-evo-espresso-machine--automatic-milk-frother/ECAM29084SB.html?pid=0132250155', note: 'Official US store' },
  ],
  facts: [
    { label: 'Machine type', value: 'Fully automatic bean-to-cup' }, { label: 'Recipes', value: '7 direct hot/over-ice options' },
    { label: 'Grinder', value: 'Conical burr, 13 settings' }, { label: 'Milk', value: 'Automatic LatteCrema carafe' },
    { label: 'Water / beans', value: '60.87 fl oz / 8.82 oz' }, { label: 'Exact US model', value: 'ECAM29084SB' },
  ],
  quickAnswers: [
    { question: 'Exact version?', answer: 'US ECAM29084SB with automatic LatteCrema and seven recipes.' },
    { question: 'Need a separate grinder?', answer: 'No. The built-in conical burr grinder has 13 positions.' },
    { question: 'Manual coffee work?', answer: 'No portafilter work. You select beans and settings, refill, empty waste and maintain the brew path.' },
    { question: 'Automatic milk?', answer: 'Yes. Attach LatteCrema, choose the drink, run the carafe clean step and refrigerate or wash it.' },
    { question: 'Profiles or app?', answer: 'No. This is the simpler direct-button model.' },
    { question: 'Cold brew?', answer: 'No. Over Ice is hot-brewed coffee adjusted for ice, not Eletta-style cold extraction.' },
  ],
  bestFor: ['A household leaving capsules for one-touch fresh-bean coffee', 'Several cappuccinos or latte macchiatos where nobody wants to steam manually', 'A buyer who values a removable brew group and simple direct controls'],
  avoidIf: ['You want manual espresso control or light-roast experimentation', 'Several people need named profiles and different saved recipes', 'You will not clean the milk carafe and removable brew group on schedule'],
  pros: ['Seven clear direct recipes', 'Automatic LatteCrema milk without manual technique', 'Thirteen grinder settings and preground bypass', 'Removable brew group and dishwasher-safe selected parts'],
  cons: ['No user profiles, app or touchscreen', 'Drink strength depends heavily on controlling programmed volume', 'Milk automation adds cleaning after every session', 'Official $899.95 price is less compelling than common sale pricing'],
  dimensions: [
    dimension('espresso', 7.6, 'Strong for an accessible superautomatic, with volume and grinder limits below a well-dialed manual setup.', 'Best with medium roasts and short, controlled drinks.', 'Exact specifications plus five independent tests', ['magnifica-product', 'magnifica-wll', 'magnifica-tom', 'magnifica-home', 'magnifica-reviewed'], 'espresso', 'Tune volume before forcing the grinder', ['Start with the espresso recipe, middle strength and default grind.', 'Let one-click grinder changes settle across several drinks.'], [{ signal: '13 grinder settings', evidence: 'Useful range with manual-required adjustment procedure.', decision: 'Enough for common beans; not stepless precision.' }, { signal: 'Adjustable recipe amount', evidence: 'Drink volume can be tailored.', decision: 'Shortening is often the fastest route to more concentration.' }, { signal: 'Internal brew group', evidence: 'Consistent automated puck with limited manual access.', decision: 'Repeatability over barista control.' }], [{ signal: 'Watery cup', guidance: 'Shorten volume or increase aroma before one finer grind step.' }, { signal: 'No coffee after moving finer', guidance: 'Return one step coarser and allow the path to clear.' }, { signal: 'Second bean tastes different', guidance: 'Expect several drinks before the previous coffee clears fully.' }], 'Independent measurements remain attributed and regional variants are not merged.'),
    dimension('milk', 8.2, 'LatteCrema makes milk drinks repeatable across users, with routine cleaning and limited manual texture control.', 'Excellent for convenient cappuccino; not for manual latte-art practice.', 'Exact carafe documentation and independent household use', ['magnifica-product', 'magnifica-manual', 'magnifica-wll', 'magnifica-home'], 'milk', 'Automation earns its keep only when the carafe is cared for', ['Use cold milk, a consistent fill and the intended recipe before editing quantities.', 'Run the clean position immediately and wash parts on schedule.'], [{ signal: 'Automatic LatteCrema', evidence: 'Dispenses programmed milk without a jug technique.', decision: 'Shared-household consistency.' }, { signal: 'Three milk recipes', evidence: 'Cappuccino, latte macchiato and My Latte on exact US panel.', decision: 'Good essentials, not a huge menu.' }, { signal: 'Removable carafe', evidence: 'Can be refrigerated and disassembled.', decision: 'Convenient only with disciplined hygiene.' }], [{ signal: 'Foam changes by carton', guidance: 'Hold milk brand and temperature constant before changing machine settings.' }, { signal: 'Milk flow sputters', guidance: 'Run clean, inspect and wash approved milk components per the manual.' }], 'The machine cannot identify or normalize different plant-milk formulations.'),
    dimension('workflow', 8.7, 'Direct recipes, automatic puck disposal and a narrow front make daily operation straightforward.', 'The most convincing reason to choose it over a portafilter machine.', 'Documented flow plus convergent test and owner feedback', ['magnifica-product', 'magnifica-manual', 'magnifica-owner-reddit', 'magnifica-owner-costco'], 'workflow', 'Plan for rinse water and sequential drinks', ['Keep a catch cup beneath the spouts and empty the tray before it interrupts a busy morning.', 'Milk drinks are sequential, but no basket needs preparation between them.'], [{ signal: 'Seven direct buttons', evidence: 'No deep touchscreen menu for core drinks.', decision: 'Fast access for a shared kitchen.' }, { signal: 'Automatic rinses', evidence: 'Uses water at startup/shutdown.', decision: 'Cleaner path, faster tray fill.' }, { signal: '14-puck container', evidence: 'Useful domestic capacity.', decision: 'Still empty before long absences.' }], [{ signal: 'Tray fills without spills', guidance: 'Account for automatic rinse water.' }, { signal: 'Several drinks take time', guidance: 'Hand off each cup while the next sequential cycle runs.' }], 'One touch describes drink initiation, not refilling, rinsing or milk storage.'),
    dimension('build', 7.5, 'Practical removable internals and exact-model support matter more than the plastic-heavy exterior.', 'An appliance designed for owner cleaning rather than a metal prosumer object.', 'Manufacturer specs, support and owner pools', ['magnifica-product', 'magnifica-support', 'magnifica-owner-bestbuy', 'magnifica-owner-costco'], 'build', 'Access to the brew group is the key design decision', ['Rinsing an accessible brew unit gives the owner control over a major coffee-contact part.', 'Plastic panels keep weight and cost down but do not indicate failure rate.'], [{ signal: 'Removable brew group', evidence: 'Documented owner-care access.', decision: 'Easier inspection and rinsing.' }, { signal: 'Deep, narrow body', evidence: '9.45-inch width with 17.32-inch depth.', decision: 'Measure cabinet and side-door access.' }, { signal: 'Current US support', evidence: 'Exact product and support pages are live.', decision: 'Clearer ownership path than discontinued stock.' }], [{ signal: 'Brew unit resists removal', guidance: 'Return the machine to the manual-specified shutdown state; do not force it.' }, { signal: 'Interior has loose grounds', guidance: 'Brush or remove only as the approved care instructions allow.' }], 'Public review pools do not establish a reliability percentage.'),
    dimension('features', 7.4, 'The seven recipes and key adjustments cover basics, but profiles, app control and deeper personalization are absent.', 'Choose simplicity deliberately rather than expecting higher-tier software.', 'Exact US panel documented', ['magnifica-product', 'magnifica-manual'], 'features', 'Seven recipes are enough for many households', ['Map each button to the drink it actually makes before deciding the menu is small.', 'Use the preground route for occasional decaf, not as a second hopper.'], [{ signal: 'Over Ice', evidence: 'Hot coffee recipe designed for ice.', decision: 'Useful iced drink, not cold brew.' }, { signal: 'My Latte', evidence: 'Milk-oriented personalized route.', decision: 'Reduces leftover milk without adding profiles.' }, { signal: 'No app/profiles', evidence: 'Not listed for ECAM29084SB.', decision: 'Fewer individual memories in a shared home.' }], [{ signal: 'Family review shows another icon', guidance: 'Check the exact ECAM29084SB panel and manual.' }, { signal: 'Need daily decaf', guidance: 'Use the approved one-scoop bypass or choose a dual-hopper approach.' }], 'Features from Magnifica Evo Next and other regional panels are excluded.'),
    dimension('value', 7.8, 'Solid at the right sale price, while the $899.95 direct price faces profile-rich competitors.', 'Value comes from repeated use of LatteCrema and fresh-bean automation.', 'Current direct and retailer context', ['magnifica-product', 'magnifica-retailer', 'magnifica-home', 'magnifica-long'], 'ownership', 'Price the saved labor, then price the care supplies', ['A separate grinder and barista kit are unnecessary, but filters, descaler and cleaning time remain.', 'If milk automation is unused, a cheaper manual-frother variant may be the better value.'], [{ signal: '$899.95 direct', evidence: 'Current exact-model US price on September 15, 2026.', decision: 'Fair but more dependent on priorities than a strong sale.' }, { signal: 'Frequent retailer discounts', evidence: 'Street prices can be substantially lower.', decision: 'Compare model code and bundle, not discount percentage.' }, { signal: 'Daily milk use', evidence: 'Uses the feature that differentiates this variant.', decision: 'Improves value per drink.' }], [{ signal: 'Sale listing has another ECAM code', guidance: 'Recheck recipes and milk system before comparing price.' }, { signal: 'Mostly black coffee', guidance: 'Do not pay extra for a carafe that stays in the box.' }], 'Price and in-stock status were checked September 15, 2026 and can change.'),
  ],
  alternatives: [
    { name: 'Philips 5400 LatteGo', reason: 'Profiles and a simpler milk-parts design.', href: '/espresso-machine/philips-5400-lattego/' },
    { name: 'Philips 2200 LatteGo', reason: 'A shorter menu at a lower automatic tier.', href: '/espresso-machine/philips-2200-lattego/' },
    { name: 'Breville Bambino Plus', reason: 'Higher manual espresso potential with automatic milk.', href: '/espresso-machine/breville-bambino/' },
  ],
  article: {
    methodology: `<p>I used the current exact US ECAM29084SB product and support pages, the manufacturer instructions, five independent hands-on or long-term reviews, a detailed video test, and three distinct owner-review pools. Price and availability were checked September 15, 2026.</p><p>This is research-led, not a Coffeedant hands-on test. I did not import recipe counts from other Magnifica Evo codes, adopt user measurements as my own, or infer a failure rate from retailer reviews. The long-term source uses UK variants and is labeled accordingly.</p>`,
    sections: magnificaSections, sources: magnificaSources,
    finalTitle: 'Magnifica Evo wins when nobody wants to become the household barista',
    finalVerdict: [
      'ECAM29084SB gives a shared home the useful part of automation: consistent initiation, no puck preparation, automatic milk and owner access to the brew group. Its seven recipes are enough when espresso, coffee and classic milk drinks are the real menu.',
      'Wait for a strong price if profiles and a touchscreen matter, or choose a portafilter system if espresso experimentation is the goal. For a household that will clean the carafe and wants fresh beans without manual technique, this is one of De’Longhi’s clearest propositions.',
    ],
  },
  video: { id: 'uJfaochezvQ', title: 'Delonghi Magnifica Evo Review: Best Option Without Breaking the Bank ?', creator: 'Cafelista_Coffee', published: '2024-08-03', note: 'Independent video testing that helps show the grinder, drink and care workflow. Its results belong to the reviewer and variant shown.' },
});

const elettaSources: Source[] = [
  { id: 'eletta-product', label: "De'Longhi US: Eletta Explore ECAM45086S EX:4", href: 'https://www.delonghi.com/en-us/p/eletta-explore-eletta-explore-espresso-machine/ECAM45086S%2BEX%3A4.html?pid=0132250196', note: 'Exact US price, availability, EX:4 features and specifications; checked September 15, 2026.' },
  { id: 'eletta-support', label: "De'Longhi US: Eletta Explore ECAM45086S Support Center", href: 'https://www.delonghi.com/en-us/s/ECAM45086S', note: 'Current ECAM45086S support; the EX:4 sale-page suffix remains decisive.' },
  { id: 'eletta-manual', label: "De'Longhi: ECAM45086S instructions", href: 'https://library.delonghigroup.com/assetbank-delonghi/action/directLinkImage?assetId=293486&download=true', note: 'Official US model instructions.' },
  { id: 'eletta-quick', label: "De'Longhi: ECAM45086S quick-start guide", href: 'https://library.delonghigroup.com/assetbank-delonghi/action/directLinkImage?assetId=293485&download=true', note: 'Official setup and accessory workflow.' },
  { id: 'eletta-parts', label: "De'Longhi US: spare-parts and out-of-warranty support", href: 'https://www.delonghi.com/en-us/customer-services/spare-parts', note: 'Current parts route; verify EX:4 compatibility and stock.' },
  { id: 'eletta-accessories', label: "De'Longhi US: coffee accessories and maintenance", href: 'https://www.delonghi.com/en-us/c/coffee-e-espresso/accessories-e-maintenance', note: 'Current catalog; verify EX:4 compatibility.' },
  { id: 'eletta-warranty', label: "De'Longhi US: warranty information", href: 'https://www.delonghi.com/en-us/warranty-information', note: 'Current route; verify purchased-unit coverage.' },
  { id: 'eletta-techradar', label: "TechRadar: De'Longhi Eletta Explore review", href: 'https://www.techradar.com/home/coffee-machines/delonghi-eletta-explore-review', note: 'Independent hot, cold and household test; variant caveats retained.' },
  { id: 'eletta-home', label: 'Home Coffee Expert: Eletta Explore review', href: 'https://homecoffeeexpert.com/delonghi-eletta-explore-review/', note: 'Independent household test.' },
  { id: 'eletta-tom', label: "Tom's Coffee Corner: Eletta Explore review", href: 'https://tomscoffeecorner.com/delonghi-eletta-explore-espresso-machine-review/', note: 'Independent technical review and comparisons across superautomatic machines.' },
  { id: 'eletta-lbtech', label: 'LB Tech Reviews: Eletta Explore tested review', href: 'https://www.lbtechreviews.com/test/delonghielettaexplore', note: 'Independent espresso and hot-milk test.' },
  { id: 'eletta-idealhome', label: 'Ideal Home: Eletta Explore household review', href: 'https://www.idealhome.co.uk/kitchen/delonghi-eletta-explore-coffee-machine-review', note: 'Independent footprint, price and capability review.' },
  { id: 'eletta-video', label: "Tom's Coffee Corner: Eletta Explore video review", href: 'https://www.youtube.com/watch?v=pZF0VneC56I', note: 'Independent visual review and setup.' },
  { id: 'eletta-owner-reddit', label: 'r/superautomatic: Eletta Explore owner experiences', href: 'https://www.reddit.com/r/superautomatic/comments/18q0e46/delonghi_eletta_explore_experiences/', note: 'Owner pool one: long-use and milk-temperature discussion.' },
  { id: 'eletta-owner-whirlpool', label: 'Whirlpool Forums: Eletta Explore owner thread', href: 'https://forums.whirlpool.net.au/archive/9l10qym8', note: 'Owner pool two; regional codes differ.' },
  { id: 'eletta-owner-walmart', label: 'Walmart: Eletta Explore buyer-review pool', href: 'https://www.walmart.com/reviews/product/1730917044', note: 'Owner pool three; individual reports remain anecdotal.' },
  { id: 'eletta-retailer', label: 'Amazon US: Eletta Explore listing', href: 'https://amzn.to/4qebn7y', note: 'Affiliate route; verify ECAM45086S EX:4, seller and package.' },
];

const elettaSections: Section[] = [
  {
    id: 'orientation', eyebrow: 'The reason to spend $2,000', title: 'Eletta Explore is a hot-and-cold drink system, not simply a better espresso button',
    html: `
      <p>Eletta Explore suits a household rotating among espresso, cappuccino, iced lattes and travel-mug drinks. Its price buys two milk systems, profiles, connected personalization and fast cold extraction. Those systems are wasteful if everyone drinks the same black coffee.</p>
      <p>Its 13-setting grinder, internal brew group and waste bin automate coffee preparation. Separate LatteCrema Hot and Cool carafes handle milk, while a 3.5-inch display, four profiles and Coffee Link guide personalization.</p>
      <p>This review covers the <strong>current US ECAM45086S EX:4</strong>, product CD-EM-000039. Older or regional ECAM450 variants can differ in accessories, connectivity, recipes, electrical specifications and cold-extraction generation. The US page checked September 15, 2026 lists 50-plus recipes, cold brew in under three minutes, four profiles and app-connected Bean Adapt. ${sourceLinks(['eletta-product', 'eletta-support'])}</p>
      <p>The decision is whether hot foam, cold foam and cold extraction will justify the space and care. Hot-cappuccino buyers can spend far less; a varied household can make the breadth pay.</p>
      <div class="review-table-wrap" role="region" aria-label="Eletta Explore system overview" tabindex="0"><table class="review-table"><caption>Four subsystems, four ownership consequences</caption><thead><tr><th scope="col">System</th><th scope="col">What it does</th><th scope="col">What you still manage</th></tr></thead><tbody><tr><th scope="row">Coffee</th><td data-label="What it does">Grinds, doses, brews and ejects the puck</td><td data-label="What you still manage">Beans, strength, grind range, recipe volume and cleaning</td></tr><tr><th scope="row">Hot milk</th><td data-label="What it does">LatteCrema Hot dispenses adjustable foam</td><td data-label="What you still manage">Milk, clean dial, refrigeration and parts washing</td></tr><tr><th scope="row">Cold milk</th><td data-label="What it does">Separate LatteCrema Cool carafe creates cold foam</td><td data-label="What you still manage">Correct carafe, cold milk and another set of parts</td></tr><tr><th scope="row">Cold extraction</th><td data-label="What it does">Controls low-temperature water flow and pressure in under three minutes</td><td data-label="What you still manage">Ice, glass size, dilution and taste expectations</td></tr></tbody></table></div>
    `,
  },
  {
    id: 'setup', eyebrow: 'A large system needs a home', title: 'Measure access, refrigerator space and the travel-mug route before adding beans',
    html: `
      <p>The US dimensions are 17.50 inches deep, 10.25 wide and 15.13 high; weight is 26.89 pounds. The narrow but deep body needs access for its 60.87-fluid-ounce tank, approximately 10.58-ounce hopper, bypass chute and removable brew group. The grounds bin holds 14 portions.</p>
      <p>Counter space is only part of the plan. Two milk carafes need clean storage, and unused milk belongs in the refrigerator. The included travel mug requires a drying and storage place. Put those objects into the proposed kitchen arrangement before deciding the machine “fits.” ${sourceLinks(['eletta-product', 'eletta-quick'])}</p>
      <h3>Set water and beans before opening the whole menu</h3>
      <p>Use the supplied hardness test and first-use sequence. Program water hardness, install the approved filter if you choose that route, fill with fresh water and let the guided rinse complete. The system's descale schedule depends on correct setup; skipping it to reach the first latte faster creates bad ownership data from day one.</p>
      <p>Start with a dry-surfaced medium roast. Avoid heavily oily or flavored beans in the hopper because coatings can collect in automatic grinders. Add a few days' supply rather than treating the hopper as long-term storage. The bypass chute can handle an occasional approved scoop of preground decaf; it is not a second bulk bean system.</p>
      <p>The grinder has 13 positions. Change only during active grinding, one step at a time, and wait several drinks before judging. Bean Adapt can guide settings, but it does not physically know every roast or erase the need to taste. Create a stable basic espresso before asking the app and profile system to preserve it.</p>
      <h3>Pair the app after the machine works locally</h3>
      <p>Make a documented drink from the panel before pairing Coffee Link. This separates connectivity problems from water, grinder and brewing setup, and keeps the physical panel as a reliable baseline.</p>
    `,
  },
  {
    id: 'workflow', eyebrow: 'A household café', title: 'Profiles reduce arguments, while two carafes increase the washing-up inventory',
    html: `
      <p>For a black drink, select the user profile, choose espresso, double espresso, long, coffee, Americano or another available recipe, adjust permitted parameters and start. The machine handles the internal puck and rinses its coffee path. For milk, attach the carafe requested by the recipe and follow the display prompts.</p>
      <p>Four profiles are useful only if each person saves a genuinely stable preference. Do not create ten slight variations during the first week. Establish one hot black drink, one hot milk drink and one cold drink, then label favorites clearly. A crowded profile can make a 50-recipe machine slower to use than a seven-button Magnifica.</p>
      <p>The hot and cool carafes are separate because the foam jobs differ. That is better than asking one system to compromise and more cumbersome than owning one simple milk attachment. The machine can tell you which path a recipe needs; it cannot refrigerate, refill or wash the carafe.</p>
      <h3>Travel-mug drinks need the right vessel and expectation</h3>
      <p>The US page says the included travel mug works with 15 recipes up to 16 ounces. Leave room for ice or milk, and remember that recipe strength and dilution still matter.</p>
      <p>For several people, queue similar drinks when practical. Complete hot-milk orders while the hot carafe is attached, then clean and switch to cool. This reduces part changes but means early drinks wait. If serving immediately matters more, finish each person's order and accept the extra handling.</p>
      <p>Reviewers agree on broad, guided operation and flag price and size. They disagree on temperature, cold-drink intensity and whether the menu delights or overwhelms, so judge the machine by your usual drink. ${sourceLinks(['eletta-techradar', 'eletta-home', 'eletta-idealhome'])}</p>
    `,
  },
  {
    id: 'espresso', eyebrow: 'The black-coffee baseline', title: 'A $2,000 feature set does not remove the superautomatic extraction ceiling',
    html: `
      <p>The internal brew unit prioritizes repeatability and convenience. It cannot offer the puck preparation, unrestricted grinder adjustment and dose flexibility of a serious separate grinder and semi-automatic machine. The 19-bar pump specification describes installed pump capacity, not the pressure recipe in the coffee puck and not guaranteed cup quality.</p>
      <p>Start with a short espresso in a clean profile, middle strength and default grind. If it tastes thin, shorten volume or increase strength before forcing the grinder several steps finer. If it is harsh, reduce strength, move one step coarser or use a slightly longer ratio depending on the flavor. Change one variable and repeat.</p>
      <p>LB Tech Reviews describes the pure espresso positively while noting the lower intensity typical of automatic machines compared with manual extraction. TechRadar and Tom's Coffee Corner also found capable results within the category. Those are tester experiences, not proof that every bean and setting will satisfy an espresso specialist. ${sourceLinks(['eletta-lbtech', 'eletta-techradar', 'eletta-tom'])}</p>
      <p>Bean Adapt guidance is useful as a structured starting tool. It cannot measure roast development from a marketing label or guarantee flavor. Save a recipe after several consistent drinks, not after one lucky extraction. If a new bag differs greatly, create or adjust a profile deliberately rather than overwriting the household favorite immediately.</p>
      <p>The machine is most persuasive when espresso is one component of a varied menu. If straight espresso is 90 percent of use, a far cheaper manual setup can offer more control. Eletta's premium is not secretly hidden in the black shot; it is visible in the milk, cold, profile and travel-mug systems.</p>
    `,
  },
  {
    id: 'milk', eyebrow: 'Two automatic milk paths', title: 'Hot and cold foam are genuinely different capabilities with doubled hygiene duties',
    html: `
      <p>LatteCrema Hot handles cappuccino, latte, flat-white-style and other heated milk recipes. LatteCrema Cool delivers cold foam for iced drinks. Each carafe has its intended connection and cleaning sequence. The machine coordinates volume and layering, removing jug technique from the household routine.</p>
      <p>The hot carafe's adjustment affects foam quantity and structure within the automatic system. It does not provide the same direct texture control as a steam wand. Independent testers report attractive, convenient foam while differing on temperature and the liquid-versus-foam balance. Cup preheating, milk starting temperature and recipe volume can explain part of that disagreement. ${sourceLinks(['eletta-lbtech', 'eletta-owner-reddit'])}</p>
      <p>Cold foam is the rarer feature. Begin with refrigerator-cold milk, the cool carafe and a recommended recipe. Add ice in the sequence shown by the display. Cold dairy and plant drinks differ substantially in foam stability; no machine can make every formulation behave alike. De'Longhi itself cautions on other current cool-carafe material that frothing varies by ingredients and brand, which is the responsible expectation here.</p>
      <p>After service, turn the attached carafe to CLEAN or follow the displayed cycle with a vessel underneath. Return remaining milk to refrigeration promptly, then periodically disassemble and dishwasher-clean approved components. Automatic flushing moves water through the path; it does not inspect small milk pieces or replace manual washing.</p>
      <p>A household using only hot cappuccinos does not need to pay for the cool carafe. A household split between hot lattes and iced cold-foam drinks can use both every week, which is the value case. Count recipes actually ordered, not recipes theoretically available.</p>
    `,
  },
  {
    id: 'features', eyebrow: 'Cold extraction, precisely described', title: 'Under-three-minute “cold brew” is not overnight immersion in fast-forward',
    html: `
      <p>De'Longhi says its Cold Extraction Technology controls water flow, pressure and extraction temperature to prepare a cold brew in under three minutes. The US EX:4 menu includes cold brew, cold brew pot, cold brew to mix and multiple cold coffee and milk combinations. That is a genuine low-temperature machine process rather than ordinary hot coffee poured over ice. ${sourceLinks(['eletta-product', 'eletta-manual'])}</p>
      <p>It is still not chemically identical to immersion coffee steeped for 12 to 24 hours. Contact time, grind, pressure and filtration differ. Expect a quick, lighter automatic interpretation designed for immediate recipes. Whether it tastes “better” than overnight concentrate is preference, not a specification.</p>
      <p>The 50-plus recipe claim includes variations and hot/cold combinations, not 50 completely separate brewing mechanisms. The menu remains valuable because it coordinates sequence and quantities. Buyers should not use the count as a proxy for espresso quality or assume every recipe appears identically in the app and on every earlier regional machine.</p>
    `,
  },
  {
    id: 'build', eyebrow: 'Complex appliance reality', title: 'Owner access is good for a machine with many milk and water paths',
    html: `
      <p>The Eletta is a substantial mixed-material appliance with a grinder, removable brew group, thermoblock water system, touch display, adjustable outlets and two detachable carafes. Metal-look trim does not make it a commercial chassis, and the feature density creates more seals, valves and connectors than a simple manual machine.</p>
      <p>The removable brew group is important. With the machine correctly shut down and in the manual-specified state, it can be removed and rinsed under cool water. This gives the owner meaningful hygiene access without opening the electrical enclosure. Let it dry as directed and never force removal.</p>
      <p>The official specification lists 1450 watts at 120 volts for the US unit, 26.89 pounds and a maximum cup height of 6.24 inches. The two carafes, travel mug and deep body create a larger ownership footprint than the 10.25-inch width suggests. ${sourceLinks(['eletta-product'])}</p>
      <p>Owner discussions include machines working consistently for more than a year, milk-temperature frustration, app problems and milk-path repair questions. This variety is useful for a return-period checklist. It is not service-rate data. No source in this packet supports a numerical reliability or lifespan claim. ${sourceLinks(['eletta-owner-reddit', 'eletta-owner-whirlpool'])}</p>
      <p>At this price, inspect every function during the return window: hot coffee, hot milk, cool milk, cold extraction, profile saving, bypass dose, app connection, travel mug, carafe clean cycle and brew-group access. A broad feature set is valuable only when the exact purchased unit performs it.</p>
    `,
  },
  {
    id: 'owners', eyebrow: 'The disagreement is the insight', title: 'Owners love the breadth and argue most about heat, apps and how many drinks they really use',
    html: `
      <p>The largest community thread includes several satisfied owners reporting months or more than a year of frequent use, straightforward brew-group rinsing and good drink consistency. In the same pool, another owner reports milk drinks around 110°F and dissatisfaction, while others describe hotter results. That conflict means cup, settings, milk quantity and unit condition need investigation; it does not allow Coffeedant to publish one universal latte temperature. ${sourceLinks(['eletta-owner-reddit'])}</p>
      <p>Walmart and other retailer pools praise easy hot and cold recipes and contain ordinary complaints about setup, support or expectations. Whirlpool's regional discussion adds long-form owner context but uses Australian variants. Treat each as a source of questions, then return to the exact US EX:4 material for facts. ${sourceLinks(['eletta-owner-walmart', 'eletta-owner-whirlpool'])}</p>
      <p>The useful owner consensus is that dialing in still matters. The machine can make a weak default coffee and a much stronger personalized one. Users who spend an afternoon learning it are reviewing a different experience from someone who judges the first factory drink.</p>
    `,
  },
  {
    id: 'ownership', eyebrow: 'Care across four drink systems', title: 'The display guides maintenance, but it cannot do the handling for you',
    html: `
      <p>Daily work includes emptying rinse water and pucks, refreshing the tank, wiping outlets and completing the CLEAN cycle on whichever milk carafe was used. If both hot and cool milk were served, both paths need attention. Store milk safely and do not leave attached carafes on the counter for convenience.</p>
      <p>On the documented schedule, disassemble approved carafe pieces, clean the tray and grounds bin, rinse the brew group and remove loose interior coffee. Use water and cleaning products only where the manual allows. Descaling treats mineral buildup in the water circuit; it does not clean coffee oils from the grinder or milk protein from a carafe.</p>
      <p>Program water hardness accurately and keep descaler available. Regional owner timings are only planning context; the supplied US instructions define the exact cycle. ${sourceLinks(['eletta-manual', 'eletta-owner-reddit'])}</p>
      <p>The current direct price is $1,999.95. Add filters, descaler and the opportunity cost of two-carafe cleaning, but no separate grinder or milk device. The included travel mug is part of the current EX:4 proposition. Confirm retailer bundles and do not assume an older ECAM450 listing includes the same package.</p>
      <p>Register the machine, retain proof of purchase and confirm current warranty terms. At a $2,000 purchase, authorized seller status, local service access and exact EX:4 parts or accessory compatibility are not small print. Stop using the machine and contact qualified support for electrical faults, persistent leaks, abnormal heat or a milk system that remains blocked after documented cleaning. ${sourceLinks(['eletta-warranty', 'eletta-support', 'eletta-parts', 'eletta-accessories'])}</p>
    `,
  },
  {
    id: 'compare', eyebrow: 'Pay for used capability', title: 'Eletta Explore beats cheaper machines on breadth, not on every cup',
    html: comparisonTablesHtml("De'Longhi Eletta Explore ECAM45086S EX:4", [
      { name: "De'Longhi Eletta Explore", quickDecision: 'Choose when hot milk, cold foam, fast cold extraction, profiles and travel-mug drinks will all be used.', priceClass: '$1,999.95 official US price', dimensions: '17.50 D × 10.25 W × 15.13 H in', heating: 'Automatic 1450 W hot and low-temperature drink system', coffeeSetup: '13-setting grinder, removable brew group, app-assisted Bean Adapt', milkWorkflow: 'Separate LatteCrema Hot and Cool carafes', bestFor: 'Multi-user hot-and-cold household' },
      { name: "De'Longhi Magnifica Evo", href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Spend far less when classic hot drinks and simple LatteCrema are enough.', priceClass: '$899.95 official US price', dimensions: '17.32 D × 9.45 W × 14.17 H in', heating: 'Automatic thermoblock', coffeeSetup: '13-setting grinder, removable brew group, no app/profiles', milkWorkflow: 'One hot LatteCrema carafe', bestFor: 'Simple cappuccino and coffee' },
      { name: 'Philips 5400 LatteGo', href: '/espresso-machine/philips-5400-lattego/', quickDecision: 'Choose for profiles and simpler hot-milk cleanup when cold foam and rapid cold extraction are unnecessary.', priceClass: 'Lower to similar depending on stock', dimensions: 'Approx. 9.7 W × 14.6 D × 17 H in', heating: 'Automatic thermoblock', coffeeSetup: 'Ceramic grinder and removable brew group', milkWorkflow: 'Two-piece hot LatteGo system', bestFor: 'Several hot-drink users' },
      { name: 'Jura E8', href: '/espresso-machine/jura-e8/', quickDecision: 'Choose for a more polished hot-drink focus and guided closed brew system, not Eletta cold breadth.', priceClass: 'Premium automatic tier', dimensions: 'Approx. 11 W × 13.8 H × 17.6 D in', heating: 'Thermoblock automatic system', coffeeSetup: 'Integrated grinder; non-removable brew group', milkWorkflow: 'Hose-fed automatic milk with guided cleaning', bestFor: 'Premium hot coffee and milk routine' },
    ], 'The current Eletta facts are for US ECAM45086S EX:4. Other ECAM450 suffixes, regions and firmware may differ in recipes, connectivity, accessories and electrical specifications.'),
  },
  {
    id: 'related', eyebrow: 'Spend one level lower first', title: 'Check whether a simpler machine already covers the household menu',
    html: recommendationCardsHtml([
      { kicker: 'Best value check', title: 'Magnifica Evo review', text: 'See whether seven direct recipes and one hot milk carafe are already enough.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the review', featured: true },
      { kicker: 'Simpler milk parts', title: 'Philips 5400 LatteGo review', text: 'Compare four-profile hot-drink ownership with Eletta’s two-carafe breadth.', href: '/espresso-machine/philips-5400-lattego/', linkLabel: 'Read the review' },
      { kicker: 'Premium hot focus', title: 'Jura E8 review', text: 'Compare De\'Longhi access and cold drinks with Jura’s guided sealed system.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read the review' },
      { kicker: 'Whole category', title: 'Best superautomatic machines', text: 'Choose cleaning philosophy, profiles and milk system before chasing recipe counts.', href: '/espresso-machine/superautomatic/', linkLabel: 'Open the guide' },
    ]),
  },
  {
    id: 'faq', eyebrow: 'Exact EX:4 answers', title: 'Eletta Explore ECAM45086S EX:4 FAQ',
    html: faqHtml([
      { question: 'Which Eletta Explore does this review cover?', answer: 'The current US ECAM45086S EX:4 product page checked September 15, 2026. Older ECAM450.86.T, ECAM450.65 and other regional variants can differ.' },
      { question: 'Does it make real cold brew?', answer: 'It uses a genuinely low-temperature, pressure-and-flow-controlled process in under three minutes. It is not the same extraction as overnight immersion cold brew.' },
      { question: 'How many profiles does it have?', answer: 'The current US EX:4 specification lists four profiles, with additional recipe personalization through the Coffee Link app.' },
      { question: 'Does it include both milk carafes?', answer: 'The current US EX:4 proposition is built around LatteCrema Hot and Cool. Confirm both physical carafes and the travel mug in any retailer bundle before accepting delivery.' },
      { question: 'Can it use preground decaf?', answer: 'Yes, through the approved one-dose bypass workflow. It does not have a second bean hopper.' },
      { question: 'Who should not buy it?', answer: 'Skip it if you mainly drink one black coffee, want manual espresso control, or will resent cleaning and storing two milk systems.' },
    ]),
  },
];

export const delonghiElettaExploreReview = review({
  slug: '/espresso-machine/delonghi-eletta-explore-ecam450/', productId: 'CD-EM-000039', brand: "De'Longhi", model: 'Eletta Explore', sku: 'ECAM45086S EX:4',
  category: 'Connected fully automatic hot-and-cold espresso machine', brandPath: BRAND_PATH,
  title: "De'Longhi Eletta Explore review: is the US EX:4 worth $2,000?",
  description: "A research-led De'Longhi Eletta Explore ECAM45086S EX:4 review covering 50-plus hot and cold recipes, two milk carafes, cold brew, profiles, cleaning and exact-US-model caveats.",
  verdictLabel: 'For a true hot-and-cold menu',
  verdict: 'Eletta Explore earns its premium only when the household repeatedly uses both milk carafes, cold extraction, profiles and travel-mug recipes. It is unusually broad and genuinely convenient, but a Magnifica Evo covers classic hot drinks for far less. Buy the menu you will use, not the number 50.',
  assessment: 'The most versatile De’Longhi here, with a correspondingly larger ownership routine.',
  image: 'images/products/delonghi-eletta-explore.png', imageAlt: "De'Longhi Eletta Explore fully automatic espresso machine",
  published: '2025-11-27', updated: UPDATED,
  authorNote: 'This machine has accumulated several regional versions and generations, so I anchored the decision to the current US ECAM45086S EX:4 page. I used older family reviews only where the behavior still applies and labeled uncertainty. This is research-led; I have not physically tested it.',
  basisDisclosure,
  price: { label: "De'Longhi US price", msrp: '$1,999.95', numeric: '1999.95', currency: 'USD', typical: 'Current EX:4 direct price; retailer sales vary', checked: 'September 15, 2026' },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4qebn7y', note: 'Affiliate link · verify EX:4', affiliate: true, primary: true },
    { label: "Check De'Longhi price", href: 'https://www.delonghi.com/en-us/p/eletta-explore-eletta-explore-espresso-machine/ECAM45086S%2BEX%3A4.html?pid=0132250196', note: 'Official US store' },
  ],
  facts: [
    { label: 'Machine type', value: 'Fully automatic hot and cold' }, { label: 'Recipes', value: '50+ current US claim' },
    { label: 'Grinder', value: 'Built-in, 13 settings' }, { label: 'Milk', value: 'LatteCrema Hot + Cool' },
    { label: 'Profiles / display', value: '4 / 3.5-in color touch' }, { label: 'Exact US model', value: 'ECAM45086S EX:4' },
  ],
  quickAnswers: [
    { question: 'Exact scope?', answer: 'Current 120 V US ECAM45086S EX:4, not every ECAM450.xx review or European suffix.' },
    { question: 'Cold brew?', answer: 'Yes, a low-temperature machine process claimed at under three minutes. It is not overnight immersion.' },
    { question: 'Hot and cold foam?', answer: 'Yes, through two separate LatteCrema carafes that each require cleaning and storage.' },
    { question: 'Profiles and app?', answer: 'Four profiles plus Coffee Link customization on the current US EX:4 page.' },
    { question: 'Travel mug?', answer: 'Included on the current US offer, with 15 compatible recipes up to 16 ounces.' },
    { question: 'Best reason to buy?', answer: 'Several users genuinely rotate among espresso, hot milk, cold foam and cold-extracted drinks.' },
  ],
  bestFor: ['A multi-user home split between hot and iced café drinks', 'A buyer who will use profiles, connected recipes and travel-mug programs', 'Someone who wants cold foam and rapid low-temperature extraction without manual preparation'],
  avoidIf: ['Most drinks are espresso or ordinary hot coffee', 'You want manual control over puck preparation and milk texture', 'Two milk carafes and a large guided cleaning routine feel excessive'],
  pros: ['Genuinely broad hot, cold, milk and travel-mug menu', 'Separate automatic hot and cold foam systems', 'Four profiles, touch display, app and Bean Adapt guidance', 'Removable brew group and current exact-model US support'],
  cons: ['$1,999.95 direct price is difficult to justify for simple use', 'Two carafes double milk-part handling and storage', 'App and firmware add another troubleshooting layer', 'Regional ECAM450 reviews can misstate the EX:4 package'],
  dimensions: [
    dimension('espresso', 8.0, 'Strong superautomatic tuning and credible independent results, though the internal brew group still limits dose and puck control.', 'A good black-coffee base for a broad menu; not the best use of $2,000 for espresso alone.', 'Exact US design plus five independent tests', ['eletta-product', 'eletta-techradar', 'eletta-tom', 'eletta-lbtech', 'eletta-home'], 'espresso', 'Build the short black recipe first', ['Use a clean profile, short espresso, middle strength and default grind.', 'Adjust beverage volume before making large grinder moves.'], [{ signal: '13 grind settings', evidence: 'Documented integrated adjustment range.', decision: 'Useful for common beans, not stepless precision.' }, { signal: 'Bean Adapt guidance', evidence: 'App-assisted optimization based on entered beans.', decision: 'Structured starting help, not sensory measurement.' }, { signal: 'Multiple black recipes', evidence: 'Espresso, double, Doppio+, long, coffee and Americano routes.', decision: 'Choose recipe logic instead of stretching one puck.' }], [{ signal: 'Thin cup', guidance: 'Shorten volume or raise strength, then move one grinder step finer if needed.' }, { signal: 'Flow stops after grind change', guidance: 'Move one step coarser while grinding and allow several cycles.' }, { signal: 'New bag differs', guidance: 'Create or adjust deliberately instead of overwriting the established profile immediately.' }], 'The rating is within the automatic category and does not equate its puck control with a manual machine.'),
    dimension('milk', 9.0, 'Separate hot and cool carafes deliver unusually broad automatic milk capability, with substantial hygiene responsibility.', 'Excellent for mixed hot-and-iced households; unnecessary expense for black-coffee drinkers.', 'Exact EX:4 claims plus independent and owner context', ['eletta-product', 'eletta-manual', 'eletta-lbtech', 'eletta-owner-reddit'], 'milk', 'Two milk systems need two clean routines', ['Use the carafe named by the recipe and keep milk consistently cold.', 'Run CLEAN after use, refrigerate promptly and disassemble approved parts on schedule.'], [{ signal: 'LatteCrema Hot', evidence: 'Automatic heated milk and adjustable foam recipes.', decision: 'Repeatable classic milk drinks without wand skill.' }, { signal: 'LatteCrema Cool', evidence: 'Dedicated cold-foam system.', decision: 'Rare capability for iced-drink households.' }, { signal: 'Two detachable carafes', evidence: 'Separate temperature-specific paths.', decision: 'More storage and parts washing.' }], [{ signal: 'Milk drink is cooler than preferred', guidance: 'Preheat the cup, verify high temperature and recipe volume, then use support if abnormal.' }, { signal: 'Foam varies by carton', guidance: 'Hold milk formulation and starting temperature constant.' }, { signal: 'Sputtering continues after CLEAN', guidance: 'Disassemble and wash approved parts, then contact support rather than probing internal paths.' }], 'Owner temperature reports conflict, so no universal cup temperature is claimed.'),
    dimension('workflow', 8.8, 'The touch display, profiles, one-touch sequencing and travel-mug programs coordinate a complex menu well.', 'Low effort per drink after setup, with more switching and care than a simpler automatic.', 'Manufacturer workflow plus convergent household tests', ['eletta-product', 'eletta-quick', 'eletta-techradar', 'eletta-idealhome'], 'workflow', 'Organize favorites before the menu organizes you', ['Save a few proven recipes in each profile rather than every small experiment.', 'Group hot or cold milk orders when serving several people to reduce carafe switching.'], [{ signal: '3.5-inch touch display', evidence: 'Guides and filters recipes.', decision: 'Makes a large menu approachable.' }, { signal: 'Four profiles', evidence: 'Separates household preferences.', decision: 'Real advantage over direct-button models.' }, { signal: '15 travel-mug recipes', evidence: 'Current US claim up to 16 ounces.', decision: 'Useful for commuters who use the included vessel.' }], [{ signal: 'Favorites feel crowded', guidance: 'Delete experiments and keep a short daily list.' }, { signal: 'Morning switching is slow', guidance: 'Group drinks by hot or cool carafe when timing permits.' }], 'One touch begins a drink; it does not refill, refrigerate milk, empty waste or wash parts.'),
    dimension('build', 8.0, 'Good owner access and substantial capacity support the feature set, while complexity and depth deserve respect.', 'A capable domestic appliance with many paths, not a simple mechanical platform.', 'Exact specifications, support and owner pools', ['eletta-product', 'eletta-support', 'eletta-owner-reddit', 'eletta-owner-whirlpool'], 'build', 'The narrow front hides a deep, accessory-heavy setup', ['Measure 17.5 inches of body depth plus service access.', 'Inspect every hot, cool, cold and connected feature during the return window.'], [{ signal: 'Removable brew group', evidence: 'Owner-rinsable coffee assembly.', decision: 'Meaningful hygiene and inspection access.' }, { signal: '60.87 fl oz tank / 14 pucks', evidence: 'Useful domestic capacities.', decision: 'Supports several users between refills.' }, { signal: 'Two carafes and travel mug', evidence: 'Accessories extend beyond the machine body.', decision: 'Plan cabinet and refrigerator space.' }], [{ signal: 'Brew group will not release', guidance: 'Return machine to the documented power state; never force it.' }, { signal: 'New unit misses an accessory', guidance: 'Compare the EX:4 package immediately within the return window.' }], 'Public evidence does not support a numeric lifespan or failure rate.'),
    dimension('features', 9.2, 'Cold extraction, hot and cool foam, profiles, app, Bean Adapt and travel-mug programs create exceptional breadth.', 'Worthwhile only when breadth is repeatedly used.', 'Current exact US EX:4 product claims', ['eletta-product', 'eletta-manual', 'eletta-support'], 'features', 'Fifty recipes are combinations, not fifty reasons to buy', ['List the five drinks your household orders before comparing machine menus.', 'Treat connected additions as useful extras around a fully usable physical panel.'], [{ signal: 'Cold brew under three minutes', evidence: 'Low-temperature flow-and-pressure process claimed by De\'Longhi.', decision: 'Distinct from hot over-ice coffee and overnight immersion.' }, { signal: '50+ recipes', evidence: 'Hot, cold, milk and mixed variants.', decision: 'Broad selection, not 50 brewing engines.' }, { signal: 'Coffee Link and four profiles', evidence: 'Current US personalization features.', decision: 'Strong multi-user fit with software dependency.' }], [{ signal: 'Older review shows fewer recipes', guidance: 'Check region, firmware and exact ECAM suffix.' }, { signal: 'App and panel labels differ', guidance: 'Update supported software and use the current manual; keep panel favorites as the baseline.' }], 'Features are tied to the September 2026 US ECAM45086S EX:4 listing.'),
    dimension('value', 7.3, 'Exceptional capability faces a steep $1,999.95 price and cheaper machines that cover ordinary hot drinks.', 'High value for broad daily use; poor value for a narrow menu.', 'Current price plus independent comparison context', ['eletta-product', 'eletta-retailer', 'eletta-home', 'eletta-idealhome'], 'ownership', 'Value is proportional to used subsystems', ['Count actual weekly use of hot milk, cool milk, cold extraction, profiles and travel mug.', 'Include carafe cleaning, filters and descaler in ownership rather than treating automation as labor-free.'], [{ signal: '$1,999.95 direct', evidence: 'Current US EX:4 price on September 15, 2026.', decision: 'Demands more than occasional cold drinks.' }, { signal: 'Magnifica at $899.95', evidence: 'Covers classic hot drinks for less than half.', decision: 'Eletta premium needs cold and personalization use.' }, { signal: 'Two milk systems and app', evidence: 'Rare breadth within one appliance.', decision: 'Can replace several café routines for the right household.' }], [{ signal: 'Most favorites are hot cappuccinos', guidance: 'Choose Magnifica or another simpler hot-milk automatic.' }, { signal: 'Retail listing omits EX:4', guidance: 'Confirm model plate, cold program, carafes, travel mug and warranty before comparing price.' }], 'Price and in-stock status were checked September 15, 2026 and can change.'),
  ],
  alternatives: [
    { name: "De'Longhi Magnifica Evo", reason: 'Classic hot drinks and automatic milk for much less.', href: '/espresso-machine/delonghi-magnifica-evo/' },
    { name: 'Philips 5400 LatteGo', reason: 'Profiles and easier hot-milk parts without cold breadth.', href: '/espresso-machine/philips-5400-lattego/' },
    { name: 'Jura E8', reason: 'A premium hot-drink system with a different cleaning philosophy.', href: '/espresso-machine/jura-e8/' },
  ],
  article: {
    methodology: `<p>I anchored this review to the current US ECAM45086S EX:4 sale page and ECAM45086S support documents, then used five independent hands-on reviews, a detailed video demonstration and three owner/community pools. Every regional family source is labeled, and price and availability were checked September 15, 2026.</p><p>This is research-led, not a Coffeedant hands-on test. I did not reproduce temperature, taste, noise or long-term durability measurements. Conflicting owner milk-temperature reports remain a disclosed disagreement, and no reliability rate is inferred.</p>`,
    sections: elettaSections, sources: elettaSources,
    finalTitle: 'Eletta Explore is worth it only when the whole household uses the whole machine',
    finalVerdict: [
      'The US EX:4 combines hot coffee, hot foam, cold foam, fast cold extraction, profiles and travel-mug service more convincingly than most home automatics. Its display and removable brew group keep a complex system manageable.',
      'The brutal value test is simple: if your favorites list would contain espresso, coffee and cappuccino, buy a Magnifica-class machine and keep the difference. If four users genuinely rotate across hot and cold recipes, the Eletta premium buys capability that cheaper machines do not reproduce.',
    ],
  },
  video: { id: 'pZF0VneC56I', title: 'Delonghi Eletta Explore Superautomatic Coffee Machine Review (Cold Brew and more)', creator: "Tom's Coffee Corner", published: '2024-04-26', note: 'A detailed independent visual review of drink customization and cleaning. Check the exact model shown because older ECAM450 regional variants can differ from the current US EX:4.' },
});

export const delonghiReviews: MachineReviewData[] = [
  delonghiDedicaReview,
  delonghiLaSpecialistaArteReview,
  delonghiMagnificaEvoReview,
  delonghiElettaExploreReview,
];
