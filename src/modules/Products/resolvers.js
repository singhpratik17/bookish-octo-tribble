const { Tables } = require("../../constants");
const {
  findByCriteriaAndOrder,
  findById,
  calculateRatings,
} = require("../../dbOperations");

const resolvers = {
  Query: {
    product: async (root, args, context) => {
      let product = await findById(Tables.PRODUCTS, args.id);
      const rating = await calculateRatings(args.id);
      if (rating) {
        product = {
          ...product,
          ...rating,
        };
      }
      return product;
    },
  },
  Product: {
    reviews: async (parent) => {
      return await findByCriteriaAndOrder(
        Tables.REVIEWS,
        {
          productId: parent.id,
        },
        "createdDate",
        "desc"
      );
    },
  },
};

module.exports = resolvers;
