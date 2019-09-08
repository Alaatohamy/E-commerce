import { CART_TYPES } from './cart.types';

const INITIAL_STATE = {
  clicked: false
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPES.TOGGLE_CART :
      return {
        ...state,
        clicked: !state.clicked
      }
    default:
      return state;
  }
}
