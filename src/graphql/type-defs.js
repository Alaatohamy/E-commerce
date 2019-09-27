import { gql } from "apollo-boost";

/** Write mutations or query name and the type of what it will returns */
const typeDefs = gql`
  extend type mutation {
    ToggleCartDropdown: Boolean!
  }
`;

export default typeDefs;
