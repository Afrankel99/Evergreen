import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbTextCaption } from 'react-icons/tb';

export default {
  name: 'twoColumnSection',
  title: 'Two Column',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbTextCaption,
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
      type: 'richText',
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
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'gradient', title: 'Gradient' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'light',
      group: 'styles',
    },
    {
      name: 'alignMedia',
      title: 'Align Media',
      type: 'alignMedia',
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
        title: `Two Column`,
      };
    },
  },
};
