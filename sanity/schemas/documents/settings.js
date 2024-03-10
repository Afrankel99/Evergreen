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
  ],
  preview: {
    prepare() {
      return {
        title: `Settings`,
      };
    },
  },
};
