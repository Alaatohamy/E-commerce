import React from "react";
import { CollectionSection } from "components";
import CollectionsContext from "contexts/collections/collection.context";

const CollectionPage = ({ match }) => (
  <CollectionsContext.Consumer>
    {collections => {
      const collection = collections[match.params.collectionId];
      return <CollectionSection collection={collection} />;
    }}
  </CollectionsContext.Consumer>
);

export default CollectionPage;
