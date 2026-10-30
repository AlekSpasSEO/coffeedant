import type { BeanReviewData } from './bean-reviews';

type BeanDecision = {
  headings: [string, string, string, string, string, string];
  trialTitle: string;
  trial: string;
  finalTitle: string;
  finalVerdict: string;
};

// Authored buying guidance, based on the evidence already cited in each review.
// These are proposed home comparisons, not recipes or tasting results we measured.
const decisions: Record<string, BeanDecision> = {
  'counter-culture-hologram': {
    headings: ['A blend recipe tied to your roast date', 'Fruit and chocolate are the brief', 'Keep the fruit visible in your usual drink', 'Size the order around your actual dose', 'What the dated $20 bag costs per brew', 'Big Trouble for nuts; Apollo for florals'],
    trialTitle: 'Give the fruit a fair trial before ordering 24 oz',
    trial: 'Make Hologram in the drink you buy beans for most often, then try a smaller milk portion if that is a latte. The question is whether the fruit-and-chocolate direction remains enjoyable in your normal serving. If you prefer it only black but rarely drink black coffee, that is a reason to choose a different daily blend rather than a bigger Hologram bag.',
    finalTitle: 'Keep Hologram if the fruit earns its place',
    finalVerdict: 'Choose Hologram for a daily blend with some fruit interest, and use the roast-date record when buying again. Big Trouble is the more direct comparison when caramel and nuts appeal more than berry-like variety; Apollo takes the purchase toward citrus and florals.',
  },
  'counter-culture-forty-six': {
    headings: ['Forty-Six is a rotating dark blend', 'A full-bodied chocolate target', 'Use a separate recipe for espresso', 'Try 12 oz before the five-pound bag', 'Compare the dark-roast purchase as a whole', 'Big Trouble offers a less dark direction'],
    trialTitle: 'Decide whether you want darkness or merely more strength',
    trial: 'Compare Forty-Six in your regular milk drink without increasing the dose just because it is a dark roast. If you enjoy the chocolate-led direction but the drink seems too concentrated, adjust dilution first. If the roast character itself is unwelcome, move toward Big Trouble rather than spending the rest of a large bag trying to turn Forty-Six into a lighter coffee.',
    finalTitle: 'A deliberate dark-roast choice',
    finalVerdict: 'Forty-Six makes the most sense when a darker, full-bodied target is what you were already looking for. Its organic listing and blend history add information to that choice; they do not replace checking whether this roast direction works in your milk drink.',
  },
  'counter-culture-big-trouble': {
    headings: ['The familiar blend changes behind the name', 'Caramel and nuts instead of a fruit-first brief', 'One bag still needs method-specific settings', 'Match 12 oz, 24 oz or five pounds to your pace', 'Pay for a coffee you will finish', 'Forty-Six and Hologram lead in different directions'],
    trialTitle: 'Use Big Trouble as a breakfast-coffee comparison',
    trial: 'Brew Big Trouble beside your current daily coffee using the same filter method and serving size. Judge whether its caramel-and-nut target improves the drink you actually finish each morning. An espresso experiment can come later; changing coffee, brewer and recipe at once makes it harder to learn whether this blend suits the household.',
    finalTitle: 'Choose familiarity with some room to adjust',
    finalVerdict: 'Big Trouble is a practical starting point for a caramel-and-nut preference across brewers. Choose Forty-Six if you specifically want a darker roast, or Hologram if fruit is the missing element. Buy the next size only after the normal breakfast brew works.',
  },
  'stumptown-french-roast': {
    headings: ['French Roast describes roast style, not origin', 'Clove and bittersweet chocolate set expectations', 'Build a dark-roast recipe for your brewer', 'The jump from 12 oz to five pounds matters', 'A bulk saving depends on finishing the coffee', 'Two other dark blends worth separating'],
    trialTitle: 'Prove the small bag before making a bulk commitment',
    trial: 'Use the 12 oz pack to establish whether the clove and bittersweet-chocolate brief belongs in your everyday cup. Record how many days the bag lasts, including any coffee used to adjust the grind. That consumption record is a better basis for considering five pounds than a cheaper price per ounce or an assumption that dark beans keep indefinitely.',
    finalTitle: 'Buy the roast style you prefer, in a usable size',
    finalVerdict: 'French Roast is for someone deliberately seeking Stumptown’s darker direction. The useful purchase decision is small versus bulk after a real household trial. Forty-Six adds a roast-date blend selector; Major Dickason’s brings a different dark blend and direct pack size.',
  },
  'peets-major-dickasons': {
    headings: ['Whole beans, pods and decaf are separate purchases', 'Earth and spice define the darker brief', 'Change extraction before abandoning a sound recipe', 'Read the mass and date on this seller’s bag', 'A one-pound reference is not every retailer pack', 'Choose a different dark blend for a reason'],
    trialTitle: 'Separate roast preference from excessive concentration',
    trial: 'Start with your normal press or filter recipe and taste it at the strength you usually drink. If the cup is too heavy, compare a little added hot water before changing every brewing variable. If the earthy, darker character remains the problem at a comfortable strength, a different roast direction is more promising than repeatedly forcing this bag into a lighter profile.',
    finalTitle: 'The format and the roast both need to fit',
    finalVerdict: 'Major Dickason’s is a strong candidate for a deliberate dark, earthy preference. Compare the exact whole-bean pack and its date before comparing price. Big Trouble is a more relevant next step than another dark blend when the roast direction itself is what you want to change.',
  },
  'stumptown-hair-bender': {
    headings: ['A café espresso blend with a wider job', 'Citrus and raisin accompany the chocolate', 'Save separate espresso and drip recipes', 'Twelve ounces before the café-size order', 'Include switching waste in the bag cost', 'Holler Mountain changes the roast brief'],
    trialTitle: 'Test the one-bag household promise in both brewers',
    trial: 'Dial in the method used most often, save that grinder setting, then make the second method before deciding Hair Bender can replace two bags. Count the coffee needed to return to espresso afterward. If switching wastes several doses or becomes a chore, the constraint may be the grinder routine rather than the blend’s ability to make both drinks.',
    finalTitle: 'A shared bag works only with a workable switching routine',
    finalVerdict: 'Hair Bender offers a documented route from café-style espresso to home drip. Choose it for that flexibility and its citrus/chocolate brief, then include grinder adjustment in the decision. Holler Mountain is worth comparing if a medium roast sounds closer to your everyday preference.',
  },
  'stumptown-holler-mountain': {
    headings: ['An organic medium blend for two routines', 'Caramel and berry jam are roaster targets', 'Versatility still costs a second grinder setting', 'Check the bag before considering five pounds', 'Value depends on both household brewers', 'Hair Bender is the darker same-roaster comparison'],
    trialTitle: 'Let the drip drinker and espresso drinker judge separately',
    trial: 'Keep notes for a normal drip cup and a separately dialed espresso. A household compromise works when both people want to drink it, rather than when one tolerates the other’s favorite coffee. If berry interest disappears in your large latte but the drip drinker enjoys it, decide whether one shared bag is worth that tradeoff before placing a bulk order.',
    finalTitle: 'Choose the medium-roast compromise only if both drinks work',
    finalVerdict: 'Holler Mountain is a sensible shared-bag trial for medium-roast drip and espresso. Hair Bender takes the comparison toward a medium/dark café blend; Apollo changes it toward washed Ethiopian citrus and florals. Those are preference choices rather than a universal quality ladder.',
  },
  'intelligentsia-black-cat-classic-espresso': {
    headings: ['Classic, Analog and Decaf Black Cat are different coffees', 'The lightest Black Cat espresso has a fruit-led brief', 'Use 18 g to 45 g as a starting experiment', 'Keep the first pack small while dialing in', 'An explicit recipe has practical value', 'Analog is the darker milk-drink comparison'],
    trialTitle: 'Taste the shot before deciding it needs a darker recipe',
    trial: 'If your basket accepts 18 g, use Intelligentsia’s 45 g beverage target as the first recorded shot rather than copying somebody else’s grinder number. Taste it before adding your usual milk. If the fruit direction appeals as espresso but not in the finished drink, compare Analog instead of assuming a shorter extraction will remove the reason Classic is different.',
    finalTitle: 'Choose Classic for fruit-accented espresso',
    finalVerdict: 'Classic is the more deliberate buy when straight espresso and a published starting ratio matter. Analog deserves attention for a darker chocolate-led milk drink. The shared Black Cat name should not conceal that these products solve different buying problems.',
  },
  'onyx-monarch': {
    headings: ['Monarch is an espresso-and-milk proposition', 'Chocolate and fruit are the intended balance', 'Follow the milk-drink target before improvising', 'Account for dialing waste before buying more', 'Compare the exact Onyx pack and serving', 'Geometry and Southern Weather serve different preferences'],
    trialTitle: 'Judge Monarch in your actual latte size',
    trial: 'Make the espresso using the documented method guidance, then use the milk quantity you normally pour. A blend chosen for milk drinks needs to satisfy that finished drink, not only a neat shot sampled during dial-in. If you rarely add milk and want a lighter fruit-led direction, compare Geometry before buying a larger Monarch pack.',
    finalTitle: 'Let the finished milk drink justify the choice',
    finalVerdict: 'Monarch’s case is clearest for espresso that will regularly meet milk. Choose the pack around your dose and adjustment waste. Southern Weather or Geometry may be more relevant when hot filter coffee, a lighter direction or different recipe support drives the purchase.',
  },
  'counter-culture-apollo': {
    headings: ['A changing washed Ethiopian blend', 'Citrus and florals are the buying signal', 'Begin with the filter cup you drink black', 'Roast date matters more than a permanent blend name', 'A small bag limits the cost of a preference mismatch', 'Hologram keeps fruit with a chocolate anchor'],
    trialTitle: 'Do the citrus and florals suit your everyday cup?',
    trial: 'Try Apollo black in your regular filter brewer before adding cream or using the bag mainly for large milk drinks. The purchase question is whether you welcome the citrus-and-floral direction, not whether you can force it to resemble a darker chocolate blend. Hologram is the more useful next comparison when you want fruit with a more familiar chocolate anchor.',
    finalTitle: 'Buy Apollo because you want the brighter direction',
    finalVerdict: 'Apollo belongs on a shortlist for washed Ethiopian citrus and florals, with the current blend record checked against the bag. A darker-roast preference is a reason to choose another coffee; it is not automatically a brewing fault to fix over an entire large pack.',
  },
  'counter-culture-slow-motion-decaf': {
    headings: ['Slow Motion has its own roast-date history', 'A molasses-and-cocoa decaf target', 'Use the main brewer to choose this decaf', 'A decaf bag needs its own consumption plan', 'The dated 12 oz price per espresso dose', 'Trapper Creek changes the flavor and brew brief'],
    trialTitle: 'Choose the decaf for the time of day you will drink it',
    trial: 'Try Slow Motion using the brewer and serving size you normally use for decaf, rather than judging it through your caffeinated espresso settings. If decaf is an occasional evening cup, note how slowly the bag empties before considering a larger size. Its cocoa-and-molasses brief is a flavor choice; a decaf label does not establish zero caffeine.',
    finalTitle: 'A small-bag route to a cocoa-led decaf',
    finalVerdict: 'Slow Motion is worth trying when cocoa and molasses appeal and the roast-date record is useful to you. Keep the order proportional to actual decaf use. Compare Trapper Creek for a different fruit/graham/cocoa brief rather than treating every water-processed coffee as interchangeable.',
  },
  'stumptown-trapper-creek-decaf': {
    headings: ['Trapper Creek is a separate water-processed blend', 'Citrus and graham accompany the cocoa', 'Keep drip and espresso targets apart', 'Regular-to-decaf switching can waste coffee', 'Five pounds needs a proven decaf routine', 'Slow Motion offers a different medium-roast brief'],
    trialTitle: 'Check whether the decaf switch is convenient enough to repeat',
    trial: 'Make Trapper Creek after the household’s regular coffee using the same switching routine you expect to keep. Account for old beans in the hopper and retained grounds, and save a dedicated decaf setting if your grinder allows it. A small bag tests both the flavor and whether the changeover discourages you from using it.',
    finalTitle: 'Buy for the decaf routine, not only the flavor words',
    finalVerdict: 'Trapper Creek makes a practical trial for someone needing both drip and espresso guidance in a decaf. Its citrus/graham/cocoa brief differs from Slow Motion’s molasses direction. The larger pack becomes sensible only when bean switching and weekly consumption are already working.',
  },
  'intelligentsia-decaf-black-cat-espresso': {
    headings: ['Decaf Black Cat is not Classic with a new label', 'Cocoa and sugar with an apple cue', 'A documented 18 g to 45 g espresso start', 'Let espresso consumption determine pack size', 'Price the recipe you will actually pull', 'Decaf House is the filter-first sibling'],
    trialTitle: 'Use the published ratio to learn one new decaf',
    trial: 'For a compatible basket, start with 18 g and a 45 g beverage, recording the grind used for this decaf rather than preserving your regular-bean setting. The useful result is a repeatable evening shot. If most of your decaf is made in automatic drip, compare Decaf House before buying Black Cat for its familiar espresso-family name.',
    finalTitle: 'Choose the decaf with the espresso recipe',
    finalVerdict: 'Decaf Black Cat is the clearer Intelligentsia purchase for a portafilter user who wants an explicit starting ratio. Decaf House carries the stronger filter-method case. The water-process statement helps identify the coffee but does not measure caffeine in the drink you prepare.',
  },
  'intelligentsia-organic-decaf-house-blend': {
    headings: ['The current House listing identifies Honduras', 'Lime is a useful warning for citrus-averse drinkers', 'Start filter brewing at the roaster’s 1:18', 'A filter decaf still needs a fresh small pack', 'Compare cost using your filter dose', 'Decaf Black Cat supplies the espresso alternative'],
    trialTitle: 'Try the bright filter brief before committing to bulk',
    trial: 'A 20 g dose and 360 g water follow the listed 1:18 filter starting ratio. Use the brewer you already know so the first trial answers whether the chocolate-and-lime direction appeals. If citrus is the mismatch, compare a more cocoa-led decaf instead of buying five pounds on the strength of the House name.',
    finalTitle: 'The better-documented choice for filter decaf',
    finalVerdict: 'Choose Decaf House when pour-over or automatic drip is the main job and its bright flavor brief sounds welcome. Decaf Black Cat is a more direct espresso comparison. Check the next bag’s origin panel rather than assuming the recurring House label fixes one lot forever.',
  },
  'equator-decaf-equator-blend': {
    headings: ['Colombia and Brazil with a named water process', 'Prune, cherry and spice are the stated direction', 'Pick the documented filter method first', 'Try 12 oz before the two-pound decaf order', 'Traceability adds detail, not a tasting score', 'Compare an espresso-first decaf when the brewer changes'],
    trialTitle: 'Use the origin detail to choose a style, then test one brewer',
    trial: 'Start in drip, Chemex or French press using the corresponding published ratio. The medium-dark fruit-and-spice brief is the reason to try this decaf; the detailed component panel is useful context for buying it again. If you chiefly pull espresso and want a starting dose and yield, Decaf Black Cat answers that need more directly.',
    finalTitle: 'A detailed decaf record with a filter-led starting point',
    finalVerdict: 'Decaf Equator Blend stands out for its stated Mountain Water process and component detail. Its clearest recipe support is for filter and press. Order for those strengths, while keeping caffeine exposure and an untested current-lot flavor result outside what the process label can establish.',
  },
  'counter-culture-fast-forward': {
    headings: ['Harvests change behind a steady breakfast brief', 'Nutty, sweet and creamy is the target', 'Use 1:17 for filter, not the portafilter', 'Seventeen daily doses is a useful size check', 'What the dated breakfast bag costs per dose', 'Big Trouble adds caramel; Hologram adds fruit'],
    trialTitle: 'Test whether it solves your ordinary morning coffee',
    trial: 'Make Fast Forward in automatic drip first if that is what the household drinks every day. Keep the dose and water amount from a familiar recipe, then compare the nutty-and-sweet direction with your previous bag. Occasional espresso capability is useful, but should not outweigh a breakfast brew nobody prefers.',
    finalTitle: 'A breakfast blend should earn a repeat breakfast order',
    finalVerdict: 'Fast Forward is a sound trial for a familiar medium-roast morning cup with rotating organic components. Big Trouble deserves the next look for more caramel and a darker direction; Hologram is the more relevant alternative when fruit is what the breakfast cup lacks.',
  },
  'counter-culture-gradient': {
    headings: ['A Colombian blend whose components rotate', 'Dark chocolate with a berry cue', 'Dark roast does not remove dial-in work', 'Use the bag date to follow the blend', 'Value depends on wanting this darker profile', 'Forty-Six is a different dark-roast comparison'],
    trialTitle: 'Find out whether you want a berry cue in a dark coffee',
    trial: 'Try Gradient in your normal serving before changing milk quantity or sweetness to hide its character. Dark chocolate and roasted nuts may sound familiar, but the stated berry note is part of why this blend differs. If you wanted a simpler roast-led cup, compare Forty-Six; if the berry interest is welcome, use the roast-date record when ordering again.',
    finalTitle: 'Choose Gradient for the combination, not only the dark label',
    finalVerdict: 'Gradient is a specific dark-roast proposition with a Colombian blend record and a chocolate/nut/berry target. Choose it when that combination appeals. A small first bag is more useful than assuming it will duplicate another dark blend because the roast category matches.',
  },
  'counter-culture-even-keel-half-caff': {
    headings: ['Half-caff is a blend identity, not a cup measurement', 'Read the current flavor brief with the component record', 'Save a setting for this particular blend', 'An occasional half-caff drink changes pack economics', 'Buy the format before comparing caffeine claims', 'Full decaf and regular blends serve other goals'],
    trialTitle: 'Decide whether half-caff is the change you actually need',
    trial: 'Try Even Keel in the same drink and serving size as your usual coffee, using a separately adjusted grind if needed. That keeps the flavor comparison useful. If the purpose is specifically to avoid caffeine, a half-caff name cannot establish the amount in your cup; a full-decaf product is a different buying category, also without a zero-caffeine guarantee.',
    finalTitle: 'A deliberate middle ground with a measurement limit',
    finalVerdict: 'Even Keel is relevant when you deliberately want a half-caff blend rather than regular or full decaf. Evaluate it as its own coffee and size the order around how often you use it. Do not translate the name into a precise brewed-caffeine figure.',
  },
  'equator-eye-of-the-tiger-espresso': {
    headings: ['A seasonal espresso with its own current components', 'A brighter espresso brief needs a willing palate', 'Start from the published 18 g to 46 g shot', 'Seasonal detail belongs with the received bag', 'Compare espresso value using a complete shot', 'Equator Blend has the stronger filter-method case'],
    trialTitle: 'Let a straight shot answer the bright-espresso question',
    trial: 'With a suitable basket, record a first shot around the roaster’s 18 g to 46 g start and taste before adding milk. The question is whether you enjoy the brighter direction enough to keep dialing in. If you mainly brew drip or press and want explicit filter instructions, Equator Blend is the more direct same-roaster comparison.',
    finalTitle: 'Choose the espresso-first Equator for an espresso-first routine',
    finalVerdict: 'Eye of the Tiger is compelling when seasonal espresso and an explicit starting shot are what you want. The namesake Equator Blend answers a different medium-dark filter brief. Keep those roles visible when a small price difference makes the two look interchangeable.',
  },
  'equator-blend': {
    headings: ['The current four-origin panel is useful buying detail', 'Cedar and apricot accompany the chocolate', 'A 24 g to 360 g V60 is a clear first brew', 'Match the component panel to the actual package', 'Calculate the filter cup rather than the espresso guess', 'Eye of the Tiger takes the comparison toward espresso'],
    trialTitle: 'Start with the method the product documents best',
    trial: 'A V60 user can start with the listed 24 g to 360 g recipe; drip and press users have their own 1:15 guidance. Judge whether the medium-dark cup works with the cream or sugar you normally add. An espresso-grind selector is convenient packaging, but does not supply the shot recipe an espresso-first buyer may want.',
    finalTitle: 'A well-described filter house blend',
    finalVerdict: 'Equator Blend is the more straightforward buy for medium-dark drip, press or V60, especially when the roaster’s cream-and-sugar role fits. Eye of the Tiger offers the clearer espresso starting point. The detailed current component panel is worth revisiting when the next bag changes.',
  },
  'onyx-geometry': {
    headings: ['Washed Colombia and Ethiopia define the blend record', 'Read Geometry’s notes alongside its two recipes', 'Use the matching filter or espresso guide', 'Leave room in the pack for two separate dial-ins', 'Two methods only add value if you use both', 'Southern Weather is a separate Onyx proposition'],
    trialTitle: 'Choose one of the documented recipes before testing versatility',
    trial: 'Begin with the Geometry recipe for your main brewer, then save the setting before trying the second method. The two published paths are useful because you can choose deliberately, not because one grinder position will do both jobs. If you only make filter coffee, decide on that cup without feeling obliged to buy espresso equipment to justify the blend.',
    finalTitle: 'Buy Geometry for useful method choice',
    finalVerdict: 'Geometry has a clear practical advantage for a buyer who wants documented filter and espresso routes from one Onyx blend. Use the recipe for the drink you actually make and compare Southern Weather or Monarch when their different daily roles fit better.',
  },
  'onyx-southern-weather': {
    headings: ['Southern Weather has its own current blend record', 'A moderate flavor brief rather than a sensory score', 'Put the filter recipe first', 'Match the order to filter-batch consumption', 'Pay for the brew role you need', 'Geometry adds a different two-method route'],
    trialTitle: 'Treat it as a filter purchase before making it an espresso project',
    trial: 'Make Southern Weather with the filter brewer and serving style used most often at home. Record the first successful dose and grind so the next bag has a useful reference. If your purchase depends on explicit espresso guidance as well, compare Geometry instead of assuming every Onyx blend offers the same method support.',
    finalTitle: 'A focused choice for the filter routine',
    finalVerdict: 'Southern Weather makes most sense when its moderate, filter-led brief is the attraction. Geometry is worth comparing for a more explicit two-method plan, while Monarch puts espresso with milk nearer the center of the decision. Choose by the drink, then by pack and delivered cost.',
  },
  'peets-big-bang': {
    headings: ['A medium blend sold in a one-pound format', 'Fruit tart and milk chocolate are the stated cues', 'Keep hot brewing and cold brewing distinct', 'A one-pound bag needs a realistic batch plan', 'Compare the exact pack and purchase mode', 'Baridi is the more specific café cold-brew reference'],
    trialTitle: 'Choose hot or cold as the first comparison',
    trial: 'Use Big Bang first for whichever brew actually motivates the purchase. For cold brew, write down steep recipe and serving dilution separately; for hot filter, preserve your normal dose and batch size. Switching both method and coffee in the first comparison tells you little about whether the fruit-and-chocolate target belongs in your daily cup.',
    finalTitle: 'Buy the medium profile for a defined hot or cold routine',
    finalVerdict: 'Big Bang is a useful medium-roast candidate when a fruit-and-milk-chocolate brief appeals and a one-pound pack fits. Baridi has the more specific Peet’s café cold-brew story, but current availability matters more than that association when you need beans to brew now.',
  },
  'peets-arabian-mocha-java': {
    headings: ['A historic blend name needs a current origin check', 'The dark blend’s stated notes guide the choice', 'Brew the beans rather than the name’s reputation', 'Read the actual pack before planning a repeat order', 'A traditional name does not settle delivered value', 'Compare another dark blend with a clearer personal goal'],
    trialTitle: 'Buy the current blend rather than an assumed historic recipe',
    trial: 'Check the current origin and process panel before ordering if the Mocha-Java name is the attraction. Then try the coffee in your normal dark-roast brew without importing a recipe from a different bag with the same historical style name. The useful result is whether this current Peet’s product matches your preference, not whether it confirms a romantic idea of the name.',
    finalTitle: 'Keep the current product record ahead of the story',
    finalVerdict: 'Arabian Mocha-Java is worth considering for a deliberate dark-blend preference. The historic label should prompt a look at today’s components rather than an assumption about fixed origins. Compare Major Dickason’s or another dark blend on the actual bag, style and delivered format.',
  },
  'verve-streetlevel': {
    headings: ['Streetlevel is a specific recurring Verve blend', 'Clementine and honey shape the brief', 'Establish the main method before testing the second', 'Roast-to-order claims still need a bag date', 'Flexibility earns value through actual use', 'Sermon changes the fruit emphasis'],
    trialTitle: 'Use the clementine cue as a preference check',
    trial: 'Try Streetlevel in your normal espresso or brewed coffee before sweetening it differently to chase the label. If the citrus direction appeals, save the recipe and decide whether it also works in your other brewer. If you want berry-led espresso instead, Sermon is the more relevant comparison than repeatedly changing Streetlevel to imitate a different blend.',
    finalTitle: 'Choose the Verve blend that suits your fruit preference',
    finalVerdict: 'Streetlevel offers a clementine-and-honey direction for a household using more than one method. Sermon brings a different berry/cocoa espresso target. Shared roaster and medium-roast language are useful context, but are not a reason to treat the two bags as the same purchase.',
  },
  'blue-bottle-hayes-valley-espresso': {
    headings: ['Hayes Valley is the dark espresso blend in this comparison', 'A roast-led brief differs from the brighter Blue Bottle options', 'Keep the hot filter guide out of the espresso basket', 'Match the pictured pack to the active US selector', 'Buy for espresso use rather than an assumed universal role', '17ft Ceiling adds a different declared blend structure'],
    trialTitle: 'Decide whether you prefer the dark espresso direction',
    trial: 'Make Hayes Valley as espresso using a dose appropriate for your basket and a recorded beverage mass. Taste the shot and your usual milk drink separately. If the darker direction is what appeals, this is a more focused choice than buying a lighter filter blend and trying to make it behave like a dark espresso.',
    finalTitle: 'The deliberate darker espresso route',
    finalVerdict: 'Hayes Valley belongs on the list when dark espresso is the goal. Compare 17ft Ceiling for its different stated blend structure, or Bella Donovan when the daily filter cup matters more. Confirm the selected whole-bean pack instead of relying on a photograph to identify the order.',
  },
  'blue-bottle-bella-donovan': {
    headings: ['Bella Donovan has a distinct current blend record', 'A daily brew brief with its own fruit and chocolate cues', 'Choose the hot brewer before borrowing a recipe', 'Use the delivered date to plan repeat orders', 'A familiar house role still needs a usable pack size', 'Hayes Valley is a more espresso-centered comparison'],
    trialTitle: 'Let the everyday brewed cup make the decision',
    trial: 'Start with the hot brewer used most in your household and compare Bella Donovan at your normal strength. A blend that works only after a complete change in brewing routine may be a less useful daily purchase than its house-blend story suggests. If espresso is the whole reason for ordering, examine Hayes Valley’s more focused role first.',
    finalTitle: 'Choose Bella Donovan for the daily brew it will replace',
    finalVerdict: 'Bella Donovan is worth trying when its documented blend brief suits the household’s brewed-coffee routine. Hayes Valley supplies a different espresso-led comparison. Base the repeat order on your actual brew and package date rather than a general assumption that every Blue Bottle blend fills the same role.',
  },
  'blue-bottle-giant-steps': {
    headings: ['Giant Steps is a dark press-with-milk proposition', 'Cocoa and toasted marshmallow are the target', 'A 1:13 French press is the product-specific start', 'A 30 g press dose makes about eleven bag trials', 'Pay for the press routine you will use', 'Bella Donovan shifts the comparison toward drip'],
    trialTitle: 'Use the 1:13 press direction before testing another method',
    trial: 'A 30 g dose and 390 g water preserve the product’s stated press ratio before milk. Make that first trial with a consistent steep and decanting routine, then add your normal milk quantity. If you mainly want drip, compare Bella Donovan; if you mainly pull espresso, Hayes Valley is a more focused alternative than buying Giant Steps for its dark label alone.',
    finalTitle: 'Buy Giant Steps for the documented press-with-milk role',
    finalVerdict: 'Giant Steps earns consideration through its specific French-press-with-milk guidance and darker cocoa target. Start there, with the exact US sale format checked separately from the Korean packaging image. Bella Donovan is the more direct drip-and-cream comparison, while Hayes Valley centers espresso.',
  },
  'blue-bottle-17ft-ceiling-espresso': {
    headings: ['The declared robusta component matters to this espresso blend', 'Read the espresso brief without borrowing another blend’s notes', 'Use a basket recipe rather than the hot pour-over numbers', 'Start with the selected US pack, not a regional image', 'Pay for this espresso structure if that is your preference', 'Hayes Valley is the comparison without declared robusta'],
    trialTitle: 'Make the robusta component a deliberate buying choice',
    trial: 'If you specifically want a blend with a declared robusta component, try 17ft Ceiling in the espresso drink you usually make. Compare texture, strength and enjoyment at a repeatable dose rather than choosing it from a claim about crema alone. Hayes Valley is the more useful same-roaster alternative when you want a dark espresso without that declared component.',
    finalTitle: 'Choose the blend structure you actually want',
    finalVerdict: '17ft Ceiling has a clear reason to enter the comparison: its stated robusta component in an espresso blend. That is a product distinction, not a measured result for your cup. Choose Hayes Valley instead when its different dark espresso brief better matches your preferences.',
  },
  'blue-bottle-night-light-decaf': {
    headings: ['Night Light is a separate decaf product', 'The current roaster notes set the flavor direction', 'Keep the decaf recipe separate from regular beans', 'An evening bag may empty slowly', 'Buy the decaf format before comparing checkout totals', 'Compare other decafs by brewer and stated process'],
    trialTitle: 'Check the evening routine before making Night Light a standing order',
    trial: 'Try Night Light in the brewer you actually use after regular coffee, with a recorded decaf setting if grinding whole beans. Note how often you make it over the life of the first bag. Occasional use favors a manageable order; the word decaf does not make a large pack convenient or establish zero caffeine in a finished serving.',
    finalTitle: 'Order for the decaf habit you have',
    finalVerdict: 'Night Light is worth considering when you want a Blue Bottle decaf rather than another regular blend. Compare it with other decafs by brew guidance and documented process, then size the order around evening consumption. Flavor language and a process label cannot answer a product-specific caffeine question.',
  },
  'blue-bottle-three-africas': {
    headings: ['Washed and natural Ethiopia with a Rwandan component', 'Raisin, blueberry and lemon describe the intended direction', 'Cold-brew positioning is separate from the hot guide', 'A 340 g pack gives a useful small-batch trial', 'The active pack and purchase selector set the total', 'Giant Steps takes cold brew toward darker cocoa'],
    trialTitle: 'Try the fruit-led cold brew black before adding milk',
    trial: 'Keep steeping and dilution consistent, then taste Three Africas black and over ice before adding your normal milk. If the fruit interest is the reason you chose it, this shows whether that interest survives the way you serve cold brew. Giant Steps may suit the purchase better if the finished drink is mainly a dark cocoa-and-milk vehicle.',
    finalTitle: 'Choose the fruit-led side of the cold-brew comparison',
    finalVerdict: 'Three Africas is a clear choice to investigate for fruit-led cold brew with documented washed and natural components. Giant Steps offers a darker cocoa direction. Compare finished drinks at the same dilution, and check the current US whole-bean selector before turning either into a larger order.',
  },
  'peets-baridi-blend': {
    headings: ['The café cold-brew blend still needs a confirmed bag', 'Berry and citrus distinguish the roaster’s brief', 'A café steep time is not a complete home recipe', 'Buy from the seller who can verify stock and date', 'A sold-out page does not establish a buy-now price', 'Three Africas or Big Bang may be a practical substitute'],
    trialTitle: 'Resolve availability before planning the home café experiment',
    trial: 'Confirm a legitimate seller can supply the exact whole-bean Baridi bag before buying equipment or planning a recurring order around it. Once you have a bag, compare the home brew black at a recorded dilution before trying to reproduce a flavored café drink. Syrup, milk and café preparation can conceal whether the beans themselves are what you wanted.',
    finalTitle: 'A useful café reference when the beans can actually be sourced',
    finalVerdict: 'Baridi is appealing for its documented Peet’s cold-brew role, but the checked stock warning is the immediate buying constraint. Three Africas or Big Bang may offer a more practical route when their current stock is confirmed. Do not treat an indexed price as an available Baridi offer.',
  },
  'peets-off-the-grid': {
    headings: ['A washed Colombia and El Salvador blend', 'Pear and chocolate frame this medium-roast choice', 'Establish a hot brew before changing the method', 'Read the whole-bean pack and roast date together', 'Check the live selector rather than a headline price', 'Sun Catcher moves toward a lighter floral brief'],
    trialTitle: 'Use Off the Grid to test a medium-roast direction',
    trial: 'Make Off the Grid in your familiar hot brewer and judge the pear-and-chocolate brief at your ordinary serving strength. That gives a clearer comparison with your previous bag than immediately changing to cold brew. Sun Catcher is a more useful next step if your goal is a lighter floral coffee, while a darker blend answers a different preference.',
    finalTitle: 'A medium blend for a chocolate-and-pear preference',
    finalVerdict: 'Off the Grid is worth shortlisting for its stated washed Colombia/El Salvador structure and medium-roast brief. Choose it for that direction, with the exact active whole-bean pack checked at checkout. Sun Catcher and the darker Peet’s blends represent different buying goals rather than automatic upgrades.',
  },
  'peets-sun-catcher': {
    headings: ['Use the current Sun Catcher panel ahead of the launch story', 'The lighter floral brief is the main preference question', 'Keep the first hot-filter trial familiar', 'Compare the delivered bag with older sample accounts', 'Verify the active size and purchase mode', 'Off the Grid offers a less floral medium alternative'],
    trialTitle: 'Find out whether the floral direction belongs in your routine',
    trial: 'Try Sun Catcher black in the hot-filter method you already know, rather than evaluating it only after a large splash of cream. If the lighter floral direction is attractive, save the recipe for the next bag. If you want chocolate and a less floral brief instead, Off the Grid is a more direct comparison than trying to force Sun Catcher into a darker style.',
    finalTitle: 'Choose the lighter direction because you enjoy it',
    finalVerdict: 'Sun Catcher belongs in a comparison for a lighter, floral Peet’s option. Older sample accounts provide context, while the current bag controls identity. Off the Grid is the more relevant alternative when a medium, chocolate-and-pear brief sounds closer to the coffee you want every day.',
  },
  'verve-sermon': {
    headings: ['Natural East Africa with a washed Colombian anchor', 'Blueberry pie is a preference signal', 'Begin with espresso if that is the intended job', 'A 12 oz pack leaves room to learn the blend', 'Price the exact whole-bean size and order mode', 'Streetlevel changes the fruit-and-cocoa balance'],
    trialTitle: 'Test the berry character before ordering a larger espresso bag',
    trial: 'Pull a recorded espresso, taste it neat, then make your usual milk drink from the next shot. The practical question is whether you want the blueberry-pie direction in either or both servings. If berry or ferment-like cues are consistently unwelcome, compare Streetlevel rather than using the whole bag to chase a chocolate-only profile Sermon does not promise.',
    finalTitle: 'Choose Sermon when fruit is part of the attraction',
    finalVerdict: 'Sermon is for an espresso buyer who welcomes a fruit cue alongside cocoa and accepts a separate dial-in. Streetlevel offers a different daily-espresso brief from the same roaster. A small pack is the sensible way to resolve that preference before a 2.2 lb or five-pound commitment.',
  },
};

const sectionIds = ['identity', 'flavor', 'brewing', 'freshness', 'value', 'alternatives'];

export const applyBeanDecision = (review: BeanReviewData): BeanReviewData => {
  const key = review.slug.split('/').filter(Boolean).at(-1)!;
  const decision = decisions[key];
  if (!decision) throw new Error(`Missing authored bean buying decision: ${review.slug}`);
  const sections = review.sections.filter((section) => section.id !== 'first-bag').map((section) => {
    const headingIndex = sectionIds.indexOf(section.id);
    return headingIndex < 0 ? section : { ...section, title: decision.headings[headingIndex] };
  });
  const alternativeIndex = sections.findIndex((section) => section.id === 'alternatives');
  sections.splice(alternativeIndex < 0 ? sections.length : alternativeIndex, 0, {
    id: 'first-bag', title: decision.trialTitle, paragraphs: [decision.trial],
  });
  // This is an editorial revision, not a new tasting or source/price check.
  return { ...review, updated: review.updated > '2026-10-30' ? review.updated : '2026-10-30', sections, finalTitle: decision.finalTitle, finalVerdict: decision.finalVerdict };
};
