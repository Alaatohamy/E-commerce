import { css } from "styled-components";

export const clearfix = css`
  &::before,
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;
