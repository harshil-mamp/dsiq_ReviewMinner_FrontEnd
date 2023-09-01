import React, { useState } from "react";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const DropWithSearch = ({ searchData, suggest, onChange }) => {
  const [data, setData] = useState(searchData.slice());
  const filterData = (filter) => {
    const data = searchData.slice();
    return filterBy(data, filter);
  };
  const filterChange = (event) => {
    setData(filterData(event.filter));
  };

  const handleSelect = (event) => {
    if (onChange && event.value) {
      onChange(event.value);
    }
  };
  return (
    <div>
      <div>Select value:</div>
      <ComboBox
        data={data}
        textField="text"
        filterable={true}
        suggest={suggest}
        onFilterChange={filterChange}
        placeholder="Please select ..."
        style={{
          width: "300px",
        }}
        onChange={handleSelect}
      />
    </div>
  );
};
export default DropWithSearch;
