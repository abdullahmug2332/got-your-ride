import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { baseUrl } from "../api/baseUrl"; // Update baseUrl
import { useNavigate } from "react-router-dom";

const BookingForm = ({ bookingInfo }) => {
  // Billing form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(bookingInfo.price); // Use the bookingInfo price
  const [isLoading, setIsLoading] = useState(false);

  const handleBookingData = async (orderId) => {
    // Assuming `bookingInfo.id` is available and represents the booking ID from your system
    const bookingDate = bookingInfo.date ? new Date(bookingInfo.date) : new Date();

    // Format the date in a desired format, e.g., 'MM/DD/YYYY'
    const formattedDate = bookingDate.toLocaleDateString("en-US"); // You can change the locale as needed, e.g., 'en-GB' for DD/MM/YYYY
    
    // If you want a custom format, you can use `toISOString` and slice it to remove the time part
    const customFormattedDate = bookingDate.toISOString().split('T')[0];  // 'YYYY-MM-DD'
    
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      state: stateName,
      zipCode,
      termsAccepted,
      bookingTitle: bookingInfo.title,
      bookingDate: customFormattedDate,
      adults: bookingInfo.adults,
      placeNumber: bookingInfo.placeNumber,
      totalPrice: bookingInfo.price,
      isPaid: 1, // Indicate payment is complete
      orderId, // Store the PayPal order ID
      bookingId: bookingInfo.id, // Send bookingId to the backend to associate with the order
    };

    try {
      const response = await fetch(`${baseUrl}/bookings/capture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/success", {
          state: { data: data.bookingData },
        });
      } else {
          navigate("/failed");
        const errorData = await response.json();
        toast.error("Error saving booking. Please try again.");
      }
    } catch (error) {
      console.error("Error connecting to the server", error);
      toast.error("Error connecting to the server");
    }
  };

  return (
    <>
      <div className="max-w-7xl flex items-center md:h-[80vh] mx-auto justify-center mt-28  py-10 px-5 xl:px-0 relative">
        {/* Toast container for notifications */}
        <ToastContainer />
        <form className="flex flex-col justify-between lg:flex-row gap-8 w-full">
          {/* Left Column – Billing Address */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-10">Billing Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="input col-span-1 sm:col-span-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex col-span-1 sm:col-span-2 gap-2">
                <select className="input w-24">
                  <option value="+81">+81</option>
                </select>
                <input
                  type="number"
                  required
                  placeholder="Phone Number"
                  className="input flex-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Street Address"
                required
                className="input col-span-1 sm:col-span-2"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="City"
                className="input col-span-1"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="number"
                required
                placeholder="Zip Code"
                className="input col-span-1"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div className="w-full mt-6">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AdnvurMN8vpRqvHPW28keaGrK7tq1eNLraBEe906cSEs91e9BpC8YFISnRvtkTayknij8ps9RhbGLm7X",
                }}
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: totalPrice, // Pass the totalPrice here
                          },
                        },
                      ],
                    });
                  }}
                  fundingSource="paypal" // This restricts the payment options to PayPal only
                  onApprove={(data, actions) => {
                    actions.order.capture().then((details) => {
                      toast.success("Payment Successful!");
                      handleBookingData(details.id); // Store the booking info with the PayPal order ID
                    });
                  }}
                  onCancel={(data) => {
                    toast.error("Payment cancelled by user");
                    navigate("/failed");
                  }}
                  onError={(err) => {
                    toast.error("Payment failed. Please try again.");
                    navigate("/failed");
                    console.error(err);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>

          {/* Right Column – Booking Summary */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-6 max-w-full">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-xs text-gray-700">
                <h4 className="text-lg mb-6 font-semibold">
                  Book With Confidence
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaInfoCircle className="text-orange-500 mt-0.5" />
                    <div>
                      <strong>Bring Copies Of Your Passport</strong>
                      <p className="text-xs">
                        Some tourist places might ask for your passport.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaInfoCircle className="text-orange-500 mt-0.5" />
                    <div>
                      <strong>Register With Your Embassy</strong>
                      <p className="text-xs">
                        Stay in touch in case of emergencies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaInfoCircle className="text-orange-500 mt-0.5" />
                    <div>
                      <strong>Always Have Local Cash</strong>
                      <p className="text-xs">
                        Having local currency is advisable.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <BookingCard bookingInfo={bookingInfo} />
            </div>
          </div>
        </form>

        {/* PayPal Buttons */}
      </div>
    </>
  );
};

export default BookingForm;
