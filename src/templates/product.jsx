import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Common/Layout';
import ProductDetails from '../components/Product/ProductDetails';
import ProductSuggestions from '../components/Product/ProductSuggestions';
import ClosingCtaSection from '../sections/ClosingCtaSection';
import Seo from '../components/seo';
import website from '../../config/website';

const Product = (props) => {
  const { location, data: staticData } = props;
  const { sanityProduct, settings } = staticData;

  const closingCtaData = {
    _key: '3a5db286c2b0',
    title: 'Didn’t find what you were looking for?',
    _rawContent: [
      {
        _key: '0bd857e0ea95',
        _type: 'block',
        children: [
          {
            _key: '817ece73e0b30',
            _type: 'span',
            marks: [],
            text: "Looking for something specific? Get in touch with us! We'd love to help make your bouquet dreams come true.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    addButton: true,
    button: {
      title: 'Contact us',
      link: {
        linkType: 'internal',
        internalLink: {
          slug: {
            current: '/contact/',
          },
        },
      },
    },
  };

  return (
    <Layout location={location} settings={settings}>
      <ProductDetails data={sanityProduct} />
      <ProductSuggestions data={sanityProduct} />
      <ClosingCtaSection data={closingCtaData} />
    </Layout>
  );
};

export default Product;

export const Head = (props) => {
  const { data, location } = props;
  const { sanityProduct } = data;
  const { title: pageTitle } = sanityProduct;

  const title = pageTitle || website.title || '';
  const updatedDate = sanityProduct?._updatedAt;
  const publishedDate = sanityProduct?._createdAt;
  const seo = { title, updatedDate, publishedDate };
  return <Seo {...seo} location={location} />;
};

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
