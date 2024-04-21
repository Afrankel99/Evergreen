import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbGridDots } from 'react-icons/tb';

export default {
  name: 'productFeedSection',
  title: 'Product Feed',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbGridDots,
  fields: [
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
        title: `Product Feed`,
      };
    },
  },
};
