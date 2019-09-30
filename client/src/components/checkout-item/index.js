import React from "react";
import { connect } from "react-redux";
import {
  addCartItem,
  RemoveCartItem,
  DecreaseCartItem
} from "redux/cart/cart.actions";
import {
  DecreaseArrow,
  IncreaseArrow,
  Remove,
  CheckoutImg,
  CheckoutTableData
} from "./checkout-item.style";

const CheckoutItem = ({
  item,
  addCartItem,
  DecreaseCartItem,
  RemoveCartItem
}) => {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <tr>
      <CheckoutTableData>
        <CheckoutImg src={imageUrl} alt={name} />
      </CheckoutTableData>
      <CheckoutTableData>{name}</CheckoutTableData>
      <CheckoutTableData>
        <DecreaseArrow
          role="img"
          aria-label="Decrease arrow"
          onClick={() => DecreaseCartItem(item)}
        >
          &#10094;
        </DecreaseArrow>
        {quantity}
        <IncreaseArrow
          role="img"
          aria-label="Increase arrow"
          onClick={() => addCartItem(item)}
        >
          &#10095;
        </IncreaseArrow>
      </CheckoutTableData>
      <CheckoutTableData>{price}</CheckoutTableData>
      <CheckoutTableData onClick={() => RemoveCartItem(id)}>
        <Remove role="img" aria-label="Remove">
          &#10005;
        </Remove>
      </CheckoutTableData>
    </tr>
  );
};

const mapDispatch = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item)),
  DecreaseCartItem: item => dispatch(DecreaseCartItem(item)),
  RemoveCartItem: id => dispatch(RemoveCartItem(id))
});

export default connect(
  null,
  mapDispatch
)(CheckoutItem);
