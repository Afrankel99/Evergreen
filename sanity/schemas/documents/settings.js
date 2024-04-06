import settingsSectionGroups from '../common/settingsSectionGroups';

export default {
  name: `settings`,
  title: `Settings`,
  type: `document`,
  groups: settingsSectionGroups,
  fields: [
    {
      name: 'navbar',
      title: 'Navbar',
      type: 'navbar',
      group: 'navbar',
    },
    {
      name: `footer`,
      title: `Footer`,
      type: `footer`,
      group: 'footer',
    },
    {
      name: `globalProductData`,
      title: `Product Data`,
      description: 'The accordion data that appears on every product page.',
      type: 'array',
      of: [{ type: 'accordionItem' }],
      validation: (Rule) => Rule.required().max(3),
      group: 'globalData',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Settings`,
      };
    },
  },
};
