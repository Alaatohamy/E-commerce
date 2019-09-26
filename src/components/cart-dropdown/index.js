import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Button, CartItem } from "components";
import { CartContext } from "providers/cart/cart.provider";
import "./cart-dropdown.style.scss";

const CartDropdown = props => {
  const { history } = props;
  const { cartItems, toggleCartDropDown } = useContext(CartContext);

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

export default withRouter(CartDropdown);
