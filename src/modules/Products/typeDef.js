const { gql } = require("apollo-server-express");

const typeDef = gql`
  type Product {
    id: Int
    name: String
    rating: Float
    reviews: [Review]
  }

  type Query {
    product(id: Int!): Product
  }
`;

module.exports = typeDef;
