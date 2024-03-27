import { graphql } from 'gatsby';

export const InstagramSectionFragment = graphql`
  fragment InstagramSectionFragment on SanityInstagramSection {
    _key
    _type
    title
    images {
      _key
      ...ImageFragment
    }
    theme
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
