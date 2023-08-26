import React from "react";
import "./index.css";

const Heading = ({ image, heading }) => {
  return (
    <div className="image-bg position-relative">
      <img className="w-100 h-100" src={image} alt="Background Image" />
      <h1 className="font-white font-xxl font-weight-800 letter-spacing-3">
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
