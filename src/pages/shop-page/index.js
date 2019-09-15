import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { CollectionPreview } from "components";
import { updateShopData } from "redux/shop/shop.actions";
import { CollectionPage } from "pages";
import {
  firestore,
  transformCollectionData
} from "firebase-config/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeSnapshot = null;

  componentDidMount() {
    const { getCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeSnapshot = collectionRef.onSnapshot(async snapshot => {
      getCollections(await transformCollectionData(snapshot));
    });
  }

  componentWillUnmount() {
    this.unsubscribeSnapshot();
  }

  render() {
    const { match } = this.props;

    return (
      <section className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionPreview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
