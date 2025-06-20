import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import i from "../assets/unkown.png";
import { useNavigate } from "react-router-dom";
import tick from "../assets/tick.png";
import Star from "../components/Star";
import CheckBox from "../components/CheckBox";
import Dropdown from "../components/Dropdown";
import ProgressBar from "../components/ProgressBar";
import Feedback from "../components/Feedback";
import ItineraryTimeline from "../components/ItineraryTimeline";
import DatePickerInput from "../components/DatePickerInput";

import i1 from "../assets/87.png";
import i2 from "../assets/50.png";
import i3 from "../assets/shade-ysUOK8yPnt0-unsplash.png";
import i4 from "../assets/rui-hao-lim-VajtrJauWDQ-unsplash.png";
import i5 from "../assets/Group_427_1.png";
import i6 from "../assets/Group_427_2.png";
import i7 from "../assets/Group_427_3.png";
import i8 from "../assets/Group_427_4.png";
import i9 from "../assets/orange-line.png";

import nagano1 from "../assets/nagano-1.png";
import nagano2 from "../assets/nagano-2.png";
import nagano3 from "../assets/nagano-3.png";
import nagano4 from "../assets/nagano-4.png";

import tokyo1 from "../assets/tokyo-1.png";
import tokyo2 from "../assets/tokyo-2.png";
import tokyo3 from "../assets/tokyo-3.png";
import tokyo4 from "../assets/tokyo-4.png";

import nikko1 from "../assets/nikko-1.png";
import nikko2 from "../assets/nikko-2.png";
import nikko3 from "../assets/nikko-3.png";
import nikko4 from "../assets/nikko-4.png";



const Booking = ({ tripData, bookingData, itineraryData, place, options }) => {

  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [placeNumber, setPlaceNumber] = useState(place);
  const [numOfCars, setNumOfCars] = useState(1); // Cars count
  const [totalPrice, setTotalPrice] = useState(bookingData.price.primary);// Initial price is based on one car



  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Format the date to 'YYYY-MM-DD' (remove time)
    const formattedDate = currentDate.toISOString().split('T')[0];

    // Set the date in the state
    setDate(formattedDate);
  }, []);
  const handleDecrease = () => {
    setAdults((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Handler to increase the adult count
  const handleIncrease = () => {
    setAdults((prev) => prev + 1);
  };

  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(place); // Default to Tokyo
  useEffect(() => {
    setSelectedLocation(place)
  }, [place])
  const handleSelection = (id) => {
    setSelectedLocation(id);
  };

  const getMapUrl = () => {
    switch (selectedLocation) {
      case 1:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984689.1029864792!2d138.71295978603672!3d35.21629737213794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2s!4v1745527117502!5m2!1sen!2s";
      case 2:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13015.197565360599!2d138.71706365707902!3d35.36062456307496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e0!3m2!1sen!2s!4v1745527847485!5m2!1sen!2s";
      case 3:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204870.17109620935!2d137.94970370337836!3d36.64813088261142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d805de6344499%3A0xf128a974072892c8!2sNagano%2C%20Japan!5e0!3m2!1sen!2s!4v1745528014403!5m2!1sen!2s";
      case 4:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408685.21158785094!2d139.26058128337553!3d36.84599131435045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601fa4b7c69ac8d1%3A0x6f526b42961dd1c0!2sNikko%2C%20Tochigi%2C%20Japan!5e0!3m2!1sen!2s!4v1745528061632!5m2!1sen!2s";
      default:
        return;
    }
  };
  const handleProceedToPayment = () => {
    // Construct the payload from form states
    const bookingInfo = {
      date,
      adults,
      placeNumber,
      title: bookingData.title,
      price: totalPrice,
    };
    // Redirect to /payment page with state
    navigate("/payment", { state: bookingInfo });
  };

  // Calculate the number of cars and update the price whenever `adults` changes
  useEffect(() => {
    let numOfCars = 1;
    if (adults > 6 && adults <= 12) {
      numOfCars = 2;
    } else if (adults > 12) {
      numOfCars = Math.ceil(adults / 6); // Every 6 adults require an additional car
    }
    // Update the price based on the number of cars
    const total = bookingData.price.primary * numOfCars;
    setNumOfCars(numOfCars);
    setTotalPrice(total);
  }, [adults, bookingData.price.primary]);

  const { title, subtitle, location, reviews, images, details, price } =
    bookingData;

  const allimgs={
    "tokyo1":tokyo1,
    "tokyo2":tokyo2,
    "tokyo3":tokyo3,
    "tokyo4":tokyo4,
    "i1":i1,
    "i2":i2,
    "i3":i3,
    "i4":i4,
    "nagano1":nagano1,
    "nagano2":nagano2,
    "nagano3":nagano3,
    "nagano4":nagano4,
    "nikko1":nikko1,
    "nikko2":nikko2,
    "nikko3":nikko3,
    "nikko4":nikko4,
  }
  const allicon={
    "i5":i5,
    "i6":i6,
    "i7":i7,
    "i8":i8,
    "i9":i9,
  }
  return (
    <>
      <div className="mt-35">
        <div className="w-4/5 mx-auto">
          {/* Title Section */}
          <div className="mb-5">
            <h1 className="font-bold mb-5 text-2xl lg:text-4xl text-center sm:text-left">
              {title}
            </h1>
            <p className="text-center sm:text-left">{subtitle}</p>
          </div>

          {/* Location, Share, Wishlist Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Location */}
            <div className="flex gap-0 text-[#615C5D] flex-wrap md:flex-nowrap">
              <NavLink className="group flex ">
                <SlLocationPin className="mt-[3px] group-hover:text-[#f1582b]" />
                <p className="group-hover:text-[#f1582b]">{location}</p>
              </NavLink>
              <div className="flex gap-0">
                <Star />
                <p>{reviews}</p>
              </div>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
            {images.map((img, index) => (
              <img
                key={index}
                src={allimgs[img.src]}
                className={img.classes}
                alt={`Booking image ${index + 1}`}
              />
            ))}
          </div>

          {/* Duration, People, Language, Type Section */}
          <div className="grid mt-5 grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-3/4">
            {details.map((detail, index) => (
              <div key={index} className="flex gap-2 w-full">
                <img
                  src={allicon[detail.icon]}
                  className="w-8 h-8 mt-[2px]"
                  alt={detail.label}
                />
                <div className="leading-4">
                  <p className="text-[#292929] text-[11px]">{detail.label}</p>
                  <p>{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Section */}
          <p className="text-left sm:text-right mt-5">
            <span className="text-[11px] text-[#292929] mr-2">
              {price.fromLabel}
            </span>
            <span className="font-bold">{price.primary}</span>/
            <span className="relative font-semibold">
              {price.secondary}{" "}
              <img
                src={allicon[price.secondaryIcon]}
                className="absolute w-30 top-2 left-0"
                alt="Price Icon"
              />
            </span>
          </p>

          <hr className="mb-8 mt-8 opacity-20" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-4/5 mx-auto">
        {/* Left Column */}
        <div className="w-full md:w-2/3">
          {/* Description Section */}
          <div>
            <h1 className="font-bold text-2xl">{tripData.description.title}</h1>
            <p className="leading-[28px] mt-5">{tripData.description.text}</p>
            <hr className="mt-8 mb-8 opacity-20" />
          </div>

          {/* Trip Highlights Section */}
          <div>
            <h1 className="font-bold text-2xl mb-5">
              {tripData.tripHighlights.title}
            </h1>
            <p className="font-semibold">{tripData.tripHighlights.subTitle}</p>
            {/* Render the CheckBox component; you can pass data if needed */}
            <CheckBox options={options} />
            <hr className="mt-8 mb-8 opacity-20" />
          </div>

          {/* Include/Exclude Section */}
          <div className=" py-6">
            <h1 className="font-bold text-2xl mb-5">
              {tripData.includeExclude.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Included */}
              <div>
                {tripData.includeExclude.includedItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 mb-3">
                    <div>
                      <FaCheckCircle className="w-5 h-5 bg-white text-[#F1582B]" />
                    </div>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              {/* Excluded */}
              <div>
                {tripData.includeExclude.excludedItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 mb-3">
                    <div>
                      <FaTimesCircle className="w-5 h-5 text-gray-200 bg-gray-400 rounded-full" />
                    </div>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Book Your Trip */}
        <div className="w-full md:w-1/3 md:ml-7">
          <h1 className="text-2xl font-bold mb-3">{tripData.booking.title}</h1>

          {/* Date Dropdown */}
          <div className="mt-5 flex flex-col md:flex-row gap-2">
            <Dropdown setAdults={setAdults} adults={adults} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />

            <DatePickerInput selectedDate={date} setSelectedDate={setDate} />

          </div>
          <hr className="opacity-20 mt-8 mb-8" />

          {/* People Section */}
          <div className="flex justify-between">
            <div className="w-full">
              <p className="font-bold mb-5 mt-2">
                {tripData.booking.people.label}
              </p>
              <div className="flex w-full justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm font-semibold">
                    1 - 6 {tripData.booking.people.category} per car
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center mt-5 justify-between">
                <p className="text-sm text-gray-600">{`Total Price: $${totalPrice}`}</p>
                <p className="text-center  text-sm text-gray-600">
                  &#40; {numOfCars} {numOfCars === 1 ? "car" : "cars"} required
                  &#41;
                </p>
                {/* Display the price */}
              </div>
            </div>
          </div>
          <hr className="opacity-20 mt-8 mb-8" />

          {/* Trip Information Section */}
          <p className="font-bold">Trip Information</p>
          <div className="mt-5">
            {tripData.booking.tripInfo.map((info, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <img src={tick} alt="tick" />
                <p className="text-sm">
                  <span className="font-semibold">{info.label}:</span>{" "}
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <div
            className="bg-[#F1582B] px-6 py-2 rounded-full cursor-pointer w-full mt-10 text-white"
            onClick={handleProceedToPayment}
          >
            <h1 className="text-center">{tripData.booking.buttonText}</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto w-4/5">
        <hr className="mt-8 mb-8 opacity-20" />
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="h-fit ">
            <ItineraryTimeline dummyItems={itineraryData} />
          </div>
          <div className=" flex-grow">

            <iframe src={getMapUrl()} width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"></iframe>
          </div>
        </div>
      </div>
      <div className="mx-auto w-4/5">
        <hr className="mt-8 mb-8 opacity-20" />
      </div>
      <ProgressBar />
      <div className="w-4/5 mx-auto">
        <Feedback />
      </div>
    </>
  );
};

export default Booking;
