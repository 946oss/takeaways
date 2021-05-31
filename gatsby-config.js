const path = require("path");

module.exports = {
  siteMetadata: {
    name: `お持ち帰りごはん 釧路版`,
    siteUrl: process.env.URL || "",
    title: `プロの味をご家庭で 家事の効率化に、気分転換に、プチ贅沢に`,
    description: `釧路地方のテイクアウトサービスを実施しているお店を掲載しております`,
    keywords: [`釧路`, `ごはん`, `グルメ`, `テイクアウト`, `持ち帰り`],
    mapBoxAccessToken: `pk.eyJ1IjoiOTQ2b3NzIiwiYSI6ImNrN2t2dTA4eTAwbjYzbHA4YjdpOGxhbm4ifQ.4BZeulOXSjBeAClmJaM9Ig`,
    defaultMapLocation: {
      latitude: 43,
      longitude: 144.3838363,
      zoom: 12,
    },
    coopOrgs: [
      {
        name: `釧路市ビジネスサポートセンター k-Biz`,
        website: `https://www.kushiro-biz.net`,
        email: `info@k-biz.kushiro.jp`,
        tel: `0154-68-5624`,
      },
      {
        name: `釧路商工会議所`,
        tel: `0154-41-4141`,
      },
      {
        name: `一般社団法人北海道中小企業家同友会くしろ支部`,
        tel: `0154-31-0923`,
      },
    ],
    copyright: `お持ち帰りごはん 釧路版 by 釧路OSSコミュニティ`,
    pickUpTags: [`delivery`],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.URL || "",
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          "./node_modules/gatsby-*/**/*.js",
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `お持ち帰りごはん 釧路版`,
        short_name: `お持ち帰りごはん`,
        lang: `ja`,
        start_url: `/`,
        background_color: `#f5f5f1`,
        theme_color: `#221f1f`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPlace } }) => {
              return allContentfulPlace.edges.map((edge) => {
                return {
                  title: `[更新情報] ${edge.node.name} ${
                    edge.node.tags
                      ? edge.node.tags.map((t) => `#${t.name}`).join(" ")
                      : null
                  }`,
                  description: edge.node.description.description,
                  date: edge.node.updatedAt,
                  url: `${site.siteMetadata.siteUrl}/places/${edge.node.id}`,
                  guid: `${site.siteMetadata.siteUrl}/places/${edge.node.id}`,
                  // custom_elements: [{ "content:encoded": edge.node.html }],
                };
              });
            },
            query: `
              {
                allContentfulPlace(
                  filter: { node_locale: { eq: "ja-JP" } }
                  sort: { fields: updatedAt, order: DESC }
                ) {
                  edges {
                    node {
                      id
                      address
                      closed_on
                      business_hours
                      name
                      description {
                        description
                      }
                      message {
                        json
                      }
                      tags {
                        slug
                        name
                      }
                      updatedAt
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "お持ち帰りごはん 釧路版 更新情報",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
};
