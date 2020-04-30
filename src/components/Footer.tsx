import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FooterQuery } from "../../types/graphql-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";
import { mq } from "../responsive";

export default () => {
  const { site }: FooterQuery = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          coopOrgs {
            name
            website
            email
            tel
          }
          copyright
        }
      }
    }
  `);

  return (
    <div
      css={css`
        background: #221f1f;
        color: #7e7373;
        margin-top: 1.45rem;
        padding: 2rem;
        text-align: center;
      `}
    >
      {site.siteMetadata.coopOrgs.length && (
        <div
          css={css(
            css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              line-height: 1.5;
              margin: 0 auto;
              max-width: 960px;

              & a {
                color: inherit;
              }
            `,
            mq({
              flexDirection: ["column", "row"]
            })
          )}
        >
          {site.siteMetadata.coopOrgs.map(org => (
            <div
              key={org.name}
              css={css`
                padding: 1rem;
              `}
            >
              <p
                css={css`
                  font-weight: bold;
                `}
              >
                {org.website ? (
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {org.name}
                  </a>
                ) : (
                  org.name
                )}
              </p>
              <p>
                <a href={`mailto:${org.email}`}>{org.email}</a>
              </p>
              <p>
                <a href={`tel:${org.tel}`}>{org.tel}</a>
              </p>
            </div>
          ))}
        </div>
      )}
      <div
        css={css`
          font-weight: bold;
          margin: 0 auto;
          max-width: 960px;
          padding: 1.45rem 1.0875rem 0.5rem;
        `}
      >
        {site.siteMetadata.copyright}
      </div>
      <div
        css={css`
          a {
            margin-bottom: 2rem;
            margin-left: 1rem;

            &:first-of-type {
              margin-left: 0;
            }
          }
        `}
      >
        <a
          href="https://github.com/946oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://twitter.com/946oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
    </div>
  );
};
