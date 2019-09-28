import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_DROPDOWN } from "graphql/mutations";
import { Button, CartItem } from "components";
import { selectCartItems } from "redux/cart/cart.selectors";
import "./cart-dropdown.style.scss";

const CartDropdownView = ({ cartItems, history, toggleCartDropdown }) => {
  const handleClick = () => {
    history.push("/checkout");
    toggleCartDropdown();
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

const CartDropdownConnected = withRouter(connect(mapState)(CartDropdownView));

const CartDropdown = () => (
  <Mutation mutation={TOGGLE_CART_DROPDOWN}>
    {toggleCartDropdown => (
      <CartDropdownConnected toggleCartDropdown={toggleCartDropdown} />
    )}
  </Mutation>
);
export default CartDropdown;
