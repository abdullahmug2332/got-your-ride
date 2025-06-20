import React from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  return (
    <div className="flex text-amber-400 bg-white items-center px-2 rounded-2xl">
      <FaStar className="w-[10px]" />
      <FaStar className="w-[10px]" />
      <FaStar className="w-[10px]" />
      <FaStar className="w-[10px]" />
      <FaStar className="w-[10px]" />
    </div>
  );
};

export default Star;
