import React, { useState } from "react";
import { InputPhoneCountryCode } from "./InputPhoneCountryCode";
import AddRating from "../components/AddRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../api/baseUrl";
const Feedback = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    rating: 0,
  });
  const [show, setShow] = useState(false);
  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({ ...prevData, phone }));
  };

 
  const handleShow = () => {
    setShow(!show);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prevData) => ({ ...prevData, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message || formData.rating === 0) {
      toast.error("All fields are required!");
      return;
    }

    setIsLoading(true); // Set loading to true during submission

    // Send form data to the backend API
    try {
      const response = await fetch(`${baseUrl}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success(data.message);
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          rating: 0,
        });
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit the feedback");
    } finally {
      setIsLoading(false); // Reset loading state after submission
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      {/* Button */}
      <div
        onClick={handleShow}
        className={`bg-[#F1582B] w-full md:w-1/2 px-6 py-2 rounded-full text-white mx-auto mb-5 ${
          show ? "hidden" : "block"
        }`}
      >
        <h1 className="text-center">Give Feedback</h1>
      </div>

      {show && (
        <div className="w-full">
          <h1 className="w-full text-center mb-5 font-semibold text-xl sm:text-2xl">
            Give Us Feedback
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* First Name and Last Name */}
            <div>
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-black/20 rounded-sm w-full h-10 p-2"
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-black/20 rounded-sm w-full h-10 p-2"
              />
            </div>

            {/* Email Input */}
            <div className="col-span-1 sm:col-span-2">
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-black/20 rounded-sm w-full h-10 p-2"
              />
            </div>

            {/* Phone Input */}
            <div className="col-span-1 sm:col-span-2">
            <InputPhoneCountryCode onPhoneChange={handlePhoneChange} />
            </div>

            {/* Message */}
            <div className="col-span-1 sm:col-span-2">
              <p>Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full p-3 border border-black/20 h-32 rounded-sm focus:ring-blue-500 placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Rating */}
            <AddRating rating={formData.rating} onChange={handleRatingChange} />

            {/* Submit Button */}
            <div className="text-center mt-5 sm:col-span-2">
              <button
                onClick={handleSubmit}
                className="text-white px-6 py-2 rounded-full cursor-pointer bg-[#F1582B]"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Feedback;
