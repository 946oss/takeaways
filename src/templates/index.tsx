import React, { useState } from "react";
import { IndexQuery, SitePageContext } from "../../types/graphql-types";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";
import { TwitterHashtagButton } from "react-twitter-embed";
import { parseJSON, format } from "date-fns";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PlaceList from "../components/PlaceList";
import Environment from "../components/Environment";

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
  pageContext,
}) => {
  const tags = data.allContentfulPlaceTag.edges
    .map((e) => e.node)
    .filter((node) => {
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
          margin: 1rem auto;
          padding: 1rem 0;
          line-height: 1.5;
          max-width: 640px;

          p {
            margin: 0.3em 0 0.5em;
          }
        `}
      >
        <h1 css={borderdTitle}>About</h1>
        <p>釧路・根室管内の飲食店のテイクアウト情報を紹介しています。</p>
        <p>
          感想や、オススメ情報など{" "}
          <a href="https://twitter.com/search/?q=%23釧路お持ち帰りごはん">
            #釧路お持ち帰りごはん
          </a>{" "}
          をつけて Tweet してみてください！
        </p>
        <p>
          随時更新中！最終更新日:{" "}
          {format(parseJSON(global.BUILT_AT), "yyyy年MM月dd日")}
        </p>
        <div
          css={css`
            margin-top: 1.5rem;
            text-align: center;
          `}
        >
          <TwitterHashtagButton
            tag="釧路お持ち帰りごはん"
            options={{ size: "large" }}
          />
        </div>
      </article>

      <article
        css={css`
          margin: 1rem auto;
          padding: 1rem 0;
          line-height: 1.5;
          max-width: 640px;
        `}
      >
        <h1 css={borderdTitle}>地元飲食店支援企画</h1>
        <h2
          css={css`
            font-size: 1rem;
            color: #999;
            text-align: center;
            margin: 1rem 0;

            &::before {
              content: "〜";
            }
            &::after {
              content: "〜";
            }
          `}
        >
          お弁当やオードブルで感謝を伝えよう
        </h2>
        <p>
          歓送迎会の実施が難しい状況でも、感謝を伝えることを大切に。
          <br />
          今年はお弁当やオードブルで過ごした時間の共有を
        </p>
        <p
          css={css`
            text-align: center;
          `}
        >
          <Link
            to={`/tags/Thank you lunch`}
            css={css`
              background: #e50914;
              border-radius: 3rem;
              color: #f5f5f1;
              display: inline-block;
              font-weight: bold;
              margin: 1rem auto;
              padding: 0.5rem 1rem;
              text-decoration: none;
            `}
          >
            「ありがとう弁当」参加店はこちら
          </Link>
        </p>
        <dl
          css={css`
            font-size: 0.8rem;

            dt {
              font-weight: bold;
            }
          `}
        >
          <dt>釧路市役所からこの企画の協力を依頼した方々</dt>
          <dd>
            釧路商工会議所、北海道中小企業家同友会くしろ支部、阿寒・音別商工会
          </dd>
        </dl>
      </article>

      <div
        css={css`
          max-width: 640px;
          margin: 1rem auto;
          padding: 1rem 0;
        `}
      >
        <Environment />
      </div>

      {tags.length > 0 && (
        <nav
          css={css`
            font-size: 0.7rem;
            font-weight: bold;
            padding: 1rem 0;
            margin: 1rem auto;
            max-width: 640px;

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
          {tags.slice(0, expandTags ? tags.length : 12).map((t) => (
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
            onClick={(_) => setExpandTags(!expandTags)}
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
            fixed(width: 440, height: 308, cropFocus: CENTER) {
              ...GatsbyContentfulFixed_withWebp
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
