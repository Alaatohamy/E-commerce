import { gql } from "apollo-boost";

/** Write mutations or query name and the type of what it will returns, It's the schema */
const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartDropdown: Boolean!
    AddCartItem(item: Item!): [Item]!
  }
`;

export default typeDefs;
