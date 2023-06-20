const router = require("express").Router();

const {
  getAllUsers,
  getUserHabits,
} = require("../controllers/user-controller");

router.route("/").get(getAllUsers);

router.route("/:id").get(getUserHabits);

module.exports = router;
