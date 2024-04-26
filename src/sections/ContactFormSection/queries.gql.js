import { graphql } from 'gatsby';

export const ContactFormSectionFragment = graphql`
  fragment ContactFormSectionFragment on SanityContactFormSection {
    _key
    _type
    image {
      ...ImageFragment
    }
    theme
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
