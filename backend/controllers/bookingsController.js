// controllers/bookingController.js
const db = require("../db");

const bookings = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const sort = req.query.sort === "asc" ? "ASC" : "DESC";

  const place = req.query.place;
  const fromDate = req.query.fromDate;
  const toDate = req.query.toDate;

  let filters = [];
  let values = [];

  // Apply place filter if not "all"
  if (place && place !== "all") {
    filters.push("place_number = ?");
    values.push(place);
  }

  // Apply date range filter
  if (fromDate && toDate) {
    filters.push("booking_date BETWEEN ? AND ?");
    values.push(fromDate, toDate);
  }

  const whereClause = filters.length ? `WHERE ${filters.join(" AND ")}` : "";

  const sql = `SELECT * FROM bookings ${whereClause} ORDER BY booking_date ${sort} LIMIT ? OFFSET ?`;
  const countSql = `SELECT COUNT(*) AS total FROM bookings ${whereClause}`;

  // Pagination values for both queries
  const queryValues = [...values, limit, offset];

  db.query(sql, queryValues, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    db.query(countSql, values, (err2, countResult) => {
      if (err2) return res.status(500).json({ error: err2 });

      const total = countResult[0].total;
      const totalPages = Math.ceil(total / limit);

      res.json({
        data: results,
        currentPage: page,
        totalPages,
        totalRecords: total,
      });
    });
  });
};
const getBookingById = (req, res) => {
  const bookingId = req.params.id;
  const query = "SELECT * FROM bookings WHERE id = ?";

  db.query(query, [bookingId], (err, results) => {
    if (err) {
      console.error("Error fetching booking by ID:", err);
      return res.status(500).json({ error: "Failed to retrieve booking" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json(results[0]);
  });
};
const bookingStats = (req, res) => {
  const uniqueUsersSql = `SELECT COUNT(DISTINCT email) AS totalUsers FROM bookings`;
  const totalBookingsSql = `SELECT COUNT(*) AS totalBookings FROM bookings`;
  const totalPriceSql = `SELECT SUM(total_price) AS totalPrice FROM bookings`;

  db.query(uniqueUsersSql, (err1, uniqueUserResult) => {
    if (err1) return res.status(500).json({ error: err1 });

    db.query(totalBookingsSql, (err2, totalBookingsResult) => {
      if (err2) return res.status(500).json({ error: err2 });

      db.query(totalPriceSql, (err3, totalPriceResult) => {
        if (err3) return res.status(500).json({ error: err3 });

        res.json({
          totalUsers: uniqueUserResult[0].totalUsers,
          totalBookings: totalBookingsResult[0].totalBookings,
          totalPrice: totalPriceResult[0].totalPrice || 0,
        });
      });
    });
  });
};

const getBookingsStatsByPeriod = (req, res) => {
  const period = req.query.period || "year";

  let query = "";
  switch (period) {
    case "week":
      // Group by day of the week (1=Monday,...7=Sunday)
      query = `
        SELECT 
          DAYOFWEEK(booking_date) AS day,
          COUNT(*) AS total
        FROM bookings
        WHERE YEARWEEK(booking_date, 1) = YEARWEEK(CURDATE(), 1)
        GROUP BY day
        ORDER BY day
      `;
      break;

    case "month":
      // Group by day of the month for current month
      query = `
        SELECT 
          DAY(booking_date) AS day, 
          COUNT(*) AS total
        FROM bookings
        WHERE MONTH(booking_date) = MONTH(CURDATE()) AND YEAR(booking_date) = YEAR(CURDATE())
        GROUP BY day
        ORDER BY day
      `;
      break;

    case "year":
    default:
      // Group by month for current year
      query = `
        SELECT 
          MONTH(booking_date) AS month, 
          COUNT(*) AS total
        FROM bookings
        WHERE YEAR(booking_date) = YEAR(CURDATE())
        GROUP BY month
        ORDER BY month
      `;
      break;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (period === "week") {
      // Map day numbers (1=Sunday, 2=Monday, ...) to names and fill missing days
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const data = dayNames.map((name, i) => {
        const match = results.find(r => r.day === i + 1);
        return {
          name,
          Bookings: match ? match.total : 0,
        };
      });
      return res.json(data);
    }

    if (period === "month") {
      // For days in month (assume 31 max days, or better compute days in current month)
      const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
      const data = [];
      for (let d = 1; d <= daysInMonth; d++) {
        const match = results.find(r => r.day === d);
        data.push({ name: `${d}`, Bookings: match ? match.total : 0 });
      }
      return res.json(data);
    }

    // default year case - map months
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const data = monthNames.map((name, i) => {
      const match = results.find(r => r.month === i + 1);
      return {
        name,
        Bookings: match ? match.total : 0
      };
    });

    return res.json(data);
  });
};

module.exports = {
  bookings,
  getBookingById,
  bookingStats,
  getBookingsStatsByPeriod,
};
