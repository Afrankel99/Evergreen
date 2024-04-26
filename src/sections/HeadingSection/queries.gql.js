import { graphql } from 'gatsby';

export const HeadingSectionFragment = graphql`
  fragment HeadingSectionFragment on SanityHeadingSection {
    _key
    _type
    title
    _rawContent
    theme
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
