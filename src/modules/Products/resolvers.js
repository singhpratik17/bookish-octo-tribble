const { Tables } = require("../../constants");
const {
  findByCriteriaAndOrder,
  findById,
  calculateRatings,
} = require("../../dbOperations");

const resolvers = {
  Query: {
    product: async (root, args, context) => {
      return await getProduct(args);
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

const getProduct = async (args) => {
  let product = await findById(Tables.PRODUCTS, args.id);
  const rating = await calculateRatings(args.id);
  if (rating) {
    product = {
      ...product,
      ...rating,
    };
  }
  return product;
};

module.exports = { resolvers, getProduct };
