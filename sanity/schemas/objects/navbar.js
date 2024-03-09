export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'object',
  fields: [
    {
      name: `image`,
      title: `Image`,
      type: `customImage`,
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
    },
    {
      name: `button`,
      title: `Button`,
      type: `button`,
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
