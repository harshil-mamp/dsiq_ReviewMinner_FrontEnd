import React, { useState } from "react";
import Sidebar from "../Global/Sidebar";
import Navbars from "../Global/Navbars/index";
import WordCloud from "../Global/WordCloud";
import TreeChart from "../Global/D3Tree/Tree";

const Home = () => {
  const [topics, setTopics] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [error, setError] = React.useState(null);

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
      <div style={{ width: "5em", zIndex: 1 }}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Navbars />
        <h1 className="mx-auto my-5 text-center">Home</h1>
        <div>
          <div className="my-3 mx-2">
            {isFetching ? (
              <span>Fetching topics...</span>
            ) : error ? (
              <span>Error: {error.toString()}</span>
            ) : (
              <WordCloud topics={topics} />
            )}
          </div>
          <div className="my-3 mx-2">
            <h1 className="text-center">Tree Graph</h1>
            <TreeChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
