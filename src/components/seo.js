/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <title>Evergreen</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      ></link>
      {children}
    </>
    //     <>
    //     <title></title>
    //     <meta name="description" content={seo.description} />
    //     <meta name="keywords" content={seo?.keywords} />
    //     <meta name="image" content={seo.image} />
    //     {seo.publishStatus === 'noIndex' && <meta name="robots" content="noindex" />}
    //     <meta name="wm-gatsby-prismic" content="WM Gatsby Prismic" />
    //     {schema?.length > 0 ? (
    //       <>
    //         {schema?.map((s) => (
    //           <script key={Math.random() * 10000} type="application/ld+json">
    //             {JSON.stringify(cleanSchema(s))}
    //           </script>
    //         ))}
    //       </>
    //     ) : (
    //       <script type="application/ld+json">{JSON.stringify(defaultSchemaToUse)}</script>
    //     )}
    //     <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    //     <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    //     <link rel="icon" type="image/png" href="/favicon-light-mode.png" />
    //     <Facebook
    //       desc={seo.description}
    //       image={seo.image}
    //       title={seo.title}
    //       type={article ? 'article' : 'website'}
    //       url={seo.url}
    //       locale={ogLanguage}
    //       name={siteName}
    //     />
    //     <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
    //   </>
  );
};

export default Seo;
