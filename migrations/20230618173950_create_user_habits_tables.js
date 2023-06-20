exports.up = function (knex) {
  return (
    knex.schema
      .createTable("user", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable(); //notNullable means can't be empty - mandatory
        table.string("email").notNullable();
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
          .unsigned() //this means something must be positive -- what must be positive?
          .references("user.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      })
      //unsure about author/target
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
      })
      .createTable("completions", (table) => {
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
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("habits")
    .dropTable("user")
    .dropTable("encouragemints");
};
