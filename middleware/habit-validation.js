const validateAddHabit = (req, res, next) => {
  if (!req.body.title || req.body.user_id === "") {
    return res.status(400).json({ error: "Missing fields" });
  }
  next();
};

module.exports = {
  validateAddHabit,
};
