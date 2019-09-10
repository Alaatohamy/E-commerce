import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../collection-item';
import './collection-section.style.scss';

const CollectionSection = ({collection, preview}) => {
  const {title, routeName, items} = collection;
  const truncatedItems = preview ? items.slice(0, 4) : items ;
  return (
    <>
      <h1 className="collection-title"><Link to={`/${routeName}`}>{title}</Link></h1>
      <ul className="collection-container">
        {truncatedItems.map((item) => <CardItem key={item.id} item={item} />)}
      </ul>
    </>
  )
}

export default CollectionSection;