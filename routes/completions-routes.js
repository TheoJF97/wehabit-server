const router = require("express").Router();

//Middleware Controllers
const { getAllCompletions } = require("../controllers/completions-controller");

router.route("/").get(getAllCompletions);
// .put(inputCompletion);

module.exports = router;
