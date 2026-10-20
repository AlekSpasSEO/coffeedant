import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type Dimension = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim=(score:number,claim:string,consequence:string,status:string,signals:[string,string,string],label?:string):Dimension=>({score,claim,consequence,status,signals,label});
const official='https://www.profitec-espresso.com/en/products/jump';
const manual='https://www.profitec-espresso.com/media/pages/produkte/jump/1566e8deef-1778593535/ba_pro400-jump.pdf';
const setup='https://support.clivecoffee.com/en/articles/16427127-profitec-jump-setup-guide';
const support='https://support.clivecoffee.com/en/articles/16427128-profitec-jump-user-manual';
const us='https://www.wholelattelove.com/products/profitec-jump-espresso-machine';
const dealerReview='https://soave.ca/learning-centre/profitec-jump-review/';
const video='https://www.youtube.com/watch?v=l_kZgJboDa4';
const hero='https://www.profitec-espresso.com/media/pages/produkte/jump/2abd82051f-1718691813/profitec-jump.webp';

const profile:UpgradeReviewProfile={
  excludeSelfFromAlternatives:true,
  key:'profitec-jump-us-20261020',slug:'/espresso-machine/profitec-jump/',productId:'CD-EM-000250',
  brand:'Profitec',model:'JUMP',sku:'CM500005-00, US 115 V / 1500 W, standard walnut and no optional flow-control kit',
  category:'Compact heat-exchanger espresso machine with three-position boiler-temperature switch',brandPath:'/profitec/',
  title:'Profitec JUMP review: compact heat exchanger with a temperature-control boundary',
  description:'Research-led US Profitec JUMP review of exact CM500005-00: heat-exchanger workflow, three boiler settings, preinfusion, steam, owner context and dated dealer value.',
  overview:'The Profitec JUMP is a distinct CM500005-00 heat-exchanger model, sold in the US at 115 V. Its compact 228 mm body contains a 1.6 L boiler and 2.8 L reservoir, with a three-position temperature switch, a PID-managed boiler, selectable preinfusion and a shot display. It can brew and steam as a heat exchanger, but its switch selects boiler presets rather than an independent measured brew-temperature target at the coffee. That distinction is the buying boundary for someone comparing it with a dual boiler.',
  verdictLabel:'A compact milk-drink heat exchanger for hands-on owners who accept indirect brew-temperature control',
  verdict:'The US standard walnut JUMP listing was $2,059 on October 20, 2026 before a capable grinder and other station costs. Profitec’s exact model offers a 1.6 L heat-exchanger boiler, 2.8 L tank, three preset boiler temperatures, selectable preinfusion and a bottomless modular portafilter with three basket sizes. Kaffeemacher’s exact-model comparison with the Pro 400 is useful independent context; selected owners report conflicting steam and temperature impressions. None establishes a Coffeedant shot, thermal measurement or failure rate. Buy for the compact hands-on brew-and-steam workflow, with enough patience to learn flushing and temperature behavior on your own unit.',
  assessment:'The JUMP adds a clear display and useful included hardware to a compact heat-exchanger station, while indirect brew-temperature control and owner-reported variation remain material.',
  image:hero,imageAlt:'Profitec official three-quarter photograph of the JUMP espresso machine with walnut handles',published:'2026-10-20',updated:'2026-10-20',
  price:{label:'Whole Latte Love US standard American Walnut / no flow control selection',msrp:'$2,059',numeric:'2059',currency:'USD',typical:'Base machine before tax, grinder and any optional flow-control or alternative-handle selection; checked October 20, 2026.',checked:'October 20, 2026'},
  links:[{label:'Check exact JUMP US configuration',href:us,note:'Confirm 115 V, walnut/no-flow-control selection, price and stock',primary:true},{label:'Read Profitec JUMP specifications',href:official,note:'CM500005-00 and included parts'}],
  facts:[
    {label:'Exact identity',value:'Profitec JUMP CM500005-00, US 115 V / 1500 W; standard walnut, no optional flow control in price check'},
    {label:'Heating',value:'Heat exchanger with 1.6 L stainless-steel boiler and PID-controlled three-position boiler-temperature presets'},
    {label:'Water and pump',value:'2.8 L reservoir, vibration pump and adjustable expansion valve according to Profitec'},
    {label:'Controls',value:'Selectable preinfusion and eco mode, shot counter/display, low-water notice and dual pressure gauge'},
    {label:'Portafilter',value:'Modular standard and bottomless configuration; 7 g, 14 g and 21 g baskets listed by Profitec'},
    {label:'Body',value:'228 × 448 × 372 mm without portafilter; 21.5 kg, manufacturer specification'},
    {label:'Dated US base',value:'$2,059 Whole Latte Love standard walnut/no-flow-control selection, October 20, 2026'}
  ],
  quickAnswers:[
    {question:'Is JUMP the same as Pro 400?',answer:'No. Profitec gives JUMP a distinct CM500005-00 identity, display and included configuration. The two share a manual, but this review does not transfer every Pro 400 result.'},
    {question:'Does the PID show actual coffee-water temperature?',answer:'No. It manages boiler presets in a heat-exchanger architecture; temperature at the coffee depends on thermal state and routine.'},
    {question:'Can it brew and steam together?',answer:'The heat-exchanger layout supports brew and steam work without a single-boiler mode change. Milk pace still depends on the unit, fill state, settings and technique.'},
    {question:'Is preinfusion adjustable in seconds?',answer:'The checked manual documents a selectable preinfusion function. It should not be described as a programmable multi-stage pressure profile.'},
    {question:'Is a grinder included?',answer:'No separate grinder is in the standard reviewed configuration. Budget for an espresso-capable grinder, scale and maintenance supplies.'},
    {question:'What is the current US price?',answer:'A selected dealer configuration showed $2,059 on October 20, 2026, before tax and accessories. Recheck exact handles, optional flow control and checkout.'}
  ],
  bestFor:['A hands-on owner making espresso and milk drinks on a narrow counter','A buyer wanting a heat exchanger with a compact 228 mm width and visible shot count','Someone willing to learn temperature presets and a repeatable flush routine'],
  avoidIf:['You need independently set and directly displayed brew and steam boiler targets','You expect one-touch milk or automatic grinding','You want the lowest total setup cost or no learning period'],
  pros:['Compact footprint with a documented 1.6 L boiler and 2.8 L reservoir','Three-position boiler switch, PID management and simple shot display','Bottomless modular portafilter plus 7/14/21 g baskets in the official package','Exact US voltage and selected dealer price are documented'],
  cons:['Heat-exchanger brew temperature is indirect rather than a direct coffee-water setting','Temperature switch and preinfusion are bounded controls, not full profiling','Selected owners disagree about steam and build behavior','Separate grinder and care supplies materially increase station cost'],
  architecture:'a 1.6 L stainless heat-exchanger boiler, vibration pump and Profitec group with a separate 2.8 L reservoir, three-position preset switch, PID boiler management, selectable preinfusion and shot-count display',
  identityBoundary:'The reviewed item is JUMP CM500005-00 US 115 V in a standard walnut/no-flow-control dealer selection. It is not the Pro 400, and an optional flow-control accessory or other wood finish may change price and behavior. The combined Pro 400/JUMP manual must be read at model-specific passages.',
  primaryStrength:'The narrow heat-exchanger design makes several manual espresso and milk drinks plausible without changing a single boiler between brew and steam modes.',
  primaryLimit:'Three boiler presets do not equal independent measured brew-water control, and owner accounts suggest checking steam behavior on the delivered machine.',
  setupNote:'Place the 21.5 kg machine on a stable surface with space above and behind for the removable cup tray, tank filling and heat. Follow the Profitec and Clive first-fill instructions; do not run a dry pump. Verify the 115 V label and the included 7, 14 and 21 g baskets. Flush and heat the group according to the current manual before treating the display as a ready-to-brew indicator. Record switch position, idle time and flush routine for your usual coffee.',
  espressoNote:'The JUMP uses a heat exchanger: brew water travels through a path heated by the steam boiler. Profitec’s PID and three-position switch manage the boiler state, not an independently sensed target at the puck. The combination can support repeatable results with a stable routine, but a copied switch position and display cannot prove the actual brew temperature. Kaffeemacher’s exact-model video compares JUMP with Pro 400 and demonstrates the thermal and workflow question on its sample. Begin with one basket, dose and beverage target, then adjust the grinder first and alter temperature preset only when a repeated result gives a reason. Selectable preinfusion is a simple additional control; the current manual should determine when and how it engages. Coffeedant has not made or tasted a shot on this machine.',
  milkNote:'A 1.6 L heat-exchanger boiler supplies steam while the brew circuit is available. That is attractive for successive cappuccinos because there is no deliberate single-boiler change to a steam mode, but it does not guarantee any particular milk texture or recovery time. Whole Latte Love calls the machine capable of multiple milk drinks; that is a seller assessment. Two self-selected owners reported disappointing steam on their units, while other users describe satisfaction. Their fill levels, switch settings, steam tips and skill are not standardized. Check steam wand purge, boiler pressure and milk volume on the delivered unit; seek service for abnormal behavior rather than treating forum anecdotes as a fleet rate.',
  workflowNote:'The morning sequence is tank and water check, heat and group stabilization, a chosen boiler preset, dose and grind, a flush routine if needed, extraction with the visible shot counter, then steam and wand cleaning. The displayed low-water notice can prevent a dry session, while eco mode changes idle behavior. The 228 mm width is helpful on a narrow counter, but the 448 mm depth and 558 mm reach with portafilter require room. A bottomless portafilter makes puck preparation visible; it does not automatically improve extraction. Keep the 14 g basket as a sensible starting point only if your chosen dose fits it, then tune to the actual coffee.',
  buildNote:'Profitec specifies a stainless-steel boiler, 21.5 kg weight and modular portafilter. The current official page names a Profitec brew group with a stainless bell. These are construction facts, not a lifetime guarantee. A Canadian dealer’s review praises its compact package and controls but has a commercial interest. Selected owner posts report concerns with steam and finish; other owners report good use. There is no denominator or standardized service record for a reliability rate. Confirm US seller warranty, available service route and exact finish before purchase. Inspect shipping damage, gauges, leaks and heat behavior during the seller return period.',
  featuresNote:'The three-position switch, preinfusion toggle, eco mode, shot count and low-water display are modest, useful controls. They should not be described as a programmable pressure profile or dual-boiler precision. The included modular portafilter and 7/14/21 g baskets reduce the initial accessory guesswork, but basket dose labels are nominal and coffee density varies. The adjustable expansion valve is a service/adjustment component, not a promise that every owner should change brew pressure. A conventional external grinder and scale remain central to espresso repeatability.',
  valueNote:'Whole Latte Love displayed $2,059 for the standard American Walnut/no-flow-control selection on October 20, 2026. Its page also offers optional handles and flow control, which should not be silently included at the base price. Add a capable grinder, scale, water treatment, cleaning supplies, tax and possible service to the station total. Profitec Pro 400 is a nearby heat-exchanger comparison but has its own controls and exact package. Profitec MOVE or another dual boiler may be worth the extra spend if direct, independent brew and steam temperature control is the central requirement. JUMP’s value rests on compactness and a specific hands-on milk workflow, not on a verified taste advantage.',
  ownerPattern:'One exact-model owner reported enjoyable espresso but struggled with steam and some build details; another was disappointed after changing from a Bambino Plus. A separate practical owner thread described easier daily cappuccino service. These are self-selected, conflicting accounts. Their beans, water, machine state, expectations and technique differ. The independent Kaffeemacher video adds a sample-based comparison but cannot calculate a failure rate. Treat these reports as symptoms worth checking: steam pressure and duration, gauge response, leaks, switch behavior and serviceability.',
  ownerCaution:'Do not infer a defect rate from forum posts, and do not dismiss a reproducible issue on your delivered unit because another owner has no problem. A leak, electrical smell or abnormal pressure is a service matter. Stop use safely, disconnect when appropriate and contact an authorized seller or technician.',
  maintenanceNote:'Follow the exact current JUMP manual for backflushing, group cleaning, descaling policy and safe access. Purge and wipe the steam wand after milk. Use water appropriate to Profitec guidance and local hardness; do not equate a full tank with scale prevention. Keep the drip tray and reservoir clean. Service the expansion valve and internal electrical/boiler components through qualified support rather than using a Pro 400 repair video as a blanket guide.',
  dimensions:{
    espresso:dim(7.8,'Three boiler presets and a stable routine support manual espresso.','The heat exchanger does not provide a direct brew-water set point.','Profitec/manual and independent exact-model video; no Coffeedant shots',['1.6 L stainless HX boiler.','Three-position PID-managed boiler switch.','Brew temperature at the puck not independently displayed.']),
    milk:dim(8.0,'HX steam and brewing can support successive milk drinks.','Selected owners report different steam outcomes; check the delivered unit.','Factory architecture, seller and bounded owner reports',['Steam-capable 1.6 L boiler.','2.8 L reservoir.','No standardized milk-speed measurement.']),
    workflow:dim(7.4,'Shot display, low-water notice and modular portafilter help daily work.','Manual warmup, flush and grinder routines remain.','Official manual and seller setup',['Visible shot count.','Low-water and eco functions.','558 mm reach with portafilter.']),
    build:dim(7.8,'Documented steel boiler, group and 21.5 kg body support service-minded ownership.','Finish and steam concerns from selected owners remain unresolved.','Factory material record and owner context',['Stainless boiler and group bell.','Modular portafilter.','No population reliability data.']),
    features:dim(7.6,'Three presets, preinfusion toggle and eco mode solve concrete tasks.','They are bounded controls, not a pressure-profile system.','Current factory and model-specific manual',['Three temperature positions.','Preinfusion on/off.','Shot counter and tank notice.']),
    value:dim(7.2,'The $2,059 US base has a clear compact HX role.','Grinder and care costs make a complete station materially higher.','October 20 selected dealer listing',['$2,059 base machine.','Optional finishes and flow control separate.','Grinder and water care extra.'])
  },
  sources:[
    {label:'Profitec official JUMP CM500005-00 page',href:official,note:'Exact US 115 V item, dimensions, boiler, tank, controls, accessories and official imagery checked October 20, 2026.'},
    {label:'Profitec Pro 400/JUMP current manual',href:manual,note:'Model-specific setup, selectable preinfusion, switch and safe operating guidance; shared manual does not erase model distinction.'},
    {label:'Whole Latte Love US JUMP selection',href:us,note:'Standard walnut/no-flow-control $2,059 base check October 20, 2026; options, tax and stock may change.'},
    {label:'Kaffeemacher JUMP versus Pro 400 video',href:video,note:'August 31, 2024 independent exact-model comparison on its own sample; no Coffeedant testing.'},
    {label:'Soave JUMP evaluation',href:dealerReview,note:'Canadian dealer perspective on compact HX controls; commercial interest and different market.'},
    {label:'Clive JUMP setup guide',href:setup,note:'US dealer first-fill, display and safe startup instructions.'},
    {label:'Clive JUMP user manual article',href:support,note:'Three-way switch and preinfusion operation, checked October 20, 2026.'},
    {label:'Owner: disappointed JUMP steam account',href:'https://www.reddit.com/r/espresso/comments/1tq0k05/disappointed_in_the_profitec_jump/',note:'One self-selected owner’s steam/temperature concerns; not a defect rate.'},
    {label:'Owner: JUMP espresso and steam concerns',href:'https://www.reddit.com/r/espresso/comments/1qkok9c/review_help_my_experience_with_the_new_profitec/',note:'Contrasting exact-model impressions and questions; no controlled protocol.'},
    {label:'Profitec JUMP product overview',href:'https://www.profitec-espresso.com/media/pages/home/1a2ae56a11-1767963640/pt-machines-en.pdf',note:'Manufacturer comparison sheet confirming CM500005-00 and US electrical context.'},
    {label:'Whole Latte Love JUMP support hub',href:'https://www.wholelattelove.com/pages/support-product/profitec-jump',note:'US seller support route and exact-product documentation.'}
  ],
  comparisons:[
    {name:'Profitec JUMP',quickDecision:'Choose compact HX brew/steam work with three presets and shot display.',priceClass:'$2,059 US base check',dimensions:'228 × 448 × 372 mm body',heating:'1.6 L HX boiler',coffeeSetup:'Manual espresso with preset switch',milkWorkflow:'HX steam alongside brew',bestFor:'Hands-on milk drinks on a narrow counter'},
    {name:'Profitec Pro 400',href:'/espresso-machine/profitec-pro-400/',quickDecision:'Compare the older compact HX architecture and exact package.',priceClass:'Check current US listing',dimensions:'Compact prosumer',heating:'Heat exchanger',coffeeSetup:'Manual grind and brew',milkWorkflow:'HX steam',bestFor:'Simpler adjacent Profitec choice'},
    {name:'Profitec Pro 600',href:'/espresso-machine/profitec-pro-600/',quickDecision:'Check dual-boiler brew/steam control if precision matters more.',priceClass:'Higher-tier comparison',dimensions:'Larger dual boiler',heating:'Separate boilers',coffeeSetup:'Independent brew settings',milkWorkflow:'Dedicated steam boiler',bestFor:'More direct temperature control'},
    {name:'Profitec GO',href:'/espresso-machine/profitec-go/',quickDecision:'Spend less for manual espresso when frequent milk drinks are not central.',priceClass:'Lower-tier comparison',dimensions:'Compact single boiler',heating:'Single boiler',coffeeSetup:'Manual espresso and PID',milkWorkflow:'Mode change for steam',bestFor:'Espresso-first station'}
  ],
  comparisonNote:'Compare exact US voltage, current dealer configurations and complete setup cost. JUMP is a distinct heat-exchanger machine; a shared manual or similar silhouette does not turn its controls into Pro 400 or Pro 600 results.',
  recommendations:[
    {kicker:'Nearby heat exchanger',title:'Profitec Pro 400',text:'Compare its own controls, package and seller terms if you want a simpler adjacent Profitec.',href:'/espresso-machine/profitec-pro-400/',linkLabel:'Read Pro 400 review'},
    {kicker:'Direct boiler control',title:'Profitec Pro 600',text:'Choose separate boiler control if the temperature boundary matters more than a narrow HX body.',href:'/espresso-machine/profitec-pro-600/',linkLabel:'Read Pro 600 review'},
    {kicker:'Espresso-first budget',title:'Profitec GO',text:'A single boiler can be a better spend if milk service is occasional.',href:'/espresso-machine/profitec-go/',linkLabel:'Read GO review'},
    {kicker:'Complete station',title:'Coffee grinder guide',text:'Match a capable espresso grinder to the machine before judging the total cost.',href:'/grinder/',linkLabel:'Compare grinders'}
  ],
  faqs:[
    {question:'Which Profitec JUMP model is reviewed?',answer:'CM500005-00 in the US 115 V / 1500 W specification, with standard walnut and no optional flow control in the dated price check.'},
    {question:'Is JUMP just a renamed Pro 400?',answer:'No. Profitec gives it a distinct item number, display and supplied configuration. The combined manual covers both but model-specific details matter.'},
    {question:'Can I set an exact brew temperature?',answer:'The three-way switch selects boiler presets managed by a PID. Brew water at the coffee is not directly measured or displayed by that setting.'},
    {question:'Can it make espresso and steam milk in one session?',answer:'Yes, its heat exchanger supports both functions without a single-boiler brew-to-steam mode change. The exact steaming experience depends on the unit and routine.'},
    {question:'Does it include a bottomless portafilter?',answer:'Profitec lists a modular portafilter with bottomless configuration and 7, 14 and 21 g baskets. Confirm the exact dealer package.'},
    {question:'Does preinfusion allow custom pressure profiling?',answer:'No. The checked documentation describes a selectable preinfusion function, not an independently programmable pressure curve.'},
    {question:'Does the $2,059 include a grinder?',answer:'No. It was the selected base machine price before tax, separate grinder, scale, water care and any optional finish or flow control.'},
    {question:'How wide is the machine?',answer:'Profitec lists 228 mm width; allow for 448 mm depth, 558 mm with portafilter and access to the cup tray and tank.'}
  ],
  finalTitle:'Choose the JUMP for its compact HX routine, with eyes open about control',
  finalVerdict:[
    'The CM500005-00 US JUMP combines a narrow body, 1.6 L heat-exchanger boiler, visible shot count and practical included portafilter hardware. Its three-position switch makes boiler selection easier to repeat than a fully unmarked routine.',
    'The PID does not give a direct measured puck-temperature target. Independent comparison and mixed owner accounts make a methodical first-week check of espresso, steam and leaks more valuable than assuming a universal result.',
    'At a dated $2,059 base, compare a complete grinder-equipped station with the Pro 400 and a dual boiler such as Pro 600. The JUMP earns its place when compact manual espresso plus frequent milk is the actual job.'
  ],
  video:{id:'l_kZgJboDa4',title:'Profitec Jump und Pro 400 - Zweikreiser Test und Vergleich',creator:'Kaffeemacher',published:'2024-08-31',note:'Independent exact-model JUMP and Pro 400 comparison; German-language sample observations, not Coffeedant testing.'}
};

const cite=(n:number)=>`<a href="#${profile.key}-source-${n}">[source]</a>`;
profile.sectionOverrides={
  setup:`<p>${profile.setupNote} ${cite(1)} ${cite(2)} ${cite(6)}</p><p>Practice the first fill, group warmup, reservoir access and steam purge in the order you will use them. Keep room for the 558 mm reach with portafilter and for top filling under a cabinet.</p>`,
  espresso:`<p>${profile.espressoNote} ${cite(1)} ${cite(2)} ${cite(4)}</p><p>Hold dose and beverage yield steady before changing the switch position. A boiler preset is one controllable condition, not a measurement of water at the puck.</p>`,
  milk:`<p>${profile.milkNote} ${cite(1)} ${cite(3)} ${cite(8)} ${cite(9)}</p><p>Use the same milk quantity and wand routine when comparing settings on the delivered machine. The milk score is an ownership judgment, not a Coffeedant steam or texture measurement.</p>`,
  workflow:`<p>${profile.workflowNote} ${cite(1)} ${cite(6)}</p><p>Time the complete sequence from cold start through a clean steam wand and drip tray. This reveals whether a narrow HX body actually suits the household order.</p>`,
  build:`<p>${profile.buildNote} ${cite(1)} ${cite(5)}</p><p>${profile.maintenanceNote}</p><p>${profile.ownerCaution}</p>`,
  features:`<p>${profile.featuresNote} ${cite(1)} ${cite(2)} ${cite(7)}</p><p>Confirm which controls are toggles, which display measured values and which merely indicate selected modes before assigning value to them.</p>`,
  value:`<p>${profile.valueNote} ${cite(3)}</p><p>A separate grinder, water care and taxes belong in the purchase decision. Compare exact US configurations rather than treating optional flow control as included.</p>`,
  ownership:`<p>${profile.ownerPattern} ${cite(8)} ${cite(9)}</p><p>${profile.ownerCaution}</p>`
};

const review=buildUpgradeReview(profile);
review.article.authorNote='I compared the exact US 115 V CM500005-00 Profitec record, the current combined manual, dealer configuration, independent exact-model video and selected owner accounts on October 20, 2026. Coffeedant has not owned, brewed, measured or steamed with this machine.';
review.article.basisDisclosure='Research-led US JUMP buying assessment. Six dimension scores are editorial judgments from documented architecture, independent sample context and dated price; they are not Coffeedant extraction, thermal, milk or reliability measurements.';
export const weekdayProfitecJumpReviews:MachineReviewData[]=[review];
