const { products } = require("./mockData");
const { reviews } = require("../Reviews/mockData");

const resolvers = {
  Query: {
    product: async (root, args, context) => {
      return products[0];
    },
  },
  Product: {
    reviews(parent) {
      console.warn(parent);
      return reviews.filter((item) => item.productId === parent.id);
    },
  },
};

module.exports = resolvers;
