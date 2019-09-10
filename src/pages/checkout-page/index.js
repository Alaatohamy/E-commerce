import React from 'react';
import { CheckoutItems } from 'components';
import './checkout-page.style.scss';

const CheckoutPage = () => {
  return (
    <section className="checkout-page">
      <CheckoutItems />
    </section>
  )
}

export default CheckoutPage;