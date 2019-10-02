import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Header, Spinner, ErrorBoundary } from "components";
import { selectCurrentUser } from "redux/user/user.selectors";
import { setCurrentUser } from "redux/user/user.actions";
import { GlobalStyle } from "global.style";
import { Container } from "styles/general/grid";

const HomePage = lazy(() => import("pages/home-page"));
const ShopPage = lazy(() => import("pages/shop-page"));
const SignPage = lazy(() => import("pages/sign-page"));
const CheckoutPage = lazy(() => import("pages/checkout-page"));

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);
  console.log(ShopPage, SignPage, CheckoutPage);
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/sign-in"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignPage />
                }
              />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Container>
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
