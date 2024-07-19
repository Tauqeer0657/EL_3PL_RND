const Jwt = require("jsonwebtoken");

function authenticateUser(req, res, next) {
  const token = req.header("Token");
  console.log(token);
  if (!token) return res.status(401).send("No token Found");
  try {
    const decodedToken = Jwt.verify(token, "hi");
    console.log(decodedToken);
    req.id = decodedToken;
    next();
  } catch (ex) {
    res.status(400).send("Invalid Token");
  }
}

module.exports = authenticateUser;
