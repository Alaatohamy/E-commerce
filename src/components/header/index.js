import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { auth } from 'firebase-config/firebase.utils';
import CartIcon from '../cart-icon';
import './header.style.scss';

class Header extends React.Component {
  state = {
    card: 0
  };

  render(){
    const {currentUser} = this.props;

    return (
      <header className="main-header clearfix">
        <h1>
          <Link to ="/">
            <span className="visually-hidden">E-commerce</span>
            <Logo title="E-commerce logo" />
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
                  <li><Link to="/my-cart">
                    <CartIcon />
                  </Link></li>
                </>
              ) : <li><Link to="/sign-in">Sign in</Link></li>
            }
          </ul>
        </nav>
      </header>
    )
  }
}

const mapState = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapState)(Header);