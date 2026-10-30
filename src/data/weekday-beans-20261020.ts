import type { BeanReviewData } from './bean-reviews';

const date = '2026-10-20';
const freshness = 'https://counterculturecoffee.com/blogs/counter-culture-coffee/coffee-basics-freshness';
const storage = 'https://support.stumptowncoffee.com/hc/en-us/articles/5568076789901-Where-should-I-store-my-coffee-In-the-freezer-On-the-counter';

type Bean = {
  id: string; slug: string; roaster: string; coffee: string; official: string; image: string;
  roast: string; origin: string; process: string; variety: string; notes: string; sizes: string;
  price: string; hook: string; verdict: string; best: string[]; skip: string[];
  identity: string[]; flavor: string[]; brew: string[]; freshness: string[]; value: string[]; compare: string[];
  independent: { title: string; url: string; note: string };
  owner: { title: string; url: string; note: string };
  method: { title: string; url: string; note: string };
  alternative: { title: string; slug: string; reason: string };
};

const beans: Bean[] = [
  {
    id:'CD-BN-000021', slug:'/coffee-beans/onyx-geometry/', roaster:'Onyx Coffee Lab', coffee:'Geometry',
    official:'https://onyxcoffeelab.com/products/geometry', image:'https://onyxcoffeelab.com/cdn/shop/files/geometry-10oz-v2.webp?v=1785978501&width=640',
    roast:'Light; Onyx calls it Agtron 130', origin:'Colombia and Ethiopia; component microlots rotate', process:'Washed', variety:'Mixed; no single fixed variety for the complete blend',
    notes:'berries, stone fruit, Earl Grey, honeysuckle, rounded', sizes:'2 oz, 10 oz, 2 lb and 5 lb selectors observed; verify live checkout', price:'Check current 10 oz price',
    hook:'a light washed blend with a real espresso recipe',
    verdict:'Geometry is a defensible first bag for a buyer who wants a light, floral and fruit-led coffee for both filter and espresso. Onyx publishes distinct recipes for both. Its Colombian and Ethiopian components change every few months, so the named flavor direction and recipe are a starting point, not a guarantee for the next bag.',
    best:['Light-roast filter and espresso in one household','A roaster-published recipe for each method','Buyers comfortable with a changing microlot blend'],
    skip:['You want a low-fruit, chocolate-heavy espresso','You need a fixed farm or variety every order','You cannot allow time to dial in a light espresso'],
    identity:[
      'Onyx defines Geometry as a washed Colombian and Ethiopian blend. It says its component coffees are updated about every two to three months to preserve a flavor target as harvests move. The current page calls the variety mixed. That makes the exact roaster and product stable, while the individual farms and varieties need a fresh bag-date check. [1]',
      'The product page places Geometry on its light roast range and names filter and espresso as preferred extractions. A bag image identifies the product line; it cannot prove which Colombian or Ethiopian microlots are in a future delivery. The 10 oz selector is the sensible first purchase before considering the 2 lb or 5 lb packs. [1]'
    ],
    flavor:[
      'Berries, stone fruit, Earl Grey and honeysuckle are Onyx tasting notes, not flavors Coffeedant observed. Onyx describes a rounded result despite the light roast. An independent older home-brewing account discusses a particularly expressive Geometry sample, but its bag date and recipe differ from the product panel checked here. It cannot establish a repeatable sensory score. [1] [3]',
      'This is the bean to consider when fruit and tea-like cues are attractive. A buyer who calls those cues sour may prefer Southern Weather or an existing cocoa-led blend. One self-selected owner thread also shows how grind and bag age can affect impressions; it is context for uncertainty, not a satisfaction rate. [4]'
    ],
    brew:[
      'Onyx publishes a 25 g coffee to 400 g water Origami/Hario cone start at 205°F and a separate 19 g in to 45 g out espresso start. The latter is a beverage target, not 45 g of water added to the portafilter. Save separate grinder settings and adjust the actual bag against your basket and water. [2]',
      'Light washed espresso may require careful grind and temperature adjustment on a machine with limited controls. The published recipe is an Onyx starting point, not a Coffeedant extraction result. For filter, keep the 1:16 ratio and change one variable at a time before deciding whether this fruit-led style fits you.'
    ],
    freshness:[
      'Check the delivered roast date and match it to the current composition. A 10 oz bag offers roughly fourteen 20 g filter doses before dial-in waste, so a mixed-method household can learn quickly without committing to bulk. Protect opened whole beans from air, heat and moisture; grind just before use. [5] [6]',
      'The blend may change before your second order. Record the component panel, dose and grinder setting on the first bag, then treat the next delivery as a fresh dial-in rather than assuming an unchanged recipe. No package photograph establishes current freshness.'
    ],
    value:[
      'The international storefront selector and US checkout context were not reliably aligned at this check. This review therefore gives no verified US price or discount. Compare the current 10 oz delivered total with the 10 oz or 12 oz alternative you actually buy, and confirm stock, shipping and roast date. [1]',
      'Geometry earns consideration for two documented brew pathways and unusually clear component-change disclosure. If you only make a large chocolate-led latte, paying for a floral blend and then masking it in milk may be poor fit regardless of the displayed bag price.'
    ],
    compare:[
      'Onyx Southern Weather has a more moderate roast and milk-chocolate brief; Onyx Monarch is darker and explicitly aimed at larger milk drinks. Geometry is the light, tea-and-fruit branch of that family. These are product-positioning differences, not a shared Coffeedant tasting ranking. [1] [7]',
      'Counter Culture Apollo is another floral/citrus direction with its own rotating components. Read its full review if that flavor target matters more than Onyx’s published Geometry espresso and cone recipes.'
    ],
    independent:{title:'Leaf & Grain Society: Geometry sample account',url:'https://www.leafngrainsociety.com/pairings/onyx-geometery-a-f1-car-kind-of-coffee/',note:'Older personal sample impression; date and extraction do not verify a current bag.'},
    owner:{title:'r/pourover: Geometry owner discussion',url:'https://www.reddit.com/r/pourover/comments/1vkexiv/onyx_geometry/',note:'Self-selected brewing impressions; no representative quality claim.'},
    method:{title:'Onyx Geometry brew guides',url:'https://onyxcoffeelab.com/pages/brew-guides',note:'Official filter and espresso starting recipes, distinct from Coffeedant testing.'},
    alternative:{title:'Onyx Coffee Lab Monarch',slug:'/coffee-beans/onyx-monarch/',reason:'a darker cocoa-and-fruit espresso brief that Onyx positions for milk'}
  },
  {
    id:'CD-BN-000022', slug:'/coffee-beans/onyx-southern-weather/', roaster:'Onyx Coffee Lab', coffee:'Southern Weather',
    official:'https://onyxcoffeelab.com/products/southern-weather', image:'https://onyxcoffeelab.com/cdn/shop/files/southernweather.webp?v=1736189959&width=640',
    roast:'Moderate; Onyx lists ground Agtron 123', origin:'Honduras, Colombia and Ethiopia; rotating microlots', process:'Washed', variety:'Mixed; exact lots rotate',
    notes:'milk chocolate, plum, candied walnuts, juicy citrus finish', sizes:'10 oz whole bean shown; verify other live selectors', price:'Check current 10 oz price',
    hook:'a moderate washed blend for a chocolate-and-citrus filter cup',
    verdict:'Southern Weather suits a buyer seeking a moderate Onyx blend with chocolate and nut cues plus a citrus finish. Its official page foregrounds filter brewing, while Fellow publishes a separate espresso starting recipe for a sampled bag. That makes espresso plausible, but neither source establishes the taste of a future lot or a universal milk-drink winner.',
    best:['A balanced filter brief with chocolate and fruit','A moderate Onyx roast instead of Geometry’s lighter direction','Someone willing to check a changing component panel'],
    skip:['You require one fixed origin or variety','You want a heavy, fruit-free dark roast','You need a verified current espresso recipe from Onyx itself'],
    identity:[
      'Onyx lists Honduras, Colombia and Ethiopia for the current Southern Weather blend, with washed processing and mixed varieties. It calls the roast “moderate” and gives ground Agtron 123. The microlots rotate, so these are the checked page’s current broad origins rather than a permanent farm recipe. [1]',
      'Southern Weather whole bean should not be confused with Onyx’s instant coffee of the same name. The instant version is a separately processed soluble product and does not supply evidence for whole-bean price, extraction or freshness. The official whole-bean bag photograph identifies the line only. [1]'
    ],
    flavor:[
      'Milk chocolate, plum, candied walnuts and a juicy citrus finish are Onyx’s notes. They suggest a middle ground between a conventional cocoa blend and a brighter washed coffee, but Coffeedant has not tasted the beans. An independent side-by-side home tasting of older Southern Weather and Tropical Weather bags offers a personal comparison, not a current-lot calibration. [1] [3]',
      'An owner report praises Southern Weather in espresso and latte, while another owner struggled with extraction. Those self-selected anecdotes show that one published note is not a recipe guarantee. Buy the smallest suitable bag if citrus is a possible dealbreaker. [4]'
    ],
    brew:[
      'Onyx marks filter as the preferred extraction. Its product material offers filter directions; Fellow’s retail listing provides a 19 g coffee to 40 g beverage espresso starting point for its own sample. We treat the Fellow recipe as a commercial third-party suggestion, not an official Onyx prescription or a Coffeedant result. [1] [2]',
      'For drip or pour-over, begin with the roaster’s current guide and write down coffee mass, water mass and grind. If espresso is your primary use, expect to dial in for the delivered bag and basket. Do not infer that a moderate roast automatically works equally well in every milk volume.'
    ],
    freshness:[
      'Read the actual roast date and component description on delivery. The evergreen name can hide a changed harvest, and an old review or image may describe a different combination. Keep opened whole beans sealed, cool and dry; avoid cycling an opened bag through condensation-prone storage. [5] [6]',
      'A small bag is the useful test when you are comparing filter with espresso. Save a first-bag recipe, but revisit grind and yield on the next lot. Larger packs only make sense when your use rate and storage keep the coffee inside your preferred freshness window.'
    ],
    value:[
      'The accessible store showed variant and location-dependent purchase context. We could not establish a reliable US delivered total, so no price or discount is claimed here. Confirm the selected whole-bean size, shipping, stock and current checkout before comparing it with a different roaster’s 12 oz bag. [1]',
      'Its practical value lies in the moderate roast and documented filter focus. If espresso is your only use, a product with a current roaster-published shot recipe may remove more uncertainty; Onyx Geometry provides one but has a much lighter flavor brief.'
    ],
    compare:[
      'Geometry is a lighter washed Colombia/Ethiopia blend with explicit filter and espresso starts. Monarch leans darker and has an Onyx milk-drink rationale. Southern Weather occupies the moderate, filter-first space with chocolate, nuts and fruit in its roaster description. [1] [7]',
      'Stumptown Holler Mountain is another daily filter option with its own flavor and availability record. Compare current bag size and roast dates rather than treating a years-old tasting post as the same lot.'
    ],
    independent:{title:'What The Froth: Onyx blend home tasting',url:'https://whatthefroth.com/onyx-coffee-lab/',note:'Older first-person Southern Weather/Tropical Weather comparison; not current-lot evidence.'},
    owner:{title:'r/espresso: Southern Weather owner discussion',url:'https://www.reddit.com/r/espresso/comments/wucja1/thoughts_on_southern_weather/',note:'Self-selected extraction difficulty from an older bag; not a defect or quality rate.'},
    method:{title:'Fellow: Southern Weather sampled brew suggestion',url:'https://fellowproducts.com/collections/onyx-coffee-lab/products/southern-weather',note:'Retailer with commercial interest; a sample-specific espresso start, not an Onyx guarantee.'},
    alternative:{title:'Onyx Coffee Lab Monarch',slug:'/coffee-beans/onyx-monarch/',reason:'a darker Onyx blend with explicit milk-drink positioning'}
  },
  {
    id:'CD-BN-000023', slug:'/coffee-beans/peets-big-bang/', roaster:'Peet’s Coffee', coffee:'Big Bang',
    official:'https://www.peets.com/products/big-bang', image:'https://www.peets.com/cdn/shop/files/25PCT_26DTC_Coffee_Bag_Medium_Big_Bang_Drop_Shadow_FV.png?v=1767122364',
    roast:'Medium, according to Peet’s', origin:'Africa/Arabia and the Americas; the story names Ethiopian Super Natural and Latin coffees', process:'Washed and natural components', variety:'Not specified for the complete blend',
    notes:'fruit tart, milk chocolate, graham crust', sizes:'16 oz whole-bean selector; separate ground and capsule formats', price:'Check current 16 oz price and stock',
    hook:'a medium Peet’s blend with a real fruit cue',
    verdict:'Big Bang is the Peet’s choice for a medium-roast buyer who welcomes a fruit cue beside chocolate and graham. The US direct page lists a 16 oz whole-bean option and useful filter-method guidance, but its sold-out state and price selector conflict at this check. Treat availability and checkout price as unverified until a seller confirms them.',
    best:['A medium Peet’s bag with a stated fruit direction','French press, pour-over or cold-brew trial','A shopper who can check a real bag date and current stock'],
    skip:['You want a deeply dark, fruit-free Peet’s profile','You require specific farm and variety detail','You need a confirmed in-stock direct order today'],
    identity:[
      'Peet’s lists Big Bang as a signature medium blend spanning Africa/Arabia and the Americas. The story specifies sweet Latin coffees and Ethiopian Super Natural; the attributes say washed and natural processing. Neither source gives fixed component percentages or a complete variety list. This whole-bean 16 oz selection is distinct from the Big Bang pods, capsules and decaf product. [1]',
      'The product page showed a 16 oz price label but also a sold-out notice. We cannot establish that the selected whole-bean variant is currently purchasable, so price and availability stay open. A retailer may have a different pack and older roast date. [1]'
    ],
    flavor:[
      'Fruit tart, milk chocolate and graham crust are Peet’s descriptors. They are useful as a buying direction, not a Coffeedant tasting or a claim that every bag has equal fruit intensity. An older Apartment Therapy blind tasting included Big Bang; its historical sample and price cannot establish the current roast or seller value. [1] [3]',
      'Home-barista owners have disagreed about how dark Big Bang tastes relative to the medium label. Their grinders, brew temperatures and older bags differ. That conflict is a reason to start with one fresh whole-bean bag, not a basis for a population score. [4]'
    ],
    brew:[
      'Peet’s product panel recommends cold brew, French press and pour-over. The generic brew guide gives method steps; it does not prove Big Bang will have the same flavor in each device. Start with the method you use daily, weigh coffee and water, and adjust grind against the delivered bag. [1] [2]',
      'The seller also offers an “espresso” grind choice, but a preground option cannot be matched to every basket. If you try Big Bang in a portafilter, buy whole bean and dial dose, grind and beverage yield separately. No Peet’s product-specific shot target was verified here.'
    ],
    freshness:[
      'Peet’s says direct beans are roasted and sealed, but that statement does not give the date on a bag at another store. Look for the delivered roast or best-by information and keep opened beans sealed away from heat and moisture. [1] [5] [6]',
      'A 16 oz pack contains about 454 g, enough for roughly twenty-two 20 g filter doses before waste. The larger bag can be economical for a daily household and less attractive for occasional coffee. Current stock and bag age matter more than a nominal serving figure on the listing.'
    ],
    value:[
      'Because the direct page presented both a price label and a sold-out message, this review does not assert an available US price. Compare the exact 16 oz whole-bean bag at a live checkout, then include delivery and the actual roast date. A 10.5 oz grocery ground pack or pod box is not the same purchase. [1]',
      'Big Bang’s value proposition is a more fruit-accented medium alternative to Peet’s dark blends. If you want chocolate without fruit, a different bag may be better even at a similar unit price.'
    ],
    compare:[
      'Peet’s Major Dickason’s is the existing darker, more traditional blend review. Arabian Mocha-Java is also dark but adds its own port, cocoa and cardamom brief. Big Bang is the medium, fruit-tart choice, with less complete farm-level detail than a current single-origin listing. [1] [7]',
      'Onyx Geometry is a much lighter fruit-and-tea direction with explicit espresso and filter recipes. Pick it for that brewing documentation, not because its tasting words can be ranked against a Peet’s bag without shared tasting.'
    ],
    independent:{title:'Apartment Therapy: older medium-roast tasting',url:'https://www.apartmenttherapy.com/coffee-beans-test-review-36718510',note:'Includes an older Big Bang sample; historical price and bag cannot establish current value.'},
    owner:{title:'Home-Barista: Big Bang owner discussion',url:'https://www.home-barista.com/coffees/peets-big-bang-t41855.html',note:'Older self-selected perceptions of roast and brew temperature; no representative score.'},
    method:{title:'Peet’s brew guides',url:'https://www.peets.com/pages/brew-guides',note:'General cold brew, French press and pour-over directions, not a Big Bang tasting.'},
    alternative:{title:'Peet’s Major Dickason’s Blend',slug:'/coffee-beans/peets-major-dickasons/',reason:'the darker, more traditional Peet’s flavor brief'}
  },
  {
    id:'CD-BN-000024', slug:'/coffee-beans/peets-arabian-mocha-java/', roaster:'Peet’s Coffee', coffee:'Arabian Mocha-Java',
    official:'https://www.peets.com/products/arabian-mocha-java', image:'https://www.peets.com/cdn/shop/files/25PCT_26DTC_Coffee_Bag_Dark_Arabian_Mocha_Java_Drop_Shadow_FV.png?v=1765599900',
    roast:'Dark, according to Peet’s', origin:'Africa/Arabia and Indo-Pacific; not a promise of only Yemen and Java', process:'Peet’s calls it “natural and rustic”; component methods not itemized', variety:'Not specified for the complete blend',
    notes:'cocoa, port, cardamom', sizes:'16 oz whole-bean selector; other grinds offered', price:'Check current 16 oz price and stock',
    hook:'a dark historic-style blend with a spice cue',
    verdict:'Arabian Mocha-Java fits the buyer who wants Peet’s darker body plus cocoa, wine-like port and cardamom in the roaster’s description. Its name refers to a historic blend style; the current listing spans broader regions and does not document an exclusively Yemeni and Javanese recipe. Direct stock and checkout value were ambiguous on October 20.',
    best:['A dark Peet’s coffee with a cocoa-and-spice brief','A buyer interested in the Mocha-Java blend tradition','Whole-bean brew experiments across press and espresso'],
    skip:['You assume the bag is solely Yemen plus Java','You want a bright medium roast without dark development','You need confirmed direct availability before reading further'],
    identity:[
      'Peet’s calls Arabian Mocha-Java a dark signature blend and lists Africa/Arabia and Indo-Pacific as broad source regions. Its story invokes historical mocha from Arabia and Java, while acknowledging that blends now use coffees from other regions. The present name does not prove one fixed country pair or farm-level recipe. [1]',
      'The attributes call the process “natural and rustic,” without a component-by-component method table or variety list. Whole bean is one of several grind choices for a 16 oz bag. The direct page also showed a sold-out message next to a price label, so stock is unresolved. [1]'
    ],
    flavor:[
      'Cocoa, port and cardamom are Peet’s tasting notes. “Port” is an analogy, not an ingredient or alcohol claim. An independent 2014 sample report was disappointed with its purchased bag; the long time gap, unknown current blend and individual palate make that a bounded counterpoint rather than a verdict on today’s product. [1] [3]',
      'One owner said they used Arabian Mocha-Java for espresso, while another Peet’s thread mentions its wine-like character. These self-selected reports are useful for expectations, not evidence of a stable tasting result or quality rate. [4]'
    ],
    brew:[
      'Peet’s allows whole bean, drip, French press and espresso grind selection. Its general brew guides cover the devices, but the Arabian Mocha-Java page does not publish a specific portafilter dose and yield. Buy whole bean when a suitable grinder is available and dial against the actual basket. [1] [2]',
      'For a press or immersion cup, note grind and steep time before changing the coffee dose. A dark roast can still be over-extracted or taste harsh under a particular recipe; the label alone cannot determine your preferred temperature or ratio.'
    ],
    freshness:[
      'Confirm the delivered bag’s roast or best-by date and packaging. Peet’s direct-roast language is not evidence of the date on a grocery bag. Keep opened whole beans sealed and dry, away from heat and odors; grind shortly before the brew you actually make. [1] [5] [6]',
      'The 16 oz size is a reasonable comparison with Peet’s other one-pound bags, but may be more than an occasional household uses while fresh. Avoid bulk or subscription decisions until the dark/spice flavor direction and real delivery pattern fit.'
    ],
    value:[
      'The page exposed a US per-pound price label but also a sold-out panel. We therefore give no confirmed available price or discount. Check the exact whole-bean variant and delivered total at an active seller before comparing it with a smaller-format coffee. [1]',
      'Its distinct value is the historic-style dark flavor brief. If you simply want a chocolate dark roast without wine or spice cues, Peet’s Major Dickason’s or Counter Culture Forty-Six may make a clearer first bag.'
    ],
    compare:[
      'Peet’s Major Dickason’s is the existing broad dark blend review; Big Bang is Peet’s medium, fruit-tart direction. Arabian Mocha-Java earns a separate page because its regional scope, dark roast and port/cardamom language create a different buying decision. [1] [7]',
      'A classic blend name is not a protected recipe. Check the current product panel if the specific Yemeni or Indonesian component matters more to you than the described profile.'
    ],
    independent:{title:'Noteworthy: 2014 Arabian Mocha-Java sample',url:'https://thenoteworthydotblog.wordpress.com/2014/11/08/peets-coffee-tea-arabian-mocha-java/',note:'Independent but twelve-year-old negative tasting; not current-blend evidence.'},
    owner:{title:'r/espresso: Peet’s bean discussion',url:'https://www.reddit.com/r/espresso/comments/182s8zy',note:'Self-selected older owner report of espresso use; no general taste claim.'},
    method:{title:'Peet’s brew guides',url:'https://www.peets.com/pages/brew-guides',note:'General device methods, not a current-bag evaluation.'},
    alternative:{title:'Peet’s Major Dickason’s Blend',slug:'/coffee-beans/peets-major-dickasons/',reason:'a Peet’s dark blend without this specific port-and-cardamom brief'}
  },
  {
    id:'CD-BN-000025', slug:'/coffee-beans/verve-streetlevel/', roaster:'Verve Coffee Roasters', coffee:'Streetlevel',
    official:'https://www.vervecoffee.com/products/streetlevel', image:'https://www.vervecoffee.com/cdn/shop/files/Streetlevel-12oz-Silo.png?v=1748900359',
    roast:'Medium; Verve rates it 6/10', origin:'Honduras, Guatemala and Colombia in the checked blend panel', process:'Not specified for the complete current blend', variety:'Not specified for the complete current blend',
    notes:'clementine, red apple, honeycomb', sizes:'6 oz, 12 oz, 2.2 lb and 5 lb choices shown; check live selector', price:'Check current 12 oz price',
    hook:'a medium all-purpose blend with fruit and honey cues',
    verdict:'Streetlevel is a useful one-bag candidate for someone moving among espresso, drip and immersion methods who likes a medium roast with fruit and honey in Verve’s flavor brief. Its current origin panel is clear at country level, but the blend lacks complete variety and process detail. An all-purpose label cannot replace separate brew recipes.',
    best:['A medium blend across several brew devices','Fruit and honey cues rather than a dark cocoa-only brief','A smaller trial bag before bulk purchase'],
    skip:['You need fully specified farms, varieties and processes','You want a very dark, low-fruit espresso','You expect one grind setting to work for all methods'],
    identity:[
      'Verve calls Streetlevel its original all-purpose blend and lists Honduras, Guatemala and Colombia on the current page. It rates the roast medium at 6/10. The page does not specify one complete variety or processing record for all components. Avoid treating the three country names as a permanent farm list; check the delivered bag. [1]',
      'The product selector shows multiple sizes including a 12 oz whole-bean bag. A photograph of that bag helps identify the item, but does not establish the exact roast date or component harvest shipped to a buyer. A 6 oz trial can make sense if the smaller variant is available at checkout. [1]'
    ],
    flavor:[
      'Clementine, red apple and honeycomb are Verve’s descriptors. They signal a sweeter, fruit-forward medium profile, not sensory findings from Coffeedant. An older independent café/bag tasting described its own Streetlevel sample; it cannot confirm today’s blend or quantify consistency. [1] [3]',
      'Owner accounts include a disappointing espresso and another very negative bag impression. They are self-selected, use different equipment and dates, and cannot support a defect rate. They do show why a first small bag and a deliberate espresso dial-in are more useful than assuming a well-known blend suits every palate. [4]'
    ],
    brew:[
      'Verve markets Streetlevel across brewing methods, including espresso. Use a separate dose, water ratio and grind for filter versus a portafilter; a single “all-purpose” product description does not imply one universal setting. The current product page’s preferred brew messaging is an invitation to experiment, not a measured Coffeedant result. [1]',
      'If you make both a morning drip pot and afternoon espresso, choose a grinder that can return to a marked setting, keep whole beans sealed and document each recipe. A fruit cue that reads pleasantly in filter may be more challenging in a short espresso shot; adjust on the actual bag rather than assuming a fixed outcome.'
    ],
    freshness:[
      'Verve says it roasts to order and ships within two business days on the direct listing. That is a seller statement; inspect the actual roast date and delivery conditions. Store opened whole beans sealed, dry and away from heat. A local retailer can have a different inventory age. [1] [5] [6]',
      'A 12 oz bag is a reasonable first assessment for a daily household. The 2.2 lb and 5 lb options require faster consumption or a deliberate storage plan. Price per ounce is not the only value measure when freshness and the brew fit are uncertain.'
    ],
    value:[
      'The live page displays size and purchase choices, but the visible selector did not establish one reliable US delivered total across variants and subscriptions. This review therefore uses check-price language. Verify the 12 oz whole-bean option, stock, shipping and current roast promise at checkout. [1]',
      'Streetlevel’s case is flexible device positioning plus a clear medium fruit-and-honey brief. If your household only drinks traditional dark lattes, its broad-use framing does not by itself justify the bag over a darker, explicitly milk-oriented coffee.'
    ],
    compare:[
      'Stumptown Hair Bender is another multi-method espresso blend with a different roaster profile. Onyx Geometry goes lighter with published exact filter and espresso starts. Streetlevel is the medium, accessible all-purpose option here, but no controlled tasting ranks them. [1] [7]',
      'For milk drinks, consult the separate milk-bean guide, which distinguishes large lattes from small cappuccinos. Verve’s fruit language may suit one drink size and disappear in another; only a repeatable personal brew can answer that.'
    ],
    independent:{title:'Coffee Blogger MKE: older Verve tasting',url:'https://coffeebloggermke.video.blog/2019/05/07/verve-coffee-the-occasional-bakery-tasting/',note:'Independent older sample impression; not current-lot or controlled espresso evidence.'},
    owner:{title:'r/espresso: Streetlevel owner discussion',url:'https://www.reddit.com/r/espresso/comments/1aibt5t/verve_street_level/',note:'Conflicting self-selected espresso experiences; no representative quality inference.'},
    method:{title:'Verve Streetlevel current product and brewing scope',url:'https://www.vervecoffee.com/products/streetlevel',note:'Roaster all-purpose positioning; no Coffeedant extraction.'},
    alternative:{title:'Stumptown Hair Bender',slug:'/coffee-beans/stumptown-hair-bender/',reason:'another multi-method espresso blend with a distinct flavor brief'}
  }
];

const headlines: Record<string,string> = {
  '/coffee-beans/onyx-geometry/':'Onyx Geometry review: washed Colombia and Ethiopia with two brew recipes',
  '/coffee-beans/onyx-southern-weather/':'Onyx Southern Weather review: a moderate filter-first blend',
  '/coffee-beans/peets-big-bang/':'Peet’s Big Bang review: a fruit-tart medium roast in a one-pound bag',
  '/coffee-beans/peets-arabian-mocha-java/':'Peet’s Arabian Mocha-Java review: historic name, current dark blend',
  '/coffee-beans/verve-streetlevel/':'Verve Streetlevel review: clementine and honey across brew methods'
};

const reviews: BeanReviewData[] = beans.map((r) => ({
  slug:r.slug, productId:r.id, roaster:r.roaster, coffee:r.coffee,
  title:headlines[r.slug],
  description:`Research-led US review of ${r.roaster} ${r.coffee}: exact whole-bean identity, attributed flavor, brewing role, freshness and buying limits.`,
  image:r.image, imageAlt:`Official ${r.roaster} ${r.coffee} whole-bean bag`,
  imageCredit:`Official ${r.roaster} product image for identification. Packaging is not proof of current contents or a Coffeedant tasting photo.`,
  imageSource:r.official, published:date, updated:date, market:'United States', price:r.price,
  priceChecked:'October 20, 2026', officialUrl:r.official, verdict:r.verdict,
  bestFor:r.best, skipIf:r.skip,
  authorNote:'I checked the exact US-facing product listing, independent sample context and owner accounts on October 20, 2026. I have not bought, brewed or tasted this bag.',
  facts:[
    {label:'Identity',value:`${r.roaster} ${r.coffee}, whole-bean option`},
    {label:'Roast',value:r.roast}, {label:'Roaster notes',value:`${r.notes}; not Coffeedant tasting`},
    {label:'Current origin',value:r.origin}, {label:'Process',value:r.process},
    {label:'Variety',value:r.variety}, {label:'Sizes',value:r.sizes}
  ],
  sections:[
    {id:'identity',title:'Exact bag and blend identity',paragraphs:r.identity},
    {id:'flavor',title:'What the flavor evidence supports',paragraphs:r.flavor},
    {id:'brewing',title:'Brew method and recipe fit',paragraphs:r.brew},
    {id:'freshness',title:'Roast date, storage and size',paragraphs:r.freshness},
    {id:'value',title:'Value and availability at this check',paragraphs:r.value},
    {id:'alternatives',title:'A different bag for a different goal',paragraphs:r.compare}
  ],
  alternatives:[
    {title:r.alternative.title,reason:r.alternative.reason,href:r.alternative.slug,internal:true},
    {title:'All coffee bean reviews',reason:'Compare exact roasters, roast direction, caffeine and brew use.',href:'/coffee-beans/',internal:true},
    {title:'Best coffee beans for espresso and drip',reason:'A separate shortlist for switching between those two methods.',href:'/coffee-beans/best-coffee-beans-for-espresso-and-drip/',internal:true}
  ],
  faqs:[
    {question:`What exactly is ${r.coffee}?`,answer:r.identity[0].replace(/ \[\d+\]/g,'')},
    {question:`What does ${r.coffee} taste like?`,answer:`${r.roaster} lists ${r.notes}. Coffeedant has not tasted this coffee; your bag and recipe may differ.`},
    {question:`Can I use ${r.coffee} for espresso?`,answer:r.brew[0].replace(/ \[\d+\]/g,'')},
  ],
  sources:[
    {id:'s1',title:`${r.roaster}: ${r.coffee} product listing`,href:r.official,note:'Exact identity, current roast, notes, origin scope, formats and any seller price or stock ambiguity.',checked:date},
    {id:'s2',title:r.method.title,href:r.method.url,note:r.method.note,checked:date},
    {id:'s3',title:r.independent.title,href:r.independent.url,note:r.independent.note,checked:date},
    {id:'s4',title:r.owner.title,href:r.owner.url,note:r.owner.note,checked:date,community:true},
    {id:'s5',title:'Counter Culture coffee freshness guidance',href:freshness,note:'General roast-date and opened whole-bean handling; not product-specific evidence.',checked:date},
    {id:'s6',title:'Stumptown storage guidance',href:storage,note:'Independent roaster context on moisture and freezer handling; not product-specific evidence.',checked:date},
    {id:'s7',title:`Coffeedant: ${r.alternative.title}`,href:`https://coffeedant.com${r.alternative.slug}`,note:'Exact alternative with a separate research-led review.',checked:date}
  ],
  methodology:[
    'This is a research-led US assessment of the exact whole-bean product. The current roaster listing controls identity and attributed notes. Independent samples and owner anecdotes are limited by their date, bag and recipe. Coffeedant has not bought, brewed, tasted, measured or photographed this coffee and assigns no numeric sensory score.',
    'Sources were checked October 20, 2026. Check the delivered roast date, component panel, stock, exact size and checkout total. A package note is a starting expectation rather than a measured result.'
  ],
  finalTitle:`Buy ${r.coffee} for its documented role`,
  finalVerdict:`${r.verdict} Start with a smaller whole-bean pack and let the delivered bag and your repeatable recipe decide any larger order.`
}));

export default reviews;
