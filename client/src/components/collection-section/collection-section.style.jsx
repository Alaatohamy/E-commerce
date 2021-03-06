import styled from "styled-components";
import { clearfix } from "styles/utilities/floats";

export const CollectionTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 25px;
`;

export const CollectionContainerUL = styled.ul`
  margin-inline-start: -15px;
  margin-inline-end: -15px;
  ${clearfix}
`;
