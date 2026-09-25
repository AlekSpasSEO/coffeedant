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

const internalHref = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

// Canonical identity: Breville Bambino Plus BES500 / CD-EM-000005.
// The registry preserves /espresso-machine/breville-bambino/ for this product.
// Evidence packet refreshed 2026-09-25; no Coffeedant hands-on test is claimed.
export const bambinoArticle: ResearchArticle = {
  methodology: `
    <p>I built this review from current US documentation for the Breville Bambino Plus BES500, five independent hands-on or long-term evaluations, and three owner-discussion pools that include clearly labeled UK Sage context. I rechecked the official model, manual, support, comparison products, and displayed US prices on September 25, 2026.</p>
    <p>This is a <strong>research-led review, not a Coffeedant hands-on test</strong>. Manufacturer specifications, external observations, and editorial advice remain distinct. The evidence does not support invented Coffeedant measurements, taste results, ownership duration, or failure rates.</p>
  `,
  sections: [
    {
      id: 'orientation',
      eyebrow: 'The buying decision',
      title: 'The Plus automates milk, not espresso preparation',
      html: `
        <p>The Bambino Plus makes sense when you want to grind, dose, tamp, and judge espresso yourself but would gladly delegate milk texture. It offers three automatic milk temperatures, three texture levels, and manual steaming. That is meaningful assistance, but it is not bean-to-cup automation.</p>
        <p>This page covers the <strong>US Breville Bambino Plus BES500</strong>. The standard Bambino is BES450. UK Sage evidence can explain the family’s workflow, but its price, voltage, accessories, and support terms do not define a US purchase.</p>
        <div class="review-table-wrap" role="region" aria-label="Bambino Plus design and buyer consequence" tabindex="0"><table class="review-table"><caption>Documented design and its practical consequence</caption><thead><tr><th scope="col">Feature</th><th scope="col">Buyer consequence</th></tr></thead><tbody>
          <tr><th scope="row">ThermoJet heater</th><td data-label="Buyer consequence">Breville claims readiness in three seconds; preparing coffee and warming the working parts still take time.</td></tr>
          <tr><th scope="row">54 mm portafilter</th><td data-label="Buyer consequence">You handle a removable basket and need a separate grinder for fresh-bean espresso.</td></tr>
          <tr><th scope="row">Automatic or manual milk</th><td data-label="Buyer consequence">Beginners can start with repeatable presets while retaining a manual path.</td></tr>
          <tr><th scope="row">Sequential heating</th><td data-label="Buyer consequence">Espresso and milk happen one after the other, not at the same time.</td></tr>
        </tbody></table></div>
        <p>Breville documents low-pressure pre-infusion followed by nine-bar extraction from a 15-bar-rated pump. Those are design claims, not Coffeedant measurements. <a href="#source-breville-plus">[1]</a></p>
      `,
    },
    {
      id: 'setup',
      eyebrow: 'Before the first coffee',
      title: 'Budget and place the complete station',
      html: `
        <p>The machine is compact, but the station also needs a grinder, scale, milk jug, cup space, and somewhere for a wet portafilter. The 1.9 L tank lifts from the rear, while the compact tray pulls forward. Confirm real access before fitting the machine under a low cabinet.</p>
        <p>The current US package lists a stainless 54 mm portafilter, one- and two-cup single-wall and dual-wall baskets, tamper, Razor tool, 480 ml jug, cleaning tool, and cleaning disc. Single-wall baskets make grind control important. Dual-wall baskets add restriction and offer a practical start with suitable preground coffee. <a href="#source-plus-manual">[2]</a></p>
        <p>Official dimensions are currently labeled 11.9 × 7.4 × 14.3 inches in W×D×H order, but longstanding third-party figures disagree about the axes. I would measure the ordered unit for a tight recess instead of silently reordering the manufacturer’s numbers.</p>
        <p>Begin with one coffee, the supplied equipment, a repeatable dose, and a dry basket. Changing beans, basket, grind, and dose together creates too many explanations for one disappointing shot.</p>
      `,
    },
    {
      id: 'workflow',
      eyebrow: 'Daily use',
      title: 'Fast readiness still leads to a manual sequence',
      html: `
        <p>A practical drink sequence is simple: prepare the station, run the manual’s short group purge, dry and fill the basket, tamp level, extract, then texture milk. The heater removes most warm-up waiting, but the full drink still includes coffee preparation and cleanup.</p>
        <p>The one- and two-cup buttons offer preset or programmable volumes, and manual control remains available. Serious Eats found the convenience useful but its tested volumetric results less accurate than desired. A scale is therefore valuable while dialing in because it separates a changed drink weight from a changed grind. <a href="#source-serious-eats">[10]</a></p>
        <p>For two milk drinks, every coffee and milk step remains sequential. Decide whether to finish one drink at a time or prepare both espressos before milk. A household regularly serving a queue should compare this cadence with a dual-boiler or more automated category, rather than judging only the three-second heater claim.</p>
      `,
    },
    {
      id: 'espresso',
      eyebrow: 'Espresso',
      title: 'The grinder and recipe set the practical ceiling',
      html: `
        <p>Breville gives a 16–19 g range for the double basket. An editorial starting point is 18 g of coffee to 36 g of espresso. That 1:2 target is a diagnostic baseline, not a Coffeedant-tested optimum or the factory button volume.</p>
        <p>Keep dose and target yield steady while adjusting the grinder. If the drink is thin and runs much faster than the previous attempt, try finer. If flow nearly stops, move coarser before changing several other variables. Taste, flow, and preparation together are more informative than a rigid time rule.</p>
        <p>The machine regulates a fixed brew target but does not give the user a temperature setting. Coffee Kev treats that as a limitation for light-roast specialists, while Tom’s Guide reported a pleasing light-roast result from its sample. The defensible conclusion is limited adjustment, not that one roast style is impossible. <a href="#source-coffee-kev">[12]</a> <a href="#source-toms-guide">[13]</a></p>
      `,
    },
    {
      id: 'milk',
      eyebrow: 'Why Plus exists',
      title: 'Automatic milk reduces technique, not maintenance',
      html: `
        <p>Automatic mode needs the supplied jug, cold milk within its marks, contact with the temperature sensor, and the wand lowered into position. You choose one of three temperatures and textures; the machine stops automatically. Manual mode remains available when you want direct control.</p>
        <p>Repeat the milk quantity, jug position, and settings before judging consistency. GearLab found automatic milk useful but preferred some settings over others; Tom’s Guide wanted less foam for its flat-white target. Those are unit-specific observations, not proof that one preset fits every milk or drink. <a href="#source-gearlab">[11]</a> <a href="#source-toms-guide">[13]</a></p>
        <p>Wipe the wand immediately and lower it for the automatic purge. Purge water lands in the small tray, so easy tray access matters. If everyone in the household wants to learn manual steaming, the cheaper BES450 deserves priority because the Plus premium is paying mainly for automation.</p>
      `,
    },
    {
      id: 'cost',
      eyebrow: 'Value',
      title: 'Judge the machine inside the full setup budget',
      html: `
        <p>Breville US displayed the Bambino Plus at <strong>$499.95 on September 25, 2026</strong>. The standard Bambino was $299.95 at the same check. These are dated manufacturer prices, not automatically refreshed offers. A separate grinder, scale, coffee, and care supplies belong in the first-year budget.</p>
        <div class="review-table-wrap" role="region" aria-label="Quick alternative comparison" tabindex="0"><table class="review-table"><caption>Choose by the work you want to keep</caption><thead><tr><th scope="col">Option</th><th scope="col">Best reason to choose it</th><th scope="col">Main compromise</th></tr></thead><tbody>
          <tr><th scope="row">Bambino Plus BES500</th><td data-label="Best reason">Automatic milk with a separate grinder</td><td data-label="Compromise">Highest machine price in this family</td></tr>
          <tr><th scope="row">Bambino BES450</th><td data-label="Best reason">More budget left for the grinder</td><td data-label="Compromise">Manual milk only</td></tr>
          <tr><th scope="row">Gaggia Classic E24</th><td data-label="Best reason">Traditional 58 mm, single-boiler workflow</td><td data-label="Compromise">More manual heat and milk management</td></tr>
          <tr><th scope="row">Barista Express BES870</th><td data-label="Best reason">Grinder integrated into one body</td><td data-label="Compromise">Less grinder upgrade flexibility</td></tr>
        </tbody></table></div>
        <details class="review-comparison-details"><summary>Open the technical comparison</summary><div class="review-table-wrap" role="region" aria-label="Detailed alternative comparison" tabindex="0"><table class="review-table review-table-detailed"><caption>Documented architecture and workflow</caption><thead><tr><th scope="col">Machine</th><th scope="col">Coffee setup</th><th scope="col">Milk</th><th scope="col">Control limit</th><th scope="col">Best fit</th></tr></thead><tbody>
          <tr><th scope="row">Bambino Plus</th><td data-label="Coffee setup">54 mm; separate grinder</td><td data-label="Milk">Automatic or manual</td><td data-label="Control limit">No user brew-temperature setting</td><td data-label="Best fit">Frequent milk drinks</td></tr>
          <tr><th scope="row">Bambino</th><td data-label="Coffee setup">54 mm; separate grinder</td><td data-label="Milk">Manual</td><td data-label="Control limit">No automatic texture or temperature</td><td data-label="Best fit">Lower total starting cost</td></tr>
          <tr><th scope="row">Classic E24</th><td data-label="Coffee setup">58 mm; separate grinder</td><td data-label="Milk">Manual single boiler</td><td data-label="Control limit">Switch and cool between steam and brew</td><td data-label="Best fit">Hands-on traditional workflow</td></tr>
          <tr><th scope="row">Barista Express</th><td data-label="Coffee setup">54 mm; grinder included</td><td data-label="Milk">Manual</td><td data-label="Control limit">One-body grinder path</td><td data-label="Best fit">Integrated station</td></tr>
        </tbody></table></div></details>
      `,
    },
    {
      id: 'ownership',
      eyebrow: 'After the novelty',
      title: 'Cleaning and support are part of convenience',
      html: `
        <p>Milk residue, coffee residue, and mineral scale are separate jobs. Wipe and purge the wand after milk, rinse the basket after coffee, and follow the indicated group-cleaning and descaling routines. Breville says the cleaning reminder follows 200 extractions and warns against distilled, demineralized, or highly filtered water. <a href="#source-plus-manual">[2]</a></p>
        <p>The official support hub, warranty route, and BES500 parts navigation provide places to begin when something fails. They do not prove comprehensive internal-parts stock, a repair price, or easy decade-long service. The current documents retrieved for this review did not establish an exact model-specific warranty duration, so confirm the seller’s applicable coverage and keep proof of purchase.</p>
        <p>For used or refurbished units, ask for a demonstration of espresso, automatic milk, and manual steam. Check for leaks, warning lights, missing accessories, and written return terms. A lower sticker price should still leave a clear remedy if the machine arrives faulty.</p>
      `,
    },
    {
      id: 'owners',
      eyebrow: 'Owner context',
      title: 'Convenience and control explain the divided reactions',
      html: `
        <p>Owner discussions support a useful pattern, not a reliability statistic. Convenience-first users value the short start and milk presets. Control-first users more often question the premium, choose manual steaming, or want more brew adjustment later.</p>
        <p>Reports include satisfied multi-year use, returns, and individual failures. There is no common region, verified-purchase sample, or denominator from which to calculate a failure rate. Treat the automatic milk system as added complexity, confirm return and warranty terms, and avoid turning a vivid anecdote into a population claim.</p>
        <p>The decisive question is whether you want to learn espresso while keeping milk easy, or learn both. The Plus is coherent for the first buyer. The standard Bambino or a more traditional manual machine better serves the second. <a href="#source-reddit-starting">[15]</a> <a href="#source-reddit-ownership">[16]</a> <a href="#source-singletrack">[17]</a> <a href="#source-coffeeblog">[18]</a></p>
      `,
    },
    {
      id: 'faq',
      eyebrow: 'Before you order',
      title: 'Breville Bambino Plus FAQ',
      html: `
        <div class="review-faq-list">
          <article class="review-faq-item"><h3>Does the 54 mm basket make it inferior?</h3><p>No. Diameter affects geometry and accessory compatibility, not a simple quality ranking. Grind control, preparation, coffee, and recipe matter first.</p></article>
          <article class="review-faq-item"><h3>Can it make an Americano?</h3><p>Yes. The Plus manual documents hot water through a button combination, or you can use a kettle. The BES450 has a dedicated hot-water control.</p></article>
          <article class="review-faq-item"><h3>Will a travel mug fit?</h3><p>Verified usable clearance was not established. Measure the mug with any scale beneath it and confirm the combination with the seller.</p></article>
          <article class="review-faq-item"><h3>Can I add a grinder later?</h3><p>You can begin with suitable preground coffee and a dual-wall basket, but delaying a capable grinder limits recipe control. Price the complete station before ordering.</p></article>
          <article class="review-faq-item"><h3>Does another basket add brew-temperature control?</h3><p>No. A basket cannot add a missing machine setting. Choose a different machine if user-adjustable temperature is already central to your plans.</p></article>
          <article class="review-faq-item"><h3>Can it brew and steam together?</h3><p>No. Espresso and milk are sequential. Automatic milk reduces attention during the second step but does not create another heating circuit.</p></article>
          <article class="review-faq-item"><h3>Are single-wall baskets included?</h3><p>The current US package lists one- and two-cup single-wall and dual-wall baskets. Verify older or used stock against its exact box and booklet.</p></article>
          <article class="review-faq-item"><h3>Does three seconds mean a complete drink?</h3><p>No. It is Breville’s heater-readiness claim. Grinding, dosing, extraction, milk, and cleanup still add time.</p></article>
        </div>
      `,
    },
    {
      id: 'related',
      eyebrow: 'Build the shortlist',
      title: 'Choose the workflow, then the machine',
      html: `
        <p>Use the <a href="${internalHref('/grinder/')}">grinder guide</a> with the machine decision. Compare <a href="${internalHref('/espresso-machine/beginners/')}">beginner espresso machines</a>, the <a href="${internalHref('/breville/')}">Breville range</a>, or <a href="${internalHref('/espresso-machine/superautomatic/')}">fully automatic machines</a> if handling a portafilter is the task you want removed.</p>
        <div class="review-recommendation-grid" data-commerce-ready="true" aria-label="Recommended next step by workflow">
          <article class="review-recommendation-card review-recommendation-card-featured"><p class="review-recommendation-kicker">Frequent milk drinks</p><h3>Bambino Plus and separate grinder</h3><p>Keep automatic milk while protecting the coffee budget.</p><a href="${internalHref('/grinder/')}">Choose a grinder <span aria-hidden="true">→</span></a></article>
          <article class="review-recommendation-card"><p class="review-recommendation-kicker">Lower starting cost</p><h3>Bambino BES450</h3><p>Steam manually and move $200 toward grind control at the dated official prices.</p><a href="#cost">Compare the workflow <span aria-hidden="true">↑</span></a></article>
          <article class="review-recommendation-card"><p class="review-recommendation-kicker">One-body station</p><h3>Barista Express BES870</h3><p>Integrate the grinder while keeping manual espresso and milk work.</p><a href="${internalHref('/espresso-machine/breville-barista-express-bes870xl/')}">Read the review <span aria-hidden="true">→</span></a></article>
          <article class="review-recommendation-card"><p class="review-recommendation-kicker">Minimum handling</p><h3>Fully automatic machines</h3><p>Change categories if dosing, tamping, and clearing the basket are the jobs you want removed.</p><a href="${internalHref('/espresso-machine/superautomatic/')}">Compare the category <span aria-hidden="true">→</span></a></article>
        </div>
      `,
    },
  ],
  sources: [
    { id: 'source-breville-plus', label: '[1] Breville US: Bambino Plus BES500', href: 'https://www.breville.com/en-us/product/bes500', note: 'Official US features, included equipment, and $499.95 displayed price. Checked September 25, 2026; the dimension-axis disagreement remains unresolved.' },
    { id: 'source-plus-manual', label: '[2] Breville BES500 US/Canada/Mexico manual', href: 'https://assets.breville.com/BES500/BES500_USCM_IB_Y25_LR.pdf', note: 'Current product-linked booklet covering baskets, dose range, controls, milk, water, cleaning, and maintenance. Checked September 25, 2026.' },
    { id: 'source-plus-support', label: '[3] Breville BES500 support hub', href: 'https://www.breville.com/en-us/producthub/bes500', note: 'Official setup, extraction, cleaning, manual, support, warranty, and parts route. Checked September 25, 2026.' },
    { id: 'source-breville-warranty', label: '[4] Breville North American warranty terms', href: 'https://www.breville.com/en-us/support/warranty', note: 'Official claim route and terms. Checked September 25, 2026; exact BES500 duration was not established.' },
    { id: 'source-plus-parts', label: '[5] Breville BES500 parts route', href: 'https://www.breville.com/en-us/shop/espresso/parts/bes500', note: 'Official navigation checked September 25, 2026; model-specific stock, internal availability, and repair costs were not verified.' },
    { id: 'source-breville-bambino', label: '[6] Breville US: Bambino BES450', href: 'https://www.breville.com/en-us/product/bes450', note: 'Official base-model comparison and $299.95 displayed price. Checked September 25, 2026.' },
    { id: 'source-bambino-manual', label: '[7] Breville BES450 US/Canada/Mexico manual', href: 'https://assets.breville.com/BES450/BES450_USCM_IB_M26_LR.pdf', note: 'Current product-linked base-model booklet confirming 1.4 L tank and manual milk. Checked September 25, 2026.' },
    { id: 'source-gaggia-e24', label: '[8] Gaggia: Classic E24', href: 'https://www.gaggia.com/manual-machines/new-classic-e24/', note: 'Official current E24 architecture, controls, and regional documentation. Checked September 25, 2026.' },
    { id: 'source-barista-express', label: '[9] Breville US: Barista Express BES870', href: 'https://www.breville.com/en-us/product/bes870', note: 'Official integrated-grinder and manual-milk features. Checked September 25, 2026.' },
    { id: 'source-serious-eats', label: '[10] Serious Eats: Jesse Raub’s Bambino Plus review', href: 'https://www.seriouseats.com/breville-bambino-plus-review-8412244', note: 'Updated December 12, 2025; US-context hands-on evidence for controls and sequential brewing and steaming. Rechecked September 25, 2026.' },
    { id: 'source-gearlab', label: '[11] GearLab: Bambino Plus review', href: 'https://www.techgearlab.com/reviews/kitchen/espresso-machine/breville-bambino-plus', note: 'Lesley Robinson with Jason Wanlass, April 16, 2024. Purchased-unit handling and milk observations; measurements remain theirs.' },
    { id: 'source-coffee-kev', label: '[12] Coffee Kev: Bambino versus Bambino Plus', href: 'https://coffeekev.com/bambino-vs-bambino-plus/', note: 'Long-term first-hand comparison in UK context, updated May 18, 2026. Regional prices and instructions were not transferred.' },
    { id: 'source-toms-guide', label: '[13] Tom’s Guide: Bambino Plus review', href: 'https://www.tomsguide.com/home/home-appliances/breville-sage-bambino-plus-review', note: 'Erin Bashford, May 8, 2025. Original UK-context testing; results remain attributed.' },
    { id: 'source-coffeeness', label: '[14] Coffeeness: Bambino Plus review', href: 'https://www.coffeeness.de/en/breville-bambino-plus-review/', note: 'Arne Preuss, updated April 15, 2025. Purchased-unit handling perspective used cautiously.' },
    { id: 'source-reddit-starting', label: '[15] Reddit r/espresso: beginner Bambino Plus experience', href: 'https://www.reddit.com/r/espresso/comments/1j428zl/newbies_youll_be_happy_with_the_breville_bambino/', note: 'Self-reported Plus ownership; grinder named, region and duration not established. Anecdotal, not verified-purchase research.' },
    { id: 'source-reddit-ownership', label: '[16] Reddit r/espresso: How good is the Bambino Plus?', href: 'https://www.reddit.com/r/espresso/comments/1bmu33b/how_good_is_the_bambino_plus/', note: 'Mixed original ownership reports across regions. No failure-rate inference.' },
    { id: 'source-singletrack', label: '[17] Singletrack: Before I buy a Sage Bambino', href: 'https://singletrackworld.com/forum/off-topic/before-i-buy-a-sage-bambino/', note: 'One explicitly Plus-specific multi-year comment in UK Sage context; not a representative sample.' },
    { id: 'source-coffeeblog', label: '[18] CoffeeBlog owner comment', href: 'https://coffeeblog.co.uk/sage-dual-boiler-review/', note: 'One Bambino Plus owner comment about wanting more control; duration and exact region were not established.' },
    { id: 'source-gaggia-manual', label: '[19] Gaggia Classic E24 US/Canada manual', href: 'https://www.gaggia.com/app/uploads/2023/10/6420-010-43466-MANUAL-GAG.-CLASSIC-E24-USA-Rev-00-6.pdf', note: 'Official RI9380 / SIN035R booklet documenting manual steaming and boiler cooldown before returning to coffee.' },
  ],
  finalTitle: 'Breville Bambino Plus review: choose it when automatic milk earns the premium',
  finalVerdict: [
    'I would buy the Bambino Plus for a household that wants to prepare espresso and make frequent milk drinks with fewer milk decisions. Its fast start and automatic texturing solve clear daily jobs, while a separate grinder can improve independently.',
    'I would choose the cheaper Bambino when manual milk appeals, another semi-automatic when brew-temperature adjustment is essential, or a fully automatic model when handling grounds is the work you want removed.',
  ],
};
