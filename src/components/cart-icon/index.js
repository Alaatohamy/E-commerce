import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_DROPDOWN } from "graphql/mutations";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { selectCount } from "redux/cart/cart.selectors";
import "./cart-icon.style.scss";

const CartIconView = ({ count, toggleCartDropdown }) => {
  return (
    <div className="cart-icon-wrapper" onClick={toggleCartDropdown}>
      <ShoppingIcon className="cart-icon" />
      <span className="cart-count">{count}</span>
    </div>
  );
};

const mapState = createStructuredSelector({
  count: selectCount
});

const CartIconConnected = connect(mapState)(CartIconView);

const CartIcon = () => {
  return (
    <Mutation mutation={TOGGLE_CART_DROPDOWN}>
      {toggleCartDropdown => (
        <CartIconConnected toggleCartDropdown={toggleCartDropdown} />
      )}
    </Mutation>
  );
};

export default CartIcon;
