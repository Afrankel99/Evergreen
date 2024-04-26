import { graphql } from 'gatsby';

export const ClosingCtaSectionFragment = graphql`
  fragment ClosingCtaSectionFragment on SanityClosingCtaSection {
    _key
    _type
    title
    _rawContent
    addButton
    button {
      ...ButtonFragment
    }
  }
`;
