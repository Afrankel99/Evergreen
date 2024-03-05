export default {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Footer`,
      };
    },
  },
};
