/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useEffect } from 'react';
import useDarkMode from '../utils/hooks/useDarkMode';
import website from '../../config/website';

const Seo = (props) => {
  const { location, children, title, updatedDate, publishedDate } = props;
  const metaDescription = `We are a small business, creating unique bespoke floral designs.`;

  const seo = {
    title: title || website.title,
    description: website.description,
    ogImage: website.banner,
    url: `${process.env.GATSBY_SITE_URL}/${location?.pathname || ''}`,
    updatedDate: updatedDate ? new Date(updatedDate).toISOString : null,
    publishedDate: publishedDate ? new Date(publishedDate).toISOString : null,
    language: website.ogLanguage,
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${process.env.GATSBY_SITE_URL}/#organization`,
    name: 'Evergreen Studio',
    url: `${process.env.GATSBY_SITE_URL}/`,
    logo: `${process.env.GATSBY_SITE_URL}/schema-icon.png`,
    sameAs: 'https://www.instagram.com/evergreen_flowerstudio/',
  };

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    headline: seo.title,
    inLanguage: seo.language,
    description: seo.description,
    name: website.title,
    datePublished: seo.publishedDate,
    dateModified: seo.updatedDate,
    image: {
      '@type': 'ImageObject',
      url: seo.ogImage,
    },
  };

  const darkMode = useDarkMode();

  useEffect(() => {
    const favicon = document.querySelectorAll('[rel="icon"]')[0];
    if (darkMode) {
      if (favicon) favicon.href = '/favicon-dark-mode.png';
    } else if (favicon) favicon.href = '/favicon-light-mode.png';
  }, [darkMode]);

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
      <title>{title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={metaDescription} />
      <meta name="image" content={seo.ogImage} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      ></link>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
      <link rel="icon" type="image/png" href="/favicon-light-mode.png" />
      {children}
    </>
  );
};

export default Seo;
