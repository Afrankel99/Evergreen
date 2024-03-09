export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'object',
  fields: [
    {
      name: `image`,
      title: `Image`,
      type: `customImage`,
      group: 'data',
    },
    {
      name: 'navItems',
      title: 'Nav Items',
      type: 'array',
      of: [{ type: 'link' }],
      // add in max 4 items later
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
    prepare() {
      return {
        title: `Navbar`,
      };
    },
  },
};
