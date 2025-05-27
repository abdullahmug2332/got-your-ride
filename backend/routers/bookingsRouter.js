
const express = require("express");
const router = express.Router();
const { bookings,getBookingById,bookingStats,getBookingsStatsByPeriod} = require("../controllers/bookingsController");
const verifyToken = require("../middlewares/authMiddleware");




router.get("/stats",verifyToken, bookingStats);
router.get("/monthly-stats",verifyToken, getBookingsStatsByPeriod   );
router.get("/:id",verifyToken, getBookingById); 
router.get("/",verifyToken, bookings);


module.exports = router;
