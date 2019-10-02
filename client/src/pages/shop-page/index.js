import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "components";
import { fetchShopDataStart } from "redux/shop/shop.actions";

const CollectionPreviewContainer = lazy(() =>
  import("components/collection-preview/collection-preview.container")
);
const CollectionSectionContainer = lazy(() =>
  import("components/collection-section/collection-section.container")
);

const ShopPage = ({ fetchShopDataStart, match }) => {
  useEffect(() => {
    fetchShopDataStart();
  }, [fetchShopDataStart]);

  return (
    <section>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionPreviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionSectionContainer}
        />
      </Suspense>
    </section>
  );
};

const mapDispatch = dispatch => ({
  fetchShopDataStart: () => dispatch(fetchShopDataStart())
});

export default connect(
  null,
  mapDispatch
)(ShopPage);
