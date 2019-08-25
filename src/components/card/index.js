import React from 'react';
import './card.style.scss';

const Card = ({title, imageUrl, size}) => {
  return (
    <li className={`card ${size}`}>
      <div className="card__background-img" role="presentation" style={{backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card__content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">Shop Now</p>
      </div>
    </li>
  )
}

export default Card;