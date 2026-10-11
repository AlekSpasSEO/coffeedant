import { modernReviews } from './review-registry';
import { bambinoReview, type MachineReviewData } from './reviews';

type GuideConfig = {
  path: string;
  title: string;
  description: string;
  breadcrumb: string;
  h1: string;
  deck: string;
  decisionTitle: string;
  compareTitle: string;
  criteria: string;
  decision: string;
  ownership: string;
  verdict: string;
  slugs: string[];
};

const allReviews = [...modernReviews, bambinoReview];
const reviewBySlug = new Map(allReviews.map((review) => [review.slug, review]));
const esc = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (review: MachineReviewData) => `<a href="${review.slug}">${esc(review.brand)} ${esc(review.model)}</a>`;
const section = (review: MachineReviewData, id: string) => review.article.sections.find((item) => item.id === id)?.html ?? '';

const configs: GuideConfig[] = [
  {
    path: '/espresso-machine/single-boiler/',
    title: 'Best Single-Boiler Espresso Machines: Control the Wait, Not Just the Temperature',
    description: 'Research-led comparison of four current single-boiler espresso machines, including temperature control, steam transitions, grinder cost, maintenance and exact-model limits.',
    breadcrumb: 'Single-boiler machines',
    h1: 'Best single-boiler espresso machines',
    deck: 'A single boiler can make focused espresso and capable milk drinks, but every model asks the same question: are you willing to manage the transition between brewing and steaming?',
    decisionTitle: 'Choose the control system and milk pace before choosing the finish',
    compareTitle: 'Four single boilers with four different control packages',
    decision: `<p>A single-boiler machine uses one heated vessel for brew water and steam. That architecture is compact and understandable, but it cannot hold brew and steam conditions at the same time. The buying decision is therefore not whether the machine can texture milk. It is how often the owner will change modes, how clearly the machine communicates the change, and whether the pause still fits the household routine.</p><p>Choose a factory PID when repeatable setpoint adjustment matters. Choose a thermostat machine when a lower entry price, familiar service path or manual temperature routine is acceptable. A pressure gauge helps diagnose pump resistance but does not measure extraction quality. A shot timer helps repeat a recipe but does not correct grind size or puck preparation. Treat each control as one part of a measured workflow.</p><p>For straight espresso, all four shortlisted machines can support a disciplined recipe when paired with an espresso-capable grinder. For milk, count drinks rather than reading boiler wattage as a ranking. One cappuccino is a different task from four flat whites. If several milk drinks are normal, a heat-exchanger or dual-boiler design may be a better use of the complete budget.</p>`,
    criteria: `<p><strong>Inclusion criteria:</strong> each machine had to be a current, clearly identified single-boiler model with a permanent Coffeedant review, official documentation, independent context, a manual steam path and enough owner evidence to explain recurring questions without inventing reliability rates. The shortlist also had to represent meaningfully different decisions.</p><p><strong>Exclusion criteria:</strong> dual boilers, heat exchangers, thermoblock-only appliances, discontinued models with unclear support and machines whose exact regional identity could not be verified were left out. A machine was not promoted because it was heavy, polished or described as commercial. Those traits do not establish temperature stability, cup quality or service access.</p>`,
    ownership: `<p>Single-boiler ownership rewards a written routine. Warm the group and portafilter, keep the dose and yield visible, purge condensation before milk, wipe and purge the wand immediately, then refill or cool the boiler as the manual directs. Skipping the return-to-brew step can create confusing temperature behavior and, on some designs, unnecessary stress.</p><p>Ongoing costs include the grinder, suitable water, cleaning products, seals, baskets, occasional service and the time spent changing modes. Follow the exact manufacturer water guidance rather than assuming distilled, softened or bottled water is automatically safe. Confirm local warranty and paid service before purchase; a conventional layout can be repairable without guaranteeing local parts or affordable labor.</p>`,
    verdict: `<p>Choose Profitec GO when a factory PID, shot timer and pressure feedback matter more than simultaneous milk service. Choose Gaggia Classic Pro E24 when a lower-cost 58 mm platform and upgrade ecosystem matter more than factory temperature control. Choose Rancilio Silvia when traditional construction and stronger manual steam justify a thermostat workflow. Choose ECM Classika when premium espresso-first build and PID control matter enough to accept its higher price.</p><p>If the household regularly prepares several milk drinks, the right conclusion may be to leave the category. No accessory turns one boiler into two independent heat systems.</p>`,
    slugs: ['/espresso-machine/profitec-go/','/espresso-machine/gaggia-classic-evo/','/espresso-machine/rancilio-silvia/','/espresso-machine/ecm-classika-pid-flow-control/'],
  },
  {
    path: '/espresso-machine/small/',
    title: 'Best Small Espresso Machines: Measure the Complete Station',
    description: 'Research-led guide to compact espresso machines, comparing footprint, tank access, heat system, grinder space, milk workflow and ownership.',
    breadcrumb: 'Small espresso machines',
    h1: 'Best small espresso machines',
    deck: 'Compact should describe the complete working station, not only the width printed on a product page. Grinder, tank access, steam clearance and wet-tool storage determine whether a machine truly fits.',
    decisionTitle: 'Measure the work area before comparing compact machines',
    compareTitle: 'Four compact approaches, from assisted milk to factory PID control',
    decision: `<p>Start with a paper rectangle the size of the machine and add the grinder, scale, knock box, milk pitcher and a safe place for a hot portafilter. Then mark the direction in which the tank, hopper or cup tray must move. A narrow machine that needs open space above it can be harder to place than a wider machine with front access.</p><p>Compact machines also concentrate trade-offs. A smaller boiler or rapid heater can shorten warm-up and reduce the footprint, while limiting simultaneous work or repeated milk service. A traditional metal chassis can feel stable while requiring more warm-up and top clearance. An automatic milk system can reduce technique while adding purge water and tray-emptying work. Compare the complete morning sequence, not the exterior volume alone.</p><p>The grinder remains part of the station. Three of these picks require a separate espresso grinder, and that grinder may be wider than the brewer. Preserve working room for adjustment and bean loading. Buying a small machine and then pairing it with an unsuitable grinder is not a space-saving decision.</p>`,
    criteria: `<p><strong>Inclusion criteria:</strong> the machine needed a genuinely compact domestic footprint, a current exact-model record, a permanent Coffeedant review and a workflow that answers a distinct small-kitchen need. Tank access, portafilter clearance, milk method and the grinder requirement all counted.</p><p><strong>Exclusion criteria:</strong> a machine was not included because one marketing dimension was small while required access made the station impractical. Large integrated-grinder systems, unclear regional variants and machines selected only for appearance were excluded. Dimensions are manufacturer records, not Coffeedant measurements, so verify a tight shelf against the exact delivered unit.</p>`,
    ownership: `<p>Small machines need disciplined counter management. Leave room to remove the tank, lock the portafilter without hitting a wall, vent steam safely and remove the drip tray without lifting the machine. Give wet accessories a washable landing place. If the machine must be pulled forward for every refill, include that movement in the daily routine.</p><p>Compact does not mean maintenance-free. Milk residue, coffee oils and scale occupy the same pathways as on larger equipment. Follow the exact manual, use suitable water and confirm local service. The total ownership cost includes a grinder where required, a scale, care products and any model-specific tools.</p>`,
    verdict: `<p>Choose Bambino Plus when the smallest easy milk workflow matters. Choose Profitec GO when compact width must coexist with PID control and a 58 mm group. Choose Lelit Anna when factory temperature control and a lower purchase price justify the 57 mm ecosystem. Choose Ascaso Steel Uno when fast thermoblock behavior and a slim modern chassis fit the routine.</p><p>The best compact machine is the one that remains convenient after the grinder, refill path and cleaning tools are on the counter. Measure that station before ordering.</p>`,
    slugs: ['/espresso-machine/breville-bambino/','/espresso-machine/profitec-go/','/espresso-machine/lelit-anna/','/espresso-machine/ascaso-steel-uno/'],
  },
  {
    path: '/espresso-machine/superautomatic/',
    title: 'Best Superautomatic Espresso Machines: Choose the Cleaning System You Will Maintain',
    description: 'Research-led guide to current superautomatic espresso machines, comparing drink automation, milk systems, removable brew groups, grinder limits, maintenance and exact regional models.',
    breadcrumb: 'Superautomatic machines',
    h1: 'Best superautomatic espresso machines',
    deck: 'A superautomatic removes visible coffee preparation, but it creates an internal cleaning system. Choose the drink and care routine the household will actually repeat.',
    decisionTitle: 'Choose which tasks should disappear and which cleaning path can remain',
    compareTitle: 'Four one-touch systems with different milk, access and service boundaries',
    decision: `<p>A superautomatic grinds, doses, compresses, brews and ejects coffee inside the machine. That is a category change, not a more advanced version of a portafilter workflow. The gain is speed and repeatability across users. The limits are less direct control over puck preparation, an integrated grinder that ages with the machine and internal pathways that require prompted care.</p><p>Begin with the drink menu the household uses, not the longest list on the box. Espresso, long coffee and milk drinks place different demands on the brew unit and milk system. A carafe can simplify a latte while adding refrigerated storage and daily cleaning. A hose can be flexible while asking for rinsing and container management. Premium menus are useful only when the core coffee and care routine already fit.</p><p>Then decide whether owner access to the brew group matters. Some systems provide a removable infuser for rinsing and inspection; others keep the brew unit inside and route care through automated programs and authorized service. Neither philosophy is automatically superior. The right choice depends on the owner’s willingness to handle parts, local service access and the written warranty.</p>`,
    criteria: `<p><strong>Inclusion criteria:</strong> each recommendation needed a current exact regional identity, integrated grinder and brew unit, a permanent Coffeedant review, official care documentation and enough independent and owner context to explain the workflow without inventing reliability rates. The four picks cover distinct value, milk, menu and service decisions.</p><p><strong>Exclusion criteria:</strong> capsule systems, semi-automatics with built-in grinders and machines with unclear current support were excluded. Large drink counts did not earn inclusion by themselves. We also avoided transferring specifications between regional siblings that share a family name but use different panels, recipes, voltages or milk packages.</p>`,
    ownership: `<p>Convenience survives only when cleaning becomes automatic behavior. Empty the tray and grounds container before overflow, rinse the milk path after use, clean removable parts only as the manual permits, replace filters where required and run descale or cleaning programs when prompted. Postponing care because the machine still brews shifts the work into narrower internal passages.</p><p>Ongoing costs include filters, tablets, milk cleaner, descaler, suitable water, coffee and authorized service. An integrated grinder reduces the number of boxes on the counter but removes an independent upgrade path. Confirm current regional warranty, service collection, consumable availability and whether the exact brew group is owner-removable before purchase.</p>`,
    verdict: `<p>Choose De’Longhi Magnifica Evo when straightforward value and an accessible removable brew group matter. Choose Philips 5400 LatteGo when a simple two-piece milk carafe and a broad shared menu fit the household. Choose JURA E8 when premium drink programming and the brand’s closed service approach justify the cost. Choose Gaggia Accademia when a wide touch-screen menu and adjustable milk system are worth a larger, more involved machine.</p><p>No automatic machine removes maintenance. The best one hides the preparation you do not want while keeping the care routine you will perform.</p>`,
    slugs: ['/espresso-machine/delonghi-magnifica-evo/','/espresso-machine/philips-5400-lattego/','/espresso-machine/jura-e8/','/espresso-machine/gaggia-accademia-ri9781-01/'],
  },
  {
    path: '/espresso-machine/without-grinder/',
    title: 'Best Espresso Machines Without a Grinder: Build a Modular Station',
    description: 'Research-led guide to espresso machines without built-in grinders, comparing complete budgets, heat systems, milk workflow, upgrade paths and maintenance.',
    breadcrumb: 'Machines without grinders',
    h1: 'Best espresso machines without a grinder',
    deck: 'A separate grinder costs more space and one more purchase, but it lets each part of the espresso station improve on its own timetable.',
    decisionTitle: 'Protect the grinder budget before choosing the brewer',
    compareTitle: 'Four grinder-free machines for four different upgrade paths',
    decision: `<p>The grinder determines whether small changes in particle size can control flow through the coffee. A more expensive brewer cannot repair a grinder whose steps are too wide or whose output changes unpredictably. Set the complete budget first, reserve money for an espresso-capable grinder and scale, then choose the machine that fits the remaining drink routine.</p><p>A grinder-free machine keeps the system modular. The grinder can survive a brewer upgrade, the machine can be serviced without losing the grinder, and different beans can be handled with equipment chosen for that task. The cost is counter space, cables and a more visible workflow. That is a good trade only when the owner wants to learn and manage the process.</p><p>Choose the heat system from drink volume. Rapid heaters reduce waiting for a small number of drinks. Single boilers provide traditional control with a brew-to-steam transition. Dual boilers support more milk work at a higher price and footprint. None of those architectures determines flavor without suitable coffee preparation and water.</p>`,
    criteria: `<p><strong>Inclusion criteria:</strong> each pick needed no integrated grinder, a permanent current review, official documentation, a distinct workflow and an upgrade path that makes sense with a separate grinder. The shortlist spans assisted milk, traditional value, compact PID control and dual-boiler capability.</p><p><strong>Exclusion criteria:</strong> built-in-grinder systems, superautomatics, unclear model variants and machines chosen only because they accept many accessories were excluded. Accessories do not compensate for the wrong heat system, weak grinder or unsuitable service path.</p>`,
    ownership: `<p>A modular station needs a maintenance plan for both machines. Brush and purge the grinder according to its manual, keep water away from burrs, and track the coffee used when changing settings. Clean the espresso group, baskets, steam wand and water system on the brewer’s schedule. Use appropriate water and record filter or treatment choices.</p><p>Budget for the complete station: grinder, scale, tamper where needed, milk pitcher, water treatment, cleaning supplies and a safe landing place for wet tools. Before buying, confirm electrical requirements, exact included accessories, warranty and local service for both the brewer and grinder.</p>`,
    verdict: `<p>Choose Bambino Plus when compact speed and assisted milk matter. Choose Gaggia Classic Pro E24 when a lower-cost 58 mm learning platform matters. Choose Profitec GO when factory PID control and shot timing justify a higher single-boiler price. Choose Lelit Elizabeth when a compact dual-boiler workflow is worth the additional cost.</p><p>The separate grinder is not an omission to repair later. It is the part of the system that protects extraction control and the long-term upgrade path.</p>`,
    slugs: ['/espresso-machine/breville-bambino/','/espresso-machine/gaggia-classic-evo/','/espresso-machine/profitec-go/','/espresso-machine/lelit-elizabeth/'],
  },
];

const buildGuide = (config: GuideConfig) => {
  const reviews = config.slugs.map((slug) => {
    const review = reviewBySlug.get(slug);
    if (!review) throw new Error(`Missing guide review: ${slug}`);
    return review;
  });
  const productBlock = (review: MachineReviewData) => `<h3>${link(review)}</h3><p>${esc(review.verdict)}</p><p><strong>Evidence boundary:</strong> ${esc(review.assessment)}</p><ul>${review.bestFor.map((item) => `<li><strong>Best fit:</strong> ${esc(item)}</li>`).join('')}${review.avoidIf.map((item) => `<li><strong>Avoid if:</strong> ${esc(item)}</li>`).join('')}</ul>`;
  const factBlock = (review: MachineReviewData) => `<h3>${esc(review.brand)} ${esc(review.model)}</h3><p><strong>${esc(review.price.label)}:</strong> ${esc(review.price.msrp)}. ${esc(review.price.typical)} Price context checked ${esc(review.price.checked)}.</p><dl>${review.facts.slice(0, 5).map((fact) => `<div><dt>${esc(fact.label)}</dt><dd>${esc(fact.value)}</dd></div>`).join('')}</dl>`;
  return {
    title: config.title,
    description: config.description,
    canonicalPath: config.path,
    published: '2026-07-27',
    updated: '2026-10-11',
    author: { name: 'Aleksandar Spasevski', role: 'Editor at Coffeedant', image: 'images/author-aleksandar-spasevski.jpg', note: 'I compared exact current models using the completed Coffeedant product evidence ledgers, manufacturer documentation, independent evaluation and bounded owner context. This is research-led; it is not a claim that I tested every machine side by side.' },
    labels: { breadcrumb: config.breadcrumb, heroOverline: 'Espresso machine buying guide · research-led', h1: config.h1, deck: config.deck, article: config.h1, decisionTitle: config.decisionTitle, compareTitle: config.compareTitle, quickCaption: 'Quick comparison of the exact shortlisted models', faqTitle: `${config.breadcrumb} FAQ`, videoOverline: 'See one shortlisted workflow', videoTitle: 'Independent product context', methodologyTitle: 'Exact models, existing evidence ledgers and type-appropriate comparison', sourcePrefix: config.path.split('/').filter(Boolean).at(-1), footerLabel: 'Compare all espresso machine routes' },
    fastAnswer: `<p>${reviews.map((review) => link(review)).join(', ')} answer different routines. Start with the complete station, milk volume, heat system and maintenance path rather than treating them as one score ranking.</p>`,
    selectorGroups: [
      { name: 'drink', legend: 'What do you make most?', options: [['espresso','Espresso'],['mixed','A mix'],['milk','Milk drinks']] },
      { name: 'pace', legend: 'What pace fits?', options: [['fast','Fast routine'],['ritual','Hands-on'],['shared','Shared use']] },
      { name: 'priority', legend: 'What matters most?', options: [['value','Value'],['control','Control'],['service','Ownership']] },
    ],
    selectorCandidates: reviews.map((review, index) => ({ signals: index === 0 ? 'fast milk shared value' : index === 1 ? 'espresso ritual value service' : index === 2 ? 'espresso mixed control ritual' : 'milk shared control service', brand: review.brand, name: review.model, note: review.verdictLabel, setup: review.bestFor[0], compromise: review.avoidIf[0], href: review.slug })),
    picks: reviews.map((review) => ({ name: review.model, brand: review.brand, model: review.sku, href: review.slug, price: review.price.msrp, setup: review.category, grinder: 'A separate espresso-capable grinder is required unless the reviewed machine is an integrated automatic.', milk: review.quickAnswers.find((item) => /steam|milk/i.test(item.question))?.answer ?? review.verdictLabel, maintenance: review.facts.find((item) => /clean|water|maint|service/i.test(item.label))?.value ?? 'Follow the exact manual, use suitable water and confirm local service.', bestFit: `Best fit: ${review.bestFor[0]}`, avoidIf: `Avoid if: ${review.avoidIf[0]}`, verdict: review.verdict })),
    sections: [
      { id: 'decision', eyebrow: 'Start with the routine', title: config.decisionTitle, html: config.decision },
      { id: 'criteria', eyebrow: 'Scope and evidence', title: 'How the shortlist was chosen and what was left out', html: config.criteria },
      { id: 'grinder', eyebrow: 'Exact models and costs', title: 'Compare the delivered system, not a family name', html: reviews.map(factBlock).join('') },
      { id: 'milk', eyebrow: 'Drink workflow', title: 'Milk and espresso pace reveal the real architecture', html: reviews.map((review) => `<h3>${esc(review.brand)} ${esc(review.model)}</h3>${section(review, 'milk') || `<p>${esc(review.verdict)}</p>`}`).join('') },
      { id: 'ownership', eyebrow: 'Long-term fit', title: 'Ownership costs include water, cleaning, access and time', html: `${config.ownership}${reviews.slice(0, 2).map((review) => `<h3>${esc(review.brand)} ${esc(review.model)} ownership context</h3>${section(review, 'ownership') || section(review, 'build')}`).join('')}` },
      { id: 'picks', eyebrow: 'Four bounded recommendations', title: 'Choose by best fit and keep the avoid-if guidance visible', html: reviews.map(productBlock).join('') },
      { id: 'first-week', eyebrow: 'After delivery', title: 'Verify the exact unit and stabilize one routine', html: `<p>On delivery, match the model code, voltage and included accessories to the order. Photograph the rating plate, inspect for shipping damage, read the exact manual and preserve the return window. Set up suitable water before scale begins accumulating.</p><p>Use one fresh coffee, one dose and one target yield while learning. Change grind before changing several variables. Record settings and taste in plain language. For milk, repeat one quantity and pitcher before judging steam performance. Finish every session with the documented cleaning sequence.</p>${reviews.slice(0, 2).map((review) => `<h3>${esc(review.brand)} ${esc(review.model)} workflow</h3>${section(review, 'workflow')}`).join('')}` },
      { id: 'community', eyebrow: 'Owner context', title: 'Owner reports create an inspection list, not a failure rate', html: `<aside class="review-community-evidence"><h3>How community evidence is used</h3><ul>${reviews.map((review) => `<li><strong>${esc(review.brand)} ${esc(review.model)}</strong><p>${esc(review.article.methodology)}</p></li>`).join('')}</ul><p class="review-community-evidence-note">Original discussions remain in the annotated product evidence ledgers and source links below. Self-selected reports do not establish incidence, expected life or comparative reliability.</p></aside><p>Use owner accounts to identify unclear controls, cleaning friction, access constraints and service questions. Confirm specifications with official documentation and preserve uncertainty when regional packages conflict.</p>` },
      { id: 'verdict', eyebrow: 'The final decision', title: 'Choose the routine the household will repeat', html: config.verdict },
    ],
    faqs: reviews.flatMap((review) => review.quickAnswers.slice(0, 2).map((item) => [item.question, item.answer])),
    sources: reviews.flatMap((review) => review.article.sources.slice(0, 4).map((source) => [source.label, source.href, source.note])),
    media: reviews.slice(0, 2).map((review) => ({ src: review.image, alt: review.imageAlt, width: 900, height: 900, credit: review.brand, source: review.links.find((item) => !item.affiliate)?.href ?? review.article.sources[0]?.href, caption: `${review.brand} ${review.model}, one of the exact models compared in this guide.` })),
    video: { ...reviews[0].video, duration: 'PT10M' },
  };
};

export const remainingGuideByPath = Object.fromEntries(configs.map((config) => [config.path, buildGuide(config)]));

