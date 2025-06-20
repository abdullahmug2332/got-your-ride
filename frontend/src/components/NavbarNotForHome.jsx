import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Got-Your-Ride-Logo-05-1.png";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoCaretDownSharp } from "react-icons/io5";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
const NavbarNotForHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className="top-0 zee-index w-screen">
        {/* Top bar (visible on md and larger) */}
        <div
          className={`flex px-5 sm:px-[7vw] md:px-[8vw] bg-[#f1582b] text-white lg:px-[11vw] justify-between transition-all duration-700 py-3 items-center border-b `}
        >
          <div className="flex gap-2 flex-col md:flex-row text-xs">
            {/* <div className="flex gap-2 items-center">
              <IoLocation />
              <p className="font-normal">
                2-chrome-3-5 Wakaba Shinjuku City, Tokyo 160-0011
              </p>
            </div> */}
            <div className="flex gap-2 items-center">
              <FaEnvelope />
              <a href={"mailto:info@gotyourride.com"} target="_blank"
                rel="noopener noreferrer" className=" font-normal">info@gotyourride.com</a>
            </div>
          </div>
          <div className="block">
            <SocialIcons />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] bg-white text-black shadow-md transition-all duration-700 flex justify-between items-center w-full `}
        >
          {/* Logo */}
          <NavLink to="/">
            <img className="ml-[-8px] w-20" src={logo} alt="Logo" />
          </NavLink>

          {/* Navigation links on md+ OR burger icon on mobile */}
          <div className="flex items-center  gap-5">
            <div className="hidden lg:flex gap-4">
              <NavLink
                to="/"
                className={
                  " hover:bg-[#f1582b] font-semibold hover:text-white rounded-sm px-3 py-1.5"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <h1>HOME</h1>
              </NavLink>
              <NavLink
                to="/about"
                className={
                  " hover:bg-[#f1582b] font-semibold hover:text-white rounded-sm px-3 py-1.5"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <h1>ABOUT</h1>
              </NavLink>
              <div className="relative group hover:bg-[#f1582b] hover:text-white rounded-sm px-3 py-1.5 inline-block">
                <button className="flex items-center font-semibold">
                  DESTINATIONS
                  <IoCaretDownSharp size={20} className="ml-1" />
                </button>
                <div className="absolute left-0 top-7 mt-2 w-60 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                  <div className="py-2">
                    <Link
                      to="/booking/1"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Tokyo City Tour
                    </Link>
                    <Link
                      to="/booking/2"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Mount Fuji
                    </Link>
                    <Link
                      to="/booking/3"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Nagano Tour
                    </Link>
                    <Link
                      to="/booking/4"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Nikko Tour
                    </Link>
                  </div>
                </div>
              </div>
              <NavLink
                to="/contact"
                className={
                  " hover:bg-[#f1582b] font-semibold hover:text-white rounded-sm px-3 py-1.5"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <h1>CONTACT</h1>
              </NavLink>
            </div>

            {/* Burger icon visible on mobile */}
            <div className="lg:hidden text-black">
              <FaBars
                size={24}
                className="cursor-pointer "
                onClick={() => setIsMenuOpen((pre) => !pre)}
              />
            </div>
          </div>
          <div className="mt-2 hidden lg:flex ">
            <div className="flex gap-2 items-center">
              <a
                href="tel:+81 80-4061-4722"
                className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f1582b] text-white shadow-lg
                               hover:bg-[#e54925] transition-colors duration-300"
              >
                <FaPhoneAlt className="text-sm" />
              </a>

              <p>+81 80-4061-4722</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen style */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50"
          onClick={() => setIsMenuOpen(false)}
          style={{ zIndex: 101 }}
        >
          <div
            className="absolute top-[100px] left-[2.5%] w-[95%] h-fit bg-white p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-8 flex flex-col gap-6 text-black">
              {/* Home Link */}
              <NavLink
                to="/"
                className="text-lg font-semibold hover:text-[#f1582b] transition-colors duration-300 border-b pb-2 border-[#f1582b] border-opacity-50"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </NavLink>

              {/* About Link */}
              <NavLink
                to="/about"
                className="text-lg font-semibold hover:text-[#f1582b] transition-colors duration-300 border-b pb-2 border-[#f1582b] border-opacity-50"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </NavLink>

              {/* Dropdown for Destinations */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center w-full focus:outline-none border-b pb-2 border-[#f1582b] text-lg font-semibold hover:text-[#f1582b] transition-colors duration-300"
                >
                  DESTINATIONS
                  <IoCaretDownSharp
                    size={16}
                    className="ml-2 transition-transform duration-300 transform"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="mt-2 flex flex-col space-y-1 bg-white shadow-lg rounded-lg py-3">
                    {/* Individual Destination Links */}
                    <NavLink
                      onClick={() => setIsMenuOpen(false)}
                      to="/booking/1"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#f1582b] hover:text-white transition-colors duration-200 rounded-md"
                    >
                      Tokyo City Tour
                    </NavLink>
                    <NavLink
                      onClick={() => setIsMenuOpen(false)}
                      to="/booking/2"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#f1582b] hover:text-white transition-colors duration-200 rounded-md"
                    >
                      Mount Fuji
                    </NavLink>
                    <NavLink
                      onClick={() => setIsMenuOpen(false)}
                      to="/booking/3"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#f1582b] hover:text-white transition-colors duration-200 rounded-md"
                    >
                      Nagano Tour
                    </NavLink>
                    <NavLink
                      onClick={() => setIsMenuOpen(false)}
                      to="/booking/4"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#f1582b] hover:text-white transition-colors duration-200 rounded-md"
                    >
                      Nikko Tour
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <NavLink
                to="/contact"
                className="text-lg font-semibold hover:text-[#f1582b] transition-colors duration-300 border-b pb-2 border-[#f1582b] border-opacity-50"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarNotForHome;
