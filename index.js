const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Routes
const userRoutes = require("./routes/user-routes");
const habitsRoutes = require("./routes/habits-routes");
const encouragemintsRoutes = require("./routes/encouragemints-routes");

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.send("WELCOME TO MY API");
});

// MW that GETs all users
app.use("/users", userRoutes);

// MW that GETs all habits
app.use("/habits", habitsRoutes);

// MW that GETs all encouragemints
app.use("/encouragemints", encouragemintsRoutes);

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
