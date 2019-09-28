import React from "react";
import { withRouter } from "react-router-dom";
import { Mutation, Query } from "react-apollo";
import { TOGGLE_CART_DROPDOWN } from "graphql/mutations";
import { GET_CART_ITEMS } from "graphql/queries";
import CartDropdownView from "./index";

const CartDropdownConnected = withRouter(CartDropdownView);

const CartDropdown = () => (
  <Query query={GET_CART_ITEMS}>
    {({ data: { cartItems } }) => (
      <Mutation mutation={TOGGLE_CART_DROPDOWN}>
        {toggleCartDropdown => (
          <CartDropdownConnected
            toggleCartDropdown={toggleCartDropdown}
            cartItems={cartItems}
          />
        )}
      </Mutation>
    )}
  </Query>
);

export default CartDropdown;
