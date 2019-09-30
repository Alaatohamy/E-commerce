import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPreviewContainer from "components/collection-preview/collection-preview.container";
import CollectionSectionContainer from "components/collection-section/collection-section.container";
import { fetchShopDataStart } from "redux/shop/shop.actions";

const ShopPage = ({ fetchShopDataStart, match }) => {
  useEffect(() => {
    fetchShopDataStart();
  }, [fetchShopDataStart]);

  return (
    <section>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionPreviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionSectionContainer}
      />
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
