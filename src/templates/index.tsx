import * as React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import { TwitterHashtagButton } from "react-twitter-embed";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PlaceListItem from "../components/PlaceListItem";

const borderdTitle = css`
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
`;

export default ({ data, pageContext }) => {
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
            font-size: 0.7rem;
            font-weight: bold;
            padding: 1rem 0;
            margin: 1rem 0;

            a {
              border-radius: 3em;
              border: 1px solid #e50914;
              display: inline-block;
              margin: 0.5em 0 0 0.5em;
              padding: 0.3em 0.7em;
              text-decoration: none;
            }
          `}
        >
          <p
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            <span role="img" aria-label="注目" aria-hidden="true">
              ✨
            </span>{" "}
            注目
          </p>
          {tags.map(t => (
            <Link to={`/tags/${t.slug}`} key={t.slug}>
              {t.name}
            </Link>
          ))}
        </div>
      ) : null}

      <article
        css={css`
          margin: 1rem 0;
          padding: 1rem 0;
          line-height: 1.5;

          p {
            margin: 0.3em 0 0.5em;
          }
        `}
      >
        <h1 css={borderdTitle}>About</h1>
        <p>釧路地方でテイクアウトを行っているお店を紹介しています。</p>
        <p>
          感想や、オススメ情報など{" "}
          <a href="https://twitter.com/search/?q=%23釧路お持ち帰りごはん">
            #釧路お持ち帰りごはん
          </a>{" "}
          をつけて Tweet してみてください！
        </p>
        <div
          css={css`
            text-align: center;
          `}
        >
          <TwitterHashtagButton
            tag="釧路お持ち帰りごはん"
            options={{ size: "large" }}
          />
        </div>
      </article>

      <section>
        <h1 css={borderdTitle}>最近の更新</h1>
        {data.allContentfulPlace.edges.map(({ node }) => (
          <PlaceListItem key={node.id} place={node} />
        ))}

        <div
          css={css`
            display: flex;
            justify-content: space-between;
            a {
              display: inline-block;
              border-radius: 3em;
              background: #e50914;
              color: #f5f5f1;
              padding: 0.5em 2em;
              text-decoration: none;
              font-size: 1.2rem;
            }
          `}
        >
          {pageContext.previousPagePath ? (
            <Link to={pageContext.previousPagePath}>&laquo;</Link>
          ) : (
            <span></span>
          )}
          {pageContext.nextPagePath && (
            <Link to={pageContext.nextPagePath}>&raquo;</Link>
          )}
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPlace(
      filter: { node_locale: { eq: "ja-JP" } }
      sort: { fields: updatedAt, order: DESC }
      skip: $skip
      limit: $limit
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