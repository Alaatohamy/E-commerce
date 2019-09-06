import React from 'react';
import CollectionCard from '../collection-card';
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
          collections.map(({id, ...OtherData}) => <CollectionCard key={id} {...OtherData} />)
        }
      </section>
    )
  }
}

export default CollectionPreview;