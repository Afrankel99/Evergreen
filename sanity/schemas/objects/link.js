export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { value: 'internal', title: 'Internal' },
          { value: 'external', title: 'External' },
          { value: 'phone', title: 'Phone' },
          { value: 'email', title: 'Email' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'phone',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'email',
    },
  ],
  options: {
    collapsible: false,
  },
};
