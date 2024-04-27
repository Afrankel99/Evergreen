import { graphql } from 'gatsby';

export const RichTextSectionFragment = graphql`
  fragment RichTextSectionFragment on SanityRichTextSection {
    _key
    _type
    _rawBody
    spacingOptions {
      sectionSpacing
      spacingOverride
    }
  }
`;
