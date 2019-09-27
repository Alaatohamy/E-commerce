import { gql } from "apollo-boost";

/** Define usable queries */
export const GET_CART_CLICKED = gql`
  {
    cartClicked @client
  }
`;
