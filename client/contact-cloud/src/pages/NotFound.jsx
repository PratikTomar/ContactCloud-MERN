import React from "react";
import { TbError404 } from "react-icons/tb";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        {" "}
        <TbError404 size={150} />
        <h1 className="not-found-heading">Page not found</h1>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
