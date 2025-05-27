const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/checktoken", (req, res) => {
  const { token } = req.body; 

  if (!token) {
    return res.status(400).json({ valid: false, error: "Token is required" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ valid: true });
  } catch (error) {
    return res.json({ valid: false });
  }
});

module.exports = router;
