const router = require("express").Router();

const { getAllHabits } = require("../controllers/habits-controller");

router.route("/").get(getAllHabits);

module.exports = router;
