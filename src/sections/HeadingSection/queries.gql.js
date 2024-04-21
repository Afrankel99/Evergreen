import { graphql } from 'gatsby';

export const HeadingSectionFragment = graphql`
  fragment HeadingSectionFragment on SanityHeadingSection {
    _key
    _type
    title
    _rawContent
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
