import React from "react";
import { Mutation, Query } from "react-apollo";
import { TOGGLE_CART_DROPDOWN } from "graphql/mutations";
import { GET_CART_COUNT } from "graphql/queries";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIconView = ({ cartCount, toggleCartDropdown }) => {
  return (
    <div className="cart-icon-wrapper" onClick={toggleCartDropdown}>
      <ShoppingIcon className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

const CartIcon = () => {
  return (
    <Query query={GET_CART_COUNT}>
      {({ data: { cartCount } }) => (
        <Mutation mutation={TOGGLE_CART_DROPDOWN}>
          {toggleCartDropdown => (
            <CartIconView
              toggleCartDropdown={toggleCartDropdown}
              cartCount={cartCount}
            />
          )}
        </Mutation>
      )}
    </Query>
  );
};

export default CartIcon;
