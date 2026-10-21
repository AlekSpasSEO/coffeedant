import type { MachineReviewData, ReviewDimensionId } from '../reviews';
import { buildUpgradeReview, type UpgradeReviewProfile } from './upgrade-next-ten-factory';

type Dimension = UpgradeReviewProfile['dimensions'][ReviewDimensionId];
const dim = (score:number, claim:string, consequence:string, status:string, signals:[string,string,string]):Dimension => ({score,claim,consequence,status,signals});
const official = 'https://www.profitec-espresso.com/en/products/move';
const manual = 'https://www.profitec-espresso.com/media/pages/produkte/move/a37ce0bd57-1724933876/ba-move.pdf';
const study = 'https://kaffeemacher.de/en/blogs/kaffeewissen/profitec-move';
const heat = 'https://www.profitec-espresso.com/en/blog/move-temperature-and-heating-performance';
const dealer = 'https://www.wholelattelove.com/products/profitec-move-espresso-machine';
const revision = 'https://www.profitec-espresso.com/en/blog/profite-app';
const image = 'https://www.profitec-espresso.com/media/pages/produkte/move/ffee85bbfd-1749134220/move.jpg';

const profile:UpgradeReviewProfile = {
  excludeSelfFromAlternatives:true,
  key:'profitec-move-us-20261021', slug:'/espresso-machine/profitec-move/', productId:'CD-EM-000251',
  brand:'Profitec', model:'MOVE', sku:'CM500003-01, US 115 V / 1600 W; not MOVE 2.0',
  category:'Compact dual-boiler manual espresso machine', brandPath:'/profitec/',
  title:'Profitec MOVE review: dual-boiler control with a warmup qualification',
  description:'Research-led US Profitec MOVE CM500003-01 review: dual-boiler architecture, programmable shots, warmup evidence, milk workflow, variant boundaries and ownership checks.',
  overview:'The current Profitec MOVE CM500003-01 is a 115 V US dual boiler with a 0.4 L brass brew boiler, 0.75 L stainless steam boiler, 2.8 L tank and a 270 mm body. Separate boiler temperature settings and a programmable, time-based shot stop make it more directly adjustable than a compact heat exchanger. The central caution is warmup: Profitec markets Fast Heat-Up, but Kaffeemacher’s earlier MOVE sample needed longer for a hot first extraction under its protocol. That observation is useful context, not a measurement of this current revision.',
  verdictLabel:'A compact dual boiler for manual espresso and milk, if its warmup routine fits your morning',
  verdict:'MOVE offers real independent brew and steam boiler settings, a switchable steam boiler, adjustable preinfusion and a supplied modular bottomless portafilter. Its current CM500003-01 page is the authority for the US hardware. Independent Kaffeemacher measurements concern an earlier MOVE sample; they question a simple nine-minute ready claim but cannot prove the exact performance of a later unit. Dealer specification tables also conflict with Profitec on brew-boiler capacity. Confirm the rating plate, service support, current price and a first-shot warmup demonstration for the delivered configuration before buying. Coffeedant has not used this machine.',
  assessment:'The documented control and included tools are attractive in a compact dual boiler; first-shot warmup, timed dosing and revision-specific evidence limit certainty.',
  image, imageAlt:'Official Profitec photograph of the black MOVE dual-boiler espresso machine with walnut handles', published:'2026-10-21', updated:'2026-10-21',
  price:{label:'Current US MOVE CM500003-01 dealer checkout',msrp:'not independently verified for the exact current revision',numeric:'',currency:'USD',typical:'Check exact item, availability, tax, grinder and service before purchase; no numeric offer claimed.',checked:'October 21, 2026'},
  links:[{label:'Check exact US MOVE price and availability',href:dealer,note:'Confirm CM500003-01, 115 V, included package and live checkout',primary:true},{label:'Read current Profitec MOVE specification',href:official,note:'Factory item number, electrical rating and supplied parts'}],
  facts:[
    {label:'Exact identity',value:'Profitec MOVE CM500003-01, US 115 V / 1600 W; separate from MOVE 2.0'},
    {label:'Brew circuit',value:'0.4 L brass brew boiler and optimized ring group, current Profitec specification'},
    {label:'Steam circuit',value:'0.75 L stainless-steel steam and hot-water boiler, independently switchable'},
    {label:'Water and pump',value:'2.8 L reservoir with filter adapter and low-noise vibration pump'},
    {label:'Controls',value:'OLED, programmable timed dose buttons, adjustable preinfusion, boiler temperatures and schedules'},
    {label:'Body',value:'270 × 445 × 375 mm without portafilter; 18.7 kg, manufacturer figures'},
    {label:'Included',value:'Modular bottomless portafilter, silicone attachments and nominal 7/14/21 g baskets'}
  ],
  quickAnswers:[
    {question:'Which MOVE is this?',answer:'The current Profitec CM500003-01 US 115 V model. The separately announced MOVE 2.0 has app and compatible-scale functions that this review does not assign to the original MOVE.'},
    {question:'Does it have two independent boilers?',answer:'Yes. Profitec lists a 0.4 L brass brew boiler and switchable 0.75 L stainless steam boiler, with temperature settings for each.'},
    {question:'Is it ready for a full-temperature first shot in nine minutes?',answer:'Do not assume that. Profitec and independent Kaffeemacher use different readiness definitions; Kaffeemacher’s older sample needed longer by its first-shot protocol.'},
    {question:'Does programmed dosing measure beverage weight?',answer:'No. The checked original MOVE stops the pump after a programmed time; grind and puck resistance still change beverage mass.'},
    {question:'Is a grinder included?',answer:'No separate espresso grinder is in the manufacturer delivery list. Budget for one, a scale, water care and cleaning supplies.'},
    {question:'What is its verified US price?',answer:'This check did not establish a reliable checkout price tied to CM500003-01. Recheck the exact item and stock at an authorized US seller.'}
  ],
  bestFor:['A hands-on espresso and milk household wanting independent boiler settings in 270 mm width','An owner who values a programmable safety stop and switchable steam boiler','A buyer willing to verify first-shot warmup and the exact delivered revision'],
  avoidIf:['You need an automatic grinder or milk system','You expect a programmed button to weigh the beverage','You need a verified nine-minute first-shot result or the newer MOVE 2.0 app features'],
  pros:['Current factory record specifies two separately adjustable boilers in a compact body','Steam boiler can be switched off for an espresso-only session','OLED, adjustable preinfusion and timed shot buttons give repeatable controls','Modular portafilter and three nominal baskets are included'],
  cons:['Earlier independent first-shot warmup differed from the maker’s readiness headline','Timed dose is sensitive to changes in grind and puck resistance','No independently verified current US price tied to CM500003-01','Long-term defect incidence and exact revision-to-revision performance are unknown'],
  architecture:'a 0.4 L brass brew boiler and 0.75 L stainless steam boiler with optimized ring group, 2.8 L tank, vibration pump, separate temperature settings and optional steam-boiler shutdown',
  identityBoundary:'This is the original MOVE as currently listed under CM500003-01 in the US at 115 V. Profitec also markets a distinct MOVE 2.0 with app and compatible-scale brew-by-weight features; these must not be transferred to CM500003-01. Earlier catalogues and a 2024 manual refer to earlier MOVE documentation, so operational details should be checked against the manual supplied with the delivered unit.',
  primaryStrength:'Separate brew and steam temperature settings make the compact machine a flexible manual espresso-and-milk station.',
  primaryLimit:'A factory Fast Heat-Up message and an independent hot-first-shot criterion describe different readiness thresholds; the current revision has no independent Coffeedant warmup result.',
  setupNote:'Check the delivered CM500003-01 rating plate and current manual before first fill. Allow for its 475 mm depth with the portafilter fitted, top reservoir access and a separate grinder. Prime and flush exactly as Profitec directs; a Fast Heat-Up prompt may ask for a cooling flush. Verify the nominal baskets actually supplied and use water within manufacturer guidance rather than assuming any filtered water prevents scale.',
  espressoNote:'The brew boiler has its own set temperature, but a number on the OLED is not a measurement at the coffee bed. Kaffeemacher tested an earlier MOVE sample with a Scace device and found strong stability after full warmup, while its first extraction fell short of its target at the manufacturer-style fast-start interval. Profitec published a response using a less strict first-shot readiness threshold. Neither result is our testing, and neither proves the CM500003-01 on your counter behaves identically. Start with one basket, coffee and weighed yield, and change grind before altering several controls.',
  milkNote:'The separate 0.75 L steam boiler means steam can be available without changing the brew boiler into a steam mode. Profitec allows that boiler to be switched off when it is not needed. Kaffeemacher measured manageable but limited steam pace on its older sample and rated recovery modestly; that is sample evidence, not a promise of the current revision’s milk time. Use a consistent milk quantity, purge and wipe the wand, then judge whether the pace fits the actual household queue.',
  workflowNote:'A realistic cold-start routine includes tank check, boiler warmup, any prompted flush, grinder preparation, a weighed shot, steam, wand cleaning and tray care. The programmable buttons run by time, so use a scale when beverage yield matters. Automatic switch-on/off scheduling can help only if the machine and room are used safely under current manufacturer guidance. Check top access under cabinets and the 475 mm reach with portafilter. The OLED and barista light may make status legible, but they cannot certify thermal readiness at the puck.',
  buildNote:'Profitec documents the current brass brew and stainless steam boilers, walnut handles, steel housing, dual gauge and 18.7 kg weight. A US seller specification table showed a different brew-boiler capacity, so the current Profitec CM500003-01 page is used for the quoted 0.4 L. Materials and weight do not establish a service life. Ask the authorized seller who supports the exact revision, what warranty applies and whether routine seals, valves and electronics remain available.',
  featuresNote:'Adjustable preinfusion, boiler temperature, programmable time-based buttons, schedules and group cleaning each solve a defined task. Timed dosing is not mass-based brew-by-weight, and the group-clean program does not replace wand, water or internal service care. MOVE 2.0’s app is a separate product feature. Treat 2024 menu demonstrations as context and confirm current firmware and button operation on the delivered CM500003-01.',
  valueNote:'The checked US retail page displayed a configuration and stock controls, but did not establish a reliable final price tied clearly to the current factory CM500003-01 identity. No numeric price or discount is claimed. Compare the actual seller invoice, 115 V rating, finish, warranty, grinder, scale, water treatment, taxes and future service with a Pro 600, Silvia Pro X or a simpler Profitec GO. The independent sample’s warmup behavior is a reason to ask for a demonstration, not an automatic reason to reject every MOVE.',
  ownerPattern:'Selected MOVE owners praise the compact dual-boiler workflow, while some ask about first-shot warmup and others report steam concerns on their own units. Those discussions can suggest a first-week inspection checklist but have mixed firmware, revision, water and technique. A favorable post cannot certify reliability, and a complaint cannot yield a fleet defect rate.',
  ownerCaution:'Document reproducible issues with the exact delivered unit and contact authorized service for abnormal heat, pressure, leakage or electrical behavior. Do not open a pressurized or energized machine based on a forum repair suggestion.',
  maintenanceNote:'Follow the supplied revision-specific manual for automatic group cleaning, blind basket, detergent, water selection and any descaling policy. Purge and wipe the steam wand after milk; keep the reservoir and tray clean. The manufacturer cleaning cycle is not an internal inspection or scale-removal guarantee.',
  dimensions:{
    espresso:dim(8.1,'Independent brew-boiler setting and adjustable preinfusion support controlled manual shots.','A set temperature and timed stop do not measure coffee-bed temperature or beverage mass.','Profitec current page; older Kaffeemacher sample; no Coffeedant shots',['0.4 L brass brew boiler.','Adjustable preinfusion and boiler setting.','Earlier sample warmup cannot certify current revision.']),
    milk:dim(7.6,'Dedicated switchable steam boiler supports milk alongside espresso.','Independent sample found measured but not commercial-speed steam.','Factory architecture and older independent sample',['0.75 L stainless steam boiler.','Manual wand and operator technique.','No current-revision Coffeedant milk time.']),
    workflow:dim(7.4,'OLED, timed buttons and scheduling simplify a manual routine.','A true hot first shot may require more time than the fast-start message.','Manual, maker response and independent sample',['Time-based pump stop.','270 mm body; 475 mm fitted depth.','Warmup definition materially changes expectation.']),
    build:dim(7.5,'Current factory specification names core boilers, group and weight.','Service and lifetime must be confirmed for the delivered revision.','Profitec record, dealer conflict, owner context',['Brass brew and stainless steam boilers.','18.7 kg published weight.','No population failure data.']),
    features:dim(7.8,'Separate temperatures, preinfusion and cleaning function address recurring tasks.','No mass-based shot stop or MOVE 2.0 connectivity is established here.','Current factory and 2024 manual',['Programmable dose buttons.','Independent steam-boiler switch.','App belongs to separate MOVE 2.0.']),
    value:dim(7.0,'Compact dual-boiler control is a clear role.','Exact current US checkout and complete grinder-equipped cost remain open.','October 21 US seller and factory check',['No verified numeric offer.','Grinder and scale extra.','Confirm CM500003-01 warranty and stock.'])
  },
  sources:[
    {label:'Profitec current MOVE CM500003-01 page',href:official,note:'US electrical rating, exact item, 0.4/0.75 L boilers, controls, dimensions and official image; checked October 21, 2026.'},
    {label:'Profitec MOVE operating manual',href:manual,note:'Earlier MOVE_BA_V1.0 first-fill, Fast Heat-Up, cleaning and safety context; confirm delivered revision manual.'},
    {label:'Whole Latte Love US MOVE listing',href:dealer,note:'Current dealer selection and availability check; numeric price and item revision not verified, and brew-boiler table conflicts with factory.'},
    {label:'Kaffeemacher independent MOVE evaluation',href:study,note:'October 2024 sample measurements and workflow; not a CM500003-01 retest.'},
    {label:'Profitec response on MOVE heating',href:heat,note:'Maker heating protocol and its nine-minute readiness definition; compare criteria with independent test.'},
    {label:'Kaffeemacher original MOVE video',href:'https://www.youtube.com/watch?v=IWq9bPK2sY8',note:'Independent visual demonstration linked by its written evaluation; earlier sample.'},
    {label:'Profitec MOVE 2.0 app announcement',href:revision,note:'Separates later app and compatible-scale functions from original MOVE.'},
    {label:'Owner: exact MOVE daily experience',href:'https://www.reddit.com/r/espresso/comments/1r1g7iz/smooth_move_profitec_move_dual_boiler/',note:'One self-selected owner account; no standardized performance or reliability rate.'},
    {label:'Owner: low steam pressure discussion',href:'https://www.reddit.com/r/espresso/comments/1o0cd4r/low_steam_pressure_profitec_move/',note:'One reported steam issue; revision and setup uncertain.'},
    {label:'Owner: fast heat-up concern',href:'https://www.reddit.com/r/espresso/comments/1v9slwh/profitec_move_fast_heatup_not_so_fast_according/',note:'Self-selected reaction to readiness criteria; no current-revision measurement.'}
  ],
  comparisons:[
    {name:'Profitec MOVE',quickDecision:'Choose separate boiler settings in a 270 mm manual station.',priceClass:'Check exact US checkout',dimensions:'270 × 445 × 375 mm',heating:'0.4 L brew + 0.75 L steam',coffeeSetup:'Manual grinder and timed shot buttons',milkWorkflow:'Switchable separate steam boiler',bestFor:'Compact dual-boiler control'},
    {name:'Profitec Pro 600',href:'/espresso-machine/profitec-pro-600/',quickDecision:'Compare a larger Profitec dual boiler and its own service package.',priceClass:'Check current US listing',dimensions:'Larger prosumer',heating:'Dual boiler',coffeeSetup:'Manual portafilter espresso',milkWorkflow:'Dedicated steam',bestFor:'More counter room and traditional workflow'},
    {name:'Rancilio Silvia Pro X',href:'/espresso-machine/rancilio-silvia-pro-x/',quickDecision:'Compare another compact dual boiler with its own controls.',priceClass:'Check current US listing',dimensions:'Compact dual boiler',heating:'Dual boiler',coffeeSetup:'Manual espresso and separate grinder',milkWorkflow:'Dedicated steam',bestFor:'Alternative compact design'},
    {name:'Profitec GO',href:'/espresso-machine/profitec-go/',quickDecision:'Choose a simpler espresso-first machine if milk is occasional.',priceClass:'Lower tier; verify',dimensions:'Compact single boiler',heating:'Single boiler',coffeeSetup:'Manual espresso',milkWorkflow:'Mode change for steam',bestFor:'Lower-complexity espresso routine'}
  ],
  comparisonNote:'Compare complete US station and warranty terms. MOVE 2.0 and older MOVE revisions must not be mixed into a feature or performance row.',
  recommendations:[
    {kicker:'Larger dual boiler',title:'Profitec Pro 600',text:'Read its separate boiler and space tradeoffs before deciding how much counter room to give up.',href:'/espresso-machine/profitec-pro-600/',linkLabel:'Read Pro 600 review'},
    {kicker:'Compact rival',title:'Rancilio Silvia Pro X',text:'Compare its own dual-boiler controls and milk routine with the exact MOVE revision.',href:'/espresso-machine/rancilio-silvia-pro-x/',linkLabel:'Read Silvia Pro X review'},
    {kicker:'Espresso-first',title:'Profitec GO',text:'A single boiler is often enough when manual espresso dominates and milk is occasional.',href:'/espresso-machine/profitec-go/',linkLabel:'Read GO review'},
    {kicker:'Whole station',title:'Espresso grinders',text:'Reserve space and budget for an appropriate grinder and scale.',href:'/grinder/',linkLabel:'Compare grinders'}
  ],
  faqs:[
    {question:'Which Profitec MOVE is reviewed?',answer:'The current original MOVE item CM500003-01, US 115 V / 1600 W. MOVE 2.0 has separately announced app and scale features.'},
    {question:'Why do boiler figures differ between sites?',answer:'The current Profitec CM500003-01 page specifies a 0.4 L brass brew boiler and 0.75 L stainless steam boiler. One dealer table lists a smaller brew figure; confirm the item and supplied documentation before purchase.'},
    {question:'Can the steam boiler be switched off?',answer:'Yes, Profitec lists that option. Kaffeemacher’s older sample warmed more slowly in its protocol with steam off, so test the routine you intend to use.'},
    {question:'Does Fast Heat-Up mean a fully hot first shot at nine minutes?',answer:'The maker and Kaffeemacher use different criteria. An older independently tested sample needed longer for its first-shot threshold; exact current-revision performance is unmeasured here.'},
    {question:'Does a saved button stop at a set beverage weight?',answer:'No. It stops by programmed pump time on the original MOVE; use a scale to monitor yield.'},
    {question:'Is the MOVE 2.0 app included?',answer:'No. This review does not attribute later MOVE 2.0 connectivity or compatible-scale brew-by-weight to CM500003-01.'},
    {question:'What is the current US price?',answer:'We could not verify a numeric checkout offer explicitly matched to CM500003-01. Check an authorized US seller’s live item, stock and warranty.'},
    {question:'Can Coffeedant confirm long-term reliability?',answer:'No. Materials, manuals and selected owner discussions do not provide a failure-rate denominator.'}
  ],
  finalTitle:'Buy for direct boiler control, then verify the first-shot routine',
  finalVerdict:[
    'The current CM500003-01 US MOVE gives a compact manual station separate brew and steam boilers, useful temperature controls, adjustable preinfusion and a supplied modular portafilter.',
    'Independent earlier-sample testing supports good stability after warmup while questioning the maker’s quickest ready interpretation. A later item number and MOVE 2.0 announcement make exact-variant checking essential.',
    'Request a current US invoice and documentation, confirm service support, and budget for the grinder, scale and care. The most decisive hands-on check is the first espresso and milk sequence you actually make.'
  ],
  video:{id:'IWq9bPK2sY8',title:'Profitec MOVE review',creator:'Kaffeemacher',published:'2024-10-20',note:'Independent older-sample visual evaluation linked by Kaffeemacher; not Coffeedant testing or a CM500003-01 retest.'}
};

const cite = (n:number) => `<a href="#${profile.key}-source-${n}">[source]</a>`;
profile.sectionOverrides = {
  setup:`<p>${profile.setupNote} ${cite(1)} ${cite(2)}</p><p>Run a first-week sequence with the exact supplied manual: check priming, a repeatable warmup flush and the path to group cleaning. Leave clearance for top filling and for a separate grinder.</p>`,
  espresso:`<p>${profile.espressoNote} ${cite(1)} ${cite(4)} ${cite(5)}</p><p>Programmed pump time is a useful safety stop, not a mass target. Weigh the beverage while learning the machine and check the first shot after a normal cold start before shortening the routine.</p><p>The first-week comparison should use one coffee, the same basket and dose, and the same starting boiler state. Record when the display asks for a flush, when that flush ends, and when the first shot begins. A later shot after the group has absorbed more heat is a different condition. If the first tastes different, avoid diagnosing temperature alone: grind drift, coffee age and puck preparation can also change extraction. Kaffeemacher’s measured protocol addresses one important variable, while a home buyer must judge the full sequence on the delivered revision. ${cite(4)} ${cite(5)}</p>`,
  milk:`<p>${profile.milkNote} ${cite(1)} ${cite(4)} ${cite(9)}</p><p>The independent steam observation is one older sample. Purge and wipe the wand after each drink; ask for service if the delivered unit repeatedly shows abnormal pressure or no useful steam.</p>`,
  workflow:`<p>${profile.workflowNote} ${cite(2)} ${cite(4)} ${cite(5)}</p><p>Maker and independent warmup figures differ because their acceptable first-shot temperature differs. The display’s ready state is not the same observation as an extraction-temperature measurement.</p><p>If making two milk drinks, note the time from cold power-on to the first finished drink and from the first to the second. Include wiping and purging the wand. If making espresso alone, compare the steam-boiler-on and steam-boiler-off routines only after reading the supplied manual. The earlier independent study found a longer warmup with steam off, so disabling it may save one kind of energy while costing morning time. This is a tradeoff to test on the current unit, not a guaranteed number to carry over. ${cite(1)} ${cite(4)}</p>`,
  build:`<p>${profile.buildNote} ${cite(1)} ${cite(3)}</p><p>${profile.maintenanceNote}</p><p>${profile.ownerCaution}</p>`,
  features:`<p>${profile.featuresNote} ${cite(1)} ${cite(2)} ${cite(7)}</p><p>Use the current item number to avoid paying for a feature you saw in a different MOVE 2.0 video.</p>`,
  value:`<p>${profile.valueNote} ${cite(1)} ${cite(3)}</p><p>No numeric current price is asserted. Compare written invoices for the same US item and calculate the cost of the separate grinder, scale, water care and service path.</p>`,
  ownership:`<p>${profile.ownerPattern} ${cite(8)} ${cite(9)} ${cite(10)}</p><p>${profile.ownerCaution}</p>`
};

const review = buildUpgradeReview(profile);
review.author.note = 'I compared the current US CM500003-01 factory record, an earlier MOVE manual, independent earlier-sample measurements, a maker response, US seller listing and selected owner reports on October 21, 2026. Coffeedant has not owned, brewed, measured or steamed with this machine.';
review.evaluation.basis.disclosure = 'Research-led US MOVE buying assessment. Six dimension scores are editorial judgments from documented architecture and bounded independent evidence, not Coffeedant extraction, thermal, milk or reliability measurements. No verified numeric current US price is claimed.';
export const weekdayProfitecMoveReviews:MachineReviewData[] = [review];
