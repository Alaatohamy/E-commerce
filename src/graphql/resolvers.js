import { GET_CART_CLICKED } from "./queries";

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
    }
  }
};

export default resolvers;
