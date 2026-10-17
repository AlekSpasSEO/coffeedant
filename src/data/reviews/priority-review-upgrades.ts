import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { comparisonTablesHtml, internalHref, recommendationCardsHtml } from '../batch-review-builder';

// Applied after dated factual refreshes. These six edits replace stock copy;
// they do not change product identity, evidence basis or editorial scores.
type SectionEdit = { title: string; html: string };
type Upgrade = {
  productId: string;
  title?: string;
  description?: string;
  sections: Record<string, SectionEdit>;
  sources?: MachineReviewData['article']['sources'];
  diagnostics?: Partial<Record<ReviewDimensionId, Array<{ signal: string; guidance: string }>>>;
};

const ref = (...ids: string[]) => ids.map(id => `<a href="#${id}">[source]</a>`).join(' ');
const link = (slug: string, label: string) => `<a href="${internalHref(slug)}">${label}</a>`;
const tip = (title: string, text: string) => `<aside class="review-pro-tip"><h3>Pro tip: ${title}</h3><p>${text}</p></aside>`;

const upgrades: Record<string, Upgrade> = {
  '/espresso-machine/lelit-elizabeth/': {
    productId: 'CD-EM-000001',
    title: 'Lelit Elizabeth review: two drinks, two preinfusion choices',
    description: 'Lelit Elizabeth PL92T review: timed shots, steam and bloom preinfusion, two-drink workflow, ownership and the separate PL92T3 successor explained.',
    sections: {
      espresso: {
        title: 'Choose a preinfusion mode before chasing a longer shot time',
        html: `<p>Elizabeth's most useful coffee feature is the ability to approach the first seconds of extraction in different ways. Steam-assisted preinfusion wets the coffee under low pressure from the steam system. Bloom preinfusion instead introduces water, pauses, then resumes pumping. They are different experiments, and the steam boiler's operating state matters. Check the extended guide and firmware before copying a button sequence. ${ref('priority-elizabeth-guide', 'priority-elizabeth-kev')}</p>
          <p>Begin with one bean, a dose suited to the supplied basket and a weighed output. Use a simple recipe without adding a long pause, establish a grind that tastes reasonable, then compare one preinfusion change at the same dose and beverage mass. Record whether your timer includes wetting and soaking. A 35-second recipe with a pause cannot be judged against a 25-second continuous extraction by the clock alone.</p>
          <p>Do not confuse the two programmable coffee buttons with gravimetric dosing. The PL92T stops on time; it cannot recognize that yesterday's grind now produces more liquid. Recheck the cup on a scale after changing beans, grind or preinfusion. The pressure gauge is useful context, but a particular needle position does not prove even extraction or a sweeter drink.</p>
          ${tip('keep one button as your reference', 'Once a straightforward recipe tastes good, leave one brew button unchanged and use the other for experiments. Write down both settings before changing advanced menus. Returning to a known recipe is much more useful than trying to remember which of several simultaneous changes improved the cup.')}
          <p>If the first shot differs from the second, repeat the same warm-up and flush routine before changing grind. Owner reports do not establish a universal pressure fault; persistent deviations need seller support. ${ref('priority-elizabeth-owners')}</p>`,
      },
      milk: {
        title: 'Make two flat whites without turning simultaneous steaming into a juggling act',
        html: `<p>The separate 600 ml steam boiler lets the PL92T brew while you texture milk. That removes the brew-to-steam temperature change of a single boiler; it does not remove dosing, tamping or cleaning. The established machine uses an insulated multidirectional wand with a two-hole tip. Its value is especially clear when the household repeats two milk drinks rather than making one occasional cappuccino. ${ref('priority-elizabeth-product')}</p>
          <p>For the first few sessions, brew and steam consecutively even though the machine permits overlap. Find a stable pitcher position, add a little air early and then concentrate on a rolling milk surface. Once that movement is repeatable, begin steaming during extraction while keeping the scale and stop button in view. Close the steam valve before removing the pitcher, then wipe and purge promptly.</p>
          ${tip('prepare the second dose before starting the first drink', 'Set out both cups, weigh the second dose into a separate dry container and fill the pitcher before brewing. Keep the second basket dry until it is needed. This removes a preparation bottleneck without leaving a loaded portafilter heating in the group while the first drink is finished.')}
          <p>If a larger jug loses the rolling movement or steam pace drops, reduce the fill and let the boiler recover. The 600 ml specification is boiler capacity, not a promised continuous milk batch.</p>
          <p>If you rarely steam, the ${link('/espresso-machine/profitec-go/', 'original Profitec GO')} may cover the espresso requirement with a smaller station. If two milk drinks are the daily baseline, Elizabeth's separate steam circuit is a more meaningful upgrade than an extra menu option.</p>`,
      },
      workflow: {
        title: 'A repeatable two-person morning, from warm-up to an empty tray',
        html: `<ol><li><strong>Before grinding:</strong> check tank level, clear the tray, heat the fitted portafilter and warm the cups. Use the same starting routine each morning.</li>
          <li><strong>First drink:</strong> dry the basket, prepare the puck, start the chosen timed button and watch beverage mass. Add simultaneous steaming only when you can stop both jobs comfortably.</li>
          <li><strong>Second drink:</strong> knock out and rinse the basket, dry it, prepare the second dose and repeat. There is no single-boiler steam-to-brew cooling step between the two.</li>
          <li><strong>Finish:</strong> wipe and purge the wand, clean the group as directed, put milk away and empty rinse water before carrying a full tray.</li></ol>
          ${tip('check tank access with cups on the warmer', 'Measure the clearance needed to lift the tank cover and handle the fill container under your actual cabinet. A machine that fits its published footprint can still force you to remove warm cups or slide a hot station forward. Make that reach part of the buying decision, not a surprise after delivery.')}
          <p>The LCC can manage automatic purge, steam-boiler enablement and standby, but those settings should simplify an already understood routine. Extra flushing changes both thermal history and tray fill. Keep it consistent while diagnosing a recipe; reducing every flush to save water can change the experiment you thought you were repeating.</p>
          <p>Elizabeth is strongest when one person wants shot experimentation and the household also needs milk drinks. For a more switch-led dual boiler with volumetric stopping, compare the ${link('/espresso-machine/gaggia-classic-gt/', 'North American Classic GT')}. For the established Lelit, check the PL92T model plate; the newer Elizabeth3 PL92T3 has a separate feature set.</p>`,
      },
      features: {
        title: 'PL92T3 is a different machine, not a free firmware upgrade',
        html: `<p>The PL92T reviewed here has timed buttons, LCC settings and two preinfusion approaches. It does not have Pagaia flow control, line-pressure preinfusion, plumbing or beverage weighing.</p><p>Lelit's separate Elizabeth3 PL92T3 record adds Pagaia, a new heated group, a 200 ml coffee boiler, programmable multistep profiles and a three-hole steam tip. Do not buy PL92T stock expecting those additions, and do not transfer PL92T3 recipes to the older controls.</p><p>Choose the established model when two-boiler milk service and its documented LCC controls already cover your routine. Verify the successor's regional stock, price, manual and support separately before making it a purchase comparison.</p>`,
      },
    },
    sources: [
      { id: 'priority-elizabeth-product', label: 'Lelit: established Elizabeth PL92T', href: 'https://www.lelit.com/product/elizabeth-pl92t/', note: 'Official boiler, control and physical specifications; PL92T rather than PL92T3. Rechecked October 17, 2026.' },
      { id: 'priority-elizabeth-guide', label: 'Lelit PL92T extended technical guide', href: 'https://www.maxicoffee.com/images/pdf/TECH_PL92T_ELIZABETH_extended_guide_2021_REV00.pdf', note: 'Manufacturer-authored extended LCC guide, hosted by a retailer. Check firmware before applying advanced settings.' },
      { id: 'priority-elizabeth-kev', label: 'Coffee Kev: Elizabeth hands-on review', href: 'https://coffeekev.com/lelit-elizabeth-review/', note: 'Independent first-person account distinguishes steam-assisted and bloom preinfusion. Its observations are not Coffeedant testing.' },
      { id: 'priority-elizabeth-owners', label: 'Elizabeth owners: everyday strengths and frustrations', href: 'https://www.reddit.com/r/Lelit/comments/1mcdhan', note: 'Self-selected reports about tank access, controls and first-shot variation. Used as inspection questions, not universal faults or reliability rates.' },
    ],
  },
  '/espresso-machine/profitec-go/': {
    productId: 'CD-EM-000220',
    title: 'Profitec GO review: espresso control, one boiler to manage',
    description: 'Original Profitec GO review: PID dial-in, Fast Heat Up, a two-cappuccino sequence, post-steam refill and a clear boundary with GO 2.0.',
    sections: {
      espresso: {
        title: 'Use the PID to repeat a recipe; use the grinder to establish it',
        html: `<p>The original GO gives an espresso-focused owner three useful pieces of feedback: selected boiler temperature, elapsed shot time and a brew-pressure gauge. They answer different questions. A stable temperature setting removes one source of guesswork; it does not choose dose, beverage mass or grind. The accessible OPV is a pressure-limit adjustment, not a control to chase during each extraction. ${ref('priority-go-kev', 'priority-go-owners')}</p>
          <p>Choose a dose that suits your basket, weigh the output and leave the pressure setting alone while establishing the grind. For example, 18 g in and 36 g out can be a starting experiment if the basket comfortably accommodates 18 g. They are not GO-specific measured targets. Taste before tightening the grind simply to force a particular time or gauge reading.</p>
          ${tip('separate a heat-up correction from a coffee correction', 'When the display requests a Fast Heat Up flush, complete the documented sequence with the portafilter heated. Do not grind finer to compensate for a cup made from an inconsistent starting state. Compare recipes only after following the same readiness routine, especially when switching between cold mornings and an already warm machine.')}
          <p>If a medium roast runs quickly and tastes weak at the same dose and output, adjust grind first. If a dark roast is consistently harsh at a sensible flow, a lower selected brew temperature is worth a controlled comparison. Note the previous setting so you can undo the experiment. The PID display represents the controlled boiler system, not a Coffeedant measurement inside the puck.</p>
          <p>The original generation has no programmable preinfusion. Do not borrow GO 2.0 menu instructions or treat pump-switch tricks as an equivalent feature. If low-pressure wetting is central to your buying decision, compare the ${link('/espresso-machine/lelit-victoria-pl91t/', 'Lelit Victoria')} and ${link('/espresso-machine/lelit-elizabeth/', 'Elizabeth')} before committing to this version.</p>`,
      },
      milk: {
        title: 'The important milk skill is managing the water left in the boiler',
        html: `<p>The GO heats the same boiler from espresso to steam temperature. Follow the original manual's steam preparation, including its controlled purges into a heat-safe container. This creates room for steam; skipping the preparation can produce a different result from the demonstration you watched. A purge is an operating step, not evidence that the boiler is defective. ${ref('priority-go-manual')}</p>
          <p>Start with one small, repeatable quantity of cold milk. Establish circulation while you still have time to correct pitcher position. A large jug is not automatically easier: more milk increases the task for a small boiler and can hide poor placement until the drink is already hot. After texturing, close the valve, switch off steam, wipe and purge the wand.</p>
          ${tip('finish the boiler refill before serving the latte', 'Treat refilling as part of steaming, not tomorrow’s startup job. With steam mode off, place a suitable heat-safe container under the group and follow the manual’s pump/refill sequence until steam gives way to water. Check the PID before making espresso again. A full reservoir does not itself establish that the boiler has been refilled.')}
          <p>Owner reports disagree about how burdensome milk service feels. That is plausible: one small cappuccino and a queue of separate large lattes are different jobs. The reports support checking your real order and jug size; they do not justify a universal steaming time or a claim that every unit behaves alike. ${ref('priority-go-routine')}</p>`,
      },
      workflow: {
        title: 'For two cappuccinos, group the coffee work before the steam work',
        html: `<p>One drink is straightforward: warm up using the display prompts, make espresso, enter steam mode, texture milk, then refill and return to brew temperature. For two drinks, avoid repeating that entire temperature cycle unless staggered service is what you actually want.</p>
          <ol><li><strong>Prepare:</strong> warm both cups, check reservoir and tray, and weigh both coffee doses.</li><li><strong>Brew:</strong> make the two espressos while the boiler remains in coffee mode. The first cup waits, so keep the sequence organized.</li><li><strong>Steam:</strong> change mode once and texture a manageable batch, or use separate pitchers with the manual's recovery and refill procedure between them.</li><li><strong>Restore:</strong> switch steam off, refill/cool as directed, clean the wand and clear the tray.</li></ol>
          ${tip('try your cup and scale together before buying', 'The spouted portafilter reduces usable clearance. Bring the actual cup and scale dimensions to the seller rather than judging the gap from a front photograph. A short receiving cup can solve the fit, but transferring espresso is another action to include in the daily routine.')}
          <p>Batching espresso reduces mode changes; it does not make the GO a simultaneous brew-and-steam machine. If the first drink waiting for the second annoys you every morning, compare ${link('/espresso-machine/lelit-elizabeth/', 'Elizabeth’s two-drink workflow')} or the ${link('/espresso-machine/rancilio-silvia-pro-x/', 'Silvia Pro X')}. If most orders are black coffee, those extra boilers may solve a problem you rarely have.</p>
          <p>Ask the seller to confirm firmware, voltage and tray/lid revision on the unit being shipped. Published Fast Heat Up times, older owner accounts and 2025 running changes do not all describe the same hardware. The ${link('/espresso-machine/rancilio-silvia/', 'stock Silvia V6')} is a useful contrast: it trades the GO's factory temperature feedback for a more manual thermostat routine.</p>`,
      },
      build: {
        title: 'Set the cleaning reminder and verify the actual US unit',
        html: `<p>The original GO's CLn reminder defaults to zero, so silence does not mean the group is clean. Only brews lasting at least 15 seconds enter its count. Set the reminder or keep a care record, and use the original manual's cleaning sequence. ${ref('refresh-20261014')}</p><p>Retain the exact 115 V/900 W manufacturer identity when retailer tables conflict over wattage, boiler or tank capacity. Ask which specification and running revision applies to the shipped unit. A parts diagram demonstrates a repair route, not local stock or a labor price.</p><p>Clean the wand immediately, empty the tray, rinse the reservoir and follow the documented group-cleaning schedule. Prevent scale with suitable water. Persistent leaks, abnormal heating or electrical symptoms need qualified support; an internal repair is not a routine owner cleaning step.</p>`,
      },
    },
    sources: [
      { id: 'priority-go-manual', label: 'Profitec: original GO operating manual via Clive', href: 'https://links.imagerelay.com/cdn/2615/ql/592afb09fc7f40ffb5b48e3b6cba5d19/Profitec-GO-Espresso-Machine-User-Manual.pdf', note: 'Manufacturer-authored March 2023 original-generation manual, steam preparation and refill in section 6.6. Later Fast Heat Up behavior depends on firmware.' },
      { id: 'priority-go-kev', label: 'Coffee Kev: original GO hands-on workflow', href: 'https://coffeekev.com/profitec-go-review/', note: 'First-person PID, steam transition and tank/lid observations. Timings are not transferred as guarantees for a US unit.' },
      { id: 'priority-go-owners', label: 'GO owner discussion: controls and ownership', href: 'https://www.reddit.com/r/espresso/comments/1gbt2gy/describe_the_pros_cons_after_2_years_of_using/', note: 'Self-selected comments distinguish PID temperature, pressure indication and OPV adjustment; no failure-rate inference.' },
      { id: 'priority-go-routine', label: 'GO owners: two-drink routines and clearance', href: 'https://www.reddit.com/r/espresso/comments/1e28n4e/profitec_go_yay_or_nay/', note: 'Comments remain available beneath a deleted opening post. Different users describe batching shots, cup fit and different steam expectations.' },
    ],
    diagnostics: {
      espresso: [
        { signal: 'First cup differs after a cold start', guidance: 'Repeat the documented UP/FLU sequence and portafilter heating before adjusting grind.' },
        { signal: 'Good flow but harsh dark-roast coffee', guidance: 'Hold dose and yield steady and compare one lower PID setting; do not move the OPV at the same time.' },
      ],
      milk: [
        { signal: 'Milk starts watery or steam feels inconsistent', guidance: 'Repeat the original manual’s steam-preparation purges with the same milk quantity before changing the setpoint.' },
        { signal: 'The next espresso starts with steam', guidance: 'Finish the documented post-steam refill and cooling sequence; check the PID before loading coffee.' },
      ],
    },
  },
  '/espresso-machine/rancilio-silvia/': {
    productId: 'CD-EM-000011',
    title: 'Rancilio Silvia review: the stock V6 routine that matters',
    description: 'Rancilio Silvia V6 review: repeatable thermostat timing, two-drink sequencing, boiler refill, used-machine checks and the price of adding a PID.',
    sections: {
      espresso: {
        title: 'Make the heating cycle repeatable before changing the coffee recipe',
        html: `<p>A stock Silvia V6 does not offer a PID temperature menu. Its thermostat cycles the boiler through a range, and the orange lamp shows heater activity rather than a measured puck temperature. That means two shots can start from different thermal states even when the dose, grind and timer look identical. Temperature surfing is an attempt to repeat a point in that cycle, not a way to turn the lamp into a thermometer. ${ref('silvia-manual', 'silvia-kev')}</p>
          <p>Heat the fitted portafilter, choose one documented preparation routine and keep its flush and wait consistent. Then use a dose that fits the supplied basket and a weighed beverage target. Make your grind corrections from comparable starts. A universal instruction to wait a particular number of seconds ignores ambient conditions, voltage, flush volume and whether the machine has just steamed.</p>
          ${tip('write down the lamp state beside the shot result', 'For a few mornings, record dose, beverage mass, time, taste and where your routine starts relative to the heater cycle. If only the first cup is sharp while later cups improve, investigate warm-up consistency before grinding progressively finer. Otherwise you can fix one cold-start symptom and make the already-warm shots worse.')}
          <p>Keep the distinction between heat and puck resistance clear. A very fast shot at the same dose and target mass usually warrants a grind/preparation check. A substantial flavor change with similar flow makes thermal history worth checking. Spraying or uneven flow calls for better distribution and tamping before an expensive accessory. None of these symptoms uniquely diagnoses a failed Silvia component.</p>
          <p>For regular light-roast experimentation, price a properly installed PID and its support implications before buying. The ${link('/espresso-machine/profitec-go/', 'Profitec GO')} provides factory temperature feedback; the ${link('/espresso-machine/rancilio-silvia-pro-x/', 'Silvia Pro X')} changes both control and milk workflow. A modified V6 and a stock V6 are different buying propositions, so the scores here remain for the stock machine.</p>`,
      },
      milk: {
        title: 'Steam is capable; the return to coffee is the hidden step',
        html: `<p>Silvia uses one boiler for brewing and steaming. Finish the espresso work, select steam mode and follow the manual's heater and purge sequence. Use a manageable cold-milk fill, introduce air early and position the tip for circulation. Strong steam still requires a suitable jug and a clean tip; it does not automatically produce integrated microfoam. ${ref('silvia-manual', 'silvia-kev')}</p>
          <p>Close the valve before removing the pitcher, switch steam off, wipe and purge. Then complete the manual's boiler-filling procedure. Leaving the reservoir full is not the same as replacing the water consumed by steaming. Do not leave the machine in steam mode while serving the drink and assume it will look after the next espresso for you.</p>
          ${tip('keep a refill pitcher beside the knock box', 'Give the post-steam hot-water collection vessel a permanent place. It makes restoring the boiler an obvious final action rather than a step you postpone with a latte in your hand. Use a heat-safe vessel and the insulated controls; keep hands clear of the hot discharge.')}
          <p>For two cappuccinos, making both espressos before switching to steam avoids a needless heat-and-cool cycle. The compromise is that the first espresso waits. Steam one appropriately sized batch only if you can maintain control; otherwise use smaller batches and follow the required recovery/fill routine. There is no measured two-latte service time promised here.</p>
          <p>If a third person regularly joins the order, compare a dual boiler using the whole sequence, including cleaning. Silvia's steam can be satisfying for a patient single-drink owner while the same machine feels slow to a household expecting every drink to arrive together. That difference is a better buying signal than the maximum steam claim.</p>`,
      },
      ownership: {
        title: 'A used Silvia needs a water and service history, not just shiny panels',
        html: `<p>The long-running Silvia platform makes used examples tempting. A demonstration should show a cold start, normal water delivery, a shot, steam production and the return to coffee operation. Ask for the exact generation, voltage, invoices, water treatment, service history and any installed modifications. An earlier owner's positive long-term account is useful background, not proof that the unit in front of you has the same internal condition. ${ref('silvia-long', 'silvia-support')}</p>
          ${tip('price the machine you intend to own after six months', 'Write down the used purchase price, likely inspection, grinder, scale, water treatment and any professionally installed PID you already expect to want. Compare that total with an authorized new GO. A low entry price stops being a saving if the planned upgrades immediately consume the difference.')}
          <p>Inspect the group seal area and visible tray/base condition, listen during normal pumping and ask the seller to demonstrate that steam and water controls close correctly. A persistent leak, electrical trip or abnormal heating behavior needs qualified diagnosis. Do not buy on the assumption that every fault is a cheap gasket, and do not open a powered machine as a buyer's inspection.</p>
          <p>For ongoing care, use the exact manual's cleaning and backflush instructions, protect the boiler with suitable water and keep the steam tip clean. Add the post-steam refill to every milk session. A PID can improve temperature control; it cannot reverse scale damage, remove the single-boiler transition or supply a missing service history.</p>
          <p>The stock V6 suits someone who accepts a deliberate routine and values an established service platform. If you want to avoid thermostat timing, buy the control system you need at the start. If you want simultaneous milk, compare the ${link('/espresso-machine/gaggia-classic-gt/', 'Classic GT')} and ${link('/espresso-machine/lelit-elizabeth/', 'Elizabeth')} rather than expecting a PID modification alone to change Silvia's architecture.</p>`,
      },
    },
  },
  '/espresso-machine/gaggia-accademia-ri9781-01/': {
    productId: 'CD-EM-000164',
    title: 'Gaggia Accademia review: choose your milk routine first',
    description: 'Gaggia Accademia Glass RI9781/01 review: carafe versus wand, Espresso Plus dial-in, profiles, rinse-water handling and exact 230 V regional scope.',
    sections: {
      espresso: {
        title: 'Dial in a short coffee before adding Espresso Plus and milk',
        html: `<p>Accademia offers several controls that can be mistaken for the same strength adjustment. Grind changes particle size; aroma/boost changes the automatic coffee preparation; drink length changes the amount dispensed; temperature and prebrewing change other parts of the recipe. Espresso Plus adds an outlet flow/body adjustment. Moving all of them together makes a disappointing cup harder to diagnose. ${ref('gaggia-accademia-ri9781-01-source-2', 'priority-accademia-coffeeness')}</p>
          <p>Start with a short black coffee from one bean. Choose one aroma level, temperature and Espresso Plus position, then compare a modest change in drink length. A large watery milk drink often benefits from a stronger coffee component or less milk, not from sending more water through the same coffee preparation. Use a second coffee preparation if that is what your preferred drink requires.</p>
          ${tip('save a working coffee before creating four personal menus', 'Establish one black-coffee recipe, then build the milk drink around it and save that result. Keep a note of its grind and Espresso Plus position. Profiles do not turn the single physical grinder and outlet dial into four independent bean paths; another person changing those controls can alter your saved drink.')}
          <p>Only adjust the grinder according to the exact manual, in small permitted steps, and allow subsequent drinks to reflect the change before judging it. The screen's recipe is not a displayed dose in a portafilter. Do not import an 18 g manual-machine recipe or assume the finest setting is automatically the best espresso.</p>
          <p>The independent Coffeeness review illustrates the unusual live outlet control. Its tasting belongs to that reviewer; here the buying conclusion is narrower: Accademia gives an automatic-machine owner useful adjustment without the direct grinder, puck and pressure access of a separate espresso station.</p>`,
      },
      milk: {
        title: 'Carafe on busy mornings, wand when texture is worth the attention',
        html: `<p>The reason to shortlist Accademia is the choice between a programmed milk carafe and a separate manual wand. The carafe suits someone who wants the saved drink with fewer decisions. The wand suits someone willing to control air and circulation for a particular texture. Neither route makes the other milk path clean automatically. ${ref('gaggia-accademia-ri9781-01-source-2')}</p>
          <p>Set up the carafe with cold milk and begin with a cup whose volume matches the saved recipe. Taste the coffee-and-milk balance before increasing foam or serving size. For the wand, prepare a small repeatable pitcher, purge as directed, add air early and finish with circulation. Wipe and purge immediately after use; complete the carafe's quick-clean and scheduled disassembly separately.</p>
          ${tip('demonstrate both milk routes before paying for both', 'Ask for the same style of drink from the carafe and the wand. Judge the texture you prefer and the cleaning you will actually do. If everyone chooses the carafe, compare a Cadorna Prestige before paying the Accademia premium for a second tool that will sit unused.')}
          <p>Do not read two-cup coffee preparation as a promise of two simultaneous milk drinks. Plan a shared cappuccino order sequentially, including the quick-clean and milk return to the refrigerator. A wider menu helps mixed preferences; it does not eliminate the queue.</p>
          <p>For someone whose priority is paired automatic milk drinks rather than a manual wand, compare the ${link('/espresso-machine/miele-cm6360-milkperfection/', 'Miele CM6360')}. This Accademia page remains fixed to the European 230 V RI9781/01 Glass record; a North American demonstration cannot establish its electrical package, warranty or every recipe detail.</p>`,
      },
      workflow: {
        title: 'Plan the rinse water and milk storage alongside the drink menu',
        html: `<p>Four profiles reduce repeated menu changes, while the touchscreen makes the extensive drink list approachable. The more revealing ownership trial starts before the first coffee and ends after the last milk rinse: fill water, fit the carafe, make the household order, return milk to the refrigerator, empty the tray and complete any care prompt.</p>
          ${tip('use a dedicated rinse cup, but still inspect the tray', 'Keep a stable spare cup under the dispensing outlet during the accessible rinse cycles, then remove it before brewing. Empty it promptly and check the tray normally: internal discharge still reaches the tray, and the cup does not replace the float or an emptying prompt. Owners describe this as a useful way to reduce visible rinse-water handling, not a way to bypass cleaning.')} ${ref('priority-accademia-owners')}
          <p>Measure the 42.8 cm body depth with the door, tray, carafe and filling access in mind. Put the machine where wet parts can land safely without blocking the screen or requiring the whole heavy appliance to slide forward. A glass-front photograph says little about how comfortably the tray can be carried to your sink.</p>
          <p>Separate an automatic quick rinse from a milk-system cleaning program and physical disassembly. Agree who owns the last task of the day. In a shared kitchen, a saved profile can make the drink effortless while leaving the same person to clean the carafe, wand and brew area every evening.</p>
          <p>If one-touch carafe service is the only requirement, the ${link('/espresso-machine/gaggia-cadorna-prestige/', 'Cadorna Prestige')} is the more relevant comparison than a lever machine. If accessible physical cleaning and paired drinks matter more, read the ${link('/espresso-machine/miele-cm6360-milkperfection/', 'Miele review')}. If direct espresso craft matters most, move to a separate grinder and portafilter rather than treating the Accademia's body dial as pressure profiling.</p>`,
      },
      features: {
        title: 'Four profiles personalize recipes around shared physical controls',
        html: `<p>The RI9781/01 package combines a five-inch interface, nineteen specialties, four profiles, a scheduled cup warmer, ceramic grinder and two milk tools. The useful distinction is which choices can be saved and which remain shared physical settings. ${ref('gaggia-accademia-ri9781-01-source-2')}</p><p>Give each user a stable drink recipe, but agree on the household bean and grinder position. The Espresso Plus outlet dial remains a physical adjustment, while the carafe and wand retain separate cleaning tasks. Neither a long drink list nor a large display provides direct pressure profiling or a separate grinder for each person.</p>`,
      },
      recommendations: {
        title: 'Compare the automatic routines the household will use',
        html: recommendationCardsHtml([
          { kicker: 'Carafe-led Gaggia', title: 'Cadorna Prestige', text: 'Compare four profiles and automatic milk when the separate manual wand would go unused.', href: '/espresso-machine/gaggia-cadorna-prestige/', linkLabel: 'Read the Cadorna Prestige review', featured: true },
          { kicker: 'Paired milk drinks', title: 'Miele CM6360', text: 'Compare paired recipes, eight profiles, a shared bean path and the full physical cleaning routine.', href: '/espresso-machine/miele-cm6360-milkperfection/', linkLabel: 'Read the Miele CM6360 review' },
          { kicker: 'Premium automatic rival', title: 'Jura E8', text: 'Compare guided operation, recipe choices and a different brewer-access and service model.', href: '/espresso-machine/jura-e8/', linkLabel: 'Read the Jura E8 review' },
          { kicker: 'Simpler Gaggia option', title: 'Magenta Prestige', text: 'Compare a smaller menu when the premium interface and second milk tool are unnecessary.', href: '/espresso-machine/gaggia-magenta-prestige-ri8702/', linkLabel: 'Read the Magenta Prestige review' },
        ]),
      },
    },
    sources: [
      { id: 'priority-accademia-coffeeness', label: 'Coffeeness: current-platform Accademia hands-on review', href: 'https://www.coffeeness.de/en/gaggia-accademia-review/', note: 'First-person evaluation of the interface, outlet flow dial and two milk routes. Regional specifications remain anchored to RI9781/01 documentation.' },
      { id: 'priority-accademia-owners', label: 'Accademia owner: first impressions and rinse-cup routine', href: 'https://www.reddit.com/r/superautomatic/comments/18ejkco', note: 'December 2023 current-platform owner account. Rinse collection is an anecdotal convenience tip, not evidence of tray capacity or failure incidence.' },
    ],
    diagnostics: {
      espresso: [
        { signal: 'Saved milk drink tastes weak', guidance: 'Taste its coffee component alone; shorten excessive output or reduce milk before changing all strength controls.' },
        { signal: 'Another profile changes your result', guidance: 'Check the shared physical grinder and Espresso Plus dial as well as the saved screen settings.' },
      ],
      milk: [
        { signal: 'Carafe foam changes from the previous session', guidance: 'Repeat milk type and cold fill, check assembly and complete the documented milk cleaning before changing the recipe.' },
        { signal: 'The manual wand is rarely used', guidance: 'Compare the simpler carafe-led Gaggia alternatives; the second milk tool only adds value when used.' },
      ],
    },
  },
  '/espresso-machine/gaggia-classic-gt/': {
    productId: 'CD-EM-000174',
    title: 'Gaggia Classic GT review: a practical two-drink upgrade',
    description: 'North American 120 V Gaggia Classic GT review: manual versus automatic preinfusion, volumetric stopping, two-drink service and meaningful dual-boiler rivals.',
    sections: {
      espresso: {
        title: 'Keep the preinfusion experiment separate from the automatic stop',
        html: `<p>The North American Classic GT is a dual-boiler machine with separate PID controls, a pressure gauge and automatic or manual preinfusion. It is a different espresso station from a thermostat Classic with an aftermarket controller. Early European commentary and the updated North American launch describe different preinfusion implementations, so match the 120 V manual and delivered version before applying a review's conclusion. ${ref('priority-gt-manual', 'priority-gt-launch')}</p>
          <p>Establish a straightforward extraction with one basket, bean, dose and weighed target output. The supplied double basket is the sensible place to learn. Once a recipe tastes balanced, compare an automatic preinfusion preset while holding the final beverage mass steady. Record whether the elapsed time includes wetting and soaking. A longer total does not itself mean more extraction or better flavor.</p>
          ${tip('calibrate the saved volume with a scale', 'A volumetric stop repeats a programmed water quantity, not a measured beverage mass. After changing beans, grind, dose or preinfusion, weigh the result again and adjust the saved setting if needed. Keep the stop control within reach while dialing in; the automatic endpoint is a convenience once the recipe works, not a substitute for establishing it.')}
          <p>Manual preinfusion separates wetting, the pause and full brewing through the documented controls. Learn that sequence with the exact manual beside the machine before using it for a guest order. Do not imitate a smaller Classic's steam-valve trick on a GT, or assume a low-flow stage provides continuously variable flow profiling. Never remove the portafilter while the brewing cycle remains active. ${ref('priority-gt-manual')}</p>
          <p>Some community posts question preinfusion on other versions, but the available reports do not establish a fault affecting every GT or a promised firmware fix. Ask the seller which regional revision is being supplied and what its presets actually do. That is more useful than paying for a feature on the assumption that a future update will change it. ${ref('priority-gt-questions')}</p>`,
      },
      milk: {
        title: 'The useful upgrade from a small Classic is eliminating the temperature change',
        html: `<p>A dedicated steam boiler lets the GT steam while its brew circuit makes espresso. That is the everyday distinction from an E24, Evo or stock Silvia: you can organize milk around the extraction rather than heating one boiler up and cooling it down again. The wand remains manual, so the machine does not choose air, texture or the stopping point for you.</p>
          <p>For a two-drink order, prepare both cups and doses, then make the first espresso and milk. Begin with consecutive operations; add overlap when you can comfortably watch the coffee scale while controlling the pitcher. Use a modest fill and a consistent milk type. A change in texture is easier to diagnose when jug position and quantity stay fixed.</p>
          ${tip('start with the steam setting that gives you control', 'The strongest setting is not automatically the best learning setting. Choose a documented level that leaves time to establish circulation, repeat the same pitcher fill and increase power only when that routine is reliable. Fix a poor rolling movement before assuming the milk needs more heat.')}
          <p>Close the valve, wipe and purge the wand immediately. Refill the reservoir and clear the tray before the next household session. Two boilers reduce transitions but do not create an unlimited milk service station, and a domestic warranty should not be assumed to cover office or commercial use.</p>
          <p>If you only make one espresso, the ${link('/espresso-machine/profitec-go/', 'original GO')} may deliver the feedback you need in a smaller package. If you make two milk drinks daily, compare the GT directly with ${link('/espresso-machine/lelit-elizabeth/', 'Elizabeth')} and ${link('/espresso-machine/rancilio-silvia-pro-x/', 'Silvia Pro X')} using the controls and cleanup you prefer.</p>`,
      },
      workflow: {
        title: 'Measure the complete GT station, then rehearse a two-drink order',
        html: `<p>Classic branding can make the GT look like a familiar compact purchase. Its larger body, weight, rear access and separate grinder change the space calculation. Mark out the footprint, portafilter swing, cup-and-scale height, reservoir filling route and tray removal path on your counter. Check overhead access with cups on the warmer rather than treating the published height as the whole requirement.</p>
          <ol><li><strong>Set the station:</strong> check water and tray, fit the portafilter, complete startup and prepare both doses.</li><li><strong>Make the first drink:</strong> watch the scale even with a saved volume; steam alongside only when the routine is comfortable.</li><li><strong>Repeat:</strong> dry and reload the basket, brew the second cup and finish its milk. There is no single-boiler cooling transition.</li><li><strong>Reset:</strong> clean the group and wand, return milk to cold storage and remove rinse water.</li></ol>
          ${tip('prove the wake timer before relying on it', 'Check the clock, scheduled start and boiler settings on a morning when you can watch the machine. A scheduled heater start does not grind beans, fill the reservoir or confirm a warm cup. Keep the machine in a safe, ready state according to its manual rather than treating automation as an inspection.')}
          <p>The control layout is part of the purchase. Try the toggles and capacitive buttons, find the manual stop and navigate the temperature and preinfusion menus. Someone who enjoys direct switches may prefer it to Elizabeth's LCC; someone who values an established recipe workflow may reach the opposite conclusion. Neither preference is resolved by counting display pixels.</p>`,
      },
      features: {
        title: 'Choose independent boilers, a preferred stop mode and familiar controls',
        html: `<p>The GT combines separate PID controls, a pressure gauge, accessible OPV adjustment, a 2.4-inch screen and programmable volume. Automatic or manual preinfusion belongs to the exact delivered regional version. ${ref('priority-gt-manual')}</p><p>Use the saved volume for a working repeat recipe and manual stopping while dialing in. Turn the steam boiler off through the documented mode when it is unnecessary. Scheduled startup can reduce waiting, but check water, settings and safe placement before relying on it. The gauge supplies feedback; it does not measure extraction uniformity, and the controls do not weigh the espresso.</p>`,
      },
      comparisons: {
        title: 'Classic GT versus Elizabeth, Silvia Pro X and Breville Dual Boiler',
        html: `<p>Compare dual boilers with dual boilers before paying for the Classic badge. These alternatives change how recipes stop, how preinfusion is managed and which service network supports the machine. Check the local version and complete grinder-inclusive budget on the same date.</p>
          ${comparisonTablesHtml('Gaggia Classic GT', [
            { name: 'Gaggia Classic GT', priceClass: 'Check current local price', quickDecision: 'Choose the 120 V GT for switch-led dual-boiler control, volumetric stopping and manual or automatic preinfusion.', dimensions: '10.2 W × 16.5 D × 16.7 H in, US listing', heating: 'Separate PID brew and steam boilers', coffeeSetup: '58 mm; gauge and accessible OPV', milkWorkflow: 'Manual wand with simultaneous brewing', bestFor: 'A traditional control layout with saved volume' },
            { name: 'Lelit Elizabeth PL92T', href: '/espresso-machine/lelit-elizabeth/', priceClass: 'Compare authorized US offers', quickDecision: 'Choose timed buttons and steam-assisted/bloom preinfusion in the established PL92T package.', dimensions: '32 W × 38 D × 38 H cm', heating: '300 ml brew and 600 ml steam boilers', coffeeSetup: '58 mm; LCC timed doses', milkWorkflow: 'Manual wand with simultaneous brewing', bestFor: 'Two milk drinks and preinfusion experiments' },
            { name: 'Rancilio Silvia Pro X', href: '/espresso-machine/rancilio-silvia-pro-x/', priceClass: 'Compare authorized US offers', quickDecision: 'Choose the Rancilio dual-boiler platform and documented soft-infusion routine.', dimensions: 'Confirm Pro X access and clearance', heating: 'Dual boilers with temperature control', coffeeSetup: '58 mm; soft infusion and manual stopping', milkWorkflow: 'Dedicated steam boiler and manual wand', bestFor: 'A deliberate Rancilio workflow without stock-Silvia surfing' },
            { name: 'Breville Dual Boiler', href: '/espresso-machine/breville-dual-boiler-bes920xl/', priceClass: 'Compare exact regional model', quickDecision: 'Choose programmable brewing and preinfusion with the local Breville service package.', dimensions: 'Wider appliance layout; measure the complete station', heating: 'Dedicated espresso and steam circuits', coffeeSetup: '58 mm; programmable recipe controls', milkWorkflow: 'Simultaneous manual steaming', bestFor: 'Recipe flexibility and appliance-style controls' },
          ], 'The reviewed GT is North American 120 V. Elizabeth PL92T is separate from PL92T3, and Silvia Pro X is separate from stock Silvia. Confirm revision, warranty and seller before comparing totals.')}`,
      },
      recommendations: {
        title: 'Four routes to the right espresso station',
        html: recommendationCardsHtml([
          { kicker: 'LCC dual boiler', title: 'Lelit Elizabeth', text: 'Compare timed buttons, steam-assisted or bloom preinfusion and the two-drink routine.', href: '/espresso-machine/lelit-elizabeth/', linkLabel: 'Read the Elizabeth review', featured: true },
          { kicker: 'Rancilio alternative', title: 'Silvia Pro X', text: 'Compare a dedicated dual-boiler Rancilio rather than a modified stock Silvia.', href: '/espresso-machine/rancilio-silvia-pro-x/', linkLabel: 'Read the Silvia Pro X review' },
          { kicker: 'Espresso-first single boiler', title: 'Profitec GO', text: 'Spend for useful factory feedback without a second boiler when milk is occasional.', href: '/espresso-machine/profitec-go/', linkLabel: 'Read the original GO review' },
          { kicker: 'Recipe flexibility', title: 'Breville Dual Boiler', text: 'Compare programmable extraction, local support and the full grinder-inclusive station.', href: '/espresso-machine/breville-dual-boiler-bes920xl/', linkLabel: 'Read the Dual Boiler review' },
        ]),
      },
    },
    sources: [
      { id: 'priority-gt-manual', label: 'Gaggia Classic GT: North American manuals', href: 'https://www.gaggia-na.com/pages/gaggia-classic-gt-manuals', note: 'Exact 120 V operating instructions control wetting/soak/brew sequence and programmed volume. Reviewed October 17, 2026.' },
      { id: 'priority-gt-launch', label: 'North American GT launch and regional changes', href: 'https://www.reddit.com/r/gaggiaclassic/comments/1nl3l7h/gaggia_classic_gt_dual_boiler_espresso_machine/', note: 'Identified commercial launch post, not an independent owner review. Describes North American changes; no retailer timing adopted as a Coffeedant result.' },
      { id: 'priority-gt-questions', label: 'GT community questions about preinfusion', href: 'https://www.reddit.com/r/gaggiaclassic/comments/1t4pbmm/gaggia_classic_gt_worth_it_how_do_you_deal_with/', note: 'Small mixed discussion of other-market tests and purchase intentions. Does not confirm a universal fault, firmware promise or long-term ownership rate.' },
    ],
    diagnostics: {
      espresso: [
        { signal: 'Saved volume gives a different cup weight', guidance: 'Reweigh after bean, grind, dose or preinfusion changes and recalibrate the automatic stop.' },
        { signal: 'A preinfusion review contradicts the manual', guidance: 'Check the review’s market and GT revision; use the delivered 120 V instructions rather than an older regional sequence.' },
      ],
    },
  },
  '/espresso-machine/miele-cm6360-milkperfection/': {
    productId: 'CD-EM-000211',
    title: 'Miele CM6360 review: paired milk drinks and the care behind them',
    description: 'Exact US Miele CM6360 MilkPerfection review: eight profiles, paired milk drinks, shared grinder settings, rinse-valve care and ownership costs.',
    sections: {
      espresso: {
        title: 'Eight profiles share one grinder, so establish the household bean first',
        html: `<p>The CM6360's profiles save preferences, but they all draw from the same 300 g hopper and physical grinder. Start with the bean the household will actually share, then establish one short black drink before programming large milk recipes. Coffee amount, portion size, temperature and pre-brewing are useful automatic controls; they do not expose portafilter dose and pressure profiling. ${ref('miele-cm6360-11648190-us-source-7')}</p>
          <p>Taste the coffee component alone when a latte seems weak. Reducing excessive water or milk is often a more informative first comparison than immediately selecting maximum strength and the finest grind. Keep notes of the cup used and its finished fill so the saved recipe has a practical reference. A larger mug should not automatically mean stretching the same coffee preparation further.</p>
          ${tip('treat the grinder as a household setting', 'Agree on its position before creating personal profiles. Adjust only one level at a time, prepare a drink between changes and follow the exact manual’s sequence. Save a note of the shared setting with your preferred recipe; changing profile does not physically return the grinder to a different position.')} ${ref('miele-cm6360-11648190-us-source-2')}
          <p>DoubleShot uses a fresh coffee preparation for the second part of the drink. It is worth comparing when you want more coffee character without simply lengthening one extraction. It also uses more beans and adds work to the cycle. The bypass chute is an occasional pre-ground route, not a second hopper that automatically separates decaf and regular beans.</p>
          <p>The independent Coffeeness review reports strong aroma and hot drinks. Those sensory observations do not supply a guaranteed taste or temperature for your beans. The useful buying conclusion is that Miele provides meaningful automatic recipe adjustment while remaining a one-bean-path appliance. ${ref('miele-cm6360-11648190-us-source-4')}</p>`,
      },
      milk: {
        title: 'Paired milk is convenient only when the shared milk path stays clean',
        html: `<p>The exact US CM6360 sheet documents paired milk recipes, making this a relevant alternative to automatics that only pair black coffee. Use matching cups and establish the recipe as a single drink first. Two cups of a poorly balanced latte are not an improvement over one; tune coffee and milk quantities before making paired service the default. ${ref('miele-cm6360-11648190-us-source-7')}</p>
          <p>Keep milk cold and return it to refrigeration after the session. The glass flask is a container, not a refrigerator. If a drink seems too cool, warm the cup and check milk-path assembly and cleaning before increasing every coffee setting. Brew temperature is not a direct control of the final milk-drink temperature, and an independent review's hot cup is not a universal reading.</p>
          ${tip('separate the rinse-valve body from its silicone plug', 'The weekly valve-cleaning instructions treat these parts differently. Remove the silicone plug before brushing the valve body. Do not push a brush or needle through the plug, or move its white balls. Rinse that plug as directed instead. Keeping the small parts together in a dedicated container makes reassembly easier without improvising a cleaning tool.')} ${ref('miele-cm6360-11648190-us-source-2')}
          <p>An automatic rinse does not replace physical cleaning. The manual calls for daily flask/siphon care and at least weekly milk-path and central-spout attention, with prompted cleaning programs in addition. A sour smell or inconsistent milk flow calls for the documented cleaning and assembly checks, not a stronger recipe to disguise it.</p>
          <p>Choose the ${link('/espresso-machine/gaggia-accademia-ri9781-01/', 'Accademia')} instead if a manual wand is central to the household's texture preferences. Choose the CM6360 for paired automatic service and profiles when its full milk-care routine is acceptable. Match regional voltage and warranty when comparing either machine.</p>`,
      },
      workflow: {
        title: 'Choose a readiness mode, then leave room for the brewer door and rinse water',
        html: `<p>A narrow 251 mm body can suit a crowded counter, but the service door and tank still need working space. Make a cardboard footprint including door swing, tray withdrawal and a safe landing place for the removed brewer. Test the reach from the machine to the sink. Moving a heavy appliance every week weakens the convenience argument before the first coffee is made.</p>
          <p>Eco, Barista and Latte modes alter readiness and energy use. Latte mode prioritizes milk-drink readiness; it is worth comparing with Eco during a normal morning, with the same order and cold start. Party mode is for occasional intensive use and changes cleaning-prompt behavior; it should not become a way to postpone care. ${ref('miele-cm6360-11648190-us-source-2')}</p>
          ${tip('clear waste before the two-cup order', 'Check the tank, tray and grounds container before starting paired drinks. The listed 1.8 L tank and ten-serving grounds bin do not translate into ten uninterrupted paired lattes: rinses use water and a paired order makes more coffee. Empty the tray before carrying it full, keeping it level on the way to the sink.')}
          <p>Owner reports praise coffee while disagreeing about tray handling, hose storage and menu convenience. Use that disagreement for a practical demonstration: remove the tray with normal rinse water inside, open the service door and put the milk connection away. A short ownership complaint can reveal an awkward action without establishing that all units leak. ${ref('miele-cm6360-11648190-us-source-8', 'miele-cm6360-11648190-us-source-9')}</p>
          <p>Profiles personalize recipes, not beans or physical cleaning. Agree on the shared bean, the grinder position and who completes milk care. Compare the ${link('/espresso-machine/miele-cm7750-coffeeselect/', 'CM7750 CoffeeSelect')} if separate bean choices are the actual need, and the ${link('/espresso-machine/jura-e8/', 'Jura E8')} if a different guided-care and brewer-access model matters more than paired milk.</p>`,
      },
      build: {
        title: 'Removable-brewer access is useful when the weekly reach is easy',
        html: `<p>The CM6360 gives the owner access to its brewer, interior and milk pipework. Confirm the door can open fully where the machine will stand; the narrow body alone does not establish service clearance. Match replacement parts and support to US material 11648190.</p><p>Physical access makes cleaning possible, not optional. Follow the exact manual for which parts can enter the dishwasher; the brew unit itself is hand-cleaned without detergent. Follow prompted degreasing and descaling as well as the physical care schedule. ${ref('miele-cm6360-11648190-us-source-2')}</p><p>Selected owners disagree about tray handling and long-term satisfaction. Inspect the tray and service route before purchase. The evidence does not establish a failure percentage, average repair bill or machine lifespan.</p>`,
      },
      features: {
        title: 'Use profiles and paired drinks; decide whether the phone adds anything',
        html: `<p>Eight profiles, paired recipes, DoubleShot, a pre-ground chute, tea choices and coffee-pot mode cover varied household orders. They still share one bean hopper, and the restrained DirectSensor interface is part of the daily experience. ${ref('miele-cm6360-11648190-us-source-7')}</p><p>Miele@home and MobileStart are useful only if remote preparation solves a real problem. Test local controls first, then assess account, network and app requirements. A phone cannot place cups, refrigerate milk or empty the tray. For a simple morning order, those physical tasks may matter more than another connected feature.</p>`,
      },
      value: {
        title: 'Compare the current checkout without the expired rebate',
        html: `<p>The previously recorded $450 manufacturer rebate ended October 11, 2026. The September 24 checkout example of $2,549 is historical, not a current offer or a reason to buy now. Use the retailer's live checkout for the exact US Lotus white material 11648190, including tax, stock, authorized warranty and delivery. No current discounted price has been verified for this update.</p>
          <p>The CM6360 earns its premium when eight profiles, paired milk drinks, removable-brewer access and the narrow body are used often. A buyer making one plain coffee may get little value from that combination. A household switching between regular and decaf may need a different bean architecture rather than more saved profiles.</p>
          <p>Build a full ownership comparison with milk cleaner, brew-unit tablets, descaler, any approved water treatment and the local service route. Ask which supplies are included and how an out-of-warranty machine reaches a technician. A premium brand name is not a written repair quotation or a measured lifespan.</p>
          <p>Compare the ${link('/espresso-machine/gaggia-cadorna-prestige/', 'Gaggia Cadorna Prestige')} if simpler carafe-led service covers the order, and the ${link('/espresso-machine/gaggia-accademia-ri9781-01/', 'Accademia')} if the manual wand would be used. For Miele, choose the exact supported regional article rather than converting a European price and assuming the same North American package.</p>`,
      },
    },
    diagnostics: {
      espresso: [
        { signal: 'A saved profile tastes different after another user changes beans', guidance: 'Profiles share the hopper and physical grinder; establish the shared bean and grinder position before retuning the saved drink.' },
        { signal: 'A large milk recipe tastes watery', guidance: 'Compare the coffee component alone, then reduce excessive water or milk before changing grind, strength and temperature together.' },
      ],
      milk: [
        { signal: 'Milk flow or foam changes unexpectedly', guidance: 'Check cold milk, connection assembly and the documented spout/pipework cleaning; an automatic rinse is not the complete care routine.' },
        { signal: 'A rinse valve needs deeper cleaning', guidance: 'Follow the part-specific instructions: brush the empty valve body, not the silicone plug or its white balls.' },
      ],
    },
  },
};

export const applyPriorityReviewUpgrade = (review: MachineReviewData): MachineReviewData => {
  const upgrade = upgrades[review.slug];
  if (!upgrade) return review;
  if (review.productId !== upgrade.productId) throw new Error(`Priority upgrade identity mismatch: ${review.slug}`);
  for (const id of Object.keys(upgrade.sections)) {
    if (!review.article.sections.some(section => section.id === id)) {
      throw new Error(`Priority upgrade section missing: ${review.slug}#${id}`);
    }
  }
  const sources = [...review.article.sources];
  const aliases = new Map<string, string>();
  const normalize = (href: string) => href.replace(/\/$/, '');
  for (const source of upgrade.sources ?? []) {
    const existing = sources.find(item => normalize(item.href) === normalize(source.href));
    if (existing) aliases.set(source.id, existing.id);
    else sources.push(source);
  }
  const resolveRefs = (html: string) => html.replace(/href="#([^"]+)"/g, (match, id) => (
    aliases.has(id) ? `href="#${aliases.get(id)}"` : match
  ));
  return {
    ...review,
    title: upgrade.title ?? review.title,
    description: upgrade.description ?? review.description,
    updated: review.updated > '2026-10-17' ? review.updated : '2026-10-17',
    evaluation: {
      ...review.evaluation,
      dimensions: review.evaluation.dimensions.map(dimension => ({
        ...dimension,
        deepDive: {
          ...dimension.deepDive,
          // The rating panel already explains the research basis. Remove the
          // factory's repeated disclaimer paragraphs, retaining authored notes.
          intro: dimension.deepDive.intro.filter(text => !text.startsWith(`The ${review.model} score is an editorial judgment`)),
          note: dimension.deepDive.note?.startsWith('Unknowns stay unknown.') ? undefined : dimension.deepDive.note,
          diagnosis: upgrade.diagnostics?.[dimension.id] ?? dimension.deepDive.diagnosis,
        },
      })),
    },
    article: {
      ...review.article,
      sections: review.article.sections.map(section => {
        const edit = upgrade.sections[section.id];
        return edit ? { ...section, ...edit, html: resolveRefs(edit.html) } : section;
      }),
      sources,
    },
  };
};
