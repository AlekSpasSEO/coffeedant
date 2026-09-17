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

const UPDATED = '2026-09-17';
const disclosure = 'This is a research-led grinder assessment built from current manufacturer documentation, independent hands-on reviews and demonstrations, community discussions, and dated US price context. Coffeedant has not physically tested this grinder. Scores are editorial judgments about the documented ownership proposition, not Coffeedant measurements.';
const refs = (ids: string[]) => ids.map((id) => `<a href="#${id}">[source]</a>`).join(' ');
const dimension = (
  id: ResearchDimensionInput['id'], score: number, reason: string, buyerMeaning: string,
  evidenceStatus: string, sourceIds: string[], deepDiveId: string, title: string,
  intro: string[], evidence: ResearchDimensionInput['evidence'],
  diagnosis: ResearchDimensionInput['diagnosis'], note: string, label?: string,
): ResearchDimensionInput => ({ id, label, score, reason, buyerMeaning, evidenceStatus, sourceIds, deepDiveId, title, intro, evidence, diagnosis, note });

const kultraSources: Source[] = [
  { id: 'kultra-official', label: '1Zpresso: K-Ultra product page', href: 'https://1zpresso.coffee/product/kultra/', note: 'Current price, heptagonal K burr, 20-micron external adjustment, capacity, dimensions, weight, materials, package contents and manufacturer life claim; checked September 17, 2026.' },
  { id: 'kultra-calibration', label: '1Zpresso: grinder calibration guide', href: 'https://1zpresso.coffee/calibration/', note: 'Official zero-point calibration procedure and warning not to overtighten the burr at zero.' },
  { id: 'kultra-cleaning', label: '1Zpresso: external adjustment cleaning guide', href: 'https://1zpresso.coffee/tag/cleaning/', note: 'Official maintenance route for external-adjustment grinders; supports dry cleaning and correct reassembly rather than washing the burr set.' },
  { id: 'kultra-return', label: '1Zpresso: return and warranty policy', href: 'https://1zpresso.coffee/returnpolicy/', note: 'Direct-store return conditions and one-year limited warranty context; retailer and regional terms can differ.' },
  { id: 'kultra-recipe', label: '1Zpresso: coffee recipes', href: 'https://1zpresso.coffee/recipe/', note: 'Manufacturer recipe library used only to frame settings as starting points rather than universal prescriptions.' },
  { id: 'kultra-adcafe', label: '1Zpresso: AD Cafe K-Ultra interview and review summary', href: 'https://1zpresso.coffee/kultra-review-adcafe/', note: 'Manufacturer-hosted third-party perspective describing a sweetness, body and balance emphasis. It is not treated as independent editorial evidence.' },
  { id: 'kultra-way', label: 'The Way to Coffee: 1Zpresso K-Ultra review', href: 'https://www.thewaytocoffee.com/1zpresso-k-ultra-manual-grinder-review/', note: 'Independent daily-use review covering switching among espresso, V60, AeroPress and French press, plus ergonomics and dial-in experience.' },
  { id: 'kultra-homeexpert', label: 'Home Coffee Expert: 1Zpresso K-Ultra review', href: 'https://homecoffeeexpert.com/1zpresso-k-ultra-review/', note: 'Independent review that rates consistency and usability highly while identifying price and espresso specialization as limits.' },
  { id: 'kultra-coffeegeek', label: 'CoffeeGeek: 1Zpresso X-Ultra first look and K-Ultra comparison', href: 'https://coffeegeek.com/reviews/firstlooks/1zpresso-x-ultra-versatile-manual-grinder-first-look-review/', note: 'Hands-on family comparison used for relative K-Ultra, J-Ultra and X-Ultra positioning, not as a direct K-Ultra measurement source.' },
  { id: 'kultra-video', label: 'Daddy Got Coffee: 1Zpresso K-Ultra - How It Won Me Over', href: 'https://www.youtube.com/watch?v=S6exSDpF_Ek', note: 'Independent long-form review published July 20, 2024, used for visible workflow, adjustment and cup-character context.' },
  { id: 'kultra-blind', label: 'Kyle Rowsell: Niche Zero vs 1Zpresso K-Ultra blind tasting', href: 'https://www.youtube.com/watch?v=8lKVs8NT2D8', note: 'Independent espresso and pour-over comparison published April 12, 2023. One tasting cannot establish universal flavor performance.' },
  { id: 'kultra-community', label: 'Reddit r/pourover: is the K-Ultra really that good?', href: 'https://www.reddit.com/r/pourover/comments/1s7v20k/is_the_1zpresso_kultra_really_that_good/', note: 'Recent owner discussion with mixed coffee and grinder contexts. Anecdotes identify questions and preferences, not defect rates.' },
  { id: 'kultra-settings', label: 'Reddit r/pourover: K-Ultra grind-setting discussion', href: 'https://www.reddit.com/r/pourover/comments/1j26v9t/no_harm_in_asking_again_what_are_your_kultra/', note: 'Community settings pool showing why coffee, brewer and zero point must accompany any number.' },
  { id: 'kultra-espresso', label: 'Reddit r/1zpresso: K-Ultra or J-Ultra for espresso', href: 'https://www.reddit.com/r/1zpresso/comments/1b45495/kultra_over_jultra_specifically_for_espresso/', note: 'Owner debate about all-round flexibility versus espresso-focused adjustment. It does not provide controlled comparative testing.' },
];

const kultraSections: Section[] = [
  {
    id: 'orientation', eyebrow: 'The decision in plain English', title: 'A premium hand grinder for the person who refuses to choose one brew method', html: `
      <p>The 1Zpresso K-Ultra is a premium all-round manual grinder. Its heptagonal burr, external numbered adjustment and magnetic cup move from espresso to filter without hidden clicks. That flexibility is the reason to pay $259, not a promise to beat every specialist.</p>
      <p>This is the current K-Ultra, product ID CD-GR-000001. 1Zpresso specifies 100-plus 20-micron clicks, a 35 to 40 gram cup, folding handle, 700 gram weight and 19.5 by 18.5 by 6 centimeter dimensions. Its 100 to 200 kilogram life estimate is a maker claim, not Coffeedant testing. ${refs(['kultra-official','kultra-return'])}</p>
      <p>Independent reviews support quick adjustment, sweet and full filter cups, and credible espresso. The boundary is equally clear: J-Ultra offers smaller espresso changes, while clarity-first filter drinkers may prefer a narrower specialist. ${refs(['kultra-way','kultra-homeexpert','kultra-video'])}</p>
      <p><strong>My short verdict:</strong> choose K-Ultra when one quiet grinder must cover several brewers and travel. Skip it for repeated espresso, powered convenience or maximum filter separation.</p>
      <p>The one-year limited warranty makes seller choice relevant. Confirm who handles a claim and whether return freight is included before treating the direct price as the complete ownership offer.</p>
      <div class="review-callout"><strong>Rating scope:</strong> filter brewing has its own score here, separate from espresso, workflow, build, features and value.</div>`,
  },
  {
    id: 'setup', eyebrow: 'The first week', title: 'Calibrate once, record the zero, then make settings meaningful', html: `
      <p>Calibrate an empty grinder at the defined burr-touch point, without forcing a prettier zero. Record that reference because another unit’s setting can differ after cleaning or reassembly. ${refs(['kultra-calibration','kultra-settings'])}</p>
      <ol>
        <li><strong>Day 1:</strong> inspect, calibrate and learn how the magnetic cup seats.</li>
        <li><strong>Days 2 and 3:</strong> tune one filter coffee while holding dose and recipe steady.</li>
        <li><strong>Days 4 and 5:</strong> dial a medium-roast espresso one click at a time.</li>
        <li><strong>Days 6 and 7:</strong> switch between written settings and judge the real household workflow.</li>
      </ol>
      <p>Charts choose a neighborhood, not a coordinate. Zero, coffee, dose, water, brewer and recipe move the useful point; taste and flow decide where to stop. ${refs(['kultra-recipe','kultra-settings'])}</p>
      <p>Buy a scale before accessories. Clean with a brush and blower, keep internals dry, and check assembly and calibration after maintenance.</p>
      <p>Test the written filter and espresso settings twice after reassembly. A large unexplained shift usually points to calibration or part order before it points to changed burr performance.</p>`,
  },
  {
    id: 'espresso', eyebrow: 'Rating deep dive', title: 'Espresso performance: capable, repeatable, and still limited by 20-micron steps', html: `
      <p>K-Ultra reaches unpressurized espresso, as its range, independent use and comparison work show. Not every coffee lands perfectly on a click; a small dose or yield change can bridge adjacent settings. ${refs(['kultra-official','kultra-way','kultra-blind'])}</p>
      <p>Start with a comfortable basket dose, perhaps 18 grams in and 36 out. These are editorial guidance, not test results. Move finer for a thin, fast shot and coarser for a choking, dry one. Change dose only when clicks bracket the target, and record it.</p>
      <p>Fine, light-roast grinding takes more effort. One dose is quiet and manageable; four become production work. The cup transfers neatly, but grounds still need distribution.</p>
      <p>Choose K-Ultra when filter matters equally. Choose an espresso specialist when smaller steps and repeated shots dominate. Owner debate reflects that workload and preference split. ${refs(['kultra-espresso','kultra-coffeegeek'])}</p>
      <p>For two coffees, purge only enough to separate flavors and weigh output. That keeps retention management proportionate instead of wasting beans in pursuit of an unrealistic zero.</p>`,
  },
  {
    id: 'filter', eyebrow: 'Rating deep dive', title: 'Filter performance: sweetness and body are the center of gravity', html: `
      <p>Independent reviewers commonly describe balanced filter cups with sweetness, body and useful separation. A manufacturer-hosted AD Cafe feature agrees but remains separate from independent evidence. These are recipe-dependent tendencies, not guarantees. ${refs(['kultra-adcafe','kultra-way','kultra-video'])}</p>
      <p>Start in the maker’s broad range, then follow taste and drawdown. Fast and sharp may need finer grinding; slow and drying may need coarser grinding or gentler pouring. Not every problem belongs to the dial.</p>
      <p>The K burr favors a more integrated cup than a clarity specialist. That suits sweetness and texture, but not every floral-note seeker. Owner discussion reflects the same preference split. ${refs(['kultra-community','kultra-homeexpert'])}</p>
      <p>The 35 to 40 gram cup supports AeroPress, immersion and larger pour-overs. Full loads and light beans increase effort, so frequent two-person batches still favor electricity.</p>
      <p>Water and pouring can mask grind changes. Hold temperature, filter rinse and agitation steady for two brews before concluding that one click changed the cup in the expected direction.</p>`,
  },
  {
    id: 'workflow', eyebrow: 'Rating deep dive', title: 'Workflow: the external dial and magnetic cup do most of the work', html: `
      <p>The external ring makes espresso and filter settings visible and repeatable. A folding handle packs closer, while the magnetic cup avoids a long thread. These choices remove daily friction. ${refs(['kultra-official','kultra-video'])}</p>
      <p>Seat the cup deliberately and hold the body while grinding. At 700 grams the tool feels planted but suits luggage better than ultralight travel.</p>
      <p>Method changes can carry over a few particles. A small purge may help between very different coffees, though Coffeedant has not measured retention. Written settings beat a borrowed chart.</p>
      <p>There is no motor whine, but the user supplies the work. One or two drinks fit; large batches, repeated espresso or limited grip favor electricity.</p>
      <p>The magnetic cup speeds removal but is not a lock. Seat it before loading, keep fingers on the grinder body, and empty it before carrying the tool across a room.</p>`,
  },
  {
    id: 'build', eyebrow: 'Rating deep dive', title: 'Build and care: precise metalwork still needs gentle maintenance', html: `
      <p>Listed steel, aluminum alloy, polycarbonate, silicone and wood make a dense tool. Reviewers praise the adjustment, cup and handle, but those observations do not prove lifespan. ${refs(['kultra-official','kultra-way','kultra-homeexpert'])}</p>
      <p>The estimated 100 to 200 kilogram burr life remains a maker claim under unspecified conditions. Bean hardness, objects, care and handling alter real life.</p>
      <p>Clean dry with the brush and blower. Keep burrs and bearings out of water, preserve part order and recalibrate gently after disassembly. ${refs(['kultra-cleaning','kultra-calibration'])}</p>
      <p>Jams, rough bearings or damage deserve support, not force. Confirm seller, regional logistics and the one-year limited coverage before buying.</p>
      <p>Material quality cannot prevent damage from a dropped grinder or a stone among the beans. Stop immediately when rotation changes suddenly and inspect the empty mechanism under good light.</p>`,
  },
  {
    id: 'features', eyebrow: 'Rating deep dive', title: 'Features: useful mechanical choices, with no attempt to automate dosing', html: `
      <p>The numbered ring, folding handle and magnetic cup each improve a repeated action. More than 100 clicks cover a practical range, but there is no timer, scale, motor or memory.</p>
      <p>Twenty microns describes burr travel per step, not every particle’s diameter. It is a relative adjustment-resolution specification. ${refs(['kultra-official','kultra-coffeegeek'])}</p>
      <p>The 35 to 40 gram capacity covers many filter recipes, with bean density changing actual volume. Stop below the brim; espresso uses less capacity but more effort.</p>
      <p>The case, brush and blower limit day-one extras. Add a scale and only workflow-solving accessories, or the premium manual proposition quickly loses value.</p>
      <p>A dosing funnel can help a narrow espresso basket, but it does not improve grind distribution. Add one for cleaner transfer only after observing actual spill patterns.</p>`,
  },
  {
    id: 'value', eyebrow: 'Rating deep dive', title: 'Value: $259 is sensible only when the all-round brief is real', html: `
      <p>The $259 direct price buys manual range, not a motor or timed dosing. Mixed-method households can replace several entry grinders; filter-only buyers may never use what they fund. ${refs(['kultra-official'])}</p>
      <p>Electric rivals handle repeat shots, cheaper manuals sacrifice refinement, and specialists tune one method more closely. K-Ultra wins when quiet flexibility and mechanics all matter.</p>
      <p>There are few consumables, but dial-in coffee and damage from water, drops or foreign objects remain costs. Use the case.</p>
      <p>Do not justify price with the maker’s kilogram estimate. Faster adjustment, a pleasant cup and credible range form the stronger daily case.</p>
      <p>Price the time as well as the tool. A buyer who enjoys one quiet dose may value the ritual; a rushed household can find the same labor expensive.</p>`,
  },
  {
    id: 'comparison', eyebrow: 'The shortlist', title: 'K-Ultra alternatives: specialist precision, powered convenience or lower cost', html: `
      <p>A useful comparison starts with the task you want to avoid. If hand effort is the problem, compare an electric grinder rather than another polished crank. If espresso click size is the problem, compare a specialist manual model. If price is the problem, accept a simpler finish before sacrificing the grinder budget elsewhere.</p>
      ${comparisonTablesHtml('1Zpresso K-Ultra', [
        { name: '1Zpresso K-Ultra', quickDecision: 'Best when one premium hand grinder must cover espresso and filter.', priceClass: '$259 checked direct price', dimensions: '195 × 185 × 60 mm folded-envelope specification', heating: 'Manual drive; no motor or power', coffeeSetup: 'More than 100 external 20-micron clicks', milkWorkflow: '35-40 g magnetic catch cup; hand-ground batches', bestFor: 'Quiet mixed-method households and travel' },
        { name: 'Baratza Encore ESP', href: '/grinder/baratza-encore-esp/', quickDecision: 'Choose powered convenience and household throughput over portability.', priceClass: '$199.95 checked direct price', dimensions: '13 × 15 × 34 cm', heating: '100-120 V electric drive, 550 RPM listed', coffeeSetup: '40 steps with espresso emphasis at 1-20', milkWorkflow: 'Hopper, grounds bin and 54/58 mm dosing cup', bestFor: 'Entry espresso plus batch brew without hand effort' },
        { name: 'Timemore Sculptor', href: '/grinder/timemore-sculptor/', quickDecision: 'Compare when an electric single-dose workflow and a higher budget fit.', priceClass: 'Higher electric tier; verify model price', dimensions: 'Model-specific electric countertop footprint', heating: 'Electric motor; model-dependent speed control', coffeeSetup: 'Model and burr set determine espresso suitability', milkWorkflow: 'Single-dose electric workflow', bestFor: 'Countertop users prioritizing powered grinding' },
        { name: '1Zpresso J-Ultra', quickDecision: 'Choose when espresso is the main method and smaller adjustment steps matter.', priceClass: 'Specialist premium manual tier', dimensions: 'Compact manual format; verify current listing', heating: 'Manual drive; no motor or power', coffeeSetup: 'Espresso-focused external adjustment', milkWorkflow: 'Manual single-dose workflow', bestFor: 'Espresso-first owners who still accept hand grinding' },
      ], 'Dimensions and prices are dated snapshots. Verify the exact model, voltage and included accessories before buying.', { item: 'Grinder', heating: 'Drive / power', coffeeSetup: 'Adjustment', milkWorkflow: 'Grounds handling' })}
      <p>The K-Ultra and Encore ESP make the clearest contrast. One is quiet, dense and portable; the other is louder, lighter in materials and much easier for repeated doses. Neither automatically makes better coffee in every context. The choice changes the work around the brewer.</p>
      <p>Also compare the coffee schedule. Occasional espresso plus daily filter favors K-Ultra, while several morning drinks make Encore ESP’s motor more consequential than a difference in finish.</p>`,
  },
  {
    id: 'owners', eyebrow: 'Owner evidence', title: 'What community discussion can and cannot tell us', html: `
      <p>Owners praise balanced filter cups, external adjustment and espresso range, while others prefer brighter clarity or smaller J-Ultra steps. That identifies decisions, not controlled outcomes. ${refs(['kultra-community','kultra-settings','kultra-espresso'])}</p>
      <p>A setting without zero, coffee, dose, brewer, water and recipe transfers poorly. Use it only to choose a starting neighborhood.</p>
      <p>Sweet, round and clear are recipe-shaped perceptions. Repeated sweetness and body descriptions support positioning, not a promised taste.</p>
      <p>Social posts overrepresent delight and problems, so they cannot establish reliability. Use official care, then support, for faults.</p>
      <p>Give greatest weight to reports that identify coffee, recipe, calibrated zero and comparator. A vivid conclusion without those controls may still describe preference, but not transferable performance.</p>`,
  },
  {
    id: 'ownership', eyebrow: 'Long-term ownership', title: 'A low-consumable tool with a high penalty for careless cleaning', html: `
      <p>Brush the rim, empty the cup and keep everything dry. Remove oils and fines with the official procedure, cleaning oily coffee more often.</p>
      <p>Recalibrate after disassembly. Record zero and settings, preserve part order, avoid cross-threading and never force zero. ${refs(['kultra-cleaning','kultra-calibration'])}</p>
      <p>The folding handle and case aid travel, but 700 grams matters. Empty beans and protect the dial; no power is valuable in hotels.</p>
      <p>Keep purchase records. Ask what parts remain available for this generation instead of assuming every component can be ordered.</p>
      <p>If the grinder will sit unused, empty it, brush loose coffee and store it dry in the case. Old oils and trapped moisture are avoidable ownership variables.</p>`,
  },
  {
    id: 'related', eyebrow: 'Continue the decision', title: 'Four useful next reads', html: `
      ${recommendationCardsHtml([
        { kicker: 'Powered alternative', title: 'Baratza Encore ESP', text: 'Compare the $200 electric route when repeated espresso or larger filter doses make hand effort the real problem.', href: '/grinder/baratza-encore-esp/', linkLabel: 'Read the Encore ESP review', featured: true },
        { kicker: 'Electric step up', title: 'Timemore Sculptor', text: 'Explore a single-dose electric family when counter space and a larger budget are acceptable.', href: '/grinder/timemore-sculptor/', linkLabel: 'Read the Sculptor review' },
        { kicker: 'Machine pairing', title: 'Breville Bambino', text: 'See why protecting grinder budget can matter more than adding features to an entry espresso machine.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the Bambino review' },
        { kicker: 'Browse the category', title: 'More grinder reviews', text: 'Use the grinder hub to compare workflow, adjustment and service rather than headline burr claims.', href: '/grinder/', linkLabel: 'Browse grinders' },
      ])}`,
  },
  {
    id: 'faq', eyebrow: 'Static answers', title: '1Zpresso K-Ultra FAQ', html: faqHtml([
      { question: 'Can the 1Zpresso K-Ultra grind for espresso?', answer: 'Yes. Its range reaches unpressurized espresso and independent reviewers have used it there. The 20-micron steps can leave some coffees between ideal settings, where a small dose or yield change may help.' },
      { question: 'Is the K-Ultra better for espresso or pour-over?', answer: 'It is strongest as an all-rounder. Its cup profile and workflow suit filter especially well, while espresso specialists may prefer smaller adjustment steps from a dedicated model.' },
      { question: 'How many clicks does the K-Ultra have?', answer: '1Zpresso specifies more than 100 clicks at 20 microns per click. Record your own calibrated zero because settings from another grinder may not transfer exactly.' },
      { question: 'Can I wash the K-Ultra burrs with water?', answer: 'No. Use the official dry-cleaning procedure, brush and blower. Water can damage steel parts and internal bearings.' },
      { question: 'How much coffee fits in the catch cup?', answer: 'The manufacturer specifies about 35 to 40 grams. Actual bean volume varies with density, so do not force a brim-full load.' },
      { question: 'Is the magnetic cup secure?', answer: 'It is designed for quick attachment, but it still needs to be seated deliberately. Hold the grinder body, not the cup, and avoid knocking a full cup sideways.' },
      { question: 'Is the K-Ultra a good travel grinder?', answer: 'It packs neatly with a folding handle and case and needs no power, but its 700 gram weight makes it better for luggage and car travel than ultralight trips.' },
      { question: 'What warranty does 1Zpresso provide?', answer: 'The current direct listing describes a one-year limited warranty. Coverage, returns and logistics can vary by region and seller, so save the written terms for the exact purchase.' },
    ]),
  },
];

export const oneZpressoKUltraReview = buildResearchReview({
  slug: '/grinder/1zpresso-k-ultra/', productId: 'CD-GR-000001', brand: '1Zpresso', model: 'K-Ultra', sku: 'K-Ultra',
  category: 'Premium all-round manual coffee grinder', brandPath: '/grinder/', brandLinkLabel: 'More grinder reviews',
  title: '1Zpresso K-Ultra review: the premium all-round hand grinder',
  description: 'A research-led 1Zpresso K-Ultra review covering espresso clicks, filter character, hand effort, cleaning, current price, ownership and powered alternatives.',
  verdictLabel: 'For the mixed-method minimalist',
  verdict: 'The K-Ultra is a convincing one-grinder answer for someone who alternates among espresso, pour-over and immersion and values quiet, portable mechanics. Its 20-micron clicks and manual effort are real espresso limits, so dedicated espresso households should compare a finer-adjusting or electric grinder before paying $259.',
  assessment: 'Excellent all-round mechanics, best when broad range matters more than specialization.',
  image: 'https://1zpresso.coffee/wp-content/uploads/2024/03/ku-ir.jpg', imageAlt: '1Zpresso K-Ultra manual coffee grinder with folding handle and magnetic catch cup',
  published: '2025-10-21', updated: UPDATED,
  authorNote: 'I treated the K-Ultra as a workflow and cup-style decision. I checked 1Zpresso’s current product, calibration, cleaning and warranty material, then compared independent reviews, demonstrations and owner discussions. I have not physically used this grinder.',
  basisDisclosure: `${disclosure} Filter brewing is scored as a distinct grinder-performance dimension.`,
  price: { label: '1Zpresso direct price', msrp: '$259.00', typical: 'Manual grinder with case, brush and blower', currency: 'USD', numeric: '259.00', checked: 'September 17, 2026' },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4sB8GNM', note: 'Affiliate link · confirm seller and warranty', affiliate: true, primary: true },
    { label: 'Check 1Zpresso price', href: 'https://1zpresso.coffee/product/kultra/', note: 'Official direct store' },
  ],
  facts: [
    { label: 'Burr', value: 'Large heptagonal conical K burr' }, { label: 'Adjustment', value: 'External ring, 100+ clicks, 20 microns per click' },
    { label: 'Capacity', value: 'Approx. 35-40 g magnetic catch cup' }, { label: 'Drive', value: 'Manual, folding handle' },
    { label: 'Weight', value: 'Approx. 700 g' }, { label: 'Size', value: '19.5 × 18.5 × 6 cm' },
    { label: 'Materials', value: 'Stainless steel, aluminum alloy, polycarbonate, silicone and wood listed' }, { label: 'Warranty', value: 'One-year limited warranty on current direct listing' },
  ],
  quickAnswers: [
    { question: 'The one-line decision?', answer: 'Buy it when espresso and filter share one quiet grinder; choose a specialist when either method dominates.' },
    { question: 'Current price?', answer: '$259 direct from 1Zpresso when checked September 17, 2026.' },
    { question: 'Espresso capable?', answer: 'Yes, though 20-micron clicks offer less fine control than an espresso-specialized adjustment.' },
    { question: 'Filter style?', answer: 'Evidence most often points to sweetness, body and balance rather than maximum note separation.' },
    { question: 'Large batches?', answer: 'The cup holds roughly 35-40 g, but hand effort makes frequent large batches an electric-grinder question.' },
    { question: 'Wash the burrs?', answer: 'No. Follow the dry-cleaning guide and recalibrate after deeper disassembly.' },
  ],
  bestFor: ['One grinder shared across espresso, pour-over and immersion', 'Quiet grinding in a small kitchen or while traveling', 'Buyer who values external adjustment and premium manual ergonomics'],
  avoidIf: ['Several espresso doses must be ground back to back', 'Tiny espresso adjustments matter more than filter range', 'Grip, wrist or shoulder effort is a concern'],
  pros: ['Fast external numbered adjustment', 'Balanced all-round burr positioning', 'Magnetic catch cup and folding handle', 'No power, motor noise or electronic maintenance'],
  cons: ['Premium $259 price for a manual tool', '20-micron steps can bracket an espresso target', '700 g is substantial for travel', 'Repeated fine grinding requires physical effort'],
  dimensions: [
    dimension('espresso', 8.2, 'A genuinely espresso-capable range with repeatable external clicks, limited by 20-micron step size and hand effort.', 'Strong for occasional and mixed-method espresso; specialists get finer control elsewhere.', 'Manufacturer specification plus independent espresso use', ['kultra-official','kultra-way','kultra-blind','kultra-espresso'], 'espresso', 'Espresso adjustment in practical terms', ['The burr reaches espresso fineness, but reaching fineness and landing on the ideal resistance are different questions.', 'Use dose or yield only as a controlled bridge when adjacent clicks bracket the target.'], [{ signal: '20-micron clicks', evidence: 'The manufacturer specifies more than 100 external steps.', decision: 'Repeatable and easy to read, but not the smallest manual-grinder increment.' }, { signal: 'Independent espresso use', evidence: 'Reviews and a blind comparison show workable unpressurized espresso.', decision: 'Capability is credible without promising one universal setting.' }, { signal: 'Manual drive', evidence: 'Effort rises at fine settings and hard beans.', decision: 'One or two doses fit better than a drink queue.' }], [{ signal: 'One click fast, next click slow', guidance: 'Keep the closer setting and change dose by a small, recorded amount.' }, { signal: 'Grinding becomes suddenly rough', guidance: 'Stop, empty the chamber and inspect for a foreign object before applying force.' }], 'No Coffeedant grind-time, particle or extraction measurements are claimed.'),
    dimension('milk', 9.1, 'Filter performance scores highly for sweetness, body, range and easy method changes.', 'A strong fit for pour-over and immersion drinkers who prefer balanced cups over maximum separation.', 'Independent filter use plus clearly labeled manufacturer-hosted perspective', ['kultra-way','kultra-adcafe','kultra-homeexpert','kultra-video','kultra-community'], 'filter', 'Filter and brewed-coffee character', ['Filter and brewed-coffee performance are assessed independently from espresso.', 'Cup descriptions are tendencies across evidence, not promises for a specific bean.'], [{ signal: 'K burr positioning', evidence: 'Manufacturer and reviews frame it as an all-method design.', decision: 'Useful when several brewers share one grinder.' }, { signal: 'Sweetness and body theme', evidence: 'The pattern appears across independent, hosted and owner evidence.', decision: 'Choose it for an integrated, rounded presentation.' }, { signal: '35-40 g cup', evidence: 'The listed capacity supports many multi-cup recipes.', decision: 'Capacity is ample, though hand effort still limits throughput.' }], [{ signal: 'Drawdown stalls', guidance: 'Go coarser or reduce agitation before blaming the burr.' }, { signal: 'Cup lacks separation', guidance: 'Try a cleaner recipe, then compare a clarity-focused specialist if the preference remains.' }], 'The score covers pour-over, immersion and other brewed-coffee use.', 'Filter brewing'),
    dimension('workflow', 9.3, 'The numbered external ring, magnetic cup and folding handle minimize friction between methods.', 'Excellent for one or two quiet doses and frequent method switching.', 'Documented design plus daily-use reviews', ['kultra-official','kultra-way','kultra-video','kultra-settings'], 'workflow', 'Why the adjustment system matters', ['A broad range is useful because it is visible, repeatable and quick to reach.', 'The physical workload remains the buyer’s responsibility.'], [{ signal: 'External ring', evidence: 'Settings change without removing the cup.', decision: 'Espresso and filter numbers can be recorded directly.' }, { signal: 'Magnetic cup', evidence: 'Twist-off transfer replaces a long thread.', decision: 'Fast workflow, with deliberate seating still required.' }, { signal: 'Folding handle', evidence: 'Handle packs closer to the body.', decision: 'Convenient in a case, though the grinder remains heavy.' }], [{ signal: 'Setting no longer matches notes', guidance: 'Check zero and reassembly before rewriting every recipe.' }, { signal: 'Repeated doses feel tedious', guidance: 'Compare an electric grinder instead of another hand grinder.' }], 'Workflow score reflects labor and switching, not grind speed measured by Coffeedant.'),
    dimension('build', 9.0, 'Dense metal construction, controlled adjustment and well-resolved moving parts support a premium feel.', 'A long-term tool candidate if kept dry and maintained carefully.', 'Manufacturer materials, warranty and independent handling evidence', ['kultra-official','kultra-cleaning','kultra-return','kultra-way'], 'build', 'Premium construction without durability theater', ['A substantial body and precise controls are observable strengths.', 'Maker life estimates and owner anecdotes cannot establish a failure rate.'], [{ signal: '700 g body', evidence: 'Manufacturer-listed weight and metal materials.', decision: 'Stable in use, meaningful in luggage.' }, { signal: 'Dry-clean mechanism', evidence: 'Official care avoids water in burrs and bearings.', decision: 'Cleaning technique directly affects ownership risk.' }, { signal: 'One-year warranty', evidence: 'Current direct-store limited coverage.', decision: 'Keep purchase records and verify regional logistics.' }], [{ signal: 'Rough rotation after cleaning', guidance: 'Stop and check part order, alignment and calibration.' }, { signal: 'Rust or water exposure', guidance: 'Dry the unit and contact support rather than continuing to grind.' }], 'The 100-200 kg statement is a manufacturer estimate, not a tested Coffeedant lifespan.'),
    dimension('features', 8.8, 'Every major feature improves a repeated mechanical action, but dosing and timing stay fully manual.', 'High utility for buyers who want mechanical refinement rather than automation.', 'Current specification and comparative context', ['kultra-official','kultra-coffeegeek','kultra-video'], 'features', 'Features that earn their place', ['External adjustment, a magnetic cup and a folding handle directly reduce friction.', 'Micron language describes burr travel, not exact grounds size.'], [{ signal: '100+ clicks', evidence: 'Broad numbered range is listed by the maker.', decision: 'One grinder can retain settings for several methods.' }, { signal: 'Included case and tools', evidence: 'Current package includes protection and dry-cleaning basics.', decision: 'Few day-one accessories beyond a scale.' }, { signal: 'No electronics', evidence: 'Manual drive has no timer or dose memory.', decision: 'Simple ownership, fully manual consistency.' }], [{ signal: 'Dose varies', guidance: 'Weigh beans before grinding; the grinder has no dosing control.' }, { signal: 'Cup spills during removal', guidance: 'Use a controlled twist and keep the cup upright.' }], 'Accessories and package contents can vary by seller.'),
    dimension('value', 8.2, 'The $259 price is defensible for true mixed-method use, less so for a single method or large daily volume.', 'Value comes from replacing multiple grinder roles, not from being cheap.', 'Dated direct price plus alternatives and ownership evidence', ['kultra-official','kultra-homeexpert','kultra-community'], 'value', 'When a premium hand grinder saves money', ['The correct comparison is the complete workflow across the methods you actually brew.', 'Motorized convenience and specialist precision carry value that the K-Ultra cannot supply.'], [{ signal: '$259 direct price', evidence: 'Current listing checked September 17, 2026.', decision: 'Premium manual tier, so use-case fit matters.' }, { signal: 'No powered consumables', evidence: 'No batteries or motor system.', decision: 'Low routine operating cost beyond cleaning time.' }, { signal: 'Broad method range', evidence: 'Independent use spans espresso through immersion.', decision: 'Highest value when the dial travels regularly.' }], [{ signal: 'Filter setting never changes', guidance: 'Compare a cheaper or filter-specialist grinder.' }, { signal: 'Household makes four espressos', guidance: 'Price an electric model before committing to daily hand labor.' }], 'Price is a dated snapshot and may change.'),
  ],
  alternatives: [
    { name: 'Baratza Encore ESP', reason: 'Electric convenience and larger household throughput at a lower checked price.', href: '/grinder/baratza-encore-esp/' },
    { name: 'Timemore Sculptor', reason: 'Electric single-dose platform for a higher-budget countertop workflow.', href: '/grinder/timemore-sculptor/' },
    { name: 'Breville Bambino', reason: 'A compact machine pairing that leaves the grinder as the main manual craft step.', href: '/espresso-machine/breville-bambino/' },
  ],
  article: {
    methodology: `<p>I began with 1Zpresso’s current K-Ultra product page, calibration instructions, cleaning material, recipes and direct-store policy. I separated maker claims from independent evidence, then compared three hands-on reviews or demonstrations, one direct blind comparison and three community discussions. Community settings and reliability anecdotes were used to identify questions, never to calculate performance or failure rates. Price was checked September 17, 2026. Filter brewing is evaluated separately from espresso, workflow, build, features and value.</p>`,
    sections: kultraSections, sources: kultraSources,
    finalTitle: 'Buy the K-Ultra when the dial will actually travel',
    finalVerdict: ['The 1Zpresso K-Ultra earns its premium through a coherent all-round workflow: visible adjustment, credible espresso range, strong filter positioning and mechanics that travel without power.', 'It is not the automatic winner for every coffee. Espresso specialists can buy smaller steps, clarity specialists can buy a narrower cup profile, and busy households can buy a motor. For one or two mixed-method drinks, it is one of the most complete manual propositions in this evidence set.'],
  },
  video: { id: 'S6exSDpF_Ek', title: '1Zpresso K-Ultra - How It Won Me Over', creator: 'Daddy Got Coffee', published: '2024-07-20', note: 'Independent review used to observe adjustment, handling and the reviewer’s cup-style conclusions. Coffeedant did not reproduce its test as hands-on work.' },
});

const encoreSources: Source[] = [
  { id: 'encore-official', label: 'Baratza: Encore ESP product page', href: 'https://www.baratza.com/en-us/product/encoretm-esp-zcg495', note: 'Current US price, model identity, dimensions, 40 mm M2 conical burr, adjustment design, accessories, controls and product imagery; checked September 17, 2026.' },
  { id: 'encore-manual', label: 'Baratza: Encore ESP instruction manual', href: 'https://assets.breville.com/ZCG495/manual-encoreesp-v1-0-en-010923.pdf', note: 'Primary operating, adjustment, cleaning, unclogging, shimming, safety and one-year US/Canada warranty instructions.' },
  { id: 'encore-hub', label: 'Baratza: Encore ESP product support hub', href: 'https://www.baratza.com/en-us/producthub/zcg495', note: 'Current support entry point, parts, cleaning video, troubleshooting and product-specific documentation.' },
  { id: 'encore-cleaning', label: 'Baratza: How to clean and maintain the Encore ESP', href: 'https://www.youtube.com/watch?v=qwAkjJooSNs', note: 'Official five-minute cleaning demonstration linked from the current support hub.' },
  { id: 'encore-unclog', label: 'Baratza: How to unclog your Encore ESP', href: 'https://www.youtube.com/watch?v=1FBAGbfj_L8', note: 'Official June 15, 2023 troubleshooting demonstration. Used with the manual, not as permission to improvise repairs.' },
  { id: 'encore-warranty', label: 'Baratza: US warranty and repairs', href: 'https://www.baratza.com/en-us/support/warranty', note: 'Current support route. The product manual states one year from original purchase for US and Canadian grinders, subject to exclusions and regional terms.' },
  { id: 'encore-coffeegeek', label: 'CoffeeGeek: Baratza Encore ESP full review', href: 'https://coffeegeek.com/reviews/fullreview/baratza-encore-esp-grinder/', note: 'Independent instrumented and comparative review published October 20, 2023, including espresso, pour-over, coarse brewing, retention and workflow.' },
  { id: 'encore-wired', label: 'WIRED: Baratza Encore ESP review', href: 'https://www.wired.com/review/baratza-encore-esp-coffee-grinder', note: 'Independent hands-on review published May 27, 2023, covering espresso, several brew methods, noise, markings and coarse-setting tradeoffs.' },
  { id: 'encore-serious', label: 'Serious Eats: best espresso grinders', href: 'https://www.seriouseats.com/best-espresso-grinders-7377134', note: 'Comparative hands-on guide that positions the Encore ESP as a straightforward entry espresso grinder; recommendations and lineup may change.' },
  { id: 'encore-baratzas', label: 'Serious Eats: which Baratza grinder should you buy?', href: 'https://www.seriouseats.com/best-baratza-coffee-grinders-12063730', note: 'Current family comparison used to distinguish Encore ESP, original Encore, Sette and ESP Pro roles.' },
  { id: 'encore-jd', label: 'J.D. Roastery: Baratza Encore ESP review', href: 'https://jdroastery.com/2024/06/24/baratza-encore-esp-review/', note: 'Independent practical review published June 24, 2024, including noise and home-workflow observations.' },
  { id: 'encore-video', label: 'Coffee Parts: 2023 budget grinder comparison', href: 'https://www.youtube.com/watch?v=FvyJI00Kryw', note: 'Commercial comparative video published February 27, 2023, covering Encore ESP, Breville Smart Grinder Pro and Varia VS3.' },
  { id: 'encore-opus-video', label: 'Alternative Brewing: Fellow Opus vs Baratza Encore ESP', href: 'https://www.youtube.com/watch?v=KJkijcr6QQU', note: 'Commercial comparison published November 22, 2023, used to frame two entry all-purpose workflows.' },
  { id: 'encore-reddit', label: 'Reddit r/espresso: opinions on the Baratza Encore ESP', href: 'https://www.reddit.com/r/espresso/comments/1ayfrx1/opinions_on_the_baratza_encore_esp/', note: 'Owner discussion published February 24, 2024. Anecdotes identify workflow themes and do not establish failure rates.' },
  { id: 'encore-dial', label: 'Reddit r/espresso: Encore ESP grinding too coarse', href: 'https://www.reddit.com/r/espresso/comments/196ukal/baratza_esp_grinding_too_coarse/', note: 'Troubleshooting thread illustrating why bean, basket, dose, assembly and calibration context matter more than copying a number.' },
  { id: 'encore-k6', label: 'Reddit r/JamesHoffmann: KINGrinder K6 vs Baratza Encore ESP', href: 'https://www.reddit.com/r/JamesHoffmann/comments/1g2qu8g/kingrinder_k6_v_baratza_encore_esp/', note: 'Community comparison of powered convenience, manual value and upgrade plans. It is preference evidence, not a controlled test.' },
];

const encoreSections: Section[] = [
  {
    id: 'encore-orientation', eyebrow: 'The decision in plain English', title: 'The first electric espresso grinder that still remembers filter coffee', html: `
      <p>Encore ESP rebuilds the familiar Encore where it was weakest. Settings 1 through 20 make small espresso changes; 21 through 40 move progressively farther across brewed coffee. The 40 mm M2 burr, two switches, hopper, bin and portafilter cup keep operation simple.</p>
      <p>This is the current US ZCG495, product ID CD-GR-000002, listed at $199.95 on September 17, 2026. Official specifications include 13 by 15 by 34 centimeter dimensions, 550 RPM and a 120 gram bin. ${refs(['encore-official','encore-manual'])}</p>
      <p>Reviews confirm much better espresso control than the original and useful AeroPress, drip and pour-over range. They also find clumping, retention, noise, coarse fines and a stepped ceiling. ${refs(['encore-coffeegeek','encore-wired','encore-serious'])}</p>
      <p><strong>My short verdict:</strong> buy it for clear controls, powered mixed-method range and Baratza support. Do not expect quiet, timed dosing, stepless control or premium metal construction.</p>
      <p>That distinction matters at checkout because the ESP is often bundled with beginner machines. A capable grinder helps more than another basket or decorative tool, yet the package still needs a scale and suitable coffee. Treat the $199.95 grinder as one part of a complete brewing system, and compare the labor it removes with the precision a similarly priced manual grinder can add.</p>
      <div class="review-callout"><strong>Rating scope:</strong> filter brewing has its own score here, separate from espresso, workflow, build, features and value.</div>`,
  },
  {
    id: 'encore-setup', eyebrow: 'The first seven days', title: 'Assemble it correctly before deciding that the range is wrong', html: `
      <p>Wash only the removable plastic parts and dry them fully. Keep burrs dry, seat the ring burr and gasket as diagrammed, then install the hopper near 40. A mis-seated hopper can trigger the interlock. ${refs(['encore-manual'])}</p>
      <ol>
        <li><strong>Day 1:</strong> assemble dry parts and learn both switches.</li>
        <li><strong>Days 2 and 3:</strong> dial one weighed medium-roast espresso one step at a time.</li>
        <li><strong>Days 4 and 5:</strong> use the bin for a normal filter dose.</li>
        <li><strong>Days 6 and 7:</strong> return to espresso and assess purge, mess and repeatability.</li>
      </ol>
      <p>Suggested ranges are starting points. Burr seating, shims, coffee, basket and dose move the useful number. If normal adjustment cannot reach espresso, check assembly and use Baratza’s shim or support route. ${refs(['encore-manual','encore-dial'])}</p>
      <p>Keep the original parts. The bin controls filter scatter and catches purge grounds; a scale remains essential because dosing is not measured.</p>
      <p>Before turning much finer, run or remove beans so they do not load the burrs during adjustment. Write down the first espresso and filter settings, plus coffee and dose. If a number changes after cleaning, inspect the burr seat, gasket and shim stack before compensating with a radically different recipe. That sequence separates setup error from normal coffee-to-coffee variation.</p>`,
  },
  {
    id: 'encore-espresso', eyebrow: 'Rating deep dive', title: 'Espresso performance: a useful fine range, not infinite control', html: `
      <p>Settings 1 through 20 define the ESP upgrade. CoffeeGeek reports about 20-micron output-fineness changes per click while noting that burr movement and particle geometry differ. The practical gain is useful home-espresso resolution. ${refs(['encore-manual','encore-coffeegeek'])}</p>
      <p>Use a familiar medium roast and the dose your basket already handles well, then weigh the beverage rather than trusting time alone. If the first repeatable setting misses the target, move one collar step while holding preparation constant. This establishes what the ESP changes before dose or yield becomes the fine adjustment.</p>
      <p>When adjacent clicks bracket the target, a small dose change can bridge them but also changes headspace. Light roasts and high-flow baskets expose the ceiling sooner.</p>
      <p>CoffeeGeek found it stronger than the original Encore and competitive with Smart Grinder Pro in that protocol, while costlier grinders did better. Serious Eats also positions it for beginners. ${refs(['encore-coffeegeek','encore-serious','encore-video'])}</p>
      <p>Read each setting as a repeatable position, not a flavor preset. Bean age, roast development, humidity, dose and basket resistance can move the useful point. When a new bag runs differently, return to the same weighed recipe and change one click at a time. A distribution tool can break visible clumps, but it cannot create adjustment positions that the collar does not provide.</p>`,
  },
  {
    id: 'encore-filter', eyebrow: 'Rating deep dive', title: 'Filter performance: broad coverage with larger steps and a coarse-end compromise', html: `
      <p>After 20, progressively larger changes span AeroPress, pour-over, drip and cold brew. That creates range but reduces control between neighboring filter settings.</p>
      <p>Reviewers found good everyday results but more coarse fines than specialist alternatives. WIRED flags the coarse end; CoffeeGeek finds press and Chemex usable while favoring a low-speed flat burr for coarse-only buyers. ${refs(['encore-wired','encore-coffeegeek'])}</p>
      <p>Stay below the bin’s fill line because grounds mound under the chute. For large batches, pause and empty rather than treating 120 grams as a target.</p>
      <p>One collar credibly consolidates weekly espresso and filter. A light-roast, clarity-only buyer should instead compare filter specialists.</p>
      <p>Filter recipes offer controls beyond the collar. A smaller dose, different paper, gentler agitation or adjusted water can change drawdown and extraction. Hold those variables steady while judging a click. For press brewing, let fines settle and decant gently before buying another grinder. If coarse cups remain consistently silty across coffees, the limitation is better solved by a filter-focused burr than constant sifting.</p>`,
  },
  {
    id: 'encore-workflow', eyebrow: 'Rating deep dive', title: 'Workflow: simple controls, with weighing and retention left to the owner', html: `
      <p>The side switch runs continuously; the front button pulses. Neither measures dose, so hopper users weigh output and single-dosers weigh beans first.</p>
      <p>The cup fits 54 mm portafilters and adapts to 58 mm. Static, clumps and retention still appear in reviews. A light tap and consistent routine help; aggressive banging or bellows can stress parts. ${refs(['encore-official','encore-coffeegeek','encore-reddit'])}</p>
      <p>Large setting changes may release old grounds. Weigh early output and purge between very different coffees; a full hopper makes switching harder.</p>
      <p>WIRED and J.D. Roastery call the noise noticeable. Coffeedant has not measured it, so hear one or compare a manual grinder if mornings must be quiet. ${refs(['encore-wired','encore-jd'])}</p>
      <p>Choose hopper dosing only when one coffee stays loaded and speed matters more than exact input. Single dosing makes decaf and method changes easier, but asks for weighing, a short wait and occasional purge. Whichever route you choose, use the same finish routine: let the motor clear, tap lightly once, weigh output when repeatability matters and brush the chute area before residue becomes a deposit.</p>`,
  },
  {
    id: 'encore-build', eyebrow: 'Rating deep dive', title: 'Build and service: plastic outside, unusually clear access inside', html: `
      <p>Plastic bodywork, a weighted base and a metal adjustment system fit the $199.95 tier. It is not machined luxury, but that does not make it disposable.</p>
      <p>A quick-release cone burr, removable ring burr and diagrammed shim stack make cleaning approachable. The hub also links parts and troubleshooting. ${refs(['encore-manual','encore-hub','encore-cleaning'])}</p>
      <p>The reverse-thread knob, small washers and oriented gasket still demand care. Unplug, photograph the stack, work over a tray and keep burrs dry.</p>
      <p>The manual states a one-year limited US/Canada warranty with exclusions; international support uses local channels. Save proof of purchase and confirm the seller. ${refs(['encore-manual','encore-warranty'])}</p>
      <p>Service access lowers the barrier to cleaning, not the skill needed for electrical or motor work. A cracked carrier, damaged cable, burning smell or repeated breaker trip belongs with support. Parts availability also changes over time, so the current product hub is stronger evidence than the original Encore’s reputation. Photograph labels and the internal stack before a claim or disassembly changes their condition.</p>`,
  },
  {
    id: 'encore-features', eyebrow: 'Rating deep dive', title: 'Features: the adjustment gearbox matters more than a display', html: `
      <p>The two-rate collar gives half its positions to small espresso moves and larger jumps to filter, creating credible mixed-method range without a menu.</p>
      <p>The bin, 54 mm cup, 58 mm adapter, base and brush are included. Quick-release access helps cleaning; shims correct the fine range only after assembly is verified. ${refs(['encore-official','encore-manual'])}</p>
      <p>There is no timer, scale, memory, ionizer, display or stepless control. Hopper dosing can waste coffee, while single dosing adds weighing and retention work. ${refs(['encore-coffeegeek'])}</p>
      <p>Encore ESP Pro is a separate, higher-priced product. Its features must not be transferred to ZCG495. ${refs(['encore-baratzas'])}</p>
      <p>The two-rate collar also asks users to interpret numbers by zone. A change from 10 to 11 is not equivalent to a change from 30 to 31, so a forty-setting headline understates the design. That asymmetry benefits espresso and makes coarse tuning broader. It is a sensible mechanical compromise, but a buyer who wants identical micro-control across methods needs a different adjustment system.</p>`,
  },
  {
    id: 'encore-value', eyebrow: 'Rating deep dive', title: 'Value: $199.95 buys useful espresso control and a support ecosystem', html: `
      <p>The $199.95 direct price is accessible for electric espresso and filter, though manuals offer more metal and single-dose rivals target retention, noise or stepless control.</p>
      <p>Value combines powered throughput, a useful espresso zone and documented support. Filter-only buyers can choose a specialist; espresso-only enthusiasts may prefer stepless adjustment.</p>
      <p>Budget a scale, appropriate cleaner and wear parts. Hopper dosing by eye can waste enough coffee to erase a small saving.</p>
      <p>Original Encore longevity is context, not proof for this different adjustment. Judge ZCG495 support and warranty, using anecdotes as questions rather than rates. ${refs(['encore-hub','encore-reddit','encore-k6'])}</p>
      <p>Calculate the first-year system rather than comparing grinder stickers. Add a scale, cleaning supplies and the coffee likely to be wasted while learning espresso. Then compare that total with a hand grinder, a filter-only electric model and the next electric espresso tier. The ESP earns value when its motor is used often and its broad range prevents a second purchase, not merely because $200 sounds accessible.</p>`,
  },
  {
    id: 'encore-comparison', eyebrow: 'The shortlist', title: 'Encore ESP alternatives: hand quality, electric refinement or a higher tier', html: `
      <p>Choose K-Ultra when quiet portability outweighs hand effort, Sculptor for a higher-budget electric workflow, or an espresso specialist when forty steps bind.</p>
      ${comparisonTablesHtml('Baratza Encore ESP', [
        { name: 'Baratza Encore ESP', quickDecision: 'Entry electric for shared espresso and filter.', priceClass: '$199.95 checked', dimensions: '13 × 15 × 34 cm', heating: 'Electric; 550 RPM listed', coffeeSetup: '40 steps split 20/20', milkWorkflow: 'Hopper, bin and 54/58 mm cup', bestFor: 'Beginners and mixed methods' },
        { name: '1Zpresso K-Ultra', href: '/grinder/1zpresso-k-ultra/', quickDecision: 'Quiet portable mechanics with hand effort.', priceClass: '$259 checked', dimensions: '19.5 × 18.5 × 6 cm listed', heating: 'Manual', coffeeSetup: '100+ 20-micron clicks', milkWorkflow: '35-40 g magnetic cup', bestFor: 'Small mixed-method doses' },
        { name: 'Timemore Sculptor', href: '/grinder/timemore-sculptor/', quickDecision: 'Higher-budget electric single dosing.', priceClass: 'Higher tier; verify model', dimensions: 'Model-specific', heating: 'Electric; model-dependent', coffeeSetup: 'Model-specific burr and range', milkWorkflow: 'Single-dose transfer', bestFor: 'Focused powered workflow' },
        { name: 'Fellow Opus', quickDecision: 'Cross-shop adjustment and dosing workflow.', priceClass: 'Entry electric; verify price', dimensions: 'Compact; verify listing', heating: 'Electric', coffeeSetup: 'Outer and inner adjustment', milkWorkflow: 'Single-dose cup', bestFor: 'Buyers preferring its footprint' },
      ], 'Prices and dimensions are dated snapshots. Verify the exact model, voltage and included accessories before buying.', { item: 'Grinder', heating: 'Drive / power', coffeeSetup: 'Adjustment', milkWorkflow: 'Grounds handling' })}
      <p>Adjustment, retention, motor behavior, parts and dose transfer matter more than burr diameter alone.</p>
      <p>When two grinders share a price, compare the actual week: number of espresso doses, largest filter batch, decaf changes, acceptable noise and cleaning tolerance. A manual grinder may win two quiet cups but lose a four-drink morning. A single-dose electric rival may reduce hopper waste but give up Baratza’s familiar parts route. The table is a shortlist, not a universal ranking.</p>`,
  },
  {
    id: 'encore-owners', eyebrow: 'Owner evidence', title: 'Community reports are most useful as a troubleshooting index', html: `
      <p>Owners praise approachable espresso and support while reporting static, clumps, retention, noise and assembly issues. These prompt inspection but cannot establish frequency. ${refs(['encore-reddit','encore-dial','encore-k6'])}</p>
      <p>If output is too coarse, verify coffee, basket, dose, burr seating, gasket and hopper before adding shims.</p>
      <p>Separate static, retained coffee and clogs: humidity affects static, setting changes reveal retention, and blocked flow needs chute clearing.</p>
      <p>Manual grinders spend more on mechanics because the owner supplies power. ESP buys a motor and throughput instead.</p>
      <p>The most useful owner report names the coffee, basket, dose, setting, cleaning history and exact symptom. A bare claim that the grinder is messy or too coarse cannot separate static, stale beans, misassembly or preference. Look for repeated mechanisms across detailed reports, then verify them against the manual. Even a convincing cluster lacks the denominator needed to calculate a failure rate.</p>`,
  },
  {
    id: 'encore-ownership', eyebrow: 'Long-term ownership', title: 'Cleaning the chute and preserving the burr stack matter more than polishing the case', html: `
      <p>Unplug, empty the hopper, run remaining beans through, then remove the hopper and ring burr as directed. Brush dry debris; wash and fully dry only approved plastic parts. ${refs(['encore-manual','encore-cleaning'])}</p>
      <p>Oily or flavored beans deposit faster. Use approved tablets as directed, not rice. Empty the bin before its mound blocks the chute.</p>
      <p>Follow the manual and video for clogs. If the motor hums, smells hot, trips power or remains blocked, unplug and contact support. ${refs(['encore-unclog','encore-hub'])}</p>
      <p>Keep washers and shims ordered, photograph layers and check assembly after a setting shift. Store proof of purchase with serial details.</p>
      <p>Cleaning cadence should follow coffee and symptoms rather than a universal calendar. Oily beans, slower output, stale odors or visible deposits justify earlier attention. After reassembly, run a small sacrificial dose and confirm that the collar moves normally before returning to espresso. Preventive care is cheaper than repeatedly cycling a blocked chute, and a documented baseline makes support conversations much clearer.</p>`,
  },
  {
    id: 'encore-related', eyebrow: 'Continue the decision', title: 'Four useful next reads', html: `
      ${recommendationCardsHtml([
        { kicker: 'Manual alternative', title: '1Zpresso K-Ultra', text: 'Trade motor noise and retention for quiet hand effort, premium mechanics and fast mixed-method adjustment.', href: '/grinder/1zpresso-k-ultra/', linkLabel: 'Read the K-Ultra review', featured: true },
        { kicker: 'Electric step up', title: 'Timemore Sculptor', text: 'Compare the higher-budget single-dose path when the ESP’s steps, noise or retention feel too limiting.', href: '/grinder/timemore-sculptor/', linkLabel: 'Read the Sculptor review' },
        { kicker: 'Entry pairing', title: 'Breville Bambino Plus', text: 'Plan a compact espresso system in which grinder quality and automatic milk divide the budget honestly.', href: '/espresso-machine/breville-bambino/', linkLabel: 'Read the Bambino Plus review' },
        { kicker: 'Browse the category', title: 'More grinder reviews', text: 'Compare adjustment, cup style, retention, service and daily labor across the grinder hub.', href: '/grinder/', linkLabel: 'Browse grinders' },
      ])}`,
  },
  {
    id: 'encore-faq', eyebrow: 'Static answers', title: 'Baratza Encore ESP FAQ', html: faqHtml([
      { question: 'Can the Baratza Encore ESP grind for real espresso?', answer: 'Yes. Settings 1 through 20 are designed for smaller espresso changes and independent reviewers have dialed unpressurized baskets. Its stepped range is less precise than a good stepless specialist.' },
      { question: 'How is the Encore ESP different from the original Encore?', answer: 'The ESP adds a two-rate adjustment with a fine espresso zone, the M2 burr, an espresso dosing cup and revised burr access. The original Encore remains mainly a brewed-coffee grinder.' },
      { question: 'Does the Encore ESP have a timer?', answer: 'No. It has a side on-off switch and front pulse button. Weigh beans before single dosing or weigh output when using the hopper.' },
      { question: 'What do settings 1-20 and 21-40 mean?', answer: 'Baratza assigns 1-20 to smaller espresso adjustments and 21-40 to progressively larger brewed-coffee changes. The right number still depends on coffee, dose, basket and recipe.' },
      { question: 'Can I wash the Encore ESP burrs?', answer: 'No. The steel burrs can rust. Hand-wash only the approved removable plastic parts and let them dry fully; clean burrs and chamber dry.' },
      { question: 'Why is my Encore ESP not grinding fine enough?', answer: 'First check bean freshness, basket and dose, then verify burr, gasket, shim stack and hopper assembly. The manual documents shimming only after normal assembly is correct.' },
      { question: 'Is the Encore ESP good for French press?', answer: 'It reaches coarse settings and can make a serviceable press brew, but independent tests report more fines at the coarse end than stronger filter-focused grinders.' },
      { question: 'What warranty does the Encore ESP have?', answer: 'The manual states a one-year limited warranty for US and Canadian grinders from original purchase, with exclusions. International support and coverage come through the local retailer or distributor.' },
    ]),
  },
];

export const baratzaEncoreEspReview = buildResearchReview({
  slug: '/grinder/baratza-encore-esp/', productId: 'CD-GR-000002', brand: 'Baratza', model: 'Encore ESP', sku: 'ZCG495',
  category: 'All-purpose electric burr grinder', brandPath: '/grinder/', brandLinkLabel: 'More grinder reviews',
  title: 'Baratza Encore ESP review: the $200 entry espresso grinder',
  description: 'A research-led Baratza Encore ESP review covering the 1-20 espresso range, filter performance, retention, cleaning, current price, service and alternatives.',
  verdictLabel: 'For the first powered espresso setup',
  verdict: 'The Encore ESP remains a practical $199.95 first grinder because it combines powered throughput, useful espresso adjustment and real brewed-coffee range with unusually clear maintenance support. Its noise, stepped ceiling, clumping and manual dosing are the price of entry, not details to discover after purchase.',
  assessment: 'A well-supported electric all-rounder whose espresso range matters more than its basic shell.',
  image: 'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/ZCG495/ZCG495WHT1AUC1A.png?pdp', imageAlt: 'White Baratza Encore ESP electric coffee grinder with hopper and dosing cup',
  published: '2025-10-28', updated: UPDATED,
  authorNote: 'I evaluated the Encore ESP as an entry system component. I checked Baratza’s current US listing, manual, support and cleaning material, then compared independent testing, direct grinder comparisons and owner troubleshooting threads. I have not physically used this grinder.',
  basisDisclosure: `${disclosure} Filter brewing is scored as a distinct grinder-performance dimension.`,
  price: { label: 'Baratza US direct price', msrp: '$199.95', typical: 'Black or white grinder with bin, dosing cup and 58 mm adapter', currency: 'USD', numeric: '199.95', checked: 'September 17, 2026' },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4sBLLBM', note: 'Affiliate link · confirm seller and warranty', affiliate: true, primary: true },
    { label: 'Check Baratza price', href: 'https://www.baratza.com/en-us/product/encoretm-esp-zcg495', note: 'Official US store' },
    { label: 'Open product support', href: 'https://www.baratza.com/en-us/producthub/zcg495', note: 'Manuals, parts and troubleshooting' },
  ],
  facts: [
    { label: 'Burr', value: '40 mm M2 conical steel' }, { label: 'Adjustment', value: '40 steps; 1-20 espresso, 21-40 filter' },
    { label: 'Drive', value: 'Electric, 550 RPM listed' }, { label: 'Controls', value: 'Side on-off switch and front pulse button' },
    { label: 'Dosing', value: '54 mm cup with removable 58 mm adapter; grounds bin included' }, { label: 'Size', value: '13 × 15 × 34 cm' },
    { label: 'Grounds bin', value: '120 g listed capacity; obey max fill line' }, { label: 'Warranty', value: 'One-year limited US/Canada warranty in manual' },
  ],
  quickAnswers: [
    { question: 'The one-line decision?', answer: 'Choose it for powered mixed-method grinding and easy support, not for silence or stepless precision.' },
    { question: 'Current US price?', answer: '$199.95 direct from Baratza when checked September 17, 2026.' },
    { question: 'Real espresso?', answer: 'Yes. Settings 1-20 give useful fine adjustment, with a stepped ceiling for demanding recipes.' },
    { question: 'Filter too?', answer: 'Yes. Settings 21-40 span brewed coffee, though coarse cups can carry more fines than specialist grinders.' },
    { question: 'Timed dosing?', answer: 'No. Weigh input for single dosing or weigh output from the hopper.' },
    { question: 'Main ownership rule?', answer: 'Keep burrs dry, empty below the bin line and follow the documented cleaning and unclogging stack.' },
  ],
  bestFor: ['First unpressurized espresso setup on a controlled budget', 'Household alternating espresso, drip and pour-over', 'Buyer who values parts access and documented troubleshooting'],
  avoidIf: ['Quiet early-morning operation is essential', 'Stepless micro-adjustment and very low retention are requirements', 'The grinder will serve only coarse or clarity-focused filter coffee'],
  pros: ['Useful espresso resolution across settings 1-20', 'Powered range from espresso through cold brew', 'Both grounds bin and portafilter dosing cup included', 'Clear cleaning, parts and support documentation'],
  cons: ['No timer, scale or dose memory', 'Noticeable motor noise and basic plastic shell', 'Clumping, static and retained grounds need management', 'Coarse range uses larger jumps and can produce more fines'],
  dimensions: [
    dimension('espresso', 8.0, 'A credible fine range for entry espresso, with stepped adjustment and output texture setting the ceiling.', 'Strong for learning and medium-roast home espresso; less flexible for exacting light-roast recipes.', 'Manual design plus independent comparative testing', ['encore-manual','encore-coffeegeek','encore-serious','encore-wired'], 'encore-espresso', 'What twenty espresso settings buy', ['The split collar gives espresso half of the entire numbered range.', 'Useful resolution is not the same as infinite resolution.'], [{ signal: 'Settings 1-20', evidence: 'Manual assigns small changes to the espresso zone.', decision: 'Far easier to dial than the original Encore.' }, { signal: 'Independent comparisons', evidence: 'Testing finds credible shots against entry electric rivals.', decision: 'A legitimate first grinder, not a specialist endpoint.' }, { signal: 'Stepped collar', evidence: 'Only fixed positions are available.', decision: 'Dose may need a small correction between clicks.' }], [{ signal: 'Shot is fast and thin', guidance: 'Move one step finer while holding dose and target yield steady.' }, { signal: 'Finest range is still coarse', guidance: 'Verify assembly and use the manual’s support or shim procedure.' }], 'No Coffeedant grind-size or extraction measurements are claimed.'),
    dimension('milk', 8.2, 'Brewed-coffee performance is broadly capable but less refined at coarse settings.', 'Good consolidation for a mixed household; filter specialists can buy greater clarity.', 'Independent multi-method tests and official range design', ['encore-manual','encore-wired','encore-coffeegeek'], 'encore-filter', 'Brewed coffee beyond espresso', ['Filter and immersion grinding are assessed independently from espresso.', 'Larger steps after 20 prioritize range over close filter tuning.'], [{ signal: 'Settings 21-40', evidence: 'Manual describes progressively larger changes.', decision: 'Broad range in a short collar.' }, { signal: 'Good everyday brews', evidence: 'Independent reviewers use pour-over, AeroPress and drip successfully.', decision: 'Credible one-grinder convenience.' }, { signal: 'Coarse fines', evidence: 'Multiple reviews identify a coarser-end compromise.', decision: 'Press and Chemex specialists should compare alternatives.' }], [{ signal: 'Paper clogs', guidance: 'Go coarser or reduce agitation before changing coffee dose.' }, { signal: 'Press cup is silty', guidance: 'Use a gentler decant or compare a filter-focused burr platform.' }], 'The score covers pour-over, immersion and other brewed-coffee use.', 'Filter brewing'),
    dimension('workflow', 8.3, 'Simple switches, powered throughput and two receptacles make daily use approachable, while weighing and retention remain manual.', 'Low learning friction for a household, with more cleanup than polished single-dose designs.', 'Documented controls plus independent and owner workflow evidence', ['encore-official','encore-manual','encore-coffeegeek','encore-reddit'], 'encore-workflow', 'The work before and after the motor runs', ['Power removes hand effort but not dose control.', 'The best routine accounts for purge, static and the output mound.'], [{ signal: 'Two controls', evidence: 'Continuous side switch and momentary front pulse.', decision: 'Easy to teach, no menu overhead.' }, { signal: 'No timer', evidence: 'Dosing is manual.', decision: 'A scale belongs beside the grinder.' }, { signal: 'Cup plus bin', evidence: 'Separate espresso and filter receptacles are supplied.', decision: 'Cleaner transfer when each is used for its intended task.' }], [{ signal: 'Output changes after switching', guidance: 'Purge a small amount and weigh the first dose at the new setting.' }, { signal: 'Grounds scatter', guidance: 'Seat the correct receptacle close to the chute and clean accumulated oils.' }], 'Noise and retention were not measured by Coffeedant.'),
    dimension('build', 7.5, 'A basic plastic enclosure is balanced by metal adjustment parts, replaceable burr access and excellent documentation.', 'Not luxurious, but unusually understandable and service-oriented at the price.', 'Manufacturer construction, manual and support evidence', ['encore-official','encore-manual','encore-hub','encore-warranty'], 'encore-build', 'Repair access is part of build quality', ['Material feel is only one ownership variable.', 'The removable stack rewards careful, documented maintenance.'], [{ signal: 'Plastic body', evidence: 'Current product construction prioritizes price and low weight.', decision: 'Do not expect premium tactile finish.' }, { signal: 'Quick-release burr', evidence: 'Cone and ring burr can be accessed for cleaning.', decision: 'Clogs and wear are more approachable.' }, { signal: 'One-year warranty', evidence: 'Manual states current US/Canada term.', decision: 'Keep records and verify regional support.' }], [{ signal: 'Motor hums without output', guidance: 'Unplug and follow the official clog procedure before retrying.' }, { signal: 'Setting shifts after cleaning', guidance: 'Check gasket, burr and shim order before redialing.' }], 'Serviceability supports the rating; it does not guarantee lifespan.'),
    dimension('features', 7.8, 'The two-rate adjustment and included transfer tools are useful, but dosing automation and micro-adjustment are absent.', 'Feature value is mechanical and practical rather than digital.', 'Current specification and independent feature critique', ['encore-official','encore-manual','encore-coffeegeek','encore-baratzas'], 'encore-features', 'The right feature in the right place', ['The adjustment architecture is the reason this is an ESP rather than an original Encore.', 'A missing timer matters because a hopper can hold far more than one dose.'], [{ signal: 'Two-rate collar', evidence: 'Small espresso moves and larger filter moves share 40 positions.', decision: 'Wide coverage without a complex interface.' }, { signal: '54/58 mm cup', evidence: 'Cup and adapter serve common portafilter sizes.', decision: 'Transfer is easier, not automatically clump-free.' }, { signal: 'No timer or scale', evidence: 'Manual dosing only.', decision: 'Weighing remains part of every repeatable workflow.' }], [{ signal: 'Hopper dose overruns', guidance: 'Use the pulse button and a scale, or single-dose weighed beans.' }, { signal: 'Fine limit reached', guidance: 'Follow the official shim and support sequence rather than forcing the collar.' }], 'The Encore ESP Pro is a different model and is not scored here.'),
    dimension('value', 8.8, 'At $199.95, powered mixed-method range and a mature support route form a strong entry proposition.', 'Excellent system value when espresso and filter are both real needs.', 'Dated price plus current family and competitor comparisons', ['encore-official','encore-serious','encore-baratzas','encore-video','encore-k6'], 'encore-value', 'Why $200 can still be the sensible tier', ['Value is the combination of output, labor and ownership support.', 'Manual and specialist grinders can win different parts of that equation.'], [{ signal: '$199.95 direct price', evidence: 'Current US listing checked September 17, 2026.', decision: 'Accessible electric espresso entry, subject to changing offers.' }, { signal: 'Mixed-method design', evidence: 'One collar covers espresso through coarse brewing.', decision: 'Avoids buying two entry grinders.' }, { signal: 'Parts and guides', evidence: 'Product hub exposes maintenance and support resources.', decision: 'Long ownership has a clearer path.' }], [{ signal: 'Only filter is brewed', guidance: 'Compare the original Encore and filter specialists before paying for ESP range.' }, { signal: 'Upgrade is already planned', guidance: 'Price the intended grinder once instead of treating $200 as temporary.' }], 'Price is a dated snapshot, not a guaranteed offer.'),
  ],
  alternatives: [
    { name: '1Zpresso K-Ultra', reason: 'Quiet portable all-round grinding with premium mechanics and manual effort.', href: '/grinder/1zpresso-k-ultra/' },
    { name: 'Timemore Sculptor', reason: 'Higher-tier electric single dosing with model-specific burr choices.', href: '/grinder/timemore-sculptor/' },
    { name: 'Breville Bambino Plus', reason: 'Compact espresso-machine pairing for a realistic first-system budget.', href: '/espresso-machine/breville-bambino/' },
  ],
  article: {
    methodology: `<p>I began with Baratza’s current US product page, product hub and instruction manual, including the adjustment, cleaning, unclogging, shimming and warranty sections. I then compared three long-form independent reviews, two current buyer guides, two direct video comparisons and three owner discussions. Independent measurements remain attributed to their publishers. Community reports were used to map workflow and troubleshooting questions, never to estimate reliability. Price was checked September 17, 2026. Filter brewing is evaluated separately from espresso, workflow, build, features and value.</p>`,
    sections: encoreSections, sources: encoreSources,
    finalTitle: 'The Encore ESP is an entry point, not an apology',
    finalVerdict: ['The Baratza Encore ESP solves the original Encore’s most important espresso problem without turning a first grinder into a complicated instrument. Settings 1 through 20 provide usable control, and the remaining range keeps everyday brewed coffee on the menu.', 'Its motor is audible, output can clump or linger, and the collar cannot match stepless precision. At $199.95, the combination of power, range and documented service still makes sense for a beginner who plans to keep both espresso and filter in the routine.'],
  },
  video: { id: 'FvyJI00Kryw', title: '2023 Budget Friendly Coffee Grinders Encore ESP, Breville Smart Grinder & Varia VS3 | Comparison', creator: 'Coffee Parts', published: '2023-02-27', note: 'Commercial comparative demonstration used for visible workflow and market context. It is not Coffeedant hands-on testing, and current prices come from dated primary listings.' },
});

export const upgradeGrinderReviews: MachineReviewData[] = [
  oneZpressoKUltraReview,
  baratzaEncoreEspReview,
];
