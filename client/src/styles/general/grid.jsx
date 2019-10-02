import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-inline-start: 15px;
  padding-inline-end: 15px;
`;

export const cols = css`
  margin-inline-start: -15px;
  margin-inline-end: -15px;

  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const col__2 = css`
  float: left;
  width: 50%;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
`;
