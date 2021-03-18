import * as React from "react";
import {
  ContentfulPlace,
  SitePageContext,
  PlaceListQuery,
} from "../../types/graphql-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { mq } from "../responsive";

const PlaceList: React.FC<{
  places: Partial<ContentfulPlace>[];
  pageContext?: SitePageContext;
}> = ({ places, pageContext = undefined }) => {
  const { file }: PlaceListQuery = useStaticQuery(graphql`
    query PlaceList {
      file(relativePath: { eq: "noimage.jpg" }) {
        childImageSharp {
          fixed(width: 440, height: 308, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        {places.map((place) => (
          <div
            css={css(
              css`
                display: block;
                overflow: hidden;
                padding: 1em 0 2em;
                position: relative;
              `,
              mq({
                width: [`100%`, `48%`, `31%`, `23%`],
              })
            )}
          >
            {place.tags && place.tags.length > 0 && (
              <div
                css={css`
                  display: flex;
                  left: 0.5em;
                  position: absolute;
                  top: 1.5em;
                  z-index: 2;
                `}
              >
                <span
                  css={css`
                    background: rgba(0, 0, 0, 0.8);
                    color: #fff;
                    border-radius: 0.4em;
                    padding: 0.4em 0.8em;
                    font-size: x-small;
                  `}
                >
                  {place.tags[0].name}
                </span>
                {place.tags.length > 1 && (
                  <span
                    css={css`
                      background: rgba(0, 0, 0, 0.6);
                      color: #fff;
                      border-radius: 0.4em;
                      padding: 0.4em 0.8em;
                      font-size: x-small;
                      margin-left: 0.4em;
                    `}
                  >
                    ...
                  </span>
                )}
              </div>
            )}
            <Link to={`/places/${place.id}`}>
              <Img
                css={css`
                  &::before {
                    content: "";
                    display: block;
                    padding-top: 70%;
                  }
                `}
                fixed={
                  place.pictures
                    ? place.pictures[0].fixed
                    : file.childImageSharp.fixed
                }
                style={{
                  position: "relative",
                  borderRadius: "5px",
                  width: "100%",
                  height: "inherit",
                }}
                imgStyle={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              />
            </Link>
            <address
              css={css`
                font-size: small;
                font-style: normal;
              `}
            >
              {place.address}
            </address>
            <p
              css={css`
                font-weight: bold;
              `}
            >
              <Link to={`/places/${place.id}`}>{place.name}</Link>
            </p>
            <div
              css={css`
                font-size: small;
                font-style: normal;
              `}
            >
              {place.closed_on && (
                <p>{`定休日: ${place.closed_on.join(" / ")}`}</p>
              )}
              <p>{place.business_hours}</p>
            </div>
          </div>
        ))}
        {places.length % 12 < 12 &&
          [...Array(12 - (places.length % 12))].map(() => (
            <div
              css={mq({
                width: [`100%`, `48%`, `31%`, `23%`],
              })}
            ></div>
          ))}
      </div>

      {pageContext && (
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            a {
              border-radius: 3em;
              background: #e50914;
              color: #f5f5f1;
              margin: 0 auto;
              padding: 0.5em 2em;
              text-decoration: none;
              font-size: 1.2rem;
              max-width: 640px;
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
      )}
    </>
  );
};

export default PlaceList;
