import { client } from "index.js";

const initializeCache = () => {
  client.writeData({
    data: {
      cartClicked: false,
      cartCount: 0,
      totalPrice: 0,
      cartItems: []
    }
  });
};

export default initializeCache;
