import React from "react";
import { withRouter } from "react-router-dom";
import "./card.style.scss";

const Card = props => {
  const { title, imageUrl, size, linkUrl, history, match } = props;

  return (
    <li
      className={`card ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="card__background-img"
        role="presentation"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="card__content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">Shop Now</p>
      </div>
    </li>
  );
};

export default withRouter(Card);
