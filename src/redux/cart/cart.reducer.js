import { CartActionTypes } from "./cart.types";
import { addItemToCart, decreaseCartItem } from "./cart.utils";

const INITIAL_STATE = {
  clicked: false,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        clicked: !state.clicked
      };
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case CartActionTypes.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
