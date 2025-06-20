"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images for slides
import image8 from "../assets/famous/1.png";
import image9 from "../assets/famous/2.png";
import image10 from "../assets/famous/3.png";
import image11 from "../assets/famous/4.png";
import image12 from "../assets/famous/5.png";
import image13 from "../assets/famous/6.png";

// Slide data
const slides = [
  { id: 1, image: image8, title: "Fuji-Q Highland" },
  { id: 2, image: image9, title: "Lake Kawaguchiko" },
  { id: 3, image: image10, title: "Oishi Park" },
  { id: 4, image: image11, title: "Oshino Hakkai" },
  { id: 5, image: image12, title: "Shiten'noji Temple" },
  { id: 6, image: image13, title: "Saiko lyashi no Sato Nemba" },
];

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute hidden md:block right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M10 17l5-5l-5-5v10z" />
      </svg>
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M14 7l-5 5l5 5V7z" />
      </svg>
    </button>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const DynamicSwiper = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-4/5 mx-auto relative">
      <motion.div
        className="text-center my-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-2xl lg:text-4xl">
          Know About Our Famous Destination
        </h1>
      </motion.div>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true} // Enable looping of slides
        autoPlay={{
          delay: 3000, // Autoplay every 3 seconds
          disableOnInteraction: false, // Keep autoplay even if the user interacts
        }}
        breakpoints={{
          400: { slidesPerView: 1 },
          780: { slidesPerView: 4 },
        }}
        navigation={false} // Disable default navigation arrows
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={s.id}>
            <motion.div
              custom={idx}
              variants={{
                initial: { opacity: 0, y: 40 },
                reveal: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: idx * 0.05, duration: 0.45 },
                },
                hover: { y: -6 },
              }}
              initial="initial"
              whileInView="reveal"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group cursor-pointer h-[600px] overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <motion.img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
                variants={{ hover: { scale: 1.07 } }}
              />

              {/* Overlay */}
              <motion.div
                variants={{
                  initial: { scaleY: 0 },
                  hover: { scaleY: 1, transition: { duration: 0.35, ease: "easeInOut" } },
                }}
                className="absolute inset-0 z-10 origin-bottom bg-black/30 rounded-2xl"
              />

              {/* Caption */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[90%] lg:w-11/12 flex items-center justify-between gap-4 p-4 rounded-2xl bg-white group-hover:bg-transparent transition-colors duration-300"
              >
                <p className="text-xs lg:text-base font-medium group-hover:text-white">
                  {s.title}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <NextArrow onClick={() => swiperRef.current.swiper.slideNext()} />
      <PrevArrow onClick={() => swiperRef.current.swiper.slidePrev()} />
    </div>
  );
};

export default DynamicSwiper;
