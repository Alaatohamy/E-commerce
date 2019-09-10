import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from 'redux/shop/shop.selectors';
import CollectionCard from '../collection-section';

const CollectionPreview = ({collections}) => {
  return (
    <section>
      <h1>Collections</h1>
      {
        collections.map(collection => <CollectionCard key={collection.id} collection={collection} preview />)
      }
    </section>
  )
}

const mapState = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapState)(CollectionPreview);