const { gql } = require("apollo-server");

const typeDef = gql`
  type Review {
    id: String
    comment: String
    rating: Float
    createdDate: Date
    productId: String!
  }

  type Query {
    reviews(productId: String!): [Review]
  }
`;

module.exports = typeDef;
