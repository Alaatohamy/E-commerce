import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "assets/logo.svg";
import { CartDropdown, CartIcon } from "components";
import { selectCartClicked } from "redux/cart/cart.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";
import { signOut } from "redux/user/user.actions";
import { MainHeader, Heading1, Navigation, ListItem } from "./header.style";
import { VisuallyHidden } from "styles/utilities/screen-reader";

class Header extends React.Component {
  render() {
    const { currentUser, clicked, signOut } = this.props;

    return (
      <MainHeader>
        <Heading1>
          <Link to="/">
            <VisuallyHidden>T-Commerce</VisuallyHidden>
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
                <ListItem onClick={signOut}>Sign Out</ListItem>
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

const mapDispatch = dispatch => ({
  signOut: () => dispatch(signOut())
});
export default connect(
  mapState,
  mapDispatch
)(Header);
