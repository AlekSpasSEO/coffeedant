import type { MachineReviewData } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

const official = 'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/INTUITION-PREFERENCE%2B-Bean-to-Cup-Coffee-Machine---Dark-Grey/p/8010001185';
const manual = 'https://dam.groupeseb.com/m/dadfc45f92f7e9ab/original/8020008028-IFU.pdf?timestamp=20250714164208';
const seller = 'https://www.directvacuums.co.uk/krups-ea875u40-bean-to-cup-coffee-machine-maker-intuition-preference-gun-metal.html';
const independent = 'https://www.prorankingi.pl/blog/krups-intuition-preference-ea875u-test-opinia/';
const film = 'https://www.youtube.com/watch?v=QeCOez3OOyI';
const image = 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxMjUzMzF8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzNaaTlvWldZdk1qWTRPRGMwT1RreU5URTNOREl8YWQ2OGMyNzBjZGNhMDYyYTJhYTA4YTIzZDcxMGExODdkNjM3NDg0MTI2ZDRmY2IyYzQ3NTViZjA1YTM2MDI5OQ';

const profile: UpgradeReviewProfile = {
  key: 'krups-intuition-preference-ea875u40', slug: '/espresso-machine/krups-intuition-preference-ea875u40/', productId: 'CD-EM-000192',
  brand: 'Krups', model: 'Intuition Preference+ EA875U40', sku: 'UK EA875U40, Urban Metal, UK plug', category: 'Superautomatic espresso machine', brandPath: '/krups/',
  title: 'Krups Intuition Preference+ EA875U40 review: 15 drinks',
  description: 'Exact UK EA875U40 research review: 15 drinks, two profiles, paired milk, five-step grinder, cleaning, Polish EA875U test and dated refurbished price.',
  verdictLabel: 'Two-user convenience at a much lower refurbished price',
  verdict: 'Consider the UK EA875U40 if two people will use its colour-coded profiles, paired milk drinks and 15-recipe menu. Krups UK documents five grinder positions, three temperature levels, a 3 L tank and 250 g hopper. On September 24, 2026 an exact manufacturer-refurbished unit was in stock for £429.99 with a one-year reseller guarantee, far below a £999.99 new listing. Compare condition, warranty and milk cleaning before choosing the discount.',
  assessment: 'This is a research-led judgment, not Coffeedant tasting. Łukasz Proszek independently tested a Polish EA875U and filmed its espresso workflow, but that unit is not a confirmed UK EA875U40 rating plate. Exact UK specifications come from Krups UK. The adjacent-market test supplies bounded workflow and cup observations without transferring its measurements or long-term reliability.',
  image, imageAlt: 'Krups UK official front image of dark-grey EA875U40 preparing two layered milk drinks',
  published: '2026-07-27', updated: '2026-09-24',
  price: { label: 'Exact UK EA875U40 manufacturer-refurbished listing', msrp: '£999.99 current new Home & Cook listing and seller reference', typical: 'DirectVacuums displayed £429.99 and in stock on September 24, 2026 for a manufacturer-refurbished EA875U40 with a one-year reseller guarantee. Home & Cook listed a new exact article at £999.99. Refurbished condition and coverage make these offers non-equivalent.', currency: 'GBP', numeric: '429.99', checked: 'September 24, 2026' },
  links: [
    { label: 'Check exact refurbished stock', href: seller, note: '£429.99 in stock September 24, 2026; manufacturer refurbished with one-year reseller cover', primary: true },
    { label: 'Read exact Krups UK specification', href: official, note: '15 recipes, profiles, milk, grinder, capacity and care details' },
  ],
  facts: [
    { label: 'Exact market', value: 'UK EA875U40 in Urban Metal finish with 220–240 V and UK plug in the Krups UK table' },
    { label: 'Recipes', value: '15 named black, milk, hot-water and tea programs; no cold-drink menu documented' },
    { label: 'Profiles', value: 'Two colour-coded profiles, each with up to seven saved recipes' },
    { label: 'Coffee controls', value: 'Five manual grinder positions, three temperature levels and adjustable quantity; variable 6–9 g brewing unit in official table' },
    { label: 'Milk', value: 'One Touch Cappuccino x2 with automatic milk rinse/cleaning program; tube still needs rinsing after use' },
    { label: 'Capacities', value: '3 L water, 250 g beans, nine-puck collector and 14 cm maximum outlet clearance' },
    { label: 'Power conflict', value: 'Krups UK page lists both 1450 W and 1550 W in different table rows; seller lists 1450 W, so delivered label controls' },
  ],
  quickAnswers: [
    { question: 'Is this the exact UK EA875U40?', answer: 'Yes. Krups UK identifies EA875U40, Urban Metal finish and a UK plug. Polish EA875U testing remains adjacent-market evidence.' },
    { question: 'How many user profiles?', answer: 'Two, with up to seven favourite recipes in each. It is not the eight-profile Experience+.' },
    { question: 'Can it make two milk drinks?', answer: 'Krups UK lists One Touch Cappuccino x2. Polish testing found uneven delivery once, then a more similar repeat; that single unit does not establish a general fault.' },
    { question: 'Does automatic cleaning remove milk work?', answer: 'No. The machine has automatic programs, but Krups explicitly tells owners to rinse the milk tube after each use and maintain food-contact parts.' },
    { question: 'Is £429.99 a new-machine price?', answer: 'No. It was an in-stock manufacturer-refurbished exact-model offer with a one-year reseller guarantee on September 24, 2026.' },
    { question: 'Is power 1450 W or 1550 W?', answer: 'The exact manufacturer page contradicts itself by listing both. The reseller says 1450 W. Check the delivered rating plate rather than averaging them.' },
  ],
  bestFor: ['Two-person households that will use separate favourites', 'Milk-drink buyers who value paired one-touch service', 'UK shoppers comfortable with a clearly described refurbished unit and reseller warranty'],
  avoidIf: ['You need cold-drink presets or more than two profiles', 'You want an owner-removable brew module for internal cleaning', 'You require a factory-new £429.99 checkout or a two-year guarantee at that price'],
  pros: ['Exact UK page documents 15 recipes and two seven-favourite profiles', 'Paired automatic milk drinks and 3 L reservoir', 'Five grinder positions and three temperature settings', 'Large gap between dated refurb and new list prices'],
  cons: ['Milk tube and external parts still need hands-on cleaning', 'Only two profiles versus eight on Experience+', 'Official page conflicts on 1450 W versus 1550 W', 'Independent test covers Polish EA875U, not confirmed UK plate'],
  architecture: 'a UK-plug automatic bean-to-cup machine with metal conical burr grinder, compact thermoblock, 3.5-inch colour TFT, dual outlet and external automatic milk tube',
  identityBoundary: 'This page covers UK EA875U40 in Urban Metal. Polish EA875U is adjacent-market context. EA873810, Essential EA870840 and Experience+ EA877D40 differ in article, recipe, profile and milk details; claims do not transfer automatically.',
  primaryStrength: 'Two colour-coded profiles and paired milk service turn a broad 15-drink menu into a practical two-person routine.',
  primaryLimit: 'The discounted listing is refurbished with shorter seller cover, while milk hygiene and internal service access still need careful ownership planning.',
  setupNote: 'Confirm EA875U40, UK plug, rating plate, milk tube and delivered manual. Krups lists 3 L water, 250 g beans, nine used pucks and 14 cm cup clearance. Set water hardness, complete the initial rinse and leave room above the tank and hopper.',
  espressoNote: 'The exact UK table names ristretto, espresso, lungo, long coffee, Americano and doppio, with five grind positions and three temperatures. Proszek found distinct black-drink profiles on his Polish EA875U and preferred some drinks at the finest setting, but taste depended on his Lavazza beans and palate. Coffeedant did not reproduce those results. Fifteen bar is a pump rating.',
  milkNote: 'Krups lists espresso macchiato, cappuccino, latte macchiato, flat white, caffè latte, frothed milk and two white cups in one cycle. Proszek praised foam on his Polish unit while noting asymmetry during an early paired trial; a later repeat was more even. Treat that as one tester’s observation, then check the delivered spouts and clean the tube and nozzle parts.',
  workflowNote: 'The 3.5-inch touch display, red maintenance light and two colour-coded profiles reduce repeat selection. Each profile holds seven recipes. Proszek found the controls useful and grinder reasonably quiet, while some drinks were slower than machines he knew.',
  buildNote: 'Krups documents a metal conical burr grinder, front-access maintenance, anti-overflow tray and model-indexed consumables. Its 15-year repairability statement is not a 15-year guarantee or predicted life. The official table conflicts on wattage, so the delivered label controls.',
  featuresNote: 'Useful extras are paired black and milk drinks, two profiles, adjustable strength, length, milk and grind, tea settings and maintenance prompts. No cold menu or smartphone app is documented for exact EA875U40. Colour lighting guides status and profile identity.',
  valueNote: 'On September 24, 2026 DirectVacuums had an exact manufacturer-refurbished EA875U40 at £429.99 with one-year reseller cover, while Home & Cook listed a new exact unit at £999.99. The £570 gap is material, but condition, returns and warranty differ. Include consumables and possible out-of-cover service.',
  ownerPattern: 'Selected Galaxus EA875U submissions praised ease, quietness and milk foam, while one summary used negative reliability labels. A Reddit thread about EA873810 included one commenter describing a repair after two years and another making broad internal-cleanliness claims. Neither source supplies a representative denominator or exact UK EA875U40 diagnosis.',
  ownerCaution: 'Self-selected comments cannot establish failure rates. EA873810 is not EA875U40, and short reviews lack consistent maintenance records or confirmed diagnoses. Use them to frame warranty and service questions, not to predict a particular unit.',
  maintenanceNote: 'Krups says to rinse the milk tube after each use, follow prompted coffee-circuit cleaning with the specified tablet, replace the filter as directed and descale when prompted. Automatic rinsing sends residual water to the tray and does not wash every detachable milk-contact surface. Stop and seek qualified service for leaks, electrical smells or persistent faults.',
  dimensions: {
    espresso: { score: 7.8, claim: 'Five grind positions, three temperatures and six black-coffee programs provide documented control.', consequence: 'Useful range still depends on beans and repeated adjustment; no Coffeedant cup measurement exists.', status: 'Exact Krups UK table plus bounded Polish EA875U test', signals: ['Six black recipes and a 6–9 g variable brew-unit listing.', 'Five grinder positions and three coffee temperatures.', 'Polish taste findings are not UK lab results.'] },
    milk: { score: 8.1, claim: 'One Touch Cappuccino x2 covers paired milk drinks with a separate tube and vessel.', consequence: 'Convenience is strong, but delivery balance and sanitation need checking in the real routine.', status: 'Exact UK table and one Polish test unit', signals: ['Two white cups per official cycle.', 'Independent reviewer liked foam on his beans and milk.', 'Tube rinse and nozzle care remain.'] },
    workflow: { score: 8.4, claim: 'Two seven-favourite profiles and coloured guidance fit a two-user household.', consequence: 'A larger household may outgrow the profile count; maintenance prompts still interrupt service.', status: 'Exact UK product page and Polish workflow evaluation', signals: ['3.5-inch colour TFT and red maintenance lighting.', 'Two profiles, seven favourites each.', 'Three-litre tank reduces refill frequency, not cleaning.'] },
    build: { score: 7.2, claim: 'Official parts, repair path and a metal grinder are traceable, but lifespan is not quantified.', consequence: 'Condition and coverage matter greatly on the refurbished offer.', status: 'Official UK support, seller terms and anecdotal owner context', signals: ['Front-access tray and model-indexed consumables.', 'One-year seller guarantee on the dated refurb.', '15-year repairability is not a product warranty.'] },
    features: { score: 7.9, claim: 'The feature set prioritises hot drinks, paired milk and saved recipes rather than apps or cold menus.', consequence: 'Pay for repeated tasks you will use, not lighting alone.', status: 'Exact manufacturer table; no app or cold function verified', signals: ['15 hot drink and water/tea recipes.', 'Two profiles with colour identity.', 'No exact-model smartphone control documented.'] },
    value: { score: 8.0, claim: 'The dated £429.99 refurb undercuts a £999.99 new listing by £570.', consequence: 'The discount is compelling only if refurbished condition and one-year cover suit your risk tolerance.', status: 'Exact in-stock DirectVacuums and Home & Cook listings, September 24, 2026', signals: ['Exact refurbished checkout displayed in stock.', 'New exact article listed at £999.99.', 'Consumables and service remain ownership costs.'] },
  },
  sources: [
    { label: 'Krups UK exact EA875U40 product and specification', href: official, note: 'UK plug, 15 recipes, two profiles, five grind levels, capacities, milk programs, cleaning, support and conflicting power rows; checked September 24, 2026.' },
    { label: 'Krups UK EA875U40 instruction PDF', href: manual, note: 'Exact manufacturer-linked manual; detailed procedures should be checked against the delivered revision.' },
    { label: 'DirectVacuums exact UK EA875U40 refurbished offer', href: seller, note: '£429.99, in stock September 24, 2026, manufacturer refurbished with one-year guarantee and £999.99 seller reference.' },
    { label: 'PROrankingi independent Polish EA875U hands-on', href: independent, note: 'Łukasz Proszek test, updated May 31, 2026, including drinks, interface, milk, paired-cup variation and cleaning; Polish unit, not confirmed UK EA875U40 plate.' },
    { label: 'PROrankingi independently filmed EA875U espresso', href: film, note: 'October 13, 2022, 1:01 espresso workflow from the same independent Polish evaluation; no UK rating plate or Coffeedant measurement.' },
    { label: 'Home & Cook UK Krups bean-to-cup listing', href: 'https://www.homeandcook.co.uk/category/24/krups-bean-to-cup', note: 'Exact EA875U40 new listing displayed £999.99 on September 24, 2026; category listing did not establish checkout stock in research.' },
    { label: 'Krups UK manufacturer warranty terms', href: 'https://www.krups.co.uk/warranty', note: 'Manufacturer policy and repair path; compare exact delivered seller coverage and refurbished exclusions.' },
    { label: 'Reddit EA873810 Preference-family discussion', href: 'https://www.reddit.com/r/superautomatic/comments/1ipmh4w/krups_intuition_preference_ea873810_is_it_good/', note: 'Prospective-buyer thread with selected critical replies about a different Preference article; no exact UK EA875U40 failure-rate inference.' },
    { label: 'Galaxus EA875U selected customer ratings', href: 'https://www.galaxus.de/en/s2/product/ratings/krups-intuition-preference-ea875u-automatic-coffee-makers-49292412', note: 'Small self-selected set with positive ease/noise/foam labels and a negative reliability label; region and exact UK suffix not established.' },
    { label: 'Krups Poland EA875U regional product page', href: 'https://www.krups.com.pl/%C5%9Awiat-kawy/Ekspresy-automatyczne/Ekspres-automatyczny-KRUPS-INTUITION-PREFERENCE%2BEA875U/p/8010000990', note: 'Regional EA875U identity context for the Polish independent test, not authority for UK package, plug or warranty.' },
  ],
  comparisons: [
    { name: 'Krups Intuition Preference+ EA875U40', quickDecision: 'Two profiles and paired milk at a dated £429.99 refurb price.', priceClass: '£429.99 refurb / £999.99 new listing Sep 24', dimensions: '14 cm outlet; 3 L tank', heating: 'Compact thermoblock', coffeeSetup: '15 recipes, five grind steps', milkWorkflow: 'Paired auto milk; tube rinse', bestFor: 'Two-user favourites' },
    { name: 'Krups Intuition Experience+ EA877D40', href: '/espresso-machine/krups-intuition-experience-ea877d40/', quickDecision: 'Eight profiles, 21 recipes and cold-labelled options.', priceClass: '£379.99 sold-out refurb Sep 24', dimensions: '14 cm outlet; 3 L tank', heating: 'Compact thermoblock', coffeeSetup: '21 recipes, 13 grind steps', milkWorkflow: 'Paired auto milk; manual deep clean', bestFor: 'Larger shared menu' },
    { name: 'Krups Evidence One EA895N40', href: '/espresso-machine/krups-evidence-one-ea895n40/', quickDecision: 'Simpler paired milk and fewer saved favourites.', priceClass: '£499 sold-out listing Sep 24', dimensions: '15 cm outlet limit', heating: 'Automatic thermoblock', coffeeSetup: '12 recipes, 17 choices', milkWorkflow: 'Paired auto milk with hose cleaning', bestFor: 'Simpler automatic milk' },
  ],
  comparisonNote: 'Compare exact UK article, live stock, condition, warranty, profile count, milk cleanup and which menus remove real daily work. EA873810 and Polish EA875U are context, not interchangeable UK offers.',
  recommendations: [
    { kicker: 'More profiles', title: 'Krups Intuition Experience+ EA877D40', text: 'Eight profiles, wider menu and carefully bounded cold labels.', href: '/espresso-machine/krups-intuition-experience-ea877d40/', linkLabel: 'Read Experience+ review', featured: true },
    { kicker: 'Simpler milk', title: 'Krups Evidence One EA895N40', text: 'Paired milk drinks with fewer profile and cold-menu claims.', href: '/espresso-machine/krups-evidence-one-ea895n40/', linkLabel: 'Read Evidence One review' },
    { kicker: 'Manual milk', title: 'Krups Intuition Essential EA870840', text: 'Keep black-coffee automation and texture milk yourself.', href: '/espresso-machine/krups-intuition-essential-ea870840/', linkLabel: 'Read Intuition Essential review' },
    { kicker: 'Category context', title: 'Superautomatic buying guide', text: 'Compare automatic milk, brewer care, profiles and total ownership cost.', href: '/espresso-machine/superautomatic/', linkLabel: 'Read superautomatic guide' },
  ],
  faqs: [
    { question: 'Is EA875U40 the same as EA875U?', answer: 'EA875U describes the family used in Polish testing. This page reviews UK EA875U40. Regional plug, package, firmware and warranty are not assumed identical.' },
    { question: 'How many drinks and profiles?', answer: 'Krups UK lists 15 recipes and two colour-coded profiles, each storing up to seven favourites.' },
    { question: 'Can it prepare two cappuccinos together?', answer: 'The exact table lists One Touch Cappuccino x2 and two white cups per cycle. One Polish test saw early asymmetry and later a more even repeat, so inspect and clean both outlets.' },
    { question: 'Is the milk system self-cleaning?', answer: 'It has automatic rinse and cleaning programs, but Krups still directs the owner to rinse the tube after each use and maintain detachable milk-contact parts.' },
    { question: 'Which power figure is correct?', answer: 'The exact Krups page lists both 1450 W and 1550 W; the reseller says 1450 W. Use the delivered rating plate and manual for electrical planning.' },
    { question: 'Does it make cold coffee or connect to an app?', answer: 'Neither a cold menu nor smartphone connectivity was verified on the exact UK materials. Those features should not be transferred from another Intuition model.' },
    { question: 'Was £429.99 available?', answer: 'Yes, DirectVacuums showed the exact manufacturer-refurbished EA875U40 in stock at £429.99 on September 24, 2026, with a one-year reseller guarantee. It was not a factory-new offer.' },
  ],
  finalTitle: 'A strong two-profile refurb, with milk work included',
  finalVerdict: [
    'The UK EA875U40 documents 15 recipes, two seven-favourite profiles, paired milk, five grinder positions and a 3 L tank. Its interface simplifies a two-person routine, while milk parts and prompted care remain real work.',
    'The Polish EA875U test offers bounded workflow context and one paired-cup caution without becoming UK testing. At £429.99 refurbished, condition and one-year seller cover decide value. Buyers wanting more profiles or cold-labelled recipes should compare Experience+.',
  ],
  video: { id: 'QeCOez3OOyI', title: 'KRUPS Intuition Preference+ EA875U - Parzenie Espresso', creator: 'PROrankingi', published: '2022-10-13', note: 'Independent 1:01 Polish EA875U espresso demonstration linked to Łukasz Proszek’s full hands-on review. UK EA875U40 plate, measurements and regional equivalence are not established.' },
};

profile.sectionOverrides = {
  ownership: `<p>${profile.ownerPattern} These reports identify questions worth asking, not a forecast for an exact UK machine.</p>
    <aside class="review-community-evidence" aria-labelledby="preference-owner-title"><h3 id="preference-owner-title">Selected owner evidence kept in proportion</h3><ul>
    <li><strong>EA875U retailer ratings</strong><p>A small set praised easy operation, quietness and milk foam, while one summary used negative reliability language. The submissions do not identify a representative sample, UK suffix or consistent service history.</p></li>
    <li><strong>EA873810 family discussion</strong><p>A prospective buyer received critical replies, including one commenter describing a repair after two years. It is a different article and no technician report or incidence rate was supplied.</p></li>
    </ul><p class="review-community-evidence-note">The evidence is readable here without outbound links in this panel. Original addresses and scope limits remain in the annotated source list.</p></aside><p>${profile.ownerCaution}</p>`,
};

export const upgradeKrupsIntuitionPreferenceReviews: MachineReviewData[] = [buildUpgradeReview(profile)];
