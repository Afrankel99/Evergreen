import defaultSectionGroups from '../common/defaultSectionGroups';

export default {
  name: 'bannerSection',
  title: 'Banner',
  type: 'object',
  groups: defaultSectionGroups,
  //   icon: LuColumns,
  // TODO: add icon here
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      group: 'data',
    },
    {
      name: `addButton`,
      title: `Add Button`,
      type: `boolean`,
      group: 'data',
    },
    {
      name: `button`,
      title: `Button`,
      type: `button`,
      group: 'data',
      hidden: ({ parent }) => !parent?.addButton,
    },
    {
      name: `image`,
      title: `Image`,
      type: `customImage`,
      group: 'data',
    },
    {
      name: 'spacingOptions',
      title: 'Spacing Options',
      type: 'spacingOptions',
      group: 'styles',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: `Banner`,
      };
    },
  },
};
