import { SHOP_ACTION_TYPES } from "./shop.types";

export const updateShopData = shopData => ({
  type: SHOP_ACTION_TYPES.UPDATE_SHOP_DATA,
  payload: shopData
});
