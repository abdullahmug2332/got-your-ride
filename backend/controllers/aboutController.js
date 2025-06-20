const db = require('../db'); 

const getAboutInfo = (req, res) => {
  const query = 'SELECT * FROM about';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching contact cards:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

const updateAboutData = (req, res) => {
  const { title, content, posterTitle, posterNumber ,text1, text2  } = req.body;

  const query = `
    UPDATE about 
    SET title = ?, content = ?, posterTitle = ?, posterNumber = ?,text1 = ?,text2 = ?
    WHERE id = 1
  `;

  db.query(query, [title, content, posterTitle, posterNumber , text1, text2], (err, result) => {
    if (err) {
      console.error('Error updating about data:', err);
      return res.status(500).json({ error: 'Failed to update about data' });
    }
    res.json({ message: 'About page updated successfully' });
  });
};
 
module.exports = {
  getAboutInfo,
  updateAboutData
};
