import type { MachineReviewData } from '../reviews';
import {
  buildResearchReview,
  comparisonTablesHtml,
  faqHtml,
  internalHref,
  recommendationCardsHtml,
} from '../batch-review-builder';

const checked = 'September 15, 2026';

// Canonical identity: Nespresso VertuoPlus / CD-EM-000057.
// The current US family includes manufacturer, finish, bundle and tank-capacity variants.
export const nespressoVertuoPlusReview: MachineReviewData = buildResearchReview({
  slug: '/espresso-machine/nespresso-vertuo-plus/',
  productId: 'CD-EM-000057',
  brand: 'Nespresso',
  model: 'VertuoPlus',
  sku: 'VertuoPlus family (ENV150 / ENV155 variants)',
  category: 'Capsule coffee and espresso machine',
  brandPath: '/nespresso/',
  title: 'Nespresso VertuoPlus review: effortless coffee, with capsule limits',
  description: 'A research-led Nespresso VertuoPlus review covering current US models, capsule extraction, cost, cleaning, owner reports, alternatives and the newer Vertuo Up.',
  verdictLabel: 'Best for one-button variety',
  verdict: 'The VertuoPlus is still an unusually easy way to move between short capsule drinks and larger coffees. Its motorized head, barcode-led brewing and movable tank make the routine welcoming. Buy it only if you actively want the Vertuo capsule system, accept its recurring cost and do not confuse its foam-topped short drink with traditional portafilter espresso. At the $199–$219 official Deluxe prices observed, the newer Vertuo Up deserves a direct comparison before checkout.',
  assessment: 'Excellent capsule workflow, but the closed coffee system and newer sibling make full-price value conditional.',
  image: 'images/products/nespresso-vertuo-plus.jpg',
  imageAlt: 'Nespresso VertuoPlus capsule coffee machine with rounded motorized head',
  published: '2026-01-23',
  updated: '2026-09-15',
  authorNote: 'I treated this as a capsule-system decision, not a shortcut to traditional espresso. The most useful question is whether Vertuo coffee, serving sizes and ongoing pod purchases fit your household after the novelty of one-button brewing wears off.',
  basisDisclosure: 'This is a research-led editorial assessment based on current US product and support pages, model-family manuals, independent hands-on and long-term reviews, and separate owner discussions. Coffeedant has not physically tested this VertuoPlus. Reviewer observations remain attributed, and self-selected failure reports are not used as reliability rates.',
  price: {
    label: 'Nespresso US VertuoPlus Deluxe price',
    msrp: '$219.00',
    typical: "Nespresso listing; De'Longhi's exact ENV155S was $199 on the same check date",
    currency: 'USD',
    numeric: '219.00',
    checked,
  },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4qHsHkZ', note: 'Affiliate link · confirm model, maker and bundle', affiliate: true, primary: true },
    { label: 'Check Nespresso price', href: 'https://www.nespresso.com/us/en/vertuoplus', note: 'Official US family page' },
  ],
  facts: [
    { label: 'Machine type', value: 'Vertuo capsule coffee and espresso system' },
    { label: 'Extraction', value: 'Barcode-led Centrifusion capsule brewing' },
    { label: 'Controls', value: 'One brew button; motorized opening and closing' },
    { label: 'Coffee supply', value: 'Nespresso Vertuo capsules only' },
    { label: 'Milk', value: 'None built in; Aeroccino bundles vary' },
    { label: 'Model scope', value: 'Standard and Deluxe, Breville and De\'Longhi variants' },
  ],
  quickAnswers: [
    { question: 'Does it make real espresso?', answer: 'It makes the Vertuo system\'s short capsule beverage. That is concentrated coffee, but its spinning extraction, capsule recipe and foam differ from traditional 9-bar portafilter espresso.' },
    { question: 'Which VertuoPlus is reviewed?', answer: 'The US VertuoPlus family, including common ENV150 and Deluxe ENV155 variants. Tank capacity, dimensions, finish, maker and bundle can differ, so confirm the retailer SKU.' },
    { question: 'Can it use Original capsules?', answer: 'No. Vertuo and Original capsules are different systems. VertuoPlus reads Vertuo capsule barcodes and does not accept Original capsules or ordinary coffee grounds.' },
    { question: 'Does it froth milk?', answer: 'Not by itself. Some bundles add an Aeroccino frother, while machine-only packages do not. Compare the live box contents rather than a review photo.' },
    { question: 'Is the VertuoPlus discontinued?', answer: 'No in the US evidence checked on September 15, 2026. Nespresso still listed VertuoPlus Deluxe, although the newer Vertuo Up now competes at a similar official price.' },
    { question: 'What should I price beyond the machine?', answer: 'Vertuo capsules, descaling supplies and any separate milk frother. Your drink volume and capsule choice matter much more than a one-time machine discount.' },
  ],
  bestFor: [
    'A household that values one-button coffee and changes serving sizes more often than it changes beans',
    'Someone who prefers sealed capsules, fast reset and minimal coffee preparation',
    'A buyer who has tasted Vertuo coffee and accepts the capsule price and recycling routine',
  ],
  avoidIf: [
    'You want traditional espresso texture, an open coffee supply or control over dose and extraction',
    'Several milk drinks need an integrated or high-capacity milk workflow',
    'The machine price is easy to justify but the annual capsule cost is not',
  ],
  pros: [
    'Very low-effort one-button brewing with automatic capsule recognition',
    'Motorized head and adjustable tank reduce everyday handling friction',
    'Short and larger drink choices within one capsule platform',
    'Used capsules eject into an internal container for a tidy reset',
  ],
  cons: [
    'Locked to Nespresso Vertuo capsules and their ongoing price',
    'Short drinks are not a substitute for traditional portafilter espresso',
    'No built-in milk system, and Aeroccino bundles vary',
    'The newer Vertuo Up weakens the case for paying full official price',
  ],
  alternatives: [
    { name: 'Breville Bambino Plus', reason: 'Choose fresh-ground, traditional espresso and automatic milk with a separate grinder.', href: '/espresso-machine/breville-bambino/' },
    { name: 'Philips 3200 LatteGo', reason: 'Choose whole-bean one-touch drinks and an integrated milk carafe, accepting more maintenance.', href: '/espresso-machine/philips-3200-lattego/' },
    { name: 'De\'Longhi Magnifica Evo', reason: 'Compare a current bean-to-cup route with refillable beans rather than capsules.', href: '/espresso-machine/delonghi-magnifica-evo/' },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. I checked Nespresso's current US VertuoPlus listing, machine-assistance route, capsule and recycling information, plus a current De'Longhi ENV155 product page to distinguish family facts from one retailer SKU. Nespresso uses the VertuoPlus name across standard and Deluxe machines made in different finishes and by different appliance partners. Wherever tank size, measurements or bundle contents can change, this review says so rather than merging the variants.</p>
      <p>Independent evidence includes five editorial reviews and a two-year owner video; their cup descriptions and measurements remain theirs. Separate r/nespresso discussions identify long-term, leak and replacement questions but cannot estimate a defect rate. Price and availability were checked September 15, 2026. Exact retailer inventory, future capsule pricing, model-specific warranty duration and population-level lifespan remain unknown.</p>
    `,
    sections: [
      {
        id: 'orientation',
        eyebrow: 'The system decision',
        title: 'The VertuoPlus is easy because the capsule makes most of the decisions',
        html: `
          <p>Lift the lever, let the motorized head open, insert a Vertuo capsule, close it and press. The barcode determines water volume and spinning profile; reopening the head ejects the used capsule into an internal container. This is genuine convenience. <a href="#vp-official">[1]</a></p>


          <p>Buyers often arrive through the word “espresso,” though, and that deserves precision. A Vertuo espresso capsule creates a short, concentrated drink by spinning the capsule at high speed. Its tall foam and flavor profile are not the same as emulsified crema from a properly dialed-in portafilter shot. It can be enjoyable and works in many milk drinks, but it should be evaluated as Vertuo capsule coffee rather than graded against a claim Nespresso does not need it to fulfill.</p>
          <p>The 2026 context also changes the purchase. Nespresso still offered the VertuoPlus Deluxe in the US at $219, while De'Longhi listed the exact silver ENV155S partner version at $199 on the same check date. The newer Vertuo Up sat close enough in price to demand attention. The Up adds a newer platform and features that the Plus lacks. A discounted VertuoPlus may be the simpler value choice; a full-price Plus is no longer an automatic recommendation just because it is familiar. <a href="#vp-delonghi">[3]</a></p>
        `,
      },
      {
        id: 'setup',
        eyebrow: 'First week',
        title: 'Confirm the exact box, then learn the rinse, capsule and cup routines',
        html: `
          <p>Start with model identity. “VertuoPlus” can mean a standard or Deluxe configuration, commonly carrying ENV150 or ENV155-style numbers, with Breville or De'Longhi branding and different colors. Retailers also photograph machine-and-frother bundles next to machine-only listings. Before opening the box, match the label, tank capacity, included frother, finish, voltage and return terms to the order. A favorable review of a Deluxe bundle does not prove the cheaper listing includes the same tank or Aeroccino.</p>

          <p>Wash removable food-contact pieces according to the model manual, fill with fresh potable water and run the documented first-use rinsing procedure before drinking. The machine uses button sequences and indicator lights for rinse and maintenance modes, and those sequences can be easy to confuse from memory. Keep the exact manual bookmarked through Nespresso's support page instead of relying on a video recorded for another Vertuo model. <a href="#vp-support">[2]</a></p>
          <p>For the first week, try the supplied or introductory capsules as a tasting exercise rather than deciding that every Vertuo coffee tastes alike. Brew each at its intended default size into a cup with adequate room. Record the capsule, size, whether milk was added and whether the drink felt weak, harsh or balanced. The most useful discovery is not the highest intensity number; it is the two or three capsules that suit your normal volume.</p>


        `,
      },
      {
        id: 'workflow',
        eyebrow: 'Daily pace',
        title: 'One button is the real feature, while water, capsules and cleanup set the pace',
        html: `
          <p>Check the tank, insert a capsule, position the cup and press. Barcode control, the motorized head and the internal capsule bin make the routine particularly easy when several people want different coffees.</p>
          <p>“One touch” still has boundaries. You choose the capsule, cup and milk arrangement. You refill water, empty the used-capsule bin and drip tray, rinse the machine and descale when required. If a separate Aeroccino is part of the drink, it has its own fill limits and immediate cleaning routine. The complete latte is therefore a two-appliance workflow even though the coffee half begins with one button.</p>


          <p>A practical daily reset takes less than a minute when it is routine. Eject the last capsule rather than leaving wet coffee sealed in the head, empty standing water from the tray when needed, wipe any splashes, and check the tank for the next session. Run the manufacturer's rinse at the instructed interval and after an extended idle period. A capsule machine stays tidy because the user completes these small jobs, not because sealed coffee prevents all residue.</p>

        `,
      },
      {
        id: 'espresso',
        eyebrow: 'What reaches the cup',
        title: 'Judge the short drink as capsule extraction, not as a miniature cafe machine',
        html: `
          <p>Nespresso calls several Vertuo formats espresso or double espresso, but the VertuoPlus does not use a conventional pump-and-portafilter path. It spins the capsule and uses the printed barcode to control the recipe. The resulting foam can be abundant and persistent. Foam quantity is not evidence of fresh coffee, correct pressure or even extraction. Taste the liquid after stirring some of that layer into the drink.</p>

          <p>Independent reviewers disagree about the cup. Tom's Guide and Taste of Home emphasize easy, appealing coffee and the generous foam, while TechGearLab was more critical of consistency and beverage quality. Serious Eats separates the machine's ease from its broader reservations about Nespresso coffee. These are not contradictions that can be averaged into a laboratory score. Different capsules, water, cups and expectations matter, particularly when one reviewer expects drip-like coffee and another expects espresso. <a href="#vp-toms">[7]</a> <a href="#vp-taste">[8]</a> <a href="#vp-gearlab">[9]</a> <a href="#vp-serious-why">[6]</a></p>


          <p>This dimension receives a moderate score because the system repeats its intended capsule recipe with almost no skill, yet gives the user little way to correct a coffee they dislike. It is strong process consistency with a fixed flavor ceiling. A buyer seeking control should put the same money toward a grinder and an open brewing method, not toward accessories intended to imitate control over a sealed capsule.</p>
        `,
      },
      {
        id: 'milk',
        eyebrow: 'Milk drinks',
        title: 'Milk is optional, external and more consequential than the bundle photo suggests',
        html: `
          <p>The VertuoPlus has no steam wand or internal milk circuit. Machine-only ownership means adding cold milk, heating it another way or buying a separate frother. Many listings pair the machine with an Aeroccino, which heats and froths a limited milk batch in a separate jug. Confirm the bundle and exact frother model because product images often show accessories that the price does not include.</p>


          <p>Texture from a countertop frother is typically more uniform and foam-forward than carefully steamed microfoam. It can be pleasant for cappuccinos, iced drinks and simple lattes, but it gives less control over rolling texture for detailed latte art. An independent wand or a semi-automatic machine offers more technique and usually more cleanup. A super-automatic with a carafe integrates the sequence but introduces milk tubing or carafe maintenance.</p>

          <p>If cappuccinos are the household's main order, compare the full station with the <a href="${internalHref('/espresso-machine/philips-3200-lattego/')}">Philips 3200 LatteGo</a>, <a href="${internalHref('/espresso-machine/delonghi-magnifica-evo/')}">De'Longhi Magnifica Evo</a> and <a href="${internalHref('/espresso-machine/breville-bambino/')}">Breville Bambino Plus</a>. The question is whether you want capsule simplicity, whole-bean automation or traditional espresso with automated steaming.</p>
        `,
      },
      {
        id: 'design',
        eyebrow: 'Counter and construction',
        title: 'The movable tank and motorized head are useful, but model-family ambiguity matters',
        html: `
          <p>The adjustable tank is the VertuoPlus design idea worth caring about. It can rotate to the side or rear on compatible variants, helping the machine work around a wall, appliance or shallow counter. That flexibility does not eliminate the need to reach the tank or open the head. Measure with the chosen tank position and with the head fully open.</p>
          <p>The powered head makes capsule loading feel almost effortless. It also adds a motor and locking mechanism that a manual lever machine does not need. If the head stops moving normally, do not force it. Check power, capsule obstruction and the model-specific support instructions, then contact Nespresso when the documented recovery does not work. Owner repairs around a powered brew head can create electrical, hot-water and mechanical risk.</p>


          <p>Nespresso provides the primary machine-assistance route, while the appliance partner can appear on the rating label. Confirm which organization handles the remedy in your country and for your seller. A support page proves there is a route, not how quickly a particular repair will be completed or whether a future replacement will be the same model.</p>

        `,
      },
      {
        id: 'owners',
        eyebrow: 'Owner evidence',
        title: 'Leak and replacement threads are warnings to investigate, not a denominator',
        html: `
          <p>These posts do not provide the number of all machines sold, verified diagnoses, consistent model codes or common maintenance conditions. Several users also collapse Vertuo Next, Pop, Plus and other Vertuo products into one discussion. It would be misleading to count negative posts and state a VertuoPlus failure rate. The defensible use is to prepare for the faults owners repeatedly ask about.</p>
          <p>Before the return period closes, check the tank and counter for unexplained water, confirm that the head opens and closes smoothly, run several capsule sizes, and make sure the machine ejects capsules without damage or unusual noise. Keep the box until basic operation is proven if storage allows. Register the unit, retain the dated receipt and record the full model and serial number.</p>


          <p>The practical buying conclusion is modest. Prefer an authorized seller, understand the return window, confirm current warranty terms for the exact model and do not pay a full-price premium for a bundle with unclear identity. The closed capsule ecosystem makes service continuity particularly important because the coffee inventory has little use without a compatible machine.</p>
        `,
      },
      {
        id: 'ownership',
        eyebrow: 'Cost and care',
        title: 'Capsules dominate the ownership budget, while rinsing and descaling protect the routine',
        html: `
          <h3>Calculate capsules by your real week</h3>
          <p>A low machine price can distract from the recurring purchase. Multiply drinks per day by capsules per drink, then by the live price of the capsules you actually prefer. A two-capsule milk drink should be counted as two, not averaged down to a promotional per-capsule headline. Add shipping or a store trip where relevant. The result is not automatically bad value, but it is the honest comparison with whole beans.</p>

          <h3>Keep rinse and descale jobs separate</h3>
          <p>Rinsing moves coffee residue and refreshes the brewing path. Descaling removes mineral deposits using a manufacturer-approved procedure and product. They are not interchangeable. Follow the current VertuoPlus support instructions for the exact button sequence, tank preparation and rinse volume. Indicator behavior can be confusing when a generic online guide describes a different Vertuo machine. <a href="#vp-support">[2]</a></p>

          <h3>Recycling is a routine, not a purchasing absolution</h3>
          <p>Nespresso publishes US capsule recycling options, which may include bags, boutiques or collection partners depending on location. Check the current local instructions before accumulating capsules. Collection availability, transport and actual processing are separate from the fact that aluminum can be recycled. If the disposal routine feels burdensome before purchase, it is unlikely to improve after hundreds of drinks.</p>
          <h3>Used and refurbished machines need live proof</h3>
          <p>For a secondhand VertuoPlus, obtain the model label and a video showing cold start, head motion, brewing, ejection and a dry counter. Check the tank, lid, drip support and capsule container. Favor a written warranty and easy return over an unproven machine with bundled capsules.</p>

        `,
      },
      {
        id: 'compare',
        eyebrow: 'The 2026 shortlist',
        title: 'Compare the VertuoPlus with the newer Vertuo Up and open coffee systems',
        html: `

          ${comparisonTablesHtml('Nespresso VertuoPlus', [
            { name: 'Nespresso VertuoPlus Deluxe', href: '/espresso-machine/nespresso-vertuo-plus/', priceClass: '$199–$219 official US checks', quickDecision: 'Choose the motorized head and movable-tank Vertuo routine, preferably with a meaningful discount.', dimensions: 'Variant dependent; confirm exact ENV model', heating: 'Thermoblock-style capsule brewer', coffeeSetup: 'Vertuo capsule; barcode-controlled Centrifusion', milkWorkflow: 'None built in; separate frother by bundle', bestFor: 'Low-effort short and larger capsule coffees' },
            { name: 'Nespresso Vertuo Up', priceClass: 'About the same official tier', quickDecision: 'Choose the newer Vertuo platform when its drink and connectivity features matter.', dimensions: 'Check current regional product page', heating: 'Current quick-start Vertuo platform', coffeeSetup: 'Vertuo capsule with newer drink options', milkWorkflow: 'Separate frother', bestFor: 'A buyer entering Vertuo at full price in 2026' },
            { name: 'Breville Bambino Plus + grinder', href: '/espresso-machine/breville-bambino/', priceClass: '$499.95 machine plus grinder', quickDecision: 'Choose traditional espresso, open beans and automatic steaming.', dimensions: 'Compact brewer plus separate grinder', heating: 'ThermoJet; claimed 3-second readiness', coffeeSetup: 'Fresh-ground 54 mm portafilter', milkWorkflow: 'Automatic or manual steam; sequential', bestFor: 'Milk drinks and learning espresso' },
            { name: 'Philips 3200 LatteGo', href: '/espresso-machine/philips-3200-lattego/', priceClass: 'Discontinued; variable remaining stock', quickDecision: 'Choose integrated grinding and milk, only with a sound seller remedy.', dimensions: 'Full-size bean-to-cup appliance', heating: 'Thermoblock super-automatic system', coffeeSetup: 'Whole-bean grinder and removable brew group', milkWorkflow: 'Two-piece LatteGo carafe', bestFor: 'One-touch whole-bean milk drinks' },
            { name: 'De\'Longhi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', priceClass: 'Current super-automatic tier', quickDecision: 'Compare current whole-bean automation before buying discontinued stock.', dimensions: 'Full-size bean-to-cup appliance', heating: 'Thermoblock super-automatic system', coffeeSetup: 'Integrated grinder and automatic brew group', milkWorkflow: 'Varies by exact Evo configuration', bestFor: 'Refillable beans with one-touch operation' },
          ], 'Prices and lifecycle statements were checked in the US on September 15, 2026. VertuoPlus dimensions, tank capacity and bundle contents vary by standard or Deluxe version, appliance partner and retailer SKU.')}
          <p>The category jump matters more than many specification differences. A Bambino Plus asks you to buy and learn a grinder but opens coffee choice and produces traditional espresso. A Philips or De'Longhi super-automatic grinds whole beans internally and performs more maintenance behind the scenes. VertuoPlus is easier because the coffee arrives portioned and programmed. Choose the job you are willing to keep paying for.</p>
        `,
      },
      {
        id: 'value',
        eyebrow: 'Recommendation',
        title: 'The machine can be good value on sale, but the system must earn its recurring cost',
        html: `
          <p>At the $219 Nespresso US Deluxe price observed September 15, 2026, value is only moderate; De'Longhi's exact silver ENV155S was $199 on the same check date. The machine is polished and simple, but the newer Vertuo Up occupies a nearby price position. A discounted VertuoPlus can make sense when the adjustable tank or motorized head is specifically useful. A full-price purchase should follow a feature and lifecycle comparison, not a habit of buying the most reviewed model. <a href="#vp-delonghi">[3]</a></p>
          <p>The first-year calculation should include the exact drinks the household makes. One capsule daily is roughly 365 units; two per day is 730; a double-capsule weekend drink adds more. Multiply by current sleeve prices after selecting coffees you actually enjoy. Add a frother if necessary, descaling materials, and the possibility that a retailer bundle trades a low machine price for capsules you would not have chosen.</p>


          <p>The rating rewards repeatability, then deducts for closed supply, absent milk hardware, limited control and 2026 competition. A deep sale improves value; higher capsule costs or poor local recycling access reduce it.</p>
        `,
      },
      {
        id: 'related',
        eyebrow: 'Choose the routine',
        title: 'Four ways to remove a different coffee chore',
        html: `

          ${recommendationCardsHtml([
            { kicker: 'Fresh-ground espresso', title: 'Breville Bambino Plus', text: 'Use a separate grinder, traditional portafilter and automatic milk when cup control matters more than capsule simplicity.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the Bambino Plus review', featured: true },
            { kicker: 'Current bean-to-cup', title: 'De\'Longhi Magnifica Evo', text: 'Compare a refillable whole-bean system with automatic brewing and a current product lifecycle.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the Magnifica Evo review' },
            { kicker: 'More drinks and milk', title: 'De\'Longhi Eletta Explore', text: 'Move toward hot and cold automatic drinks when a separate frother would underserve the household.', href: '/espresso-machine/delonghi-eletta-explore-ecam450/', linkLabel: 'Read the Eletta Explore review' },
            { kicker: 'Premium automatic', title: 'Jura E8', text: 'Compare a higher-cost bean-to-cup platform when coffee supply freedom and integrated milk matter.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read the Jura E8 review' },
          ])}
        `,
      },
      {
        id: 'faq',
        eyebrow: 'Questions before checkout',
        title: 'Nespresso VertuoPlus FAQ',
        html: faqHtml([
          { question: 'Is Nespresso VertuoPlus still current in 2026?', answer: 'Yes in the US evidence checked September 15, 2026. Nespresso still listed a VertuoPlus Deluxe, although the newer Vertuo Up now competes in a similar price band.' },
          { question: 'What is the difference between VertuoPlus and VertuoPlus Deluxe?', answer: 'Deluxe versions generally add a larger tank and premium finish details, but maker, color and bundle differences are common. Confirm the exact model code and included accessories.' },
          { question: 'Can VertuoPlus make regular coffee?', answer: 'It makes several larger Vertuo capsule formats as well as short drinks. The cup character is Vertuo capsule coffee, not the same as drip, pour-over or an Americano from traditional espresso.' },
          { question: 'Can I use reusable capsules?', answer: 'Nespresso specifies Vertuo capsules and barcode-led recipes. Third-party reuse methods are outside the documented system and can create compatibility, performance, mess or support problems.' },
          { question: 'Does VertuoPlus have Expert Mode?', answer: 'The older VertuoPlus platform does not offer the newer Expert Mode found on selected current Vertuo machines. Confirm regional features if that function is important.' },
          { question: 'How often should I descale it?', answer: 'Follow the matching support guidance and machine alert for your model and water conditions. Rinsing is not descaling, and a generic schedule from another Vertuo model can be wrong.' },
          { question: 'Is an Aeroccino included?', answer: 'Only in listings explicitly sold as a machine-and-frother bundle. Product photography is not proof. Check the box contents and exact offer.' },
          { question: 'Is VertuoPlus cheaper than whole-bean coffee?', answer: 'That depends on your capsule, bean and drink choices. Calculate annual capsules at your real daily use. The machine can cost less up front while costing more per serving.' },
        ]),
      },
    ],
    sources: [
      { id: 'vp-official', label: 'Nespresso US VertuoPlus product page', href: 'https://www.nespresso.com/us/en/vertuoplus', note: 'Current US family identity and $219 VertuoPlus Deluxe listing observed September 15, 2026. Finish, maker, tank and bundle can vary.' },
      { id: 'vp-support', label: 'Nespresso VertuoPlus machine assistance', href: 'https://www.nespresso.com/us/en/machine-assistance/vertuo-plus', note: 'Official manual, first-use, cleaning, descaling and troubleshooting route for the VertuoPlus family.' },
      { id: 'vp-delonghi', label: 'De\'Longhi ENV155S VertuoPlus Deluxe product page', href: 'https://www.delonghi.com/en-us/p/vertuoplus-nespresso-vertuo-plus-deluxe-coffee-and-espresso-machine-by-de-longhi--silver/ENV155S.html', note: 'Official exact silver ENV155S appliance-partner variant, listed at $199 on September 15, 2026. Its exact specifications should not be assigned to every VertuoPlus.' },
      { id: 'vp-recycle', label: 'Nespresso US capsule recycling information', href: 'https://www.nespresso.com/us/en/how-to-recycle-coffee-capsules', note: 'Current official route for checking local collection options. Availability and accepted methods vary by location.' },
      { id: 'vp-serious-best', label: 'Serious Eats, best Nespresso machines', href: 'https://www.seriouseats.com/best-nespresso-machines-8695006', note: 'Comparative hands-on context for simple operation, adjustable tray and tank. Prices in the article are historical, not this review\'s current-price source.' },
      { id: 'vp-serious-why', label: 'Serious Eats, Nespresso machine review and critique', href: 'https://www.seriouseats.com/nespresso-coffee-machine-review-6265400', note: 'Independent system-level cup and value critique. Its taste judgments remain the author\'s.' },
      { id: 'vp-toms', label: 'Tom\'s Guide Nespresso VertuoPlus review', href: 'https://www.tomsguide.com/reviews/nespresso-vertuo-plus-review', note: 'Hands-on workflow, cup and older-platform feature context. Its 2022 price is historical.' },
      { id: 'vp-taste', label: 'Taste of Home Nespresso VertuoPlus review', href: 'https://www.tasteofhome.com/article/nespresso-vertuo-plus-review/', note: 'Independent use perspective updated June 22, 2026. Its beverage impressions are not Coffeedant measurements.' },
      { id: 'vp-gearlab', label: 'TechGearLab Nespresso VertuoPlus review', href: 'https://www.techgearlab.com/reviews/kitchen/coffee-maker/nespresso-vertuoplus', note: 'Comparative testing and more critical beverage-consistency view. Results belong to its unit and protocol.' },
      { id: 'vp-homecoffee', label: 'Home Coffee Expert Nespresso VertuoPlus review', href: 'https://homecoffeeexpert.com/nespresso-vertuo-plus-review/', note: 'Independent ownership and workflow context used as a fifth review perspective.' },
      { id: 'vp-video', label: 'Tiffany Reviews, VertuoPlus two-year video', href: 'https://www.youtube.com/watch?v=EYxpkQb_MIw', note: 'Longer-term owner demonstration published January 2, 2022. Anecdotal unit history, not a durability study.' },
      { id: 'vp-owner-issues', label: 'r/nespresso VertuoPlus issue discussion', href: 'https://www.reddit.com/r/nespresso/comments/hhxr24/anyone_else_had_issues_with_nespresso_vertuoplus/', note: 'Self-selected owner reports about operation and faults. No denominator or verified diagnosis.' },
      { id: 'vp-owner-longterm', label: 'r/nespresso Vertuo long-term discussion', href: 'https://www.reddit.com/r/nespresso/comments/1p8raur/are_any_of_the_vertuos_working_properly_longterm/', note: 'Mixed owner anecdotes across Vertuo models. Used only to frame questions, not estimate reliability.' },
      { id: 'vp-owner-replacements', label: 'r/nespresso repeated-replacement discussion', href: 'https://www.reddit.com/r/nespresso/comments/1lnsfhd/4_machines_in_2_years_anyone_else_having_bad/', note: 'Individual reports of replacements and faults. Exact models and causes vary.' },
    ],
    finalTitle: 'The final verdict',
    finalVerdict: [
      'Buy the VertuoPlus when one-button operation, easy decaf switching and several capsule sizes are worth joining the Vertuo ecosystem. Its adjustable tank and motorized head make a genuinely pleasant everyday appliance.',
      'Skip it when “espresso” means a dialed-in portafilter shot, when milk should be integrated, or when annual capsule spend already feels uncomfortable. At the $199–$219 official Deluxe prices checked September 15, 2026, compare the newer Vertuo Up directly and prefer the Plus when its design or a meaningful discount gives it a clear reason to win.',
    ],
  },
  video: {
    id: 'EYxpkQb_MIw',
    title: '2 YEARS LATER! Nespresso Vertuo Plus Coffee Maker review',
    creator: 'Tiffany Reviews',
    published: '2022-01-02',
    note: 'A two-year owner demonstration that adds use and cleaning context. It represents one machine and household, not Coffeedant testing or population-level reliability evidence.',
  },
  dimensions: [
    {
      id: 'espresso', score: 6.8,
      reason: 'It repeats barcode-led short capsule drinks easily, but the result and foam are not traditional portafilter espresso and user correction is limited.',
      buyerMeaning: 'Good when you already like Vertuo short drinks; a poor substitute for buyers seeking dose, yield and grind control.',
      evidenceStatus: 'Documented capsule process with mixed independent cup assessments',
      sourceIds: ['vp-official', 'vp-toms', 'vp-taste', 'vp-gearlab', 'vp-serious-why'],
      deepDiveId: 'espresso', title: 'How to read Vertuo short-drink performance',
      intro: ['The score evaluates the capsule beverage the machine actually makes. It does not award traditional-espresso credit for foam volume or subtract points merely because the process is different.'],
      evidence: [
        { signal: 'Extraction method', evidence: 'Vertuo capsules carry a barcode and spin during the programmed brew.', decision: 'Choose it for a fixed repeatable recipe, not manual espresso control.' },
        { signal: 'Cup character', evidence: 'Independent reactions range from appealing and convenient to criticism of consistency and foam-led flavor.', decision: 'Taste Vertuo coffee before buying if flavor matters more than workflow.' },
      ],
      diagnosis: [
        { signal: 'Short drink tastes thin', guidance: 'Use the capsule default, preheat the cup and try a different capsule before adding more water.' },
        { signal: 'Foam tastes bitter', guidance: 'Stir the beverage and judge the liquid; choose another capsule if the underlying cup remains harsh.' },
      ],
      note: 'Coffeedant did not measure temperature, concentration or repeatability on a VertuoPlus. Reviewer observations remain attributed in the source ledger.',
    },
    {
      id: 'milk', score: 3.5,
      reason: 'The machine has no milk hardware. Bundled Aeroccino frothers are simple but external and create a separate cleaning path.',
      buyerMeaning: 'Fine for occasional milk added separately; weak when integrated cappuccinos or steam texture are central.',
      evidenceStatus: 'Documented absence; bundle contents vary',
      sourceIds: ['vp-official', 'vp-toms', 'vp-homecoffee'],
      deepDiveId: 'milk', title: 'What a VertuoPlus milk routine actually includes',
      intro: ['Judge the entire drink station. A machine-and-frother photo can hide that coffee and milk remain two separate cycles with two pieces of equipment.'],
      evidence: [
        { signal: 'Machine-only purchase', evidence: 'VertuoPlus has no steam wand or internal milk system.', decision: 'Budget for another method if hot or textured milk is expected.' },
        { signal: 'Aeroccino bundle', evidence: 'Selected bundles add a separate electric frother; offers differ.', decision: 'Confirm box contents and compare the full bundle price.' },
      ],
      diagnosis: [
        { signal: 'Milk overwhelms the drink', guidance: 'Reduce milk or select a capsule intended to remain present in milk.' },
        { signal: 'Frother cleanup grows', guidance: 'Clean the separate vessel and whisk immediately within its manual instructions.' },
      ],
    },
    {
      id: 'workflow', score: 9.6,
      reason: 'Barcode recognition, one-button brewing, a motorized head and automatic ejection make the core routine exceptionally easy.',
      buyerMeaning: 'One of the strongest choices for low-skill single servings, though each capsule and any milk still run sequentially.',
      evidenceStatus: 'Documented design, consistently praised independently',
      sourceIds: ['vp-official', 'vp-serious-best', 'vp-toms', 'vp-taste'],
      deepDiveId: 'workflow', title: 'Where one-button convenience begins and ends',
      intro: ['The machine removes recipe and puck-preparation work. Water, capsule inventory, cup placement, spent-capsule handling and any external milk still belong to the owner.'],
      evidence: [
        { signal: 'Starting a drink', evidence: 'Insert one Vertuo capsule and press one brew button.', decision: 'Very approachable for mixed-skill households and guests.' },
        { signal: 'Changing coffee', evidence: 'Regular, decaf and different styles switch capsule by capsule.', decision: 'No hopper purge makes variety unusually easy.' },
      ],
      diagnosis: [
        { signal: 'Morning still feels cluttered', guidance: 'Reduce capsule variety, give used capsules a fixed destination and stage the cup support.' },
        { signal: 'Frequent tank refills', guidance: 'Confirm the tank is fully seated and that the selected standard or Deluxe capacity fits actual drink volume.' },
      ],
    },
    {
      id: 'build', score: 7.8,
      reason: 'The adjustable tank and powered head are thoughtful, but the powered mechanism adds complexity and family variants complicate exact specifications.',
      buyerMeaning: 'Good domestic ergonomics, with service and return terms more important than cosmetic finish.',
      evidenceStatus: 'Documented externals; long-term incidence unknown',
      sourceIds: ['vp-official', 'vp-support', 'vp-delonghi', 'vp-owner-issues', 'vp-owner-longterm'],
      deepDiveId: 'design', title: 'Build quality translated into ownership questions',
      intro: ['The useful assessment is not metal versus plastic. It is whether the exact machine fits, moves and seals correctly, plus what happens when the motorized brew head needs support.'],
      evidence: [
        { signal: 'Tank placement', evidence: 'The movable tank can adapt to different counters on relevant variants.', decision: 'Measure the working position and refill access, not only the footprint.' },
        { signal: 'Motorized head', evidence: 'Powered opening and closing reduce force but add a mechanism.', decision: 'Do not force a stuck head; preserve the seller and support remedy.' },
      ],
      diagnosis: [
        { signal: 'Water appears on the counter', guidance: 'Stop, identify tank or tray overflow versus an internal leak, and use official support when unexplained.' },
        { signal: 'Head motion changes', guidance: 'Remove obvious obstruction only as documented and never force the powered mechanism.' },
      ],
    },
    {
      id: 'features', score: 7.4,
      reason: 'The useful physical features are strong, but the older platform omits newer Vertuo functions and exposes almost no brew control.',
      buyerMeaning: 'Feature-rich for convenience, sparse for experimentation.',
      evidenceStatus: 'Current family documentation and independent comparison',
      sourceIds: ['vp-official', 'vp-support', 'vp-toms'],
      deepDiveId: 'orientation', title: 'Features that change a repeated task',
      intro: ['VertuoPlus features are valuable when they reduce handling. They should not be mistaken for controls over extraction.'],
      evidence: [
        { signal: 'Barcode brewing', evidence: 'The capsule selects the programmed recipe automatically.', decision: 'Helpful for consistency, restrictive for custom recipes.' },
        { signal: 'Powered head', evidence: 'Opening and closing are motorized.', decision: 'Useful for low-force operation, with additional mechanism complexity.' },
        { signal: 'Movable tank', evidence: 'Tank position can adapt to a counter on the relevant configuration.', decision: 'A real installation benefit when rear depth is limited.' },
      ],
      diagnosis: [
        { signal: 'You want to tune extraction', guidance: 'Choose an open coffee system; VertuoPlus deliberately automates that decision.' },
        { signal: 'You want app or newer drink functions', guidance: 'Confirm the current Vertuo Up or another compatible model instead.' },
      ],
    },
    {
      id: 'value', score: 7.0,
      reason: 'Machine promotions can be attractive, but full-price competition and recurring capsule cost make value usage-dependent.',
      buyerMeaning: 'Strong for low-volume convenience after tasting the coffee; weaker for high daily volume or buyers entering Vertuo at full price.',
      evidenceStatus: 'Dated official price plus recurring-cost analysis',
      sourceIds: ['vp-official', 'vp-recycle', 'vp-serious-best', 'vp-serious-why'],
      deepDiveId: 'value', title: 'Price the system rather than the appliance',
      intro: ['Machine cost is the entry ticket. Capsule use, chosen drink size, milk equipment and local recycling routine determine whether the system remains good value.'],
      evidence: [
        { signal: 'Official machine price', evidence: "$219 from Nespresso and $199 for De'Longhi's exact silver ENV155S on September 15, 2026.", decision: 'Compare the newer Vertuo Up and wait for a clear reason or discount.' },
        { signal: 'Recurring input', evidence: 'Every drink uses a proprietary Vertuo capsule, sometimes more than one.', decision: 'Calculate annual cost from the drinks you will actually make.' },
      ],
      diagnosis: [
        { signal: 'Machine deal looks unusually cheap', guidance: 'Check whether bundle, subscription, capsule credit or seller terms explain the price.' },
        { signal: 'Two capsules become normal', guidance: 'Recalculate annual use before treating the drink as an inexpensive latte.' },
      ],
      note: "The score uses the $199–$219 official US Deluxe prices observed on the check date. Retailer promotions and capsule prices change.",
    },
  ],
});

// Canonical identity: Breville Barista Touch BES880BSS / CD-EM-000122.
// This is the original Barista Touch, not the later Barista Touch Impress BES881.
export const brevilleBaristaTouchReview: MachineReviewData = buildResearchReview({
  slug: '/espresso-machine/breville-barista-touch-bes880bss/',
  productId: 'CD-EM-000122',
  brand: 'Breville',
  model: 'Barista Touch',
  sku: 'BES880BSS',
  category: 'Assisted semi-automatic espresso machine with integrated grinder',
  brandPath: '/breville/',
  title: 'Breville Barista Touch review: guided drinks, manual puck work',
  description: 'A research-led Breville Barista Touch BES880 review covering its touchscreen, 30-step grinder, Auto MilQ, espresso workflow, upkeep and current alternatives.',
  verdictLabel: 'Best for guided milk drinks',
  verdict: 'The Barista Touch is a strong bridge between manual espresso and one-touch convenience. Its touchscreen, quick ThermoJet heater and automatic milk system make lattes approachable, but it still asks you to dose, distribute, tamp, move and clean a 54 mm portafilter. At $999.95, buy it when guided recipes and Auto MilQ will serve several users. If puck preparation is the chore you want removed, compare the Barista Touch Impress instead.',
  assessment: 'An approachable all-in-one for milk drinks whose screen guides the routine without turning it into bean-to-cup automation.',
  image: 'images/products/breville-barista-touch-bes880bss.png',
  imageAlt: 'Breville Barista Touch BES880 espresso machine with touchscreen and integrated grinder',
  published: '2025-10-02',
  updated: '2026-09-15',
  authorNote: 'I focused on the gap between what the touchscreen suggests and what the machine actually automates. The Barista Touch can guide a beginner beautifully, but the quality of the espresso still depends on hands-on coffee preparation.',
  basisDisclosure: 'This is a research-led editorial assessment built from the current US BES880 product page, 2026 instruction book, support and parts routes, five independent hands-on perspectives, one five-year owner review and separate community discussions. Coffeedant has not physically tested this machine. External measurements and recipes remain attributed, and owner anecdotes are not defect-rate evidence.',
  price: {
    label: 'Breville US price',
    msrp: '$999.95',
    typical: 'Listed with an add-to-cart control; color and retailer promotions vary',
    currency: 'USD',
    numeric: '999.95',
    checked,
  },
  links: [
    { label: 'Check Amazon price', href: 'https://www.amazon.com/Breville-BES880BSS-Barista-Espresso-Stainless/dp/B078WMLXXG?th=1', note: 'Affiliate retailer · confirm BES880, color and seller', affiliate: true, primary: true },
    { label: 'Check Breville price', href: 'https://www.breville.com/en-us/product/bes880', note: 'Official US product page' },
  ],
  facts: [
    { label: 'Machine type', value: 'Assisted semi-automatic with integrated grinder' },
    { label: 'Heating', value: 'ThermoJet with PID control' },
    { label: 'Portafilter', value: '54 mm stainless steel; 18 g target system' },
    { label: 'Grinder', value: 'Integrated conical burr; 30 external settings' },
    { label: 'Milk', value: 'Automatic Auto MilQ or manual steaming' },
    { label: 'Profiles', value: 'Up to 8 personalized drink settings' },
  ],
  quickAnswers: [
    { question: 'Is it fully automatic?', answer: 'No. It grinds into a removable portafilter. You still distribute and tamp the coffee, lock in the portafilter, start extraction, then empty and clean it.' },
    { question: 'Which Touch is this?', answer: 'The US Barista Touch BES880. It is not the BES881 Barista Touch Impress, which adds assisted dosing and tamping.' },
    { question: 'Can it brew and steam together?', answer: 'No. The ThermoJet system handles coffee and milk sequentially. The transition is quick, but the two jobs do not overlap.' },
    { question: 'How automatic is the milk?', answer: 'Select temperature and texture, place the supplied jug on the sensor and start. The machine stops automatically; you still fill, position, pour, wipe and purge.' },
    { question: 'Does three-second heat-up mean a three-second drink?', answer: 'No. That is Breville\'s heater-readiness claim. Grinding, puck preparation, cup and portafilter warming, extraction, milk and cleanup take additional time.' },
    { question: 'Is it current in the US?', answer: 'Yes. Breville listed the BES880 with an add-to-cart control at $999.95 on September 15, 2026.' },
  ],
  bestFor: [
    'A latte or cappuccino household that wants automatic milk and touchscreen guidance',
    'Several users who prefer saved drinks but accept manual portafilter preparation',
    'Someone who values a quick, integrated station more than a separate grinder upgrade path',
  ],
  avoidIf: [
    'You expect a one-button bean-to-cup drink or want assisted tamping',
    'You change beans frequently or want a highly adjustable separate espresso grinder',
    'You need simultaneous brewing and steaming for a regular drink queue',
  ],
  pros: [
    'Clear touchscreen recipes with up to eight personalized drinks',
    'Fast ThermoJet readiness and automatic milk temperature and texture',
    'Current grinder has 30 settings and a dosing funnel is included',
    'Single-wall and dual-wall baskets support fresh-ground and preground starts',
  ],
  cons: [
    'Manual distribution and tamping remain between the screen steps',
    'Integrated grinder doses by time rather than verified weight',
    'Espresso and milk are sequential rather than simultaneous',
    'All-in-one design couples grinder and brewer repair or replacement decisions',
  ],
  alternatives: [
    { name: 'Breville Barista Touch Impress', reason: 'Add assisted dosing and tamping when puck preparation is the missing automation.', href: '/espresso-machine/breville-barista-touch-impress-bes881/' },
    { name: 'Breville Barista Pro', reason: 'Keep the quick heater and 30-step grinder while replacing automatic milk with manual control.', href: '/espresso-machine/breville-barista-pro-bes878/' },
    { name: 'Breville Bambino Plus', reason: 'Separate the grinder and retain automatic milk in a more flexible system.', href: '/espresso-machine/breville-bambino/' },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. The primary sources are Breville's current US BES880 page, the 2026 US/Canada/Mexico instruction book, official support hub, warranty terms and model parts route. I treated the manual as authority for operation and care, while treating manufacturer performance language as a claim rather than independent proof.</p>
      <p>Independent context comes from Food & Wine's five-year ownership review, Coffeeness, Coffee Kev, Lifestyle Lab and Home Coffee Expert. Their use conditions, shot recipes and conclusions remain theirs. Community evidence comes from r/espresso, ProductReview Australia and Best Buy customer pools. These sources contain useful workflow, consistency and fault reports but no controlled denominator, so they cannot establish prevalence. Price and US availability were checked September 15, 2026. Exact warranty duration for every seller, internal-parts availability, repair cost and population-level lifespan remain unresolved.</p>
    `,
    sections: [
      {
        id: 'orientation',
        eyebrow: 'The category truth',
        title: 'The screen automates decisions, not the portafilter work',
        html: `
          <p>Breville markets the Barista Touch as an automatic espresso machine, but its physical workflow is assisted semi-automatic. The grinder deposits coffee into a 54 mm portafilter. A person settles the grounds, tamps, removes the dosing funnel, locks the portafilter into the group, starts the shot, then knocks out and rinses the basket. The screen tells you what happens next; it does not move the coffee through those steps.</p>

          <p>The current BES880 is also different from the Barista Touch Impress BES881. The Impress adds assisted dosing and a tamp lever, while this model leaves both distribution and tamping manual. The original Touch does include a dosing funnel, which reduces spill during grinding and puck preparation, but pressure and level still come from the user. Retailer titles sometimes omit the model number, so confirm BES880 on the offer.</p>
          <p>At $999.95 on Breville's US page, the value is not merely the touchscreen. The package includes a current 30-setting grinder, ThermoJet heating, adjustable brew temperature, automatic milk, dedicated hot water, a 54 mm stainless-steel portafilter and a broad starter kit. It is a coordinated station. The cost also buys two appliance systems in one chassis, which narrows the upgrade path and makes service of either system a whole-machine concern. <a href="#bt-official">[1]</a></p>

        `,
      },
      {
        id: 'setup',
        eyebrow: 'First week',
        title: 'Use the guided setup, but establish one measured recipe outside the screen',
        html: `
          <p>The touchscreen walks through water hardness, filter installation and drink setup, which is one of this machine's real strengths. Follow the exact 2026 manual during first use. Soak the supplied water filter for five minutes, fit it to the holder, set the change reminder and fill the rear two-liter tank with suitable cold water. Breville advises against distilled, demineralized or highly filtered water. The manual's filter guidance is tied to use and water conditions, so do not turn one calendar reminder into a universal water rule. <a href="#bt-manual">[2]</a></p>

          <p>Pick one forgiving medium roast and use the double single-wall basket. Weigh the dry dose even though the grinder operates by time. Start around the machine's 18 g design target, then weigh the beverage and stop near a two-to-one ratio. This is Coffeedant starting guidance, not a measured BES880 recipe. If the result runs fast and tastes thin or sharply sour, grind finer. If it barely flows and tastes harsh or dry, grind coarser. Change one variable at a time.</p>


        `,
      },
      {
        id: 'grinder',
        eyebrow: 'Coffee preparation',
        title: 'Thirty settings are useful, while timed dosing remains the daily variable',
        html: `
          <p>The current US Barista Touch page specifies hardened-steel precision conical burrs and 30 external grind settings. The hopper holds about 250 g, and the screen stores a grind duration rather than weighing each dose. That is a meaningful improvement in adjustment range over older 16-step Breville grinders, but it is not a grind-by-weight system. <a href="#bt-official">[1]</a> <a href="#bt-manual">[2]</a></p>
          <p>Timed output can change when grind size, bean density, hopper level or coffee age changes. The machine cannot see whether 15 seconds produced 17.2 or 18.6 grams. Weigh frequently while a coffee is new, then use the timer as a convenient repeat once output stabilizes. If dose drifts, correct the time rather than forcing the tamp harder to compensate.</p>





        `,
      },
      {
        id: 'espresso',
        eyebrow: 'In the cup',
        title: 'The brewer is capable, but a saved drink cannot rescue poor puck preparation',
        html: `
          <p>Breville documents low-pressure pre-infusion followed by 9-bar extraction from a 15-bar pump, a PID-controlled ThermoJet system, a 54 mm portafilter and an 18 g target dose. The touchscreen supplies timed and volumetric guidance, and the menu allows brew-temperature adjustment around the factory setting. These are credible espresso controls. They still operate on whatever puck the user presents. <a href="#bt-official">[1]</a></p>
          <p>A useful baseline is 18 g in and about 36 g out for a medium roast, with the beverage weighed rather than inferred from the two-cup icon. Taste after the shot cools slightly. A quick, pale, sharp cup usually points toward a finer grind or better distribution. A slow, dark, drying cup points toward a coarser grind, lower dose or shorter contact. Keep dose and target yield still while making the first grind change.</p>




        `,
      },
      {
        id: 'milk',
        eyebrow: 'Auto MilQ',
        title: 'Automatic texture is the strongest reason to choose the Touch over the Pro',
        html: `
          <p>Auto MilQ lets the user choose a target temperature from 104°F to 167°F and one of eight texture levels, then monitors the supplied jug on the temperature sensor and stops automatically. The wand also supports manual steaming. This gives a household a low-skill default and a path to more direct texture control without changing machines. <a href="#bt-official">[1]</a></p>



          <p>The main pace limitation is sequential heating. The Touch cannot brew and steam at the same time. ThermoJet changes mode quickly, so one drink feels efficient, but a queue still waits for every shot and milk cycle. The Oracle Touch's dual boilers overlap those jobs, while the Barista Pro keeps sequential operation and asks the user to steam manually.</p>

        `,
      },
      {
        id: 'workflow',
        eyebrow: 'Daily use',
        title: 'The touchscreen reduces memory load more than it reduces the number of jobs',
        html: `


          <p>A realistic latte workflow is: warm cup and portafilter as needed, weigh and grind, distribute, tamp, lock in, extract, knock and rinse, fill and position the milk jug, run Auto MilQ, pour, wipe and purge. Some steps can be staged while the screen advances, but coffee and steam remain sequential. The three-second ThermoJet claim removes waiting for initial heater readiness, not the work around it.</p>


          <p>At the end, remove coffee from the basket, rinse and dry handled parts, wipe the group edge, clean the wand and empty the tray when the indicator or purge volume requires it. A guided screen lowers the chance of forgetting a maintenance cycle, but daily hygiene remains physical. Owners who dislike wet pucks and loose grounds should move to a true bean-to-cup machine rather than expect more screen automation to erase them.</p>
        `,
      },
      {
        id: 'design',
        eyebrow: 'Counter and service',
        title: 'A compact all-in-one still needs hopper, tank and repair space',
        html: `
          <p>Breville lists the BES880 at 15.7 × 12.6 × 12.4 inches under W × D × H. That axis order looks unusual beside some retailer diagrams, so use the manufacturer's labels as published but verify a tight cabinet against the actual unit. The bean hopper needs overhead clearance, the rear tank needs a refill path, the portafilter swings at the front and the tray pulls forward. <a href="#bt-official">[1]</a></p>


          <p>Food & Wine's five-year account is valuable because it reports continued household use rather than a short trial, along with the large footprint and upkeep the writer noticed. Community discussions add machines that work well, inconsistent-shot complaints and isolated faults. Neither source type provides the denominator needed for a lifespan promise. <a href="#bt-foodwine">[5]</a> <a href="#bt-owner-productreview">[14]</a></p>

        `,
      },
      {
        id: 'owners',
        eyebrow: 'Community evidence',
        title: 'Owner reports clarify the learning curve, while their fault stories remain anecdotal',
        html: `
          <p>The r/espresso thread reviewed here includes Barista Touch users discussing grinder purging, temperature settings, quick early success, inconsistent back-to-back shots and machines that remained in use for years. Another r/espresso troubleshooting thread documents an owner struggling with sour shots despite fresh darker coffee. ProductReview Australia and Best Buy add separate retailer and regional owner pools with both positive and critical reports. <a href="#bt-owner-espresso">[12]</a> <a href="#bt-owner-sour">[13]</a> <a href="#bt-owner-productreview">[14]</a> <a href="#bt-owner-bestbuy">[15]</a></p>
          <p>These communities have different audiences and still share a selection problem. Enthusiasts are more likely to discuss dialing in and modifications; support seekers are more likely to post when a machine fails; delighted owners may appear after a new purchase and never update. There is no verified sales count or consistent diagnostic process. The threads can identify patterns of questions, not the probability of an outcome.</p>

          <p>Fault discussions include weak steam, grinder trouble, flow errors and corrosion observations. Exact models, water, cleaning and diagnoses vary. Do not open a powered, pressurized machine or follow undocumented internal adjustments merely because a thread reports success. Photograph symptoms, retain the error text and contact Breville while the seller remedy is still available.</p>
        `,
      },
      {
        id: 'ownership',
        eyebrow: 'After the first month',
        title: 'Water, filters, cleaning and a two-system service plan belong in the price',
        html: `
          <h3>Separate daily cleaning from prompted cycles</h3>
          <p>After each session, clear the basket, rinse the portafilter, wipe the group area, clean and purge the wand, and remove loose grounds from the grinder cradle. Empty the tray before automatic purge water reaches the limit. These small jobs prevent dried milk and coffee oil from becoming a larger maintenance problem.</p>

          <h3>Use the filter reminder as guidance, not a substitute for water knowledge</h3>
          <p>The current manual says to soak the filter for five minutes and recommends replacement after three months or 10.6 US gallons / 40 liters, with water quality and use still relevant. It also warns against distilled or demineralized water. Know the water entering the tank and follow regional instructions. A filter does not make every source safe from scale or every bottled water suitable.</p>
          <h3>Plan for grinder and brewer downtime together</h3>

          <h3>Buying used requires a complete drink demonstration</h3>
          <p>Ask a used seller to start from cold, grind a weighed dose, pull a shot, dispense hot water and run automatic milk with the supplied jug. Confirm touchscreen response, grinder sound, tank seating, steam output and absence of leaks. Check that the portafilter, four baskets, funnel, jug, filter holder, cleaning disc and tools match the listing. Missing accessories are replaceable only if their cost and fit are understood.</p>

        `,
      },
      {
        id: 'compare',
        eyebrow: 'Choose the missing automation',
        title: 'Touch versus Touch Impress, Pro, Oracle and a separate-grinder setup',
        html: `

          ${comparisonTablesHtml('Breville Barista Touch BES880', [
            { name: 'Barista Touch BES880', href: '/espresso-machine/breville-barista-touch-bes880bss/', priceClass: '$999.95 official check', quickDecision: 'Choose screen guidance and automatic milk while keeping manual puck control.', dimensions: '15.7 × 12.6 × 12.4 in (official W×D×H label)', heating: 'ThermoJet with PID; sequential', coffeeSetup: '30-step grinder; manual distribution and tamp', milkWorkflow: 'Auto MilQ or manual steam', bestFor: 'Guided lattes for a shared household' },
            { name: 'Barista Touch Impress BES881', href: '/espresso-machine/breville-barista-touch-impress-bes881/', priceClass: 'Higher current tier', quickDecision: 'Pay to reduce dose and tamp inconsistency.', dimensions: 'Check current BES881 page', heating: 'ThermoJet; sequential', coffeeSetup: 'Integrated grinder with intelligent dosing and assisted tamp', milkWorkflow: 'Auto MilQ or manual', bestFor: 'Users who want less puck-prep technique' },
            { name: 'Barista Pro BES878', href: '/espresso-machine/breville-barista-pro-bes878/', priceClass: '$849.95 official check', quickDecision: 'Save money and steam manually while keeping speed and grinder range.', dimensions: '16.1 × 13.8 × 13.1 in (official W×D×H label)', heating: 'ThermoJet; sequential', coffeeSetup: '30-step grinder; manual distribution and tamp', milkWorkflow: 'Manual steam wand', bestFor: 'A hands-on owner who does not need touch recipes' },
            { name: 'Oracle Touch BES990', href: '/espresso-machine/breville-oracle-touch-bes990/', priceClass: 'Discontinued; secondary-market pricing', quickDecision: 'Choose only with a strong remedy when 58 mm auto tamp and simultaneous steam matter.', dimensions: '16.2 × 15.2 × 14.4 in (official W×D×H label)', heating: 'Dual boiler with heated group', coffeeSetup: '45-step grinder; automatic dose and tamp', milkWorkflow: 'Auto MilQ; simultaneous capability', bestFor: 'Faster automated portafilter service' },
            { name: 'Bambino Plus + grinder', href: '/espresso-machine/breville-bambino/', priceClass: '$499.95 machine plus grinder', quickDecision: 'Separate the grinder while retaining automatic milk.', dimensions: 'Compact brewer plus chosen grinder', heating: 'ThermoJet; sequential', coffeeSetup: 'Separate grinder; manual puck preparation', milkWorkflow: 'Automatic or manual', bestFor: 'Upgrade flexibility and a smaller brewer' },
          ], 'Official prices, lifecycle and manufacturer dimensions were checked September 15, 2026. Retail promotions and dimensions by color or regional model can change; confirm the exact offer.')}
          <p>The right step depends on the repeated annoyance. If milk technique is the problem, BES880 solves it. If inconsistent tamping or countertop grounds are the problem, Touch Impress goes farther. If automatic milk is unnecessary, Pro can preserve much of the coffee hardware for less. If several drinks must move quickly, a dual-boiler Oracle-class machine changes cadence, but current support and product lifecycle matter more than a tempting used price.</p>
        `,
      },
      {
        id: 'value',
        eyebrow: 'The complete budget',
        title: 'A thousand dollars makes sense only when the integrated workflow stays intact',
        html: `
          <p>Breville US showed $999.95 with an add-to-cart control on September 15, 2026. That is the price reference for this review, not a claim about every color or retailer promotion. Confirm BES880 rather than Touch Impress, plus seller, return terms, bundle and accessories before comparing a lower offer. <a href="#bt-official">[1]</a></p>


          <p>The value weakens sharply if a separate grinder arrives immediately. The brewer can accept coffee from one, but the built-in hopper and burrs still occupy the machine. Buyers already curious about single dosing, frequent bean changes or lighter-roast adjustment should price a Bambino Plus, Dual Boiler or another grinder-free machine with the grinder they actually want.</p>

          <p>Value is strongest when several users save milk preferences, the same beans stay in the hopper, and the station replaces regular cafe purchases without requiring a second grinder. It is weakest for espresso-only specialists, one-button seekers or high-volume hosts. A premium screen earns its price by supporting the ordinary drink, not by looking advanced when idle.</p>
        `,
      },
      {
        id: 'related',
        eyebrow: 'Where to go next',
        title: 'Pick the Breville that removes your actual bottleneck',
        html: `

          ${recommendationCardsHtml([
            { kicker: 'More puck help', title: 'Breville Barista Touch Impress', text: 'Keep the touchscreen and Auto MilQ while adding intelligent dosing and an assisted tamp lever.', href: '/espresso-machine/breville-barista-touch-impress-bes881/', linkLabel: 'Read the Touch Impress review', featured: true },
            { kicker: 'Less screen, manual milk', title: 'Breville Barista Pro', text: 'Retain ThermoJet speed and the 30-setting grinder when manual steaming is welcome.', href: '/espresso-machine/breville-barista-pro-bes878/', linkLabel: 'Read the Barista Pro review' },
            { kicker: 'Separate grinder', title: 'Breville Bambino Plus', text: 'Keep automatic milk while choosing a grinder that can follow future machine upgrades.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the Bambino Plus review' },
            { kicker: 'Manual dual boiler', title: 'Breville Dual Boiler', text: 'Choose simultaneous espresso and steam, 58 mm tools and deeper manual control when pace matters.', href: '/espresso-machine/breville-dual-boiler-bes920xl/', linkLabel: 'Read the Dual Boiler review' },
          ])}
        `,
      },
      {
        id: 'faq',
        eyebrow: 'Questions before checkout',
        title: 'Breville Barista Touch BES880 FAQ',
        html: faqHtml([
          { question: 'Is the Breville Barista Touch a super-automatic?', answer: 'No. It guides drinks and automates milk, but coffee is ground into a removable portafilter that you distribute, tamp, insert, empty and clean.' },
          { question: 'What is the difference between Barista Touch and Touch Impress?', answer: 'The BES881 Touch Impress adds assisted dosing and tamping. This BES880 review covers the original Touch, which leaves those puck-preparation steps manual.' },
          { question: 'How many grinder settings does the current BES880 have?', answer: 'Breville\'s current US page specifies 30 external settings. Older reviews can describe earlier configurations, so confirm the regional model.' },
          { question: 'Can it make two lattes at the same time?', answer: 'No. You can plan two drinks efficiently, but extraction and steam are sequential and each puck is prepared separately.' },
          { question: 'Does Auto MilQ work with oat milk?', answer: 'The interface includes settings intended for several milk types, including oat. Results still vary by formula, fill level and chosen texture, so repeat one product while learning.' },
          { question: 'Should I use the dual-wall basket?', answer: 'Use it for suitable preground or older coffee when added basket restriction helps. Use the single-wall basket with fresh beans when you want the puck and grinder to control the shot.' },
          { question: 'How often should the water filter be changed?', answer: 'The 2026 manual recommends after three months or 10.6 US gallons / 40 liters, while water quality and use remain relevant. Follow the matching regional manual.' },
          { question: 'Is the Barista Touch worth $999.95?', answer: 'It can be when screen guidance and automatic milk serve several users and the integrated grinder remains your grinder. It is poor value if you immediately replace the grinder or expected one-touch bean-to-cup coffee.' },
        ]),
      },
    ],
    sources: [
      { id: 'bt-official', label: 'Breville US Barista Touch BES880 product page', href: 'https://www.breville.com/en-us/product/bes880', note: 'Current identity, $999.95 price, 30-setting grinder, 54 mm system, Auto MilQ range, profiles, accessories and manufacturer dimensions. Checked September 15, 2026.' },
      { id: 'bt-manual', label: 'Breville BES880 USCM instruction book (2026)', href: 'https://assets.breville.com/BES880/BES880_USCM_IB_AB26_LR.pdf', note: 'Model-matched setup, operation, water-filter, grinder, cleaning and descaling instructions.' },
      { id: 'bt-support', label: 'Breville BES880 product hub', href: 'https://www.breville.com/en-us/producthub/bes880', note: 'Official tutorials, documentation, registration and support route. Response time and repair cost were not established.' },
      { id: 'bt-warranty', label: 'Breville North American warranty terms', href: 'https://www.breville.com/en-us/support/warranty', note: 'Current general claim route and terms. Exact unit coverage must be confirmed for purchase, seller and region.' },
      { id: 'bt-foodwine', label: 'Food & Wine, Breville Barista Touch after five years', href: 'https://www.foodandwine.com/breville-barista-touch-review-8721486', note: 'Long-term first-person use, updated June 16, 2026. One household, not a controlled durability study.' },
      { id: 'bt-coffeeness', label: 'Coffeeness Breville Barista Touch review', href: 'https://www.coffeeness.de/en/breville-barista-touch-review/', note: 'Independent use, recipe, interface and manual-preparation context. Measurements belong to its unit.' },
      { id: 'bt-coffeekev', label: 'Coffee Kev Barista Touch and Touch Impress review', href: 'https://coffeekev.com/barista-touch-and-touch-impress-review/', note: 'Hands-on comparison that helps separate BES880 from BES881 and their workflow differences.' },
      { id: 'bt-lifestyle', label: 'Lifestyle Lab Breville Barista Touch review', href: 'https://lifestylelab.ca/breville-barista-touch-review/', note: 'Independent video-led workflow and comparison perspective.' },
      { id: 'bt-homecoffee', label: 'Home Coffee Expert Breville Barista Touch review', href: 'https://homecoffeeexpert.com/breville-barista-touch-review/', note: 'Additional independent coffee, milk and ownership context.' },
      { id: 'bt-video', label: 'Lifestyle Lab, Barista Touch review video', href: 'https://www.youtube.com/watch?v=_Fmx5_nNwvg', note: 'External hands-on demonstration. Its timings and drink results are not Coffeedant tests.' },
      { id: 'bt-owner-espresso', label: 'r/espresso Barista Touch owner discussion', href: 'https://www.reddit.com/r/espresso/comments/1h4ds5n/breville_barista_touch/', note: 'Mixed owner tips, success, grinder-purge, consistency and longevity anecdotes. No verified denominator.' },
      { id: 'bt-owner-sour', label: 'r/espresso Barista Touch sour-shot troubleshooting', href: 'https://www.reddit.com/r/espresso/comments/180gxuh/help_sour_espresso_no_matter_what_i_do_breville/', note: 'A detailed owner troubleshooting case. Useful for variables and expectations, not a product-wide conclusion.' },
      { id: 'bt-owner-productreview', label: 'ProductReview Australia Barista Touch BES880 owner pool', href: 'https://www.productreview.com.au/listings/breville-the-barista-touch-bes880bss', note: 'Self-selected regional owner reviews, some marked verified. Model age, maintenance and diagnosis vary.' },
      { id: 'bt-owner-bestbuy', label: 'Best Buy Barista Touch customer-review pool', href: 'https://www.bestbuy.com/product/breville-the-barista-touch-espresso-machine-with-9-bars-of-pressure-milk-frother-and-integrated-grinder-stainless-steel/J72668FC6X', note: 'Large US retail review pool. Selection, incentive and long-term follow-up limits apply.' },
      { id: 'bt-parts', label: 'Breville BES880 parts route', href: 'https://www.breville.com/en-us/shop/espresso/parts/bes880', note: 'Official model parts storefront route; current stock of every internal or external item was not established.' },
    ],
    finalTitle: 'The final verdict',
    finalVerdict: [
      'Buy the BES880 when a touchscreen and automatic milk help several people make good, repeatable lattes while one person is willing to learn dosing, distribution and tamping. The fast heater and current 30-setting grinder create a coherent all-in-one station.',
      'Skip it when you want one-touch bean-to-cup coffee, simultaneous brewing and steaming, or a grinder that can be upgraded independently. At the $999.95 official price checked September 15, 2026, compare the Barista Touch Impress for puck help and the Bambino Plus route for grinder flexibility before deciding.',
    ],
  },
  video: {
    id: '_Fmx5_nNwvg',
    title: 'Breville Barista Touch Review  | Do you need a screen?',
    creator: 'Lifestyle Lab',
    published: '2022-03-19',
    note: 'An independent workflow-focused demonstration. Its shot and timing observations belong to the reviewer\'s unit and do not represent Coffeedant testing.',
  },
  dimensions: [
    {
      id: 'espresso', score: 8.2,
      reason: 'The 54 mm system, PID, pre-infusion and 30-step grinder provide a capable baseline, though timed dosing and manual puck prep still set consistency.',
      buyerMeaning: 'Strong for guided medium-roast espresso; less flexible than a carefully chosen separate grinder and more tunable brewer.',
      evidenceStatus: 'Documented design with independently contextualized use',
      sourceIds: ['bt-official', 'bt-manual', 'bt-homecoffee', 'bt-coffeeness', 'bt-lifestyle'],
      deepDiveId: 'espresso', title: 'Espresso controls the screen cannot replace',
      intro: ['The screen can save settings and time extraction. A scale, fresh coffee and a level puck still determine whether those settings produce a useful result.'],
      evidence: [
        { signal: 'Brew platform', evidence: 'Breville specifies a 54 mm 18 g system, PID control, low-pressure pre-infusion and 9-bar extraction.', decision: 'A credible espresso baseline for ordinary home recipes.' },
        { signal: 'Grind control', evidence: 'Thirty external settings improve range, while dosing remains time-based.', decision: 'Weigh a new coffee until timer output proves stable.' },
      ],
      diagnosis: [
        { signal: 'Fast and sharp shot', guidance: 'Verify dose, then grind finer while holding target yield still.' },
        { signal: 'Slow and drying shot', guidance: 'Grind coarser or reduce dose rather than forcing more water through.' },
      ],
    },
    {
      id: 'milk', score: 8.7,
      reason: 'Wide automatic temperature and texture choices plus manual mode make milk approachable without removing a skill path.',
      buyerMeaning: 'The core reason to pay over the Barista Pro, especially in a shared latte household.',
      evidenceStatus: 'Documented controls with long-term and hands-on context',
      sourceIds: ['bt-official', 'bt-manual', 'bt-foodwine', 'bt-coffeekev', 'bt-lifestyle'],
      deepDiveId: 'milk', title: 'Make Auto MilQ repeatable before judging it',
      intro: ['The sensor repeats comparable inputs. Milk brand, starting temperature, amount, jug position and saved settings still need to stay controlled.'],
      evidence: [
        { signal: 'Automatic range', evidence: 'Breville lists 104°F to 167°F and eight texture levels.', decision: 'Useful customization without requiring wand technique first.' },
        { signal: 'Manual option', evidence: 'The wand can also be operated manually.', decision: 'A learner is not locked into preset texture.' },
      ],
      diagnosis: [
        { signal: 'Foam varies', guidance: 'Repeat milk quantity, product, jug position and sensor contact.' },
        { signal: 'Too airy', guidance: 'Lower texture one step without changing temperature.' },
      ],
    },
    {
      id: 'workflow', score: 8.8,
      reason: 'Guided recipes, quick readiness and saved drinks reduce memory load, while portafilter work and sequential milk remain.',
      buyerMeaning: 'Fast and approachable for involved users; not a one-touch machine for someone avoiding wet pucks and loose grounds.',
      evidenceStatus: 'Documented workflow corroborated across independent reviews',
      sourceIds: ['bt-official', 'bt-manual', 'bt-foodwine', 'bt-homecoffee', 'bt-lifestyle'],
      deepDiveId: 'workflow', title: 'What the touchscreen does and does not automate',
      intro: ['The interface turns a recipe into clear stages and saves choices. The owner still performs each coffee-preparation handoff.'],
      evidence: [
        { signal: 'Guidance', evidence: 'Touch recipes present grind, brew and milk steps and store eight personalized drinks.', decision: 'Helpful for multiple users and repeat orders.' },
        { signal: 'Manual handoffs', evidence: 'Distribution, tamping, portafilter movement, puck disposal and cleanup remain.', decision: 'Expect real espresso-station work.' },
      ],
      diagnosis: [
        { signal: 'Saved drink changes taste', guidance: 'Recheck grind and measured dose as beans age rather than changing every saved setting.' },
        { signal: 'Counter gets messy', guidance: 'Use the funnel, create a fixed tamp area and reset the basket immediately.' },
      ],
    },
    {
      id: 'build', score: 7.2,
      reason: 'The integrated package is solid and coherent, but it concentrates grinder, heater, screen and milk systems into one service event.',
      buyerMeaning: 'Buy with a clear regional warranty and service path rather than assuming the stainless exterior proves long-term repairability.',
      evidenceStatus: 'Documented construction and support routes; incident rate unknown',
      sourceIds: ['bt-official', 'bt-support', 'bt-warranty', 'bt-foodwine', 'bt-owner-productreview', 'bt-owner-bestbuy'],
      deepDiveId: 'design', title: 'Build translated into placement and service',
      intro: ['All-in-one build saves station planning. It also means grinder or touchscreen downtime can remove the brewer from the counter.'],
      evidence: [
        { signal: 'Published dimensions', evidence: 'Breville lists 15.7 × 12.6 × 12.4 inches W × D × H.', decision: 'Verify the axes and working clearances on the actual unit.' },
        { signal: 'Accessible parts', evidence: 'Tank, tray, hopper, burrs, baskets and portafilter are owner-accessible.', decision: 'Daily care is straightforward when space is reserved.' },
      ],
      diagnosis: [
        { signal: 'Machine must fit under cabinets', guidance: 'Include hopper access, rear-tank handling, portafilter swing and steam-jug space.' },
        { signal: 'One subsystem fails', guidance: 'Document the symptom and use the warranty or authorized-service route rather than unsafe internal work.' },
      ],
    },
    {
      id: 'features', score: 8.4,
      reason: 'The touchscreen, profiles, temperature control, hot water and Auto MilQ are useful, but assisted tamping and simultaneous steam are absent.',
      buyerMeaning: 'A rich feature set for guided home drinks without the full automation of Touch Impress or Oracle.',
      evidenceStatus: 'Current official feature set',
      sourceIds: ['bt-official', 'bt-manual', 'bt-coffeekev'],
      deepDiveId: 'orientation', title: 'Features organized by the chore they remove',
      intro: ['A long feature list is less useful than knowing which repeated decision each feature changes.'],
      evidence: [
        { signal: 'Touch recipes', evidence: 'Guided menus and eight personalized drinks store preferences.', decision: 'Valuable for a shared kitchen, optional for a single fixed recipe.' },
        { signal: 'Auto MilQ', evidence: 'Automatic temperature and eight texture settings reduce milk skill.', decision: 'The primary upgrade over Barista Pro.' },
        { signal: 'Dosing funnel', evidence: 'The included funnel limits spill during manual puck work.', decision: 'Reduces mess but does not distribute or tamp.' },
      ],
      diagnosis: [
        { signal: 'Screen feels unnecessary', guidance: 'Compare Barista Pro and spend only for automatic milk if it still matters.' },
        { signal: 'Tamping is the disliked step', guidance: 'Move to Touch Impress rather than adding gadgets without removing the task.' },
      ],
    },
    {
      id: 'value', score: 7.7,
      reason: 'The complete station is useful at $999.95 when milk automation and profiles are used, but poor when the grinder or screen is quickly bypassed.',
      buyerMeaning: 'Value comes from sustained workflow fit, not from counting integrated components.',
      evidenceStatus: 'Dated official price with alternatives and ownership cost',
      sourceIds: ['bt-official', 'bt-foodwine', 'bt-homecoffee', 'bt-coffeekev'],
      deepDiveId: 'value', title: 'When the integrated station earns a thousand-dollar price',
      intro: ['The Touch can replace several separate purchases. It can also leave an unused grinder and screen when the owner outgrows its workflow.'],
      evidence: [
        { signal: 'Official price', evidence: '$999.95 on Breville US on September 15, 2026.', decision: 'Compare Touch Impress, Pro and a Bambino-plus-grinder station at live prices.' },
        { signal: 'Included kit', evidence: 'Portafilter, four baskets, funnel, jug, tamper, filter pieces and cleaning tools are included.', decision: 'Add a scale and coffee before buying upgrades.' },
      ],
      diagnosis: [
        { signal: 'A separate grinder is already planned', guidance: 'Buy a grinder-free brewer unless the Touch milk and screen still justify the duplication.' },
        { signal: 'Several users save milk drinks', guidance: 'The profiles and Auto MilQ solve repeated work and improve value.' },
      ],
      note: 'Price and add-to-cart status were checked on the official US page September 15, 2026. Promotions, colors and seller terms can change.',
    },
  ],
});

// Canonical identity: Breville Oracle Touch BES990 / CD-EM-000019.
// Breville US marks BES990 discontinued as of the 2026-09-15 evidence check.
export const brevilleOracleTouchReview: MachineReviewData = buildResearchReview({
  slug: '/espresso-machine/breville-oracle-touch-bes990/',
  productId: 'CD-EM-000019',
  brand: 'Breville',
  model: 'Oracle Touch',
  sku: 'BES990',
  category: 'Automated portafilter espresso machine with dual boilers',
  brandPath: '/breville/',
  title: 'Breville Oracle Touch review: capable automation, discontinued hardware',
  description: 'A research-led Breville Oracle Touch BES990 review covering its discontinued US status, dual boilers, 58 mm auto dose and tamp, milk, upkeep and replacements.',
  verdictLabel: 'Only with a strong remedy',
  verdict: 'The Oracle Touch remains a rare and appealing hybrid: it grinds, doses and tamps into a 58 mm portafilter, then runs espresso and automatic milk on a dual-boiler platform. Its workflow is quicker and more hands-off than the Barista Touch without hiding the puck inside a super-automatic. Breville now marks BES990 discontinued in the US, however. Buy remaining stock or refurbished units only when the discount, written warranty, return path and service support justify choosing old hardware over the current Oracle Jet or Oracle Dual Boiler.',
  assessment: 'Excellent automated portafilter hardware whose discontinued status now dominates the buying decision.',
  image: 'images/products/breville-oracle-touch-bes990.png',
  imageAlt: 'Breville Oracle Touch BES990 dual-boiler espresso machine with touchscreen and grinder',
  published: '2025-10-02',
  updated: '2026-09-15',
  authorNote: 'I evaluated the Oracle Touch as a distinctive automated-portafilter machine, not a true one-touch super-automatic. In 2026 the most important specification is lifecycle: the cup workflow is still compelling, while the purchase remedy is less certain.',
  basisDisclosure: 'This research-led assessment uses Breville\'s archived US BES990 page, current 2026 manual, product hub, warranty and parts routes, six independent hands-on or extended-use perspectives, comparison reporting and three separate owner communities. Coffeedant has not physically tested this machine. External results remain attributed, owner stories do not establish failure rates and secondary-market condition cannot be generalized.',
  price: {
    label: 'Breville US lifecycle',
    msrp: 'Discontinued',
    typical: 'No official new price; remaining, refurbished and used offers vary',
    currency: 'USD',
    numeric: '0',
    checked,
  },
  links: [
    { label: 'Check remaining Amazon offers', href: 'https://amzn.to/48Vfga0', note: 'Affiliate link · verify seller, condition and BES990', affiliate: true, primary: true },
    { label: 'View Breville product status', href: 'https://www.breville.com/en-us/product/bes990', note: 'Official US page · discontinued' },
  ],
  facts: [
    { label: 'Lifecycle', value: 'Discontinued in the US' },
    { label: 'Machine type', value: 'Automated 58 mm portafilter espresso system' },
    { label: 'Heating', value: 'Dual stainless-steel boilers plus heated group; PID' },
    { label: 'Grinder and puck', value: '45 settings; automatic grind, 22 g dose and tamp' },
    { label: 'Milk', value: 'Auto MilQ or manual; simultaneous with extraction' },
    { label: 'Profiles', value: 'Up to 8 personalized coffees' },
  ],
  quickAnswers: [
    { question: 'Is the Oracle Touch discontinued?', answer: 'Yes in the US. Breville\'s BES990 page explicitly marked the model discontinued when checked September 15, 2026.' },
    { question: 'Is it a super-automatic?', answer: 'Not in the conventional bean-to-cup sense. It automates grinding, dosing and tamping, but you move the 58 mm portafilter between grinder and group, then empty and clean the puck.' },
    { question: 'Can it brew and steam together?', answer: 'Yes. Separate stainless-steel boilers and a heated group allow simultaneous extraction and steam once the machine is ready.' },
    { question: 'What does it automate?', answer: 'Grinding, a nominal 22 g dose, tamping, programmed extraction and automatic milk temperature and texture. Portafilter movement, pouring and cleanup remain manual.' },
    { question: 'What replaced it?', answer: 'Breville\'s current Oracle range includes the faster ThermoJet-based Oracle Jet and a current Oracle Dual Boiler. Compare both because neither is simply an identical BES990 in a new shell.' },
    { question: 'Is a leftover new unit a bargain?', answer: 'Only if its exact seller warranty, return window, parts path and discount compensate for discontinued status. “New in box” does not restore an official current lifecycle.' },
  ],
  bestFor: [
    'A buyer who specifically wants automatic grind, dose and tamp with a removable 58 mm portafilter',
    'A milk-drink household that values dual-boiler simultaneous espresso and steam',
    'Someone offered a well-supported refurb or remaining unit at a lifecycle-adjusted price',
  ],
  avoidIf: [
    'You want a current model with the clearest future parts, firmware and retail support path',
    'You expect one-button drinks without moving or cleaning a portafilter',
    'You want independent dose, tamp or grinder upgrades rather than a managed workflow',
  ],
  pros: [
    'Automatic grinding, nominal 22 g dosing and tamping into a 58 mm portafilter',
    'Dual boilers and heated group support simultaneous espresso and milk',
    'Auto MilQ gives broad temperature and texture choices plus manual mode',
    'Touchscreen recipes and eight personalized drinks reduce training across users',
  ],
  cons: [
    'Officially discontinued in the US, with no current official new price',
    'Large, complex all-in-one design concentrates service risk',
    'Automated dose and tamp narrow manual adjustment and grinder upgrade options',
    'Still requires portafilter transfer, puck disposal, milk pouring and cleaning',
  ],
  alternatives: [
    { name: 'Breville Oracle Jet', reason: 'Choose the current quick-start Oracle platform and newer guided workflow.', href: '/espresso-machine/breville-oracle-jet-bes985/' },
    { name: 'Breville Barista Touch Impress', reason: 'Spend less and retain assisted dose, tamp and automatic milk, accepting 54 mm sequential operation.', href: '/espresso-machine/breville-barista-touch-impress-bes881/' },
    { name: 'Breville Dual Boiler', reason: 'Separate the grinder and control puck preparation on a 58 mm dual-boiler platform.', href: '/espresso-machine/breville-dual-boiler-bes920xl/' },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. Breville's US BES990 page is the authority for discontinued status and the archived feature set. The 2026 US/Canada/Mexico manual, product hub, general warranty terms and model parts route provide operating and support context. I did not convert an old list price or a marketplace offer into a current MSRP because Breville no longer sells this model as a normal new product.</p>
      <p>Independent evidence includes Coffeeness, Just One Cookbook's six-month account, CoffeeGeek, WIRED, Home Coffee Expert, Coffee Kev's current Oracle-range review and a TechRadar comparison. James Hoffmann's video supplies an external demonstration. Owner evidence comes from separate r/superautomatic, r/coffeestations and r/espresso discussions. Those posts include both satisfaction and faults but cannot produce a reliability rate. Current secondary-market inventory, comprehensive internal parts, out-of-warranty repair price and the condition of any particular BES990 remain unknown.</p>
    `,
    sections: [
      {
        id: 'orientation',
        eyebrow: 'The 2026 decision',
        title: 'The Oracle Touch still has a special workflow, but it is no longer a normal new-machine purchase',
        html: `
          <p>Breville's US page now says the Oracle Touch BES990 has been discontinued. That line changes the review more than a minor feature update. The machine's 58 mm portafilter, dual boilers, automatic grinder, tamping fan and milk system remain capable. What changes is the confidence around price, stock, support continuity and what happens after a return window. <a href="#ot-official">[1]</a></p>

          <p>The Oracle Touch occupies a category between semi-automatic and super-automatic. It automatically grinds, delivers a nominal 22 g dose and tamps into a removable 58 mm portafilter. You move that portafilter to the group, start or confirm extraction, discard the puck and clean the basket. Milk can be textured automatically, but you position the jug and pour. A conventional super-automatic performs the puck movement internally and sends coffee directly to the cup.</p>


          <p>The 2026 verdict is therefore conditional. Buy only after identifying exact model, condition, seller, warranty in writing, return window and service route. If any answer is vague, price the current <a href="${internalHref('/espresso-machine/breville-oracle-jet-bes985/')}">Oracle Jet</a>, <a href="${internalHref('/espresso-machine/breville-dual-boiler-bes920xl/')}">Breville Dual Boiler</a> plus grinder, or a true <a href="${internalHref('/espresso-machine/superautomatic/')}">super-automatic</a> instead.</p>
        `,
      },
      {
        id: 'setup',
        eyebrow: 'First week',
        title: 'Inspect the remedy first, then establish the machine on one coffee',
        html: `


          <p>Use the current BES990 instruction book for water hardness, filter preparation, first-use flush and startup. The manual is still maintained even though the product is discontinued. Wash removable food-contact parts, fit the filter as directed, fill with appropriate cold water and allow the dual-boiler system and heated group to reach its ready state. A boiler machine's displayed readiness and the temperature of a cold portafilter are related but not identical. <a href="#ot-manual">[2]</a></p>
          <p>Load one medium roast and run the machine's guided grinder setup. The auto dose and tamp mechanism is designed around about 22 g in the supplied 58 mm basket. Weighing the prepared portafilter can confirm whether your unit is behaving consistently, but do not dismantle or defeat the mechanism to chase an internet dose. Adjust the external grind setting until the beverage reaches a sensible ratio and tastes balanced.</p>

          <p>Test every major system inside the remedy period: grinder, auto dose and tamp, group, manual and programmed extraction, hot water, both automatic and manual milk, screen, tank, tray and absence of leaks. A premium used machine can appear healthy during one espresso while a steam, grinder or sensor fault stays hidden. Save video of any error and contact the responsible seller before attempting internal work.</p>
        `,
      },
      {
        id: 'grinder',
        eyebrow: 'Automated puck',
        title: 'The 45-setting grinder and tamping fan trade adjustment freedom for repeatability',
        html: `
          <p>Breville's archived current page specifies Baratza European precision burrs with 45 grind settings and an automated 22 g grind, dose and tamp path. Coffee travels from the hopper into the portafilter while an internal fan levels and compacts the puck. That removes three messy, variable hand steps and is the defining Oracle feature. <a href="#ot-official">[1]</a></p>


          <p>Just One Cookbook's six-month account reported inconsistency around grinding and tamping on the writer's unit, while other reviewers found the automated workflow one of the machine's central strengths. CoffeeGeek and James Hoffmann both help show what the mechanism is attempting. These observations can coexist because condition, coffee and individual hardware differ. Coffeedant did not measure dose variance. <a href="#ot-joc">[6]</a> <a href="#ot-coffeegeek">[7]</a> <a href="#ot-video">[12]</a></p>


        `,
      },
      {
        id: 'espresso',
        eyebrow: 'In the cup',
        title: 'Dual-boiler temperature control gives a strong base, while the automated puck sets the ceiling',
        html: `
          <p>The Oracle Touch combines separate stainless-steel boilers, a heated group head and PID control with low-pressure pre-infusion and a stated 9-bar extraction phase from a 15-bar pump. The 58 mm stainless-steel portafilter holds the machine's nominal 22 g dose. These are serious brewing components rather than the small internal group of a typical bean-to-cup machine. <a href="#ot-official">[1]</a></p>

          <p>Independent reviewers broadly agree on the machine's ability to produce strong espresso with less puck skill, but not on whether the grinder and automated dose justify the price. Coffeeness praises convenience while preserving concerns around cost and control. CoffeeGeek's early look explains the hybrid architecture. WIRED liked the concept while noting the complexity of screen-era appliance ownership, including an early firmware-service issue. <a href="#ot-coffeeness">[5]</a> <a href="#ot-coffeegeek">[7]</a> <a href="#ot-wired">[8]</a></p>



        `,
      },
      {
        id: 'milk',
        eyebrow: 'Auto MilQ and dual boilers',
        title: 'Automatic milk plus simultaneous extraction is the Oracle Touch advantage that still feels premium',
        html: `
          <p>Breville specifies automatic milk from 104°F to 167°F with nine texture levels, plus manual control. A dedicated steam boiler means the machine can texture milk while the brew boiler extracts espresso. That overlap separates Oracle Touch from the sequential Barista Touch and Oracle Jet and can matter more than startup speed once several drinks are underway. <a href="#ot-official">[1]</a></p>


          <p>The dual-boiler workflow allows a prepared shot and milk cycle to overlap, but the person still coordinates them. Begin milk only when the cup, portafilter and pour plan are ready. Leaving automatic milk standing while handling a stuck puck gives away the advantage. For two drinks, prepare each portafilter cycle deliberately and use a milk volume within the jug's safe capacity.</p>


        `,
      },
      {
        id: 'workflow',
        eyebrow: 'Morning and guests',
        title: 'It removes the messiest coffee steps but keeps the satisfying physical handoff',
        html: `
          <p>A normal drink begins at the touchscreen, moves the portafilter under the grinder, then into the group. The machine grinds, doses and tamps, runs the selected extraction and can texture milk automatically. The user empties the puck, pours milk, wipes the wand and resets the station. This is dramatically less technique than a manual grinder and dual boiler, but still more physical involvement than a bean-to-cup machine.</p>



          <p>Once hot, simultaneous milk and espresso make the Oracle Touch unusually efficient for two or three similar drinks. The limitation moves to portafilter transfer, puck clearing and the grinder cycle. A skilled user can stage the jug and cup without rushing the milk. A novice can keep each stage on screen and sacrifice some overlap for clarity.</p>
          <p>The daily reset includes more than tapping “clean.” Remove the puck, rinse and dry the basket, wipe the group edge, purge and wipe the wand, clear grounds around the tamp station and empty the tray as needed. The machine automates production, not hygiene. If even this reset is unwelcome, choose a bean-to-cup machine with a clearly understood internal cleaning routine.</p>
        `,
      },
      {
        id: 'design',
        eyebrow: 'Construction and support',
        title: 'The build is ambitious, heavy and complex, with lifecycle now part of every component',
        html: `
          <p>The Oracle Touch packages a grinder, tamping mechanism, brew boiler, steam boiler, heated group, pumps, valves, touchscreen and milk sensing into a 16.2 × 15.2 × 14.4-inch official envelope. The stainless construction and 58 mm portafilter communicate substance, but the relevant build story is the number of systems that need to keep cooperating. <a href="#ot-official">[1]</a></p>


          <p>Breville keeps a BES990 product hub, manual and parts route online. That is useful evidence of continued support information. It does not establish that every internal board, boiler or tamping assembly is in stock, reasonably priced or available indefinitely. Ask Breville or the proposed service provider about the specific repair path that matters to you. <a href="#ot-support">[3]</a> <a href="#ot-parts">[4]</a></p>

          <p>Build score and lifecycle are linked in 2026. The same hardware would score better as a current product with clear stock and pricing. As a discontinued system, the buyer should discount for downtime and uncertain service even when the physical machine appears premium.</p>
        `,
      },
      {
        id: 'owners',
        eyebrow: 'Community evidence',
        title: 'Owners agree on the unusual convenience and disagree on whether it justifies the complexity',
        html: `
          <p>The r/superautomatic discussion captures the category debate: Oracle Touch owners value dual boilers and the hybrid workflow, while others point toward the then-new Oracle Jet or a true bean-to-cup machine. The parallel r/coffeestations thread contains sharper criticism of grinder control, price and individual failures. An older r/espresso buying thread includes owners weighing convenience against separate equipment. <a href="#ot-owner-superauto">[13]</a> <a href="#ot-owner-stations">[14]</a> <a href="#ot-owner-espresso">[15]</a></p>
          <p>These are separate communities, but they are not independent surveys. Cross-posted discussions can share participants, enthusiasts may favor upgrade flexibility, and owners with faults have a reason to post. Positive first impressions can also precede long-term issues. The evidence supports a list of ownership questions, not a vote count.</p>

          <p>Fault reports include grinder failure, inconsistent dose or tamp, leaks and steam issues. Each requires model, condition and diagnosis before it says anything useful about another unit. A machine bought secondhand may also have years of scale or prior repair work hidden behind a clean exterior. Ask for service records and a full live demonstration.</p>


        `,
      },
      {
        id: 'ownership',
        eyebrow: 'Care and condition',
        title: 'Maintenance is manageable, while a used-machine inspection is unusually demanding',
        html: `
          <h3>Follow the machine's separate maintenance paths</h3>
          <p>The manual distinguishes group cleaning, descaling, water-filter service, grinder and tamp-fan cleaning, and steam-wand clearing. Coffee oils, mineral scale, dry grounds and milk residue are different problems. Use the current BES990 procedure and specified products for each. A generic Breville video may describe a related model with another button sequence or water path. <a href="#ot-manual">[2]</a></p>
          <p>After daily use, clear and rinse the basket, wipe the group area, clean the wand before milk dries, allow the purge, and remove loose grounds from the tamp station. Empty the tray before a long idle. Keep water away from the grinder and display. These actions do not guarantee longevity; they prevent ordinary residue from becoming the first explanation for a fault.</p>
          <h3>Know the water rather than guessing at a schedule</h3>

          <h3>Inspect every subsystem before buying used</h3>
          <p>A serious demonstration begins from cold and shows warm-up, screen response, grinder adjustment, a weighed auto dose, tamping, extraction, hot water, automatic milk, manual steam, simultaneous operation, tray and tank. Inspect for leaks during and after the cycle. Listen for changing grinder or pump sounds and obtain the exact error history.</p>

          <h3>Price the remedy</h3>
          <p>A written specialist-refurbisher warranty can be more valuable than the lowest private-sale price. Confirm shipping cost because a large, heavy machine is expensive and risky to transport. Original packaging has practical value. If the total of purchase, likely service and shipping approaches a current Oracle, the discontinued machine is not a bargain.</p>
        `,
      },
      {
        id: 'compare',
        eyebrow: 'Current alternatives',
        title: 'Oracle Touch versus Oracle Jet, Touch Impress, Dual Boiler and Jura E8',
        html: `

          ${comparisonTablesHtml('Breville Oracle Touch BES990', [
            { name: 'Oracle Touch BES990', href: '/espresso-machine/breville-oracle-touch-bes990/', priceClass: 'Discontinued; variable condition', quickDecision: 'Choose only for the hybrid 58 mm and dual-boiler workflow with a strong remedy.', dimensions: '16.2 × 15.2 × 14.4 in (official W×D×H label)', heating: 'Dual boilers plus heated group; simultaneous', coffeeSetup: '45-step grinder; automatic 22 g dose and tamp', milkWorkflow: 'Auto MilQ or manual; can overlap extraction', bestFor: 'Several milk drinks after warm-up' },
            { name: 'Oracle Jet BES985', href: '/espresso-machine/breville-oracle-jet-bes985/', priceClass: '$1,999.95 official check', quickDecision: 'Choose the current faster-start Oracle and clearer lifecycle.', dimensions: 'Check current BES985 product page', heating: 'ThermoJet-based system; no traditional dual-boiler overlap', coffeeSetup: 'Automated 58 mm grind, dose and tamp', milkWorkflow: 'Current Auto MilQ workflow', bestFor: 'One or two drinks from a cold start' },
            { name: 'Barista Touch Impress BES881', href: '/espresso-machine/breville-barista-touch-impress-bes881/', priceClass: 'Lower current tier', quickDecision: 'Spend less when assisted puck prep and 54 mm sequential brewing are enough.', dimensions: 'Check current BES881 product page', heating: 'ThermoJet; sequential', coffeeSetup: 'Integrated grinder; intelligent dose and assisted tamp', milkWorkflow: 'Auto MilQ; sequential', bestFor: 'Guided home lattes without Oracle scale' },
            { name: 'Breville Dual Boiler BES920', href: '/espresso-machine/breville-dual-boiler-bes920xl/', priceClass: 'Machine plus separate grinder', quickDecision: 'Choose full manual control and an independently upgradeable grinder.', dimensions: 'Large brewer plus grinder footprint', heating: 'Dual boilers and heated group; simultaneous', coffeeSetup: 'Separate grinder; manual 58 mm puck', milkWorkflow: 'Manual steam', bestFor: 'Espresso learning and service flexibility' },
            { name: 'Jura E8', href: '/espresso-machine/jura-e8/', priceClass: 'Premium super-automatic tier', quickDecision: 'Choose true bean-to-cup operation instead of moving a portafilter.', dimensions: 'Full-size automatic appliance', heating: 'Automatic brew and steam system', coffeeSetup: 'Internal grinder and brew group', milkWorkflow: 'Integrated milk path; cleaning required', bestFor: 'One-touch drinks and minimal handling' },
          ], 'Lifecycle and official prices were checked in the US on September 15, 2026. Used, refurbished and remaining-stock Oracle Touch prices cannot be normalized without condition and remedy details.')}
          <p>The decision turns on cadence and control. Choose Oracle Jet for quick cold starts and a current platform. Choose BES990 only when simultaneous steam and the old dual-boiler feel are worth lifecycle risk. Choose Dual Boiler when grinder choice and manual control matter. Choose a super-automatic when moving a portafilter was never part of the desired morning.</p>
        `,
      },
      {
        id: 'value',
        eyebrow: 'A lifecycle-adjusted price',
        title: 'There is no honest “typical price” without condition, seller and coverage',
        html: `
          <p>Breville no longer displays a normal new price because the model is discontinued. Marketplace listings can include old new stock, open-box returns, manufacturer or dealer refurbs, used machines and offers with missing accessories. Combining them into one current price would create false precision. This review displays “Discontinued” and asks the buyer to compare the full remedy.</p>
          <p>Start from current alternatives. Breville listed Oracle Jet at $1,999.95 on the same date. A current Oracle Dual Boiler plus suitable grinder creates another benchmark, as does Barista Touch Impress for a household that can accept 54 mm assisted preparation. The Oracle Touch needs a meaningful reason to beat those options, whether that is price, dual-boiler cadence or a trusted refurbisher's support.</p>


          <p>The value score is intentionally low relative to performance. It does not punish the machine for age alone. It reflects that a premium integrated appliance without a current normal retail path shifts uncertainty to the buyer. A well-priced supported refurb can score better; a near-current-price leftover unit with vague coverage scores worse.</p>
        `,
      },
      {
        id: 'related',
        eyebrow: 'Safer next steps',
        title: 'Four alternatives for four different Oracle Touch priorities',
        html: `

          ${recommendationCardsHtml([
            { kicker: 'Current Oracle route', title: 'Breville Oracle Jet', text: 'Keep automated 58 mm preparation and advanced milk while gaining a current, quick-start platform.', href: '/espresso-machine/breville-oracle-jet-bes985/', linkLabel: 'Read the Oracle Jet review', featured: true },
            { kicker: 'Manual dual boiler', title: 'Breville Dual Boiler', text: 'Choose a separate grinder, direct puck control and simultaneous espresso and steam.', href: '/espresso-machine/breville-dual-boiler-bes920xl/', linkLabel: 'Read the Dual Boiler review' },
            { kicker: 'Lower-cost assistance', title: 'Breville Barista Touch Impress', text: 'Use guided dosing, assisted tamp and automatic milk when 54 mm sequential operation is enough.', href: '/espresso-machine/breville-barista-touch-impress-bes881/', linkLabel: 'Read the Touch Impress review' },
            { kicker: 'True bean-to-cup', title: 'Jura E8', text: 'Move the puck work inside the machine when one-touch drinks matter more than a visible portafilter.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read the Jura E8 review' },
          ])}
        `,
      },
      {
        id: 'faq',
        eyebrow: 'Questions before a discontinued purchase',
        title: 'Breville Oracle Touch BES990 FAQ',
        html: faqHtml([
          { question: 'Why was the Breville Oracle Touch discontinued?', answer: 'Breville confirms the status but does not provide a detailed public reason on the US product page. The current Oracle range has changed; this review does not invent a cause.' },
          { question: 'Is Oracle Touch fully automatic?', answer: 'It automates grind, dose, tamp, extraction and milk settings, but you transfer, insert, empty and clean the portafilter and pour the milk. It is not conventional one-touch bean-to-cup.' },
          { question: 'Does Oracle Touch use a 58 mm portafilter?', answer: 'Yes. Breville specifies a 58 mm stainless-steel portafilter and a nominal 22 g automated dose.' },
          { question: 'Can Oracle Touch brew and steam at the same time?', answer: 'Yes. Its separate stainless-steel boilers and heated group support simultaneous extraction and steam once ready.' },
          { question: 'Is Oracle Jet better than Oracle Touch?', answer: 'Jet is current and starts much faster, while the discontinued Touch has true dual-boiler overlap. Better depends on cold-start speed, drink queue, support and price.' },
          { question: 'Should I buy a used Oracle Touch?', answer: 'Only after a complete live demonstration, condition and service check, and with a price that accounts for no or limited remedy. Test grinder, tamp, brew, water, milk, screen and leaks.' },
          { question: 'Can I upgrade the grinder?', answer: 'Not cleanly. The integrated grinder and auto-dose/tamp path are central to the machine. Choose a Dual Boiler and separate grinder if upgradeability matters.' },
          { question: 'What is a fair Oracle Touch price in 2026?', answer: 'There is no single fair price across new-old-stock, refurb and used condition. Compare the total with current alternatives after warranty, shipping, missing parts and likely service risk.' },
        ]),
      },
    ],
    sources: [
      { id: 'ot-official', label: 'Breville US Oracle Touch BES990 product page', href: 'https://www.breville.com/en-us/product/bes990', note: 'Official discontinued status, 45-setting Baratza burrs, automated 22 g dose and tamp, 58 mm portafilter, dual boilers, milk range, profiles and dimensions. Checked September 15, 2026.' },
      { id: 'ot-manual', label: 'Breville BES990 USCM instruction book (2026)', href: 'https://assets.breville.com/BES990/BES990_USCM_IB_V26_LR.pdf', note: 'Current model-matched setup, operation, cleaning, descale, grinder, tamp and milk instructions.' },
      { id: 'ot-support', label: 'Breville BES990 product hub', href: 'https://www.breville.com/en-us/producthub/bes990', note: 'Official tutorials, documentation, registration and support route for the discontinued model.' },
      { id: 'ot-parts', label: 'Breville BES990 parts route', href: 'https://www.breville.com/en-us/shop/espresso/parts/bes990', note: 'Official model storefront route. Complete internal inventory and future stock were not established.' },
      { id: 'ot-coffeeness', label: 'Coffeeness Breville Oracle Touch review', href: 'https://www.coffeeness.de/en/breville-oracle-touch-review/', note: 'Independent hands-on workflow, coffee, milk and value context.' },
      { id: 'ot-joc', label: 'Just One Cookbook Oracle Touch after six months', href: 'https://www.justonecookbook.com/breville-oracle-touch-review-after-6-months/', note: 'Extended household use, including grinder and tamp inconsistency on that unit. Anecdotal, not a failure-rate study.' },
      { id: 'ot-coffeegeek', label: 'CoffeeGeek Oracle Touch first look', href: 'https://coffeegeek.com/reviews/firstlooks/breville-oracle-touch-espresso-machine-first-look/', note: 'Detailed early hands-on explanation of the hybrid 58 mm automated workflow.' },
      { id: 'ot-wired', label: 'WIRED Breville Oracle Touch review', href: 'https://www.wired.com/2017/07/review-breville-oracle-touch', note: 'Early independent use and interface context. Its firmware-service observation belongs to an early unit and period.' },
      { id: 'ot-homecoffee', label: 'Home Coffee Expert Breville Oracle Touch review', href: 'https://homecoffeeexpert.com/breville-oracle-touch-review/', note: 'Independent espresso, milk and ownership assessment.' },
      { id: 'ot-coffeekev', label: 'Coffee Kev current Breville Oracle range review', href: 'https://coffeekev.com/breville-oracle-range-review/', note: 'Current range and lifecycle comparison across discontinued Oracle Touch and newer Oracle products.' },
      { id: 'ot-techradar', label: 'TechRadar Oracle Touch versus Barista Touch', href: 'https://www.techradar.com/home/coffee-machines/breville-oracle-touch-vs-breville-barista-touch-how-to-choose-the-right-bean-to-cup-coffee-maker-for-you', note: 'Independent comparison of workflow, dual boilers and automation. Category wording is treated cautiously.' },
      { id: 'ot-video', label: 'James Hoffmann Oracle Touch review video', href: 'https://www.youtube.com/watch?v=fRBOxyu2b2Q', note: 'Independent demonstration and critique from 2017. Historical model context, not current availability evidence.' },
      { id: 'ot-owner-superauto', label: 'r/superautomatic Oracle Touch value discussion', href: 'https://www.reddit.com/r/superautomatic/comments/1dvwekn/the_oracle_touch_is_it_worth_it/', note: 'Owner and shopper comparisons with Oracle Jet and other categories. Self-selected anecdotes.' },
      { id: 'ot-owner-stations', label: 'r/coffeestations Oracle Touch discussion', href: 'https://www.reddit.com/r/coffeestations/comments/1dvyy7c/the_oracle_touch_is_it_worth_it/', note: 'Separate community discussion including grinder, failure, price and workflow views. No denominator.' },
      { id: 'ot-owner-espresso', label: 'r/espresso Oracle Touch buying discussion', href: 'https://www.reddit.com/r/espresso/comments/kzwaiu/buy_or_not_breville_oracle_touch/', note: 'Owner and enthusiast perspectives on convenience and alternatives. Older market context.' },
      { id: 'ot-warranty', label: 'Breville North American warranty terms', href: 'https://www.breville.com/en-us/support/warranty', note: 'Current general terms and claim route. Exact coverage for old stock, refurbs and used machines must be confirmed in writing.' },
    ],
    finalTitle: 'The final verdict',
    finalVerdict: [
      'The Oracle Touch is still one of the most coherent ways to automate grind, dose, tamp and milk without hiding the espresso inside a bean-to-cup brew group. Its 58 mm portafilter and dual-boiler overlap remain meaningful, especially for several milk drinks.',
      'Breville now marks BES990 discontinued in the US, so performance alone cannot carry the recommendation. Buy only when a trusted seller provides a strong written remedy and the lifecycle-adjusted price clearly beats a current Oracle Jet, a Barista Touch Impress or a Dual Boiler plus grinder. Otherwise, admire the workflow and choose current hardware.',
    ],
  },
  video: {
    id: 'fRBOxyu2b2Q',
    title: 'Product Review: Oracle Touch by Sage/Breville',
    creator: 'James Hoffmann',
    published: '2017-12-23',
    note: 'A detailed independent demonstration from the product\'s launch era. It adds workflow context but does not establish current price, lifecycle or the condition of a 2026 unit.',
  },
  dimensions: [
    {
      id: 'espresso', score: 8.9,
      reason: 'Dual boilers, heated 58 mm group, PID and a consistent automated puck create a strong baseline, though grinder and dose freedom are constrained.',
      buyerMeaning: 'Closer to a capable portafilter machine than a typical bean-to-cup cup, without the same open-ended grinder and puck control.',
      evidenceStatus: 'Documented platform with multiple independent hands-on perspectives',
      sourceIds: ['ot-official', 'ot-manual', 'ot-coffeeness', 'ot-coffeegeek', 'ot-wired', 'ot-joc'],
      deepDiveId: 'espresso', title: 'Why the brew hardware still matters',
      intro: ['The Oracle Touch automates preparation around a real 58 mm basket. That gives it a higher ceiling than many convenience machines, while tying the result to its grinder and 22 g workflow.'],
      evidence: [
        { signal: 'Thermal platform', evidence: 'Separate brew and steam boilers plus a heated PID group are officially documented.', decision: 'Strong temperature and throughput architecture once warmed.' },
        { signal: 'Puck preparation', evidence: 'The machine targets a 22 g automatic grind, dose and tamp.', decision: 'Repeatable for shared use, less open for varied baskets and doses.' },
      ],
      diagnosis: [
        { signal: 'Fast, thin extraction', guidance: 'Confirm coffee freshness and auto dose, then grind finer and clear retained grounds.' },
        { signal: 'Slow, harsh extraction', guidance: 'Move coarser before trying to alter the automated dose path.' },
      ],
    },
    {
      id: 'milk', score: 9.0,
      reason: 'Automatic temperature and nine texture choices are paired with true simultaneous steaming and extraction.',
      buyerMeaning: 'Excellent for repeated milk drinks when the owner will still position, pour and clean the jug and wand.',
      evidenceStatus: 'Documented controls and extended-use context',
      sourceIds: ['ot-official', 'ot-manual', 'ot-joc', 'ot-homecoffee', 'ot-video'],
      deepDiveId: 'milk', title: 'Automatic milk with real dual-boiler pace',
      intro: ['The milk system earns its score by combining repeatability with overlap. The person still controls milk amount, pour timing and hygiene.'],
      evidence: [
        { signal: 'Adjustment', evidence: 'Official range is 104°F to 167°F with nine texture levels and manual mode.', decision: 'Broad enough for several household preferences.' },
        { signal: 'Cadence', evidence: 'The dedicated steam boiler can run during extraction.', decision: 'Meaningful advantage for multiple milk drinks after warm-up.' },
      ],
      diagnosis: [
        { signal: 'Texture varies', guidance: 'Hold milk formula, fill, jug position and setting constant.' },
        { signal: 'Milk waits for coffee', guidance: 'Delay starting steam until the portafilter and cup handoff are ready.' },
      ],
    },
    {
      id: 'workflow', score: 8.2,
      reason: 'Automatic grind, dose, tamp and milk reduce skill while dual boilers raise throughput, but warm-up and portafilter handling remain.',
      buyerMeaning: 'Excellent once ready for a few drinks; less attractive for one quick drink from cold than newer ThermoJet hardware.',
      evidenceStatus: 'Documented workflow with comparison and owner context',
      sourceIds: ['ot-official', 'ot-manual', 'ot-coffeekev', 'ot-techradar', 'ot-owner-superauto'],
      deepDiveId: 'workflow', title: 'Where Oracle automation saves time',
      intro: ['The machine saves preparation attention and overlaps milk with espresso. It does not remove startup, portafilter transfer, pouring or cleanup.'],
      evidence: [
        { signal: 'Coffee prep', evidence: 'Grind, dose and tamp occur automatically in the portafilter.', decision: 'Less mess and user variation than a manual dual-boiler station.' },
        { signal: 'Warm-up', evidence: 'Boilers and heated group trade slower cold starts for stable concurrent work.', decision: 'Better for a planned session than an immediate single cup.' },
      ],
      diagnosis: [
        { signal: 'Cold-start wait dominates', guidance: 'Compare Oracle Jet rather than using unsupported power workarounds.' },
        { signal: 'Guests still need help', guidance: 'Save drinks and demonstrate the portafilter handoff and wand cleanup once.' },
      ],
    },
    {
      id: 'build', score: 7.4,
      reason: 'Substantial dual-boiler and 58 mm hardware are offset by integrated complexity and a discontinued support horizon.',
      buyerMeaning: 'Physically premium, but condition, service and transport matter more than the exterior on a 2026 purchase.',
      evidenceStatus: 'Documented architecture; parts completeness and failure incidence unknown',
      sourceIds: ['ot-official', 'ot-manual', 'ot-support', 'ot-parts', 'ot-joc', 'ot-owner-stations'],
      deepDiveId: 'design', title: 'Build quality after discontinuation',
      intro: ['A premium mechanism can still be a risky purchase when several proprietary systems share one chassis and future parts cannot be assumed.'],
      evidence: [
        { signal: 'Core hardware', evidence: 'Dual stainless boilers, heated group and 58 mm portafilter are documented.', decision: 'Substantial brewing platform with high repair complexity.' },
        { signal: 'Integrated systems', evidence: 'Grinder, tamp mechanism, display and milk sensing are built in.', decision: 'One fault can remove the whole station from service.' },
      ],
      diagnosis: [
        { signal: 'Buying used', guidance: 'Require a complete cold-start, coffee, milk and leak demonstration.' },
        { signal: 'Shipping is required', guidance: 'Prefer original packing and written responsibility for damage and return freight.' },
      ],
    },
    {
      id: 'features', score: 8.7,
      reason: 'Few machines combine 58 mm auto preparation, dual boilers, automatic milk, manual options and saved touch recipes.',
      buyerMeaning: 'A distinctive feature mix, but newer connectivity and quick-start design belong to the current Oracle generation.',
      evidenceStatus: 'Official archived feature set with current range comparison',
      sourceIds: ['ot-official', 'ot-manual', 'ot-coffeekev', 'ot-techradar'],
      deepDiveId: 'orientation', title: 'A rare feature combination with a current-generation catch',
      intro: ['Oracle Touch earns feature credit for capabilities that work together, not for having a screen. Lifecycle determines how much those features should influence a new purchase.'],
      evidence: [
        { signal: '58 mm automation', evidence: 'Integrated grinder, 22 g dosing and tamping feed a professional-size removable portafilter.', decision: 'Distinct from both manual machines and internal-brew-group super-automatics.' },
        { signal: 'Dual-boiler milk', evidence: 'Espresso and automatic milk can run together.', decision: 'A real throughput advantage over sequential Touch models.' },
        { signal: 'Profiles', evidence: 'Up to eight customized drinks can be named and saved.', decision: 'Useful across a household, but recipes still need grind updates.' },
      ],
      diagnosis: [
        { signal: 'Only the screen attracts you', guidance: 'Barista Touch or Touch Impress may provide the needed guidance for less.' },
        { signal: 'Only simultaneous steam attracts you', guidance: 'Price a current manual dual boiler and separate grinder.' },
      ],
    },
    {
      id: 'value', score: 5.2,
      reason: 'Discontinued status removes a stable official price and adds condition, warranty, shipping and parts risk to every offer.',
      buyerMeaning: 'Potentially sensible as a deeply supported refurb, difficult to recommend as expensive old stock or an undocumented private sale.',
      evidenceStatus: 'Official lifecycle confirmed; market price and unit condition variable',
      sourceIds: ['ot-official', 'ot-support', 'ot-parts', 'ot-warranty', 'ot-coffeekev', 'ot-owner-stations'],
      deepDiveId: 'value', title: 'How to value a discontinued Oracle Touch',
      intro: ['There is no honest single street price across unopened stock, dealer refurb, private used units and incomplete machines. The remedy is part of the product.'],
      evidence: [
        { signal: 'Official status', evidence: 'Breville US explicitly says BES990 is discontinued and provides no normal new price.', decision: 'Do not anchor to an old MSRP or percentage discount.' },
        { signal: 'Current benchmark', evidence: 'Oracle Jet was $1,999.95 on the check date, with other current Breville routes available.', decision: 'A BES990 offer must beat current alternatives after risk and shipping.' },
      ],
      diagnosis: [
        { signal: 'Seller cites a large discount', guidance: 'Compare dollars and remedy with current machines, not a historical list price.' },
        { signal: 'No complete demonstration', guidance: 'Walk away or value it strictly as a repair-risk unit.' },
      ],
      note: 'The score can change substantially with the individual offer. It reflects the US product lifecycle as of September 15, 2026, not a judgment that every remaining unit has the same risk.',
    },
  ],
});

// Canonical identity: Philips 3200 Series LatteGo EP3241/54 / CD-EM-000105.
// The US EP3241/54 is discontinued; closely named regional and iced-coffee variants differ.
export const philips3200LatteGoReview: MachineReviewData = buildResearchReview({
  slug: '/espresso-machine/philips-3200-lattego/',
  productId: 'CD-EM-000105',
  brand: 'Philips',
  model: '3200 Series LatteGo',
  sku: 'EP3241/54',
  category: 'Super-automatic bean-to-cup espresso machine',
  brandPath: '/philips/',
  title: 'Philips 3200 LatteGo review: easy milk, discontinued model',
  description: 'A research-led Philips 3200 LatteGo EP3241/54 review covering its discontinued US status, five drinks, ceramic grinder, brew group, care and alternatives.',
  verdictLabel: 'Only at a supported discount',
  verdict: 'The Philips 3200 LatteGo still makes sense as a simple whole-bean convenience machine. Five direct drinks, a two-piece milk carafe and removable brew group keep the learning and daily cleanup approachable. Its espresso ceiling, limited profiles and regular internal care are the trade. Philips now lists US model EP3241/54 as discontinued, so a remaining or refurbished unit needs a clear discount, written remedy and complete accessories. At ordinary new-machine money, choose a current Philips or De’Longhi instead.',
  assessment: 'A friendly first super-automatic whose discontinued lifecycle now matters as much as its famously simple milk carafe.',
  image: 'images/products/philips-3200-lattego.png',
  imageAlt: 'Philips 3200 Series LatteGo EP3241/54 super-automatic coffee machine with milk carafe',
  published: '2025-11-12',
  updated: '2026-09-15',
  authorNote: 'I approached the 3200 as a convenience appliance with an unusually easy milk container, not as a portafilter replacement. The important 2026 question is whether a discounted, supported EP3241/54 is wiser than a current automatic with a clearer retail future.',
  basisDisclosure: 'This research-led assessment uses the archived US product page, current support and HomeID routes, a current family manual, official accessories and parts channels, six independent hands-on perspectives, a current refurbished listing and three owner pools. Coffeedant has not physically tested an EP3241/54. External measurements remain attributed, regional variants are kept separate and owner anecdotes do not establish failure or satisfaction rates.',
  price: {
    label: 'Philips US lifecycle',
    msrp: 'Discontinued',
    typical: 'Remaining stock and refurbished offers vary; no official current new price',
    currency: 'USD',
    numeric: '0',
    checked,
  },
  links: [
    { label: 'Check remaining Amazon offers', href: 'https://amzn.to/4quTSzM', note: 'Affiliate link · confirm EP3241/54, condition and seller', affiliate: true, primary: true },
    { label: 'View Philips support', href: 'https://www.usa.philips.com/c-p/EP3241_54/series-3200-fully-automatic-espresso-machines/support', note: 'Official US support and lifecycle route' },
  ],
  facts: [
    { label: 'Lifecycle', value: 'US EP3241/54 discontinued' },
    { label: 'Machine type', value: 'Super-automatic whole-bean espresso machine' },
    { label: 'Drinks', value: 'Espresso, coffee, Americano, cappuccino, latte macchiato; hot water' },
    { label: 'Grinder', value: '12-setting ceramic burr grinder; 275 g hopper' },
    { label: 'Milk', value: 'Two-piece LatteGo carafe with no milk tubes' },
    { label: 'Care', value: 'Removable brew group; AquaClean-compatible 1.8 L tank' },
  ],
  quickAnswers: [
    { question: 'Is Philips 3200 LatteGo discontinued?', answer: 'Yes for the US EP3241/54 reviewed here. Philips still provides support, manuals and troubleshooting, while current retail has moved to newer series.' },
    { question: 'Which drinks are one touch?', answer: 'EP3241/54 offers espresso, coffee, Americano, cappuccino and latte macchiato, plus hot water. Closely named 3200 variants can have different drink buttons.' },
    { question: 'Does it use whole beans?', answer: 'Yes. It grinds from a 275 g hopper, and it also has a bypass for a measured portion of suitable preground coffee.' },
    { question: 'Is LatteGo really tubeless?', answer: 'Yes. The milk container is a two-piece external carafe without internal tubes. It is quick to separate and rinse, but still needs cleaning after milk use.' },
    { question: 'Can it make cafe-style espresso?', answer: 'It makes convenient super-automatic espresso with limited aroma, volume and grinder adjustment. It does not offer the puck, dose and yield control of a good grinder and portafilter machine.' },
    { question: 'Should I buy old stock?', answer: 'Only when the exact EP3241/54, written warranty, return window, parts path and discount beat current alternatives. A high marketplace list price is not a current MSRP.' },
  ],
  bestFor: [
    'A household that wants easy whole-bean coffee and simple automatic milk with minimal menu depth',
    'Someone willing to rinse the brew group and follow regular automatic-machine care',
    'A buyer offered a complete, supported refurb or remaining EP3241/54 at a clear discount',
  ],
  avoidIf: [
    'You want a current model, multiple user profiles or a broader hot-and-cold drink menu',
    'Traditional espresso body and direct control matter more than one-touch operation',
    'Removing, rinsing, lubricating and maintaining an internal brew group sounds unwelcome',
  ],
  pros: [
    'Five direct coffee recipes plus hot water on the US EP3241/54',
    'Two-piece LatteGo carafe has no milk tubes and is easy to rinse',
    'Removable brew group makes internal coffee residue accessible',
    'Twelve-step ceramic grinder and bypass chute support basic coffee changes',
  ],
  cons: [
    'US EP3241/54 is discontinued with no normal official new price',
    'Espresso adjustment and intensity remain limited by the super-automatic format',
    'No true user-profile system for a household with many preferences',
    'Brew group, tray, grounds bin, milk carafe and water system all require care',
  ],
  alternatives: [
    { name: 'De\'Longhi Magnifica Evo', reason: 'Compare a current entry bean-to-cup machine with a current retail and support path.', href: '/espresso-machine/delonghi-magnifica-evo/' },
    { name: 'De\'Longhi Magnifica Plus', reason: 'Choose a broader modern drink menu and profiles when several users share the machine.', href: '/espresso-machine/delonghi-magnifica-plus/' },
    { name: 'Philips 4300 LatteGo', reason: 'Compare the related LatteGo platform with more profiles and drinks, while checking its own lifecycle.', href: '/espresso-machine/philips-4300-lattego/' },
  ],
  article: {
    methodology: `
      <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong> of the US EP3241/54, not every 3200 configuration. Philips sources establish identity, discontinued status, maintenance and parts routes. Its family manual covers regional relatives, so voltage, drinks and accessories transfer only when US evidence agrees.</p>
      <p>Six independent reviews and a Tom's Coffee Corner video provide outside context. Owner evidence includes two Reddit discussions and the identified Amazon review pool; none supplies incidence data. Price and availability were checked September 15, 2026. There is no official current new price, and remaining inventory, seller-specific warranty, future internal-parts stock and population-level lifespan remain unknown.</p>
    `,
    sections: [
      {
        id: 'orientation',
        eyebrow: 'The lifecycle first',
        title: 'The 3200 LatteGo remains simple, while the US model is no longer current',
        html: `
          <p>Philips's US support record identifies EP3241/54 and marks the product discontinued. That does not make the machine stop brewing, and the company still provides documentation and troubleshooting. It does mean a shopper should stop treating every marketplace listing as ordinary current stock. New old stock, open-box, refurbished and used machines carry different condition and remedies. <a href="#p32-support">[2]</a></p>

          <p>The five labeled beverages on US EP3241/54 are espresso, coffee, Americano, cappuccino and latte macchiato, with hot water available. Other 3200 machines can use a classic milk wand or add an iced-coffee program, and regional suffixes can change power and bundle. A listing that only says “Philips 3200” is not enough. Match EP3241/54 if you expect the facts and interface in this review. <a href="#p32-official">[1]</a></p>


          <p>Buy only when a supported offer materially beats a current Philips or De'Longhi. A specialist refurb can be rational; expensive leftover stock with vague coverage transfers lifecycle risk to the buyer.</p>
        `,
      },
      {
        id: 'setup',
        eyebrow: 'First week',
        title: 'Let the brew group settle, then adjust one coffee variable at a time',
        html: `
          <p>Record the model, seller, serial and remedy. Confirm the LatteGo pieces, promised filter, hardness strip, scoop and documentation against the listing. Refurbished and secondary-market packages differ; a missing carafe turns a bargain into a parts search.</p>
          <p>Remove shipping material, wash the water tank, LatteGo and other removable food-contact parts according to the manual, and install the brew group only as directed. Set water hardness, prime and run the first-use sequence. The machine will rinse water into the tray or cup at startup and shutdown. That is part of the internal hygiene design, so leave a suitable vessel under the spouts and expect the tray to fill faster than drink volume suggests. <a href="#p32-manual">[4]</a></p>

          <p>Change grinder settings only while the grinder is operating and only one notch at a time, as the manual instructs. The effect may take two or three drinks because coffee remains in the path. Finer can increase contact and strength but can also slow or stress the brew if taken too far. Coarser can reduce bitterness but may create a weak, quick cup. Another owner's dial number is not a transferable recipe.</p>

          <p>For LatteGo, fill only within the marking appropriate to the selected drink and assemble the two pieces fully. Use cold milk, attach securely and watch the first cycles for splashing or a poorly seated container. Rinse immediately after use. Milk may dispense before coffee in the programmed recipe, which can produce a layered drink but differs from a cafe's exact construction.</p>
        `,
      },
      {
        id: 'espresso',
        eyebrow: 'Coffee quality',
        title: 'The 3200 prioritizes consistent convenience over traditional espresso control',
        html: `
          <p>The machine grinds, portions, compresses and brews inside its removable group. Philips advertises a 12-setting 100% ceramic grinder and adjustable aroma, coffee quantity and temperature. A pump-pressure headline, where shown in older materials, does not reveal the pressure at the puck or guarantee flavor. The useful controls are the ones the owner can repeat and taste. <a href="#p32-official">[1]</a></p>
          <p>Start espresso at a strong aroma and modest volume, then taste. If it is watery, shorten the beverage before making the grinder much finer. If it is harsh, try a coarser setting or lower temperature after allowing several cups for a grinder change to reach the brew group. If it is both weak and bitter, old or very dark oily coffee may be the problem rather than a single setting.</p>

          <p>Independent reviews agree more on ease than on the cup. Home Coffee Expert and Coffeeness find the machine capable and good value in the right context. Tom's Guide praises the easy cappuccino workflow but is more reserved about coffee quality. Craft Coffee Spot emphasizes adjustment and value, while Seattle Coffee Gear's review of a related iced 3200 variant highlights versatility. These conclusions reflect different coffees, variants and expectations. <a href="#p32-homecoffee">[7]</a> <a href="#p32-coffeeness">[8]</a> <a href="#p32-toms">[9]</a> <a href="#p32-craft">[10]</a> <a href="#p32-scg">[11]</a></p>


        `,
      },
      {
        id: 'milk',
        eyebrow: 'LatteGo',
        title: 'The two-piece carafe is genuinely easy to rinse, with limited texture control',
        html: `
          <p>LatteGo uses a milk container and frame that form a channel when assembled, with no conventional internal milk tube. Philips promotes the two-piece design as quick to clean, and independent reviewers consistently identify it as the 3200's most compelling feature. Fewer narrow milk passages reduce the number of hidden pieces an owner has to inspect. <a href="#p32-official">[1]</a></p>
          <p>Easy is not self-cleaning. Separate both pieces after milk use, rinse all milk-contact areas and follow dishwasher guidance for the exact components and local manual. Milk left warm in the carafe should not sit on the counter between drinks. Refrigeration guidance, food-safety time and compatible dishwasher placement deserve more authority than an owner's shortcut.</p>
          <p>The carafe produces an aerated milk texture suitable for automatic cappuccinos and latte macchiatos. It does not expose the fine steam pressure, tip position and rolling phase used for cafe microfoam. Latte-art flexibility is limited, and foam can be more separated from liquid milk. That is a fair trade for someone who presses a button and cleans two pieces under the tap.</p>



        `,
      },
      {
        id: 'workflow',
        eyebrow: 'Daily routine',
        title: 'Drink selection is easy, and the hidden work returns through trays and rinsing',
        html: `
          <p>A direct drink needs little attention. Fill beans and water, place a cup, select beverage, adjust aroma or volume if needed and start. The machine grinds, brews and discards the compressed coffee into its grounds container. Milk recipes add the attached LatteGo but no manual jug pour is necessary. For a household leaving pods, this feels familiar while opening whole-bean choice.</p>
          <p>Startup and shutdown rinses send water through the spouts. The tray collects that water along with internal drainage, so it can look surprisingly full even when no cup overflowed. Empty it by the indicator and household routine, not by assuming all liquid should equal spilled coffee. Rinse the grounds bin and tray, then let components dry to reduce stale odor.</p>



          <p>A two-minute reset protects tomorrow: remove and rinse LatteGo, empty the puck bin when prompted, check tray and tank, wipe the spouts and exterior, and leave wet pieces able to dry. The weekly or scheduled routine adds brew-group rinsing. The machine is easy because coffee preparation is internal, but those internal parts remain accessible only if the owner actually removes and cares for them.</p>
        `,
      },
      {
        id: 'design',
        eyebrow: 'Build and service',
        title: 'A removable brew group is an ownership strength, while discontinued electronics remain the risk',
        html: `
          <p>The 3200 is a predominantly appliance-grade plastic machine with a front control panel, adjustable coffee spouts, side water tank, grounds container, drip tray, bean hopper and service door for the brew group. The exterior is not the reason to buy. The useful build feature is access to the part where coffee is compressed and ejected.</p>


          <p>HomeID maintains an EP3241 support page with manuals, troubleshooting, accessories, spare-parts and repair routes. Philips also routes US parts through an Encompass storefront. Those channels are positive evidence that owners have somewhere to look. They do not prove every brew-group, valve, sensor or board is in stock now or will remain economical throughout ownership. <a href="#p32-homeid">[3]</a> <a href="#p32-parts">[6]</a></p>
          <p>Discontinued status raises the importance of electronics and proprietary assemblies. A cracked LatteGo piece may be easy to identify; an intermittent sensor or drive fault needs diagnosis. Do not open the case around mains voltage, hot-water paths or moving mechanisms. Use the official support or a qualified appliance technician.</p>

        `,
      },
      {
        id: 'owners',
        eyebrow: 'Owner evidence',
        title: 'Owners praise the easy routine and argue over coffee strength, noise and upkeep',
        html: `
          <p>A one-year r/Coffee account covers cleaning, timing and coffee criticism. A separate r/superautomatic discussion mixes satisfaction, maintenance and alternatives; Amazon adds a larger but less controlled EP3241 pool. <a href="#p32-owner-year">[14]</a> <a href="#p32-owner-happy">[15]</a> <a href="#p32-owner-amazon">[16]</a></p>
          <p>None is a survey. The threads can mix milk systems, while retail reviews can mix sellers or closely named items and rarely verify maintenance. Self-selected reports identify questions, not percentages.</p>
          <p>The recurring positive pattern is low daily effort. Owners like pressing a drink button, using ordinary whole beans and rinsing the tubeless milk carafe quickly. The recurring cup criticism is weaker or shorter espresso than expected, especially from people comparing the drink with a cafe portafilter. Changing aroma, volume and grind can help within the machine's design, but it cannot turn the brew group into another category.</p>



        `,
      },
      {
        id: 'ownership',
        eyebrow: 'Cleaning and water',
        title: 'AquaClean reduces some descaling work only when activation and replacement are correct',
        html: `
          <h3>Separate milk, coffee and mineral care</h3>
          <p>LatteGo needs cleaning after milk. The brew group and coffee path collect grounds and oils. The water circuit collects mineral scale. AquaClean filters water but do not clean coffee residue or milk. Treating one filter or tablet as the whole maintenance plan is the easiest way to neglect another system.</p>
          <p>Rinse LatteGo immediately, empty and wash the grounds container and tray regularly, clean the spouts, and rinse the removable brew group on the manual's schedule. Apply the specified food-safe lubricant at the recommended interval and points. Use the documented coffee-oil-removal and descaling products and sequences rather than household substitutes.</p>
          <h3>Activate AquaClean rather than merely placing it in the tank</h3>
          <p>The current family manual describes soaking or preparing the cartridge, installing it and activating the filter through the machine so the counter resets. It references replacement around 95 liters or at least every three months depending on use and conditions. Marketing claims about thousands of cups apply only under a sequence of correctly installed filters and stated conditions; they are not permission to ignore a descale alert. <a href="#p32-manual">[4]</a></p>

          <h3>Buying used means inspecting the hidden coffee area</h3>
          <p>Ask the seller to remove the brew group in the correct power state. Inspect for heavy old grounds, damaged seals, mold odor, cracked parts and excessive lubricant without dismantling the mechanism. Run espresso, coffee, hot water and both LatteGo drinks. Check grinder adjustment, spout flow, tray drainage, leaks, error lights and whether the group returns normally.</p>

        `,
      },
      {
        id: 'compare',
        eyebrow: 'Current and related choices',
        title: 'Compare the 3200 with current De’Longhi models and the broader LatteGo range',
        html: `

          ${comparisonTablesHtml('Philips 3200 Series LatteGo EP3241/54', [
            { name: 'Philips 3200 LatteGo', href: '/espresso-machine/philips-3200-lattego/', priceClass: 'Discontinued; variable remaining stock', quickDecision: 'Choose a supported discount for simple five-drink LatteGo operation.', dimensions: 'Variant specific; verify EP3241/54', heating: 'Automatic thermoblock platform', coffeeSetup: '12-step ceramic grinder; removable brew group', milkWorkflow: 'Two-piece LatteGo carafe', bestFor: 'Simple whole-bean milk drinks' },
            { name: 'De\'Longhi Magnifica Evo', href: '/espresso-machine/delonghi-magnifica-evo/', priceClass: 'Current entry super-automatic tier', quickDecision: 'Choose the clearer current retail route and match the exact milk configuration.', dimensions: 'Check exact ECAM model', heating: 'Automatic thermoblock platform', coffeeSetup: 'Integrated grinder and removable infuser', milkWorkflow: 'LatteCrema or manual by configuration', bestFor: 'Current entry bean-to-cup ownership' },
            { name: 'De\'Longhi Magnifica Plus', href: '/espresso-machine/delonghi-magnifica-plus/', priceClass: 'Higher current tier', quickDecision: 'Pay for more recipes, display guidance and user personalization.', dimensions: 'Full-size automatic appliance', heating: 'Automatic thermoblock platform', coffeeSetup: 'Integrated grinder and removable infuser', milkWorkflow: 'Automatic LatteCrema carafe', bestFor: 'Shared households with broader preferences' },
            { name: 'Philips 4300 LatteGo', href: '/espresso-machine/philips-4300-lattego/', priceClass: 'Related older LatteGo tier', quickDecision: 'Choose more drinks and profiles only after checking its own current lifecycle.', dimensions: 'Related Philips automatic platform', heating: 'Automatic thermoblock platform', coffeeSetup: 'Ceramic grinder and removable brew group', milkWorkflow: 'Two-piece LatteGo', bestFor: 'Several users wanting more personalization' },
            { name: 'Philips 5400 LatteGo', href: '/espresso-machine/philips-5400-lattego/', priceClass: 'Related premium LatteGo tier', quickDecision: 'Choose a broader classic menu, subject to current regional status and price.', dimensions: 'Related Philips automatic platform', heating: 'Automatic thermoblock platform', coffeeSetup: 'Ceramic grinder and removable brew group', milkWorkflow: 'Two-piece LatteGo', bestFor: 'A larger recipe menu on familiar hardware' },
          ], 'The EP3241/54 lifecycle was checked in the US on September 15, 2026. Closely named Philips and De’Longhi machines vary by suffix, milk system, drink list and region; confirm the exact offer.')}
          <p>If the 3200's low complexity is the attraction, do not automatically pay for twenty recipes. If multiple users want profiles, the more advanced machine can remove daily reprogramming. If current support and a clean new purchase matter most, compare current products first and let the old 3200 win only with a transparent discount.</p>
        `,
      },
      {
        id: 'value',
        eyebrow: 'Lifecycle-adjusted value',
        title: 'A $379 refurb can be interesting; an expensive marketplace unit needs much more proof',
        html: `
          <p>There is no current Philips US new price for EP3241/54 because the product is discontinued. Seattle Coffee Gear listed a B-class refurbished 3200 LatteGo at $379 during the September 15, 2026 check, subject to inventory and its own condition terms. That is useful offer context, not a universal typical price or endorsement of a unit Coffeedant has not inspected. <a href="#p32-refurb">[13]</a></p>
          <p>A fair comparison starts with the seller remedy. Add warranty length and covered systems, return shipping, missing accessories, signs of prior use and support availability. A $379 refurb with a meaningful written return may beat a $600 private “like new” machine. A sealed old-stock unit near the price of a current 3300 or Magnifica can be the weaker value despite having no visible wear.</p>



          <p>The value score assumes a properly supported discount, not every listing. At ordinary current-machine pricing it should fall. At a lower specialist-refurb price with a complete carafe, demonstrated operation and real warranty, the simple interface and maintainable brew group can still be a sensible route into whole-bean automation.</p>
        `,
      },
      {
        id: 'related',
        eyebrow: 'Choose a current path',
        title: 'Four nearby machines for different automatic-coffee priorities',
        html: `

          ${recommendationCardsHtml([
            { kicker: 'Current entry route', title: 'De\'Longhi Magnifica Evo', text: 'Compare a current bean-to-cup model with a clearly identified milk configuration and retail remedy.', href: '/espresso-machine/delonghi-magnifica-evo/', linkLabel: 'Read the Magnifica Evo review', featured: true },
            { kicker: 'More personalization', title: 'De\'Longhi Magnifica Plus', text: 'Choose a broader recipe menu and user profiles when several people share the machine.', href: '/espresso-machine/delonghi-magnifica-plus/', linkLabel: 'Read the Magnifica Plus review' },
            { kicker: 'More LatteGo recipes', title: 'Philips 4300 LatteGo', text: 'Keep the two-piece milk idea while adding profiles and drinks, after checking current regional status.', href: '/espresso-machine/philips-4300-lattego/', linkLabel: 'Read the Philips 4300 review' },
            { kicker: 'Premium automatic route', title: 'Jura E8', text: 'Compare a higher-cost one-touch platform when refinement and integrated drink breadth matter more than removable-group access.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read the Jura E8 review' },
          ])}
        `,
      },
      {
        id: 'faq',
        eyebrow: 'Questions before buying',
        title: 'Philips 3200 LatteGo EP3241/54 FAQ',
        html: faqHtml([
          { question: 'Is the Philips 3200 LatteGo discontinued in the US?', answer: 'Yes for EP3241/54. Philips still hosts support and documentation, but it no longer has a normal current new-product price.' },
          { question: 'What is the difference between EP3241/54 and other Philips 3200 machines?', answer: 'EP3241/54 is the US five-drink LatteGo configuration. Other suffixes and regions can change voltage, milk system, iced-coffee program, finish and accessories.' },
          { question: 'How many drinks does it make?', answer: 'Five labeled coffee recipes: espresso, coffee, Americano, cappuccino and latte macchiato, plus hot water.' },
          { question: 'Can I use preground decaf?', answer: 'Yes, one measured portion through the bypass chute after selecting preground mode. Do not add whole beans or multiple scoops to the chute.' },
          { question: 'How often should I clean LatteGo?', answer: 'After milk use. Separate the two pieces and follow the manual\'s rinse or dishwasher guidance so milk does not dry in the channel.' },
          { question: 'Does AquaClean mean I never descale?', answer: 'No. Correct activation and timely replacement can delay descaling under stated conditions, but alerts and water history still determine the supported procedure.' },
          { question: 'Why is the drip tray full when I did not spill?', answer: 'Automatic startup, shutdown and internal rinses send water into the tray. Regular emptying is normal; unexplained external leakage or a sudden change needs troubleshooting.' },
          { question: 'Is a refurbished Philips 3200 worth it?', answer: 'Potentially at a clear discount with complete LatteGo parts, full function testing, a written warranty and an easy return. Condition and remedy matter more than the “refurbished” label alone.' },
        ]),
      },
    ],
    sources: [
      { id: 'p32-official', label: 'Philips US Series 3200 LatteGo EP3241/54 product page', href: 'https://www.usa.philips.com/c-p/EP3241_54/3200-series-fully-automatic-espresso-machines-lattego', note: 'Official archived identity, five drinks, LatteGo, ceramic grinder, controls, capacities and removable brew-group context.' },
      { id: 'p32-support', label: 'Philips US EP3241/54 support page', href: 'https://www.usa.philips.com/c-p/EP3241_54/series-3200-fully-automatic-espresso-machines/support', note: 'Official discontinued US status, manuals, FAQs, troubleshooting and support route. Checked September 15, 2026.' },
      { id: 'p32-homeid', label: 'HomeID EP3241 support hub', href: 'https://www.home.id/en-US/EP3241', note: 'Current official-platform manual, care, troubleshooting, accessories, spare-parts and repair routes.' },
      { id: 'p32-manual', label: 'Philips 800/1200/2200/3200 family manual (2025)', href: 'https://dam.versuni.com/m/43f5d99f5574a42e/original/CO_2025_800-Series_1200-Series_2200-Series_3200-Series_Manual-Philips_EU9.pdf', note: 'Current family instructions for setup, grinder changes, AquaClean, cleaning and brew-group care. Regional scope means US voltage and buttons were checked separately.' },
      { id: 'p32-accessories', label: 'Philips US espresso-machine accessories', href: 'https://us.home-appliances.philips/collections/accessories-collection', note: 'Current filters, descaler and LatteGo accessory route. Compatibility must be checked by exact model.' },
      { id: 'p32-parts', label: 'Philips authorized Encompass parts storefront', href: 'https://philips.encompass.com/', note: 'Official-routed US parts search by EP3241/54. A search result is not proof of complete or future stock.' },
      { id: 'p32-homecoffee', label: 'Home Coffee Expert Philips 3200 LatteGo review', href: 'https://homecoffeeexpert.com/philips-3200-lattego-review/', note: 'Independent hands-on cup, interface, cleaning and value context updated in 2026.' },
      { id: 'p32-coffeeness', label: 'Coffeeness Philips 3200 LatteGo review', href: 'https://www.coffeeness.de/en/philips-3200-series-review/', note: 'Independent use and comparison perspective on coffee, milk and simple operation.' },
      { id: 'p32-toms', label: 'Tom\'s Guide Philips 3200 LatteGo review', href: 'https://www.tomsguide.com/reviews/philips-3200-series-fully-automatic-espresso-machine-w-lattego', note: 'Hands-on cappuccino, cleaning and coffee-quality assessment. Historical price is not current evidence.' },
      { id: 'p32-craft', label: 'Craft Coffee Spot Philips 3200 LatteGo review', href: 'https://craftcoffeespot.com/espresso/philips-3200-lattego-review/', note: 'Independent adjustment, maintenance and value context.' },
      { id: 'p32-scg', label: 'Seattle Coffee Gear Philips 3200 LatteGo Iced Coffee review', href: 'https://www.seattlecoffeegear.com/blogs/scg-blog/philips-3200-lattego-iced-coffee-crew-review', note: 'Independent related-variant demonstration. Iced-coffee features are not assigned to EP3241/54.' },
      { id: 'p32-geardiary', label: 'GearDiary Philips 3200 LatteGo review', href: 'https://geardiary.com/2019/12/02/philips-3200-lattego-super-automatic-espresso-machine-review/', note: 'Independent early ownership and operation perspective. Older market context.' },
      { id: 'p32-refurb', label: 'Seattle Coffee Gear B-class refurbished Philips 3200 listing', href: 'https://www.seattlecoffeegear.com/products/philips-3200-lattego-superautomatic-espresso-machine-b-class-refurbished', note: '$379 and a 90-day retailer warranty observed September 15, 2026. Inventory, condition and terms can change; not a universal price.' },
      { id: 'p32-owner-year', label: 'r/Coffee Philips 3200 LatteGo one-year account', href: 'https://www.reddit.com/r/Coffee/comments/mmqfxy/philips_3200_lattego_my_experience_after_1_year/', note: 'Detailed self-reported one-machine experience. No independent verification or denominator.' },
      { id: 'p32-owner-happy', label: 'r/superautomatic Philips 2200 and 3200 owner discussion', href: 'https://www.reddit.com/r/superautomatic/comments/18576px/are_people_happy_with_the_philips_2200_and_3200/', note: 'Mixed owner reports across related configurations. Used for themes, not rates.' },
      { id: 'p32-owner-amazon', label: 'Amazon EP3241/54 customer-review pool', href: 'https://www.amazon.com/product-reviews/B07VFY4MXM', note: 'Large self-selected retail review pool with possible seller, incentive and variant mixing. No prevalence inference.' },
      { id: 'p32-video', label: 'Tom\'s Coffee Corner Philips 3200 LatteGo review video', href: 'https://www.youtube.com/watch?v=QPLrEOgN6SE', note: 'Independent demonstration published June 7, 2024. Results belong to its unit and variant.' },
      { id: 'p32-warranty', label: 'Philips US warranty support route', href: 'https://www.usa.philips.com/c-w/support-home/warranty.html', note: 'General warranty-information route. Exact coverage for EP3241/54 old stock, refurbished or used offers must be confirmed with the seller.' },
    ],
    finalTitle: 'The final verdict',
    finalVerdict: [
      'The Philips 3200 LatteGo remains appealing because it does a few useful things plainly: five whole-bean drinks, basic adjustment, an accessible brew group and a genuinely simple two-piece milk carafe. It is a strong convenience machine for someone who accepts super-automatic espresso and regular internal care.',
      'US model EP3241/54 is discontinued, so buy only at a lifecycle-adjusted price with complete parts, demonstrated operation, written coverage and a clear return. A $379 supported refurb can be interesting; an expensive marketplace unit should lose to a current Philips or De’Longhi with a cleaner ownership path.',
    ],
  },
  video: {
    id: 'QPLrEOgN6SE',
    title: 'Philips 3200 LatteGo Superautomatic Coffee Machine Review',
    creator: 'Tom\'s Coffee Corner',
    published: '2024-06-07',
    note: 'An independent demonstration of the EP3241 LatteGo workflow. Its cup results belong to the reviewer\'s unit and are not Coffeedant tests.',
  },
  dimensions: [
    {
      id: 'espresso', score: 6.7,
      reason: 'Whole-bean freshness and basic grind, aroma, volume and temperature controls help, but the automatic brew group limits puck and extraction control.',
      buyerMeaning: 'Pleasant convenience espresso and milk-drink bases, not a replacement for a well-dialed portafilter setup.',
      evidenceStatus: 'Official controls with mixed independent cup assessments',
      sourceIds: ['p32-official', 'p32-manual', 'p32-homecoffee', 'p32-coffeeness', 'p32-toms', 'p32-craft'],
      deepDiveId: 'espresso', title: 'Adjust the drink the machine can actually make',
      intro: ['The 3200 gives a small set of meaningful controls. Use them sequentially and judge taste rather than treating pump pressure or grinder numbers as quality scores.'],
      evidence: [
        { signal: 'Coffee input', evidence: 'A 12-setting ceramic grinder and whole-bean hopper feed an internal brew group.', decision: 'More coffee freedom than capsules, less direct control than a portafilter.' },
        { signal: 'Drink controls', evidence: 'Aroma, volume and a few temperature levels are adjustable.', decision: 'Shorten weak coffee before changing every internal setting.' },
      ],
      diagnosis: [
        { signal: 'Watery espresso', guidance: 'Increase aroma or shorten volume, then change grinder one notch while it runs and wait several cups.' },
        { signal: 'Bitter coffee', guidance: 'Try a coarser setting, lower supported temperature or less roasted beans one variable at a time.' },
      ],
    },
    {
      id: 'milk', score: 7.6,
      reason: 'The tubeless two-piece carafe is among the easiest automatic milk systems to rinse, though texture and recipe control are modest.',
      buyerMeaning: 'Excellent for simple cappuccino convenience; less suited to latte art or households wanting many milk profiles.',
      evidenceStatus: 'Documented design, broadly corroborated independently',
      sourceIds: ['p32-official', 'p32-manual', 'p32-homecoffee', 'p32-coffeeness', 'p32-toms', 'p32-geardiary'],
      deepDiveId: 'milk', title: 'Why simple cleaning matters more than maximum foam',
      intro: ['LatteGo succeeds by reducing milk-system pieces and hidden passages. It still needs immediate care, and the foam character remains that of an automatic carafe.'],
      evidence: [
        { signal: 'Construction', evidence: 'Two main milk pieces form the channel without a conventional tube.', decision: 'Fast disassembly reduces a common milk-drink barrier.' },
        { signal: 'Drinks', evidence: 'Cappuccino and latte macchiato are direct selections on EP3241/54.', decision: 'Useful daily range without a large recipe library.' },
      ],
      diagnosis: [
        { signal: 'Coffee disappears under milk', guidance: 'Use stronger aroma, shorter coffee and less milk rather than a longer coffee button.' },
        { signal: 'Carafe splashes', guidance: 'Check assembly, fill level, cup placement and the milk product.' },
      ],
    },
    {
      id: 'workflow', score: 9.1,
      reason: 'Five direct drinks, internal puck handling and simple LatteGo make daily production easy, with tray and brew-group work deferred to cleanup.',
      buyerMeaning: 'Excellent for one or two uncomplicated drinks, less efficient for groups or frequent bean changes.',
      evidenceStatus: 'Documented operation with independent and owner corroboration',
      sourceIds: ['p32-official', 'p32-manual', 'p32-homecoffee', 'p32-toms', 'p32-owner-year', 'p32-owner-happy'],
      deepDiveId: 'workflow', title: 'One-touch drinks and the maintenance they create',
      intro: ['The machine removes grinding and puck handling from the visible routine. Rinse water, grounds and milk cleanup still accumulate and need planned landing places.'],
      evidence: [
        { signal: 'Drink start', evidence: 'Direct buttons control five recipes plus hot water.', decision: 'Low training burden after initial setup.' },
        { signal: 'Coffee waste', evidence: 'Pucks collect internally and startup or shutdown water reaches the tray.', decision: 'Empty tray and bin more often than cup volume suggests.' },
      ],
      diagnosis: [
        { signal: 'Tray fills quickly', guidance: 'Account for automatic rinses and investigate only unexplained changes or external leaks.' },
        { signal: 'A group is waiting', guidance: 'Expect sequential coffee and milk cycles; this is a domestic single-brew system.' },
      ],
    },
    {
      id: 'build', score: 6.8,
      reason: 'The removable brew group improves access, but appliance-grade complexity and discontinued electronics weaken long-term confidence.',
      buyerMeaning: 'Maintainable by super-automatic standards, yet condition and parts support should control a 2026 purchase.',
      evidenceStatus: 'Documented access and parts routes; future stock and incidence unresolved',
      sourceIds: ['p32-support', 'p32-homeid', 'p32-manual', 'p32-parts', 'p32-owner-year', 'p32-owner-happy'],
      deepDiveId: 'design', title: 'Build quality means access, fit and a repair path',
      intro: ['The useful build advantage is being able to remove and rinse the brew group. The risk is a discontinued appliance with several proprietary moving and electronic systems.'],
      evidence: [
        { signal: 'Brew-group access', evidence: 'The internal brew group is owner-removable for rinsing and lubrication.', decision: 'Residue can be addressed without routine case opening.' },
        { signal: 'Consumable access', evidence: 'Official accessories, HomeID and an authorized parts storefront remain.', decision: 'Check exact compatibility and live stock before valuing them.' },
      ],
      diagnosis: [
        { signal: 'Brew group will not move', guidance: 'Restore the machine to the manual-specified power state and never force it.' },
        { signal: 'Buying used', guidance: 'Inspect the coffee cavity, seals, carafe and every drink path during a live demonstration.' },
      ],
    },
    {
      id: 'features', score: 7.3,
      reason: 'The useful basics are present, but profiles, deeper recipe editing and current hot-and-cold menus belong to newer machines.',
      buyerMeaning: 'Enough for a household repeating a few drinks, limiting for several users with distinct recipes.',
      evidenceStatus: 'Official US feature set and current-market comparison',
      sourceIds: ['p32-official', 'p32-support', 'p32-homecoffee', 'p32-scg'],
      deepDiveId: 'orientation', title: 'A simple menu can be a feature or a ceiling',
      intro: ['EP3241/54 offers the decisions most first-time automatic owners use. Newer machines earn their cost only when their extra drinks and profiles are repeated.'],
      evidence: [
        { signal: 'Direct recipes', evidence: 'Five coffee drinks plus hot water cover core black and milk orders.', decision: 'Enough for a simple household without menu scrolling.' },
        { signal: 'Adjustment', evidence: 'Aroma, coffee amount, milk amount and limited temperature control are available.', decision: 'Useful personalization, but not deep recipe design.' },
        { signal: 'Profiles', evidence: 'No multi-user profile system comparable with higher Philips tiers.', decision: 'Several users may overwrite shared settings.' },
      ],
      diagnosis: [
        { signal: 'Several people keep changing volumes', guidance: 'Price a model with explicit user profiles.' },
        { signal: 'Iced drinks drive the purchase', guidance: 'Confirm a current machine with a documented iced program rather than assuming EP3241 has it.' },
      ],
    },
    {
      id: 'value', score: 7.0,
      reason: 'A supported discounted refurb can deliver strong whole-bean and milk convenience, while discontinued old stock near current prices is poor value.',
      buyerMeaning: 'Offer-specific value: condition, complete LatteGo parts and remedy must be priced alongside the machine.',
      evidenceStatus: 'Official lifecycle plus dated refurb and alternatives',
      sourceIds: ['p32-support', 'p32-refurb', 'p32-parts', 'p32-homecoffee', 'p32-coffeeness'],
      deepDiveId: 'value', title: 'How to price a discontinued Philips 3200',
      intro: ['There is no reliable universal street price across old stock, refurbs and private units. Compare each offer as machine plus condition, accessories, shipping and remedy.'],
      evidence: [
        { signal: 'Official status', evidence: 'EP3241/54 is discontinued and has no normal official current new price.', decision: 'Ignore historical MSRP as a discount anchor.' },
        { signal: 'Dated offer', evidence: 'A Seattle Coffee Gear B-class refurb was listed at $379 with a 90-day retailer warranty on September 15, 2026.', decision: 'Useful benchmark only after reading its live condition and terms.' },
      ],
      diagnosis: [
        { signal: 'Marketplace price nears a current machine', guidance: 'Choose current lifecycle unless the 3200 has a specific, documented advantage.' },
        { signal: 'Carafe or brew group is missing', guidance: 'Price exact replacement and availability before considering the offer complete.' },
      ],
      note: 'The score assumes a meaningful discount with support. It should not be applied unchanged to an expensive or undocumented offer.',
    },
  ],
});

// Manifest order for this assigned four-review group.
export const automaticReviews: MachineReviewData[] = [
  nespressoVertuoPlusReview,
  brevilleBaristaTouchReview,
  brevilleOracleTouchReview,
  philips3200LatteGoReview,
];
