import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: string[];
  title?: string;
}

const SEO = ({
  description = "",
  lang = `ja`,
  meta = {},
  keywords = [],
  title = ""
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            name
            keywords
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const allKeywords = site.siteMetadata.keywords.concat(keywords);

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.name}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}/square.png`
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.name
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: title || site.siteMetadata.title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          allKeywords.length > 0
            ? {
                name: `keywords`,
                content: allKeywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
