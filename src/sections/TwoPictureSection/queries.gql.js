import { graphql } from 'gatsby';

export const TwoPictureSectionFragment = graphql`
  fragment TwoPictureSectionFragment on SanityTwoPictureSection {
    _key
    _type
    title
    content
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
  }
`;
