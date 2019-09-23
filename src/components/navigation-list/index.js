import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCardListData } from "redux/navigation-list/navigation-list.selectors";
import Card from "components/card";
import { NavigationListContainer } from "./navigation-list.style";

const NavigationList = ({ cardListData }) => {
  return (
    <NavigationListContainer>
      {cardListData.map(({ id, ...otherCardData }) => (
        <Card key={id} {...otherCardData} />
      ))}
    </NavigationListContainer>
  );
};

const mapState = createStructuredSelector({
  cardListData: selectCardListData
});

export default connect(mapState)(NavigationList);
