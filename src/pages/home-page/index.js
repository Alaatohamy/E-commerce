import React from 'react';
import { CardList } from 'components';

const HomePage = (props) => {
  console.log(props);
  return (
    <section className="home-page">
      <CardList />
    </section>
  )
}

export default HomePage;