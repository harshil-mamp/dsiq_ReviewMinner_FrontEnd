import React, { useState, useEffect } from "react";
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

const delay = 500;
const Searchbar = ({ searchData }) => {
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
    <div>
      <div>Enter country:</div>
      <AutoComplete
        data={data}
        value={value}
        onChange={onChange}
        loading={loading}
        placeholder="Search here..."
        style={{
          width: "300px",
        }}
      />
    </div>
  );
};

export default Searchbar;
