import styled from "styled-components";
import { col__2, cols } from "styles/general/grid";

export const SignPage = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

export const SignFormColContainer = styled.section`
  @media (min-width: 900px) {
    ${cols}
  }
`;

export const SignFormCol = styled.div`
  min-width: 380px;
  @media (min-width: 900px) {
    ${col__2}
  }

  &:first-child {
    padding-inline-start: 0;
  }

  &:last-child {
    padding-inline-end: 0;
  }
`;
