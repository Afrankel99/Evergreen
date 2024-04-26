import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbMail } from 'react-icons/tb';

export default {
  name: 'contactFormSection',
  title: 'Contact Form',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbMail,
  fields: [
    {
      name: `image`,
      title: `Image`,
      type: 'customImage',
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
    prepare() {
      return {
        title: `Contact Form`,
      };
    },
  },
};
