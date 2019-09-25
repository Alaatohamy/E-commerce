import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logo.svg";
import { auth } from "firebase-config/firebase.utils";
import { CartDropdown, CartIcon } from "components";
import UserContext from "contexts/user/user.context";
import { CartContext } from "providers/cart/cart.provider";
import "./header.style.scss";

const Header = () => {
  const currentUser = useContext(UserContext);
  const { clicked } = useContext(CartContext);

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
};

export default Header;
