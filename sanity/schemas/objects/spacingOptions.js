export default {
  name: 'spacingOptions',
  title: 'Spacing Options',
  type: 'object',
  initialValue: {
    sectionSpacing: 'm',
    spacingOverride: 'none',
  },
  options: {
    collapsed: false,
  },
  fields: [
    {
      name: 'sectionSpacing',
      title: 'Section Spacing',
      type: 'string',
      options: {
        list: [
          { value: 'none', title: 'None' },
          { value: 'xs', title: 'XS' },
          { value: 's', title: 'S' },
          { value: 'm', title: 'M' },
          { value: 'l', title: 'L' },
          { value: 'xl', title: 'XL' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'spacingOverride',
      title: 'Spacing Override',
      type: 'string',
      options: {
        list: [
          { value: 'none', title: 'None' },
          { value: 'removeTopSpacing', title: 'Remove Top Spacing' },
          { value: 'removeBottomSpacing', title: 'Remove Bottom Spacing' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
};
