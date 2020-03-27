import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title, description, children, imageSlug, slug = '' }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;

  return (
    <Helmet>
      <title>{title || siteMetadata.title}</title>
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
      <link rel="canonical" href={`${siteMetadata.siteUrl}${slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta
        property="og:description"
        content={description || siteMetadata.description}
      />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${slug}`} />
      {/* <meta property="og:site_name" content="SITE NAME" /> */}
      {imageSlug && (
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}${imageSlug}`}
        />
      )}
      {children}
    </Helmet>
  );
};

export default Seo;
