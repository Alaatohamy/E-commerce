import { ShopActionTypes } from "./shop.types";

export const fetchShopDataStart = () => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_START
});

export const fetchShopDataSuccess = shopData => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_SUCCESS,
  payload: shopData
});

export const fetchShopDataFailure = error => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_FAIL,
  payload: error
});
