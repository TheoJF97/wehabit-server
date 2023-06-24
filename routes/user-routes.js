const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  getUserHabits,
  getUserEncourageMints,
} = require("../controllers/user-controller");

router.route("/").get(getAllUsers);

router.route("/:id").get(getUser);

router.route("/:id/habits").get(getUserHabits);

router.route("/:id/encouragemints").get(getUserEncourageMints);


module.exports = router;
