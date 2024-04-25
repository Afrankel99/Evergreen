import { graphql } from 'gatsby';

export const BannerSectionFragment = graphql`
  fragment BannerSectionFragment on SanityBannerSection {
    _key
    _type
    title
    addButton
    button {
      ...ButtonFragment
    }
    image {
      ...ImageFragment
    }
  }
`;
