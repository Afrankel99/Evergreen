import { graphql } from 'gatsby';

export const ImageFragment = graphql`
  fragment ImageFragment on SanityCustomImage {
    _key
    _type
    altText
    image {
      asset {
        _id
        url
        gatsbyImageData(layout: CONSTRAINED, width: 1500, placeholder: BLURRED)
      }
    }
  }
`;
