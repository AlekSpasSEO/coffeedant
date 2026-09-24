import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://nivona.com/nl/product/6series';
const officialGerman = 'https://nivona.com/de/product/6series';
const manual = 'https://nivona.com/assets/Gebruiksaanwijzing%20(NL)-BrKkiuVM.pdf';
const catalog = 'https://nivona.com/assets/Katalog_25_26%20(DE)-CKtks6fS.pdf';
const computerBild = 'https://www.computerbild.de/artikel/cb-Tests-Haushalt-Nivona-NICR-690-CafeRomatica-Test-Review-36767695.html';
const expertReview = 'https://101kofemashina.ru/nivona/695/';
const video = 'https://www.youtube.com/watch?v=fcvM6LxPyJw';
const community = 'https://www.reddit.com/r/superautomatic/comments/1prjw23/nivona_5_6_or_7_series/';
const ownerAggregate = 'https://factsly.ru/kofevarki/nivona-nicr690/otzyvy/';
const idealo = 'https://www.idealo.de/preisvergleich/OffersOfProduct/202107787_-caferomatica-nicr-695-nivona.html';
const dealer = 'https://aandekoffie.nl/products/nivona-caferomatica-690';
const elesen = 'https://www.elesen.lt/en/kitchen/espresso-and-coffee-makers/espresso-machines/nicr690/nivona-caferomatica-690-black-espresso-machine';
const image = 'https://nivona.com/assets/NIVONA_Frontansicht_Render_6series_titan-CGm7EHsw.webp';

const profile: UpgradeReviewProfile = {
  key: 'nivona-caferomatica-nicr695-eu-2022',
  slug: '/espresso-machine/nivona-caferomatica-6xx/',
  productId: 'CD-EM-000213',
  brand: 'Nivona',
  model: 'CafeRomatica NICR 695',
  sku: "NICR 6'95 titanium, current EU/EEA 220-240 V generation introduced with NICR 690 in 2022",
  category: 'Superautomatic espresso machine',
  brandPath: '/brands/',
  title: 'Nivona CafeRomatica NICR 695 review: almost one-touch milk',
  description: 'Exact current EU Nivona NICR 695 review: 699 euro dated price, three Aroma Balance profiles, manual milk valve, five saved recipes and removable brewer.',
  verdictLabel: 'A capable black-coffee automatic with one deliberate milk compromise',
  verdict: 'Shortlist the exact current NICR 695 when you want Nivona\'s three Aroma Balance profiles, a removable brewer, five saved recipes and a combined coffee-and-milk outlet without paying for the 7-series milk automation. It makes the foam automatically but asks you to open and close a physical milk valve when prompted. The current German page displayed 699 euros on September 24, 2026. That is a sensible middle ground for buyers who accept the extra turn; it is the wrong machine for anyone who reads cappuccino as a literal one-touch request.',
  assessment: 'This is a research-led assessment, not Coffeedant testing. Current Nivona product pages and an official manual define the reviewed NICR 695 generation. Computer Bild and Dmitry Yurchenko provide exact-generation hands-on evidence. Current price listings and self-selected owner discussions add market and ownership context. No source supplies a representative failure rate, and Coffeedant did not reproduce third-party taste, temperature, speed or noise findings.',
  image,
  imageAlt: 'Nivona official front render of the titanium CafeRomatica NICR 695 with central color display and combined coffee and milk outlet',
  published: '2026-07-27',
  updated: '2026-09-24',
  price: {
    label: 'Current checked exact-model price',
    msrp: '699 euros on Nivona Germany',
    typical: 'Nivona Germany displayed 699 euros for the titanium NICR 695 on September 24, 2026. Idealo showed offers from 656 to 877.29 euros. Seller, delivery, warranty and inventory can change.',
    currency: 'EUR', numeric: '699', checked: 'September 24, 2026',
  },
  links: [
    { label: 'Check the current NICR 695 price', href: officialGerman, note: 'Current German manufacturer page; 699 euros checked September 24, 2026', primary: true },
    { label: 'Read the official 6-series record', href: official, note: 'Current Dutch regional page identifying NICR 695 and black NICR 690 as the two color variants' },
  ],
  facts: [
    { label: 'Exact reviewed machine', value: 'Current titanium NICR 695, EU/EEA 220-240 V generation introduced alongside NICR 690 in 2022' },
    { label: 'Color sibling', value: 'NICR 690 is the black version in regions where both are listed; older 660/670/675/680 machines are different products' },
    { label: 'Coffee controls', value: 'Three Aroma Balance profiles, five strength levels, three temperatures and three grinder positions' },
    { label: 'Drink memory', value: 'Four named coffee recipes plus milk foam and hot water, with five My Coffee slots' },
    { label: 'Milk workflow', value: 'Integrated automatic frother with manual valve start and stop; no cup move, not fully one-touch' },
    { label: 'Capacity', value: '2.2 L water, 250 g beans, 14 cm outlet clearance and approximately 7-11 used-coffee portions' },
    { label: 'Physical record', value: 'About 24 × 34 × 46 cm in the current manual; product page says 48 cm deep; about 9 kg' },
  ],
  quickAnswers: [
    { question: 'Is this a review of every Nivona 6xx?', answer: 'No. It is locked to the current 690/695 generation and scored as the titanium NICR 695.' },
    { question: 'Is NICR 690 different inside?', answer: 'Current regional material presents 690 as the black color sibling; confirm the delivered rating plate and package.' },
    { question: 'Does cappuccino run with one touch?', answer: 'Not literally. The machine prompts you to turn the milk valve open and closed.' },
    { question: 'Must the cup move for cappuccino?', answer: 'No. Coffee, milk and hot water share the height-adjustable central outlet.' },
    { question: 'Can the brewer be removed?', answer: 'Yes. The official care record requires removal and rinsing rather than treating it as maintenance-free.' },
    { question: 'Does the current model use an app?', answer: 'The current manual and 690/695 product record do not document app control for this generation.' },
  ],
  bestFor: [
    'Espresso, coffee and Americano drinkers who will use the three Aroma Balance profiles',
    'Cappuccino households that accept one manual valve turn but do not want to move the cup',
    'Owners who prefer a removable brewer and guided cleaning over sealed internal brewing hardware',
  ],
  avoidIf: [
    'You require milk drinks that complete without touching a valve',
    'You need a broad menu of named milk recipes, cold drinks or automatic texture selection',
    'You are shopping in North America, where this 220-240 V European identity and warranty do not apply',
  ],
  pros: [
    'Three Aroma Balance profiles offer a useful extraction choice beyond strength alone',
    'Combined outlet avoids moving the cup for cappuccino and Americano',
    'Five My Coffee slots are unusually generous at this price tier',
    'Removable brew unit and guided cleaning provide clear owner access',
  ],
  cons: [
    'Milk still needs a physical valve opened and closed at the display prompts',
    'The seven-part frother rewards prompt rinsing and careful reassembly',
    'Only four named coffee recipes limits households that want a large visual menu',
    'Official current records disagree on 46 versus 48 cm cabinet depth',
  ],
  architecture: 'a European bean-to-cup machine with one hardened-steel conical grinder, one removable brewing unit, one thermoblock, a 2.4-inch color display with rotary control, and a tube-fed automatic frother in the central outlet whose steam flow is started and stopped by a manual valve',
  identityBoundary: 'This page scores the current titanium NICR 695 in the EU/EEA 220-240 V family. Current Dutch Nivona material also lists NICR 690 as the black color sibling. It is not an older NICR 660, 670, 675 or 680, whose separate milk outlet, app claims and workflow must not be copied here. It is also not a 7-series one-touch machine, and no North American voltage, warranty or supply claim is made.',
  primaryStrength: 'It combines meaningful black-coffee adjustment with a central milk outlet and five recipe memories while retaining a removable brewer.',
  primaryLimit: 'The frother automates milk uptake and texture but still needs the user to open and close a valve, so the cappuccino program is guided rather than fully one-touch.',
  setupNote: 'Match the delivered plate to NICR 695 and the local 220-240 V supply before use. Allow top and side access for the 2.2 L tank, 250 g hopper, ground-coffee chute and right-side brew-unit door. The manual says about 24 × 34 × 46 cm, while the current product page says roughly 24 × 34 × 48 cm; plan for the larger depth plus hose and ventilation clearance. Set filter use and water hardness, rinse the system, then establish one espresso at a middle strength, temperature and Constant profile before changing one variable at a time.',
  espressoNote: 'The current record documents five strength levels, three temperatures, three Aroma Balance profiles, adjustable grind, pre-brewing and 20-240 ml coffee volumes. Dynamic, Constant and Intense change the brewing sequence rather than creating three pressure profiles the owner can draw. Computer Bild reported a full, balanced espresso and preferred the finest grinder position in its exact NICR 690 test. That is one independent result from the color sibling, not a Coffeedant tasting result or a promise for every bean.',
  milkNote: 'The hidden Spumatore draws milk through a hose and dispenses it from the same adjustable outlet as coffee. The display tells the user when to open and close the right valve, so there is no cup move but there is still an intervention. The independent 2022 NICR 695 test reported 62 C milk and 66 C cappuccino under its stated conditions, while Computer Bild found the sequence easy to misconfigure when its Easyclean control was in the wrong position. Treat those as third-party observations, not universal temperature or texture claims.',
  workflowNote: 'The 2.4-inch display and rotary control keep the interface compact. Espresso, coffee, Americano and cappuccino are the central named recipes; milk foam and hot water are separate, and five My Coffee memories extend the set. Two-cup service applies to espresso and coffee, not paired milk drinks. The bean sensor, rear rollers, 14 cm outlet and combined dispenser reduce small frictions. The extra valve turn and milk rinse are the repeated costs that distinguish this machine from a 7-series model.',
  buildNote: 'Nivona documents a hardened-steel conical grinder, removable brew unit, 15-bar static pump rating, 1455 W input, rear rollers and a roughly 9 kg body. Computer Bild found the grinder quiet in its test and described cleaning as straightforward. Weight, materials and one review do not establish durability. The manual directs users to record the exact model, serial and error code for service, which matters because 6-series generations share a family name but not every internal or external part.',
  featuresNote: 'The useful feature set is focused: three Aroma Balance sequences, five saved recipes, editable factory recipes, bean sensor, preground chute, 14 cm outlet, coffee-and-espresso two-cup mode, hot water, filter monitoring and guided care. There is no documented touchscreen, cold-extraction program or current 690/695 app control. Older 660-680 Bluetooth references are not carried across the generation boundary.',
  valueNote: 'The manufacturer displayed 699 euros on September 24, 2026, and Idealo showed an exact NICR 695 range from 656 to 877.29 euros. Compare a live local quote with the black NICR 690, Nivona 7-series and mainstream one-touch rivals, then include filters, tablets, milk cleaner and service access. The 695 earns value when Aroma Balance and removable-brewer care matter more than literal one-touch milk. A buyer who mainly wants cappuccino automation should price the 7-series before accepting the manual valve.',
  ownerPattern: 'The selected current discussion frames the same buying question as the review: buyers compare 5, 6 and 7-series machines mainly around milk automation, recipe breadth and price. A separate NICR 690 owner compilation collects praise for adjustment and repeat purchase alongside complaints about cleaning, grind setting and isolated warranty repair. These are useful inspection points from self-selected reports, not a measured ownership distribution.',
  ownerCaution: 'The owner material mixes countries, purchase dates, water, beans, care habits and sometimes the black NICR 690 sibling rather than the titanium 695. Aggregation does not repair missing denominators or verify every account. It cannot establish defect frequency, average lifespan, milk temperature or the probability of needing service.',
  maintenanceNote: 'The manual calls for milk-system rinsing after use, regular frother cleaning and disassembly, system rinse, tablet cleaning, descaling, brew-unit removal and rinsing, tray and grounds-bin care, water-tank cleaning and filter replacement. The independent 2022 review notes that the frother has seven pieces and an order-sensitive lower section. Follow the display and official manual rather than assuming an automatic rinse removes milk residue or coffee oils everywhere.',
  dimensions: {
    espresso: { score: 8.4, claim: 'Three brew sequences, five strengths and three temperatures provide unusually useful automatic adjustment.', consequence: 'A three-position grinder and fixed automatic brew path still limit precision compared with manual espresso.', status: 'Official controls plus two exact-generation independent evaluations; no Coffeedant extraction measurements', signals: ['Three Aroma Balance profiles change the brewing sequence.', 'Five strengths, three temperatures and three grinder positions are documented.', 'Independent espresso praise was not reproduced by Coffeedant.'] },
    milk: { score: 7.4, claim: 'The integrated frother avoids moving the cup and produced positive third-party results.', consequence: 'Opening and closing the milk valve prevents literal one-touch service and adds a failure point in the routine.', status: 'Official workflow, manual care record and two hands-on exact-generation reviews', signals: ['Tube-fed automatic foam exits from the central dispenser.', 'The user must operate the right valve at prompts.', 'The multi-piece frother needs prompt rinsing and correct assembly.'] },
    workflow: { score: 8.2, claim: 'A rotary interface, five memories and central outlet make the daily menu coherent.', consequence: 'Only four named coffee recipes and no paired milk mode limit drink queues.', status: 'Current product page and manual with independent observations', signals: ['Five My Coffee memories supplement the compact menu.', 'Two-cup mode covers espresso and coffee only.', 'A bean sensor and rear rollers reduce small ownership friction.'] },
    build: { score: 8.0, claim: 'Removable-brewer access and established service documentation are meaningful ownership positives.', consequence: 'No representative component-life or repair-rate evidence was located.', status: 'Current official construction details, manual and limited exact-generation hands-on context', signals: ['Hardened-steel grinder and removable brewing unit.', 'About 9 kg with guided internal and external care.', 'Shared family naming makes exact model and serial essential for parts.'] },
    features: { score: 8.1, claim: 'Aroma Balance, five memories, bean sensing and guided care focus on useful daily jobs.', consequence: 'There is no documented app, cold menu, touchscreen or automatic milk valve for this generation.', status: 'Current EU regional product records and manual checked September 24, 2026', signals: ['Three extraction sequences and editable recipes.', 'No current 690/695 app control is documented.', 'Feature names from older 6-series models were not inherited.'] },
    value: { score: 8.0, claim: 'At 699 euros, the adjustment and care access are competitive for a specialist-dealer automatic.', consequence: 'The 7-series can be a better buy when hands-off milk matters more than Aroma Balance value.', status: 'Manufacturer price and 18-offer market range checked September 24, 2026', signals: ['699 euros on Nivona Germany.', 'Idealo showed 656 to 877.29 euros.', 'Filters, cleaning products and service belong in the ownership total.'] },
  },
  sources: [
    { label: 'Nivona current Dutch NICR 6 product page', href: official, note: 'Current regional page identifying NICR 695 titanium and NICR 690 black, shared features, recipes, capacities, care, dimensions and EU pricing; checked September 24, 2026.' },
    { label: 'Nivona current 690/695 operating manual', href: manual, note: 'Official setup, valve operation, recipes, grind adjustment, cleaning, troubleshooting and 220-240 V technical record; Dutch edition, current file published in 2025.' },
    { label: 'Nivona current German NICR 6 page', href: officialGerman, note: 'Exact NICR 695 titanium listing with 699 euro displayed price, three Aroma Balance profiles, Mano SoloPlus and current product specifications on September 24, 2026.' },
    { label: 'Computer Bild NICR 690 hands-on review', href: computerBild, note: 'Independent exact-generation test dated September 23, 2023 covering espresso, controls, grinder noise, milk sequence and cleaning; NICR 690 is the black color sibling.' },
    { label: 'Independent 690/695 milk workflow video', href: video, note: 'Exact-generation visual demonstration embedded by 101kofemashina in its November 16, 2022 hands-on review; useful for valve and combined-outlet workflow, not reliability evidence.' },
    { label: '101kofemashina NICR 695 hands-on review', href: expertReview, note: 'Dmitry Yurchenko exact NICR 695 review dated November 16, 2022 with setup, drink sequence, measured temperatures, timing and maintenance observations; results were not reproduced by Coffeedant.' },
    { label: 'Nivona 2025/2026 catalog', href: catalog, note: 'Official current-range context used to check series position and avoid mixing the 6-series with newer 7000, 8000 or 9000 product families.' },
    { label: 'Reddit Nivona 5, 6 or 7-series discussion', href: community, note: 'Self-selected current purchase discussion showing the recurring milk-automation and series-position questions; not an exact-model reliability study.' },
    { label: 'NICR 690 owner-report compilation', href: ownerAggregate, note: 'Compilation of 36 attributed owner and comment excerpts across five platforms; useful themes include care, adjustment and isolated repair, but it is not a representative sample.' },
    { label: 'Idealo NICR 695 market listing', href: idealo, note: 'Displayed 18 offers from 656 to 877.29 euros plus exact basic specifications on September 24, 2026; offer and inventory states can change.' },
    { label: 'AanDeKoffie NICR 690 dealer guide', href: dealer, note: 'Exact color-sibling dealer explanation of the manual Easy Spumatore, removable brewer, package and 34 × 24 × 46 cm dimensions; commercial source.' },
    { label: 'Elesen NICR 690 current listing', href: elesen, note: 'Displayed 539.99 euros, store stock, three Aroma Balance profiles, five strengths, three temperatures and five saved recipes on September 24, 2026; regional seller state can change.' },
  ],
  comparisons: [
    { name: 'Nivona CafeRomatica NICR 695', href: '/espresso-machine/nivona-caferomatica-6xx/', quickDecision: 'Choose focused black-coffee controls and removable-brewer care when one milk-valve turn is acceptable.', priceClass: '699 euros checked Sep 24', dimensions: '24 × 34 × 46-48 cm W×H×D', heating: 'One 1455 W thermoblock', coffeeSetup: 'Steel conical grinder, three Aroma Balance profiles', milkWorkflow: 'Integrated frother with manual valve', bestFor: 'Adjusted coffee plus occasional milk' },
    { name: 'Nivona CafeRomatica 8xx', href: '/espresso-machine/nivona-caferomatica-8xx/', quickDecision: 'Move up when broader milk automation and a more premium workflow justify the price.', priceClass: 'Premium Nivona automatic', dimensions: 'Larger series-dependent body', heating: 'Model-specific automatic system', coffeeSetup: 'Model-specific Aroma Balance controls', milkWorkflow: 'More automated milk by exact model', bestFor: 'Milk-heavy households' },
    { name: 'DeLonghi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', quickDecision: 'Compare when a mainstream one-touch milk carafe and a simpler visual menu matter more than Nivona brew profiles.', priceClass: 'Mainstream superautomatic', dimensions: 'Compact counter automatic', heating: 'Thermoblock automatic', coffeeSetup: 'Integrated grinder with recipe controls', milkWorkflow: 'Model-specific LatteCrema carafe', bestFor: 'Simple one-touch milk' },
    { name: 'Philips 3200 LatteGo', href: '/espresso-machine/philips-3200-lattego/', quickDecision: 'Choose the two-piece LatteGo path when fast milk cleanup matters more than extraction-profile choice.', priceClass: 'Mainstream superautomatic', dimensions: 'Compact counter automatic', heating: 'Automatic thermoblock platform', coffeeSetup: 'Integrated grinder and strength settings', milkWorkflow: 'Hose-free removable LatteGo cup', bestFor: 'Low-friction milk cleanup' },
  ],
  comparisonNote: 'Compare the exact article, region, voltage, local warranty, milk hardware and live checkout total. Nivona reused the 6-series family label across older 660-680 and newer 690/695 machines, so a family name alone does not establish the same milk outlet, connectivity, dimensions or parts.',
  recommendations: [
    { kicker: 'More Nivona automation', title: 'Nivona CafeRomatica 8xx', text: 'Move up when milk drinks dominate and the extra automation is worth more than the 6-series price advantage.', href: '/espresso-machine/nivona-caferomatica-8xx/', linkLabel: 'Read Nivona 8xx review', featured: true },
    { kicker: 'Simpler one-touch milk', title: 'DeLonghi Magnifica Evo', text: 'Compare the exact LatteCrema version when a visual drink panel and fewer milk prompts matter most.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read Magnifica Evo review' },
    { kicker: 'Fast milk cleanup', title: 'Philips 3200 LatteGo', text: 'The hose-free two-piece milk cup trades Nivona\'s three brew profiles for a very simple rinse routine.', href: '/espresso-machine/philips-3200-lattego/', linkLabel: 'Read Philips 3200 review' },
    { kicker: 'See the whole category', title: 'Best superautomatic espresso machines', text: 'Use the category guide to compare milk automation, brewer access, recipe controls and total ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'Which model does this Nivona 6xx review cover?', answer: 'The score and Product identity are for the current titanium CafeRomatica NICR 695 sold for European 220-240 V markets. The current black NICR 690 is treated only as its color sibling. Older NICR 660, 670, 675 and 680 machines have a different milk layout and are not silently folded into this score.' },
    { question: 'Can the NICR 695 make cappuccino with one touch?', answer: 'Not in the strict sense. It draws and froths milk automatically through a hose, and coffee and milk exit from the same central outlet, but the display asks you to open and later close the physical milk valve. You do not move the cup.' },
    { question: 'What does Aroma Balance change?', answer: 'The Dynamic, Constant and Intense profiles alter the brewing sequence and pre-infusion behavior. They sit beside five strength levels, three coffee temperatures and a three-position grinder. They are useful automatic choices, not manual pressure or flow profiling.' },
    { question: 'How many drinks and saved recipes are available?', answer: 'The current record centers on espresso, coffee, Americano and cappuccino, plus milk foam and hot water. Five My Coffee memory slots can store personalized versions. Two-cup service applies to espresso and coffee, not two milk drinks.' },
    { question: 'Is the Nivona app supported on NICR 695?', answer: 'Current 690/695 product pages and the current manual do not document app control. Bluetooth references associated with older NICR 660-680 machines should not be transferred to this generation.' },
    { question: 'How large is the machine?', answer: 'The current manual states about 24 cm wide, 34 cm high and 46 cm deep at about 9 kg. Nivona\'s current product page states roughly 48 cm deep. Because those official records conflict, plan for 48 cm plus hose, ventilation and access clearance.' },
    { question: 'What cleaning does the milk system need?', answer: 'Run the prompted rinse after milk use, clean and disassemble the frother as directed, and keep the hose and connections free of residue. An independent review describes seven frother parts, so careful reassembly matters. Automatic rinsing does not eliminate physical cleaning.' },
    { question: 'Is 699 euros a permanent price?', answer: 'No. It is the German manufacturer display checked September 24, 2026. Idealo showed exact NICR 695 offers from 656 to 877.29 euros that day. Local tax, delivery, warranty, stock and promotions can change.' },
  ],
  finalTitle: 'Buy the NICR 695 for coffee control, not for a one-touch label',
  finalVerdict: [
    'The current NICR 695 is most convincing as a focused European automatic for households that care about black-coffee adjustment, saved recipes and removable-brewer care, then make enough cappuccino to appreciate a central frother but not enough to resent one valve turn.',
    'Its generation boundary is part of the verdict. The current 690/695 machines are not the older Bluetooth-era 660-680 models, and the black NICR 690 is the color sibling rather than a separate performance tier. Verify the plate, voltage, package and local service before treating any family-level listing as exact.',
    'Choose a 7-series or a direct one-touch rival when milk automation is the main reason for buying. Choose the NICR 695 when three Aroma Balance profiles, five memories, compact controls and owner-accessible care make the 699-euro proposition more useful than a longer drink menu.',
  ],
  video: {
    id: 'fcvM6LxPyJw',
    title: 'Nivona NICR 690/695 combined milk outlet demonstration',
    creator: '101kofemashina.ru',
    published: '2022-11-16',
    note: 'Exact-generation independent visual demonstration embedded in Dmitry Yurchenko\'s NICR 695 hands-on review. It shows the valve-guided milk workflow and combined outlet, not long-term reliability or Coffeedant testing.',
  },
};

profile.sectionOverrides = {
  setup: `<p>${profile.setupNote} <a href="#nivona-caferomatica-nicr695-eu-2022-source-1">[source]</a> <a href="#nivona-caferomatica-nicr695-eu-2022-source-2">[source]</a></p>`,
  espresso: `<p>${profile.espressoNote} <a href="#nivona-caferomatica-nicr695-eu-2022-source-1">[source]</a> <a href="#nivona-caferomatica-nicr695-eu-2022-source-4">[source]</a></p>`,
  milk: `<p>${profile.milkNote} <a href="#nivona-caferomatica-nicr695-eu-2022-source-2">[source]</a> <a href="#nivona-caferomatica-nicr695-eu-2022-source-6">[source]</a></p>`,
  workflow: `<p>${profile.workflowNote} <a href="#nivona-caferomatica-nicr695-eu-2022-source-1">[source]</a> <a href="#nivona-caferomatica-nicr695-eu-2022-source-4">[source]</a></p>
    <p>Before purchase, check top access, the right-side brew-unit door, water-tank travel, milk-hose placement and at least 48 cm of cabinet depth. Then time the household's normal order from startup through the milk rinse, not only the internal heating stage.</p>`,
  build: `<p>${profile.buildNote} <a href="#nivona-caferomatica-nicr695-eu-2022-source-2">[source]</a> <a href="#nivona-caferomatica-nicr695-eu-2022-source-4">[source]</a></p>
    <p>${profile.maintenanceNote} Stop use for leaks, electrical faults, burning smells or unresolved error codes and arrange qualified service against the exact model and serial.</p>`,
  features: `<p>${profile.featuresNote} <a href="#nivona-caferomatica-nicr695-eu-2022-source-1">[source]</a> <a href="#nivona-caferomatica-nicr695-eu-2022-source-2">[source]</a></p>
    <p>The feature test is practical: Aroma Balance and recipe memory matter when they remove repeated adjustment. An older 6-series app claim or a brochure label that does not change the current 695 routine adds no value.</p>`,
  value: `<p>${profile.valueNote} <a href="#nivona-caferomatica-nicr695-eu-2022-source-3">[source]</a> <a href="#nivona-caferomatica-nicr695-eu-2022-source-10">[source]</a></p>
    <p>Compare the full station on the same date, including filter cartridges, tablets, milk cleaner, delivery, warranty and the local service route. The cheapest listing is not equivalent when support or voltage differs.</p>`,
  ownership: `<p>${profile.ownerPattern}</p>
    <aside class="review-community-evidence" aria-labelledby="nivona-695-owner-title"><h3 id="nivona-695-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>Series choice centers on milk labor</strong><p>Current prospective buyers repeatedly ask whether the 6-series valve prompt is an acceptable middle ground or whether paying for a 7-series is wiser. That is a preference question, not evidence that either series is universally better.</p></li>
    <li><strong>Adjustment and care appear together</strong><p>The compiled 690 reports include praise for coffee adjustment and repeat purchases alongside reminders about frother cleaning, grinder choice and isolated warranty repair. No representative sample, common ownership interval or verified diagnosis is supplied.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeNivonaCafeRomatica6xxReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
