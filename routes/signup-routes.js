const router = require("express").Router();

const { addUser } = require("../controllers/signup-controller");

router.route("/").post(addUser);

module.exports = router;
