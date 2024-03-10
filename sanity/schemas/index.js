// documents
import page from './documents/page';
import settings from './documents/settings';

// sections
import twoColumnSection from './sections/twoColumnSection';
import twoPictureSection from './sections/twoPictureSection';
import threePictureSection from './sections/threePictureSection';
import bannerSection from './sections/bannerSection';

// objects
import alignMedia from './objects/alignMedia';
import button from './objects/button';
import navbar from './objects/navbar';
import customSlug from './objects/customSlug';
import customImage from './objects/customImage';
import link from './objects/link';
import spacingOptions from './objects/spacingOptions';
import footerLink from './objects/footerLink';
import footer from './objects/footer';

export const schemaTypes = [
  // documents
  page,
  settings,

  // sections
  twoColumnSection,
  twoPictureSection,
  threePictureSection,
  bannerSection,

  // objects
  alignMedia,
  button,
  footerLink,
  navbar,
  footer,
  customImage,
  customSlug,
  spacingOptions,
  link,
];
