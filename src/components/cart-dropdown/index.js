import React from "react";
import { Button, CartItem } from "components";
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

export default CartDropdownView;
