import { SHOP_ACTION_TYPES } from "./shop.types";
import {
  firestore,
  transformCollectionData
} from "firebase-config/firebase.utils";

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

export const fetchShopDataAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchShopDataStart());
    collectionRef
      .get()
      .then(snapshot => {
        const shopData = transformCollectionData(snapshot);
        dispatch(fetchShopDataSuccess(shopData));
      })
      .catch(error => {
        dispatch(fetchShopDataFailure(error.message));
      });
  };
};
