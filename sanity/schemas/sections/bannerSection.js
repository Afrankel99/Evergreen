import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbBrandEtsy } from 'react-icons/tb';

export default {
  name: 'bannerSection',
  title: 'Banner',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbBrandEtsy,
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
