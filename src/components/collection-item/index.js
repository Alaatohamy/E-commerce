import React from "react";
import { Mutation } from "react-apollo";
import { ADD_CART_ITEM } from "graphql/mutations";
import "./collection-item.style.scss";

const CardItemView = props => {
  const { item, addCartItem } = props;
  const { imageUrl, name, price } = item;
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

const CardItem = props => (
  <Mutation mutation={ADD_CART_ITEM}>
    {addCartItem => (
      <CardItemView
        addCartItem={item => addCartItem({ variables: { item } })}
        {...props}
      />
    )}
  </Mutation>
);

export default CardItem;
