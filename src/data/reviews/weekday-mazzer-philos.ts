import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type Dimension=UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim=(score:number,claim:string,consequence:string,status:string,signals:[string,string,string],label?:string):Dimension=>({score,claim,consequence,status,signals,label});
const official='https://shop-us.mazzer.com/products/philos';
const manual='https://www.mazzer.com/wp-content/uploads/2024/04/IPH0L001S-QQQ.pdf';
const factoryFaq='https://www.mazzer.com/faq-b2c-mazzer/';
const wired='https://www.wired.com/review/mazzer-philos-coffee-grinder/';
const toms='https://www.tomsguide.com/home/coffee-makers/mazzer-philos-review';
const bon='https://www.bonappetit.com/story/mazzer-philos-coffee-grinder-review';
const usDealer='https://dipacciusa.com/products/mazzer-philos-light-commercial-single-dose-grinder';
const image='https://shop-us.mazzer.com/cdn/shop/files/foto_philos_Tavola_disegno_1.jpg?v=1733823028&width=2083';
const profile:UpgradeReviewProfile={
  excludeSelfFromAlternatives:true,
  key:'mazzer-philos-us-i200d-20261022',slug:'/grinder/mazzer-philos/',productId:'CD-GR-000007',
  brand:'Mazzer',model:'Philos',sku:'US-market 120 V shop selection with I200D 64 mm burrs; I189D is a distinct selectable burr option',
  category:'64 mm flat-burr single-dose espresso and filter grinder',brandPath:'/grinder/',
  title:'Mazzer Philos review: choose the burr before paying for the workflow',
  description:'Research-led US Mazzer Philos I200D review: exact burr option, stepped or stepless dial, retention evidence, front cleaning, stock and alternatives.',
  overview:'Mazzer Philos is a heavy 64 mm flat-burr single-dose grinder with a front-access burr chamber, 60 g hopper, 58 mm canister and a dial that can run stepped or stepless. The US shop lets buyers choose I200D for clearer light-to-medium coffee or I189D for a fuller traditional espresso brief. Those are materially different choices. This review evaluates the I200D option and labels external observations by the burr actually tested. The official US page displayed unavailable at this check, so a displayed catalog figure is not treated as a purchasable offer.',
  verdictLabel:'Strong espresso-first control if the I200D burr and actual US availability fit',
  verdict:'The Philos has a coherent single-dose design: a 6-micron stepped dial that can be converted to stepless, factory-aligned 64 mm burrs, a knocker and dose finisher, and front chamber access without resetting the rear adjustment. WIRED tested an I200D sample for a month and liked its espresso clarity and very low dose-to-dose retention, while also calling the grinder large and less compelling for drip at its price. Those observations are one reviewer’s protocol, not Coffeedant testing or a promise for I189D. The checked official US listing was unavailable; confirm a legitimate seller, exact burrs, voltage, warranty and delivered total before ordering.',
  assessment:'A distinctive documented workflow with independent I200D evidence; burr selection, footprint, stock and total cost decide value.',
  image,imageAlt:'Official Mazzer photograph of the black Philos single-dose flat-burr grinder',published:'2026-10-22',updated:'2026-10-22',
  price:{label:'Mazzer official US Philos listing',msrp:'No active US offer at check',numeric:'',currency:'USD',typical:'The selected official US page showed unavailable on October 22, 2026. Verify exact burr, voltage, shipping and tax at a live checkout.',checked:'October 22, 2026'},
  links:[{label:'Check exact Philos burr and US availability',href:official,note:'Select I200D or I189D; official US page showed unavailable at this check',primary:true},{label:'Read Mazzer operating instructions',href:manual,note:'Factory adjustment and cleaning procedure'}],
  facts:[
    {label:'Reviewed option',value:'US shop Philos with 64 mm I200D stainless flat burrs; US retailer lists 120 V / 60 Hz; I189D is a separate cup target'},
    {label:'Adjustment',value:'Stepped 6-micron increments across one ring, convertible to stepless; factory zero leaves burr clearance'},
    {label:'Dose hardware',value:'60 g removable hopper and 60 g 58 mm canister; optional 53 mm canister'},
    {label:'Cleaning',value:'Front burr chamber opens by removing magnetic plate and hand-fastened carrier while rear dial retains its setting'},
    {label:'Electrical and body',value:'400 W, 1600 rpm at 60 Hz; 153 × 351 × 361 mm and 12.5 kg, manufacturer figures'},
    {label:'Independent sample',value:'WIRED reviewed I200D after one month; its retention and cup descriptions belong to that test and method'},
    {label:'Stock',value:'Official US shop marked Philos unavailable on October 22, 2026; no current offer is claimed'}
  ],
  quickAnswers:[
    {question:'Which burr set does this review evaluate?',answer:'I200D is the reviewed US selection. The official shop also offers I189D, which Mazzer positions for fuller, lower-acid traditional espresso.'},
    {question:'Is the Philos always stepless?',answer:'No. It ships with a stepped dial in 6-micron increments and can be converted to stepless using Mazzer’s documented procedure.'},
    {question:'Does “zero retention” mean no grounds remain?',answer:'No. The factory describes a low-retention design and a knocker and chute finisher; WIRED observed very low dose differences under one protocol. Neither establishes zero residual coffee in every use.'},
    {question:'Will the 58 mm canister fit every portafilter?',answer:'It is designed for nominal 58 mm baskets. Check the actual basket and workflow; Mazzer lists a separate optional 53 mm canister.'},
    {question:'Can the burrs be cleaned without losing the setting?',answer:'Mazzer says the front carrier can be removed without moving the rear adjustment. Unplug first and follow the manual rather than improvising a tool procedure.'},
    {question:'Is there a verified live US checkout?',answer:'The official US page showed unavailable on October 22, 2026. Confirm the exact burr, electrical rating, warranty and total with a legitimate seller.'}
  ],
  bestFor:['An espresso-first buyer who wants I200D clarity and repeatable grind marks','A single-dose household changing coffees and willing to use the knocker and chute tool','An owner with counter depth and lift capacity for a 12.5 kg grinder'],
  avoidIf:['You want a small or inexpensive grinder for occasional drip','You assume I189D reviews describe the I200D cup','You need an immediately verified official-US purchase option'],
  pros:['Two clearly named factory burr options let the buyer choose a cup direction','Front chamber access retains the dial position under Mazzer’s procedure','Stepped 6-micron ring can become stepless','Independent I200D review documents low retention in its method'],
  cons:['Official US product page was unavailable at this check','12.5 kg mass and 351 mm depth demand real space','Single-dose knocker and dose finisher add manual steps','No fleet reliability or Coffeedant sensory measurement'],
  architecture:'vertically oriented 64 mm stainless flat burrs, long auger pre-breaker, 400 W asynchronous motor, rear adjustment dial, removable 60 g hopper and canister, front magnetic cover, knocker and dose finisher',
  identityBoundary:'The US Philos page offers I200D and I189D. Mazzer describes I200D as a clarity-oriented light-to-medium burr and I189D as a fuller traditional medium-to-dark burr. WIRED used I200D; one owner account about I189D is context for the choice, not confirmation of the reviewed cup. The factory technical dimensions apply to the model family; verify voltage on the delivered US nameplate.',
  primaryStrength:'A dial and cleaning path designed around measured single doses and frequent coffee changes.',
  primaryLimit:'The burr choice materially changes the target cup, while the official US listing did not offer a confirmed purchase at this check.',
  setupNote:'Select I200D or I189D before ordering and verify the delivered US nameplate, canister and finisher. Mazzer says factory zero leaves burr clearance; never force touching burrs. Use its broad 10–40 espresso setting range only as a start, then weigh input and output for one coffee. Allow front access and 351 mm counter depth.',
  espressoNote:'I200D targets clarity in lighter coffee. WIRED described sweet, full espresso and precise dialing on one I200D sample; Coffeedant has not tasted it. Six-micron dial increments describe burr-gap movement, not particle distribution. Roast age, basket and coffee change the useful setting. Mazzer documents optional stepless conversion for a tight shot window.',
  milkNote:'This grinder dimension covers filter brewing. Mazzer says both burr sets span espresso to batch brew and suggests 80–120 as a filter start. WIRED found its I200D sample easier to justify for espresso than drip. Filter-first buyers should compare a smaller dedicated grinder and actual cups. The 60 g hopper is for a measured dose, not bean storage.',
  workflowNote:'Weigh a dose, load the removable hopper, use the slide and collect in the 58 mm canister. Mazzer describes a vertical path and pre-breaker that limit retained grounds; the knocker and chute finisher are part of the stated low-retention procedure. WIRED reported very small input-output differences during its I200D test, but dose exchange, static and grounds left behind are different quantities. Repeat a regular-to-decaf transition with a documented purge if carryover matters; no source establishes a caffeine-free subsequent dose. The front panel and carrier can be removed for dry cleaning without losing the rear setting, provided the user follows the manual.',
  buildNote:'Mazzer lists anodized aluminum, brass and stainless components, 12.5 kg mass, factory burr-alignment checks and 400 W power. These document construction choices, not lifetime failure rates. WIRED praised the serviceable appearance after a month; an owner’s year-long report provides a longer individual view but no population denominator. Check shelf support, front access and power placement. Keep water away from the motor and follow Mazzer’s prescribed cleaning cycle. A commercial-style body is useful only if the household can move and maintain it safely.',
  featuresNote:'The marked ring, stepless option, knocker, finisher and front access each serve a distinct task. The optional 53 mm canister differs from the supplied 58 mm version. Hopper-free feeding can accept up to 24 g with the slide closed; this differs from the 60 g hopper capacity. Factory zero is not permission to run touching burrs. Check fit before buying.',
  valueNote:'The official US shop showed a catalog figure but marked Philos unavailable, so no active numeric offer is claimed. Value depends on using the chosen burr, repeatable dial and front cleaning. Independent reviewers used different samples and prices. Compare a live US invoice, warranty, tax and shipping with smaller electric grinders and a dedicated filter option.',
  ownerPattern:'Self-selected owners discuss chaff, cleaning and burr choice; they establish no defect rate. Identify the tested burr before applying any cup claim.',
  ownerCaution:'Unplug and seek authorized service for abnormal motor, vibration or interlock behavior. A separate grinder is safer for strict caffeine separation than a zero-retention claim.',
  maintenanceNote:'Mazzer directs dry cleaning of hopper, canister, chute and burr chamber with power disconnected. Follow its finisher procedure and keep carrier contacts clean. Front access should preserve the setting. Electrical repairs and replacement burr service require qualified support.',
  dimensions:{
    espresso:dim(8.3,'I200D 64 mm burrs and fine marked control target precise espresso adjustment.','Sweetness and clarity reports belong to independent samples, not our shots.','Factory choice and WIRED I200D month-long sample',['64 mm I200D steel flats.','6-micron stepped movement.','No Coffeedant tasting or particle measurements.']),
    milk:dim(7.4,'A single ring covers coarse filter positions as well.','Filter-first value is less clear at this size and cost.','Factory manual and WIRED sample',['Manual gives 80–120 filter start.','60 g measured-dose hopper.','No Coffeedant filter cup.'],'Filter brewing'),
    workflow:dim(8.1,'Knocker, finisher and front access support frequent dose changes.','Very low measured dose difference cannot certify zero carryover.','Mazzer procedure and independent I200D review',['Vertical burr path.','Chute finisher is a separate action.','Retention methods differ.']),
    build:dim(8.0,'Machined metal body and front carrier have a clear service path.','Mass and price do not establish a lifetime failure rate.','Factory specification and external short-term/owner evidence',['12.5 kg body.','400 W motor family.','Setting-retaining front access.']),
    features:dim(8.0,'Stepped or stepless dial and two burr choices offer deliberate configuration.','Choosing the wrong burr for the buyer’s preferred cup weakens the case.','Mazzer product and FAQ',['I200D versus I189D.','6-micron steps.','Optional 53 mm canister.']),
    value:dim(6.9,'A specialized high-end workflow may justify the spend for frequent use.','Official US page was unavailable; delivered total is unverified.','October 22 US shop and independent alternatives',['No active official-US offer.','Large counter footprint.','Check exact burr and warranty.'])
  },
  sources:[
    {label:'Mazzer official US Philos listing',href:official,note:'Burr selection, model, dimensions, components, official image and unavailable state checked October 22, 2026.'},
    {label:'Mazzer Philos operating manual',href:manual,note:'Factory setting ranges, zero, chamber cleaning and safety procedure; use supplied revision if different.'},
    {label:'Mazzer burr-selection FAQ',href:factoryFaq,note:'Factory I200D and I189D target profiles, not a Coffeedant blind taste.'},
    {label:'WIRED Philos I200D review',href:wired,note:'February 2026 one-month independent I200D sample, retention and espresso impressions; no universal result.'},
    {label:'Tom’s Guide Philos review',href:toms,note:'Independent sieve, retention and use account; protocol and tested burr must be checked before transferring figures.'},
    {label:'Bon Appétit Philos review',href:bon,note:'January 2026 independent household account after months of use; may use different coffee or burr.'},
    {label:'Mazzer factory 2023 Philos data sheet',href:'https://www.mazzer.com/wp-content/uploads/2023/10/depliant-Philos-2023-ENG-WEB.pdf',note:'64 mm, electrical, hopper, canister and body family specification.'},
    {label:'Owner: year in review with Philos',href:'https://www.reddit.com/r/espresso/comments/1pgailu/year_in_review_with_the_mazzer_philos/',note:'Self-selected year-long use report; no fleet reliability denominator.'},
    {label:'Owner: I189D burr account',href:'https://www.reddit.com/r/espresso/comments/1wvnwf9/review_conical_grinders_to_189d_flat_burrs_on_the/',note:'October 2026 short-term I189D sample; different burr from reviewed I200D.'},
    {label:'Mazzer US shop product photography',href:official,note:'Official black Philos image identity and credit.'},
    {label:'Toms Grinder Lab three-month Philos video',href:'https://www.youtube.com/watch?v=VfF8hoTc_Xc',note:'January 19, 2025 independent sample and two-burr comparison; blind tasting is the creator’s, not Coffeedant’s.'},
    {label:'Di Pacci US Philos electrical listing',href:usDealer,note:'Retailer specifies 120 V / 60 Hz US plug; verify the delivered nameplate and selected burr.'}
  ],
  comparisons:[
    {name:'Mazzer Philos I200D',quickDecision:'Choose clarity-oriented 64 mm flats and setting-retaining front cleaning.',priceClass:'Verify live US checkout',dimensions:'153 × 351 × 361 mm',heating:'400 W motor',coffeeSetup:'I200D; stepped or stepless',milkWorkflow:'60 g single dose, chute finisher',bestFor:'Espresso-first multi-coffee use'},
    {name:'Eureka Mignon Zero 65 AP',href:'/grinder/eureka-mignon-zero-65-all-purpose/',quickDecision:'Choose a smaller flat-burr single-dose platform with a different dial and bellows.',priceClass:'Check current US price',dimensions:'357 × 133 × 215 mm',heating:'310 W factory',coffeeSetup:'65 mm blind flats, stepless',milkWorkflow:'45 g hopper and bellows',bestFor:'Compact switcher'},
    {name:'Baratza Encore ESP Pro',href:'/grinder/baratza-encore-esp-pro/',quickDecision:'Choose a lower-cost control panel and accessible service path.',priceClass:'Check current US price',dimensions:'Compact',heating:'70 W US listing',coffeeSetup:'40 mm M2 conical',milkWorkflow:'Hopper or single dose',bestFor:'Value and flexible dosing'},
    {name:'1Zpresso K-Ultra',href:'/grinder/1zpresso-k-ultra/',quickDecision:'Choose portable hand grinding with lower counter commitment.',priceClass:'Check current US price',dimensions:'Handheld',heating:'No electrical supply',coffeeSetup:'48 mm conical hand grinder',milkWorkflow:'Manual dose',bestFor:'Travel and quiet'}
  ],
  comparisonNote:'These are different burr geometries, power and dose routines, not a shared Coffeedant blind-taste ranking. Confirm current US price, stock, warranty and selected burr before making a value comparison.',
  recommendations:[
    {kicker:'Smaller flat-burr switcher',title:'Eureka Mignon Zero 65 AP',text:'Compare the bellows and dial if the Philos footprint and stock are poor fits.',href:'/grinder/eureka-mignon-zero-65-all-purpose/',linkLabel:'Read Eureka review'},
    {kicker:'Lower-spend electric',title:'Baratza Encore ESP Pro',text:'Its control and service route may be enough without a large premium grinder.',href:'/grinder/baratza-encore-esp-pro/',linkLabel:'Read ESP Pro review'},
    {kicker:'Portable manual',title:'1Zpresso K-Ultra',text:'A hand grinder is a distinct quiet and travel option rather than a like-for-like motor substitute.',href:'/grinder/1zpresso-k-ultra/',linkLabel:'Read K-Ultra review'},
    {kicker:'Bean switching',title:'Regular and decaf grinder guide',text:'Keep low-retention claims separate from strict caffeine separation.',href:'/grinder/best-grinders-for-switching-regular-and-decaf/',linkLabel:'Read switching guide'}
  ],
  faqs:[
    {question:'Which burr option does this review mean?',answer:'I200D on the official US Philos selection. Mazzer also sells I189D, a fuller medium-to-dark roast direction; independent impressions cannot be silently transferred.'},
    {question:'Is the Philos stepped or stepless?',answer:'Both are possible. Its marked ring ships stepped in 6-micron increments and Mazzer documents conversion to stepless.'},
    {question:'Is the official US listing available?',answer:'The page displayed unavailable on October 22, 2026. Check a legitimate seller for exact burrs, electrical rating and live checkout.'},
    {question:'Does it truly retain zero grounds?',answer:'No universal zero is established. Mazzer supplies a knocker and chute finisher; WIRED observed very low dose differences on one I200D sample.'},
    {question:'Can I brew filter coffee?',answer:'Mazzer supports espresso through batch brew and gives a broad 80–120 filter range. WIRED’s reviewer found its value stronger for espresso.'},
    {question:'Will my portafilter fit the dosing canister?',answer:'The supplied canister is designed for nominal 58 mm baskets, with an optional 53 mm version. Confirm actual basket and workflow fit.'},
    {question:'Can I clean the burr chamber myself?',answer:'Mazzer documents front access with power disconnected, dry cleaning and retention of the rear dial setting. Follow the supplied manual and use authorized service for repairs.'},
    {question:'Is I189D an easy future swap?',answer:'Mazzer describes front burr access and optional burr choice, but a swap changes the cup target and may require recalibration. Confirm parts and service terms.'}
  ],
  finalTitle:'Choose the burr and verify the actual purchase path',
  finalVerdict:['I200D Philos offers a strong documented espresso-first workflow with independent sample support for fine dialing and low retained-dose differences. The design makes a real attempt to simplify cleaning and repeatable switching.','Those strengths do not make I189D tasting evidence interchangeable with I200D, nor do they prove zero carryover or lifelong reliability. A filter-first buyer should compare a smaller grinder.','Because the official US listing was unavailable at this check, obtain a current legitimate invoice for the exact burr and 120 V unit before deciding whether the large footprint and premium cost earn their place.'],
  video:{id:'VfF8hoTc_Xc',title:'Mazzer Philos Review after three months use',creator:'Toms Grinder Lab',published:'2025-01-19',note:'Independent two-burr sample and blind comparison. Creator tasting is not a measurement of the current US I200D bag or a Coffeedant result.'}
};
const review=buildUpgradeReview(profile);
review.author.note='I checked the exact US shop, Mazzer manual and burr FAQ, three independent reviews and selected owner accounts on October 22, 2026. Coffeedant has not owned, ground with, measured or tasted the Philos.';
review.evaluation.basis.disclosure='Research-led US I200D grinder assessment. Six dimension scores are editorial judgments about documented design and attributed sample evidence, not Coffeedant flavor, particle, retention, sound or reliability measurements. The official US page was unavailable at this check.';
export const weekdayMazzerPhilosReviews:MachineReviewData[]=[review];

