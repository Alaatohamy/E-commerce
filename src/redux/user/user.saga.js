import { all, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "firebase-config/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export default function* userSaga() {
  yield all([onGoogleSignInStart()]);
}
