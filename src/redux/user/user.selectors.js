import { createSelector } from 'reselect'

const selectUser = state => state.user;
export const selectCurrentUser = createSelector(selectUser, user => user.currentUser);

export const selectCurrentUserName = createSelector(
  selectCurrentUser, currentUser => {
    console.log('working', currentUser);
    return currentUser? currentUser.displayName.split(' ')[0] : currentUser;
  }
);
