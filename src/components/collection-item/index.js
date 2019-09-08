import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from 'redux/cart/cart.actions';
import './collection-item.style.scss';

const CardItem = (props) => {
  const {item, addToCart} = props;
  const {imageUrl, name, price} = item;
  return (
    <li className="collection-card" >
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="background-image--hover">
          <button onClick={() => addToCart({count: 1, item})}>Add to Cart</button>
        </div>
      </div>
      <div className="collection-card__details clearfix">
        <p className="pull-start">{name}</p>
        <p className="pull-end">{price}$</p>
      </div>
    </li>
  )
}

const mapDispatch = dispatch => ({
  addToCart: (data) => dispatch(addToCart(data))
});

export default connect(null, mapDispatch)(CardItem);