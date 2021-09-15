const { Tables } = require("../../constants");
const { insert } = require("../../dbOperations");
const { PubSub, withFilter } = require("graphql-subscriptions");
const { getProduct } = require("../Products/resolvers");

const pubsub = new PubSub();

const resolvers = {
  Mutation: {
    createReview: async (root, args, context) => {
      await insert(Tables.REVIEWS, {
        ...args,
        createdDate: new Date(),
      });
      await pubsub.publish("NEW_REVIEW", { id: args.productId });
    },
  },
  Subscription: {
    reviewCreated: {
      resolve: async (data) => {
        return await getProduct(data);
      },
      subscribe: () => pubsub.asyncIterator(`NEW_REVIEW`),
    },
  },
};

module.exports = resolvers;
