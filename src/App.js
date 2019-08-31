import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomePage, ShopPage, HatsPage } from 'pages';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/hats" component={HatsPage} />
        </div>
      </div>
    );
  }
}

export default App;
