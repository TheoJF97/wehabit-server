const router = require("express").Router();

const {
  getAllCompletions,
  getCompletion,
  getDateRangeCompletions,
} = require("../controllers/completions-controller");

router.route("/").get(getAllCompletions);

router.route("/:id").get(getCompletion);

router.route("/:id/:startDate/:endDate").get(getDateRangeCompletions);

module.exports = router;
