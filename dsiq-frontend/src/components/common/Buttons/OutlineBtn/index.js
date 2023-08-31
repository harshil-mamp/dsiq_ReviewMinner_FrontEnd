import React from "react";
import { Button } from "@progress/kendo-react-buttons";

const OutlineBtn = ({ text, disable, icon, fontWeight, onClick }) => {
  return (
    <div className="outline-btn">
      <Button
        style={{ fontWeight: fontWeight }}
        disabled={disable ? disable : false}
        iconClass={icon}
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
};

export default OutlineBtn;
