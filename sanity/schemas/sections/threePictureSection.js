import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbPictureInPictureTop } from 'react-icons/tb';

export default {
  name: 'threePictureSection',
  title: 'Three Picture',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbPictureInPictureTop,
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
        title: `Three Picture`,
      };
    },
  },
};
