import React from "react";

import img from "../assets/logo2.png";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pb-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start space-x-4">
          <div className="font-bold text-lg">
            <img src={img} alt="Logo" className="h-40" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-[16px] text-[#D9D0CA]">
          <Link to="/" className="hover:underline mx-2 my-1">
            Home
          </Link>
          <Link to="/about" className="hover:underline mx-2 my-1">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline mx-2 my-1">
            Contact Us
          </Link>
          <Link to="/booking/2" className="hover:underline mx-2 my-1">
            Mount Fuji
          </Link>
          <Link to="/booking/1" className="hover:underline mx-2 my-1">
            {" "}
            Tokyo City Tour
          </Link>
          <Link to="/booking/3" className="hover:underline mx-2 my-1">
            {" "}
            Nagano Tour 
          </Link>
          <Link to="/booking/4" className="hover:underline mx-2 my-1">
            Nikko Tour 
          </Link>
        </div>
      </div>

      <div className="max-w-7xl px-6 md:px-10 mx-auto  mt-6 mb-10 flex justify-center md:justify-start space-x-4">
        <SocialIcons />
      </div>

      <div className="max-w-7xl px-6 md:px-10 mx-auto mt-10 mb-5">
        <div className="h-[1px] bg-[#D9D0CA] opacity-30 mt-10"></div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between text-[#D9D0CA] text-[12px] mt-4">
          <p className="font-normal">
            2-chrome-3-5 Wakaba Shinjuku City, Tokyo 160-0011
          </p>
          <p className="text-center md:text-end">
            © Copyright 2025. All Rights Reserved.{" "}
            <a
              href="http://allsparktechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered By All Spark Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
