import React from "react";
import { CheckoutItems, Payment } from "components";
import { StyledCheckoutPage } from "./checkout-page.style";

const CheckoutPage = () => {
  return (
    <StyledCheckoutPage>
      <CheckoutItems />
      <Payment />
    </StyledCheckoutPage>
  );
};

export default CheckoutPage;
