import React from "react";
import Hero from "../components/Hero";
import image1 from "../assets/fuji-mountain-1.png";
import image2 from "../assets/alex-knight-Ys-DBJeX0nE-unsplash.png";
import image3 from "../assets/curren-podlesny-V7MplrFOU4E-unsplash.png";
import Popup from "../components/Popup";
// import Footer from "../components/Footer";
const slides = [image1, image2, image3];

const Home = () => {
  return (
    <div className="max-w-screen">
      <Hero />
        {/* {/* {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index}`} />
        ))} 
      </Hero> */}
      <Popup />
    </div>
  );
};

export default Home;
