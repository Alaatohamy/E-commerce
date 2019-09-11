import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from 'redux/shop/shop.selectors';
import { CollectionSection } from 'components';

const CollectionPage = ({collection}) => <CollectionSection collection={collection} />

const mapState = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapState)(CollectionPage);