import React from 'react';
import { connect } from 'react-redux';
import { Button, CartItem } from 'components';
import './cart-dropdown.style.scss';

class CartDropdown extends React.Component {
  render() {
    const {items} = this.props;
    console.log(items);

    return (
      <div className="cart-dropdown-wrapper">
        <ul className="cart-dropdown-content">
          {
            items.map(item => { console.log(item); return <CartItem key={item.id} item={item} />})
          }
        </ul>
        <Button text="Go to checkout" color="black" />
      </div>
    )
  }
}

const mapState = ({cart: {cartData: {items}} }) => ({
  items
});

export default connect(mapState)(CartDropdown);