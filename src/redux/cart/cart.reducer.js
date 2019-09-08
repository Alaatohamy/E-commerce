import { CART_TYPES } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  clicked: false,
  cartData: {
    count: 0,
    items: []
  }
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART:
      return {
        ...state,
        clicked: !state.clicked
      }
    case CART_TYPES.ADD_TO_CART: 
      console.log('reducer', action.payload);
      return {
        ...state,
        cartData: {
          ...state.cartData,
          count: state.cartData.count + action.payload.count,
          items: addItemToCart(state.cartData.items, action.payload.item)
        }
      }
    default:
      return state;
  }
}
