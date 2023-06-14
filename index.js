const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const wehabitRoutes = require("./routes/wehabit");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/habit", wehabitRoutes);

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
