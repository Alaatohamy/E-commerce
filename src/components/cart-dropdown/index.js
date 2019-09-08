import React from 'react';
import { Button } from 'components';
import './cart-dropdown.style.scss';

class CartDropdown extends React.Component {
  render() {
    return (
      <div className="cart-dropdown-wrapper">
        <div className="cart-dropdown-content">content</div>
        <Button text="Go to checkout" color="black" />
      </div>
    )
  }
}

export default CartDropdown;