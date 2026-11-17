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
  photo?: EditorialPhoto;
};

export const reviewBuyingGuides: Partial<Record<string, ReviewBuyingGuide>> = {
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
