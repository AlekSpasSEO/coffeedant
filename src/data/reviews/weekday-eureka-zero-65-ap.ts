import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type Dimension = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (score:number,claim:string,consequence:string,status:string,signals:[string,string,string],label?:string):Dimension => ({score,claim,consequence,status,signals,label});
const official='https://www.eureka.co.it/en/products/eureka%2B1920/prosumer%2Bgrinders/zero%2Brange/118/';
const us='https://www.wholelattelove.com/products/eureka-mignon-zero-65-all-purpose-grinder';
const manual='https://support.clivecoffee.com/en/articles/16426660-eureka-mignon-zero-65-ap-espresso-grinder-user-manual';
const independent='https://kiffeemacher.com/en/blogs/kaffeewissen/eureka-zero-vergleichstest';
const compendium='https://kaffeemacher.ch/en/blogs/kaffeewissen/eureka-mills';
const clive='https://clivecoffee.com/blogs/learn/eureka-mignon-zero-65-ap-grinder-what-to-know-before-buying-clive';
const video='https://www.youtube.com/watch?v=Ctsbwb5RaAY';
const hero='https://www.eureka.co.it/public/catalogo/thumb_118-1.jpg';

const profile:UpgradeReviewProfile={
  excludeSelfFromAlternatives:true,
  key:'eureka-mignon-zero-65-ap-us-20261020',slug:'/grinder/eureka-mignon-zero-65-all-purpose/',productId:'CD-GR-000006',
  brand:'Eureka',model:'Mignon Zero 65 All Purpose',sku:'US 110 V, standard 65 mm hardened-steel blind burrs; not Oro Single Dose Pro or Libra 65 AP',
  category:'65 mm flat-burr single-dose espresso and filter grinder',brandPath:'/grinder/',
  title:'Eureka Mignon Zero 65 AP review: a wide-range dial with retention limits',
  description:'Research-led US review of Eureka Mignon Zero 65 All Purpose: exact 110 V model, 65 mm burrs, dial return, bellows, independent retention and dated value.',
  overview:'The Zero 65 AP is a single-dose Mignon with a larger marked dial and bellows, built for moving from espresso toward filter without parking beans in a hopper. Its strongest case is the combination of fine adjustment and a visible revolution count. The important caveat is that the manufacturer’s very-low-retention claim and an independent absolute-retention observation use different methods; neither proves that a decaf dose contains zero old regular grounds.',
  verdictLabel:'A useful 110 V single-dose switcher when purging and a $499 grinder fit the routine',
  verdict:'The US dealer identifies a 110 V Zero 65 All Purpose at $499 in its checked selection. Eureka specifies 65 mm hardened steel flat blind burrs, a stepless micrometric system, a revolution-counting dial and bellows. Kaffeemacher’s sample found appreciable absolute retention under its own protocol, while Eureka reports lower numbers under its factory protocol. Both can be true because they measure different things. Buy it for a repeatable espresso/filter workflow, not a promise of perfectly clean regular-to-decaf separation.',
  assessment:'A compelling documented adjustment system with an explicit need to test carryover on the delivered unit.',
  image:hero,imageAlt:'Official Eureka product image of Mignon Zero 65 All Purpose single-dose grinder',published:'2026-10-20',updated:'2026-10-20',
  price:{label:'Whole Latte Love US 110 V selected listing',msrp:'$499',numeric:'499',currency:'USD',typical:'Base grinder before tax and shipping; color and stock can change. Checked October 20, 2026.',checked:'October 20, 2026'},
  links:[{label:'Check exact 110 V Zero 65 AP at US dealer',href:us,note:'Confirm voltage, selected color, $499 listing and live checkout',primary:true},{label:'Read the current Eureka product record',href:official,note:'Factory specifications and included workflow'}],
  facts:[
    {label:'Exact US identity',value:'Mignon Zero 65 All Purpose, US dealer 110 V listing; not Zero Brew, Oro Single Dose Pro or Libra 65 AP'},
    {label:'Burrs and adjustment',value:'65 mm hardened-steel flat blind burrs; stepless micrometric regulation and revolution-counting king-size dial'},
    {label:'Dose handling',value:'45 g single-dose hopper, bellows, 5° body tilt, 58 mm dosing cup and adjustable fork'},
    {label:'Factory dimensions',value:'357 × 133 × 215 mm; 5.6 kg, according to Eureka'},
    {label:'Electrical',value:'US dealer specifies 110 V; Eureka lists 310 W and 1350 rpm for the product family'},
    {label:'Retention evidence',value:'Eureka reports about 0.55 g total retention; Kaffeemacher reports 1.8 g absolute retention in its different protocol'},
    {label:'US price check',value:'$499 base grinder selected at Whole Latte Love on October 20, 2026'}
  ],
  quickAnswers:[
    {question:'Is the Zero 65 AP the same as the Zero Brew?',answer:'No. This review covers the All Purpose model with 65 mm blind burrs and espresso-through-filter positioning. Verify the exact name and 110 V label.'},
    {question:'Does the dial return to an espresso setting?',answer:'The revolution counter gives a readable reference across a wide travel. It does not guarantee identical output after a bean or burr-state change; confirm by a shot.'},
    {question:'Does zero in the name mean zero grounds left inside?',answer:'No. Eureka and Kaffeemacher report nonzero retention under different protocols. The bellows reduces carryover but cannot prove complete clearance.'},
    {question:'Is this safe for strict decaf separation?',answer:'No grinder in this evidence set is certified to produce a caffeine-free next dose after regular coffee. Use a dedicated grinder if a strict medical limit applies.'},
    {question:'Can it grind for filter?',answer:'Eureka calls it All Purpose, and the marked dial supports moving coarse. Validate the resulting cup with your own brewer and coffee.'},
    {question:'What does the US version cost?',answer:'The selected 110 V dealer listing showed $499 on October 20, 2026, before tax and shipping. Recheck the actual color and cart.'}
  ],
  bestFor:['An espresso drinker who also uses filter and wants marked return points','A single-dose household switching between regular and decaf with a practical purge routine','A buyer willing to check carryover on the delivered unit'],
  avoidIf:['You need zero regular-coffee carryover into decaf','You mainly want a full hopper and timed café-style dosing','You cannot justify the $499 US grinder against a simpler workflow'],
  pros:['65 mm blind flat burrs and stepless adjustment have an exact factory specification','Revolution-counting dial makes a large espresso-to-filter move easier to record','Bellows, tilt and single-dose hopper address old-ground carryover','US dealer specifies the 110 V variant and a dated base price'],
  cons:['Factory and independent retention numbers are not directly comparable','A bellows is an additional action and does not clear every hidden particle','A 45 g hopper is for measured doses, not bean storage','No Coffeedant taste, particle or durability testing'],
  architecture:'a 65 mm flat-burr, stepless single-dose grinder with a 5° tilted body, small load hopper, bellows, marked revolution-counting dial, 58 mm dosing cup and adjustable fork',
  identityBoundary:'This is the Eureka Mignon Zero 65 All Purpose in the US dealer’s 110 V selection, not the visually similar Zero Brew, Oro Single Dose Pro or the weight-dosing Libra 65 AP. Colors can change listing price and imagery. Factory dimensions and European samples describe the design; the 110 V label comes from the US seller.',
  primaryStrength:'The large marked dial gives a practical way to record two brew settings while the bellows helps clear the path between single doses.',
  primaryLimit:'Retention remains nonzero and depends on method, so a regular-to-decaf change still calls for a purge, inspection and a realistic tolerance.',
  setupNote:'Confirm the delivered product label says the All Purpose 110 V version. Set the adjustable fork for the supplied 58 mm cup, weigh beans before loading, close the metal hopper tab and follow the current manual’s power-and-feed sequence. Record full dial revolutions plus the final marking for each brew method. A reference number is a starting point after a bean change, not a calibrated grind standard.',
  espressoNote:'The 65 mm hardened-steel blind burrs and patented stepless micrometric control support small espresso adjustments. The large dial’s revolution counter helps navigate the broad range without losing track of turns. Eureka’s burr and dial claims establish capability, not espresso flavor. For the first bag, use a dose your basket accepts, weigh beverage yield and time, then change one adjustment at a time. Kaffeemacher’s grinder comparison offers independent sample observations; the tested coffee, electrical market and protocol cannot become Coffeedant shots. If a shot stalls after moving back from filter, move coarser before changing every recipe variable.',
  milkNote:'All Purpose refers to grind range, not a milk system. A filter-first buyer can use the large dial to return from an espresso mark toward a coarser brew method, then confirm the result with the actual coffee. The 45 g hopper fits a measured batch or two smaller doses, not long-term bean storage. The independent comparison covers the Zero family and suggests that cup character and retained grounds should be considered together. We have not brewed filter coffee with this unit. If a household mostly brews delicate light-roast filter, compare a dedicated filter grinder before paying for espresso-capable adjustment.',
  workflowNote:'A measured dose goes into the small hopper, through the burrs, into the 58 mm cup. The bellows and 5° tilt are intended to reduce old grounds. Eureka describes roughly 0.55 g total retention and +/-0.2 g espresso dose consistency, but these are its figures. Kaffeemacher reports 1.8 g absolute retention in its own procedure, plus a separate acoustic and output record. Absolute retention, dose-to-dose exchange and input-output difference are distinct measures, so selecting the smallest number as a universal specification would mislead. For regular-to-decaf use, brush and purge as the manual permits; label two bean containers, track settings, and accept that a little regular coffee may remain.',
  buildNote:'Eureka lists a 5.6 kg body, 357 × 133 × 215 mm dimensions, 65 mm hardened-steel burrs and 310 W motor family specification. The independent sample report documents different operational results, but one unit cannot establish lifetime reliability. Check that the bellows seats cleanly, the dial travels without binding, the fork supports the cup and the grinder does not vibrate excessively on the counter. The factory promotes a 10-year motor warranty; confirm the US seller’s written eligibility and all non-motor terms rather than generalizing that claim to every component.',
  featuresNote:'The meaningful features are the revolution count, stepless collar, bellows, anti-clump/static system and adjustable fork. A “zero” branding claim should be read as a design goal. The 58 mm cup is an included transfer aid, not proof that it locks onto every portafilter. Eureka’s “silent” label is qualitative; Kaffeemacher’s measured 79.2 dB on its sample belongs to that setup and distance, not a US kitchen guarantee. The grinder has manual activation, not an integrated weighing system. Keep a scale in the workflow when switching bags.',
  valueNote:'Whole Latte Love’s selected US 110 V listing showed $499 on October 20, 2026 before tax and shipping. Do not compare that with a differently colored or 220 V European unit. The extra spend over an Opus 2 or Encore ESP is justified only if the larger flat burrs, marked travel and bellows matter in the buyer’s daily routine. A dedicated decaf grinder could be a more reliable separation choice if caffeine carryover is a strict constraint. Include a scale, cleaning time and grinder space in the full station cost.',
  ownerPattern:'Exact-model owners report both low and unexpectedly high retained grounds. One owner noted an initially frustrating amount; another documented much smaller input-output differences. Those posts differ in coffee, scale, humidity, bellows use and seasoning. They are self-selected and supply no denominator for a failure rate. The independent Kaffeemacher protocol is more structured but remains a single external sample and a different quantity from Eureka’s factory figure.',
  ownerCaution:'Do not claim the bellows makes a decaf dose free of regular caffeine. If you observe repeated large input-output differences, document dose, roast, bellows strokes and cleaning, then contact the seller. Disconnect before opening permitted cleaning parts.',
  maintenanceNote:'Follow the current Eureka/Clive setup and cleaning manual for the exact AP unit. Unplug before accessing the burr area; brush permitted dry grounds and keep water out of the motor and electrical path. Bellows use can shift loose grounds, but deep internal cleaning should not be improvised from another Mignon model’s video. Keep the 58 mm cup and fork clear of hardened coffee oils.',
  dimensions:{
    espresso:dim(8.1,'Stepless 65 mm flat-burr adjustment supports an espresso dial-in.','Actual shots depend on coffee, basket and the delivered burr state.','Factory specification and independent sample; no Coffeedant shots',['65 mm hardened-steel flat blind burrs.','Stepless micrometric collar.','Revolution marker is a reference, not a calibrated particle size.']),
    milk:dim(7.6,'Marked travel makes filter use plausible beside espresso.','The resulting filter cup remains a personal preference and separate recipe.','Factory All Purpose scope and independent comparison',['Broad grind travel.','45 g single-dose hopper.','No shared Coffeedant sensory protocol.'],'Filter brewing'),
    workflow:dim(7.8,'Bellows and tilt support frequent bean changes.','Neither proves zero carryover into a decaf dose.','Factory retention claim, Kaffeemacher protocol and owner contrast',['Bellows and 5° tilt.','0.55 g factory total-retention claim.','1.8 g independent absolute-retention observation.']),
    build:dim(7.7,'Documented steel burrs and motor coverage support ownership.','Confirm region-specific warranty and care instructions.','Official product and US dealer listing',['5.6 kg factory body.','Adjustable cup fork.','10-year motor coverage requires terms check.']),
    features:dim(8.0,'Revolution counter and stepless dial have a clear daily job.','Manual activation and external weighing remain part of the routine.','Official specification and dealer manual',['Large countable dial.','58 mm dosing cup.','No integrated dose scale.']),
    value:dim(7.3,'The $499 US base buys a distinctive single-dose switcher.','A simpler or dedicated second grinder may fit other households better.','October 20 US selected listing and alternatives',['$499 selected 110 V base.','Other colors and taxes may differ.','Strict decaf separation unverified.'])
  },
  sources:[
    {label:'Eureka Zero 65 All Purpose product page',href:official,note:'Exact model, burrs, dial, dimensions, retention claims, motor and features checked October 20, 2026.'},
    {label:'Clive exact-model setup and user manual',href:manual,note:'US seller instruction for weighing, hopper tab, cup/fork and permitted operation.'},
    {label:'Whole Latte Love US 110 V listing',href:us,note:'Selected US voltage and $499 base listing, checked October 20, 2026; tax, color and stock may change.'},
    {label:'Kaffeemacher Zero comparison test',href:independent,note:'Independent grinder-family comparison; sample protocol, not a Coffeedant measurement.'},
    {label:'Kaffeemacher grinder compendium',href:compendium,note:'Zero 65 AP sample retention, noise and output data under its documented procedure.'},
    {label:'Clive exact-model buying overview',href:clive,note:'Commercial US dealer explanation of dial, bellows and single-dose use; not independent testing.'},
    {label:'Eureka official motor warranty statement',href:official,note:'Motor coverage marketing; verify US conditions before purchase.'},
    {label:'Owner discussion: higher retention',href:'https://www.reddit.com/r/espresso/comments/1pjs00l/eureka_mignonzero_65_ap_retention/',note:'Self-selected exact-model report, not failure-rate evidence.'},
    {label:'Owner discussion: initial Zero 65 AP sample',href:'https://www.reddit.com/r/espresso/comments/1hogncv/time_to_start_testing_this_mignon_zero_65_ap/',note:'One contrasting sample and method; not representative output tolerance.'},
    {label:'DieRöster exact-model video',href:video,note:'December 23, 2024 exact-model visual inspection and use; distinct from Kaffeemacher measurements.'},
    {label:'Whole Latte Love burr compatibility record',href:'https://www.wholelattelove.com/products/eureka-black-diamond-65mm-blind-burrs',note:'Distinguishes this All Purpose blind-burr platform from other Mignon burr sets.'}
  ],
  comparisons:[
    {name:'Eureka Mignon Zero 65 All Purpose',quickDecision:'Choose for marked stepless flat-burr switching with bellows.',priceClass:'$499 US check',dimensions:'357 × 133 × 215 mm',heating:'310 W factory specification',coffeeSetup:'65 mm blind flat burrs, countable dial',milkWorkflow:'45 g single dose and bellows',bestFor:'Espresso plus filter or bean switching'},
    {name:'Fellow Opus 2',href:'/grinder/fellow-opus-2/',quickDecision:'Choose a lower-spend conical single-dose routine with two cups.',priceClass:'$199.95 prior US check',dimensions:'206 × 130 × 267 mm',heating:'300 W US listing',coffeeSetup:'48 mm conical, stepless side dial',milkWorkflow:'Auto-stop, two cups',bestFor:'Espresso-first value'},
    {name:'Baratza Encore ESP Pro',href:'/grinder/baratza-encore-esp-pro/',quickDecision:'Choose display and dosing-mode control.',priceClass:'$299.95 prior US check',dimensions:'Compact counter grinder',heating:'70 W US listing',coffeeSetup:'40 mm M2, stepless',milkWorkflow:'Hopper or single dose',bestFor:'Flexible timed workflow'},
    {name:'1Zpresso K-Ultra',href:'/grinder/1zpresso-k-ultra/',quickDecision:'Choose a portable manual grinder and separate cups.',priceClass:'Premium manual',dimensions:'Handheld',heating:'No power',coffeeSetup:'48 mm conical, external steps',milkWorkflow:'Hand grind each dose',bestFor:'Travel and quiet use'}
  ],
  comparisonNote:'Compare exact US voltage and today’s prices before purchase. These grinders have different burr geometry, adjustment, dosing and service paths. No shared Coffeedant taste, carryover or longevity trial ranks them.',
  recommendations:[
    {kicker:'Lower-spend single dose',title:'Fellow Opus 2',text:'Consider the simpler side dial and two cups if 65 mm flat burrs and bellows are not essential.',href:'/grinder/fellow-opus-2/',linkLabel:'Read Opus 2 review'},
    {kicker:'Display and timed modes',title:'Baratza Encore ESP Pro',text:'Compare its controls and parts route if you do not need this Eureka single-dose layout.',href:'/grinder/baratza-encore-esp-pro/',linkLabel:'Read ESP Pro review'},
    {kicker:'Portable separation',title:'1Zpresso K-Ultra',text:'A hand grinder can live with a dedicated bean type, while still requiring cleaning.',href:'/grinder/1zpresso-k-ultra/',linkLabel:'Read K-Ultra review'},
    {kicker:'Regular and decaf',title:'Switching guide',text:'Compare four workable routines and the limit of any low-retention claim.',href:'/grinder/best-grinders-for-switching-regular-and-decaf/',linkLabel:'Read grinder guide'}
  ],
  faqs:[
    {question:'Which exact Zero 65 is reviewed?',answer:'The All Purpose model in a US dealer 110 V listing, with 65 mm blind flat burrs. It is not the Zero Brew, Oro Single Dose Pro or Libra 65 AP.'},
    {question:'Is it genuinely stepless?',answer:'Eureka specifies stepless micrometric regulation and a large dial that counts revolutions. Mark and verify each coffee’s setting.'},
    {question:'What does Eureka’s 0.55 g retention figure mean?',answer:'It is Eureka’s claimed total-retention result under its own method. Kaffeemacher reported 1.8 g absolute retention in a different protocol; neither is a universal dose guarantee.'},
    {question:'Can I alternate regular and decaf?',answer:'Yes as a workflow, using separate measured doses, permitted cleaning and a purge. Do not assume the decaf output is free of regular grounds.'},
    {question:'Does it include a scale?',answer:'No. Weigh input and output with a separate scale; the included 58 mm cup is for collecting and transferring grounds.'},
    {question:'Is the 10-year warranty for every part?',answer:'Eureka advertises ten years for its motors. Confirm applicable US terms and coverage for other components with the seller.'},
    {question:'How much space does it need?',answer:'Eureka lists 357 × 133 × 215 mm; allow extra clearance for hopper loading, bellows operation and access to the cup.'},
    {question:'What was the US price?',answer:'The selected 110 V US listing was $499 on October 20, 2026 before tax and shipping. Recheck the selected color and checkout.'}
  ],
  finalTitle:'Buy for the marked dial, then test the carryover',
  finalVerdict:[
    'The Zero 65 AP has a clear job: single-dose espresso and filter work with a readable stepless return point. The factory’s 65 mm burr specification and US 110 V dealer listing establish the exact reviewed configuration.',
    'The bellows lowers the effort of clearing grounds, yet nonzero independent retention and conflicting owner reports prevent a zero-carryover promise. That matters most when switching from regular to decaf.',
    'At the checked $499 US base, it is worth comparing with an Opus 2 or Encore ESP Pro on the actual daily workflow. Buyers needing strict caffeine separation should use a dedicated grinder and verify medical advice independently.'
  ],
  video:{id:'Ctsbwb5RaAY',title:'Mignon Zero 65 All Purpose: Gleich gut wie Single Dose Pro?',creator:'DieRöster',published:'2024-12-23',note:'Independent exact-model visual review. Kaffeemacher retention and sound figures come from a separate written protocol, not this video.'}
};

const cite=(n:number)=>`<a href="#${profile.key}-source-${n}">[source]</a>`;
profile.sectionOverrides={
  setup:`<p>${profile.setupNote} ${cite(1)} ${cite(2)}</p><p>Begin with the same coffee for several doses so you can learn the dial before judging a regular-to-decaf change. Stop and seek seller support if the motor stalls, the burrs sound abnormal or the cup/fork will not sit securely.</p>`,
  espresso:`<p>${profile.espressoNote} ${cite(1)} ${cite(4)}</p><p>Record dose, yield and full-turn count with a roast date. The espresso score is an editorial reading of adjustment control and independent sample context, not a Coffeedant shot or particle measurement.</p>`,
  milk:`<p>${profile.milkNote} ${cite(1)} ${cite(4)}</p><p>This dimension assesses <strong>filter brewing</strong> for a grinder. It does not imply any milk system. Keep filter and espresso recipes distinct, and judge the actual cup rather than assuming the phrase “All Purpose” guarantees equal taste for every method.</p>`,
  workflow:`<p>${profile.workflowNote} ${cite(1)} ${cite(5)} ${cite(8)}</p><p>Test a normal bean change with measured input and output. A bellows can shift loose particles, but a routine purge and care remain part of the decision.</p>`,
  build:`<p>${profile.buildNote} ${cite(1)} ${cite(2)}</p><p>${profile.maintenanceNote}</p><p>${profile.ownerCaution}</p>`,
  features:`<p>${profile.featuresNote} ${cite(1)} ${cite(6)}</p><p>Use the revolution counter to save a useful reference, then verify with the next shot. Neither the cup nor dial is an integrated weighing system.</p>`,
  value:`<p>${profile.valueNote} ${cite(3)}</p><p>The value score depends on the buyer using the bellows and wide marked travel often. A strict separation goal may justify a dedicated second grinder instead.</p>`,
  ownership:`<p>${profile.ownerPattern} ${cite(8)} ${cite(9)}</p><p>${profile.ownerCaution}</p>`
};

const review=buildUpgradeReview(profile);
review.article.authorNote='I compared the exact US 110 V seller listing, Eureka specifications, model-specific setup, independent measurements and selected owner accounts on October 20, 2026. Coffeedant has not ground, tasted, measured or owned this grinder.';
review.article.basisDisclosure='Research-led US grinder assessment. Six dimension scores are editorial judgments from documented design, independent sample evidence and dated price, not Coffeedant particle, flavor, sound, retention or reliability measurements. Factory and independent retention figures use different protocols.';
export const weekdayEurekaZero65ApReviews:MachineReviewData[]=[review];
