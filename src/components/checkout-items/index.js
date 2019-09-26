import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CheckoutItem } from "components";
import { CartContext } from "providers/cart/cart.provider";
import "./checkout-items.style.scss";

const CheckoutItems = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

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

export default CheckoutItems;
