import { all, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  signInUpSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  checkUserAuth
} from "firebase-config/firebase.utils";

function* addUserSnapshotToStore(user, additionalData) {
  try {
    /** Save the user at firestore, call it here to add displayName to saved data.
     * @param {object} user - contain only email and password from the user data(what er authenticate with)
     * @param {object} otherData -  any additional data
     * @returns {object} user reference
     * */
    const userRef = yield createUserProfileDocument(user, additionalData);
    const userSnapshot = yield userRef.get();
    /**Add current user to the redux store */
    yield put(
      signInUpSuccess({
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
    yield addUserSnapshotToStore(user);
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
    yield addUserSnapshotToStore(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const authUser = yield checkUserAuth();
    if (!authUser) return;
    yield addUserSnapshotToStore(authUser);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* handleSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    /** Authenticate the user with email and password
     * @param {string} email
     * @param {string} password
     * @returns {object} Authenticated user
     * */
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield addUserSnapshotToStore(user, { displayName });
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

/** List all listeners here */
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onSetCurrentUser() {
  yield takeLatest(UserActionTypes.SET_CURRENT_USER, isUserAuthenticated);
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, handleSignOut);
}

export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpSaga);
}

export default function* userSaga() {
  yield all([
    onGoogleSignInStart(),
    onEmailSignIn(),
    onSetCurrentUser(),
    onSignOut(),
    onSignUp()
  ]);
}
