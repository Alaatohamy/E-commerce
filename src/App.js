import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage, ShopPage, HatsPage, SignInPage } from 'pages';
import { Header } from 'components';
import {auth, createUserProfileDocument} from 'firebase-config/firebase.utils';

class App extends Component {
  state = {
    current_user: null
  };

  unSubscriptFromAuth = null;

  componentDidMount(){
    this.unSubscriptFromAuth = auth.onAuthStateChanged(user => {
      this.setState({current_user: user});
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount(){
    /** Close the auth subscription on unmounting 
     * In case this component is not render stop caring for the user state
    */
    this.unSubscriptFromAuth();
  }

  render() {
    const {current_user} = this.state;

    return (
      <div className='App'>
        <div className="container">
          <Header current_user={current_user} />
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
