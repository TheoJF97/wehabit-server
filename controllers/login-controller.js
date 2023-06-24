const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Login requires email and password",
    });
  }

  knex("user")
    .where({ email: email })
    .then((users) => {
      if (users.length === 0) {
        return res.status(401).json({
          message: "Invalid credentials on email",
        });
      }

      // Set the found user info in variable user containing id, name, email, pw
      const user = users[0];

      console.log(password);
      console.log(user.password);

      // compare provided pw with hashed pw
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(401).json({
          message: "Invalid credentials on pw",
        });
      }

      const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });

      res.json({ token });
    });
};

module.exports = {
  loginUser,
};
