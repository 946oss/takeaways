import * as React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PlaceListItem from "../components/PlaceListItem";

export default ({ data }) => (
  <Layout>
    <SEO />
    <section>
      <h1
        css={css`
          font-size: 0.8rem;
          display: flex;
          align-items: center;

          &::before,
          &::after {
            content: "";
            flex-grow: 1;
            height: 1px;
            background: #444;
            display: block;
          }
          &::before {
            margin-right: 0.4em;
          }
          &::after {
            margin-left: 0.4em;
          }
        `}
      >
        {data.contentfulPlaceTag.name}
      </h1>
      {data.allContentfulPlace.edges.map(({ node }) => (
        <PlaceListItem key={node.id} place={node} />
      ))}
    </section>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPlaceTag(slug: { eq: $slug }) {
      name
      slug
    }
    allContentfulPlace(
      filter: {
        node_locale: { eq: "ja-JP" }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          id
          official
          address
          closed_on
          business_hours
          facebook
          twitter
          website
          name
          description {
            description
          }
          tel
          location {
            lat
            lon
          }
          pictures {
            id
            title
            localFile {
              childImageSharp {
                fixed(width: 320, height: 320, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          message {
            json
          }
          tags {
            slug
            name
          }
        }
      }
      totalCount
    }
  }
`;
