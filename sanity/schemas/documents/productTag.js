import { TbTag } from 'react-icons/tb';

export default {
  name: `productTag`,
  title: `Product Tag`,
  type: `document`,
  icon: TbTag,
  fields: [
    {
      name: `name`,
      title: `Name`,
      type: `string`,
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: selection.title,
      };
    },
  },
};
