const jwt = require("jsonwebtoken");
const jsonSecretKey = process.env.SECRET_KEY;

const authenticate = (req, res, next) => {
  if (req.url === "/signup" || req.url === "/login") {
    next();
  } else {
    const token = getToken(req);

    if (token) {
      try {
        const decodedToken = jwt.verify(token, jsonSecretKey);
        req.decode = decodedToken;
        next();
      } catch (error) {
        res.status(403).json({ error: "Not Authorized." });
      }
    } else {
      res.status(403).json({ error: "No token. Unauthorized." });
    }
  }
};

function getToken(req) {
  if (req.headers.authorization) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
}

module.exports = {
  authenticate,
};
