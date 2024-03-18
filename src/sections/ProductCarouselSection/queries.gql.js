import { graphql } from 'gatsby';

export const ProductCarouselSectionFragment = graphql`
  fragment ProductCarouselSectionFragment on SanityProductCarouselSection {
    _key
    _type
    categories {
      name
      products {
        _key
        name
        price
        images {
          ...ImageFragment
        }
        slug {
          current
        }
      }
    }
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
