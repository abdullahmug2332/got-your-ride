/* DynamicGrid.jsx */

import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";

import i7 from "../assets/clock-icon-01.png";
import i8 from "../assets/user-icon-01.png";
import image2 from "../assets/image-1.png";
import image3 from "../assets/image-2.png";
import image4 from "../assets/image-3.png";
import image5 from "../assets/image-4.png";
import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     id: 1,
//     image: image2,
//     title: "Tokyo City Tour",
//     subtitle: "Feel the pulse of Japan’s electric capital",
//     price: "$380",
//     originalPrice: "$500",
//     duration: "10 Hours",
//     guests: "1‑6 Guests",
//   },
//   {
//     id: 2,
//     image: image3,
//     title: "Mt. Fuji",
//     subtitle: "Touch the clouds and awaken your spirit",
//     price: "$408",
//     originalPrice: "$533",
//     duration: "10 Hours",
//     guests: "1‑6 Guests",
//   },
//   {
//     id: 3,
//     image: image4,
//     title: "Nagano Tour",
//     subtitle: "Find serenity where mountains meet mystic temples",
//     price: "$447",
//     originalPrice: "$562",
//     duration: "10 Hours",
//     guests: "1‑6 Guests",
//   },
//   {
//     id: 4,
//     image: image5,
//     title: "Nikko Tour",
//     subtitle: "Journey into nature’s grandeur and timeless shrines",
//     price: "$423",
//     originalPrice: "$550",
//     duration: "10 Hours",
//     guests: "1‑6 Guests",
//   },
// ];
const DynamicGrid = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState(props)
  const [cards, setCards] = useState(data.data.cards)
  const checkImage=(img)=>{
    if(img =="image2"){
      return image2
    }else if(img == "image3"){
      return image3
    }else if(img == "image4"){
      return image4
    }else if(img == "image5"){
      return image5
    }
  }

  return (
    <div className="mx-auto w-4/5 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((item, idx) => (
        <motion.div
          key={item.id}
          className="group rounded-2xl shadow-lg bg-white cursor-pointer"
          onClick={() => navigate(`/booking/${item.id}`)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: idx * 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -6, scale: 1.03 }}
        >
          <div className="relative overflow-hidden rounded-t-2xl">
            <motion.img
              src={checkImage(item.image)}
              alt={item.title}
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.35 }}
            />
            <div className="absolute inset-0 -top-36 -left-5 px-6 py-1 flex justify-between items-center pointer-events-none">
              <motion.span
                className="px-3 py-1 flex items-center h-9 rounded-full bg-[#F1582B] text-white text-xs font-semibold pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Featured
              </motion.span>
            </div>
          </div>

          <div className="px-6 relative  pb-2">
            <div className="flex justify-between py-2 text-[11px] font-semibold">
              <p className="flex items-center gap-2">
                <img src={i7} alt="" className="w-[13px] h-[13px]" />
                {item.duration}
              </p>
              <p className="flex items-center gap-2">
                <img src={i8} alt="" className="w-[11px] h-[11px]" />
                {item.guests}
              </p>
            </div>

            <p className="text-xl font-semibold">{item.title}</p>
            <p className="text-xs ">{item.subtitle}</p>

            <p className="text-[12px] relative bottom-1 pt-5 ">
              From&nbsp;
              <span className="font-extrabold">{item.price}</span>&nbsp;‑&nbsp;
              <span className=" line-through font-semibold">
                {item.originalPrice}
              </span>
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DynamicGrid;
