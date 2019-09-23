import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import { HomePage, ShopPage, SignPage, CheckoutPage } from "pages";
import { Header } from "components";
import { selectCurrentUser } from "redux/user/user.selectors";
import { setCurrentUser } from "redux/user/user.actions";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);

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
};

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatch = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUser())
});

export default connect(
  mapState,
  mapDispatch
)(App);
