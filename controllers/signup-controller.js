const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");

const addUser = (req, res) => {
  const { name, email, password } = req.body;

  knex("user")
    .insert({ name, email, password })
    .then((info) => {
      res.status(200).json(info);
    })
    .catch((err) => res.status(400).send(`Error adding new users: ${err}`));
};

module.exports = {
  addUser,
};
