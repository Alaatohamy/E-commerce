import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";

export const CartIconWarper = styled.div`
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

export const ShoppingCartIcon = styled(ShoppingIcon)`
  width: 25px;
  height: 25px;
  vertical-align: middle;
`;
