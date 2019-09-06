import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage, ShopPage, HatsPage, SignInPage } from 'pages';
import { Header } from 'components';
import { auth, createUserProfileDocument } from 'firebase-config/firebase.utils';

class App extends Component {
  state = {
    current_user: null
  };

  unSubscriptFromAuth = null;

  componentDidMount(){
    this.unSubscriptFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /**
         * Function listen to any change on snapshot object, it will update you when any use data updated
         * we use it for returning snapshot object
         */
        userRef.onSnapshot(async snapShot => {
          const userData = await snapShot.data();
          try {
            this.setState({
              current_user: {
                id: snapShot.id,
                ...userData
              }
            });
          } catch (err){
            console.log('Something went wrong will updating user state, ', err);
          }
        });
      } else {
        this.setState({current_user: userAuth});
      }
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
