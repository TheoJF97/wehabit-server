const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  const { email, password } = req.body;
  knex("user")
    .then((users) => {
      users.find((user) => {
        user.email === email && user.password === password;
      });
    })
    .then(
      res.json({ token: jwt.sign({ email: email }, process.env.SECRET_KEY) })
    )
    .catch(
      res.status(403).json({
        token: "",
        error: {
          message: "Error logging in. Invalid username/password combination.",
        },
      })
    );
};

module.exports = {
  loginUser,
};
