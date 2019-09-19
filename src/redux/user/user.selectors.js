import { createSelector } from "reselect";

const selectUser = state => state.user;
export const selectCurrentUser = createSelector(
  selectUser,
  user => user.currentUser
);

export const selectCurrentUserName = createSelector(
  selectCurrentUser,
  currentUser =>
    currentUser ? currentUser.displayName.split(" ")[0] : currentUser
);

export const selectSignInError = createSelector(
  selectUser,
  user => user.signInError
);

export const selectSignOutError = createSelector(
  selectUser,
  user => user.signUpError
);
