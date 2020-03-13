import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
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
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
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
