const router = require("express").Router();

const { 
    addHabit,
    getAllHabits 
} = require("../controllers/habits-controller");

router
    .route("/")
    .get(getAllHabits)
    .post(addHabit); //needs validation

module.exports = router;
