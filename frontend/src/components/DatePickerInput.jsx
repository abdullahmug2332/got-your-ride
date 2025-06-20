"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles

const DatePickerInput = ({ selectedDate, setSelectedDate }) => {
  const [openDatePicker, setOpenDatePicker] = useState(false); // State to control visibility of date picker

  // Trigger the date picker to open
  const handleClick = () => {
    setOpenDatePicker(true);
  };

  return (
    <div
      className="relative w-full md:w-2/5 cursor-pointer"
      onClick={handleClick} // Make the entire container clickable to open the date picker
    >
      {/* Date input field */}
      <div className="relative ">
      
        <div className="absolute inset-y-0 z-1 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-3 h-3 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)} // Handle date selection
          open={openDatePicker} // Control whether the calendar is open
          onClickOutside={() => setOpenDatePicker(false)} // Close on clicking outside
          className="text-xs w-full pl-10 bg-white border border-gray-300 text-gray-900 rounded-full h-10 px-4 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholderText="Select date"
        />

        {/* Chevron Down Icon at the end */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DatePickerInput;
