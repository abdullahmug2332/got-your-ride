import React, { useState, useEffect } from "react";
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import { IoChevronForwardSharp } from "react-icons/io5";
import i1 from "../assets/about-1.png";
import i2 from "../assets/solution-bulb-concept-svgrepo-com-1.png";
import i3 from "../assets/Vector-1.png";
import i4 from "../assets/china-1.png";
import i5 from "../assets/about-2.png";
import VideoPlayer from "../components/VideoPlayer";
import image from "../assets/about-image.png";
import video from "../assets/video1.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import { TiCameraOutline } from "react-icons/ti";
import InstagramSlider from "../components/InstagramSlider";

const About = () => {
  const [about, setAbout] = useState();

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch("http://localhost:5000/aboutdata");
      const data = await res.json();
      setAbout(data[0]);
    };
    fetchCards();
  }, []);


  return (
    <>
      {/* image section */}
      <div className="relative mb-6 mt-6 sm:mt-12">
        <img src={i1} alt="Contact Banner" className="w-full h-[300px] md:h-[250px]" />
        <div className="absolute left-1/2 flex justify-center items-center flex-col transform -translate-x-1/2 top-2/4">
          <h1 className=" text-white text-3xl sm:text-5xl font-bold">
            About Us
          </h1>
          <p className=" text-white text-center mt-2 flex text-lg sm:text-xl">
            Home <IoChevronForwardSharp className="mt-1" /> About
          </p>
        </div>
      </div>

      <div className="w-4/5 mx-auto flex flex-col-reverse lg:flex-row gap-4 lg:gap-20">
        {/* Main Section */}
        <div className="w-full lg:w-3/5  relative">
          {about ? (
            <>
              <h1
                className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold leading-[55px] mb-2"
                dangerouslySetInnerHTML={{ __html: about?.title }}
              ></h1>
              <p
                className="mx-auto mt-4 sm:text-lg leading-[32px] mb-4"
                dangerouslySetInnerHTML={{ __html: about?.content }}
              ></p>

              <div className="flex flex-col lg:flex-row border border-black/20 gap-4 lg:gap-8 p-6 rounded-xl relative w-full lg:w-4/5">
                <div className="text-center w-full lg:w-[45%]">
                  <img
                    src={i3}
                    className="w-16 sm:w-20 mx-auto"
                    alt="Service Provider"
                  />
                  <p
                    className="font-semibold mt-2"
                    dangerouslySetInnerHTML={{ __html: about?.text1 }}
                  ></p>
                </div>
                <div className="text-center w-full lg:w-[45%]">
                  <img
                    src={i2}
                    className="w-12 sm:w-15 mx-auto"
                    alt="Booking Solution"
                  />
                  <p
                    className="font-semibold mt-2"
                    dangerouslySetInnerHTML={{ __html: about?.text2 }}
                  ></p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">Loading about info...</p>
          )}
        </div>

        {/* Info Section */}
        <div className="lg:w-2/5 w-full mx-auto relative">
          {/* Left Image with "20+ YEARS OF EXPERIENCE" Badge */}
          <div className="relative w-full ">
            <img
              src={i5}
              className="relative  z-1 w-full lg:w-[300px] h-auto rounded-lg"
              alt="Travel Experience"
            />
            <div className="absolute z-1 hidden lg:block top-[25%] sm:top-[110%] left-[40%] transform -translate-x-1/2 bg-[#f1582b] rounded-2xl w-[200px] sm:w-[250px] pb-5 text-center text-white">
              <h1 className="text-[40px] sm:text-[60px] font-bold">
                {about?.posterNumber}+
              </h1>

              <p className="text-[11px] font-bold">{about?.posterTitle}</p>
            </div>

            <img
              src={i4}
              className="absolute hidden lg:block top-[25%] sm:top-[70%] left-[40%]  w-[300px] h-auto rounded-lg"
              alt="Scenic Image"
            />
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="text-center my-14">
        <h1 className="font-bold text-2xl">More About Us</h1>
        <p className=" opacity-60 mb-6">Watch This Video</p>
        <VideoPlayer image={image} video={video} />
      </div>

      <InstagramSlider />
    </>
  );
};

export default About;
