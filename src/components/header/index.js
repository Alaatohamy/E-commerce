import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Query } from "react-apollo";
import { GET_CART_CLICKED } from "graphql/queries";
import { ReactComponent as Logo } from "assets/logo.svg";
import { auth } from "firebase-config/firebase.utils";
import { CartIcon } from "components";
import CartDropdown from "components/cart-dropdown/cart-dropdown.container";
import { selectCurrentUser } from "redux/user/user.selectors";
import "./header.style.scss";

class HeaderView extends React.Component {
  render() {
    const { currentUser, clicked } = this.props;

    return (
      <header className="main-header clearfix">
        <h1>
          <Link to="/">
            <span className="visually-hidden">T-Commerce</span>
            <Logo title="T-Commerce logo" />
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
            {currentUser ? (
              <>
                <li onClick={() => auth.signOut()}>Sign Out</li>
                <li>
                  <CartIcon />
                </li>
              </>
            ) : (
              <li>
                <Link to="/sign-in">Sign in</Link>
              </li>
            )}
          </ul>
        </nav>
        {clicked ? <CartDropdown /> : null}
      </header>
    );
  }
}

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser
});

const HeaderViewConnected = connect(mapState)(HeaderView);

const Header = () => (
  <Query query={GET_CART_CLICKED}>
    {({ data: { cartClicked } }) => (
      <HeaderViewConnected clicked={cartClicked} />
    )}
  </Query>
);
export default Header;
