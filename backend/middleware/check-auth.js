const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, 'secret_this_should_be_long');
    req.userData = {email: decodedToken, userId: decodedToken.userId}
    next();
  } catch (errpr) {
    res.status(401).json({
      message: "Auth Failed"
    })
  }
}
