import { GET_CART_CLICKED, GET_CART_ITEMS } from "./queries";
import { addItemToCart, decreaseCartItem } from "./cart.utils";

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

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: addItemToCart(cartItems, item) }
      });

      return cartItems;
    },

    decreaseCartItem: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: decreaseCartItem(cartItems, item) }
      });

      return cartItems;
    },

    removeCartItem: (_root, { id }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: cartItems.filter(item => item.id !== id) }
      });

      return cartItems;
    }
  }
};

export default resolvers;
