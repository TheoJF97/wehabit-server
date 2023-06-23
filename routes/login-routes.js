const router = require("express").Router();

const { loginUser } = require("../controllers/login-controller");

router.route("/").post(loginUser);

module.exports = router;
