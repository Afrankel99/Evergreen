import defaultSectionGroups from '../common/defaultSectionGroups';

export default {
  name: 'twoColumnSection',
  title: 'Two Col (Default)',
  type: 'object',
  groups: defaultSectionGroups,
  //   icon: LuColumns,
  fields: [
    {
      name: `tagline`,
      title: `Tagline`,
      type: `string`,
      group: 'data',
    },
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      group: 'data',
    },
    {
      name: `content`,
      title: `Content`,
      description: `Please ensure that the content is no longer than 650 characters.`,
      type: 'text',
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
      type: `ctaButton`,
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
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { value: 'white', title: 'White' },
          { value: 'black', title: 'Black' },
          { value: 'cork', title: 'Cork' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'white',
      group: 'styles',
    },
    {
      name: 'alignMedia',
      title: 'Align Media',
      type: 'alignMedia',
      group: 'styles',
    },
    // {
    //   name: 'sectionCommonFields',
    //   title: 'Section Styles',
    //   type: 'sectionCommonFields',
    //   group: 'styles',
    // },
  ],
  preview: {
    select: {
      internalLabel: 'internalLabel',
      title: 'title',
    },
    prepare(selection) {
      return {
        title: `Two Column (Default)`,
        subtitle: selection?.internalLabel,
      };
    },
  },
};
