import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animation
// Import images
import image1 from "../assets/hero/1.png";
import image2 from "../assets/hero/2.png";
import image5 from "../assets/hero/5.jpg";
import image6 from "../assets/hero/5.png";
import image7 from "../assets/hero/7.jpg";

import imagem1 from "../assets/hero/m1.png";
import imagem2 from "../assets/hero/m2.png";
import imagem3 from "../assets/hero/m3.png";
import imagem4 from "../assets/hero/m4.png";
import imagem5 from "../assets/hero/m5.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);


  const [data, setData] = useState([]);

  useEffect(function () {
    fetch('http://localhost:5000/homedata/gethomeherodata')
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setData(jsonData);
      })
      .catch(function (error) {
        console.error('Error fetching home hero data:', error);
      });
  }, []);

  const slides = isMobile
    ? [imagem2, imagem1, imagem4, imagem3, imagem5]
    : [image1, image2, image5, image6, image7];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  // Manually navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Manually navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Smooth Transition */}
      <motion.div
        className="relative w-full h-full"
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
      </motion.div>

      {/* Text and Button Content with Smooth Animation */}
      <motion.div
        className="absolute top-[40%] px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] md:w-4/5 text-white z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <h1 className="text-2xl capitalize md:text-3xl font-bold">
          {data[currentSlide]?.h1}
        </h1>
        <p className="mt-4 text-sm md:text-lg">
          {data[currentSlide]?.p}
        </p>
        <div className="mt-10 flex gap-4">
          <button
            onClick={() => {
              const el = document.getElementById("bookings");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#F1582B] text-white text-xs md:text-base px-6 py-2 rounded-full border border-[#F1582B] hover:bg-white hover:text-[#F1582B] transition-colors duration-300"
          >
            BOOK NOW
          </button>
        </div>
      </motion.div>

      <button
        onClick={prevSlide}
        className="hidden md:absolute top-1/2 left-4 transform  -translate-y-1/2 text-white text-3xl z-20"
      >
        &#10094;
      </button>

      {/* Right Arrow for Manual Navigation */}
      <button
        onClick={nextSlide}
        className="hidden md:absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
