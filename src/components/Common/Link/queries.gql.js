import { graphql } from 'gatsby';

export const LinkFragment = graphql`
  fragment LinkFragment on SanityLink {
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
