const { gql } = require("apollo-server");

const typeDef = gql`
  type Product {
    id: String
    name: String
    rating: Float
    reviews: [Review]
  }

  type Query {
    product(id: String!): Product
  }
`;

module.exports = typeDef;
