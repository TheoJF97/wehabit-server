exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("habits", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("encouragemints", (table) => {
      table.increments("id").primary();
      table.string("content", 1000).notNullable();
      table
        .integer("author_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("target_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("habits")
    .dropTable("encouragemints")
    .dropTable("user");
};
