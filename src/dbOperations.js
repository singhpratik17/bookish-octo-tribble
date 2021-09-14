const db = require("./db");
const { Tables } = require("./constants");

const findByCriteriaAndOrder = async (
  table,
  criteria = {},
  orderByColumn = "",
  order = "desc"
) => {
  return db(table).where(criteria).orderBy(orderByColumn, order);
};

const findById = async (table, id = {}) => {
  const item = await db(table).where({ id });
  if (item) {
    return item[0];
  }
  return null;
};

const insert = async (table, data = {}) => {
  return await db(table).insert(data);
};

const calculateRatings = async (productId) => {
  const rating = await db(Tables.REVIEWS)
    .where({ productId })
    .select(db.raw("ROUND(CAST(AVG(rating) AS numeric),2) AS rating"));
  if (rating.length) {
    return rating[0];
  }
  return null;
};

module.exports = { findByCriteriaAndOrder, insert, findById, calculateRatings };
