import { CART_TYPES } from './cart.types';
import { addItemToCart } from './cart.utils';

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
    case CART_TYPES.ADD_TO_CART: 
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}
