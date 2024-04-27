/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';

const Seo = () => {
  const description = `We are a small business, creating unique bespoke floral designs. Our little flower studio is located in North Parramatta, and we are excited to provide you with specialized quality bouquets for any occasion.`;
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${process.env.GATSBY_SITE_URL}/#organization`,
    name: 'Evergreen Studio',
    url: `${process.env.GATSBY_SITE_URL}/`,
    logo: `${process.env.GATSBY_SITE_URL}/schema-icon.png`,
    sameAs: 'https://www.instagram.com/evergreen_flowerstudio/',
  };

  return (
    // <>
    //   <title>Evergreen</title>
    //   <meta name="description" content={metaDescription} />
    //   <meta property="og:title" content={title} />
    //   <meta property="og:description" content={metaDescription} />
    //   <meta property="og:type" content="website" />
    //   <link
    //     rel="stylesheet"
    //     href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
    //   ></link>
    //   {children}
    // </>
    <>
      <title></title>
      <meta name="description" content={description} />
      {/* <meta name="image" content={} /> */}
      {/* {schema?.length > 0 ? (
        <>
          {schema?.map((s) => (
            <script key={Math.random() * 10000} type="application/ld+json">
              {JSON.stringify(cleanSchema(s))}
            </script>
          ))}
        </>
      ) : (
        <script type="application/ld+json">{JSON.stringify(defaultSchemaToUse)}</script>
      )} */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <link rel="icon" type="image/png" href="/favicon-light-mode.jpg" />
    </>
  );
};

export default Seo;
