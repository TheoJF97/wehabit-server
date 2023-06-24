const knex = require("knex")(require("../knexfile"));

const getAllEncouragemints = (_req, res) => {
  knex("encouragemints")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

const addEncouragemint = (req, res) => {
  const { author_id, target_id } = req.params;
  const { content } = req.body;

  knex("encouragemints")
    .insert({ author_id, target_id, content })
    .then((newEncouragemint) => {
      res.status(200).json(newEncouragemint);
    })
    .catch((err) =>
      res.status(400).send(`Error posting encouragemint: ${err}`)
    );
};

module.exports = {
  getAllEncouragemints,
  addEncouragemint,
};
