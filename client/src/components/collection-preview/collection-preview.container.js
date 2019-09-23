import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "redux/shop/shop.selectors";
import { CollectionPreview, WithSpinner } from "components";

const mapState = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionPreviewContainer = connect(mapState)(
  WithSpinner(CollectionPreview)
);

export default CollectionPreviewContainer;
