import React from "react";
import { FaStar } from "react-icons/fa";

const AddRating = ({ rating, onChange }) => {
  const [hover, setHover] = React.useState(null); // Tracks the star being hovered

  const handleMouseEnter = (index) => {
    setHover(index); // Set the index of the star being hovered
  };

  const handleMouseLeave = () => {
    setHover(null); // Reset when the mouse leaves the stars
  };

  const handleClick = (index) => {
    onChange(index + 1); // Set the rating when a star is clicked
  };

  return (
    <div className="flex gap-2 w-full mx-auto">
      <p className="w-2/5">Add Rating</p>
      <div className="text-gray-400 w-2/5">
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, index) => {
            // Check if the current index is less than the rating or hover value
            const isFilled = hover !== null ? index <= hover : index < rating;
            return (
              <FaStar
                key={index}
                className={`w-[20px] cursor-pointer transition-colors duration-200 ${
                  isFilled ? "text-yellow-500" : "text-gray-400"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddRating;
