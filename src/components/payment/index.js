import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Query } from "react-apollo";
import { GET_CART_TOTAL_PRICE } from "graphql/queries";

const PaymentView = ({ totalPrice }) => {
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

const Payment = () => (
  <Query query={GET_CART_TOTAL_PRICE}>
    {({ data: { totalPrice } }) => <PaymentView totalPrice={totalPrice} />}
  </Query>
);
export default Payment;
