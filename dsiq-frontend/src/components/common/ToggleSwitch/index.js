import React from "react";
import { Switch } from "@progress/kendo-react-inputs";

const ToggleSwitch = ({ on, off, checked, onChange }) => {
  return (
    <div>
      <Switch
        onChange={onChange}
        checked={checked}
        onLabel={on ? on : ""}
        offLabel={off ? off : ""}
      />
    </div>
  );
};

export default ToggleSwitch;
