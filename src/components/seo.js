import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = () => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          author
          authorImage
          authorEmail
        }
      }
    }
  `;

  const { site } = useStaticQuery(query);

  const {
    title,
    description,
    siteUrl,
    image,
    author,
    authorEmail,
    authorImage,
  } = site.siteMetadata;

  return (
    <Helmet>
      <meta charSet="utf-8" lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={`${siteUrl}${image}`} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "${siteUrl}",
            "name": "Spencer Fitch Portfolio",
            "image": "${image}",
            "description": "${description}",
            "author": {
              "@context": "https://schema.org",
              "@type": "Person",
              "email": "${authorEmail}",
              "givenName": "${author.split(' ')[0]}",
              "familyName": "${author.split(' ').reverse()[0]}",
              "gender": "Male",
              "knowsAbout": "Software Engineering",
              "knowsLanguage": "English",
              "image": "${siteUrl}${authorImage}",
            }
          }
        `}
      </script>
      
    </Helmet>
  );
}

export default Seo;