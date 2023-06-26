const knex = require("knex")(require("../knexfile"));

const getAllUsers = (_req, res) => {
  knex("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

const getUser = (req, res) => {
  knex("user")
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving user: ${err}`));
};

const getUserHabits = (req, res) => {
  knex("habits")
    .where({ user_id: req.params.id })
    .then((foundHabits) => {
      res.status(200).json(foundHabits);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve habits for user with ID: ${req.params.id}`,
      });
    });
};

const getUserEncourageMints = (req, res) => {
  knex
    .select(
      "encouragemints.author_id",
      "user.name as author_name",
      "encouragemints.content"
    )
    .from("encouragemints")
    .where({ target_id: req.params.id })
    .join("user", "user.id", "encouragemints.author_id")
    .then((foundEncourageMints) => {
      res.status(200).json(foundEncourageMints);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve EncourageMints for user with ID: ${req.params.id}`,
      });
    });
};

module.exports = {
  getAllUsers,
  getUserHabits,
  getUser,
  getUserEncourageMints,
};
