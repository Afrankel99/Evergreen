export default {
  name: 'customSlug',
  title: 'Slug',
  type: 'slug',
  options: {
    source: `title`,
    slugify: (input) => `/${input.toLowerCase().replace(/\s+/g, '-')}/`,
  },
  validation: (Rule) =>
    Rule.custom((slug) => {
      const currentSlug = slug?.current;

      if (typeof currentSlug === 'undefined') {
        return 'Required';
      }
      if (!currentSlug?.match(/^[a-z0-9/]+(?:-[a-z0-9/]+)*$/g)) {
        return 'Please format URL to be valid slug.';
      }
      if (currentSlug?.[0] !== '/') {
        return 'Please add initial forward slash.';
      }
      if (currentSlug?.[currentSlug.length - 1] !== '/') {
        return 'Please add trailing forward slash.';
      }
      return true;
    }),
  description:
    'Please ensure forward slash / is added to beginning and end of url or to nest pages e.g. /example-page/ or /example-page/new-page/',
};
