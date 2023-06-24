const jwt = require("jsonwebtoken");
const jsonSecretKey = process.env.SECRET_KEY;

const authenticate = (req, res, next) => {
  // Signup and login are public URLs that don't require a token
  if (req.url === "/signup" || req.url === "/login") {
    next();
  } else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = getToken(req);

    if (token) {
      console.log("Auth Token:", token);
      try {
        const decodedToken = jwt.verify(token, jsonSecretKey);
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
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
