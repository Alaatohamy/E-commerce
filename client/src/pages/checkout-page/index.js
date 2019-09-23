import React from "react";
import { CheckoutItems, Payment } from "components";
import "./checkout-page.style.scss";

const CheckoutPage = () => {
  return (
    <section className="checkout-page">
      <CheckoutItems />
      <Payment />
      <div className="hint">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
    </section>
  );
};

export default CheckoutPage;
