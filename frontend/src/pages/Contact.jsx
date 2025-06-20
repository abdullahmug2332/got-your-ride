import React, { useEffect, useState } from "react";
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import { IoChevronForwardSharp } from "react-icons/io5";
import {
  IoPersonOutline,
  IoMailOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // Importing framer motion

import i1 from "../assets/contact-1.png";
import i2 from "../assets/phone_1.png";
import i3 from "../assets/location.png";
import i4 from "../assets/email.png";
import { baseUrl } from "../api/baseUrl";
import { Link, useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate()
  const [cards, setCards] = useState()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("http://localhost:5000/contactcards");
      const data = await res.json()
      setCards(data)
    }
    fetchCards();
  }, [])

  const [isLoading, setIsLoading] = useState(false);
  console.log(cards)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    // Set loading to true while the form is being submitted
    setIsLoading(true);

    // Send form data to the backend API
    try {
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message); // Show success message
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit the contact form");
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  const getIcon = (category) => {
    switch (category) {
      case "phone":
        return i2;
      case "address":
        return i3;
      case "email":
        return i4;
      default:
        return i2;
    }
  };
  return (
    <>
      {/* Image Section */}
      <motion.div
        className="relative mt-6 sm:mt-12"
        initial={{ opacity: 0, y: -50 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
        transition={{ duration: 0.8 }}
      >
        <img
          src={i1}
          alt="Contact Banner"
          className="object-cover h-[300px] md:h-[250px]"
        />
        <div className="absolute left-1/2 flex justify-center items-center flex-col transform -translate-x-1/2 top-2/4">
          <h1 className=" text-white text-3xl sm:text-5xl font-bold">
            Contact Us
          </h1>
          <p className=" text-white text-center mt-2 flex text-lg sm:text-xl">
            Home <IoChevronForwardSharp className="mt-1" /> Contact
          </p>
        </div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="mt-6 sm:mt-12 px-4 sm:px-8 w-4/5 mx-auto mb-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {cards === null ? (
            <p>Loading contact info...</p>
          ) : cards?.length === 0 ? (
            <p>No contact cards found.</p>
          ) : (
            cards?.map((card, index) => (
              <a href={card.link} target="_blank" rel="noopener noreferrer" key={index}>
                <motion.div
                  className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <img src={getIcon(card.category)} className="w-20 mb-4" alt={card.title} />
                  <p className="text-center font-semibold">{card.title}</p>
                  <p className="text-center text-sm">{card.content}</p>
                </motion.div>
              </a>
            ))
          )}



          {/* 
          <motion.div
            className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={i3} className="w-20 mb-4" alt="Address" />
            <p className="text-center font-semibold">Address</p>
            <p className="text-center text-sm">
              2-chrome-3-5 Wakaba
              <br /> Shinjuku City, Tokyo 160-0011
            </p>
          </motion.div> */}

          {/* <a href="https://wa.me/818040614722" target="_blank">
            <motion.div
              className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src={i2} className="w-20 mb-4" alt="Phone Number" />
              <p className="text-center font-semibold">Phone Number</p>
              <p className="text-center text-sm">+81 80-4061-4722</p>
            </motion.div>
          </a> */}


          {/* <a href={"mailto:info@gotyourride.com"} target="_blank"
            rel="noopener noreferrer" >
            <motion.div
              className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img src={i4} className="w-20 mb-4" alt="Email" />
              <p className="text-center font-semibold">Email Address</p>
              <p className="text-center text-sm">info@gotyourride.com</p>
            </motion.div>
          </a> */}

        </div>
      </motion.div>

      {/* Description and Contact Form */}
      <motion.div
        className="flex flex-col justify-between my-14 px-4 w-4/5 mx-auto sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Description */}
        <div className="w-full mb-8 lg:mb-0 sm:pr-5">
          <h1 className="text-3xl font-bold text-[#333] text-center mb-1">
            Get In Touch
          </h1>
        </div>

        {/* Contact Form */}
        <motion.div
          className="border-2 border-gray-300 mt-5 py-8 px-8 rounded-2xl shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex mb-6">
              <IoPersonOutline className="w-16 h-16 text-[#F1582B] hidden lg:block" />
              <div className="flex flex-col ml-3 flex-1">
                <label
                  htmlFor="name"
                  className="opacity-60 mb-1 font-semibold text-[#555]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-2 rounded-xl border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#F1582B]"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="flex mb-6">
              <IoMailOutline className="w-16 h-16 text-[#F1582B] hidden lg:block" />
              <div className="flex flex-col ml-3 flex-1">
                <label
                  htmlFor="email"
                  className="opacity-60 mb-1 font-semibold text-[#555]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 rounded-xl border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#F1582B]"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex mb-6">
              <IoChatbubblesOutline className="w-16 h-16 text-[#F1582B] hidden lg:block" />
              <div className="flex flex-col ml-3 flex-1">
                <label
                  htmlFor="message"
                  className="opacity-60 mb-1 font-semibold text-[#555]"
                >
                  Enter Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-2 rounded-xl border-gray-300 w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F1582B]"
                  placeholder="Your message here"
                ></textarea>
              </div>
            </div>

            <div className="bg-[#F1582B] w-40 px-6 py-2 rounded-full text-white mx-auto mt-8 cursor-pointer">
              <button
                type="submit"
                className="w-full text-center !cursor-pointer font-semibold"
              >
                {isLoading ? (
                  <span className="!cursor-pointer">Loading...</span> // Show Loading text when submitting
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Contact;
