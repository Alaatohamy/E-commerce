import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview, WithSpinner } from "components";
import { fetchShopDataAsync } from "redux/shop/shop.actions";
import {
  selectIsFetching,
  selectCollectionExist
} from "redux/shop/shop.selectors";
import CollectionPage from "../collection-page";

const CollectionPreviewWrapper = WithSpinner(CollectionPreview);
const CollectionPageWrapper = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchShopDataAsync } = this.props;
    fetchShopDataAsync();
  }

  render() {
    const { match, isFetching, collectionExist } = this.props;

    return (
      <section className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionPreviewWrapper isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWrapper isLoading={!collectionExist} {...props} />
          )}
        />
      </section>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchShopDataAsync: () => dispatch(fetchShopDataAsync())
});

const mapState = createStructuredSelector({
  isFetching: selectIsFetching,
  collectionExist: selectCollectionExist
});

export default connect(
  mapState,
  mapDispatch
)(ShopPage);
