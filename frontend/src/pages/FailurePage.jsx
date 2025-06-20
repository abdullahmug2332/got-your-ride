import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimesCircle, FaRedo, FaHome } from "react-icons/fa";

const FailurePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 flex justify-between">
        {/* Left Section: Failure Message */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-center items-center bg-orange-500 rounded-full p-4 mb-4">
            <FaTimesCircle className="text-white text-4xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Failed</h2>
          <p className="text-gray-600 text-center mb-6">
            Unfortunately, your payment could not be processed. Please try again.
          </p>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-fit px-5 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition"
          >
            <FaHome className="mr-2" /> Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
