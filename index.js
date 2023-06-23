const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
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

const users = {};

// signup endpoint
app.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  users[username] = {
    name,
    password, // NOTE: Passwords should NEVER be stored in the clear like this. Use a
    // library like bcrypt to Hash the password. For demo purposes only.
  };
  res.json({ success: "true" });
});

// A Basic Login end point
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  console.log(user);
  if (user && user.password === password) {
    // Create a JWT token for the user, and add their name to the token,
    const token = jwt.sign(
      { username: username }, //payload
      process.env.SECRET_KEY //signature
    );
    // Send the token back to the client
    return res.status(200).json(token);
  } else {
    return res.status(401).json({
      message: "You shall not pass!",
    });
  }
});

const authorize = (req, res, next) => {
  const splitAuthorizationHeader = req.headers.authorization.split(" ");
  console.log(splitAuthorizationHeader);

  if (splitAuthorizationHeader.length !== 2) {
    return res.status(403).json({
      message: "endpoint requires a valid token",
    });
  }

  const bearerToken = splitAuthorizationHeader[1];
  console.log(bearerToken);
  console.log(process.env.SECRET_KEY);

  jwt.verify(bearerToken, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(403).json({
        message: "Invalid JWT",
      });
    }

    req.iat = decoded.iat;
    console.log(decoded);
    next();
  });
};

app.get("/profile", authorize, (req, res) => {
  res.json(req.iat);
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
