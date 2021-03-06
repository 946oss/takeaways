import React, { useState } from "react";
import { MapQuery } from "../../types/graphql-types";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import ReactMapGL, {
  Popup,
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from "react-map-gl";
import Layout from "../components/Layout";
import { css } from "@emotion/core";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const Map: React.FC<{ data: MapQuery }> = ({ data }) => {
  const [viewport, setViewport] = useState(
    data.site.siteMetadata.defaultMapLocation
  );
  const [popup, setPopup] = useState(null);
  const [selectedPickupTags, setSelectedPickupTags] = useState([]);

  const placeNodes = data.allContentfulPlace.edges.map(({ node }) => node);
  const places =
    selectedPickupTags.length > 0
      ? placeNodes.filter(place =>
          selectedPickupTags
            .map(t => place.tags && place.tags.map(tag => tag.slug).includes(t))
            .every(find => find)
        )
      : placeNodes;

  const pickupTags = data.allContentfulPlaceTag.edges
    .map(({ node }) => node)
    .filter(tag => data.site.siteMetadata.pickUpTags.includes(tag.slug));

  return (
    <Layout>
      <SEO title="地図から探す" />
      {pickupTags.length > 0 && (
        <div
          css={css`
            margin: 1em 0;
            display: flex;
            justify-content: space-evenly;
            font-weight: bold;
            flex-wrap: wrap;

            input {
              margin-right: 0.5em;
            }
          `}
        >
          {pickupTags.map(tag => (
            <label key={tag.slug}>
              <input
                type="checkbox"
                value={tag.slug}
                checked={selectedPickupTags.includes(tag.slug)}
                onChange={event =>
                  selectedPickupTags.includes(event.target.value)
                    ? setSelectedPickupTags(
                        selectedPickupTags.filter(
                          tag => tag !== event.target.value
                        )
                      )
                    : setSelectedPickupTags([
                        ...selectedPickupTags,
                        event.target.value
                      ])
                }
              />
              {tag.name}
            </label>
          ))}
        </div>
      )}
      <ReactMapGL
        {...viewport}
        width="100%"
        height="80vh"
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
        onViewportChange={setViewport}
        mapboxApiAccessToken="pk.eyJ1IjoiOTQ2b3NzIiwiYSI6ImNrN2t2dTA4eTAwbjYzbHA4YjdpOGxhbm4ifQ.4BZeulOXSjBeAClmJaM9Ig"
      >
        {places.map(place => (
          <Marker
            key={place.id}
            longitude={place.location.lon}
            latitude={place.location.lat}
          >
            <svg
              height="20"
              viewBox="0 0 24 24"
              style={{
                cursor: "pointer",
                fill: "#e50914",
                stroke: "none",
                transform: `translate(${-20 / 2}px,${-20}px)`
              }}
              onClick={() => setPopup(place)}
            >
              <path d={ICON} />
            </svg>
          </Marker>
        ))}

        {popup && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popup.location.lon}
            latitude={popup.location.lat}
            closeOnClick={false}
            onClose={() => setPopup(null)}
          >
            <div>
              <h4>
                <Link to={`/places/${popup.id}`}>{popup.name}</Link>
              </h4>
              <p>{popup.description.description}</p>
            </div>
          </Popup>
        )}

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
    </Layout>
  );
};

export const pageQuery = graphql`
  query Map {
    site {
      siteMetadata {
        title
        defaultMapLocation {
          latitude
          longitude
          zoom
        }
        pickUpTags
      }
    }
    allContentfulPlaceTag(
      filter: { node_locale: { eq: "ja-JP" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          slug
          name
        }
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
          business_hours
          name
          description {
            description
          }
          location {
            lat
            lon
          }
          tags {
            slug
          }
        }
      }
    }
  }
`;

export default Map;
