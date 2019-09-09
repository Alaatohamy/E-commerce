import { CART_TYPES } from './cart.types';

export const toggleCartDropDown = () => ({
  type: CART_TYPES.TOGGLE_CART
});

export const addCartItem = item => ({
  type: CART_TYPES.ADD_CART_ITEM,
  payload: item
});