import { TbShoppingBag } from 'react-icons/tb';

export default {
  name: `product`,
  title: `Product`,
  type: `document`,
  icon: TbShoppingBag,
  fields: [
    {
      name: `name`,
      title: `Name`,
      type: `string`,
    },
    {
      name: `description`,
      title: `Description`,
      type: `text`,
    },
    {
      name: `images`,
      title: `Images`,
      description: `The first photo will be the main photo.`,
      type: `array`,
      of: [{ type: 'customImage' }],
    },
    {
      name: `price`,
      title: `Price`,
      description: `Price in AUD. Do not add $.`,
      type: `number`,
    },
    {
      name: 'type',
      title: 'Type',
      description: `The product type.`,
      type: 'string',
      options: {
        list: [
          { value: 'bouquet', title: 'Bouquet' },
          { value: 'box', title: 'Box' },
          { value: 'hamper', title: 'Hamper' },
        ],
      },
      initialValue: 'bouquet',
    },
    {
      // reference array
      name: `tags`,
      title: `Tags`,
      description: `These are references to the Product Tags. The tag must be published before it can be added to a product.`,
      type: `array`,
      of: [{ type: 'reference', to: [{ type: 'productTag' }] }],
    },
    {
      name: 'style',
      title: 'Style',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { value: 'minimal', title: 'Minimal' },
          { value: 'traditional', title: 'Traditional' },
          { value: 'glamorous', title: 'Glamorous' },
        ],
      },
      initialValue: ['minimal'],
    },
  ],
  preview: {
    select: {
      title: 'name',
      images: 'images',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection?.images?.[0]?.image,
      };
    },
  },
};
