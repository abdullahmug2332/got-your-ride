import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleNavigate}>
      <GoArrowLeft className="text-3xl absolute left-2 lg:left-20 top-24 lg:top-38 hover:text-[#f1582b]" />
    </button>
  );
};

export default GoBackButton;
