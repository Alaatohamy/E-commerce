import React, { createContext, useState } from "react";
import SHOP_DATA from "./shop.data";

export const CollectionsContext = createContext({
  collections: SHOP_DATA,
  selectCollectionsAsArray: []
});

const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState(SHOP_DATA);
  const [selectCollectionsAsArray, setselectCollectionsAsArray] = useState(
    Object.keys(SHOP_DATA).map(key => SHOP_DATA[key])
  );

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        selectCollectionsAsArray
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export default CollectionProvider;
