export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'object',
  fields: [
    {
      name: 'navItems',
      title: 'Nav Items',
      type: 'array',
      of: [{ type: 'link' }],
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
