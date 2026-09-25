import type { BeginnerGuidePick } from './beginner-guide';

export const prosumerUnder1000Guide = {
  title: 'Best Prosumer Espresso Machines Under $1,000: Choose the Control You Will Use',
  description: 'A research-led guide to prosumer espresso machines under $1,000, comparing the Gaggia Classic Pro E24, Lelit Anna PL41TEM, Rancilio Silvia V6 and Flair 58 Plus 2 by temperature control, grinder cost, milk workflow and ownership.',
  canonicalPath: '/espresso-machine/prosumer-under-1000/',
  published: '2026-04-12',
  updated: '2026-09-25',
  author: {
    name: 'Aleksandar Spasevski',
    role: 'Editor at Coffeedant',
    image: 'images/author-aleksandar-spasevski.jpg',
    note: 'I treated $1,000 as a strict machine-only ceiling, then compared the complete station and the work each exact model leaves to the owner. I checked current manufacturer records, dated prices, independent evaluations and owner questions. This is research-led; I have not physically tested these four machines side by side.',
  },
  picks: [
    {
      name: 'Gaggia Classic Pro E24', brand: 'Gaggia', model: 'Current North American E24, 110–120 V', href: '/espresso-machine/gaggia-classic-evo/', price: '$549.00 US direct',
      setup: '58 mm brass single-boiler pump machine; grinder and scale separate', grinder: 'Espresso-capable grinder required', milk: 'Manual two-hole wand after switching the shared boiler to steam', maintenance: 'Backflush as directed, clean group and wand, manage water, cool and refill after steam',
      bestFit: 'Best fit when a broad 58 mm ecosystem and money left for the grinder matter more than a factory PID.',
      avoidIf: 'Avoid if you expect numeric temperature control, a shot timer or fast service for several milk drinks.',
      verdict: 'The value platform: current brass hardware and familiar tools, with temperature consistency left to routine.',
    },
    {
      name: 'Lelit Anna PL41TEM', brand: 'Lelit', model: 'US PESAN06 or EU PL41TEM by region', href: '/espresso-machine/lelit-anna/', price: '$599.95 current US reference',
      setup: 'LELIT57 PID single boiler with pressure gauge; grinder separate', grinder: 'Espresso-capable grinder and fitted 57 mm tools required', milk: 'Manual wand; 250 ml boiler changes from brew to steam', maintenance: 'Backflush with fitted blind filter, clean wand, refill after steam, manage scale',
      bestFit: 'Best fit when factory temperature adjustment and pressure feedback matter more than standard 58 mm accessories.',
      avoidIf: 'Avoid if you already own 58 mm tools or regularly prepare a queue of milk drinks.',
      verdict: 'The control-value choice: PID and gauge at a low price, bought with a smaller accessory ecosystem.',
    },
    {
      name: 'Rancilio Silvia V6', brand: 'Rancilio', model: 'Current North American Silvia, 120 V', href: '/espresso-machine/rancilio-silvia/', price: '$995.00 checked US listing',
      setup: '58 mm thermostat single boiler in a dense steel chassis', grinder: 'Espresso-capable grinder required', milk: 'Strong manual steam after a brew-to-steam temperature change', maintenance: 'Clean and backflush as directed, purge wand, refill boiler after steam, manage water',
      bestFit: 'Best fit for a patient traditionalist who values conventional construction, steam strength and service knowledge.',
      avoidIf: 'Avoid if a day-one PID modification is already assumed or if the machine would consume the grinder budget.',
      verdict: 'The traditional-build choice, compelling only when its thermostat rhythm is part of the appeal.',
    },
    {
      name: 'Flair 58 Plus 2', brand: 'Flair', model: 'Current US Plus 2 package', href: '/espresso-machine/flair-58/', price: '$699.00 US direct',
      setup: 'Heated 58 mm direct lever with pressure gauge; kettle and grinder separate', grinder: 'Precise espresso grinder required for the direct baskets', milk: 'No steam system; separate equipment required', maintenance: 'Rinse basket and puck screen, clean seals and plunger, protect heated electrical parts',
      bestFit: 'Best fit for straight-espresso drinkers who want to shape pressure and accept a fully manual station.',
      avoidIf: 'Avoid if integrated hot water, milk steaming or push-button repeatability is required.',
      verdict: 'The pressure-control choice: unusually open extraction control without the rest of a café appliance.',
    },
  ] satisfies BeginnerGuidePick[],
  sections: [
    {
      id: 'decision', eyebrow: 'The first decision', title: 'Define “prosumer” by useful control, not weight or polished steel', html: `
        <p>Below $1,000, “prosumer” is a shopping shorthand rather than a technical class. None of these four machines provides the dual boilers, rotary pump, direct plumbing or simultaneous high-volume service associated with more expensive home equipment. Three are compact single-boiler pump machines. The fourth is a heated direct lever with no pump or steam system. Their value comes from focused control, repairable architecture and an upgrade path, not from pretending a home counter has become a café.</p>
        <p>Start with the variable you actually want to control. Lelit Anna provides an adjustable PID setpoint and a pressure gauge from the factory. Gaggia Classic E24 and Rancilio Silvia use thermostats, so repeatability depends on warmup, timing and a consistent routine unless the owner later modifies the machine. Flair 58 Plus 2 exposes pressure through a gauge and the user’s hand, but water temperature still begins with a kettle and group-preheat choice. More control only helps when the owner will measure, record and repeat it.</p>
        <p>Next count milk drinks. Every pump machine here uses one boiler for coffee and steam. Brewing and steaming happen in sequence, and the boiler must return toward coffee temperature afterward. Silvia has the most substantial traditional steam reputation of the three, but it cannot brew and steam together. Anna provides PID control over boiler settings, not a second heater. Classic E24 offers a capable two-hole wand at a lower price, with a smaller boiler. Flair has no steam circuit at all.</p>
        <p>The short decision is practical. Choose Classic E24 to protect the grinder budget and enter the 58 mm ecosystem. Choose Anna when a factory PID and gauge are worth accepting LELIT57 tools. Choose Silvia when conventional build, mature service knowledge and stronger steam matter more than modern factory controls. Choose Flair 58 Plus 2 when pressure profiling and straight espresso matter more than integrated heat and milk. If several milk drinks must be ready quickly, save beyond this cap for a genuine dual-boiler workflow rather than adding accessories to the wrong architecture.</p>
      `,
    },
    {
      id: 'criteria', eyebrow: 'Scope and evidence', title: 'The shortlist uses exact current models, a strict cap and meaningful differences', html: `
        <h3>Inclusion rules</h3>
        <p>Each recommendation had to be a current, clearly identified machine with a dated price at or below $1,000 before tax and optional accessories. It needed a permanent Coffeedant review, current official documentation, an understandable regional identity, reputable independent evaluation and enough owner context to explain recurring questions without inventing failure rates. The four picks also had to answer distinct decisions rather than fill a table with near-duplicates.</p>
        <p>The exact identities matter. Classic Pro E24 is the current brass-boiler North American Gaggia, not the 2023 coated-boiler Classic Evo Pro. Anna PL41TEM is the 230 V EU article; the current US PESAN06 is a related 120 V regional article with its own package and price. Silvia V6 refers to the current core North American thermostat machine, not Silvia Pro X. Flair 58 Plus 2 is the current integrated-controller package, not the original 58 or earlier Plus.</p>
        <h3>Exclusion rules</h3>
        <p>Profitec GO, Lelit Victoria, Gaggia Classic GT and many entry dual boilers were excluded because their checked current prices exceed the cap. A temporary coupon would not make an above-cap model a durable recommendation. Breville and De’Longhi integrated-grinder machines can sit below $1,000, but they answer a different one-box decision already covered by Coffeedant’s grinder guide. Superautomatics were also excluded because internal brew groups and one-touch milk do not share this manual specialist workflow.</p>
        <p>The machine-only ceiling does not describe the complete station. Every pick needs a capable grinder, a scale, water appropriate to the manufacturer’s guidance and care supplies. Flair also needs a kettle and any desired milk equipment. Tax, finish, stock, dealer preparation, warranty and return terms can change the checkout total. A buyer who has $1,000 for the entire station should normally spend less on the brewer than this title permits.</p>
      `,
    },
    {
      id: 'grinder', eyebrow: 'The hidden half', title: 'A grinder and repeatable measurement are more valuable than decorative upgrades', html: `
        <p>All four machines use direct espresso baskets that let coffee preparation create resistance. That makes a capable grinder part of the brewing system. Small adjustment steps, reasonable retention and a repeatable dose matter more than a pressure number printed on a pump. If one grinder setting runs fast and the next nearly stops the shot, a heavier machine cannot repair the gap.</p>
        <p>Classic E24 makes the budget lesson clearest. Its $549 price leaves $451 under the machine cap, but that remainder should not be treated as spare money for wood handles or a bottomless portafilter. Put it toward grind control, a scale and a suitable water plan. The stock 58 mm portafilter and baskets can make good coffee. Additional distribution tools should solve observed preparation problems, not perform seriousness on the counter.</p>
        <p>Anna needs the same grinder quality while using Lelit’s 57 mm system. The narrower ecosystem does not make the coffee less legitimate, but it changes accessory shopping. A tamper, blind filter, basket or bottomless holder must fit LELIT57 rather than merely claiming “espresso” compatibility. The factory PID is useful because it makes a chosen boiler setting repeatable. It does not weigh coffee, measure beverage yield or correct channeling.</p>
        <p>Silvia costs almost the entire cap before the grinder arrives. That is the central value test. A buyer starting from zero should compare the $995 machine plus grinder against a cheaper brewer paired with the same grinder. Silvia’s 58 mm format and mature service knowledge are real advantages, but they do not turn a weak grinder into a stable espresso tool. Planning a PID, premium basket and cosmetic kit on day one can push the total into a better-equipped factory-controlled class.</p>
        <p>Flair 58 Plus 2 exposes grind and puck preparation most directly. The gauge reports pressure while the lever lets the user change it, but the operator still needs a target yield and consistent preparation. Pressure can be raised by forcing water against too-fine coffee, which does not make the result good. Use the lever to learn how flow and taste respond, not to chase one fixed gauge number.</p>
      `,
    },
    {
      id: 'milk', eyebrow: 'Milk and service pace', title: 'Every integrated milk option under this cap is sequential', html: `
        <p>Single-boiler milk service is a sequence: brew espresso, raise boiler temperature, purge condensation, texture milk, wipe and purge the wand, then refill or cool the boiler before more coffee. The exact controls differ, but the architecture does not. One cappuccino can be satisfying. A four-drink order can expose more waiting and cleanup than the buyer expected.</p>
        <p>Classic E24 provides a commercial-style rotating wand with a two-hole tip and an insulated grip. Its current brass boiler is an important exact-generation change, yet it remains a small dual-use boiler. Keep the pitcher, milk quantity and routine consistent while learning. Do not transfer warmup or steaming advice from a 2023 Evo or an older aluminum-boiler Classic without checking the current manual.</p>
        <p>Anna’s PID can set the boiler for brew or steam, and one independent exact-model evaluation measured a small milk task. That observation is useful context, not a universal promise. Voltage, milk, pitcher, fill and technique change the result. The 250 ml boiler still requires a post-steam refill and cooling routine before another espresso. The gauge reports coffee-system pressure and does not guide milk texture.</p>
        <p>Silvia’s 0.3 L brass boiler and traditional wand make it the strongest milk-oriented pick here for an owner who accepts the sequence. It is still not the correct answer for simultaneous work. If two flat whites every morning already make the boiler transition sound annoying, compare the cost of a dual boiler before spending on a PID modification. A modification can improve brew-temperature control without creating a second steam boiler.</p>
        <p>Flair has no milk system. A separate steamer or frother adds price, counter space, heating coordination and another cleaning routine. That can be sensible for occasional milk after a carefully profiled shot. It is not a simple route to several lattes. The absence of a boiler is a strength for focused manual espresso and a hard boundary for an all-in-one café routine.</p>
      `,
    },
    {
      id: 'ownership', eyebrow: 'Cost after checkout', title: 'Water, service access and modification plans determine long-term value', html: `
        <p>Before ordering, identify the authorized seller, written warranty, return window and realistic service route. Conventional hardware can be repairable while still requiring parts, labor and shipping. A long production history does not guarantee local repair. A current product page does not guarantee that an unauthorized marketplace seller provides regional warranty coverage.</p>
        <p>Water belongs in the equipment plan. Follow the exact manufacturer guidance and local service advice rather than assuming distilled, softened, reverse-osmosis or bottled water is automatically suitable. Scale can reduce performance, while corrosive or poorly buffered water can create different problems. Record the water source and maintenance history so a future owner or technician is not guessing.</p>
        <p>Classic E24 and Silvia attract modification discussions because their mechanical layouts are familiar. Treat electrical or temperature-control work as a real alteration, not a free feature. It can affect safety, appearance, resale, service and warranty. Compare the all-in modified cost with a machine that includes the desired control from the factory. Anna’s stock PID avoids that specific project, while its 57 mm ecosystem asks for more careful accessory selection.</p>
        <p>Flair removes a pump, steam boiler and pressurized internal water path from the machine, but it is not maintenance-free. Seals, plunger contact areas, baskets, gauge and heated electrical components still need correct cleaning and inspection. Do not immerse the heated group or controller. A kettle and grinder carry their own maintenance and replacement costs.</p>
        <p>Used machines deserve a separate risk budget. Ask for model code, voltage, purchase record, water history, modification history, leaks, heating behavior, pump flow and steam demonstration. A polished body can hide scale or unsafe wiring. Refurbished stock is most useful when the refurbisher, warranty and return remedy are explicit.</p>
        <h3>Compare long-term costs and maintenance by architecture</h3>
        <p>For Classic E24, budget for detergent appropriate to the current manual, group-gasket and shower-screen inspection, steam-wand care and a water plan. The current brass boiler should not inherit cleaning assumptions from the coated 2023 Evo or every older Classic. A broad parts and modification community is helpful, but it is not a promise that every color, electrical item or dealer repair will remain inexpensive. Keep the exact rating plate and purchase record with the machine.</p>
        <p>Anna adds PID electronics and a manometer to conventional single-boiler care. Clean the group and three-way path as the exact regional instructions permit, wipe and purge the wand immediately, refill the boiler after steam and confirm the correct 57 mm blind-filter fit before backflushing. The current product page and an older sheet differ on whether a blind filter is supplied, so delivered contents should be checked rather than assumed. Regional service and electrical parts must match PESAN06 or PL41TEM.</p>
        <p>Silvia’s mature platform makes service knowledge easier to find, yet ownership still includes a suitable water plan, detergent cleaning when directed, gasket and screen wear, pump or valve diagnosis and safe boiler refilling after steaming. An aftermarket PID creates another control system and installation history that a future technician must understand. Record every alteration. The cheapest modification is not necessarily the safest one or the one a regional Rancilio service point will support.</p>
        <p>Flair’s running costs move away from boiler scale and toward seals, basket cleaning, gauge condition and supporting equipment. The brew path must cool enough for safe handling, while the heated group, controller and power hardware stay dry and undamaged. A kettle can scale even when the lever itself has no boiler. If milk matters, include the purchase, energy use and cleaning of the separate device rather than treating it as a free capability.</p>
        <p>None of these records provides a representative annual repair figure or measured lifespan. A useful comparison therefore lists known consumables, local labor access, shipping risk and the cost of downtime instead of inventing a yearly total. The machine with the fewest electronics is not automatically the cheapest to own, and the machine with factory controls is not automatically harder to service. The relevant question is who can diagnose this exact regional model and what the owner can clean safely without opening energized equipment. Document the answer before checkout.</p>
      `,
    },
    {
      id: 'picks', eyebrow: 'Four coherent answers', title: 'Choose the compromise that remains acceptable after the first month', html: `
        <h3>Gaggia Classic Pro E24: best value 58 mm platform</h3><p>The current North American E24 combines a lead-free 3.5 ounce brass boiler, brass group, 58 mm stainless portafilter, nine-bar calibration, three-way solenoid and manual two-hole wand for $549. It is compact, widely understood and inexpensive enough to protect the grinder budget. It has no stock PID, pressure gauge or shot timer. Buy it to learn a stable manual routine and use the standard ecosystem, not because future modifications are mandatory.</p>
        <h3>Lelit Anna PL41TEM: best factory-control value</h3><p>Anna places PID temperature adjustment, a pressure manometer, three-way valve and 2.7 L tank into a narrow single-boiler machine. The current US PESAN06 was $599.95, while the exact EU PL41TEM was listed at €549 in its regional context. LELIT57 tools and the 250 ml boiler are the boundaries. Buy it when visible factory feedback matters more than owning standard 58 mm accessories.</p>
        <h3>Rancilio Silvia V6: best traditional build</h3><p>Silvia is dense, simple and supported by years of service knowledge. The current North American record uses a 0.3 L brass single boiler, 58 mm group, manual switches and substantial steel construction. At the checked $995 price, lack of a stock PID, gauge and timer must be a conscious choice. Buy it when the thermostat rhythm and traditional architecture are positive reasons. Do not buy it as a shell for an immediate expensive conversion.</p>
        <h3>Flair 58 Plus 2: best direct pressure control</h3><p>Flair’s current Plus 2 uses a heated 58 mm group, pressure gauge, valve plunger and direct lever. At $699, it gives the operator more control over preinfusion and pressure than the pump machines. It supplies no brew water, steam, grinder or automatic stop. Buy it for focused straight espresso, especially when a kettle and grinder already exist. Skip it when the household wants one appliance for cappuccinos.</p>
      `,
    },
    {
      id: 'first-week', eyebrow: 'After delivery', title: 'Use the return window to test the real household routine', html: `
        <p>Start by confirming the model, voltage, rating plate and included accessories against the order. Photograph the box and machine, read the exact manual and keep packaging until the return period ends. Regional siblings can look identical while carrying different electrical requirements, baskets or warranty coverage.</p>
        <p>Choose one fresh medium-roast coffee and a stable dose that fits the supplied basket. Weigh the beverage and record time and taste. Change grind before changing several other variables. Use the stock machine long enough to understand its routine before ordering modifications. A bottomless portafilter can reveal preparation errors, but it can also make a poor puck messier without improving it.</p>
        <p>Test the actual household order. Pull two espressos, or make two milk drinks, and include warmup, grinding, steaming, boiler reset and cleanup. With Flair, include kettle filling, group heat and any separate milk device. If the routine is already irritating during the return window, accessories will rarely change the underlying architecture.</p>
        <p>Check counter clearance and movement. Gaggia and Silvia fill from above. Anna is narrow but deep. Flair needs room for the raised lever, kettle and safe power routing. Confirm that the scale and cup fit comfortably, that the tank can be reached under cabinets and that hot parts do not cross a busy walkway.</p>
      `,
    },
    {
      id: 'community', eyebrow: 'Owner context', title: 'Owner discussions identify recurring questions, not population-wide outcomes', html: `
        <aside class="review-community-evidence" aria-labelledby="prosumer-community-title"><h3 id="prosumer-community-title">What owner discussions repeatedly add</h3><ul>
          <li><strong>The grinder changes the value ranking.</strong><p>Owners who reserve money for grind control often report a calmer learning path than buyers who spend the cap on the brewer and immediately chase accessories.</p></li>
          <li><strong>Single-boiler tolerance differs by household.</strong><p>One espresso or cappuccino can feel deliberate; several drinks turn the same brew-to-steam sequence into the main limitation.</p></li>
          <li><strong>Modification culture can hide the real total.</strong><p>PID kits, gauges, baskets and cosmetic parts may be enjoyable projects, but their combined cost should be compared with factory-equipped alternatives.</p></li>
        </ul><p class="review-community-evidence-note">The useful patterns are readable here without outbound links. Original discussions and their limitations remain in the annotated source list.</p></aside>
        <p>Community reports mix production years, voltages, water, grinders, coffees, skill and maintenance. A Classic owner describing an older aluminum boiler is not automatically describing E24. A Silvia PID owner is not describing the stock V6 decision. Flair discussions often combine original 58, 58 Plus and Plus 2. Use each account to form a question for the seller or manual, not to calculate a defect rate or expected lifespan.</p>
      `,
    },
    {
      id: 'verdict', eyebrow: 'The buying decision', title: 'Spend for the control you will repeat, then protect the grinder budget', html: `
        <p>Choose Gaggia Classic Pro E24 when a current brass-boiler 58 mm platform and a $549 machine price leave the strongest complete-station budget. Accept thermostat management and sequential milk work. Choose Lelit Anna when a factory PID and gauge make the daily routine clearer, and accept LELIT57 accessories plus a small shared boiler.</p>
        <p>Choose Rancilio Silvia when dense conventional construction, established service knowledge and stronger manual steam outweigh the absence of factory temperature feedback at $995. Choose Flair 58 Plus 2 when straight espresso, a heated group and direct pressure profiling are the entire point, and integrated milk would only add unused hardware.</p>
        <p>If the desired routine includes several milk drinks, simultaneous brewing and steaming or effortless temperature changes, the honest answer may cost more than $1,000. Waiting for the right architecture is cheaper than turning a focused single boiler into an expensive approximation of a dual boiler.</p>
      `,
    },
  ],
  faqs: [
    ['What does prosumer mean below $1,000?', 'Here it means a focused manual machine with specialist controls, serviceable construction or direct pressure feedback. It does not mean commercial throughput, dual boilers or plumbing.'],
    ['Which pick has a factory PID?', 'Lelit Anna PL41TEM or the current US PESAN06 is the only pump machine in this shortlist with a factory PID. Flair heats its group at selectable levels but does not provide a boiler-temperature setpoint.'],
    ['Which machine is best for milk drinks?', 'Rancilio Silvia offers the strongest traditional steam case here, but it remains sequential. For several milk drinks, a dual boiler above this cap is the more direct solution.'],
    ['Do I need a separate grinder?', 'Yes. Every recommendation relies on an espresso-capable grinder for fresh beans. The machine and grinder should be budgeted as one system.'],
    ['Is 58 mm automatically better than LELIT57?', 'No. Standard 58 mm provides more accessory choice and easier tool reuse. Anna’s 57 mm system can make capable espresso when the grinder, basket fit and preparation are suitable.'],
    ['Should I install a PID on a Gaggia or Silvia?', 'Only after using the stock machine, pricing qualified installation and comparing the all-in total with a factory-PID model. A modification can affect warranty and service.'],
    ['Can Flair 58 Plus 2 make lattes?', 'It can make espresso for a latte, but milk requires separate heating and texturing equipment. The Flair itself has no steam wand.'],
    ['Why are Profitec GO and Lelit Victoria excluded?', 'Their checked current machine prices were above the strict $1,000 ceiling. Temporary promotions and used listings do not create a durable under-cap recommendation.'],
  ],
  sources: [
    ['Gaggia North America: Classic Pro E24', 'https://www.gaggia-na.com/products/gaggia-classic-pro', 'Current North American identity, $549 price, brass boiler, group, 58 mm portafilter and nine-bar setup checked September 25, 2026.'],
    ['Gaggia North America: E24 manuals', 'https://www.gaggia-na.com/pages/gaggia-classic-e24-manuals', 'Official current-generation operation, safety, cleaning and care route.'],
    ['Whole Latte Love: Classic Pro E24 review', 'https://www.wholelattelove.com/blogs/reviews/gaggia-classic-pro-e24-review', 'Commercially connected hands-on evaluation of the current brass-boiler model.'],
    ['CoffeeGeek: Gaggia temperature technique', 'https://coffeegeek.com/blog/techniques/temperature-surfing-and-pressure-profiling-a-gaggia-classic/', 'Independent technique context published August 21, 2025; not a Coffeedant measurement.'],
    ['Lelit: Anna PL41TEM', 'https://www.lelit.com/product/anna-pl41tem/', 'Current EU identity, dimensions, boiler, PID, gauge, LELIT57 system and package.'],
    ['Lelit: Anna PESAN06 US', 'https://www.lelit.com/en-us/product/anna-pesan06', 'Current 120 V US identity and $599.95 reference; regional claims are kept separate from EU PL41TEM.'],
    ['Coffee Blog: Lelit Anna review', 'https://coffeeblog.co.uk/lelit-anna-review/', 'Independent exact-model hands-on work published June 5, 2026, including bounded milk measurements.'],
    ['Coffee Friend: Anna PL41TEM', 'https://www.coffeefriend.eu/p/coffee-machine-lelit-anna-pl41tem/', '€549 EU price and stock context checked September 24, 2026; offers can change.'],
    ['Rancilio North America: Silvia', 'https://www.ranciliogroupna.com/equipment/rancilio-silvia/', 'Current North American identity, 0.3 L boiler, 2 L reservoir, 58 mm group and controls.'],
    ['Whole Latte Love: Rancilio collection', 'https://www.wholelattelove.com/collections/rancilio', '$995 new Silvia price context checked September 15, 2026; stock and offers can change.'],
    ['Coffee Chronicler: Rancilio Silvia review', 'https://coffeechronicler.com/rancilio-silvia-review/', 'Independent practical review focused on temperature routine, warmup, milk and learning curve.'],
    ['Home-Barista: Silvia PID versus factory control', 'https://www.home-barista.com/espresso-machines/rancilio-silvia-w-pid-vs-profitec-go-t91614.html', 'Self-selected experienced-user discussion used to frame modification questions, not outcomes.'],
    ['Flair: Flair 58 Plus 2', 'https://flairespresso.com/products/flair-58-plus-2', 'Current model identity, $699 US price, heated group, package and dimensions checked September 23, 2026.'],
    ['Flair: Flair 58 Plus 2 manual', 'https://cdn.shopify.com/s/files/1/0923/2987/5484/files/flair-58-plus-2-user-manual.pdf', 'Official assembly, electrical safety, brewing, cleaning and care guidance.'],
    ['Coffee Chronicler: Flair 58 Plus 2 review', 'https://coffeechronicler.com/flair-58-plus-2-review/', 'Independent February 11, 2026 long-term assessment of workflow and generational changes.'],
    ['Cabeen’s Coffee Corner: The BEST Espresso Machine Under $1000?!?!', 'https://www.youtube.com/watch?v=DVdcaDKQqo8', 'Independent video published June 3, 2026, running 13 minutes 25 seconds. It demonstrates one under-$1,000 machine decision rather than defining this shortlist.'],
    ['Coffee Chronicler: espresso machines under $1,000', 'https://coffeechronicler.com/gear/espresso-machines/best-under-1000/', 'Independent category guide updated February 9, 2026, used as market context with different inclusion choices.'],
    ['r/espresso: machine recommendations around $1,000', 'https://www.reddit.com/r/espresso/comments/191pqxm/espresso_machine_recommendations_1000/', 'Self-selected buyer discussion used to identify grinder-budget and workflow questions, not popularity or reliability rates.'],
  ],
  media: [
    { src: 'https://www.gaggia-na.com/cdn/shop/products/Silver_IMG_9834_03_1000x.progressive.jpg?v=1601493881', alt: 'Stainless Gaggia Classic Pro E24 espresso machine', width: 1000, height: 1000, credit: 'Gaggia North America', source: 'https://www.gaggia-na.com/products/gaggia-classic-pro', caption: 'Classic Pro E24 represents the value 58 mm route: current brass hardware without a factory PID or shot timer.' },
    { src: 'https://flairespresso.com/cdn/shop/files/flair_58_plus_2_lifestyle_14_small_2b3b4e89-9ec3-4414-afef-63edabd9d5b8.jpg?v=1782932208&width=1000', alt: 'Flair 58 Plus 2 manual lever espresso machine with raised lever', width: 1000, height: 1000, credit: 'Flair Espresso', source: 'https://flairespresso.com/products/flair-58-plus-2', caption: 'Flair 58 Plus 2 represents the pressure-control route: a heated group and gauge without an integrated pump, boiler or milk system.' },
  ],
  video: { id: 'DVdcaDKQqo8', title: 'The BEST Espresso Machine Under $1000?!?!', creator: 'Cabeen’s Coffee Corner', published: '2026-06-03', duration: 'PT13M25S', note: 'An independent review of one machine in the under-$1,000 class. It shows how workflow and value can be assessed, while current model identity, specifications and prices in this guide remain anchored to primary records.' },
};
