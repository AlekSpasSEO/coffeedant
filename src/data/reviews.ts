export type ReviewLink = {
  label: string;
  href: string;
  note?: string;
  affiliate?: boolean;
  primary?: boolean;
};

export type ReviewScore = {
  label: string;
  value: number;
  reason: string;
};

export type ReviewTable = {
  caption: string;
  columns: Array<{ key: string; label: string }>;
  rows: Array<Record<string, string>>;
};

export type MachineReviewData = {
  slug: string;
  brand: string;
  model: string;
  sku: string;
  title: string;
  description: string;
  verdictLabel: string;
  verdict: string;
  image: string;
  imageAlt: string;
  rating: number;
  published: string;
  updated: string;
  author: {
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    note: string;
  };
  price: {
    msrp: string;
    typical: string;
    currency: string;
    numeric: string;
    checked: string;
  };
  links: ReviewLink[];
  quickAnswers: Array<{ question: string; answer: string }>;
  facts: Array<{ label: string; value: string }>;
  bestFor: string[];
  avoidIf: string[];
  pros: string[];
  cons: string[];
  scores: ReviewScore[];
  testing: {
    intro: string;
    table: ReviewTable;
    note: string;
  };
  espresso: {
    intro: string[];
    table: ReviewTable;
    diagnosis: Array<{ signal: string; fix: string }>;
  };
  milk: {
    intro: string[];
    table: ReviewTable;
    tips: string[];
  };
  workflow: {
    intro: string;
    steps: Array<{ title: string; body: string }>;
  };
  video: {
    id: string;
    title: string;
    creator: string;
    published: string;
    note: string;
  };
  comparison: ReviewTable & {
    note: string;
  };
  ownerComments: Array<{
    quote?: string;
    comment: string;
    attribution: string;
    href: string;
  }>;
  ownership: {
    intro: string;
    cleaning: ReviewTable;
    issues: string[];
    upgrades: Array<{ title: string; body: string }>;
    usedChecklist: string[];
  };
  resources: Array<{ label: string; href: string; note: string }>;
  faqs: Array<{ question: string; answer: string }>;
  finalVerdict: string[];
};

export const bambinoReview: MachineReviewData = {
  slug: '/espresso-machine/breville-bambino/',
  brand: 'Breville',
  model: 'Bambino Plus',
  sku: 'BES500',
  title: 'Breville Bambino Plus review',
  description:
    'A practical Breville Bambino Plus review covering espresso quality, automatic milk, daily workflow, ownership, comparisons, price, and who should buy it.',
  verdictLabel: 'Best first machine for milk drinks',
  verdict:
    'The Bambino Plus is the easy recommendation for beginners who want real espresso and automatic milk without waiting for a traditional boiler. Buy it for speed and repeatability, not temperature control or decade-long repairability.',
  image: 'images/products/breville-bambino-plus.png',
  imageAlt: 'Breville Bambino Plus espresso machine on a kitchen counter',
  rating: 4.2,
  published: '2026-04-07',
  updated: '2026-09-11',
  author: {
    name: 'Aleksandar Spasevski',
    role: 'Editor at Coffeedant',
    image: 'images/author-aleksandar-spasevski.jpg',
    imageAlt: 'Aleksandar Spasevski, editor at Coffeedant',
    note:
      'I test espresso machines for workflow, build, temperature behavior, and long-term ownership. Coffeedant reviews prioritize repeatable routines and service realities over spec-sheet hype.',
  },
  price: {
    msrp: '$499.95',
    typical: 'Often $399-$499',
    currency: 'USD',
    numeric: '499.95',
    checked: 'September 11, 2026',
  },
  links: [
    {
      label: 'Check Amazon price',
      href: 'https://amzn.to/4oTFUpH',
      note: 'Affiliate link',
      affiliate: true,
      primary: true,
    },
    {
      label: 'Buy from Breville',
      href: 'https://www.breville.com/en-us/product/bes500',
      note: '$499.95 MSRP at last check',
    },
  ],
  quickAnswers: [
    { question: 'Beginner-friendly?', answer: 'Yes. One of the easiest true semi-automatics to learn.' },
    { question: 'Built-in grinder?', answer: 'No. Budget for an espresso-capable grinder.' },
    { question: 'Ready in 3 seconds?', answer: 'The heater is. Run a blank shot to warm the group and portafilter.' },
    { question: 'Good for light roasts?', answer: 'Possible, but not its strength. Medium and darker roasts are easier.' },
    { question: 'Plus or standard?', answer: 'Plus for automatic milk. Standard Bambino for price and manual steaming.' },
    { question: 'Main ownership risk?', answer: 'Appliance-style construction and more sensors than a simple boiler machine.' },
  ],
  facts: [
    { label: 'Heat-up', value: '3 seconds' },
    { label: 'Portafilter', value: '54 mm' },
    { label: 'Brew pressure', value: '9 bar' },
    { label: 'Water tank', value: '64 oz / 1.9 L' },
    { label: 'Milk', value: 'Auto + manual' },
    { label: 'Grinder', value: 'Separate' },
  ],
  bestFor: [
    'First-time owners who want repeatable results quickly',
    'Latte and cappuccino drinkers who value automatic milk',
    'Small kitchens and fast weekday routines',
  ],
  avoidIf: [
    'Very light-roast espresso is your main goal',
    'You want a repairable machine to keep and modify for a decade',
    'You do not want to buy a separate grinder',
  ],
  pros: [
    'Three-second ThermoJet start-up',
    'PID stability, pre-infusion and 9-bar extraction',
    'Automatic milk is consistent and genuinely useful',
    'Compact without sacrificing a full espresso workflow',
    'Strong value when discounted',
  ],
  cons: [
    'Fixed brew temperature limits light-roast flexibility',
    'A capable grinder materially increases total setup cost',
    'The 54 mm accessory ecosystem is narrower than 58 mm',
    'Automatic purge fills the small drip tray quickly',
    'Less serviceable than traditional boiler machines',
  ],
  scores: [
    { label: 'Espresso', value: 8.6, reason: 'Stable and forgiving with medium-to-dark roasts; fixed temperature limits the ceiling.' },
    { label: 'Milk', value: 8.5, reason: 'Automatic texture is consistent, while manual mode leaves room to learn.' },
    { label: 'Workflow', value: 9.5, reason: 'Fast start-up, clear controls and programmable volumes remove daily friction.' },
    { label: 'Build', value: 6.8, reason: 'Compact and capable, but built more like an appliance than a long-life prosumer machine.' },
    { label: 'Features', value: 7.8, reason: 'The useful essentials are present; temperature adjustment and a pressure gauge are not.' },
    { label: 'Value', value: 9.2, reason: 'Few machines make competent espresso and milk this easy at the same price.' },
  ],
  testing: {
    intro:
      'The original review used filtered water, multiple grinder styles and a repeatable preheat routine. The useful result is not simply that the machine powers on quickly. It is that the Bambino removes waiting while still rewarding normal espresso discipline.',
    table: {
      caption: 'Coffeedant Bambino testing results',
      columns: [
        { key: 'metric', label: 'Test' },
        { key: 'result', label: 'Result' },
        { key: 'meaning', label: 'What it means' },
      ],
      rows: [
        { metric: 'Cold start', result: '~3 seconds to ready', meaning: 'Flush once before the first serious shot.' },
        { metric: 'Medium blend', result: '18 g in / 36 g out / 25-32 s', meaning: 'The easiest route to syrupy, balanced espresso.' },
        { metric: 'Light single origin', result: '18 g in / 42-45 g out / 28-38 s', meaning: 'Needs aggressive preheating and still has a lower ceiling.' },
        { metric: 'Milk cadence', result: 'Repeatable hands-free texture', meaning: 'The Plus cuts the skill burden for multi-drink mornings.' },
      ],
    },
    note:
      'The grinder remains the largest variable. With stale coffee or a grinder that cannot make small espresso adjustments, the Bambino cannot rescue the shot.',
  },
  espresso: {
    intro: [
      'ThermoJet, PID control and low-pressure pre-infusion give the Bambino a far more repeatable baseline than its size suggests. It is especially convincing with chocolate-forward medium and darker espresso.',
      'The fixed brew temperature is the honest limit. Lighter coffee can work with a longer ratio and a thorough blank-shot preheat, but buyers who mainly chase bright, high-extraction espresso should choose a machine with adjustable temperature.',
    ],
    table: {
      caption: 'Starting espresso recipes for the Breville Bambino series',
      columns: [
        { key: 'coffee', label: 'Coffee' },
        { key: 'recipe', label: 'Starting recipe' },
        { key: 'target', label: 'Taste target' },
        { key: 'adjustment', label: 'First adjustment' },
      ],
      rows: [
        { coffee: 'Medium blend', recipe: '18 g in, 36 g out, 25-32 s', target: 'Syrupy, sweet, chocolate-led', adjustment: 'Sour: finer. Bitter: coarser.' },
        { coffee: 'Light roast', recipe: '18 g in, 40-45 g out, 28-38 s', target: 'Cleaner sweetness, less sharpness', adjustment: 'Preheat first, then grind finer.' },
        { coffee: 'Decaf', recipe: '18 g in, 34-38 g out, 25-35 s', target: 'Sweet rather than papery', adjustment: 'Keep the yield controlled.' },
      ],
    },
    diagnosis: [
      { signal: 'Fast, pale and watery', fix: 'Grind finer and improve distribution.' },
      { signal: 'Slow, dark and harsh', fix: 'Grind coarser or reduce the dose.' },
      { signal: 'Spraying from the basket', fix: 'Break up clumps, level the bed and tamp straight.' },
      { signal: 'Muted even at the right time', fix: 'Use fresher beans and preheat the portafilter.' },
    ],
  },
  milk: {
    intro: [
      'Milk is the whole Bambino versus Bambino Plus decision. The standard model gives you a manual wand. The Plus adds three temperature levels, three texture levels, a temperature sensor and automatic purging.',
      'The automation is not a gimmick. It lets a beginner prepare the espresso while the machine textures milk consistently. Manual mode remains available when you want more control.',
    ],
    table: {
      caption: 'Breville Bambino and Bambino Plus milk-system comparison',
      columns: [
        { key: 'model', label: 'Model' },
        { key: 'approach', label: 'Milk approach' },
        { key: 'best', label: 'Best for' },
        { key: 'tradeoff', label: 'Trade-off' },
      ],
      rows: [
        { model: 'Bambino Plus', approach: 'Automatic presets or manual', best: 'Repeatable weekday milk drinks', tradeoff: 'More sensors and frequent tray emptying' },
        { model: 'Bambino', approach: 'Manual steam wand', best: 'Learning texture and spending less', tradeoff: 'Requires attention and practice' },
      ],
    },
    tips: [
      'Start with refrigerator-cold milk and a cold jug.',
      'Purge before steaming, then wipe and purge immediately afterward.',
      'Use low texture for flatter drinks, medium for a forgiving latte and high for cappuccino foam.',
    ],
  },
  workflow: {
    intro:
      'The machine is fast, but espresso still depends on a repeatable sequence. This is the shortest routine that preserves quality.',
    steps: [
      { title: 'Warm the working parts', body: 'Run a blank shot through the locked-in portafilter and preheat the cup.' },
      { title: 'Dose consistently', body: 'Start with 18 g in the double single-wall basket and weigh every dose.' },
      { title: 'Distribute and tamp', body: 'Break up clumps, level the bed and tamp straight. Consistency matters more than force.' },
      { title: 'Measure the yield', body: 'Start near 36 g out and use grind size as the first adjustment.' },
      { title: 'Texture and clean', body: 'Steam or run auto milk, then wipe and purge the wand before milk dries.' },
    ],
  },
  video: {
    id: '2aIJAY3SJuU',
    title: 'Sage (Breville) Bambino Plus review after nearly four years',
    creator: 'Coffee Kev',
    published: '2023-11-30',
    note:
      'A useful independent counterpoint because it focuses on living with the machine over several years, not only the first week.',
  },
  comparison: {
    caption: 'Breville Bambino Plus compared with its closest alternatives',
    columns: [
      { key: 'machine', label: 'Machine' },
      { key: 'workflow', label: 'Workflow' },
      { key: 'milk', label: 'Milk' },
      { key: 'best', label: 'Choose it when' },
      { key: 'compromise', label: 'Main compromise' },
    ],
    rows: [
      { machine: 'Bambino Plus', workflow: 'Instant-on, separate grinder', milk: 'Automatic + manual', best: 'Speed and easy milk matter most', compromise: 'Fixed temperature; appliance build' },
      { machine: 'Bambino', workflow: 'Instant-on, separate grinder', milk: 'Manual', best: 'You want the same espresso core for less', compromise: 'You must learn milk texture' },
      { machine: 'De’Longhi Dedica', href: '/espresso-machine/delonghi-dedica/', workflow: 'Compact, appliance-simple', milk: 'Manual', best: 'Width and budget are the hard limits', compromise: 'Lower espresso ceiling' },
      { machine: 'Gaggia Classic Pro', href: '/espresso-machine/gaggia-classic-evo-pro/', workflow: 'Traditional warm-up', milk: 'Manual', best: 'You want 58 mm parts and modification options', compromise: 'More work for repeatability' },
      { machine: 'Lelit Anna', href: '/espresso-machine/lelit-anna/', workflow: 'Traditional PID boiler', milk: 'Manual', best: 'Classic build and temperature control matter', compromise: 'Slower and more expensive' },
    ],
    note:
      'The first decision is Plus versus standard Bambino. Only move to another family when you are deliberately trading speed for lower cost, repairability or more control.',
  },
  ownerComments: [
    {
      quote: '“Small, fast and convenient.”',
      comment: 'One owner bought it as a temporary stand-in for a larger machine and kept using it as the main machine.',
      attribution: 'JCWOlson, r/espresso',
      href: 'https://www.reddit.com/r/espresso/comments/1j428zl/newbies_youll_be_happy_with_the_breville_bambino/',
    },
    {
      comment: 'One owner says medium and darker roasts fit the machine best; lighter coffee benefits from preheating and blank shots.',
      attribution: 'emccm, r/espresso',
      href: 'https://www.reddit.com/r/espresso/comments/1j428zl/newbies_youll_be_happy_with_the_breville_bambino/',
    },
    {
      comment: 'Another owner moved to a Profitec GO, then returned to the Bambino because its daily convenience mattered more.',
      attribution: 'suzusnow, r/espresso',
      href: 'https://www.reddit.com/r/espresso/comments/1j428zl/newbies_youll_be_happy_with_the_breville_bambino/',
    },
  ],
  ownership: {
    intro:
      'Treat the Bambino Plus as a capable appliance rather than a forever platform. Soft water, immediate steam-wand care and the guided cleaning cycle matter more here than buying decorative accessories.',
    cleaning: {
      caption: 'Breville Bambino Plus cleaning schedule',
      columns: [
        { key: 'task', label: 'Task' },
        { key: 'frequency', label: 'Frequency' },
        { key: 'reason', label: 'Why' },
      ],
      rows: [
        { task: 'Flush group and rinse basket', frequency: 'Daily', reason: 'Stops coffee oils turning stale.' },
        { task: 'Wipe and purge steam wand', frequency: 'After every milk drink', reason: 'Prevents baked-on milk and blocked holes.' },
        { task: 'Deep-clean baskets', frequency: 'Weekly', reason: 'Keeps flow and flavor consistent.' },
        { task: 'Cleaning tablet cycle', frequency: 'When prompted', reason: 'Cleans the internal coffee path.' },
        { task: 'Descale', frequency: 'Based on water and prompt', reason: 'Scale damages heat and flow performance.' },
      ],
    },
    issues: [
      'Sour shots usually point to grind size, a cold portafilter or a roast that needs more temperature than the machine offers.',
      'Automatic milk stopping early usually starts with a blocked wand tip, poor jug contact or a dirty temperature sensor.',
      'A leaking group may be coffee on the basket rim, an overfilled basket or a worn gasket.',
      'Persistent control faults, repeated shutdowns or group leaks after cleaning should go to Breville support rather than becoming a speculative repair project.',
    ],
    upgrades: [
      { title: '1. Grinder', body: 'This changes espresso more than replacing the portafilter. Buy it before cosmetic accessories.' },
      { title: '2. Scale', body: 'A 0.1 g scale makes dose and yield visible, which shortens dial-in time.' },
      { title: '3. Basket and tamper', body: 'A quality 54 mm basket and correctly sized tamper improve edge coverage and repeatability.' },
      { title: '4. Distribution tool', body: 'A simple WDT tool and funnel reduce clumps and mess in the deeper 54 mm puck.' },
    ],
    usedChecklist: [
      'Run a blank shot and a real shot; watch for flashing, shutdowns and weak flow.',
      'Lock in the portafilter and check for group-head leaks.',
      'Run automatic milk twice and confirm it completes both cycles.',
      'Test every button more than once and ask what water the owner used.',
      'Walk away from recurring sensor faults unless the price assumes a failed machine.',
    ],
  },
  resources: [
    {
      label: 'Official Bambino Plus product page',
      href: 'https://www.breville.com/en-us/product/bes500',
      note: 'Current US price, specifications and included accessories.',
    },
    {
      label: 'Breville instruction manual',
      href: 'https://assets.breville.com/BES500/BES500_USCM_IB_Y25_LR.pdf',
      note: 'First-use, programming, cleaning and troubleshooting instructions.',
    },
    {
      label: 'Breville product support hub',
      href: 'https://www.breville.com/en-us/producthub/bes500',
      note: 'Support articles, registration and replacement parts.',
    },
    {
      label: 'Breville warranty and repairs',
      href: 'https://www.breville.com/en-us/support/warranty',
      note: 'Current warranty terms and repair route.',
    },
    {
      label: 'Owner discussion on r/espresso',
      href: 'https://www.reddit.com/r/espresso/comments/1j428zl/newbies_youll_be_happy_with_the_breville_bambino/',
      note: 'Anecdotal owner experiences, useful for workflow context rather than failure-rate estimates.',
    },
  ],
  faqs: [
    {
      question: 'Is the Bambino Plus worth the extra money over the Bambino?',
      answer: 'Yes for households making milk drinks most days. The espresso core is similar, so the premium mainly buys automatic milk, a larger tank and easier multi-user operation.',
    },
    {
      question: 'Do I need a real espresso grinder?',
      answer: 'Yes if you want to use the single-wall basket and control extraction. Pre-ground coffee can work in the dual-wall basket, but it lowers the quality ceiling.',
    },
    {
      question: 'Why are my shots sour?',
      answer: 'Warm the portafilter with a blank shot, grind finer and confirm the dose and yield on a scale. Very light coffee can remain sharp because brew temperature is not adjustable.',
    },
    {
      question: 'Does the 54 mm portafilter hurt espresso quality?',
      answer: 'No. It creates a deeper puck and asks for careful distribution, but it can make excellent espresso. The practical drawback is a smaller accessory ecosystem than 58 mm.',
    },
    {
      question: 'Can the Bambino Plus steam milk manually?',
      answer: 'Yes. Automatic texturing is the headline feature, but you can use the wand manually when you want more control.',
    },
    {
      question: 'How often should I descale it?',
      answer: 'Follow the machine prompt and adjust to your water hardness. Filtered, espresso-safe water reduces scale; distilled or fully demineralized water is not the answer.',
    },
  ],
  finalVerdict: [
    'The Bambino Plus gets the part most beginner machines miss: it removes delay without hiding the espresso process. You still grind, dose and tamp, but PID control, pre-infusion and automatic milk make success repeatable enough to keep learning enjoyable.',
    'Choose the Plus when milk convenience is worth the premium. Choose the standard Bambino when you want the same fast espresso foundation with manual steaming and fewer automation parts. Skip both if adjustable brew temperature, 58 mm hardware or long-term repairability matter more than speed.',
  ],
};
