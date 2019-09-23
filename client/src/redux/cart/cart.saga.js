import { takeLatest, all, put } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartSaga() {
  yield put(clearCart());
}
function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSaga);
}

export default function* cartSaga() {
  yield all([onSignOutSuccess()]);
}
