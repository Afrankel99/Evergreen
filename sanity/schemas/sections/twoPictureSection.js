import defaultSectionGroups from '../common/defaultSectionGroups';

export default {
  name: 'twoPictureSection',
  title: 'Two Picture',
  type: 'object',
  groups: defaultSectionGroups,
  //   icon: LuColumns,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      group: 'data',
    },
    {
      name: `content`,
      title: `Content`,
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
      type: `button`,
      group: 'data',
      hidden: ({ parent }) => !parent?.addButton,
    },
    {
      name: `imageOne`,
      title: `Image One`,
      type: `customImage`,
      group: 'data',
    },
    {
      name: `imageTwo`,
      title: `Image Two`,
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
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'white',
      group: 'styles',
    },
    // {
    //   name: 'alignMedia',
    //   title: 'Align Media',
    //   type: 'alignMedia',
    //   group: 'styles',
    // },
    // {
    //   name: 'sectionCommonFields',
    //   title: 'Section Styles',
    //   type: 'sectionCommonFields',
    //   group: 'styles',
    // },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: `Two Picture`,
      };
    },
  },
};
