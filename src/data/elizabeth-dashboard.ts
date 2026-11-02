export type DashboardSource = {
  id: string;
  label: string;
  href: string;
  note: string;
  kind: 'manufacturer' | 'independent' | 'retailer' | 'owner';
};

export type DashboardQuestion = {
  id: string;
  question: string;
  answer: string;
  paragraphs: string[];
  evidence: Array<{ label: string; detail: string; sourceIds: string[] }>;
  takeaway: string;
};

export const dashboardSources: DashboardSource[] = [
  {
    id: 'eliz-official', label: 'Lelit: Elizabeth PL92T',
    href: 'https://www.lelit.com/product/elizabeth-pl92t/',
    note: 'Current manufacturer specification, checked November 2, 2026. Describes the established PL92T; performance claims are not independent measurements.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-us-sheet', label: 'Lelit: PL92T-120 technical sheet',
    href: 'https://assets.breville.com/Lelit/PESEL01/LELIT-Elizabeth-PL92T-120-EN.pdf',
    note: 'Manufacturer US electrical identity and specifications. Its dimensions and weight differ from older documentation.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-extended', label: 'Lelit: 2021 extended guide',
    href: 'https://www.maxicoffee.com/images/pdf/TECH_PL92T_ELIZABETH_extended_guide_2021_REV00.pdf',
    note: 'Manufacturer-authored REV00 guide, mirrored by MaxiCoffee. Control instructions must match the supplied firmware and manual.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-care', label: 'Lelit: user manual and care schedule',
    href: 'https://img.kavosdraugas.lt/8249eb4d-7645-491e-b393-3d4c259de1cb/original/enpdf.pdf',
    note: 'Manufacturer-authored manual hosted by Coffee Friend; printed pages 4–6 cover cleaning and technician-led descaling.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-old-manual', label: 'Lelit: earlier PL92T manual',
    href: 'https://www.1st-line.com/wp-content/uploads/2019/06/Lelit-PL92T-Elizabeth-manual.pdf',
    note: 'Earlier manufacturer document retained to identify pump-rating and specification differences, not to override later instructions.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-kaffee', label: 'Kaffeemacher: PL92T test and September 2026 retest',
    href: 'https://kaffeemacher.de/en/blogs/kaffeewissen/lelit-elizabeth',
    note: 'KM Protocol V2.3.2 retest of its 2022 sample. Also sells coffee and uses affiliate links. Electrical variant and maintenance history are unspecified.',
    kind: 'independent',
  },
  {
    id: 'eliz-kev', label: 'Coffee Kev: Elizabeth review and comparison',
    href: 'https://coffeeblog.co.uk/lelit-elizabeth-review/',
    note: 'Firsthand PL92T evaluation, updated October 20, 2026. Includes commercial links and discount codes; milk starting temperature and repetition count are not reported.',
    kind: 'independent',
  },
  {
    id: 'eliz-clive-support', label: 'Clive Coffee: Elizabeth support guide',
    href: 'https://support.clivecoffee.com/en/articles/16426790-lelit-elizabeth-user-manual',
    note: 'Retailer operating and water-care guidance; published August 19, 2026. Seller advice and included accessories can differ by shipment.',
    kind: 'retailer',
  },
  {
    id: 'eliz-warranty', label: 'Lelit: North American warranty',
    href: 'https://www.lelit.com/en-us/support/warranty',
    note: 'Manufacturer terms checked November 2, 2026. Seller benefits are separate; other countries have their own terms.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-successor', label: 'Lelit: separate Elizabeth3 PL92T3',
    href: 'https://www.lelit.com/product/elizabeth3-pl92t3/',
    note: 'Manufacturer identity check for the separate Pagaia-equipped product. Its features and test results are excluded from the PL92T assessment.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-move', label: 'Profitec: MOVE',
    href: 'https://www.profitec-espresso.com/en/products/move',
    note: 'Current manufacturer features, used for a scheduling comparison without claiming a measured warm-up advantage.',
    kind: 'manufacturer',
  },
  {
    id: 'eliz-bes920', label: 'Breville: BES920 instruction book',
    href: 'https://assets.breville.com/BES920/BES920_USCM_IB_Y23_LR.pdf',
    note: 'Printed page 17 distinguishes selectable volume and time dosing; time is the default. This applies to BES920, not every Breville machine.',
    kind: 'manufacturer',
  },
];

export const dashboardQuestions: DashboardQuestion[] = [
  {
    id: 'espresso',
    question: 'Will it make the espresso I want?',
    answer: 'It gives a hands-on brewer useful control, but repeatable espresso depends on a properly warmed machine, suitable grinding and a repeatable recipe.',
    paragraphs: [
      'In Kaffeemacher’s September 2026 retest, with 94°C selected, its existing PL92T delivered a first-shot average of 84.8°C after 20 minutes and 90.7°C after 25 minutes. Subsequent shots at one-minute intervals measured 92.5–94.0°C. These are its sample’s results, not current US-unit guarantees.',
      'The practical buying question is whether you can plan preheating. Temperature and preinfusion settings give you options once the starting conditions repeat; they cannot identify the right grind or guarantee a particular flavor.',
    ],
    evidence: [
      { label: 'Measured, with limits', detail: 'KM averaged extraction seconds 5–25 using its 2022 test machine. Age, condition and electrical variant limit generalization.', sourceIds: ['eliz-kaffee'] },
      { label: 'What the display measures', detail: 'Lelit explains that the displayed temperature comes from a probe inside the boiler. It is not a direct puck-temperature reading.', sourceIds: ['eliz-extended'] },
    ],
    takeaway: 'Choose it for adjustment and a planned routine. Put first-cup convenience ahead of feature count if your coffee is usually spontaneous.',
  },
  {
    id: 'milk',
    question: 'Can I make good flat whites and two milk drinks?',
    answer: 'Yes, the separate steam boiler supports brewing and steaming together. You still control milk texture and temperature by hand.',
    paragraphs: [
      'Coffee Kev reports heating 170 ml of milk to 60°C in about 24–25 seconds at maximum steam temperature. His compared Sage Dual Boiler took about 25–27 seconds. That is a useful pitcher benchmark, but the small difference does not establish a universal speed winner or tell us how the Elizabeth recovers after repeated large pitchers.',
      'For two drinks, prepare both doses and the milk before starting. Overlap brewing and steaming when you are comfortable controlling both; make them sequentially while learning. Include wiping and purging the wand in either routine.',
    ],
    evidence: [
      { label: 'Independent pitcher result', detail: 'Coffee Kev’s comparison does not disclose the starting milk temperature or repetitions. It does not establish oat-milk texture or sustained entertaining capacity.', sourceIds: ['eliz-kev'] },
      { label: 'Documented capability', detail: 'Lelit specifies simultaneous brewing/steaming and a manual anti-burn wand. The documented standard PL92T tip has two holes.', sourceIds: ['eliz-official', 'eliz-extended'] },
    ],
    takeaway: 'A credible household milk-drink option for someone willing to learn steaming. Ask for a repeated-pitcher demonstration if entertaining drives the purchase.',
  },
  {
    id: 'workflow',
    question: 'How long before my first coffee, and what work remains?',
    answer: 'Allow roughly 20–30 minutes for planned preheating, with the longer end prudent for the first espresso. Grinding, preparation, milk and cleanup still take active time.',
    paragraphs: [
      'Coffee Kev reports roughly eight minutes to readiness but better stability after 20–30 minutes; Kaffeemacher’s current retest recommends 25–30 minutes. Different samples and methods make these separate observations.',
      'While the machine warms, fill the reservoir, prepare cups and set out the grinder and scale. Once ready, grind, dose, tamp, brew, steam if needed, then clear the basket and clean the wand. There is no defensible complete two-latte time in the reviewed evidence.',
    ],
    evidence: [
      { label: 'Readiness evidence', detail: 'The independent observations favor planning the cold start rather than relying solely on the display. A programmed recipe does not remove preparation tasks.', sourceIds: ['eliz-kev', 'eliz-kaffee'] },
    ],
    takeaway: 'It suits predictable breakfast coffee better than a demand for an immediate, unplanned espresso.',
  },
  {
    id: 'setup',
    question: 'Do I need a grinder? Can I use pre-ground coffee or capsules?',
    answer: 'Plan a separate espresso-capable grinder. This is a traditional ground-coffee portafilter machine, and its listed equipment does not establish capsule or pressurized-basket support.',
    paragraphs: [
      'Pre-ground coffee can be put into an ordinary basket, but a fixed grind removes a major way to adjust extraction. For someone deliberately avoiding grinding, a machine explicitly supporting an appropriate pressurized basket or a capsule system is the more predictable shopping route.',
      'Budget for a scale, milk jug if required, suitable water and cleaning supplies. Confirm the supplied baskets and tamper before adding accessories: a bottomless portafilter, distributor and replacement shower screen are optional purchases, not prerequisites for starting.',
    ],
    evidence: [
      { label: 'Included equipment', detail: 'Lelit lists LELIT58 single, double and blind baskets, portafilter, tamper, softening filter and first cleaning kit. Confirm the actual regional bundle.', sourceIds: ['eliz-official'] },
      { label: 'Grinding guidance', detail: 'Lelit’s guide recommends fresh grinding with adjustment for the coffee. Clive’s support page provides setup and water-care instructions.', sourceIds: ['eliz-extended', 'eliz-clive-support'] },
    ],
    takeaway: 'Compare the cost and footprint of the whole station. Preserve room in the budget for the grinder before paying for extra machine features.',
  },
  {
    id: 'features',
    question: 'What do the buttons, pressure gauge and preinfusion actually do?',
    answer: 'The two coffee buttons can repeat a saved time and preinfusion routine. They do not weigh your drink or guarantee a fixed beverage volume.',
    paragraphs: [
      'Check output on a scale when changing beans or grind. The 2021 guide distinguishes steam-assisted preinfusion from a pump-and-pause bloom mode; their availability depends on settings and steam-boiler state. Use instructions matching the supplied revision before changing advanced controls.',
      'Treat pressure as diagnostic context alongside taste, dose and output. The earlier manual’s 15-bar pump rating is not a measured puck pressure or a target for your coffee. We have no independently verified pressure trace for a current PL92T-120 sample.',
    ],
    evidence: [
      { label: 'Time-based stopping', detail: 'The manufacturer describes programmable brewing time. Equal time can produce different beverage mass as coffee resistance changes.', sourceIds: ['eliz-extended'] },
      { label: 'Pump specification', detail: 'The earlier manual labels 15 bar as pump pressure. It does not establish the operating pressure under a particular coffee load.', sourceIds: ['eliz-old-manual'] },
    ],
    takeaway: 'Useful controls reward a repeatable recipe. Keep one known setup before experimenting with the other button.',
  },
  {
    id: 'build',
    question: 'What will cleaning, water care and repairs involve?',
    answer: 'Expect daily hands-on cleaning, periodic detergent cleaning and a local service plan. Automatic backflushing is one maintenance task, not maintenance-free ownership.',
    paragraphs: [
      'The manual calls for clearing and rinsing the basket/portafilter, cleaning the group and wiping/purging after milk use. Its weekly schedule includes coffee-oil cleaning and backflushing. It directs annual descaling to a specialized technician after assessment, so establish water treatment and service advice with the seller.',
      'For US buying, Lelit’s manufacturer warranty is 12 months and non-transferable, subject to its North American terms. Ask which party handles a claim, shipping and out-of-warranty repairs. Dealer coverage may add benefits, but it is a separate agreement. Owner repair stories cannot establish a population failure rate.',
    ],
    evidence: [
      { label: 'Care obligations', detail: 'See printed pages 4–6 of the manufacturer manual for the daily, weekly and annual schedule.', sourceIds: ['eliz-care'] },
      { label: 'Regional support', detail: 'Keep proof of purchase and confirm eligibility and the authorized service route for the actual seller and country.', sourceIds: ['eliz-warranty', 'eliz-clive-support'] },
    ],
    takeaway: 'Evaluate support, consumables and access to the reservoir as part of everyday ownership.',
  },
  {
    id: 'value',
    question: 'What am I paying for, and when should I choose something else?',
    answer: 'You are paying for separate brew and steam circuits plus adjustable, repeatable routines. Their value depends on how often your household uses them.',
    paragraphs: [
      'For daily milk drinks and an interest in dialing in, these capabilities are relevant. Someone making occasional black coffee should first decide whether a second boiler earns its cost. Someone seeking one-button milk drinks should compare a bean-to-cup route before committing to this workflow.',
      'Compare Profitec MOVE if built-in scheduling matters; its named Fast Heat-Up feature is not itself a measured time comparison. Compare Breville Dual Boiler BES920 if selectable volumetric stopping matters, checking its manual and actual settings. Keep grinder, delivered price, condition and local support equal when assessing value.',
    ],
    evidence: [
      { label: 'Scheduling alternative', detail: 'Profitec documents programmable switch-on/off times for MOVE.', sourceIds: ['eliz-move'] },
      { label: 'Dosing alternative', detail: 'The BES920 manual offers volume or time settings; its default is time-based.', sourceIds: ['eliz-bes920'] },
    ],
    takeaway: 'Pay for a capability that solves a recurring problem in your routine, and compare complete setups at current local prices.',
  },
  {
    id: 'identity',
    question: 'Which Elizabeth is this, and will it fit my kitchen?',
    answer: 'This review covers the established Elizabeth PL92T, with US buying scope tied to PL92T-120. The Pagaia-equipped Elizabeth3 is the separate PL92T3.',
    paragraphs: [
      'Do not use a shop’s V2, V3 or V4 nickname as the only identifier. Ask for the model plate and matching manual. PL92T3 pressure-profile features and its test results are excluded from this assessment.',
      'Current official PL92T records give 32 × 38 × 38 cm and 15.3 kg; older documents give 31 × 27 × 38 cm and 12 kg. Confirm the delivered unit’s measurements before ordering for a tight space. Also allow working room for the portafilter, steam wand, grinder and top reservoir access.',
    ],
    evidence: [
      { label: 'Exact electrical model', detail: 'The US datasheet identifies PL92T-120 as 120 V, 60 Hz, Type B. Do not assume an imported electrical variant is equivalent.', sourceIds: ['eliz-us-sheet'] },
      { label: 'Model and specification checks', detail: 'The manufacturer lists PL92T and PL92T3 separately; its current PL92T size and weight conflict with older documentation.', sourceIds: ['eliz-official', 'eliz-successor', 'eliz-old-manual'] },
    ],
    takeaway: 'Confirm exact model, voltage, dimensions, included equipment and seller support before comparing offers.',
  },
];
