import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Common/Layout';
import Image from '../components/Common/Image';
import Section from '../components/Common/Section';

import * as styles from './product.module.scss';

const Product = (props) => {
  const { location, data: staticData } = props;
  const { sanityProduct, settings } = staticData;
  const { name, description, images, price } = sanityProduct;

  return (
    <Layout location={location} settings={settings}>
      <Section className={styles.section} sectionName="ProductPage" sectionSpacing="l">
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <Image imageData={images?.[0]}></Image>
          </div>
          <div className={styles.textContainer}>
            {name && <h1 className={styles.name}>{name}</h1>}
            {price && <span className={styles.price}>{`$${price}`}</span>}
            {description && <p className={styles.body}>{description}</p>}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Product;

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
  query Product($slug: String!) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      _id
      name
      price
      description
      images {
        ...ImageFragment
      }
      slug {
        current
      }
    }
    settings: sanitySettings {
      ...NavbarFragment
      ...FooterFragment
    }
  }
`;
