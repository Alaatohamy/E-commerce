import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "redux/cart/cart.actions";
import "./collection-item.style.scss";

const CardItem = props => {
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

const mapDispatch = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  null,
  mapDispatch
)(CardItem);
