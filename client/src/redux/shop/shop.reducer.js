import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  isFetching: false,
  collections: null,
  error: ""
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_SHOP_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_SHOP_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_SHOP_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
