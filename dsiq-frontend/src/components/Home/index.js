import React, { useState } from "react";
import Sidebar from "../Global/Sidebar";
import Navbars from "../Global/Navbars/index";
import WordCloud from "../Global/WordCloud";
import TreeChart from "../Global/D3Tree/Tree";

const Home = () => {
  const [topics, setTopics] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedWordData, setSelectedWordData] = useState([]);
  console.log("*", selectedWordData);

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
        </div>
      </div>
    </div>
  );
};

export default Home;
