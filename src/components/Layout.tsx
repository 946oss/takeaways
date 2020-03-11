import * as React from "react";
import { Link } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import { Global, css } from "@emotion/core";
import "ress";
import "mapbox-gl/dist/mapbox-gl.css";

export default ({ children }) => (
  <>
    <Global
      styles={css`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          background: #f5f5f1;
          color: #221f1f;
        }

        a {
          color: #e50914;
        }
      `}
    />
    <Header />
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 0px 1.0875rem 1.45rem;
        padding-top: 0;
      `}
    >
      <nav
        css={css`
          margin: 1rem 0 2rem;
          text-align: center;

          a {
            background: #e50914;
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
        `}
      >
        <Link to="/">一覧を見る</Link>
        <Link to="/map/">地図から探す</Link>
      </nav>

      {children}
    </div>
    <Footer />
  </>
);
