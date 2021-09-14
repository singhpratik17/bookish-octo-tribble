exports.up = function (knex) {
  return knex.schema.createTable("products", (tableBuilder) => {
    tableBuilder.increments("id");
    tableBuilder.text("name");
    tableBuilder.dateTime("createdDate");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
