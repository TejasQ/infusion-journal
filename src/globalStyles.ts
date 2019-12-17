import { css } from "@emotion/core";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Cuprum", sans-serif;
    font-size: 16pt;
    color: #333;

    @media (prefers-color-scheme: dark) {
      background: #111;
      color: #fff;
    }
  }
`;
