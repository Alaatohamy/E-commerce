import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop, shop => shop.collections
);

export const selectCollection = title => createSelector(
  selectCollections, collections => collections.find(collection => (collection.title).toLocaleLowerCase() === title.toLocaleLowerCase())
);