export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'object',
  fields: [
    // {
    //   name: 'navItems',
    //   title: 'Nav Items',
    //   type: 'array',
    //   of: [{ type: 'navLinks' }],
    // },
  ],
  preview: {
    prepare() {
      return {
        title: `Navbar`,
      };
    },
  },
};