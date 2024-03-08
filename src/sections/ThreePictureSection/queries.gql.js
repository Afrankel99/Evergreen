import { graphql } from 'gatsby';

export const TwoPictureSectionFragment = graphql`
  fragment TwoPictureSectionFragment on SanityTwoPictureSection {
    _key
    _type
    title
    content
    }
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
  }
`;
