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
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'footerLink' }],
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
