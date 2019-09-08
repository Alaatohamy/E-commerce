import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../collection-item';
import './collection-section.style.scss';

const CollectionCard = ({cardData, addToCart}) => {
  console.log(cardData);
  const {title, routeName, items} = cardData;
  const truncatedItems = items.slice(0, 4);
  return (
    <>
      <h1 className="collection-title"><Link to={`/${routeName}`}>{title}</Link></h1>
      <ul className="collection-container">
        {truncatedItems.map((item) => <CardItem key={item.id} item={item} />)}
      </ul>
    </>
  )
}

export default CollectionCard;