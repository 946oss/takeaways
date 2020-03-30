import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";

export default () => (
  <div
    css={css`
      background: #221f1f;
      color: #7e7373;
      margin-top: 1.45rem;
      padding: 2rem;
      text-align: center;
    `}
  >
    <div>
      <p
        css={css`
          font-weight: bold;
        `}
      >
        釧路市ビジネスサポートセンター k-Biz
      </p>
      <p>
        営業時間：9:00-17:00
        <br />
        定休日：日曜・月曜
        <br />
        <a href="mailto:info@k-biz.kushiro.jp">info@k-biz.kushiro.jp</a>
        <br />
        <a href="tel:0154685624">0154-68-5624</a> ​
      </p>
      <p
        css={css`
          margin: 0.5rem 0;
        `}
      >
        &bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;
      </p>
      <p>
        釧路商工会議所
        <br />
        <a href="tel:0154414141">0154-41-4141</a>
      </p>
      <p
        css={css`
          margin: 0.5rem 0;
        `}
      >
        &bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;&nbsp;&bull;
      </p>
      <p>
        一般社団法人北海道中小企業家同友会くしろ支部
        <br />
        <a href="tel:0154310923">0154-31-0923</a>
      </p>
    </div>
    <div
      css={css`
        font-weight: bold;
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem 0.5rem;
      `}
    >
      お持ち帰りごはん by 釧路OSSコミュニティ
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
