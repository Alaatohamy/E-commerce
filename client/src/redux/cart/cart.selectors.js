import { createSelector } from "reselect";

const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  selectCart,
  cart => cart.cartItems
);
export const selectCartClicked = createSelector(
  selectCart,
  cart => cart.clicked
);

export const selectCount = createSelector(
  selectCartItems,
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
  selectCartItems,
  cartItems =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
