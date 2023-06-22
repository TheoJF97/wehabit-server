const router = require("express").Router();

//Middleware Controllers
const {
  getAllCompletions,
  getCompletion,
  // inputCompletion,
  postCompletion,
} = require("../controllers/completions-controller");

router.route("/").get(getAllCompletions).post(postCompletion);

router.route("/:id").get(getCompletion);
// .put(inputCompletion);

module.exports = router;
