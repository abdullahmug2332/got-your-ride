
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const paypal = require('@paypal/checkout-server-sdk');
const client = require('./paypalClient'); 
const app = express();
require('dotenv').config();
const authRoutes = require('./routers/authRouter.js');
const bookingsRouter = require("./routers/bookingsRouter");
const checkToken =require("./controllers/checkToken.js")

const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],  
  credentials: true,  
};


app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use("/",checkToken)
app.use('/auth', authRoutes);
app.use("/bookings", bookingsRouter);

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "gotyourride",
});

// Test the database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL", err);
  } else {
    console.log("Connected to MySQL");
    connection.release();
  }
});
app.post("/api/contact", (req, res) => {
  // Extract the form data from the request body
  const { name, email, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // SQL query for inserting contact data into the table
  const sql = `
    INSERT INTO contacts (name, email, message)
    VALUES (?, ?, ?)
  `;

  // Execute the query
  pool.query(
    sql,
    [name, email, message],
    (err, results) => {
      if (err) {
        console.error("Error inserting data", err);
        return res.status(500).json({ error: "Database error" });
      }
      return res.status(201).json({ message: "Message submitted successfully", id: results.insertId });
    }
  );
});

app.post("/api/feedback", (req, res) => {
  const { firstName, lastName, email, phone, message, rating } = req.body;
  console.log(req.body);
  // Validate input data
  if (!firstName || !lastName || !email || !phone || !message || !rating) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `
    INSERT INTO feedbacks (first_name, last_name, email, phone, message, rating)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  pool.query(
    sql,
    [firstName, lastName, email, phone, message, rating],
    (err, results) => {
      if (err) {
        console.error("Error inserting feedback data", err);
        return res.status(500).json({ error: "Database error" });
      }
      return res.status(201).json({ message: "Feedback submitted successfully", id: results.insertId });
    }
  );
});

app.post("/api/bookings", async (req, res) => {
  const { totalPrice } = req.body;  // You can add other booking details here

  // Set up PayPal Order
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [{
      amount: {
        currency_code: "USD",
        value: totalPrice,  // Amount to be paid
      },
    }],
    application_context: {
      return_url: `${process.env.BASE_URL}/success`,  // URL to redirect after success
      cancel_url: `${process.env.BASE_URL}/failed`,  // URL to redirect after failure
    },
  });

  try {
    const order = await client.execute(request);  // Send the request to PayPal
    const approvalUrl = order.result.links.find(link => link.rel === "approve").href;
    return res.status(201).json({ approvalUrl });  // Send approval URL to frontend
  } catch (error) {
    console.error("Error creating PayPal order:", error);
    return res.status(500).json({ error: "Failed to create PayPal order" });
  }
});

app.post("/api/bookings/capture", async (req, res) => {
  const { orderId, bookingId } = req.body;  // Order ID and booking ID received from the frontend

  const request = new paypal.orders.OrdersCaptureRequest(orderId); // Capture the order using PayPal API
  request.requestBody({});

  try {
    // Execute capture request
    const capture = await client.execute(request);  // Send the capture request to PayPal
    console.log("Payment captured:", capture.result);

    // Check the status of the capture
    const paymentStatus = capture.result.status;  // The status field indicates payment result

    if (paymentStatus === "COMPLETED") {
      // If payment is successfully completed
      console.log("Payment completed successfully");

      // Extract the booking data sent from the frontend
      const bookingData = req.body;  // Booking data passed in the payload
      const { firstName, lastName, email, phone, street, city, zipCode, stateName, termsAccepted, totalPrice, bookingTitle, bookingDate, adults, placeNumber } = bookingData;

      // Insert the booking into your DB, assuming you are using MySQL
      const insertBookingQuery = `
        INSERT INTO bookings (
          first_name, last_name, email, phone, street, city, state, zip_code, 
          booking_title, booking_date, adults, place_number, total_price, is_paid, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, NOW())
      `;
      
      await pool.promise().query(insertBookingQuery, [
        firstName, lastName, email, phone, street, city, stateName, zipCode,
        bookingTitle, bookingDate, adults, placeNumber, totalPrice
      ]);

      return res.status(200).json({
        message: "Payment captured successfully and booking saved!",
        captureId: capture.result.id,
        bookingData
      });
    } else {
      console.error("Payment not completed. Status:", paymentStatus);
      return res.status(500).json({ error: "Payment capture failed" });
    }
  } catch (error) {
    console.error("Error capturing PayPal payment:", error);
    return res.status(500).json({ error: "Payment capture failed" });
  }
});

app.get("/test",(req,res)=>{
  const sql = `select * from bookings`;

  pool.query(
    sql,
    (err, results) => {
      if (err) {
        console.error("Error inserting feedback data", err);
        return res.status(500).json({ error: "Database error" });
      }
      return res.status(201).json({ message: "Feedback submitted successfully", results: results });
    }
  );
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
