const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader)

  // Token format: "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token)


  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your secret key
    req.user = decoded; // Attach user payload (e.g., id, email) to req object
    next(); // Token is valid, continue to route handler
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = verifyToken;
