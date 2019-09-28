import { gql } from "apollo-boost";

export const TOGGLE_CART_DROPDOWN = gql`
  mutation ToggleCartDropdown {
    toggleCartDropdown @client
  }
`;
