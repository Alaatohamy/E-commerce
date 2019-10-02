import styled from "styled-components";
import { link } from "styles/general/anchor";

export const DecreaseArrow = styled.span`
  margin-right: 8px;
  ${link}
`;

export const IncreaseArrow = styled.span`
  margin-left: 8px;
  ${link}
`;

export const Remove = styled.span`
  ${link}
`;

export const CheckoutImg = styled.img`
  max-height: 140px;
`;

export const CheckoutTableData = styled.td`
  height: 170px;
  max-height: 170px;
  border-bottom: 1px solid darkgray;
  font-size: 20px;

  &:last-child {
    text-align: center;
  }
`;
