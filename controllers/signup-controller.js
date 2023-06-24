const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");

const addUser = (req, res) => {
  const { name, email, password } = req.body;

  knex("user")
    .insert({ name, email, password })
    .then((createdUser) => {
      res.status(201).json(createdUser);
    })
    .catch((err) => res.status(500).send(`Unable to Create new user: ${err}`));
};

module.exports = {
  addUser,
};
