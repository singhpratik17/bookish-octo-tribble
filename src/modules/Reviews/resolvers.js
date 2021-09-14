const { reviews } = require("./mockData");

const resolvers = {
  Query: {
    reviews: async (root, args, context) => {
      return reviews;
    },
  },
};

module.exports = resolvers;
