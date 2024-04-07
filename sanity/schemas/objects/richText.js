export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading', value: 'h3' },
        { title: 'Subheading', value: 'h5' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // annotations: [
        //   {
        //     name: 'link',
        //     title: 'Link',
        //     type: 'object',
        //     icon: FiLink2,
        //     fields: [
        //       {
        //         name: 'linkType',
        //         title: 'Link Type',
        //         type: 'string',
        //         options: {
        //           list: [
        //             { value: 'internal', title: 'Internal' },
        //             { value: 'external', title: 'External' },
        //             { value: 'phone', title: 'Phone' },
        //             { value: 'email', title: 'Email' },
        //           ],
        //           layout: 'radio',
        //           direction: 'horizontal',
        //         },
        //       },
        //       {
        //         name: 'internalLinkRef',
        //         title: 'Internal Link',
        //         type: 'reference',
        //         to: [{ type: 'page' }],
        //         options: {
        //           filter: ({ document }) => ({
        //             filter: 'website == $website',
        //             params: { website: document.website },
        //           }),
        //         },
        //         hidden: ({ parent }) => parent?.linkType !== 'internal',
        //       },
        //       {
        //         name: 'externalLink',
        //         title: 'External Link',
        //         type: 'url',
        //         hidden: ({ parent }) => parent?.linkType !== 'external',
        //         validation: (Rule) =>
        //           Rule.uri({
        //             allowRelative: true,
        //           }),
        //       },
        //       {
        //         name: 'phone',
        //         title: 'Phone',
        //         type: 'string',
        //         hidden: ({ parent }) => parent?.linkType !== 'phone',
        //       },
        //       {
        //         name: 'email',
        //         title: 'Email',
        //         type: 'string',
        //         hidden: ({ parent }) => parent?.linkType !== 'email',
        //       },
        //     ],
        //     initialValue: {
        //       linkType: 'internal',
        //     },
        //   },
        // ],
      },
    },
  ],
};
