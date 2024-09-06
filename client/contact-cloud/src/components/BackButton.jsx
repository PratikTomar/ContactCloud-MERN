import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div>
      {" "}
      <button className="back-button" onClick={handleGoBack}>
        <IoArrowBackSharp /> Back
      </button>
    </div>
  );
};

export default BackButton;
