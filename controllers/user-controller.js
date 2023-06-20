const knex = require("knex")(require("../knexfile"));

const getAllUsers = (_req, res) => {
  knex("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

const getUserHabits = (req, res) => {
  knex("habits")
    .where({ user_id: req.params.id })
    .then((foundHabits) => {
      if (foundHabits.length === 0) {
        return res.status(404).json({
          message: `Habits for user with ID: ${req.params.id} not found`,
        });
      }
      res.status(200).json(foundHabits);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve habits for user with ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  getAllUsers,
  getUserHabits,
};
