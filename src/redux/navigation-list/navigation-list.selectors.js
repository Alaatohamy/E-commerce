import { createSelector } from 'reselect';

const selectNavigateList = state => state.navigationList;

export const selectCardListData = createSelector(
  selectNavigateList,
  navigationList => navigationList.cardListData
);
