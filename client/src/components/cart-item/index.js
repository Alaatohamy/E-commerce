import React, { memo } from "react";
import {
  SingleCartItem,
  CartItemDetails,
  CartItemName
} from "./cart-item.style";

const CartItem = item => {
  const { imageUrl, name, price, quantity } = item.item;
  return (
    <SingleCartItem>
      <img src={`${imageUrl}`} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <p>
          {quantity} x ${price}
        </p>
      </CartItemDetails>
    </SingleCartItem>
  );
};

export default memo(CartItem);
