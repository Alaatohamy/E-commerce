import { css } from "styled-components";

export const clearfix = css`
  &::before,
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const pull_start = css`
  float: left;
`;

export const pull_end = css`
  float: right;
`;
