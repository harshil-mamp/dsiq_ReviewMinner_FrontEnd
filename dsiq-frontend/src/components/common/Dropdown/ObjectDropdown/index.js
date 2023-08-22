import React, { useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const ObjectDropdown = ({ data, initialValue, onChange }) => {
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
      <div>Select value:</div>
      <DropDownList
        data={data}
        textField="text"
        dataItemKey="id"
        value={value}
        onChange={handleChange}
        style={{
          width: "300px",
        }}
      />
    </div>
  );
};

export default ObjectDropdown;
