import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import image17 from "../assets/nick-night-6ckbKRjydSw-unsplash.png";
import image18 from "../assets/SVGRepo_iconCarrier_1.png";
import image19 from "../assets/SVGRepo_iconCarrier_2.png";
import image20 from "../assets/SVGRepo_iconCarrier_3.png";
import image24 from "../assets/SVGRepo_iconCarrier_4.png";
import image25 from "../assets/SVGRepo_iconCarrier_5.png";
import image26 from "../assets/SVGRepo_iconCarrier_6.png";
// 🔸 simple re‑usable fade‑up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WhyChooseUs(props) {
  const [data, setData] = useState(props.data.cards)
  const imageCheck = (img) => {
    if (img == "image18") {
      return image18;
    } else if (img == "image19") {
      return image19;
    } else if (img == "image20") {
      return image20;
    } else if (img == "image24") {
      return image24;
    }else if (img == "image25") {
      return image25;
    }else if (img == "image26") {
      return image26;
    }
  }
    return (
      <section>
        <motion.div
          className="text-center my-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-2xl lg:text-4xl">Why Choose Us</h1>
        </motion.div>
        <motion.div
          className="w-4/5 mx-auto mt-16"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}

            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },

            }}
            className="p-4"
          >
            {/* slide helper to avoid repetition */}
            {data.map(({ img, title, text }, i) => (
              <SwiperSlide key={i}>
                {/* card with hover pop */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="bg-[#FCE8DF] p-4 rounded-2xl pb-7 px-1 h-[330px] flex flex-col items-center shadow-md"
                >
                  <div className="mt-3 w-1/2  flex items-center justify-center">
                    <img src={imageCheck(img)} alt="" className="h-20" />
                  </div>
                  <h2 className="text-center mt-8 font-bold">{title}</h2>
                  <p className="mx-auto px-2 text-center mt-5 text-sm ">{text}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    );
  }
