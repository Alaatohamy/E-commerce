import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, CartItem } from 'components';
import { selectCartItems } from 'redux/cart/cart.selectors';
import './cart-dropdown.style.scss';

class CartDropdown extends React.Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div className="cart-dropdown-wrapper">
        <ul className="cart-dropdown-content">
          {
            cartItems.map(item => <CartItem key={item.id} item={item} />)
          }
        </ul>
        <Button text="Go to checkout" color="black" />
      </div>
    )
  }
}

const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapState)(CartDropdown);