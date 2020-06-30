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
      {data.contentfulPlaceTag.slug === "gochisotaxiavailable" && (
        <article
          css={css`
            background: #fff;
            border-radius: 1em;
            border: 5px solid #f3af16;
            margin: 2rem auto;
            max-width: 800px;
            padding: 1em;

            h2 {
              font-size: large;
            }

            ul {
              line-height: 1.5;
              padding: 0;
            }

            li {
              list-style: none;
              padding-left: 1.5em;

              &::before {
                content: "■";
                color: #f5c941;
                margin: 0 0.25em 0 -1.2em;
              }
            }
          `}
        >
          <h2>ごちそうタクシー便の使い方</h2>
          <p>ご利用可能期間：９月３０日まで</p>
          <ul>
            <li>
              配達料金: <strong>600円</strong> (商品代金 + 配送料)
            </li>
            <li>
              配達可能エリア: 配達希望参加店舗より 7km まで
              (7km以上はお受付できません)
            </li>
            <li>ご注文は店舗へ直接ご連絡ください</li>
            <li>
              <strong>
                最低注文金額は各店舗によって異なりますのでご注意ください
              </strong>
            </li>
          </ul>
          <div
            css={css`
              display: flex;
              margin: 1em 0 0;
              font-size: small;

              h3 {
                border-bottom: 0.3px solid #221f1f;
                border-top: 0.3px solid #221f1f;
                display: flex;
                flex-direction: column;
                font-size: small;
                font-weight: normal;
                justify-content: space-around;
                margin: 0 0.5rem 0 0;
                padding: 0.5em 0;
              }
              ul {
                margin: 0;
              }
            `}
          >
            <h3>
              <span>注</span>
              <span>意</span>
              <span>事</span>
              <span>項</span>
            </h3>
            <ul>
              <li>
                緊急措置に対応して実施しているため配送についてはスムーズに行かない場合もございます
              </li>
              <li>ご自宅前にて「クラクション」にてお呼びいたします</li>
              <li>
                常時デリバリーを実施していない不慣れな店舗ばかりです、配達までの時間には幅があることをご理解ください
              </li>
              <li>届かないなどの場合は注文店舗へ直接ご連絡ください</li>
              <li>
                通常業務との平行のため、タクシー会社へは直接連絡しないでください
              </li>
            </ul>
          </div>
          <p
            css={css`
              font-weight: bold;
              margin-top: 1em;
              text-align: center;
            `}
          >
            <a href="https://drive.google.com/open?id=1PEuqIFoykrn4xjtRBrPXJcRJ1xIY8_AY">
              詳細はこちら
            </a>
          </p>
        </article>
      )}
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
