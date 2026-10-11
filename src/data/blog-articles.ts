import pagesA from './pages-a.json';
import pagesB from './pages-b.json';

type LabNote = [title: string, premise: string, control: string, measure: string, action: string, interpretation: string, stop: string];

type BlogConfig = {
  path: string;
  title: string;
  description: string;
  category: string;
  deck: string;
  summary: string;
  notes: LabNote[];
  faqs: [string, string][];
  sources: [string, string, string][];
  media: [string, string, string][];
  methodology: string;
};

const allLegacyPages = [...pagesA, ...pagesB] as Array<{ path: string; html: string }>;

const textOnly = (value: string) => value
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(?:nbsp|amp|quot|#39|#x27);/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const wordCount = (value: string) => textOnly(value).match(/[\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*/gu)?.length ?? 0;

const slugify = (value: string) => textOnly(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const legacyBlocks = (path: string) => {
  const source = allLegacyPages.find((page) => page.path === path)?.html ?? '';
  const clean = source
    .replace(/<!--([\s\S]*?)-->/g, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<link\b[^>]*>/gi, '')
    .replace(/<h1\b[\s\S]*?<\/h1>/gi, '');
  return [...clean.matchAll(/<(h2|h3|p|ul|ol|table)\b[^>]*>[\s\S]*?<\/\1>/gi)]
    .map((match) => match[0])
    .filter((block) => wordCount(block) > 0)
    .map((block) => block.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/i, (_match, attrs, label) => (
      `<h2${attrs} id="${slugify(label)}">${label}</h2>`
    )));
};

const renderNote = ([title, premise, control, measure, action, interpretation, stop]: LabNote, index: number) => `
  <section class="article-lab-note" aria-labelledby="field-note-${index}">
    <p class="review-overline">Controlled check ${String(index).padStart(2, '0')}</p>
    <h2 id="field-note-${index}">${title}</h2>
    <p>${premise} Treat this as a controlled comparison, not permission to change every variable at once. Keep ${control} stable, record ${measure}, and repeat the same routine before deciding that the difference is real. A single unusually good or bad result can come from preparation, temperature, retained coffee, bean age, or simple measurement error. The useful question is whether the result repeats when the setup and order of work remain the same.</p>
    <p>${action} If the result moves in the expected direction, keep the change long enough to taste it across several preparations. If it does not, return to the baseline before trying another correction. ${interpretation} That distinction prevents a convenient explanation from becoming a false rule. ${stop} Write down the final setting and the reason for keeping it; a short decision record is more valuable than a perfect-looking number that cannot be reproduced tomorrow.</p>
  </section>`;

const buildBody = (config: BlogConfig, targetWords = 4300) => {
  const blocks = legacyBlocks(config.path);
  const selected: string[] = [];
  let words = 0;
  for (const block of blocks) {
    const next = wordCount(block);
    if (words + next > targetWords && words >= targetWords - 180) break;
    selected.push(block);
    words += next;
    if (words >= targetWords) break;
  }
  for (let index = 0; words < targetWords && index < config.notes.length; index += 1) {
    const note = renderNote(config.notes[index], index + 1);
    selected.push(note);
    words += wordCount(note);
  }
  return selected.join('\n');
};

const sharedEspressoSources: [string, string, string][] = [
  ['Specialty Coffee Association coffee standards', 'https://sca.coffee/research/coffee-standards', 'The SCA standards program provides the current research and test-method context for grinders and espresso equipment.'],
  ['Breville espresso preparation guide', 'https://www.breville.com/us/en/coffee-journey/recipes/espresso.html', 'A manufacturer workflow reference for weighing dose and yield, tamping consistently and correcting flow with grind size.'],
  ['La Marzocco espresso brew ratios', 'https://www.lamarzocco.com/uk/en/using-espresso-brew-ratios/', 'A manufacturer explanation of dose, beverage yield, ratio, time and the way ratio changes texture and flavor.'],
];

const configs: BlogConfig[] = [
  {
    path: '/blog/conical-vs-flat-burr-grinders/',
    title: 'Conical vs Flat Burr Grinders: Which Delivers Better Espresso?',
    description: 'A practical, evidence-led comparison of conical and flat burr grinders by particle distribution, retention, heat, alignment, workflow and the coffee you actually brew.',
    category: 'Grinding research',
    deck: 'Burr shape matters, but it does not decide flavor by itself. Geometry, diameter, speed, alignment, chamber design, retention and the way you use the grinder all arrive in the cup together.',
    summary: 'Choose a grinder by repeatable performance in your dose range and workflow. Flat and conical describe the broad architecture; they do not guarantee clarity, body, low retention or easy dialing-in without evidence from the exact grinder and burr set.',
    notes: [
      ['Define the coffee before the burr', 'A grinder comparison is only meaningful when both grinders prepare the same coffee for the same brew method.', 'coffee, roast age, dose, water, ratio and machine', 'input mass, beverage mass, shot time and a short sensory note', 'Purge stale grounds, alternate the order of the grinders, and compare at matched beverage yield rather than matched dial markings.', 'A difference in body or clarity may come from particle distribution, but it may also come from a different flow rate or extraction.', 'Stop when one grinder repeatedly produces the preferred cup without demanding an impractical routine.'],
      ['Match flow before judging flavor', 'A faster shot from one grinder is not automatically proof of a worse burr geometry.', 'dose, yield, temperature and puck preparation', 'time to target yield and visible flow behavior', 'Adjust each grinder independently until both reach a comparable flow window, then compare taste.', 'Matching numbers does not make the extractions identical, but it removes the most obvious confounder.', 'Do not chase identical seconds if doing so makes one cup clearly worse.'],
      ['Measure retention in the real routine', 'Published retention numbers can hide the difference between total retention and the old coffee exchanged into the next dose.', 'hopper state, purge routine and time between uses', 'dose in, dose out and the first-dose behavior after rest', 'Run several normal doses, leave the grinder for the interval you actually use, then weigh and taste the next dose.', 'A low single-dose exchange can matter more at home than the total coffee held deep inside a chamber.', 'Choose the cleaning and purge burden you will actually maintain.'],
      ['Separate static from retention', 'Grounds on the chute or counter are a handling problem even when the missing mass eventually leaves the grinder.', 'room humidity, bean moisture and dosing method', 'mess, clumps and mass variance across repeated doses', 'Test the manufacturer-recommended anti-static workflow before adding water or aftermarket parts.', 'Static, clumping and retained grounds interact, but solving one does not prove that the others disappeared.', 'Reject any workaround that conflicts with the grinder manual or creates a maintenance risk.'],
      ['Listen to adjustment behavior', 'Espresso demands small, repeatable changes; the label stepless is less useful than what one practical movement does to flow.', 'coffee, dose and distribution', 'dial movement, shot-time change and ability to return to the prior setting', 'Move one marked increment finer, pull two shots, then return to the baseline and check whether the result comes back.', 'Backlash, collar load and thread design can matter as much as the number of printed marks.', 'Prefer an adjustment you can explain and reproduce over one with impressive theoretical resolution.'],
      ['Test warm and cold starts', 'Grinders can behave differently after several rapid doses because burrs, carriers and retained coffee warm up.', 'dose sequence and rest interval', 'output temperature, grind time, flow and taste from first to later doses', 'Compare the first morning dose with a short series that reflects guests or back-to-back drinks.', 'A commercial advantage under volume may be irrelevant to a one-drink household, while drift during a pair of drinks may still matter.', 'Base the decision on your highest realistic workload, not a café scenario you will never create.'],
      ['Check alignment claims carefully', 'Alignment affects the relationship between the cutting surfaces, but home tests often show marker contact rather than beverage impact.', 'burr set, carrier cleanliness and assembly torque', 'repeatability before and after a documented adjustment', 'Establish a taste and flow baseline before changing alignment, photograph each step, and make only reversible corrections.', 'A prettier marker wipe is not evidence of better extraction unless the grinder also becomes more consistent or tastes better.', 'Stop if the procedure risks warranty, threads, wiring or safe burr clearance.'],
      ['Compare noise in context', 'Peak loudness alone misses pitch, duration and vibration transmitted through the counter.', 'room, surface, dose and grinder position', 'grind duration plus a simple household comfort rating', 'Record the same dose from the same distance and note whether the sound disturbs conversation or sleeping rooms.', 'A quieter motor that grinds twice as long may be less pleasant than a brief louder cycle.', 'Choose the sound profile the household accepts at the time coffee is normally made.'],
      ['Price the complete grinder', 'The headline price may exclude a dosing cup, bellows, alternate burrs, shipping, tax or the tools needed for alignment and cleaning.', 'seller and exact model', 'delivered cost and the parts required for the intended workflow', 'Build one line-item price for each grinder before comparing value.', 'A cheaper platform can become more expensive when its desired performance depends on immediate modification.', 'Do not pay for an upgrade path unless you can name the limitation it will solve.'],
      ['Account for bean switching', 'A hopper workflow, single dosing and frequent coffee changes place different demands on retention and adjustment.', 'dose size and changeover frequency', 'purge mass, time to a stable recipe and wasted coffee', 'Run the actual sequence: espresso to filter, regular to decaf, or one bag until empty.', 'A grinder can be excellent within one narrow routine and frustrating when asked to jump between settings.', 'Favor the design that makes your normal changeover predictable with acceptable waste.'],
      ['Treat burr seasoning as a boundary', 'New burrs may change during early use, but vague seasoning claims can postpone a fair decision indefinitely.', 'coffee and recipe', 'mass ground, flow drift and taste at fixed settings', 'Log the first kilograms and reassess at a predefined point rather than changing the verdict after every dose.', 'Some change may be real; it does not excuse defects, unsafe contact or an unusable adjustment system.', 'Use the return window and manufacturer guidance as firmer boundaries than forum folklore.'],
      ['Inspect cleaning access', 'Old coffee and fine dust accumulate in places that daily purging does not reach.', 'cleaning interval and disassembly method', 'time, tools, lost settings and grounds removed', 'Follow the manual once and decide whether the procedure is realistic at the recommended interval.', 'Easy access supports repeatability because neglected residue can affect output and odor.', 'Avoid a routine that requires undocumented disassembly or routine recalibration you will not perform.'],
      ['Evaluate service and parts', 'Burrs are wear parts, while switches, capacitors, carriers and electronics can determine the useful life of the grinder.', 'region and seller', 'warranty terms, parts availability and documented service route', 'Confirm the exact regional model and ask how common wear parts are obtained before purchase.', 'A durable housing is not the same as a repairable product if proprietary parts are unavailable.', 'Treat uncertain support as a cost, especially for imported or modified grinders.'],
      ['Make the blind comparison modest', 'Blind tasting can reduce expectation bias, but a two-cup home test cannot establish a universal flavor law.', 'cup temperature, serving order and recipe', 'preference, confidence and whether the result repeats on another day', 'Have another person randomize labeled cups and repeat the comparison with reversed order.', 'A consistent preference is useful for the buyer even when the cause cannot be assigned solely to burr shape.', 'Conclude at the level the test supports: this coffee, these grinders, this recipe and these tasters.'],
    ],
    faqs: [
      ['Are flat burrs always clearer than conical burrs?', 'No. Some flat-burr grinders emphasize clarity and some conical grinders emphasize texture, but exact burr geometry, alignment, speed, particle distribution and recipe matter more than the category label alone.'],
      ['Do conical burrs retain less coffee?', 'Not automatically. Retention depends heavily on the chamber, chute, declumper, anti-static design and whether the grinder was designed for a hopper or single dosing.'],
      ['Should I replace stock burrs immediately?', 'Usually not. Learn the stock grinder first, document the problem you want to solve, and confirm that an alternate burr is compatible, safe and supported before spending more.'],
    ],
    sources: [
      ['Baratza burr-type overview', 'https://www.baratza.com/en-au/landing/product/shop-by-burr-type', 'Manufacturer overview of conical steel, flat steel and flat ceramic burr architectures.'],
      ['SCA: grinder variables and flavor consistency', 'https://sca.coffee/sca-news/designing-flavor-ceado', 'Industry research context covering particle distribution, retention, heat and grinder consistency.'],
      ['SCA: static electricity during grinding', 'https://sca.coffee/sca-news/25/issue-21/its-electric-understanding-and-reducingstatic-electricity-during-grinding-nf9hj', 'Research summary on charge, clumping, retention and measured particle behavior.'],
      ...sharedEspressoSources.slice(0, 1),
    ],
    media: [
      ['Architecture', 'Conical', 'A cone rotates inside a ring; feed behavior and the exact cutting pattern vary by design.'],
      ['Architecture', 'Flat', 'Two facing discs use centrifugal movement; diameter and tooth geometry still change the result.'],
      ['Decision rule', 'Exact grinder first', 'Compare retention, adjustment, service and repeatable cups before treating burr shape as the verdict.'],
    ],
    methodology: 'This guide preserves the original technical comparison, then adds controlled home checks that separate exact-grinder behavior from broad burr-shape claims. Manufacturer and SCA material establish definitions and documented variables; the article does not turn category descriptions or a small tasting into universal flavor guarantees.',
  },
  {
    path: '/blog/espresso-dosing/',
    title: "The Home Barista's Guide to Espresso Dosing",
    description: 'How to choose, measure and hold a repeatable espresso dose before changing grind, yield or time, with practical basket and roast adjustments.',
    category: 'Dial-in fundamentals',
    deck: 'Dose is the dry coffee placed in the basket. Make it stable first, because every later adjustment becomes harder to read when the amount of coffee changes from shot to shot.',
    summary: 'Start near the basket manufacturer’s intended range, weigh the coffee that reaches the basket, keep dose stable while dialing grind and yield, and change dose only for a specific reason such as headspace, basket fit or recipe design.',
    notes: [
      ['Start with the basket, not a universal number', 'A nominal double basket gives a useful range, but roast density and basket geometry determine the practical dose.', 'basket, coffee and grinder', 'dry dose, tamped headspace and any screen contact', 'Begin near the maker’s rating, lock in the portafilter, and inspect for obvious contact before increasing the dose.', 'More coffee can reduce headspace and slow flow without improving extraction.', 'Keep the lowest dose that prepares cleanly and supports the intended recipe.'],
      ['Measure what reaches the basket', 'A timed grinder setting is a delivery instruction, not proof of the final dose.', 'bean supply and grind setting', 'basket mass after grinding', 'Weigh the portafilter before and after grinding until the delivery variance is understood.', 'Retention and exchange can make the first dose after an adjustment different from later doses.', 'Once delivery is stable, use the simplest routine that stays within the chosen tolerance.'],
      ['Choose a useful tolerance', 'Chasing every hundredth of a gram can add work without changing the cup.', 'scale, dose target and workflow', 'variance over five normal preparations', 'Set a tolerance the scale can resolve and the grinder can deliver, then test whether larger misses change flow.', 'Precision should support repeatability, not become a ritual detached from taste.', 'Stop correcting tiny differences when they do not move the beverage in a repeatable way.'],
      ['Hold dose while changing grind', 'Dose and grind both change puck resistance, so moving both hides the cause of a faster or slower shot.', 'dose, yield and temperature', 'shot time, flow and taste', 'Correct a fast or slow baseline primarily with grind while returning to the same dry dose.', 'A stable input turns time into a more useful diagnostic rather than a target achieved by accident.', 'Change dose only after grind adjustment cannot solve the specific preparation or headspace problem.'],
      ['Pair dose with beverage yield', 'Eighteen grams is not a complete recipe without the amount of espresso collected.', 'dose and cup position', 'beverage mass and ratio', 'Place the cup on a scale, tare it, and stop the shot at a chosen yield before judging the result.', 'The same dose can produce a concentrated ristretto or a longer, more dilute espresso.', 'Keep a ratio only while it serves the coffee and drink style.'],
      ['Account for roast density', 'Darker coffee generally occupies more basket volume at the same mass than a denser light roast.', 'basket and target ratio', 'headspace, puck condition and flow', 'When changing roast style, return to the basket range and reassess headspace instead of copying the old dose blindly.', 'A volume difference does not mean one roast deserves an arbitrary larger or smaller number.', 'Choose the dose that fits the basket and supports an even, repeatable extraction.'],
      ['Check headspace without reading the wet puck', 'A soupy or dry spent puck is not a reliable quality score by itself.', 'dose and preparation', 'dry clearance before brewing and any clear shower-screen imprint', 'Use the machine or basket maker’s guidance and a careful dry fit where appropriate.', 'Water left above the puck can reflect machine design and depressurization rather than a dosing error.', 'Adjust only when contact, sealing or extraction behavior gives a consistent reason.'],
      ['Dose decaf as a new coffee', 'Decaffeination and roast development can change density, brittleness and flow behavior.', 'basket, water and yield', 'headspace, grind movement and taste', 'Begin again near the basket range and dial the decaf independently.', 'A decaf recipe does not need to match the regular coffee to be correct.', 'Keep the dose that produces a clean workflow and balanced cup without forced comparison.'],
      ['Plan consecutive shots', 'Grinder exchange and basket heat can make the first preparation different from the next.', 'warm-up and purge routine', 'dose variance and flow across a short sequence', 'Test the first and second shots you actually serve rather than a long laboratory run.', 'A routine for one morning espresso may need a small purge or delivery check before guests.', 'Adopt only the extra step that fixes a repeated difference.'],
      ['Record the reason for a dose change', 'A dose change should solve a named problem instead of becoming a reaction to every imperfect shot.', 'all other recipe variables', 'old and new dose, headspace, yield, time and taste', 'Write one sentence explaining the change and compare both recipes at their intended yields.', 'If the benefit cannot be described or repeated, the new number is not yet an improvement.', 'Keep the simpler recipe when both taste equivalent.'],
    ],
    faqs: [
      ['Is 18 grams the correct espresso dose?', 'It is a common starting point for many double baskets, not a universal rule. Use the exact basket’s range, coffee density, headspace and recipe to choose the working dose.'],
      ['Should I change dose to fix shot time?', 'Usually keep dose and yield stable and use grind size for the first flow correction. Change dose when you have a basket-fit, headspace or intentional recipe reason.'],
      ['Do I weigh beans before or grounds after grinding?', 'For the most direct measurement, weigh what reaches the basket. Weighing beans before grinding is useful for single dosing, but retained or exchanged grounds can make output differ.'],
    ],
    sources: sharedEspressoSources,
    media: [
      ['Input', 'Dose', 'Dry ground coffee placed in the basket and measured by mass.'],
      ['Output', 'Yield', 'Liquid espresso collected in the cup and measured by mass.'],
      ['Relationship', 'Ratio', 'Yield divided by dose; 18 g in and 36 g out is 1:2.'],
    ],
    methodology: 'This article treats dose as one measured input inside a complete espresso recipe. Basket and machine documentation control fit and operating limits; manufacturer training material supplies practical examples. The workflow advice is framed as a repeatable home test, not a claim that one dose or time fits every basket, roast or machine.',
  },
  {
    path: '/blog/espresso-tamp-guide/',
    title: 'How to Tamp Espresso: A Repeatable Guide to Level Pucks',
    description: 'A practical tamping guide focused on level preparation, consistent compression, basket fit and diagnosing the variables that tamping cannot fix.',
    category: 'Puck preparation',
    deck: 'A good tamp is level, repeatable and firm enough to fully compress the coffee. Once the puck is compressed, extra force is rarely the most useful place to search for a better shot.',
    summary: 'Distribute first, place the basket on a stable surface, keep the tamper level, compress to a repeatable stop and lift cleanly. Diagnose dose, grind, distribution and headspace before blaming a small pressure difference.',
    notes: [
      ['Fit the tamper to the basket', 'A tamper that leaves a wide untamped ring cannot create the same edge condition as one sized for the basket.', 'basket and coffee', 'tamper clearance, edge grounds and visible tilt', 'Confirm the basket’s intended tamper diameter and test the fit without forcing metal against the wall.', 'Closer fit can reduce the untouched ring, but unsafe contact and vacuum lift create new problems.', 'Choose smooth travel, safe clearance and repeatable release over the largest advertised diameter.'],
      ['Build a stable stance', 'Tamping becomes easier to repeat when the wrist, elbow and counter position do not change every shot.', 'portafilter support and tamper', 'levelness and comfort across several preparations', 'Set the basket on a mat or station that supports it without loading the spouts, then align the forearm above the puck.', 'A comfortable vertical motion is more repeatable than an awkward attempt to reach a specific force.', 'Stop and change the station if the routine strains the wrist or tips the basket.'],
      ['Distribute before compression', 'Tamping compresses the existing arrangement of grounds; it does not reliably move a dense mound into an empty edge.', 'dose and grind', 'surface level and clumps before tamping', 'Break obvious clumps and create an even bed before placing the tamper.', 'A level final surface can hide an uneven density pattern underneath.', 'Do not use the tamper as a substitute for a consistent dosing and distribution routine.'],
      ['Find the compression stop', 'Coffee compresses substantially at first and then offers increasing resistance.', 'dose, basket and body position', 'tamper travel and final puck height', 'Press smoothly until additional comfortable force produces little movement, then release.', 'The repeatable endpoint matters more than proving an exact force with the shoulder.', 'Avoid bouncing, repeated impacts or force that compromises control.'],
      ['Check level from more than one direction', 'A puck can look level from the handle side while tilting across the other axis.', 'station and dose', 'tamper collar or base relative to the basket rim', 'Pause at light contact, inspect alignment from two directions, then complete the tamp.', 'A leveling collar can help repeatability but cannot fix uneven density below the surface.', 'Keep the aid only if it improves repeatability without trapping grounds or changing dose.'],
      ['Lift without disturbing the puck', 'A fast angled lift or strong vacuum can fracture or pull the surface.', 'tamper and basket cleanliness', 'grounds stuck to the base and surface damage', 'Release pressure, lift vertically and wipe the tamper between preparations when necessary.', 'A polished surface is cosmetic unless the puck beneath remains even and intact.', 'Remove any flourish that creates more mess or variability than benefit.'],
      ['Treat calibrated tampers as training tools', 'A spring or click can standardize part of the motion, but it does not guarantee level distribution or correct headspace.', 'dose and preparation', 'levelness, endpoint and shot repeatability', 'Compare the calibrated tool with a careful conventional tamp over several shots.', 'A click confirms the mechanism reached its set point, not that the whole puck is uniform.', 'Keep the tool when it simplifies technique; do not use it to ignore earlier preparation errors.'],
      ['Separate tamp faults from grind faults', 'A fast shot after a firm, level tamp is more often corrected with grind than with dramatically more pressure.', 'dose, yield and tamp routine', 'time, flow and taste', 'Return to the same tamp and adjust grind in one small step.', 'Once the bed is compressed, grind size has much greater leverage over resistance than extra tamp force.', 'Change tamp technique only when levelness or repeatability is actually inconsistent.'],
      ['Audit the complete sequence', 'Tamping is one short step between grinding, distribution, locking in and brewing.', 'coffee and recipe', 'time from grinding to brew plus any handling disturbance', 'Film a normal preparation from the side and look for bumps, basket knocks or a tilted lock-in.', 'The most visible step often receives blame for errors introduced immediately before or after it.', 'Fix the earliest repeatable error instead of adding another accessory.'],
    ],
    faqs: [
      ['How hard should I tamp espresso?', 'Use firm, controlled pressure until the coffee is fully compressed, then prioritize doing it level and the same way each time. Exact force is less important than repeatability once compression is complete.'],
      ['Should I twist or polish after tamping?', 'A light clean release is enough. A hard polish does not repair uneven distribution and can disturb the puck or leave grounds on the basket wall.'],
      ['Will a self-leveling tamper fix channeling?', 'It can reduce tilt at the surface, but it cannot correct clumps, uneven density, poor dose fit, damaged baskets or an unsuitable grind.'],
    ],
    sources: [
      ['Breville guide to tamping espresso', 'https://www.breville.com/us/en/blog/coffee-and-espresso/how-to-tamp-espresso.html', 'Manufacturer guidance on basket preparation, distribution, level tamping and repeatable pressure.'],
      ['Breville Barista Pro instruction book', 'https://assets.breville.com/BES878/BES878_USCM_IB_M23_LR.pdf', 'Exact machine instructions describing dosing, tamp pressure, dose trimming and group preparation.'],
      ...sharedEspressoSources,
    ],
    media: [
      ['Before tamping', 'Distribute', 'Break clumps and level the loose bed; tamping preserves density differences it cannot see.'],
      ['During tamping', 'Stay level', 'Align the base with the basket and compress with a stable vertical motion.'],
      ['After tamping', 'Lift cleanly', 'Release and lift without twisting hard, knocking the basket or disturbing the surface.'],
    ],
    methodology: 'The recommendations separate documented manufacturer technique from variables that must be tested on the exact basket and coffee. The article emphasizes repeatable preparation and bounded diagnosis; it does not claim that a particular force number, tamper style or puck appearance proves extraction quality on its own.',
  },
  {
    path: '/blog/espresso-techniques/',
    title: 'Master Espresso Technique for Every Machine Type',
    description: 'A practical guide to adapting dose, yield, grind, temperature, milk and maintenance across semi-automatic, manual, superautomatic and capsule espresso systems.',
    category: 'Technique systems',
    deck: 'The useful technique depends on which jobs the machine gives back to the user. A lever, semi-automatic, bean-to-cup machine and capsule brewer can all make concentrated coffee, but their controllable variables are not the same.',
    summary: 'Identify the controls your machine truly exposes, establish one repeatable baseline, and change the highest-leverage available variable one step at a time. Do not import a manual-portafilter ritual into a closed automatic system or expect automation to remove cleaning and water management.',
    notes: [],
    faqs: [
      ['Do all espresso machines use the same dial-in method?', 'No. Semi-automatic and manual machines expose dose, distribution, tamp and yield directly; superautomatics and capsule systems expose a smaller set of strength, volume, temperature or bean settings.'],
      ['What variable should I change first?', 'On a manual-portafilter machine, stabilize dose and yield, then correct flow with grind. On an automatic system, use only documented user controls and keep the cleaning state constant while comparing.'],
      ['Can technique overcome machine limitations?', 'Technique can improve repeatability within the machine’s range, but it cannot create missing temperature control, grinder resolution, steam capacity or service access.'],
    ],
    sources: sharedEspressoSources,
    media: [
      ['Manual control', 'Lever', 'The user may control pressure and flow directly, while heat and preparation remain critical.'],
      ['Shared control', 'Semi-automatic', 'The machine supplies pressure and heat; the user owns the puck and usually the yield.'],
      ['Internal control', 'Superautomatic', 'Grinding and brewing happen inside; settings, cleaning and bean choice become the main levers.'],
    ],
    methodology: 'This guide classifies technique by the controls each machine type actually exposes. It combines the preserved machine-by-machine article with official espresso recipe and standards context. Recommendations stay within documented user operations and do not imply that closed automatic systems should be modified or that one numerical recipe transfers unchanged between machines.',
  },
  {
    path: '/blog/golden-ratio-espresso/',
    title: 'The 1:2 Espresso Ratio Explained',
    description: 'How to use a 1:2 espresso ratio as a repeatable starting coordinate, then adjust dose, yield, grind and time for the coffee and drink in front of you.',
    category: 'Dial-in fundamentals',
    deck: 'A 1:2 ratio means the beverage weighs twice the dry coffee dose: 18 grams in and 36 grams out. It is a useful starting coordinate, not a law of flavor or a substitute for tasting.',
    summary: 'Choose a basket-appropriate dose, calculate the target yield, use grind to reach a sensible flow window, and taste. Shorter ratios usually concentrate texture; longer ratios generally extract and dilute more. Keep the change only when the cup improves.',
    notes: [
      ['Calculate before brewing', 'Ratio is easier to use when the target beverage mass is written before the pump starts.', 'dose and cup', 'target yield and actual stopped yield', 'Multiply the dry dose by the chosen ratio and place the tared cup on the scale.', 'A clear target removes the temptation to stop only by color or habit.', 'Accept a small scale-and-machine overshoot tolerance, then compensate consistently.'],
      ['Separate ratio from time', 'Ratio describes input and output mass; time describes how long the brew took.', 'dose, yield and temperature', 'seconds to target plus taste', 'Hold the 1:2 target and adjust grind if flow is implausibly fast or slow.', 'Two shots can share a ratio while reaching it through very different extraction conditions.', 'Do not force a time target when the coffee tastes worse at that setting.'],
      ['Use grind as the first flow control', 'Changing the beverage target to hide a poor flow rate changes both extraction and drink strength.', 'dose and ratio', 'shot time, stream behavior and taste', 'Correct the baseline with a small grind movement, purge as required, and repeat.', 'Yield remains a taste lever rather than an emergency brake for every fast or slow shot.', 'Move the ratio only when the sensory goal calls for a different balance.'],
      ['Taste shorter ratios deliberately', 'A shorter yield often increases concentration and texture while extracting less from the puck.', 'dose and grind', 'yield, time, texture, acidity and finish', 'Compare the baseline with a modestly shorter yield and keep serving temperature and order controlled.', 'More intensity is not automatically more sweetness, and less yield is not automatically under-extracted.', 'Keep the shorter ratio only when the coffee becomes more coherent rather than merely stronger.'],
      ['Taste longer ratios deliberately', 'A longer yield can increase extraction while reducing beverage concentration.', 'dose and initial grind', 'yield, time, clarity, bitterness and finish', 'Extend the yield in a measured step, then adjust grind only after tasting the first comparison.', 'A clearer light-roast shot may benefit, while a soluble dark roast can become thin or harsh.', 'Stop extending when additional yield weakens structure or adds an unpleasant finish.'],
      ['Rebuild the recipe for a new coffee', 'Origin, roast, age and processing can change solubility and the ratio that tastes balanced.', 'basket, water and temperature', 'dose, yield, time and sensory notes', 'Return to a documented baseline when opening a new bag instead of inheriting every prior setting.', 'The baseline creates a map; it does not predict the destination.', 'Keep a recipe only for as long as the coffee continues to behave the same way.'],
      ['Account for milk drinks', 'A ratio that tastes balanced alone may disappear or become harsh once milk is added.', 'milk mass and texture', 'espresso yield plus balance in the finished drink', 'Compare candidate ratios in the drink that will actually be served.', 'A concentrated shorter shot may carry through milk, while a longer shot may offer more clarity in a smaller drink.', 'Choose for the final beverage rather than prestige attached to a ratio name.'],
      ['Manage scale delay and overshoot', 'Pumps, valves and retained water can continue adding beverage mass after the stop command.', 'cup, scale and machine program', 'command mass and final settled mass', 'Measure the usual overshoot over several shots and stop early by a consistent amount if needed.', 'The correction belongs to the workflow, not the mathematical ratio itself.', 'Recheck after changing flow rate because a faster shot may overshoot differently.'],
      ['Use ratio names loosely', 'Ristretto, normale and lungo describe useful neighborhoods, but boundaries vary across traditions and sources.', 'dose measurement method', 'actual input and output mass', 'Record the numbers beside any name used in notes or conversation.', 'Mass makes the recipe transferable even when terminology differs.', 'Prefer the measured recipe whenever a label could create ambiguity.'],
      ['Keep a compact dial-in log', 'Memory compresses several changes into one story and makes yesterday’s success hard to reproduce.', 'coffee, basket and water', 'date, dose, yield, time, grind move and one taste sentence', 'Write one line per deliberate shot and circle the baseline to repeat tomorrow.', 'The log reveals whether ratio or flow produced the change you preferred.', 'Stop recording routine shots once the recipe is stable, and start again when behavior shifts.'],
    ],
    faqs: [
      ['Is 1:2 the golden rule for espresso?', 'No. It is a widely useful starting ratio. The best yield depends on the coffee, basket, temperature, pressure profile and the taste or milk drink you want.'],
      ['How do I calculate a 1:2 ratio?', 'Multiply the dry dose by two. An 18 g dose targets 36 g of espresso; a 20 g dose targets 40 g. Weigh both input and beverage.'],
      ['Should I adjust ratio or grind first?', 'For a baseline that runs implausibly fast or slow, keep dose and yield stable and adjust grind first. Change ratio deliberately after tasting what a shorter or longer yield does.'],
    ],
    sources: [
      ['La Marzocco Strada EP guidebook', 'https://profileeditor.lamarzocco.com/files/strada_ep_guidebook.pdf', 'Manufacturer guide defining dose and brew ratio with 1:1, 1:2 and 1:3 examples.'],
      ['La Marzocco espresso brew ratios', 'https://www.lamarzocco.com/uk/en/using-espresso-brew-ratios/', 'Manufacturer training on ratio, time, temperature and pressure as separate recipe variables.'],
      ...sharedEspressoSources,
    ],
    media: [
      ['Ristretto coordinate', '1:1–1:2', 'Shorter yields usually emphasize concentration and texture.'],
      ['Starting coordinate', '1:2', 'Eighteen grams in and thirty-six grams out is a practical baseline.'],
      ['Longer coordinate', '1:2–1:3+', 'More yield can raise extraction while reducing concentration.'],
    ],
    methodology: 'The article uses ratio as a measured recipe coordinate rather than a quality guarantee. Manufacturer training sources define the calculation and its relationship to time, temperature and pressure. The controlled checks preserve dose and other variables so that a yield change can be tasted without pretending one ratio is correct for every coffee.',
  },
  {
    path: '/blog/ground-distribution/',
    title: 'Even Ground Distribution Before Espresso Extraction',
    description: 'A practical guide to espresso ground distribution, including WDT, tapping, clump control, basket density, tool limits and a repeatable way to test whether a step helps.',
    category: 'Puck preparation',
    deck: 'Distribution is the work between grinding and tamping: moving loose grounds toward a more even density before compression. The aim is not a cosmetically perfect surface. It is a puck with fewer obvious weak paths for water.',
    summary: 'Deliver a repeatable dose, break meaningful clumps, distribute through the depth of the bed when the grinder and workflow benefit, settle the grounds without aggressive impacts, then tamp level. Keep a distribution step only when it reduces shot-to-shot variation or improves taste in a controlled comparison.',
    notes: [
      ['Test the grinder before adding a tool', 'Some grinders deliver a loose, even mound while others produce visible clumps or concentrate grounds in one area of the basket.', 'coffee, dose, basket and grinder setting', 'delivery pattern, clumps, shot time and taste over several preparations', 'Pull a short baseline series with the simplest careful routine before adding WDT, a leveler or a dosing cup transfer.', 'A tool can solve a real delivery problem, but adding motions without a baseline makes improvement impossible to separate from novelty.', 'Keep the fewest steps that produce repeatable flow and a balanced cup.'],
      ['Use WDT as distribution, not decoration', 'Fine needles can break clumps and move coffee through the bed, while thick tools or hurried stirring can create furrows and new density differences.', 'dose, funnel, needle pattern and tamp', 'spillage, preparation time, shot variance and visible flow', 'Stir deliberately from the lower bed upward, cover the basket area, finish with a level surface and avoid scraping the metal.', 'The goal is an even density field, not a memorized number of circles or a dramatic surface pattern.', 'Stop changing the motion once it is simple enough to repeat and no longer improves the measured result.'],
      ['Compare the complete routine', 'Distribution cannot be judged apart from dosing, tamping, basket fit and the way the portafilter is locked into the machine.', 'coffee, yield, temperature and operator', 'total preparation time, shot time, taste and failure rate', 'Randomize a set of shots with and without the candidate step, keep labels hidden during tasting where practical, and repeat on another day.', 'A slower shot can indicate greater puck resistance, but slower is not automatically better unless taste and consistency also improve.', 'Adopt the method at the level the evidence supports: this grinder, coffee, basket and household workflow.'],
    ],
    faqs: [
      ['What is espresso distribution?', 'It is the process of arranging loose grounds more evenly in the basket before tamping, with the goal of reducing clumps and large density differences that can encourage uneven flow.'],
      ['Do I need a WDT tool?', 'Not every grinder and workflow needs it, but fine-needle WDT can be useful when grounds arrive clumped or unevenly. Compare it against a careful baseline rather than assuming every extra step helps.'],
      ['Is a spinning leveler the same as WDT?', 'No. A surface leveler mainly changes the top of the bed; WDT can move grounds and break clumps through more of the puck depth. Either tool can be misused, and neither replaces a level tamp.'],
    ],
    sources: [
      ['Barista Hustle: Weiss Distribution Technique', 'https://www.baristahustle.com/weiss-distribution-technique/', 'Technical overview of WDT, clump reduction, deep versus surface stirring, puck resistance and workflow limits.'],
      ['Barista Hustle distribution techniques', 'https://www.baristahustle.com/lesson/ae-3-04-distribution-techniques/', 'Training reference comparing tapping, dosing containers and WDT through the bed.'],
      ['Barista Hustle distribution test results', 'https://www.baristahustle.com/distribution-test-results/', 'A bounded experimental framework for evaluating distribution by consistency, extraction, speed and cleanliness.'],
      ...sharedEspressoSources,
    ],
    media: [
      ['Step 1', 'Deliver', 'Place the same measured dose into the basket without losing grounds at the edge.'],
      ['Step 2', 'Distribute', 'Break clumps and reduce obvious density differences through the coffee bed.'],
      ['Step 3', 'Tamp level', 'Compress the prepared bed once, cleanly, without trying to redistribute it again.'],
    ],
    methodology: 'This guide preserves the original distribution article and adds a controlled comparison framework. Barista Hustle material supplies the WDT definition and bounded experimental context; manufacturer sources establish the surrounding dose, tamp and recipe workflow. Observed changes in resistance or flow are treated as diagnostics, not proof of better flavor without repeat tasting.',
  },
  {
    path: '/blog/nordic-style-coffee/',
    title: 'Nordic-Style Coffee: Light Roasting, Clarity and Brewing',
    description: 'A research-led guide to Nordic-style coffee, from roast philosophy and origin transparency to the hotter, finer and carefully measured brewing routines light roasts often require.',
    category: 'Coffee culture and brewing',
    deck: 'Nordic-style coffee is best understood as a connected set of choices: lighter roasting intended to preserve origin character, transparent sourcing, and brewing that works hard enough to extract dense, less-developed beans without hiding them behind roast flavor.',
    summary: 'Treat “Nordic” as a useful cultural and roasting description, not a universal color standard. Buy coffee with a clear roast date and brewing intent, rest it as the roaster recommends, start with hot water and an appropriate fine grind, then adjust one variable at a time by taste.',
    notes: [],
    faqs: [
      ['Is Nordic-style coffee always very light?', 'It is generally associated with lighter roasting and strong emphasis on origin character, but “light” has no single consumer definition. Compare the roaster’s stated intent, measured information when available and the cup itself.'],
      ['Why can a light roast taste sour or grassy?', 'The brew may be under-extracted, the coffee may need more rest, or the roast may be underdeveloped. Try a finer grind, hotter water or more contact before concluding that acidity itself is the problem.'],
      ['Do I need a special brewer?', 'No. Pour-over, immersion and AeroPress methods can all work. A capable grinder, adequate water temperature, suitable water and a repeatable recipe matter more than owning a specifically Nordic device.'],
    ],
    sources: [
      ['Tim Wendelboe: roasting style FAQ', 'https://timwendelboe.no/pages/faq', 'A Nordic roaster’s own definition of its light-roast aim, including clarity, brightness, sweetness and the boundary between developed and grassy coffee.'],
      ['Tim Wendelboe French press guide', 'https://timwendelboe.no/pages/how-to-brew-french-press-coffee', 'A practical light-roast recipe with dose range, grind guidance and an explicit warning against assuming coarse grind prevents sediment.'],
      ['Tim Wendelboe AeroPress guide', 'https://timwendelboe.no/pages/how-to-brew-with-an-aeropress', 'A light-roast recipe using fine filter grind, boiling water, measured dose and timed immersion.'],
      ['SCA: what color is your coffee?', 'https://sca.coffee/sca-news/25/issue-21/what-color-is-your-coffee-37lk7', 'Research context explaining why visual labels such as light, medium and dark are inconsistent without measurement.'],
      ['SCA: roast degree and sensory perception', 'https://sca.coffee/sca-news/25-magazine/issue-5/modulating-perception-25-magazine-issue-5-dxzar', 'Research summary on roast degree, development and perceived acidity, fruitiness, bitterness, roast flavor and body.'],
    ],
    media: [
      ['Roast intent', 'Origin first', 'Develop the coffee while limiting roast flavors that obscure variety, place and processing.'],
      ['Brew response', 'Hotter + finer', 'Dense light roasts often need more extraction energy than familiar medium-roast recipes.'],
      ['Quality check', 'Taste, then adjust', 'Sour, grassy, bitter and astringent outcomes call for different corrections.'],
    ],
    methodology: 'This article keeps the historical and cultural account while trimming repetition and framing brewing numbers as examples rather than universal Nordic standards. Tim Wendelboe material provides first-party roast philosophy and recipes; SCA research provides boundaries around roast-color language and sensory claims. The guide separates a roaster’s intent, a measured brew and the drinker’s preference.',
  },
];

export const upgradedBlogArticles = configs.map((config) => ({
  ...config,
  slug: config.path.split('/').filter(Boolean).at(-1)!,
  published: '2026-07-27',
  updated: '2026-10-11',
  bodyHtml: buildBody(config),
  author: {
    name: 'Aleksandar Spasevski',
    role: 'Editor at Coffeedant',
    image: 'images/author-aleksandar-spasevski.jpg',
  },
}));

export const upgradedBlogPaths = new Set(upgradedBlogArticles.map((article) => article.path));

export const upgradedBlogBySlug = Object.fromEntries(upgradedBlogArticles.map((article) => [article.slug, article]));


