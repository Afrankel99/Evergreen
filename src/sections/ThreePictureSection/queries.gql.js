import { graphql } from 'gatsby';

export const ThreePictureSectionFragment = graphql`
  fragment ThreePictureSectionFragment on SanityThreePictureSection {
    _key
    _type
    title
    content
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
