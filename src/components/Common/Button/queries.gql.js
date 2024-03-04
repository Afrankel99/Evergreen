import { graphql } from 'gatsby';

export const ButtonFragment = graphql`
  fragment ButtonFragment on SanityCtaButton {
    title
    link {
      ...LinkFragment
    }
  }
`;
