import React from "react";
import { Route } from "react-router-dom";
import { CollectionPreview } from "components";
import { CollectionPage } from "pages";
import CollectionProvider from "providers/collection/collection.provider";

const ShopPage = ({ match }) => {
  return (
    <CollectionProvider>
      <section className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionPreview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </section>
    </CollectionProvider>
  );
};

export default ShopPage;
