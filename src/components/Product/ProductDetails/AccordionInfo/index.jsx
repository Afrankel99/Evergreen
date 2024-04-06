import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FaqAccordion from '../../../Common/FaqAccordion';

const AccordionInfo = () => {
  const globalProductData = useStaticQuery(graphql`
    query GlobalProductQuery {
      allSanitySettings {
        nodes {
          globalProductData {
            title
            info
            addButton
            button {
              ...ButtonFragment
            }
          }
        }
      }
    }
  `);

  const productData = globalProductData?.allSanitySettings?.nodes?.[0]?.globalProductData || [];

  return (
    <div>
      {productData.map((item, index) => (
        <FaqAccordion key={index} faq={item} />
      ))}
    </div>
  );
};

export default AccordionInfo;
