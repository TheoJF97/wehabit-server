const router = require("express").Router();

//Middleware Controllers
const {
  getAllCompletions,
  getCompletion,
  getDateRangeCompletions,
} = require("../controllers/completions-controller");

router.route("/").get(getAllCompletions);

router.route("/:id").get(getCompletion);

// GET Completions by HabitId by DateRange
// /completions/:id/:startDate/:endDate
router.route("/:id/:startDate/:endDate").get(getDateRangeCompletions);

module.exports = router;
