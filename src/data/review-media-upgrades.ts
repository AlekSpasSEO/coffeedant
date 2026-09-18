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
};
