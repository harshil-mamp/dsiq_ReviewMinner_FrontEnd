import React, { useState } from "react";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
const MultiSelectFilter = ({ searchData, suggest }) => {
  const [data, setData] = useState(searchData.slice());
  const filterChange = (event) => {
    setData(filterBy(searchData.slice(), event.filter));
  };
  return (
    <div>
      <div>Select country:</div>
      <MultiSelect
        data={data}
        filterable={true}
        onFilterChange={filterChange}
        style={{
          width: "300px",
        }}
        placeholder="e.g. Austria"
      />
    </div>
  );
};

export default MultiSelectFilter;
