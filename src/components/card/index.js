import React from 'react';
import { Link } from 'react-router-dom';
import './card.style.scss';

const Card = ({title, imageUrl, size, linkUrl}) => {
  return (
    <li className={`card ${size}`}>
      <div className="card__background-img" role="presentation" style={{backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card__content">
        <h1 className="title">{title}</h1>
        <Link to={`/${linkUrl}`} className="subtitle" >Shop Now</Link>
      </div>
    </li>
  )
}

export default Card;