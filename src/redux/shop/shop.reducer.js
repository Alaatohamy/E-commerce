import { SHOP_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = {
  isFetching: false,
  collections: null,
  error: ""
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.FETCH_SHOP_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case SHOP_ACTION_TYPES.FETCH_SHOP_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case SHOP_ACTION_TYPES.FETCH_SHOP_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
