import { graphql } from 'gatsby';

export const NavbarFragment = graphql`
  fragment NavbarFragment on SanitySettings {
    navbar {
      _key
      _type
      image {
        ...ImageFragment
      }
      navItems {
        _key
        ...ButtonFragment
      }
      addButton
      button {
        ...ButtonFragment
      }
    }
  }
`;
