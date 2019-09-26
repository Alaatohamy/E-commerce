import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { CartContext } from "providers/cart/cart.provider";
import "./cart-icon.style.scss";

const CartIcon = () => {
  const { toggleCartDropDown, count } = useContext(CartContext);
  return (
    <div className="cart-icon-wrapper" onClick={toggleCartDropDown}>
      <ShoppingIcon className="cart-icon" />
      <span className="cart-count">{count}</span>
    </div>
  );
};

export default CartIcon;
