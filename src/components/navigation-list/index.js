import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCardListData } from 'redux/navigation-list/navigation-list.selectors';
import Card from 'components/card';
import './navigation-list.style.scss';

const NavigationList = ({ cardListData }) => {
  return (
    <ul className="navigation-list">
    { cardListData.map(({id, ...otherCardData}) => <Card key={id} {...otherCardData} /> )}
    </ul>
  )
}

const mapState = createStructuredSelector({
  cardListData: selectCardListData
});

export default connect(mapState)(NavigationList);