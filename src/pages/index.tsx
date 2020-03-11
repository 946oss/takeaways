import * as React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PlaceListItem from "../components/PlaceListItem";

export default ({ data }) => {
  const tags = data.allContentfulPlaceTag.edges
    .map(e => e.node)
    .sort((a, b) => {
      const ac = a.place ? a.place.length : 0;
      const bc = b.place ? b.place.length : 0;

      if (ac === bc) {
        return 0;
      }

      return ac > bc ? 1 : -1;
    })
    .filter(node => {
      return node.place && node.place.length > 0;
    })
    .slice(0, 7);

  return (
    <Layout>
      <SEO />
      {tags.length > 0 ? (
        <div
          css={css`
            border-bottom: 3px solid #fff;
            font-size: 0.7rem;
            font-weight: bold;
            padding: 1rem 0;
            margin: 1rem 0 2rem;

            a {
              border-radius: 3em;
              border: 1px solid #e50914;
              display: inline-block;
              margin-left: 0.5em;
              padding: 0.3em 0.7em;
              text-decoration: none;

              &:first-of-type {
                margin-left: 0;
              }
            }
          `}
        >
          <p
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            <span role="img">✨</span> 注目
          </p>
          {tags.map(t => (
            <Link to={`/tags/${t.slug}`} key={t.slug}>
              {t.name}
            </Link>
          ))}
        </div>
      ) : null}

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
              background: #221f1f;
              display: block;
            }
            &::before {
              margin-right: 0.6em;
            }
            &::after {
              margin-left: 0.6em;
            }
          `}
        >
          最近の更新
        </h1>
        {data.allContentfulPlace.edges.map(({ node }) => (
          <PlaceListItem key={node.id} place={node} />
        ))}
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPlace(
      filter: { node_locale: { eq: "ja-JP" } }
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
            file {
              url
            }
            fixed(width: 300, height: 300, cropFocus: CENTER) {
              srcSet
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
    allContentfulPlaceTag(filter: { node_locale: { eq: "ja-JP" } }) {
      edges {
        node {
          slug
          name
          place {
            id
          }
        }
      }
    }
  }
`;
