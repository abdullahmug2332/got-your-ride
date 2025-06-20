const db = require('../db');

const destination = (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID is required in request body." });
  }

  db.query('SELECT * FROM destination WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Server error." });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Destination not found." });
    }

    try {
      const row = results[0];
      const parsedData = JSON.parse(row.json);

      res.json(parsedData);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      res.status(500).json({ message: "Error parsing destination data." });
    }
  });
};

const updateDestinations = (req, res) => {
    const { id,json } = req.body;

    if (!id || !json) {
        return res.status(400).json({ message: 'Missing id or json data.' });
    }

    const query = `UPDATE destination SET json = ? WHERE id = ?`;
    db.query(query, [JSON.stringify(json), id], (err, result) => {
        if (err) {
            console.error('Error updating destination data:', err);
            return res.status(500).json({ message: 'Failed to update destination data.' });
        }

        res.status(200).json({ message: 'Destination data updated successfully.' });
    });
};


module.exports = {
  destination,
  updateDestinations
};