const router = require("express").Router();

const { addUser } = require("../controllers/signup-controller");
const { validateUser } = require("../middleware/user-validation");

router.route("/").post(validateUser, addUser);

module.exports = router;
