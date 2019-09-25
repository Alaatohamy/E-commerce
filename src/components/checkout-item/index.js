import React from "react";
import { connect } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  decreaseCartItem
} from "redux/cart/cart.actions";
import "./checkout-item.style.scss";

const CheckoutItem = ({
  item,
  addCartItem,
  decreaseCartItem,
  removeCartItem
}) => {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <tr className="checkout-item">
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>
        <span
          className="link"
          role="img"
          aria-label="Decrease arrow"
          onClick={() => decreaseCartItem(item)}
        >
          &#10094;
        </span>
        {quantity}
        <span
          className="link"
          role="img"
          aria-label="Increase arrow"
          onClick={() => addCartItem(item)}
        >
          &#10095;
        </span>
      </td>
      <td>{price}</td>
      <td onClick={() => removeCartItem(id)}>
        <span className="link" role="img" aria-label="Remove">
          &#10005;
        </span>
      </td>
    </tr>
  );
};

const mapDispatch = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
  decreaseCartItem: item => dispatch(decreaseCartItem(item)),
  removeCartItem: id => dispatch(removeCartItem(id))
});

export default connect(
  null,
  mapDispatch
)(CheckoutItem);
