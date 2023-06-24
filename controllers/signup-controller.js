const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
// password: bcrypt.hashSync(user.password, Number(process.env.SALT_ROUNDS)),

const addUser = (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(
    password,
    Number(process.env.SALT_ROUNDS)
  );

  knex("user")
    .insert({ name, email, password: hashedPassword })
    .then((createdUser) => {
      res.status(201).json(createdUser);
    })
    .catch((err) => res.status(500).send(`Unable to Create new user: ${err}`));
};

module.exports = {
  addUser,
};
