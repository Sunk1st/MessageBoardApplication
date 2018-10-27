const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'secret_this_should_be_long');
    next();
  } catch (errpr) {
    res.status(401).json({
      message: "Auth Failed"
    })
  }
}