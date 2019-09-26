import React, { createContext, useState, useEffect } from "react";
import {
  addItemToCart,
  decreaseCartItem,
  removeItem,
  getCount,
  getTotalPrice
} from "./cart.utils";

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
    return setCartItems(removeItem(cartItems, id));
  };
  const decreaseItem = item => setCartItems(decreaseCartItem(cartItems, item));

  useEffect(() => {
    setCount(getCount(cartItems));
    setTotalPrice(getTotalPrice(cartItems));
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
