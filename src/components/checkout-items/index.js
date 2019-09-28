import React from "react";
import { flowRight } from "lodash";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { GET_CART_ITEMS, GET_CART_TOTAL_PRICE } from "graphql/queries";
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

const CheckoutItems = ({
  getCartItems: { cartItems },
  getCartTotalPrice: { totalPrice }
}) => <CheckoutItemsView cartItems={cartItems} totalPrice={totalPrice} />;

export default flowRight(
  graphql(GET_CART_ITEMS, { name: "getCartItems" }),
  graphql(GET_CART_TOTAL_PRICE, { name: "getCartTotalPrice" })
)(CheckoutItems);
