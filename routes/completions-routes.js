const router = require("express").Router();

//Middleware Controllers
const {
  getAllCompletions,
  getCompletion,
  // inputCompletion,
  postCompletion,
  getDateRangeCompletions,
} = require("../controllers/completions-controller");

router.route("/").get(getAllCompletions).post(postCompletion);

// /completions/:id/:startDate/:endDate
router.route("/:id/:startDate/:endDate").get(getDateRangeCompletions);

router.route("/:id").get(getCompletion);
// .put(inputCompletion);

module.exports = router;
