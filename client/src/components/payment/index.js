import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { selectTotalPrice } from "redux/cart/cart.selectors";

const Payment = ({ totalPrice }) => {
  const stripPrice = totalPrice * 100;
  const publishablekey = "pk_test_6Fpl9uWUd5ku58jw4feyE116006h7YbkT5";
  const onToken = token => {
    axios
      .post("/payment", {
        amount: stripPrice,
        token
      })
      .then(response => {
        alert("Payment succeeded");
      })
      .catch(error => {
        console.log("payment error: ", error);
        alert(
          "There is an issue with your payment, Check your credit card info, please"
        );
      });
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

const mapState = createStructuredSelector({
  totalPrice: selectTotalPrice
});

export default connect(mapState)(Payment);
