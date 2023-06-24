const router = require("express").Router();

const {
  getAllEncouragemints,
  addEncouragemint,
} = require("../controllers/encouragemints-controller");

router.route("/").get(getAllEncouragemints);

// Endpoint: /encouragemints/author_id/target_id
router.route("/:author_id/:target_id").post(addEncouragemint);

module.exports = router;
