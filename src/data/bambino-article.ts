type ArticleSection = {
  id: string;
  eyebrow: string;
  title: string;
  html: string;
};

type ArticleSource = {
  id: string;
  label: string;
  href: string;
  note: string;
};

type ResearchArticle = {
  methodology: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
  finalTitle: string;
  finalVerdict: string[];
};

type EditorialImage = {
  src: string;
  sourceHref: string;
  alt: string;
  caption: string;
  credit: string;
  license: string;
  licenseHref: string;
  width: number;
  height: number;
  context?: string;
};

const internalHref = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

const mediaFigure = (image: EditorialImage) => `
  <figure class="review-media">
    <a class="review-media-link" href="${image.sourceHref}" target="_blank" rel="noopener">
      <img src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
    </a>
    <figcaption>
      ${image.caption}
      <span class="review-media-credit">Photo: <a href="${image.sourceHref}" target="_blank" rel="noopener">${image.credit}</a>, <a href="${image.licenseHref}" target="_blank" rel="license noopener">${image.license}</a>.${image.context ? ` ${image.context}` : ''}</span>
    </figcaption>
  </figure>
`;

// Rights and placement records are mirrored in docs/reviews/bambino-media.md.
// Remote Commons thumbnails are temporary until the production asset pipeline mirrors them locally.
const editorialMedia = {
  grinder: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Coffee_machine_grinding_beans_%28Unsplash%29.jpg/1280px-Coffee_machine_grinding_beans_%28Unsplash%29.jpg',
    sourceHref: 'https://commons.wikimedia.org/wiki/File:Coffee_machine_grinding_beans_(Unsplash).jpg',
    alt: 'Two burr coffee grinders with beans in their hoppers',
    caption: 'The grinder belongs in the buying decision because the Bambino Plus does not include one.',
    credit: 'Crew', license: 'CC0 1.0', licenseHref: 'https://creativecommons.org/publicdomain/zero/1.0/',
    width: 1280, height: 852,
    context: 'Commercial grinders are shown as a workflow illustration, not as product recommendations.',
  },
  baskets: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Espresso_machine_filter_baskets.jpg/1280px-Espresso_machine_filter_baskets.jpg',
    sourceHref: 'https://commons.wikimedia.org/wiki/File:Espresso_machine_filter_baskets.jpg',
    alt: 'Three removable espresso filter baskets arranged on a countertop',
    caption: 'Basket design changes how much resistance the ground coffee itself must provide.',
    credit: 'massage-techniques', license: 'CC BY-SA 2.0', licenseHref: 'https://creativecommons.org/licenses/by-sa/2.0/',
    width: 1280, height: 960,
    context: 'The baskets shown are illustrative and are not the Bambino Plus accessory set.',
  },
  workflow: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Passion_Pour_%28Unsplash%29.jpg/1280px-Passion_Pour_%28Unsplash%29.jpg',
    sourceHref: 'https://commons.wikimedia.org/wiki/File:Passion_Pour_(Unsplash).jpg',
    alt: 'A barista watching espresso flow from a machine into a glass',
    caption: 'A repeatable routine still includes watching the shot and responding to what you see.',
    credit: 'Nathan Dumlao', license: 'CC0 1.0', licenseHref: 'https://creativecommons.org/publicdomain/zero/1.0/',
    width: 1280, height: 853,
    context: 'The commercial machine shown is not the Bambino Plus.',
  },
  extraction: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Latte_in_a_coffee_machine_%28Unsplash%29.jpg/1280px-Latte_in_a_coffee_machine_%28Unsplash%29.jpg',
    sourceHref: 'https://commons.wikimedia.org/wiki/File:Latte_in_a_coffee_machine_(Unsplash).jpg',
    alt: 'Espresso flowing from a bottomless portafilter',
    caption: 'Flow can help diagnose preparation, but appearance alone does not tell you whether the espresso tastes balanced.',
    credit: 'Blake Richard Verdoorn', license: 'CC0 1.0', licenseHref: 'https://creativecommons.org/publicdomain/zero/1.0/',
    width: 1280, height: 853,
    context: 'The equipment shown is not the Bambino Plus.',
  },
  milk: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Athena_Lam_2016_%28Unsplash%29.jpg/1280px-Athena_Lam_2016_%28Unsplash%29.jpg',
    sourceHref: 'https://commons.wikimedia.org/wiki/File:Athena_Lam_2016_(Unsplash).jpg',
    alt: 'Cappuccino with leaf-pattern latte art in a red cup',
    caption: 'Automatic milk can shorten the learning curve, but the texture you prefer is still a personal target.',
    credit: 'Athena Lam', license: 'CC0 1.0', licenseHref: 'https://creativecommons.org/publicdomain/zero/1.0/',
    width: 1280, height: 853,
  },
  cleanup: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Portafilter_on_a_tamping_mat.jpg/1280px-Portafilter_on_a_tamping_mat.jpg',
    sourceHref: 'https://commons.wikimedia.org/wiki/File:Portafilter_on_a_tamping_mat.jpg',
    alt: 'An empty portafilter resting on a black tamping mat',
    caption: 'Clearing and rinsing the basket after coffee is a small job that keeps the next session predictable.',
    credit: 'massage-techniques', license: 'CC BY-SA 2.0', licenseHref: 'https://creativecommons.org/licenses/by-sa/2.0/',
    width: 1280, height: 960,
    context: 'The portafilter shown is illustrative and is not the Bambino Plus portafilter.',
  },
  fullyAutomatic: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Person_making_coffee_with_an_espresso_machine_in_a_kitchen_setting.jpg/1280px-Person_making_coffee_with_an_espresso_machine_in_a_kitchen_setting.jpg',
    sourceHref: 'https://commons.wikimedia.org/wiki/File:Person_making_coffee_with_an_espresso_machine_in_a_kitchen_setting.jpg',
    alt: 'Person holding a mug beneath a fully automatic coffee machine',
    caption: 'A fully automatic machine removes basket preparation. That is a change of workflow category, not a small Bambino feature upgrade.',
    credit: 'Nenad Stojković (Shixart1985)', license: 'CC BY 2.0', licenseHref: 'https://creativecommons.org/licenses/by/2.0/',
    width: 1280, height: 853,
  },
} satisfies Record<string, EditorialImage>;

// Canonical identity: Breville Bambino Plus BES500 / CD-EM-000005.
// The registry preserves /espresso-machine/breville-bambino/ for this product.
// Evidence packet completed 2026-09-15; no Coffeedant hands-on test is claimed.
export const bambinoArticle: ResearchArticle = {
  methodology: `
    <p>I built this review around the current US documentation for the Breville Bambino Plus BES500, five independent hands-on or long-term evaluations, and three owner-discussion pools, including relevant UK Sage context. I used that evidence to answer the buying question that matters here: whether automatic milk earns its share of the complete setup budget.</p>
    <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. The evidence supports confident judgments about the documented design, daily workflow, ownership questions, and market fit. It does not support invented Coffeedant measurements, an uncredited sensory result, or a failure rate. Prices were checked on September 15, 2026, and unresolved details remain marked rather than smoothed over.</p>
  `,
  sections: [
    {
      id: 'orientation',
      eyebrow: 'The buying decision',
      title: 'What the Bambino Plus actually takes off your hands',
      html: `
        <p>The Bambino Plus makes sense when you want to make espresso yourself but would happily delegate the milk. That distinction matters more than the beginner label. You still choose the coffee, grind it, fill the basket, tamp, and judge the shot; automatic milk removes one job from that sequence.</p>
        <p>I would start the purchase decision with your usual drink. If it is a cappuccino or latte, the Plus has a clear job in your kitchen. If it is espresso or an Americano, ask what the extra spending will change on an ordinary morning before paying for it.</p>
        <p>This review covers the <strong>Breville Bambino Plus BES500 for the US</strong>. The standard Bambino is BES450. UK Sage reviews are useful for understanding the family, but their accessories, electrical specifications, prices, and support terms should not be assumed to match a US purchase.</p>
        <div class="review-table-wrap" role="region" aria-label="The documented design, with its practical consequence" tabindex="0">
          <table class="review-table">
            <caption>The documented design, with its practical consequence</caption>
            <thead><tr><th scope="col">Feature</th><th scope="col">What it changes</th></tr></thead>
            <tbody>
              <tr><th scope="row">ThermoJet heating</th><td data-label="What it changes">Breville claims three-second heating readiness. Grinding, preparing coffee, and warming a cup still take time.</td></tr>
              <tr><th scope="row">54 mm portafilter</th><td data-label="What it changes">You prepare a removable basket of ground coffee and need compatible accessories.</td></tr>
              <tr><th scope="row">Automatic or manual milk</th><td data-label="What it changes">Three temperature and three texture settings provide a repeatable starting choice; manual steaming remains available.</td></tr>
              <tr><th scope="row">No built-in grinder</th><td data-label="What it changes">The grinder is another purchase and another item to fit on the counter.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Feature source: <a href="#source-breville-plus">Breville US [1]</a>. The consequence is a partly automated routine. Buyers who want to avoid handling grounds should look at a fully automatic machine before deciding that automatic milk will be enough.</p>
      `,
    },
    {
      id: 'setup',
      eyebrow: 'Before the first coffee',
      title: 'Build the whole setup, then choose the machine’s spot',
      html: `
        <p>A small espresso machine can become a surprisingly large coffee station. Put the grinder beside the proposed machine position, then allow somewhere to weigh coffee, place a wet portafilter, and set down a milk jug. A machine that fits only after moving everything else is unlikely to feel convenient.</p>
        ${mediaFigure(editorialMedia.grinder)}
        <p>The Plus has a removable 1.9 L tank. Exact counter clearance needs a separate check: the current official dimensions conflict with longstanding reviewer figures, so I would confirm the ordered unit’s width, depth, and height before fitting it into a tight recess. Leave access for refilling and lifting the tank, plus space in front to remove the tray. <a href="#source-plus-manual">[2]</a> <a href="#source-breville-plus">[1]</a> <a href="#source-gearlab">[11]</a></p>
        <p>The current US kit includes a portafilter, single-wall and dual-wall baskets, tamper, Razor trimming tool, milk jug, and cleaning tools. You do not need an upgraded basket or another tamper to begin. Check the contents against the booklet, particularly if you are buying older stock or a used unit. <a href="#source-breville-plus">[1]</a></p>
        ${mediaFigure(editorialMedia.baskets)}
        <h3>Choose a basket for the coffee you actually have</h3>
        <p>A single-wall basket leaves most of the resistance to the coffee itself. That makes grind adjustment useful: a small change can alter how readily water travels through the puck, the compressed bed of coffee. It also means an unsuitable grinder cannot be rescued by an expensive basket.</p>
        <p>A dual-wall basket adds restriction at its outlet, making it a practical fallback for preground coffee. It does not give you control over how that coffee was ground or how fresh it is. I would use it to get started if necessary, then put the upgrade budget toward a grinder capable of fine espresso adjustments. The manual explains the two basket types. <a href="#source-plus-manual">[2]</a></p>
        <h3>Keep the first setup deliberately ordinary</h3>
        <p>Use the supplied equipment, one coffee, and one basket while you learn. Follow the first-use instructions, then establish where the scale and cup will sit before grinding anything. Changing beans, basket, grinder setting, and dose together creates several explanations for every disappointing drink.</p>
        <p>I would also practise locking in the empty portafilter. Coffeeness reported its unit moving while the handle was tightened, and Tom’s Guide noted vibration during use. Those are handling observations from their machines, not Coffeedant measurements; the useful precaution is simply to arrange a stable working area and support the body when necessary. <a href="#source-coffeeness">[14]</a> <a href="#source-toms-guide">[13]</a></p>
      `,
    },
    {
      id: 'workflow',
      eyebrow: 'Living with the routine',
      title: 'The first week, one drink, and the second person waiting',
      html: `
        <h3>Your first week is about controlling fewer things</h3>
        <p>The first useful skill is repeating a preparation, not memorising every espresso term. Write down the coffee dose and the weight of the finished shot. Keep the same beans long enough to understand what a grinder adjustment changes, instead of treating each morning as a fresh experiment.</p>
        <p>On the next few sessions, improve one part of the routine: a level coffee bed, a straight tamp, or stopping at the intended drink weight. You are trying to make an adjustment interpretable. If yesterday’s dose is different from today’s, the grinder setting alone cannot explain the result.</p>
        <p>Once an espresso is enjoyable, choose a milk setting and keep the amount of milk similar. A shared household benefits from a small recipe note beside the grinder. The Plus cannot remember which beans you used or compensate for someone filling the basket by eye.</p>
        <h3>One morning drink</h3>
        <p>Think of preparation as a short sequence with a place for each tool. Get the cup, coffee, scale, and jug ready; heat the cup if desired and follow the manual’s pre-shot purge. Dry the basket before dosing, distribute the coffee, tamp level, and weigh the espresso as it pours. <a href="#source-plus-manual">[2]</a></p>
        ${mediaFigure(editorialMedia.workflow)}
        <p>For a milk drink, brew the espresso and then steam. The Bambino Plus cannot brew and steam simultaneously, a limitation confirmed by Serious Eats. Automatic milk frees your attention during steaming, but it does not create a second brewing station. <a href="#source-serious-eats">[10]</a></p>
        <p>The three-second claim should therefore change your expectation of waiting for the heater, not your expectation of the entire drink. Even a quickly available machine needs prepared coffee and clean tools. I would judge its convenience against a routine you can repeat while distracted, rather than the shortest possible demonstration.</p>
        <h3>Two drinks expose the real workload</h3>
        <p>The second drink needs another prepared basket and another extraction. You can prepare the next dose while the first drink’s milk is handled, provided you keep the area organised. What you cannot do is make the second espresso during the first steaming cycle.</p>
        <p>For two matching drinks, decide whether to finish one at a time or prepare both espressos before handling milk. The first approach gives the first person their drink sooner; the second groups similar jobs but leaves the first espresso waiting. Neither arrangement removes the grinding, basket clearing, and milk cleanup.</p>
        <p>This is a reasonable domestic sequence, but I would rethink the machine category if several people regularly expect large milk drinks together. Your bottleneck becomes the series of jobs rather than the initial heater start. More automation or equipment designed for simultaneous brewing and steaming solves a different, larger problem.</p>
      `,
    },
    {
      id: 'espresso',
      eyebrow: 'Making espresso',
      title: 'Espresso quality still depends on the grinder and your recipe',
      html: `
        <p>Breville specifies low-pressure pre-infusion followed by nine-bar extraction. Pre-infusion wets the coffee before the main extraction, while the advertised 15-bar pump figure describes the pump rather than the intended brewing pressure. These are manufacturer specifications, not measured Coffeedant results. <a href="#source-breville-plus">[1]</a></p>
        <p>Those features do not decide whether your coffee tastes balanced. Water still has to pass through a bed that you prepared. An uneven bed gives it easier routes through some areas, while a grind that is unsuitable can make the whole shot run too quickly or struggle to flow.</p>
        <p>I would prioritise a grinder with useful fine adjustments over a machine accessory that promises to fix extraction. You need to be able to change resistance in small steps and repeat the setting. Owning a separate grinder also lets you keep it if you eventually replace the espresso machine.</p>
        ${mediaFigure(editorialMedia.extraction)}
        <h3>A starting recipe, with an honest status</h3>
        <p>For the supplied double basket, Breville gives a 16–19 g dose range. An illustrative starting point is <strong>18 g of coffee and 36 g of espresso</strong>: a 1:2 ratio by weight. The yield is my suggested starting target, not a tested Coffeedant recipe or the machine’s programmed shot volume. <a href="#source-plus-manual">[2]</a></p>
        <p>Put the cup on a scale and learn where to stop the shot. The amount in the cup is easier to compare than the apparent volume of espresso and crema, the foam on top. Keep a note of elapsed time, but use it as context rather than a pass-or-fail test.</p>
        <p>If the drink is thin and sharp and also runs much faster than your previous attempt, a finer grind is a reasonable next experiment. If it barely flows, try a coarser adjustment before adding more pressure with the tamper. Keep dose and target yield steady while changing the grind so you can understand the result.</p>
        <p>Taste does not diagnose a machine fault by itself. A bitter drink is not automatically over-extracted, and a sour drink does not prove the brew water is too cold. Coffee choice, uneven extraction, and the amount of liquid collected can produce overlapping symptoms; change one variable and compare.</p>
        <h3>Buttons help with repetition; a scale helps with diagnosis</h3>
        <p>Serious Eats found the volumetric buttons less accurate than it wanted. I would keep the scale in the routine while dialing in, even if you later prefer using a programmed button. That gives you a way to distinguish a changed drink quantity from a changed grind. <a href="#source-serious-eats">[10]</a></p>
        <p>The manual also provides shot-volume programming and manual pre-infusion control. Those options let you take more responsibility for the extraction sequence as you learn. They do not turn a saved button into a saved coffee recipe: switching beans or changing the dose still means checking what ends up in the cup. <a href="#source-plus-manual">[2]</a></p>
        <h3>How much does the fixed brew temperature matter?</h3>
        <p>The Plus does not give the user adjustable brew temperature. Coffee Kev identifies that restriction as relevant to light-roast specialists, while Tom’s Guide achieved an enjoyable light-roast result in its own testing. The useful conclusion is limited control, not that light coffee is impossible. <a href="#source-coffee-kev">[12]</a> <a href="#source-toms-guide">[13]</a></p>
        <p>Automatic temperature regulation and an adjustable temperature setting are different things. A controller can aim for a preset target without letting you select another one. That distinction helps explain why a feature list can describe temperature control while an experienced owner still wants more control over brewing.</p>
        <p>If you enjoy changing coffees and methodically adjusting extraction, the missing setting may eventually become frustrating. If you mostly want a familiar blend with milk, it may scarcely affect your buying decision. I would choose for the experiments you actually want to make, rather than purchase theoretical flexibility you will never use.</p>
      `,
    },
    {
      id: 'milk',
      eyebrow: 'The reason to choose Plus',
      title: 'Automatic milk reduces technique, but still needs a routine',
      html: `
        <p>Automatic milk is most valuable when consistency matters more to you than practising the wand. You choose a setting and repeat an arrangement instead of manually judging every stage. In a household with different experience levels, that can make the machine easier to share.</p>
        <p>Automatic steaming requires the supplied jug, cold milk within its marks, sensor contact, and the lowered wand. Wipe, then lower the wand to purge afterward. In manual mode, you control stopping. Follow the booklet’s sequence. <a href="#source-plus-manual">[2]</a></p>
        ${mediaFigure(editorialMedia.milk)}
        <p>The sensor and presets need a repeatable starting situation. If you change milk quantity, milk type, and texture selection together, a different result tells you little about which change mattered. Start with the same amount and one setting, then adjust deliberately toward the drink you prefer.</p>
        <p>GearLab found automatic milk useful, but its preferred result depended on the setting; the highest temperature option heated more than its testers wanted. Tom’s Guide wanted thinner foam for a flat white than its automatic result provided. Neither observation justifies promising one setting will suit every milk and every taste. <a href="#source-gearlab">[11]</a> <a href="#source-toms-guide">[13]</a></p>
        <h3>Manual steaming is a different reason to own it</h3>
        <p>You can learn manual texturing on the Plus, but consider whether you are paying for automation you already intend to bypass. Manual steaming asks you to manage the introduction of air and the circulation of milk, then decide when to stop. That attention is part of the appeal for some buyers and exactly the work others want removed.</p>
        <p>I would choose the Plus when at least one regular user will benefit from automatic milk, even if another prefers manual control. If everyone wants to learn the wand, the standard Bambino deserves the first look. Put the saved money where the whole household will notice it.</p>
        <p>There is also a less glamorous milk feature to plan for: cleanup. Automatic purging sends water into the tray, and GearLab called out the small tray as a frequent emptying job. Keep the tray accessible rather than arranging the station so it becomes an awkward drawer to remove. <a href="#source-gearlab">[11]</a></p>
      `,
    },
    {
      id: 'ownership',
      eyebrow: 'After the novelty',
      title: 'Cleaning, water, support, and a sensible upgrade order',
      html: `
        <h3>Separate the cleaning jobs</h3>
        <p>It helps to think in terms of what you are removing. Milk residue belongs to the wand and jug routine; coffee residue belongs to the basket and brewing path; mineral scale comes from water inside the system. One cleaning action does not automatically deal with all three.</p>
        <div class="review-table-wrap" role="region" aria-label="A practical ownership rhythm" tabindex="0">
          <table class="review-table">
            <caption>A practical ownership rhythm</caption>
            <thead><tr><th scope="col">Moment</th><th scope="col">Your task</th><th scope="col">Why it matters</th></tr></thead>
            <tbody>
              <tr><th scope="row">After milk</th><td data-label="Your task">Wipe and purge the wand; wash the jug.</td><td data-label="Why it matters">Dried milk turns a small task into a harder one.</td></tr>
              <tr><th scope="row">After coffee</th><td data-label="Your task">Clear and rinse the basket; check the tray.</td><td data-label="Why it matters">Leave a usable station for the next drink.</td></tr>
              <tr><th scope="row">Cleaning alert</th><td data-label="Your task">Follow the group-cleaning program.</td><td data-label="Why it matters">Coffee-system cleaning and descaling are separate procedures.</td></tr>
              <tr><th scope="row">Descaling alert</th><td data-label="Your task">Follow the model’s descaling instructions.</td><td data-label="Why it matters">Water treatment does not justify ignoring maintenance prompts.</td></tr>
            </tbody>
          </table>
        </div>
        ${mediaFigure(editorialMedia.cleanup)}
        <p>The official <a href="#source-plus-support">BES500 support hub [3]</a> groups setup, cleaning, and extraction help in one place. Bookmark it before an unfamiliar light pattern interrupts breakfast. The operating booklet remains the reference for the actual button sequence and cleaning materials.</p>
        <h3>Filtered water is not a complete specification</h3>
        <p>A filter can improve taste without making the resulting water suitable for every espresso machine. Ask what your filter removes and what water you start with, rather than treating the word “filtered” as a maintenance guarantee. Bottled water also varies, so the label is more informative than the bottle.</p>
        <p>Breville warns against distilled, demineralised, or highly filtered water and explains that hard-water scale affects operation. Follow its water and descaling guidance for this machine. I would establish a repeatable water supply before trying to interpret small recipe differences. <a href="#source-plus-manual">[2]</a></p>
        <h3>Serviceability needs a specific answer</h3>
        <p>I would not call the Plus disposable, and I would not promise easy repairs for a decade. Breville provides a <a href="#source-plus-parts">parts route [5]</a> and support, but that does not establish the stock, price, or replaceability of every internal component. If repair is a deciding factor, ask about your location and the actual machine before purchase.</p>
        <p>Keep the receipt and machine identification details. The current <a href="#source-breville-warranty">North American warranty terms [4]</a> explain the claim route; the model-specific duration was not established by the documents retrieved for this review. Confirm the applicable coverage with the seller rather than importing a promise from an older review or another region.</p>
        <h3>Buying used or refurbished</h3>
        <p>A lower sticker price should buy you a lower total risk-adjusted cost, not merely somebody else’s unresolved fault. Ask the seller to demonstrate an espresso, automatic milk, and manual steaming, then check for leaks and unfamiliar warning lights. Establish what is included, because replacing missing equipment changes the saving.</p>
        <p>Ask about water, maintenance, and the reason for sale, while remembering that answers are claims rather than proof. For a refurbished machine, get the return conditions and warranty in writing. I would pay more for a clear remedy if the machine arrives faulty than gamble the whole budget on an untested listing.</p>
        <h3>Upgrade in the order that resolves your problem</h3>
        <p>Start with the grinder and a usable scale, then improve preparation. A different tamper may be worthwhile if it helps you work comfortably and level; a different basket needs a reason beyond its appearance. A bottomless portafilter can make uneven flow easier to see, but seeing a problem does not automatically fix it.</p>
        <p>Buy accessories for the BES500’s actual fit, not only a diameter printed in an advert. If you later change machines, the grinder and scale are broadly reusable purchases; the basket and portafilter need another compatibility check. That is why I would avoid building an expensive accessory collection before understanding what the supplied kit cannot do for you.</p>
      `,
    },
    {
      id: 'cost',
      eyebrow: 'The complete purchase',
      title: 'Budget for a coffee setup, not just a $499.95 machine',
      html: `
        <p>Breville US displayed the Bambino Plus at <strong>$499.95 on September 15, 2026</strong>. That is a dated manufacturer price, not an Amazon offer or an automatically refreshed figure. Use it as the starting line for a budget, then check the chosen seller. <a href="#source-breville-plus">[1]</a></p>
        <div class="review-table-wrap" role="region" aria-label="Illustrative starting budget, before tax and shipping" tabindex="0">
          <table class="review-table">
            <caption>Illustrative starting budget, before tax and shipping</caption>
            <thead><tr><th scope="col">Item</th><th scope="col">Amount</th><th scope="col">Basis</th></tr></thead>
            <tbody>
              <tr><th scope="row">Bambino Plus</th><td data-label="Amount">$499.95</td><td data-label="Basis">Breville US price at the dated check.</td></tr>
              <tr><th scope="row">Separate grinder</th><td data-label="Amount">$150–$300</td><td data-label="Basis">Editorial planning allowance; verify a suitable grinder’s current price.</td></tr>
              <tr><th scope="row">Scale</th><td data-label="Amount">$20–$40</td><td data-label="Basis">Editorial allowance, not a quoted product offer.</td></tr>
              <tr><th scope="row">First coffee and care supplies</th><td data-label="Amount">$30–$60</td><td data-label="Basis">Editorial allowance that depends on what you already own.</td></tr>
              <tr><th scope="row">Starting total</th><td data-label="Amount">About $700–$900</td><td data-label="Basis">Rounded sum of the machine and the allowances above.</td></tr>
            </tbody>
          </table>
        </div>
        <p>This is a planning exercise, not evidence that every grinder in that price range will work equally well. If the complete budget is tight, compare the standard Bambino plus a suitable grinder against the Plus with a compromised grinder. Automatic milk cannot repair a poorly controlled coffee grind.</p>
        <p>For recurring coffee cost, use your own consumption. Two 18 g doses a day would use about 13.1 kg a year before dial-in waste, guests, or discarded beans. Multiply that by what you actually pay per kilogram, then add milk, water treatment, and cleaning supplies; I would not justify the purchase with an assumed saving on every café visit.</p>
      `,
    },
    {
      id: 'compare',
      eyebrow: 'Choose the right compromise',
      title: 'Four alternatives, with the quick answer and the technical detail',
      html: `
        <p class="review-lead">Use the quick table to identify the workflow that sounds right. Open <strong>Details</strong> when counter fit, heating design, portafilter size, grinder arrangement, or milk workflow could change the decision.</p>
        <div class="review-table-wrap review-table-quick" role="region" aria-label="Quick comparison: start with the work you want to keep or remove" tabindex="0">
          <table class="review-table">
            <caption>Quick view: start with the work you want to keep or remove</caption>
            <thead><tr><th scope="col">Alternative</th><th scope="col">Reason to consider it</th><th scope="col">What you still do</th></tr></thead>
            <tbody>
              <tr><th scope="row"><a href="#compare-bambino">Bambino BES450</a></th><td data-label="Reason to consider it">Spend less and steam manually.</td><td data-label="What you still do">Grind, prepare the basket, brew, and manage milk.</td></tr>
              <tr><th scope="row"><a href="${internalHref('/espresso-machine/gaggia-classic-evo/')}">Gaggia Classic E24</a></th><td data-label="Reason to consider it">A traditional boiler and 58 mm portafilter approach.</td><td data-label="What you still do">Learn the machine’s brewing and manual steaming routine.</td></tr>
              <tr><th scope="row"><a href="${internalHref('/espresso-machine/breville-barista-express-bes870xl/')}">Barista Express BES870</a></th><td data-label="Reason to consider it">Bring the grinder into the machine body.</td><td data-label="What you still do">Prepare espresso and steam milk manually.</td></tr>
              <tr><th scope="row"><a href="${internalHref('/espresso-machine/superautomatic/')}">Fully automatic category</a></th><td data-label="Reason to consider it">Remove manual basket preparation.</td><td data-label="What you still do">Refill, empty, and maintain the system; exact milk work varies.</td></tr>
            </tbody>
          </table>
        </div>
        <details class="review-comparison-details">
          <summary>
            <span class="review-details-label">Details</span>
            <span class="review-details-description">Dimensions, heating system, portafilter, grinder, milk workflow, and best fit</span>
          </summary>
          <div class="review-table-wrap" role="region" aria-label="Detailed technical comparison of the Bambino Plus and alternatives" tabindex="0">
            <table class="review-table review-table-detailed">
              <caption>Detailed view: compare the exact workflow and counter fit</caption>
              <thead><tr><th scope="col">Machine</th><th scope="col">Heating</th><th scope="col">Official dimensions</th><th scope="col">Coffee setup</th><th scope="col">Milk workflow</th><th scope="col">Best fit</th></tr></thead>
              <tbody>
                <tr><th scope="row"><a href="${internalHref('/espresso-machine/breville-bambino/')}">Bambino Plus BES500</a></th><td data-label="Heating">ThermoJet; brew and steam in sequence</td><td data-label="Official dimensions">11.9 × 7.4 × 14.3 in, W×D×H <a href="#source-breville-plus">[1]</a></td><td data-label="Coffee setup">54 mm portafilter; separate grinder</td><td data-label="Milk workflow">Automatic or manual; 3 temperature and 3 texture choices</td><td data-label="Best fit">Frequent milk drinks with fewer milk decisions</td></tr>
                <tr><th scope="row"><a href="#compare-bambino">Bambino BES450</a></th><td data-label="Heating">ThermoJet; brew and steam in sequence</td><td data-label="Official dimensions">11.9 × 6.1 × 13.5 in, W×D×H <a href="#source-breville-bambino">[6]</a></td><td data-label="Coffee setup">54 mm portafilter; separate grinder</td><td data-label="Milk workflow">Manual steam wand</td><td data-label="Best fit">Lower machine spend and hands-on milk practice</td></tr>
                <tr><th scope="row"><a href="${internalHref('/espresso-machine/gaggia-classic-evo/')}">Gaggia Classic E24</a></th><td data-label="Heating">Single lead-free brass boiler</td><td data-label="Official dimensions">20 × 35.5 × 27 cm, L×H×D <a href="#source-gaggia-e24">[8]</a></td><td data-label="Coffee setup">58 mm portafilter; separate grinder</td><td data-label="Milk workflow">Manual; cool the boiler after steaming before another brew</td><td data-label="Best fit">A more traditional routine and 58 mm accessories</td></tr>
                <tr><th scope="row"><a href="${internalHref('/espresso-machine/breville-barista-express-bes870xl/')}">Barista Express BES870</a></th><td data-label="Heating">PID-controlled Thermocoil; brew and steam in sequence</td><td data-label="Official dimensions">15.9 × 13.1 × 12.4 in, W×D×H <a href="#source-barista-express">[9]</a></td><td data-label="Coffee setup">54 mm portafilter; integrated conical burr grinder with 16 settings</td><td data-label="Milk workflow">Manual steam wand</td><td data-label="Best fit">One combined appliance without leaving portafilter espresso</td></tr>
                <tr><th scope="row"><a href="${internalHref('/espresso-machine/superautomatic/')}">Fully automatic category</a></th><td data-label="Heating">Varies by model</td><td data-label="Official dimensions">Varies; verify the exact model</td><td data-label="Coffee setup">Integrated grinder and internal brew group</td><td data-label="Milk workflow">Varies from a manual wand to one-touch milk</td><td data-label="Best fit">Minimum handling of ground coffee</td></tr>
              </tbody>
            </table>
          </div>
          <p class="review-table-note">Breville and Gaggia dimension labels are reproduced in the manufacturers’ stated order. Verify a tight recess against the exact unit. The standard Bambino links to its full comparison below because Coffeedant does not yet have a separate BES450 review page.</p>
        </details>
        <h3 id="compare-bambino">Bambino Plus versus Bambino: will you use automatic milk?</h3>
        <p>The US Bambino BES450 was $299.95 at the same check, a $200 difference. It has manual steaming, a 54 mm portafilter, and a dedicated hot-water control; current US listings include both basket types. Its tank is 1.4 L versus the Plus’s 1.9 L. <a href="#source-breville-bambino">[6]</a> <a href="#source-bambino-manual">[7]</a></p>
        <p>I would choose the standard Bambino for an espresso-focused household or someone who specifically wants to learn manual milk. Choose the Plus when automatic milk will be used regularly, especially by several people with different confidence levels. Do not translate a higher price into an assumed $200 improvement in the espresso itself.</p>
        <h3 id="compare-manual">Bambino Plus versus Gaggia Classic E24: which routine appeals?</h3>
        <p>The current Classic E24 uses a brass boiler, a 58 mm portafilter, and a manual steam wand. It is a different workflow proposition from the Plus’s quick heater and automatic milk. These details refer to E24, not every earlier machine bearing the Classic name. <a href="#source-gaggia-e24">[8]</a></p>
        <p>The E24’s US manual describes cooling the boiler after steaming before making another coffee. That adds a step when you finish one cappuccino and immediately start the next: the same boiler has been doing a hotter job and must return to brewing conditions. For a household making several drinks, this matters more than the portafilter diameter. <a href="#source-gaggia-manual">[19]</a></p>
        <p>I would put the E24 on the shortlist if the more traditional routine and its accessory standard are part of the attraction. I would keep the Plus ahead if reducing daily decisions matters more. A larger portafilter is not, by itself, proof of better espresso or a longer machine life.</p>
        <h3 id="compare-integrated">Bambino Plus versus Barista Express: separate grinder or one body?</h3>
        <p>The Barista Express BES870 integrates a conical burr grinder with 16 settings and uses manual milk texturing. It still asks you to prepare a portafilter; it is not a fully automatic coffee machine. <a href="#source-barista-express">[9]</a></p>
        <p>Consider it when you want to choose and position one combined appliance. I prefer a separate grinder when independent upgrades matter, but that means planning two purchases and two positions on the counter. Compare the complete setups, and remember that moving to the Express does not preserve the Plus’s automatic milk routine.</p>
        <h3 id="compare-automatic">Bambino Plus versus fully automatic: how much work do you want?</h3>
        <p>If the preparation described in this review sounds like a burden, start in the fully automatic category. These machines handle grinding and brewing internally, although milk arrangements differ by model. That change addresses a different need from making one part of a manual routine easier.</p>
        ${mediaFigure(editorialMedia.fullyAutomatic)}
        <p>I would choose the Plus if adjusting coffee is a satisfying part of the day. If the goal is a button press before leaving the house, be honest about that preference and compare fully automatic models by their actual milk and cleaning requirements. You are choosing work you will repeat, not an identity as a coffee enthusiast.</p>
      `,
    },
    {
      id: 'owners',
      eyebrow: 'What ownership adds',
      title: 'The market pattern is more useful than any single comment',
      html: `
        <p class="review-lead">The ownership pattern is clearer than any single anecdote: the Plus satisfies people who want espresso involvement without making milk technique a daily requirement. It becomes less persuasive when manual steaming is one of the skills they actively want to build.</p>
        <p>Early frustration tends to gather around the surrounding espresso setup, especially grind control, dosing, tamping, and learning what a fast or slow shot means. Once that routine becomes repeatable, the quick heater and automatic milk are the conveniences owners notice. This is why I would never evaluate the machine separately from the grinder or assume that a beginner-friendly milk system makes the whole drink automatic.</p>
        <p>Longer-term reactions divide along priorities. Convenience-first owners can remain happy with a stable routine. Control-first owners are more likely to question the milk premium or want additional brew adjustment later. Those positions are not contradictory. They describe two different reasons to buy an espresso machine.</p>
        <p>Reliability reports are mixed, with satisfied ownership, returns, and individual failures all present in the evidence pool. There is no denominator, consistent region, or verified-purchase sample from which to calculate a failure rate. The practical response is to follow the cleaning routine, confirm the seller’s return terms and applicable warranty, and treat the automatic milk system as added complexity rather than proof of a common defect.</p>
        <p>I would reduce the market research to one question: <strong>do you want to learn espresso while keeping milk easy, or do you want to learn both?</strong> The Plus is coherent for the first person. The standard Bambino or a more traditional manual machine deserves priority for the second.</p>
        <p class="review-source-note"><strong>Evidence pool:</strong> original owner discussions across Reddit, Singletrack, and CoffeeBlog, including relevant UK Sage context. The public conclusion above synthesises recurring themes; the source notes retain the individual limitations. <a href="#source-reddit-starting">[15]</a> <a href="#source-reddit-ownership">[16]</a> <a href="#source-singletrack">[17]</a> <a href="#source-coffeeblog">[18]</a></p>
      `,
    },
    {
      id: 'faq',
      eyebrow: 'Before you order',
      title: 'The remaining practical questions',
      html: `
        <h3>Does the 54 mm basket make it an inferior espresso machine?</h3>
        <p>Diameter is a compatibility and geometry detail, not a cup-quality score. I would worry first about grind adjustment, even preparation, and a recipe you enjoy. Choose accessories because they solve an identified problem, and check compatibility with the exact machine.</p>
        <h3>Can I make an Americano with the Plus?</h3>
        <p>Yes: an Americano is espresso diluted with hot water, which can also come from a kettle. The current Plus manual documents hot-water delivery through a button combination, while the standard Bambino has a dedicated control. Check the matching booklet rather than assuming an older tutorial uses your model’s controls. <a href="#source-plus-manual">[2]</a> <a href="#source-breville-bambino">[6]</a></p>
        <h3>Will my travel mug fit under the portafilter?</h3>
        <p>Verified usable cup clearance was not established in this research. Measure the mug together with any scale you want beneath it, and ask the seller about that combination. Brewing into a smaller cup and transferring is a possible workaround, but count the extra washing as part of the routine.</p>
        <h3>Should I buy the Plus now and add a grinder later?</h3>
        <p>You can start with preground coffee and the appropriate basket, but I would price the complete setup before ordering. If buying the Plus postpones a suitable grinder indefinitely, the standard Bambino may be a more coherent purchase. You can learn manual milk; you cannot dial in coffee whose grind you cannot change.</p>
        <h3>Will a new basket give me adjustable brew temperature?</h3>
        <p>No. Changing how coffee sits in the portafilter does not add a missing machine control. If temperature adjustment is already central to the way you want to brew, choose a machine with that facility rather than planning accessories around the restriction.</p>
      `,
    },
    {
      id: 'related',
      eyebrow: 'Build your shortlist',
      title: 'Continue with the rest of your setup',
      html: `
        <p>Use the <a href="${internalHref('/grinder/')}">grinder guide</a> alongside your machine shortlist so the complete purchase makes sense. For a wider comparison, explore <a href="${internalHref('/espresso-machine/beginners/')}">espresso machines for beginners</a> and the <a href="${internalHref('/breville/')}">Breville range</a>. If preparing a portafilter is the part you want to skip, start with the <a href="${internalHref('/espresso-machine/superautomatic/')}">fully automatic machine guide</a> and compare the work each option leaves you to do.</p>
        <div class="review-recommendation-grid" data-commerce-ready="true" aria-label="Recommended next step by workflow">
          <article class="review-recommendation-card review-recommendation-card-featured">
            <p class="review-recommendation-kicker">Best for frequent milk drinks</p>
            <h3>Bambino Plus with a separate grinder</h3>
            <p>Keep automatic milk and protect espresso quality by treating the grinder as part of the same purchase.</p>
            <a href="${internalHref('/grinder/')}">Choose the grinder next <span aria-hidden="true">→</span></a>
          </article>
          <article class="review-recommendation-card">
            <p class="review-recommendation-kicker">Best value if milk is a skill</p>
            <h3>Bambino BES450</h3>
            <p>Save the machine premium, steam manually, and leave more of the budget for grind control.</p>
            <a href="#compare-bambino">Read the full comparison <span aria-hidden="true">↑</span></a>
          </article>
          <article class="review-recommendation-card">
            <p class="review-recommendation-kicker">Best one-body compromise</p>
            <h3>Barista Express BES870</h3>
            <p>Bring the grinder into the appliance while keeping manual portafilter preparation and milk.</p>
            <a href="${internalHref('/espresso-machine/breville-barista-express-bes870xl/')}">Read the Coffeedant review <span aria-hidden="true">→</span></a>
          </article>
          <article class="review-recommendation-card">
            <p class="review-recommendation-kicker">Best for minimum handling</p>
            <h3>Fully automatic machines</h3>
            <p>Move categories if grinding, dosing, tamping, and clearing a basket are the work you want removed.</p>
            <a href="${internalHref('/espresso-machine/superautomatic/')}">Compare fully automatic models <span aria-hidden="true">→</span></a>
          </article>
        </div>
        <p class="review-source-note"><strong>Recommendation rule:</strong> choose the workflow first and use live price or availability as the second filter. Retailer data can enrich these cards later without deciding which machine Coffeedant recommends.</p>
      `,
    },
  ],
  sources: [
    { id: 'source-breville-plus', label: '[1] Breville US: Bambino Plus BES500', href: 'https://www.breville.com/en-us/product/bes500', note: 'Official US features, included equipment, and $499.95 displayed price. Checked September 15, 2026. Published dimension conflict remains unresolved.' },
    { id: 'source-plus-manual', label: '[2] Breville BES500 US/Canada/Mexico manual', href: 'https://assets.breville.com/BES500/BES500_USCM_IB_Y25_LR.pdf', note: 'Current product-linked booklet: baskets, dose range, controls, milk, water, cleaning, and maintenance. Checked September 15, 2026.' },
    { id: 'source-plus-support', label: '[3] Breville BES500 support and tutorials', href: 'https://www.breville.com/en-us/producthub/bes500', note: 'Official setup, extraction, cleaning, and support route. Checked September 15, 2026.' },
    { id: 'source-breville-warranty', label: '[4] Breville North American warranty terms', href: 'https://www.breville.com/en-us/support/warranty', note: 'Official claim route and terms. Checked September 15, 2026; exact BES500 warranty duration was not established.' },
    { id: 'source-plus-parts', label: '[5] Breville BES500 parts route', href: 'https://www.breville.com/en-us/shop/espresso/parts/bes500', note: 'Official parts navigation. Checked September 15, 2026; model-specific stock, internal-part availability, and repair costs were not verified.' },
    { id: 'source-breville-bambino', label: '[6] Breville US: Bambino BES450', href: 'https://www.breville.com/en-us/product/bes450', note: 'Official base-model comparison, current basket inclusion, hot-water control, and $299.95 displayed price. Checked September 15, 2026.' },
    { id: 'source-bambino-manual', label: '[7] Breville BES450 US/Canada/Mexico manual', href: 'https://assets.breville.com/BES450/BES450_USCM_IB_M26_LR.pdf', note: 'Current product-linked base-model booklet; confirms 1.4 L tank and manual milk. Checked September 15, 2026.' },
    { id: 'source-gaggia-e24', label: '[8] Gaggia: Classic E24', href: 'https://www.gaggia.com/manual-machines/new-classic-e24/', note: 'Official current E24 architecture and controls, with US/Canada documentation. Not an older Classic-generation comparison. Checked September 15, 2026.' },
    { id: 'source-barista-express', label: '[9] Breville US: Barista Express BES870', href: 'https://www.breville.com/en-us/product/bes870', note: 'Official integrated grinder and manual-milk features. No competitor price claim. Checked September 15, 2026.' },
    { id: 'source-serious-eats', label: '[10] Serious Eats: Jesse Raub’s Bambino Plus review', href: 'https://www.seriouseats.com/breville-bambino-plus-review-8412244', note: 'Updated December 12, 2025. US-context hands-on review; used here for volumetric-control observations and sequential brewing/steaming. Its results are not Coffeedant tests.' },
    { id: 'source-gearlab', label: '[11] GearLab: Bambino Plus review', href: 'https://www.techgearlab.com/reviews/kitchen/espresso-machine/breville-bambino-plus', note: 'Lesley Robinson, with Jason Wanlass; April 16, 2024. Purchased-unit tests and handling observations. Test-specific timings and extraction measurements were not adopted.' },
    { id: 'source-coffee-kev', label: '[12] Coffee Kev: Bambino versus Bambino Plus', href: 'https://coffeekev.com/bambino-vs-bambino-plus/', note: 'May 18, 2026. Firsthand comparison and multi-year ownership perspective; UK-based author, exact sample SKU unstated. Regional prices and instructions were not transferred.' },
    { id: 'source-toms-guide', label: '[13] Tom’s Guide: Bambino Plus review', href: 'https://www.tomsguide.com/home/home-appliances/breville-sage-bambino-plus-review', note: 'Erin Bashford; May 8, 2025. Original testing in a UK context. Milk preference, vibration, and light-roast experience remain attributed observations.' },
    { id: 'source-coffeeness', label: '[14] Coffeeness: Bambino Plus review', href: 'https://www.coffeeness.de/en/breville-bambino-plus-review/', note: 'Arne Preuss; updated April 15, 2025. Purchased-unit handling perspective; sample region unstated. Used cautiously for movement while locking the portafilter, not disputed technical statements.' },
    { id: 'source-reddit-starting', label: '[15] Reddit r/espresso: a beginner’s Bambino Plus experience', href: 'https://www.reddit.com/r/espresso/comments/1j428zl/newbies_youll_be_happy_with_the_breville_bambino/', note: 'Original self-reported Plus ownership; grinder named, region and duration not established. Checked September 15, 2026. Anecdotal, not verified-purchase research.' },
    { id: 'source-reddit-ownership', label: '[16] Reddit r/espresso: “How good is the Bambino Plus?”', href: 'https://www.reddit.com/r/espresso/comments/1bmu33b/how_good_is_the_bambino_plus/', note: 'Mixed original ownership reports, including satisfaction, a return, and a failure. Plus-specific comments only; regions vary. Checked September 15, 2026. No failure-rate inference.' },
    { id: 'source-singletrack', label: '[17] Singletrack: “Before I buy a Sage Bambino”', href: 'https://singletrackworld.com/forum/off-topic/before-i-buy-a-sage-bambino/', note: 'The explicitly Plus-specific comment by dander, September 2, 2024, describes two years of ownership and a preference for manual milk. UK Sage context; checked September 15, 2026.' },
    { id: 'source-coffeeblog', label: '[18] CoffeeBlog: owner comment beneath the Sage Dual Boiler review', href: 'https://coffeeblog.co.uk/sage-dual-boiler-review/', note: 'Michael’s original Bambino Plus comment discusses wanting more control. Comment date, duration, and exact region were not established. One anecdote in a UK-oriented discussion; checked September 15, 2026.' },
    { id: 'source-gaggia-manual', label: '[19] Gaggia Classic E24 US/Canada manual', href: 'https://www.gaggia.com/app/uploads/2023/10/6420-010-43466-MANUAL-GAG.-CLASSIC-E24-USA-Rev-00-6.pdf', note: 'Current official RI9380 / SIN035R booklet, print footer July 17, 2026. Documents manual steaming and boiler cooldown before returning to coffee. Checked September 15, 2026.' },
  ],
  finalTitle: 'Breville Bambino Plus Review: Less milk technique, with espresso preparation still in your hands',
  finalVerdict: [
    'I would buy the Bambino Plus for a household that wants to prepare espresso and make milk drinks with fewer decisions. Automatic milk has a clear purpose here, and the separate grinder leaves room to improve the setup independently.',
    'I would choose the cheaper Bambino if manual steaming appeals, a machine with adjustable temperature if that control is already a priority, or a fully automatic model if handling grounds is the job you want removed. The Plus earns its place when you enjoy the espresso work and want help with the milk.',
  ],
};
