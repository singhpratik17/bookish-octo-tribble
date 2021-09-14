const { Tables } = require("../../constants");
const { insert } = require("../../dbOperations");

const resolvers = {
  Mutation: {
    createReview: async (root, args, context) => {
      await insert(Tables.REVIEWS, {
        ...args,
        createdDate: new Date(),
      });
    },
  },
};

module.exports = resolvers;
