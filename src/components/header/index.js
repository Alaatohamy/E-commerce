import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import {auth} from 'firebase-config/firebase.utils';
import './header.style.scss';

class Header extends React.Component {
  state = {
    card: 0
  };

  render(){
    const {current_user} = this.props;

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
              current_user? (
                <>
                  <li onClick={() => auth.signOut()}>Sign Out</li>
                  <li><Link to="/my-cart">cart</Link></li>
                </>
              ) : <li><Link to="/sign-in">Sign in</Link></li>
            }
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header;