import { all, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "firebase-config/firebase.utils";

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    /**Add current user to the redux store */
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
/** Generator function gets the whole action that [onEmailSignIn] listen to and then yield other actions
 * @param {object} action_creator, it gets the whole action, type: EMAIL_SIGN_IN_START
 */
function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    /**Add current user to the redux store */
    yield put(
      emailSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (err) {
    yield put(emailSignInFailure(err.message));
  }
}

export function* onEmailSignIn() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSaga() {
  yield all([onGoogleSignInStart(), onEmailSignIn()]);
}
