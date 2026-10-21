import type { BeanReviewData } from './bean-reviews';

const checked = '2026-10-21';
const brew = 'https://bluebottlecoffee.com/brew-guides/french-press';
const fresh = 'https://blog.bluebottlecoffee.com/posts/on-freshness';
const storage = 'https://support.stumptowncoffee.com/hc/en-us/articles/5568076789901-Where-should-I-store-my-coffee-In-the-freezer-On-the-counter';

type Source = { title: string; href: string; note: string; community?: boolean };
type Bean = {
  id: string; slug: string; coffee: string; official: string; image: string; imageSource: string; imageCredit: string; imageAlt: string;
  title: string; hook: string; verdict: string; roast: string; origin: string; process: string; variety: string; notes: string; sizes: string;
  best: string[]; skip: string[]; identity: string[]; flavor: string[]; brewing: string[]; freshness: string[]; value: string[]; compare: string[];
  independent: Source; owner: Source; method: Source; alternative: { title: string; slug: string; reason: string };
};

const beans: Bean[] = [
  {
    id:'CD-BN-000026', slug:'/coffee-beans/blue-bottle-hayes-valley-espresso/', coffee:'Hayes Valley Espresso',
    official:'https://bluebottlecoffee.com/us/eng/product/hayes-valley-espresso',
    image:'https://res.cloudinary.com/hbhhv9rz9/image/upload/v1758738410/2024/2024%20Updated%20Packaging/Hayes%20Valley%20Espresso/M1_HayesValleyEspresso_Hero_1.png',
    imageSource:'https://bluebottlecoffee.com/us/eng/product/hayes-valley-espresso', imageCredit:'Blue Bottle Coffee US product imagery; packaging identifies the blend, not the delivered roast date.',
    imageAlt:'Blue Bottle Hayes Valley Espresso 12-ounce US whole-bean bag',
    title:'Blue Bottle Hayes Valley Espresso review: a dark café ristretto brief', hook:'a dark, washed espresso designed for a short shot and milk',
    verdict:'Hayes Valley is the clearest Blue Bottle first bag for someone recreating its chocolate-led café espresso or a small milk drink. The US page names washed processing, dark roasting and short ristretto service. Its tasting words and café practice do not prove how a home machine will extract a particular bag.',
    roast:'Dark according to Blue Bottle US', origin:'Organic coffees from the Americas; current farm and country blend not specified on the US page',
    process:'Washed, as labeled on the current US page', variety:'Not specified for the complete blend', notes:'baking chocolate, orange zest, brown sugar', sizes:'12 oz US whole-bean bag pictured; confirm the selected live size',
    best:['A short, concentrated espresso with a cocoa-forward brief','Small cappuccinos or lattes following Blue Bottle’s café use','Buyers who can dial in a dark espresso rather than expect a universal setting'],
    skip:['You want a light, tea-like or fruit-first filter coffee','You need named current farms and varieties','You expect a roaster note to guarantee a specific home shot'],
    identity:[
      'The reviewed product is the US whole-bean Hayes Valley Espresso, not a ready-to-drink café beverage or a rotating espresso subscription. Blue Bottle labels the current page dark roast and washed, describing organic coffees from the Americas. It does not name a complete current farm, country or variety composition. A historic recipe, Japanese bag or owner post cannot fill those missing US lot details. [1]',
      'Blue Bottle says Hayes Valley is served across its cafés and uses a short ristretto approach. That is a meaningful intended use, but a home grinder, basket and roast date can change the starting point. Check the delivered bag rather than treating the package photograph as a production-lot record. [1]'
    ],
    flavor:[
      'Baking chocolate, orange zest and brown sugar are Blue Bottle’s descriptors. They describe its target, not Coffeedant tasting. An older independent Coffee Cantata sample offers a separate person’s extraction account, and espresso owners report both enjoyable milk drinks and difficulty dialing it in. Those bags predate this check and cannot establish the flavor or consistency of the next shipment. [1] [3] [4]',
      'The orange cue is a useful warning to a buyer seeking only low-fruit cocoa. A dark label does not remove every bright note. Start with one bag, prepare repeatable doses, and decide from the delivered coffee rather than from a numeric sensory score we have not earned.'
    ],
    brewing:[
      'Blue Bottle’s café explanation favors ristretto: a shorter finished beverage than a conventional long espresso. It does not supply one reliable home dose and yield for every basket on this product page. Begin within your basket’s capacity, weigh the ground dose and finished beverage, then adjust grind against the actual bag. Do not copy the site’s 27 g to 350 g pour-over recipe into a portafilter. [1]',
      'Milk softens the concentration and can make the chocolate brief feel different. Keep milk volume fixed if comparing Hayes Valley with another bag. A large latte may hide the orange nuance that Blue Bottle describes; a small cappuccino is a more faithful first comparison to its café role.'
    ],
    freshness:[
      'Look for the actual roast date when the bag arrives, then store opened whole beans sealed, dry and away from heat. Blue Bottle’s freshness writing explains why roast timing and degassing matter, but it does not prove a universal peak day for this particular shipment. [5] [6]',
      'The pictured 12 oz format gives about nineteen theoretical 18 g doses before dial-in waste. Espresso uses beans rapidly while settings settle; a much larger pack should follow a successful first bag and a realistic household consumption rate.'
    ],
    value:[
      'The accessible US product page mixes one-time and subscription selectors, and it did not establish a reliable delivered one-time 12 oz total for this check. We therefore make no current price or discount claim. Verify the size, order mode, stock, shipping and tax in the active cart. [1]',
      'Its value comes from a clearly stated dark ristretto and café milk role. If the household mostly makes French press without milk, Giant Steps has a more explicit press recommendation and is the more direct comparison.'
    ],
    compare:[
      '17ft Ceiling is Blue Bottle’s separate classic-Italian-inspired espresso with an explicitly named fine robusta component. Hayes Valley’s current US page instead describes a washed organic Americas blend. Those identities should not be merged because both are dark café coffees. [1] [7]',
      'For a less dark multi-method bag, Stumptown Hair Bender is an existing Coffeedant alternative. Compare the roasters’ stated roles, then use the same grinder and milk volume when judging your own cup.'
    ],
    independent:{title:'Coffee Cantata: Hayes Valley sample review',href:'https://coffeecantata.co/?p=249',note:'Older independent bag and home espresso account; no claim about the current blend.'},
    owner:{title:'r/espresso: Hayes Valley home brewing reports',href:'https://www.reddit.com/r/espresso/comments/tl1dhq',note:'One self-selected owner struggled with repeatability; other users report different outcomes.',community:true},
    method:{title:'Blue Bottle Hayes Valley café and brew guidance',href:'https://bluebottlecoffee.com/us/eng/product/hayes-valley-espresso',note:'Roaster café ristretto role and separate filter recipe, not Coffeedant testing.'},
    alternative:{title:'Blue Bottle 17ft Ceiling Espresso',slug:'/coffee-beans/blue-bottle-17ft-ceiling-espresso/',reason:'a separate dark espresso with a documented robusta accent'}
  },
  {
    id:'CD-BN-000027', slug:'/coffee-beans/blue-bottle-bella-donovan/', coffee:'Bella Donovan',
    official:'https://bluebottlecoffee.com/us/eng/product/bella-donovan',
    image:'https://res.cloudinary.com/hbhhv9rz9/image/upload/v1727119811/2024/2024%20Updated%20Packaging/Bella%20Donovan/M1_BellaDonovan_Hero.png',
    imageSource:'https://bluebottlecoffee.com/us/eng/product/bella-donovan', imageCredit:'Blue Bottle Coffee US product imagery; the pictured bag cannot establish a current roast lot.',
    imageAlt:'Blue Bottle Bella Donovan 12-ounce US whole-bean bag',
    title:'Blue Bottle Bella Donovan review: dark blend with a natural Ethiopian edge', hook:'a Moka-Java-inspired dark blend built for drip and cream',
    verdict:'Bella Donovan makes sense when a dark daily drip coffee should retain a roaster-described berry edge under chocolate and molasses. Blue Bottle attributes that fruit to a natural-processed Ethiopian component and explicitly invites milk or cream. The full current blend recipe and delivered roast date still need a bag check.',
    roast:'Dark on the current US product page', origin:'Natural-processed Ethiopian component; complete current origin list not published on US page',
    process:'Natural for the stated Ethiopian component; not specified for every blend component', variety:'Not specified for the complete blend',
    notes:'raspberry, chocolate, molasses', sizes:'12 oz US whole-bean bag pictured; confirm live size',
    best:['Automatic drip with a splash of milk or cream','A dark roast that still advertises a berry cue','A classic-style blend without assuming historic Moka-Java origins'],
    skip:['You need a fixed Yemen-and-Java recipe','You want an entirely low-fruit dark cup','You seek a documented espresso ratio rather than a drip-first brief'],
    identity:[
      'Bella Donovan is Blue Bottle’s current US whole-bean blend, described as an interpretation of Moka-Java rather than a certified historical recipe. Its page identifies a natural-processed Ethiopian component responsible for a fruit edge. The remaining current origins, proportions and varieties are not disclosed in that panel, so a specific past composition should not be promoted as the bag a reader will receive. [1]',
      'The US page calls it dark roast and organic. Blue Bottle’s Canada listing has used a different roast label; this review follows the current US page and asks readers to inspect their actual bag if roast labeling matters. The 12 oz image is for product identification, not lot certification. [1]'
    ],
    flavor:[
      'Raspberry, chocolate and molasses are roaster-attributed notes. A 2017 Coffee Cantata tasting described its own bag across several brewers and found the French press less distinctive than other methods. That observation is valuable counterevidence to a universal press recommendation but cannot establish how the 2026 blend tastes. [1] [3]',
      'One owner account also found different note expression in espresso and AeroPress. Self-selected cups and recipes cannot establish a sensory average. Our judgment is narrower: Bella Donovan offers a clearly described fruit-on-chocolate direction for a buyer who likes cream in a dark drip coffee. [4]'
    ],
    brewing:[
      'Blue Bottle explicitly names automatic drip and milk or cream. Its product page also includes a 27 g to 350 g pour-over sequence, which is a filter starting point. If brewing in a French press, follow a press-specific coarse grind, immersion and decanting routine rather than copying the dripper’s pour schedule. [1] [2]',
      'The natural Ethiopian component may read differently in a press, a paper filter and espresso. Hold dose and water constant while changing grind; do not assume Blue Bottle’s Moka-Java inspiration predicts a specific crema or shot yield.'
    ],
    freshness:[
      'Inspect the roast date on delivery. A bag shipped direct and one held at a grocer can have different ages despite the same front label. Seal whole beans after opening, keep them away from warmth and odors, and grind immediately before brewing. [5] [6]',
      'A 12 oz first bag is enough to compare black and with cream without taking on a bulk freshness problem. Note any component text on the delivered package before ordering again, because a recurring blend may change to preserve a flavor target.'
    ],
    value:[
      'The accessible US listing displayed multiple order modes and did not yield a verified one-time delivered total for the selected whole-bean bag. This review therefore gives no price or discount. Check the live US cart, shipping, stock and size before comparing with other roasters. [1]',
      'Bella Donovan is worth trying for its dark drip-and-cream brief with a named natural-process contribution. If a plain cocoa press cup is the sole goal, Giant Steps has a stronger official press-use signal.'
    ],
    compare:[
      'Giant Steps is Blue Bottle’s darker chocolate-centered press-with-milk direction; Bella Donovan is the Moka-Java-inspired option with a documented natural Ethiopian fruit edge. Neither comparison is a Coffeedant side-by-side tasting. [1] [7]',
      'Peet’s Arabian Mocha-Java is another separately reviewed use of a historic blend name. Compare their actual current sources and notes; shared naming does not mean shared farms, roast, processing or taste.'
    ],
    independent:{title:'Coffee Cantata: Bella Donovan sample across brewers',href:'https://coffeecantata.co/?p=2566',note:'2017 independent tasting; its press conclusion is sample-specific and cannot identify a current lot.'},
    owner:{title:'r/espresso: Bella Donovan brewer comparison',href:'https://www.reddit.com/r/espresso/comments/1kc7h91',note:'One owner compared espresso and AeroPress on a different bag; anecdotal context only.',community:true},
    method:{title:'Blue Bottle French press brew guide',href:brew,note:'Roaster press method; the Bella Donovan product page primarily emphasizes drip and cream.'},
    alternative:{title:'Blue Bottle Giant Steps',slug:'/coffee-beans/blue-bottle-giant-steps/',reason:'a cocoa-forward dark blend with explicit French-press-with-milk positioning'}
  },
  {
    id:'CD-BN-000028', slug:'/coffee-beans/blue-bottle-giant-steps/', coffee:'Giant Steps',
    official:'https://bluebottlecoffee.com/us/eng/product/giant-steps',
    image:'https://kr.bluebottlecoffee.com/cdn/shop/files/D1_giant_1600.png?v=1748393576',
    imageSource:'https://kr.bluebottlecoffee.com/products/giant-steps', imageCredit:'Blue Bottle Coffee Korea product image. Korean 250 g packaging illustrates identity; US pack and size must be verified separately.',
    imageAlt:'Blue Bottle Giant Steps Korean whole-bean pack, shown as an identity image; US pack differs',
    title:'Blue Bottle Giant Steps review: dark coffee for French press with milk', hook:'a cocoa-led dark blend with a published 1:13 press direction',
    verdict:'Giant Steps has one unusually useful piece of product-specific brew guidance: Blue Bottle labels it for French press with milk and gives a 1:13 ratio. It is a defensible first bag for someone who wants a developed chocolate direction in a press, with the caveat that roaster notes and an older independent cup cannot predict today’s delivered bag.',
    roast:'Dark on the current US page', origin:'Complete current origin and variety list not specified on the US product page',
    process:'Not specified for the complete blend', variety:'Not specified for the complete blend', notes:'cocoa, toasted marshmallow, graham cracker',
    sizes:'12 oz US whole-bean format referenced in US catalog; image shows a Korean 250 g pack, not the US sale unit',
    best:['French press with milk or cream','A dark cocoa-forward daily cup','A buyer who wants a roaster-stated press ratio'],
    skip:['You want a light, high-clarity filter coffee','You require current farm and processing transparency','You expect a 1:13 ratio to be a universal extraction result'],
    identity:[
      'The US Giant Steps page calls this an organic dark roast and identifies cocoa, toasted marshmallow and graham cracker as its flavor brief. It does not publish the complete current component origins, varieties or processing. An older account refers to different historic ingredients; this review does not carry those forward as 2026 facts. [1]',
      'The accompanying Blue Bottle Korea image shows a 250 g regional bag because an exact current US pack image was not available for licensed display at this check. It is explicitly an identity illustration. Buy from the US product selector and confirm the delivered format and roast date; do not infer its weight from the image. [1]'
    ],
    flavor:[
      'Blue Bottle’s cocoa, toasted-marshmallow and graham-cracker words are target notes, not Coffeedant tasting. A 2019 Coffee Cantata sample was evaluated across French press, Chemex, V60 and espresso, with different results by method. Its own bag, grinder and date limit what that evaluation can say about a current order. [1] [3]',
      'The darker, milk-friendly direction is grounded in the roaster’s product description. A reader seeking sparkling fruit or tea-like clarity should start elsewhere. Neither a product-page review count nor forum praise supplies a representative sensory success rate. [4]'
    ],
    brewing:[
      'Blue Bottle explicitly marks Giant Steps “French Press with Milk” and 1:13. For example, 30 g coffee to 390 g water preserves that ratio before any milk; it is a mathematical starting point, not a tested Coffeedant recipe. Use a coarse press grind, pour and steep by the roaster’s press guide, then decant to avoid continued contact with grounds. [1] [2]',
      'The same product page includes a separate pour-over recipe of 27 g to 350 g. Those numbers should not be silently combined with the 1:13 press suggestion. Change one variable at a time on the actual bag, and compare black versus the milk quantity you normally add.'
    ],
    freshness:[
      'The current roast date and storage history matter more than a historic tasting. Inspect the delivered US pack, then reseal it and keep whole beans cool, dry and away from odors. Grind shortly before brewing, particularly for a press where stale grounds can flatten the cocoa brief. [5] [6]',
      'Try a small US whole-bean format first. A generous 30 g press dose consumes a 340 g bag in roughly eleven theoretical brews before dial-in waste. Bulk savings only matter if that rate fits the household.'
    ],
    value:[
      'The accessible US page did not establish one reliable one-time delivered total across its purchase modes. We do not treat its subscription display as a verified bag price. Confirm US size, one-time or recurring selection, shipping, tax and stock in the active cart. [1]',
      'Its practical advantage is the unusually clear press-with-milk use case. If you only drink straight espresso, Hayes Valley or 17ft Ceiling has a more direct espresso brief, even though Giant Steps can be experimented with in a portafilter.'
    ],
    compare:[
      'Bella Donovan is the fruit-edged dark drip-and-cream counterpart. Hayes Valley and 17ft Ceiling are more explicitly espresso-centered. Giant Steps earns a separate review because Blue Bottle gives it a distinct press-with-milk instruction and 1:13 ratio. [1] [7]',
      'The existing Peet’s Major Dickason’s review gives another broadly available dark blend choice. Compare package date and the exact brew role before paying for a larger bag; no controlled Coffeedant tasting ranks them.'
    ],
    independent:{title:'Coffee Cantata: Giant Steps brew-method comparison',href:'https://coffeecantata.co/?p=6097',note:'2019 independent sample; press, paper-filter and espresso impressions are limited to that bag.'},
    owner:{title:'r/coldbrew: Giant Steps household discussion',href:'https://www.reddit.com/r/coldbrew/comments/1g2e4sp',note:'Self-selected use context; not evidence of current composition or repeatability.',community:true},
    method:{title:'Blue Bottle French press method',href:brew,note:'Coarse grind and immersion guidance used with the product page’s distinct 1:13 press ratio.'},
    alternative:{title:'Blue Bottle Bella Donovan',slug:'/coffee-beans/blue-bottle-bella-donovan/',reason:'a darker drip-and-cream blend with an explicitly fruit-bearing natural Ethiopian component'}
  },
  {
    id:'CD-BN-000029', slug:'/coffee-beans/blue-bottle-17ft-ceiling-espresso/', coffee:'17ft Ceiling Espresso',
    official:'https://bluebottlecoffee.com/us/eng/product/17ft-ceiling',
    image:'https://res.cloudinary.com/hbhhv9rz9/image/upload/v1758738878/2024/2024%20Updated%20Packaging/17%20Ft%20Ceiling/M1_17ftCeiling_Hero.png',
    imageSource:'https://bluebottlecoffee.com/us/eng/brew-guides/moka-pot', imageCredit:'Blue Bottle Coffee US image of the 12 oz whole-bean package; packaging is not a current-lot certificate.',
    imageAlt:'Blue Bottle 17ft Ceiling Espresso 12-ounce US whole-bean bag',
    title:'Blue Bottle 17ft Ceiling review: a dark espresso with robusta', hook:'a classic-Italian-style espresso that explicitly includes fine robusta',
    verdict:'17ft Ceiling is the distinct Blue Bottle dark espresso for a buyer who wants a classic short-shot direction and is comfortable with a named robusta accent. Blue Bottle says its Latin American and East African coffees and fine robusta serve body and crema. Those are formulation and roaster-positioning claims, not Coffeedant extraction measurements.',
    roast:'Dark on the current US page', origin:'Latin American and East African coffees; exact current countries and farms not specified',
    process:'Not specified for every component', variety:'Includes fine robusta; Arabica component varieties not specified',
    notes:'caramel, almond, dried cherry', sizes:'12 oz US whole-bean package pictured; confirm selected live size',
    best:['Classic-style short espresso','A buyer intentionally seeking an Arabica-and-robusta blend','Milk drinks where a dark coffee brief is preferred'],
    skip:['You want Arabica-only coffee','You need farm-level current component detail','You equate crema volume with measured espresso quality'],
    identity:[
      'Blue Bottle names 17ft Ceiling after its former Mint Plaza café and says the blend joins Latin American and East African coffees with fine robusta. The US product page calls it dark roast. The wording identifies a genuine blend-design difference from Hayes Valley, but does not specify every current country, farm, proportion or processing method. [1]',
      'The US image shows a 12 oz whole-bean package for identification. It does not confirm a particular roast date, lot or the current proportion of robusta. A buyer who avoids robusta should skip this exact product rather than assuming the accent is removable. [1]'
    ],
    flavor:[
      'Caramel, almond and dried cherry are the roaster’s tasting descriptors. Blue Bottle also describes a crema-heavy, lower-acidity impression; Coffeedant did not measure acidity, crema or flavor. A self-selected owner review on the product page favors the blend while another describes it as hollow for a dark roast. Neither is a reliable population average. [1] [4]',
      'An older independent subscription discussion included 17ft Ceiling and Hayes Valley. It is context for the older products and shipping experience, not a current blind comparison. The reason to consider 17ft remains its declared robusta and classic espresso architecture, not a claimed ranking. [3]'
    ],
    brewing:[
      'Blue Bottle presents 17ft Ceiling as a classic espresso and mentions a ristretto design. Begin with a basket-appropriate dose and a short weighed yield, then adjust grind on the delivered bag. There is no single product-page dose and yield that Coffeedant can present as a verified home result. [1]',
      'The product page also carries Blue Bottle’s generic 27 g to 350 g pour-over instructions. They are a separate filter method, not a prescription to grind 27 g for a portafilter. If trying a moka pot, follow Blue Bottle’s device guide and keep the result distinct from a nine-bar espresso shot. [2]'
    ],
    freshness:[
      'Inspect the delivered roast date before blaming a recipe for a flat cup. Keep whole beans sealed and away from air, heat and odors. A dark-roast oil sheen can appear over time, but it is not by itself a reliable freshness meter or taste result. [5] [6]',
      'A 12 oz first bag gives room to dial a short espresso without assuming a bulk purchase will stay at the same peak. Record the package and settings if you reorder; current origins and roast development may shift.'
    ],
    value:[
      'The US storefront displayed subscription and one-time controls, but one reliable delivered price for a selected one-time 12 oz pack was not established. This page therefore supplies a check-price link only and claims no current discount. Confirm order mode, stock, taxes and shipping at checkout. [1]',
      'Buy 17ft for its specific robusta-accented classic-espresso role. If that feature is unwanted, Hayes Valley is the closer Blue Bottle dark espresso alternative; Giant Steps addresses French press with milk more directly.'
    ],
    compare:[
      'Hayes Valley is another dark Blue Bottle espresso, but its current US record says washed organic coffees from the Americas rather than an explicit robusta accent. The two names are not aliases or variant bags. [1] [7]',
      'Onyx Monarch is an existing darker milk-drink blend with a different fruit-and-chocolate brief. Compare exact bag identity and what the roaster actually says before inferring that all dark blends create the same shot.'
    ],
    independent:{title:'Home-Barista: older Blue Bottle subscription review',href:'https://www.home-barista.com/coffees/blue-bottle-at-home-subscription-review-t38197.html',note:'Older independent delivery and blend context; not a current controlled 17ft tasting.'},
    owner:{title:'Blue Bottle 17ft Ceiling product-page buyer reviews',href:'https://bluebottlecoffee.com/us/eng/product/17ft-ceiling',note:'Self-selected verified buyers disagree about body and flavor; not a representative score.',community:true},
    method:{title:'Blue Bottle moka pot guide',href:'https://bluebottlecoffee.com/us/eng/brew-guides/moka-pot',note:'Separate device guidance, not an espresso extraction measure.'},
    alternative:{title:'Blue Bottle Hayes Valley Espresso',slug:'/coffee-beans/blue-bottle-hayes-valley-espresso/',reason:'a dark washed espresso brief without a declared robusta component'}
  },
  {
    id:'CD-BN-000030', slug:'/coffee-beans/blue-bottle-night-light-decaf/', coffee:'Night Light Decaf',
    official:'https://bluebottlecoffee.com/us/eng/product/night-light-decaf',
    image:'https://kr.bluebottlecoffee.com/cdn/shop/files/D1_Night_Light_Decaf_1600.png?v=1748393767',
    imageSource:'https://kr.bluebottlecoffee.com/products/night-light-decaf', imageCredit:'Blue Bottle Coffee Korea product image. Its 250 g pack is illustrative; verify the separate US package and size.',
    imageAlt:'Blue Bottle Night Light Decaf Korean whole-bean pack, shown as identity imagery for the US review',
    title:'Blue Bottle Night Light Decaf review: a water-process, multi-brew decaf', hook:'a medium-labeled US decaf with espresso-to-press positioning',
    verdict:'Night Light Decaf is a useful one-bag trial for a US household moving between decaf espresso and French press. Blue Bottle says it uses a water decaffeination process and positions the coffee for both black and milk drinks. The US page’s medium label and darker flavor description should be read together; neither establishes a Coffeedant tasting or residual-caffeine measurement.',
    roast:'Medium label on the current US product card; prose also calls it one of the roaster’s darker coffees',
    origin:'Current US product page does not name a complete farm or country composition', process:'Water decaffeination; exact proprietary process name not established on current US page',
    variety:'Not specified for the complete blend', notes:'crème brûlée, vanilla, key lime',
    sizes:'US 12 oz whole-bean pack appears in current site context; Korean illustration is 250 g and not the US sale unit',
    best:['A decaf household using espresso and French press','A sweet, cocoa-forward roaster brief with a citrus top note','A buyer willing to check actual decaf process and roast date on delivery'],
    skip:['You need an independently measured caffeine figure','You require disclosed current origins and varieties','You want a very light, floral filter coffee'],
    identity:[
      'The reviewed item is Blue Bottle’s current US Night Light Decaf whole-bean product. Its card labels the roast medium while descriptive text calls it one of the roaster’s darker coffees. We preserve both signals rather than silently choosing a darkness score. The current US page says it is organic and water-decaffeinated, but does not identify every origin, variety or a named proprietary water process. [1]',
      'The displayed official photo is the Korean 250 g pack, clearly identified as regional illustration. It is not evidence of the US pack size, roast date or exact label. The US buyer should confirm those details on the selected product and delivered bag. [1]'
    ],
    flavor:[
      'Crème brûlée, vanilla and key lime are Blue Bottle’s tasting notes. Its prose also describes creaminess and malty sweetness. Coffeedant has not tasted this or measured whether a particular bag delivers those cues. A 2026 independent Japanese tasting describes a local 200 g sample; regional packaging and lot differences limit transfer to a US purchase. [1] [3]',
      'A verified buyer on the US site says it worked for a latte, but that is one self-selected drink. For someone who dislikes citrus in decaf, key lime on the label is a reason to start with one bag, not a promise of strong acidity. [4]'
    ],
    brewing:[
      'Blue Bottle explicitly says Night Light can move from espresso to French press and recommends a heavier dose for its sweet, round direction. It does not specify one exact product-specific press or espresso ratio on that panel. Use the coarse-grind press method for immersion and a separate basket-specific espresso recipe; do not carry one grinder setting between devices. [1] [2]',
      'For a mixed regular-and-decaf household, grinder retention matters. Purge according to the grinder manual when caffeine separation is important. Decaf is reduced caffeine, not proof of zero caffeine; this review makes no clinical claim about sleep or tolerance.'
    ],
    freshness:[
      'Check the delivered roast date. Water processing and roast development do not remove the need to seal whole beans and protect them from heat and moisture. A regional photograph cannot tell you how long a US order spent in storage. [5] [6]',
      'Try a smaller whole-bean pack before committing to a larger recurring order. If decaf is only an occasional evening drink, a large open bag may outlast your preferred flavor window; compare consumption rate and shipping schedule.'
    ],
    value:[
      'The current US site mixes subscription and one-time prices, so this review does not state a verified delivered pack price or discount. Confirm exact size, availability, shipping, tax and order cadence in the live US cart. [1]',
      'Night Light’s case is its explicit espresso-to-French-press range and water-process declaration. If the decaf household only drinks espresso, compare Stumptown Trapper Creek or Intelligentsia Decaf Black Cat for more targeted brew evidence.'
    ],
    compare:[
      'Stumptown Trapper Creek is another existing decaf review with an explicit espresso starting dose. Night Light is different because Blue Bottle directly invites both espresso and French press and describes a heavier dose rather than one exact extraction number. [1] [7]',
      'Counter Culture Slow Motion offers a different roaster flavor and process record. Neither should be ranked by an invented caffeine or sensory score; compare the delivered bag and your chosen device.'
    ],
    independent:{title:'iAnswer: 2026 Night Light Decaf sample',href:'https://note.com/ianswer_2022/n/nb49d95afe54',note:'Independent Japanese 200 g sample; region, lot and preparation differ from this US review.'},
    owner:{title:'Blue Bottle current Night Light verified-buyer context',href:'https://bluebottlecoffee.com/us/eng',note:'One self-selected buyer reports latte use; not a population result.',community:true},
    method:{title:'Blue Bottle French press guide',href:brew,note:'Coarse-grind immersion guidance; separate from the product’s espresso positioning.'},
    alternative:{title:'Stumptown Trapper Creek Decaf',slug:'/coffee-beans/stumptown-trapper-creek-decaf/',reason:'a decaf with a more specific published espresso starting dose'}
  }
];

const reviews: BeanReviewData[] = beans.map((r) => ({
  slug:r.slug, productId:r.id, roaster:'Blue Bottle Coffee', coffee:r.coffee,
  title:r.title, description:`Research-led US review of Blue Bottle ${r.coffee}: current blend identity, attributed notes, brew role, freshness, alternatives and limits.`,
  image:r.image, imageAlt:r.imageAlt, imageCredit:r.imageCredit, imageSource:r.imageSource,
  published:checked, updated:checked, market:'United States', price:'Check current US price', priceChecked:'October 21, 2026',
  officialUrl:r.official, verdict:r.verdict, bestFor:r.best, skipIf:r.skip,
  authorNote:'I checked current US roaster records, independent sample context and owner evidence on October 21, 2026. I have not bought, brewed or tasted this bag.',
  facts:[
    {label:'Identity',value:`Blue Bottle Coffee ${r.coffee}, US whole-bean product`},
    {label:'Roast',value:r.roast}, {label:'Roaster notes',value:`${r.notes}; not Coffeedant tasting`},
    {label:'Origin',value:r.origin}, {label:'Process',value:r.process}, {label:'Variety',value:r.variety}, {label:'Pack scope',value:r.sizes}
  ],
  sections:[
    {id:'identity',title:'Identify this exact bag',paragraphs:r.identity},
    {id:'flavor',title:'What flavor evidence can and cannot say',paragraphs:r.flavor},
    {id:'brewing',title:'Brew it for its intended role',paragraphs:r.brewing},
    {id:'freshness',title:'Roast date and storage',paragraphs:r.freshness},
    {id:'value',title:'Value at this US check',paragraphs:r.value},
    {id:'alternatives',title:'Choose another bag for another task',paragraphs:r.compare}
  ],
  alternatives:[
    {title:r.alternative.title,reason:r.alternative.reason,href:r.alternative.slug,internal:true},
    {title:'Coffee bean reviews',reason:'Compare exact roasters, roasts and brew roles.',href:'/coffee-beans/',internal:true},
    {title:'French press bean guide',reason:'Choose by immersion use, with evidence and tradeoffs.',href:'/coffee-beans/best-coffee-beans-for-french-press/',internal:true}
  ],
  faqs:[
    {question:`What is Blue Bottle ${r.coffee}?`,answer:r.identity[0].replace(/ \[\d+\]/g,'')},
    {question:`What does ${r.coffee} taste like?`,answer:`Blue Bottle lists ${r.notes}. These are roaster descriptors; Coffeedant has not tasted the bag.`},
    {question:`How should I brew ${r.coffee}?`,answer:r.brewing[0].replace(/ \[\d+\]/g,'')},
    {question:'Are the origins and varieties fixed?',answer:r.origin+' '+r.variety+' Check the delivered bag for any current component panel.'},
    {question:'What package is pictured?',answer:r.imageCredit},
    {question:'Is the listed price guaranteed?',answer:'No one-time delivered US pack price was verified at this check. Confirm size, order mode, tax and shipping in the live cart.'},
    {question:'How should I keep the beans?',answer:'Check the roast date, seal opened whole beans away from air and heat, and grind shortly before brewing.'}
  ],
  sources:[
    {id:'s1',title:`Blue Bottle US: ${r.coffee}`,href:r.official,note:'Current product identity, roast label, roaster notes, stated brew role and selector limitations.',checked},
    {id:'s2',title:r.method.title,href:r.method.href,note:r.method.note,checked},
    {id:'s3',title:r.independent.title,href:r.independent.href,note:r.independent.note,checked},
    {id:'s4',title:r.owner.title,href:r.owner.href,note:r.owner.note,checked,community:r.owner.community},
    {id:'s5',title:'Blue Bottle: on freshness',href:fresh,note:'Roaster context for roast timing, not proof of a particular delivered bag.',checked},
    {id:'s6',title:'Stumptown: opened-bean storage',href:storage,note:'Independent roaster storage context; not specific to Blue Bottle.',checked},
    {id:'s7',title:`Coffeedant: ${r.alternative.title}`,href:`https://coffeedant.com${r.alternative.slug}`,note:'Distinct research-led alternative review.',checked},
    {id:'s8',title:'Product image source',href:r.imageSource,note:r.imageCredit,checked}
  ],
  methodology:[
    'This is a research-led US assessment of the exact named whole-bean coffee. The current US roaster page controls identity, while older independent samples and self-selected owners are limited by bag, region, date and preparation. Coffeedant has not bought, brewed, tasted, measured or photographed this coffee and assigns no numeric sensory score.',
    'Sources were checked October 21, 2026. Verify the selected pack, delivered roast date, current component panel and checkout total before buying again. Regional packaging images are explicitly identified where used.'
  ],
  finalTitle:`Buy ${r.coffee} for its documented brew role`,
  finalVerdict:`${r.verdict} Start with one whole-bean bag, check the delivered roast date, and let a repeatable personal brew decide any larger order.`
}));

export default reviews;
