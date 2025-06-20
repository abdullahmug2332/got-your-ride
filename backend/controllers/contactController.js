const db = require('../db'); // import your DB connection

// Fetch all contact cards
const getAllContactCards = (req, res) => {
  const query = 'SELECT id, category, title, content,link FROM contactcards';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching contact cards:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

const updateCard = (req, res) => {
  const id = parseInt(req.params.id);
  const { category, title, content, link } = req.body;

  const query =
    'UPDATE contactcards SET category = ?, title = ?, content = ?, link = ? WHERE id = ?';

  db.query(
    query,
    [category, title, content, link, id],
    (err, result) => {
      if (err) {
        console.error('Error updating contact card:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Card not found' });
      }
      res.json({ message: 'Card updated successfully' });
    }
  );
};
module.exports = {
  getAllContactCards,
  updateCard
};
