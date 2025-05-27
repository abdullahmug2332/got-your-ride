const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email' });
    }

    const user = results[0];

    // Compare hashed password
    const isMatch = user.password == password
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid  password' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Send token + user data (excluding password)
    const { password: _, ...userData } = user;

    res.status(200).json({
      message: 'Login successful',
      token,
      user: userData,
    });
  });
};
