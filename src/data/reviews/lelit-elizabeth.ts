import type { MachineReviewData } from '../reviews';
import { faqHtml, internalHref } from '../batch-review-builder';

const section = (id: string, title: string, html: string) => ({ id, title, html, eyebrow: '' });
const cite = (id: string, label: string) => `<a href="#${id}">${label}</a>`;
const link = (path: string, label: string) => `<a href="${internalHref(path)}">${label}</a>`;
const source = (id: string, label: string, href: string, note: string) => ({ id, label, href, note });

const classic = 'https://www.lelit.com/product/elizabeth-pl92t/';
const usStore = 'https://www.lelit.com/en-us/product/elizabeth-pesel01';
const clive = 'https://clivecoffee.com/products/lelit-elizabeth-dual-boiler-espresso-machine';

const alternatives = [
  { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', reason: 'Choose it for a larger steam reserve. Its 1 L steam boiler has more capacity than the Elizabeth’s 0.6 L, and you stop the shot at the switch. Neither specification times your third pitcher.' },
  { name: 'Lelit MaraX PL62X', href: '/espresso-machine/lelit-mara-x/', reason: 'Choose it if you want the E61 group and lever ritual. Its heat exchanger shares a heat source between coffee and steam. The Elizabeth lets you set the two boiler temperatures separately.' },
  { name: 'Breville Dual Boiler BES920', href: '/espresso-machine/breville-dual-boiler-bes920xl/', reason: 'Choose it if you want shots to stop by measured water volume. The US BES920 manual lets you switch the buttons from their time-based default to volume. A scale still tells you what reached the cup.' },
  { name: 'Profitec MOVE', href: '/espresso-machine/profitec-move/', reason: 'Choose it if your first espresso has an appointment. Its built-in on/off schedule can start the warm-up before you reach the kitchen.' },
];

const questions = [
  { question: 'Which baskets and water filter come with the Elizabeth?', answer: 'Lelit’s current PL92T equipment list includes 9–11 g and 14–18 g IMS baskets, a blind basket for cleaning, and a 35 L softener filter. Check the seller’s box contents before ordering extras, especially for an older or open-box machine.' },
  { question: 'Is the classic Elizabeth discontinued?', answer: 'Lelit still lists the PL92T and its US store offered the classic Elizabeth when we checked on November 25, 2026. That establishes a current buying route. Lelit gives no end-of-production date on those pages.' },
  { question: 'Can the Elizabeth connect to a water line?', answer: 'The PL92T draws from its removable 2.5 L reservoir. A plumbed-in coffee station needs a different machine.' },
  { question: 'Does it need a separate grinder?', answer: 'For whole beans, yes. Choose a grinder with fine espresso adjustments. If a small grind change sends the shot from a trickle to a gush, the Elizabeth’s saved timer cannot make up the difference.' },
  { question: 'How loud is the pump?', answer: 'Dave Corbey called the revised PL92T quiet in his kitchen. It uses a vibration pump, and his listening impression gives no decibel level. If noise matters in an open-plan home, listen to a cold fill as well as an extraction at a dealer.' },
  { question: 'Where can I find the PL92T manual?', answer: 'The sources below include the original user manual and Lelit’s 2021 extended guide. The extended guide covers both coffee buttons, the steam-boiler switch and the group wash cycle. Use the manual supplied with your revision for the exact button sequence.' },
];

export const lelitElizabethReview: MachineReviewData = {
  slug: '/espresso-machine/lelit-elizabeth/', productId: 'CD-EM-000001',
  brand: 'Lelit', model: 'Elizabeth PL92T', sku: 'PL92T-120',
  category: 'Dual-boiler semi-automatic espresso machine', brandPath: '/lelit/',
  brandLinkLabel: 'More Lelit espresso machine reviews',
  title: 'Lelit Elizabeth V2 review (PL92T) for a two-latte morning',
  description: 'How the Lelit Elizabeth V2 (PL92T) handles two lattes, how much warm-up the first espresso needs, and how to tell the classic from the Elizabeth 3 Pagaia.',
  verdictLabel: 'For two milk drinks and a planned start',
  verdict: 'I’d buy the classic Lelit Elizabeth for a kitchen where two people want a flat white before work. You can steam one drink while pulling the next shot, and save a different preinfusion routine for the weekend beans. The catch comes before either cup. Give the machine 25–30 minutes from cold. If you switch it on only when you want coffee, I’d spend the money elsewhere.',
  assessment: 'A compact dual boiler for two-drink mornings and owners who enjoy dialing in espresso.',
  image: 'images/products/lelit-elizabeth.jpg',
  imageAlt: 'Lelit Elizabeth PL92T on a kitchen counter beside a separate grinder, with a scale on the drip tray',
  published: '2025-11-03', updated: '2026-11-25',
  author: {
    name: 'Aleksandar Spasevski', role: 'Editor at Coffeedant',
    image: 'images/author-aleksandar-spasevski.jpg', imageAlt: 'Aleksandar Spasevski, editor at Coffeedant',
    note: 'I compared published PL92T tests, operating guides and accounts from people who own the machine.',
  },
  price: { label: 'Lelit US listed price', msrp: '$1,799.95', numeric: '1799.95', currency: 'USD', typical: 'Lelit US machine-only price. Grinder sold separately.', checked: 'November 25, 2026' },
  links: [
    { label: 'Check the Elizabeth at Clive Coffee', href: clive, primary: true },
    { label: 'Check Lelit US pricing', href: usStore },
    { label: 'Check Amazon availability', href: 'https://amzn.to/4j2hL7C', affiliate: true },
  ],
  facts: [
    { label: 'Model reviewed', value: 'Classic PL92T · US model PL92T-120' },
    { label: 'Boilers', value: '300 ml brass for espresso · 600 ml stainless steel for steam and hot water' },
    { label: 'Group and controls', value: '58 mm group · two timed coffee buttons' },
  ],
  quickAnswers: questions,
  bestFor: ['Two or three home milk drinks in one session', 'Espresso drinkers who want to experiment with preinfusion'],
  avoidIf: ['The first espresso needs to be ready a few minutes after switching on', 'You need a plumbed machine or a profiling paddle'],
  pros: ['Simultaneous brewing and steaming', 'Two independently programmable coffee buttons'],
  cons: ['A long warm-up for the first espresso', 'Rear tank access under cabinets'],
  evaluation: {
    basis: { kind: 'research-led', label: 'Research-led review', disclosure: 'Coffeedant did not bench-test the Elizabeth. Measurements and tasting observations are attributed to their original testers.' },
    scale: 10, dimensions: [],
  },
  alternatives,
  article: {
    sections: [
      section('orientation', 'Elizabeth V2, V3 or V4? Start with the model plate', `
        <p>The machine in this review is the <strong>Lelit Elizabeth PL92T</strong>, often called the Elizabeth V2. In the US, look for <strong>PL92T-120</strong>. If you can see a wooden profiling paddle beside the group, you’re looking at the <strong>Elizabeth 3 Pagaia (PL92T3)</strong>. That extra digit buys different hardware. ${cite('eliz-official', 'Classic specifications')} · ${cite('eliz-successor', 'Pagaia specifications')}.</p>
        <div class="review-table-wrap" role="region" aria-label="Elizabeth model identification" tabindex="0"><table class="review-table">
          <caption>Two machines you can tell apart in a listing photo</caption>
          <thead><tr><th scope="col">What to check</th><th scope="col">Classic Elizabeth · PL92T</th><th scope="col">Elizabeth 3 Pagaia · PL92T3</th></tr></thead>
          <tbody><tr><th scope="row">Control during a shot</th><td>Buttons with programmable time and preinfusion</td><td>Electronic Pagaia paddle and saved pressure profiles</td></tr>
          <tr><th scope="row">Brew / steam boilers</th><td>300 / 600 ml</td><td>200 / 600 ml</td></tr>
          <tr><th scope="row">Published width</th><td>32 cm</td><td>36 cm</td></tr></tbody>
        </table></div>
        <p>Why do older Elizabeths also turn up as “V3”? Reviewers used that label for a revision of the classic years before the Pagaia arrived. Dave Corbey documents the classic’s 2020 revision, and Home Grounds calls its paddle-free sample a V3. A listing headed “V3” or “V4” deserves a photo of the model plate. For a claimed V4 upgrade, ask the seller to name the changed part or software version. ${cite('eliz-corbey', 'Corbey’s revision notes')} · ${cite('eliz-homegrounds', 'Home Grounds’ review')}.</p>`),
      section('workflow', 'How long does the first espresso really take?', `
        <p>Plan on <strong>25–30 minutes from cold</strong>, with the portafilter fitted. Coffee Kev saw the ready indication at about eight minutes. Kaffeemacher measured what the first shot actually gets. In its 2026 retest, an extra five minutes of warm-up changed the first extraction by nearly 6 °C. ${cite('eliz-kev', 'Coffee Kev’s timing')} · ${cite('eliz-kaffee', 'Kaffeemacher’s retest')}.</p>
        <div class="review-table-wrap" role="region" aria-label="PL92T measured brew temperatures" tabindex="0"><table class="review-table">
          <caption>Kaffeemacher’s PL92T set to 94 °C · average temperature during seconds 5–25 of extraction</caption>
          <thead><tr><th scope="col">When they pulled the shot</th><th scope="col">Measured temperature</th></tr></thead>
          <tbody><tr><th scope="row">First shot after a 20-minute warm-up</th><td>84.8 °C</td></tr>
          <tr><th scope="row">First shot after a 25-minute warm-up, in a separate run</th><td>90.7 °C</td></tr>
          <tr><th scope="row">Shots 2–5 in the 25-minute run, one minute apart</th><td>92.5–94.0 °C</td></tr></tbody>
        </table></div>
        <p>That’s one test machine. If the first espresso tastes thin and the second tastes right, repeat tomorrow’s first shot with a longer warm-up before moving the grinder. Otherwise you may spend breakfast fixing yesterday’s perfectly good grind.</p>`),
      section('milk', 'Can it make two lattes back to back?', `
        <p><strong>Yes, at a home pace.</strong> The coffee and steam boilers work together, so you can pull espresso and texture milk at the same time. Coffee Kev timed 170 ml of milk to 60 °C in roughly 24–33 seconds depending on the steam setting. That tells you how one small pitcher behaved. It leaves open how quickly a second large pitcher would finish. ${cite('eliz-kev', 'Coffee Kev’s steaming test')}.</p>
        <p>For two flat whites, pull the first shot, steam and pour, then grind the second dose and rinse the pitcher. One PL92T owner reports that the steam is ready again by the time they refill the jug. Artisti’s barista could establish a steady whirlpool in a 600 ml jug. That number is the size of the jug, so keep Kev’s 170 ml as the timed milk quantity. ${cite('eliz-owner-milk', 'Owners on consecutive drinks')} · ${cite('eliz-artisti', 'Artisti’s milk demonstration')}.</p>
        <p>If your usual order is six large lattes and someone else is prepping pucks, ask for a demonstration with <em>your</em> pitcher size. The pauses that make two drinks comfortable in a home kitchen disappear quickly when two people work the machine.</p>`),
      section('espresso', 'What the two coffee buttons can do for your espresso', `
        <p>Each button remembers a brewing time and a preinfusion duration. Think of them as two recipes. One can run straight through for your usual blend. On the other you can wet a lighter roast before full-pressure extraction. Kaffeemacher’s tasters preferred steam-assisted preinfusion with their lighter coffees. With their darker robusta espresso, they tasted little change. ${cite('eliz-extended', 'Lelit’s button settings')} · ${cite('eliz-kaffee', 'The tasting comparison')}.</p>
        <p><strong>Can you save a 36 g shot?</strong> Dial in with a scale, then save the time it took to reach 36 g. The machine stops on the clock. A finer grind or a fresh bag changes how much espresso arrives in those seconds. Reweigh the first cup after either change.</p>
        <p><strong>Does preinfusion work with steam switched off?</strong> Later PL92T software supports a brief pump run followed by a pause to let the puck soak. Steam-assisted preinfusion uses the charged steam boiler. Earlier operating instructions describe different steam-off behavior, so match the guide to your unit, especially when buying used. For a visual guide, Lance Hedrick pulls contrasting light- and dark-roast shots on his classic Elizabeth. ${cite('eliz-extended', 'Extended guide, pp. 20–21')} · ${cite('eliz-manual', 'Earlier instructions')} · ${cite('eliz-lance', 'Hedrick’s demonstration')}.</p>`),
      section('setup', 'Will it fit under your cabinets and over your favorite mug?', `
        <p>Lelit lists <strong>32 cm wide × 38 cm deep × 38 cm tall</strong> (about 12.6 × 15 × 15 in). Kaffeemacher measured <strong>43 cm, or 17 in, front to back</strong> with the portafilter installed and the power cable projecting behind. Mark that depth on the counter. Then check whether you can reach the tank at the back from above, with the grinder in its usual spot. ${cite('eliz-official', 'Lelit dimensions')} · ${cite('eliz-kaffee', 'Measured working depth')}.</p>
        <p>Bring your mug <em>and</em> its downstairs neighbor, the scale. Julia Bobak at Home Grounds measured about 4 in (10 cm) between the spout and drip tray on her unit. She only got past 5.5 in by removing the grate and fitting her own bottomless portafilter. For a tall travel mug, pulling into a small cup and pouring across is the easier fix. ${cite('eliz-homegrounds', 'Bobak’s clearance measurement')}.</p>`),
      section('build', 'Cleaning, common problems and the used-machine check', `
        <p>Wipe and purge the steam wand after each milk drink. Use the blind basket and the cleaning cycle in the PL92T manual to backflush coffee oils from the group. Scale builds up elsewhere, inside the water circuit. Lelit directs owners to have a reseller assess descaling and warns against adding descaler to the tank. For the tank softener, follow the capacity guidance for the filter fitted to your machine. ${cite('eliz-manual', 'PL92T cleaning instructions')} · ${cite('eliz-extended', 'Water filter and service guidance')}.</p>
        <aside class="review-community-evidence" aria-labelledby="elizabeth-owner-accounts"><h3 id="elizabeth-owner-accounts">What three years looked like for two owners</h3>
          <ul><li>One owner made one or two drinks a day, regularly steamed milk and reported trouble-free use approaching the three-year mark.</li>
          <li>Another pulled two to eight shots daily for three years and reported replacing the steam valve stem and the steam boiler’s safety valve.</li></ul></aside>
        <p>Those accounts suggest what to inspect on a used machine. Request a cold-start demonstration, pull a shot, then have the seller steam milk. After the wand is closed, watch for a persistent drip. Check the reservoir and the surface under the machine for leaks. Ask what water went in, which parts were replaced and who did the work. Two owners can give you good questions. They can’t give you a failure rate. ${cite('eliz-owner-repairs', 'The owners’ original accounts')}.</p>`),
      section('comparisons', 'Elizabeth vs Silvia Pro X, MaraX and the other compact dual boilers', `
        <ul>${alternatives.map(item => `<li><strong>${link(item.href, item.name)}.</strong> ${item.reason}</li>`).join('')}
          <li><strong>Comparing a used Profitec Pro 300?</strong> Its PID display sets brew temperature and shows shot time, and the separate steam boiler holds 0.75 L. The reason to favor the Elizabeth is its two programmable preinfusion routines. ${cite('eliz-pro300', 'Profitec’s Pro 300 specifications')}.</li></ul>
        <p>See the manufacturers’ details for the ${cite('eliz-silvia', 'Silvia Pro X')}, ${cite('eliz-marax', 'MaraX PL62X')}, ${cite('eliz-bes920', 'BES920 manual')} and ${cite('eliz-move', 'MOVE scheduling')}.</p>`),
      section('faq', 'A few practical questions before you buy', faqHtml(questions)),
    ],
    methodology: `<p>Coffeedant did not bench-test the Elizabeth. I used Lelit’s model sheets and manuals for what the machine does, Kaffeemacher’s instrumented retest for first-shot temperature, and independent reviewers’ demonstrations for milk, cup clearance and controls. Owner accounts inform the used-buying checklist. This verdict applies to the classic PL92T. ${link('/testing/', 'How Coffeedant reviews equipment')}.</p>`,
    sources: [
      source('eliz-official', 'Lelit · Elizabeth PL92T', classic, 'Classic model codes, boiler materials, measurements and controls.'),
      source('eliz-successor', 'Lelit · Elizabeth 3 PL92T3', 'https://www.lelit.com/product/elizabeth3-pl92t3/', 'Pagaia controls, boiler capacities and dimensions.'),
      source('eliz-kaffee', 'Kaffeemacher · PL92T measurements and October 2026 retest', 'https://kaffeemacher.de/en/blogs/coffee-knowledge/lelit-elizabeth', 'Separate cold-start runs, per-shot temperatures, tastings and counter measurements.'),
      source('eliz-kev', 'Coffee Kev · Classic Elizabeth review', 'https://coffeeblog.co.uk/lelit-elizabeth-review/', 'Ready indication and milk steaming on the reviewer’s machine.'),
      source('eliz-artisti', 'Artisti Coffee Roasters · Elizabeth workflow demonstration', 'https://artisticoffee.com/blogs/product-reviews/review-is-the-lelit-elizabeth-a-good-value-dual-boiler-coffee-machine', 'Retailer demonstration of extraction and milk texturing.'),
      source('eliz-homegrounds', 'Julia Bobak, Home Grounds · PL92T review', 'https://www.homegrounds.co/lelit-elizabeth-review/', 'Spouted portafilter clearance and the reviewer’s modified setup.'),
      source('eliz-corbey', 'Dave Corbey · Revised 2020 Elizabeth and LCC guide', 'https://coffeeequipmentreviews.wordpress.com/2020/05/08/lelit-elizabeth/', 'Dates the early revision and describes the pump sound.'),
      source('eliz-lance', 'Lance Hedrick · Classic Elizabeth demonstration', 'https://www.youtube.com/watch?v=qw1MtYtwIrs', 'The light-roast demonstration starts at 11:27 and the dark-roast demonstration at 13:14.'),
      source('eliz-extended', 'Lelit · 2021 PL92T extended guide (PDF)', 'https://www.maxicoffee.com/images/pdf/TECH_PL92T_ELIZABETH_extended_guide_2021_REV00.pdf', 'Button programming, preinfusion, water treatment and care.'),
      source('eliz-manual', 'Lelit · Earlier PL92T user manual (PDF)', 'https://links.imagerelay.com/cdn/2615/ql/a9eab104e81b45f2bd5546efbdd445a9/Lelit-Elizabeth-User-Manual.pdf', 'Original operating and backflushing instructions.'),
      source('eliz-owner-milk', 'Elizabeth owners · Consecutive milk drinks', 'https://www.reddit.com/r/Lelit/comments/1p8d9zf/lelit_elizabeth_milk_drinks_question/', 'Owners describe pitcher sizes and the pause between drinks in their own kitchens.'),
      source('eliz-owner-repairs', 'Elizabeth owners · Three-year service experiences', 'https://www.reddit.com/r/espresso/comments/1cfl4dq/talk_me_out_of_buying_the_lelit_elizabeth/', 'Contrasting accounts with daily use and specific repairs.'),
      source('eliz-silvia', 'Rancilio · Silvia Pro X specifications', 'https://www.ranciliogroup.com/rancilio/silvia-pro-x/silvia-pro-x/', 'Brew and steam boiler sizes.'),
      source('eliz-marax', 'Lelit · MaraX PL62X', 'https://www.lelit.com/product/marax-pl62x/', 'Heat-exchanger design and operating modes.'),
      source('eliz-bes920', 'Breville · US BES920 manual (PDF)', 'https://assets.breville.com/BES920/BES920_USCM_IB_Y23_LR.pdf', 'Page 17 covers time and volume settings.'),
      source('eliz-move', 'Profitec · MOVE', 'https://www.profitec-espresso.com/en/products/move', 'Automatic switch-on and switch-off times.'),
      source('eliz-pro300', 'Profitec · Pro 300', 'https://www.profitec-espresso.com/en/products/pro300', 'PID controls, shot timer and boiler sizes.'),
      source('eliz-us-store', 'Lelit US · Classic Elizabeth', usStore, 'US buying route checked November 25, 2026.'),
      source('eliz-warranty', 'Lelit US · Limited warranty', 'https://www.lelit.com/en-us/support/warranty', 'North American manufacturer coverage and eligibility.'),
    ],
    finalTitle: 'Where to buy the classic Lelit Elizabeth',
    finalVerdict: ['For a US purchase, confirm PL92T-120, the baskets in the box and who handles repairs. Lelit’s North American limited warranty runs for 12 months from purchase and is non-transferable. A dealer may offer additional coverage under its own terms.'],
  },
  video: {
    id: 'qw1MtYtwIrs', title: 'Dual Boiler? Look no Further: Lelit Elizabeth Review', creator: 'Lance Hedrick', published: '2025-05-19',
    note: 'Independent demonstration of shot preparation on the classic Elizabeth.',
  },
};
