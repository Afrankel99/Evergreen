import { graphql } from 'gatsby';

export const LinkFragment = graphql`
  fragment LinkFragment on SanityCtaLink {
    # action
    email
    linkType
    externalLink
    phone
    internalLink {
      slug {
        current
      }
    }
  }
`;
