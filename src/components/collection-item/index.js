import React, { useContext } from "react";
import { CartContext } from "providers/cart/cart.provider";
import "./collection-item.style.scss";

const CardItem = props => {
  const { item } = props;
  const { imageUrl, name, price } = item;
  const { addCartItem } = useContext(CartContext);
  return (
    <li className="collection-card">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="background-image--hover">
          <button onClick={() => addCartItem(item)} type="button">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="collection-card__details clearfix">
        <p className="pull-start">{name}</p>
        <p className="pull-end">{price}$</p>
      </div>
    </li>
  );
};

export default CardItem;
