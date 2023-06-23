const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

// Routes
const userRoutes = require("./routes/user-routes");
const habitsRoutes = require("./routes/habits-routes");
const encouragemintsRoutes = require("./routes/encouragemints-routes");
const completionsRoutes = require("./routes/completions-routes");

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

// MW for completions
app.use("/completions", completionsRoutes);

// SIGNUP AND LOGIN ENDPOINTS
app.use((req, res, next) => {
  // Signup and login are public URLs that don't require a token
  if (req.url === "/signup" || req.url === "/login") {
    next();
  } else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = getToken(req);

    if (token) {
      console.log("Auth Token:", token);
      if (jwt.verify(token, process.env.SECRET_KEY)) {
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
        req.decode = jwt.decode(token);
        next();
      } else {
        res.status(403).json({ error: "Not Authorized." });
      }
    } else {
      res.status(403).json({ error: "No token. Unauthorized." });
    }
  }
});

function getToken(req) {
  return req.headers.authorization.split(" ")[1];
}

const users = {};

app.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  users[username] = {
    name,
    password, // NOTE: Passwords should NEVER be stored in the clear like this. Use a              // library like bcrypt to Hash the password. For demo purposes only.
  };
  console.log("Users Object:", users);
  res.json({ success: "true" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    console.log("Found user:", user);
    res.json({ token: jwt.sign({ name: user.name }, process.env.SECRET_KEY) });
  } else {
    res.status(403).json({
      token: "",
      error: {
        message: "Error logging in. Invalid username/password combination.",
      },
    });
  }
});

app.get("/profile", (req, res) => {
  res.json(req.decode);
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
