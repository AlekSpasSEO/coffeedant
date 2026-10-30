import type { BeanReviewData } from './bean-reviews';

type RecordData = {
  id: string; slug: string; roaster: string; coffee: string; image: string;
  official: string; feed: string; price: string; sizes: string; roast: string;
  notes: string; origin: string; process: string; variety: string; role: string;
  identity: string; flavor: string; brew: string; limit: string;
  external: string; externalUrl: string; externalTitle: string;
  freshUrl: string; freshTitle: string; altSlug: string; altName: string; altWhy: string; skip: string;
};
const date = '2026-10-15';
const fda = 'https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much';
const water = 'https://www.swisswater.com/blogs/sw/how-much-caffeine-is-in-decaf';
const storage = 'https://support.stumptowncoffee.com/hc/en-us/articles/5568076789901-Where-should-I-store-my-coffee-In-the-freezer-On-the-counter';
const guide = '/coffee-beans/best-decaf-coffee-beans-by-brew-method/';
const records: RecordData[] = [
  {
    id:'CD-BN-000011', slug:'/coffee-beans/counter-culture-slow-motion-decaf/',
    roaster:'Counter Culture Coffee', coffee:'Slow Motion Decaf',
    image:'https://cdn.shopify.com/s/files/1/0249/4283/7837/files/SlowMotion_Main.jpg?v=1749045978',
    official:'https://counterculturecoffee.com/products/12-oz-slow-motion',
    feed:'https://counterculturecoffee.com/products/12-oz-slow-motion.js',
    price:'$20 for 12 oz', sizes:'12 oz, 24 oz and 5 lb', roast:'Medium, according to Counter Culture',
    notes:'molasses, cocoa and smooth', origin:'Organic Latin American coffees; exact components rotate by roast date',
    process:'Swiss Water Process unless the current lot states otherwise',
    variety:'Not established for the complete rotating blend',
    role:'A cocoa-led decaf for a household alternating espresso and filter',
    identity:"Slow Motion is a year-round name, not one permanent farm lot. The product page has a roast-date selector and several historical component pairs, but the accessible text does not reliably attach each pair to the selected period. Do not assign a historical 50/50 origin mix to the next bag. Counter Culture describes organic Latin American sourcing and Swiss Water decaffeination unless otherwise noted. [1]",
    flavor:"Counter Culture uses molasses, cocoa and smooth as its tasting direction. DecafLife reported dark chocolate and more acidity than that reviewer expected in an older pour-over sample. The Guardian separately liked one 2026 sample. Those are independent observations of their own coffee, not Coffeedant tasting or a promise for a different roast-date bag. [1] [3]",
    brew:"Counter Culture publishes an 18 g espresso starting dose near a 1:2 beverage ratio and also gives method-specific brewing instructions. A filter ratio is not an espresso target. Keep separate saved grinder settings if you use both methods, then adjust from the received bag and your own basket. [1]",
    limit:"If you want a uniformly low-acidity evening cup, take DecafLife's older brighter sample as a caution rather than a verdict. Change one recipe variable at a time; if the small bag still misses your preference, another decaf is a better answer than assuming the roaster notes were a guarantee. [3]",
    external:"Two independent sample reports are time-bound. Neither establishes today's composition, a failure rate or a universal sensory score.",
    externalUrl:'https://decaflife.com/coffee-reviews/counter-culture-slow-motion-decaf/',
    externalTitle:'DecafLife Slow Motion sample review',
    freshUrl:'https://counterculturecoffee.com/blogs/counter-culture-coffee/coffee-basics-freshness',
    freshTitle:'Counter Culture freshness guidance',
    altSlug:'/coffee-beans/stumptown-trapper-creek-decaf/', altName:'Stumptown Trapper Creek Decaf',
    altWhy:'its roaster explicitly positions it for both espresso and drip',
    skip:'you need a fixed single-origin lot or a permanent complete variety list'
  },
  {
    id:'CD-BN-000012', slug:'/coffee-beans/stumptown-trapper-creek-decaf/',
    roaster:'Stumptown Coffee Roasters', coffee:'Trapper Creek Decaf',
    image:'https://cdn.shopify.com/s/files/1/0495/9446/6472/files/SCR_Trapper_72DPI.png?v=1775167718',
    official:'https://www.stumptowncoffee.com/products/trapper-creek-decaf',
    feed:'https://www.stumptowncoffee.com/products/trapper-creek-decaf.js',
    price:'$20 for 12 oz', sizes:'12 oz and 5 lb', roast:'Medium in Stumptown’s signature-blend range',
    notes:'citrus, graham and cocoa', origin:'Blend; complete current component origins not published on the checked page',
    process:'Swiss Water Process', variety:'Not specified for the complete blend',
    role:'A flexible decaf for espresso, drip and smaller milk drinks',
    identity:"Stumptown explicitly calls Trapper Creek Swiss Water decaf and sells it as whole bean in 12 oz and 5 lb. The meaningful use claim is unusually specific: enough structure for espresso and enough balance for drip. The checked page does not provide a complete current origin, variety or component table, so this review does not invent one. [1]",
    flavor:"Citrus, graham and cocoa are Stumptown's descriptors; its longer copy adds a dried-fruit direction and a milk-drink use case. One on-page customer testimonial praises it, and a recent r/espresso conversation mentions it among decafs. Both are self-selected owner accounts, not representative ratings or Coffeedant tasting. [1] [3]",
    brew:"The roaster gives a 1:17 drip starting ratio and a separate espresso preparation around 19.5 g. Check your actual basket capacity before copying that dose. Record beverage mass, grind and roast date separately for espresso and drip; moving between them can cost time on a grinder that retains grounds. [1]",
    limit:"A 5 lb pack is only economical when your household or office finishes it while it still tastes fresh. The listing does not establish what your grinder retains when you switch regular and decaf. A small bag gives a better first test of both the profile and that workflow.",
    external:"The cited owner discussion is anecdotal. It shows a use case, not a measured ranking, current-lot test or consistency rate.",
    externalUrl:'https://www.reddit.com/r/espresso/comments/1w5nc9j/what_is_you_favorite_decaf_bean_it_is_a_matter_of/',
    externalTitle:'r/espresso decaf owner discussion',
    freshUrl:'https://support.stumptowncoffee.com/hc/en-us/articles/5550819144461-How-long-does-Stumptown-coffee-stay-fresh',
    freshTitle:'Stumptown freshness guidance',
    altSlug:'/coffee-beans/counter-culture-slow-motion-decaf/', altName:'Counter Culture Slow Motion Decaf',
    altWhy:'you prefer a medium cocoa-and-molasses brief with published roast-date blend history',
    skip:'you require a named current farm, full varieties and a fixed lot'
  },
  {
    id:'CD-BN-000013', slug:'/coffee-beans/intelligentsia-decaf-black-cat-espresso/',
    roaster:'Intelligentsia Coffee', coffee:'Decaf Black Cat Espresso',
    image:'https://cdn.shopify.com/s/files/1/0084/8802/6172/files/12oz_BC_Decaf.png?v=1762379450',
    official:'https://www.intelligentsia.com/products/decaf-black-cat-espresso',
    feed:'https://www.intelligentsia.com/products/decaf-black-cat-espresso.js',
    price:'$18.50 for 12 oz', sizes:'12 oz and 5 lb', roast:'“Comforting” in Intelligentsia’s profile scale',
    notes:'cocoa, turbinado sugar and apple', origin:'Complete current blend origins not identified on the checked page',
    process:'Water processed; provider not named on the checked page',
    variety:'Not stated for the complete espresso blend',
    role:'A portafilter-first decaf with a published espresso recipe',
    identity:"Decaf Black Cat is a distinct product from Black Cat Classic and Analog. Intelligentsia calls it water processed but the checked listing does not name a specific provider or publish a complete farm and variety table. Classic's current origin panel cannot be transferred to this decaf bag. [1]",
    flavor:"Cocoa, turbinado sugar and apple are roaster notes. The apple signal may matter to a buyer expecting a uniformly dark profile, but no intensity is guaranteed. An r/espresso owner reported liking this decaf with the roaster's recipe; that older, self-selected experience does not establish how today's bag will taste. [1] [3]",
    brew:"Intelligentsia recommends 18 g ground coffee to a 45 g finished shot, a 1:2.5 mass ratio. That is a useful starting point for a suitable basket and espresso grinder, not a promised shot time or a Coffeedant extraction result. Taste the received bag and change grind deliberately. [1]",
    limit:"The page centers espresso and does not give the same level of drip guidance. If you mainly make automatic drip, the roaster's Organic Decaf House has a better documented filter recipe. The Black Cat name by itself does not settle which product suits your brewer. [7]",
    external:"One r/espresso owner report is a workflow example only. The 18 g to 45 g target is official guidance that Coffeedant did not reproduce.",
    externalUrl:'https://www.reddit.com/r/espresso/comments/1e6hynq',
    externalTitle:'r/espresso owner discussion of Decaf Black Cat',
    freshUrl:'https://www.intelligentsia.com/pages/brew-guides',
    freshTitle:'Intelligentsia brew guides',
    altSlug:'/coffee-beans/intelligentsia-organic-decaf-house-blend/', altName:'Intelligentsia Organic Decaf House Blend',
    altWhy:'your dominant method is drip or pour-over rather than espresso',
    skip:'your main method is drip and you need an exact filter recipe'
  },
  {
    id:'CD-BN-000014', slug:'/coffee-beans/intelligentsia-organic-decaf-house-blend/',
    roaster:'Intelligentsia Coffee', coffee:'Organic Decaf House Blend',
    image:'https://www.intelligentsia.com/cdn/shop/files/12oz_DecafHouse_1024x1024.png?v=1762376514',
    official:'https://www.intelligentsia.com/products/decaf-house-blend',
    feed:'https://www.intelligentsia.com/products/decaf-house-blend.js',
    price:'$18.50 for 12 oz', sizes:'12 oz and 5 lb', roast:'Bright filter-coffee direction; no stable numeric roast score',
    notes:'chocolate, lime and caramelized sugar', origin:'Current listing shows washed Honduras, Lempira',
    process:'Water processed', variety:'Not specified for every future House bag',
    role:'A filter-first decaf with a documented bright direction',
    identity:"Intelligentsia calls this Organic Decaf House Blend and recommends it for pour-over and automatic drip. The current origin panel shows washed Honduras from Lempira. That is a date-sensitive product record, not proof that a year-round House label will always use the same lot or varieties. The checked page says certified organic and water processed, without naming the processing plant. [1]",
    flavor:"Chocolate, lime and caramelized sugar are the roaster's current notes. DecafLife independently reviewed an older House sample as bright pour-over coffee with chocolate and fruit. That reviewer tasted its own bag and recipe; Coffeedant has not tasted the current lot. Buyers averse to citrus should treat lime as a useful warning before buying 5 lb. [1] [3]",
    brew:"Intelligentsia suggests a 1:18 coffee-to-water starting ratio. An illustrative 20 g dose therefore pairs with 360 g brew water; that is recipe arithmetic, not a Coffeedant extraction measurement. Automatic drip and pour-over are named on this page, whereas Decaf Black Cat supplies the more specific espresso target. [1] [7]",
    limit:"A pre-ground drip selection need not fit every brewer and generally offers less control over freshness than grinding whole beans. Check the delivered roast date, save the successful grinder setting and only move to a large bag when the small one meets your preference.",
    external:"DecafLife's sample is older and cannot act as a stable score for the current lot. The actual bag and current roaster listing control identity.",
    externalUrl:'https://decaflife.com/coffee-reviews/intellegentsias-decaf-house-roast-review/',
    externalTitle:'DecafLife older Decaf House sample review',
    freshUrl:'https://www.intelligentsia.com/pages/brew-guides',
    freshTitle:'Intelligentsia brew guides',
    altSlug:'/coffee-beans/intelligentsia-decaf-black-cat-espresso/', altName:'Intelligentsia Decaf Black Cat Espresso',
    altWhy:'you want a portafilter recipe with an explicit 18 g to 45 g start',
    skip:'you need a dark, low-citrus profile or an espresso-specific recipe'
  },
  {
    id:'CD-BN-000015', slug:'/coffee-beans/equator-decaf-equator-blend/',
    roaster:'Equator Coffees', coffee:'Decaf Equator Blend',
    image:'https://cdn.shopify.com/s/files/1/2062/4231/files/Decaf-Equator-Blend-Equator-Coffees-12oz.webp?v=1753408804',
    official:'https://www.equatorcoffees.com/collections/decaf/products/decaf-equator-blend',
    feed:'https://www.equatorcoffees.com/collections/decaf/products/decaf-equator-blend.js',
    price:'$19.50 for 12 oz', sizes:'12 oz, 2 lb and 5 lb; whole bean or selected grind',
    roast:'Medium-dark, per Equator', notes:'prune, cherry, cedar and nutmeg',
    origin:'Current washed Colombia Popayán plus Brazil Cerrado natural/honey components',
    process:'Mountain Water process', variety:'Current component lists name Colombian Castillo, Caturra, Colombia, Typica and Brazilian Yellow Bourbon, Mundo Novo, Obata',
    role:'A medium-dark decaf with detailed current origin and process records',
    identity:"Equator publishes a current Colombian washed base from Popayán smallholders and Brazilian natural or honey lots from Cerrado. It identifies component varieties and producers. These are current blend claims, not a permanent guarantee for a recurring product. Check the next bag if that traceability is the main reason to buy. [1]",
    flavor:"Prune, cherry, cedar and nutmeg are Equator's descriptors, while its page says the Brazilian coffees are intended to round the body. An external specification-led overview repeats those published details and explicitly says it did not taste the coffee. It is context, not independent sensory confirmation. Coffeedant has not tasted or scored this blend either. [1] [3]",
    brew:"Equator offers different starts for drip (about 1:15), Chemex (1:16) and French press (about 1:15). Choose one and save your dose, water and grind before adjusting from the actual cup. The seller offers an espresso-grind option but the checked product page does not supply a comparably detailed espresso extraction target. [1]",
    limit:"Equator names the Mountain Water method and says its decaf is processed in Mexico. Its process claim does not measure the caffeine left in your brewed cup. Espresso-first buyers may prefer a decaf with a published basket recipe; a filter household can test the 12 oz bag before considering 2 lb. [1] [5] [7]",
    external:"The cited external overview is specification-led and reports no hands-on tasting. It cannot verify the roaster's flavor notes independently.",
    externalUrl:'https://thecoffeeguru.net/beans/equator-decaf-equator-blend',
    externalTitle:'Coffee Guru specification-led overview',
    freshUrl:'https://www.equatorcoffees.com/pages/faq',
    freshTitle:'Equator decaf and ordering FAQ',
    altSlug:'/coffee-beans/intelligentsia-decaf-black-cat-espresso/', altName:'Intelligentsia Decaf Black Cat Espresso',
    altWhy:'you chiefly make espresso and want a published 18 g to 45 g recipe',
    skip:'you require independent tasting of the current lot or a roaster espresso recipe'
  },
];
const decafPackPlanning: Record<string, string> = {
  '/coffee-beans/counter-culture-slow-motion-decaf/': 'Slow Motion offers 12 oz, 24 oz and 5 lb. Start with the smallest pack when decaf is an occasional evening brew, then use the stamped roast date to find the matching blend record before ordering again. [1] [2]',
  '/coffee-beans/stumptown-trapper-creek-decaf/': 'Trapper Creek’s five-pound option is a large jump from 12 oz. Account for coffee used when switching back from regular beans, as well as the drinks consumed; that changeover can determine how quickly a decaf bag actually empties. [1] [2]',
  '/coffee-beans/intelligentsia-decaf-black-cat-espresso/': 'At the roaster’s 18 g espresso start, 12 oz contains roughly eighteen full doses before adjustment waste. Use the first pack to establish your decaf setting; the five-pound order makes more sense after the evening shot has become a regular habit. [1] [2]',
  '/coffee-beans/intelligentsia-organic-decaf-house-blend/': 'A 20 g filter dose uses a 12 oz House bag in roughly seventeen brews before waste. Compare that with the number of decaf filter brews you actually make, especially if you are weighing the five-pound size for a household that mostly drinks regular coffee. [1] [2]',
  '/coffee-beans/equator-decaf-equator-blend/': 'The choice between 12 oz, 2 lb and 5 lb lets Equator buyers scale gradually. A shared drip pot may justify the intermediate size sooner than an occasional single cup; first confirm the medium-dark, fruit-and-spice direction works for the people who will finish it. [1] [2]',
};

const decafValueJudgment: Record<string, string> = {
  '/coffee-beans/counter-culture-slow-motion-decaf/': 'Slow Motion gives a mixed-method household a smaller step from 12 oz to 24 oz before the five-pound order. At the checked $20 starter price, paying for a bag that works both as filter and espresso is more useful than buying bulk before either recipe is settled. The blend record follows roast dates, so match the next order to its actual coffee rather than assuming a repeat of an older bag. [1] [2]',
  '/coffee-beans/stumptown-trapper-creek-decaf/': 'The $20 Trapper Creek reference buys the 12 oz trial, not evidence that five pounds will be good value for an occasional decaf drinker. Its stated espresso-and-drip role is the useful proposition: one bag may cover both, but it still needs separate grinder settings. Include changeover waste when deciding how long the larger pack would last. [1] [2]',
  '/coffee-beans/intelligentsia-decaf-black-cat-espresso/': 'At $18.50 for the checked 12 oz listing, Black Cat is a purchase for a specific espresso job. Its published 18 g to 45 g starting recipe gives you something concrete to try before ordering five pounds. House Blend is the more relevant comparison when the evening routine is a filter pot rather than a portafilter; the same dated pack price does not make the two coffees interchangeable. [1] [2] [7]',
  '/coffee-beans/intelligentsia-organic-decaf-house-blend/': 'House Blend and Decaf Black Cat each had an $18.50 small-pack reference, so brew fit is a better tiebreaker than the sticker. House provides a filter-led direction; Black Cat provides an explicit espresso starting recipe. For infrequent filter use, finish the 12 oz House bag and count the brews before choosing five pounds. A lower price per ounce matters only if that quantity matches the routine. [1] [2] [7]',
  '/coffee-beans/equator-decaf-equator-blend/': 'Equator’s checked $19.50 12 oz pack offers a way to assess its medium-dark fruit-and-spice brief before choosing 2 lb or 5 lb. The middle size is useful for a household that has proved the coffee in a shared pot but cannot justify a bulk order. Select whole bean or the required grind explicitly; an inexpensive bag in the wrong format does not solve the intended brew. [1] [2]',
};

const makeReview = (r: RecordData): BeanReviewData => {
  const dollars = Number(r.price.match(/\$(\d+(?:\.\d+)?)/)?.[1] ?? 0);
  const doseCost = (dollars * 18 / 340.194).toFixed(2);
  const noteDirection = r.notes;
  return {
    slug:r.slug, productId:r.id, roaster:r.roaster, coffee:r.coffee,
    title:r.roaster + ' ' + r.coffee + ' review: ' + r.role.toLowerCase(),
    description:'Research-led US review of ' + r.roaster + ' ' + r.coffee + ': exact coffee, decaf process, attributed notes, brew use, freshness, sizes and dated value.',
    image:r.image, imageAlt:'Official ' + r.roaster + ' ' + r.coffee + ' whole-bean bag',
    imageCredit:'Official roaster product image for exact-bag identification; no Coffeedant tasting photograph.',
    imageSource:r.official, published:date, updated:date, market:'United States',
    price:r.price, priceChecked:'October 15, 2026', officialUrl:r.official,
    verdict:r.role + '. The flavor notes are the roaster’s brief, not a cup Coffeedant has tasted. Start with 12 oz, check the roast date and compare the method you actually use.',
    bestFor:[r.role,'Buyers who value a named decaf method and a small first bag','People willing to verify roast date before bulk buying'],
    skipIf:[r.skip,'You need proof that your brewed decaf contains zero caffeine','You cannot verify freshness or use a large bag at your preferred pace'],
    authorNote:'I checked the ' + r.roaster + ' listing and official variant feed on October 15, 2026, then compared process, brew and external context. I have not bought, brewed or tasted this bag.',
    facts:[
      {label:'Exact coffee',value:r.roaster + ' ' + r.coffee + ', whole bean'},
      {label:'Roast direction',value:r.roast},
      {label:'Roaster flavor notes',value:r.notes + '; not Coffeedant tasting'},
      {label:'Current origin',value:r.origin},
      {label:'Decaffeination',value:r.process},
      {label:'Variety',value:r.variety},
      {label:'US direct sizes',value:r.sizes},
      {label:'Illustrative 18 g bean cost',value:'About $' + doseCost + ' using the dated 12 oz price; excludes shipping, tax, dialing waste and other drink costs'}
    ],
    sections:[
      {id:'identity',title:'What the current product record establishes',paragraphs:[r.identity]},
      {id:'flavor',title:'Roaster notes and external samples have different roles',paragraphs:[r.flavor]},
      {id:'brewing',title:'Choose the brew before the larger pack',paragraphs:[r.brew,r.limit]},
      {id:'freshness',title:'Make a freshness and storage plan',paragraphs:[
        'Store sealed, cool and dry; grind near brewing. [8]',
        decafPackPlanning[r.slug]
      ]},
      {id:'value',title:'Price is a dated comparison, not a promise',paragraphs:[
        decafValueJudgment[r.slug]
      ]},
      {id:'alternatives',title:'Choose the alternative for its documented role',paragraphs:[
        'Compare ' + r.altName + ' if ' + r.altWhy + '. [7]'
      ]}
    ],
    alternatives:[
      {title:r.altName,reason:r.altWhy,href:r.altSlug,internal:true},
      {title:'Best decaf coffee beans by brew method',reason:'Compare espresso, drip and milk-drink roles without a fabricated taste ranking.',href:guide,internal:true},
      {title:'Coffee grinder reviews',reason:'Match bean switching and adjustment to your routine.',href:'/grinder/',internal:true}
    ],
    faqs:[
      {question:'Is ' + r.coffee + ' completely caffeine-free?',answer:'The label does not establish zero caffeine in your cup.'},
      {question:'How is ' + r.coffee + ' decaffeinated?',answer:r.process + '. Check the current listing and bag for any lot-specific exception.'},
      {question:'What does ' + r.coffee + ' taste like?',answer:r.roaster + ' describes ' + noteDirection + '. Coffeedant has not tasted it or assigned a sensory score.'},
      {question:'Which brewing method fits it best?',answer:r.role + '. Follow the official method-specific recipe where available and adjust for your actual brewer.'},
    ],
    sources:[
      {id:'s1',title:r.roaster + ': ' + r.coffee + ' product page',href:r.official,note:'Exact identity, process, notes, brew role and current details where disclosed.',checked:date},
      {id:'s2',title:r.roaster + ': official product variant feed',href:r.feed,note:'12 oz US base price, availability, variants and credited image at check; not checkout.',checked:date},
      {id:'s3',title:r.externalTitle,href:r.externalUrl,note:r.external,checked:date,community:r.externalUrl.includes('reddit.com')},
      {id:'s4',title:'Swiss Water residual-caffeine context',href:water,note:'Process-provider explanation, not an assay of this product.',checked:date},
      {id:'s5',title:'US FDA on caffeine in decaf',href:fda,note:'Typical brewed-decaf range, not product-specific.',checked:date},
      {id:'s6',title:r.freshTitle,href:r.freshUrl,note:'Roaster brew or freshness guidance.',checked:date},
      {id:'s7',title:r.altName + ' full review',href:'https://coffeedant.com' + r.altSlug,note:'Different product and buying role.',checked:date},
      {id:'s8',title:'Stumptown coffee storage guidance',href:storage,note:'General whole-bean moisture and freezer-handling context.',checked:date}
    ],
    methodology:[
      'This is a research-led US buying assessment of the exact ' + r.coffee + '. I checked the current roaster record, official feed, brew and process context and attributable outside evidence on October 15, 2026. Coffeedant has not bought, brewed, tasted, measured or photographed this coffee. No numeric sensory score or product-specific caffeine result is claimed.',
      r.external + ' Recheck roast date, lot, selected size, stock, delivered price and promotions before ordering.'
    ],
    finalTitle:'Start with ' + r.coffee + ' only if its brew role fits',
    finalVerdict:r.role + '. The documented process is ' + r.process.toLowerCase() + ' and the roaster’s notes point toward ' + r.notes + '. The reason to pause is ' + r.skip + '. Start with 12 oz and let your own recipe answer the next-bag question.'
  };
};
const weekdayDecafBeans: BeanReviewData[] = records.map(makeReview);
export default weekdayDecafBeans;
