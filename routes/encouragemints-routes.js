const router = require("express").Router();
const encouragemintsController = require("../controllers/encouragemints-controller");

router.route("/").get(encouragemintsController.index);

module.exports = router;
