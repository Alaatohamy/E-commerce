import React, { useContext } from "react";
import { CartContext } from "providers/cart/cart.provider";
import "./checkout-item.style.scss";

const CheckoutItem = ({ item }) => {
  const { id, imageUrl, name, price, quantity } = item;
  const { addCartItem, removeCartItem, decreaseItem } = useContext(CartContext);

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
          onClick={() => decreaseItem(item)}
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

export default CheckoutItem;
