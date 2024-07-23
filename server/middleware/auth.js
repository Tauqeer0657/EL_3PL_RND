const Jwt = require("jsonwebtoken");

function authenticateUser(req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) return res.status(401).send("No token Found");

  const token = authHeader.split(" ")[1]; // Extract the token part

  if (!token) return res.status(401).send("No token Found");

  try {
    const decodedToken = Jwt.verify(token, "hi");
    console.log(decodedToken);
    req.user = decodedToken;
    next();
  } catch (ex) {
    res.status(400).send("Invalid Token");
  }
}

module.exports = authenticateUser;
