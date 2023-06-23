const router = require("express").Router();

//Middleware Controllers
const {
  getAllCompletions,
  postCompletion,
  getCompletion,
  getDateRangeCompletions,
} = require("../controllers/completions-controller");

router.route("/").get(getAllCompletions).post(postCompletion);

router.route("/:id").get(getCompletion);

// /completions/:id/:startDate/:endDate
router.route("/:id/:startDate/:endDate").get(getDateRangeCompletions);


module.exports = router;
