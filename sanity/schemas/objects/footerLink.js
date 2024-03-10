export default {
  name: 'footerLink',
  title: 'Footer Link',
  type: 'object',
  fields: [
    {
      name: 'categoryTitle',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'siteLinks',
      title: 'Sub Links',
      type: 'array',
      of: [{ type: 'button' }],
    },
  ],
  preview: {
    select: {
      subtitle: 'siteLinks',
      title: 'categoryTitle',
    },
    prepare: (selection) => ({
      title: selection.title.title || 'Category',
      subtitle: selection.subtitle.map((item) => item.title).join(', '),
    }),
  },
};
