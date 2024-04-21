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
