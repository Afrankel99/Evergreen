import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbBrandInstagram } from 'react-icons/tb';

export default {
  name: 'instagramSection',
  title: 'Instagram Section',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbBrandInstagram,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      group: 'data',
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
      name: `imageThree`,
      title: `Image Three`,
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
        title: `Instagram Section`,
      };
    },
  },
};
