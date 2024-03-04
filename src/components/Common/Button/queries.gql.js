import { graphql } from 'gatsby';

export const ButtonFragment = graphql`
  fragment ButtonFragment on SanityButton {
    title
    link {
      ...LinkFragment
    }
  }
`;
