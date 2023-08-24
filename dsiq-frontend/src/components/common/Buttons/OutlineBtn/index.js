import React from "react";
import { Button } from "@progress/kendo-react-buttons";

const OutlineBtn = ({ text, disable, icon }) => {
  return (
    <div className="outline-btn">
      <Button disabled={disable ? disable : false} iconClass={icon}>
        {text}
      </Button>
    </div>
  );
};

export default OutlineBtn;
