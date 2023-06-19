const router = require("express").Router();
const habitsController = require("../controllers/habits-controller");

router.route("/").get(habitsController.index);

module.exports = router;
