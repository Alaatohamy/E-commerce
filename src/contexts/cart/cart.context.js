import { createContext } from "react";

const CartContext = createContext({
  clicked: false,
  toggleCartDropDown: () => {}
});

export default CartContext;
