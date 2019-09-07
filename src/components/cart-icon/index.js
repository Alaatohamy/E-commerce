import React from 'react';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import './cart-icon.style.scss';

const CartIcon = () => {
  return (
    <div className="cart-icon-wrapper">
      <ShoppingIcon className="cart-icon" />
      <span className="cart-count">0</span>
    </div>
  )
}

export default CartIcon;