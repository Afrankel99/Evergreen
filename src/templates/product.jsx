import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Common/Layout';
import ProductDetails from '../components/Product/ProductDetails';
import ProductSuggestions from '../components/Product/ProductSuggestions';

const Product = (props) => {
  const { location, data: staticData } = props;
  const { sanityProduct, settings } = staticData;

  return (
    <Layout location={location} settings={settings}>
      <ProductDetails data={sanityProduct} />
      <ProductSuggestions data={sanityProduct} />
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
      similarProducts(limit: 3) {
        _id
        images {
          ...ImageFragment
        }
        name
        price
        slug {
          current
        }
      }
    }
    settings: sanitySettings {
      ...NavbarFragment
      ...FooterFragment
    }
  }
`;
