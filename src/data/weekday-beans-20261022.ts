import type { BeanReviewData } from './bean-reviews';

const checked = '2026-10-22';
const storage = 'https://support.stumptowncoffee.com/hc/en-us/articles/5568076789901-Where-should-I-store-my-coffee-In-the-freezer-On-the-counter';
type Source = { title: string; href: string; note: string; community?: boolean };
type Draft = {
  id:string; slug:string; roaster:string; coffee:string; official:string; image:string; imageAlt:string;
  imageCredit:string; imageSource:string; title:string; verdict:string; roast:string; origin:string; process:string;
  variety:string; notes:string; pack:string; role:string; availability:string; best:string[]; skip:string[];
  identity:string[]; flavor:string[]; brewing:string[]; freshness:string[]; value:string[]; compare:string[];
  method:Source; independent:Source; owner:Source; alternative:{title:string;slug:string;reason:string};
};

const drafts:Draft[] = [
  {
    id:'CD-BN-000031',slug:'/coffee-beans/blue-bottle-three-africas/',roaster:'Blue Bottle Coffee',coffee:'Three Africas',
    official:'https://bluebottlecoffee.com/us/eng/product/three-africas',
    image:'https://res.cloudinary.com/hbhhv9rz9/image/upload/v1727193885/2024/2024%20Updated%20Packaging/Three%20Africas/M1_ThreeAfricas_Hero.png',
    imageSource:'https://bluebottlecoffee.com/us/eng/product/three-africas',
    imageAlt:'Blue Bottle Three Africas US whole-bean bag with golden raisin, winey blueberry and lemon zest notes',
    imageCredit:'Blue Bottle Coffee US product photography. The pictured 12 oz bag identifies the blend; its roast date is not established by the photograph.',
    title:'Blue Bottle Three Africas review: a fruit-led cold-brew blend',
    verdict:'Three Africas is the clearest current Blue Bottle whole-bean route to a fruit-led cold brew: the roaster explicitly describes the blend cold-brewed, and its 2026 page identifies washed and natural Ethiopian coffees with a Rwandan component. Choose it when raisin, blueberry and citrus sound welcome rather than when you want an anonymous cocoa-only concentrate. Coffeedant has not brewed or tasted the current bag.',
    roast:'Medium on the current US listing; the prose says roasted with a light touch',
    origin:'Two Ethiopian components plus a Central African component identified in 2026 as Rwanda; lots may rotate',
    process:'One washed and one natural Ethiopian component; the complete current process mix is not specified',
    variety:'Not specified for all current components',
    notes:'golden raisin, winey blueberry, lemon zest, as described by Blue Bottle',
    pack:'US 12 oz whole-bean bag pictured; confirm chosen size at checkout',
    role:'Fruit-led cold brew or bright hot filter coffee',
    availability:'Current US product page listed; verify selected bag and order mode',
    best:['A chilled black coffee with a stated fruit-and-citrus direction','A buyer who wants named process contributions rather than a generic roast label','A small first bag before choosing a cold-brew concentrate volume'],
    skip:['You want a dark chocolate-only milk concentrate','You require one fixed farm or variety across every future blend lot','You expect the roaster notes to be a Coffeedant tasting result'],
    identity:[
      'This review concerns the current US Three Africas whole-bean blend, not Blue Bottle’s bottled cold brew or a Korean 250 g regional pack. The US page describes two Ethiopian components, one washed and one natural, with a Central African coffee. Its 2026 sourcing feature names Rwanda for that component. The complete farms and varieties are not fixed on the product panel, so check the actual delivered bag before assigning an immutable recipe. [1]',
      'The listing calls Three Africas medium roast and elsewhere says the components are roasted with a light touch. Those are roaster descriptions, not an independently measured roast color. Its exact distinction from Giant Steps is a fruit-and-citrus target and declared cold-brew role; Giant Steps is the darker cocoa-led option. [1] [7]'
    ],
    flavor:[
      'Golden raisin, winey blueberry and lemon zest are Blue Bottle’s target notes. A March 2026 independent home account prepared a particular bag as hot filter coffee, while an older owner discussion describes differing fruit impressions. Neither source can tell us what a new US cold-brew batch tastes like after a long immersion. [1] [3] [4]',
      'Blue Bottle’s washed and natural Ethiopian components offer a plausible reason for its advertised fruit range, but processing does not guarantee those notes in every cup. Choose a single bag, write down grind, water and steep time, and compare it black before using milk that may mask the fruit you bought it for.'
    ],
    brewing:[
      'The roaster explicitly says this blend has depth and luminosity when cold-brewed, but the product panel’s 27 g to 350 g hot pour-over guide is not a cold-brew recipe. Follow a dedicated immersion method, use coarse grounds and cold water, filter and refrigerate promptly. Record concentrate dilution separately from the steep recipe. [1] [2]',
      'If the first cold cup feels flat, do not infer a defective bag from a single steep: water, grind, time and dilution all change the result. Use the same brew vessel and serving dilution when comparing Three Africas with Peet’s Baridi or Big Bang. A hot bloom schedule should not be transplanted into a cold vessel.'
    ],
    freshness:[
      'Inspect the printed roast date on delivery and keep the whole beans sealed away from heat, moisture and odors. Grind just before steeping. The official 12 oz image does not verify the date of the shipment, and a cold-brew batch does not make stale storage irrelevant. [5] [6]',
      'A 340 g bag yields about eleven 30 g brews before waste. A concentrate made at a higher dose uses the bag faster; the economics of a larger order depend on actual household consumption and the finished brew’s safe storage, not on an assumed serving count.'
    ],
    value:[
      'The US page mixes subscription and one-time selectors and does not establish one delivered total for the exact selected pack at this check. This review makes no price or discount claim. Confirm the chosen 12 oz whole-bean option, shipping, tax and availability in the live cart. [1]',
      'The case for Three Africas is its documented fruit-led composition and cold-brew positioning. It is a weak match if the buyer’s only goal is a heavily milk-diluted chocolate drink; the existing Giant Steps review explains that darker alternative.'
    ],
    compare:[
      'Peet’s Baridi is another cold-brew-first blend but its current page shows an availability warning. Baridi’s shop and café identity does not establish a sensory win over Three Africas. Compare the exact active US product, not Peet’s prepared café beverage with a bag of Blue Bottle beans. [1] [7]',
      'Peet’s Off the Grid is a washed Colombia-and-El Salvador direction with a more chocolate-and-pear brief. If the buyer mainly brews hot espresso, Verve Sermon has a more explicit espresso role. These are documented use-case contrasts, not a blind tasting ranking.'
    ],
    method:{title:'Blue Bottle cold-brew collection',href:'https://bluebottlecoffee.com/us/eng/collection/cold-brew',note:'Current collection placement confirms the cold-brew role; product hot-pour numbers remain method-specific.'},
    independent:{title:'Island in the Net: Three Africas home bag',href:'https://islandinthenet.com/blue-bottle-coffee-three-africas-blend/',note:'March 2026 personal hot-filter account; no controlled current-lot cold brew.'},
    owner:{title:'r/Coffee: Three Africas experiences',href:'https://www.reddit.com/r/Coffee/comments/i5yuzr',note:'Self-selected older owner discussion; changing blend components and recipes limit transfer.',community:true},
    alternative:{title:'Blue Bottle Giant Steps',slug:'/coffee-beans/blue-bottle-giant-steps/',reason:'a darker cocoa-led blend in the same roaster’s cold-brew collection'}
  },
  {
    id:'CD-BN-000032',slug:'/coffee-beans/peets-baridi-blend/',roaster:"Peet's Coffee",coffee:'Baridi Blend',
    official:'https://www.peets.com/products/baridi-blend',
    image:'https://cdn.shopify.com/s/files/1/0319/0764/3436/files/25PCT_26DTC_Coffee_Bag_Medium_Baridi_Blend_Drop_Shadow_FV.png?v=1767120882',
    imageSource:'https://www.peets.com/products/baridi-blend',imageAlt:"Peet's Baridi Blend medium-roast whole-bean bag",
    imageCredit:"Peet's Coffee product image. Packaging identifies the blend; it does not verify stock or the delivered roast date.",
    title:"Peet's Baridi Blend review: the café cold-brew bean with a stock caveat",
    verdict:"Baridi is the most direct Peet's bean for someone trying to make its café-style cold brew at home: the roaster says it uses this blend in its coffeebars and designed it to stay aromatic when chilled. Its current product panel, however, shows a sold-out warning. Treat it as a useful reference and buy only if the exact whole-bean bag can be confirmed through a legitimate current seller.",
    roast:"Medium on Peet's current US page",origin:'Current attributes say Africa/Arabia and Americas; the longer origin story emphasizes East African coffees',process:'Washed in current product attributes',variety:'Not specified for the complete blend',
    notes:"citrus flower, blackberry syrup and cocoa, as described by Peet's",
    pack:"US one-pound whole-bean selector shown; confirm actual selected format",role:"Peet's-style cold brew, black or over ice",
    availability:"Peet's current page displayed a sold-out warning at this check; do not assume immediate online purchase",
    best:["Recreating a Peet's cold-brew flavor direction when a verified bag is available",'A brighter medium-roast concentrate served black or over ice','Buyers willing to confirm exact stock and roast date'],
    skip:['You need an immediately available bag from the checked Peet’s page','You want a dark, low-fruit milk drink','You assume the café’s finished cold brew is identical to your first home steep'],
    identity:[
      "Peet's calls Baridi its medium-roast coffeebar cold-brew blend and offers a whole-bean selection on the US product page. Its attributes list Africa/Arabia and Americas with washed processing, while its longer story describes a selection of East African washed coffees. That mismatch prevents a fixed country recipe claim. The café drink and this dry bean bag are related but distinct products. [1] [2]",
      "The current page also shows a sold-out message. A selector, image or indexed price does not demonstrate purchase availability; do not follow a lookalike store domain as a substitute. Check Peet's official cart or a reputable retailer for the exact current whole-bean pack and roast date before making a value comparison. [1]"
    ],
    flavor:[
      "Citrus flower, blackberry syrup and cocoa are Peet's notes. A 2025 independent tasting of a prepared Baridi cold-brew oat latte described that café drink with milk, syrup and spice, not the plain whole-bean home brew. Selected buyer comments on Shop report different hot and cold uses; they cannot establish a current batch's sensory average. [1] [3] [4]",
      "The East African story suggests a brighter chilled cup than the dark-roast stereotype, but cold extraction and dilution can mute or shift aroma. Coffeedant has not tasted it. A buyer seeking only chocolate with milk should compare Giant Steps rather than assume cocoa on the Baridi label eliminates its berry and citrus brief."
    ],
    brewing:[
      "Peet's identifies Baridi as a cold-brew coffee and gives a 12-plus-hour broad method description. A separate Peet's café beverage page says its baristas steep freshly ground Baridi for 12 hours. Neither statement supplies a universal home dose or filtration setup, so start from a dedicated cold-brew method and record coffee, water, grind, time, temperature and dilution. [1] [2]",
      "Keep the home brew cold and filter before storage. Compare the first small batch black and over ice before adding milk or syrup. If it tastes weak, check dilution first; if it feels harsh or muddy, examine grind, steep and filtration rather than calling the blend inherently bitter."
    ],
    freshness:[
      "Check the roast date on the exact bag from the seller who can actually ship it. Cold steeping is not a reason to buy a stale unknown-age pack. Store the opened whole beans sealed, dry and away from heat, then grind before each batch. The Peet's photograph is not a record of the bag you will receive. [5]",
      "A one-pound bag is roughly 454 g, allowing about fifteen theoretical 30 g doses before waste. Cold-brew concentrate may use more coffee per serving, so calculate from your own recipe. Do not buy bulk simply to match a café batch volume when household consumption is lower."
    ],
    value:[
      "A listed price cannot be treated as a current offer while the same official page displays sold out. We therefore give no verified buy-now price, discount or restock date. If availability returns, compare the exact whole-bean bag, shipping, tax and one-time versus subscription selection at checkout. [1]",
      "Baridi's value is a specific café-to-home comparison, not a guaranteed cheaper café substitute. The consumer still needs a grinder, container, filter, refrigerator space and a repeatable serving dilution. Three Africas or Big Bang are more practical first comparisons when their legitimate US stock is confirmed."
    ],
    compare:[
      "Blue Bottle Three Africas is another fruit-led cold-brew candidate with a clearer current washed/natural component description. Peet's Big Bang offers medium-roast cold-brew positioning with a different fruit-tart, milk-chocolate brief. These are separate blends; the café use of Baridi is a reason to test, not proof of superiority. [1] [7]",
      "Off the Grid brings Colombia-and-El Salvador washed components and a more pear-and-chocolate direction. It is a stronger choice if that profile sounds appealing and Baridi remains unavailable. Peet's prepared Baridi Cold Brew should never be entered as a whole-bean comparison row."
    ],
    method:{title:"Peet's prepared Baridi Cold Brew",href:'https://www.peets.com/products/baridi-cold-brew',note:'Official café beverage identifies Baridi and a 12-hour steep; not a tested home recipe.'},
    independent:{title:'Tasting Table: Baridi-based café drink',href:'https://www.tastingtable.com/1947772/peets-coffee-fall-menu-review/',note:'Independent 2025 tasting of a milk-and-syrup café drink; cannot establish plain bean flavor.'},
    owner:{title:'Shop buyer comments on Baridi',href:'https://shop.app/products/5287653048364/baridi-blend',note:'Self-selected buyer remarks on specific bags; not representative or a stock source.',community:true},
    alternative:{title:'Peet’s Big Bang',slug:'/coffee-beans/peets-big-bang/',reason:'another medium Peet’s whole-bean cold-brew candidate with a distinct fruit-tart brief'}
  },
  {
    id:'CD-BN-000033',slug:'/coffee-beans/peets-off-the-grid/',roaster:"Peet's Coffee",coffee:'Off the Grid',
    official:'https://www.peets.com/products/off-the-grid',
    image:'https://cdn.shopify.com/s/files/1/0319/0764/3436/files/25PCT_26DTC_Coffee_Bag_Medium_Off_The_Grid_Drop_Shadow_FV.png?v=1765590250',
    imageSource:'https://www.peets.com/products/off-the-grid',imageAlt:"Peet's Off the Grid US whole-bean bag",
    imageCredit:"Peet's Coffee US product photograph; current packaging illustration, not a roast-date or price receipt.",
    title:"Peet's Off the Grid review: washed Colombia and El Salvador for cold brew",
    verdict:"Off the Grid earns a separate look from Peet's dark classics: the current page identifies Colombia and El Salvador, washed processing, a bright-medium roast and a cold-brew option alongside pour-over. Its milk-chocolate, almond-butter and pear notes are a roaster target. Buyers wanting to make a clean, fruit-leaning chilled cup should still check the selected whole-bean format and live stock before ordering.",
    roast:"Bright medium on Peet's current US page",origin:'Colombia and El Salvador on the current product page',process:'Washed on the current product page',variety:'Not specified for the complete blend',
    notes:"milk chocolate, almond butter and pear, as described by Peet's",pack:'US whole-bean selector; separate grocery ground packs must not be conflated',
    role:'Cold brew or pour-over with a chocolate-and-pear brief',availability:'Current US product page and whole-bean option checked; verify active stock in cart',
    best:['A washed blend for both chilled immersion and hot paper-filter brewing','A buyer wanting fruit cues without a dark roast','Comparing one exact bag across two distinct recipes'],
    skip:['You require one single-origin farm','You want a smoky or very dark profile','You assume a flash-chilled hot recipe equals a long cold steep'],
    identity:[
      "The current Peet's US Off the Grid page names Colombia and El Salvador, washed processing and a bright-medium roast. A 2024 press release explains the launch blend, but the live product record is more relevant for the current bag; even named countries do not fix farms, harvests, varieties or proportions. This is the whole-bean product, not the separate grocery ground bag or a finished café drink. [1] [2]",
      "Peet's includes Off the Grid in its cold-brew collection and its product method panel lists cold brew beside pour-over. That gives it a real method claim but no controlled Coffeedant cup result. Confirm the grind selection remains Whole Bean and the chosen pack is available before interpreting any checkout display. [1]"
    ],
    flavor:[
      "Milk chocolate, almond butter and pear are Peet's descriptors. The Brew Adventures describes its own hot and cold samples; the writer's extraction and bag age are not stated to match a 2026 order. Owner discussions about Peet's as a brand are even broader, so they are used only as context for checking dates, not as proof of Off the Grid's reliability or taste. [1] [3] [4]",
      "The blend sounds more chocolate-centered than Baridi's citrus-and-blackberry brief, though both advertise fruit. Those are editorial comparisons of published targets, not a side-by-side tasting. If pear sounds too subtle to justify a purchase, start with one bag and compare it against the existing Big Bang review under the same cold-brew dilution."
    ],
    brewing:[
      "Peet's says Off the Grid can be cold-brewed and lists a 12-plus-hour method; it separately recommends pour-over. The hot pour-over duration is not a cold-brew time, and a flash-chilled hot coffee uses another method altogether. Use coarse grounds and a tested vessel-specific immersion start, then filter and refrigerate. [1] [2]",
      "For a fair home comparison, hold the coffee-to-water ratio, steep conditions and serving dilution steady against Big Bang. Change one variable when the actual cup is too light or heavy. Avoid converting Peet's roast and brightness indicators into an invented caffeine or acidity measurement."
    ],
    freshness:[
      "Buy the whole-bean format and inspect the printed roast date. A 10.5 oz grocery ground pack shown by retailers is not the same purchase as the roaster's online whole-bean selector. After opening, seal the beans away from heat and odors and grind only the amount planned for the next batch. [5]",
      "A concentrated cold-brew recipe can consume a bag quickly, but the correct bulk size depends on your ratio and how long finished coffee sits refrigerated. Date the batch and follow the brewer or roaster's safe-storage guidance rather than using a packet photo as a freshness guarantee."
    ],
    value:[
      "We did not verify a final one-time delivered US whole-bean price across shipping and tax, so no price or discount is quoted. Check the selected format, stock, order cadence and basket total on Peet's official page. Do not use a similarly named third-party storefront as an official Peet's offer. [1]",
      "Off the Grid's value proposition is a washed two-country blend with a distinct chilled and hot-filter role. If the household only drinks espresso, Verve Sermon's espresso-first brief is a more direct trial; if it wants an overtly berry cold brew, Baridi or Three Africas may be more relevant when available."
    ],
    compare:[
      "Peet's Big Bang has a medium, fruit-tart and milk-chocolate direction with direct cold-brew guidance, while Off the Grid is washed Colombia/El Salvador with pear and almond-butter descriptors. Shared cold-brew eligibility does not make the blends interchangeable. [1] [7]",
      "Sun Catcher is Peet's brighter Brazil-and-Kenya blend with pour-over priority and cold brew as an alternative. Off the Grid has the more chocolate-led profile and direct washed-origin record. Choose from the desired cup, not an unverified ranking of roast darkness or value."
    ],
    method:{title:"Peet's cold-brew bean collection",href:'https://www.peets.com/collections/cold-brew',note:'Current inclusion of Off the Grid among cold-brew bean options.'},
    independent:{title:'The Brew Adventures: Off the Grid sample',href:'https://www.thebrewadventures.com/coffee/off-the-grid-peets-coffee-review',note:'Independent hot and cold brew impressions from one bag; not a current controlled comparison.'},
    owner:{title:'r/Coffee: Peet’s buying and date context',href:'https://www.reddit.com/r/Coffee/comments/of7q6t/opinions_on_peets_coffee_nowadays/',note:'Older brand-level owner context only; not evidence of this exact 2026 blend.',community:true},
    alternative:{title:'Peet’s Big Bang',slug:'/coffee-beans/peets-big-bang/',reason:'a different medium-roast cold-brew blend with fruit-tart emphasis'}
  },
  {
    id:'CD-BN-000034',slug:'/coffee-beans/peets-sun-catcher/',roaster:"Peet's Coffee",coffee:'Sun Catcher',
    official:'https://www.peets.com/products/suncatcher',
    image:'https://cdn.shopify.com/s/files/1/0319/0764/3436/files/25PCT_26DTC_Coffee_Bag_Bright_Sun_Catcher_Drop_Shadow_FV.png?v=1769707315',
    imageSource:'https://www.peets.com/products/suncatcher',imageAlt:"Peet's Sun Catcher bright-roast whole-bean bag",
    imageCredit:"Peet's Coffee current US product image; it cannot confirm the roast date or actual bag supplied.",
    title:"Peet's Sun Catcher review: Brazil and Kenya in a bright filter blend",
    verdict:"Sun Catcher is the Peet's bag for someone who wants a brighter hot filter coffee and may also experiment with cold brew. Its current page identifies Brazil and Kenya, natural and washed processing, and a pour-over-first role. The strawberry, honeysuckle and citrus direction is roaster-attributed; a grocery pre-ground review cannot predict this whole-bean shipment.",
    roast:"Bright roast on Peet's current US page",origin:'Brazil and Kenya on the current US product page',
    process:'Natural and washed are listed for the blend; component assignments are not fully stated',variety:'Not specified for the complete blend',
    notes:"strawberry jam, honeysuckle and citrus, as described by Peet's",
    pack:'US one-pound whole-bean selector; separate 10.5 oz grocery ground pack also exists',
    role:'Bright hot pour-over first; cold brew is listed as an alternative',availability:'Current official product page exists but displays a sold-out message; verify exact stock',
    best:['A bright pour-over trial with a separate cold-brew option','Buyers who welcome fruit and floral roaster notes','Comparing Brazil-and-Kenya with Off the Grid’s Colombia-and-El Salvador'],
    skip:['You need an immediately purchasable bag at the checked official listing','You want a dark roast for milk-heavy concentrate','You will mistake a ground grocery sample for evidence of the current whole-bean lot'],
    identity:[
      "Sun Catcher is Peet's bright-roast blend of Brazil and Kenya on its current US page. The attributes list natural and washed processing, but do not assign each process to a fixed current farm or disclose the full variety set. A 2024 launch document describes its first recipe; that historical record cannot establish that every later harvest is unchanged. This review concerns the whole-bean selection, not the separate K-Cup or grocery ground format. [1] [2]",
      "The product page recommends pour-over and also lists cold brew, making it a filter-first choice rather than an exclusive cold-brew bean. It displays a sold-out warning at this check. Treat the title as a review of the product and its documented use, not a claim that a one-pound bag can be bought immediately from Peet's online. [1]"
    ],
    flavor:[
      "Strawberry jam, honeysuckle and citrus are Peet's descriptors. A personal 2025 blog tasting and a 2024 subscription review concern their own bags and one was pre-ground; their impressions cannot be promoted as Coffeedant's sensory findings. Selected owner comments praise or question the brightness, but not under one standardized recipe. [1] [3] [4]",
      "The documented Brazil/Kenya combination supports asking whether the buyer enjoys fruit and floral cues, while processing and roast labels alone cannot specify the result in a home cup. If the first bag is too bright, changing method, grind or water may help; it is also reasonable to prefer Off the Grid's more chocolate-led brief."
    ],
    brewing:[
      "Peet's puts pour-over first for Sun Catcher and offers cold brew as another method with a broad 12-plus-hour indication. These require separate grind, water and timing. The 2024 launch described it as bright and sweet but did not publish a universal dose that could replace a device-specific guide. [1] [2]",
      "Begin with a familiar paper-filter recipe on the delivered whole beans, recording dose and yield. For cold brew, use a coarse-grind immersion guide, filter, refrigerate and record dilution. Comparing a hot cup with cold brew is useful, but it is not a controlled taste ranking of coffees when both recipes change."
    ],
    freshness:[
      "If a reliable seller has the exact whole-bean pack, inspect its roast date before choosing quantity. Store opened beans sealed away from heat and odors, then grind only the next brew's dose. Do not treat the website's current product photo or a historical subscription bag as shipment evidence. [5]",
      "A one-pound bag can be excessive for someone making one occasional pour-over. A small pack from a reputable seller, when available, may be a better first experiment than a lower per-ounce bulk option that ages open."
    ],
    value:[
      "The official page's listed figure sits beside a sold-out message, so no live offer or discount is asserted here. Check legitimate seller stock, whole-bean size, roast date, shipping and tax. A similarly named ground grocery item has a different value equation and cannot silently substitute for the reviewed bag. [1]",
      "The useful reason to choose Sun Catcher is a documented bright Brazil/Kenya profile with two method options. Off the Grid offers a washed medium alternative, while Three Africas gives more explicit current washed/natural fruit-blend context. Neither comparison rests on an invented Coffeedant cupping."
    ],
    compare:[
      "Off the Grid uses Colombia and El Salvador and has Peet's milk-chocolate, almond-butter and pear brief; Sun Catcher targets strawberry, florals and citrus. Both can be cold-brewed, but one is pour-over-first and the other has a more chocolate-oriented cold-brew use case. [1] [7]",
      "Peet's Big Bang is a medium, fruit-tart choice with direct cold-brew recommendation and an existing full review. If the buyer wants cold brew as the only method and Sun Catcher remains unavailable, that review offers a more practical starting comparison."
    ],
    method:{title:"Peet's Bright Collection launch record",href:'https://assets.ctfassets.net/69yuuzkbsv57/79Ha0t4LcHIL7KcEe0Qpyz/fcd65677d2da8787f81801fa09d3ba22/Peet-s_Bright_Collection_Press_Release.pdf',note:'2024 launch origin and positioning; historical, not proof of the 2026 lot.'},
    independent:{title:'My Subscription Addiction: Sun Catcher sample',href:'https://www.mysubscriptionaddiction.com/2024/10/first-impressions-peets-coffee-subscription-review-coupon-october-2024.html',note:'Independent 2024 pre-ground subscription sample; cannot validate current whole-bean sensory claims.'},
    owner:{title:'Personal 2025 Sun Catcher tasting',href:'https://tomhauthor.blogspot.com/2025/08/peets-light-roast-sun-catcher-coffee.html',note:'One self-reported prior bag; preparation and roast date differ.',community:true},
    alternative:{title:"Peet's Off the Grid",slug:'/coffee-beans/peets-off-the-grid/',reason:'a less floral, washed medium blend with a chocolate-and-pear roaster brief'}
  },
  {
    id:'CD-BN-000035',slug:'/coffee-beans/verve-sermon/',roaster:'Verve Coffee Roasters',coffee:'Sermon',
    official:'https://www.vervecoffee.com/products/sermon',
    image:'https://www.vervecoffee.com/cdn/shop/files/Sermon-12oz-Silo.png?v=1737402021',
    imageSource:'https://www.vervecoffee.com/products/sermon',imageAlt:'Verve Sermon 12-ounce US whole-bean bag',
    imageCredit:'Verve Coffee Roasters product image. The pictured bag identifies Sermon, not the roast date or current component lot.',
    title:'Verve Sermon review: fruit-forward espresso with a washed Colombian anchor',
    verdict:'Sermon fits the buyer who wants a medium-roast espresso blend with a real fruit cue rather than a dark cocoa-only shot. Verve identifies natural East African coffees alongside a washed Colombian component and also allows brewed coffee. Independent and owner reports differ sharply, so the blueberry-pie target should be treated as a starting hypothesis for one fresh bag, not a guaranteed Coffeedant tasting.',
    roast:'Medium on Verve’s current US product page',origin:'Colombia and East Africa; precise East African farms and countries may change',
    process:'Natural East African components and washed Colombian component, per Verve',
    variety:'Not fully specified for all current components',notes:'blueberry pie, cocoa and candied pecan, as described by Verve',
    pack:'12 oz US whole-bean option shown; larger sizes and grind selections also offered',
    role:'Espresso first, with a brewed-coffee alternative',availability:'Current Verve US product page with 12 oz selector; check active cart',
    best:['Espresso drinkers willing to dial in a fruit-accented medium blend','A household comparing espresso and hot brewed coffee from one bag','Buyers who value a stated natural-versus-washed component structure'],
    skip:['You dislike berry or ferment-like cues in espresso','You need a fixed single-origin lot','You expect one published recipe to fit every basket'],
    identity:[
      "The current Sermon product page calls it a medium-roast blend of Colombia and East Africa, with natural-processed East African coffees and a washed Colombian component. It does not bind every future component to the countries named in an older Verve blog post. This is the whole-bean 12 oz US option, not the 6 oz or bulk selector and not another Verve espresso blend. [1] [2]",
      "Verve describes Sermon as approachable brewed or as espresso, but its older brew article says espresso best shows its intended flavor. This is a different job from Streetlevel's daily sweet espresso brief. The current product record controls the 2026 identity; old component percentages or origins should not be imported. [1] [7]"
    ],
    flavor:[
      "Blueberry pie, cocoa and candied pecan are Verve's descriptors. A recent independent personal account documents one bag, and owner discussions include both appreciation and sharp dislike of its fruit character. Those anecdotes are not a representative sensory result or evidence that every current lot carries the same intensity. Coffeedant has not tasted it. [1] [3] [4]",
      "The natural East African component can explain why the roaster intends a berry cue, while the washed Colombian component is described as structure. Neither process claim proves a particular home shot. Start with a small bag and judge whether the fruit/cocoa balance suits your milk volume and brewing water."
    ],
    brewing:[
      "Sermon is explicitly an espresso blend, but the product page does not establish one universally appropriate dose, yield or grinder setting. Begin within the basket's rated capacity, weigh the finished beverage and adjust grind against the actual bag. A hot filter recipe from Verve's old blog is a separate method, not an espresso ratio. [1] [2]",
      "For brewed coffee, hold dose and water constant when comparing with Verve Streetlevel. If an espresso tastes sour or thin, check freshness, temperature, grind and yield before deciding the blend itself is unusable. Owner dial-in threads describe individual baskets and roast ages, not a universal fix."
    ],
    freshness:[
      "Verve says it roasts to order and ships within two business days, but the individual bag's printed roast date is the buyer's evidence. Keep whole beans sealed and away from heat, then grind shortly before brewing. A 12 oz pack gives roughly nineteen theoretical 18 g doses before dialing waste. [1] [5]",
      "A larger 2.2 lb or 5 lb selector is available, yet a fruit-forward espresso can require several shots of adjustment. Order bulk only after the first bag suits the household and the consumption rate supports the storage plan."
    ],
    value:[
      "The product page displays size and purchase-mode choices; we did not verify the final US one-time delivered total, so no current price, discount or value-per-ounce ranking is asserted. Confirm whole-bean selection, size, shipping, tax and stock at checkout. [1]",
      "Its case is the documented natural/washed architecture and espresso-first fruit target. A buyer seeking a straightforward chocolate-and-caramel drink may prefer the existing Streetlevel review; cold-brew shoppers should start with the separate cold-brew guide rather than treating every medium espresso blend as purpose-built for long immersion."
    ],
    compare:[
      "Verve Streetlevel is the same roaster's separate reviewed blend with a different cocoa-and-citrus balance. Sermon names blueberry-pie and natural East African components, while Streetlevel's current formulation must be checked in its own review. Shared roaster and medium labels are not evidence of identical flavor. [1] [7]",
      "Onyx Monarch is another fruit-and-chocolate espresso blend but targets milk drinks more explicitly. Compare published roles and the delivered bag instead of calling one objectively sweeter without controlled Coffeedant tasting."
    ],
    method:{title:'Verve: how we brew Sermon',href:'https://www.vervecoffee.com/blogs/the-verve-blog/how-we-brew-sermon',note:'Older roaster method and espresso priority; old component details may not match the current page.'},
    independent:{title:'Jon Moshier: Sermon bag notes',href:'https://jonmoshier.com/notes/sermon/',note:'One 2026 independent personal bag note; no controlled cross-bag result.'},
    owner:{title:'r/pourover: divided Sermon response',href:'https://www.reddit.com/r/pourover/comments/1siqt32/verve_coffee_blueberry_help/',note:'Self-selected owner account and replies with strongly varied preferences.',community:true},
    alternative:{title:'Verve Streetlevel',slug:'/coffee-beans/verve-streetlevel/',reason:'a distinct existing Verve blend for a different espresso flavor brief'}
  },
];

const reviews:BeanReviewData[] = drafts.map((r)=>({
  slug:r.slug,productId:r.id,roaster:r.roaster,coffee:r.coffee,title:r.title,
  description:`Research-led US review of ${r.roaster} ${r.coffee}: exact whole-bean identity, roaster notes, brew role, availability and evidence limits.`,
  image:r.image,imageAlt:r.imageAlt,imageCredit:r.imageCredit,imageSource:r.imageSource,
  published:checked,updated:checked,market:'United States',price:'Check current US price',priceChecked:'October 22, 2026',
  officialUrl:r.official,verdict:r.verdict,bestFor:r.best,skipIf:r.skip,
  authorNote:'I checked current US roaster records, independent context and owner evidence on October 22, 2026. I have not bought, brewed or tasted this bag.',
  facts:[
    {label:'Identity',value:`${r.roaster} ${r.coffee}, US whole-bean product`},
    {label:'Roast',value:r.roast},{label:'Roaster notes',value:`${r.notes}; not Coffeedant tasting`},
    {label:'Origin',value:r.origin},{label:'Process',value:r.process},{label:'Variety',value:r.variety},
    {label:'Pack scope',value:r.pack},{label:'Intended role',value:r.role},{label:'Availability',value:r.availability}
  ],
  sections:[
    {id:'identity',title:'Identify this exact bag',paragraphs:r.identity},
    {id:'flavor',title:'What the flavor evidence can say',paragraphs:r.flavor},
    {id:'brewing',title:'Brew it for its intended role',paragraphs:r.brewing},
    {id:'freshness',title:'Roast date and storage',paragraphs:r.freshness},
    {id:'value',title:'Value at this US check',paragraphs:r.value},
    {id:'alternatives',title:'Choose another bag for another task',paragraphs:r.compare}
  ],
  alternatives:[
    {title:r.alternative.title,reason:r.alternative.reason,href:r.alternative.slug,internal:true},
    {title:'Coffee bean reviews',reason:'Compare exact roasters, roasts and brew roles.',href:'/coffee-beans/',internal:true},
    {title:'Cold-brew whole-bean guide',reason:'Compare beans by the chilled cup, availability and method.',href:'/coffee-beans/best-coffee-beans-for-cold-brew/',internal:true}
  ],
  faqs:[
    {question:`What is ${r.roaster} ${r.coffee}?`,answer:r.identity[0].replace(/ \[\d+\]/g,'')},
    {question:`What does ${r.coffee} taste like?`,answer:`${r.roaster} lists ${r.notes}. Coffeedant has not tasted this bag.`},
    {question:`Which brew method fits ${r.coffee}?`,answer:r.brewing[0].replace(/ \[\d+\]/g,'')},
    {question:'Are the origin and variety fixed?',answer:r.origin+' '+r.variety+' Check the delivered pack for current lot details.'},
    {question:'What package is pictured?',answer:r.imageCredit},
    {question:'Is a displayed price guaranteed?',answer:'No. Confirm the exact whole-bean size, order mode, stock, shipping and tax in the live US cart.'},
    {question:'How should I store it?',answer:'Check the roast date, seal opened whole beans away from air and heat, and grind shortly before brewing.'}
  ],
  sources:[
    {id:'s1',title:`${r.roaster} US: ${r.coffee}`,href:r.official,note:'Current exact product identity, roaster descriptions, formats and availability; checked October 22, 2026.',checked},
    {id:'s2',title:r.method.title,href:r.method.href,note:r.method.note,checked},
    {id:'s3',title:r.independent.title,href:r.independent.href,note:r.independent.note,checked},
    {id:'s4',title:r.owner.title,href:r.owner.href,note:r.owner.note,checked,community:r.owner.community},
    {id:'s5',title:'Stumptown whole-bean storage guidance',href:storage,note:'Independent roaster storage context; not proof of this delivered bag.',checked},
    {id:'s6',title:'Coffeedant bean category',href:'https://coffeedant.com/coffee-beans/',note:'Exact canonical alternatives and existing reviews.',checked},
    {id:'s7',title:`Coffeedant: ${r.alternative.title}`,href:`https://coffeedant.com${r.alternative.slug}`,note:'Distinct research-led alternative review.',checked},
    {id:'s8',title:'Product image source',href:r.imageSource,note:r.imageCredit,checked}
  ],
  methodology:[
    'This is a research-led US assessment of the exact named whole-bean product. Current roaster pages control identity and attributed flavor targets. Independent accounts and selected owners are limited by lot, date, preparation and possible commercial interest. Coffeedant has not bought, brewed, tasted, measured or photographed this coffee and assigns no numeric sensory score.',
    'Sources were checked October 22, 2026. Verify the actual pack, roast date, component panel, current stock and checkout total before ordering. Product photography illustrates identity and does not certify the shipment.'
  ],
  finalTitle:`Buy ${r.coffee} for its documented brew role`,
  finalVerdict:`${r.verdict} Start with one whole-bean bag where available and let a repeatable personal brew decide any larger order.`
}));

export default reviews;
