import React, { useState } from "react";
import { IndexQuery, SitePageContext } from "../../types/graphql-types";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import { TwitterHashtagButton } from "react-twitter-embed";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PlaceList from "../components/PlaceList";
import GochitaxiBanner from "../components/gochitaxi-banner.svg";

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

const Index: React.FC<{ data: IndexQuery; pageContext: SitePageContext }> = ({
  data,
  pageContext
}) => {
  const tags = data.allContentfulPlaceTag.edges
    .map(e => e.node)
    .filter(node => {
      return node.place && node.place.length > 0;
    })
    .sort((a, b) => {
      return b.place.length - a.place.length;
    });

  const [expandTags, setExpandTags] = useState(false);

  return (
    <Layout>
      <SEO />
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
        <p>釧路・根室管内の飲食店のテイクアウト情報を紹介しています。</p>
        <p
          css={css`
            font-weight: bold;
          `}
        >
          ※
          「ごちそうタクシー便」に対応していない店舗情報も掲載されています。ご注意ください。
          ※
        </p>
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

      <section
        css={css`
          font-size: large;
          font-weight: bold;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        `}
      >
        <Link
          to="/tags/gochisotaxiavailable"
          css={css`
            color: #221f1f;
          `}
        >
          <GochitaxiBanner />
        </Link>
        <a href="https://drive.google.com/open?id=1PEuqIFoykrn4xjtRBrPXJcRJ1xIY8_AY">
          「ごちそうタクシー便」参加店舗募集中！
        </a>
      </section>

      {tags.length > 0 && (
        <nav
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
          <header
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            <span role="img" aria-label="注目" aria-hidden="true">
              ✨
            </span>{" "}
            ジャンルから
          </header>
          {tags.slice(0, expandTags ? tags.length : 12).map(t => (
            <Link to={`/tags/${t.slug}`} key={t.slug}>
              {t.name}
            </Link>
          ))}
          <a
            css={css`
              background-color: #e50914;
              color: #f5f5f1;
              cursor: pointer;
            `}
            onClick={_ => setExpandTags(!expandTags)}
          >
            {expandTags ? `省略する` : `すべて見る`}
          </a>
        </nav>
      )}

      <section>
        <h1 css={borderdTitle}>最近の更新</h1>
        <PlaceList
          places={data.allContentfulPlace.edges.map(({ node }) => node)}
          pageContext={pageContext}
        />
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Index($skip: Int!, $limit: Int!) {
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
    allContentfulPlaceTag(
      filter: { node_locale: { eq: "ja-JP" } }
      sort: { fields: name, order: ASC }
    ) {
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

export default Index;
