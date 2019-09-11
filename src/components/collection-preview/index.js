import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsAsArray } from 'redux/shop/shop.selectors';
import CollectionCard from '../collection-section';
import { truncateArrayFromObject } from 'utils/functions.utils';

const CollectionPreview = ({collections}) => {
  return (
    <section>
      <h1>Collections</h1>
      {
        collections.map(collection => {
          const newCollection = truncateArrayFromObject(collection, collection.items, 0, 4);
          return <CollectionCard key={collection.id} collection={newCollection} />
        })
      }
    </section>
  )
}

const mapState = createStructuredSelector({
  collections: selectCollectionsAsArray
});

export default connect(mapState)(CollectionPreview);