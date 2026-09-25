import type { ReviewMediaSeed } from './review-media-types';

type OfficialMediaRow = Pick<ReviewMediaSeed, 'src' | 'alt' | 'caption' | 'width' | 'height'>;

const officialProductMedia = (
  credit: string,
  sourceHref: string,
  rows: OfficialMediaRow[],
): ReviewMediaSeed[] => rows.map((row) => ({
  ...row,
  credit,
  sourceHref,
  sourceType: 'manufacturer',
  usageLabel: 'Official manufacturer product-page media',
  usageHref: sourceHref,
  userGenerated: false,
  disclosure: 'Official manufacturer media; not a Coffeedant test photograph.',
}));

const retailerProductMedia = (
  credit: string,
  sourceHref: string,
  rows: OfficialMediaRow[],
): ReviewMediaSeed[] => rows.map((row) => ({
  ...row,
  credit,
  sourceHref,
  sourceType: 'product-listing',
  usageLabel: 'Current retailer product-page media',
  usageHref: sourceHref,
  userGenerated: false,
  disclosure: 'Retailer product-listing media; not a Coffeedant test photograph.',
}));

export const reviewMediaUpgrades: Record<string, ReviewMediaSeed[]> = {
  '/espresso-machine/rocket-giotto-cronometro-r/': retailerProductMedia(
    'Whole Latte Love retired Giotto Cronometro R listing',
    'https://www.wholelattelove.com/products/rocket-espresso-giotto-cronometro-r',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/files/preview_images/model_3d_REGIOCRONOR.jpg?v=1732916332&width=1946',
        alt: 'Whole Latte Love exact-model render of the Rocket Giotto Cronometro R',
        caption: 'The retired exact-model listing render records the flared Giotto panels, E61 group, dual gauges, manual valves and wide cup tray. It is product identification media, not evidence of condition or measured performance.',
        width: 1024,
        height: 1024,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/IMG_1205_copy.jpg?v=1764083294&width=1946',
        alt: 'Whole Latte Love product angle showing the Rocket Giotto Cronometro R work area',
        caption: 'The historical exact-model angle helps a used buyer identify the lever, hidden timer area, gauges, hot-water tap and steam wand. A listing photograph cannot establish the condition of another unit.',
        width: 1946,
        height: 1945,
      },
    ],
  ),
  '/espresso-machine/rocket-mozzafiato-cronometro-r/': retailerProductMedia(
    'Whole Latte Love retired Mozzafiato Cronometro R listing',
    'https://www.wholelattelove.com/products/rocket-espresso-mozzafiato-cronometro-r',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/IMG_1309_da914f61-aef4-4f27-ad13-930243bbc750.jpg?v=1586376766&width=1946',
        alt: 'Whole Latte Love front product view of the Rocket Mozzafiato Cronometro R',
        caption: 'The retired exact-model listing view records the straight Mozzafiato panels, E61 group, dual gauges, manual valves and cup tray. It is product identification media, not evidence of condition or measured performance.',
        width: 1946,
        height: 1946,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/mozzafiatoevor-newpanels2018-back_9c10f838-fd25-437c-916e-0079f6023092.jpg?v=1586376785&width=1946',
        alt: 'Whole Latte Love rear product view of the Rocket Mozzafiato Cronometro R',
        caption: 'The historical rear view helps a used buyer identify the exact straight-sided case and rear fittings. A listing photograph cannot establish the condition, completeness or plumbing safety of another unit.',
        width: 1946,
        height: 1946,
      },
    ],
  ),
  '/espresso-machine/rocket-r-nine-one/': retailerProductMedia(
    'Seattle Coffee Gear current R Nine One listing',
    'https://www.seattlecoffeegear.com/products/rocket-r-nine-one-espresso-machine',
    [
      {
        src: 'https://www.seattlecoffeegear.com/cdn/shop/files/ROCKETESPRESSORNINEONEESPRESSOMACHINEnew-1.jpg?v=1711076494&width=800',
        alt: 'Seattle Coffee Gear front angle of the current Rocket R Nine One',
        caption: 'The current exact-model listing view records the saturated group, paddle, touch display, gauges, steam lever and wide work area. It is product-identification media, not evidence of measured performance.',
        width: 800,
        height: 800,
      },
      {
        src: 'https://www.seattlecoffeegear.com/cdn/shop/files/ROCKETESPRESSORNINEONEESPRESSOMACHINEnew-2.jpg?v=1711076498&width=800',
        alt: 'Seattle Coffee Gear angled product view of the current Rocket R Nine One',
        caption: 'The alternate listing angle makes the machine depth, cup tray and control layout easier to judge. Confirm real counter clearance because a studio photograph does not show hoses, portafilter reach or service access.',
        width: 800,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/rok-espresso-gc/': officialProductMedia(
    'ROK USA current EspressoGC Black PLUS listing',
    'https://us.rok.coffee/products/espressogc-black',
    [
      {
        src: 'https://us.rok.coffee/cdn/shop/files/1-2_8f1a77fe-6827-4926-aedb-ad224ff8054b.jpg?v=1766392497&width=1200',
        alt: 'ROK USA lifestyle view of the current EspressoGC Black PLUS dual-arm lever',
        caption: 'The current exact-package view shows the compact frame, twin arms, GC chamber and portafilter in use. It is product-identification media, not evidence of measured pressure, temperature or extraction quality.',
        width: 1200,
        height: 676,
      },
      {
        src: 'https://us.rok.coffee/cdn/shop/files/2_4ca80eb9-de5c-4bf3-b259-da6aab483135.jpg?v=1766392497&width=1200',
        alt: 'ROK USA lifestyle view showing the EspressoGC Black PLUS manual workflow',
        caption: 'The official workflow image helps a buyer judge hand position, arm travel and counter space. It does not establish lever force, accessibility, repeatability or safety for every user.',
        width: 1200,
        height: 676,
      },
    ],
  ),
  '/espresso-machine/saeco-xelsis/': retailerProductMedia(
    'Seattle Coffee Gear certified-refurbished SM7685 listing',
    'https://www.seattlecoffeegear.com/products/saeco-xelsis-sm7685-superautomatic-espresso-machine-stainless-steel-certified-refurbished',
    [
      {
        src: 'https://www.seattlecoffeegear.com/cdn/shop/files/SAECOXELSISSUPERAUTOMATICESPRESSOMACHINEnew-4_8dcbf061-575d-4e6a-a79d-40c819cab4cd.jpg?v=1713731223&width=1200',
        alt: 'Seattle Coffee Gear front product view of the stainless Saeco Xelsis SM7685',
        caption: 'The exact-model listing view records the touchscreen, paired outlet, front-access tray and stainless fascia. It identifies the legacy North American machine but does not establish the condition or performance of another refurbished unit.',
        width: 1363,
        height: 1363,
      },
      {
        src: 'https://www.seattlecoffeegear.com/cdn/shop/files/SAECOXELSISSUPERAUTOMATICESPRESSOMACHINEnew-5_36af73e4-fd33-4ed3-bc32-8f32371fd5a9.jpg?v=1713731223&width=1200',
        alt: 'Seattle Coffee Gear alternate product view of the stainless Saeco Xelsis SM7685',
        caption: 'The alternate retailer view helps a buyer judge depth, hopper access, milk connection and the work area. A studio image cannot show prior use, internal scale, completeness or remaining service life.',
        width: 1363,
        height: 1363,
      },
    ],
  ),
  '/espresso-machine/siemens-eq700-integral/': officialProductMedia(
    'Siemens Ireland TQ717GB3 product record',
    'https://www.siemens-home.bsh-group.com/ie/en/mkt-product/TQ717GB3',
    [
      {
        src: 'https://media3.bsh-group.com/Product_Shots/24740250_BSH-EN_SI_FAEM_812_TQ717R03_General_SecImg-09_plain_3200x1800px_def.webp',
        alt: 'Siemens official lifestyle view of the EQ700 Integral milk and drink workflow',
        caption: 'The official family image shows the integrated-container body, touch interface and finished-drink context used by the TQ717 generation. The filename identifies a regional TQ717 sibling, so it documents shared design rather than proving suffix-level software or package contents.',
        width: 3200,
        height: 1800,
      },
      {
        src: 'https://media3.bsh-group.com/Product_Shots/26357412_BSH-EN_SI_FAEM_812_TQ717GB3_General_SecImg-05_plain_3200x1800px_def.webp',
        alt: 'Siemens official TQ717GB3 image showing the Home Connect favourites screen',
        caption: 'The exact-suffix official image demonstrates how Home Connect can organize favourites and status. It does not guarantee permanent app service, account eligibility, remote-start availability or identical software in every region.',
        width: 3200,
        height: 1800,
      },
    ],
  ),
  '/espresso-machine/siemens-eq9-plus-s700/': officialProductMedia(
    'Siemens Ireland freestanding coffee-machine guide',
    'https://www.siemens-home.bsh-group.com/ie/inspiration/innovation/freestanding-coffee-machines',
    [
      {
        src: 'https://media3.bsh-group.com/Images/700x/MCMI03236279_EQ9s700_coffee_machine_CTM_TI9573X9RW.jpg',
        alt: 'Siemens official shared-generation image of an EQ.9 s700 beside a finished coffee',
        caption: 'The official image records the EQ.9 s700 body and finished-drink context. Its filename identifies the TI9573X9RW regional sibling, so it illustrates shared-generation design rather than proving TI9573X9GB package details or measured cup quality.',
        width: 700,
        height: 394,
      },
      {
        src: 'https://media3.bsh-group.com/Images/400x/MCMI03236284_MCIM02458597_Siemens_Shop_CC_ACC_Coffee_TI9573X9RW.jpg',
        alt: 'Siemens official shared-generation image of an EQ.9 coffee machine beside cleaning supplies and filters',
        caption: 'The official care image places the shared-generation machine beside coffee-machine cleaning products and filters. It highlights the maintenance routine but does not document the accessories supplied with TI9573X9GB or the condition of a used unit.',
        width: 400,
        height: 300,
      },
    ],
  ),
  '/espresso-machine/slayer-single-group/': officialProductMedia(
    'Slayer Espresso Single Group product page',
    'https://slayerespresso.com/product/single-group/',
    [
      {
        src: 'https://slayerespresso.com/wp-content/uploads/2021/05/sg-2g-desc-warmer.jpg',
        alt: 'Slayer official detail photograph of the Espresso Single Group brew area and wood actuator',
        caption: 'The factory detail view shows the three-position wood actuator, group area and shot mirror that define daily use. It documents design and control placement, not measured extraction quality or the exact finish supplied by every dealer.',
        width: 960,
        height: 576,
      },
      {
        src: 'https://slayerespresso.com/wp-content/uploads/2021/08/blueprint-models_sg.png',
        alt: 'Slayer official dimension drawing for the Espresso Single Group machine',
        caption: 'The factory drawing records the compact-height but deep installation envelope. Slayer states that published measurements exclude overhanging portafilters, actuators and cup rails, so a real counter plan needs additional working and service clearance.',
        width: 601,
        height: 402,
      },
    ],
  ),
  '/espresso-machine/rancilio-silvia-pro-x/': retailerProductMedia(
    'Seattle Coffee Gear current Silvia Pro X listing',
    'https://www.seattlecoffeegear.com/products/rancilio-silvia-pro-x-espresso-machine',
    [
      {
        src: 'https://www.seattlecoffeegear.com/cdn/shop/files/RANCILIOSILVIAPROXESPRESSOMACHINEnew-1.jpg?v=1711387172',
        alt: 'Seattle Coffee Gear alternate product view of the Rancilio Silvia Pro X',
        caption: 'The current exact-model listing view records the narrow stainless chassis, 58 mm group, pressure gauge, rocker controls and wand layout. It does not establish measured temperature, pressure, sound or service life.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.seattlecoffeegear.com/cdn/shop/files/RANCILIOSILVIAPROXESPRESSOMACHINEnew-2.jpg?v=1711387172',
        alt: 'Seattle Coffee Gear product angle showing the Rancilio Silvia Pro X work area',
        caption: 'The current retailer angle helps buyers judge group, drip-tray, hot-water and steam-wand access. It is product identification media, not a Coffeedant performance test.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/quick-mill-vetrano-2b-evo/': retailerProductMedia(
    'Chris Coffee current Vetrano 2B Evo listing',
    'https://www.chriscoffee.com/products/quick-mill-vetrano-2b',
    [
      {
        src: 'https://www.chriscoffee.com/cdn/shop/products/vetrano-back.jpg?v=1659444327',
        alt: 'Chris Coffee rear product view of the Quick Mill Vetrano 2B Evo',
        caption: 'The current exact-model listing view records the rear chassis, inlet area and case depth that matter to a permanent installation. It does not prove plumbing quality, pump sound or service life.',
        width: 1500,
        height: 1500,
      },
      {
        src: 'https://www.chriscoffee.com/cdn/shop/products/0995P-A-EVOLED_003.jpg?v=1659444327',
        alt: 'Chris Coffee detail view of the Vetrano 2B Evo E61 group and front controls',
        caption: 'The current retailer detail documents the E61 lever, PID, dual manometer, boiler switches and manual valve layout. It is product identification media, not a Coffeedant performance test.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/quick-mill-silvano-evo/': officialProductMedia(
    'Quick Mill official Silvano product page',
    'https://www.quick-mill.com/products/silvano/',
    [
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/06/36.png',
        alt: 'Quick Mill official alternate view of the current Silvano hybrid espresso machine',
        caption: 'The official current-family view records the stainless chassis, compact ring group, PID display, pressure gauge, manual switches and wand layout. It does not establish measured temperature, pressure, steam or reliability.',
        width: 1200,
        height: 1012,
      },
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/06/38.png',
        alt: 'Quick Mill official detail view of the current Silvano group and controls',
        caption: 'The official detail documents the PID, brew-pressure gauge and manual control arrangement. It is family identification media, not proof that every regional Silvano Evo has identical boiler, tank or wand specifications.',
        width: 1200,
        height: 1012,
      },
    ],
  ),
  '/espresso-machine/quick-mill-rubino/': officialProductMedia(
    'Quick Mill official Rubino product page',
    'https://www.quickmill.it/prodotti/rubino-macchina-da-caffe-quick-mill/',
    [
      {
        src: 'https://www.quickmill.it/wp-content/uploads/2025/07/12-4.png',
        alt: 'Quick Mill official alternate view of the current analog Rubino heat-exchanger espresso machine',
        caption: 'The official current-model view records the narrow stainless chassis, E61-style group, boiler gauge, manual lever and wand layout. It does not establish measured warm-up, temperature, pressure, steam or reliability.',
        width: 1200,
        height: 1012,
      },
      {
        src: 'https://www.quickmill.it/wp-content/uploads/2025/07/15-5.png',
        alt: 'Quick Mill official detail view of the current Rubino group, analog gauge and manual controls',
        caption: 'The official detail identifies the analog Rubino control layout. It is evidence that this generation lacks the newer Rubino Plus OLED display, not proof of measured performance.',
        width: 1200,
        height: 1012,
      },
    ],
  ),
  '/espresso-machine/quick-mill-qm67-evo/': retailerProductMedia(
    'Espresso Outlet current Quick Mill QM67 Evo listing',
    'https://espressooutlet.com/products/quick-mill-qm67-evo-espresso-machine',
    [
      {
        src: 'https://espressooutlet.com/cdn/shop/files/QM67_front-sized.webp?v=1709835656&width=1080',
        alt: 'Front view of the Quick Mill QM67 Evo showing the E61 group, dual manometer, PID and manual controls',
        caption: 'The exact current product view records the E61 group, dual gauge, PID display, boiler switches, brew lever and wand layout. It does not establish measured heat-up, temperature, pressure, flow, steam or reliability.',
        width: 1080,
        height: 1080,
      },
      {
        src: 'https://espressooutlet.com/cdn/shop/files/0992P-A-EVO-9.webp?v=1709835656&width=1080',
        alt: 'Quick Mill QM67 Evo top and side detail showing the hinged reservoir access and stainless body',
        caption: 'The exact-model detail documents the hinged top access, stainless chassis and counter clearance needed around the machine. It is product-listing media, not evidence of measured durability or performance.',
        width: 1080,
        height: 1080,
      },
    ],
  ),
  '/espresso-machine/quick-mill-pippa-4100/': officialProductMedia(
    'Quick Mill official Pippa product page',
    'https://www.quick-mill.com/products/pippa/',
    [
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/05/17-600x600.png',
        alt: 'Quick Mill official alternate view of the current Pippa compact single-boiler espresso machine',
        caption: 'The official current-model view records the stainless chassis, ring group, pressure gauge, switches, wood controls, side tank and wand. It does not establish measured heat-up, temperature, pressure, steam or reliability.',
        width: 600,
        height: 600,
      },
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/05/20-600x600.png',
        alt: 'Quick Mill official detail view of the current Pippa group, pressure gauge and manual controls',
        caption: 'The official detail records the stock group, gauge and control layout. It is reference media, not evidence of PID, programmable pre-infusion, measured pressure or automatic dosing.',
        width: 600,
        height: 600,
      },
    ],
  ),
  '/espresso-machine/quick-mill-orione-3000/': officialProductMedia(
    'Quick Mill official Orione product page',
    'https://www.quick-mill.com/products/orione/',
    [
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/08/2-2.png',
        alt: 'Quick Mill official side view of the current Orione stainless thermoblock espresso machine',
        caption: 'The official current-model view records the compact stainless chassis, group, portafilter, gauge, switches, side tank and wand. It does not establish measured heat-up, temperature, pressure, flow, steam or reliability.',
        width: 1200,
        height: 1012,
      },
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/08/5-2.png',
        alt: 'Quick Mill official detail view of the current Orione group, pressure gauge and manual controls',
        caption: 'The official detail records the stock group, gauge and control layout. It is reference media, not evidence of PID, programmable pre-infusion, an adjustable OPV or measured performance.',
        width: 1200,
        height: 1012,
      },
    ],
  ),
  '/espresso-machine/quick-mill-carola-evo/': officialProductMedia(
    'Quick Mill official Carola product page',
    'https://www.quick-mill.com/products/carola/',
    [
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/07/86-2.png',
        alt: 'Quick Mill official alternate view of the current Carola PID single-boiler espresso machine',
        caption: 'The official current-model view records the narrow stainless chassis, E61 group, manual lever, pressure gauge and front display. It does not establish warm-up, temperature, pressure, flow, noise or reliability in Coffeedant testing.',
        width: 1200,
        height: 1012,
      },
      {
        src: 'https://www.quick-mill.com/wp-content/uploads/2025/07/88-1.png',
        alt: 'Quick Mill official detail view of the current Carola E61 group and espresso-only front controls',
        caption: 'The official detail records the current Carola control and group layout. It is reference media, not evidence of a steam system, factory flow-control kit or measured performance.',
        width: 1200,
        height: 1012,
      },
    ],
  ),
  '/espresso-machine/quick-mill-andreja-premium-evo/': retailerProductMedia(
    'Espresso Outlet Quick Mill Andreja Premium Evo listing',
    'https://espressooutlet.com/products/quick-mill-andreja-premium-evo-espresso-machine',
    [
      {
        src: 'https://espressooutlet.com/cdn/shop/files/andreja-front.webp?v=1709840773&width=720',
        alt: 'Espresso Outlet front product view of the Quick Mill Andreja Premium Evo 0980P-A E61 group and dual gauges',
        caption: 'The exact-model retailer view identifies the E61 group, lever, dual gauges, reservoir chassis and manual heat-exchanger controls. It does not establish temperature, pressure, warm-up, steam speed or reliability in Coffeedant testing.',
        width: 681,
        height: 681,
      },
      {
        src: 'https://espressooutlet.com/cdn/shop/files/0980P-A-3.jpg?v=1709840772&width=720',
        alt: 'Espresso Outlet detail view of the Quick Mill Andreja Premium Evo E61 group, brew lever and pressure gauges',
        caption: 'The retailer detail records the stock E61 group, brew lever and front gauges on product ID 0980P-A. It is reference media, not proof that PID, flow control or direct plumbing is included.',
        width: 681,
        height: 681,
      },
    ],
  ),
  '/espresso-machine/quick-mill-alexia-evo-flow/': retailerProductMedia(
    'Espresso Outlet Quick Mill Alexia Evo listing',
    'https://espressooutlet.com/products/quick-mill-alexia-evo-espresso-machine',
    [
      {
        src: 'https://espressooutlet.com/cdn/shop/files/alexia-evo-front.webp?v=1709839465&width=720',
        alt: 'Espresso Outlet front product view of the Quick Mill Alexia Evo 0970-A-CEVO E61 group and controls',
        caption: 'The exact-model retailer view identifies the E61 group, lever, PID display, pressure gauge and single-boiler controls. It does not establish temperature, pressure, warm-up or reliability in Coffeedant testing.',
        width: 681,
        height: 681,
      },
      {
        src: 'https://espressooutlet.com/cdn/shop/files/0970-A-CEVO-3.jpg?v=1709839467&width=720',
        alt: 'Espresso Outlet detail view of the Quick Mill Alexia Evo E61 group, brew lever and front pressure gauge',
        caption: 'The retailer detail records the stock E61 group and front gauge on product ID 0970-A-CEVO. It is reference media, not proof that a separate flow-control kit is included or installed.',
        width: 681,
        height: 454,
      },
    ],
  ),
  '/espresso-machine/profitec-pro-800/': [
    ...officialProductMedia(
      'Profitec official Pro 800 product page',
      'https://www.profitec-espresso.com/en/products/pro800',
      [
        {
          src: 'https://www.profitec-espresso.com/media/pages/produkte/pro800/f2aa3fc08f-1644418744/pro_800_1.webp',
          alt: 'Profitec official detail view of the current Pro 800 spring lever, walnut handle and pine-green boiler gauge',
          caption: 'The official exact-model view records the tall spring lever, walnut handle and current pine-green boiler gauge. It does not establish pressure, temperature, steam speed or reliability in Coffeedant testing.',
          width: 1408,
          height: 909,
        },
        {
          src: 'https://www.profitec-espresso.com/media/pages/produkte/pro800/1840afe99d-1644418675/pro_800_2.webp',
          alt: 'Profitec official side view of the current Pro 800 walnut-handle spring-lever machine',
          caption: 'The official exact-model side view records the stainless chassis and lever geometry. It is reference media, not proof of cabinet fit, delivered condition or installed plumbing.',
          width: 1920,
          height: 1240,
        },
      ],
    ),
  ],
  '/espresso-machine/profitec-pro-700/': retailerProductMedia(
    'Whole Latte Love retired Profitec Pro 700 listing',
    'https://www.wholelattelove.com/products/profitec-pro-700-dual-boiler-espresso-machine',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/Pro700-V2-frontal_on_132.jpg?v=1654187951&width=1100',
        alt: 'Whole Latte Love front view of the final-generation Profitec Pro 700 with black gauges, front PID and E61 group',
        caption: 'The retired-listing front view identifies the final-generation controls. It does not establish temperature, pressure, steam speed, condition or reliability in Coffeedant testing.',
        width: 1100,
        height: 1120,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/Pro700-V2-Blindsieb.jpg?v=1654187951&width=1100',
        alt: 'Whole Latte Love tray-area view of the Profitec Pro 700 water-supply selector and accessory storage',
        caption: 'The tray-area product image records the water-supply selector and accessory storage on the retired model. It is reference media, not proof of installation quality or the included parts on any used unit.',
        width: 1100,
        height: 993,
      },
    ],
  ),
  '/espresso-machine/profitec-pro-600/': retailerProductMedia(
    'Whole Latte Love retired Profitec Pro 600 Quick Steam Plus listing',
    'https://www.wholelattelove.com/products/profitec-pro-600-dual-boiler-espresso-machine-quick-steam',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/files/PTPRO600QSPLUS_1133_702c9ad0-7302-41d8-b128-3d1ad797a7bd.jpg?v=1764083918&width=1200',
        alt: 'Whole Latte Love front view of the Profitec Pro 600 Quick Steam Plus joystick valves, gauges, PID and E61 group',
        caption: 'The retired-listing view identifies the final Quick Steam Plus front controls. It does not establish temperature, pressure, steam speed, condition or reliability in Coffeedant testing.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/files/PTPRO600QSPLUS_1148_202ec500-a07f-463c-96c8-697165d165d5.jpg?v=1764083918&width=1200',
        alt: 'Whole Latte Love side view of the Profitec Pro 600 Quick Steam Plus stainless chassis and joystick controls',
        caption: 'The retired-listing side view records the final Quick Steam Plus chassis and control arrangement. It is reference media, not proof of the condition or included options on any remaining or used unit.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/profitec-pro-500-pid/': retailerProductMedia(
    'Whole Latte Love current Profitec Pro 500 PID listing',
    'https://www.wholelattelove.com/products/profitec-pro-500-pid-espresso-machine',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/PTPRO500PID_0112.jpg?width=1200',
        alt: 'Whole Latte Love close view of the current Profitec Pro 500 PID front display and automatic shot timer',
        caption: 'The current exact-model detail makes the externally mounted PID and automatic shot timer visible. The display controls steam-boiler temperature, not an independent brew boiler or measured puck temperature.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/PTPRO500PID_0136.jpg?width=1200',
        alt: 'Whole Latte Love front view of the current Profitec Pro 500 PID group, valves, gauges and modular portafilter',
        caption: 'The current retailer view identifies the E61 lever, dual black gauges, quarter-turn valves and modular portafilter. It does not establish temperature, pressure, steam speed or reliability in Coffeedant testing.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/profitec-pro-400/': retailerProductMedia(
    'Whole Latte Love current Profitec Pro 400 listing',
    'https://www.wholelattelove.com/products/profitec-pro-400-espresso-machine',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/PTPRO400_0024.jpg?v=1696948354&width=1200',
        alt: 'Whole Latte Love front view of the Profitec Pro 400 group, gauge, valves and wands',
        caption: 'The exact-model front view identifies the analog Pro 400 interface, E61 lever, dual gauge and separate steam and hot-water wands. It does not establish temperature, pressure or steam performance in Coffeedant testing.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/PTPRO400_0087-G.jpg?v=1656014507&width=1200',
        alt: 'Whole Latte Love internal product view of the Profitec Pro 400 stainless boiler and plumbing',
        caption: 'The retailer detail shows the exact-model boiler, fittings, tubing and wiring arrangement. It is useful construction context, not a Coffeedant teardown or evidence of failure incidence.',
        width: 1200,
        height: 1000,
      },
    ],
  ),
  '/espresso-machine/profitec-go/': retailerProductMedia(
    'Whole Latte Love current original-generation Profitec GO listing',
    'https://www.wholelattelove.com/products/profitec-go-espresso-machine',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/files/Profitec_GO_black_Front_Zoom.jpg?v=1745245603&width=1100',
        alt: 'Whole Latte Love exact-model front view of the black original-generation Profitec GO',
        caption: 'The current US listing view identifies the original GO control layout, pressure gauge, ring group, steam wand and tray. It is retailer media, not proof of delivered stock version or Coffeedant testing.',
        width: 1100,
        height: 1100,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/files/Profitec_GO_Black_button_detail.jpg?v=1745245603&width=1100',
        alt: 'Whole Latte Love close view of the original Profitec GO brew and steam buttons and PID display',
        caption: 'The exact-model detail makes the original GO buttons and PID display visible. GO 2.0 uses different controls, and this product image does not establish response, durability or thermal performance.',
        width: 1100,
        height: 1100,
      },
    ],
  ),
  '/espresso-machine/philips-5400-lattego/': [
    {
      src: 'https://images.philips.com/is/image/philipsconsumer/vrs_94e3ff8bfd0fdd8755644c1aea2d960ba5b46814?$jpglarge$=&wid=1200',
      alt: 'Official Philips 5400 close view of the color TFT, profile icons and drink-selection controls',
      caption: 'The official control view makes the color TFT, four profile positions and drink-selection layout visible. It does not establish menu speed, accessibility or durability in Coffeedant testing.',
      width: 1200,
      height: 675,
      credit: 'Philips US EP5447/94 archived product page',
      sourceHref: 'https://acc.usa.philips.com/c-p/EP5447_94/philips-5400-series-fully-automatic-espresso-machines',
      sourceType: 'manufacturer',
      usageLabel: 'Official manufacturer product-page media',
      usageHref: 'https://acc.usa.philips.com/c-p/EP5447_94/philips-5400-series-fully-automatic-espresso-machines',
      userGenerated: false,
      disclosure: 'Official manufacturer media; not a Coffeedant test photograph.',
    },
    {
      src: 'https://espresso-experts.com/cdn/shop/products/EP5447_94.Angle1000x_800x_5a67d997-e5fc-405a-8214-65ede546dbe9.jpg?v=1717953531&width=1200',
      alt: 'Espresso Machine Experts exact-model product view of the Philips 5400 EP5447/94 and LatteGo container',
      caption: 'The exact-model retailer view identifies the front-mounted LatteGo container, central outlet and compact body. It is refurbished-offer listing media, not evidence of the condition of every unit.',
      width: 1200,
      height: 960,
      credit: 'Espresso Machine Experts refurbished EP5447/94 listing',
      sourceHref: 'https://espresso-experts.com/products/refurbished-philips-saeco-5400-superautomatic-espresso-machine-lattego-silver-ep5447-94',
      sourceType: 'product-listing',
      usageLabel: 'Current retailer product-page media',
      usageHref: 'https://espresso-experts.com/products/refurbished-philips-saeco-5400-superautomatic-espresso-machine-lattego-silver-ep5447-94',
      userGenerated: false,
      disclosure: 'Retailer product-listing media; not a Coffeedant test photograph.',
    },
  ],
  '/espresso-machine/philips-4300-lattego/': [
    {
      src: 'https://images.philips.com/is/image/philipsconsumer/vrs_b891a136ced970087a5685e095c4a4096192233f?$jpglarge$=&wid=1200',
      alt: 'Official Philips 4300 close view of the TFT display and surrounding drink and profile controls',
      caption: 'The official control view makes the color TFT, profile key and drink-selection layout visible. It does not establish menu speed, accessibility or durability in Coffeedant testing.',
      width: 1200,
      height: 681,
      credit: 'Philips US EP4347/94 archived product page',
      sourceHref: 'https://acc.usa.philips.com/c-p/EP4347_94/philips-4300-series-fully-automatic-espresso-machines',
      sourceType: 'manufacturer',
      usageLabel: 'Official manufacturer product-page media',
      usageHref: 'https://acc.usa.philips.com/c-p/EP4347_94/philips-4300-series-fully-automatic-espresso-machines',
      userGenerated: false,
      disclosure: 'Official manufacturer media; not a Coffeedant test photograph.',
    },
    {
      src: 'https://www.seattlecoffeegear.com/cdn/shop/files/PHILIPS4300LATTEGOSUPERAUTOMATICESPRESSOMACHINEnew-2_1da3f7fa-132c-4cc2-b5a2-14dabfd1574c.jpg?v=1713731435&width=1200',
      alt: 'Seattle Coffee Gear exact-model product view of the Philips 4300 EP4347/94 and two-piece LatteGo container',
      caption: 'The exact-model retailer view identifies the front-mounted LatteGo container and compact body. It is listing media for a refurbished offer, not evidence of the condition of every unit.',
      width: 1200,
      height: 1200,
      credit: 'Seattle Coffee Gear certified-refurbished EP4347/94 listing',
      sourceHref: 'https://www.seattlecoffeegear.com/products/philips-4300-lattego-superautomatic-espresso-machine-certified-refurbished',
      sourceType: 'product-listing',
      usageLabel: 'Current retailer product-page media',
      usageHref: 'https://www.seattlecoffeegear.com/products/philips-4300-lattego-superautomatic-espresso-machine-certified-refurbished',
      userGenerated: false,
      disclosure: 'Retailer product-listing media; not a Coffeedant test photograph.',
    },
  ],
  '/espresso-machine/philips-2200-lattego/': officialProductMedia(
    'Philips US EP2230/14 product page',
    'https://www.usa.philips.com/c-p/EP2230_14/series-2200-fully-automatic-espresso-machines',
    [
      {
        src: 'https://images.philips.com/is/image/philipsconsumer/vrs_f67e9a56_3197_435c_9359fa9a89a0b381?$png$=&wid=1200',
        alt: 'Official close view of LatteGo dispensing milk foam into a cappuccino',
        caption: 'The official working view shows milk traveling from the two-piece LatteGo container directly into the cup without a separate hose. It does not establish foam temperature, texture or speed in Coffeedant testing.',
        width: 1200,
        height: 1000,
      },
      {
        src: 'https://images.philips.com/is/image/philipsconsumer/vrs_c3f66e92_de9f_44a6_8dbbdfa404b96128?$png$=&wid=1200',
        alt: 'Official Philips 2200-series touch-control panel close view',
        caption: 'The official family control image makes the direct drink keys and My Coffee Choice bars visible. Panel labels vary by milk trim, so exact EP2230/14 functions are taken from its product page and manual rather than inferred from the photograph.',
        width: 1200,
        height: 675,
      },
    ],
  ),
  '/espresso-machine/nuova-simonelli-oscar-ii/': officialProductMedia(
    'Nuova Simonelli current Oscar product page',
    'https://nuovasimonelli.com/machine/oscar/',
    [
      {
        src: 'https://nuovasimonelli.com/wp-content/uploads/sites/2/2025/05/MMFC3722-copia%402x.webp',
        alt: 'Nuova Simonelli official close view of the Oscar II group, timed coffee buttons and articulated steam wand',
        caption: 'The current official control view makes the two timed coffee buttons, status lights, 58 mm group and wand placement visible. It does not turn timed dosing into volumetric or weight-based control.',
        width: 960,
        height: 900,
      },
      {
        src: 'https://nuovasimonelli.com/wp-content/uploads/sites/2/2025/05/MMFC3706-copia%402x.webp',
        alt: 'Nuova Simonelli official view of the Oscar II four-hole steam wand texturing milk in a pitcher',
        caption: 'The official steam image shows the articulated wand and pitcher clearance. It is product-page media, not evidence of milk temperature, texture or steaming speed in Coffeedant testing.',
        width: 960,
        height: 900,
      },
    ],
  ),
  '/espresso-machine/nuova-simonelli-musica/': [
    {
      src: 'https://nuovasimonelli.com/wp-content/uploads/sites/2/2025/05/Gruppo-di-maschere-342.png',
      alt: 'Nuova Simonelli official three-quarter view of the Musica standard black-lining espresso machine',
      caption: 'The current official product view identifies the standard black-lining cabinet, 58 mm group, hot-water wand, steam wand, volumetric console and boiler gauge. It does not establish brew-water temperature at the coffee puck.',
      width: 1268,
      height: 800,
      credit: 'Nuova Simonelli current Musica product page',
      sourceHref: 'https://nuovasimonelli.com/machine/musica/',
      sourceType: 'manufacturer',
      usageLabel: 'Official manufacturer product-page media',
      usageHref: 'https://nuovasimonelli.com/machine/musica/',
      userGenerated: false,
      disclosure: 'Official manufacturer media; not a Coffeedant test photograph.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0564/3288/5835/files/musica-water-tank-1_9511a181-6f17-4fb2-b62e-2a6412af8390.jpg?v=1710606771',
      alt: 'Espresso Outlet exact-model view of the Nuova Simonelli Musica top reservoir hatch and removable water tank',
      caption: 'The reviewed reservoir view makes the top-fill access and removable tank visible. Official records still conflict between 2.3 and 3.0 liters, so the photograph is not used to infer capacity.',
      width: 4240,
      height: 2832,
      credit: 'Espresso Outlet Nuova Simonelli Musica hands-on review',
      sourceHref: 'https://espressooutlet.com/blogs/news/nuova-simonelli-musica-in-depth-review',
      sourceType: 'product-listing',
      usageLabel: 'Retailer exact-model review media',
      usageHref: 'https://espressooutlet.com/blogs/news/nuova-simonelli-musica-in-depth-review',
      userGenerated: false,
      disclosure: 'Independent reviewer media; Coffeedant did not test or photograph this machine.',
    },
  ],
  '/espresso-machine/nivona-caferomatica-8xx/': retailerProductMedia(
    'Aromatico current NICR 825 listing and Nivona official regional store',
    'https://www.aromatico.de/en/p/nivona-nicr-825-caferomatica',
    [
      {
        src: 'https://cdn.shopify.com/s/files/1/0616/9031/4825/files/103308-103308-nivona-caferomatica-825.jpg?v=1737468267',
        alt: 'Aromatico exact-model product view of the stainless and chrome Nivona NICR 825 dispensing a latte macchiato',
        caption: 'The current specialist product view identifies the NICR 825 front, rotary interface, central milk outlet and active cup-warming deck. It is retailer media, not a Coffeedant test photograph.',
        width: 800,
        height: 800,
      },
      {
        src: 'https://cdn.shopify.com/s/files/1/0616/9031/4825/files/103308-103308-nivona-825-caferomatica-kaffeevollautomat-mood.jpg?v=1737468272',
        alt: 'Aromatico exact-model view of the Nivona NICR 825 serving two latte macchiatos together',
        caption: 'The two-cup retailer image makes the DuoPlus buying case visible. It does not establish foam texture, temperature or speed in another kitchen.',
        width: 800,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/nivona-caferomatica-6xx/': officialProductMedia(
    'Nivona current NICR 6-series product page',
    'https://nivona.com/nl/product/6series',
    [
      {
        src: 'https://nivona.com/assets/6_series_hero1-xl_c7vjD.webp',
        alt: 'Nivona official kitchen view of the current titanium NICR 695 with a cappuccino beside its central outlet',
        caption: 'The official kitchen view gives scale for the compact 6-series body and shows that coffee and milk share the central outlet. It is manufacturer media, not a Coffeedant test photograph.',
        width: 3000,
        height: 2000,
      },
      {
        src: 'https://nivona.com/assets/6_series_spec1-BiDNeBmF.webp',
        alt: 'Nivona official detail view of the current NICR 695 control panel and combined coffee and milk dispenser',
        caption: 'The official detail view identifies the rotary interface, 2.4-inch display and integrated frother. It does not prove drink temperature, texture or durability.',
        width: 1400,
        height: 2100,
      },
    ],
  ),
  '/espresso-machine/la-pavoni-mini-cellini/': officialProductMedia(
    'La Pavoni LPSMCS01EU official gallery',
    'https://www.lapavoni.com/en/products/domestic-machines/mini-cellini',
    [
      {
        src: 'https://assets.4flow.cloud/WEB_LPSMCS01EU_01.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVOGpvT2I2eUJJYXYva3BZYmJWLy9RcEhYeUpLTDNYdVdRREZWcG01UXZDTGdZTzBlZXJBcGxPd093aEo2RTZwTlRZZkhsN3RiVDBIK01EK0lkekJmV0paT01rMTZwTTdYWkpYS1NaS1RmNVo4NHRnekhtZHNCZXBHQWphNHhRR1dmLy94ZGdHTzJkeHo1cy9KOFl0YWR3PQ',
        alt: 'La Pavoni official front view of the stainless Mini Cellini with E61 group, steam wand and boiler manometer',
        caption: 'The exact-model front view confirms the E61 lever, separate steam and hot-water controls, and one boiler manometer. It does not establish brew pressure or temperature.',
        width: 1300, height: 1300,
      },
      {
        src: 'https://assets.4flow.cloud/WEB_LPSMCS01EU_02.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVeDJZMDNOUjYwYkZ4WDZMS2hZS0lIWE8xR2dqZUV0azBhM0lBcWh0TWpCb0lCVy82dHdvWTgrZnZEcksrSnJoaGJNeUJFRndiOXVkc0lqcksyQldNQUR1eTM5ZTJ1TWdBK3pWMHlJb2dWZjgzTzRCK2NtR0praVZSOTNBQmxsVW15dkdPQ1dKVnN5M216cGxHVWx6NnRVPQ',
        alt: 'La Pavoni official rear three-quarter view of the stainless Mini Cellini cabinet and top cup rail',
        caption: 'The official rear view makes the 420 mm cabinet depth and top-access layout visible. It is manufacturer media, not a Coffeedant test photograph.',
        width: 1300, height: 1300,
      },
    ],
  ),
  '/espresso-machine/la-pavoni-new-domus-bar/': officialProductMedia(
    'La Pavoni LPCDMB02EU official gallery',
    'https://www.lapavoni.com/en/products/domestic-machines/new-domus-bar',
    [
      {
        src: 'https://assets.4flow.cloud/WEB_LPCDMB02EU_1.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVMThBTmo4S3lNT2RPZFpyY2QzQi9EWm53d2lpcWdhOThBTFA2a0JLYXIyQUxyZXBWY0RpVko4cmYvcEtiNkZkVEcvNE9ydGwwSFZPUEFWeUd0T1Y2TlAvLy9xMkpZWCt5eFluUjEwWXpRN0RLLzA3WHAwWEdmVjFkUzZRaWM3NDNCQlNPbDdreGhydmVsWlA3SUFCZ2s0PQ',
        alt: 'La Pavoni official front view of the New Domus Bar showing the integrated grinder, three switches, pump gauge and brew group',
        caption: 'The exact-model front view confirms the manual grinder outlet, simple control switches and pump manometer. It does not establish pressure at the puck or grind consistency.',
        width: 1300, height: 1300,
      },
      {
        src: 'https://assets.4flow.cloud/WEB_LPCDMB02EU_2.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVOTR3TkREQ1BVRnZRekdCSVRKWTZ1eWpNbHkyMUkzK0ZzTWFBdHFLdkxEY3RrL2VJd0I5aEtoa0pwOUdiMFkwZGg2VjNHS1dHMk8rWWQzcE9Sbmx1NnR6MzdwdVFLQ3hXSEVkcDJwMUtZTTZTVTJqOWdsMzBXQ3lMbDdrVzk5WUZYekljRW42UVROZmlTZGNwSkwxK2F3PQ',
        alt: 'La Pavoni official side view of the New Domus Bar stainless cabinet, cup warmer and shared steam and hot-water wand',
        caption: 'The official side view shows the compact 250 mm cabinet depth and top-loading layout. It is manufacturer media, not a Coffeedant test photograph.',
        width: 1300, height: 1300,
      },
    ],
  ),
  '/espresso-machine/lelit-anna/': officialProductMedia(
    'Lelit Anna current official gallery',
    'https://www.lelit.com/en-us/product/anna-pesan06',
    [
      {
        src: 'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/Lelit/PL41TEM/carousel_1.png',
        alt: 'Lelit official three-quarter image of the current Anna with PID display, pressure gauge, LELIT57 group and steam wand',
        caption: 'The official three-quarter view confirms the current control layout and compact LELIT57 group. It is US-family manufacturer media and does not establish EU voltage, package or warranty.',
        width: 1300, height: 1300,
      },
      {
        src: 'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/Lelit/PL41TEM/carousel_2.png',
        alt: 'Lelit official side image of the current Anna showing its water-level window, cabinet depth and filterholder clearance',
        caption: 'The official side view makes the 380 mm cabinet depth and tank-level window visible. It is US-family manufacturer media, not a Coffeedant test photograph.',
        width: 1300, height: 1300,
      },
    ],
  ),
  '/espresso-machine/lelit-glenda-pl41plust/': retailerProductMedia(
    'Mutbex exact Lelit Glenda PL41PLUST listing',
    'https://www.mutbex.com/lelit-glenda-pl41-plust-pid-ayarli-espresso-kahve-makinesi',
    [
      {
        src: 'https://www.mutbex.com/lelit-glenda-pl41-plust-pid-ayarli-espresso-kahve-makinesi-espresso-ve-cappuccino-makineleri-lelit-32617-16-B.jpg',
        alt: 'Mutbex exact-model front image of the Lelit Glenda PL41PLUST showing the PID display, switches, 58 mm group and wand',
        caption: 'The exact front view confirms the separate pump and mode switches, small PID display, 58 mm group and articulated wand. It is archived retailer media, not a Coffeedant test photograph.',
        width: 800, height: 800,
      },
      {
        src: 'https://www.mutbex.com/lelit-glenda-pl41-plust-pid-ayarli-espresso-kahve-makinesi-espresso-ve-cappuccino-makineleri-lelit-32619-16-B.jpg',
        alt: 'Mutbex exact-model close view of the Lelit Glenda PL41PLUST filterholder locked into its 58 mm group',
        caption: 'The exact close view makes the commercial-size group and filterholder connection visible. It does not establish extraction pressure, temperature or condition of a used machine.',
        width: 800, height: 800,
      },
    ],
  ),
  '/espresso-machine/lelit-grace-pl81t/': [
    {
      src: 'https://www.coffeeitalia.ie/wp-content/uploads/2022/06/Lelit-Grace-PL81T-1.jpg',
      alt: 'Coffee Italia three-quarter image of the Lelit Grace PL81T showing its narrow stainless cabinet, top reservoir access and LELIT57 filterholder',
      caption: 'The exact-model three-quarter view shows the narrow cabinet, top-fill layout, articulated wand and 57 mm filterholder. It is archived retailer media, not a Coffeedant test photograph.',
      width: 700, height: 800,
      credit: 'Coffee Italia exact Lelit Grace PL81T listing',
      sourceHref: 'https://www.coffeeitalia.ie/lelit-grace-pl81t/',
      sourceType: 'product-listing',
      usageLabel: 'Current retailer product-page media',
      usageHref: 'https://www.coffeeitalia.ie/lelit-grace-pl81t/',
      userGenerated: false,
      disclosure: 'Retailer product-listing media; not a Coffeedant test photograph.',
    },
    {
      src: 'https://www.espressoplanet.com/cdn/shop/files/Grace.jpg',
      alt: 'Espresso Planet exact-model front image of the Lelit Grace PL81T with three backlit buttons, pressure gauge, LCC display and steam wand',
      caption: 'The exact front view identifies the three mode buttons, backlit manometer, LCC display and shared steam and hot-water wand. It does not establish pressure, temperature or condition.',
      width: 500, height: 500,
      credit: 'Espresso Planet exact Lelit Grace PL81T listing',
      sourceHref: 'https://www.espressoplanet.com/products/lelit-grace-semi-automatic-espresso-machine-pl81t',
      sourceType: 'product-listing',
      usageLabel: 'Current retailer product-page media',
      usageHref: 'https://www.espressoplanet.com/products/lelit-grace-semi-automatic-espresso-machine-pl81t',
      userGenerated: false,
      disclosure: 'Retailer product-listing media; not a Coffeedant test photograph.',
    },
  ],
  '/espresso-machine/lelit-mara-x/': officialProductMedia(
    'Lelit US current MaraX PESMX02 gallery',
    'https://www.lelit.com/en-us/product/marax-pesmx02',
    [
      {
        src: 'https://assets.breville.com/cdn-cgi/image/width%3D1300%2Cformat%3Dauto/Lelit/PESMX02/PESMX02_Carousel2.png',
        alt: 'Lelit official side image of the current stainless MaraX showing the projecting L58E group, lever, cup rail and deep cabinet',
        caption: 'The exact official side view makes the 52 cm cabinet depth, projecting group and full lever path visible. It does not establish heat-up, temperature or counter clearance in a specific kitchen.',
        width: 1300, height: 1300,
      },
      {
        src: 'https://assets.breville.com/cdn-cgi/image/width%3D1300%2Cformat%3Dauto/Lelit/PESMX02/PESMX02_Carousel3.png',
        alt: 'Lelit official three-quarter image of a black MaraX with maple controls, dual pressure gauge and cool-touch wands',
        caption: 'The current official black and maple finish shows the dual manometer, spring-closure taps and separate steam and hot-water wands. Finish availability and delivered package remain regional.',
        width: 1300, height: 1300,
      },
    ],
  ),
  '/espresso-machine/lelit-victoria-pl91t/': officialProductMedia(
    'Lelit US current Victoria PESVI01 gallery',
    'https://www.lelit.com/en-us/product/victoria-pesvi01?sku=PESVI01BSS1BXX1',
    [
      {
        src: 'https://assets.breville.com/cdn-cgi/image/width%3D1300%2Cformat%3Dauto/Lelit/PESVI01/PESVI01_Carousel1.png',
        alt: 'Lelit official three-quarter image of the current Victoria with LELIT58 filterholder, LCC display, backlit manometer and steam wand',
        caption: 'The exact official working view confirms the current control layout, commercial-size group and shared steam and hot-water wand. It does not establish heat-up, temperature or pressure at the coffee puck.',
        width: 1300, height: 1300,
      },
      {
        src: 'https://assets.breville.com/cdn-cgi/image/width%3D1300%2Cformat%3Dauto/Lelit/PESVI01/PESVI01_Carousel2.png',
        alt: 'Lelit official side image of the current Victoria showing its narrow stainless body, cup warmer, top tank access and multidirectional wand',
        caption: 'The exact official side view makes top tank access, cabinet proportions and wand movement visible. It is manufacturer media, not a Coffeedant test photograph.',
        width: 1300, height: 1300,
      },
    ],
  ),
  '/espresso-machine/londinium-r24/': officialProductMedia(
    'Londinium current R24 official gallery',
    'https://www.londiniumespresso.com/products/londinium-r24/',
    [
      {
        src: 'https://cdn.swell.store/londinium/66d663007595ec0012bbcfff/6bed143f5a3666abd8af9bfea0a06963/londinium-r24-main-002.jpg?w=1200&h=630&q=100&fit=fill',
        alt: 'Londinium official close view of espresso extracting from the current R24 spring group into a white cup',
        caption: 'The exact-model working view shows the spring group, wenge bottomless portafilter and cup clearance during extraction. The pictured crema is promotional manufacturer media, not a Coffeedant taste or extraction test.',
        width: 1920, height: 1920,
      },
      {
        src: 'https://cdn.swell.store/londinium/66d66300927b9d0012db46bc/cdf9cbf3476603b6cf81f7090bb9e4c8/londinium-r24-main-004.jpg?w=1200&h=630&q=100&fit=fill',
        alt: 'Londinium official close view of the current R24 steam wand beside a finished milk drink',
        caption: 'The exact-model view makes the steam-wand reach, insulated grip and drink clearance visible. The finished latte art is a manufacturer illustration, not Coffeedant milk testing.',
        width: 1920, height: 1920,
      },
    ],
  ),
  '/espresso-machine/melitta-barista-ts-smart/': officialProductMedia(
    'Melitta international current Barista TS Smart gallery',
    'https://www.melitta-international.com/bean-to-cup-machines/our-categories/all-bean-to-cup-machines/Melitta-Barista-TS-Smart',
    [
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/BaristaTS-Smart_convenie?qlt=85&wid=1600&ts=1787749171800&dpr=off',
        alt: 'Melitta official close view of the Barista TS Smart Touch and Slide panel while a strength or quantity control is adjusted',
        caption: 'The exact-family official working view shows the compact TFT, direct drink icons and touch slider. It illustrates the interface, not response time, usability for every owner or Coffeedant testing.',
        width: 1600, height: 450,
      },
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/BaristaTS-Smart_easy-cle?qlt=85&wid=1600&ts=1787749171998&dpr=off',
        alt: 'Melitta official close view of a removable Barista TS Smart outlet and milk-system component being handled for cleaning',
        caption: 'The official care image makes physical access to the removable outlet components visible. Easy Steam Cleaning supports this work but does not eliminate detached-part sanitation.',
        width: 1600, height: 450,
      },
    ],
  ),
  '/espresso-machine/melitta-cafina-ct8/': officialProductMedia(
    'Melitta Professional current Cafina CT8 product page',
    'https://www.melitta-professional.com/us/en/coffeemachines/fuer-die-grosse-getraenkevielfalt/melitta-cafina-ct8',
    [
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/feature_ct8_high-performance-mahlwerk%3A16-9?dpr=off&fmt=png-alpha&ts=1763989805053',
        alt: 'Melitta Professional official Cafina CT8 high-performance grinder feature image',
        caption: 'The official grinder feature image illustrates the commercial bean path. The CT8 can be ordered with one or two grinders, so the signed configuration controls the delivered hardware.',
        width: 1600,
        height: 900,
      },
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/feature_ct8_cip%3A16-9?dpr=off&fmt=png-alpha&ts=1763989805111',
        alt: 'Melitta Professional official Cafina CT8 Clean in Place feature image',
        caption: 'The official CIP image identifies in-place coffee and milk path cleaning. Operators still handle approved chemicals, waste, containers, milk contact areas and prompts.',
        width: 1600,
        height: 900,
      },
    ],
  ),
  '/espresso-machine/melitta-cafina-xt6-bes870/': officialProductMedia(
    'Melitta Professional current Cafina XT6 product page',
    'https://www.melitta-professional.com/us/en/coffeemachines/fuer-den-praktischen-comfort/Melitta-Cafina-XT6',
    [
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/feature_xt6_acs%3A16-9?dpr=off&fmt=png-alpha&ts=1763989771682',
        alt: 'Melitta Professional official Cafina XT6 Automatic Coffeequality System feature image',
        caption: 'The official ACS image illustrates automatic correction within the configured brewing process. It does not establish sensory quality or consistency under a specific site’s beans, recipes and maintenance.',
        width: 1600,
        height: 900,
      },
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/feature_xt6_professional-milk%3A16-9?dpr=off&fmt=png-alpha&ts=1763989771709',
        alt: 'Melitta Professional official Cafina XT6 Professional Milk feature image',
        caption: 'The official Professional Milk image represents configured hot and cold milk work. Cooler, milk paths, recipes and sanitation determine the delivered operation.',
        width: 1600,
        height: 900,
      },
    ],
  ),
  '/espresso-machine/melitta-cafina-xt7/': officialProductMedia(
    'Melitta Professional current Cafina XT7 product page',
    'https://www.melitta-professional.com/us/en/coffeemachines/fuer-den-praktischen-comfort/Melitta-Cafina-XT7',
    [
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/feature_xt7_topfoam%3A16-9?ts=1763989804042&fmt=png-alpha&dpr=off',
        alt: 'Melitta Professional official Cafina XT7 TopFoam feature image',
        caption: 'The official TopFoam image illustrates the international integrated milk proposition. Melitta’s current US page says North America receives a two-step-only XT7, so this is not a US default.',
        width: 1920,
        height: 1080,
      },
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/feature_xt7_acs%3A16-9?ts=1763989804013&fmt=png-alpha&dpr=off',
        alt: 'Melitta Professional official Cafina XT7 Automatic Coffeequality System feature image',
        caption: 'The official ACS image represents automatic correction within the configured brewing process. It does not establish sensory quality or consistency for a particular site, recipe or maintenance history.',
        width: 1920,
        height: 1080,
      },
    ],
  ),
  '/espresso-machine/melitta-passione/': officialProductMedia(
    'Melitta international current Passione OT gallery',
    'https://www.melitta-international.com/bean-to-cup-machines/our-categories/all-bean-to-cup-machines/Passione-OT',
    [
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/PassioneOT_FT3_OneTouch_?dpr=off&qlt=85&ts=1788882143364',
        alt: 'Melitta official Passione OT one-touch control panel and drink-selection view',
        caption: 'The official close view shows the physical direct-drink buttons and TFT-guided menu. It illustrates control layout, not response time, cup quality or Coffeedant testing.',
        width: 300,
        height: 225,
      },
      {
        src: 'https://s7g10.scene7.com/is/image/melitta/Passione_MMB2_HandhabungReninigu?dpr=off&qlt=85&ts=1788882143970',
        alt: 'Melitta official Passione OT cleaning and removable-component view',
        caption: 'The official care image supports the removable-brewer and physical-cleaning workflow. Guided programs and steam rinsing do not eliminate manual milk-part and brew-group care.',
        width: 700,
        height: 450,
      },
    ],
  ),
  '/espresso-machine/miele-cm6360-milkperfection/': officialProductMedia(
    'Miele USA exact CM 6360 Lotus white product gallery',
    'https://www.mieleusa.com/product/11648190/countertop-coffee-machine-cm-6360-milkperfection-lotus-white-cm',
    [
      {
        src: 'https://media.miele.com/dam/af20cfab-5cab-4790-9bff-b3ba01265e60/20000189050_HighresDigitalRGB.png?impolicy=gallery&imwidth=1024',
        alt: 'Miele official side view of the Lotus white CM 6360 showing the water tank and compact cabinet depth',
        caption: 'The exact-model side view makes tank position, power cord, spout clearance and the full 427 mm cabinet depth visible. It is official product media, not a Coffeedant test photograph.',
        width: 1080,
        height: 783,
      },
      {
        src: 'https://media.miele.com/dam/5ba56083-85d1-4bef-a2e9-b3ba01268b28/20000189030_HighresDigitalRGB.png?impolicy=gallery&imwidth=1024',
        alt: 'Miele official close view of the CM 6360 DirectSensor display and drink controls',
        caption: 'The official control close-up identifies the text display, direct drink buttons and navigation keys. It illustrates layout, not response time, menu ease or Coffeedant testing.',
        width: 1080,
        height: 810,
      },
    ],
  ),
  '/espresso-machine/miele-cm7750-coffeeselect/': officialProductMedia(
    'Miele USA exact CM 7750 CoffeeSelect product gallery',
    'https://www.mieleusa.com/product/11106260/countertop-coffee-machine-cm-7750-coffeeselect-obsidian-black',
    [
      {
        src: 'https://media.miele.com/dam/dc77dc6b-0d44-4135-9893-b3ba01261ee3/20000189079_HighresDigitalRGB.png?impolicy=gallery&imwidth=1024',
        alt: 'Miele official three-quarter view of the CM 7750 CoffeeSelect dispensing two espressos beneath its CM Touch display',
        caption: 'The exact-model working view shows paired dispensing, the touch display, cup platform and top-access bean system. It is manufacturer media, not a Coffeedant extraction or taste test.',
        width: 1080,
        height: 1140,
      },
      {
        src: 'https://media.miele.com/dam/5e254127-a0c8-428a-8e5a-b3ba0126479a/20000189059_HighresDigitalRGB.png?impolicy=gallery&imwidth=1024',
        alt: 'Miele official side view of the black CM 7750 CoffeeSelect showing its deep cabinet, water-side panel and power cord',
        caption: 'The official side view makes the 445 mm cabinet depth, top access and service-side proportions visible. It does not establish counter clearance in a specific kitchen.',
        width: 1080,
        height: 865,
      },
    ],
  ),
  '/espresso-machine/la-pavoni-europiccola/': officialProductMedia(
    'La Pavoni LPLELQ01EU official gallery',
    'https://www.lapavoni.com/en/products/domestic-machines/europiccola-lusso',
    [
      {
        src: 'https://assets.4flow.cloud/WEB_LPLELQ01EU_1.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVNlZXZFI4NllDNTliTFRUWXB3WWF4MGx6ZDNSeEpvVUhUVDlUKzdSOVpvQjJuSFBPM00rMUlTQWVrWkg4Y0QrY21JREkwWCsxWHJSdXU0ekdnNnNmL2NiTW5Kc3dpU1p0NEVOdTF1WldsR0E1MUNkbmlSc3N5L3l5TjVTUGNFSmo4QjNtWmt6QTV1dXFIdTdxcVAzbTdRPQ',
        alt: 'La Pavoni official front view of the chrome Europiccola Lusso with raised lever, sight glass and steam wand',
        caption: 'The exact-model front view makes the compact base, exposed boiler, sight glass and lack of a pressure gauge clear. It does not establish shot quality or safe touch temperature.',
        width: 1300, height: 1300,
      },
      {
        src: 'https://assets.4flow.cloud/WEB_LPLELQ01EU_2.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVL0ptWm5nemZFdTcxY3RFaGVOMGxiczNzOHdwQ2hLMm1HdGFzdDVlcGhUQjlWNkZ6aC9QUWRKKzc0SXFGU3hyV3RaTFJRVVk5S2JaYzBxMVBMeERQcENiaVhuNTF5ci9xbFpNVlcySWllQlhYVWFhdWFXeEUrQ2VKc2RuQTlkR3BmcUpZNUpjMFdYZ3dSL3l5S0RUZ2VzPQ',
        alt: 'La Pavoni official side view of the Europiccola Lusso showing the lever arc, boiler cap and three-hole steam wand',
        caption: 'The official side view explains the full lever clearance and exposed pressurised-boiler layout. It is manufacturer media, not a Coffeedant test photograph.',
        width: 1300, height: 1284,
      },
    ],
  ),
  '/espresso-machine/la-pavoni-cellini-classic/': officialProductMedia(
    'La Pavoni LPSCCS01EU official gallery',
    'https://www.lapavoni.com/en/products/domestic-machines/cellini-classic',
    [
      {
        src: 'https://assets.4flow.cloud/WEB_LPSCCS01EU_1.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVd0s2MHpRSTlsNzcybkRabkpTeExQNmhuUU9LK3lydkVFZklMM0NJSkd4NmhBb1QxSGs3NlpZMEN3R1JJT3VGQ0V5RXFIRmxwRkg0ZDNwRlU5SndMUlNTdHFHR2hJODY2RkprQ3NlWUpjKzJlQkw3bXhKM210U0E1UjB4ejlDclZKN1pjVWdveDYycTdTQW5WV2YrK1ZrPQ',
        alt: 'La Pavoni official front view of the Cellini Classic showing the E61 group, boiler gauge and two rotary valves',
        caption: 'The exact-model front view confirms the single boiler manometer and manual E61 layout. It does not establish brew pressure, temperature or shot quality.',
        width: 1300, height: 1300,
      },
      {
        src: 'https://assets.4flow.cloud/WEB_LPSCCS01EU_2.jpg.jpg?pEFs=cVY2M1MyN1ZOMFFadEQ5ZlVOMzhVNnZPOVZIUG5uOG5NK1ErdG1CUUk5ZWcwTjBEY2VpYmNld0dBeCtLWmIvUTVyWTExSHhIQnpyYWZGVXpzU093bjIwdjBPNklJYnk4TVJlVXRUWGRlTmhTYVorMUZNcWErS1RyTHpWYXBzMHR0NDU1dGg0TERqVkNkOTVIVU43NkFtdXF0RnFhdWhJem5rSUpMdHpSK1BjPQ',
        alt: 'La Pavoni official rear three-quarter view of the stainless steel Cellini Classic and its steam wand',
        caption: 'The official rear view shows the full 430 mm cabinet depth and top-access layout that buyers must accommodate under cabinets.',
        width: 1300, height: 1300,
      },
    ],
  ),
  '/espresso-machine/krups-virtuoso-xp442c40/': officialProductMedia(
    'Krups UK XP442C40 official gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/TRADITIONAL-ESPRESSO-MACHINES/Krups-Virtuoso-XP442C40-Pump-Espresso-Coffee-Machine--Stainless-Steel/p/8010001076',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w5Njk5NHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnM055OW9PRFV2TWpZNE9EY3pNVGszTVRVNE56QXxlZTQ1ZjUyYzQ1Mzg3MjFkYzhlZGEzNjNmOTAzOThmOTU5OTMyZDM0ZDUyYjNlOTNmM2NjOTIyYTBiMDU2ZTVi',
        alt: 'Krups UK close view of the Virtuoso XP442C40 four-button panel and side steam knob',
        caption: 'Exact-model manufacturer image shows the simple power, steam, one-cup and two-cup controls. It does not establish response time or drink quality.',
        width: 350, height: 350,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w4NzM4NHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJneU1DOW9PRFV2TWpZNE9EY3pNVGszTkRnMk16Z3w2MTAzZjIzNzZmYWFiZWU1OWJjNjMwYjgxMDc5ZTA4Y2IyZjYzZjIzMjlhNDQ0MWQ1MmMzZmNmMGJmNjAwMGE0',
        alt: 'Krups UK Virtuoso XP442C40 manual steam nozzle frothing milk in a glass jug',
        caption: 'Official promotional media illustrates nozzle placement and jug clearance. The pictured foam is not a Coffeedant test result.',
        width: 350, height: 350,
      },
    ],
  ),
  '/espresso-machine/krups-sensation-ea910e40/': officialProductMedia(
    'Krups UK EA910E40 official gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Sensation---Aluminium/p/8010001251',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxNDYzNzB8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzVNaTlvTjJNdk1qZzRNVGswTlRjNU5qWXhNVEF8Yjc3MmJkYjAxNjEwNTE4NDU5MzY3MTQxNGY0ODNkZjhjZjEyYzQ2MTZjMzI5ZWQyNjQ4MjYyZTQzMWQ4MmJhYQ',
        alt: 'Krups UK front image of the Sensation EA910E40 showing its drink icons, dual outlet and manual steam nozzle',
        caption: 'Exact-model manufacturer image shows the direct control panel and component layout; it is not a Coffeedant test photograph.',
        width: 700, height: 700,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wzNTAwODJ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGtOeTlvT0RBdk1qWTRPRGMxTVRFNE16UTJOVFF8MDA0MTFmY2U4YmE0MjNlMGIzZTFmYjUxZGNhN2YwYWQ2OTMzOWQzMTMyZGY2YzVkMWFiM2ZlNDEyZTcyM2NiZg',
        alt: 'Krups UK close view of a hand selecting settings on the Sensation EA910E40 angled control panel',
        caption: 'Official gallery image illustrates the control layout and indicator lights. It does not establish response time, accessibility or coffee quality.',
        width: 700, height: 700,
      },
    ],
  ),
  '/espresso-machine/krups-opio-xp320840/': officialProductMedia(
    'Krups UK XP320840 official gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/TRADITIONAL-ESPRESSO-MACHINES/Krups-Opio-Steam-%26-Pump-XP320840-Traditional-Pump-Espresso-Coffee-Machine--1-5L--Black--Cappuccino/p/8010000482',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wyNDc5MzN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3lNUzlvT1RNdk1qa3dOalF6T1RnME1EVTJOakl8ZjIyYTlhZjg3MTc0OGIxYWViNDRmYTlkZWIxYjM0NzQ3NjE4NDU3Njc1ZjdjZDc3MTJlOWY1MTEwZjdjNGU0NA',
        alt: 'Krups UK lifestyle image of the Opio XP320840 with two black coffees and a milk drink',
        caption: 'Official gallery image illustrates a two-cup presentation and milk drink; pictured results are promotional, not Coffeedant testing.',
        width: 571, height: 700,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxODU1MDJ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3pPQzlvT1Rjdk1qa3dOalF6T1RnMU5qazFNREl8YmYyZjZlODQ5ZjBlZjNjN2VkODJlYTEwMjc5NzA4MWJhZTcxMzU1ZTZkYjVkYTE1YTkyZGVlYjhiY2VkNTg5YQ',
        alt: 'Krups UK angled image of the Opio XP320840 showing the rear water tank, portafilter and steam wand',
        caption: 'Manufacturer image shows component placement and access. It does not establish measured dimensions, recovery speed or durability.',
        width: 640, height: 700,
      },
    ],
  ),
  '/espresso-machine/krups-intuition-preference-ea875u40/': officialProductMedia(
    'Krups UK EA875U40 official gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/INTUITION-PREFERENCE%2B-Bean-to-Cup-Coffee-Machine---Dark-Grey/p/8010001185',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxMzMxNDF8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzNaQzlvTkdJdk1qWTRPRGMxTURFNU16ZzNNVGd8ZjU5ZjlmMGMzMmU3ZTIyNmQwNTgxMDAxNDg2NGI1MzQ3NmIyYjhmNTAxN2I0ZjM5NTU1MjQyNjQ1YTg4MmMxOA',
        alt: 'Krups UK EA875U40 angled view with external milk vessel and two layered milk drinks',
        caption: 'Official gallery image shows the milk tube, vessel and paired outlets; pictured foam and drink layers are promotional, not Coffeedant test results.',
        width: 700, height: 560,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wzMzE2NzZ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3hNeTlvTmpZdk1qWTRPRGMxTVRFd09EQTVPVEF8ZWQ2NTdlYjlkYzA2ZGJjM2U5MzQ5YzhlMTJjNjIzNzg3M2QzYjBjYWM5ZjdjMzk0ZjUzYjVlMThmYzczNDQ1MQ',
        alt: 'Krups UK EA875U40 promotional menu image with black, milk and tea drinks',
        caption: 'Manufacturer artwork illustrates the 15-drink range; it does not establish independent taste, temperature or serving-time measurements.',
        width: 700, height: 700,
      },
    ],
  ),
  '/espresso-machine/krups-intuition-experience-ea877d40/': officialProductMedia(
    'Krups UK EA877D40 official gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Intuition%C2%A0Experience%2B---Stainless-Steel/p/8010001252',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wyMzcxOTh8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3lZeTlvTVdVdk1qWTRPRGMxTURJNU1qRTNOVGd8OGJlZjAyMjdlMzEzZmU5NDJjZWMxMjVkZjFmZmFlZTcxNjA1MmQ3YTY2ZWQwYjVjNWVhYjFmNmE3OGY3MmQxYg',
        alt: 'Krups UK lifestyle photograph of Intuition Experience+ EA877D40 beside a prepared coffee',
        caption: 'Manufacturer product-gallery photograph shows placement and cup presentation; coffee outcome is promotional, not Coffeedant testing.',
        width: 700, height: 394,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxMjAyNjB8aW1hZ2UvcG5nfGFXMWhaMlZ6TDJnME1DOW9NbU12TWprM01UWXlPVFF6TXpZMU5ESXxhMzhmM2M5MGJkY2YwN2IyN2Q3MmFiZGYyMjhkZjk1ZjhmNzQ0NGFmNzM5NmVjZTZmYmJjMjlmMWY5ZjE1ZjY4',
        alt: 'Krups UK EA877D40 promotional image showing milk tube and two cups with a chilled drink',
        caption: 'Official illustration of the external milk setup and cold-menu presentation; this does not establish nitrogen hardware or measured drink temperature.',
        width: 700, height: 700,
      },
    ],
  ),
  '/espresso-machine/krups-intuition-essential-ea870840/': retailerProductMedia(
    'Currys Business exact EA870840 product gallery',
    'https://business.currys.co.uk/catalogue/domestic-appliances/small-kitchen-appliances/coffee-machines/krups-intuition-essential-ea870840-bean-to-cup-coffee-machine-black/N604144W',
    [
      {
        src: 'https://brain-images-ssl.cdn.dixons.com/3/4/10235943/l_10235943_012.jpg',
        alt: 'Currys Business EA870840 photo showing illuminated refill and care alerts, side water tank and manual steam wand',
        caption: 'Exact-model retailer image illustrates maintenance indicator positions; actual alert behaviour was not Coffeedant tested.',
        width: 600, height: 532,
      },
      {
        src: 'https://brain-images-ssl.cdn.dixons.com/3/4/10235943/l_10235943_013.jpg',
        alt: 'Currys Business EA870840 touch control panel with ristretto, espresso, long coffee, water and steam icons',
        caption: 'Retailer control-panel photograph shows selection icons; interface response and coffee output were not independently measured.',
        width: 600, height: 532,
      },
    ],
  ),
  '/espresso-machine/krups-evidence-one-ea895n40/': officialProductMedia(
    'Krups UK EA895N40 official gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/EVIDENCE-One-Bean-to-Cup-Coffee-Machine---Black/p/8010001019',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxNTI4MjZ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGxPUzlvT1Rrdk1qWTRPRGN6TVRJNE5qY3pOVGd8NGQxYjBmM2Y5MzMzYjAzNzE1YmIxMjM3OWZjZDlmZGU5MzQ2NjMwODY2YTliNWIxODdjNzExMGNmNzdjYjUwMQ',
        alt: 'Krups UK gallery angled view of the EA895N40 grey machine, dual spout and coloured touch panel',
        caption: 'Official EA895N40 gallery shows the outlet and panel. No Coffeedant tasting or dimension measurement is represented.',
        width: 645, height: 700,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w2NDQ1MXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnd015OW9OV0l2TWprMU5ETXpNRFF4TXpRMk9EWXxjYmQ2NjgxYWRhZGNhYjcwYTVkNjZjZWE2NWZmYjcyYmJjZGIxZjUxOTNiMmE3NGE2MzQ0YzQ5YWI1NjAwZGY5',
        alt: 'Krups UK Evidence One EA895N40 promotional photograph with two milk drinks and milk tube',
        caption: 'Manufacturer illustration of two milk drinks and the external hose; results pictured are promotional, not independently measured.',
        width: 700, height: 700,
      },
    ],
  ),
  '/espresso-machine/krups-evidence-milk-ea891d27/': retailerProductMedia(
    'Amazon UK EA891D27 product listing',
    'https://www.amazon.co.uk/Krups-EA891D27-Evidence-Automatic-Espresso/dp/B083PJNPFQ',
    [
      {
        src: 'https://m.media-amazon.com/images/I/61BDTBa1mpL._AC_SL1500_.jpg',
        alt: 'Retailer product image of EA891D27 front, OLED panel, milk vessel and width and height callouts',
        caption: 'The EA891D27 retailer listing illustrates the milk vessel and touch panel. Printed dimensions are retailer artwork, not independently measured.',
        width: 1272, height: 1500,
      },
      {
        src: 'https://m.media-amazon.com/images/I/61WDVPmmXKL._AC_SL1500_.jpg',
        alt: 'Retailer close-up of Krups Evidence Milk touch panel and drink-selection icons',
        caption: 'A close-up from the exact-model retailer listing shows the menu and OLED controls. The image is not a Coffeedant test photograph.',
        width: 1500, height: 1500,
      },
    ],
  ),
  '/espresso-machine/krups-evidence-eco-design-ea897b40/': officialProductMedia(
    'Krups UK EA897B40 product gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/EVIDENCE-ECO-DESIGN---Black/p/8010001175',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w0MTg5MDl8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGhOeTlvWldRdk1qWTRPRGMxTVRjME1EVXlNVFF8M2E4N2YzMGU5MzI0OGMxMDE3NjAxM2FjYWUxMDhkYjc4OTg2MTY1NWJmNDIzNmIwOGZmYWVjZTRlZWFkNTcxOA',
        alt: 'Krups manufacturer lifestyle photograph of the Evidence Eco-Design EA897B40',
        caption: 'The official EA897B40 gallery illustrates the machine in use; this is manufacturer media and not Coffeedant testing.',
        width: 700, height: 700,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w1NDI3NnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJneU9TOW9OMlV2TWprMU5ETXpNamN3TURZM05UQXwzODMzOTI4MDcwNzVmMmNkNjlhMTY5M2Y0NmMwMGVhOWI0ZDJiMjAxMDFlNjRhZDEyZmQ4YWE3OWZlZWI5MjVm',
        alt: 'Second official Krups EA897B40 product lifestyle photograph',
        caption: 'Manufacturer gallery image of the UK article; environmental percentages and milk performance are assessed from documentation and attributed independent evaluation.',
        width: 700, height: 700,
      },
    ],
  ),
  '/espresso-machine/krups-arabica-manual-ea811040-ea811840/': officialProductMedia(
    'Krups UK black EA811040 product gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Arabica-Manual-EA811040-Espresso-Bean-to-Cup-Coffee-Machine-Black/p/8010000003',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wxOTE5NzJ8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzJZUzlvTXpBdk1qWTRPRGN4TWpBeU5UY3dOVFF8YTBjMzE1ZDlkYTVlOGY2YTUxN2NjNTA1OTdhOWMzZTU3ODhjMDQ0YjIwMzZjNzBhZjU0ZWQ2ZGY0OWQzYmZiMg',
        alt: 'Manufacturer view of black Krups EA811040 Arabica Manual housing and front controls',
        caption: 'Official black EA811040 product image helps locate its physical coffee buttons and rotary dial; this is not a Coffeedant test photograph.',
        width: 566, height: 700,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3wyNjQ3Mjd8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3dZaTlvTTJVdk1qWTRPRGN4TWpBMk5UQXlOekF8ZmE1ODNlMTE4ODg4MTIyMjkzOTc5MWEwOTViNGQ5MzU3ODNmMjUwMTk4MjU3NDc4ZThkZjU3MDg0MTg0YjEwYw',
        alt: 'Krups manufacturer gallery image showing the black EA811040 control and steam layout',
        caption: 'The UK manufacturer gallery illustrates the manual milk and button-led coffee workflow; recipes and results have not been measured by Coffeedant.',
        width: 700, height: 700,
      },
    ],
  ),
  '/espresso-machine/krups-arabica-digital-ea817040/': officialProductMedia(
    'Krups UK EA817040 product gallery',
    'https://www.krups.co.uk/ESPRESSO-MACHINES/BEAN-TO-CUP-MACHINES/Arabica-Digital-Bean-to-Cup-Coffee-Machine---Black/p/8010000001',
    [
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w2NzIwMXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnek1DOW9Nak12TWprMU5ETXlPVEF4TkRJM05UQXw1N2Q5NTIwYzJkY2NlM2Q5NjZmYzJhNTAwY2U2MjNjMGMyMWQ2ZWU5ZDI4MWM4NWZkNTI2NTAwNWEwYmFjNWI4',
        alt: 'Krups EA817040 in a manufacturer lifestyle image with its LCD and cups',
        caption: 'Krups marketing image illustrates the compact black machine and controls. Drinks pictured are not a Coffeedant tasting result; milk still requires a manual step.',
        width: 700, height: 700,
      },
      {
        src: 'https://www.krups.co.uk/medias/?context=bWFzdGVyfGltYWdlc3w0MzUxNXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnNE1TOW9abVl2TWprM01UWXlPVFl6TURJMk1qSXxlYmNhNDY5ZWIxNmE0M2E0ZDUzOTdhN2YyYzZkMzQ3OWJmNjJiZGUzNjFmZjdkZGE2ZWYyYjg1MmUwODdjZWY0',
        alt: 'Close-up of the manual steam nozzle on the black Krups Arabica Digital',
        caption: 'The manufacturer gallery shows the traditional steam nozzle. It is not a one-touch milk carafe and requires purging and cleaning after use.',
        width: 700, height: 700,
      },
    ],
  ),
  '/coffee-machine/k-duo-plus/': [
    ...retailerProductMedia(
      'Walmart K-Duo Plus product page',
      'https://www.walmart.com/ip/Keurig-K-Duo-Plus-Single-Serve-Carafe-Coffee-Maker/629084823',
      [{
        src: 'https://i5.walmartimages.com/asr/6898a910-fe19-4671-8724-dede84ddd375.cef13c0c0ee359a8851e4d1dedb36eb0.jpeg',
        alt: 'Keurig K-Duo Plus product image showing reservoir placement and brewer dimensions',
        caption: 'The product-listing diagram helps explain the movable tank and narrow body; measure the full footprint in the chosen position.',
        width: 2200, height: 2200,
      }],
    ),
    ...retailerProductMedia(
      'Best Buy K-Duo Plus model 5000204978 product gallery',
      'https://www.bestbuy.com/product/keurig-k-duo-plus-12-cup-coffee-maker-and-single-serve-k-cup-brewer-black/JX72HWGGTZ',
      [{
        src: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355732cv11d.jpg',
        alt: 'Keurig K-Duo Plus thermal-carafe brewer in a product-gallery view',
        caption: 'Retailer product media shows the Plus form factor and carafe rather than a Coffeedant test setup; the listing was sold out when checked.',
        width: 3000, height: 5067,
      }],
    ),
  ],
  '/espresso-machine/gaggia-velasca-ri8260-3/': officialProductMedia(
    'Gaggia North America Velasca product page',
    'https://www.gaggia-na.com/products/gaggia-velasca',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/Pannarello_IMG_0130_01_b6b805fb-4682-4b9f-b6c3-60831f4ee2e3_800x.jpg?v=1571332460',
        alt: 'Gaggia Velasca pannarello steam and hot-water attachment',
        caption: 'The pannarello confirms that milk is a separate manual step on the current North American Velasca, not the automatic carafe workflow of Velasca Prestige.',
        width: 800,
        height: 533,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/FrontLoadingDrawers_IMG_0088_01_467d21af-f9ec-47d4-97b6-aff3510e25cc_800x.jpg?v=1571332570',
        alt: 'Gaggia Velasca front-removable water tank and service drawers',
        caption: 'Front access to water, grounds and the brew group reduces under-cabinet disruption, though the bean hopper still needs space above.',
        width: 800,
        height: 533,
      },
    ],
  ),
  '/espresso-machine/jura-e6/': officialProductMedia(
    'JURA E6 product page',
    'https://us.jura.com/en/homeproducts/machines/e6-dark-inox-nac-15621',
    [
      {
        src: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fhero%2Fimg%2FE6_ec_darkinox_hero.jpg%3Fcb%3D788857&w=3840&q=75',
        alt: 'JURA E6 Dark Inox automatic coffee machine serving coffee',
        caption: 'Official family media shows the E6 scale and front service area; specifications and article identity are anchored to current NAC 15621 documentation.',
        width: 2560,
        height: 1097,
      },
      {
        src: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fe-linie-2022%2Fe6%2Fe6-dark-inox-ec-15439%2Fimage-gallery%2Fe6_ec_darkinox_image2.jpg%3Fcb%3D280650&w=1920&q=75',
        alt: 'JURA E6 Dark Inox in a home coffee setting',
        caption: 'The lifestyle view helps judge cup access and counter depth. The media path retains an EC code, so no NAC specification is inferred from the photograph.',
        width: 1620,
        height: 1080,
      },
    ],
  ),
  '/espresso-machine/jura-e8/': officialProductMedia(
    'JURA E8 fifth-generation product page',
    'https://us.jura.com/en/homeproducts/machines/e8-midnight-silver-nad-15722',
    [
      {
        src: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fcorporate%2Fcompany-and-press%2Fjura-and-roger-federer%2Fcampaign-25%2FRF-Kamp25_Thumbnail_YouTube_E8_Playbutton_1280x720px.jpg%3Fcb%3D468964&w=1920&q=75',
        alt: 'JURA E8 fifth-generation campaign image in a home setting',
        caption: 'Official campaign media provides scale for the fifth-generation E8; it is illustrative rather than evidence of Coffeedant testing.',
        width: 1280,
        height: 720,
      },
      {
        src: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fe-line-2025%2Fe8-ed-midnight-silver%2Fimage-gallery%2FWebsite_Youtube_Thumbnail_E8_ED_1280x720px.jpg%3Fcb%3D366537&w=1920&q=75',
        alt: 'JURA E8 fifth-generation display and coffee outlet',
        caption: 'The official family workflow image shows the current control and dispensing layout. NAD identity and specifications come from article 15722 documentation.',
        width: 1280,
        height: 720,
      },
    ],
  ),
  '/espresso-machine/jura-giga-6/': officialProductMedia(
    'JURA GIGA 6 official product page',
    'https://uk.jura.com/en/homeproducts/automatic-coffee-machines/giga-6-aluminium-ea-15394',
    [
      {
        src: 'https://uk.jura.com/_next/image?q=75&url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fgiga-line%2Fgiga-6%2FGIGA-6-US%2Ffeatures%2Fgiga6_alu_us_feature_1.jpg%3Fcb%3D149399&w=1920',
        alt: 'JURA GIGA 6 dual automatic coffee workflow',
        caption: 'Official US-family feature media illustrates the dual-system workflow. The review keeps US NAA refurb and UK EA specifications separate.',
        width: 1620,
        height: 1080,
      },
      {
        src: 'https://uk.jura.com/_next/image?q=75&url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fgiga-line%2Fgiga-6%2FGIGA-6-US%2Ffeatures%2Fgiga6_alu_us_feature_2.jpg%3Fcb%3D200797&w=1920',
        alt: 'JURA GIGA 6 touchscreen and dual grinder controls',
        caption: 'The feature view supports evaluation of the 4.3-inch interface and two-bean proposition, not a claim of hands-on Coffeedant use.',
        width: 1620,
        height: 1080,
      },
    ],
  ),
  '/espresso-machine/jura-z10/': officialProductMedia(
    'JURA Z10 second-generation product page',
    'https://us.jura.com/en/homeproducts/machines/z10-aluminium-black-nab-15702',
    [
      {
        src: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fcorporate%2Fcompany-and-press%2Fjura-and-roger-federer%2Fcampaign-25%2FRF-Kamp25_Thumbnail_YouTube_Z10_Playbutton_1280x720px.jpg%3Fcb%3D525629&w=1920&q=75',
        alt: 'Second-generation JURA Z10 official campaign image',
        caption: 'Official campaign media gives lifestyle scale for the current Z10. It is not presented as Coffeedant testing or drink-quality proof.',
        width: 1280,
        height: 720,
      },
      {
        src: 'https://us.jura.com/_next/image?url=https%3A%2F%2Fapi.jura.com%2Fmedia%2Fglobal%2Fimages%2Fhome-products%2Fz-line-2025%2FZ10-EB-SB%2FZ10-EB-SB-Aluminium-Black%2FZ10_eb_sb_ab_yt_play.jpg%3Fcb%3D455409&w=640&q=75',
        alt: 'JURA Z10 Aluminium Black official workflow image',
        caption: 'The official workflow image supports assessment of the current touchscreen and drink platform; exact claims remain tied to NAB article 15702 sources.',
        width: 640,
        height: 360,
      },
    ],
  ),
  '/espresso-machine/bezzera-strega/': officialProductMedia(
    'Bezzera product page',
    'https://www.bezzera.it/en/machines/strega',
    [
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Strega/STREGA%20NEW%20GRID.jpg',
        alt: 'Bezzera Strega spring-lever espresso machine viewed from the front-left',
        caption: 'The angled view shows the tall spring lever, exposed group, pressure gauges, service valves, drip tray and working clearance that define the Strega station.',
        width: 1600,
        height: 1200,
      },
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Strega/STREGA%20RETRO.jpg',
        alt: 'Rear of the Bezzera Strega spring-lever espresso machine',
        caption: 'The rear view helps judge cabinet depth and the substantial enclosure around the boiler, pump or direct-water hardware, depending on variant.',
        width: 1600,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/bezzera-unica-pid/': officialProductMedia(
    'Bezzera product page',
    'https://www.bezzera.it/en/machines/unica',
    [
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Unica/UNICA%20NEW%20GRID.jpg',
        alt: 'Bezzera Unica PID espresso machine viewed from the front-left',
        caption: 'The working view shows the manual thermosyphon group, PID display, pressure gauge, shared steam and hot-water wand, and narrow stainless body.',
        width: 1600,
        height: 1200,
      },
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Unica/unica.jpg',
        alt: 'Bezzera Unica PID single-boiler espresso machine on a white background',
        caption: 'The full product view makes the compact 250 mm width and deeper traditional group layout easier to evaluate for an under-cabinet counter.',
        width: 1600,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/bosch-300-series-verocafe-tiu20307/': officialProductMedia(
    'Bosch US product page',
    'https://www.bosch-home.com/us/en/product/espresso-machines/countertop-fully-automatic-coffee-machines/300seriesverocafe/TIU20307',
    [
      {
        src: 'https://media3.bsh-group.com/Product_Shots/21861538_BSH-EN_BO_FAEM_812_TIE20301_General_SecImg-08_3200x1800px_def.webp',
        alt: 'Bosch 300 Series VeroCafe preparing a milk drink with the in-cup Milk Express system',
        caption: 'Official family media shows the defining Milk Express routine: milk is handled at the cup rather than stored in a large dedicated carafe.',
        width: 3200,
        height: 1800,
      },
      {
        src: 'https://media3.bsh-group.com/Product_Shots/21861516_BSH-EN_BO_FAEM_812_TIE20301_General_SecImg-03_3200x1800px_def.webp',
        alt: 'Bosch 300 Series VeroCafe front controls and coffee outlet in a kitchen setting',
        caption: 'The front working view shows the direct drink controls, height-adjustable outlet and compact one-cup service area.',
        width: 3200,
        height: 1800,
      },
    ],
  ),
  '/espresso-machine/bosch-500-series-verocafe-tpu40109/': officialProductMedia(
    'Bosch US product page',
    'https://www.bosch-home.com/us/en/product/espresso-machines/countertop-fully-automatic-coffee-machines/500seriesverocafe/TPU40109',
    [
      {
        src: 'https://media3.bsh-group.com/Product_Shots/25825723_BSH-EN_BO_FAEM_812_TPU40109_General_SecImg-10_plain_3200x1800px_def.webp',
        alt: 'Bosch 500 Series VeroCafe making two milk drinks side by side',
        caption: 'Official media illustrates the 500 Series two-cup milk proposition and the cup clearance buyers should check with their normal glassware.',
        width: 3200,
        height: 1800,
      },
      {
        src: 'https://media3.bsh-group.com/Product_Shots/25825725_BSH-EN_BO_FAEM_812_TPU40109_General_SecImg-11_plain_3200x1800px_def.webp',
        alt: 'Bosch 500 Series VeroCafe flexible milk hose connected to a separate container',
        caption: 'The flexible hose can draw from a separate milk container, trading a proprietary carafe for careful routing and immediate rinsing.',
        width: 3200,
        height: 1800,
      },
    ],
  ),
  '/espresso-machine/bosch-800-series/': officialProductMedia(
    'Bosch US 800 Series product page',
    'https://www.bosch-home.com/us/en/product/espresso-machines/countertop-fully-automatic-coffee-machines/800seriesverocafe/TPU60309',
    [
      {
        src: 'https://media3.bsh-group.com/Product_Shots/24461373_BSH-EN_BO_FAEM_812_TPU60501_General_SecImg-05_plain_3200x1800px_def.webp',
        alt: 'Bosch 800 Series VeroCafe color display showing a coffee selection',
        caption: 'Official 800 Series family media shows the five-inch color interface used to organize drinks and saved preferences; pictured regional hardware can vary from TPU60309.',
        width: 3200,
        height: 1800,
      },
      {
        src: 'https://media3.bsh-group.com/Product_Shots/24461305_BSH-EN_BO_FAEM_812_TPU60501_General_SecImg-02_plain_3200x1800px_def.webp',
        alt: 'Bosch 800 Series VeroCafe serving coffee in a modern kitchen',
        caption: 'The family lifestyle view gives useful scale for cup access and front operation; exact finish and regional model shown may differ from US TPU60309.',
        width: 3200,
        height: 1800,
      },
    ],
  ),
  '/espresso-machine/breville-barista-touch-impress-bes881/': officialProductMedia(
    'Breville US product page',
    'https://www.breville.com/en-us/product/bes881',
    [
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL6_USCM_NEW.png',
        alt: 'Breville Barista Touch Impress touchscreen guiding espresso preparation',
        caption: 'The touchscreen sequences grinding, assisted tamping, extraction and milk while the owner still moves the 54 mm portafilter through the station.',
        width: 1300,
        height: 1300,
      },
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL9_USCM.jpg',
        alt: 'Breville Barista Touch Impress automatic milk pitcher and steam wand',
        caption: 'Auto MilQ works with a pitcher and temperature sensor, so consistent fill, placement, wiping and purging remain part of the automated routine.',
        width: 1300,
        height: 1300,
      },
    ],
  ),
  '/espresso-machine/breville-dynamic-duo-bep920/': officialProductMedia(
    'Breville US product page',
    'https://www.breville.com/en-us/product/bep920',
    [
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BEP920/BCG820_BSS_USCM_Product_Front_View_1300x1300.png',
        alt: 'Breville Smart Grinder Pro BCG820 included in the Dynamic Duo bundle',
        caption: 'The BCG820 is a separate grinder with 60 stepped settings and timed Dosing iQ; it can be replaced independently if the owner later needs more espresso adjustment.',
        width: 1300,
        height: 1300,
      },
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BEP920/BEP920_CAROUSEL3_USC.png',
        alt: 'Breville Dynamic Duo BES920 espresso machine and BCG820 grinder together',
        caption: 'The bundle occupies a true two-appliance footprint, trading integrated compactness for a machine and grinder that can follow separate upgrade paths.',
        width: 1300,
        height: 1300,
      },
    ],
  ),
  '/coffee-machine/breville-luxe-brewer-thermal-bdc465/': officialProductMedia(
    'Breville US product page',
    'https://www.breville.com/en-us/product/bdc465',
    [
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BDC465/BDC465_CAROUSEL2.png',
        alt: 'Breville Luxe Brewer Thermal removable water tank being lifted from the brewer',
        caption: 'The removable 60-ounce tank is a practical advantage under cabinets because filling and washing do not require pouring into the installed brewer.',
        width: 1300,
        height: 1300,
      },
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BDC465/BDC465_CAROUSEL6.png',
        alt: 'Breville Luxe Brewer Thermal controls beside its insulated carafe',
        caption: 'The control panel brings Gold, custom, cold-brew and scheduled routines together while the insulated carafe holds coffee without a warming plate.',
        width: 1300,
        height: 1300,
      },
    ],
  ),
  '/espresso-machine/breville-oracle-bes980x/': officialProductMedia(
    'Breville US product page',
    'https://www.breville.com/en-us/product/bes980',
    [
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES980/BES980US-carousel2.jpg',
        alt: 'Breville Oracle BES980 automated grind dose and tamp station',
        caption: 'The original Oracle prepares a visible 58 mm portafilter automatically, then asks the owner to transfer it to the group and clear it after brewing.',
        width: 1300,
        height: 1300,
      },
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES980/BES980_DNA1_NEW.png',
        alt: 'Breville Oracle BES980 automatic milk wand texturing milk in a pitcher',
        caption: 'A dedicated steam boiler supports automatic milk during extraction, a central difference from the newer ThermoJet Oracle Jet workflow.',
        width: 1300,
        height: 1300,
      },
    ],
  ),
  '/espresso-machine/breville-oracle-jet-bes985/': officialProductMedia(
    'Breville US product page',
    'https://www.breville.com/en-us/product/bes985',
    [
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES985/BES985_CAROUSEL2_USCM.png',
        alt: 'Breville Oracle Jet touchscreen showing guided espresso preparation',
        caption: 'Barista Guidance connects the automated 58 mm preparation sequence to extraction feedback and a recommended grind adjustment.',
        width: 1300,
        height: 1300,
      },
      {
        src: 'https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES985/BES985_CAROUSEL6_USCM.png',
        alt: 'Breville Oracle Jet Auto MilQ steam wand and milk pitcher',
        caption: 'Auto MilQ repeats selected temperature and texture with supported dairy and alternative-milk modes while cleaning remains a physical task.',
        width: 1300,
        height: 1300,
      },
    ],
  ),
  '/espresso-machine/cafelat-robot-barista/': officialProductMedia(
    'Cafelat UK product page',
    'https://www.cafelat.co.uk/products/cafelat-robot-barista',
    [
      {
        src: 'https://www.cafelat.co.uk/cdn/shop/products/BaristaBlack.jpg?v=1628670910&width=1200',
        alt: 'Black Cafelat Robot Barista with both lever arms raised beside its pressure gauge',
        caption: 'The raised-arm view makes the working height, two-handed pressure routine, gauge position, open cup area and small mechanical body easy to judge.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.cafelat.co.uk/cdn/shop/files/BaristaOrange.jpg?v=1688989847&width=1200',
        alt: 'Orange Cafelat Robot Barista manual lever espresso maker viewed from the front',
        caption: 'The front view shows how the bottomless portafilter, piston, gauge and two arms form the complete brewer while grinder, kettle and milk equipment remain separate.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/crem-one-hx-pid-wt-wc/': [
    ...retailerProductMedia(
      'Whole Latte Love product page',
      'https://www.wholelattelove.com/products/crem-one-hx-espresso-machine',
      [
        {
          src: 'https://www.wholelattelove.com/cdn/shop/products/CremOneHX-Alt.jpg?v=1615476140&width=1946',
          alt: 'CREM ONE HX PID espresso machine viewed from the front-left',
          caption: 'The exact 1B HX view shows the E61 group, PID display, dual gauge, half-turn valves and narrow stainless chassis reviewed on this page.',
          width: 1946,
          height: 1946,
        },
      ],
    ),
    ...officialProductMedia(
      'CREM ONE product page',
      'https://www.crem.coffee/products/one/',
      [
        {
          src: 'https://www.crem.coffee/getmedia/58d1bd5c-4b40-46c7-8488-4e22dfb9b021/ONE_LargeBanner.png',
          alt: 'CREM ONE espresso machine family shown in a manufacturer banner',
          caption: 'Official family media gives useful scale for the group, cup tray and working controls. The pictured ONE configuration may differ, so 2B or Profiler hardware is not assigned to the reviewed 1B.',
          width: 1920,
          height: 1080,
        },
      ],
    ),
  ],
  '/espresso-machine/dalla-corte-mina/': officialProductMedia(
    'Dalla Corte Mina Barista product page',
    'https://www.dallacorte.com/professional-espresso-machines/mina-barista.html',
    [
      {
        src: 'https://www.dallacorte.com/img/prodotti/mina-barista/slider/white_1.jpg',
        alt: 'White Dalla Corte Mina Barista espresso machine viewed from the front',
        caption: 'The current Mina Barista evolution retains the compact square format and side flow lever. Exact group, software and options on an original Mina still require generation-specific verification.',
        width: 1600,
        height: 1200,
      },
      {
        src: 'https://www.dallacorte.com/img/prodotti/mina-barista/slider/white_2.jpg',
        alt: 'White Dalla Corte Mina Barista espresso machine viewed from an angle',
        caption: 'The angled view shows the short commercial body, manual steam wand, hot-water outlet, flow-control lever and clearance needed around a permanently plumbed station.',
        width: 1600,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/delonghi-dinamica-aroma-bar-ecam359-37-tb/': [
    ...retailerProductMedia(
      'Galaxus ECAM359.37.TB product listing',
      'https://www.galaxus.at/en/s2/product/delonghi-dinamica-aroma-bar-automatic-coffee-makers-16224962',
      [
        {
          src: 'https://static01.galaxus.com/productimages/2/5/3/6/6/6/6/1/6/3/9/1/1/5/6/4/7/6/7/0af8fe63-a753-4a43-a0af-45eaee2d2a11_cropped.jpg_720.jpeg',
          alt: "De'Longhi Dinamica Aroma Bar ECAM359.37.TB front view with manual frother",
          caption: 'The exact retailer image shows the screen, direct drink controls, dual coffee outlet and adjustable manual frother that distinguish ECAM359.37.TB from LatteCrema variants.',
          width: 720,
          height: 720,
        },
      ],
    ),
    ...officialProductMedia(
      "De'Longhi ECAM359.37.TB product page",
      'https://www.delonghi.com/en/p/dinamica-ecam359.37.tb-dinamica-aroma-bar-automatic-coffee-maker/ECAM359.37.TB.html?pid=0132220038',
      [
        {
          src: 'https://dam.delonghi.com/902x902/assets/128766',
          alt: "De'Longhi ECAM359.37.TB automatic coffee machine on a white background",
          caption: 'The official exact-model image gives a clean view of the narrow front-access body. Milk remains a manual wand task on this suffix.',
          width: 902,
          height: 902,
        },
      ],
    ),
  ],
  '/espresso-machine/delonghi-dinamica-plus-ecam370/': [
    ...retailerProductMedia(
      'Jomla ECAM370.95.T product listing',
      'https://jomla.ae/product/dinamica-plus-coffee-machine-ecam370-95-t-delonghi/',
      [
        {
          src: 'https://jomla.ae/_next/image/?q=85&url=https%3A%2F%2Fwp.jomla.ae%2Fwp-content%2Fuploads%2F2021%2F10%2FN43302121A_2.jpg&w=640',
          alt: "De'Longhi Dinamica Plus ECAM370.95.T with LatteCrema milk carafe attached",
          caption: 'The product view shows the older ECAM370 touch interface and attached LatteCrema carafe that define its one-touch milk workflow.',
          width: 640,
          height: 640,
        },
      ],
    ),
    ...officialProductMedia(
      "De'Longhi ECAM370.95.T product page",
      'https://www.delonghi.com/en/p/dinamica-plus-ecam370.95.t-dinamica-plus-automatic-coffee-maker/ECAM370.95.T.html',
      [
        {
          src: 'https://dam.delonghi.com/902x902/assets/118864',
          alt: "De'Longhi Dinamica Plus ECAM370.95.T automatic coffee machine on a white background",
          caption: 'The official product view gives scale for the touch interface, cup access, carafe position and narrow Dinamica body.',
          width: 902,
          height: 902,
        },
      ],
    ),
  ],
  '/espresso-machine/delonghi-dinamica-plus-ecam38085sb/': officialProductMedia(
    "De'Longhi ECAM380.85.SB product page",
    'https://www.delonghi.com/en/p/dinamica-plus-dinamica-plus-automatic-coffee-maker-ecam380.85.sb/ECAM380.85.SB.html?pid=0132215485',
    [
      {
        src: 'https://dam.delonghi.com/902x902/assets/287564',
        alt: "De'Longhi Dinamica Plus ECAM380.85.SB with LatteCrema Hot carafe",
        caption: 'Official media shows the LatteCrema Hot carafe attached beside the dual coffee outlet, which is the central convenience and cleaning commitment of the machine.',
        width: 902,
        height: 902,
      },
      {
        src: 'https://dam.delonghi.com/902x902/assets/267440',
        alt: "Front view of the De'Longhi Dinamica Plus ECAM380.85.SB touchscreen coffee machine",
        caption: 'The front view shows the 3.5-inch full-touch interface and compact drink area used to navigate the documented 24 recipes.',
        width: 902,
        height: 902,
      },
    ],
  ),
  '/espresso-machine/delonghi-ecp3420/': [
    ...retailerProductMedia(
      'Amazon US ECP3420 product listing',
      'https://www.amazon.com/dp/B00YCP71VK',
      [
        {
          src: 'https://m.media-amazon.com/images/I/81PIdrvNi9L._AC_SL1500_.jpg',
          alt: "De'Longhi ECP3420 entry-level espresso machine with pressurized portafilter",
          caption: 'The full product view shows the compact group, manual frother, rear-tank body and small work area that frame the ECP3420 routine.',
          width: 1500,
          height: 1500,
        },
      ],
    ),
    ...officialProductMedia(
      "De'Longhi ECP3420 support page",
      'https://www.delonghi.com/en-us/s/ECP3420',
      [
        {
          src: 'https://dam.delonghi.com/902x902/assets/223708',
          alt: "Front view of the De'Longhi ECP3420 espresso and cappuccino machine",
          caption: 'Official exact-model media shows the simple selector, dual drip-tray arrangement and manual Advanced Cappuccino frother without implying PID or automatic control.',
          width: 902,
          height: 902,
        },
      ],
    ),
  ],
  '/espresso-machine/delonghi-la-specialista-prestigio/': officialProductMedia(
    "De'Longhi EC9355.M product page",
    'https://www.delonghi.com/en/p/la-specialista-prestigio-ec9355.m-la-specialista-prestigio-manual-espresso-maker/EC9355.M.html?pid=0132126017',
    [
      {
        src: 'https://dam.delonghi.com/902x902/assets/214729',
        alt: "De'Longhi La Specialista Prestigio EC9355.M dosing and tamping station",
        caption: 'The official detail view shows how the portafilter sits under the integrated grinder and Smart Tamping lever before the owner transfers it to the group.',
        width: 902,
        height: 902,
      },
      {
        src: 'https://dam.delonghi.com/902x902/assets/203978',
        alt: "De'Longhi La Specialista Prestigio EC9355.M manual MyLatte Art steam wand",
        caption: 'The milk-side view makes clear that Prestigio assists coffee preparation but leaves pitcher position, air, circulation and stopping to the user.',
        width: 902,
        height: 902,
      },
    ],
  ),
  '/espresso-machine/delonghi-magnifica-esam3000/': [
    ...retailerProductMedia(
      'eMAG ESAM3000.B product listing',
      'https://www.emag.ro/espressor-automat-de-longhi-magnifica-esam-3000-b-sistem-manual-de-spumare-rasnita-cu-13-setari-1450w-15-bar-1-8-l-negru-esam3000b/pd/EWFKDBBBM/',
      [
        {
          src: 'https://s13emagst.akamaized.net/products/47/46263/images/res_8d4afb8acd63ef89fc308eec8ce60f46.jpg?hash=C13014935E9F0783A8CF134CA636F68F&height=720&width=720',
          alt: "Black De'Longhi Magnifica ESAM3000.B automatic coffee machine viewed from the front",
          caption: 'The exact-machine review image shows the physical buttons, two rotary dials, dual outlet and manual frother that make the old ESAM workflow unusually direct.',
          width: 720,
          height: 720,
        },
      ],
    ),
    ...officialProductMedia(
      "De'Longhi ESAM3000.B product page",
      'https://www.delonghi.com/en/p/magnifica-esam3000.b-magnifica-bean-to-cup-coffee-machines/ESAM3000.B.html?pid=0132212125',
      [
        {
          src: 'https://dam.delonghi.com/902x902/assets/118829',
          alt: "De'Longhi Magnifica ESAM3000.B legacy bean-to-cup machine on a white background",
          caption: 'The official image gives a second view of the front-access tank, waste drawer and compact legacy body. Condition must still be judged on the individual used unit.',
          width: 902,
          height: 902,
        },
      ],
    ),
  ],
  '/espresso-machine/delonghi-magnifica-evo-next/': officialProductMedia(
    "De'Longhi ECAM310.80.SB product page",
    'https://www.delonghi.com/en/p/magnifica-evo-next-magnifica-evo-next-automatic-coffee-maker-ecam310.80.sb/ECAM310.80.SB.html?pid=0132250041',
    [
      {
        src: 'https://dam.delonghi.com/902x902/assets/294624',
        alt: "De'Longhi Magnifica Evo Next ECAM310.80.SB with LatteCrema Hot carafe",
        caption: 'Official media shows the exact ECAM310.80.SB milk configuration, compact TFT control area and attached LatteCrema Hot carafe.',
        width: 902,
        height: 902,
      },
      {
        src: 'https://dam.delonghi.com/902x902/assets/294655',
        alt: "Front view of the De'Longhi Magnifica Evo Next ECAM310.80.SB",
        caption: 'The front view shows the eight soft-touch controls and 2.4-inch TFT used for the documented 13-drink menu; other ECAM310 suffixes can differ.',
        width: 902,
        height: 902,
      },
    ],
  ),
  '/espresso-machine/delonghi-magnifica-plus/': officialProductMedia(
    "De'Longhi ECAM320.70.SB product page",
    'https://www.delonghi.com/en-au/p/magnifica-plus-magnifica-plus-automatic-coffee-machine-ecam320.70.sb/ECAM320.70.SB.html?pid=0132250036',
    [
      {
        src: 'https://dam.delonghi.com/902x902/assets/287244',
        alt: "De'Longhi Magnifica Plus ECAM320.70.SB touchscreen with personalized drink menu",
        caption: 'The 3.5-inch full-touch display organizes 18 hot recipes and four profiles, the features that most clearly separate this model from simpler Magnifica machines.',
        width: 902,
        height: 902,
      },
      {
        src: 'https://dam.delonghi.com/902x902/assets/276466',
        alt: "De'Longhi Magnifica Plus LatteCrema Hot milk carafe attached to the machine",
        caption: 'The removable LatteCrema Hot carafe automates milk delivery, but its lid, tube, selector and outlet remain part of the cleaning routine.',
        width: 902,
        height: 902,
      },
    ],
  ),
  '/espresso-machine/delonghi-magnifica-start/': officialProductMedia(
    "De'Longhi Philippines ECAM220.22.GB product page",
    'https://delonghi.ph/products/delonghi-automatic-coffee-machine-magnifica-start-ecam220-22-gb',
    [
      {
        src: 'https://delonghi.ph/cdn/shop/files/1_487e0740-9fcd-40f9-b181-b4262b63d5b0.png?v=1741248694&width=1946',
        alt: "De'Longhi Magnifica Start ECAM220.22.GB soft-touch coffee controls",
        caption: 'The direct panel keeps espresso, coffee, Americano and steam close at hand without a screen or user-profile system.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://delonghi.ph/cdn/shop/files/2_83fdaa0b-1db7-465c-8626-08ad87c8ee5c.png?v=1741248694&width=1946',
        alt: "De'Longhi Magnifica Start ECAM220.22.GB manual milk frother and coffee outlet",
        caption: 'ECAM220.22.GB uses a manual frother rather than the automatic carafe fitted to other Magnifica Start suffixes, so milk remains a separate hands-on step.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/delonghi-primadonna-soul-ecam610/': officialProductMedia(
    "De'Longhi ECAM610.75.MB product page",
    'https://www.delonghi.com/en-gb/p/primadonna-soul-primadonna-soul-fully-automatic-coffee-machine-ecam610.75.mb/ECAM610.75.MB.html?pid=0132217062',
    [
      {
        src: 'https://dam.delonghi.com/902x902/assets/287335',
        alt: "De'Longhi PrimaDonna Soul ECAM610.75.MB 4.3-inch touchscreen drink interface",
        caption: 'The large onboard display carries normal operation, recipes and five profiles, so the machine does not depend on a phone for daily drinks.',
        width: 902,
        height: 902,
      },
      {
        src: 'https://dam.delonghi.com/902x902/assets/202446',
        alt: "De'Longhi PrimaDonna Soul automatic coffee and LatteCrema milk workflow",
        caption: 'Official media shows the integrated milk-and-coffee proposition behind the premium price; Bean Adapt guides settings but does not remove the need to taste and adjust.',
        width: 902,
        height: 901,
      },
    ],
  ),
  '/espresso-machine/ecm-casa-v/': retailerProductMedia(
    'Atlas Power Coffee ECM Casa V listing',
    'https://www.atlaspowercoffee.co.nz/shop/brew-gear/espresso-machines/ecm-casa-v/',
    [
      {
        src: 'https://www.atlaspowercoffee.co.nz/wp-content/uploads/2021/03/casav1-Copy.jpeg',
        alt: 'ECM Casa V compact espresso machine viewed from the side with portafilter installed',
        caption: 'The side view shows how the ring group and portafilter extend beyond the narrow 210 mm body, a clearance detail the width specification alone does not capture.',
        width: 1500,
        height: 1757,
      },
      {
        src: 'https://www.atlaspowercoffee.co.nz/wp-content/uploads/2021/03/casav2-Copy.jpeg',
        alt: 'ECM Casa V steam wand, pump-pressure gauge and front controls',
        caption: 'Casa V provides a manual wand and front pump-pressure gauge, while temperature remains thermostat-controlled with no PID display.',
        width: 1500,
        height: 1618,
      },
    ],
  ),
  '/espresso-machine/ecm-classika-pid-flow-control/': officialProductMedia(
    'ECM Classika PID product page',
    'https://www.ecm.de/en/products/classika-pid/',
    [
      {
        src: 'https://www.ecm.de/wp-content/uploads/2025/05/ECM_Classika_seitlich-768x504-1.jpg',
        alt: 'ECM Classika PID single-boiler E61 espresso machine viewed from the side',
        caption: 'The side view shows the deep E61 layout, steam wand, lever and portafilter clearance inside a 250 mm-wide body.',
        width: 768,
        height: 504,
      },
      {
        src: 'https://www.ecm.de/wp-content/uploads/2025/05/ECM-Classika_PID-Galerie-04.jpg',
        alt: 'ECM Classika PID display, pressure gauge and E61 brew controls in use',
        caption: 'PID temperature and shot timing are standard; ECM flow-control hardware remains an optional accessory or retailer bundle rather than a universal inclusion.',
        width: 1400,
        height: 700,
      },
    ],
  ),
  '/espresso-machine/ecm-mechanika-slim-pid/': officialProductMedia(
    'ECM Mechanika Slim PID product page',
    'https://www.ecm.de/en/products/mechanika-slim-pid/',
    [
      {
        src: 'https://www.ecm.de/wp-content/uploads/2025/05/ECM_Mechanika_VI_Slim-PID-seitlich-768x504-1.jpg',
        alt: 'Current ECM Mechanika Slim PID heat-exchanger machine viewed from the side',
        caption: 'The side view makes the 445 mm depth, protruding E61 group, steam valve and portafilter working room easier to plan.',
        width: 768,
        height: 504,
      },
      {
        src: 'https://www.ecm.de/wp-content/uploads/2025/05/ECM_Mechanika_VI_Slim-PID-Seite-768x504-1.jpg',
        alt: 'Current ECM Mechanika Slim PID narrow polished body and cup rail',
        caption: 'At 250 mm wide, the current machine packages a 1.9 L heat exchanger, dual gauges and digital controls into a notably narrow premium chassis.',
        width: 768,
        height: 504,
      },
    ],
  ),
  '/espresso-machine/ecm-mechanika-v-slim/': retailerProductMedia(
    'Whole Latte Love refurbished Mechanika V Slim listing',
    'https://www.wholelattelove.com/products/refurbished-ecm-mechanika-v-slim-espresso-machine',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/mechanica_slim-seitl-01_mit_tassen_187d25f3-63b2-432a-a300-1f7ba0cc49d1.jpg?v=1614803442&width=1200',
        alt: 'Legacy ECM Mechanika V Slim viewed from the side with cups on the top rail',
        caption: 'The legacy V Slim shares the narrow E61 form but has no PID display, shot counter or current-generation preset controls.',
        width: 1134,
        height: 1200,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/img_0113_1_4fc67b81-1a9d-453a-b57a-752d126f9c4e.jpg?v=1614803442&width=1200',
        alt: 'Legacy ECM Mechanika V Slim E61 group, dual gauges and manual valves',
        caption: 'Dual gauges and manual valves support the classic heat-exchanger routine, while used condition and service history remain more important than polished appearance.',
        width: 1200,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/ecm-puristika/': officialProductMedia(
    'ECM Puristika product page',
    'https://www.ecm.de/en/products/puristika/',
    [
      {
        src: 'https://www.ecm.de/wp-content/uploads/2024/12/ECM_Puristika_seitlich-links-768x504-1.jpg',
        alt: 'ECM Puristika espresso-only machine and separate glass water tank viewed from the left',
        caption: 'The movable 2 L glass reservoir needs its own safe counter position, so the complete station is wider than the 195 mm machine body.',
        width: 768,
        height: 504,
      },
      {
        src: 'https://www.ecm.de/wp-content/uploads/2024/12/ECM_Puristika_Wasserauffangschale_offen-768x504-1.jpg',
        alt: 'ECM Puristika with its compact drip tray opened',
        caption: 'The compact tray reinforces the one-shot espresso focus and needs regular emptying as group flushing and backflushing add water.',
        width: 768,
        height: 504,
      },
    ],
  ),
  '/espresso-machine/ecm-synchronika/': officialProductMedia(
    'ECM Synchronika II product page',
    'https://www.ecm.de/en/products/synchronika-ii/',
    [
      {
        src: 'https://www.ecm.de/wp-content/uploads/2025/04/ECM_Synchronika_II-seitlich-768x504-1.jpg',
        alt: 'ECM Synchronika II dual-boiler espresso machine viewed from the side',
        caption: 'The side view shows the substantial 490 mm depth, E61-style group, joystick valves and portafilter clearance that must fit the complete station.',
        width: 768,
        height: 504,
      },
      {
        src: 'https://www.ecm.de/wp-content/uploads/2025/04/ECM_Synchronika_II-Innenleben-seitlich-768x504-1.jpg',
        alt: 'Internal side view of the ECM Synchronika II boilers, rotary pump and frame',
        caption: 'Official internal imagery shows the separate stainless brew and steam boilers, rotary pump and tightly organized service hardware behind the 30 kg chassis.',
        width: 768,
        height: 504,
      },
    ],
  ),
  '/espresso-machine/ecm-technika-v-profi-pid/': retailerProductMedia(
    'Coffee Machine Warehouse Technika V Pro PID listing',
    'https://www.coffeemachinewarehouse.co.za/shop/brands/ecm/ecm-technika-v-pro-pid-1-group-stainless-steel/',
    [
      {
        src: 'https://www.coffeemachinewarehouse.co.za/wp-content/uploads/2022/02/Technika-Seite_03.png',
        alt: 'ECM Technika V Profi PID heat-exchanger machine viewed from the side',
        caption: 'The side view shows the full E61 depth, manual service valves, portafilter working area and large premium chassis.',
        width: 4375,
        height: 3087,
      },
      {
        src: 'https://www.coffeemachinewarehouse.co.za/wp-content/uploads/2022/02/Technika-top.png',
        alt: 'Top and rear view of the ECM Technika V Profi PID espresso machine',
        caption: 'The upper view helps plan reservoir access when the machine is not plumbed in; the Profi configuration can also use a properly installed direct-water supply.',
        width: 4775,
        height: 3102,
      },
    ],
  ),
  '/grinder/1zpresso-k-ultra/': officialProductMedia(
    '1Zpresso product page',
    'https://1zpresso.coffee/k-ultra/',
    [
      {
        src: 'https://i0.wp.com/1zpresso.coffee/wp-content/uploads/2022/10/k-ultra-5.jpg?fit=800%2C600&ssl=1',
        alt: '1Zpresso K-Ultra hand grinder beside an illustration of its 48 mm burr',
        caption: 'The K-Ultra pairs a full-height hand-grinder body and foldable crank with a 48 mm stainless-steel burr set.',
        width: 800,
        height: 600,
      },
      {
        src: 'https://i0.wp.com/1zpresso.coffee/wp-content/uploads/2022/10/k-ultra-7.jpg?fit=800%2C600&ssl=1',
        alt: 'Hands adjusting the numbered external dial on the 1Zpresso K-Ultra grinder',
        caption: 'The numbered external adjustment ring can be reached without opening the grinder, keeping brew changes visible and repeatable.',
        width: 800,
        height: 600,
      },
    ],
  ),
  '/grinder/baratza-encore-esp/': officialProductMedia(
    'Baratza product page',
    'https://www.baratza.com/en-us/product/encoretm-esp-zcg495',
    [
      {
        src: 'https://assets.breville.com/cdn-cgi/image/format%3Dauto/ZCG495/ZCG495_Carousel1.png',
        alt: 'Black Baratza Encore ESP grinder from the front with its dosing cup installed',
        caption: 'The front view shows the compact hopper, pulse button and included dosing cup aligned beneath the grounds chute.',
        width: 2600,
        height: 2600,
      },
      {
        src: 'https://assets.breville.com/cdn-cgi/image/format%3Dauto/ZCG495/ZCG495_Carousel2.png',
        alt: 'Black Baratza Encore ESP grinder viewed from the side',
        caption: 'The side view makes the grinder depth, hopper adjustment ring and rear-mounted on-off switch easier to judge.',
        width: 2600,
        height: 2605,
      },
    ],
  ),
  '/espresso-machine/ascaso-steel-duo-pid/': officialProductMedia(
    'Ascaso USA product page',
    'https://ascaso-usa.com/products/steel-duo-pid-programmable-espresso-machine-w-volumetric-conrtroller-dual-thermoblock-120v-inox',
    [
      {
        src: 'https://ascaso-usa.com/cdn/shop/products/ascaso_usa_steel_duo_inox-2.jpg?v=1665505184&width=1445',
        alt: 'Ascaso Steel Duo PID extracting espresso into two glass cups',
        caption: 'A close working view shows the Steel Duo PID group, wood-handled portafilter, cup clearance and drip-tray surface during extraction.',
        width: 1000,
        height: 1000,
      },
      {
        src: 'https://ascaso-usa.com/cdn/shop/products/duo-inox_rside.jpg?v=1665505184&width=1445',
        alt: 'Ascaso Steel Duo PID stainless-steel body viewed from the right side',
        caption: 'The right-side view shows the steam wand, portafilter clearance, side-mounted control and visible reservoir level.',
        width: 1445,
        height: 1445,
      },
    ],
  ),
  '/espresso-machine/ascaso-steel-uno/': officialProductMedia(
    'Ascaso USA product page',
    'https://ascaso-usa.com/products/refurbished-steel-uno-pid-programmable-espresso-machine-w-volumetric-controls-single-thermoblock-120v-inox',
    [
      {
        src: 'https://ascaso-usa.com/cdn/shop/files/uno-inox-frt.jpg?v=1711739372&width=1445',
        alt: 'Stainless-steel Ascaso Steel Uno PID espresso machine from the front',
        caption: 'The front view shows the Uno PID pressure gauge, brew switches, temperature display, group and manual steam wand.',
        width: 1445,
        height: 1445,
      },
      {
        src: 'https://ascaso-usa.com/cdn/shop/files/uno-inox-xfrt.jpg?v=1711739372&width=1445',
        alt: 'Ascaso Steel Uno PID espresso machine from a front-right angle',
        caption: 'The angled view makes the Steel Uno PID working depth, side reservoir window and steam-wand position visible.',
        width: 1445,
        height: 1445,
      },
    ],
  ),
  '/espresso-machine/bezzera-bz09/': officialProductMedia(
    'Bezzera product page',
    'https://www.bezzera.it/en/machines/bz09',
    [
      {
        src: 'https://www.bezzera.it/uploads/prod_images/BZ09/01_BZ09_Fronte.jpg',
        alt: 'Bezzera BZ09 espresso machine viewed from the front-left',
        caption: 'The front view shows the compact BZ09 body, electrically heated group, pressure gauge, steam wand and cup platform.',
        width: 3543,
        height: 2657,
      },
      {
        src: 'https://www.bezzera.it/uploads/prod_images/BZ09/02_BZ09_Retro.jpg',
        alt: 'Rear of the stainless-steel Bezzera BZ09 espresso machine',
        caption: 'The rear view makes the BZ09 cabinet depth, venting and simple reservoir-machine enclosure easier to judge.',
        width: 1286,
        height: 964,
      },
    ],
  ),
  '/espresso-machine/bezzera-bz10/': officialProductMedia(
    'Bezzera product page',
    'https://www.bezzera.it/en/machines/bz10',
    [
      {
        src: 'https://www.bezzera.it/uploads/prod_images/BZ10/bz10-black-gauge-1.jpg',
        alt: 'Bezzera BZ10 heat-exchanger espresso machine viewed from the front-left',
        caption: 'The front view shows the BZ10 heated group, dual gauges, steam and hot-water controls, and the working area around the drip tray.',
        width: 9608,
        height: 8445,
      },
      {
        src: 'https://www.bezzera.it/uploads/prod_images/BZ10/02_BZ10_Retro.jpg',
        alt: 'Rear of the stainless-steel Bezzera BZ10 espresso machine',
        caption: 'The rear view clarifies the BZ10 cabinet depth and the closed stainless enclosure surrounding its heat-exchanger system.',
        width: 1146,
        height: 859,
      },
    ],
  ),
  '/espresso-machine/bezzera-bz13-pid/': retailerProductMedia(
    'Whole Latte Love product page',
    'https://www.wholelattelove.com/products/bezzera-bz13-pm',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/Bezzera_BZ13_PM_Front_Facing.jpg?v=1764083908&width=1100',
        alt: 'Stainless-steel Bezzera BZ13 PID espresso machine from the front',
        caption: 'The straight-on view shows the BZ13 heated group, brew controls, dual gauges, steam wand, hot-water outlet and PID display.',
        width: 1100,
        height: 1100,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/Bezzera_BZ13_PM_PID_Controller.jpg?v=1764083908&width=1100',
        alt: 'Close view of the Bezzera BZ13 PID temperature controller and power switch',
        caption: 'The control-panel detail makes the BZ13 temperature display and adjustment buttons visible beside the machine power switch.',
        width: 1100,
        height: 1100,
      },
    ],
  ),
  '/espresso-machine/bezzera-duo-mn/': officialProductMedia(
    'Bezzera product page',
    'https://www.bezzera.it/en/machines/duo',
    [
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Duo/02_DUO%20MN%20NEW%20GRID.jpg',
        alt: 'Stainless-steel Bezzera Duo MN dual-boiler espresso machine from the front-left',
        caption: 'The Duo MN view shows its E61 lever group, two steam and water wands, wood controls, dual gauges and touchscreen.',
        width: 2150,
        height: 1500,
      },
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Duo/duo-mn-total-black-flow-control.jpg',
        alt: 'Black Bezzera Duo MN espresso machine fitted with flow control',
        caption: 'The black-finish view highlights the Duo MN touchscreen, manual lever group and flow-control hardware above the group.',
        width: 3543,
        height: 2416,
      },
    ],
  ),
  '/espresso-machine/bezzera-hobby/': officialProductMedia(
    'Bezzera product page',
    'https://www.bezzera.it/en/machines/hobby',
    [
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Hobby01/01_hobby-acciaio.jpg',
        alt: 'Stainless-steel Bezzera Hobby single-boiler espresso machine',
        caption: 'The isolated view shows the Hobby control switches, compact single-boiler body, commercial-style group and steam wand.',
        width: 1333,
        height: 1000,
      },
      {
        src: 'https://www.bezzera.it/uploads/prod_images/Hobby01/06_hobby-acciaio-ambientata-2-1.jpg',
        alt: 'Bezzera Hobby espresso machine on a bright kitchen counter with cups',
        caption: 'The kitchen view puts the Hobby footprint, cup storage and front working clearance into everyday scale.',
        width: 1501,
        height: 1000,
      },
    ],
  ),
  '/espresso-machine/bezzera-mitica-top-pid/': retailerProductMedia(
    'Lazenska Kava product page',
    'https://eshop.lazenskakava.cz/bezzera-mitica-top-pid.html',
    [
      {
        src: 'https://cdn.lazenskakava.cz/18652-large_default/bezzera-mitica-top-pid.webp',
        alt: 'Bezzera Mitica Top PID espresso machine from the front-left',
        caption: 'The front view shows the Mitica Top PID E61 lever group, dual pressure gauges, steam and hot-water wands, and raised cup platform.',
        width: 1024,
        height: 1024,
      },
      {
        src: 'https://cdn.lazenskakava.cz/18651-large_default/bezzera-mitica-top-pid.webp',
        alt: 'Rear of the stainless-steel Bezzera Mitica Top PID espresso machine',
        caption: 'The rear view shows the Mitica Top PID cabinet depth and service-panel layout behind the polished E61-machine body.',
        width: 1024,
        height: 1024,
      },
    ],
  ),
  '/espresso-machine/flair-58/': officialProductMedia(
    'Flair 58 Plus 2 product page',
    'https://flairespresso.com/products/flair-58-plus-2',
    [
      {
        src: 'https://flairespresso.com/cdn/shop/files/Flair_58_JointHook_Lifestyle_3_shopify.jpg?crop=center&height=1200&v=1782931719&width=1200',
        alt: 'Flair 58 Plus 2 lever joint and locking hook',
        caption: 'The close view identifies the valve-plunger hook, articulated lever joint and working hardware behind the faster fixed-group workflow.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://flairespresso.com/cdn/shop/files/flair_58_plus_2_lifestyle_9_web.jpg?crop=center&height=1200&v=1776955785&width=1200',
        alt: 'Flair 58 Plus 2 brewing espresso with the heated group and 58mm portafilter',
        caption: 'The working view shows the 58mm portafilter, pressure-led lever movement, shot mirror and cup clearance in a complete countertop setup.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/flair-classic/': officialProductMedia(
    'Flair Classic product page',
    'https://flairespresso.com/products/the-flair-classic',
    [
      {
        src: 'https://flairespresso.com/cdn/shop/files/flair_classic_gauge_optimized.jpg?crop=center&height=1200&v=1778256909&width=1200',
        alt: 'Pressure gauge on the current Flair Classic during extraction',
        caption: 'The gauge view makes the owner-created pressure feedback visible while keeping the detachable 40mm brew head in context.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://flairespresso.com/cdn/shop/files/flair_classic_fcpf_woo_brew_optimized.jpg?crop=center&height=1120&v=1784821468&width=1120',
        alt: 'Flair Classic brewing through the red Flow-Control portafilter',
        caption: 'The red Flow-Control portafilter is the more forgiving current path before a buyer moves to the bottomless basket and a more precise grinder.',
        width: 1120,
        height: 1120,
      },
    ],
  ),
  '/espresso-machine/flair-neo-flex/': [
    ...retailerProductMedia(
      'Shift Coffee NEO Flex product page',
      'https://shift.cafe/products/flair-neo-flex-black-v2-espresso-maker',
      [
        {
          src: 'https://shift.cafe/cdn/shop/files/neo_flex_2024_product_shot_carrying_case_woo.png?v=1765503815&width=416',
          alt: 'Black 2024 Flair NEO Flex beside its fitted carrying case',
          caption: 'The full view identifies the current gauge, thin cylinder, polycarbonate frame and fitted storage option for this revision.',
          width: 416,
          height: 416,
        },
      ],
    ),
    ...retailerProductMedia(
      'Cafeteca NEO Flex product page',
      'https://cafeteca.ro/en/products/flair-espresso-neo-flex',
      [
        {
          src: 'https://cafeteca.ro/cdn/shop/files/flex_new_cylinder_v2_woo.jpg?crop=center&height=1200&v=1764687333&width=1200',
          alt: 'Flair NEO Flex lever being pressed during espresso extraction',
          caption: 'The working view shows hand position, frame loading, head clearance and the compact footprint during a manual pull.',
          width: 1200,
          height: 1200,
        },
      ],
    ),
  ],
  '/espresso-machine/flair-pro-2/': retailerProductMedia(
    'iDrinkCoffee and 4Barista PRO 2 product pages',
    'https://idrinkcoffee.com/products/flair-pro-2-manual-espresso-maker-black',
    [
      {
        src: 'https://cdn.shopify.com/s/files/1/1201/3604/products/PRO_2_black_hero_grey_mottled_copped_square_woo.jpg?v=1618337126',
        alt: 'Black Flair PRO 2 complete manual espresso maker',
        caption: 'The full-machine view supports a used-buyer inventory of the frame, lever, gauge, detachable head, portafilter base and tray.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.4barista.cz/image/catalog/flair-espresso/flair-pro2-white-22.jpg',
        alt: 'White Flair PRO 2 showing its detachable head, gauge and portafilter base',
        caption: 'The alternate-finish view makes the legacy PRO 2 head, gauge guard and copper-colored portafilter base easier to identify.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/gaggia-accademia-ri9781-01/': officialProductMedia(
    'Gaggia Accademia product page',
    'https://accademia.gaggia.com/italian-masterful-design/',
    [
      {
        src: 'https://accademia.gaggia.com/app/uploads/2022/10/Vetro.png',
        alt: 'Gaggia Accademia Glass with black mirror glass facade',
        caption: 'The full model view identifies the black mirror glass front that separates RI9781/01 from the stainless Accademia variant.',
        width: 1024,
        height: 1024,
      },
      {
        src: 'https://accademia.gaggia.com/app/uploads/2022/09/milk-carafe-240x240-1.jpg',
        alt: 'Integrated milk carafe for the Gaggia Accademia',
        caption: 'The carafe detail supports the one-touch milk workflow that sits alongside the separate professional steam wand.',
        width: 240,
        height: 240,
      },
    ],
  ),
  '/espresso-machine/gaggia-anima/': officialProductMedia(
    'Gaggia North America Anima product page',
    'https://www.gaggia-na.com/products/gaggia-anima',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/5922_original_anima_control_display_868_0e2b7542-f628-4d39-8554-8a6a09752285_grande.jpg?v=1571330962',
        alt: 'Gaggia Anima physical controls and blue status display',
        caption: 'The control close-up shows the direct espresso, lungo, aroma, steam, hot-water and menu workflow without a recipe touchscreen.',
        width: 600,
        height: 600,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/SquareLifestyle-1200x1200-Gaggia-Anima-r2_grande.jpg?v=1571330975',
        alt: 'Gaggia Anima on a kitchen counter beside two coffee cups',
        caption: 'The kitchen view puts the narrow body, tall cup outlet, pannarello wand and required front working space into context.',
        width: 600,
        height: 600,
      },
    ],
  ),
  '/espresso-machine/gaggia-anima-deluxe/': retailerProductMedia(
    'Whole Latte Love refurbished Anima Deluxe product page',
    'https://www.wholelattelove.com/products/refurbished-gaggia-anima-deluxe-super-automatic-espresso-machine',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/6037_original_img_9284.jpg?v=1536331814&width=1200',
        alt: 'Gaggia Anima Deluxe from the front-left with Cappuccinatore attached',
        caption: 'The angled view identifies the silver front, tall spouts and tube-fed Cappuccinatore that separate Deluxe from the pannarello and carafe versions.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/6038_original_img_9246.jpg?v=1536331814&width=1200',
        alt: 'Gaggia Anima Deluxe automatic milk frother dispensing into a cup',
        caption: 'The working view shows the separate milk tube and cup placement that make cleaning and container routing part of the daily workflow.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/gaggia-anima-prestige/': officialProductMedia(
    'Gaggia North America Anima Prestige product page',
    'https://www.gaggia-na.com/products/gaggia-anima-prestige',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/5941_original_anima_prestige_frothing_milk_877_e469703c-2695-4b48-a105-ed273f8da6b4_grande.jpg?v=1571331690',
        alt: 'Gaggia Anima Prestige dispensing frothed milk from its integrated carafe',
        caption: 'The milk-drink view shows the defining removable carafe, adjustable outlet and cup clearance in the one-touch sequence.',
        width: 600,
        height: 600,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/5937_original_anima_prestige_brew_group_img_0124_5f4a30a0-1ac5-46e7-91c5-26fb8bf3204d_grande.jpg?v=1571331690',
        alt: 'Removable brew group beside the Gaggia Anima Prestige service door',
        caption: 'The service view makes owner access to the automatic brew group visible, a benefit that still requires routine rinsing and correct reinsertion.',
        width: 600,
        height: 600,
      },
    ],
  ),
  '/espresso-machine/gaggia-babila-ri9700/': retailerProductMedia(
    'Whole Latte Love refurbished Babila product page',
    'https://www.wholelattelove.com/products/refurbished-gaggia-babila-one-touch-coffee-and-espresso-machine',
    [
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/babila_-_front.jpg?v=1680615843&width=1200',
        alt: 'Stainless Gaggia Babila RI9700 with milk carafe installed',
        caption: 'The full front view identifies the color display, integrated carafe, adjustable coffee outlet and stainless cabinet of the legacy RI9700 platform.',
        width: 1200,
        height: 1200,
      },
      {
        src: 'https://www.wholelattelove.com/cdn/shop/products/babila_-_control_panel_1.jpg?v=1536332152&width=1200',
        alt: 'Gaggia Babila color display and physical beverage controls',
        caption: 'The control-panel view shows the menu-led interface and physical drink keys that distinguish Babila from the newer Accademia touchscreen.',
        width: 1200,
        height: 1200,
      },
    ],
  ),
  '/espresso-machine/gaggia-cadorna-barista-plus-ri9603-47/': officialProductMedia(
    'Gaggia North America Cadorna Barista Plus product page',
    'https://www.gaggia-na.com/products/gaggia-cadorna-barista-plus',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/StainlessPannarello_IMG_0214_01_grande.jpg?v=1592517142',
        alt: 'Two-hole stainless steam wand on the Gaggia Cadorna Barista Plus',
        caption: 'The wand detail shows the insulated grip and two-hole tip that give Cadorna Barista Plus its manual milk-texturing role.',
        width: 600,
        height: 600,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/IntuitiveInterface_IMG_0206_01_grande.jpg?v=1592517142',
        alt: 'Full-color interface on the Gaggia Cadorna Barista Plus',
        caption: 'The interface view shows the color menu and profile-led drink selection that organize coffee before the separate manual milk step.',
        width: 600,
        height: 600,
      },
    ],
  ),
  '/espresso-machine/gaggia-cadorna-milk/': officialProductMedia(
    'Gaggia North America Cadorna Milk product page',
    'https://www.gaggia-na.com/products/gaggia-cadorna-milk',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/CappInCup_IMG_0270_01_9c8b0838-cc37-4aea-8478-31b0b7a7825e_800x.jpg?v=1592494291',
        alt: 'Capp-in-Cup milk system on the Gaggia Cadorna Milk',
        caption: 'The working view shows the external milk hose feeding automatic froth into the cup, the defining convenience and cleaning path of Cadorna Milk.',
        width: 800,
        height: 800,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/IntuitiveInterface_IMG_0206_01_58b5e23c-fef1-4fda-a5bc-d00a44b84c71_800x.jpg?v=1592494291',
        alt: 'Color drink interface on the Gaggia Cadorna Milk',
        caption: 'The color menu organizes ten beverages and four profiles, while tactile keys keep navigation separate from the display.',
        width: 800,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/gaggia-cadorna-prestige/': officialProductMedia(
    'Gaggia North America Cadorna Prestige product page',
    'https://www.gaggia-na.com/products/gaggia-cadorna-prestige',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/files/Milk_800x.jpg?v=1767907175',
        alt: 'Integrated milk carafe on the Gaggia Cadorna Prestige',
        caption: 'The carafe detail shows the removable automatic milk system responsible for seven one-touch milk specialties and the related refrigerator and cleaning routine.',
        width: 800,
        height: 800,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/files/Intuitive_800x.jpg?v=1767907175',
        alt: 'Color beverage interface on the Gaggia Cadorna Prestige',
        caption: 'The updated menu view shows direct access to the expanded fifteen-drink set, including the current Over-Ice revision.',
        width: 800,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/gaggia-classic-evo/': officialProductMedia(
    'Gaggia North America Classic Pro E24 product page',
    'https://www.gaggia-na.com/products/gaggia-classic-pro',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/Wand_IMG_9796_04_800x.jpg?v=1688998405',
        alt: 'Two-hole commercial-style steam wand on the Gaggia Classic family',
        caption: 'The wand detail shows the manual two-hole steam path used by the current E24, with texture, pitcher position and immediate cleaning left to the operator.',
        width: 800,
        height: 800,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/Switches_03_IMG_9856_800x.jpg?v=1688998405',
        alt: 'Mechanical rocker switches on the Gaggia Classic Pro E24',
        caption: 'The three rocker switches expose the intentionally simple brew, steam and hot-water workflow without a PID display or shot timer.',
        width: 800,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/gaggia-classic-evo-pro/': officialProductMedia(
    'Gaggia Classic family product media',
    'https://www.gaggia-na.com/products/gaggia-classic-pro',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/Frame_IMG_0196_06_800x.jpg?v=1688998405',
        alt: 'Stainless frame and cup area of the Gaggia Classic family',
        caption: 'The exterior detail is shared family media. It helps identify the chassis but does not prove whether a used unit contains the 2023 coated boiler, an uncoated transition boiler or the later E24 brass boiler.',
        width: 800,
        height: 800,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/Wand_IMG_9796_04_800x.jpg?v=1688998405',
        alt: 'Manual steam wand on the Gaggia Classic family',
        caption: 'The current family image illustrates the manual milk workflow. Exact boiler and internal revision still have to be verified from the machine and seller records.',
        width: 800,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/gaggia-classic-gt/': officialProductMedia(
    'Gaggia North America Classic GT product page',
    'https://www.gaggia-na.com/products/gaggia-classic-gt',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/files/GTonblackDesign2_800x.jpg?v=1741724661',
        alt: 'Classic GT toggle switches, color display and brew pressure gauge',
        caption: 'The control close-up shows the pressure gauge, five toggles, color TFT and capacitive controls that separate GT from the simpler Classic single-boiler platform.',
        width: 800,
        height: 800,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/files/GTonblackSteamwand2_800x.jpg?v=1741724661',
        alt: 'Articulated steam wand and dedicated hot-water outlet on the Gaggia Classic GT',
        caption: 'The right-side work area shows the separate steam wand and hot-water outlet enabled by the dual-boiler, dual-circuit architecture.',
        width: 800,
        height: 800,
      },
    ],
  ),
  '/espresso-machine/gaggia-espresso-evolution-eg2115/': officialProductMedia(
    'Gaggia Espresso Evolution product page',
    'https://www.gaggia.com/manual-machines/espresso-evolution/',
    [
      {
        src: 'https://www.gaggia.com/app/uploads/2023/10/Espresso-EVOLUTION-Lava-Red_-Det-_black-BG-0001-2-1.jpg',
        alt: 'Gaggia Espresso Evolution controls, filter holder and pannarello in Lava Red',
        caption: 'Official detail media shows the compact backlit controls, tall double-wall filter holder and pannarello layout; color differs from the reviewed Stone Black EG2115/01.',
        width: 720,
        height: 960,
      },
      {
        src: 'https://www.gaggia.com/app/uploads/2023/10/Espresso-Evolution-Stone-Black-dett-cup-Bg-black_0003-1-1.jpg',
        alt: 'Stone Black Gaggia Espresso Evolution brewing into a low espresso cup',
        caption: 'The official cup view makes the low 76 mm listed working clearance and drip-tray geometry easier to judge before adding a scale.',
        width: 960,
        height: 710,
      },
    ],
  ),
  '/espresso-machine/gaggia-magenta-prestige-ri8702/': officialProductMedia(
    'Gaggia North America Magenta Prestige product page',
    'https://www.gaggia-na.com/products/gaggia-magenta-prestige',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/IntegratedMilkCarafe_01_grande.jpg?v=1620930832',
        alt: 'Integrated removable milk carafe on the Gaggia Magenta Prestige',
        caption: 'The carafe detail shows the detachable one-touch milk path that creates the machine’s convenience and its most important cleaning obligation.',
        width: 600,
        height: 400,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/files/Milk_2_grande.jpg?v=1767903066',
        alt: 'Gaggia Magenta Prestige dispensing a milk drink from its front outlet',
        caption: 'Official working media shows the cup, dual outlet and front milk routine; texture still depends on recipe, milk formulation, assembly and cleanliness.',
        width: 600,
        height: 417,
      },
    ],
  ),
  '/espresso-machine/gaggia-naviglio-deluxe-hd8749/': officialProductMedia(
    'Gaggia Naviglio Deluxe product page',
    'https://www.gaggia.com/automatic-machines/naviglio-deluxe/',
    [
      {
        src: 'https://www.gaggia.com/app/uploads/2023/07/naviglio-deluxe-desktop-1.jpg',
        alt: 'Gaggia Naviglio Deluxe in a kitchen with the automatic Cappuccinatore installed',
        caption: 'The official kitchen view gives useful scale for the 44 cm depth and the external tube-fed milk path beside the front-access machine.',
        width: 1560,
        height: 790,
      },
      {
        src: 'https://www.gaggia.com/app/uploads/2023/10/NaviglioDeluxe_1.jpg',
        alt: 'Gaggia Naviglio Deluxe dispensing milk through its Cappuccinatore',
        caption: 'The working view separates the Deluxe Cappuccinatore from the base Naviglio pannarello and the Naviglio Milk Capp-in-Cup system.',
        width: 2000,
        height: 1335,
      },
    ],
  ),
  '/espresso-machine/gaggia-naviglio-milk-hd8749-01/': officialProductMedia(
    'Gaggia Naviglio product page',
    'https://www.gaggia.com/automatic-machines/naviglio/',
    [
      {
        src: 'https://www.gaggia.com/app/uploads/2023/07/naviglio-desktop-1140x578-1.jpg',
        alt: 'Black Gaggia Naviglio with its classic pannarello in a kitchen',
        caption: 'Official media confirms that HD8749/01 belongs to the base black Naviglio workflow with manual pannarello, despite the historical Coffeedant route name.',
        width: 1140,
        height: 578,
      },
      {
        src: 'https://www.gaggia.com/app/uploads/2023/07/po_naviglio4_1560x790-1140x578-1.jpg',
        alt: 'Gaggia Naviglio front controls, coffee outlet and manual steam wand',
        caption: 'The front working view shows the physical controls, adjustable outlet and separate wand that require moving the cup for milk preparation.',
        width: 1140,
        height: 578,
      },
    ],
  ),
  '/espresso-machine/gaggia-velasca-prestige-ri8263/': officialProductMedia(
    'Gaggia North America Velasca Prestige product page',
    'https://www.gaggia-na.com/products/gaggia-velasca-prestige',
    [
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/Optiaroma_IMG_9622_1e751361-2630-4f96-a7c0-2ad493d9ec80_grande.jpg?v=1571323436',
        alt: 'Optiaroma strength control and display on the Gaggia Velasca Prestige',
        caption: 'The control detail shows the older physical-button interface used for five aroma levels, drink programming and maintenance prompts.',
        width: 600,
        height: 400,
      },
      {
        src: 'https://www.gaggia-na.com/cdn/shop/products/velascaprestige_295x295_1_3c8faf28-21b6-4db0-9688-b8328c5bf325_grande.jpg?v=1571323436',
        alt: 'Gaggia Velasca Prestige with automatic milk carafe attached',
        caption: 'The official product view shows the detachable carafe and low adjustable spout range that buyers should compare with their normal cups.',
        width: 590,
        height: 590,
      },
    ],
  ),
};
