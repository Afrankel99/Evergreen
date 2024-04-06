export default {
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'info',
      title: 'Info',
      type: 'text',
    },
    {
      name: 'addButton',
      title: 'Add Button',
      type: 'boolean',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
      hidden: ({ parent }) => parent && !parent.addButton,
    },
  ],
  initialValue: {
    addButton: false,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
