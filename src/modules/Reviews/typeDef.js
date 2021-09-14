const { gql } = require("apollo-server");

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
`;

module.exports = typeDef;
