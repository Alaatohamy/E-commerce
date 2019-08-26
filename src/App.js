import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { HomePage, HatsPage } from 'pages';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path="/shop/hats" component={HatsPage} />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
