// import seed data files, arrays of objects
const usersData = require("../seed-data/users");
const habitsData = require("../seed-data/habits");
const encouragemintsData = require("../seed-data/encouragemints");

exports.seed = function (knex) {
  return knex("encouragemints")
    .del()
    .then(function () {
      return knex("habits").del();
    })
    .then(function () {
      return knex("user").del();
    })
    .then(function () {
      return knex("user").insert(usersData);
    })
    .then(() => {
      return knex("habits").insert(habitsData);
    })
    .then(() => {
      return knex("encouragemints").insert(encouragemintsData);
    });
};
