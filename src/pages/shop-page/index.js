import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { CollectionPreview, WithSpinner } from "components";
import { updateShopData } from "redux/shop/shop.actions";
import CollectionPage from "../collection-page";
import {
  firestore,
  transformCollectionData
} from "firebase-config/firebase.utils";

const CollectionPreviewWrapper = WithSpinner(CollectionPreview);
const CollectionPageWrapper = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true
  };

  unsubscribeSnapshot = null;

  componentDidMount() {
    const { getCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeSnapshot = collectionRef.onSnapshot(async snapshot => {
      getCollections(await transformCollectionData(snapshot));
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeSnapshot();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <section className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionPreviewWrapper isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWrapper isLoading={isLoading} {...props} />
          )}
        />
      </section>
    );
  }
}

const mapDispatch = dispatch => ({
  getCollections: shopData => dispatch(updateShopData(shopData))
});

export default connect(
  null,
  mapDispatch
)(ShopPage);
