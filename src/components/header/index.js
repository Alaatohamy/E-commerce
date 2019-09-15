import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "assets/logo.svg";
import { auth } from "firebase-config/firebase.utils";
import { CartDropdown, CartIcon } from "components";
import { selectCartClicked } from "redux/cart/cart.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";
import { MainHeader, Heading1, Navigation, ListItem } from "./header.style";

class Header extends React.Component {
  render() {
    const { currentUser, clicked } = this.props;

    return (
      <MainHeader>
        <Heading1>
          <Link to="/">
            <span className="visually-hidden">T-Commerce</span>
            <Logo title="T-Commerce logo" />
          </Link>
        </Heading1>
        <Navigation>
          <ul>
            <ListItem>
              <Link to="/shop">Shop</Link>
            </ListItem>
            {/* <ListItem><Link to="/contact">Contact</Link></ListItem> */}
            {currentUser ? (
              <>
                <ListItem onClick={() => auth.signOut()}>Sign Out</ListItem>
                <ListItem>
                  <CartIcon />
                </ListItem>
              </>
            ) : (
              <ListItem>
                <Link to="/sign-in">Sign in</Link>
              </ListItem>
            )}
          </ul>
        </Navigation>
        {clicked ? <CartDropdown /> : null}
      </MainHeader>
    );
  }
}

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  clicked: selectCartClicked
});

export default connect(mapState)(Header);
