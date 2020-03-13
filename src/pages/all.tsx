import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import { css } from "@emotion/core";

export default ({ data }) => (
  <Layout>
    <SEO title="店舗一覧" />

    <ul
      css={css`
        list-style: none;

        li {
          padding: 0.5em 0;
          border-bottom: 1px #ccc solid;
        }
        address {
          font-style: inherit;
          font-size: 0.9rem;
        }
        .tags {
          font-size: 0.8rem;

          span {
            margin-left: 0.7em;

            &:first-of-type {
              margin-left: 0;
            }
          }
        }
      `}
    >
      {data.allContentfulPlace.edges.map(({ node }) => (
        <li key={node.id}>
          {node.tags && node.tags.length > 0 && (
            <div className="tags">
              {node.tags.map(t => (
                <span>{t.name}</span>
              ))}
            </div>
          )}
          <h4>
            <Link to={`/places/${node.id}`}>{node.name}</Link>
          </h4>
          <address>{node.address}</address>
        </li>
      ))}
    </ul>
  </Layout>
);

export const pageQuery = graphql`
  query AllQuery {
    allContentfulPlace(
      filter: { node_locale: { eq: "ja-JP" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id
          address
          name
          tags {
            slug
            name
          }
        }
      }
    }
  }
`;
