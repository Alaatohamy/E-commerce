export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find(item => item.id === itemToAdd.id);
  if (itemExist) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseCartItem = (cartItems, itemToDecrease) => {
  if (itemToDecrease.quantity <= 1) {
    return cartItems.filter(item => item.id !== itemToDecrease.id);
  } else {
    return cartItems.map(item =>
      item.id === itemToDecrease.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

export const getCartCount = cartItems =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalPrice = cartItems =>
  cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
