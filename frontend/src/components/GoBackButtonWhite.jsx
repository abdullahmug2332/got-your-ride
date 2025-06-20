import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const GoBackButtonWhite = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleNavigate}>
      <GoArrowLeft className="text-3xl text-white absolute left-20 top-8 hover:text-[#f1582b]" />
    </button>
  );
};

export default GoBackButtonWhite;
