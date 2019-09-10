import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from 'redux/shop/shop.selectors';
import CollectionCard from '../collection-section';

const CollectionPreview = ({collections}) => {
  return (
    <section>
      {
        collections.map(cardData => <CollectionCard key={cardData.id} cardData={cardData} />)
      }
    </section>
  )
}

const mapState = createStructuredSelector({
  collections: selectCollection
});

export default connect(mapState)(CollectionPreview);