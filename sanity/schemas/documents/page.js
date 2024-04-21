import { FaSistrix, FaDatabase, FaRegWindowMaximize } from 'react-icons/fa';

export default {
  name: `page`,
  title: `Page`,
  type: `document`,
  icon: FaRegWindowMaximize,
  groups: [
    {
      name: 'data',
      title: 'Data',
      default: true,
      icon: FaDatabase,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: FaSistrix,
    },
  ],
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      group: 'data',
    },
    {
      name: `slug`,
      title: `Slug`,
      type: `customSlug`,
      group: 'data',
    },
    {
      name: `sections`,
      title: `Sections`,
      type: `array`,
      of: [
        // note: these need to be in alphabetical order
        { type: 'bannerSection' },
        { type: 'headingSection' },
        { type: 'productCarouselSection' },
        { type: 'threePictureSection' },
        { type: 'twoColumnSection' },
        { type: 'twoPictureSection' },
        { type: 'instagramSection' },
      ],
      group: 'data',
    },
    // {
    //   name: `seoData`,
    //   title: `Seo Data`,
    //   type: `seo`,
    //   group: 'seo',
    // },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
};
