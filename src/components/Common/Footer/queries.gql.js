import { graphql } from 'gatsby';

export const FooterFragment = graphql`
  fragment FooterFragment on SanitySettings {
    footer {
      _key
      _type
      logo {
        ...ImageFragment
      }
      footerLinks {
        _key
        categoryTitle
        siteLinks {
          _key
          ...ButtonFragment
        }
      }
    }
  }
`;
