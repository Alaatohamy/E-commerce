import { gql } from "apollo-boost";

/** Define usable queries */
export const GET_CART_CLICKED = gql`
  {
    cartClicked @client
  }
`;

export const GET_CART_COUNT = gql`
  {
    cartCount @client
  }
`;

export const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const GET_CART_TOTAL_PRICE = gql`
  {
    totalPrice @client
  }
`;
