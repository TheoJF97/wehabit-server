const knex = require("knex")(require("../knexfile"));

const getAllCompletions = (_req, res) => {
  knex("completions")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

// const inputCompletion = (req, res) => {
  
// }

module.exports = {
  getAllCompletions,
  // inputCompletion,
};
