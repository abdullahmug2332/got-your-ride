"use client"
import React, { useState } from "react";
import { HiCalendar } from "react-icons/hi"; // For calendar icon

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Generate the calendar grid for the current month
  const generateCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const calendar = [];

    // Fill in the days
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(null); // Empty days before the start of the month
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day); // Add the days of the month
    }

    return calendar;
  };

  const handleDateSelect = (day) => {
    const selected = new Date(currentYear, currentMonth, day);
    setSelectedDate(selected);
    setDatePickerOpen(false); // Close the date picker after selecting
  };

  const handleMonthChange = (direction) => {
    if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Date Picker Button */}
      <div className="relative">
        <button
          onClick={() => setDatePickerOpen(!isDatePickerOpen)} // Toggle date picker visibility
          className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-900 rounded-full py-2 px-4 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <HiCalendar className="text-gray-500" />
          <span>{selectedDate ? selectedDate.toLocaleDateString() : "Select date"}</span>
        </button>

        {/* Custom Date Picker (Calendar Dropdown) */}
        {isDatePickerOpen && (
          <div className="absolute top-12 left-0 w-60 bg-white border border-gray-300 rounded-md shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <button onClick={() => handleMonthChange("prev")}>{"<"}</button>
              <span>{`${new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} ${currentYear}`}</span>
              <button onClick={() => handleMonthChange("next")}>{">"}</button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-semibold text-gray-700">{day}</div>
              ))}
              {generateCalendar().map((day, index) => (
                <div
                  key={index}
                  onClick={() => day && handleDateSelect(day)}
                  className={`py-2 cursor-pointer ${day ? "hover:bg-orange-500 hover:text-white" : "text-gray-300"}`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDatePicker;
