import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartDropDown } from "redux/cart/cart.actions";
import { selectCount } from "redux/cart/cart.selectors";
import { CartIconWarper, CartCount, ShoppingCartIcon } from "./cart-icon.style";

const CartIcon = ({ count, toggleCartDropDown }) => {
  return (
    <CartIconWarper onClick={toggleCartDropDown}>
      <ShoppingCartIcon />
      <CartCount>{count}</CartCount>
    </CartIconWarper>
  );
};

const mapDispatch = dispatch => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown())
});

const mapState = createStructuredSelector({
  count: selectCount
});

export default connect(
  mapState,
  mapDispatch
)(CartIcon);
