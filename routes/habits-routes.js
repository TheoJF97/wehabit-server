const router = require("express").Router();

//Middleware Controllers
const {
  addHabit,
  getAllHabits,
  getHabit,
  getHabitCompletions,
  postCompletion,
} = require("../controllers/habits-controller");

//Middleware Validation
const { validateAddHabit } = require("../middleware/habit-validation");

router.route("/").get(getAllHabits).post(validateAddHabit, addHabit);

router.route("/:id").get(getHabit);

router.route("/:id/completions").get(getHabitCompletions);

// POST completion by HabitId by Date
router.route("/:id/completions/:date").post(postCompletion);

module.exports = router;
