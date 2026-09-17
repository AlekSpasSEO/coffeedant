import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import {
  buildResearchReview,
  comparisonTablesHtml,
  faqHtml,
  recommendationCardsHtml,
  type ComparisonInput,
  type RecommendationInput,
  type ResearchDimensionInput,
} from '../batch-review-builder';

type SourceInput = Omit<MachineReviewData['article']['sources'][number], 'id'>;

type DimensionCopy = {
  label?: string;
  score: number;
  claim: string;
  consequence: string;
  status: string;
  signals: [string, string, string];
};

export type UpgradeReviewProfile = {
  key: string;
  slug: string;
  productId: string;
  brand: string;
  model: string;
  sku: string;
  category: string;
  brandPath: string;
  title: string;
  description: string;
  verdictLabel: string;
  verdict: string;
  assessment: string;
  image: string;
  imageAlt: string;
  published: string;
  price: MachineReviewData['price'];
  links: MachineReviewData['links'];
  facts: MachineReviewData['facts'];
  quickAnswers: MachineReviewData['quickAnswers'];
  bestFor: string[];
  avoidIf: string[];
  pros: string[];
  cons: string[];
  architecture: string;
  identityBoundary: string;
  primaryStrength: string;
  primaryLimit: string;
  setupNote: string;
  espressoNote: string;
  milkNote: string;
  workflowNote: string;
  buildNote: string;
  featuresNote: string;
  valueNote: string;
  ownerPattern: string;
  ownerCaution: string;
  maintenanceNote: string;
  dimensions: Record<ReviewDimensionId, DimensionCopy>;
  sources: SourceInput[];
  comparisons: ComparisonInput[];
  comparisonNote: string;
  recommendations: RecommendationInput[];
  faqs: Array<{ question: string; answer: string }>;
  finalTitle: string;
  finalVerdict: string[];
  video: MachineReviewData['video'];
};

const UPDATED = '2026-09-17';
const dimensionIds: ReviewDimensionId[] = ['espresso', 'milk', 'workflow', 'build', 'features', 'value'];
const dimensionNames: Record<ReviewDimensionId, string> = {
  espresso: 'Espresso',
  milk: 'Milk',
  workflow: 'Workflow',
  build: 'Build',
  features: 'Features',
  value: 'Value',
};

const sourceIds = (profile: UpgradeReviewProfile) => profile.sources.map((_, index) => `${profile.key}-source-${index + 1}`);
const ref = (profile: UpgradeReviewProfile, indexes: number[]) => indexes
  .filter((index) => index < profile.sources.length)
  .map((index) => `<a href="#${profile.key}-source-${index + 1}">[source]</a>`)
  .join(' ');

const dimensionSources = (profile: UpgradeReviewProfile, id: ReviewDimensionId) => {
  const ids = sourceIds(profile);
  const positions: Record<ReviewDimensionId, number[]> = {
    espresso: [0, 1, 3, 4],
    milk: [0, 1, 3, 4],
    workflow: [0, 1, 3, 4, 5],
    build: [0, 1, 5, 6, 7],
    features: [0, 1, 3, 6],
    value: [2, 3, 7, 8, 9],
  };
  return positions[id].filter((position) => position < ids.length).map((position) => ids[position]);
};

const evidenceRows = (profile: UpgradeReviewProfile, id: ReviewDimensionId) => {
  const copy = profile.dimensions[id];
  const rowLabels: Record<ReviewDimensionId, [string, string, string]> = {
    espresso: ['Brew architecture', 'Control available', 'Recipe consequence'],
    milk: ['Steam or milk system', 'Operator input', 'Queue consequence'],
    workflow: ['Cold-start routine', 'Drink sequence', 'Cleanup load'],
    build: ['Core construction', 'Access and care', 'Support boundary'],
    features: ['Useful control', 'Missing control', 'Buyer relevance'],
    value: ['Checked price', 'Total station', 'Long-term fit'],
  };
  return copy.signals.map((signal, index) => ({
    signal: rowLabels[id][index],
    evidence: signal,
    decision: index === 0
      ? copy.claim
      : index === 1
        ? copy.consequence
        : `Treat this as part of the ${profile.model} buying decision, not a promise of identical results in every kitchen.`,
  }));
};

const makeDimension = (profile: UpgradeReviewProfile, id: ReviewDimensionId): ResearchDimensionInput => {
  const copy = profile.dimensions[id];
  const diagnosis: Record<ReviewDimensionId, Array<{ signal: string; guidance: string }>> = {
    espresso: [
      { signal: 'Coffee runs quickly and tastes thin', guidance: 'Hold dose and target yield steady, improve puck preparation, and move the grinder finer in a small step.' },
      { signal: 'Coffee runs slowly and tastes dry', guidance: 'Move the grinder coarser before changing temperature, dose, and beverage ratio at the same time.' },
    ],
    milk: [
      { signal: 'Foam separates from liquid milk', guidance: 'Add less air, establish a rolling movement sooner, and swirl before pouring.' },
      { signal: 'Milk pace changes between drinks', guidance: 'Check fill state, selected setting, tip cleanliness, milk quantity, and recovery time.' },
    ],
    workflow: [
      { signal: 'The second drink feels much slower', guidance: 'Time the complete sequence and identify whether grinding, heating, milk, or cleanup is the real queue.' },
      { signal: 'Controls feel unpredictable', guidance: 'Return to one saved recipe and one repeatable startup routine before adding more variables.' },
    ],
    build: [
      { signal: 'A leak, burning smell, or electrical fault appears', guidance: 'Stop use safely, disconnect power when safe, close any water source, and arrange qualified service.' },
      { signal: 'A replacement part appears similar online', guidance: 'Order against the exact model, region, revision, and serial information rather than appearance alone.' },
    ],
    features: [
      { signal: 'A feature name sounds broader than its function', guidance: 'Read the manual action by action and ask which repeated task the feature actually changes.' },
      { signal: 'An app or preset becomes essential', guidance: 'Confirm account, region, network, firmware, and continued manual operation before depending on it.' },
    ],
    value: [
      { signal: 'A sale price changes the ranking', guidance: 'Compare complete stations on the same date, including grinder, care supplies, tax, warranty, and likely service.' },
      { signal: 'The cheaper option needs an early upgrade', guidance: 'Price the first two years of ownership rather than only the checkout total.' },
    ],
  };
  return {
    id,
    label: copy.label ?? dimensionNames[id],
    score: copy.score,
    reason: copy.claim,
    buyerMeaning: copy.consequence,
    evidenceStatus: copy.status,
    sourceIds: dimensionSources(profile, id),
    deepDiveId: id,
    title: `${copy.label ?? dimensionNames[id]} evidence translated into daily use`,
    intro: [
      `The ${profile.model} score is an editorial judgment from documented design, independent demonstrations, owner context, and the dated market position. It is not a bench result from Coffeedant.`,
    ],
    evidence: evidenceRows(profile, id),
    diagnosis: diagnosis[id],
    note: `Unknowns stay unknown. Variations in coffee, water, milk, setup, firmware, regional package, wear, and technique can change the experience described by these sources.`,
  };
};

export const buildUpgradeReview = (profile: UpgradeReviewProfile): MachineReviewData => {
  const sources = profile.sources.map((source, index) => ({ ...source, id: `${profile.key}-source-${index + 1}` }));
  const officialRefs = ref(profile, [0, 1, 6]);
  const independentRefs = ref(profile, [3, 4, 9]);
  const ownerRefs = ref(profile, [7, 8]);
  const priceRefs = ref(profile, [2]);

  return buildResearchReview({
    slug: profile.slug,
    productId: profile.productId,
    brand: profile.brand,
    model: profile.model,
    sku: profile.sku,
    category: profile.category,
    brandPath: profile.brandPath,
    title: profile.title,
    description: profile.description,
    verdictLabel: profile.verdictLabel,
    verdict: profile.verdict,
    assessment: profile.assessment,
    image: profile.image,
    imageAlt: profile.imageAlt,
    published: profile.published,
    updated: UPDATED,
    authorNote: `I treated the ${profile.model} as an ownership decision, not a collection of marketing claims. I checked current official material, operating or support documentation, dated price context, independent video evidence, and owner discussions. Coffeedant has not physically tested this machine.`,
    basisDisclosure: 'This is a research-led assessment built from current manufacturer material, manuals and support records, independent reviews and demonstrations, owner discussions, and dated price context. Coffeedant has not physically tested this machine. Scores describe the documented ownership proposition, not measurements made in a Coffeedant lab.',
    price: profile.price,
    links: profile.links,
    facts: profile.facts,
    quickAnswers: profile.quickAnswers,
    bestFor: profile.bestFor,
    avoidIf: profile.avoidIf,
    pros: profile.pros,
    cons: profile.cons,
    dimensions: dimensionIds.map((id) => makeDimension(profile, id)),
    alternatives: profile.comparisons.slice(0, 3).map((comparison) => ({
      name: comparison.name,
      reason: comparison.quickDecision,
      href: comparison.href ?? '/espresso-machine/breville-barista-express-bes870xl/',
    })),
    article: {
      methodology: `<p>I began with the exact model identity and official documentation, then separated factory claims from independent observation and self-selected owner reports. Conflicting regional or revision details were not averaged. Price was checked on ${profile.price.checked}; stock, finishes, tax and warranty can change. Video supplies visual context, not Coffeedant testing. Community material informs questions, never failure rates. Missing measurements and long-term incidence data remain unknown.</p>`,
      sections: [
        {
          id: 'orientation', eyebrow: 'Start with the decision', title: `${profile.model} in one honest frame`, html: `
            <p>The ${profile.brand} ${profile.model} is ${profile.architecture}. ${profile.identityBoundary} That identity matters because two machines can promise the same drink while asking for completely different work before and after it. The useful first question is not whether ${profile.model} can make coffee. It is whether its heating, preparation, milk, water, and cleaning sequence matches the way the household will actually use it. ${officialRefs}</p>
            <p><strong>The strongest reason to choose it:</strong> ${profile.primaryStrength} <strong>The main reason to pause:</strong> ${profile.primaryLimit} Those two statements explain the rating more accurately than a long feature list. A high score in one dimension does not erase a compromise elsewhere, and the overall rating should be read with the six category scores rather than alone.</p>
            <div class="review-callout"><strong>Evidence boundary:</strong> this page does not claim that Coffeedant brewed on, measured, opened, or durability-tested the ${profile.model}. Product performance varies with inputs, setup, maintenance, technique, revision, and region.</div>`,
        },
        {
          id: 'setup', eyebrow: 'The first week', title: 'Set up the whole station, not only the machine', html: `
            <p>${profile.setupNote} Begin by matching the rating plate, manual, water guidance, included parts, and seller invoice to the exact delivered unit. Wash the removable food-contact parts as directed, install any supplied filter correctly, complete the documented rinse or prime sequence, and keep packaging until the machine has completed several normal cycles without an issue. ${ref(profile, [0, 1, 5])}</p>
            <ol>
              <li><strong>Day one:</strong> learn filling, startup, shutdown, warnings, and waste paths.</li>
              <li><strong>Days two and three:</strong> repeat one coffee and recipe, changing one variable at a time.</li>
              <li><strong>Days four and five:</strong> make the normal household order, including the refill and cleanup.</li>
              <li><strong>Days six and seven:</strong> perform routine care and decide whether the station still feels convenient.</li>
            </ol>
            <p>Water is both an ingredient and a maintenance variable. Follow manufacturer and local-service guidance rather than assuming that very hard, completely demineralized, distilled, or generic bottled water is automatically suitable. If flow changes abruptly, a leak appears, a protection device trips, or the machine smells hot in an abnormal way, stop and arrange qualified diagnosis instead of repeatedly restarting it.</p>`,
        },
        {
          id: 'espresso', eyebrow: 'Rating deep dive', title: `${profile.dimensions.espresso.label ?? 'Espresso'}: control the variables the machine leaves to you`, html: `
            <p>${profile.espressoNote} ${officialRefs} A useful starting recipe is a controlled experiment, not a promise of flavor. Keep the coffee, dose, target beverage, preparation, cup, and starting machine state consistent while changing the grind or documented strength setting in one small step.</p>
            <p>Taste should decide the next move. Thin, sharp coffee often asks for more extraction through a finer grind or a different ratio. Dry, hollow, or harsh coffee often asks for less extraction. Those are general directions, not universal rules. Dark roast, light roast, decaf, water chemistry, basket geometry, bean age, and milk can all change the best recipe. The documented controls determine how directly ${profile.model} lets the owner respond.</p>
            <p>Repeatability deserves more weight than one dramatic cup. Make the same recipe on several ordinary mornings, record the useful settings, and judge whether the machine makes the desired result easier to reproduce. That is the practical meaning behind the ${profile.dimensions.espresso.score.toFixed(1)} out of 10 editorial score.</p>`,
        },
        {
          id: 'milk', eyebrow: 'Rating deep dive', title: `${profile.dimensions.milk.label ?? 'Milk'}: speed only matters when texture stays controllable`, html: `
            <p>${profile.milkNote} ${ref(profile, [0, 1, 3, 4])} Milk performance is a combination of heat delivery, air control, circulation, recovery, cleaning, and operator attention. A fast system can frustrate a beginner if it gives little time to correct position, while a slower system can frustrate a household making several drinks.</p>
            <p>Use cold milk, a consistent quantity, and the recommended vessel or container. With a manual wand, purge condensate, add a controlled amount of air near the beginning, then position for circulation and stop before overheating. With an automatic milk path, start from a conservative documented setting, keep the sensor or hose arrangement consistent, and change temperature or texture one step at a time. Alternative milks differ by formulation, not only plant type.</p>
            <p>The cleaning step belongs in the milk rating. Wipe and purge a wand immediately. Rinse or refrigerate a removable container as directed. Complete any prompted milk-path rinse instead of postponing it. Dried milk can narrow openings, change texture, create odors, and turn a convenient system into a recurring maintenance problem.</p>
            `,
        },
        {
          id: 'workflow', eyebrow: 'Rating deep dive', title: 'Workflow: count every touch from cold start to a clean counter', html: `
            <p>${profile.workflowNote} ${independentRefs} Marketing often times one internal event, such as heater readiness, while the owner experiences the whole drink. Grinding, dosing, warming, extracting, steaming, refilling, rinsing, knocking out coffee, wiping, and returning milk all belong in the clock.</p>
            <p>Map the station before purchase. Confirm cabinet clearance, tank and bean access, door or brew-unit travel, portafilter movement, carafe removal, drip-tray path, cord location, ventilation, grinder footprint, and a safe landing place for wet parts. A machine can fit by published dimensions and still be awkward under a cabinet or beside a wall.</p>
            <p>The most revealing home trial is the busiest normal order from a cold start. Make it in the sequence people actually request it, then restore the machine to a clean ready state. If the routine feels coherent, the workflow score is meaningful. If one repeated task causes resentment, a rival with a lower headline specification may deliver more value every day.</p>
            `,
        },
        {
          id: 'build', eyebrow: 'Rating deep dive', title: 'Build and service: judge access, support, and failure response', html: `
            <p>${profile.buildNote} ${ref(profile, [0, 1, 5, 6])} Material descriptions can help set expectations, but ownership depends more on stable controls, accessible daily-care parts, documented service, and the availability of the exact component for the exact revision.</p>
            <p>${profile.maintenanceNote} Removable does not mean maintenance-free, and a cleaning program does not inspect every seal, hose, valve, burr, sensor, or heating component. Use only procedures and products permitted by the manual. Boiler, mains-voltage, pressure, refrigerant, or internal-water work belongs with a qualified technician unless the manufacturer explicitly defines an owner procedure.</p>
            <p>${profile.ownerCaution} Self-selected reports can reveal useful inspection points, but they do not provide the denominator needed for a defect rate. The build score therefore rewards documented construction and support while preserving uncertainty about long-term incidence.</p>`,
        },
        {
          id: 'features', eyebrow: 'Rating deep dive', title: 'Features: separate daily help from brochure decoration', html: `
            <p>${profile.featuresNote} ${officialRefs} A useful feature removes a repeated burden, exposes a meaningful variable, or makes maintenance clearer. A feature has limited value when it duplicates a scale or timer, depends on an unsupported region, or hides a decision the owner would rather control.</p>
            <p>Read feature names literally. A PID can regulate one heater without measuring coffee-bed temperature. A pressure gauge can report boiler pressure rather than extraction pressure. A saved beverage can repeat programmed time or volume without correcting grind. An automatic milk setting can repeat a selected routine without knowing whether the espresso beneath it tastes balanced.</p>
            <p>For connected products, check app availability, accounts, network requirements, firmware policy, privacy preferences, and useful operation without a phone. For manual products, verify that the desired timer, temperature display, low-pressure stage, or volumetric stop is documented for the exact model.</p>`,
        },
        {
          id: 'value', eyebrow: 'Rating deep dive', title: 'Value: compare complete ownership on the same date', html: `
            <p>${profile.valueNote} The checked price context was ${profile.price.msrp} on ${profile.price.checked}. It is a dated reference, not a promise of today's checkout total, availability, finish surcharge, tax, delivery, bundle, or local warranty. ${priceRefs}</p>
            <p>${profile.primaryStrength} That benefit deserves payment only when it is used often. ${profile.primaryLimit} If the limitation would trigger an early replacement, the apparently lower price is false economy. If the strength removes a daily frustration for years, a higher price can be rational without claiming the product is inexpensive.</p>
            `,
        },
        {
          id: 'comparisons', eyebrow: 'Put the alternatives beside it', title: `${profile.model} versus the closest practical choices`, html: `
            <p>A useful comparison keeps architecture and buyer intent visible. A cheaper product may demand more technique, a faster product may expose fewer controls, and a traditional product may ask for more warmup and care. The rows below summarize the decision rather than pretending every specification carries equal weight.</p>
            ${comparisonTablesHtml(`${profile.brand} ${profile.model}`, profile.comparisons, profile.comparisonNote)}
            `,
        },
        {
          id: 'ownership', eyebrow: 'Owner evidence in proportion', title: 'What owner discussions add, and what they cannot prove', html: `
            <p>${profile.ownerPattern} ${ownerRefs} Repeated themes are useful because they point to the moments a specification page rarely explains: filling awkwardly under cabinets, learning a milk path, clearing a prompt, waiting between jobs, hearing a pump, or finding local service.</p>
            <p>${profile.ownerCaution} Forum participants choose to post, machines and regions differ, and a thread can overrepresent either enthusiastic early ownership or a difficult fault. One report can prove that an event happened to one person. It cannot show how often it happens across all units.</p>
            <p>Use owner evidence to create questions. Ask the seller to demonstrate tank access, cleaning, milk disassembly, saved settings, grinder adjustment, error recovery, and the exact warranty route. Ask a service provider whether the specific model and revision are supported. Those answers turn anecdote into a practical pre-purchase check.</p>
            `,
        },
        {
          id: 'recommendations', eyebrow: 'Choose by routine', title: 'Four routes from this decision', html: `
            <p>There is no universal upgrade path. Choose the card that fixes the most important daily mismatch, then read the full review before treating it as a recommendation for your counter, coffee, region, and budget.</p>
            ${recommendationCardsHtml(profile.recommendations)}
          `,
        },
        {
          id: 'faq', eyebrow: 'Questions before buying', title: `${profile.model} FAQ`, html: faqHtml(profile.faqs),
        },
      ],
      sources,
      finalTitle: profile.finalTitle,
      finalVerdict: profile.finalVerdict,
    },
    video: profile.video,
  });
};
