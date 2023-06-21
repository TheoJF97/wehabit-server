const router = require("express").Router();

//Middleware Controllers
const { 
    addHabit,
    getAllHabits 
} = require("../controllers/habits-controller");

//Middleware Validation
const { validateAddHabit } = require("../middleware/habit-validation");

router
    .route("/")
    .get(getAllHabits)
    .post(validateAddHabit, addHabit); //needs validation

module.exports = router;
