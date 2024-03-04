import { graphql } from 'gatsby';

export const SectionFragment = graphql`
  fragment SectionFragment on SanitySectionCommonFields {
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
