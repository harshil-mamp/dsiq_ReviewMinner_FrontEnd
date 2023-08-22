import React, { useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
const ArrayDropdown = ({ data, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <div>
      {/* <div className="example-config">
        Selected Value: {JSON.stringify(value)}
      </div> */}
      <div>State:</div>
      <DropDownList
        style={{
          width: "300px",
        }}
        data={data}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ArrayDropdown;
