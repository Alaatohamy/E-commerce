import React from 'react';
import {Link} from 'react-router-dom';
import './collection-card.style.scss';

const CollectionCard = ({title, routeName, items}) => {
  const truncatedItems = items.slice(0, 4);

  return (
    <>
      <h1 className="collection-title"><Link to={`/${routeName}`}>{title}</Link></h1>
      <ul className="collection-container">
        {truncatedItems.map(({name, imageUrl, price, id}) => {
          return (
            <li className="collection-card" key={id} >
              <div className="background-image" style={{backgroundImage: `url(${imageUrl})` }}>
                <div className="background-image--hover">
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="collection-card__details clearfix">
                <p className="pull-start">{name}</p>
                <p className="pull-end">{price}$</p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CollectionCard;