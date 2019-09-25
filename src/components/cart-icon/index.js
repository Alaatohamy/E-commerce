import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { selectCount } from "redux/cart/cart.selectors";
import CartContext from "contexts/cart/cart.context";
import "./cart-icon.style.scss";

const CartIcon = ({ count }) => {
  const { toggleCartDropDown } = useContext(CartContext);

  return (
    <div className="cart-icon-wrapper" onClick={toggleCartDropDown}>
      <ShoppingIcon className="cart-icon" />
      <span className="cart-count">{count}</span>
    </div>
  );
};

const mapState = createStructuredSelector({
  count: selectCount
});

export default connect(mapState)(CartIcon);
