exports.up = function (knex) {
  return knex.schema.alterTable("reviews", function (table) {
    table.integer("productId").alter();
  });
};

exports.down = function (knex) {};
