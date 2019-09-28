import { gql } from "apollo-boost";

/** Write mutations or query name and the type of what it will returns, It's the schema */
const typeDefs = gql`
  extend type Mutation {
    ToggleCartDropdown: Boolean!
  }
`;

export default typeDefs;
