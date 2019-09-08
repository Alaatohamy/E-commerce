import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { auth } from 'firebase-config/firebase.utils';
import CartIcon from '../cart-icon';
import { CartDropdown } from 'components';
import './header.style.scss';

class Header extends React.Component {
  state = {
    card: 0,
    clicked: false
  };

  handleOnClickCart = () => {
    this.setState(state => {
      return {clicked: !state.clicked};
    });
  }

  render(){
    const {currentUser} = this.props;
    const { card, clicked } = this.state;

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
                  <li onClick={this.handleOnClickCart}>
                    <CartIcon count={card} />
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

const mapState = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapState)(Header);