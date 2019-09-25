import React, { createContext, useState, useEffect } from "react";
import { addItemToCart, decreaseCartItem } from "./cart.utils";

export const CartContext = createContext({
  clicked: false,
  cartItems: [],
  cartItemsCount: 0,
  cartItemTotal: 0,
  toggleCartDropDown: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  decreaseItem: () => {}
});

const CartProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemTotal, setCartItemTotal] = useState(0);

  const toggleCartDropDown = () => setClicked(!clicked);
  const addCartItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeCartItem = id =>
    setCartItems(cartItems.filter(item => item.id !== id));
  const decreaseItem = item => setCartItems(decreaseCartItem(cartItems, item));

  return (
    <CartContext.Provider
      value={{
        clicked,
        cartItems,
        cartItemTotal,
        cartItemsCount,
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
