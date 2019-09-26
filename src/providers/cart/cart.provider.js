import React, { createContext, useState, useEffect } from "react";
import { addItemToCart, decreaseCartItem } from "./cart.utils";

export const CartContext = createContext({
  clicked: false,
  cartItems: [],
  count: 0,
  totalPrice: 0,
  toggleCartDropDown: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  decreaseItem: () => {}
});

const CartProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCartDropDown = () => setClicked(!clicked);
  const addCartItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeCartItem = id => {
    return setCartItems(cartItems.filter(item => item.id !== id));
  };
  const decreaseItem = item => setCartItems(decreaseCartItem(cartItems, item));

  useEffect(() => {
    setCount(() => cartItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotalPrice(() =>
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        clicked,
        cartItems,
        totalPrice,
        count,
        toggleCartDropDown,
        addCartItem,
        removeCartItem,
        decreaseItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
