import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, RemoveCartItem, DecreaseCartItem } from 'redux/cart/cart.actions';
import './checkout-item.style.scss';

const CheckoutItem = ({item, addCartItem, DecreaseCartItem, RemoveCartItem}) => {
  const {id, imageUrl, name, price, quantity} = item;
  return (
    <tr className="checkout-item">
      <td><img src={imageUrl} alt={name} /></td>
      <td>{name}</td>
      <td>
        <span
          className="link"
          role="img"
          aria-label="Decrease arrow"
          onClick={() => DecreaseCartItem(item)}
        >
        &#10094;</span>
        {quantity}
        <span
          className="link"
          role="img"
          aria-label="Increase arrow"
          onClick={() => addCartItem(item)}
        >&#10095;</span>
      </td>
      <td>{price}</td>
      <td onClick={() => RemoveCartItem(id)}>
        <span className="link" role="img" aria-label="Remove">&#10005;</span>
      </td>
    </tr>
  )
}

const mapDispatch = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
  DecreaseCartItem: item => dispatch(DecreaseCartItem(item)),
  RemoveCartItem: id => dispatch(RemoveCartItem(id))
});

export default connect(null, mapDispatch)(CheckoutItem);