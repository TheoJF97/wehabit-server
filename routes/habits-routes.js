const router = require("express").Router();

const {
  getAllHabits,
  getUserHabits,
} = require("../controllers/habits-controller");

router.route("/").get(getAllHabits);


module.exports = router;
