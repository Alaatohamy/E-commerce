import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Button, CartItem } from "components";
import { selectCartItems } from "redux/cart/cart.selectors";
import { toggleCartDropDown } from "redux/cart/cart.actions";
import "./cart-dropdown.style.scss";

const CartDropdown = props => {
  const { cartItems, history, toggleCartDropDown } = props;

  const handleClick = () => {
    history.push("/checkout");
    toggleCartDropDown();
  };

  return (
    <div className="cart-dropdown-wrapper">
      {cartItems.length ? (
        <>
          <ul className="cart-dropdown-content">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <Button
            text="Go to checkout"
            color="black"
            type="button"
            onClick={handleClick}
          />
        </>
      ) : (
        <p className="no-data">Your Cart is Empty</p>
      )}
    </div>
  );
};

const mapState = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatch = dispatch => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown())
});

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(CartDropdown)
);
