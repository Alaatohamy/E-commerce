import { all, call } from "redux-saga/effects";
import { fetchShopDataStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchShopDataStart)]);
}
