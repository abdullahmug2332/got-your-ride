import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Star from "./Star";                // your existing star component

import "swiper/css";
import "swiper/css/pagination";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

import image27 from "../assets/image_4.png";
import image28 from "../assets/image_5.png";
import image29 from "../assets/image_6.png";

import image21 from "../assets/image-21.png";
import image22 from "../assets/image-22.png";
import image23 from "../assets/image-23.png";

export const testimonials1 = [
  {
    id: 1,
    photo: image21,
    name: "James Carter",
    country: "UK",
    review:
      "Got Your Ride handled everything flawlessly – flights, JR passes, even pocket‑Wi‑Fi. I just showed up and enjoyed Japan.",
    bg: "bg-[#D8F4DA]",
  },
  {
    id: 2,
    photo: image22,
    name: "Michael Johnson",
    country: "USA",
    review:
      "Smooth booking and great local tips. Their Osaka food tour was a highlight. Highly recommended!",
    bg: "bg-[#FFE2CE]",
  },
  {
    id: 3,
    photo: image23,
    name: "Daniel Wright",
    country: "UK",
    review:
      "From airport pickup to Mt Fuji day‑trip, Got Your Ride nailed the timing. I’ll book with them again next spring.",
    bg: "bg-[#F1D4D4]",
  },
  {
    id: 4,
    photo: image27,
    name: "Jonathan Harris",
    country: "Australia",
    review:
      "Booking was effortless and their support team answered every question within minutes. Five‑star service.",
    bg: "bg-[#D9D9D9]",
  },
  {
    id: 5,
    photo: image28,
    name: "Oliver Brooks",
    country: "Japan",
    review:
      "Loved the Kyoto cultural package. Guides were punctual, friendly, and spoke perfect English.",
    bg: "bg-[#D8F4DA]",
  },
  {
    id: 6,
    photo: image29,
    name: "William Scott",
    country: "Germany",
    review:
      "Got Your Ride took the stress out of planning. Hotels were spot‑on and within budget. 6 stars if I could.",
    bg: "bg-[#FFE2CE]",
  },
];

export default function Testimonials(props) {
  const [data,setData]=useState(props.data);
  const imagecheck=(img)=>{
      if(img=="image21"){
        return image21;
      }else if(img == "image22"){
        return image22;
      }else if(img == "image23"){
        return image23;
      }else if(img == "image27"){
        return image27;
      }else if(img == "image28"){
        return image28;
      }else if(img == "image29"){
        return image29;
      }
    }
  console.log(data)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full flex mb-20 justify-center"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        className="w-4/5"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
      
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {data.map((t, idx) => (
          <SwiperSlide key={t.id}>
            <motion.div
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`${t.bg} w-[95%] h-[330px] px-3 py-5 rounded-2xl mx-auto shadow-md flex flex-col justify-between`}

            >
              <img src={imagecheck(t.photo)} alt={t.name} className="mx-auto w-50" />
              <p className="text-sm font-bold mt-2">{t.name}</p>

              <div className="flex justify-between mt-1">
                <p className="text-sm">{t.country}</p>
                <Star />
              </div>

              <p className="text-[11px] mt-2 leading-tight">{t.review}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
