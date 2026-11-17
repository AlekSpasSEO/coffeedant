import type { MachineReviewData } from '../reviews';

export const silviaPath = '/espresso-machine/rancilio-silvia/';
export const proXPath = '/espresso-machine/rancilio-silvia-pro-x/';
export const rancilioBrandPath = '/rancilio/';
export const isRancilioReview = (slug: string) => slug === silviaPath || slug === proXPath;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const link = (path: string, text: string) => `<a href="${base}${path}">${text}</a>`;
const source = (id: string, text: string) => `<a href="#${id}">${text}</a>`;
const section = (id: string, title: string, html: string) => ({ id, title, html, eyebrow: '' });
const parts = 'https://store.ranciliogroupna.com/';
const support = 'https://www.ranciliogroupna.com/support/';

export const rancilioModels = {
  [silviaPath]: {
    name: 'Silvia V6',
    fit: 'Mostly espresso and the occasional cappuccino',
    budget: 'Lower-priced machine; leave room for the grinder',
    boiler: 'One 0.3 L boiler for brewing and steaming',
    temperature: 'Thermostat; no factory PID',
    milk: 'Brew, switch to steam, then reset for brewing',
    dimensions: '9.2 W × 11.4 D × 13.4 H in',
    image: 'images/products/rancilio-silvia-v6-boiler.jpg',
    imageAlt: 'Silvia V6 diagram showing one boiler shared by espresso and steam',
    official: 'https://www.ranciliogroupna.com/equipment/rancilio-silvia/',
    seller: 'Whole Latte Love',
    sellerUrl: 'https://www.wholelattelove.com/products/rancilio-silvia-espresso-machine?variant=43670167355446',
  },
  [proXPath]: {
    name: 'Silvia Pro X',
    fit: 'Two or more lattes or cappuccinos in the same session',
    budget: 'Higher-priced machine; the extra boiler earns its keep with regular milk drinks',
    boiler: '0.3 L brew boiler and 1 L steam boiler',
    temperature: 'Digital temperature control (two PIDs)',
    milk: 'Brew and steam together once both boilers are ready',
    dimensions: '9.8 W × 16.5 D × 15.3 H in',
    image: 'images/products/rancilio-silvia-pro-x-boilers.jpg',
    imageAlt: 'Silvia Pro X diagram showing separate boilers for espresso and steam',
    official: 'https://www.ranciliogroupna.com/equipment/rancilio-silvia-pro-x/',
    seller: 'Clive Coffee',
    sellerUrl: 'https://clivecoffee.com/products/rancilio-silvia-pro-x-espresso-machine',
  },
};

export const archivePhoto = {
  src: 'images/products/rancilio-silvia-archive-jmak.jpg',
  width: 500,
  height: 793,
  alt: 'An older Rancilio Silvia on a kitchen counter, with front switches, a portafilter and a manual steam wand',
  caption: 'An earlier Silvia photographed in 2011. This is a reference for the traditional switch and wand layout; it does not show the current V6.',
  creator: 'Jmak',
  source: 'https://commons.wikimedia.org/wiki/File:RANCILIO_SILVIA_espresso_machine.jpg',
  license: 'https://creativecommons.org/licenses/by-sa/3.0/',
  credit: 'Jmak / Wikimedia Commons',
};

const silviaSections = [
  section('espresso', 'What making espresso on the stock Silvia involves', `
    <p>The machine’s heating light tells you when the element is cycling. It does not give you a brew temperature. Let the group and locked-in portafilter warm up, then use the same point in the heating cycle each time you brew. This is what people mean by <em>temperature surfing</em>. Change the grind or dose one at a time so you can tell what helped.</p>
    <p>The 58 mm portafilter takes standard-size accessories, but basket fit still varies. You start and stop every shot yourself. A small scale under the cup makes it easier to stop at the same drink weight each time. Use Rancilio’s ${source('silvia-manual', '120 V manual')} for the first fill and rinse.</p>`),
  section('milk', 'How to make two milk drinks with one boiler', `
    <p>Pull both shots first, then switch to steam and texture milk. That avoids switching the boiler from brew to steam twice, but the first shot will wait while you finish. After steaming, follow ${source('silvia-workflow', 'Rancilio’s brew-to-steam and refill instructions')} before you return to espresso. The boiler needs water and time to come back to brewing conditions.</p>
    <p>For a weekend cappuccino, this is a manageable extra step. If a second person wants a latte at the same time every morning, that same sequence is a reason to compare dual boilers.</p>`),
  section('setup', 'Counter space and what to budget for', `
    <p>The North American body measures about <strong>9.2 W × 11.4 D × 13.4 H inches</strong>. Leave space above for the 2 L tank lid, in front for the portafilter and drip tray, and to the side for your grinder. Mock it up with a piece of paper on the counter before ordering. ${source('silvia-spec', 'North American spec sheet')}</p>
    <p>Start with an ${link('/grinder/best-compact-electric-espresso-grinders/', 'espresso-capable grinder')}, a scale and suitable water. Add a pitcher for milk. Confirm the basket and tamper in your seller’s bundle before buying duplicates. Price the entire setup before deciding if a PID kit belongs in it.</p>`),
  section('ownership', 'Cleaning, service and buying used', `
    <p>Wipe and purge the wand after milk, rinse the basket and empty the tray. Follow ${source('silvia-cleaning', 'Rancilio’s group cleaning instructions')} and use water that meets the manual’s guidance. If buying used, ask for the serial label, service and water history, and a cold-start demonstration that includes both brewing and steaming. Look for leaks or corrosion around the tray. Get any PID modification, parts availability and warranty terms in writing.</p>`),
  section('comparisons', 'When another machine makes more sense', `
    <ul>
      <li><strong>Want to dial in by temperature?</strong> Compare the ${link('/espresso-machine/profitec-go/', 'Profitec GO')}. It includes factory temperature control and still uses one boiler.</li>
      <li><strong>Serving two milk drinks most mornings?</strong> The ${link(proXPath, 'Silvia Pro X')} avoids switching the brew boiler to steam.</li>
      <li><strong>Prefer faster startup and assisted milk?</strong> Compare the ${link('/espresso-machine/breville-bambino/', 'Breville Bambino Plus')}.</li>
    </ul>`),
];

const proXSections = [
  section('milk', 'What changes when you make two lattes', `
    <p>With the steam boiler on and ready, you can brew while steaming. If you work one task at a time, pull both shots and steam right away: there is no need to heat the brew boiler to steam temperature or bring it back down afterward. The 1 L steam boiler is the spec behind this convenience. Coffeedant did not time recovery across a series of pitchers. ${source('prox-spec', 'Rancilio specifications')}</p>
    <p>You still texture milk by hand. If you want the machine to finish milk for you, compare the ${link('/espresso-machine/breville-bambino/', 'Bambino Plus with automatic milk')} before paying for a second boiler.</p>`),
  section('espresso', 'What the controls do for your espresso', `
    <p>Set the brew temperature on the display so you have a setpoint to return to when dialing in. That setpoint is not a measurement at the coffee puck. The shot timer counts elapsed time; you still stop the shot at the switch. A scale is useful if you want to brew to a target weight.</p>
    <p>The optional soft infusion wets the puck for up to six seconds before normal brewing pressure. Try it after you have a repeatable grind, dose and yield. There is no manual flow control. ${source('prox-global', 'Rancilio’s controls overview')}</p>`),
  section('setup', 'Measure depth, tank access and the grinder space', `
    <p>The North American body is <strong>9.8 W × 16.5 D × 15.3 H inches</strong>. It is only 0.6 inches wider than the V6 but 5.1 inches deeper. Check the tank lid under your cabinet and leave room for cords, the handle, your cup and scale. The 2 L reservoir is filled from above; there is no direct-plumb option. ${source('prox-na', 'North American model details')}</p>
    <p>Budget for a ${link('/grinder/best-compact-electric-espresso-grinders/', 'separate espresso grinder')}, scale, pitcher and suitable water. Ask the seller to confirm voltage, basket sizes and what is in the carton. Check the ${source('prox-manual', 'user manual')} for startup and clearance instructions for your unit.</p>`),
  section('ownership', 'What you will clean and who can service it', `
    <p>Wipe and purge the wand after each use, rinse the coffee hardware, and keep an eye on the tray if you flush often. The manual covers the group cleaning cycle, water guidance and what the display alerts mean. Ask the retailer who handles parts, labor and return shipping under warranty. Confirm the exact model if buying used: a listing for <em>Silvia Pro</em> does not establish that it has the Pro X’s soft infusion.</p>`),
  section('comparisons', 'When to skip the Pro X', `
    <ul>
      <li><strong>Mostly straight espresso?</strong> The ${link(silviaPath, 'Silvia V6')} keeps the setup shallower if you enjoy its manual routine. The ${link('/espresso-machine/profitec-go/', 'Profitec GO')} is a single-boiler option with factory temperature control.</li>
      <li><strong>Want the machine to stop the shot?</strong> The ${link('/espresso-machine/lelit-elizabeth/', 'Lelit Elizabeth')} pairs dual boilers with programmable shot buttons. Compare counter dimensions and local service before choosing.</li>
    </ul>`),
];

const commonSources = [
  { id: 'rancilio-support', label: 'Rancilio North America support', href: support, note: 'Manuals and the manufacturer service contact.' },
  { id: 'rancilio-parts', label: 'Rancilio North America parts diagrams', href: parts, note: 'Use the Home Line diagram for your exact model or revision.' },
];

export const applyRancilioBuyingAudit = (review: MachineReviewData): MachineReviewData => {
  if (!isRancilioReview(review.slug)) return review;
  const pro = review.slug === proXPath;
  const model = rancilioModels[pro ? proXPath : silviaPath];
  const sources = pro ? [
    { id: 'prox-na', label: 'Rancilio North America: Silvia Pro X', href: model.official, note: 'Specifications, included hardware, official product photos and distribution.' },
    { id: 'prox-spec', label: 'Rancilio North America: Silvia Pro X spec sheet (PDF)', href: 'https://www.ranciliogroupna.com/wp-content/uploads/2024/09/SPEC-HL_SPX.pdf', note: 'North American body dimensions, boiler sizes and manual controls.' },
    { id: 'prox-global', label: 'Rancilio: Silvia Pro X controls', href: 'https://www.ranciliogroup.com/rancilio/silvia-pro-x/', note: 'Two PIDs, shot timer and soft infusion controls.' },
    { id: 'prox-manual', label: 'Rancilio: January 2026 Silvia Pro X manual (PDF)', href: 'https://www.ranciliogroupna.com/wp-content/uploads/2026/03/Manual-User-Silvia-Pro-X-2026-01.pdf', note: 'First use, brewing controls, cleaning cycle and alerts.' },
  ] : [
    { id: 'silvia-official', label: 'Rancilio North America: Silvia', href: model.official, note: 'Stock controls, water reservoir and official product photos.' },
    { id: 'silvia-spec', label: 'Rancilio North America: Silvia spec sheet (PDF)', href: 'https://www.ranciliogroupna.com/wp-content/uploads/2024/09/SPEC-HL_SLV.pdf', note: 'Dimensions, 0.3 L boiler and included hardware.' },
    { id: 'silvia-manual', label: 'Rancilio: Silvia 120 V manual (PDF)', href: 'https://www.ranciliogroupna.com/wp-content/uploads/2025/02/Manual-User-Silvia-120V-2024-03.pdf', note: 'North American first fill, operation and care.' },
    { id: 'silvia-workflow', label: 'Rancilio: Silvia brew-to-steam workflow', href: 'https://www.ranciliogroupna.com/rancilio-silvia-workflow/', note: 'Manufacturer demonstration of mode switching, steaming and refill.' },
    { id: 'silvia-cleaning', label: 'Rancilio: Silvia group and wand cleaning', href: 'https://www.ranciliogroupna.com/rancilio-silvia-how-to-perform-weekly-cleaning/', note: 'Manufacturer’s maintenance walkthrough.' },
  ];
  return {
    ...review,
    title: pro ? 'Rancilio Silvia Pro X Review: Worth It for Daily Lattes?' : 'Rancilio Silvia V6 Review: Is the Single Boiler Enough?',
    description: pro
      ? 'The Silvia Pro X can brew and steam together. Compare its dual boilers, manual controls, counter depth and grinder needs with the Silvia V6.'
      : 'Is the stock Rancilio Silvia V6 right for you? See what temperature surfing involves, how it handles two milk drinks and when to buy the Pro X instead.',
    updated: '2026-11-17',
    sku: '',
    verdictLabel: pro ? 'For frequent back-to-back milk drinks' : 'For mostly espresso',
    verdict: pro
      ? 'Choose the Pro X if you regularly make two or more lattes in one session and want to pull shots and steam without switching boiler modes. You still grind separately, stop each shot and texture milk yourself.'
      : 'Choose the stock Silvia V6 if you mostly drink espresso, make milk drinks occasionally and enjoy a manual warm-up routine. If two lattes are an everyday order, compare the Pro X before buying.',
    assessment: pro ? 'The upgrade pays off when a second drink is routine.' : 'A shallower machine for an espresso-first routine.',
    image: model.image, imageAlt: model.imageAlt,
    price: { msrp: 'Check seller pricing', numeric: '', typical: 'Grinder sold separately', currency: 'USD', checked: '', label: 'Check seller pricing' },
    links: [
      { label: `Check ${model.seller} price`, href: model.sellerUrl, primary: true },
      { label: 'See Rancilio photos and dealers', href: model.official },
    ],
    bestFor: [model.fit],
    avoidIf: [],
    pros: pro ? ['Brew and steam at the same time', 'Set brew temperature on the display'] : ['Shallower body for a small counter', 'Direct switches and a manual steam wand'],
    cons: pro ? ['Five extra inches of depth versus the V6', 'Manual shot stopping and milk steaming'] : ['No factory temperature setting', 'One boiler means waiting between brew and steam'],
    evaluation: {
      ...review.evaluation,
      dimensions: review.evaluation.dimensions.map((dimension) => ({ ...dimension, score: null })),
    },
    facts: [
      { label: 'Boilers', value: model.boiler },
      { label: 'Body size (US)', value: model.dimensions },
      { label: 'Grinder', value: 'Separate grinder required' },
    ],
    article: {
      sections: pro ? proXSections : silviaSections,
      methodology: '<p>Coffeedant compared Rancilio’s North American specifications and operating instructions with third-party demonstrations. The buying advice applies those differences to a one-person espresso routine and a two-drink milk routine. Coffeedant did not bench-test this machine or measure warm-up time, steam recovery, temperature stability or reliability. <a href="' + base + '/testing/">Read our review methodology</a>.</p>',
      sources: [...sources, ...commonSources],
      finalTitle: `Where to buy the ${model.name}`,
      finalVerdict: [pro
        ? 'Confirm the listing says Silvia Pro X, select the correct voltage, and compare the delivered price, return terms and warranty service.'
        : 'Select the stock, no-PID model for the setup covered here. Confirm the voltage, included accessories and who handles warranty repairs.'],
    },
  };
};
