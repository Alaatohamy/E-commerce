import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import { toggleCartDropDown } from 'redux/cart/cart.actions';
import { selectCount } from 'redux/cart/cart.selectors';
import './cart-icon.style.scss';

const CartIcon = ({ count, toggleCartDropDown }) => {
  return (
    <div className="cart-icon-wrapper" onClick={toggleCartDropDown} >
      <ShoppingIcon className="cart-icon" />
      <span className="cart-count">{count}</span>
    </div>
  )
}

const mapDispatch = dispatch => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown())
});

const mapState = createStructuredSelector({
  count: selectCount
});

export default connect(mapState, mapDispatch)(CartIcon);