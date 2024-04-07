import { graphql } from 'gatsby';

export const TwoPictureSectionFragment = graphql`
  fragment TwoPictureSectionFragment on SanityTwoPictureSection {
    _key
    _type
    title
    _rawContent
    addButton
    button {
      ...ButtonFragment
    }
    imageOne {
      ...ImageFragment
    }
    imageTwo {
      ...ImageFragment
    }
    theme
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
