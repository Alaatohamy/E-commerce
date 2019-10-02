import React from "react";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems, selectTotalPrice } from "redux/cart/cart.selectors";
import { CheckoutItem } from "components";
import {
  CheckoutTable,
  CheckoutTableHead,
  CheckoutTh,
  CheckoutTableFooter,
  CheckoutNoDataWrapper,
  CheckoutNoData
} from "./checkout-items.style";

const CheckoutItems = ({ cartItems, totalPrice }) => {
  return (
    <>
      {cartItems.length ? (
        <CheckoutTable>
          <CheckoutTableHead>
            <tr>
              <CheckoutTh>Product</CheckoutTh>
              <CheckoutTh>Description</CheckoutTh>
              <CheckoutTh>Quantity</CheckoutTh>
              <CheckoutTh>Price</CheckoutTh>
              <CheckoutTh>Remove</CheckoutTh>
            </tr>
          </CheckoutTableHead>
          <tbody>
            {cartItems.map(item => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </tbody>
          <CheckoutTableFooter>
            <tr>
              <td colSpan="5">Total: ${totalPrice}</td>
            </tr>
          </CheckoutTableFooter>
        </CheckoutTable>
      ) : (
        <CheckoutNoDataWrapper>
          <CheckoutNoData>
            <p>
              Your Cart is Empty,{" "}
              <Link to="/shop">
                Shop Now{" "}
                <span role="img" aria-label="Sparkles">
                  &#10024;
                </span>
              </Link>
            </p>
          </CheckoutNoData>
        </CheckoutNoDataWrapper>
      )}
    </>
  );
};

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
});

export default connect(mapState)(CheckoutItems);
