import React from 'react';
import CollectionCard from '../collection-section';
import { SHOP_DATA } from '../../shop-data';

class CollectionPreview extends React.Component {
  state ={
    collections: SHOP_DATA
  }

  render(){
    const {collections} = this.state;

    return (
      <section>
        {
          collections.map(cardData => <CollectionCard key={cardData.id} cardData={cardData} />)
        }
      </section>
    )
  }
}

export default CollectionPreview;