const router = require("express").Router();

//Middleware Controllers
const {
  getAllCompletions,
  getCompletion,
  inputCompletion,
} = require("../controllers/completions-controller");

router.route("/").get(getAllCompletions)

router.route("/:id").get(getCompletion).put(inputCompletion);

module.exports = router;
