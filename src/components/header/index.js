import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { auth } from 'firebase-config/firebase.utils';
import { CartDropdown, CartIcon } from 'components';
import { selectCartClicked } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';
import './header.style.scss';

class Header extends React.Component {
  render(){
    console.log('render header');
    const { currentUser, clicked } = this.props;

    return (
      <header className="main-header clearfix">
        <h1>
          <Link to ="/">
            <span className="visually-hidden">T-Commerce</span>
            <Logo title="T-Commerce logo" />
          </Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {
              currentUser? (
                <>
                  <li onClick={() => auth.signOut()}>Sign Out</li>
                  <li>
                    <CartIcon />
                  </li>
                </>
              ) : <li><Link to="/sign-in">Sign in</Link></li>
            }
          </ul>
        </nav>
        { clicked ? <CartDropdown /> : null }
      </header>
    )
  }
}

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  clicked: selectCartClicked
});

export default connect(mapState)(Header);