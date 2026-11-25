import { archivePhoto, proXPath, rancilioModels, silviaPath } from './reviews/rancilio-buying-audit';
import { ascasoModels, ascasoSources, duoPath, espressoGearPhoto, unoPath } from './reviews/ascaso-buying-audit';

type EditorialPhoto = {
  id: string;
  src: string;
  section: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit: string;
  creator: string;
  source: string;
  license: string;
  licenseLabel: string;
  changeNote?: string;
};

export type ReviewBuyingGuide = {
  otherPath: string;
  otherName: string;
  officialPhotos: string;
  videoIntro: string;
  actionLabel?: string;
  setupLabel?: string;
  heroPhoto?: { width: number; height: number; caption: string };
  navigation?: { id: string; label: string }[];
  brandLinkLabel?: string;
  anchorTargets?: Record<string, string>;
  photo?: EditorialPhoto;
};

export const reviewBuyingGuides: Partial<Record<string, ReviewBuyingGuide>> = {
  '/espresso-machine/lelit-elizabeth/': {
    otherPath: proXPath, otherName: 'Rancilio Silvia Pro X',
    officialPhotos: 'https://www.lelit.com/en-us/product/elizabeth-pesel01',
    videoIntro: 'Lance Hedrick demonstrates the push-button PL92T, including its preinfusion controls and steam wand.',
    actionLabel: 'Check PL92T availability',
    brandLinkLabel: 'More Lelit reviews',
    heroPhoto: { width: 400, height: 406, caption: 'An Elizabeth PL92T with a scale under the group and a separate grinder alongside.' },
    navigation: [
      { id: 'orientation', label: 'Which Elizabeth?' }, { id: 'workflow', label: 'Warm-up' },
      { id: 'espresso', label: 'Espresso' }, { id: 'milk', label: 'Milk' }, { id: 'setup', label: 'Counter fit' },
      { id: 'build', label: 'Care & used machines' }, { id: 'comparisons', label: 'Alternatives' }, { id: 'faq', label: 'FAQ' },
    ],
    anchorTargets: {
      features: 'overview', versions: 'overview', 'acc-version': 'overview', ratings: 'methodology',
      value: 'verdict', recommendations: 'comparisons', ownership: 'ownership',
      'quick-answer-title': 'faq', 'ratings-title': 'methodology', 'features-title': 'overview',
      'recommendations-title': 'comparisons', 'value-title': 'verdict', 'value-reddit-title': 'ownership',
      'espresso-performance': 'espresso', 'milk-performance': 'milk', 'workflow-performance': 'workflow',
      'build-performance': 'ownership', 'features-performance': 'overview', 'value-performance': 'verdict',
    },
  },
  [silviaPath]: {
    otherPath: proXPath, otherName: rancilioModels[proXPath].name, officialPhotos: rancilioModels[silviaPath].official,
    videoIntro: 'Whole Latte Love demonstrates the switch and steam routine on an earlier Silvia M. The video library also includes a V6 walkthrough.',
    photo: { ...archivePhoto, id: 'archive-photo', section: 'espresso', licenseLabel: 'CC BY-SA 3.0', changeNote: 'Resized.' },
  },
  [proXPath]: {
    otherPath: silviaPath, otherName: rancilioModels[silviaPath].name, officialPhotos: rancilioModels[proXPath].official,
    videoIntro: 'Seattle Coffee Gear demonstrates the Pro X controls and drink workflow in its retailer review.',
  },
  [unoPath]: {
    otherPath: duoPath, otherName: ascasoModels[duoPath].name, officialPhotos: ascasoSources.steel,
    actionLabel: 'Check Uno availability',
    setupLabel: 'Space & setup',
    videoIntro: 'The Real Sprometheus shows how the Uno’s single thermoblock handles espresso and steam.',
    photo: espressoGearPhoto,
  },
  [duoPath]: {
    otherPath: unoPath, otherName: ascasoModels[unoPath].name, officialPhotos: ascasoSources.steel,
    setupLabel: 'Power & setup',
    videoIntro: 'Lance Hedrick demonstrates an earlier Steel Duo PID. Check the current seller listing and V3 notes for differences in the controls and hardware.',
  },
};
