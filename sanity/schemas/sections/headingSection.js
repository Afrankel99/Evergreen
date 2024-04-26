import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbTextColor } from 'react-icons/tb';

export default {
  name: 'headingSection',
  title: 'Heading',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbTextColor,
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
      type: `richText`,
      group: 'data',
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
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: `Heading`,
      };
    },
  },
};
