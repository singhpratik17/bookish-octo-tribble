exports.up = function (knex) {
  return knex.schema.createTable("reviews", (tableBuilder) => {
    tableBuilder.increments("id");
    tableBuilder.text("comment");
    tableBuilder.text("productId");
    tableBuilder.foreign("productId");
    tableBuilder.double("rating");
    tableBuilder.dateTime("createdDate");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
