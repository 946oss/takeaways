import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/core";

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
        <FontAwesomeIcon icon={faShoppingBag} />
        <Link
          to="/"
          css={css`
            color: #221f1f;
            display: block;
            text-decoration: none;
          `}
        >
          お持ち帰りごはん
        </Link>
        <p
          css={css`
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
              "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 1;
            font-size: 1rem;
          `}
        >
          KUSHIRO
        </p>
      </h1>
    </div>
  </div>
);
