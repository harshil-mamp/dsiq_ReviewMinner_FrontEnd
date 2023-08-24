import React from "react";
import { DropDownButton } from "@progress/kendo-react-buttons";

const IconWithTextDropdown = ({ title, data, icon }) => {
  return (
    <div>
      <DropDownButton
        className="buttons-container-button"
        items={data}
        iconClass={icon}
        text={title}
      />
    </div>
  );
};

export default IconWithTextDropdown;
