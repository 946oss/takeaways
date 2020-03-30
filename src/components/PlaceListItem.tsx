import * as React from "react";
import { ContentfulPlace } from "../../types/graphql-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { mq } from "../responsive";

const PlaceListItem: React.FC<{ place: Partial<ContentfulPlace> }> = ({
  place
}) => (
  <div
    css={css`
      margin-bottom: 1.5rem;
      padding: 1rem 0;
    `}
  >
    {place.tags && place.tags.length > 0 && (
      <div
        css={css`
          font-size: 0.7rem;
          font-weight: bold;

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
        {place.tags.map(t => (
          <Link to={`/tags/${t.slug}`} key={t.slug}>
            {t.name}
          </Link>
        ))}
      </div>
    )}
    <h3
      css={css`
        margin: 0.5rem 0;
      `}
    >
      <Link
        to={`/places/${place.id}`}
        css={css`
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        `}
      >
        {place.name}
      </Link>
    </h3>
    <div
      css={css`
        margin: 0.5rem 0;
        a {
          margin-left: 0.5rem;

          &:first-of-type {
            margin-left: 0;
          }
        }
      `}
    >
      {place.facebook && (
        <a href={place.facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      )}
      {place.twitter && (
        <a href={place.twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      )}
      {place.website && (
        <a href={place.website} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLink} size="lg" />
        </a>
      )}
    </div>
    <p
      css={css`
        line-height: 1.8;
        margin-bottom: 0.5rem;
      `}
    >
      {place.description.description}
    </p>
    <div
      css={css(
        css`
          display: flex;
        `,
        mq({
          flexDirection: ["column", "row"]
        })
      )}
    >
      <div
        css={mq({
          width: ["100%", 320]
        })}
      >
        {place.pictures ? (
          place.pictures
            .slice(0, 1)
            .map(pic => (
              <Img
                key={pic.id}
                fixed={pic.localFile.childImageSharp.fixed}
                style={{ width: "100%" }}
                imgStyle={{ width: "100%" }}
              />
            ))
        ) : (
          <img src="/noimage.jpg" alt="" />
        )}
      </div>
      <div
        css={css(
          css`
            flex: 1;
          `,
          mq({
            marginLeft: [0, "1rem"],
            marginTop: ["1rem", 0]
          })
        )}
      >
        <table
          css={css`
            margin-bottom: 1rem;
            th {
              box-sizing: border-box;
              font-weight: bold;
              line-height: 1.5;
              padding: 0 0.5rem 0.5rem;
              text-align: right;
              white-space: nowrap;
            }
            td {
              box-sizing: border-box;
              line-height: 1.5;
              padding: 0 0.5rem 0.5rem;

              & .tel {
                display: inline-block;
                margin-right: 0.5rem;
                white-space: nowrap;
              }
            }
          `}
        >
          <tbody>
            <tr>
              <th>住所</th>
              <td>{place.address}</td>
            </tr>
            {place.closed_on && (
              <tr>
                <th>定休日</th>
                <td>{place.closed_on.join(" / ")}</td>
              </tr>
            )}
            <tr>
              <th>営業時間</th>
              <td>{place.business_hours}</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>
                {place.tel &&
                  place.tel.map(n => (
                    <a href={`tel:${n}`} className="tel" key={n}>
                      {n}
                    </a>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
        {place.message && (
          <div
            css={css`
              background: #fff;
              padding: 0.5rem;
              border-radius: 0.3rem;
              margin: 1rem 0;
            `}
          >
            {documentToReactComponents(place.message.json)}
          </div>
        )}
        <div
          css={css(
            css`
              a {
                background: #221f1f;
                border-radius: 3rem;
                color: #f5f5f1;
                display: inline-block;
                font-weight: bold;
                margin-left: 1rem;
                padding: 0.5rem 1rem;
                text-decoration: none;

                &:first-of-type {
                  margin-left: 0;
                }
              }
            `,
            mq({
              textAlign: ["center", "left"]
            })
          )}
        >
          <Link to={`/places/${place.id}`}>お店を詳しく見る</Link>
        </div>
      </div>
    </div>
  </div>
);

export default PlaceListItem;
