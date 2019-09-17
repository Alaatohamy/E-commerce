import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

/** Get collections as an object and return it as an array */
export const selectCollectionsAsArray = createSelector(
  selectCollections,
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = title =>
  createSelector(
    selectCollections,
    collections => (collections ? collections[title] : null)
  );

export const selectIsFetching = createSelector(
  selectShop,
  shop => shop.isFetching
);

export const selectCollectionExist = createSelector(
  selectCollections,
  collections => !!collections
);
