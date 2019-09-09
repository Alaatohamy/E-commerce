import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Button, CartItem } from 'components';
import { selectCartItems } from 'redux/cart/cart.selectors';
import './cart-dropdown.style.scss';

const CartDropdown = props => {
  const {cartItems, history} = props;
  return (
    <div className="cart-dropdown-wrapper">
      {
        (cartItems.length)?
        (
          <>
            <ul className="cart-dropdown-content">
              { cartItems.map(item => <CartItem key={item.id} item={item} />) }
            </ul>
            <Button
              text="Go to checkout"
              color="black"
              type="button"
              onClick={() => history.push('/checkout')}
            />
          </>
        )
        : (
          <p className="no-data">Your Cart is Empty</p>
        )
      }
    </div>
  )
}

const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapState)(CartDropdown));