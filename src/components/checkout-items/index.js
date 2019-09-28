import React from "react";
import { createStructuredSelector } from "reselect";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectTotalPrice } from "redux/cart/cart.selectors";
import { GET_CART_ITEMS } from "graphql/queries";
import { CheckoutItem } from "components";
import "./checkout-items.style.scss";

const CheckoutItemsView = ({ cartItems, totalPrice }) => {
  return (
    <>
      {cartItems.length ? (
        <table className="checkout-page-content">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Total: ${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="no-data-wrapper">
          <div className="no-data">
            <p>
              Your Cart is Empty,{" "}
              <Link to="/shop">
                Shop Now{" "}
                <span role="img" aria-label="Sparkles">
                  &#10024;
                </span>
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const mapState = createStructuredSelector({
  totalPrice: selectTotalPrice
});

const CheckoutItemsConnected = connect(mapState)(CheckoutItemsView);

const CheckoutItems = () => (
  <Query query={GET_CART_ITEMS}>
    {({ data: { cartItems } }) => (
      <CheckoutItemsConnected cartItems={cartItems} />
    )}
  </Query>
);

export default CheckoutItems;
