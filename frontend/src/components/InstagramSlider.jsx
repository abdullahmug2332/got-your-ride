import { Swiper, SwiperSlide } from "swiper/react";
import { TiCameraOutline } from "react-icons/ti";
import i6 from "../assets/about-card-1.png";
import i7 from "../assets/about-card-2.png";
import i8 from "../assets/about-card-3.png";
import i9 from "../assets/about-card-4.png";
const InstagramSlider = () => {
  // Array of image data
  const images = [
    { src: i6, alt: "Instagram Post 1" },
    { src: i7, alt: "Instagram Post 2" },
    { src: i8, alt: "Instagram Post 3" },
    { src: i9, alt: "Instagram Post 4" },
    { src: i6, alt: "Instagram Post 5" },
    { src: i7, alt: "Instagram Post 6" }
  ];

  return (
    <div className="w-4/5 mx-auto my-14 ">
      <h1 className="text-xl font-bold mb-6">Recently Posts on Instagram</h1>
      <Swiper
        spaceBetween={12} // Space between slides
        slidesPerView={1} // Default: 1 slide visible on mobile
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides visible on small screens
          },
          768: {
            slidesPerView: 3, // 3 slides visible on medium screens
          },
          1024: {
            slidesPerView: 4, // 4 slides visible on large screens
          },
        }}
        pagination={{ clickable: true }} // Enable pagination (dots)
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="group relative">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <div className="bg-[#f1582b]/20 group-hover:block hidden transition-all duration-300 rounded-md absolute top-0 left-0 w-full h-full">
              <TiCameraOutline className="text-9xl mx-auto text-[#f1582b] mt-[23%]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramSlider;
