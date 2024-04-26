import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbBrandInstagram } from 'react-icons/tb';

export default {
  name: 'instagramSection',
  title: 'Instagram',
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
      name: `images`,
      title: `Images`,
      type: `array`,
      of: [{ type: 'customImage' }],
      group: 'data',
      validation: (Rule) => Rule.required().min(3).max(3),
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'light',
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
    prepare() {
      return {
        title: `Instagram Section`,
      };
    },
  },
};
