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

const postCompletion = (req, res) => {
  const { habit_id, date } = req.body;
  knex("completions")
    .insert({ habit_id, date })
    .then((completion) => {
      res.status(200).json(completion);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Unable to insert completion. Please try again later.",
        error: { error },
      });
    });
};

const getDateRangeCompletions = (req, res) => {
  const habitId = req.params.id;
  const { startDate, endDate } = req.params;

  console.log(startDate);
  console.log(endDate);

  knex("completions")
    .select()
    .where({ habit_id: habitId })
    .whereBetween("date", [startDate, endDate])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Unable to retrieve completions. Please try again later.",
        error: { error },
      });
    });
};


module.exports = {
  getAllCompletions,
  getCompletion,
  // inputCompletion,
  postCompletion,
  getDateRangeCompletions,
};
