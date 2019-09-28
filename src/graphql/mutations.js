import { gql } from "apollo-boost";

export const TOGGLE_CART_DROPDOWN = gql`
  mutation ToggleCartDropdown {
    toggleCartDropdown @client
  }
`;

export const ADD_CART_ITEM = gql`
  mutation AddCartItem($item: Item!) {
    addCartItem(item: $item) @client
  }
`;

export const REMOVE_CART_ITEM = gql`
  mutation RemoveCartItem($id: ID) {
    removeCartItem(id: $id) @client
  }
`;

export const DECREASE_CART_ITEM = gql`
  mutation DecreaseCartItem($item: Item) {
    decreaseCartItem(item: $item) @client
  }
`;
