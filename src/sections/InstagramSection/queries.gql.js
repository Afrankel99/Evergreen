import { graphql } from 'gatsby';

export const InstagramSectionFragment = graphql`
  fragment InstagramSectionFragment on SanityInstagramSection {
    _key
    _type
    title
    imageOne {
      ...ImageFragment
    }
    imageTwo {
      ...ImageFragment
    }
    imageThree {
      ...ImageFragment
    }
    theme
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
