import { takeEvery, put, call } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";
import { fetchShopDataSuccess, fetchShopDataFailure } from "./shop.actions";
import {
  firestore,
  transformCollectionData
} from "firebase-config/firebase.utils";

export function* fetchShopDataAsync() {
  const collectionRef = firestore.collection("collections");
  try {
    const snapshot = yield collectionRef.get();
    const shopData = yield call(transformCollectionData, snapshot);
    yield put(fetchShopDataSuccess(shopData));
  } catch (error) {
    yield put(fetchShopDataFailure(error.message));
  }
}

export function* fetchShopDataStart() {
  yield takeEvery(ShopActionTypes.FETCH_SHOP_DATA_START, fetchShopDataAsync);
}
