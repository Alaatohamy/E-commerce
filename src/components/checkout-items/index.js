import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartItems, selectTotalPrice } from 'redux/cart/cart.selectors';
import { CheckoutItem } from 'components';
import './checkout-items.style.scss';

const CheckoutItems = ({ cartItems, totalPrice }) => {
  return (
    <>
    {
      cartItems.length? (
        <table className="checkout-page-content">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            { cartItems.map(item => <CheckoutItem key={item.id} item={item} />) }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Total: ${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      ): (
        <div className="no-data-wrapper">
          <div className="no-data">
            <p>Your Cart is Empty, <Link to="/shop">Shop Now <span role="img" aria-label="Sparkles">&#10024;</span></Link></p>
          </div>
        </div>
      )
    }
  </>
  )
}

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default connect(mapState)(CheckoutItems);