const knex = require("knex")(require("../knexfile"));

const getAllHabits = (_req, res) => {
  knex("habits")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

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

module.exports = {
  getAllHabits,
  addHabit,
};
