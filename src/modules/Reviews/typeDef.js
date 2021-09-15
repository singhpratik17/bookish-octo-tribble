const { gql } = require("apollo-server-express");

const typeDef = gql`
  type Review {
    id: Int
    comment: String
    rating: Float!
    createdDate: Date
    productId: Int!
  }

  type Mutation {
    createReview(comment: String, productId: Int!, rating: Float!): Review
  }

  type Subscription {
    reviewCreated(productId: Int!): Product
  }
`;

module.exports = typeDef;
