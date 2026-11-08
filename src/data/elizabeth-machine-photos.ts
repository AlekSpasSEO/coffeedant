type ElizabethMachinePhoto = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceHref: string;
  sourceType: 'manufacturer' | 'product-listing';
  width: number;
  height: number;
};

const lelitUsGallery = 'https://www.lelit.com/en-us/product/elizabeth-pesel01';
const lelitUsImages = 'https://assets.breville.com/cdn-cgi/image/width=936,format=auto,quality=75/Lelit/PESEL01/';

export const elizabethMachinePhotos = {
  espresso: {
    src: 'https://images.squarespace-cdn.com/content/v1/62c733b5ffaf5c57492b40c4/9bc699e8-ccb0-4032-95f2-6af848fc3f75/Lelit-2-2601-Modifica.jpg?format=1000w',
    alt: 'Lelit Elizabeth PL92T pulling espresso into a white cup beside a milk pitcher',
    caption: 'Espresso pours from the spouted portafilter while a pitcher sits under the separate steam wand.',
    credit: 'Vibrant Coffee Roasters product gallery',
    sourceHref: 'https://www.vibrantcoffeeroasters.com/shop/p/lelitelizabeth',
    sourceType: 'product-listing',
    width: 1000,
    height: 667,
  },
  milk: {
    src: 'https://www.redber.co.uk/cdn/shop/files/Lelit_Elizabeth_A74I9187-Modifica.jpg?v=1750840895&width=1000',
    alt: 'A hand positions a stainless milk pitcher at the right-side steam wand of a Lelit Elizabeth',
    caption: 'The wand swings out to the right. Leave enough room there to angle the pitcher and wipe the wand afterward.',
    credit: 'Redber product gallery',
    sourceHref: 'https://www.redber.co.uk/products/lelit-elizabeth-dual-boiler-espresso-coffee-machine-brushed-stainless-steel',
    sourceType: 'product-listing',
    width: 1000,
    height: 1000,
  },
  workflow: {
    src: `${lelitUsImages}PDP-PESEL01-Elizabeth_03.png`,
    alt: 'A person places a dark mug under the Lelit Elizabeth portafilter on a home counter',
    caption: 'Once the machine is warm, the morning routine still includes preparing the portafilter and positioning the cup.',
    credit: 'Lelit product gallery',
    sourceHref: lelitUsGallery,
    sourceType: 'manufacturer',
    width: 936,
    height: 936,
  },
  setup: {
    src: 'https://clivecoffee.com/cdn/shop/products/Lelit-Elizabeth-Espresso-Machine-05-revised.jpg?v=1674772156&width=1000',
    alt: 'Lelit Elizabeth and Eureka Mignon Specialità grinder next to each other on a kitchen counter',
    caption: 'The separate grinder adds to the width and cost of the complete station.',
    credit: 'Clive Coffee product gallery',
    sourceHref: 'https://clivecoffee.com/products/lelit-elizabeth-dual-boiler-espresso-machine',
    sourceType: 'product-listing',
    width: 1000,
    height: 667,
  },
  features: {
    src: 'https://www.lelit.com/wp-content/uploads/2024/03/PL92T_focus2-1.webp',
    alt: 'Close-up of the round pressure gauge and LCC display on the original Lelit Elizabeth PL92T',
    caption: 'The pressure gauge is above the LCC display. The displayed temperature and the reading on the pressure gauge answer different questions.',
    credit: 'Lelit PL92T product gallery',
    sourceHref: 'https://www.lelit.com/product/elizabeth-pl92t/',
    sourceType: 'manufacturer',
    width: 1000,
    height: 1000,
  },
  build: {
    src: `${lelitUsImages}PDP-PESEL01-Elizabeth-01.png`,
    alt: 'Front view of the Lelit Elizabeth on a counter, showing the drip tray, group and steam wand',
    caption: 'The group, drip tray and steam wand are the parts you handle most often when cleaning up after coffee.',
    credit: 'Lelit product gallery',
    sourceHref: lelitUsGallery,
    sourceType: 'manufacturer',
    width: 936,
    height: 936,
  },
  value: {
    src: 'https://www.orcoffee.com/cdn/shop/articles/img-1764591676242.jpg?crop=center&height=1000&v=1764591686&width=1000',
    alt: 'Lelit Elizabeth on a dark counter with cups on top, a tamper and a cloth nearby',
    caption: 'A manual dual boiler still takes counter space for preparation tools. Include those when comparing the cost and footprint of alternatives.',
    credit: 'OR Coffee Roasters review',
    sourceHref: 'https://www.orcoffee.com/blogs/blog/lelit-elizabeth-espresso-machine-review',
    sourceType: 'product-listing',
    width: 1000,
    height: 1000,
  },
  identity: {
    src: `${lelitUsImages}PDP-PESEL01-Elizabeth_02.png`,
    alt: 'Three-quarter counter view showing the original Lelit Elizabeth PL92T body, portafilter and steam knob',
    caption: 'Check body depth, portafilter clearance and room above the machine for filling the reservoir.',
    credit: 'Lelit product gallery',
    sourceHref: lelitUsGallery,
    sourceType: 'manufacturer',
    width: 936,
    height: 936,
  },
} satisfies Record<string, ElizabethMachinePhoto>;
