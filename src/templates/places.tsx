import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import ReactMapGL, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from "react-map-gl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Global, css } from "@emotion/core";
import Layout from "../components/Layout";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

export default ({ data }) => {
  const place = data.contentfulPlace;
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 240,
    latitude: place.location.lat,
    longitude: place.location.lon,
    zoom: 14
  });

  return (
    <Layout>
      <Global
        styles={css`
          h2 {
            margin: 1rem 0 0.5rem;
          }
        `}
      />
      <SEO
        title={place.name}
        description={place.description.description}
        meta={[
          {
            property: "og:latitude",
            content: place.location.lat
          },
          {
            property: "og:longitude",
            content: place.location.lon
          }
        ]}
      />
      <section>
        <h1
          css={css`
            text-align: center;
            margin: 1em 0;
          `}
        >
          {place.name}
        </h1>
        {place.tags && place.tags.length > 0 ? (
          <div
            css={css`
              font-size: 0.7rem;
              font-weight: bold;
              text-align: center;

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
        ) : null}
        <div
          css={css`
            max-width: 480px;
            margin: 1em auto;
          `}
        >
          {place.pictures ? (
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              {place.pictures.map(pic => (
                <div key={pic.id}>
                  <img alt="お店の写真" srcSet={pic.fixed.srcSet} />
                </div>
              ))}
            </Carousel>
          ) : null}
        </div>
        <div
          css={css`
            margin: 0.5em 0 1em;
            text-align: center;
            white-space: pre-line;
          `}
        >
          <p>{place.description.description}</p>
        </div>

        {place.message ? (
          <div
            css={css`
              background: #fff;
              padding: 1.5rem;
              border-radius: 1rem;
            `}
          >
            <h3>お店からのメッセージ</h3>
            {documentToReactComponents(place.message.json)}
          </div>
        ) : null}

        <h2>メニュー</h2>

        <div>
          {place.menu && place.menu.length > 0 ? (
            place.menu.map(m => (
              <a href={m.file.url} key={m.id}>
                <img src={m.fixed.src} srcSet={m.fixed.secSet} alt={m.title} />
              </a>
            ))
          ) : (
            <p>メニュー情報がありません...</p>
          )}
        </div>

        <h2>店舗情報</h2>

        <table
          css={css`
            margin-bottom: 1rem;
            th {
              box-sizing: border-box;
              font-weight: bold;
              padding: 0 0.5rem 0.5rem;
              white-space: nowrap;
              line-height: 1.5;
            }
            td {
              box-sizing: border-box;
              padding: 0 0.5rem 0.5rem;
              line-height: 1.5;

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
              <td>
                <a
                  href={`https://maps.apple.com/?q=${place.location.lat},${place.location.lon}`}
                  rel="noopener noreferrer"
                >
                  {place.address}
                </a>
              </td>
            </tr>
            {place.closed_on ? (
              <tr>
                <th>定休日</th>
                <td>{place.closed_on.join(" / ")}</td>
              </tr>
            ) : null}
            <tr>
              <th>営業時間</th>
              <td>{place.business_hours}</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>
                {place.tel.map(n => (
                  <a href={`tel:${n}`} className="tel" key={n}>
                    {n}
                  </a>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <ReactMapGL
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken="pk.eyJ1IjoiOTQ2b3NzIiwiYSI6ImNrN2t2dTA4eTAwbjYzbHA4YjdpOGxhbm4ifQ.4BZeulOXSjBeAClmJaM9Ig"
          onLoad={event => {
            event.target.getStyle().layers.forEach(thisLayer => {
              if (thisLayer.type === "symbol") {
                event.target.setLayoutProperty(thisLayer.id, "text-field", [
                  "get",
                  "name_ja"
                ]);
              }
            });
          }}
        >
          <Marker longitude={place.location.lon} latitude={place.location.lat}>
            <svg
              height="20"
              viewBox="0 0 24 24"
              style={{
                cursor: "pointer",
                fill: "#e50914",
                stroke: "none",
                transform: `translate(${-20 / 2}px,${-20}px)`
              }}
            >
              <path d={ICON} />
            </svg>
          </Marker>

          <div
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              padding: 10px;
            `}
          >
            <FullscreenControl />
          </div>
          <div
            css={css`
              position: absolute;
              top: 36px;
              left: 0;
              padding: 10px;
            `}
          >
            <NavigationControl />
          </div>
          <div
            css={css`
              position: absolute;
              bottom: 36px;
              left: 0;
              padding: 10px;
            `}
          >
            <ScaleControl />
          </div>
        </ReactMapGL>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPlace(id: { eq: $id }) {
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
        file {
          url
        }
        fixed(width: 300, height: 300, cropFocus: CENTER) {
          srcSet
        }
      }
      menu {
        id
        title
        file {
          fileName
          url
          contentType
        }
        fixed(width: 300) {
          srcSet
          src
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
`;
