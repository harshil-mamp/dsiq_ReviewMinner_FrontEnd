import React from "react";
import { Switch } from "@progress/kendo-react-inputs";

const ToggleSwitch = ({ on, off }) => {
  return (
    <div>
      <Switch onLabel={on ? on : ""} offLabel={off ? off : ""} />
    </div>
  );
};

export default ToggleSwitch;
