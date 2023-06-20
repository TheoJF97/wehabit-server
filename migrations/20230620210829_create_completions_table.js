exports.up = function (knex) {
  return knex.schema.createTable("completions", (table) => {
    table.increments("id").primary();
    table
      .integer("habit_id")
      .unsigned()
      .references("habits.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.date("date").notNullable();
    table.boolean("completed").notNullable().defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("completions");
};
