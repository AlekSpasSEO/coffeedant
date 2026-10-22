import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type Dimension=UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim=(score:number,claim:string,consequence:string,status:string,signals:[string,string,string]):Dimension=>({score,claim,consequence,status,signals});
const official='https://www.turingrinders.com/products/turin%E2%84%A2-legato%E2%84%A2-v2-espresso-machine';
const independent='https://kaffeemacher.ch/en/blogs/kaffeewissen/avx-db1-hero-x-test';
const kev='https://coffeeblog.co.uk/mii-coffee-apex-v2-review/';
const lance='https://www.youtube.com/watch?v=UN0Qs7zSGk8';
const video='https://www.youtube.com/watch?v=cYtvsYuFgxM';
const image='https://www.turingrinders.com/cdn/shop/files/Legato_15f9860f-8422-486b-8db2-60854ca246f3.jpg?v=1737056513&width=1080';
const profile:UpgradeReviewProfile={
  excludeSelfFromAlternatives:true,
  key:'turin-legato-v2-us-20261022',slug:'/espresso-machine/turin-legato-v2/',productId:'CD-EM-000252',
  brand:'Turin',model:'Legato V2',sku:'US 120 V stainless SKU TCRM3007LSS-100; not original Legato V1 or a 220 V AVX regional unit',
  category:'Compact manual espresso machine with brew boiler and steam thermoblock',brandPath:'/espresso-machine/',
  title:'Turin Legato V2 review: hybrid heat with a first-shot caveat',
  description:'Research-led US Turin Legato V2 review: 120 V stainless SKU, 550 mL brew boiler, steam thermoblock, OPV, independent platform warmup findings and alternatives.',
  overview:'The current stainless Turin Legato V2 US listing identifies a 120 V, 1,500 W machine with a 550 mL stainless brew boiler, a separate steam thermoblock, 58 mm portafilter, adjustable PID settings and OPV. It is a hybrid, not a dual-boiler machine, and its two heat sources do not mean simultaneous brewing and steaming through one pump. The value of its controls depends on a workable first-shot routine. A January 2026 independent test of a related European AVX Hero X platform found a much colder first shot than later shots unless it used a longer warmup and flushes; that is a warning to investigate on the US V2, not a direct measurement of this SKU.',
  verdictLabel:'Useful manual control if you accept a measured warmup routine',
  verdict:'Legato V2 puts PID, externally adjustable pressure, pre-infusion settings, a 58 mm group and separate brew/steam heaters in a compact US machine. The official seller also names its 120 V rating and current included double-spout portafilter and baskets, while expressly excluding a tamper. The strongest independent platform study shows why a five-minute ready light should not be equated with a fully hot first shot: its European AVX sample required more heat soak and flushing. Regional branding and revision details prevent transferring exact temperature and steam figures to this stainless US SKU. Buyers who want consistent manual espresso should use a scale, verify the delivered manual and service route, and check live price and stock without treating a temporary discount as a permanent feature.',
  assessment:'Strong documented controls for a compact station, qualified by cross-market first-shot and service uncertainty.',
  image,imageAlt:'Official Turin Legato V2 stainless espresso machine product image',published:'2026-10-22',updated:'2026-10-22',
  price:{label:'Turin US Legato V2 stainless listing',msrp:'No verified durable numeric offer',numeric:'',currency:'USD',typical:'Check stainless SKU, live cart, tax, grinder, tamper and warranty. Temporary promotion expiry was not verified.',checked:'October 22, 2026'},
  links:[{label:'Check exact US Legato V2 and availability',href:official,note:'Verify 120 V stainless SKU TCRM3007LSS-100, accessories and current cart',primary:true},{label:'Read independent platform evaluation',href:independent,note:'European AVX Hero X sample; method and regional limits are stated'}],
  facts:[
    {label:'Exact US selection',value:'Turin Legato V2 stainless TCRM3007LSS-100; official selection lists 120 V, 1,500 W'},
    {label:'Heating',value:'550 mL stainless brew boiler plus separate steam thermoblock; not two boilers'},
    {label:'Pressure and controls',value:'PID, adjustable pre-infusion time/delay, vibration pump and externally adjustable OPV'},
    {label:'Water and group',value:'1.7 L removable reservoir and nominal 58 mm portafilter'},
    {label:'Size',value:'Approximately 8.75 in W × 12.5 in D × 14.625 in H without portafilter, seller specification'},
    {label:'Current included package',value:'Double-spout portafilter, single and double baskets, backflush powder; tamper and grinder separate'},
    {label:'Independent limit',value:'2026 Kaffeemacher data concern European AVX DB1 Hero X platform and cannot certify US SKU temperature or steam timing'}
  ],
  quickAnswers:[
    {question:'Is the Legato V2 a dual boiler?',answer:'No. The current US listing specifies a 550 mL brew boiler and a separate thermoblock for steam.'},
    {question:'Can it brew and steam at the same time?',answer:'Do not assume so from two heaters. The related platform uses one pump and independent evaluation reports sequential brewing then steaming.'},
    {question:'Is the five-minute estimate a hot first shot?',answer:'It is a seller heat-up estimate, not a measured puck temperature. The related European platform sample required longer heat soak and flushes for its first-shot protocol.'},
    {question:'Does the V2 include a tamper?',answer:'The current Turin package list says no. Confirm the basket fit and buy a suitable tamper separately.'},
    {question:'Are pre-infusion and pressure genuinely adjustable?',answer:'The current US listing names both, including an adjustable OPV. An independent related-platform sample found the pre-infusion pause problematic in its protocol; test your delivered revision before relying on it.'},
    {question:'What is a verified complete station cost?',answer:'No stable delivered total was established. Add a capable grinder, tamper, scale, tax and any water-care supplies to the live machine cart.'}
  ],
  bestFor:['A hands-on espresso beginner willing to learn dose, yield, temperature and first-shot warmup','A compact US station needing 58 mm baskets and separate steam heating','A buyer who can confirm local service, exact accessories and a live checkout'],
  avoidIf:['You require a true dual boiler or simultaneous brewing and steaming','You expect a five-minute ready message to prove a hot group and portafilter','You want an integrated grinder, tamper or scale'],
  pros:['Current seller specifies 120 V exact SKU and hybrid heating honestly','PID, OPV and pre-infusion adjustments offer meaningful manual levers','58 mm basket platform and 1.7 L removable tank are documented','Related-platform independent testing found stable later-shot temperatures after a workaround'],
  cons:['Independent platform first shot ran cold without extra warmup and flushing','Timed preset buttons are not beverage-mass control','Thermoblock steam pace and one-pump sequence limit milk workflow','Long-term failure rates and exact US-SKU first-shot behavior are unmeasured'],
  architecture:'a 550 mL stainless brew boiler over the group, a separate steam thermoblock, a shared vibration-pump water supply, a 1.7 L removable tank, PID setting, adjustable OPV and 58 mm portafilter',
  identityBoundary:'This review covers the current official Turin Legato V2 stainless US 120 V selection, SKU TCRM3007LSS-100. Original Legato V1 reviews can misstate its OPV, pre-infusion and accessory package. The MiiCoffee Apex V2 and European AVX Hero X are related Gemilai-built platforms, but importer, wiring, firmware, accessory and service differences may matter. Their measured temperatures and steam times are explicitly contextual, not certified for this US unit.',
  primaryStrength:'Unusually explicit manual control over brew temperature, pressure and pre-infusion in a compact boiler-plus-thermoblock station.',
  primaryLimit:'The quickest ready signal is not evidence that the group and portafilter are fully heat-soaked for the first extraction.',
  setupNote:'Confirm stainless V2 SKU and 120 V rating, then prime the tank, brew circuit and steam system under the delivered manual. Add a fitted tamper, grinder and scale. Leave room for tank access and the portafilter. Five minutes is a seller heat-up estimate, not proof of group heat soak; compare first and second shots at the same dose and measured yield.',
  espressoNote:'The brew boiler and PID provide a setpoint; the OPV can cap pressure under a proper test. Neither display measures puck temperature or guarantees flavor. Kaffeemacher found a cooler first measured extraction after 15 minutes on a related European AVX sample; two flushes improved it. That is contextual warning evidence, not a US Turin temperature curve. Weigh dose and yield, and use authorized service for abnormal pressure.',
  milkNote:'The steam thermoblock avoids reheating the brew boiler, yet the related platform uses one pump and sequential brewing and steaming. Kaffeemacher measured roughly one minute for 300 mL milk in its European protocol; Coffee Kev used a smaller 170 mL trial on Apex V2. Neither result transfers to this exact US SKU. Purge and wipe the wand under the delivered manual. Large milk-drink households should seek an exact-unit demonstration.',
  workflowNote:'Warm the portafilter, weigh coffee, grind, tamp and stop by beverage mass on a scale. Programmable buttons stop by time, so grind changes alter yield. One related-platform study found its pre-infusion pause vented pressure; test the delivered US revision instead of assuming identical behavior. Begin with manual extraction and change one setting at a time. Adjust OPV only with safe instructions and equipment.',
  buildNote:'Turin specifies a stainless brew boiler, 58 mm portafilter, removable tank and 120 V supply. One regional teardown found fit and service compromises, but it cannot establish a Turin failure rate. Confirm the delivered revision, warranty handler and available parts with the US seller. Isolated complaints do not predict lifetime.',
  featuresNote:'PID, pressure setting, pre-infusion timing, manual control, shot timer and steam thermoblock provide multiple useful levers. The current package excludes a tamper. Flow adjustment uses a screw, not an E61 paddle; timed stop is not beverage-mass control. Save a baseline before changing settings and record coffee dose and yield.',
  valueNote:'The US page showed a promotion and stock on October 22, but no verified promotion end or delivered total; no numeric offer is claimed. Compare the live 120 V stainless cart with grinder, tamper, scale, water care, tax and service. Gaggia Classic Evo Pro, Breville Bambino and Profitec GO offer different heat and control paths. The Legato case depends on accepting its warmup routine.',
  ownerPattern:'Individual V2 owners report both good short-term use and pressure or pre-infusion questions. Reports differ in water, grinder, priming, revision and support, so no defect percentage follows. For first-week checks, document priming, pressure and repeatable shots, then contact the actual seller if behavior is abnormal.',
  ownerCaution:'Never open an energized or pressurized machine or adjust a safety valve from forum advice. Document symptoms and contact authorized service.',
  maintenanceNote:'Follow the delivered V2 manual for priming, backflushing and water requirements. Included backflush powder does not remove scale risk. Clean tray and tank; purge and wipe the steam wand. Ask the seller for revision-specific guidance before using a V1 cleaning video.',
  dimensions:{
    espresso:dim(7.3,'PID and OPV support manual shots after a deliberate warmup.','Related-platform first-shot data show a material cold-start risk.','Official US design and independent European-platform sample',['550 mL brew boiler.','Separate setpoint and pressure adjustments.','No Coffeedant US-SKU shot measurement.']),
    milk:dim(6.6,'A separate thermoblock makes steam available without reheating the brew boiler.','One-pump sequence and sample pace may frustrate large milk queues.','Official hybrid design and related-platform trials',['Steam thermoblock.','Sequential brew and steam.','Regional milk times are contextual.']),
    workflow:dim(6.8,'Shot timer and manual control help a measured routine.','Timed presets and first-shot flushing require active attention.','Seller controls and independent sample',['1.7 L tank.','Timed rather than mass-based stop.','Warmup criterion matters.']),
    build:dim(6.6,'The current SKU, electrical rating and core heating materials are specified.','Service route and revision-specific durability need verification.','Official package and limited external samples',['120 V stainless selection.','58 mm group.','No fleet reliability data.']),
    features:dim(7.5,'PID, OPV and pre-infusion controls are unusually broad for the role.','Not every control improves a shot; pre-infusion behavior is disputed.','Current US listing and AVX/Apex V2 context',['Externally adjustable OPV.','Pre-infusion time and delay.','Flow screw is not a profiling paddle.']),
    value:dim(7.1,'Hybrid control may make a compact manual station appealing.','Total station cost and temporary promotion must be verified.','October 22 US seller and alternative reviews',['No durable numeric offer.','Grinder, tamper and scale extra.','Confirm warranty and stock.'])
  },
  sources:[
    {label:'Turin Grinders current US Legato V2 listing',href:official,note:'Stainless 120 V SKU, heating, controls, included accessories, official image and October 22 stock/promotion display.'},
    {label:'Kaffeemacher AVX DB1 Hero X independent test',href:independent,note:'January 2026 related European platform sample; Scace temperature, warmup, milk and build results do not certify US Turin SKU.'},
    {label:'Coffee Kev Apex V2/Legato V2 field review',href:kev,note:'May 2026 related V2 platform account; importer, revision and electrical differences remain possible.'},
    {label:'Coffee Kev V2 video review',href:video,note:'January 25, 2025 independent Apex V2/Turin Legato V2 discussion; exact seller package may have changed.'},
    {label:'Lance Hedrick V2 comparison video',href:lance,note:'Independent V2 platform visual review linked by the current Turin seller; creator sample is not Coffeedant testing.'},
    {label:'Turin current warranty terms',href:'https://www.turingrinders.com/pages/warranty-terms',note:'Seller support terms to reconfirm for the delivered US SKU.'},
    {label:'Turin current returns policy',href:'https://www.turingrinders.com/policies/refund-policy',note:'Regional return conditions and costs to check before order.'},
    {label:'V2 owner week-long report',href:'https://www.reddit.com/r/espresso/comments/1g52s0w/turin_legato_v2_1_week_review/',note:'Self-selected short-term use; no controlled reliability or temperature result.'},
    {label:'V2 owner pressure problem and support',href:'https://www.reddit.com/r/espresso/comments/1qtellg/pressure_issues_with_new_machine_turin_legatto_v2/',note:'One pressure symptom and follow-up; not a fleet defect rate or repair instruction.'},
    {label:'V2 owner retailer-service concern',href:'https://www.reddit.com/r/espresso/comments/1s3jydk/experience_with_turin_grindersespresso_outlet/',note:'One service account, separate retailer, not universal warranty behavior.'}
  ],
  comparisons:[
    {name:'Turin Legato V2',quickDecision:'Choose hybrid heat and adjustable manual controls with a warmup plan.',priceClass:'Check live US cart',dimensions:'8.75 × 12.5 × 14.625 in',heating:'550 mL brew boiler + steam thermoblock',coffeeSetup:'58 mm, grinder and tamper extra',milkWorkflow:'Sequential steam thermoblock',bestFor:'Hands-on compact control'},
    {name:'Gaggia Classic Evo Pro',href:'/espresso-machine/gaggia-classic-evo-pro/',quickDecision:'Choose a simpler single-boiler 58 mm baseline and its separate upgrade ecosystem.',priceClass:'Check current US listing',dimensions:'Compact single boiler',heating:'Single boiler',coffeeSetup:'Manual grinder and tamper',milkWorkflow:'Switch boiler mode for steam',bestFor:'Traditional simple platform'},
    {name:'Breville Bambino',href:'/espresso-machine/breville-bambino/',quickDecision:'Choose a faster start with fewer manual adjustment layers.',priceClass:'Check current US listing',dimensions:'Compact',heating:'ThermoJet',coffeeSetup:'54 mm basket and separate grinder',milkWorkflow:'Manual steam',bestFor:'Quick routine'},
    {name:'Profitec GO',href:'/espresso-machine/profitec-go/',quickDecision:'Compare a higher-tier single boiler and its service package.',priceClass:'Check current US listing',dimensions:'Compact prosumer',heating:'Single boiler PID',coffeeSetup:'58 mm manual',milkWorkflow:'Mode change for steam',bestFor:'Build and service priority'}
  ],
  comparisonNote:'Compare exact US voltage, current cart, warranty and a complete grinder-equipped station. European AVX and UK Apex results are platform evidence, not interchangeable US SKU measurements.',
  recommendations:[
    {kicker:'Classic single boiler',title:'Gaggia Classic Evo Pro',text:'A simpler 58 mm path if the hybrid’s extra controls and warmup tradeoff are not appealing.',href:'/espresso-machine/gaggia-classic-evo-pro/',linkLabel:'Read Gaggia review'},
    {kicker:'Fast-start compact',title:'Breville Bambino',text:'Compare a different warmup and smaller basket system for a shorter morning routine.',href:'/espresso-machine/breville-bambino/',linkLabel:'Read Bambino review'},
    {kicker:'Higher-tier manual',title:'Profitec GO',text:'Assess the single-boiler service and build tradeoff at a different station budget.',href:'/espresso-machine/profitec-go/',linkLabel:'Read GO review'},
    {kicker:'Espresso grinder',title:'Grinder reviews',text:'A capable grinder and scale are essential to evaluate the Legato’s controls fairly.',href:'/grinder/',linkLabel:'Compare grinders'}
  ],
  faqs:[
    {question:'Which Legato is reviewed?',answer:'The current Turin V2 stainless US 120 V SKU TCRM3007LSS-100. V1 and regional AVX/Apex units are contextual, not identical product identities.'},
    {question:'Is it a real dual boiler?',answer:'No. It has one 550 mL brew boiler and a separate steam thermoblock. The related platform uses one pump and sequential brew/steam.'},
    {question:'Is the five-minute startup a fully hot first espresso?',answer:'The manufacturer estimate is not a first-shot temperature guarantee. A related European sample needed longer heat soak and flushes under an independent protocol.'},
    {question:'Can it brew by weight?',answer:'No. Its programmed shot stop is time-based. Use a separate scale for a consistent beverage yield.'},
    {question:'Should I turn on pre-infusion?',answer:'Test cautiously with the delivered revision. An independent related-platform sample found its pause vented pressure; begin with manual baseline shots.'},
    {question:'Is a grinder and tamper included?',answer:'The current seller list excludes both. The double-spout portafilter and single/double baskets are listed; confirm actual box contents.'},
    {question:'Does a 58 mm label guarantee any basket or portafilter fits?',answer:'No. Basket rim, depth and lug geometry matter. Check exact compatibility with the delivered group and supplied basket.'},
    {question:'What did the US machine cost?',answer:'This review makes no durable numeric offer claim because the checked promotion expiry and complete selected cart were not verified. Check the current 120 V stainless listing and full station cost.'}
  ],
  finalTitle:'Buy the V2 controls only with a first-shot plan',
  finalVerdict:['The Turin Legato V2 gives a documented US 120 V hybrid machine with broad manual adjustment and a familiar 58 mm basket size. It should be considered for a compact learning station, not mistaken for a two-boiler prosumer machine.','The strongest related-platform measurement raises a real first-shot question. Because it was an AVX regional sample, the right next step is to confirm the delivered US revision, warmup and seller support rather than repeating its exact temperature numbers as a Turin specification.','Use a separate grinder, fitting tamper and scale, and compare the live complete-station invoice with simpler alternatives before buying. Coffeedant has not used or measured this machine.'],
  video:{id:'cYtvsYuFgxM',title:'Mii Coffee Apex V2 / Turin Legato V2 Review',creator:'Coffee Kev',published:'2025-01-25',note:'Independent V2 platform review. UK Apex branding and sample do not establish exact US Turin SKU performance.'}
};
const review=buildUpgradeReview(profile);
review.author.note='I compared the current stainless 120 V US listing, a purchased European platform study, two independent V2 accounts and selected owner reports on October 22, 2026. Coffeedant has not owned, brewed, steamed or measured a Legato V2.';
review.evaluation.basis.disclosure='Research-led US machine assessment. Six scores are editorial judgments from documented controls and attributable external samples, not Coffeedant espresso, thermal, milk or reliability measurements. AVX and Apex V2 findings are platform context, not direct tests of the reviewed Turin SKU.';
export const weekdayTurinLegatoV2Reviews:MachineReviewData[]=[review];

