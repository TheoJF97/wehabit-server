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

const getCompletion = (req, res) => {
  knex("completions")
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving completions: ${err}`)
    );
};

const inputCompletion = (req, res) => {
  const completionId = req.params.id;

  knex("completions")
    .select("completed")
    .where({ id: completionId })
    .first()
    .then((completion) => {
      const updatedCompleted = completion.completed === 1 ? 0 : 1;

      knex("completions")
        .where({ id: completionId })
        .update({ completed: updatedCompleted })
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

module.exports = {
  getAllCompletions,
  getCompletion,
  inputCompletion,
};
