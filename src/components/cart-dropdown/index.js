import React from 'react';
import { connect } from 'react-redux';
import { Button, CartItem } from 'components';
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

const mapState = ({cart: {cartItems}}) => ({
  cartItems
});

export default connect(mapState)(CartDropdown);