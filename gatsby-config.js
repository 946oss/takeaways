module.exports = {
  siteMetadata: {
    name: `お持ち帰りごはん 釧路版`,
    siteUrl: process.env.URL || "",
    title: `プロの味をご家庭で 家事の効率化に、気分転換に、プチ贅沢に`,
    description: `釧路地方のテイクアウトサービスを実施しているお店を掲載しております`,
    keywords: [`釧路`, `ごはん`, `グルメ`, `テイクアウト`, `持ち帰り`]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remote-filesystem`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      }
    },
    `gatsby-plugin-netlify-cache`,
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
        icon: `static/logo.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
