import { CART_TYPES } from './cart.types';

export const toggleCartDropDown = () => ({
  type: CART_TYPES.TOGGLE_CART
});

export const addCartItem = item => ({
  type: CART_TYPES.ADD_CART_ITEM,
  payload: item
});

export const RemoveCartItem = id => ({
  type: CART_TYPES.REMOVE_CART_ITEM,
  payload: id
});

export const DecreaseCartItem = item => ({
  type: CART_TYPES.DECREASE_CART_ITEM,
  payload: item
});
