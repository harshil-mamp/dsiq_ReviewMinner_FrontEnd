import React, { useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const DropInSearch = ({ searchData }) => {
  const [data, setData] = useState(searchData.slice());
  const filterData = (filter) => {
    const filteredData = searchData.slice();
    return filterBy(filteredData, filter);
  };
  const filterChange = (event) => {
    setData(filterData(event.filter));
  };
  return (
    <div>
      <div>Search & Enter State:</div>
      <DropDownList
        data={data}
        textField="text"
        filterable={true}
        onFilterChange={filterChange}
        adaptive={true}
        adaptiveTitle={"Choose size"}
        style={{
          width: "300px",
        }}
      />
    </div>
  );
};
export default DropInSearch;
