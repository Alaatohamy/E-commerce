import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { HomePage, ShopPage, SignPage, CheckoutPage } from "pages";
import { Header } from "components";
import {
  auth,
  createUserProfileDocument
} from "firebase-config/firebase.utils";
import UserContext from "contexts/user/user.context";

class App extends Component {
  state = {
    currentUser: null
  };
  unSubscriptFromAuth = null;

  componentDidMount() {
    this.unSubscriptFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /**
         * Function listen to any change on snapshot object, it will update you when any use data updated
         * we use it for returning snapshot object
         */
        userRef.onSnapshot(async snapShot => {
          const userData = await snapShot.data();
          try {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...userData
              }
            });
          } catch (err) {
            alert("Something went wrong will updating user state, ", err);
          }
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    /** Close the auth subscription on unmounting
     * In case this component is not render stop caring for the user state
     */
    this.unSubscriptFromAuth();
  }

  render() {
    // const { currentUser } = this.props;
    const { currentUser } = this.state;
    return (
      <div className="App">
        <div className="container">
          <UserContext.Provider value={currentUser}>
            <Header />
          </UserContext.Provider>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign-in"
              render={() => (currentUser ? <Redirect to="/" /> : <SignPage />)}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
