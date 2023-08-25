import React, { useState } from "react";
import Sidebar from "../Global/Sidebar";
// import Navbars from "../Global/Navbars/index";
import WordCloud from "../Global/WordCloud";
import TreeChart from "../Global/D3Tree/Tree";
import Alert from "../common/Alert";
import Searchbar from "../common/Searchbar";
import ObjectDropdown from "../common/Dropdown/ObjectDropdown";
import ArrayDropdown from "../common/Dropdown/ArrayDropdown";
import DropInSearch from "../common/Dropdown/DropInSearch";
import DropWithSearch from "../common/Dropdown/DropWithSearch";
import MultiSelectFilter from "../common/Dropdown/MultiSelectFilter";
import TreeDropdown from "../common/Dropdown/TreeDropdown";
import TreeMultiSelect from "../common/Dropdown/TreeMultiSelect";
import PrimaryBtn from "../common/Buttons/PrimaryBtn";
import OutlineBtn from "../common/Buttons/OutlineBtn";

import { countries } from "../../data/countries";
import states from "../../data/states";
import statesArray from "../../data/statesArray";
import { treeData } from "../../data/tree-data";
// const statesNamesArray = states.map((state) => state.text);

import "./index.css";

const Home = () => {
  const [topics, setTopics] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedWordData, setSelectedWordData] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleAlertClose = () => {
    setSuccess(false);
  };

  const handleDropdownChange = (newValue) => {
    // Handle the dropdown value change here
    console.log("Selected value:", newValue);
  };

  const onSelectWord = (event, topic) => {
    if (event.ctrlKey) {
      if (selectedWordData.find((t) => t.id === topic.id)) {
        setSelectedWordData(selectedWordData.filter((t) => t.id !== topic.id));
      } else {
        setSelectedWordData([...selectedWordData, topic]);
      }
    } else {
      setSelectedWordData([topic]);
    }
  };

  React.useEffect(() => {
    fetch("topics.json") // Make sure the path is correct, it should be relative to the public directory
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.topics)) {
          setTopics(data.topics);
          setIsFetching(false);
        } else {
          setError("Invalid JSON structure");
          setIsFetching(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="d-flex">
      {/* <div style={{ width: "5em", zIndex: 1 }}>
        <Sidebar />
      </div> */}
      <div className="w-100">
        {/* <Navbars /> */}
        <div className="home-wrapper mx-auto p-3 shadow-container my-3">
          <h1 className="mx-auto my-5 text-center">Home</h1>
          <div className="mx-auto d-flex flex-column align-items-center justify-content-center">
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={() => setSuccess(true)}
            >
              Save data
            </button>
            <Alert
              type="info"
              position="topRight"
              success={success}
              onClose={handleAlertClose}
            />
            <hr />
            <Searchbar searchData={countries} searchLabel={"Enter Country"} />
            <hr />
            <ObjectDropdown
              data={states}
              initialValue={states[0]}
              onChange={handleDropdownChange}
            />
            <hr />
            <ArrayDropdown
              data={statesArray}
              initialValue={statesArray[0]}
              onChange={handleDropdownChange}
            />
            <hr />
            <DropInSearch searchData={states} />
            <hr />
            <DropWithSearch searchData={states} suggest={true} />
            <hr />
            <MultiSelectFilter searchData={statesArray} />
            <hr />
            <TreeDropdown searchData={treeData} />
            <hr />
            <TreeMultiSelect searchData={treeData} />
            <hr />
            <div className="d-flex">
              <div className="mx-2">
                <PrimaryBtn icon={"fa fa-check fa-solid"} text={"submit"} />
              </div>
              <div className="mx-2">
                <OutlineBtn icon={"fa fa-xmark fa-solid"} text={"cancel"} />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="my-3 mx-2">
            {isFetching ? (
              <span>Fetching topics...</span>
            ) : error ? (
              <span>Error: {error.toString()}</span> // Render the error message as a string
            ) : (
              <WordCloud
                topics={topics}
                selectedWordData={selectedWordData}
                setSelectedWordData={setSelectedWordData}
                onSelectWord={onSelectWord}
              />
            )}
          </div>
          <div className="my-3 mx-2">
            <h1 className="text-center">Tree Graph</h1>
            <TreeChart selectedWordData={selectedWordData} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
