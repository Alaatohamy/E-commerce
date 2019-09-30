import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Button, CartItem } from "components";
import { selectCartItems } from "redux/cart/cart.selectors";
import { toggleCartDropDown } from "redux/cart/cart.actions";
import {
  CartDropdownWrapper,
  NoDataText,
  CartDropdownContent
} from "./cart-dropdown.style";

const CartDropdown = props => {
  const { cartItems, history, toggleCartDropDown } = props;

  const handleClick = () => {
    history.push("/checkout");
    toggleCartDropDown();
  };

  return (
    <CartDropdownWrapper>
      {cartItems.length ? (
        <>
          <CartDropdownContent>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </CartDropdownContent>
          <Button
            text="Go to checkout"
            color="black"
            type="button"
            onClick={handleClick}
          />
        </>
      ) : (
        <NoDataText>Your Cart is Empty</NoDataText>
      )}
    </CartDropdownWrapper>
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
