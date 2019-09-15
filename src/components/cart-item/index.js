import React from "react";
import "./cart-item.style.scss";

const CartItem = item => {
  const { imageUrl, name, price, quantity } = item.item;
  return (
    <li className="cart-item clearfix">
      <img src={`${imageUrl}`} alt={name} />
      <div className="cart-item__details">
        <p className="name">{name}</p>
        <p>
          {quantity} x ${price}
        </p>
      </div>
    </li>
  );
};

export default CartItem;
