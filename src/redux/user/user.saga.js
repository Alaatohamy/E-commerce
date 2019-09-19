import { all, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import { signInSuccess, signInFailure } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "firebase-config/firebase.utils";

function* getUserSnapshot(user) {
  try {
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    /**Add current user to the redux store */
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

/** Generator function gets the whole action that [onEmailSignIn] listen to and then yield other actions
 * @param {object} action_creator, it gets the whole action, type: EMAIL_SIGN_IN_START
 */
function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSaga() {
  yield all([onGoogleSignInStart(), onEmailSignIn()]);
}
