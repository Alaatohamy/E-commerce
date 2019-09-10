import React from 'react';
import { Route } from 'react-router-dom';
import { CollectionPreview } from 'components';
import { CollectionPage } from 'pages';

const ShopPage = ({match}) => {
  return (
    <section className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionPreview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </section>
  )
}

export default ShopPage;