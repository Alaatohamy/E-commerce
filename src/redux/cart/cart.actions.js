import { CartActionTypes } from "./cart.types";

export const toggleCartDropDown = () => ({
  type: CartActionTypes.TOGGLE_CART
});

export const addCartItem = item => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item
});

export const RemoveCartItem = id => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: id
});

export const DecreaseCartItem = item => ({
  type: CartActionTypes.DECREASE_CART_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
