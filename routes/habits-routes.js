const router = require("express").Router();

//Middleware Controllers
const {
  addHabit,
  getAllHabits,
  getHabit,
  getHabitCompletions,
} = require("../controllers/habits-controller");

//Middleware Validation
const { validateAddHabit } = require("../middleware/habit-validation");

router.route("/").get(getAllHabits).post(validateAddHabit, addHabit);

router.route("/:id").get(getHabit);

router.route("/:id/completions").get(getHabitCompletions);

module.exports = router;
