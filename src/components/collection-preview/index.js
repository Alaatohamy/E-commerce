import React, { useContext } from "react";
import CollectionCard from "../collection-section";
import { truncateArrayFromObject } from "utils/functions.utils";
import { CollectionsContext } from "providers/collection/collection.provider";

const CollectionPreview = () => {
  const { selectCollectionsAsArray: collections } = useContext(
    CollectionsContext
  );

  return (
    <section>
      <h1>Collections</h1>
      {collections.map(collection => {
        const newCollection = truncateArrayFromObject(
          collection,
          collection.items,
          0,
          4
        );
        return (
          <CollectionCard key={collection.id} collection={newCollection} />
        );
      })}
    </section>
  );
};

export default CollectionPreview;
