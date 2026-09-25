import { bambinoArticle } from './bambino-article';
import { bambinoPlusIdentity, bambinoPlusFacts, bambinoPlusPrice } from './products/bambino-plus';

const internalHref = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export type ReviewLink = { label: string; href: string; note?: string; affiliate?: boolean; primary?: boolean };
export type ReviewTable = { caption: string; columns: Array<{ key: string; label: string }>; rows: Array<Record<string, string>> };
export const reviewDimensionIds = ['espresso', 'milk', 'workflow', 'build', 'features', 'value'] as const;
export type ReviewDimensionId = typeof reviewDimensionIds[number];
export type ReviewEvidenceBasis =
  | { kind: 'research-led'; label: string; disclosure: string }
  | { kind: 'hands-on'; label: string; disclosure: string; protocolId: string }
  | { kind: 'hybrid'; label: string; disclosure: string; protocolId: string };
export type ReviewDimension = {
  id: ReviewDimensionId;
  label: string;
  score: number | null;
  weight: number;
  reason: string;
  buyerMeaning: string;
  evidenceStatus: string;
  sourceIds: string[];
  deepDiveId: string;
  deepDive: {
    title: string;
    intro: string[];
    table: ReviewTable;
    diagnosis?: Array<{ signal: string; guidance: string }>;
    note?: string;
  };
};
export type ReviewEvaluation = {
  basis: ReviewEvidenceBasis;
  scale: 10;
  dimensions: ReviewDimension[];
};
export type MachineReviewData = {
  slug: string; productId: string; brand: string; model: string; sku: string;
  category: string; brandPath: string; brandLinkLabel?: string;
  title: string; description: string; verdictLabel: string; verdict: string; assessment: string;
  image: string; imageAlt: string; published: string; updated: string;
  author: { name: string; role: string; image: string; imageAlt: string; note: string };
  price: { msrp: string; typical: string; currency: string; numeric: string; checked: string; label: string };
  links: ReviewLink[];
  facts: Array<{ label: string; value: string }>;
  quickAnswers: Array<{ question: string; answer: string }>;
  bestFor: string[]; avoidIf: string[]; pros: string[]; cons: string[];
  evaluation: ReviewEvaluation;
  alternatives: Array<{ name: string; reason: string; href: string }>;
  article: {
    methodology: string;
    sections: Array<{ id: string; eyebrow: string; title: string; html: string }>;
    sources: Array<{ id: string; label: string; href: string; note: string }>;
    finalTitle: string; finalVerdict: string[];
  };
  video: { id: string; title: string; creator: string; published: string; note: string };
};

export const getReviewOverallScore = (evaluation: ReviewEvaluation) => {
  const applicable = evaluation.dimensions.filter((dimension) => dimension.score !== null && dimension.weight > 0);
  const totalWeight = applicable.reduce((sum, dimension) => sum + dimension.weight, 0);
  if (!totalWeight) return null;
  const weightedScore = applicable.reduce((sum, dimension) => sum + (dimension.score ?? 0) * dimension.weight, 0) / totalWeight;
  return Math.round((weightedScore / 2) * 10) / 10;
};

export const bambinoReview: MachineReviewData = {
  slug: new URL(bambinoPlusIdentity.url_map[0].legacy_url).pathname,
  productId: bambinoPlusIdentity.product_id,
  brand: bambinoPlusIdentity.brand,
  model: 'Bambino Plus',
  sku: bambinoPlusIdentity.model_number,
  category: 'Semi-automatic espresso machine',
  brandPath: '/breville/',
  title: 'Breville Bambino Plus review',
  description: 'Is automatic milk worth the extra $200? A research-led Bambino Plus review covering the first week, grinder budget, espresso, maintenance and the alternatives.',
  verdictLabel: 'For everyday milk drinks',
  verdict: 'I would choose the Bambino Plus for a household making lattes and cappuccinos most days. Its quick-start heater and automatic milk remove two chores, but you still grind, dose and tamp. If you mostly drink espresso, the standard Bambino leaves $200 more for your grinder at the Breville US prices checked for this review.',
  assessment: 'Worth the premium when automatic milk earns its keep.',
  image: 'images/products/breville-bambino-plus.png',
  imageAlt: 'Breville Bambino Plus espresso machine',
  published: '2026-04-07',
  updated: '2026-09-25',
  author: {
    name: 'Aleksandar Spasevski', role: 'Editor at Coffeedant',
    image: 'images/author-aleksandar-spasevski.jpg',
    imageAlt: 'Aleksandar Spasevski, editor at Coffeedant',
    note: 'My question here is whether automatic milk deserves part of your grinder budget. I checked the US manuals, independent reviews and owner reports to work through that decision. This is a research-led review; I have not physically tested this machine.',
  },
  price: {
    label: 'Breville US price', msrp: `$${bambinoPlusPrice.amount.toFixed(2)}`,
    numeric: bambinoPlusPrice.amount.toFixed(2), currency: bambinoPlusPrice.currency,
    typical: 'Machine only; grinder sold separately', checked: 'September 25, 2026',
  },
  links: [
    { label: 'Check Amazon price', href: 'https://amzn.to/4oTFUpH', note: 'Affiliate link · price at retailer', affiliate: true, primary: true },
    { label: 'Check Breville price', href: bambinoPlusPrice.source_url, note: 'Official US store' },
  ],
  facts: bambinoPlusFacts,
  quickAnswers: [
    { question: 'Which Bambino?', answer: 'Bambino Plus, BES500. This review covers the US model; the standard Bambino is BES450.' },
    { question: 'Do I need a grinder?', answer: 'For fresh-bean espresso, yes. The included dual-wall baskets also let you start with suitable pre-ground coffee.' },
    { question: 'Coffee in three seconds?', answer: 'That is Breville’s heater-readiness claim. Grinding, warming the cup and making the drink take additional time.' },
    { question: 'Brew and steam together?', answer: 'No. Make espresso, then texture milk. Automatic frothing reduces attention, not the number of steps.' },
    { question: 'Worth $200 over the base?', answer: 'For frequent milk drinks, I think so. For espresso or manual milk practice, start with the cheaper Bambino.' },
    { question: 'What is the full budget?', answer: 'Allow roughly $700–900 with a grinder, scale and initial coffee/care supplies. Those additions are planning allowances, not live offers.' },
  ],
  bestFor: [
    'A household that wants repeatable milk drinks with less milk-steaming practice',
    'Someone who wants a short startup routine and a separate, upgradeable grinder',
    'Beginners willing to learn the coffee preparation even when milk is automated',
  ],
  avoidIf: [
    'The machine would consume the money you need for an espresso grinder',
    'You want to select brew temperature or brew and steam at the same time',
    'You expect one button to grind the beans and make the whole drink',
  ],
  pros: [
    'ThermoJet heater with a claimed three-second ready time',
    'Automatic milk temperature and texture presets, plus manual steaming',
    'Both single-wall and dual-wall baskets in the current US bundle',
    'Separate grinder can stay with you through a machine upgrade',
  ],
  cons: [
    'No user-adjustable brew temperature', 'Coffee and milk happen in sequence',
    'Grinder cost belongs in the buying decision', 'Wand purging adds to the drip-tray emptying routine',
  ],
  evaluation: {
    basis: {
      kind: 'research-led',
      label: 'Research-led Coffeedant rating',
      disclosure: 'The scores are editorial judgments built from current documentation, independent hands-on evidence, owner patterns, and dated price context. They are not Coffeedant measurements or a disguised hands-on test.',
    },
    scale: 10,
    dimensions: [
      {
        id: 'espresso', label: 'Espresso', score: 8.6, weight: 1,
        reason: 'A sound control baseline and useful manual input, with fixed brew temperature setting the main ceiling.',
        buyerMeaning: 'Strongest for familiar medium and darker coffees; lighter-roast specialists get less room to tune temperature.',
        evidenceStatus: 'Documented design, independently contextualized',
        sourceIds: ['source-breville-plus', 'source-plus-manual', 'source-serious-eats', 'source-coffee-kev', 'source-toms-guide'],
        deepDiveId: 'espresso',
        deepDive: {
          title: 'Starting recipes and first adjustments',
          intro: [
            'Use these as controlled starting points, not promised flavor results. Hold dose and target yield steady while changing the grind, then let taste decide the next move.',
          ],
          table: {
            caption: 'Editorial starting protocols for the Breville Bambino Plus',
            columns: [
              { key: 'coffee', label: 'Coffee' }, { key: 'recipe', label: 'Starting recipe' },
              { key: 'target', label: 'Useful target' }, { key: 'adjustment', label: 'First adjustment' },
            ],
            rows: [
              { coffee: 'Medium blend', recipe: '18 g in, 36 g out', target: 'Balanced sweetness and body', adjustment: 'Thin and sharp: grind finer. Dry and harsh: grind coarser.' },
              { coffee: 'Light roast', recipe: '18 g in, 40–45 g out', target: 'More sweetness with less sharpness', adjustment: 'Preheat the working parts, then change grind before changing dose.' },
              { coffee: 'Decaf', recipe: '18 g in, 34–38 g out', target: 'Sweetness without a papery finish', adjustment: 'Keep the yield controlled and make small grind changes.' },
            ],
          },
          diagnosis: [
            { signal: 'Fast, pale, and watery', guidance: 'Grind finer and improve distribution before changing several variables.' },
            { signal: 'Slow, dark, and harsh', guidance: 'Grind coarser or reduce the dose while keeping the target yield visible.' },
            { signal: 'Spraying from the basket', guidance: 'Break up clumps, level the bed, and tamp straight.' },
            { signal: 'Muted at a sensible ratio', guidance: 'Check coffee freshness and preheat the portafilter before blaming the machine.' },
          ],
          note: 'The manual supports a 16–19 g dose in the double basket. The yields above are Coffeedant starting guidance, not tested BES500 results or factory volumetric settings.',
        },
      },
      {
        id: 'milk', label: 'Milk', score: 8.5, weight: 1,
        reason: 'Automatic presets remove much of the technique burden, while manual mode preserves a path to more control.',
        buyerMeaning: 'The premium makes sense when more than one person wants repeatable milk without learning the wand first.',
        evidenceStatus: 'Documented controls, independently contextualized',
        sourceIds: ['source-breville-plus', 'source-plus-manual', 'source-gearlab', 'source-toms-guide'],
        deepDiveId: 'milk',
        deepDive: {
          title: 'Choose a milk starting point, then change one thing',
          intro: [
            'The sensor can only repeat a comparable setup. Use the supplied jug, begin with a consistent amount of cold milk, and keep one temperature and texture choice long enough to understand it.',
          ],
          table: {
            caption: 'Milk workflow starting points for the Bambino Plus',
            columns: [
              { key: 'drink', label: 'Drink or goal' }, { key: 'start', label: 'Starting approach' },
              { key: 'watch', label: 'Watch for' }, { key: 'adjustment', label: 'First adjustment' },
            ],
            rows: [
              { drink: 'Flat white-style drink', start: 'Lower texture preset with a repeatable milk fill', watch: 'More air than you want', adjustment: 'Reduce texture or move to manual mode for finer control.' },
              { drink: 'Latte', start: 'Middle texture and temperature choices', watch: 'Milk masking a weak espresso', adjustment: 'Stabilize the espresso recipe before increasing milk.' },
              { drink: 'Cappuccino', start: 'Higher texture with the same milk quantity each time', watch: 'Foam separating from liquid milk', adjustment: 'Lower texture or swirl the jug more thoroughly before pouring.' },
              { drink: 'Alternative milk', start: 'One conservative preset with a consistent brand and volume', watch: 'Different heating and foaming behavior', adjustment: 'Change one setting at a time; the manual warns alternatives may need different choices.' },
            ],
          },
          diagnosis: [
            { signal: 'Texture changes between sessions', guidance: 'Repeat the milk quantity, jug position, sensor contact, and selected preset.' },
            { signal: 'The drink is too foamy', guidance: 'Use a lower texture choice or finish manually instead of changing milk and temperature together.' },
            { signal: 'Milk is hotter than you prefer', guidance: 'Move down one temperature setting before changing texture.' },
            { signal: 'The wand becomes harder to clean', guidance: 'Wipe it immediately, then lower it for the automatic purge before residue dries.' },
          ],
          note: 'These are workflow starting points based on the documented three temperature and three texture choices. Milk type, quantity, and personal preference still determine the right setting.',
        },
      },
      {
        id: 'workflow', label: 'Workflow', score: 9.5, weight: 1,
        reason: 'A very short heater wait, clear controls, and programmable volumes remove daily friction, although brewing and steaming remain sequential.',
        buyerMeaning: 'Excellent for one or two domestic drinks; regular group service exposes the serial workflow.',
        evidenceStatus: 'Documented operation, corroborated workflow',
        sourceIds: ['source-breville-plus', 'source-plus-manual', 'source-serious-eats'],
        deepDiveId: 'workflow',
        deepDive: {
          title: 'What changes as the drink queue grows',
          intro: ['The heater is quick. The complete routine still contains coffee preparation, extraction, milk, and cleanup, so cadence should be judged by the whole sequence.'],
          table: {
            caption: 'Bambino Plus workflow by common use case',
            columns: [
              { key: 'scenario', label: 'Scenario' }, { key: 'machine_behavior', label: 'Machine behavior' },
              { key: 'bottleneck', label: 'Likely bottleneck' }, { key: 'response', label: 'Practical response' },
            ],
            rows: [
              { scenario: 'Cold start', machine_behavior: 'Breville claims the ThermoJet heater is ready in about three seconds', bottleneck: 'Grinding and warming the working parts', response: 'Prepare the station and follow the manual’s purge guidance.' },
              { scenario: 'One espresso', machine_behavior: 'Programmable or manually controlled volume', bottleneck: 'Dose, distribution, and grind', response: 'Use a scale until the saved volume proves repeatable for your coffee.' },
              { scenario: 'One milk drink', machine_behavior: 'Espresso first, milk second', bottleneck: 'The two jobs cannot overlap', response: 'Prepare the jug while watching the shot, then steam.' },
              { scenario: 'Two milk drinks', machine_behavior: 'Each coffee and milk cycle remains sequential', bottleneck: 'Basket clearing, redosing, and milk cleanup', response: 'Group similar tasks or finish drinks one at a time, depending on who is waiting.' },
            ],
          },
          diagnosis: [
            { signal: 'The second drink feels much slower', guidance: 'Time the whole sequence, not the heater, and identify whether coffee prep or milk is the queue.' },
            { signal: 'Saved buttons drift from the target', guidance: 'Return the cup to a scale and recheck the programmed volume.' },
            { signal: 'The counter becomes the bottleneck', guidance: 'Give the grinder, scale, jug, and wet portafilter permanent landing places.' },
          ],
        },
      },
      {
        id: 'build', label: 'Build', score: 6.8, weight: 1,
        reason: 'The compact appliance design is practical, but long-term repair access is less certain than on a traditional boiler machine.',
        buyerMeaning: 'Buy for compact convenience, not because the available evidence proves decade-long serviceability.',
        evidenceStatus: 'Documented externals, serviceability unresolved',
        sourceIds: ['source-breville-plus', 'source-plus-manual', 'source-plus-parts', 'source-coffeeness', 'source-toms-guide'],
        deepDiveId: 'setup',
        deepDive: {
          title: 'The build choices you will notice at the counter',
          intro: ['Build quality is more useful when translated into access, stability, compatibility, and repair options than when reduced to whether a panel feels premium.'],
          table: {
            caption: 'Bambino Plus build and ownership consequences',
            columns: [
              { key: 'area', label: 'Area' }, { key: 'known', label: 'What is established' },
              { key: 'consequence', label: 'Daily consequence' }, { key: 'limit', label: 'What remains uncertain' },
            ],
            rows: [
              { area: 'Footprint', known: 'Compact body; official axis-labeled dimensions conflict with longstanding listings', consequence: 'Easy to place only after the grinder and tank access are included', limit: 'Verify a tight recess against the exact unit.' },
              { area: 'Portafilter', known: '54 mm removable portafilter', consequence: 'A real manual espresso workflow with model-compatible tools', limit: 'Accessories need an exact fit check.' },
              { area: 'Tank and tray', known: '1.9 L removable tank and a compact drip tray', consequence: 'Useful capacity, with tray emptying increased by wand purging', limit: 'Usable cup clearance was not verified.' },
              { area: 'Support and parts', known: 'Breville provides support and a BES500 parts route', consequence: 'There is a defined first contact when something fails', limit: 'Comprehensive internal-part stock and repair cost were not established.' },
            ],
          },
          diagnosis: [
            { signal: 'The body moves while locking in', guidance: 'Support the machine and keep its feet and counter clean rather than forcing the handle farther.' },
            { signal: 'The tray needs constant attention', guidance: 'Leave enough front clearance to remove it easily and empty it as part of the milk routine.' },
            { signal: 'Repairability is a deciding factor', guidance: 'Confirm local service, parts, and warranty terms before purchase instead of inferring them from the brand name.' },
          ],
        },
      },
      {
        id: 'features', label: 'Features', score: 7.8, weight: 1,
        reason: 'The useful essentials are present; adjustable brew temperature and a pressure gauge are not.',
        buyerMeaning: 'Good for repeatability without a crowded control panel, less suited to buyers who want to tune every brew variable.',
        evidenceStatus: 'Documented feature set',
        sourceIds: ['source-breville-plus', 'source-plus-manual'],
        deepDiveId: 'orientation',
        deepDive: {
          title: 'Useful control or missing control?',
          intro: ['A feature earns its place when it changes a repeated decision. The Bambino Plus concentrates on startup, shot volume, and milk automation rather than exposing every brew variable.'],
          table: {
            caption: 'Bambino Plus feature usefulness and limits',
            columns: [
              { key: 'feature', label: 'Feature' }, { key: 'use', label: 'What it helps with' },
              { key: 'limit', label: 'Limit' }, { key: 'matters', label: 'Who should care' },
            ],
            rows: [
              { feature: 'ThermoJet', use: 'Removes most heater waiting', limit: 'Does not grind coffee or warm every working part', matters: 'Anyone making a drink on a short morning.' },
              { feature: 'Shot programming and manual pre-infusion', use: 'Supports a repeatable yield and more direct control', limit: 'A saved button cannot adapt to a different coffee', matters: 'Buyers willing to use a scale while dialing in.' },
              { feature: 'Single- and dual-wall baskets', use: 'Supports fresh-ground coffee and a preground fallback', limit: 'The dual-wall basket cannot restore freshness or grind choice', matters: 'Beginners moving toward an espresso grinder.' },
              { feature: 'Automatic plus manual milk', use: 'Lets a household choose convenience or technique', limit: 'No simultaneous brewing and steaming', matters: 'Homes with different milk-skill levels.' },
              { feature: 'Fixed brew temperature; no gauge', use: 'Keeps the interface simple', limit: 'Removes two forms of feedback and adjustment', matters: 'Lighter-roast and experiment-focused buyers.' },
            ],
          },
          diagnosis: [
            { signal: 'You expect one-touch coffee', guidance: 'Move to a fully automatic category; this machine still leaves grinding, dosing, and tamping to you.' },
            { signal: 'Temperature experiments are the hobby', guidance: 'Choose a machine with user-adjustable brew temperature rather than buying around the omission.' },
            { signal: 'You want live pressure feedback', guidance: 'Treat the missing gauge as a real limitation, not an accessory problem.' },
          ],
        },
      },
      {
        id: 'value', label: 'Value', score: 9.2, weight: 1,
        reason: 'The package is compelling when automatic milk is used often; the same premium is hard to defend when it is not.',
        buyerMeaning: 'Value depends on the household routine and the complete grinder budget, not the machine price alone.',
        evidenceStatus: 'Dated prices plus editorial judgment',
        sourceIds: ['source-breville-plus', 'source-breville-bambino'],
        deepDiveId: 'cost',
        deepDive: {
          title: 'When the premium earns its place',
          intro: ['The Plus is not automatically better value than the standard Bambino. Its value rises or falls with how often the automatic milk system replaces work you genuinely do not want.'],
          table: {
            caption: 'Bambino Plus value by buyer pattern',
            columns: [
              { key: 'buyer', label: 'Buyer pattern' }, { key: 'premium_buys', label: 'What the premium buys' },
              { key: 'hidden_cost', label: 'Cost that remains' }, { key: 'verdict', label: 'Value verdict' },
            ],
            rows: [
              { buyer: 'Frequent milk-drink household', premium_buys: 'Automatic temperature and texture choices', hidden_cost: 'Separate grinder, scale, coffee, and cleaning supplies', verdict: 'Strong when several people use the milk automation.' },
              { buyer: 'Mostly espresso or Americano', premium_buys: 'Little that changes the core coffee preparation', hidden_cost: 'The same grinder requirement', verdict: 'The standard Bambino usually protects more grinder budget.' },
              { buyer: 'Manual milk learner', premium_buys: 'Automation you may bypass', hidden_cost: 'A $200 dated price gap versus BES450', verdict: 'Weak unless another regular user wants automatic milk.' },
              { buyer: 'One-button convenience seeker', premium_buys: 'Milk help, not bean-to-cup automation', hidden_cost: 'All portafilter preparation remains', verdict: 'Choose a fully automatic category instead.' },
            ],
          },
          diagnosis: [
            { signal: 'The Plus forces a poor grinder compromise', guidance: 'Choose the standard Bambino or delay the purchase until the complete setup works.' },
            { signal: 'Only one occasional drink uses milk', guidance: 'Price the convenience per ordinary week, not per ideal weekend.' },
            { signal: 'The whole household uses automatic milk', guidance: 'The premium solves a repeated task and becomes easier to justify.' },
          ],
          note: 'The 9.2 score reflects fit at the dated US price, not a universal bargain claim. A different price or workflow should change the value judgment during the next refresh.',
        },
      },
    ],
  },
  alternatives: [
    { name: 'Standard Bambino', reason: 'Save the premium and learn manual milk.', href: '#compare-bambino' },
    { name: 'Gaggia Classic E24', reason: 'Consider the traditional 58 mm boiler route.', href: internalHref('/espresso-machine/gaggia-classic-evo/') },
    { name: 'Bean-to-cup machine', reason: 'Choose automation for the whole drink.', href: internalHref('/espresso-machine/superautomatic/') },
  ],
  article: bambinoArticle,
  video: {
    id: '2aIJAY3SJuU', title: 'Sage (Breville) Bambino Plus review after nearly four years',
    creator: 'Coffee Kev', published: '2023-11-30',
    note: 'Coffee Kev’s long-term perspective adds context beyond a short review. His UK Sage experience is separate from the US specifications and buying terms used here. This is an external review, not Coffeedant testing.',
  },
};

const validateReview = (review: MachineReviewData) => {
  const dimensionIds = review.evaluation.dimensions.map((dimension) => dimension.id);
  const uniqueIds = new Set(dimensionIds);
  if (uniqueIds.size !== reviewDimensionIds.length || reviewDimensionIds.some((id) => !uniqueIds.has(id))) {
    throw new Error(`${review.productId}: every review must include espresso, milk, workflow, build, features, and value ratings.`);
  }
  const sourceIds = new Set(review.article.sources.map((source) => source.id));
  const sectionIds = new Set(review.article.sections.map((section) => section.id));
  for (const dimension of review.evaluation.dimensions) {
    if (dimension.score !== null && (dimension.score < 0 || dimension.score > review.evaluation.scale)) {
      throw new Error(`${review.productId}: ${dimension.id} score is outside the 0–${review.evaluation.scale} scale.`);
    }
    if (dimension.weight < 0 || !dimension.deepDive.table.rows.length) {
      throw new Error(`${review.productId}: ${dimension.id} needs a valid weight and a populated performance table.`);
    }
    if (!sectionIds.has(dimension.deepDiveId)) {
      throw new Error(`${review.productId}: ${dimension.id} points to a missing deep-dive section.`);
    }
    const missingSource = dimension.sourceIds.find((sourceId) => !sourceIds.has(sourceId));
    if (missingSource) throw new Error(`${review.productId}: ${dimension.id} references missing source ${missingSource}.`);
  }
  if (review.evaluation.basis.kind === 'research-led' && /\b(?:we|I) (?:tested|measured)\b|Coffeedant testing shows/i.test(JSON.stringify(review.evaluation))) {
    throw new Error(`${review.productId}: research-led evaluation contains a hands-on testing claim.`);
  }
};

validateReview(bambinoReview);
