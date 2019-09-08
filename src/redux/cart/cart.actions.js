import { CART_TYPES } from './cart.types';

export const toggleCartDropDown = () => ({
  type: CART_TYPES.TOGGLE_CART
});

export const addToCart = data => ({
  type: CART_TYPES.ADD_TO_CART,
  payload: data
});