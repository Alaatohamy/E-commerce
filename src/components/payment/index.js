import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckout from 'react-stripe-checkout';
import { selectTotalPrice } from 'redux/cart/cart.selectors';

const Payment = ({totalPrice}) => {
  const stripPrice = totalPrice * 100;
  const publishablekey = "pk_test_6Fpl9uWUd5ku58jw4feyE116006h7YbkT5";
  const onToken = token => {
    console.log(token);
    alert('payment succeed');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="T-Commerce"
      billingAddress
      shippingAddress
      image=""
      description={`Your Total is $${totalPrice}`}
      panelLabel="Pay Now"
      amount={stripPrice}
      token={onToken}
      stripeKey={publishablekey}
    />
  )
}

const mapState = createStructuredSelector({
  totalPrice: selectTotalPrice
});

export default connect(mapState)(Payment);