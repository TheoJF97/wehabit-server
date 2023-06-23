const knex = require("knex")(require("../knexfile"));

// ROUTE: GET /habits/
const getAllHabits = (_req, res) => {
  knex("habits")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

// ROUTE: POST /habits/
const addHabit = (req, res) => {
  const { title, user_id } = req.body;
  knex("habits")
    .insert({ title, user_id })
    .then((newHabit) => {
      res.status(200).json(newHabit);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Unable to add habit. Please try again later.",
        error: { error },
      });
    });
};

// ROUTE: GET /habits/:id
const getHabit = (req, res) => {
  knex("habits")
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving habit: ${err}`));
};

// ROUTE: GET /habits/:id/completions
const getHabitCompletions = (req, res) => {
  knex("completions")
    .where({ habit_id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving habit: ${err}`));
};

// ROUTE: POST /habits/:id/completions/:date
const postCompletion = (req, res) => {
  knex("completions")
    .insert({ habit_id: req.params.id, date: req.params.date })
    .then((completion) => {
      res.status(200).json(completion);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Unable to insert completion. Please try again later.",
        error: { error },
      });
    });
};

module.exports = {
  getAllHabits,
  addHabit,
  getHabit,
  getHabitCompletions,
  postCompletion,
};
