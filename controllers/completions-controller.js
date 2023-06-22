const knex = require("knex")(require("../knexfile"));

const getAllCompletions = (_req, res) => {
  knex("completions")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving completions: ${err}`)
    );
};

const inputCompletion = (_req, res) => {
  knex("completions")
    .where({ habit_id: 1, date: "2023-06-19" })
    .update({ completed: 1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving completions: ${err}`)
    );
};

module.exports = {
  getAllCompletions,
  inputCompletion,
};
