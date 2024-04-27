import { TbCursorText } from 'react-icons/tb';
import defaultSectionGroups from '../common/defaultSectionGroups';

export default {
  name: 'richTextSection',
  title: 'Rich Text',
  type: 'object',
  icon: TbCursorText,
  groups: defaultSectionGroups,
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
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
    prepare() {
      return {
        title: `Rich Text`,
      };
    },
  },
};
