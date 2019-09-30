import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "redux/cart/cart.actions";
import {
  CollectionCardItem,
  CollectionItemBackgroundImg,
  CollectionItemBackgroundImgHover,
  CollectionItemButton,
  CollectionCartItemDetails
} from "./collection-item.style";

const CardItem = props => {
  const { item, addCartItem } = props;
  const { imageUrl, name, price } = item;
  return (
    <CollectionCardItem>
      <CollectionItemBackgroundImg imageUrl={imageUrl}>
        <CollectionItemBackgroundImgHover>
          <CollectionItemButton onClick={() => addCartItem(item)} type="button">
            Add to Cart
          </CollectionItemButton>
        </CollectionItemBackgroundImgHover>
      </CollectionItemBackgroundImg>
      <CollectionCartItemDetails>
        <p>{name}</p>
        <p>{price}$</p>
      </CollectionCartItemDetails>
    </CollectionCardItem>
  );
};

const mapDispatch = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  null,
  mapDispatch
)(CardItem);
