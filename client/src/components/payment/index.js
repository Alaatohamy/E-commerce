import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { selectTotalPrice } from "redux/cart/cart.selectors";
import { clearCart } from "redux/cart/cart.actions";
import { Hint } from "pages/checkout-page/checkout-page.style";

const Payment = ({ totalPrice, clearCart }) => {
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
        clearCart();
      })
      .catch(error => {
        console.log("payment error: ", error);
        alert(
          "There is an issue with your payment, Check your credit card info, please"
        );
      });
  };

  return totalPrice ? (
    <>
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
      <Hint>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </Hint>
    </>
  ) : null;
};

const mapState = createStructuredSelector({
  totalPrice: selectTotalPrice
});

const mapDispatch = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(
  mapState,
  mapDispatch
)(Payment);
