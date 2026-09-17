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
