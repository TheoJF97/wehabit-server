const router = require("express").Router();

const {
  getAllEncouragemints,
  addEncouragemint,
} = require("../controllers/encouragemints-controller");

router.route("/").get(getAllEncouragemints);

router.route("/:author_id/:target_id").post(addEncouragemint);

module.exports = router;
