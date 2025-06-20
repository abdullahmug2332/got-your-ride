import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentRedirectHandler = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get("token");  // PayPal order ID, usually in the query string
  const bookingId = params.get("bookingId");  // You can pass the bookingId as a query parameter

  useEffect(() => {
    if (orderId && bookingId) {
      // Call backend API to capture payment
      capturePayment(orderId, bookingId);
    } else {
      navigate("/booking/failed");  // If no orderId or bookingId, redirect to failure page
    }
  }, [orderId, bookingId, navigate]);

  const capturePayment = async (orderId, bookingId) => {
    try {
      const response = await fetch(`${baseUrl}/api/bookings/capture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, bookingId }),
      });

      if (response.ok) {
        navigate("/booking/success");  // Redirect to success page on success
      } else {
        navigate("/booking/failed");  // Redirect to failed page on failure
      }
    } catch (error) {
      console.error("Error capturing payment:", error);
      navigate("/booking/failed");  // Redirect to failed page in case of error
    }
  };

  return (
    <div>
      <p>Processing your payment...</p>
    </div>
  );
};

export default PaymentRedirectHandler;
