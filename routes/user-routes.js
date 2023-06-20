const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  getUserHabits,
} = require("../controllers/user-controller");

router.route("/").get(getAllUsers);

router.route("/:id").get(getUser);

router.route("/:id/habits").get(getUserHabits);

module.exports = router;
