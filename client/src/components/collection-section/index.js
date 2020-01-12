import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../collection-item";
import {
  CollectionTitle,
  CollectionContainerUL
} from "./collection-section.style";

const CollectionSection = ({ collection: { title, routeName, items } }) => {
  return (
    <>
      <CollectionTitle>
        <Link to={`/shop/${routeName}`}>{title}</Link>
      </CollectionTitle>
      <CollectionContainerUL>
        {items.map(item => (
          <CardItem key={item.id} item={item} />
        ))}
      </CollectionContainerUL>
    </>
  );
};

export default CollectionSection;
