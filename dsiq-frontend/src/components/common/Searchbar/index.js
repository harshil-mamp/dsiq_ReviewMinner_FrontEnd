import React, { useState, useEffect } from "react";
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const delay = 500;
const Searchbar = ({ searchData, searchLabel }) => {
  const [data, setData] = useState(searchData);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const timeout = React.useRef();

  useEffect(() => {
    setData(searchData);
  }, [searchData]);

  const onChange = (event) => {
    const value = event.target.value;
    const filterData = (value) => {
      const data = searchData;
      const filter = {
        value: value,
        operator: "startswith",
        ignoreCase: true,
      };
      return filterBy(data, filter);
    };
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setData(filterData(value));
      setLoading(false);
    }, delay);
    setValue(value);
    setLoading(true);
  };
  return (
    <div className="kendoui-searchbar position-relative">
      <div>{searchLabel && searchLabel}</div>
      <i
        style={{ fontSize: "20px", zIndex: 1, bottom: "4px", left: "8px" }}
        className="position-absolute fa-solid fa-magnifying-glass"
      ></i>
      <AutoComplete
        suggest={true}
        data={data}
        value={value}
        onChange={onChange}
        loading={loading}
        placeholder="Search here..."
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default Searchbar;
