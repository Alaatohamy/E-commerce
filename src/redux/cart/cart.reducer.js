import { CART_TYPES } from './cart.types';
import { addItemToCart, decreaseCartItem } from './cart.utils';

const INITIAL_STATE = {
  clicked: false,
  cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART:
      return {
        ...state,
        clicked: !state.clicked
      }
    case CART_TYPES.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CART_TYPES.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      }
    case CART_TYPES.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}
