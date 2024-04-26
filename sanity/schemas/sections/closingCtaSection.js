import defaultSectionGroups from '../common/defaultSectionGroups';
import { TbMessageChatbot } from 'react-icons/tb';

export default {
  name: 'closingCtaSection',
  title: 'Closing Cta',
  type: 'object',
  groups: defaultSectionGroups,
  icon: TbMessageChatbot,
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: `Closing Cta`,
      };
    },
  },
};
