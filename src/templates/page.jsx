import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Common/Layout';
import SanitySection from '../components/Common/SanitySection';
import Section from '../components/Common/Section';

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

// TODO: add in the SEO component
// export const Head = (props) => {
//   const { location, data } = props;
//   const { sanityPage } = data;
//   const { seoData, title: pageTitle } = sanityPage;

//   const title = seoData?.seoTitle || pageTitle || '';
//   const description = seoData?.seoDescription || '';
//   const openGraphImage = seoData?.openGraphImage || '';
//   const keywords = seoData?.seoKeywords || '';
//   const publishStatus = seoData?.publishStatus || '';
//   const updatedDate = sanityPage?.updatedAt;
//   const publishedDate = sanityPage?.createdAt;
//   const seo = { title, description, openGraphImage, keywords, publishStatus, updatedDate, publishedDate };
//   return <Seo {...seo} location={location} />;
// };

export const query = graphql`
  query Page($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      _id
      title
      slug {
        current
      }
      sections {
        __typename # __typename used above for debugging
        ...BannerSectionFragment
        ...HeadingSectionFragment
        ...ProductCarouselSectionFragment
        ...ThreePictureSectionFragment
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
