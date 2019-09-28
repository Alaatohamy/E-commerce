import React from "react";
import { flowRight } from "lodash";
import { graphql } from "react-apollo";
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  DECREASE_CART_ITEM
} from "graphql/mutations";
import "./checkout-item.style.scss";

const CheckoutItemView = ({
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

const CheckoutItem = ({
  addCartItem,
  decreaseCartItem,
  removeCartItem,
  ...otherProps
}) => (
  <CheckoutItemView
    {...otherProps}
    addCartItem={item => addCartItem({ variables: { item } })}
    removeCartItem={id => removeCartItem({ variables: { id } })}
    decreaseCartItem={item => decreaseCartItem({ variables: { item } })}
  />
);

export default flowRight(
  graphql(ADD_CART_ITEM, { name: "addCartItem" }),
  graphql(DECREASE_CART_ITEM, { name: "decreaseCartItem" }),
  graphql(REMOVE_CART_ITEM, { name: "removeCartItem" })
)(CheckoutItem);
