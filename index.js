const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const habitsRoutes = require("./routes/habits-routes");
const encouragemintsRoutes = require("./routes/encouragemints-routes");
const completionsRoutes = require("./routes/completions-routes");
const signupRoutes = require("./routes/signup-routes");
const loginRoutes = require("./routes/login-routes");
const { authenticate } = require("./middleware/authenticate");

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());
app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.send("WELCOME TO MY API");
});

app.use("/users", userRoutes);

app.use("/habits", habitsRoutes);

app.use("/encouragemints", encouragemintsRoutes);

app.use("/completions", completionsRoutes);

app.use("/signup", signupRoutes);

app.use("/login", loginRoutes);

app.get("/profile", authenticate, (req, res) => {
  res.json(req.decode);
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
