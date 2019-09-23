import { connect } from "react-redux";
import { compose } from "redux";
import { WithSpinner } from "components";
import { selectCollection } from "redux/shop/shop.selectors";
import { selectCollectionExist } from "redux/shop/shop.selectors";
import { CollectionSection } from "components";

const mapState = (state, ownProps) => {
  return {
    isLoading: !selectCollectionExist(state),
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

const CollectionSectionContainer = compose(
  connect(mapState),
  WithSpinner
)(CollectionSection);

export default CollectionSectionContainer;
