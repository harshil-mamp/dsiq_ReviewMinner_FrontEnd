import React from "react";
import { Loader } from "@progress/kendo-react-indicators";

const Spinner = () => {
  return (
    <div className="div-center-wrap">
      <div className="div-center">
        <Loader type="infinite-spinner" size="medium" themeColor={"#2A3741"} />
      </div>
    </div>
  );
};

export default Spinner;
