import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import { HomePage, ShopPage, SignPage, CheckoutPage } from "pages";
import { Header } from "components";
import {
  auth,
  createUserProfileDocument
} from "firebase-config/firebase.utils";
import { setCurrentUser } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user/user.selectors";

class App extends Component {
  unSubscriptFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
            setCurrentUser({
              id: snapShot.id,
              ...userData
            });
          } catch (err) {
            alert("Something went wrong will updating user state, ", err);
          }
        });
      } else {
        setCurrentUser(userAuth);
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
    const { currentUser } = this.props;

    return (
      <div className="App">
        <div className="container">
          <Header />
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

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatch = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapState,
  mapDispatch
)(App);
