import React, { useState } from "react";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const DropWithSearch = ({ searchData, suggest }) => {
  const [data, setData] = useState(searchData.slice());
  const filterData = (filter) => {
    const data = searchData.slice();
    return filterBy(data, filter);
  };
  const filterChange = (event) => {
    setData(filterData(event.filter));
  };
  return (
    <div>
      <div>Select value:</div>
      <ComboBox
        data={data}
        textField="text"
        filterable={true}
        suggest
        onFilterChange={filterChange}
        placeholder="Please select ..."
        style={{
          width: "300px",
        }}
      />
    </div>
  );
};
export default DropWithSearch;
