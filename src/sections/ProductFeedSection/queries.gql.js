import { graphql } from 'gatsby';

export const ProductFeedSectionFragment = graphql`
  fragment ProductFeedSectionFragment on SanityProductFeedSection {
    _key
    _type
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
