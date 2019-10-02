import styled from "styled-components";
import { clearfix } from "styles/utilities/floats";

export const SingleCartItem = styled.li`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  ${clearfix}

  img {
    width: 30%;
  }
`;

export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  p {
    line-height: 22px;
    margin: 0;
  }
`;

export const CartItemName = styled.p`
  font-size: 16px;
`;
