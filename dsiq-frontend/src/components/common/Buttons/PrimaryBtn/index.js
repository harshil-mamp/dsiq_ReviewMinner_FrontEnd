import React from "react";
import { Button } from "@progress/kendo-react-buttons";

const PrimaryBtn = ({ text, disable, icon }) => {
  return (
    <div className="primary-btn">
      <Button disabled={disable ? disable : false} iconClass={icon}>
        {text}
      </Button>
    </div>
  );
};

export default PrimaryBtn;
