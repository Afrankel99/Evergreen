import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Common/Layout';
import SanitySection from '../components/Common/SanitySection';
import Section from '../components/Common/Section';
import Seo from '../components/seo';
import website from '../../config/website';

const Page = (props) => {
  const { location, data: staticData } = props;
  const { sanityPage, settings } = staticData;
  const { sections: pageSections = [] } = sanityPage;

  return (
    <Layout location={location} settings={settings}>
      {pageSections?.length > 0 &&
        pageSections?.map((section) => {
          if (!section) return null;
          if (!section._key) {
            return (
              // eslint-disable-next-line react/jsx-key
              <Section>
                Missing `_key` on GraphQL fragment in `src/templates/Page` for section: {section.__typename}
              </Section>
            );
          }
          return <SanitySection data={section} key={section._key} location={location} />;
        })}
    </Layout>
  );
};

export default Page;

export const Head = (props) => {
  const { data, location } = props;
  const { sanityPage } = data;
  const { title: pageTitle } = sanityPage;

  const title = pageTitle || website.title || '';
  const updatedDate = sanityPage?._updatedAt;
  const publishedDate = sanityPage?._createdAt;
  const seo = { title, updatedDate, publishedDate };
  return <Seo {...seo} location={location} />;
};

export const query = graphql`
  query Page($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      _id
      title
      _createdAt
      _updatedAt
      slug {
        current
      }
      sections {
        __typename # __typename used above for debugging
        ...BannerSectionFragment
        ...ClosingCtaSectionFragment
        ...ContactFormSectionFragment
        ...RichTextSectionFragment
        ...HeadingSectionFragment
        ...ProductCarouselSectionFragment
        ...ProductFeedSectionFragment
        ...TwoColumnSectionFragment
        ...TwoPictureSectionFragment
        ...InstagramSectionFragment
      }
    }
    settings: sanitySettings {
      ...NavbarFragment
      ...FooterFragment
    }
  }
`;
