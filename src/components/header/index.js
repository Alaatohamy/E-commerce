import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from 'crown.svg';
import './header.style.scss';

class Header extends React.Component {
  state = {
    card: 0
  };

  render(){
    return (
      <header className="main-header clearfix">
        <h1>
          <Link to ="/">
            <span className="visually-hidden">E-commerce</span>
            <Logo />
          </Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/sign-in">Sign in</Link></li>
            <li><Link to="/my-cart">cart</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header;