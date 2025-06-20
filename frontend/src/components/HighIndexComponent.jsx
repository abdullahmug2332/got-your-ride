import React, { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import i1 from "../assets/destination-icon-01-1.png";
import i2 from "../assets/suitcase-packages-01-1.png";
import i3 from "../assets/satisfaction-gauranette-01-1.png";
import i4 from "../assets/expert-01-1.png";
import i5 from "../assets/fuji-mountain-image-1.png";

const HighIndexComponent = (props) => {
  const selected = {
    icon: i1,
    image: i5,
    buttonText: "Book Now",
  };
  const [data, setData] = useState(props.data);
  const [chars, setChars] = useState(props.data.chars);
  const [icon, setIcon] = useState(i1)

  const iconCheck = (icon) => {
    if (icon == "i1") {
      return i1
    } else if (icon == "i2") {
      return i2
    } else if (icon == "i3") {
      return i3
    } else if (icon == "i4") {
      return i4
    }
  }

  return (
    <div className="bg-white rounded-tl-[75px] rounded-br-[75px] relative mt-[-50px] mx-auto px-5  py-5 pr-4 w-4/5 md:w-[95%] xl:w-4/5 lg:px-10 md:h-6/12 border border-white flex flex-col lg:flex-row items-center justify-between shadow-lg" style={{ zIndex: 10 }}>
      {/* Static List with entrance and hover animation */}
      <div className="flex flex-col gap-4 py-3 text-center w-full lg:w-1/4 xl:w-2/4">
        {chars.map((item, idx) => (
          <motion.h3
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="border-b border-b-[#DDDDDD] px-5 w-full flex justify-center lg:justify-start gap-2 py-3"
          >
            <img className="w-8 h-8" src={iconCheck(item.icon)} alt={item.id} />
            <span className="text-sm md:text-base font-bold">{item.text}</span>
          </motion.h3>
        ))}
      </div>

      {/* Static Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full lg:w-3/4 xl:w-2/4 flex flex-col md:flex-row gap-8 items-center justify-around mt-4 md:mt-0"
      >
        <img
          className="border border-white rounded-3xl w-full md:w-70 h-82 transform transition-transform duration-500 hover:scale-105"
          src={selected.image}
          alt={data.title}
        />
        <div className="text-center md:text-left">
          <h3 className="font-bold mt-2 text-[#f1582b] ">{data.title}</h3>
          <p className="mb-2 mt-5 break-words text-start  text-sm  hyphens-auto">{data.des}</p>

        </div>
      </motion.div>
    </div>
  );
};

export default HighIndexComponent;
