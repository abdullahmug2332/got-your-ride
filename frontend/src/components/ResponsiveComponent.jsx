/* ResponsiveComponent.jsx */

import React, { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import image1 from "../assets/unsplash.png";
import i6 from "../assets/Group-286.png";
import i10 from "../assets/solution-bulb-concept-svgrepo-com-1.png";

const bulletPoints = [
  "Free cancellation: Cancel up to 24 hours in advance for a full refund",
  "Hand‑picked premium accommodations that guarantee comfort and relaxation.",
  "Dedicated 24/7 support team ready to assist you at any moment.",
];

const ResponsiveComponent = (props) => {
  const [data, setData] = useState(props.data)
  const imagecheck=(img)=>{
    if(img=="i6"){
      return i6;
    }else if(img == "i10"){
      return i10;
    }
  }
  return (
    <motion.section
      className="flex flex-col xl:flex-row items-center w-4/5 mx-auto my-14"
      /* --- scroll‑into‑view for whole section --- */
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ---------- Left / Image ---------- */}
      <motion.div
        className="w-full xl:w-[350px] relative mb-6 xl:mb-0 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        {/* image zoom */}
        <motion.img
          src={image1}
          alt="Travel"
          className="w-full xl:w-[350px] h-[530px] rounded-4xl object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
        />

        {/* experience badge */}
        <motion.div
          className="absolute inset-0 w-28 h-28 bg-[#F1582B] rounded-2xl text-center text-white top-[400px] left-[220px] pointer-events-none"
          whileHover={{ rotate: 3 }}
          transition={{ type: "spring", stiffness: 260 }}
        >
          <p className="mt-6 font-bold text-4xl">{data.experience}</p>
          <p className="text-[8px] mt-3">{data.expText}</p>
        </motion.div>
      </motion.div>

      {/* ---------- Right / Text ---------- */}
      <motion.div
        className="w-full xl:flex-1 px-4 xl:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="xl:ml-14">
          <p className="text-[#F1582B]">Let’s Explore the World</p>
          <h1 className="font-bold text-2xl lg:text-4xl">
            {data.title}
          </h1>

          <p className="mt-5 leading-[32px]">
            {data.des}
          </p>

          {/* feature cards */}
          <div className="flex flex-wrap gap-5 my-8">
            {
              data.cards.map((card, index) => {
                return (
                  <motion.h3
                    className="w-full sm:w-1/2 xl:w-80 font-semibold flex gap-2 py-3"
                    whileHover={{ scale: 1.05 }}
                    key={index}
                  >
                    <img src={imagecheck(card.icon)} alt="icon" className="w-12 h-12 -mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: card.text }} />
                  </motion.h3>


                )
              })
            }
          </div>

          {/* bullet list – stagger in */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {data.bulletPoints.map((bp, i) => (
              <motion.li
                key={i}
                className={`flex mt-${i === 0 ? 0 : 2}`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
              >
                <BiChevronsRight className="mt-[2px]" />
                {bp}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ResponsiveComponent;
