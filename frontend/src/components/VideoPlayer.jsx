import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa"; // Play icon for the button

export default function VideoPlayer({ image, video, css = "" }) {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // State to control play/pause

  /* lock scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying); // Toggle play/pause on click
  };

  return (
    <div className={`relative ${css}`}>
      <motion.div
        src={image}
        alt="thumbnail"
        className="mx-auto w-4/5 lg:max-w-5xl rounded-2xl relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Thumbnail image */}
        <img
          src={image}
          alt="thumbnail"
          className={`w-full h-full inset-0 absolute ${isPlaying ? "-z-10" : "z-10"} object-cover `}

        />

        {/* Pulse play button */}
        {!isPlaying && (
          <button
            onClick={handleVideoClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-white  rounded-full text-5xl border-none cursor-pointer z-10 "
          >
            <FaPlay className="text-orange-700"/>
          </button>
        )}

        {/* Video player */}
        <ReactPlayer
          url={video}
          playing={isPlaying} // Play or pause based on state
          muted={true} // Video is muted
          loop
          autoPlay={false} // Don't autoplay initially
          playsInline={true} // For iOS compatibility
          width="100%"
          height="100%"
          onClick={handleVideoClick} // Toggle play/pause on click
        />
      </motion.div>
    </div>
  );
}
