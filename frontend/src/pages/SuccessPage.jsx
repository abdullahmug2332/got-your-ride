import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaCreditCard, FaUser } from "react-icons/fa";
import { FaCableCar } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";  // Import hooks
import { FaCar } from "react-icons/fa";
const SuccessPage = () => {
  const location = useLocation(); // Get data passed to the location
  const navigate = useNavigate();
  
  // State for storing booking details
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    if (location.state) {
      setBookingDetails(location.state.data); // Get booking data passed from previous page
    } else {
      navigate("/");  // Redirect if no booking data is found
    }
  }, [location, navigate]);

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  const {bookingTitle, bookingDate, adults, placeNumber, totalPrice } = bookingDetails;
  const calculateCars = (adults) => {
    if (adults <= 6) return 1;
    if (adults <= 12) return 2;
    if (adults <= 18) return 3;
    return Math.ceil(adults / 6); // More than 18 adults, calculate dynamically
  };

  const numberOfCars = calculateCars(adults);
  return (
    <div className="flex  justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="w-full md:max-w-4xl bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row justify-between">
        {/* Left Section: Booking Success Message */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="flex justify-center items-center bg-orange-500 rounded-full p-4 mb-4">
            <FaCheckCircle className="text-white text-4xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Thank You</h2>
          <p className="text-gray-600 text-center mb-6">Your Booking Has Been Placed</p>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">${totalPrice}</h3>
        </div>

        {/* Right Section: Payment Details */}
        <div className="w-full md:w-1/2 pl-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Payment Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-700">
              <span>Date</span>
              <span>{bookingDate}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Reference Number</span>
              <span>{bookingTitle}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Amount</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Number of People</span>
              <div className="flex items-center">
                <FaUser className="text-gray-700 mr-2" />
                <span>{adults}</span>
              </div>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Number of Cars</span>
              <div className="flex items-center">
                <FaCar className="text-gray-700 mr-2" />
                <span>{numberOfCars}</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
