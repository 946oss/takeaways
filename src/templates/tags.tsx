import * as React from "react";
import { TagsQuery } from "../../types/graphql-types";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PlaceList from "../components/PlaceList";

const Tags: React.FC<{ data: TagsQuery }> = ({ data }) => (
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
      <PlaceList
        places={data.allContentfulPlace.edges.map(({ node }) => node)}
      />
    </section>
  </Layout>
);

export const query = graphql`
  query Tags($slug: String!) {
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
          address
          closed_on
          business_hours
          name
          pictures {
            id
            title
            localFile {
              childImageSharp {
                fixed(width: 440, height: 308, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
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

export default Tags;
