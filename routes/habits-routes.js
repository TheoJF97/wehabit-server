const router = require("express").Router();

const {
  addHabit,
  getAllHabits,
  getHabit,
  getHabitCompletions,
  postCompletion,
} = require("../controllers/habits-controller");

const { validateAddHabit } = require("../middleware/habit-validation");

router.route("/").get(getAllHabits).post(validateAddHabit, addHabit);

router.route("/:id").get(getHabit);

router.route("/:id/completions").get(getHabitCompletions);

router.route("/:id/completions/:date").post(postCompletion);

module.exports = router;
