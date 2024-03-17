import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbShoppingBag } from 'react-icons/tb';

export default {
  name: 'productCarouselSection',
  title: 'Product Carousel',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbShoppingBag,
  fields: [
    {
      name: `categories`,
      title: `Product Tag Categories`,
      description: `These are references to the Product Tags that will be used to filter the carousel content. The tag must be published before it can be added.`,
      type: `array`,
      of: [{ type: 'reference', to: [{ type: 'productTag' }] }],
      group: 'data',
      validation: (Rule) => Rule.required().min(3).max(3),
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
        title: `Product Carousel`,
      };
    },
  },
};
