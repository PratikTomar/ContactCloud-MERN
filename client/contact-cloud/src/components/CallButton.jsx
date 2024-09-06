import React from "react";
import { MdCall } from "react-icons/md";

const CallButton = ({ number, size }) => {
  return (
    <a href={`tel:${number}`}>
      <button className="card-button" aria-label={`Call ${number}`}>
        <MdCall size={size} />
      </button>
    </a>
  );
};

export default CallButton;
