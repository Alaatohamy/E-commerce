import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage, ShopPage, HatsPage, SignInPage } from 'pages';
import { Header } from 'components';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/shop/hats" component={HatsPage} />
            <Route exact path="/sign-in" component={SignInPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
