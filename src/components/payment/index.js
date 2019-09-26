import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { CartContext } from "providers/cart/cart.provider";

const Payment = () => {
  const { totalPrice } = useContext(CartContext);
  const stripPrice = totalPrice * 100;
  const publishablekey = "pk_test_6Fpl9uWUd5ku58jw4feyE116006h7YbkT5";
  const onToken = token => {
    alert("payment succeed");
  };

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
  );
};

export default Payment;
