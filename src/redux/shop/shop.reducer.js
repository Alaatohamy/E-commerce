import { SHOP_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = {
  collections: null
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.UPDATE_SHOP_DATA:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
