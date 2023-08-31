import React from "react";
import { Checkbox } from "@progress/kendo-react-inputs";

const CheckboxBtn = ({ label, defaultChecked, value, onChange }) => {
  return (
    <div>
      <Checkbox
        value={value}
        label={label}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckboxBtn;
