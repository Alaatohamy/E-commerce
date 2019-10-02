import React from "react";
import { CheckoutItems, Payment } from "components";
import { StyledCheckoutPage, Hint } from "./checkout-page.style";

const CheckoutPage = () => {
  return (
    <StyledCheckoutPage>
      <CheckoutItems />
      <Payment />
      <Hint>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </Hint>
    </StyledCheckoutPage>
  );
};

export default CheckoutPage;
