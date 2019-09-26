import React, { useContext } from "react";
import Card from "components/card";
import NavigationListContext from "contexts/navigation-list/navigation-list.context";
import "./navigation-list.style.scss";

const NavigationList = () => {
  const { cardListData } = useContext(NavigationListContext);

  return (
    <ul className="navigation-list">
      {cardListData.map(({ id, ...otherCardData }) => (
        <Card key={id} {...otherCardData} />
      ))}
    </ul>
  );
};

export default NavigationList;
