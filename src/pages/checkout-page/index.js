import React from 'react';
import { CheckoutItems, Payment } from 'components';
import './checkout-page.style.scss';

const CheckoutPage = () => {
  return (
    <section className="checkout-page">
      <CheckoutItems />
      <Payment />
    </section>
  )
}

export default CheckoutPage;