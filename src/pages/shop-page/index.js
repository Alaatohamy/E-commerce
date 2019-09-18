import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionPreviewContainer from "components/collection-preview/collection-preview.container";
import CollectionSectionContainer from "components/collection-section/collection-section.container";
import { fetchShopDataStart } from "redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchShopDataStart } = this.props;
    fetchShopDataStart();
  }

  render() {
    const { match } = this.props;

    return (
      <section className="shop-page">
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
  }
}

const mapDispatch = dispatch => ({
  fetchShopDataStart: () => dispatch(fetchShopDataStart())
});

export default connect(
  null,
  mapDispatch
)(ShopPage);
