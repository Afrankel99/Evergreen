import { graphql } from 'gatsby';

export const TwoColumnSectionFragment = graphql`
  fragment TwoColumnSectionFragment on SanityTwoColumnSection {
    _key
    _type
    title
    content
    addButton
    button {
      ...ButtonFragment
    }
    image {
      ...ImageFragment
    }
    theme
    alignMedia
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
