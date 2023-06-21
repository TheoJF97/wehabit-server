const validateAddHabit = (req, res, next) => {
  if (!req.body.title || !req.body.user_id === "") {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (isNaN(req.body.user_id) || req.body.user_id < 0) {
    return res.status(400).json({ error: "Invalid id" });
  }
  next();
};

module.exports = {
  validateAddHabit,
};
