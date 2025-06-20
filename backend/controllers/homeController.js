const db = require("../db");

const getHomeInfo = (req, res) => {
  const query = "SELECT * FROM home";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching home data:", err);
      return res.status(500).json({ error: "Database error" });
    }

    try {
      if (results.length > 0 && results[0].json) {
        const parsedJson = JSON.parse(results[0].json); // Parse only the `json` field
        res.json(parsedJson); // Send the parsed content directly
      } else {
        res.status(404).json({ message: "No home data found." });
      }
    } catch (parseError) {
      console.error("JSON parse error:", parseError.message);
      res.status(500).json({ message: "Error parsing home data." });
    }
  });
};


const getHomeHeroData = (req, res)=> {
  let query = 'SELECT json FROM homehero ';

  db.query(query, (err, results)=> {
    if (err) {
      console.error('Error fetching home hero data:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ message: 'No hero data found' });
    }

    var jsonData;
    try {
      jsonData = JSON.parse(results[0].json);
    } catch(parseErr) {
      console.error('Error parsing JSON:', parseErr);
      return res.status(500).json({ message: 'Invalid JSON data in database' });
    }
    res.json(jsonData);
  });
}

const updateHomeHero = (req, res) => {
    const { json } = req.body;

    if (!Array.isArray(json)) {
        return res.status(400).json({ error: 'Invalid JSON format' });
    }

    const jsonString = JSON.stringify(json);
    console.log(jsonString)

    db.execute('UPDATE homehero SET json = ? WHERE id = 1', [jsonString], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to update homehero data' });
        }

        res.json({ message: 'HomeHero updated successfully' });
    });
};

const updateHomeData = (req, res) => {
    const { json } = req.body;

    if (!Array.isArray(json)) {
        return res.status(400).json({ error: 'Invalid JSON format' });
    }

    const jsonString = JSON.stringify(json);

    db.execute('UPDATE home SET json = ? WHERE id = 1', [jsonString], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to update home data' });
        }

        res.json({ message: 'Home data updated successfully' });
    });
};


module.exports = {
  getHomeInfo,
  getHomeHeroData,
  updateHomeHero,
  updateHomeData
};
