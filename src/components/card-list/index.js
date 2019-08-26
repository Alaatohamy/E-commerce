import React from 'react';
import Card from 'components/card';
import './card-list.style.scss';

class CardList extends React.Component {
  state = {
    cardListData: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'women',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/women'
      },
      {
        title: 'men',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/men'
      }
    ]
  }

  render(){
    const {cardListData} = this.state;

    return (
      <ul className="card-list">
      { cardListData.map(({id, ...otherCardData}) => <Card key={id} {...otherCardData} /> )}
      </ul>
    )
  }
}

export default CardList;