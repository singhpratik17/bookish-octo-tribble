const { gql } = require("apollo-server");

const typeDef = gql`
  type Review {
    id: String
    comment: String
    rating: Float
    createdDate: Date
    productId: String!
  }

  type Mutation {
    createReview(comment: String, productId: String, rating: Float): Review
  }
`;

module.exports = typeDef;
