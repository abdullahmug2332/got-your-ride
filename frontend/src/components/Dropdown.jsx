"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiUser } from "react-icons/hi"; // For participants icon

const Dropdown = ({ adults, setAdults, handleDecrease, handleIncrease }) => {
  const [isAdultDropdownOpen, setAdultDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a reference for the dropdown

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAdultDropdownOpen(false); // Close the dropdown
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full md:w-2/5" ref={dropdownRef}> {/* Attach ref here */}
      <button
        onClick={() => setAdultDropdownOpen(!isAdultDropdownOpen)}
        className="flex items-center w-full space-x-2 bg-white border border-gray-300 text-gray-900 h-10 rounded-full py-2 px-4 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <HiUser className="text-gray-500" />
        <span className="flex items-center justify-between text-xs w-full">
          <span> Adult x {adults} </span>
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
          </svg>
        </span>
      </button>

      {/* Participants Counter Dropdown */}
      {isAdultDropdownOpen && (
        <div className="absolute top-12 left-0 z-10 bg-white w-60 rounded-lg shadow-lg p-4 border border-gray-300">
          <div className="flex items-center justify-between space-x-2">
            <span
              onClick={handleDecrease}
              className="cursor-pointer rounded-full bg-gray-200 flex items-center justify-center h-6 w-6 duration-100 hover:bg-orange-500 hover:text-white"
            >
              -
            </span>
            <input
              className="h-6 w-20 pl-4 text-center border-none bg-gray-100 text-gray-700"
              type="number"
              value={adults}
              min="1"
              readOnly
            />
            <span
              onClick={handleIncrease}
              className="cursor-pointer rounded-full border-gray-500 bg-gray-200 flex items-center justify-center h-6 w-6 duration-100 hover:bg-orange-500 hover:text-white"
            >
              +
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
