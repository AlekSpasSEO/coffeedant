import type { BeanReviewData } from './bean-reviews';

const date = '2026-10-16';
const freshness = 'https://counterculturecoffee.com/blogs/counter-culture-coffee/coffee-basics-freshness';
const storage = 'https://support.stumptowncoffee.com/hc/en-us/articles/5568076789901-Where-should-I-store-my-coffee-In-the-freezer-On-the-counter';
const guardian = 'https://www.theguardian.com/thefilter-us/2026/aug/26/counter-culture-coffee-review';
const yearRound = 'https://counterculturecoffee.com/blogs/counter-culture-coffee/coffee-basics-year-round-coffee';
const milkGuide = '/coffee-beans/best-coffee-beans-for-milk-drinks/';
type RecordData = {
  id:string; slug:string; roaster:string; coffee:string; image:string; official:string;
  price:string; sizes:string; roast:string; notes:string; origin:string; process:string; variety:string;
  hook:string; verdict:string; fit:string[]; skip:string[];
  identity:string[]; flavor:string[]; brew:string[]; fresh:string[]; value:string[]; comparison:string[];
  externalTitle:string; externalUrl:string; externalNote:string;
  ownerTitle:string; ownerUrl:string; ownerNote:string;
  altName:string; altSlug:string; altReason:string;
  faqBrew:string; faqIdentity:string; faqBrewQuestion?:string; faqIdentityQuestion?:string;
  extraSourceTitle:string; extraSourceUrl:string; extraSourceNote:string;
};

const records: RecordData[] = [
  {
    id:'CD-BN-000016', slug:'/coffee-beans/counter-culture-fast-forward/',
    roaster:'Counter Culture Coffee', coffee:'Fast Forward',
    image:'https://counterculturecoffee.com/cdn/shop/files/FastForward_Main_770x.jpg?v=1749045784',
    official:'https://counterculturecoffee.com/products/fast-forward-12oz-bag',
    price:'$19.50 for 12 oz', sizes:'12 oz, 24 oz and 5 lb', roast:'Medium; Counter Culture listing',
    notes:'nutty, sweet, creamy', origin:'Rotating certified-organic smallholder coffees from Latin America and Africa; check the bag date',
    process:'Washed in the current harvest summary', variety:'Not specified for the complete rotating blend',
    hook:'the breakfast-blend brief that changes with harvests',
    verdict:'Fast Forward is a sensible first bag for someone wanting a medium, nutty-and-sweet daily coffee across drip and occasional espresso. Its year-round name does not mean a fixed farm mix. Buy it for the roaster’s steady flavor aim, then check the actual roast-date composition and your own cup.',
    fit:['A familiar, medium-roast morning profile','Automatic drip with an occasional separate espresso recipe','A buyer comfortable with rotating organic components'],
    skip:['You need the same origin and variety on every bag','You want a sharply fruit-led espresso','You cannot check the delivered roast date'],
    identity:[
      'Fast Forward is a recurring blend built around seasonal organic coffee, not a single-origin lot. Counter Culture says it chooses similar coffees from different harvest periods to keep a nutty, sweet and creamy brief. The current product record names washed processing and a broad Latin America and Africa sourcing scope. Its roast-date selector is the place to identify the specific bag; the accessible text lists several historical component pairs without a reliable one-to-one binding to every selector choice, so we do not assign percentages to a future bag. [1] [2]',
      'The roaster calls it a medium roast and lists 12 oz, 24 oz and 5 lb. A 12 oz choice was $19.50 US direct on October 16. That is the base bag price, not a supermarket comparison or a delivered total. The product image identifies the Fast Forward bag; its graphics cannot verify the roast date or origin of a bag yet to ship. [1]'
    ],
    flavor:[
      '“Nutty,” “sweet” and “creamy” are Counter Culture’s sensory words. They are a selection brief, not flavors Coffeedant found in a tasting. The Guardian’s August 2026 multi-coffee comparison provides an independent sample perspective on Counter Culture’s range, but a single published cup cannot stabilize a rotating blend. A self-selected owner described Fast Forward as a reliable grocery-store choice; another liked its balanced sweet acidity. Neither experience predicts this bag or establishes a satisfaction rate. [1] [3] [4]',
      'The useful judgment is about risk: this profile is less of a fruit gamble than Hologram or Apollo, while the medium roast leaves more room for a lighter finish than a dark blend. If your idea of a breakfast coffee is smoky or very bitter, the stated brief points elsewhere. If you want the highest possible origin specificity, choose a dated single-origin instead of using Fast Forward’s name as a guarantee.'
    ],
    brew:[
      'Counter Culture explicitly names both auto-drip and espresso. It suggests 1 g coffee to 17 g water for most brewing devices. For filter coffee, 20 g coffee with about 340 g water is a transparent starting calculation. It is not an espresso recipe: a portafilter needs a much shorter beverage ratio and a grind adjusted to the actual basket and bag. Do not take a filter ratio into an espresso machine. [1]',
      'For a mixed-method home, note a drip setting and an espresso setting separately. A grinder that cannot return repeatably may erase the convenience of using one bag for both. Start with the brew used most, then decide if this medium roast still fits in the other method; no roaster note can prove how milk or a particular extraction will taste.'
    ],
    fresh:[
      'Counter Culture advises using the “Roasted On” date and sealing whole beans away from air, moisture and heat. A retailer bag may have spent longer in distribution than a direct bag. Check the delivered package and its valve or seal before assuming the current product page describes the beans inside. [5]',
      'At one 20 g filter dose per day, a 12 oz bag is roughly seventeen theoretical doses before spillage or dial-in. The 24 oz and 5 lb formats require a much faster household pace. A larger pack is not a saving if it sits past the freshness you like.'
    ],
    value:[
      'The October 16 US direct 12 oz price was $19.50, or about $0.057 per gram before tax and shipping. An illustrative 20 g dose uses about $1.15 of beans, not a measured cup cost. Retail promotions, shipping minimums and subscriptions can change the checkout, so compare actual delivered totals and roast dates. [1]',
      'The value here is consistency of a flavor direction while harvests move, rather than a claim of a fixed cup. If you need lot-by-lot detail, the live blend selector adds value only when it matches the date stamped on your bag. Otherwise it is an archive, not evidence of what you purchased.'
    ],
    comparison:[
      'Counter Culture Big Trouble has a caramel-and-nut direction at a darker medium-dark roast; Hologram aims for fruit and milk chocolate. Both already have separate Coffeedant reviews. Fast Forward sits between those buying intents rather than outranking either by taste. [7]',
      'The separate milk-drink guide compares coffees whose roaster claims and roast direction make a more explicit case for lattes. Fast Forward is a general-purpose morning blend; choose it for that flexibility, not because we measured milk performance.'
    ],
    externalTitle:'The Guardian: Counter Culture range comparison', externalUrl:guardian,
    externalNote:'Independent tasting of particular 2026 samples; not a test of the future roast-date mix.',
    ownerTitle:'r/Coffee: Fast Forward owner discussion', ownerUrl:'https://www.reddit.com/r/Coffee/comments/jsbo6p',
    ownerNote:'Older self-selected grocery-bag account; no current-lot or population inference.',
    altName:'Counter Culture Big Trouble', altSlug:'/coffee-beans/counter-culture-big-trouble/',
    altReason:'a more caramel-led medium-dark Counter Culture brief',
    faqBrewQuestion:'Can I use it for drip as well as espresso?',
    faqBrew:'Yes, Counter Culture names both auto-drip and espresso, but its 1:17 suggestion is a filter starting point. Dial espresso separately.',
    faqIdentityQuestion:'Are the origins fixed?',
    faqIdentity:'No. The origin mix rotates by roast-date period; match the actual bag date to the selector.',
    extraSourceTitle:'Counter Culture on year-round blends', extraSourceUrl:yearRound,
    extraSourceNote:'Why component coffees change while a flavor target stays.'
  },
  {
    id:'CD-BN-000017', slug:'/coffee-beans/counter-culture-gradient/',
    roaster:'Counter Culture Coffee', coffee:'Gradient',
    image:'https://counterculturecoffee.com/cdn/shop/files/Gradient_Main_770x.jpg?v=1749045907',
    official:'https://counterculturecoffee.com/products/12-oz-gradient',
    price:'$20 for 12 oz', sizes:'12 oz, 24 oz and 5 lb', roast:'Dark; Counter Culture listing',
    notes:'dark chocolate, roasted nuts, berry', origin:'Small-scale Colombian farms; component mix changes by roast-date period',
    process:'Washed in the current harvest summary', variety:'Not specified for the complete blend',
    hook:'a Colombian dark roast with a berry warning',
    verdict:'Gradient is the dark-roast option for a buyer who wants chocolate and nuts but does not rule out a berry signal. The Colombian sourcing and washed-process statement make its identity clearer than a generic dark bag, while the rotating components and your actual brew still matter.',
    fit:['A Colombian dark-roast brief with chocolate and nuts','Espresso, filter or cold brew experiments using separate recipes','A buyer who wants a developed roast without assuming it is fruit-free'],
    skip:['You require zero berry or acidity cues','You want a fixed farm, variety and composition','You need proof that a dark roast suits a specific milk drink'],
    identity:[
      'Counter Culture positions Gradient as a dark roast assembled from small-scale Colombian coffees. The page describes direct relationships and a washed-process harvest summary, plus a roast-date selector with multiple periods. It does not give one permanent farm or variety statement for every future bag. That distinction matters because “Colombian” describes a country, not one immutable lot. [1] [2]',
      'The current 12 oz direct US choice was $20; 24 oz and 5 lb were also listed. The 12 oz bag is the useful first test. The credited roaster pack image is for identification, not proof of the beans or roast date that a retailer will deliver. [1]'
    ],
    flavor:[
      'Dark chocolate, roasted nuts and berry are the roaster’s notes. The berry word is consequential: a buyer who equates dark roast with no fruit should pause. The Guardian’s sample comparison singled out Gradient favorably, but its cup is a dated outside sample rather than Coffeedant tasting or a promise for the next blend period. One owner called it an excellent darker Counter Culture blend in a recommendation thread; that self-selected remark cannot be generalized. [1] [3] [4]',
      'Our supported conclusion is a purchase distinction, not a sensory score: Gradient is more specifically Colombian and berry-accented than Forty-Six’s full-bodied dark-chocolate target. The difference is the roasters’ brief and sourcing record; only a bought bag and a controlled recipe could establish a personal preference.'
    ],
    brew:[
      'Counter Culture says Gradient can work from espresso to filter and cold brew. It supplies a general 1:17 water ratio for most brewers. For a 30 g pour-over, that suggests about 510 g water; use the roaster’s detailed method guide and adjust to your brewer. Espresso cannot use 1:17 as beverage yield. Set dose and yield to the basket and save the grind setting separately. [1]',
      'The developed roast may be attractive in a milk drink, but the berry note makes that a preference question. Try a small cappuccino before buying a bulk bag for large sweetened lattes. We did not test Gradient with dairy or oat milk and do not claim a measured flavor advantage.'
    ],
    fresh:[
      'Use the bag’s “Roasted On” date and keep the opened whole beans sealed, cool and dry. A bag photo or star rating cannot tell you when your delivered coffee was roasted. Counter Culture’s freshness advice is more actionable than a universal number of days after roast. [5]',
      'For daily espresso, a 12 oz bag can disappear faster than for occasional filter coffee because dial-in uses beans. Estimate your weekly dose before choosing 24 oz or 5 lb; a nominal per-ounce saving has little value if much of the bag loses the flavor you wanted.'
    ],
    value:[
      'At $20 for 12 oz on October 16, the simple bean cost is about $0.059 per gram. An illustrative 18 g espresso dose contains about $1.06 of beans before dialing waste, milk, water, shipping or tax. This arithmetic is not a measured cup cost or a future price claim. [1]',
      'Gradient is worth comparing with another dark bag only at the same size and current seller. A shelf promotion may beat the direct price yet provide an older roast date. The profile is more important than a one-dollar bag difference if berry is either a reason to try it or a reason to skip it.'
    ],
    comparison:[
      'Forty-Six is the closest internal comparison for a more straightforward dark-chocolate and full-body target. Stumptown French Roast is a separate, still more developed dark-roast direction. The existing dark-roast guide lays out those choices; this page resolves Gradient’s exact Colombian and berry tradeoff. [7]',
      'Fast Forward is the Counter Culture alternative if “dark” is the part of Gradient you doubt: it is medium and framed as nutty, sweet and creamy. These are described directions, not a ranked tasting result.'
    ],
    externalTitle:'The Guardian: Counter Culture range comparison', externalUrl:guardian,
    externalNote:'Independent Gradient impression from an August 2026 sample; not a current-bag guarantee.',
    ownerTitle:'r/Coffee: Gradient dark-roast recommendation', ownerUrl:'https://www.reddit.com/r/Coffee/comments/j2u4sd',
    ownerNote:'One owner recommended Gradient among darker Counter Culture bags; older, self-selected and not a current-lot test.',
    altName:'Counter Culture Forty-Six', altSlug:'/coffee-beans/counter-culture-forty-six/',
    altReason:'a dark-roast chocolate direction without Gradient’s prominent berry wording',
    faqBrew:'Counter Culture discusses espresso, filter and cold brew. Its 1:17 suggestion is for most brewed coffee; espresso needs its own basket recipe.',
    faqIdentity:'It is a year-round Colombian blend with changing roast-date components, not a single fixed farm.',
    extraSourceTitle:'Coffeedant dark-roast guide', extraSourceUrl:'https://coffeedant.com/coffee-beans/best-dark-roast-coffee-beans/',
    extraSourceNote:'Different dark-roast buying choices and full reviews.'
  },
  {
    id:'CD-BN-000018', slug:'/coffee-beans/counter-culture-even-keel-half-caff/',
    roaster:'Counter Culture Coffee', coffee:'Even Keel Half-Caff',
    image:'https://counterculturecoffee.com/cdn/shop/files/UpdatedEvenKeel_770x.jpg?v=1768416866',
    official:'https://counterculturecoffee.com/products/even-keel',
    price:'$20 for 12 oz', sizes:'12 oz, 24 oz and 5 lb', roast:'Medium-dark badge; page story says medium, an unresolved roaster wording difference',
    notes:'graham cracker, molasses, soft', origin:'Changing organic caffeinated and decaffeinated coffees; dated selector lists Guatemalan and Peruvian components',
    process:'Washed harvest summary; decaffeination method not established for the current selected bag',
    variety:'Not specified for the whole rotating blend',
    hook:'the convenient 50/50 bag with a caffeine limit',
    verdict:'Even Keel is a ready-mixed half-caff for households that want one bag rather than weighing regular and decaf beans separately. Counter Culture states a 50/50 bean blend, but that is not a measured half-caffeine cup. The exact decaf component and roast wording deserve a bag-date check.',
    fit:['A single whole-bean bag for a half-caff routine','A graham-and-molasses roaster flavor brief','Buyers willing to check a changing component selector'],
    skip:['You need a medically precise caffeine dose','You require a named stable decaf process','You want a clear single roast label without a page discrepancy'],
    identity:[
      'Counter Culture says Even Keel combines regular and decaffeinated organic coffees in a 50/50 blend. It is distinct from Slow Motion, the full-decaf product, and from buying two bags to mix at home. The current roast-date selector shows several historical combinations; visible text does not reliably pair each component list with the selected period, so this review does not assign one origin percentage table to a bag it has not seen. The variety and decaffeination route of the complete current blend are not established by the accessible page. [1] [2]',
      'The main product badge calls Even Keel medium-dark, while the story paragraph calls it medium. Both are roaster text on the same checked page. We disclose the mismatch rather than choosing one as a measured roast result. The 12 oz direct US base was $20, with 24 oz and 5 lb sizes listed. [1]'
    ],
    flavor:[
      'Graham cracker, molasses and soft are Counter Culture’s notes. The Guardian’s 2026 comparison tried a bag of Even Keel and found its flavor less distinctive than the reviewer’s favored coffees. That outside reaction can help set a risk, but is neither our tasting nor a verdict on every roast period. A half-caff discussion identified Even Keel as one whole-bean option; it did not measure caffeine or evaluate the current blend. [1] [3] [4]',
      'The reason to choose this bag is routine simplicity. If distinctive flavor is the priority, a buyer may prefer to combine two coffees they already like, but that adds weighing and grinder-switch work. Even Keel trades that control for one packaged recipe.'
    ],
    brew:[
      'Counter Culture publishes a French-press start of 50 g coffee to 800 g water at 205°F with a six-minute schedule. That is a 1:16 ratio for that method, not an espresso target. The bag can be ground for another brewer, but the water and grind should follow that brewer rather than a generic half-caff rule. [1]',
      'Mixing regular and decaf beans does not make the cup’s caffeine exactly one half of a particular regular coffee. Bean lots and brewing extraction vary, and we have no assay for Even Keel. If a strict caffeine limit matters, ask the roaster for product-specific information or use an independently measured option; do not infer milligrams from the 50/50 ingredient statement.'
    ],
    fresh:[
      'A 12 oz first bag tests whether the premixed flavor and caffeine routine suit you before the 24 oz or 5 lb commitment. Match its roast date to the current blend selector if component identity matters. Keep opened beans sealed and dry; repeated freezer transfers can add moisture risk. [1] [5]',
      'A half-caff household may consume fewer grams per week than a regular morning-coffee household. Calculate use before bulk buying. An unopened-looking bag image says nothing about the bag that arrives.'
    ],
    value:[
      'Even Keel’s October 16 US direct base was $20 per 12 oz, roughly $0.059 per gram. An illustrative 18 g dose contains about $1.06 of beans before waste, shipping, tax or milk. This is pack arithmetic, not a caffeine or cup-quality measurement. [1]',
      'Two separate 12 oz bags let a household change its mix but cost more up front and can become stale at different rates. Even Keel simplifies inventory. Compare the actual combined checkout and likely consumption, not an assumed permanent subscription discount.'
    ],
    comparison:[
      'For full decaf, choose Slow Motion only if its cocoa-and-molasses brief and documented decaf route suit the brewer. For regular caffeine with a familiar medium profile, Fast Forward is the adjacent Counter Culture bag. Neither substitutes for an exact caffeine assay. [7]',
      'The existing decaf guide addresses fully decaffeinated choices by brew method. Even Keel solves a different decision: a regular/decaf mix already packaged as one coffee.'
    ],
    externalTitle:'The Guardian: Counter Culture range comparison', externalUrl:guardian,
    externalNote:'Independent taste impression of one Even Keel sample, explicitly bounded to that bag.',
    ownerTitle:'r/thirdwavedecaf: half-caff options', ownerUrl:'https://www.reddit.com/r/thirdwavedecaf/comments/1vu1qjk/are_there_any_good_brands_out_there_with_a_great/',
    ownerNote:'Self-selected discussion naming Even Keel and home mixing; no caffeine assay.',
    altName:'Counter Culture Slow Motion Decaf', altSlug:'/coffee-beans/counter-culture-slow-motion-decaf/',
    altReason:'fully decaffeinated coffee with a separate brew and process brief',
    faqBrew:'Counter Culture gives a 50 g to 800 g French-press starting recipe. Use a separate recipe for espresso.',
    faqIdentity:'The coffee is a 50/50 regular and decaf bean blend, not a measured 50% caffeine serving.',
    extraSourceTitle:'US FDA: caffeine in decaf', extraSourceUrl:'https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much',
    extraSourceNote:'General caffeine context; not an Even Keel cup assay.'
  },
  {
    id:'CD-BN-000019', slug:'/coffee-beans/equator-eye-of-the-tiger-espresso/',
    roaster:'Equator Coffees', coffee:'Eye of the Tiger Espresso',
    image:'https://www.equatorcoffees.com/cdn/shop/files/Eye-of-the-Tiger-Espresso-Equator-Coffees-12oz.webp?v=1776972980',
    official:'https://www.equatorcoffees.com/products/eye-of-the-tiger-espresso',
    price:'$19.50 for 12 oz', sizes:'12 oz, 2 lb and 5 lb; whole bean or selected grind',
    roast:'Medium-light; current Equator listing', notes:'cherry cola, gingersnap, chocolate',
    origin:'Current accessible page: Costa Rica Tarrazú and Rwanda Nyampinga; earlier indexed page showed different components',
    process:'Costa Rican Catuai honey processed; Rwandan Bourbon washed in current page',
    variety:'Catuai and Bourbon in the current accessible component panel',
    hook:'a bright seasonal espresso that cannot be frozen in time',
    verdict:'Eye of the Tiger is the adventurous espresso choice: Equator gives a medium-light roast, current Costa Rican and Rwandan component detail, and an 18 g to 46 g starting shot. Its seasonal profile can change, so the recipe and the bag must be checked together rather than assuming one permanent origin list.',
    fit:['Espresso drinkers seeking a brighter roaster direction','Buyers who want an explicit starting dose and yield','A small milk drink where the coffee can still be noticed'],
    skip:['You want a fixed origin or a dark, low-fruit profile','You need a permanent recipe that never changes with the lot','You depend on pre-ground espresso matching your own basket'],
    identity:[
      'Equator calls Eye of the Tiger a seasonally evolving espresso blend and says the component profile may change about every three months. The accessible product page checked October 16 currently names Costa Rica Tarrazú honey-processed Catuai from Hermanos Monge Ureña and washed Bourbon from Rwanda’s Nyampinga Cooperative. A separately indexed version of the same URL showed Guatemala, Colombia and Papua New Guinea. That is evidence of change or indexing lag, not two compositions to merge. Use the live record and the delivered bag for your roast date. [1] [2]',
      'The official US selector listed whole bean and several grinds, with 12 oz, 2 lb and 5 lb sizes; 12 oz was $19.50 before shipping and tax. The credited bag photo has its own older printed notes. It identifies the product line, not the current component panel or the contents of a future bag. [1]'
    ],
    flavor:[
      'Cherry cola, gingersnap and chocolate are the current roaster notes. Equator describes a light, bright espresso and says the Costa Rican coffee contributes body and sweet fruit, while the Rwandan component adds citrus and spice. These are the roaster’s descriptions, not a Coffeedant sensory finding. The Kitchn tasted an older Eye of the Tiger bag in a home espresso context; its favorable impression cannot confirm today’s components or our cup. [1] [3]',
      'An owner thread describes using Eye of the Tiger for home drinks, but its recipe, date and bag are not controlled. The evidence supports an adventurous flavor target and a useful recipe, not a comparative sensory ranking or consistency rate. Buyers who dislike a brighter espresso should treat the stated direction as a reason to skip.'
    ],
    brew:[
      'Equator’s current espresso panel uses 18 g coffee and 46 g beverage, labeled 1:2.5, with a 23-second example on a Barista Express. The masses are an actionable start if your basket accepts 18 g. The time and grind are not promises on another machine. A scale and fresh whole beans allow you to compare the actual shot with the roaster’s target. [1]',
      'Equator also gives moka-pot and AeroPress starting recipes. Those are different devices and ratios; the “espresso grind” purchase option is a convenience, not proof of a perfect grind for your machine. For milk, begin with a smaller drink if you want to assess whether the cherry-cola direction remains clear, then adjust from your own tasting.'
    ],
    fresh:[
      'Seasonal blend changes make the roast date and product panel especially useful. Record the component summary and recipe with a first 12 oz bag. If a later bag changes origin, start the dial-in again instead of treating a saved grinder number as universal. [1]',
      'Equator offers 2 lb and 5 lb, but the larger bag ties you to one seasonal iteration and a freshness plan. Keep opened whole beans sealed, cool and dry. An office or café may finish a bulk pack quickly; an occasional home espresso drinker may not.'
    ],
    value:[
      'The October 16 US direct base was $19.50 for 12 oz. At an illustrative 18 g dose, the bean portion is about $1.03 before dialing waste, milk, water, tax or delivery. This is arithmetic from the displayed pack price and a common 340 g conversion, not a measured drink cost. [1]',
      'A 2 lb or 5 lb price-per-ounce saving is useful only if the current recipe and changing profile fit and the pack will be consumed at an acceptable freshness. Do not apply a retailer’s old sample review to a bulk order without checking the lot.'
    ],
    comparison:[
      'Onyx Monarch is the existing full-review alternative for a darker, cocoa-and-fruit espresso brief. Intelligentsia Black Cat Classic is another recurring espresso blend. Eye of the Tiger makes a distinct case through explicit seasonal component disclosure and an 18 g/46 g recipe. [7]',
      'Equator Blend is the namesake medium-dark coffee with detailed filter recipes and a cream-and-sugar claim. It is a better first look for a household that mainly makes batch drip and only occasionally makes espresso.'
    ],
    externalTitle:'The Kitchn: Eye of the Tiger home espresso sample', externalUrl:'https://www.thekitchn.com/equator-coffees-review-23174101',
    externalNote:'Independent tasting of an older seasonal iteration; not current-lot confirmation.',
    ownerTitle:'r/espresso: Equator espresso discussion', ownerUrl:'https://www.reddit.com/r/espresso/comments/1e90h7q/equator_espresso/',
    ownerNote:'Self-selected café and home comments; no controlled current-bag assessment.',
    altName:'Onyx Coffee Lab Monarch', altSlug:'/coffee-beans/onyx-monarch/',
    altReason:'a separate cocoa-and-fruit espresso brief with a full review',
    faqBrew:'Equator gives 18 g coffee to 46 g beverage as a starting espresso recipe. Adjust grind and yield for the delivered bag and basket.',
    faqIdentity:'No. Equator says the blend is seasonal, and older indexed versions name other component origins.',
    extraSourceTitle:'Equator brew guides', extraSourceUrl:'https://www.equatorcoffees.com/pages/brew-guides',
    extraSourceNote:'Device-specific brewing context; not a Coffeedant extraction.'
  },
  {
    id:'CD-BN-000020', slug:'/coffee-beans/equator-blend/',
    roaster:'Equator Coffees', coffee:'Equator Blend',
    image:'https://www.equatorcoffees.com/cdn/shop/files/Equator-Blend-Equator-Coffees-12oz.webp?v=1771453371',
    official:'https://www.equatorcoffees.com/products/equator-blend',
    price:'$18.50 for 12 oz', sizes:'12 oz, 2 lb and 5 lb; whole bean or selected grind',
    roast:'Medium-dark; Equator listing', notes:'cedar, apricot, marzipan, milk chocolate, nutmeg',
    origin:'Current listing: Sumatra, Kenya, Colombia and Guatemala',
    process:'Sumatran component wet hulled; Kenyan, Colombian and Guatemalan components washed',
    variety:'Named current components include Onanganjang, Sigararutang, SL28, SL34, Ruiru 11, Caturra, Castillo, Bourbon and Catuai',
    hook:'a medium-dark house blend whose filter evidence is strongest',
    verdict:'Equator Blend is a practical one-bag candidate for medium-dark drip and French press, with an unusually detailed current origin panel and Equator’s own cream-and-sugar positioning. The page also offers espresso grind, but gives filter recipes rather than a portafilter target; espresso buyers should be ready to dial in without a roaster shot recipe.',
    fit:['Batch drip or French press with a medium-dark brief','A household that adds cream or sugar and wants a roaster-stated use case','Buyers who value current component and process disclosure'],
    skip:['You mainly need an exact espresso dose and yield','You expect origins to stay fixed forever','You want a strictly chocolate-only bag without cedar or apricot cues'],
    identity:[
      'Equator’s current namesake blend panel names wet-hulled Sumatra, washed Kenya, washed Colombia and washed Guatemala. It lists component regions and several varieties, including Sumatran Onanganjang and Sigararutang, Kenyan SL28/SL34/Ruiru 11 and Colombian Caturra/Castillo. This is unusually useful buying detail, but it is still the current panel of a recurring blend, not a guarantee of every later bag. An older owner post named Brazil instead of Guatemala, illustrating why dated sources must not be merged into one supposed permanent recipe. [1] [4]',
      'The direct US listing offered whole bean, several grind choices, and 12 oz, 2 lb and 5 lb. The 12 oz base was $18.50 on October 16. The product image identifies the bag; printed notes and component graphics can lag the current web panel. Check the actual label and roast date. [1]'
    ],
    flavor:[
      'Cedar, apricot, marzipan, milk chocolate and nutmeg are Equator’s current flavor words. Equator’s director of coffee culture describes a medium-dark coffee that can take cream and sugar while remaining drinkable black. This is an attributed roaster judgment, not a Coffeedant tasting. The Kitchn’s older Equator article mentions a household impression of Equator Blend, but its bag predates the current component panel and cannot validate this harvest. [1] [3]',
      'The combination is less single-note than a pure chocolate brief. Cedar and apricot might appeal to someone who wants a little lift; they may deter someone seeking only a heavy dark espresso. We cannot infer note intensity or rank it against a different coffee without a shared tasting protocol.'
    ],
    brew:[
      'Equator publishes 1:15 starts for drip, French press and V60 on the current page, including 24 g coffee to 360 g water for a V60. That is unusually specific for a house blend and lets a filter buyer start with a reproducible recipe. Its espresso-grind selector is not an espresso extraction recipe; a home portafilter needs its own dose, yield and grind. [1]',
      'If one person makes drip and another makes a latte, whole beans and an adjustable grinder give more control than pre-ground “espresso” selected at checkout. For a first trial, make the dominant household brew according to the roaster’s method, note the result, then decide if the second method merits a separate dial-in.'
    ],
    fresh:[
      'An Equator café bag, direct-shipped bag and grocery bag can have different roast dates. Check the actual package, and store opened whole beans sealed and dry away from heat and odors. Do not treat the page’s current component panel as evidence of the bag on a shelf. [1] [5]',
      'A 2 lb or 5 lb order is sensible only after you know the blend and your weekly consumption. The 12 oz choice gives a lower-risk answer to whether the medium-dark profile and current component mix work for your household.'
    ],
    value:[
      'At $18.50 for 12 oz on October 16, Equator Blend’s simple bean cost is about $0.054 per gram. A 24 g V60 dose contains about $1.31 of beans before shipping, tax, waste, filters and water. The roaster’s 24 g/360 g recipe is a start, not a Coffeedant measured cup. [1]',
      'The base price is slightly below the $19.50 Eye of the Tiger listing at this check, but the buying roles differ. A dollar difference should not override whether you mainly need filter instructions or a bright espresso target. Compare current shipping and stock before ordering.'
    ],
    comparison:[
      'Eye of the Tiger is Equator’s brighter seasonal espresso with an explicit 18 g/46 g shot start. Decaf Equator Blend is a separate product with different processing and caffeine scope. Keep the names and bags distinct when comparing seller offers. [7]',
      'For milk drinks, the medium-dark Equator Blend has the roaster’s direct cream-and-sugar claim. Our separate guide contrasts that with espresso-first and decaf options instead of calling one coffee a universally best latte bean.'
    ],
    externalTitle:'The Kitchn: older Equator coffees report', externalUrl:'https://www.thekitchn.com/equator-coffees-review-23174101',
    externalNote:'Older household impression of Equator Blend within an Eye of the Tiger report; not a current-lot test.',
    ownerTitle:'r/espresso: older Equator Blend owner account', ownerUrl:'https://www.reddit.com/r/espresso/comments/uruu54',
    ownerNote:'Older self-selected account names a different origin mix; not current composition evidence.',
    altName:'Equator Eye of the Tiger Espresso', altSlug:'/coffee-beans/equator-eye-of-the-tiger-espresso/',
    altReason:'an espresso-first bright seasonal blend with a published shot start',
    faqBrew:'Equator gives 1:15 starts for drip, French press and V60. The page does not provide a comparably specific espresso shot target.',
    faqIdentity:'The current panel lists Sumatra, Kenya, Colombia and Guatemala; recheck the bag and live page for future iterations.',
    extraSourceTitle:'Equator FAQs', extraSourceUrl:'https://www.equatorcoffees.com/pages/faq',
    extraSourceNote:'Ordering and product context; verify current delivery details at checkout.'
  }
];

const makeReview = (r:RecordData):BeanReviewData => ({
  slug:r.slug, productId:r.id, roaster:r.roaster, coffee:r.coffee,
  title:r.roaster + ' ' + r.coffee + ' review: ' + r.hook,
  description:'Research-led US review of ' + r.roaster + ' ' + r.coffee + ': exact bag, current components, attributed notes, brew fit, freshness and dated direct value.',
  image:r.image, imageAlt:'Official ' + r.roaster + ' ' + r.coffee + ' bag image',
  imageCredit:'Official roaster product image for identification; packaging or printed notes may lag a current blend. No Coffeedant tasting photograph.',
  imageSource:r.official, published:date, updated:date, market:'United States',
  price:r.price, priceChecked:'October 16, 2026', officialUrl:r.official,
  verdict:r.verdict, bestFor:r.fit, skipIf:r.skip,
  authorNote:'I compared the exact US roaster listing with independent and owner context on October 16, 2026. I have not bought, brewed or tasted this bag.',
  facts:[
    {label:'Identity',value:r.roaster + ' ' + r.coffee + ', whole-bean option'},
    {label:'Roast',value:r.roast}, {label:'Roaster notes',value:r.notes + '; not Coffeedant tasting'},
    {label:'Current origin',value:r.origin}, {label:'Process',value:r.process},
    {label:'Variety',value:r.variety}, {label:'Sizes listed',value:r.sizes}
  ],
  sections:[
    {id:'identity',title:'Exact bag and current component boundary',paragraphs:r.identity},
    {id:'flavor',title:'What flavor evidence can and cannot say',paragraphs:r.flavor},
    {id:'brewing',title:'Choose the brew and keep its recipe separate',paragraphs:r.brew},
    {id:'freshness',title:'Roast date, storage and pack size',paragraphs:r.fresh},
    {id:'value',title:'Dated US value without a taste score',paragraphs:r.value},
    {id:'alternatives',title:'Choose a different bag for a different reason',paragraphs:r.comparison}
  ],
  alternatives:[
    {title:r.altName,reason:r.altReason,href:r.altSlug,internal:true},
    {title:'Best coffee beans for milk drinks',reason:'Compare exact whole-bean products by the milk-drink decision.',href:milkGuide,internal:true},
    {title:'Coffee bean reviews',reason:'Browse other roast, brew and caffeine choices.',href:'/coffee-beans/',internal:true}
  ],
  faqs:[
    {question:r.faqIdentityQuestion ?? 'What is ' + r.coffee + '?',answer:r.faqIdentity},
    {question:'What does ' + r.coffee + ' taste like?',answer:r.roaster + ' describes ' + r.notes + '. Coffeedant has not tasted this coffee.'},
    {question:r.faqBrewQuestion ?? 'Which brewing method fits ' + r.coffee + '?',answer:r.faqBrew},
    {question:'Is the listed price guaranteed?',answer:'No. The US direct base for 12 oz was ' + r.price.split(' for ')[0] + ' on October 16, 2026; shipping, tax, promotions and stock can change.'},
  ],
  sources:[
    {id:'s1',title:r.roaster + ': ' + r.coffee + ' product listing',href:r.official,note:'Exact current identity, notes, roast, components where available, sizes, brew and US direct base price.',checked:date},
    {id:'s2',title:'Counter Culture on year-round components',href:yearRound,note:'General explanation of how recurring blend components change; use with date-specific product record.',checked:date},
    {id:'s3',title:r.externalTitle,href:r.externalUrl,note:r.externalNote,checked:date},
    {id:'s4',title:r.ownerTitle,href:r.ownerUrl,note:r.ownerNote,checked:date,community:true},
    {id:'s5',title:'Counter Culture coffee freshness guidance',href:freshness,note:'Roast-date and opened whole-bean storage context.',checked:date},
    {id:'s6',title:'Stumptown whole-bean storage guidance',href:storage,note:'Independent roaster context on moisture and freezer handling; not product-specific.',checked:date},
    {id:'s7',title:r.altName + ' Coffeedant review',href:'https://coffeedant.com' + r.altSlug,note:'Exact alternative product with a separate source boundary.',checked:date},
    {id:'s8',title:r.extraSourceTitle,href:r.extraSourceUrl,note:r.extraSourceNote,checked:date}
  ],
  methodology:[
    'This is a research-led US assessment. The exact roaster listing controls identity, current component description, base price and brew advice. Independent and owner reports are attributed to their own sample, date and recipe. Coffeedant has not bought, brewed, tasted, measured or photographed this coffee. We assign no numeric sensory score.',
    'Sources were checked October 16, 2026. Recheck the delivered roast date, component panel, selected size, stock and checkout total. A packaged roast direction or flavor note is not a controlled comparison across bags.'
  ],
  finalTitle:'Buy ' + r.coffee + ' for its documented role',
  finalVerdict:r.verdict + ' Start with the 12 oz whole-bean option and let a saved recipe on the actual bag decide the next order.'
});

const weekdayBeans20261016:BeanReviewData[] = records.map(makeReview);
export default weekdayBeans20261016;
