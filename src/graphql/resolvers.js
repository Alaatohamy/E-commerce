import {
  GET_CART_CLICKED,
  GET_CART_ITEMS,
  GET_CART_COUNT,
  GET_CART_TOTAL_PRICE
} from "./queries";
import {
  addItemToCart,
  decreaseCartItem,
  getCartCount,
  getTotalPrice
} from "./cart.utils";

/** Its object update the cache/local store by writing the implementation of the mutations or query */
const resolvers = {
  Mutation: {
    /** key will be the name of actual mutation definition */
    toggleCartDropdown: (_root, _args, { cache }) => {
      const { cartClicked } = cache.readQuery({
        query: GET_CART_CLICKED
      });

      cache.writeQuery({
        query: GET_CART_CLICKED,
        data: { cartClicked: !cartClicked }
      });

      return !cartClicked;
    },

    addCartItem: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = addItemToCart(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });

      cache.writeQuery({
        query: GET_CART_COUNT,
        data: { cartCount: getCartCount(newCartItems) }
      });

      cache.writeQuery({
        query: GET_CART_TOTAL_PRICE,
        data: { totalPrice: getTotalPrice(newCartItems) }
      });

      return cartItems;
    },

    decreaseCartItem: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = decreaseCartItem(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });

      cache.writeQuery({
        query: GET_CART_COUNT,
        data: { cartCount: getCartCount(newCartItems) }
      });

      cache.writeQuery({
        query: GET_CART_TOTAL_PRICE,
        data: { totalPrice: getTotalPrice(newCartItems) }
      });

      return cartItems;
    },

    removeCartItem: (_root, { id }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = cartItems.filter(item => item.id !== id);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });

      cache.writeQuery({
        query: GET_CART_COUNT,
        data: { cartCount: getCartCount(newCartItems) }
      });

      cache.writeQuery({
        query: GET_CART_TOTAL_PRICE,
        data: { totalPrice: getTotalPrice(newCartItems) }
      });

      return cartItems;
    }
  }
};

export default resolvers;
