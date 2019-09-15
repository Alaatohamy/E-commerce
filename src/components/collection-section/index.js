import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../collection-item";
import "./collection-section.style.scss";

const CollectionSection = ({ collection }) => {
  const { title, routeName, items } = collection;
  return (
    <>
      <h1 className="collection-title">
        <Link to={`/shop/${routeName}`}>{title}</Link>
      </h1>
      <ul className="collection-container">
        {items.map(item => (
          <CardItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default CollectionSection;
