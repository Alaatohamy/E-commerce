import { SHOP_ACTION_TYPES } from "./shop.types";

export const fetchShopDataStart = () => ({
  type: SHOP_ACTION_TYPES.FETCH_SHOP_DATA_START
});

export const fetchShopDataSuccess = shopData => ({
  type: SHOP_ACTION_TYPES.FETCH_SHOP_DATA_SUCCESS,
  payload: shopData
});

export const fetchShopDataFailure = error => ({
  type: SHOP_ACTION_TYPES.FETCH_SHOP_DATA_FAIL,
  payload: error
});
