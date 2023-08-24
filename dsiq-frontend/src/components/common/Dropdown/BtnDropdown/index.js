import React from "react";
import { DropDownButton } from "@progress/kendo-react-buttons";

const BtnDropdown = ({ title, data }) => {
  return (
    <div>
      <DropDownButton
        className="buttons-container-button"
        items={data}
        text={title}
      />
    </div>
  );
};

export default BtnDropdown;
