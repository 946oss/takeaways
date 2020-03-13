import * as React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Logo from "./Logo";

export default () => (
  <div
    css={css`
      background: #f5f5f1;
      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
        position: relative;
      `}
    >
      <div
        css={css`
          font-size: 0.8rem;
          position: absolute;
          right: 1.0875rem;
          top: 0.5rem;
        `}
      >
        <a
          href="https://forms.gle/UqnWaFTLUZpCEsFg6"
          target="_blank"
          rel="noopener noreferrer"
        >
          掲載を希望される店舗様
        </a>
      </div>

      <h1
        css={css`
          border-bottom: 2px solid #221f1f;
          font-family: YuMincho, serif;
          margin: 0;
          padding: 0.5em 0 1em;
          text-align: center;
        `}
      >
        <Link
          to="/"
          css={css`
            display: block;
            width: 260px;
            margin: 0 auto;
            color: #221f1f;
            display: block;
            text-decoration: none;
          `}
        >
          <Logo />
        </Link>
      </h1>
    </div>
  </div>
);
