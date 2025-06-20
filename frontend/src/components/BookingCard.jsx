import React from "react";
import { FaStar, FaInfoCircle } from "react-icons/fa";

const BookingCard = ({ bookingInfo }) => {
  // Convert the bookingInfo.date to a Date object if needed.
  const bookingDate = bookingInfo.date ? new Date(bookingInfo.date) : new Date();
  
  // Format the date (e.g., "Thursday, March 20, 2025")
  const formattedDate = bookingDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const plusOneDate = new Date();
  plusOneDate.setDate(plusOneDate.getDate() + 1);
  // Format the time (e.g., "10:00 AM")
  const formattedPlusOneDate = plusOneDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const formattedTime = bookingDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Booking Title */}
      <h3 className="font-semibold text-sm mt-3 p-4 leading-snug mb-2">
        {bookingInfo.title}
      </h3>
      
      {/* Stars (static rating) */}
     
      {/* Booking Details */}
      <div className="text-xs px-4 mb-5 text-gray-600 space-y-2">
        <p>
          <strong>Date:</strong> {formattedDate}
        </p>
        
        <p>
          <strong>Travel:</strong> {bookingInfo.adults} Adult{bookingInfo.adults > 1 ? "s" : ""}
        </p>
        
      </div>
      
      {/* Total Price */}
      <div className="mt-4 p-4 bg-[#ddd] pt-2 flex justify-between items-center">
        <span className="text-sm font-semibold">Total</span>
        <span className="text-base font-semibold text-gray-800">
          ${bookingInfo.price}
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
